<?php namespace App\Http\Controllers;

use App\Article;
use App\User;
use Auth;
use Cache;
use Artisan;
use Common\Auth\Roles\Role;
use Common\Settings\Setting;
use DB;
use Exception;
use Common\Settings\DotEnvEditor;
use Common\Core\Controller;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\View\View;
use Schema;

class UpdateController extends Controller
{
    /**
     * @var DotEnvEditor
     */
    private $dotEnvEditor;

    /**
     * @var Setting
     */
    private $setting;

    /**
     * @param DotEnvEditor $dotEnvEditor
     * @param Setting $setting
     */
    public function __construct(DotEnvEditor $dotEnvEditor, Setting $setting)
    {
        $this->dotEnvEditor = $dotEnvEditor;
        $this->setting = $setting;

        if ( ! config('common.site.disable_update_auth') && version_compare(config('common.site.version'), $this->getAppVersion()) === 0) {
            $this->middleware('isAdmin');
        }
    }

    /**
     * Show update view.
     *
     * @return View
     */
    public function show()
    {
        return view('update');
    }

    /**
     * Update the application.
     */
    public function update()
    {
        Schema::defaultStringLength(191);

        Artisan::call('migrate', ['--force' => true]);
        Artisan::call('db:seed', ['--force' => true]);
        Artisan::call('common:seed');

        if (version_compare(config('common.site.version'), '1.2.0') === -1) {
            //move translations from database to filesystem
            Artisan::call('translations:migrate_from_database');
            Artisan::call('custom_code:migrate_from_database');

            //move custom code from database to filesystem
            Artisan::call('custom_code:migrate_from_database');

            // update date format
            $this->setting->where('name', 'dates.format')->update(['value' => 'yyyy-MM-dd']);

            // rename "uploads" permission to "files"
            Role::orderBy('id')->chunk(50, function(Collection $roles) {
                $roles->each(function(Role $role) {
                    $oldPermissions = json_encode($role->permissions);
                    $newPermissions = str_replace('uploads', 'files', $oldPermissions);
                    $role->permissions = $newPermissions;
                    $role->save();
                });
            });

            // versions earlier then  1.2.0 were using symlinks by default
            $this->dotEnvEditor->write(['USE_SYMLINKS' => true]);
            Artisan::call('storage:link');

            // rename "superAdmin" permission to "admin"
            User::orderBy('id')->chunk(50, function(Collection $users) {
                $users->each(function(User $user) {
                    $oldPermissions = json_encode($user->permissions);
                    $newPermissions = str_replace('superAdmin', 'admin', $oldPermissions);
                    $user->permissions = $newPermissions;
                    $user->save();
                });
            });
        }

        if (version_compare(config('common.site.version'), '1.2.3') === -1) {
            // add ID to all headings in bodies of all articles
            app(Article::class)->orderBy('id')->chunk(50, function(Collection $articles) {
                $articles->each(function(Article $article) {
                    // this will trigger article body setter and add IDs automatically
                    $article->body = $article->body;
                    $article->save();
                });
            });

            // remove site name from db settings as APP_NAME from .env will be used now
            app(Setting::class)->where('name', 'branding.site_name')->delete();

            // remove "ticket: is" condition
            DB::table('conditions')->where('name', 'Ticket: Is')->delete();

            // convert empty user permissions to "null"
            DB::table('users')->where('permissions', '[]')->update(['permissions' => null]);

            // delete old search terms
            DB::table('search_terms')->truncate();
        }

        $version = $this->getAppVersion();

        $this->dotEnvEditor->write(['app_version' => $version]);

        Cache::flush();

        return redirect('/');
    }

    /**
     * Get new app version.
     *
     * @return string
     */
    private function getAppVersion()
    {
        try {
            return $this->dotEnvEditor->load(base_path('.env.example'))['app_version'];
        } catch (Exception $e) {
            return '1.2.5';
        }
    }
}

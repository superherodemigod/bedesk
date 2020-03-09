<?php

namespace App\Console;

use App\Console\Commands\DeleteLooseUploads;
use App\Console\Commands\LimitSearchTermTableRowCount;
use App\Console\Commands\MigrateDatabaseCustomCode;
use App\Console\Commands\MigrateDatabaseTranslations;
use App\Console\Commands\RefreshDemoSite;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        Commands\RefreshDemoSite::class,
        Commands\CreateElasticIndex::class,
        Commands\ExportTranslations::class,
        Commands\LimitSearchTermTableRowCount::class,
        Commands\DeleteLooseUploads::class,
        MigrateDatabaseCustomCode::class,
        MigrateDatabaseTranslations::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param Schedule $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->command(DeleteLooseUploads::class)->daily();
        $schedule->command(LimitSearchTermTableRowCount::class)->daily();

        if (config('common.site.demo')) {
            $schedule->command(RefreshDemoSite::class)->daily();
        }
    }
}

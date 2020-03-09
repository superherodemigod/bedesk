<?php namespace App\Providers;

use App\CannedReply;
use App\Policies\TicketFileEntryPolicy;
use App\Tag;
use App\Reply;
use App\Action;
use App\Ticket;
use App\Trigger;
use App\Article;
use App\Category;
use App\Condition;
use Common\Files\FileEntry;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model'         => 'App\Policies\ModelPolicy',
        'ReportPolicy'      => \App\Policies\ReportPolicy::class,
        Ticket::class       => \App\Policies\TicketPolicy::class,
        Reply::class        => \App\Policies\ReplyPolicy::class,
        CannedReply::class  => \App\Policies\CannedReplyPolicy::class,
        Category::class     => \App\Policies\CategoryPolicy::class,
        Article::class      => \App\Policies\ArticlePolicy::class,
        Tag::class          => \App\Policies\TagPolicy::class,
        Condition::class    => \App\Policies\ConditionPolicy::class,
        Action::class       => \App\Policies\ActionPolicy::class,
        Trigger::class      => \App\Policies\TriggerPolicy::class,
        FileEntry::class    => TicketFileEntryPolicy::class,
    ];

    /**
     * Register any application authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
    }
}

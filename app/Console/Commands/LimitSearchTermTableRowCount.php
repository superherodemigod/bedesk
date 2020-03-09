<?php

namespace App\Console\Commands;

use App\SearchTerm;
use Illuminate\Console\Command;

class LimitSearchTermTableRowCount extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'searchTerms:limit';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Limit the number of rows in search terms table to 1000.';

    /**
     * @var SearchTerm
     */
    protected $searchTerm;

    /**
     * Maximum search terms that should be stored.
     *
     * @var int
     */
    protected $maxRows = 1000000;

    /**
     * Create a new command instance.
     *
     * @param SearchTerm $searchTerm
     */
    public function __construct(SearchTerm $searchTerm)
    {
        parent::__construct();

        $this->searchTerm = $searchTerm;
    }

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        $count = $this->searchTerm->count();

        $difference = $count - $this->maxRows;

        if ($difference > 0) {
            $this->searchTerm->orderBy('created_at', 'asc')->limit($difference)->delete();
        }
    }
}

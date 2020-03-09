<?php namespace App\Http\Controllers;

use App\Services\Ticketing\HelpScoutImporter;
use Auth;
use Common\Core\Controller;

class TicketingActionsController extends Controller
{
    /**
     * @var HelpScoutImporter
     */
    private $helpScoutImporter;

    /**
     * @param HelpScoutImporter $helpScoutImporter
     */
    public function __construct(HelpScoutImporter $helpScoutImporter)
    {
        $this->helpScoutImporter = $helpScoutImporter;

        $this->middleware('isAdmin');
    }

    /**
     * Import all HelpScout conversations as tickets via their API.
     */
    public function importHelpScoutConversations()
    {
        $this->helpScoutImporter->importConversations();
    }
}

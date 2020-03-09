<?php namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\Reports\TicketsReport;
use App\Services\Reports\EnvatoReports;
use Common\Core\Controller;

class ReportsController extends Controller
{
    /**
     * EnvatoReports service instance.
     *
     * @var EnvatoReports
     */
    private $envato;

    /**
     * TicketReports service instance.
     *
     * @var TicketsReport
     */
    private $ticketReports;

    /**
     * Laravel request instance.
     *
     * @var Request
     */
    private $request;

    /**
     * ReportsController constructor.
     *
     * @param Request $request
     * @param EnvatoReports $envato
     * @param TicketsReport $ticketReports
     */
    public function __construct(Request $request, EnvatoReports $envato, TicketsReport $ticketReports)
    {
        $this->envato = $envato;
        $this->request = $request;
        $this->ticketReports = $ticketReports;
    }

    /**
     * Get envato earnings report.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function envatoEarnings()
    {
        $this->authorize('index', 'ReportPolicy');

        if ($this->request->get('yearly') == 'true') {
            $data = $this->envato->getYearlyEarnings($this->request->all());
        } else {
            $data = $this->envato->getMonthlyEarnings($this->request->all());
        }

        return $this->success(['data' => $data]);
    }

    public function generateTicketsReport()
    {
        $this->authorize('index', 'ReportPolicy');

        $data = $this->ticketReports->generateFull($this->request->all());
        return $this->success(['data' => $data]);
    }
}

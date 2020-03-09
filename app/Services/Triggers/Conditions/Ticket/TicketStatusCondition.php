<?php namespace App\Services\Triggers\Conditions\Ticket;

use App\Ticket;
use App\Services\Triggers\Conditions\AbstractCondition;

class TicketStatusCondition extends AbstractCondition {

    /**
     * Check if ticket subject condition should be met based on specified values.
     *
     * @param Ticket $updatedTicket
     * @param array|null $originalTicket
     * @param string $operatorName
     * @param mixed $conditionValue
     *
     * @return bool
     */
    public function isMet(Ticket $updatedTicket, $originalTicket, $operatorName, $conditionValue)
    {
        if ( ! $updatedTicket->status) return false;

        return $this->comparator->compare($updatedTicket->status, $conditionValue, $operatorName);
    }
}
<?php namespace App\Services\Triggers\Conditions;

class PrimitiveValuesComparator {

    /**
     * Compare string haystack and needle using specified operator.
     *
     * @param mixed $haystack
     * @param mixed $needle
     * @param string $operator
     *
     * @return bool
     */
    public function compare($haystack, $needle, $operator)
    {
        switch ($operator) {
            case 'contains':
                return str_contains($haystack, $needle);
            case 'not_contains':
                return ! str_contains($haystack, $needle);
            case 'starts_with':
                return starts_with($haystack, $needle);
            case 'ends_with':
                return ends_with($haystack, $needle);
            case 'equals':
            case 'is':
                return $haystack === $needle;
            case 'not_equals':
            case 'not':
                return $haystack !== $needle;
            case 'more':
                return $haystack > $needle;
            case 'less':
                return $haystack < $needle;
            case 'matches_regex':
                return (bool) preg_match("/$needle/", $haystack);
            default:
                return false;
        }
    }
}
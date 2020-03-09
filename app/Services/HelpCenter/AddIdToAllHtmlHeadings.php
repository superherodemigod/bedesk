<?php

namespace App\Services\HelpCenter;

class AddIdToAllHtmlHeadings
{
    public function execute($html)
    {
        return preg_replace_callback( '/(\<h[1-6](.*?))\>(.*)(<\/h[1-6]>)/i', function($matches) {
            if ( ! stripos($matches[0], 'id=')) {
                $matches[0] = $matches[1] . $matches[2] . ' id="' . str_slug(e($matches[3])) . '">' . $matches[3] . $matches[4];
            }
            return $matches[0];
        }, $html);
    }
}
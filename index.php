<?php

if ( ! file_exists(__DIR__.'/../.env') || (strpos(file_get_contents(__DIR__.'/../.env'), 'INSTALLED=false') !== false)) {
    header("Location: public");
    die();
} else {
    die('Could not find .htaccess file');
}
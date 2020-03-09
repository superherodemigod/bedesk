#!/usr/bin/php -q
<?php
/*********************************************************************
    pipe.php

    Converts piped emails to ticket. Just local - remote must use /api/tickets.email

    Peter Rotich <peter@osticket.com>
    Copyright (c)  2006-2013 osTicket
    http://www.osticket.com

    Released under the GNU General Public License WITHOUT ANY WARRANTY.
    See LICENSE.TXT for details.

    vim: expandtab sw=4 ts=4 sts=4:
**********************************************************************/
ini_set('memory_limit', '256M'); //The concern here is having enough mem for emails with attachments.
$content = '';
while($f = fgets(STDIN)){
    $content .= $f;
}


define('PATH_INSTALL', str_replace("\\", "/", dirname(__FILE__)));

$autoloadFile = PATH_INSTALL . '/bootstrap/autoload.php';
if (!file_exists($autoloadFile)) {
    throw new Exception('Unable to find autoloader: ~/bootstrap/autoload.php');
}
require $autoloadFile;

$appFile = PATH_INSTALL . '/bootstrap/app.php';
if (!file_exists($appFile)) {
    throw new Exception('Unable to find app loader: ~/bootstrap/app.php');
}
$app = require_once $appFile;
$kernel = $app->make('Illuminate\Contracts\Console\Kernel');
$kernel->bootstrap();

app(\App\Services\Mail\IncomingMailHandler::class)
    ->parseEmailIntoTicketOrReply($content, 'mime');
?>

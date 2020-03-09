<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as BaseVerifier;

class VerifyCsrfToken extends BaseVerifier
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
        'secure/auth/login',
        'secure/auth/register',
        'secure/auth/logout',
        'secure/broadcasting/auth',
        'secure/auth/password/email',
        'tickets/mail/incoming',
        'tickets/mail/failed',

        //TODO: temp. figure out why token mismatch error
        //is sometimes thrown when trying to create a new ticket
        'secure/tickets'
    ];
}

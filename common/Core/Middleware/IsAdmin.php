<?php

namespace Common\Core\Middleware;

use Auth;
use Closure;
use Illuminate\Http\Request;

class IsAdmin
{
    public function handle(Request $request, Closure $next)
    {
        if ( ! Auth::check() || ! Auth::user()->hasPermission('admin')) {
            abort(403);
        }

        return $next($request);
    }
}
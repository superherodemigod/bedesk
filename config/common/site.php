<?php

return [
    'version' => env('APP_VERSION'),
    'demo'    => env('IS_DEMO_SITE', false),
    'disable_update_auth' => env('DISABLE_UPDATE_AUTH', false),
    'use_symlinks' => env('USE_SYMLINKS', false),
    'contact_page_enabled' => env('CONTACT_PAGE_ENABLED', false),
    'extra_bootstrap_data' => \App\Services\AppBootstrapData::class,
    'user_model' => \App\User::class,
];
<?php

return [
    'roles' => [
        'users' => [
            'links.view' => 1,
            'links.create' => 1,
            'users.view'  => 1,
            'localizations.view' => 1,
            'pages.view' => 1,
            'files.create' => 1,
            'plans.view' => 1,
        ],
        'guests' => [
            'categories.view' => 1,
            'articles.view'   => 1,
            'tags.view'       => 1,
            'pages.view'      => 1,
        ]
    ],
    'all' => [
        'articles' => [
            'articles.view',
            'articles.create',
            'articles.update',
            'articles.delete',
        ],

        'categories' => [
            'categories.view',
            'categories.create',
            'categories.update',
            'categories.delete',
        ],

        // 'categories and articles assign' => [],

        'tickets' => [
            'tickets.view',
            'tickets.create',
            'tickets.update',
            'tickets.delete',
        ],

        'replies' => [
            'replies.view',
            'replies.create',
            'replies.update',
            'replies.delete',
        ],

        'canned_replies' => [
            'canned_replies.view',
            'canned_replies.create',
            'canned_replies.update',
            'canned_replies.delete',
        ],

        'tags' => [
            'tags.view',
            'tags.create',
            'tags.update',
            'tags.delete',
        ],

        'triggers' => [
            'triggers.view',
            'triggers.create',
            'triggers.update',
        ],

        'conditions' => [
            'conditions.view',
        ],

        'actions' => [
            'actions.view',
        ],
    ]
];

<?php

use App\Tag;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class TagTableSeeder extends Seeder
{
    public function run()
    {
        $now = Carbon::now();

        $statuses = [
            ['name' => 'open', 'type' => 'status', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'closed', 'type' => 'status', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'pending', 'type' => 'status', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'spam', 'type' => 'status', 'created_at' => $now, 'updated_at' => $now]
        ];

        foreach ($statuses as $tag) {
            if (is_null(Tag::where('name', $tag['name'])->first())) {
                Tag::create($tag);
            }
        }
    }
}

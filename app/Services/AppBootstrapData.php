<?php namespace App\Services;

class AppBootstrapData
{
    /**
     * Get data needed to bootstrap the application.
     *
     * @param $bootstrapData
     * @return array
     */
    public function get($bootstrapData)
    {
        $bootstrapData['tags'] = app(TagRepository::class)->getStatusAndCategoryTags();
        return $bootstrapData;
    }
}

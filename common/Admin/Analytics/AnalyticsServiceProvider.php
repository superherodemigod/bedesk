<?php

namespace Common\Admin\Analytics;

use Exception;
use Illuminate\Support\ServiceProvider;
use Common\Admin\Analytics\Actions\GetAnalyticsData;
use Common\Admin\Analytics\Actions\GetNullAnalyticsData;
use Common\Admin\Analytics\Actions\GetGoogleAnalyticsData;

class AnalyticsServiceProvider extends ServiceProvider
{
    /**
     * Register bindings in the container.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(GetAnalyticsData::class, function () {
            if (config('common.site.demo')) {
                return new GetDemoAnalyticsData();
            } else {
                return $this->getGoogleAnalyticsData();
            }
        });
    }

    /**
     * @return GetGoogleAnalyticsData|GetNullAnalyticsData
     */
    private function getGoogleAnalyticsData()
    {
        try {
            return $this->app->make(GetGoogleAnalyticsData::class);
        } catch (Exception $e) {
            // don't pollute logs with useless errors if
            // user did not set up google analytics yet
            if (str_contains($e->getMessage(), "Can't find the .p12 certificate")) {
                return new GetNullAnalyticsData();
            } else {
                throw($e);
            }
        }
    }
}
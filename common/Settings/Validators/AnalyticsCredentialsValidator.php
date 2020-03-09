<?php

namespace Common\Settings\Validators;

use Config;
use Exception;
use Google_Auth_Exception;
use Illuminate\Support\Arr;
use Google_Service_Exception;
use Common\Admin\Analytics\Actions\GetGoogleAnalyticsData;

class AnalyticsCredentialsValidator
{
    const KEYS = ['analytics_view_id', 'analytics_service_email', 'analytics.tracking_code', 'certificate'];

    public function fails($settings)
    {
        $this->setConfigDynamically($settings);

        try {
            app(GetGoogleAnalyticsData::class)->execute();
        } catch (Exception $e) {
            return $this->getErrorMessage($e);
        }
    }

    private function setConfigDynamically($settings)
    {
        if ($viewId = Arr::get($settings, 'analytics_view_id')) {
            Config::set('laravel-analytics.siteId', "ga:$viewId");
        }

        if ($serviceEmail = Arr::get($settings, 'analytics_service_email')) {
            Config::set('laravel-analytics.serviceEmail', $serviceEmail);
        }
    }

    /**
     * @param Exception $e
     * @return array
     */
    private function getErrorMessage($e)
    {
        if ($e instanceof Google_Service_Exception) {
            $message = Arr::get($e->getErrors(), '0.message');
        } else if (str_contains($e->getMessage(), "Can't find the .p12 certificate")) {
            return ['certificate' => 'Private key file is required and has not been uploaded yet.'];
        } else {
            $message = $e->getMessage();
        }

        return ['analytics_group' => 'Invalid credentials: ' . $message];
    }
}
<?php
declare(strict_types=1);

// GeoadminSearch SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class GeoadminSearchFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new GeoadminSearchBaseFeature();
            case "test":
                return new GeoadminSearchTestFeature();
            default:
                return new GeoadminSearchBaseFeature();
        }
    }
}

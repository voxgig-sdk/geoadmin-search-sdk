<?php
declare(strict_types=1);

// GeoadminSearch SDK exists test

require_once __DIR__ . '/../geoadminsearch_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = GeoadminSearchSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}

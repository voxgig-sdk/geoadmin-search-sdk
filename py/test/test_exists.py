# ProjectName SDK exists test

import pytest
from geoadminsearch_sdk import GeoadminSearchSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = GeoadminSearchSDK.test(None, None)
        assert testsdk is not None

# GeoadminSearch SDK feature factory

from geoadminsearch_sdk.feature.base_feature import GeoadminSearchBaseFeature
from geoadminsearch_sdk.feature.ratelimit_feature import GeoadminSearchRatelimitFeature
from geoadminsearch_sdk.feature.retry_feature import GeoadminSearchRetryFeature
from geoadminsearch_sdk.feature.test_feature import GeoadminSearchTestFeature
from geoadminsearch_sdk.feature.timeout_feature import GeoadminSearchTimeoutFeature


_FEATURES = {
    "base": lambda: GeoadminSearchBaseFeature(),
    "ratelimit": lambda: GeoadminSearchRatelimitFeature(),
    "retry": lambda: GeoadminSearchRetryFeature(),
    "test": lambda: GeoadminSearchTestFeature(),
    "timeout": lambda: GeoadminSearchTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES

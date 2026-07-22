# GeoadminSearch SDK feature factory

from feature.base_feature import GeoadminSearchBaseFeature
from feature.test_feature import GeoadminSearchTestFeature


def _make_feature(name):
    features = {
        "base": lambda: GeoadminSearchBaseFeature(),
        "test": lambda: GeoadminSearchTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()

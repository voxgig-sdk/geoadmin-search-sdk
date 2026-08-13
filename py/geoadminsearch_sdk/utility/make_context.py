# GeoadminSearch SDK utility: make_context

from geoadminsearch_sdk.core.context import GeoadminSearchContext


def make_context_util(ctxmap, basectx):
    return GeoadminSearchContext(ctxmap, basectx)

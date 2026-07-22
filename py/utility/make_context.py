# GeoadminSearch SDK utility: make_context

from core.context import GeoadminSearchContext


def make_context_util(ctxmap, basectx):
    return GeoadminSearchContext(ctxmap, basectx)

# GeoadminSearch SDK utility: make_context
require_relative '../core/context'
module GeoadminSearchUtilities
  MakeContext = ->(ctxmap, basectx) {
    GeoadminSearchContext.new(ctxmap, basectx)
  }
end

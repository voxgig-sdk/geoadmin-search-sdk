# GeoadminSearch SDK utility: prepare_body
require_relative 'media'
module GeoadminSearchUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return GeoadminSearchUtilities.raw_body(ctx.reqdata) if GeoadminSearchUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end

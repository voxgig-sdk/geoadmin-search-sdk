# GeoadminSearch SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module GeoadminSearchFeatures
  def self.make_feature(name)
    case name
    when "base"
      GeoadminSearchBaseFeature.new
    when "ratelimit"
      GeoadminSearchRatelimitFeature.new
    when "retry"
      GeoadminSearchRetryFeature.new
    when "test"
      GeoadminSearchTestFeature.new
    when "timeout"
      GeoadminSearchTimeoutFeature.new
    else
      GeoadminSearchBaseFeature.new
    end
  end
end

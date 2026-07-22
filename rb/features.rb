# GeoadminSearch SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module GeoadminSearchFeatures
  def self.make_feature(name)
    case name
    when "base"
      GeoadminSearchBaseFeature.new
    when "test"
      GeoadminSearchTestFeature.new
    else
      GeoadminSearchBaseFeature.new
    end
  end
end

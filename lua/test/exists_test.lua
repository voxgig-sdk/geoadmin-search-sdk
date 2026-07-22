-- GeoadminSearch SDK exists test

local sdk = require("geoadmin-search_sdk")

describe("GeoadminSearchSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)

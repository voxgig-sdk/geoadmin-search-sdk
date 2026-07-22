-- GeoadminSearch SDK error

local GeoadminSearchError = {}
GeoadminSearchError.__index = GeoadminSearchError


function GeoadminSearchError.new(code, msg, ctx)
  local self = setmetatable({}, GeoadminSearchError)
  self.is_sdk_error = true
  self.sdk = "GeoadminSearch"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function GeoadminSearchError:error()
  return self.msg
end


function GeoadminSearchError:__tostring()
  return self.msg
end


return GeoadminSearchError

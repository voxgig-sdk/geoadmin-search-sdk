package = "voxgig-sdk-geoadmin-search"
version = "0.0.1-1"
source = {
  -- git+https (GitHub dropped git:// in 2022); pin the install to the release
  -- tag pushed by `make publish`, and point at the lua/ subdir of the monorepo.
  url = "git+https://github.com/voxgig-sdk/geoadmin-search-sdk.git",
  tag = "lua/v0.0.1",
  dir = "geoadmin-search-sdk/lua"
}
description = {
  summary = "Unofficial generated Lua SDK for the GeoAdmin Search public API. Not affiliated with or endorsed by the upstream API provider.",
  homepage = "https://github.com/voxgig-sdk/geoadmin-search-sdk",
  issues_url = "https://github.com/voxgig-sdk/geoadmin-search-sdk/issues",
  license = "MIT",
  labels = { "voxgig", "sdk", "generated-sdk", "openapi", "api-client", "geoadmin-search" }
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["geoadmin-search_sdk"] = "geoadmin-search_sdk.lua",
    ["config"] = "config.lua",
    ["config_shared"] = "config_shared.lua",
    ["config_plugins"] = "config_plugins.lua",
    ["features"] = "features.lua",
    ["feature.base_feature"] = "feature/base_feature.lua",
    ["feature.test_feature"] = "feature/test_feature.lua",
  }
}

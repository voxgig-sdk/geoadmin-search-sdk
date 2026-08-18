-- GeoadminSearch SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "GeoadminSearch",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://api3.geo.admin.ch",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["search"] = {},
      },
    },
    entity = {
      ["search"] = {
        ["fields"] = {
          {
            ["name"] = "results",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "search",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "551306.5625,167918.328125,551754.125,168514.625",
                      ["kind"] = "query",
                      ["name"] = "bbox",
                      ["orig"] = "bbox",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "callback",
                      ["orig"] = "callback",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "ch.bafu.hydrologie-gewaesserzustandsmessstationen",
                      ["kind"] = "query",
                      ["name"] = "feature",
                      ["orig"] = "feature",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "geometry_format",
                      ["orig"] = "geometry_format",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "de",
                      ["kind"] = "query",
                      ["name"] = "lang",
                      ["orig"] = "lang",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 50,
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = "address,gazetteer",
                      ["kind"] = "query",
                      ["name"] = "origin",
                      ["orig"] = "origin",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = true,
                      ["kind"] = "query",
                      ["name"] = "return_geometry",
                      ["orig"] = "return_geometry",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = "wabern",
                      ["kind"] = "query",
                      ["name"] = "search_text",
                      ["orig"] = "search_text",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = true,
                      ["kind"] = "query",
                      ["name"] = "sortbbox",
                      ["orig"] = "sortbbox",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = "21781",
                      ["kind"] = "query",
                      ["name"] = "sr",
                      ["orig"] = "sr",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "locations",
                      ["kind"] = "query",
                      ["name"] = "type",
                      ["orig"] = "type",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/rest/services/ech/SearchServer",
                ["parts"] = {
                  "rest",
                  "services",
                  "ech",
                  "SearchServer",
                },
                ["select"] = {
                  ["exist"] = {
                    "bbox",
                    "callback",
                    "feature",
                    "geometry_format",
                    "lang",
                    "limit",
                    "origin",
                    "return_geometry",
                    "search_text",
                    "sortbbox",
                    "sr",
                    "type",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config

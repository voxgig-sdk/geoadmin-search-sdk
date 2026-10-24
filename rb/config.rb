# GeoadminSearch SDK configuration

module GeoadminSearchConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "GeoadminSearch",
        "slug" => "geoadmin-search",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "now" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://api3.geo.admin.ch",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "search" => {},
        },
      },
      "entity" => {
        "search" => {
          "fields" => [
            {
              "name" => "results",
              "title" => "Results",
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "search",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/rest/services/ech/SearchServer",
                  "segments" => [
                    {
                      "lit" => "rest",
                    },
                    {
                      "lit" => "services",
                    },
                    {
                      "lit" => "ech",
                    },
                    {
                      "lit" => "SearchServer",
                    },
                  ],
                  "parts" => [
                    "rest",
                    "services",
                    "ech",
                    "SearchServer",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "bbox",
                        "orig" => "bbox",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "551306.5625,167918.328125,551754.125,168514.625",
                      },
                      {
                        "name" => "callback",
                        "orig" => "callback",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "feature",
                        "orig" => "features",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "ch.bafu.hydrologie-gewaesserzustandsmessstationen",
                      },
                      {
                        "name" => "geometry_format",
                        "orig" => "geometryFormat",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "lang",
                        "orig" => "lang",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "de",
                      },
                      {
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 50,
                      },
                      {
                        "name" => "origin",
                        "orig" => "origins",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "address,gazetteer",
                      },
                      {
                        "name" => "return_geometry",
                        "orig" => "returnGeometry",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                        "example" => true,
                      },
                      {
                        "name" => "search_text",
                        "orig" => "searchText",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "wabern",
                      },
                      {
                        "name" => "sortbbox",
                        "orig" => "sortbbox",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                        "example" => true,
                      },
                      {
                        "name" => "sr",
                        "orig" => "sr",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "21781",
                      },
                      {
                        "name" => "type",
                        "orig" => "type",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                        "example" => "locations",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "type",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    GeoadminSearchFeatures.make_feature(name)
  end
end

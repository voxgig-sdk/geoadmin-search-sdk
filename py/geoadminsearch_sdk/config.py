# GeoadminSearch SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "GeoadminSearch",
            "slug": "geoadmin-search",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://api3.geo.admin.ch",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "search": {},
            },
        },
        "entity": {
      "search": {
        "fields": [
          {
            "name": "results",
            "title": "Results",
            "type": "`$ARRAY`",
          },
        ],
        "name": "search",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/rest/services/ech/SearchServer",
                "segments": [
                  {
                    "lit": "rest",
                  },
                  {
                    "lit": "services",
                  },
                  {
                    "lit": "ech",
                  },
                  {
                    "lit": "SearchServer",
                  },
                ],
                "parts": [
                  "rest",
                  "services",
                  "ech",
                  "SearchServer",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "bbox",
                      "orig": "bbox",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "551306.5625,167918.328125,551754.125,168514.625",
                    },
                    {
                      "name": "callback",
                      "orig": "callback",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "feature",
                      "orig": "feature",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "ch.bafu.hydrologie-gewaesserzustandsmessstationen",
                    },
                    {
                      "name": "geometry_format",
                      "orig": "geometry_format",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "lang",
                      "orig": "lang",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "de",
                    },
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 50,
                    },
                    {
                      "name": "origin",
                      "orig": "origin",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "address,gazetteer",
                    },
                    {
                      "name": "return_geometry",
                      "orig": "return_geometry",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                      "example": True,
                    },
                    {
                      "name": "search_text",
                      "orig": "search_text",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "wabern",
                    },
                    {
                      "name": "sortbbox",
                      "orig": "sortbbox",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                      "example": True,
                    },
                    {
                      "name": "sr",
                      "orig": "sr",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "21781",
                    },
                    {
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                      "example": "locations",
                    },
                  ],
                },
                "select": {
                  "exist": [
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
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }

# GeoadminSearch SDK configuration


def make_config():
    return {
        "main": {
            "name": "GeoadminSearch",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
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
            "active": True,
            "name": "results",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 0,
          },
        ],
        "name": "search",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "551306.5625,167918.328125,551754.125,168514.625",
                      "kind": "query",
                      "name": "bbox",
                      "orig": "bbox",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "callback",
                      "orig": "callback",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "ch.bafu.hydrologie-gewaesserzustandsmessstationen",
                      "kind": "query",
                      "name": "feature",
                      "orig": "feature",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "geometry_format",
                      "orig": "geometry_format",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "de",
                      "kind": "query",
                      "name": "lang",
                      "orig": "lang",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 50,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": "address,gazetteer",
                      "kind": "query",
                      "name": "origin",
                      "orig": "origin",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": True,
                      "kind": "query",
                      "name": "return_geometry",
                      "orig": "return_geometry",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "active": True,
                      "example": "wabern",
                      "kind": "query",
                      "name": "search_text",
                      "orig": "search_text",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": True,
                      "kind": "query",
                      "name": "sortbbox",
                      "orig": "sortbbox",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "active": True,
                      "example": "21781",
                      "kind": "query",
                      "name": "sr",
                      "orig": "sr",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "locations",
                      "kind": "query",
                      "name": "type",
                      "orig": "type",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/rest/services/ech/SearchServer",
                "parts": [
                  "rest",
                  "services",
                  "ech",
                  "SearchServer",
                ],
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
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }

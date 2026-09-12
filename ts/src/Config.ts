
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'GeoadminSearch',
        slug: "geoadmin-search",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://api3.geo.admin.ch",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      search: {
      },

    }
  }


  entity = {
    "search": {
      "fields": [
        {
          "name": "results",
          "type": "`$ARRAY`"
        }
      ],
      "name": "search",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "551306.5625,167918.328125,551754.125,168514.625",
                    "kind": "query",
                    "name": "bbox",
                    "orig": "bbox",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "callback",
                    "orig": "callback",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "ch.bafu.hydrologie-gewaesserzustandsmessstationen",
                    "kind": "query",
                    "name": "feature",
                    "orig": "feature",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "geometry_format",
                    "orig": "geometry_format",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "de",
                    "kind": "query",
                    "name": "lang",
                    "orig": "lang",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 50,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "address,gazetteer",
                    "kind": "query",
                    "name": "origin",
                    "orig": "origin",
                    "type": "`$STRING`"
                  },
                  {
                    "example": true,
                    "kind": "query",
                    "name": "return_geometry",
                    "orig": "return_geometry",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": "wabern",
                    "kind": "query",
                    "name": "search_text",
                    "orig": "search_text",
                    "type": "`$STRING`"
                  },
                  {
                    "example": true,
                    "kind": "query",
                    "name": "sortbbox",
                    "orig": "sortbbox",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": "21781",
                    "kind": "query",
                    "name": "sr",
                    "orig": "sr",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "locations",
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/rest/services/ech/SearchServer",
              "segments": [
                {
                  "lit": "rest"
                },
                {
                  "lit": "services"
                },
                {
                  "lit": "ech"
                },
                {
                  "lit": "SearchServer"
                }
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
                  "type"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "rest",
                "services",
                "ech",
                "SearchServer"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}



import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
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
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
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
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
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
          "title": "Results",
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
              "parts": [
                "rest",
                "services",
                "ech",
                "SearchServer"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "bbox",
                    "orig": "bbox",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "551306.5625,167918.328125,551754.125,168514.625"
                  },
                  {
                    "name": "callback",
                    "orig": "callback",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "feature",
                    "orig": "feature",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "ch.bafu.hydrologie-gewaesserzustandsmessstationen"
                  },
                  {
                    "name": "geometry_format",
                    "orig": "geometry_format",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "lang",
                    "orig": "lang",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "de"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 50
                  },
                  {
                    "name": "origin",
                    "orig": "origin",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "address,gazetteer"
                  },
                  {
                    "name": "return_geometry",
                    "orig": "return_geometry",
                    "type": "`$BOOLEAN`",
                    "kind": "query",
                    "example": true
                  },
                  {
                    "name": "search_text",
                    "orig": "search_text",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "wabern"
                  },
                  {
                    "name": "sortbbox",
                    "orig": "sortbbox",
                    "type": "`$BOOLEAN`",
                    "kind": "query",
                    "example": true
                  },
                  {
                    "name": "sr",
                    "orig": "sr",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "21781"
                  },
                  {
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "locations"
                  }
                ]
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
                  "type"
                ]
              }
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


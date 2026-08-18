
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'GeoadminSearch',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
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
              "parts": [
                "rest",
                "services",
                "ech",
                "SearchServer"
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
  config
}


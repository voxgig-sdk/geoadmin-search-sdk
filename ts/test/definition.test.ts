import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "search",
    "accessor": "Search",
    "op": "load",
    "method": "GET",
    "path": "/rest/services/ech/SearchServer",
    "args": [],
    "select": {
      "bbox": "551306.5625,167918.328125,551754.125,168514.625",
      "callback": "v1",
      "feature": "v1",
      "geometry_format": "v1",
      "lang": "v1",
      "limit": "v1",
      "origin": "v1",
      "return_geometry": "v1",
      "search_text": "v1",
      "sortbbox": "v1",
      "sr": "v1",
      "type": "locations"
    },
    "headers": [],
    "query": [
      "type",
      "searchText",
      "bbox",
      "sortbbox",
      "returnGeometry",
      "origins",
      "features",
      "limit",
      "sr",
      "lang",
      "geometryFormat",
      "callback"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "results": [
        {
          "attrs": {
            "detail": "wabern koeniz",
            "geom_quadindex": "021300220302121113110",
            "geom_st_box2d": "BOX(601112.8374564094 197515.61386168728,601112.8374564094 197515.61386168728)",
            "label": "<i>Populated Place</i> <b>Wabern</b> (BE) - Köniz",
            "lat": 46.928733825683594,
            "lon": 7.453245639801025,
            "num": 1,
            "objectclass": "TLM_SIEDLUNGSNAME",
            "origin": "gazetteer",
            "rank": 5,
            "x": 197515.609375,
            "y": 601112.8125,
            "zoomlevel": 10
          },
          "id": 357116,
          "weight": 100
        }
      ]
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})

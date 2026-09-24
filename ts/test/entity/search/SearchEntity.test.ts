

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { GeoadminSearchSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('SearchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GEOADMIN_SEARCH_TEST_LIVE=TRUE.
  afterEach(liveDelay('GEOADMIN_SEARCH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GeoadminSearchSDK.test()
    const ent = testsdk.Search()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GEOADMIN_SEARCH_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'search.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"results":{"a":true,"h":"Results","n":"results","r":false,"t":"`$ARRAY`","key$":"results","index$":0}},"name":"search","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /rest/services/ech/SearchServer","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"551306.5625,167918.328125,551754.125,168514.625","k":"query","n":"bbox","or":"bbox","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"callback","or":"callback","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"ch.bafu.hydrologie-gewaesserzustandsmessstationen","k":"query","n":"feature","or":"feature","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"geometry_format","or":"geometry_format","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":"de","k":"query","n":"lang","or":"lang","r":false,"t":"`$STRING`","index$":4},{"a":true,"ex":50,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":5},{"a":true,"ex":"address,gazetteer","k":"query","n":"origin","or":"origin","r":false,"t":"`$STRING`","index$":6},{"a":true,"ex":true,"k":"query","n":"return_geometry","or":"return_geometry","r":false,"t":"`$BOOLEAN`","index$":7},{"a":true,"ex":"wabern","k":"query","n":"search_text","or":"search_text","r":false,"t":"`$STRING`","index$":8},{"a":true,"ex":true,"k":"query","n":"sortbbox","or":"sortbbox","r":false,"t":"`$BOOLEAN`","index$":9},{"a":true,"ex":"21781","k":"query","n":"sr","or":"sr","r":false,"t":"`$STRING`","index$":10},{"a":true,"ex":"locations","k":"query","n":"type","or":"type","r":true,"t":"`$STRING`","index$":11}]},"k":"http","m":"GET","o":"/rest/services/ech/SearchServer","q":{"exist":["bbox","callback","feature","geometry_format","lang","limit","origin","return_geometry","search_text","sortbbox","sr","type"]},"r":{},"s":[{"lit":"rest"},{"lit":"services"},{"lit":"ech"},{"lit":"SearchServer"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"search","name__orig":"search","Name":"Search","name_":"search","name-":"search","NAME":"SEARCH","index$":0}, {"active":true,"entity":"search","key$":"BasicSearchFlow","kind":"basic","name":"BasicSearchFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"search_ref01","srcdatavar":"search_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-search_ref01"}}],"index$":0}]}, 'Search', {"GET /rest/services/ech/SearchServer":{"protocol":"http","operationId":"searchServer","responses":{"200":{"description":"Successful search response","content":{"application/json":{"schema":{"oneOf":[{"type":"object","properties":{"results":{"type":"array","items":{"type":"object","properties":{"id":{"type":"integer","description":"Internal identifier (should not be used externally)"},"weight":{"type":"number","description":"Similarity weight between search query and index. For locations: 100 indicates exact match, <100 partial/wildcard, >1000 fuzzy results"},"attrs":{"type":"object","properties":{"origin":{"type":"string","description":"The type of data (zipcode, gg25, district, kantone, gazetteer, address, parcel, layer, feature)","enum":["zipcode","gg25","district","kantone","gazetteer","address","parcel","layer","feature"]},"layerBodId":{"type":"string","description":"The ID of the associated layer (if any)"},"featureId":{"type":"string","description":"Feature ID that can be combined with layerBodId for more information"},"feature_id":{"type":"string","description":"Alternative feature identifier"},"detail":{"type":"string","description":"The search field detail"},"rank":{"type":"integer","description":"Rank associated with the origin. Results ordered in ascending rank"},"geom_st_box2d":{"type":"string","description":"Bounding box of the associated geometry in CH1903/LV03 (EPSG:21781)"},"geom_quadindex":{"type":"string","description":"Quadindex of the geometry"},"num":{"type":"integer","description":"Street number (for address origin)"},"x":{"type":"number","description":"X coordinate on the geometry"},"y":{"type":"number","description":"Y coordinate on the geometry"},"lat":{"type":"number","description":"Latitude coordinate"},"lon":{"type":"number","description":"Longitude coordinate"},"label":{"type":"string","description":"HTML label for the entry"},"zoomlevel":{"type":"integer","description":"Suggested zoom level"},"objectclass":{"type":"string","description":"Object class identifier"},"lang":{"type":"string","description":"Language code (for layer results)"},"layer":{"type":"string","description":"Layer identifier (for layer and feature results)"},"staging":{"type":"string","description":"Staging environment (for layer results)"},"title":{"type":"string","description":"Title (for layer results)"},"topics":{"type":"string","description":"Related topics (for layer results)"},"@geodist":{"type":"number","description":"Geographic distance (when bbox sorting is applied)"}}},"links":{"type":"array","description":"Array of related resources (for address results)","items":{"type":"object","properties":{"rel":{"type":"string","description":"Relationship type","example":"related"},"title":{"type":"string","description":"Layer ID of the related resource","example":"ch.swisstopo.amtliches-gebaeudeadressverzeichnis"},"href":{"type":"string","description":"URL path to access the related feature resource","example":"/rest/services/ech/MapServer/ch.swisstopo.amtliches-gebaeudeadressverzeichnis/<featureid>"}},"x-ref":"#/components/schemas/Link"}}},"x-ref":"#/components/schemas/SearchResult"}}},"x-ref":"#/components/schemas/StandardSearchResponse"},{"type":"object","properties":{"type":{"type":"string","enum":["FeatureCollection"]},"bbox":{"type":"array","items":{"type":"number"},"minItems":4,"maxItems":4,"description":"Bounding box [minX, minY, maxX, maxY]"},"features":{"type":"array","items":{"type":"object","properties":{"type":{"type":"string","enum":["Feature"]},"id":{"type":"integer"},"bbox":{"type":"array","items":{"type":"number"},"minItems":4,"maxItems":4},"geometry":{"type":"object","properties":{"type":{"type":"string","enum":["Point","LineString","Polygon","MultiPoint","MultiLineString","MultiPolygon"]},"coordinates":{"description":"Coordinates in the specified spatial reference system"}},"x-ref":"#/components/schemas/GeoJSONGeometry"},"properties":{"type":"object","additionalProperties":true,"description":"Feature properties including all attributes from search result"}},"x-ref":"#/components/schemas/GeoJSONFeature"}}},"x-ref":"#/components/schemas/GeoJSONSearchResponse"}]},"examples":{"locationSearch":{"summary":"Location search results","value":{"results":[{"attrs":{"detail":"wabern koeniz","geom_quadindex":"021300220302121113110","geom_st_box2d":"BOX(601112.8374564094 197515.61386168728,601112.8374564094 197515.61386168728)","label":"<i>Populated Place</i> <b>Wabern</b> (BE) - Köniz","lat":46.928733825683594,"lon":7.453245639801025,"num":1,"objectclass":"TLM_SIEDLUNGSNAME","origin":"gazetteer","rank":5,"x":197515.609375,"y":601112.8125,"zoomlevel":10},"id":357116,"weight":100}]}},"addressSearch":{"summary":"Address search with links","value":{"results":[{"attrs":{"detail":"landstrasse # 8595 altnau 4641 altnau ch tg","featureId":"191979601_0","geom_quadindex":"012323201233230311110","geom_st_box2d":"BOX(2737666 1275668,2737666 1275668)","label":"Landstrasse # <b>8595 Altnau</b>","lat":47.61722946166992,"lon":9.269905090332031,"num":0,"objectclass":"","origin":"address","rank":7,"x":1275668,"y":2737666,"zoomlevel":10},"id":1926520,"weight":100,"links":[{"rel":"related","title":"ch.swisstopo.amtliches-gebaeudeadressverzeichnis","href":"/rest/services/ech/MapServer/ch.swisstopo.amtliches-gebaeudeadressverzeichnis/<featureid>"},{"rel":"related","title":"ch.bfs.gebaeude_wohnungs_register","href":"/rest/services/ech/MapServer/ch.bfs.gebaeude_wohnungs_register/<featureid>"}]}]}},"layerSearch":{"summary":"Layer search results","value":{"results":[{"attrs":{"detail":"modele de geoide chgeo2004 en ch1903","label":"<b>Géoïde en CH1903</b>","lang":"fr","layer":"ch.swisstopo.geoidmodell-ch1903","origin":"layer","staging":"prod","title":"geoide en ch1903","topics":"api,ech,geodesy,geol,inspire,service-wms,swisstopo"},"id":101,"weight":48}]}},"featureSearch":{"summary":"Feature search results","value":{"results":[{"attrs":{"detail":"4330 ob rbk, zinggen aeaecheli","featureId":"1821","feature_id":"1821","geom_quadindex":"030111222231132003303","geom_st_box2d":"BOX(765885.282632635 255374.66946989714,765885.282632635 255374.66946989714)","label":"Ob RBK, Zinggen","lat":47.428253173828125,"layer":"ch.bafu.hydrologie-gewaesserzustandsmessstationen","lon":9.637541770935059,"origin":"feature"},"id":4330,"weight":5}]}},"geoJsonSearch":{"summary":"GeoJSON format response","value":{"type":"FeatureCollection","bbox":[601112.8374564094,197515.61386168728,601112.8374564094,197515.61386168728],"features":[{"type":"Feature","id":357116,"bbox":[601112.8374564094,197515.61386168728,601112.8374564094,197515.61386168728],"geometry":{"type":"Point","coordinates":[197515.609375,601112.8125]},"properties":{"id":357116,"weight":100,"detail":"wabern koeniz","geom_quadindex":"021300220302121113110","geom_st_box2d":"BOX(601112.8374564094 197515.61386168728,601112.8374564094 197515.61386168728)","label":"<i>Populated Place</i> <b>Wabern</b> (BE) - Köniz","lat":46.928733825683594,"lon":7.453245639801025,"num":1,"objectclass":"TLM_SIEDLUNGSNAME","origin":"gazetteer","rank":5,"x":197515.609375,"y":601112.8125,"zoomlevel":10}}]}}}}}},"400":{"description":"Bad request - invalid parameters","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"},"code":{"type":"integer","description":"Error code"}},"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"},"code":{"type":"integer","description":"Error code"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"type","in":"query","description":"The type of search to perform. Required parameter.","required":true,"schema":{"type":"string","enum":["locations","layers","featuresearch"]},"example":"locations","index$":0},{"name":"searchText","in":"query","description":"The text to search for. Maximum of 10 words. Required unless bbox is provided for location search. Required for layer and feature search.","required":false,"schema":{"type":"string","maxLength":500},"example":"wabern","index$":1},{"name":"bbox","in":"query","description":"A comma separated list of 4 coordinates representing the bounding box on which features should be filtered (SRID: 21781 or 2056). Format: minX,minY,maxX,maxY. Required for location search if searchText is not provided. Optional for feature search.","required":false,"schema":{"type":"string","pattern":"^[0-9.]+,[0-9.]+,[0-9.]+,[0-9.]+$"},"example":"551306.5625,167918.328125,551754.125,168514.625","index$":2},{"name":"sortbbox","in":"query","description":"When bbox is specified and this parameter is true, then the ranking of the results is performed according to the distance between the locations and the center of the bounding box. Applicable to location and feature search.","required":false,"schema":{"type":"boolean","default":true},"index$":3},{"name":"returnGeometry","in":"query","description":"Defines whether the geometry is returned or not. Applicable to location search only.","required":false,"schema":{"type":"boolean","default":true},"index$":4},{"name":"origins","in":"query","description":"A comma separated list of origins for location search. Possible values: zipcode, gg25, district, kantone, gazetteer, address, parcel. By default all origins are used.","required":false,"schema":{"type":"string"},"example":"address,gazetteer","index$":5},{"name":"features","in":"query","description":"A comma separated list of technical layer names. Required for feature search.","required":false,"schema":{"type":"string"},"example":"ch.bafu.hydrologie-gewaesserzustandsmessstationen","index$":6},{"name":"limit","in":"query","description":"The maximum number of results to retrieve per request. Max and default: 50 for locations, 30 for layers, 20 for features.","required":false,"schema":{"type":"integer","minimum":1,"maximum":50,"default":50},"index$":7},{"name":"sr","in":"query","description":"The spatial reference system. Supported values: 21781 (LV03), 2056 (LV95), 4326 (WGS84), 3857 (Web Pseudo-Mercator). Note: for feature search only 21781 and 2056 are supported.","required":false,"schema":{"type":"string","enum":["21781","2056","4326","3857"],"default":"21781"},"index$":8},{"name":"lang","in":"query","description":"The language for metadata. Applicable to layer search only.","required":false,"schema":{"type":"string","enum":["de","fr","it","rm","en"],"default":"de"},"index$":9},{"name":"geometryFormat","in":"query","description":"Set to 'geojson' if you want the service to return a GeoJSON FeatureCollection. Geometries will be returned in the sr projection.","required":false,"schema":{"type":"string","enum":["geojson"]},"index$":10},{"name":"callback","in":"query","description":"The name of the callback function for JSONP requests.","required":false,"schema":{"type":"string"},"index$":11}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let search_ref01_data = Object.values(setup.data.existing.search)[0] as any

    // LOAD
    const search_ref01_ent = client.Search()
    const search_ref01_match_dt0: any = {}
    const search_ref01_data_dt0 = (await search_ref01_ent.load(search_ref01_match_dt0)).data()
    assert(null != search_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/search/SearchTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = GeoadminSearchSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['search01','search02','search03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GEOADMIN_SEARCH_TEST_SEARCH_ENTID': idmap,
    'GEOADMIN_SEARCH_TEST_LIVE': 'FALSE',
    'GEOADMIN_SEARCH_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['GEOADMIN_SEARCH_TEST_SEARCH_ENTID']

  const live = 'TRUE' === env.GEOADMIN_SEARCH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GEOADMIN_SEARCH_TEST_SEARCH_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new GeoadminSearchSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.GEOADMIN_SEARCH_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  

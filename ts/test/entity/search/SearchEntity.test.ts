

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { GeoadminSearchSDK, BaseFeature, config, stdutil } from '../../..'

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


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = GeoadminSearchSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Search().load({"bbox":1,"type":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GEOADMIN_SEARCH_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'search.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"results":{"a":true,"h":"Results","n":"results","r":false,"t":"`$ARRAY`","key$":"results","index$":0}},"name":"search","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /rest/services/ech/SearchServer","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"551306.5625,167918.328125,551754.125,168514.625","k":"query","n":"bbox","or":"bbox","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"callback","or":"callback","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"ch.bafu.hydrologie-gewaesserzustandsmessstationen","k":"query","n":"feature","or":"features","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"geometry_format","or":"geometryFormat","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":"de","k":"query","n":"lang","or":"lang","r":false,"t":"`$STRING`","index$":4},{"a":true,"ex":50,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":5},{"a":true,"ex":"address,gazetteer","k":"query","n":"origin","or":"origins","r":false,"t":"`$STRING`","index$":6},{"a":true,"ex":true,"k":"query","n":"return_geometry","or":"returnGeometry","r":false,"t":"`$BOOLEAN`","index$":7},{"a":true,"ex":"wabern","k":"query","n":"search_text","or":"searchText","r":false,"t":"`$STRING`","index$":8},{"a":true,"ex":true,"k":"query","n":"sortbbox","or":"sortbbox","r":false,"t":"`$BOOLEAN`","index$":9},{"a":true,"ex":"21781","k":"query","n":"sr","or":"sr","r":false,"t":"`$STRING`","index$":10},{"a":true,"ex":"locations","k":"query","n":"type","or":"type","r":true,"t":"`$STRING`","index$":11}]},"k":"http","m":"GET","o":"/rest/services/ech/SearchServer","q":{"exist":["type"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"rest"},{"lit":"services"},{"lit":"ech"},{"lit":"SearchServer"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"search","name__orig":"search","Name":"Search","name_":"search","name-":"search","NAME":"SEARCH","index$":0}, {"active":true,"entity":"search","key$":"BasicSearchFlow","kind":"basic","name":"BasicSearchFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"search_ref01","srcdatavar":"search_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-search_ref01"}}],"index$":0}]}, 'Search', {"GET /rest/services/ech/SearchServer":{"protocol":"http","parameters":[{"name":"type","in":"query","description":"The type of search to perform. Required parameter.","required":true,"schema":{"type":"string","enum":["locations","layers","featuresearch"]},"example":"locations","index$":0},{"name":"searchText","in":"query","description":"The text to search for. Maximum of 10 words. Required unless bbox is provided for location search. Required for layer and feature search.","required":false,"schema":{"type":"string","maxLength":500},"example":"wabern","index$":1},{"name":"bbox","in":"query","description":"A comma separated list of 4 coordinates representing the bounding box on which features should be filtered (SRID: 21781 or 2056). Format: minX,minY,maxX,maxY. Required for location search if searchText is not provided. Optional for feature search.","required":false,"schema":{"type":"string","pattern":"^[0-9.]+,[0-9.]+,[0-9.]+,[0-9.]+$"},"example":"551306.5625,167918.328125,551754.125,168514.625","index$":2},{"name":"sortbbox","in":"query","description":"When bbox is specified and this parameter is true, then the ranking of the results is performed according to the distance between the locations and the center of the bounding box. Applicable to location and feature search.","required":false,"schema":{"type":"boolean","default":true},"index$":3},{"name":"returnGeometry","in":"query","description":"Defines whether the geometry is returned or not. Applicable to location search only.","required":false,"schema":{"type":"boolean","default":true},"index$":4},{"name":"origins","in":"query","description":"A comma separated list of origins for location search. Possible values: zipcode, gg25, district, kantone, gazetteer, address, parcel. By default all origins are used.","required":false,"schema":{"type":"string"},"example":"address,gazetteer","index$":5},{"name":"features","in":"query","description":"A comma separated list of technical layer names. Required for feature search.","required":false,"schema":{"type":"string"},"example":"ch.bafu.hydrologie-gewaesserzustandsmessstationen","index$":6},{"name":"limit","in":"query","description":"The maximum number of results to retrieve per request. Max and default: 50 for locations, 30 for layers, 20 for features.","required":false,"schema":{"type":"integer","minimum":1,"maximum":50,"default":50},"index$":7},{"name":"sr","in":"query","description":"The spatial reference system. Supported values: 21781 (LV03), 2056 (LV95), 4326 (WGS84), 3857 (Web Pseudo-Mercator). Note: for feature search only 21781 and 2056 are supported.","required":false,"schema":{"type":"string","enum":["21781","2056","4326","3857"],"default":"21781"},"index$":8},{"name":"lang","in":"query","description":"The language for metadata. Applicable to layer search only.","required":false,"schema":{"type":"string","enum":["de","fr","it","rm","en"],"default":"de"},"index$":9},{"name":"geometryFormat","in":"query","description":"Set to 'geojson' if you want the service to return a GeoJSON FeatureCollection. Geometries will be returned in the sr projection.","required":false,"schema":{"type":"string","enum":["geojson"]},"index$":10},{"name":"callback","in":"query","description":"The name of the callback function for JSONP requests.","required":false,"schema":{"type":"string"},"index$":11}]}}, { strict: LIVE_STRICT, t })
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



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

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
  

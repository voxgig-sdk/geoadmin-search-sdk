"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'GeoadminSearch',
        slug: "geoadmin-search",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
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
        retry: {
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
        test: {
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
        timeout: {
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
    };
    options = {
        base: "https://api3.geo.admin.ch",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            search: {},
        }
    };
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
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map
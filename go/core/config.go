package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "GeoadminSearch",
			"slug": "geoadmin-search",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://api3.geo.admin.ch",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"search": map[string]any{},
			},
		},
		"entity": map[string]any{
			"search": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "results",
						"type": "`$ARRAY`",
					},
				},
				"name": "search",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "551306.5625,167918.328125,551754.125,168514.625",
											"kind": "query",
											"name": "bbox",
											"orig": "bbox",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "callback",
											"orig": "callback",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "ch.bafu.hydrologie-gewaesserzustandsmessstationen",
											"kind": "query",
											"name": "feature",
											"orig": "feature",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "geometry_format",
											"orig": "geometry_format",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "de",
											"kind": "query",
											"name": "lang",
											"orig": "lang",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "address,gazetteer",
											"kind": "query",
											"name": "origin",
											"orig": "origin",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "return_geometry",
											"orig": "return_geometry",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "wabern",
											"kind": "query",
											"name": "search_text",
											"orig": "search_text",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "sortbbox",
											"orig": "sortbbox",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "21781",
											"kind": "query",
											"name": "sr",
											"orig": "sr",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "locations",
											"kind": "query",
											"name": "type",
											"orig": "type",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/rest/services/ech/SearchServer",
								"parts": []any{
									"rest",
									"services",
									"ech",
									"SearchServer",
								},
								"select": map[string]any{
									"exist": []any{
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
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}

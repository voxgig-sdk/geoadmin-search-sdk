package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "GeoadminSearch",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
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
						"active": true,
						"name": "results",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 0,
					},
				},
				"name": "search",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"example": "551306.5625,167918.328125,551754.125,168514.625",
											"kind": "query",
											"name": "bbox",
											"orig": "bbox",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "callback",
											"orig": "callback",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "ch.bafu.hydrologie-gewaesserzustandsmessstationen",
											"kind": "query",
											"name": "feature",
											"orig": "feature",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "geometry_format",
											"orig": "geometry_format",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "de",
											"kind": "query",
											"name": "lang",
											"orig": "lang",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": "address,gazetteer",
											"kind": "query",
											"name": "origin",
											"orig": "origin",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": true,
											"kind": "query",
											"name": "return_geometry",
											"orig": "return_geometry",
											"reqd": false,
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"active": true,
											"example": "wabern",
											"kind": "query",
											"name": "search_text",
											"orig": "search_text",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": true,
											"kind": "query",
											"name": "sortbbox",
											"orig": "sortbbox",
											"reqd": false,
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"active": true,
											"example": "21781",
											"kind": "query",
											"name": "sr",
											"orig": "sr",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
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
								"index$": 0,
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

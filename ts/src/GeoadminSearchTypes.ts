// Typed models for the GeoadminSearch SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Search {
  results?: any[]
}

export interface SearchLoadMatch {
  bbox?: string
  callback?: string
  feature?: string
  geometry_format?: string
  lang?: string
  limit?: number
  origin?: string
  return_geometry?: boolean
  search_text?: string
  sortbbox?: boolean
  sr?: string
  type: string
}


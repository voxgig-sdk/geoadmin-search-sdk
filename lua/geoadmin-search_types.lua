-- Typed models for the GeoadminSearch SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Search
---@field results? table

---@class SearchLoadMatch
---@field bbox? string
---@field callback? string
---@field feature? string
---@field geometry_format? string
---@field lang? string
---@field limit? number
---@field origin? string
---@field return_geometry? boolean
---@field search_text? string
---@field sortbbox? boolean
---@field sr? string
---@field type string

local M = {}

return M

# frozen_string_literal: true

# Typed models for the GeoadminSearch SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Search entity data model.
#
# @!attribute [rw] results
#   @return [Array, nil]
Search = Struct.new(
  :results,
  keyword_init: true
)

# Request payload for Search#load.
#
# @!attribute [rw] bbox
#   @return [String, nil]
#
# @!attribute [rw] callback
#   @return [String, nil]
#
# @!attribute [rw] feature
#   @return [String, nil]
#
# @!attribute [rw] geometry_format
#   @return [String, nil]
#
# @!attribute [rw] lang
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] origin
#   @return [String, nil]
#
# @!attribute [rw] return_geometry
#   @return [Boolean, nil]
#
# @!attribute [rw] search_text
#   @return [String, nil]
#
# @!attribute [rw] sortbbox
#   @return [Boolean, nil]
#
# @!attribute [rw] sr
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String]
SearchLoadMatch = Struct.new(
  :bbox,
  :callback,
  :feature,
  :geometry_format,
  :lang,
  :limit,
  :origin,
  :return_geometry,
  :search_text,
  :sortbbox,
  :sr,
  :type,
  keyword_init: true
)


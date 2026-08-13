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
# @!attribute [rw] results
#   @return [Array, nil]
SearchLoadMatch = Struct.new(
  :results,
  keyword_init: true
)


<?php
declare(strict_types=1);

// Typed models for the GeoadminSearch SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Search entity data model. */
class Search
{
    public ?array $results = null;
}

/** Request payload for Search#load. */
class SearchLoadMatch
{
    public ?string $bbox = null;
    public ?string $callback = null;
    public ?string $feature = null;
    public ?string $geometry_format = null;
    public ?string $lang = null;
    public ?int $limit = null;
    public ?string $origin = null;
    public ?bool $return_geometry = null;
    public ?string $search_text = null;
    public ?bool $sortbbox = null;
    public ?string $sr = null;
    public string $type;
}


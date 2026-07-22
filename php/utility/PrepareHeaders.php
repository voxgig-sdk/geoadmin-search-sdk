<?php
declare(strict_types=1);

// GeoadminSearch SDK utility: prepare_headers

class GeoadminSearchPrepareHeaders
{
    public static function call(GeoadminSearchContext $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}

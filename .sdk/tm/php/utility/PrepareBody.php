<?php
declare(strict_types=1);

// GeoadminSearch SDK utility: prepare_body

class GeoadminSearchPrepareBody
{
    public static function call(GeoadminSearchContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}

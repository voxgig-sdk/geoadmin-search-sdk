<?php
declare(strict_types=1);

// GeoadminSearch SDK utility: result_body

class GeoadminSearchResultBody
{
    public static function call(GeoadminSearchContext $ctx): ?GeoadminSearchResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}

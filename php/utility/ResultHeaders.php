<?php
declare(strict_types=1);

// GeoadminSearch SDK utility: result_headers

class GeoadminSearchResultHeaders
{
    public static function call(GeoadminSearchContext $ctx): ?GeoadminSearchResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}

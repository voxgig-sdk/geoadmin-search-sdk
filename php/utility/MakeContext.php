<?php
declare(strict_types=1);

// GeoadminSearch SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class GeoadminSearchMakeContext
{
    public static function call(array $ctxmap, ?GeoadminSearchContext $basectx): GeoadminSearchContext
    {
        return new GeoadminSearchContext($ctxmap, $basectx);
    }
}

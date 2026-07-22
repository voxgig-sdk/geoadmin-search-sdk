<?php
declare(strict_types=1);

// GeoadminSearch SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

GeoadminSearchUtility::setRegistrar(function (GeoadminSearchUtility $u): void {
    $u->clean = [GeoadminSearchClean::class, 'call'];
    $u->done = [GeoadminSearchDone::class, 'call'];
    $u->make_error = [GeoadminSearchMakeError::class, 'call'];
    $u->feature_add = [GeoadminSearchFeatureAdd::class, 'call'];
    $u->feature_hook = [GeoadminSearchFeatureHook::class, 'call'];
    $u->feature_init = [GeoadminSearchFeatureInit::class, 'call'];
    $u->fetcher = [GeoadminSearchFetcher::class, 'call'];
    $u->make_fetch_def = [GeoadminSearchMakeFetchDef::class, 'call'];
    $u->make_context = [GeoadminSearchMakeContext::class, 'call'];
    $u->make_options = [GeoadminSearchMakeOptions::class, 'call'];
    $u->make_request = [GeoadminSearchMakeRequest::class, 'call'];
    $u->make_response = [GeoadminSearchMakeResponse::class, 'call'];
    $u->make_result = [GeoadminSearchMakeResult::class, 'call'];
    $u->make_point = [GeoadminSearchMakePoint::class, 'call'];
    $u->make_spec = [GeoadminSearchMakeSpec::class, 'call'];
    $u->make_url = [GeoadminSearchMakeUrl::class, 'call'];
    $u->param = [GeoadminSearchParam::class, 'call'];
    $u->prepare_auth = [GeoadminSearchPrepareAuth::class, 'call'];
    $u->prepare_body = [GeoadminSearchPrepareBody::class, 'call'];
    $u->prepare_headers = [GeoadminSearchPrepareHeaders::class, 'call'];
    $u->prepare_method = [GeoadminSearchPrepareMethod::class, 'call'];
    $u->prepare_params = [GeoadminSearchPrepareParams::class, 'call'];
    $u->prepare_path = [GeoadminSearchPreparePath::class, 'call'];
    $u->prepare_query = [GeoadminSearchPrepareQuery::class, 'call'];
    $u->result_basic = [GeoadminSearchResultBasic::class, 'call'];
    $u->result_body = [GeoadminSearchResultBody::class, 'call'];
    $u->result_headers = [GeoadminSearchResultHeaders::class, 'call'];
    $u->transform_request = [GeoadminSearchTransformRequest::class, 'call'];
    $u->transform_response = [GeoadminSearchTransformResponse::class, 'call'];
});

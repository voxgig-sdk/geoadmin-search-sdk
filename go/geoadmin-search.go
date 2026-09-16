package voxgiggeoadminsearchsdk

import (
	"github.com/voxgig-sdk/geoadmin-search-sdk/go/core"
	"github.com/voxgig-sdk/geoadmin-search-sdk/go/entity"
	"github.com/voxgig-sdk/geoadmin-search-sdk/go/feature"
	_ "github.com/voxgig-sdk/geoadmin-search-sdk/go/utility"
)

// Type aliases preserve external API.
type GeoadminSearchSDK = core.GeoadminSearchSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type GeoadminSearchEntity = core.GeoadminSearchEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type GeoadminSearchError = core.GeoadminSearchError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewSearchEntityFunc = func(client *core.GeoadminSearchSDK, entopts map[string]any) core.GeoadminSearchEntity {
		return entity.NewSearchEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewGeoadminSearchSDK = core.NewGeoadminSearchSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewGeoadminSearchSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *GeoadminSearchSDK  { return NewGeoadminSearchSDK(nil) }
func Test() *GeoadminSearchSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature

package core

type GeoadminSearchError struct {
	IsGeoadminSearchError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewGeoadminSearchError(code string, msg string, ctx *Context) *GeoadminSearchError {
	return &GeoadminSearchError{
		IsGeoadminSearchError: true,
		Sdk:              "GeoadminSearch",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *GeoadminSearchError) Error() string {
	return e.Msg
}

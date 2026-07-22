
import { Context } from './Context'


class GeoadminSearchError extends Error {

  isGeoadminSearchError = true

  sdk = 'GeoadminSearch'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  GeoadminSearchError
}


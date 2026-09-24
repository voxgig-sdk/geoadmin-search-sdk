"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeoadminSearchError = void 0;
class GeoadminSearchError extends Error {
    isGeoadminSearchError = true;
    sdk = 'GeoadminSearch';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.GeoadminSearchError = GeoadminSearchError;
//# sourceMappingURL=GeoadminSearchError.js.map
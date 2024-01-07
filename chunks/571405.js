            "use strict";
            r("424973"), r("70102");
            let i = r("599235");

            function n(t) {
                this._reporterState = {
                    obj: null,
                    path: [],
                    options: t || {},
                    errors: []
                }
            }

            function o(t, e) {
                this.path = t, this.rethrow(e)
            }
            e.Reporter = n, n.prototype.isError = function(t) {
                return t instanceof o
            }, n.prototype.save = function() {
                let t = this._reporterState;
                return {
                    obj: t.obj,
                    pathLen: t.path.length
                }
            }, n.prototype.restore = function(t) {
                let e = this._reporterState;
                e.obj = t.obj, e.path = e.path.slice(0, t.pathLen)
            }, n.prototype.enterKey = function(t) {
                return this._reporterState.path.push(t)
            }, n.prototype.exitKey = function(t) {
                let e = this._reporterState;
                e.path = e.path.slice(0, t - 1)
            }, n.prototype.leaveKey = function(t, e, r) {
                let i = this._reporterState;
                this.exitKey(t), null !== i.obj && (i.obj[e] = r)
            }, n.prototype.path = function() {
                return this._reporterState.path.join("/")
            }, n.prototype.enterObject = function() {
                let t = this._reporterState,
                    e = t.obj;
                return t.obj = {}, e
            }, n.prototype.leaveObject = function(t) {
                let e = this._reporterState,
                    r = e.obj;
                return e.obj = t, r
            }, n.prototype.error = function(t) {
                let e;
                let r = this._reporterState,
                    i = t instanceof o;
                if (e = i ? t : new o(r.path.map(function(t) {
                        return "[" + JSON.stringify(t) + "]"
                    }).join(""), t.message || t, t.stack), !r.options.partial) throw e;
                return !i && r.errors.push(e), e
            }, n.prototype.wrapResult = function(t) {
                let e = this._reporterState;
                return e.options.partial ? {
                    result: this.isError(t) ? null : t,
                    errors: e.errors
                } : t
            }, i(o, Error), o.prototype.rethrow = function(t) {
                if (this.message = t + " at: " + (this.path || "(shallow)"), Error.captureStackTrace && Error.captureStackTrace(this, o), !this.stack) try {
                    throw Error(this.message)
                } catch (t) {
                    this.stack = t.stack
                }
                return this
            }
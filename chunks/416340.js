            "use strict";

            function n(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var i = r("232973"),
                o = r("237396"),
                a = r("808598"),
                u = function() {
                    function t(t) {
                        n(this, "_defaultDir", void 0), n(this, "_lastDir", void 0), t ? o.isStrong(t) || a(!1) : t = o.getGlobalDir(), this._defaultDir = t, this.reset()
                    }
                    var e = t.prototype;
                    return e.reset = function() {
                        this._lastDir = this._defaultDir
                    }, e.getDirection = function(t) {
                        return this._lastDir = i.getDirection(t, this._lastDir), this._lastDir
                    }, t
                }();
            t.exports = u
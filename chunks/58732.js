            function r(e) {
                if (e) return function(e) {
                    for (var t in r.prototype) e[t] = r.prototype[t];
                    return e
                }(e)
            }
            e = n.nmd(e), n("424973"), void 0 !== e && (e.exports = r);
            r.prototype.on = r.prototype.addEventListener = function(e, t) {
                return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
            }, r.prototype.once = function(e, t) {
                function n() {
                    this.off(e, n), t.apply(this, arguments)
                }
                return n.fn = t, this.on(e, n), this
            }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(e, t) {
                if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                var n, r = this._callbacks["$" + e];
                if (!r) return this;
                if (1 == arguments.length) return delete this._callbacks["$" + e], this;
                for (var a = 0; a < r.length; a++)
                    if ((n = r[a]) === t || n.fn === t) {
                        r.splice(a, 1);
                        break
                    } return 0 === r.length && delete this._callbacks["$" + e], this
            }, r.prototype.emit = function(e) {
                this._callbacks = this._callbacks || {};
                for (var t = Array(arguments.length - 1), n = this._callbacks["$" + e], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                if (n) {
                    n = n.slice(0);
                    for (var r = 0, a = n.length; r < a; ++r) n[r].apply(this, t)
                }
                return this
            }, r.prototype.listeners = function(e) {
                return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
            }, r.prototype.hasListeners = function(e) {
                return !!this.listeners(e).length
            }
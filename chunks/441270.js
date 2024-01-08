            r("70102"), r("424973");
            var i = r("912065").Buffer,
                n = r("880669").Transform,
                a = r("394822").StringDecoder;

            function o(t) {
                n.call(this), this.hashMode = "string" == typeof t, this.hashMode ? this[t] = this._finalOrDigest : this.final = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null
            }
            r("599235")(o, n), o.prototype.update = function(t, e, r) {
                "string" == typeof t && (t = i.from(t, e));
                var n = this._update(t);
                return this.hashMode ? this : (r && (n = this._toString(n, r)), n)
            }, o.prototype.setAutoPadding = function() {}, o.prototype.getAuthTag = function() {
                throw Error("trying to get auth tag in unsupported state")
            }, o.prototype.setAuthTag = function() {
                throw Error("trying to set auth tag in unsupported state")
            }, o.prototype.setAAD = function() {
                throw Error("trying to set aad in unsupported state")
            }, o.prototype._transform = function(t, e, r) {
                var i;
                try {
                    this.hashMode ? this._update(t) : this.push(this._update(t))
                } catch (t) {
                    i = t
                } finally {
                    r(i)
                }
            }, o.prototype._flush = function(t) {
                var e;
                try {
                    this.push(this.__final())
                } catch (t) {
                    e = t
                }
                t(e)
            }, o.prototype._finalOrDigest = function(t) {
                var e = this.__final() || i.alloc(0);
                return t && (e = this._toString(e, t, !0)), e
            }, o.prototype._toString = function(t, e, r) {
                if (!this._decoder && (this._decoder = new a(e), this._encoding = e), this._encoding !== e) throw Error("can't switch encodings");
                var i = this._decoder.write(t);
                return r && (i += this._decoder.end()), i
            }, t.exports = o
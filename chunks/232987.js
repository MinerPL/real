            r("424973"), r("70102");
            var i = r("391149"),
                n = r("912065").Buffer,
                o = r("725214"),
                a = r("421630"),
                s = r("441270"),
                f = r("619127"),
                h = r("786561");

            function c(t, e, r) {
                s.call(this), this._cache = new u, this._last = void 0, this._cipher = new f.AES(e), this._prev = n.from(r), this._mode = t, this._autopadding = !0
            }

            function u() {
                this.cache = n.allocUnsafe(0)
            }
            r("599235")(c, s), c.prototype._update = function(t) {
                this._cache.add(t);
                for (var e, r, i = []; e = this._cache.get(this._autopadding);) r = this._mode.decrypt(this, e), i.push(r);
                return n.concat(i)
            }, c.prototype._final = function() {
                var t = this._cache.flush();
                if (this._autopadding) return function(t) {
                    var e = t[15];
                    if (e < 1 || e > 16) throw Error("unable to decrypt data");
                    for (var r = -1; ++r < e;)
                        if (t[r + (16 - e)] !== e) throw Error("unable to decrypt data");
                    if (16 !== e) return t.slice(0, 16 - e)
                }(this._mode.decrypt(this, t));
                if (t) throw Error("data not multiple of block length")
            }, c.prototype.setAutoPadding = function(t) {
                return this._autopadding = !!t, this
            }, u.prototype.add = function(t) {
                this.cache = n.concat([this.cache, t])
            }, u.prototype.get = function(t) {
                var e;
                if (t) {
                    if (this.cache.length > 16) return e = this.cache.slice(0, 16), this.cache = this.cache.slice(16), e
                } else if (this.cache.length >= 16) return e = this.cache.slice(0, 16), this.cache = this.cache.slice(16), e;
                return null
            }, u.prototype.flush = function() {
                if (this.cache.length) return this.cache
            };

            function d(t, e, r) {
                var s = o[t.toLowerCase()];
                if (!s) throw TypeError("invalid suite type");
                if ("string" == typeof r && (r = n.from(r)), "GCM" !== s.mode && r.length !== s.iv) throw TypeError("invalid iv length " + r.length);
                if ("string" == typeof e && (e = n.from(e)), e.length !== s.key / 8) throw TypeError("invalid key length " + e.length);
                return "stream" === s.type ? new a(s.module, e, r, !0) : "auth" === s.type ? new i(s.module, e, r, !0) : new c(s.module, e, r)
            }
            e.createDecipher = function(t, e) {
                var r = o[t.toLowerCase()];
                if (!r) throw TypeError("invalid suite type");
                var i = h(e, !1, r.key, r.iv);
                return d(t, i.key, i.iv)
            }, e.createDecipheriv = d
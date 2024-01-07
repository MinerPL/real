            r("424973"), r("70102");
            var i = r("725214"),
                n = r("391149"),
                o = r("912065").Buffer,
                a = r("421630"),
                s = r("441270"),
                f = r("619127"),
                h = r("786561");

            function c(t, e, r) {
                s.call(this), this._cache = new d, this._cipher = new f.AES(e), this._prev = o.from(r), this._mode = t, this._autopadding = !0
            }
            r("599235")(c, s), c.prototype._update = function(t) {
                this._cache.add(t);
                for (var e, r, i = []; e = this._cache.get();) r = this._mode.encrypt(this, e), i.push(r);
                return o.concat(i)
            };
            var u = o.alloc(16, 16);

            function d() {
                this.cache = o.allocUnsafe(0)
            }

            function l(t, e, r) {
                var s = i[t.toLowerCase()];
                if (!s) throw TypeError("invalid suite type");
                if ("string" == typeof e && (e = o.from(e)), e.length !== s.key / 8) throw TypeError("invalid key length " + e.length);
                if ("string" == typeof r && (r = o.from(r)), "GCM" !== s.mode && r.length !== s.iv) throw TypeError("invalid iv length " + r.length);
                return "stream" === s.type ? new a(s.module, e, r) : "auth" === s.type ? new n(s.module, e, r) : new c(s.module, e, r)
            }
            c.prototype._final = function() {
                var t = this._cache.flush();
                if (this._autopadding) return t = this._mode.encrypt(this, t), this._cipher.scrub(), t;
                if (!t.equals(u)) throw this._cipher.scrub(), Error("data not multiple of block length")
            }, c.prototype.setAutoPadding = function(t) {
                return this._autopadding = !!t, this
            }, d.prototype.add = function(t) {
                this.cache = o.concat([this.cache, t])
            }, d.prototype.get = function() {
                if (this.cache.length > 15) {
                    var t = this.cache.slice(0, 16);
                    return this.cache = this.cache.slice(16), t
                }
                return null
            }, d.prototype.flush = function() {
                for (var t = 16 - this.cache.length, e = o.allocUnsafe(t), r = -1; ++r < t;) e.writeUInt8(t, r);
                return o.concat([this.cache, e])
            };
            e.createCipheriv = l, e.createCipher = function(t, e) {
                var r = i[t.toLowerCase()];
                if (!r) throw TypeError("invalid suite type");
                var n = h(e, !1, r.key, r.iv);
                return l(t, n.key, n.iv)
            }
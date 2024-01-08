            r("854508"), r("70102");
            var i = r("619127"),
                n = r("912065").Buffer,
                a = r("441270"),
                o = r("599235"),
                s = r("820457"),
                f = r("687185"),
                h = r("135042");

            function c(t, e, r, o) {
                a.call(this);
                var f = n.alloc(4, 0);
                this._cipher = new i.AES(e);
                var c = this._cipher.encryptBlock(f);
                this._ghash = new s(c), r = function(t, e, r) {
                    if (12 === e.length) return t._finID = n.concat([e, n.from([0, 0, 0, 1])]), n.concat([e, n.from([0, 0, 0, 2])]);
                    var i = new s(r),
                        a = e.length,
                        o = a % 16;
                    i.update(e), o && (o = 16 - o, i.update(n.alloc(o, 0))), i.update(n.alloc(8, 0));
                    var f = n.alloc(8);
                    f.writeUIntBE(8 * a, 0, 8), i.update(f), t._finID = i.state;
                    var c = n.from(t._finID);
                    return h(c), c
                }(this, r, c), this._prev = n.from(r), this._cache = n.allocUnsafe(0), this._secCache = n.allocUnsafe(0), this._decrypt = o, this._alen = 0, this._len = 0, this._mode = t, this._authTag = null, this._called = !1
            }
            o(c, a), c.prototype._update = function(t) {
                if (!this._called && this._alen) {
                    var e = 16 - this._alen % 16;
                    e < 16 && (e = n.alloc(e, 0), this._ghash.update(e))
                }
                this._called = !0;
                var r = this._mode.encrypt(this, t);
                return this._decrypt ? this._ghash.update(t) : this._ghash.update(r), this._len += t.length, r
            }, c.prototype._final = function() {
                if (this._decrypt && !this._authTag) throw Error("Unsupported state or unable to authenticate data");
                var t = f(this._ghash.final(8 * this._alen, 8 * this._len), this._cipher.encryptBlock(this._finID));
                if (this._decrypt && function(t, e) {
                        var r = 0;
                        t.length !== e.length && r++;
                        for (var i = Math.min(t.length, e.length), n = 0; n < i; ++n) r += t[n] ^ e[n];
                        return r
                    }(t, this._authTag)) throw Error("Unsupported state or unable to authenticate data");
                this._authTag = t, this._cipher.scrub()
            }, c.prototype.getAuthTag = function() {
                if (this._decrypt || !n.isBuffer(this._authTag)) throw Error("Attempting to get auth tag in unsupported state");
                return this._authTag
            }, c.prototype.setAuthTag = function(t) {
                if (!this._decrypt) throw Error("Attempting to set auth tag in unsupported state");
                this._authTag = t
            }, c.prototype.setAAD = function(t) {
                if (this._called) throw Error("Attempting to set AAD in unsupported state");
                this._ghash.update(t), this._alen += t.length
            }, t.exports = c
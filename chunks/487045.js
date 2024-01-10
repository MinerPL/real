            "use strict";
            r("222007");
            var i = r("463483"),
                n = r("599235"),
                o = r("446744"),
                a = r("249089");

            function s() {
                this.tmp = [, , ], this.keys = null
            }

            function f(t) {
                a.call(this, t);
                var e = new s;
                this._desState = e, this.deriveKeys(e, t.key)
            }
            n(f, a), t.exports = f, f.create = function(t) {
                return new f(t)
            };
            var h = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
            f.prototype.deriveKeys = function(t, e) {
                t.keys = Array(32), i.equal(e.length, this.blockSize, "Invalid key length");
                var r = o.readUInt32BE(e, 0),
                    n = o.readUInt32BE(e, 4);
                o.pc1(r, n, t.tmp, 0), r = t.tmp[0], n = t.tmp[1];
                for (var a = 0; a < t.keys.length; a += 2) {
                    var s = h[a >>> 1];
                    r = o.r28shl(r, s), n = o.r28shl(n, s), o.pc2(r, n, t.keys, a)
                }
            }, f.prototype._update = function(t, e, r, i) {
                var n = this._desState,
                    a = o.readUInt32BE(t, e),
                    s = o.readUInt32BE(t, e + 4);
                o.ip(a, s, n.tmp, 0), a = n.tmp[0], s = n.tmp[1], "encrypt" === this.type ? this._encrypt(n, a, s, n.tmp, 0) : this._decrypt(n, a, s, n.tmp, 0), a = n.tmp[0], s = n.tmp[1], o.writeUInt32BE(r, a, i), o.writeUInt32BE(r, s, i + 4)
            }, f.prototype._pad = function(t, e) {
                if (!1 === this.padding) return !1;
                for (var r = t.length - e, i = e; i < t.length; i++) t[i] = r;
                return !0
            }, f.prototype._unpad = function(t) {
                if (!1 === this.padding) return t;
                for (var e = t[t.length - 1], r = t.length - e; r < t.length; r++) i.equal(t[r], e);
                return t.slice(0, t.length - e)
            }, f.prototype._encrypt = function(t, e, r, i, n) {
                for (var a = e, s = r, f = 0; f < t.keys.length; f += 2) {
                    var h = t.keys[f],
                        c = t.keys[f + 1];
                    o.expand(s, t.tmp, 0), h ^= t.tmp[0], c ^= t.tmp[1];
                    var u = o.substitute(h, c),
                        d = o.permute(u),
                        l = s;
                    s = (a ^ d) >>> 0, a = l
                }
                o.rip(s, a, i, n)
            }, f.prototype._decrypt = function(t, e, r, i, n) {
                for (var a = r, s = e, f = t.keys.length - 2; f >= 0; f -= 2) {
                    var h = t.keys[f],
                        c = t.keys[f + 1];
                    o.expand(a, t.tmp, 0), h ^= t.tmp[0], c ^= t.tmp[1];
                    var u = o.substitute(h, c),
                        d = o.permute(u),
                        l = a;
                    a = (s ^ d) >>> 0, s = l
                }
                o.rip(a, s, i, n)
            }
            "use strict";
            r("222007");
            var i = r("463483"),
                n = r("599235"),
                a = r("446744"),
                o = r("249089");

            function s() {
                this.tmp = [, , ], this.keys = null
            }

            function f(t) {
                o.call(this, t);
                var e = new s;
                this._desState = e, this.deriveKeys(e, t.key)
            }
            n(f, o), t.exports = f, f.create = function(t) {
                return new f(t)
            };
            var h = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
            f.prototype.deriveKeys = function(t, e) {
                t.keys = Array(32), i.equal(e.length, this.blockSize, "Invalid key length");
                var r = a.readUInt32BE(e, 0),
                    n = a.readUInt32BE(e, 4);
                a.pc1(r, n, t.tmp, 0), r = t.tmp[0], n = t.tmp[1];
                for (var o = 0; o < t.keys.length; o += 2) {
                    var s = h[o >>> 1];
                    r = a.r28shl(r, s), n = a.r28shl(n, s), a.pc2(r, n, t.keys, o)
                }
            }, f.prototype._update = function(t, e, r, i) {
                var n = this._desState,
                    o = a.readUInt32BE(t, e),
                    s = a.readUInt32BE(t, e + 4);
                a.ip(o, s, n.tmp, 0), o = n.tmp[0], s = n.tmp[1], "encrypt" === this.type ? this._encrypt(n, o, s, n.tmp, 0) : this._decrypt(n, o, s, n.tmp, 0), o = n.tmp[0], s = n.tmp[1], a.writeUInt32BE(r, o, i), a.writeUInt32BE(r, s, i + 4)
            }, f.prototype._pad = function(t, e) {
                if (!1 === this.padding) return !1;
                for (var r = t.length - e, i = e; i < t.length; i++) t[i] = r;
                return !0
            }, f.prototype._unpad = function(t) {
                if (!1 === this.padding) return t;
                for (var e = t[t.length - 1], r = t.length - e; r < t.length; r++) i.equal(t[r], e);
                return t.slice(0, t.length - e)
            }, f.prototype._encrypt = function(t, e, r, i, n) {
                for (var o = e, s = r, f = 0; f < t.keys.length; f += 2) {
                    var h = t.keys[f],
                        c = t.keys[f + 1];
                    a.expand(s, t.tmp, 0), h ^= t.tmp[0], c ^= t.tmp[1];
                    var u = a.substitute(h, c),
                        d = a.permute(u),
                        l = s;
                    s = (o ^ d) >>> 0, o = l
                }
                a.rip(s, o, i, n)
            }, f.prototype._decrypt = function(t, e, r, i, n) {
                for (var o = r, s = e, f = t.keys.length - 2; f >= 0; f -= 2) {
                    var h = t.keys[f],
                        c = t.keys[f + 1];
                    a.expand(o, t.tmp, 0), h ^= t.tmp[0], c ^= t.tmp[1];
                    var u = a.substitute(h, c),
                        d = a.permute(u),
                        l = o;
                    o = (s ^ d) >>> 0, s = l
                }
                a.rip(o, s, i, n)
            }
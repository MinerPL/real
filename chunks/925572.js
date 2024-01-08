            "use strict";
            r("424973");
            var i = r("839309"),
                n = r("550511"),
                a = n.assert;

            function o(t, e) {
                if (t instanceof o) return t;
                !this._importDER(t, e) && (a(t.r && t.s, "Signature without r or s"), this.r = new i(t.r, 16), this.s = new i(t.s, 16), void 0 === t.recoveryParam ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam)
            }

            function s() {
                this.place = 0
            }

            function f(t, e) {
                var r = t[e.place++];
                if (!(128 & r)) return r;
                var i = 15 & r;
                if (0 === i || i > 4) return !1;
                for (var n = 0, a = 0, o = e.place; a < i; a++, o++) n <<= 8, n |= t[o], n >>>= 0;
                return !(n <= 127) && (e.place = o, n)
            }

            function h(t) {
                for (var e = 0, r = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < r;) e++;
                return 0 === e ? t : t.slice(e)
            }

            function c(t, e) {
                if (e < 128) {
                    t.push(e);
                    return
                }
                var r = 1 + (Math.log(e) / Math.LN2 >>> 3);
                for (t.push(128 | r); --r;) t.push(e >>> (r << 3) & 255);
                t.push(e)
            }
            t.exports = o, o.prototype._importDER = function(t, e) {
                t = n.toArray(t, e);
                var r = new s;
                if (48 !== t[r.place++]) return !1;
                var a = f(t, r);
                if (!1 === a || a + r.place !== t.length || 2 !== t[r.place++]) return !1;
                var o = f(t, r);
                if (!1 === o) return !1;
                var h = t.slice(r.place, o + r.place);
                if (r.place += o, 2 !== t[r.place++]) return !1;
                var c = f(t, r);
                if (!1 === c || t.length !== c + r.place) return !1;
                var u = t.slice(r.place, c + r.place);
                if (0 === h[0]) {
                    if (!(128 & h[1])) return !1;
                    h = h.slice(1)
                }
                if (0 === u[0]) {
                    if (!(128 & u[1])) return !1;
                    u = u.slice(1)
                }
                return this.r = new i(h), this.s = new i(u), this.recoveryParam = null, !0
            }, o.prototype.toDER = function(t) {
                var e = this.r.toArray(),
                    r = this.s.toArray();
                for (128 & e[0] && (e = [0].concat(e)), 128 & r[0] && (r = [0].concat(r)), e = h(e), r = h(r); !r[0] && !(128 & r[1]);) r = r.slice(1);
                var i = [2];
                c(i, e.length), (i = i.concat(e)).push(2), c(i, r.length);
                var a = i.concat(r),
                    o = [48];
                return c(o, a.length), o = o.concat(a), n.encode(o, t)
            }
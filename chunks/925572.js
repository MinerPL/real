            "use strict";
            s("424973");
            var r = s("839309"),
                i = s("550511"),
                n = i.assert;

            function c(t, e) {
                if (t instanceof c) return t;
                !this._importDER(t, e) && (n(t.r && t.s, "Signature without r or s"), this.r = new r(t.r, 16), this.s = new r(t.s, 16), void 0 === t.recoveryParam ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam)
            }

            function o() {
                this.place = 0
            }

            function f(t, e) {
                var s = t[e.place++];
                if (!(128 & s)) return s;
                var r = 15 & s;
                if (0 === r || r > 4) return !1;
                for (var i = 0, n = 0, c = e.place; n < r; n++, c++) i <<= 8, i |= t[c], i >>>= 0;
                return !(i <= 127) && (e.place = c, i)
            }

            function u(t) {
                for (var e = 0, s = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < s;) e++;
                return 0 === e ? t : t.slice(e)
            }

            function a(t, e) {
                if (e < 128) {
                    t.push(e);
                    return
                }
                var s = 1 + (Math.log(e) / Math.LN2 >>> 3);
                for (t.push(128 | s); --s;) t.push(e >>> (s << 3) & 255);
                t.push(e)
            }
            t.exports = c, c.prototype._importDER = function(t, e) {
                t = i.toArray(t, e);
                var s = new o;
                if (48 !== t[s.place++]) return !1;
                var n = f(t, s);
                if (!1 === n || n + s.place !== t.length || 2 !== t[s.place++]) return !1;
                var c = f(t, s);
                if (!1 === c) return !1;
                var u = t.slice(s.place, c + s.place);
                if (s.place += c, 2 !== t[s.place++]) return !1;
                var a = f(t, s);
                if (!1 === a || t.length !== a + s.place) return !1;
                var d = t.slice(s.place, a + s.place);
                if (0 === u[0]) {
                    if (!(128 & u[1])) return !1;
                    u = u.slice(1)
                }
                if (0 === d[0]) {
                    if (!(128 & d[1])) return !1;
                    d = d.slice(1)
                }
                return this.r = new r(u), this.s = new r(d), this.recoveryParam = null, !0
            }, c.prototype.toDER = function(t) {
                var e = this.r.toArray(),
                    s = this.s.toArray();
                for (128 & e[0] && (e = [0].concat(e)), 128 & s[0] && (s = [0].concat(s)), e = u(e), s = u(s); !s[0] && !(128 & s[1]);) s = s.slice(1);
                var r = [2];
                a(r, e.length), (r = r.concat(e)).push(2), a(r, s.length);
                var n = r.concat(s),
                    c = [48];
                return a(c, n.length), c = c.concat(n), i.encode(c, t)
            }
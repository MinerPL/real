            var i = r("839309"),
                n = r("125807");

            function o(t) {
                this.rand = t || new n.Rand
            }
            t.exports = o, o.create = function(t) {
                return new o(t)
            }, o.prototype._randbelow = function(t) {
                var e = Math.ceil(t.bitLength() / 8);
                do var r = new i(this.rand.generate(e)); while (r.cmp(t) >= 0);
                return r
            }, o.prototype._randrange = function(t, e) {
                var r = e.sub(t);
                return t.add(this._randbelow(r))
            }, o.prototype.test = function(t, e, r) {
                var n = t.bitLength(),
                    o = i.mont(t),
                    a = new i(1).toRed(o);
                !e && (e = Math.max(1, n / 48 | 0));
                for (var s = t.subn(1), f = 0; !s.testn(f); f++);
                for (var h = t.shrn(f), c = s.toRed(o); e > 0; e--) {
                    var u = this._randrange(new i(2), s);
                    r && r(u);
                    var d = u.toRed(o).redPow(h);
                    if (0 !== d.cmp(a) && 0 !== d.cmp(c)) {
                        for (var l = 1; l < f; l++) {
                            if (0 === (d = d.redSqr()).cmp(a)) return !1;
                            if (0 === d.cmp(c)) break
                        }
                        if (l === f) return !1
                    }
                }
                return !0
            }, o.prototype.getDivisor = function(t, e) {
                var r = t.bitLength(),
                    n = i.mont(t),
                    o = new i(1).toRed(n);
                !e && (e = Math.max(1, r / 48 | 0));
                for (var a = t.subn(1), s = 0; !a.testn(s); s++);
                for (var f = t.shrn(s), h = a.toRed(n); e > 0; e--) {
                    var c = this._randrange(new i(2), a),
                        u = t.gcd(c);
                    if (0 !== u.cmpn(1)) return u;
                    var d = c.toRed(n).redPow(f);
                    if (0 !== d.cmp(o) && 0 !== d.cmp(h)) {
                        for (var l = 1; l < s; l++) {
                            if (0 === (d = d.redSqr()).cmp(o)) return d.fromRed().subn(1).gcd(t);
                            if (0 === d.cmp(h)) break
                        }
                        if (l === s) return (d = d.redSqr()).fromRed().subn(1).gcd(t)
                    }
                }
                return !1
            }
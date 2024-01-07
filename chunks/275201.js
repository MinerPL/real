            "use strict";
            r("70102"), r("424973");
            var i = r("839309"),
                n = r("550511"),
                o = n.getNAF,
                a = n.getJSF,
                s = n.assert;

            function f(t, e) {
                this.type = t, this.p = new i(e.p, 16), this.red = e.prime ? i.red(e.prime) : i.mont(this.p), this.zero = new i(0).toRed(this.red), this.one = new i(1).toRed(this.red), this.two = new i(2).toRed(this.red), this.n = e.n && new i(e.n, 16), this.g = e.g && this.pointFromJSON(e.g, e.gRed), this._wnafT1 = [, , , , ], this._wnafT2 = [, , , , ], this._wnafT3 = [, , , , ], this._wnafT4 = [, , , , ], this._bitLength = this.n ? this.n.bitLength() : 0;
                var r = this.n && this.p.div(this.n);
                !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
            }

            function h(t, e) {
                this.curve = t, this.type = e, this.precomputed = null
            }
            t.exports = f, f.prototype.point = function() {
                throw Error("Not implemented")
            }, f.prototype.validate = function() {
                throw Error("Not implemented")
            }, f.prototype._fixedNafMul = function(t, e) {
                s(t.precomputed);
                var r, i, n = t._getDoubles(),
                    a = o(e, 1, this._bitLength),
                    f = (1 << n.step + 1) - (n.step % 2 == 0 ? 2 : 1);
                f /= 3;
                var h = [];
                for (r = 0; r < a.length; r += n.step) {
                    i = 0;
                    for (var c = r + n.step - 1; c >= r; c--) i = (i << 1) + a[c];
                    h.push(i)
                }
                for (var u = this.jpoint(null, null, null), d = this.jpoint(null, null, null), l = f; l > 0; l--) {
                    for (r = 0; r < h.length; r++)(i = h[r]) === l ? d = d.mixedAdd(n.points[r]) : i === -l && (d = d.mixedAdd(n.points[r].neg()));
                    u = u.add(d)
                }
                return u.toP()
            }, f.prototype._wnafMul = function(t, e) {
                var r = 4,
                    i = t._getNAFPoints(r);
                r = i.wnd;
                for (var n = i.points, a = o(e, r, this._bitLength), f = this.jpoint(null, null, null), h = a.length - 1; h >= 0; h--) {
                    for (var c = 0; h >= 0 && 0 === a[h]; h--) c++;
                    if (h >= 0 && c++, f = f.dblp(c), h < 0) break;
                    var u = a[h];
                    s(0 !== u), f = "affine" === t.type ? u > 0 ? f.mixedAdd(n[u - 1 >> 1]) : f.mixedAdd(n[-u - 1 >> 1].neg()) : u > 0 ? f.add(n[u - 1 >> 1]) : f.add(n[-u - 1 >> 1].neg())
                }
                return "affine" === t.type ? f.toP() : f
            }, f.prototype._wnafMulAdd = function(t, e, r, i, n) {
                var s, f, h, c = this._wnafT1,
                    u = this._wnafT2,
                    d = this._wnafT3,
                    l = 0;
                for (s = 0; s < i; s++) {
                    var p = (h = e[s])._getNAFPoints(t);
                    c[s] = p.wnd, u[s] = p.points
                }
                for (s = i - 1; s >= 1; s -= 2) {
                    var b = s - 1,
                        m = s;
                    if (1 !== c[b] || 1 !== c[m]) {
                        d[b] = o(r[b], c[b], this._bitLength), d[m] = o(r[m], c[m], this._bitLength), l = Math.max(d[b].length, l), l = Math.max(d[m].length, l);
                        continue
                    }
                    var g = [e[b], null, null, e[m]];
                    0 === e[b].y.cmp(e[m].y) ? (g[1] = e[b].add(e[m]), g[2] = e[b].toJ().mixedAdd(e[m].neg())) : 0 === e[b].y.cmp(e[m].y.redNeg()) ? (g[1] = e[b].toJ().mixedAdd(e[m]), g[2] = e[b].add(e[m].neg())) : (g[1] = e[b].toJ().mixedAdd(e[m]), g[2] = e[b].toJ().mixedAdd(e[m].neg()));
                    var y = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                        v = a(r[b], r[m]);
                    for (f = 0, l = Math.max(v[0].length, l), d[b] = Array(l), d[m] = Array(l); f < l; f++) {
                        var _ = 0 | v[0][f],
                            w = 0 | v[1][f];
                        d[b][f] = y[(_ + 1) * 3 + (w + 1)], d[m][f] = 0, u[b] = g
                    }
                }
                var M = this.jpoint(null, null, null),
                    S = this._wnafT4;
                for (s = l; s >= 0; s--) {
                    for (var k = 0; s >= 0;) {
                        var x = !0;
                        for (f = 0; f < i; f++) S[f] = 0 | d[f][s], 0 !== S[f] && (x = !1);
                        if (!x) break;
                        k++, s--
                    }
                    if (s >= 0 && k++, M = M.dblp(k), s < 0) break;
                    for (f = 0; f < i; f++) {
                        var E = S[f];
                        if (0 !== E) {
                            E > 0 ? h = u[f][E - 1 >> 1] : E < 0 && (h = u[f][-E - 1 >> 1].neg());
                            M = "affine" === h.type ? M.mixedAdd(h) : M.add(h)
                        }
                    }
                }
                for (s = 0; s < i; s++) u[s] = null;
                return n ? M : M.toP()
            }, f.BasePoint = h, h.prototype.eq = function() {
                throw Error("Not implemented")
            }, h.prototype.validate = function() {
                return this.curve.validate(this)
            }, f.prototype.decodePoint = function(t, e) {
                t = n.toArray(t, e);
                var r = this.p.byteLength();
                if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * r) return 6 === t[0] ? s(t[t.length - 1] % 2 == 0) : 7 === t[0] && s(t[t.length - 1] % 2 == 1), this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r));
                if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r) return this.pointFromX(t.slice(1, 1 + r), 3 === t[0]);
                throw Error("Unknown point format")
            }, h.prototype.encodeCompressed = function(t) {
                return this.encode(t, !0)
            }, h.prototype._encode = function(t) {
                var e = this.curve.p.byteLength(),
                    r = this.getX().toArray("be", e);
                return t ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", e))
            }, h.prototype.encode = function(t, e) {
                return n.encode(this._encode(e), t)
            }, h.prototype.precompute = function(t) {
                if (this.precomputed) return this;
                var e = {
                    doubles: null,
                    naf: null,
                    beta: null
                };
                return e.naf = this._getNAFPoints(8), e.doubles = this._getDoubles(4, t), e.beta = this._getBeta(), this.precomputed = e, this
            }, h.prototype._hasDoubles = function(t) {
                if (!this.precomputed) return !1;
                var e = this.precomputed.doubles;
                return !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
            }, h.prototype._getDoubles = function(t, e) {
                if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
                for (var r = [this], i = this, n = 0; n < e; n += t) {
                    for (var o = 0; o < t; o++) i = i.dbl();
                    r.push(i)
                }
                return {
                    step: t,
                    points: r
                }
            }, h.prototype._getNAFPoints = function(t) {
                if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
                for (var e = [this], r = (1 << t) - 1, i = 1 === r ? null : this.dbl(), n = 1; n < r; n++) e[n] = e[n - 1].add(i);
                return {
                    wnd: t,
                    points: e
                }
            }, h.prototype._getBeta = function() {
                return null
            }, h.prototype.dblp = function(t) {
                for (var e = this, r = 0; r < t; r++) e = e.dbl();
                return e
            }
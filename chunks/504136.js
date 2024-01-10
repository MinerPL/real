            "use strict";
            r("70102"), r("274635");
            var i = r("550511"),
                n = r("839309"),
                o = r("599235"),
                a = r("275201"),
                s = i.assert;

            function f(t) {
                a.call(this, "short", t), this.a = new n(t.a, 16).toRed(this.red), this.b = new n(t.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(t), this._endoWnafT1 = [, , , , ], this._endoWnafT2 = [, , , , ]
            }

            function h(t, e, r, i) {
                a.BasePoint.call(this, t, "affine"), null === e && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new n(e, 16), this.y = new n(r, 16), i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), !this.x.red && (this.x = this.x.toRed(this.curve.red)), !this.y.red && (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
            }

            function c(t, e, r, i) {
                a.BasePoint.call(this, t, "jacobian"), null === e && null === r && null === i ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new n(0)) : (this.x = new n(e, 16), this.y = new n(r, 16), this.z = new n(i, 16)), !this.x.red && (this.x = this.x.toRed(this.curve.red)), !this.y.red && (this.y = this.y.toRed(this.curve.red)), !this.z.red && (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
            }
            o(f, a), t.exports = f, f.prototype._getEndomorphism = function(t) {
                if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                    if (t.beta) e = new n(t.beta, 16).toRed(this.red);
                    else {
                        var e, r, i, o = this._getEndoRoots(this.p);
                        e = (e = 0 > o[0].cmp(o[1]) ? o[0] : o[1]).toRed(this.red)
                    }
                    if (t.lambda) r = new n(t.lambda, 16);
                    else {
                        var a = this._getEndoRoots(this.n);
                        0 === this.g.mul(a[0]).x.cmp(this.g.x.redMul(e)) ? r = a[0] : (r = a[1], s(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))))
                    }
                    return i = t.basis ? t.basis.map(function(t) {
                        return {
                            a: new n(t.a, 16),
                            b: new n(t.b, 16)
                        }
                    }) : this._getEndoBasis(r), {
                        beta: e,
                        lambda: r,
                        basis: i
                    }
                }
            }, f.prototype._getEndoRoots = function(t) {
                var e = t === this.p ? this.red : n.mont(t),
                    r = new n(2).toRed(e).redInvm(),
                    i = r.redNeg(),
                    o = new n(3).toRed(e).redNeg().redSqrt().redMul(r);
                return [i.redAdd(o).fromRed(), i.redSub(o).fromRed()]
            }, f.prototype._getEndoBasis = function(t) {
                for (var e, r, i, o, a, s, f, h, c, u = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), d = t, l = this.n.clone(), p = new n(1), b = new n(0), m = new n(0), g = new n(1), y = 0; 0 !== d.cmpn(0);) {
                    var v = l.div(d);
                    h = l.sub(v.mul(d)), c = m.sub(v.mul(p));
                    var _ = g.sub(v.mul(b));
                    if (!i && 0 > h.cmp(u)) e = f.neg(), r = p, i = h.neg(), o = c;
                    else if (i && 2 == ++y) break;
                    f = h, l = d, d = h, m = p, p = c, g = b, b = _
                }
                a = h.neg(), s = c;
                var w = i.sqr().add(o.sqr());
                return a.sqr().add(s.sqr()).cmp(w) >= 0 && (a = e, s = r), i.negative && (i = i.neg(), o = o.neg()), a.negative && (a = a.neg(), s = s.neg()), [{
                    a: i,
                    b: o
                }, {
                    a: a,
                    b: s
                }]
            }, f.prototype._endoSplit = function(t) {
                var e = this.endo.basis,
                    r = e[0],
                    i = e[1],
                    n = i.b.mul(t).divRound(this.n),
                    o = r.b.neg().mul(t).divRound(this.n),
                    a = n.mul(r.a),
                    s = o.mul(i.a),
                    f = n.mul(r.b),
                    h = o.mul(i.b);
                return {
                    k1: t.sub(a).sub(s),
                    k2: f.add(h).neg()
                }
            }, f.prototype.pointFromX = function(t, e) {
                !(t = new n(t, 16)).red && (t = t.toRed(this.red));
                var r = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),
                    i = r.redSqrt();
                if (0 !== i.redSqr().redSub(r).cmp(this.zero)) throw Error("invalid point");
                var o = i.fromRed().isOdd();
                return (e && !o || !e && o) && (i = i.redNeg()), this.point(t, i)
            }, f.prototype.validate = function(t) {
                if (t.inf) return !0;
                var e = t.x,
                    r = t.y,
                    i = this.a.redMul(e),
                    n = e.redSqr().redMul(e).redIAdd(i).redIAdd(this.b);
                return 0 === r.redSqr().redISub(n).cmpn(0)
            }, f.prototype._endoWnafMulAdd = function(t, e, r) {
                for (var i = this._endoWnafT1, n = this._endoWnafT2, o = 0; o < t.length; o++) {
                    var a = this._endoSplit(e[o]),
                        s = t[o],
                        f = s._getBeta();
                    a.k1.negative && (a.k1.ineg(), s = s.neg(!0)), a.k2.negative && (a.k2.ineg(), f = f.neg(!0)), i[2 * o] = s, i[2 * o + 1] = f, n[2 * o] = a.k1, n[2 * o + 1] = a.k2
                }
                for (var h = this._wnafMulAdd(1, i, n, 2 * o, r), c = 0; c < 2 * o; c++) i[c] = null, n[c] = null;
                return h
            }, o(h, a.BasePoint), f.prototype.point = function(t, e, r) {
                return new h(this, t, e, r)
            }, f.prototype.pointFromJSON = function(t, e) {
                return h.fromJSON(this, t, e)
            }, h.prototype._getBeta = function() {
                if (this.curve.endo) {
                    var t = this.precomputed;
                    if (t && t.beta) return t.beta;
                    var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                    if (t) {
                        var r = this.curve,
                            i = function(t) {
                                return r.point(t.x.redMul(r.endo.beta), t.y)
                            };
                        t.beta = e, e.precomputed = {
                            beta: null,
                            naf: t.naf && {
                                wnd: t.naf.wnd,
                                points: t.naf.points.map(i)
                            },
                            doubles: t.doubles && {
                                step: t.doubles.step,
                                points: t.doubles.points.map(i)
                            }
                        }
                    }
                    return e
                }
            }, h.prototype.toJSON = function() {
                return this.precomputed ? [this.x, this.y, this.precomputed && {
                    doubles: this.precomputed.doubles && {
                        step: this.precomputed.doubles.step,
                        points: this.precomputed.doubles.points.slice(1)
                    },
                    naf: this.precomputed.naf && {
                        wnd: this.precomputed.naf.wnd,
                        points: this.precomputed.naf.points.slice(1)
                    }
                }] : [this.x, this.y]
            }, h.fromJSON = function(t, e, r) {
                "string" == typeof e && (e = JSON.parse(e));
                var i = t.point(e[0], e[1], r);
                if (!e[2]) return i;

                function n(e) {
                    return t.point(e[0], e[1], r)
                }
                var o = e[2];
                return i.precomputed = {
                    beta: null,
                    doubles: o.doubles && {
                        step: o.doubles.step,
                        points: [i].concat(o.doubles.points.map(n))
                    },
                    naf: o.naf && {
                        wnd: o.naf.wnd,
                        points: [i].concat(o.naf.points.map(n))
                    }
                }, i
            }, h.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
            }, h.prototype.isInfinity = function() {
                return this.inf
            }, h.prototype.add = function(t) {
                if (this.inf) return t;
                if (t.inf) return this;
                if (this.eq(t)) return this.dbl();
                if (this.neg().eq(t) || 0 === this.x.cmp(t.x)) return this.curve.point(null, null);
                var e = this.y.redSub(t.y);
                0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
                var r = e.redSqr().redISub(this.x).redISub(t.x),
                    i = e.redMul(this.x.redSub(r)).redISub(this.y);
                return this.curve.point(r, i)
            }, h.prototype.dbl = function() {
                if (this.inf) return this;
                var t = this.y.redAdd(this.y);
                if (0 === t.cmpn(0)) return this.curve.point(null, null);
                var e = this.curve.a,
                    r = this.x.redSqr(),
                    i = t.redInvm(),
                    n = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(i),
                    o = n.redSqr().redISub(this.x.redAdd(this.x)),
                    a = n.redMul(this.x.redSub(o)).redISub(this.y);
                return this.curve.point(o, a)
            }, h.prototype.getX = function() {
                return this.x.fromRed()
            }, h.prototype.getY = function() {
                return this.y.fromRed()
            }, h.prototype.mul = function(t) {
                if (t = new n(t, 16), this.isInfinity()) return this;
                if (this._hasDoubles(t)) return this.curve._fixedNafMul(this, t);
                if (this.curve.endo) return this.curve._endoWnafMulAdd([this], [t]);
                else return this.curve._wnafMul(this, t)
            }, h.prototype.mulAdd = function(t, e, r) {
                var i = [this, e],
                    n = [t, r];
                return this.curve.endo ? this.curve._endoWnafMulAdd(i, n) : this.curve._wnafMulAdd(1, i, n, 2)
            }, h.prototype.jmulAdd = function(t, e, r) {
                var i = [this, e],
                    n = [t, r];
                return this.curve.endo ? this.curve._endoWnafMulAdd(i, n, !0) : this.curve._wnafMulAdd(1, i, n, 2, !0)
            }, h.prototype.eq = function(t) {
                return this === t || this.inf === t.inf && (this.inf || 0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))
            }, h.prototype.neg = function(t) {
                if (this.inf) return this;
                var e = this.curve.point(this.x, this.y.redNeg());
                if (t && this.precomputed) {
                    var r = this.precomputed,
                        i = function(t) {
                            return t.neg()
                        };
                    e.precomputed = {
                        naf: r.naf && {
                            wnd: r.naf.wnd,
                            points: r.naf.points.map(i)
                        },
                        doubles: r.doubles && {
                            step: r.doubles.step,
                            points: r.doubles.points.map(i)
                        }
                    }
                }
                return e
            }, h.prototype.toJ = function() {
                return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
            }, o(c, a.BasePoint), f.prototype.jpoint = function(t, e, r) {
                return new c(this, t, e, r)
            }, c.prototype.toP = function() {
                if (this.isInfinity()) return this.curve.point(null, null);
                var t = this.z.redInvm(),
                    e = t.redSqr(),
                    r = this.x.redMul(e),
                    i = this.y.redMul(e).redMul(t);
                return this.curve.point(r, i)
            }, c.prototype.neg = function() {
                return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
            }, c.prototype.add = function(t) {
                if (this.isInfinity()) return t;
                if (t.isInfinity()) return this;
                var e = t.z.redSqr(),
                    r = this.z.redSqr(),
                    i = this.x.redMul(e),
                    n = t.x.redMul(r),
                    o = this.y.redMul(e.redMul(t.z)),
                    a = t.y.redMul(r.redMul(this.z)),
                    s = i.redSub(n),
                    f = o.redSub(a);
                if (0 === s.cmpn(0)) return 0 !== f.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var h = s.redSqr(),
                    c = h.redMul(s),
                    u = i.redMul(h),
                    d = f.redSqr().redIAdd(c).redISub(u).redISub(u),
                    l = f.redMul(u.redISub(d)).redISub(o.redMul(c)),
                    p = this.z.redMul(t.z).redMul(s);
                return this.curve.jpoint(d, l, p)
            }, c.prototype.mixedAdd = function(t) {
                if (this.isInfinity()) return t.toJ();
                if (t.isInfinity()) return this;
                var e = this.z.redSqr(),
                    r = this.x,
                    i = t.x.redMul(e),
                    n = this.y,
                    o = t.y.redMul(e).redMul(this.z),
                    a = r.redSub(i),
                    s = n.redSub(o);
                if (0 === a.cmpn(0)) return 0 !== s.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var f = a.redSqr(),
                    h = f.redMul(a),
                    c = r.redMul(f),
                    u = s.redSqr().redIAdd(h).redISub(c).redISub(c),
                    d = s.redMul(c.redISub(u)).redISub(n.redMul(h)),
                    l = this.z.redMul(a);
                return this.curve.jpoint(u, d, l)
            }, c.prototype.dblp = function(t) {
                if (0 === t || this.isInfinity()) return this;
                if (!t) return this.dbl();
                if (this.curve.zeroA || this.curve.threeA) {
                    var e, r = this;
                    for (e = 0; e < t; e++) r = r.dbl();
                    return r
                }
                var i = this.curve.a,
                    n = this.curve.tinv,
                    o = this.x,
                    a = this.y,
                    s = this.z,
                    f = s.redSqr().redSqr(),
                    h = a.redAdd(a);
                for (e = 0; e < t; e++) {
                    var c = o.redSqr(),
                        u = h.redSqr(),
                        d = u.redSqr(),
                        l = c.redAdd(c).redIAdd(c).redIAdd(i.redMul(f)),
                        p = o.redMul(u),
                        b = l.redSqr().redISub(p.redAdd(p)),
                        m = p.redISub(b),
                        g = l.redMul(m);
                    g = g.redIAdd(g).redISub(d);
                    var y = h.redMul(s);
                    e + 1 < t && (f = f.redMul(d)), o = b, s = y, h = g
                }
                return this.curve.jpoint(o, h.redMul(n), s)
            }, c.prototype.dbl = function() {
                return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
            }, c.prototype._zeroDbl = function() {
                if (this.zOne) {
                    var t, e, r, i = this.x.redSqr(),
                        n = this.y.redSqr(),
                        o = n.redSqr(),
                        a = this.x.redAdd(n).redSqr().redISub(i).redISub(o);
                    a = a.redIAdd(a);
                    var s = i.redAdd(i).redIAdd(i),
                        f = s.redSqr().redISub(a).redISub(a),
                        h = o.redIAdd(o);
                    h = (h = h.redIAdd(h)).redIAdd(h), t = f, e = s.redMul(a.redISub(f)).redISub(h), r = this.y.redAdd(this.y)
                } else {
                    var c = this.x.redSqr(),
                        u = this.y.redSqr(),
                        d = u.redSqr(),
                        l = this.x.redAdd(u).redSqr().redISub(c).redISub(d);
                    l = l.redIAdd(l);
                    var p = c.redAdd(c).redIAdd(c),
                        b = p.redSqr(),
                        m = d.redIAdd(d);
                    m = (m = m.redIAdd(m)).redIAdd(m), t = b.redISub(l).redISub(l), e = p.redMul(l.redISub(t)).redISub(m), r = (r = this.y.redMul(this.z)).redIAdd(r)
                }
                return this.curve.jpoint(t, e, r)
            }, c.prototype._threeDbl = function() {
                if (this.zOne) {
                    var t, e, r, i = this.x.redSqr(),
                        n = this.y.redSqr(),
                        o = n.redSqr(),
                        a = this.x.redAdd(n).redSqr().redISub(i).redISub(o);
                    a = a.redIAdd(a);
                    var s = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
                        f = s.redSqr().redISub(a).redISub(a);
                    t = f;
                    var h = o.redIAdd(o);
                    h = (h = h.redIAdd(h)).redIAdd(h), e = s.redMul(a.redISub(f)).redISub(h), r = this.y.redAdd(this.y)
                } else {
                    var c = this.z.redSqr(),
                        u = this.y.redSqr(),
                        d = this.x.redMul(u),
                        l = this.x.redSub(c).redMul(this.x.redAdd(c));
                    l = l.redAdd(l).redIAdd(l);
                    var p = d.redIAdd(d),
                        b = (p = p.redIAdd(p)).redAdd(p);
                    t = l.redSqr().redISub(b), r = this.y.redAdd(this.z).redSqr().redISub(u).redISub(c);
                    var m = u.redSqr();
                    m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m), e = l.redMul(p.redISub(t)).redISub(m)
                }
                return this.curve.jpoint(t, e, r)
            }, c.prototype._dbl = function() {
                var t = this.curve.a,
                    e = this.x,
                    r = this.y,
                    i = this.z,
                    n = i.redSqr().redSqr(),
                    o = e.redSqr(),
                    a = r.redSqr(),
                    s = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(n)),
                    f = e.redAdd(e),
                    h = (f = f.redIAdd(f)).redMul(a),
                    c = s.redSqr().redISub(h.redAdd(h)),
                    u = h.redISub(c),
                    d = a.redSqr();
                d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
                var l = s.redMul(u).redISub(d),
                    p = r.redAdd(r).redMul(i);
                return this.curve.jpoint(c, l, p)
            }, c.prototype.trpl = function() {
                if (!this.curve.zeroA) return this.dbl().add(this);
                var t = this.x.redSqr(),
                    e = this.y.redSqr(),
                    r = this.z.redSqr(),
                    i = e.redSqr(),
                    n = t.redAdd(t).redIAdd(t),
                    o = n.redSqr(),
                    a = this.x.redAdd(e).redSqr().redISub(t).redISub(i),
                    s = (a = (a = (a = a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(o)).redSqr(),
                    f = i.redIAdd(i);
                f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
                var h = n.redIAdd(a).redSqr().redISub(o).redISub(s).redISub(f),
                    c = e.redMul(h);
                c = (c = c.redIAdd(c)).redIAdd(c);
                var u = this.x.redMul(s).redISub(c);
                u = (u = u.redIAdd(u)).redIAdd(u);
                var d = this.y.redMul(h.redMul(f.redISub(h)).redISub(a.redMul(s)));
                d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
                var l = this.z.redAdd(a).redSqr().redISub(r).redISub(s);
                return this.curve.jpoint(u, d, l)
            }, c.prototype.mul = function(t, e) {
                return t = new n(t, e), this.curve._wnafMul(this, t)
            }, c.prototype.eq = function(t) {
                if ("affine" === t.type) return this.eq(t.toJ());
                if (this === t) return !0;
                var e = this.z.redSqr(),
                    r = t.z.redSqr();
                if (0 !== this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0)) return !1;
                var i = e.redMul(this.z),
                    n = r.redMul(t.z);
                return 0 === this.y.redMul(n).redISub(t.y.redMul(i)).cmpn(0)
            }, c.prototype.eqXToP = function(t) {
                var e = this.z.redSqr(),
                    r = t.toRed(this.curve.red).redMul(e);
                if (0 === this.x.cmp(r)) return !0;
                for (var i = t.clone(), n = this.curve.redN.redMul(e);;) {
                    if (i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0) return !1;
                    if (r.redIAdd(n), 0 === this.x.cmp(r)) return !0
                }
            }, c.prototype.inspect = function() {
                return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
            }, c.prototype.isInfinity = function() {
                return 0 === this.z.cmpn(0)
            }
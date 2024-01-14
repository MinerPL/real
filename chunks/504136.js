"use strict";
s("70102"), s("274635");
var r = s("550511"),
  i = s("839309"),
  n = s("599235"),
  c = s("275201"),
  o = r.assert;

function f(t) {
  c.call(this, "short", t), this.a = new i(t.a, 16).toRed(this.red), this.b = new i(t.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(t), this._endoWnafT1 = [, , , , ], this._endoWnafT2 = [, , , , ]
}

function u(t, e, s, r) {
  c.BasePoint.call(this, t, "affine"), null === e && null === s ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new i(e, 16), this.y = new i(s, 16), r && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), !this.x.red && (this.x = this.x.toRed(this.curve.red)), !this.y.red && (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
}

function a(t, e, s, r) {
  c.BasePoint.call(this, t, "jacobian"), null === e && null === s && null === r ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new i(0)) : (this.x = new i(e, 16), this.y = new i(s, 16), this.z = new i(r, 16)), !this.x.red && (this.x = this.x.toRed(this.curve.red)), !this.y.red && (this.y = this.y.toRed(this.curve.red)), !this.z.red && (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
}
n(f, c), t.exports = f, f.prototype._getEndomorphism = function(t) {
  if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
    if (t.beta) e = new i(t.beta, 16).toRed(this.red);
    else {
      var e, s, r, n = this._getEndoRoots(this.p);
      e = (e = 0 > n[0].cmp(n[1]) ? n[0] : n[1]).toRed(this.red)
    }
    if (t.lambda) s = new i(t.lambda, 16);
    else {
      var c = this._getEndoRoots(this.n);
      0 === this.g.mul(c[0]).x.cmp(this.g.x.redMul(e)) ? s = c[0] : (s = c[1], o(0 === this.g.mul(s).x.cmp(this.g.x.redMul(e))))
    }
    return r = t.basis ? t.basis.map(function(t) {
      return {
        a: new i(t.a, 16),
        b: new i(t.b, 16)
      }
    }) : this._getEndoBasis(s), {
      beta: e,
      lambda: s,
      basis: r
    }
  }
}, f.prototype._getEndoRoots = function(t) {
  var e = t === this.p ? this.red : i.mont(t),
    s = new i(2).toRed(e).redInvm(),
    r = s.redNeg(),
    n = new i(3).toRed(e).redNeg().redSqrt().redMul(s);
  return [r.redAdd(n).fromRed(), r.redSub(n).fromRed()]
}, f.prototype._getEndoBasis = function(t) {
  for (var e, s, r, n, c, o, f, u, a, d = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), p = t, b = this.n.clone(), h = new i(1), l = new i(0), g = new i(0), v = new i(1), x = 0; 0 !== p.cmpn(0);) {
    var m = b.div(p);
    u = b.sub(m.mul(p)), a = g.sub(m.mul(h));
    var y = v.sub(m.mul(l));
    if (!r && 0 > u.cmp(d)) e = f.neg(), s = h, r = u.neg(), n = a;
    else if (r && 2 == ++x) break;
    f = u, b = p, p = u, g = h, h = a, v = l, l = y
  }
  c = u.neg(), o = a;
  var _ = r.sqr().add(n.sqr());
  return c.sqr().add(o.sqr()).cmp(_) >= 0 && (c = e, o = s), r.negative && (r = r.neg(), n = n.neg()), c.negative && (c = c.neg(), o = o.neg()), [{
    a: r,
    b: n
  }, {
    a: c,
    b: o
  }]
}, f.prototype._endoSplit = function(t) {
  var e = this.endo.basis,
    s = e[0],
    r = e[1],
    i = r.b.mul(t).divRound(this.n),
    n = s.b.neg().mul(t).divRound(this.n),
    c = i.mul(s.a),
    o = n.mul(r.a),
    f = i.mul(s.b),
    u = n.mul(r.b);
  return {
    k1: t.sub(c).sub(o),
    k2: f.add(u).neg()
  }
}, f.prototype.pointFromX = function(t, e) {
  !(t = new i(t, 16)).red && (t = t.toRed(this.red));
  var s = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),
    r = s.redSqrt();
  if (0 !== r.redSqr().redSub(s).cmp(this.zero)) throw Error("invalid point");
  var n = r.fromRed().isOdd();
  return (e && !n || !e && n) && (r = r.redNeg()), this.point(t, r)
}, f.prototype.validate = function(t) {
  if (t.inf) return !0;
  var e = t.x,
    s = t.y,
    r = this.a.redMul(e),
    i = e.redSqr().redMul(e).redIAdd(r).redIAdd(this.b);
  return 0 === s.redSqr().redISub(i).cmpn(0)
}, f.prototype._endoWnafMulAdd = function(t, e, s) {
  for (var r = this._endoWnafT1, i = this._endoWnafT2, n = 0; n < t.length; n++) {
    var c = this._endoSplit(e[n]),
      o = t[n],
      f = o._getBeta();
    c.k1.negative && (c.k1.ineg(), o = o.neg(!0)), c.k2.negative && (c.k2.ineg(), f = f.neg(!0)), r[2 * n] = o, r[2 * n + 1] = f, i[2 * n] = c.k1, i[2 * n + 1] = c.k2
  }
  for (var u = this._wnafMulAdd(1, r, i, 2 * n, s), a = 0; a < 2 * n; a++) r[a] = null, i[a] = null;
  return u
}, n(u, c.BasePoint), f.prototype.point = function(t, e, s) {
  return new u(this, t, e, s)
}, f.prototype.pointFromJSON = function(t, e) {
  return u.fromJSON(this, t, e)
}, u.prototype._getBeta = function() {
  if (this.curve.endo) {
    var t = this.precomputed;
    if (t && t.beta) return t.beta;
    var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
    if (t) {
      var s = this.curve,
        r = function(t) {
          return s.point(t.x.redMul(s.endo.beta), t.y)
        };
      t.beta = e, e.precomputed = {
        beta: null,
        naf: t.naf && {
          wnd: t.naf.wnd,
          points: t.naf.points.map(r)
        },
        doubles: t.doubles && {
          step: t.doubles.step,
          points: t.doubles.points.map(r)
        }
      }
    }
    return e
  }
}, u.prototype.toJSON = function() {
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
}, u.fromJSON = function(t, e, s) {
  "string" == typeof e && (e = JSON.parse(e));
  var r = t.point(e[0], e[1], s);
  if (!e[2]) return r;

  function i(e) {
    return t.point(e[0], e[1], s)
  }
  var n = e[2];
  return r.precomputed = {
    beta: null,
    doubles: n.doubles && {
      step: n.doubles.step,
      points: [r].concat(n.doubles.points.map(i))
    },
    naf: n.naf && {
      wnd: n.naf.wnd,
      points: [r].concat(n.naf.points.map(i))
    }
  }, r
}, u.prototype.inspect = function() {
  return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
}, u.prototype.isInfinity = function() {
  return this.inf
}, u.prototype.add = function(t) {
  if (this.inf) return t;
  if (t.inf) return this;
  if (this.eq(t)) return this.dbl();
  if (this.neg().eq(t) || 0 === this.x.cmp(t.x)) return this.curve.point(null, null);
  var e = this.y.redSub(t.y);
  0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
  var s = e.redSqr().redISub(this.x).redISub(t.x),
    r = e.redMul(this.x.redSub(s)).redISub(this.y);
  return this.curve.point(s, r)
}, u.prototype.dbl = function() {
  if (this.inf) return this;
  var t = this.y.redAdd(this.y);
  if (0 === t.cmpn(0)) return this.curve.point(null, null);
  var e = this.curve.a,
    s = this.x.redSqr(),
    r = t.redInvm(),
    i = s.redAdd(s).redIAdd(s).redIAdd(e).redMul(r),
    n = i.redSqr().redISub(this.x.redAdd(this.x)),
    c = i.redMul(this.x.redSub(n)).redISub(this.y);
  return this.curve.point(n, c)
}, u.prototype.getX = function() {
  return this.x.fromRed()
}, u.prototype.getY = function() {
  return this.y.fromRed()
}, u.prototype.mul = function(t) {
  if (t = new i(t, 16), this.isInfinity()) return this;
  if (this._hasDoubles(t)) return this.curve._fixedNafMul(this, t);
  if (this.curve.endo) return this.curve._endoWnafMulAdd([this], [t]);
  else return this.curve._wnafMul(this, t)
}, u.prototype.mulAdd = function(t, e, s) {
  var r = [this, e],
    i = [t, s];
  return this.curve.endo ? this.curve._endoWnafMulAdd(r, i) : this.curve._wnafMulAdd(1, r, i, 2)
}, u.prototype.jmulAdd = function(t, e, s) {
  var r = [this, e],
    i = [t, s];
  return this.curve.endo ? this.curve._endoWnafMulAdd(r, i, !0) : this.curve._wnafMulAdd(1, r, i, 2, !0)
}, u.prototype.eq = function(t) {
  return this === t || this.inf === t.inf && (this.inf || 0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))
}, u.prototype.neg = function(t) {
  if (this.inf) return this;
  var e = this.curve.point(this.x, this.y.redNeg());
  if (t && this.precomputed) {
    var s = this.precomputed,
      r = function(t) {
        return t.neg()
      };
    e.precomputed = {
      naf: s.naf && {
        wnd: s.naf.wnd,
        points: s.naf.points.map(r)
      },
      doubles: s.doubles && {
        step: s.doubles.step,
        points: s.doubles.points.map(r)
      }
    }
  }
  return e
}, u.prototype.toJ = function() {
  return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
}, n(a, c.BasePoint), f.prototype.jpoint = function(t, e, s) {
  return new a(this, t, e, s)
}, a.prototype.toP = function() {
  if (this.isInfinity()) return this.curve.point(null, null);
  var t = this.z.redInvm(),
    e = t.redSqr(),
    s = this.x.redMul(e),
    r = this.y.redMul(e).redMul(t);
  return this.curve.point(s, r)
}, a.prototype.neg = function() {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
}, a.prototype.add = function(t) {
  if (this.isInfinity()) return t;
  if (t.isInfinity()) return this;
  var e = t.z.redSqr(),
    s = this.z.redSqr(),
    r = this.x.redMul(e),
    i = t.x.redMul(s),
    n = this.y.redMul(e.redMul(t.z)),
    c = t.y.redMul(s.redMul(this.z)),
    o = r.redSub(i),
    f = n.redSub(c);
  if (0 === o.cmpn(0)) return 0 !== f.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
  var u = o.redSqr(),
    a = u.redMul(o),
    d = r.redMul(u),
    p = f.redSqr().redIAdd(a).redISub(d).redISub(d),
    b = f.redMul(d.redISub(p)).redISub(n.redMul(a)),
    h = this.z.redMul(t.z).redMul(o);
  return this.curve.jpoint(p, b, h)
}, a.prototype.mixedAdd = function(t) {
  if (this.isInfinity()) return t.toJ();
  if (t.isInfinity()) return this;
  var e = this.z.redSqr(),
    s = this.x,
    r = t.x.redMul(e),
    i = this.y,
    n = t.y.redMul(e).redMul(this.z),
    c = s.redSub(r),
    o = i.redSub(n);
  if (0 === c.cmpn(0)) return 0 !== o.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
  var f = c.redSqr(),
    u = f.redMul(c),
    a = s.redMul(f),
    d = o.redSqr().redIAdd(u).redISub(a).redISub(a),
    p = o.redMul(a.redISub(d)).redISub(i.redMul(u)),
    b = this.z.redMul(c);
  return this.curve.jpoint(d, p, b)
}, a.prototype.dblp = function(t) {
  if (0 === t || this.isInfinity()) return this;
  if (!t) return this.dbl();
  if (this.curve.zeroA || this.curve.threeA) {
    var e, s = this;
    for (e = 0; e < t; e++) s = s.dbl();
    return s
  }
  var r = this.curve.a,
    i = this.curve.tinv,
    n = this.x,
    c = this.y,
    o = this.z,
    f = o.redSqr().redSqr(),
    u = c.redAdd(c);
  for (e = 0; e < t; e++) {
    var a = n.redSqr(),
      d = u.redSqr(),
      p = d.redSqr(),
      b = a.redAdd(a).redIAdd(a).redIAdd(r.redMul(f)),
      h = n.redMul(d),
      l = b.redSqr().redISub(h.redAdd(h)),
      g = h.redISub(l),
      v = b.redMul(g);
    v = v.redIAdd(v).redISub(p);
    var x = u.redMul(o);
    e + 1 < t && (f = f.redMul(p)), n = l, o = x, u = v
  }
  return this.curve.jpoint(n, u.redMul(i), o)
}, a.prototype.dbl = function() {
  return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
}, a.prototype._zeroDbl = function() {
  if (this.zOne) {
    var t, e, s, r = this.x.redSqr(),
      i = this.y.redSqr(),
      n = i.redSqr(),
      c = this.x.redAdd(i).redSqr().redISub(r).redISub(n);
    c = c.redIAdd(c);
    var o = r.redAdd(r).redIAdd(r),
      f = o.redSqr().redISub(c).redISub(c),
      u = n.redIAdd(n);
    u = (u = u.redIAdd(u)).redIAdd(u), t = f, e = o.redMul(c.redISub(f)).redISub(u), s = this.y.redAdd(this.y)
  } else {
    var a = this.x.redSqr(),
      d = this.y.redSqr(),
      p = d.redSqr(),
      b = this.x.redAdd(d).redSqr().redISub(a).redISub(p);
    b = b.redIAdd(b);
    var h = a.redAdd(a).redIAdd(a),
      l = h.redSqr(),
      g = p.redIAdd(p);
    g = (g = g.redIAdd(g)).redIAdd(g), t = l.redISub(b).redISub(b), e = h.redMul(b.redISub(t)).redISub(g), s = (s = this.y.redMul(this.z)).redIAdd(s)
  }
  return this.curve.jpoint(t, e, s)
}, a.prototype._threeDbl = function() {
  if (this.zOne) {
    var t, e, s, r = this.x.redSqr(),
      i = this.y.redSqr(),
      n = i.redSqr(),
      c = this.x.redAdd(i).redSqr().redISub(r).redISub(n);
    c = c.redIAdd(c);
    var o = r.redAdd(r).redIAdd(r).redIAdd(this.curve.a),
      f = o.redSqr().redISub(c).redISub(c);
    t = f;
    var u = n.redIAdd(n);
    u = (u = u.redIAdd(u)).redIAdd(u), e = o.redMul(c.redISub(f)).redISub(u), s = this.y.redAdd(this.y)
  } else {
    var a = this.z.redSqr(),
      d = this.y.redSqr(),
      p = this.x.redMul(d),
      b = this.x.redSub(a).redMul(this.x.redAdd(a));
    b = b.redAdd(b).redIAdd(b);
    var h = p.redIAdd(p),
      l = (h = h.redIAdd(h)).redAdd(h);
    t = b.redSqr().redISub(l), s = this.y.redAdd(this.z).redSqr().redISub(d).redISub(a);
    var g = d.redSqr();
    g = (g = (g = g.redIAdd(g)).redIAdd(g)).redIAdd(g), e = b.redMul(h.redISub(t)).redISub(g)
  }
  return this.curve.jpoint(t, e, s)
}, a.prototype._dbl = function() {
  var t = this.curve.a,
    e = this.x,
    s = this.y,
    r = this.z,
    i = r.redSqr().redSqr(),
    n = e.redSqr(),
    c = s.redSqr(),
    o = n.redAdd(n).redIAdd(n).redIAdd(t.redMul(i)),
    f = e.redAdd(e),
    u = (f = f.redIAdd(f)).redMul(c),
    a = o.redSqr().redISub(u.redAdd(u)),
    d = u.redISub(a),
    p = c.redSqr();
  p = (p = (p = p.redIAdd(p)).redIAdd(p)).redIAdd(p);
  var b = o.redMul(d).redISub(p),
    h = s.redAdd(s).redMul(r);
  return this.curve.jpoint(a, b, h)
}, a.prototype.trpl = function() {
  if (!this.curve.zeroA) return this.dbl().add(this);
  var t = this.x.redSqr(),
    e = this.y.redSqr(),
    s = this.z.redSqr(),
    r = e.redSqr(),
    i = t.redAdd(t).redIAdd(t),
    n = i.redSqr(),
    c = this.x.redAdd(e).redSqr().redISub(t).redISub(r),
    o = (c = (c = (c = c.redIAdd(c)).redAdd(c).redIAdd(c)).redISub(n)).redSqr(),
    f = r.redIAdd(r);
  f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
  var u = i.redIAdd(c).redSqr().redISub(n).redISub(o).redISub(f),
    a = e.redMul(u);
  a = (a = a.redIAdd(a)).redIAdd(a);
  var d = this.x.redMul(o).redISub(a);
  d = (d = d.redIAdd(d)).redIAdd(d);
  var p = this.y.redMul(u.redMul(f.redISub(u)).redISub(c.redMul(o)));
  p = (p = (p = p.redIAdd(p)).redIAdd(p)).redIAdd(p);
  var b = this.z.redAdd(c).redSqr().redISub(s).redISub(o);
  return this.curve.jpoint(d, p, b)
}, a.prototype.mul = function(t, e) {
  return t = new i(t, e), this.curve._wnafMul(this, t)
}, a.prototype.eq = function(t) {
  if ("affine" === t.type) return this.eq(t.toJ());
  if (this === t) return !0;
  var e = this.z.redSqr(),
    s = t.z.redSqr();
  if (0 !== this.x.redMul(s).redISub(t.x.redMul(e)).cmpn(0)) return !1;
  var r = e.redMul(this.z),
    i = s.redMul(t.z);
  return 0 === this.y.redMul(i).redISub(t.y.redMul(r)).cmpn(0)
}, a.prototype.eqXToP = function(t) {
  var e = this.z.redSqr(),
    s = t.toRed(this.curve.red).redMul(e);
  if (0 === this.x.cmp(s)) return !0;
  for (var r = t.clone(), i = this.curve.redN.redMul(e);;) {
    if (r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0) return !1;
    if (s.redIAdd(i), 0 === this.x.cmp(s)) return !0
  }
}, a.prototype.inspect = function() {
  return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
}, a.prototype.isInfinity = function() {
  return 0 === this.z.cmpn(0)
}
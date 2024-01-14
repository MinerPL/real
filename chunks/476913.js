"use strict";
var e = n("714919"),
  o = n("289275"),
  i = n("761300"),
  u = n("359882"),
  s = n("418689"),
  c = n("597018"),
  f = n("162208"),
  a = n("522552"),
  p = n("605357"),
  v = n("303061"),
  l = n("735320"),
  y = n("979095"),
  h = n("739555"),
  x = n("723786"),
  d = n("633050"),
  g = n("321956"),
  b = n("837447"),
  m = n("504074"),
  S = n("631226"),
  w = n("730242"),
  O = n("453084"),
  j = n("958260"),
  A = n("138202"),
  E = n("943973"),
  P = n("54704"),
  T = n("233116"),
  k = n("363964"),
  F = n("94121"),
  I = n("264327"),
  L = n("202891"),
  D = n("355817"),
  M = n("30723"),
  _ = n("157104"),
  R = n("111827"),
  C = n("733931"),
  N = n("200258"),
  z = n("485863").forEach,
  G = F("hidden"),
  B = "Symbol",
  W = "prototype",
  J = N.set,
  V = N.getterFor(B),
  H = Object[W],
  K = o.Symbol,
  U = K && K[W],
  RangeError = o.RangeError,
  TypeError = o.TypeError,
  q = o.QObject,
  Y = O.f,
  X = j.f,
  $ = S.f,
  Q = E.f,
  Z = u([].push),
  tt = k("symbols"),
  tr = k("op-symbols"),
  tn = k("wks"),
  te = !q || !q[W] || !q[W].findChild,
  to = function(t, r, n) {
    var e = Y(H, r);
    e && delete H[r], X(t, r, n), e && t !== H && X(H, r, e)
  },
  ti = c && a(function() {
    return 7 !== g(X({}, "a", {
      get: function() {
        return X(this, "a", {
          value: 7
        }).a
      }
    })).a
  }) ? to : X,
  tu = function(t, r) {
    var n = tt[t] = g(U);
    return J(n, {
      type: B,
      tag: t,
      description: r
    }), !c && (n.description = r), n
  },
  ts = function(t, r, n) {
    t === H && ts(tr, r, n), l(t);
    var e = h(r);
    return (l(n), p(tt, e)) ? (n.enumerable ? (p(t, G) && t[G][e] && (t[G][e] = !1), n = g(n, {
      enumerable: d(0, !1)
    })) : (!p(t, G) && X(t, G, d(1, {})), t[G][e] = !0), ti(t, e, n)) : X(t, e, n)
  },
  tc = function(t, r) {
    l(t);
    var n = y(r);
    return z(b(n).concat(tv(n)), function(r) {
      (!c || i(tf, n, r)) && ts(t, r, n[r])
    }), t
  },
  tf = function(t) {
    var r = h(t),
      n = i(Q, this, r);
    return (!(this === H && p(tt, r)) || !!p(tr, r)) && (!(n || !p(this, r) || !p(tt, r) || p(this, G) && this[G][r]) || n)
  },
  ta = function(t, r) {
    var n = y(t),
      e = h(r);
    if (!(n === H && p(tt, e)) || p(tr, e)) {
      var o = Y(n, e);
      return o && p(tt, e) && !(p(n, G) && n[G][e]) && (o.enumerable = !0), o
    }
  },
  tp = function(t) {
    var r = $(y(t)),
      n = [];
    return z(r, function(t) {
      !p(tt, t) && !p(I, t) && Z(n, t)
    }), n
  },
  tv = function(t) {
    var r = t === H,
      n = $(r ? tr : y(t)),
      e = [];
    return z(n, function(t) {
      p(tt, t) && (!r || p(H, t)) && Z(e, tt[t])
    }), e
  };
!f && (P(U = (K = function() {
  if (v(U, this)) throw new TypeError("Symbol is not a constructor");
  var t = arguments.length && void 0 !== arguments[0] ? x(arguments[0]) : void 0,
    r = L(t),
    n = function(t) {
      var e = void 0 === this ? o : this;
      e === H && i(n, tr, t), p(e, G) && p(e[G], r) && (e[G][r] = !1);
      var u = d(1, t);
      try {
        ti(e, r, u)
      } catch (t) {
        if (!(t instanceof RangeError)) throw t;
        to(e, r, u)
      }
    };
  return c && te && ti(H, r, {
    configurable: !0,
    set: n
  }), tu(r, t)
})[W], "toString", function() {
  return V(this).tag
}), P(K, "withoutSetter", function(t) {
  return tu(L(t), t)
}), E.f = tf, j.f = ts, A.f = tc, O.f = ta, m.f = S.f = tp, w.f = tv, M.f = function(t) {
  return tu(D(t), t)
}, c && (T(U, "description", {
  configurable: !0,
  get: function() {
    return V(this).description
  }
}), !s && P(H, "propertyIsEnumerable", tf, {
  unsafe: !0
}))), e({
  global: !0,
  constructor: !0,
  wrap: !0,
  forced: !f,
  sham: !f
}, {
  Symbol: K
}), z(b(tn), function(t) {
  _(t)
}), e({
  target: B,
  stat: !0,
  forced: !f
}, {
  useSetter: function() {
    te = !0
  },
  useSimple: function() {
    te = !1
  }
}), e({
  target: "Object",
  stat: !0,
  forced: !f,
  sham: !c
}, {
  create: function(t, r) {
    return void 0 === r ? g(t) : tc(g(t), r)
  },
  defineProperty: ts,
  defineProperties: tc,
  getOwnPropertyDescriptor: ta
}), e({
  target: "Object",
  stat: !0,
  forced: !f
}, {
  getOwnPropertyNames: tp
}), R(), C(K, B), I[G] = !0
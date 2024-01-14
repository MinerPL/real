"use strict";
var r, a, o, i, l = n("714919"),
  u = n("418689"),
  s = n("111878"),
  c = n("289275"),
  d = n("761300"),
  f = n("54704"),
  p = n("408356"),
  h = n("733931"),
  m = n("200383"),
  y = n("338867"),
  v = n("268540"),
  g = n("490653"),
  b = n("270700"),
  _ = n("729853"),
  k = n("693858").set,
  C = n("836377"),
  w = n("165567"),
  S = n("160474"),
  N = n("772305"),
  x = n("200258"),
  P = n("389316"),
  A = n("51494"),
  R = n("95536"),
  F = "Promise",
  O = A.CONSTRUCTOR,
  E = A.REJECTION_EVENT,
  I = A.SUBCLASSING,
  M = x.getterFor(F),
  T = x.set,
  B = P && P.prototype,
  D = P,
  L = B,
  TypeError = c.TypeError,
  V = c.document,
  j = c.process,
  U = R.f,
  q = U,
  K = !!(V && V.createEvent && c.dispatchEvent),
  H = "unhandledrejection",
  z = function(e) {
    var t;
    return !!(g(e) && v(t = e.then)) && t
  },
  W = function(e, t) {
    var n, r, a, o = t.value,
      i = 1 === t.state,
      l = i ? e.ok : e.fail,
      u = e.resolve,
      s = e.reject,
      c = e.domain;
    try {
      l ? (!i && (2 === t.rejection && Z(t), t.rejection = 1), !0 === l ? n = o : (c && c.enter(), n = l(o), c && (c.exit(), a = !0)), n === e.promise ? s(new TypeError("Promise-chain cycle")) : (r = z(n)) ? d(r, n, u, s) : u(n)) : s(o)
    } catch (e) {
      c && !a && c.exit(), s(e)
    }
  },
  G = function(e, t) {
    !e.notified && (e.notified = !0, C(function() {
      for (var n, r = e.reactions; n = r.get();) W(n, e);
      e.notified = !1, t && !e.rejection && Y(e)
    }))
  },
  $ = function(e, t, n) {
    var r, a;
    K ? ((r = V.createEvent("Event")).promise = t, r.reason = n, r.initEvent(e, !1, !0), c.dispatchEvent(r)) : r = {
      promise: t,
      reason: n
    }, !E && (a = c["on" + e]) ? a(r) : e === H && w("Unhandled promise rejection", n)
  },
  Y = function(e) {
    d(k, c, function() {
      var t, n = e.facade,
        r = e.value;
      if (Q(e) && (t = S(function() {
          s ? j.emit("unhandledRejection", r, n) : $(H, n, r)
        }), e.rejection = s || Q(e) ? 2 : 1, t.error)) throw t.value
    })
  },
  Q = function(e) {
    return 1 !== e.rejection && !e.parent
  },
  Z = function(e) {
    d(k, c, function() {
      var t = e.facade;
      s ? j.emit("rejectionHandled", t) : $("rejectionhandled", t, e.value)
    })
  },
  J = function(e, t, n) {
    return function(r) {
      e(t, r, n)
    }
  },
  X = function(e, t, n) {
    !e.done && (e.done = !0, n && (e = n), e.value = t, e.state = 2, G(e, !0))
  },
  ee = function(e, t, n) {
    if (!e.done) {
      e.done = !0, n && (e = n);
      try {
        if (e.facade === t) throw new TypeError("Promise can't be resolved itself");
        var r = z(t);
        r ? C(function() {
          var n = {
            done: !1
          };
          try {
            d(r, t, J(ee, n, e), J(X, n, e))
          } catch (t) {
            X(n, t, e)
          }
        }) : (e.value = t, e.state = 1, G(e, !1))
      } catch (t) {
        X({
          done: !1
        }, t, e)
      }
    }
  };
if (O && (L = (D = function(e) {
    b(this, L), y(e), d(r, this);
    var t = M(this);
    try {
      e(J(ee, t), J(X, t))
    } catch (e) {
      X(t, e)
    }
  }).prototype, (r = function(e) {
    T(this, {
      type: F,
      done: !1,
      notified: !1,
      parent: !1,
      reactions: new N,
      rejection: !1,
      state: 0,
      value: void 0
    })
  }).prototype = f(L, "then", function(e, t) {
    var n = M(this),
      r = U(_(this, D));
    return n.parent = !0, r.ok = !v(e) || e, r.fail = v(t) && t, r.domain = s ? j.domain : void 0, 0 === n.state ? n.reactions.add(r) : C(function() {
      W(r, n)
    }), r.promise
  }), a = function() {
    var e = new r,
      t = M(e);
    this.promise = e, this.resolve = J(ee, t), this.reject = J(X, t)
  }, R.f = U = function(e) {
    return e === D || e === o ? new a(e) : q(e)
  }, !u && v(P) && B !== Object.prototype)) {
  i = B.then, !I && f(B, "then", function(e, t) {
    var n = this;
    return new D(function(e, t) {
      d(i, n, e, t)
    }).then(e, t)
  }, {
    unsafe: !0
  });
  try {
    delete B.constructor
  } catch (e) {}
  p && p(B, L)
}
l({
  global: !0,
  constructor: !0,
  wrap: !0,
  forced: O
}, {
  Promise: D
}), h(D, F, !1, !0), m(F)
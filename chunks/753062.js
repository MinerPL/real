"use strict";
n("422200");
var e = n("859514"),
  i = n("503486"),
  o = n("868822"),
  u = n("64980"),
  a = n("814026"),
  f = n("768897"),
  c = n("484784"),
  s = n("18563"),
  l = n("985797"),
  h = n("89157"),
  p = n("662918"),
  v = n("515011"),
  g = n("88052"),
  d = n("125359"),
  y = n("59393"),
  b = n("886639"),
  m = n("681802"),
  _ = n("418855"),
  w = n("472960"),
  k = n("998270"),
  E = n("148066"),
  R = n("16447"),
  x = n("55082"),
  A = n("579697"),
  S = n("79807"),
  M = n("174669"),
  O = n("492470"),
  I = M("iterator"),
  N = "URLSearchParams",
  L = N + "Iterator",
  j = v.set,
  P = v.getterFor(N),
  U = v.getterFor(L),
  q = Object.getOwnPropertyDescriptor,
  B = function(t) {
    if (!a) return i[t];
    var r = q(i, t);
    return r && r.value
  },
  C = B("fetch"),
  T = B("Request"),
  Headers = B("Headers"),
  z = T && T.prototype,
  D = Headers && Headers.prototype,
  RegExp = i.RegExp,
  TypeError = i.TypeError,
  F = i.decodeURIComponent,
  W = i.encodeURIComponent,
  $ = u("".charAt),
  H = u([].join),
  Z = u([].push),
  G = u("".replace),
  J = u([].shift),
  V = u([].splice),
  Y = u("".split),
  K = u("".slice),
  X = /\+/g,
  Q = [, , , , ],
  tt = function(t) {
    try {
      return F(t)
    } catch (r) {
      return t
    }
  },
  tr = function(t) {
    var r, n = G(t, X, " "),
      e = 4;
    try {
      return F(n)
    } catch (t) {
      for (; e;) {
        ;
        n = G(n, Q[(r = e--) - 1] || (Q[r - 1] = RegExp("((?:%[\\da-f]{2}){" + r + "})", "gi")), tt)
      }
      return n
    }
  },
  tn = /[!'()~]|%20/g,
  te = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  },
  ti = function(t) {
    return te[t]
  },
  to = function(t) {
    return G(W(t), tn, ti)
  },
  tu = p(function(t, r) {
    j(this, {
      type: L,
      iterator: x(P(t).entries),
      kind: r
    })
  }, "Iterator", function() {
    var t = U(this),
      r = t.kind,
      n = t.iterator.next(),
      e = n.value;
    return !n.done && (n.value = "keys" === r ? e.key : "values" === r ? e.value : [e.key, e.value]), n
  }, !0),
  ta = function(t) {
    this.entries = [], this.url = null, void 0 !== t && (w(t) ? this.parseObject(t) : this.parseQuery("string" == typeof t ? "?" === $(t, 0) ? K(t, 1) : t : k(t)))
  };
ta.prototype = {
  type: N,
  bindURL: function(t) {
    this.url = t, this.update()
  },
  parseObject: function(t) {
    var r, n, e, i, u, a, f, c = A(t);
    if (c)
      for (n = (r = x(t, c)).next; !(e = o(n, r)).done;) {
        if ((a = o(u = (i = x(_(e.value))).next, i)).done || (f = o(u, i)).done || !o(u, i).done) throw TypeError("Expected sequence with length 2");
        Z(this.entries, {
          key: k(a.value),
          value: k(f.value)
        })
      } else
        for (var s in t) y(t, s) && Z(this.entries, {
          key: s,
          value: k(t[s])
        })
  },
  parseQuery: function(t) {
    if (t) {
      for (var r, n, e = Y(t, "&"), i = 0; i < e.length;)(r = e[i++]).length && (n = Y(r, "="), Z(this.entries, {
        key: tr(J(n)),
        value: tr(H(n, "="))
      }))
    }
  },
  serialize: function() {
    for (var t, r = this.entries, n = [], e = 0; e < r.length;) Z(n, to((t = r[e++]).key) + "=" + to(t.value));
    return H(n, "&")
  },
  update: function() {
    this.entries.length = 0, this.parseQuery(this.url.query)
  },
  updateURL: function() {
    this.url && this.url.update()
  }
};
var tf = function() {
    g(this, tc);
    var t = arguments.length > 0 ? arguments[0] : void 0,
      r = j(this, new ta(t));
    !a && (this.size = r.entries.length)
  },
  tc = tf.prototype;
if (l(tc, {
    append: function(t, r) {
      var n = P(this);
      S(arguments.length, 2), Z(n.entries, {
        key: k(t),
        value: k(r)
      }), !a && this.length++, n.updateURL()
    },
    delete: function(t) {
      for (var r = P(this), n = S(arguments.length, 1), e = r.entries, i = k(t), o = n < 2 ? void 0 : arguments[1], u = void 0 === o ? o : k(o), f = 0; f < e.length;) {
        var c = e[f];
        if (c.key === i && (void 0 === u || c.value === u)) {
          if (V(e, f, 1), void 0 !== u) break
        } else f++
      }!a && (this.size = e.length), r.updateURL()
    },
    get: function(t) {
      var r = P(this).entries;
      S(arguments.length, 1);
      for (var n = k(t), e = 0; e < r.length; e++)
        if (r[e].key === n) return r[e].value;
      return null
    },
    getAll: function(t) {
      var r = P(this).entries;
      S(arguments.length, 1);
      for (var n = k(t), e = [], i = 0; i < r.length; i++) r[i].key === n && Z(e, r[i].value);
      return e
    },
    has: function(t) {
      for (var r = P(this).entries, n = S(arguments.length, 1), e = k(t), i = n < 2 ? void 0 : arguments[1], o = void 0 === i ? i : k(i), u = 0; u < r.length;) {
        var a = r[u++];
        if (a.key === e && (void 0 === o || a.value === o)) return !0
      }
      return !1
    },
    set: function(t, r) {
      var n, e = P(this);
      S(arguments.length, 1);
      for (var i = e.entries, o = !1, u = k(t), f = k(r), c = 0; c < i.length; c++)(n = i[c]).key === u && (o ? V(i, c--, 1) : (o = !0, n.value = f));
      !o && Z(i, {
        key: u,
        value: f
      }), !a && (this.size = i.length), e.updateURL()
    },
    sort: function() {
      var t = P(this);
      O(t.entries, function(t, r) {
        return t.key > r.key ? 1 : -1
      }), t.updateURL()
    },
    forEach: function(t) {
      for (var r, n = P(this).entries, e = b(t, arguments.length > 1 ? arguments[1] : void 0), i = 0; i < n.length;) e((r = n[i++]).value, r.key, this)
    },
    keys: function() {
      return new tu(this, "keys")
    },
    values: function() {
      return new tu(this, "values")
    },
    entries: function() {
      return new tu(this, "entries")
    }
  }, {
    enumerable: !0
  }), c(tc, I, tc.entries, {
    name: "entries"
  }), c(tc, "toString", function() {
    return P(this).serialize()
  }, {
    enumerable: !0
  }), a && s(tc, "size", {
    get: function() {
      return P(this).entries.length
    },
    configurable: !0,
    enumerable: !0
  }), h(tf, N), e({
    global: !0,
    constructor: !0,
    forced: !f
  }, {
    URLSearchParams: tf
  }), !f && d(Headers)) {
  var ts = u(D.has),
    tl = u(D.set),
    th = function(t) {
      if (w(t)) {
        var r, n = t.body;
        if (m(n) === N) return !ts(r = t.headers ? new Headers(t.headers) : new Headers, "content-type") && tl(r, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), E(t, {
          body: R(0, k(n)),
          headers: R(0, r)
        })
      }
      return t
    };
  if (d(C) && e({
      global: !0,
      enumerable: !0,
      dontCallGetSet: !0,
      forced: !0
    }, {
      fetch: function(t) {
        return C(t, arguments.length > 1 ? th(arguments[1]) : {})
      }
    }), d(T)) {
    var tp = function(t) {
      return g(this, z), new T(t, arguments.length > 1 ? th(arguments[1]) : {})
    };
    z.constructor = tp, tp.prototype = z, e({
      global: !0,
      constructor: !0,
      dontCallGetSet: !0,
      forced: !0
    }, {
      Request: tp
    })
  }
}
t.exports = {
  URLSearchParams: tf,
  getState: P
}
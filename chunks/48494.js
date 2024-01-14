"use strict";
var r = n("520462"),
  o = n("745378"),
  a = n("648644"),
  i = n("812095"),
  s = n("293471"),
  c = i("Object.prototype.toString"),
  l = n("149384")(),
  u = "undefined" == typeof globalThis ? n.g : globalThis,
  d = o(),
  p = i("String.prototype.slice"),
  f = Object.getPrototypeOf,
  m = i("Array.prototype.indexOf", !0) || function(e, t) {
    for (var n = 0; n < e.length; n += 1)
      if (e[n] === t) return n;
    return -1
  },
  h = {
    __proto__: null
  };
l && s && f ? r(d, function(e) {
  var t = new u[e];
  if (Symbol.toStringTag in t) {
    var n = f(t),
      r = s(n, Symbol.toStringTag);
    !r && (r = s(f(n), Symbol.toStringTag)), h["$" + e] = a(r.get)
  }
}) : r(d, function(e) {
  var t = new u[e];
  h["$" + e] = a(t.slice)
});
var g = function(e) {
    var t = !1;
    return r(h, function(n, r) {
      if (!t) try {
        "$" + n(e) === r && (t = p(r, 1))
      } catch (e) {}
    }), t
  },
  v = function(e) {
    var t = !1;
    return r(h, function(n, r) {
      if (!t) try {
        n(e), t = p(r, 1)
      } catch (e) {}
    }), t
  };
e.exports = function(e) {
  if (!e || "object" != typeof e) return !1;
  if (!l) {
    var t = p(c(e), 8, -1);
    return m(d, t) > -1 ? t : "Object" === t && v(e)
  }
  return s ? g(e) : null
}
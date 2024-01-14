r("70102");
var n = r("952133"),
  i = r("645942"),
  o = r("261497"),
  a = Math.max,
  c = Math.min;
t.exports = function(t, e, r) {
  var l, u, s, f, p, d, v = 0,
    h = !1,
    g = !1,
    m = !0;
  if ("function" != typeof t) throw TypeError("Expected a function");

  function b(e) {
    var r = l,
      n = u;
    return l = u = void 0, v = e, f = t.apply(n, r)
  }
  e = o(e) || 0, n(r) && (h = !!r.leading, s = (g = "maxWait" in r) ? a(o(r.maxWait) || 0, e) : s, m = "trailing" in r ? !!r.trailing : m);

  function y(t) {
    var r = t - d,
      n = t - v;
    return void 0 === d || r >= e || r < 0 || g && n >= s
  }

  function w() {
    var t, r, n, o, a = i();
    if (y(a)) return x(a);
    p = setTimeout(w, (r = (t = a) - d, n = t - v, o = e - r, g ? c(o, s - n) : o))
  }

  function x(t) {
    return (p = void 0, m && l) ? b(t) : (l = u = void 0, f)
  }

  function O() {
    var t, r = i(),
      n = y(r);
    if (l = arguments, u = this, d = r, n) {
      if (void 0 === p) {
        ;
        return v = t = d, p = setTimeout(w, e), h ? b(t) : f
      }
      if (g) return clearTimeout(p), p = setTimeout(w, e), b(d)
    }
    return void 0 === p && (p = setTimeout(w, e)), f
  }
  return O.cancel = function() {
    void 0 !== p && clearTimeout(p), v = 0, l = d = u = p = void 0
  }, O.flush = function() {
    return void 0 === p ? f : x(i())
  }, O
}
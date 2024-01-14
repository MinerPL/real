var n = r("863847"),
  o = r("156577"),
  a = r("364591"),
  i = r("398580"),
  u = r("952133"),
  l = r("298169"),
  c = r("236315");
e.exports = function e(t, r, s, f, d) {
  t !== r && a(r, function(a, l) {
    if (d || (d = new n), u(a)) i(t, r, l, s, e, f, d);
    else {
      var p = f ? f(c(t, l), a, l + "", t, r, d) : void 0;
      void 0 === p && (p = a), o(t, l, p)
    }
  }, l)
}
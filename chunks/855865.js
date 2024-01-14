var e = n("146007"),
  o = n("354069");
t.exports = function(t, r, n, i) {
  var u = n.length,
    a = u,
    c = !i;
  if (null == t) return !a;
  for (t = Object(t); u--;) {
    var s = n[u];
    if (c && s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) return !1
  }
  for (; ++u < a;) {
    var f = (s = n[u])[0],
      p = t[f],
      l = s[1];
    if (c && s[2]) {
      if (void 0 === p && !(f in t)) return !1
    } else {
      var v = new e;
      if (i) var h = i(p, l, f, t, r, v);
      if (!(void 0 === h ? o(l, p, 3, i, v) : h)) return !1
    }
  }
  return !0
}
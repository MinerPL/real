var r = s("626785"),
  i = s("698273"),
  n = s("583048"),
  c = s("854060"),
  o = s("492692"),
  f = s("558304"),
  u = s("540893");
t.exports = function(t, e, s) {
  var a = -1;
  return e = r(e.length ? e : [u], o(i)), c(n(t, function(t, s, i) {
    return {
      criteria: r(e, function(e) {
        return e(t)
      }),
      index: ++a,
      value: t
    }
  }), function(t, e) {
    return f(t, e, s)
  })
}
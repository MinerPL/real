var n = r("626849"),
  i = r("111071"),
  o = r("261497"),
  s = r("610664"),
  a = n.isFinite,
  u = Math.min;
e.exports = function(e) {
  var t = Math[e];
  return function(e, r) {
    if (e = o(e), (r = null == r ? 0 : u(i(r), 292)) && a(e)) {
      var n = (s(e) + "e").split("e");
      return +((n = (s(t(n[0] + "e" + (+n[1] + r))) + "e").split("e"))[0] + "e" + (+n[1] - r))
    }
    return t(e)
  }
}
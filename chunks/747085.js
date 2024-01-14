var n = r("210458"),
  o = r("720269"),
  a = r("67034"),
  i = r("486036"),
  u = r("161456");
e.exports = function(e) {
  return "function" == typeof e ? e : null == e ? a : "object" == typeof e ? i(e) ? o(e[0], e[1]) : n(e) : u(e)
}
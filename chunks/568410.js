var e = u("389832"),
  r = u("488605"),
  f = u("907193"),
  o = u("890305");
t.exports = function(t) {
  return function(n) {
    var u = r(n = o(n)) ? f(n) : void 0,
      i = u ? u[0] : n.charAt(0),
      c = u ? e(u, 1).join("") : n.slice(1);
    return i[t]() + c
  }
}
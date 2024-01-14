var Symbol = e("506264"),
  n = e("630574"),
  o = e("486036"),
  i = e("543066"),
  u = 1 / 0,
  a = Symbol ? Symbol.prototype : void 0,
  c = a ? a.toString : void 0;
t.exports = function t(r) {
  if ("string" == typeof r) return r;
  if (o(r)) return n(r, t) + "";
  if (i(r)) return c ? c.call(r) : "";
  var e = r + "";
  return "0" == e && 1 / r == -u ? "-0" : e
}
var e = n("354069"),
  o = n("990873"),
  i = n("148946"),
  u = n("812411"),
  a = n("888633"),
  c = n("260739"),
  s = n("754076");
t.exports = function(t, r) {
  return u(t) && a(r) ? c(s(t), r) : function(n) {
    var u = o(n, t);
    return void 0 === u && u === r ? i(n, t) : e(r, u, 3)
  }
}
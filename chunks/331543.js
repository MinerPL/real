"use strict";
s("854508"), s("70102");
var r = s("464510"),
  i = s("765379"),
  n = s("667769"),
  c = s("640107"),
  o = s("554741"),
  f = s("903389"),
  u = s("862440"),
  a = s("338100"),
  d = s("955006"),
  p = s("812095"),
  b = s("264871"),
  h = Object("a"),
  l = "a" !== h[0] || !(0 in h),
  g = p("String.prototype.split");
t.exports = function(t) {
  var e, s = a(this),
    p = u((l && b(s) ? g(s, "") : s).length);
  if (!f(t)) throw TypeError("Array.prototype.map callback must be a function");
  arguments.length > 1 && (e = arguments[1]);
  for (var h = r(s, p), v = 0; v < p;) {
    var x = d(v);
    if (o(s, x)) {
      var m = i(t, e, [c(s, x), v, s]);
      n(h, x, m)
    }
    v += 1
  }
  return h
}
"use strict";
var r = n("362776"),
  a = n("761300"),
  o = n("338867"),
  i = n("432480"),
  l = n("462892"),
  u = n("130170"),
  s = [].push;
e.exports = function(e) {
  var t, n, c, d, f = arguments.length,
    p = f > 1 ? arguments[1] : void 0;
  return (i(this), (t = void 0 !== p) && o(p), l(e)) ? new this : (n = [], t ? (c = 0, d = r(p, f > 2 ? arguments[2] : void 0), u(e, function(e) {
    a(s, n, d(e, c++))
  })) : u(e, s, {
    that: n
  }), new this(n))
}
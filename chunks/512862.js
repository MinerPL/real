"use strict";
r.r(t), r.d(t, {
  default: function() {
    return d
  }
}), r("781738");
var n = r("658542"),
  o = r("658335"),
  a = r("794666"),
  i = r("138600"),
  u = /^\[object .+?Constructor\]$/,
  l = Object.prototype,
  c = Function.prototype.toString,
  s = l.hasOwnProperty,
  f = RegExp("^" + c.call(s).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
  d = function(e) {
    return !(!(0, a.default)(e) || (0, o.default)(e)) && ((0, n.default)(e) ? f : u).test((0, i.default)(e))
  }
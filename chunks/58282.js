"use strict";
r.r(t), r.d(t, {
  default: function() {
    return a
  }
});
var n = r("794666"),
  o = Object.create,
  a = function() {
    function e() {}
    return function(t) {
      if (!(0, n.default)(t)) return {};
      if (o) return o(t);
      e.prototype = t;
      var r = new e;
      return e.prototype = void 0, r
    }
  }()
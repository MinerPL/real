"use strict";
r.r(t), r.d(t, {
  default: function() {
    return n
  }
}), r("70102");
var a = r("983338");

function n(e, t) {
  if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && (0, a.default)(e, t)
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var r = n("568906"),
  a = n("691296");

function o(e, t) {
  for (var n = 0; n < t.length; n++) {
    var o = t[n];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), r(e, (0, a.default)(o.key), o)
  }
}

function i(e, t, n) {
  return t && o(e.prototype, t), n && o(e, n), r(e, "prototype", {
    writable: !1
  }), e
}
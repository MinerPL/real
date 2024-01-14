"use strict";
r.r(t), r.d(t, {
  default: function() {
    return a
  }
}), r("70102");
var n = r("964020"),
  o = r("794666"),
  a = function(e, t, r) {
    var a = !0,
      i = !0;
    if ("function" != typeof e) throw TypeError("Expected a function");
    return (0, o.default)(r) && (a = "leading" in r ? !!r.leading : a, i = "trailing" in r ? !!r.trailing : i), (0, n.default)(e, t, {
      leading: a,
      maxWait: t,
      trailing: i
    })
  }
"use strict";
var r = n("714919"),
  a = n("751779"),
  o = n("688274");
r({
  target: "Map",
  proto: !0,
  real: !0,
  forced: !0
}, {
  keyOf: function(e) {
    var t = o(a(this), function(t, n) {
      if (t === e) return {
        key: n
      }
    }, !0);
    return t && t.key
  }
})
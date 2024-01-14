"use strict";
var r = n("714919"),
  a = n("751779"),
  o = n("151790").remove;
r({
  target: "Map",
  proto: !0,
  real: !0,
  forced: !0
}, {
  deleteAll: function() {
    for (var e, t = a(this), n = !0, r = 0, i = arguments.length; r < i; r++) e = o(t, arguments[r]), n = n && e;
    return !!n
  }
})
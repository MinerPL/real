"use strict";
var e = n("859514"),
  i = n("383053").left,
  o = n("528151"),
  u = n("693523"),
  a = n("106106");
e({
  target: "Array",
  proto: !0,
  forced: !a && u > 79 && u < 83 || !o("reduce")
}, {
  reduce: function(t) {
    var r = arguments.length;
    return i(this, t, r, r > 1 ? arguments[1] : void 0)
  }
})
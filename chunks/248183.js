"use strict";
var e = n("859514"),
  i = n("427191").findLastIndex,
  o = n("505713");
e({
  target: "Array",
  proto: !0
}, {
  findLastIndex: function(t) {
    return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
  }
}), o("findLastIndex")
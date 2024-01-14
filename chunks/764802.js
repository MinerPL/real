"use strict";
var r = n("714919"),
  a = n("85610").includes,
  o = n("522552"),
  i = n("865275");
r({
  target: "Array",
  proto: !0,
  forced: o(function() {
    return ![, ].includes()
  })
}, {
  includes: function(e) {
    return a(this, e, arguments.length > 1 ? arguments[1] : void 0)
  }
}), i("includes")
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var r = n("794040"),
  a = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function(e) {
      var t = e.state,
        n = e.name;
      t.modifiersData[n] = (0, r.default)({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: "absolute",
        placement: t.placement
      })
    },
    data: {}
  }
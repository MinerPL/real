"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var a = n("862205");
let l = (0, a.createExperiment)({
  kind: "guild",
  id: "2023-01_shared_canvas",
  label: "Shared Canvas",
  defaultConfig: {
    isSharedCanvasEnabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable Shared Canvas",
    config: {
      isSharedCanvasEnabled: !0
    }
  }]
});
var s = l
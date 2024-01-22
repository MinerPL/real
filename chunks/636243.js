"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var i = (0, n("862205").createExperiment)({
  kind: "user",
  id: "2024-01_h265_desktop_decode",
  label: "H.265 Desktop Decode",
  defaultConfig: {
    signalH265DesktopDecode: !1
  },
  treatments: [{
    id: 1,
    label: "Desktop H.265 Decode",
    config: {
      signalH265DesktopDecode: !0
    }
  }]
})
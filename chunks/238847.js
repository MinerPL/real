"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var i = (0, n("862205").createExperiment)({
  kind: "user",
  id: "2023-07_h265_for_windows_with_nvidia",
  label: "Test how h265 works on Windows with Nvidia nvenc codec",
  defaultConfig: {
    signalH265SupportNvenc: !1
  },
  treatments: [{
    id: 1,
    label: "Calling with H.265",
    config: {
      signalH265SupportNvenc: !0
    }
  }]
})
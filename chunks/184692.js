"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var i = n("37983"),
  l = n("884691"),
  s = n("129722"),
  a = n("477633"),
  r = l.memo(function(e) {
    let {
      fineTuning: t,
      fineTuningResolution: n,
      duration: l
    } = e, {
      file: r,
      audio: o
    } = (0, s.useAudioTrimmerStore)();
    return (0, i.jsx)(a.default, {
      file: r,
      audio: o,
      waveformSettings: {
        fineTuning: t,
        fineTuningResolution: n,
        duration: l
      }
    })
  })
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("845579"),
  u = n("42887"),
  o = n("829536");

function r(e) {
  let t = function() {
      var e;
      let t = s.SoundboardSettings.getSetting();
      return (0, o.amplitudeToPerceptual)(null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 100) / 100
    }(),
    n = Math.min(u.default.getOutputVolume() / 100, 1);
  return Math.min(e * t * n, 1)
}
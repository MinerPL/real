"use strict";
n.r(t), n("70102");
var i = n("784063"),
  r = n("605250"),
  s = n("773336"),
  a = n("50885");
(0, i.inject)({
  supported() {
    try {
      if (__OVERLAY__);
      else if (s.isPlatformEmbedded) {
        let e = (0, i.getVoiceEngine)();
        if (null == e.VoiceConnection || null == e.setVideoOutputSink && null == e.addVideoOutputSink) throw Error("voe function missing");
        return !0
      }
    } catch (e) {
      new(0, r.default)("injectMediaEngine").error("Potentially corrupt installation:", e.message)
    }
    return !1
  },
  supportsFeature: e => a.default.supportsFeature(e),
  setProcessPriority(e) {
    a.default.getDiscordUtils().setProcessPriority(e)
  },
  getVoiceEngine: () => a.default.getVoiceEngine()
})
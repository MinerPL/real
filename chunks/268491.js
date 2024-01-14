"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var s = n("446674"),
  i = n("913144"),
  r = n("686298"),
  a = n("353927");
let o = r.ApplicationStreamPresets.PRESET_VIDEO,
  d = r.ApplicationStreamResolutions.RESOLUTION_720,
  u = r.ApplicationStreamFPS.FPS_30;
class l extends s.default.PersistedStore {
  initialize(e) {
    if (null != e) {
      var t;
      o = null !== (t = e.preset) && void 0 !== t ? t : r.ApplicationStreamPresets.PRESET_VIDEO, d = e.resolution, u = e.fps
    }
  }
  getState() {
    return {
      preset: o,
      resolution: d,
      fps: u
    }
  }
}
l.displayName = "ApplicationStreamingSettingsStore", l.persistKey = "ApplicationStreamingSettingStore";
var f = new l(i.default, {
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
    let {
      settings: t
    } = e;
    if ((null == t ? void 0 : t.context) === a.MediaEngineContextTypes.STREAM) {
      if ((null == t ? void 0 : t.qualityOptions) == null || (null == t ? void 0 : t.qualityOptions.resolution) == null || (null == t ? void 0 : t.qualityOptions.frameRate) == null) return !1;
      d = t.qualityOptions.resolution, u = t.qualityOptions.frameRate
    }
  },
  STREAM_UPDATE_SETTINGS: function(e) {
    let {
      preset: t,
      resolution: n,
      frameRate: s
    } = e, i = !1;
    return null != t && (o = t, i = !0), null != n && (d = n, i = !0), null != s && (u = s, i = !0), i
  }
})
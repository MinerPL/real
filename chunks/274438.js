"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("446674"),
  r = n("913144");
let s = !1,
  l = !1;
class i extends a.default.DeviceSettingsStore {
  initialize(e) {
    null != e && (s = e)
  }
  isMuted() {
    return s
  }
  shouldPlay() {
    return l
  }
  getUserAgnosticState() {
    return s
  }
}
i.displayName = "StageMusicStore", i.persistKey = "StageMusicStore";
var u = new i(r.default, {
  STAGE_MUSIC_MUTE: function(e) {
    let {
      muted: t
    } = e;
    s = t, l = !1
  },
  STAGE_MUSIC_PLAY: function(e) {
    let {
      play: t
    } = e;
    l = t
  },
  VOICE_CHANNEL_SELECT: function() {
    l = !1
  }
})
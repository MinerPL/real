"use strict";
let u;
t.r(n), t.d(n, {
  default: function() {
    return d
  }
});
var l = t("446674"),
  i = t("913144"),
  o = t("626334");
class a extends l.default.PersistedStore {
  initialize(e) {
    var n;
    u = null !== (n = null == e ? void 0 : e.animationType) && void 0 !== n ? n : o.VoiceChannelEffectAnimationType.PREMIUM
  }
  getState() {
    return {
      animationType: u
    }
  }
}
a.displayName = "VoiceChannelEffectsPersistedStore", a.persistKey = "VoiceChannelEffectsPersistedStore";
var d = new a(i.default, {
  VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: () => {
    u = u === o.VoiceChannelEffectAnimationType.BASIC ? o.VoiceChannelEffectAnimationType.PREMIUM : o.VoiceChannelEffectAnimationType.BASIC
  }
})
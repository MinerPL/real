"use strict";
E.r(_), E.d(_, {
  default: function() {
    return R
  }
});
var t = E("446674"),
  o = E("913144"),
  n = E("271938"),
  r = E("42203"),
  i = E("42887"),
  a = E("957255"),
  I = E("945956"),
  s = E("800762"),
  T = E("49111");
let S = !0,
  N = !0;

function O() {
  let e;
  let _ = I.default.getChannelId();
  if (null == _) e = !0;
  else {
    var E;
    let t = r.default.getChannel(_),
      o = s.default.getVoiceState(null == t ? void 0 : t.getGuildId(), n.default.getId());
    e = i.default.getMode() !== T.InputModes.VOICE_ACTIVITY || null == t || t.isPrivate() || t.isGuildStageVoice() || a.default.can(T.Permissions.USE_VAD, t) || null == (E = o) || !!E.suppress || null != E.requestToSpeakTimestamp || !1
  }
  if (S === e) return !1;
  N = e, S = e, o.default.dispatch({
    type: "SET_VAD_PERMISSION",
    hasPermission: S
  })
}
class A extends t.default.Store {
  initialize() {
    this.waitFor(a.default, i.default, I.default, s.default)
  }
  shouldShowWarning() {
    return !N
  }
  canUseVoiceActivity() {
    return S
  }
}
A.displayName = "PermissionVADStore";
var R = new A(o.default, {
  RTC_CONNECTION_STATE: O,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: O,
  AUDIO_SET_MODE: O,
  CHANNEL_UPDATES: O,
  THREAD_UPDATE: O,
  GUILD_ROLE_UPDATE: O,
  GUILD_MEMBER_UPDATE: O,
  IMPERSONATE_UPDATE: O,
  IMPERSONATE_STOP: O,
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: _
    } = e;
    return _.some(e => {
      let {
        userId: _
      } = e;
      return _ === n.default.getId() && O()
    })
  },
  AUDIO_TOGGLE_SELF_MUTE: function() {
    N = S
  },
  PERMISSION_CLEAR_VAD_WARNING: function() {
    N = !0
  }
})
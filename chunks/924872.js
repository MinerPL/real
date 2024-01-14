"use strict";
n.r(t), n.d(t, {
  useShowStageMusicMuteButton: function() {
    return m
  },
  shouldShowStageMusicMuteButton: function() {
    return g
  },
  default: function() {
    return I
  }
}), n("222007");
var a = n("446674"),
  r = n("689988"),
  s = n("42203"),
  i = n("42887"),
  l = n("18494"),
  u = n("800762"),
  o = n("709681"),
  d = n("488464"),
  c = n("567469"),
  f = n("998716"),
  E = n("834052"),
  h = n("274438");
let p = e => e / 400,
  S = !1,
  _ = (0, o.createSound)("stage_waiting", "stage_waiting", p(i.default.getOutputVolume()));

function C() {
  let e = l.default.getVoiceChannelId();
  if (null == e) {
    _.stop(), S = !1;
    return
  }
  let t = s.default.getChannel(e);
  if (!(null == t ? void 0 : t.isGuildStageVoice())) {
    _.stop(), S = !1;
    return
  }
  let n = i.default.isSelfDeaf();
  if (n) {
    _.stop(), S = !1;
    return
  }
  let a = h.default.shouldPlay();
  if (a) {
    _.volume = p(i.default.getOutputVolume()), _.loop(), S = !0;
    return
  }
  let r = E.default.isLive(e);
  if (r) {
    _.stop(), S = !1;
    return
  }
  let o = h.default.isMuted();
  if (o) {
    _.pause(), S = !1;
    return
  }
  let d = null != Object.values(u.default.getVoiceStatesForChannel(e)).find(e => !e.suppress && !e.isVoiceMuted());
  d || S ? d && (_.pause(), S = !1) : (_.volume = p(i.default.getOutputVolume()), _.loop(), S = !0)
}

function m(e) {
  let t = (0, a.useStateFromStores)([l.default], () => l.default.getVoiceChannelId() === e),
    n = (0, c.useStageParticipants)(e, f.StageChannelParticipantNamedIndex.SPEAKER),
    r = null != n.find(e => !e.voiceState.isVoiceMuted()),
    s = (0, a.useStateFromStores)([E.default], () => E.default.getStageInstanceByChannel(e));
  return t && null == s && !r
}

function g(e) {
  let t = l.default.getVoiceChannelId() === e,
    n = d.default.getMutableParticipants(e, f.StageChannelParticipantNamedIndex.SPEAKER),
    a = null != n.find(e => !e.voiceState.isVoiceMuted()),
    r = E.default.getStageInstanceByChannel(e);
  return t && null == r && !a
}
class T extends r.default {
  handleVoiceChannelSelect(e) {
    let {
      channelId: t
    } = e;
    if (null != t) {
      let e = s.default.getChannel(t);
      (null == e ? void 0 : e.isGuildStageVoice()) ? C(): (_.stop(), S = !1)
    } else _.stop(), S = !1
  }
  handleLogout() {
    _.stop(), S = !1
  }
  handlePlay(e) {
    let {
      play: t
    } = e;
    t ? C() : (_.pause(), S = !1)
  }
  handleMute(e) {
    let {
      muted: t
    } = e;
    t ? (_.pause(), S = !1) : C()
  }
  handleVoiceStateUpdates() {
    C()
  }
  handleSetOutputVolume(e) {
    let {
      volume: t
    } = e;
    _.volume = p(t)
  }
  handleToggleSelfDeaf() {
    C()
  }
  constructor(...e) {
    super(...e), this.actions = {
      VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
      LOGOUT: this.handleLogout,
      STAGE_MUSIC_MUTE: this.handleMute,
      STAGE_MUSIC_PLAY: this.handlePlay,
      VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
      AUDIO_SET_OUTPUT_VOLUME: this.handleSetOutputVolume,
      AUDIO_TOGGLE_SELF_DEAF: this.handleToggleSelfDeaf
    }
  }
}
var I = new T
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var a = n("37983");
n("884691");
var s = n("77078"),
  i = n("913144"),
  l = n("316272"),
  r = n("271938"),
  o = n("42203"),
  u = n("235660"),
  d = n("808422"),
  c = n("49111");
let f = "STAGE_INVITED_TO_SPEAK_MODAL";
class E extends l.default {
  _initialize() {
    i.default.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
  }
  _terminate() {
    i.default.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
  }
  constructor(...e) {
    super(...e), this.handleVoiceStateUpdates = e => {
      var t;
      let {
        voiceStates: i
      } = e, l = r.default.getId(), E = null === (t = u.default.getSession()) || void 0 === t ? void 0 : t.sessionId, _ = i.find(e => e.userId === l && e.sessionId === E);
      if (null == _) return;
      let h = _.channelId;
      if (null == h) {
        (0, s.hasModalOpen)(f) && (0, s.closeModal)(f);
        return
      }
      let C = o.default.getChannel(h),
        I = null == C ? void 0 : C.isGuildStageVoice();
      if (!I) return;
      let T = (0, d.getAudienceRequestToSpeakState)(_) === d.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
      if (null != C && T) {
        if ((0, s.hasModalOpen)(f)) return;
        (0, s.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("730705").then(n.bind(n, "730705"));
          return t => (0, a.jsx)(e, {
            ...t,
            channel: C
          })
        }, {
          modalKey: f,
          onCloseRequest: c.NOOP_NULL
        })
      }
    }
  }
}
var _ = new E
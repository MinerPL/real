"use strict";
E.r(_), E.d(_, {
  default: function() {
    return R
  }
}), E("222007");
var t = E("637612"),
  o = E("819689"),
  n = E("689988"),
  r = E("271938"),
  i = E("42203"),
  a = E("377253"),
  I = E("957255"),
  s = E("18494"),
  T = E("697218"),
  S = E("923510"),
  N = E("285857"),
  O = E("49111");
class A extends n.default {
  handleVoiceStateUpdates(e) {
    let {
      voiceStates: _
    } = e;
    _.forEach(e => {
      let {
        channelId: _,
        userId: E,
        suppress: n,
        requestToSpeakTimestamp: A
      } = e;
      if (s.default.getVoiceChannelId() !== _ || !n || null == _ || E === r.default.getId()) return;
      let R = I.default.can(S.MODERATE_STAGE_CHANNEL_PERMISSIONS, i.default.getChannel(_));
      if (R) {
        if (null != A) {
          let e = T.default.getUser(E);
          null != e && (0, N.sendStageRequestToSpeakEphemeralMessage)(_, e, A)
        } else {
          let e = a.default.getMessages(_),
            n = e.findNewest(e => e.type === t.MessageTypes.STAGE_RAISE_HAND && e.hasFlag(O.MessageFlags.EPHEMERAL) && e.author.id === E);
          null != n && o.default.deleteMessage(_, n.id, !0)
        }
      }
    })
  }
  constructor(...e) {
    super(...e), this.actions = {
      VOICE_STATE_UPDATES: this.handleVoiceStateUpdates
    }
  }
}
var R = new A
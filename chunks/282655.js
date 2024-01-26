"use strict";
E.r(_), E.d(_, {
  default: function() {
    return R
  }
}), E("222007");
var t = E("823411"),
  o = E("689988"),
  n = E("651057"),
  r = E("42203"),
  a = E("546463"),
  i = E("824563"),
  I = E("162771"),
  s = E("800762"),
  T = E("785814"),
  S = E("49111");

function N(e) {
  return e.filter(e => e.type === S.ActivityTypes.PLAYING && null != e.application_id && null != a.default.getDetectableGame(e.application_id)).map(e => e.application_id)
}

function O(e) {
  n.default.fetchApplications(e, !1)
}
class A extends o.default {
  handleConnectionOpen() {
    let e = I.default.getGuildId();
    null != e && t.default.getDetectableGames()
  }
  handlePresenceUpdates(e) {
    let {
      updates: _
    } = e, E = new Set;
    _.forEach(e => {
      var _, t;
      let {
        user: o,
        activities: n
      } = e, a = s.default.getVoiceStateForUser(o.id);
      if (null == a || !(0, T.isVoiceChannelGameActivityEnabled)(null !== (t = null === (_ = r.default.getChannel(a.channelId)) || void 0 === _ ? void 0 : _.guild_id) && void 0 !== t ? t : "", "presence_update", !1)) return;
      let i = N([...n]);
      E = new Set([...E, ...i])
    }), O([...E])
  }
  handleVoiceStateUpdates(e) {
    let {
      voiceStates: _
    } = e, E = new Set;
    _.forEach(e => {
      let {
        userId: _,
        guildId: t
      } = e;
      if (!(0, T.isVoiceChannelGameActivityEnabled)(null != t ? t : "", "voice_state_update", !1)) return;
      let o = i.default.getActivities(_, t),
        n = N([...o]);
      E = new Set([...E, ...n])
    }), O([...E])
  }
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: this.handleConnectionOpen,
      PRESENCE_UPDATES: this.handlePresenceUpdates,
      VOICE_STATE_UPDATES: this.handleVoiceStateUpdates
    }
  }
}
var R = new A
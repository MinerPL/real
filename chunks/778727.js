"use strict";
E.r(_), E.d(_, {
  default: function() {
    return s
  }
}), E("222007");
var t = E("689988"),
  o = E("191145"),
  n = E("721281"),
  r = E("42203"),
  i = E("800762"),
  a = E("818766");
class I extends t.default {
  handleVoiceChannelSelect(e) {
    let {
      channelId: _,
      guildId: E
    } = e;
    if (null == _ || null == E) return;
    let t = r.default.getChannel(_);
    if (null != t && (0, n.hasVoiceChannelActivityNotifsEnabled)(t) && t.isGuildVoice()) {
      let e = o.default.getParticipants(_).length,
        E = i.default.isInChannel(_),
        t = e === (E ? 1 : 0);
      t ? a.sendVoiceChannelActivityNotification(_, t) : e === (E ? 2 : 1) && a.sendVoiceChannelActivityNotification(_, t)
    }
  }
  constructor(...e) {
    super(...e), this.actions = {
      VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect
    }
  }
}
var s = new I
"use strict";
E.r(_), E.d(_, {
  default: function() {
    return N
  }
}), E("222007");
var t = E("913144"),
  o = E("987317"),
  n = E("689988"),
  r = E("393414"),
  i = E("239380"),
  a = E("42887"),
  I = E("18494"),
  s = E("162771"),
  T = E("49111");
class S extends n.default {
  handleGuildCreate(e) {
    let {
      guild: _
    } = e, E = I.default.getChannelId(T.ME), t = I.default.getVoiceChannelId();
    _.id === E && (0, i.transitionToGuild)(_.id);
    let n = _.id === t;
    n && !1 !== _.unavailable && null == t && o.default.selectVoiceChannel((0, I.findFirstVoiceChannelId)(_.id))
  }
  handleChannelCreate(e) {
    let {
      channel: _
    } = e;
    if (_.type !== T.ChannelTypes.GROUP_DM) return;
    let E = _.originChannelId,
      t = I.default.getChannelId("null");
    null == s.default.getGuildId() && null != E && E === t && (0, r.transitionTo)(T.Routes.CHANNEL(T.ME, _.id)), null != E && E === I.default.getVoiceChannelId() && o.default.selectVoiceChannel(_.id, a.default.isVideoEnabled())
  }
  handleLogout() {
    t.default.dispatch({
      type: "VOICE_CHANNEL_SELECT",
      channelId: null,
      guildId: null,
      video: !1,
      currentVoiceChannelId: null
    })
  }
  constructor(...e) {
    super(...e), this.actions = {
      GUILD_CREATE: this.handleGuildCreate,
      CHANNEL_CREATE: this.handleChannelCreate,
      LOGOUT: this.handleLogout
    }
  }
}
var N = new S
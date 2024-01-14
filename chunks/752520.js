"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("139375"),
  n = s("679653"),
  l = s("42203"),
  i = s("27618"),
  r = s("697218"),
  o = s("677795"),
  d = s("49111"),
  u = s("782340");

function c(e) {
  switch (e.ref_type) {
    case o.GuildRoleSubscriptionBenefitTypes.CHANNEL: {
      let t = l.default.getChannel(e.ref_id);
      return null != t ? function(e) {
        let t = (0, n.computeChannelName)(e, r.default, i.default);
        switch (e.type) {
          case d.ChannelTypes.GUILD_VOICE:
            return u.default.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL.format({
              channelName: t
            });
          case d.ChannelTypes.GUILD_STAGE_VOICE:
            return u.default.Messages.GUILD_SIDEBAR_STAGE_CHANNEL_A11Y_LABEL.format({
              channelName: t
            });
          default:
            return (0, a.default)({
              channel: e
            })
        }
      }(t) : ""
    }
    case o.GuildRoleSubscriptionBenefitTypes.INTANGIBLE:
      var t;
      return null !== (t = e.name) && void 0 !== t ? t : ""
  }
}
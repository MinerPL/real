"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("37983"),
  s = n("884691"),
  i = n("363025"),
  l = n("963662"),
  r = n("592407"),
  o = n("49111"),
  u = n("782340"),
  d = n("175717"),
  c = e => {
    let {
      guild: t
    } = e, n = s.useCallback(() => {
      (0, i.hideEnablePublicGuildUpsellNotice)(t.id)
    }, [t.id]);
    return (0, a.jsx)(l.default, {
      guild: t,
      onDismissed: n,
      onClick: () => r.default.open(t.id, o.GuildSettingsSections.COMMUNITY),
      message: u.default.Messages.NOTICE_ENABLE_PUBLIC_GUILD_UPSELL_MESSAGE,
      trackingSource: o.ChannelNoticeCtaSources.ENABLE_PUBLIC_GUILD_UPSELL_NOTICE,
      type: o.ChannelNoticeTypes.PUBLIC_UPSELL,
      image: d,
      cta: u.default.Messages.LEARN_MORE
    })
  }
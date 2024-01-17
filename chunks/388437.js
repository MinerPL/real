"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("37983");
n("884691");
var s = n("812204"),
  i = n("685665"),
  l = n("963662"),
  r = n("379532"),
  o = n("427459"),
  u = n("49111"),
  d = n("994428"),
  c = n("944305"),
  f = n("782340"),
  E = n("65016");

function _(e) {
  let {
    guild: t,
    markAsDismissed: n
  } = e, _ = (0, o.getNumberOfAppliedBoostsNeededForTier)(t, u.BoostedGuildTiers.TIER_2), {
    analyticsLocations: h
  } = (0, i.default)(s.default.GUILD_BANNER_NOTICE);
  return (0, a.jsx)(l.default, {
    guild: t,
    onDismissed: () => n(d.ContentDismissActionType.UNKNOWN),
    cta: f.default.Messages.GUILD_BANNER_NOTICE_CTA,
    message: f.default.Messages.GUILD_BANNER_NOTICE.format({
      boostsNeeded: _
    }),
    type: u.ChannelNoticeTypes.GUILD_BANNER,
    image: E,
    onClick: () => (0, r.default)({
      analyticsLocations: h,
      analyticsSourceLocation: {
        section: u.AnalyticsSections.CHANNEL_NOTICE,
        object: u.AnalyticsObjects.SERVER_BANNER_TOOLTIP
      },
      guild: t,
      perks: (0, c.guildBannerUpsellPerks)()
    }),
    imageMarginTop: 15,
    imageMarginX: 22
  })
}
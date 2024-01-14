"use strict";
l.r(t), l.d(t, {
  default: function() {
    return i
  }
});
var n = l("37983");
l("884691");
var a = l("913678"),
  s = l("49111");

function i(e) {
  let {
    guildId: t,
    applicationId: l,
    applicationPrimarySkuId: i
  } = e;
  return (0, n.jsx)(a.default, {
    guildId: t,
    applicationId: l,
    applicationPrimarySkuId: i,
    analyticsLocation: s.AnalyticsLocations.GUILD_INTEGRATION_SETTINGS
  })
}
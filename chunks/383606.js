"use strict";
n.r(t), n.d(t, {
  trackModViewOpened: function() {
    return o
  }
}), n("884691");
var a = n("812204"),
  l = n("716241"),
  s = n("599110"),
  i = n("789150"),
  r = n("49111");

function o(e, t, n) {
  let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.default.MEMBER_SAFETY_PAGE,
    u = {
      guild_id: e,
      target_user_id: t,
      subpanel_name: i.ModViewPanelNameMap[n],
      location: o,
      ...(0, l.collectGuildAnalyticsMetadata)(e)
    };
  return s.default.track(r.AnalyticEvents.GUILD_MOD_VIEW_OPENED, u)
}
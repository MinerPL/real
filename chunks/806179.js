"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
});
var n = l("37983"),
  u = l("884691"),
  i = l("77078"),
  r = l("244201"),
  o = l("401642"),
  a = l("599110"),
  d = l("49111"),
  s = l("782340");

function c(e, t, l) {
  let c = u.useContext(a.AnalyticsContext),
    f = (0, r.useWindowDispatch)();
  return (0, n.jsx)(i.MenuItem, {
    id: "user-profile",
    label: s.default.Messages.PROFILE,
    action: () => {
      (0, o.openUserProfileModal)({
        userId: e,
        guildId: null != t ? t : void 0,
        channelId: null != l ? l : void 0,
        analyticsLocation: c.location
      }), f.dispatch(d.ComponentActions.POPOUT_CLOSE)
    }
  })
}
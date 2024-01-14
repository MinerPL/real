"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var u = n("37983"),
  a = n("884691"),
  l = n("77078"),
  s = n("244201"),
  r = n("401642"),
  i = n("599110"),
  o = n("49111"),
  d = n("782340");

function c(e, t, n) {
  let c = a.useContext(i.AnalyticsContext),
    f = (0, s.useWindowDispatch)();
  return (0, u.jsx)(l.MenuItem, {
    id: "user-profile",
    label: d.default.Messages.PROFILE,
    action: () => {
      (0, r.openUserProfileModal)({
        userId: e,
        guildId: null != t ? t : void 0,
        channelId: null != n ? n : void 0,
        analyticsLocation: c.location
      }), f.dispatch(o.ComponentActions.POPOUT_CLOSE)
    }
  })
}
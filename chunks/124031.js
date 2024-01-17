"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var a = n("37983");
n("884691");
var l = n("446674"),
  s = n("77078"),
  i = n("630086"),
  r = n("20606"),
  o = n("360191"),
  u = n("393414"),
  d = n("27618"),
  c = n("564875"),
  f = n("956089"),
  h = n("599110"),
  E = n("49111"),
  m = n("782340"),
  p = n("805122");

function g(e) {
  let {
    closePopout: t
  } = e, n = (0, l.useStateFromStores)([d.default], () => d.default.getPendingCount());
  return (0, a.jsx)(s.TooltipContainer, {
    text: m.default.Messages.VIEW_FRIEND_REQUESTS,
    children: (0, a.jsxs)(s.Clickable, {
      className: p.friendRequestsButton,
      onClick: () => {
        h.default.track(E.AnalyticEvents.NOTIFICATION_CENTER_ACTION, {
          action_type: o.NotificationCenterActionTypes.FRIEND_REQUESTS_BUTTON_CLICK
        }), (0, u.transitionTo)(E.Routes.FRIENDS), i.default.setSection(E.FriendsSections.PENDING), t()
      },
      children: [(0, a.jsx)(c.default, {}), (0, a.jsx)(f.NumberBadge, {
        count: n,
        color: r.default.BACKGROUND_ACCENT
      })]
    })
  })
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  s = n("77078"),
  i = n("630086"),
  r = n("20606"),
  o = n("360191"),
  u = n("393414"),
  d = n("27618"),
  c = n("564875"),
  f = n("956089"),
  E = n("599110"),
  h = n("49111"),
  _ = n("782340"),
  S = n("805122");

function T(e) {
  let {
    closePopout: t
  } = e, n = (0, a.useStateFromStores)([d.default], () => d.default.getPendingCount());
  return (0, l.jsx)(s.TooltipContainer, {
    text: _.default.Messages.VIEW_FRIEND_REQUESTS,
    children: (0, l.jsxs)(s.Clickable, {
      className: S.friendRequestsButton,
      onClick: () => {
        E.default.track(h.AnalyticEvents.NOTIFICATION_CENTER_ACTION, {
          action_type: o.NotificationCenterActionTypes.FRIEND_REQUESTS_BUTTON_CLICK
        }), (0, u.transitionTo)(h.Routes.FRIENDS), i.default.setSection(h.FriendsSections.PENDING), t()
      },
      children: [(0, l.jsx)(c.default, {}), (0, l.jsx)(f.NumberBadge, {
        count: n,
        color: r.default.BACKGROUND_ACCENT
      })]
    })
  })
}
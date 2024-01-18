"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("446674"),
  i = n("954732"),
  r = n("22082"),
  o = n("913796"),
  u = n("660478"),
  d = n("697218"),
  c = n("826267"),
  f = n("664336"),
  h = n("333491"),
  E = n("263362"),
  m = n("470965"),
  p = n("133335"),
  S = n("782340"),
  g = n("759956");

function N(e) {
  let {
    onOpen: t,
    onClose: n,
    className: N
  } = e, _ = (0, o.useInDesktopNotificationCenterExperiment)(), T = (0, s.useStateFromStores)([d.default], () => d.default.getCurrentUser()), I = l.useRef(null), C = (0, s.useStateFromStores)([u.default], () => !!_ && (null == T ? void 0 : T.id) != null && u.default.getMentionCount(T.id, p.ReadStateTypes.NOTIFICATION_CENTER) > 0), {
    enabled: A
  } = r.default.useExperiment({
    location: "RecentsButton"
  }, {
    autoTrackExposure: !1
  }), M = (0, s.useStateFromStores)([i.default], () => A && i.default.getUnseenInviteCount() > 0);
  return (0, a.jsx)(E.RecentsPopout, {
    onOpen: t,
    onClose: n,
    badgeState: {
      badgeForYou: C
    },
    popoutPosition: "bottom",
    popoutAlign: "right",
    children: (e, t, n) => (0, a.jsxs)("div", {
      ref: I,
      className: g.recentsIcon,
      children: [A && (0, a.jsx)(m.default, {
        inboxIconRef: I,
        recentsPopoutShown: t
      }), (0, a.jsx)(f.Icon, {
        ...n,
        className: N,
        onClick: e,
        icon: c.default,
        "aria-label": S.default.Messages.INBOX,
        tooltip: t ? null : S.default.Messages.INBOX,
        selected: t,
        showBadge: C || M,
        children: (0, a.jsx)(h.default, {
          className: g.todoBadge
        })
      })]
    })
  })
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  i = n("954732"),
  r = n("22082"),
  o = n("913796"),
  u = n("660478"),
  d = n("697218"),
  c = n("826267"),
  f = n("664336"),
  E = n("333491"),
  h = n("263362"),
  _ = n("470965"),
  S = n("133335"),
  T = n("782340"),
  p = n("759956");

function N(e) {
  let {
    onOpen: t,
    onClose: n,
    className: N
  } = e, I = (0, o.useInDesktopNotificationCenterExperiment)(), m = (0, s.useStateFromStores)([d.default], () => d.default.getCurrentUser()), g = a.useRef(null), A = (0, s.useStateFromStores)([u.default], () => !!I && (null == m ? void 0 : m.id) != null && u.default.getMentionCount(m.id, S.ReadStateTypes.NOTIFICATION_CENTER) > 0), {
    enabled: C
  } = r.default.useExperiment({
    location: "RecentsButton"
  }, {
    autoTrackExposure: !1
  }), R = (0, s.useStateFromStores)([i.default], () => C && i.default.getUnseenInviteCount() > 0);
  return (0, l.jsx)(h.RecentsPopout, {
    onOpen: t,
    onClose: n,
    badgeState: {
      badgeForYou: A
    },
    popoutPosition: "bottom",
    popoutAlign: "right",
    children: (e, t, n) => (0, l.jsxs)("div", {
      ref: g,
      className: p.recentsIcon,
      children: [C && (0, l.jsx)(_.default, {
        inboxIconRef: g,
        recentsPopoutShown: t
      }), (0, l.jsx)(f.Icon, {
        ...n,
        className: N,
        onClick: e,
        icon: c.default,
        "aria-label": T.default.Messages.INBOX,
        tooltip: t ? null : T.default.Messages.INBOX,
        selected: t,
        showBadge: A || R,
        children: (0, l.jsx)(E.default, {
          className: p.todoBadge
        })
      })]
    })
  })
}
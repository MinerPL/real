"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("249654"),
  i = n("446674"),
  r = n("151426"),
  o = n("136511"),
  u = n("360191"),
  d = n("342176"),
  c = n("396539"),
  f = n("673699"),
  h = n("845579"),
  E = n("211248"),
  m = n("11539"),
  p = n("599110"),
  S = n("64318"),
  g = n("49111"),
  N = n("782340"),
  _ = n("358468");

function T(e) {
  let {
    onClick: t
  } = e;
  return (0, a.jsx)(E.default, {
    tooltip: N.default.Messages.MARK_ALL_AS_READ,
    color: E.CircleIconButtonColors.SECONDARY,
    icon: (0, a.jsx)(m.default, {}),
    onClick: t
  })
}

function I(e) {
  let {
    setTab: t,
    badgeState: n,
    closePopout: E
  } = e, {
    initialized: m,
    items: N,
    loading: I,
    loadMore: C
  } = (0, c.useDesktopNotificationCenterItemsLoader)(), A = (0, i.useStateFromStores)([o.default], () => o.default.localItems), M = l.useMemo(() => [...[...N, ...A].sort((e, t) => -1 * s.default.compare(e.id, t.id))], [N, A]), v = N.length > 0 ? N[0] : null, x = h.NotificationCenterAckedBeforeId.useSetting(), R = l.useMemo(() => {
    let e = null != v && 0 >= s.default.compare(v.id, x);
    if (e) return !1;
    for (let e of M) {
      if (0 >= s.default.compare(e.id, x)) break;
      if (!(0, d.isRemoteAcked)(e, x)) return !0
    }
    return !1
  }, [v, x, M]);
  return (0, a.jsxs)("div", {
    className: _.container,
    children: [(0, a.jsx)(S.default, {
      tab: r.InboxTab.FOR_YOU,
      setTab: t,
      badgeState: n,
      closePopout: E,
      children: R ? (0, a.jsx)(T, {
        onClick: () => {
          null != v && (h.NotificationCenterAckedBeforeId.updateSetting(v.id), p.default.track(g.AnalyticEvents.NOTIFICATION_CENTER_ACTION, {
            action_type: u.NotificationCenterActionTypes.MARK_ALL_READ
          }))
        }
      }) : null
    }), (0, a.jsx)(f.default, {
      initialized: m,
      items: M,
      loading: I,
      loadMore: C
    })]
  })
}
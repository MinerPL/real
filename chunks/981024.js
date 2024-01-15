"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("249654"),
  i = n("446674"),
  r = n("151426"),
  o = n("136511"),
  u = n("360191"),
  d = n("342176"),
  c = n("396539"),
  f = n("673699"),
  E = n("845579"),
  h = n("211248"),
  _ = n("11539"),
  S = n("599110"),
  T = n("64318"),
  p = n("49111"),
  N = n("782340"),
  I = n("358468");

function m(e) {
  let {
    onClick: t
  } = e;
  return (0, l.jsx)(h.default, {
    tooltip: N.default.Messages.MARK_ALL_AS_READ,
    color: h.CircleIconButtonColors.SECONDARY,
    icon: (0, l.jsx)(_.default, {}),
    onClick: t
  })
}

function g(e) {
  let {
    setTab: t,
    badgeState: n,
    closePopout: h
  } = e, {
    initialized: _,
    items: N,
    loading: g,
    loadMore: A
  } = (0, c.useDesktopNotificationCenterItemsLoader)(), C = (0, i.useStateFromStores)([o.default], () => o.default.localItems), R = a.useMemo(() => [...[...N, ...C].sort((e, t) => -1 * s.default.compare(e.id, t.id))], [N, C]), M = N.length > 0 ? N[0] : null, O = E.NotificationCenterAckedBeforeId.useSetting(), L = a.useMemo(() => {
    let e = null != M && 0 >= s.default.compare(M.id, O);
    if (e) return !1;
    for (let e of R) {
      if (0 >= s.default.compare(e.id, O)) break;
      if (!(0, d.isRemoteAcked)(e, O)) return !0
    }
    return !1
  }, [M, O, R]);
  return (0, l.jsxs)("div", {
    className: I.container,
    children: [(0, l.jsx)(T.default, {
      tab: r.InboxTab.FOR_YOU,
      setTab: t,
      badgeState: n,
      closePopout: h,
      children: L ? (0, l.jsx)(m, {
        onClick: () => {
          null != M && (E.NotificationCenterAckedBeforeId.updateSetting(M.id), S.default.track(p.AnalyticEvents.NOTIFICATION_CENTER_ACTION, {
            action_type: u.NotificationCenterActionTypes.MARK_ALL_READ
          }))
        }
      }) : null
    }), (0, l.jsx)(f.default, {
      initialized: _,
      items: R,
      loading: g,
      loadMore: A
    })]
  })
}
"use strict";
n.r(t), n.d(t, {
  useDesktopNotificationCenterItemsLoader: function() {
    return E
  }
}), n("222007");
var l = n("884691"),
  a = n("446674"),
  s = n("267363"),
  i = n("756166"),
  r = n("138217"),
  o = n("352273"),
  u = n("136511"),
  d = n("204116"),
  c = n("133335");
let f = e => {
    let {
      isFocused: t,
      navigatedAway: n,
      isDesktop: f,
      withMentions: E = !1,
      initialPageSize: h
    } = e, _ = (0, a.useStateFromStores)([d.default], () => d.default.shouldReload()), S = l.useRef(!1), [T, p] = l.useState(!1), {
      initialized: N,
      loading: I,
      items: m,
      hasMore: A,
      cursor: g,
      errored: C
    } = (0, a.useStateFromStoresObject)([u.default], () => ({
      initialized: u.default.initialized,
      loading: u.default.loading,
      items: u.default.items,
      hasMore: u.default.hasMore,
      cursor: u.default.cursor,
      errored: u.default.errored
    })), {
      roleFilter: R,
      everyoneFilter: M
    } = (0, a.useStateFromStoresObject)([r.default], () => ({
      everyoneFilter: r.default.everyoneFilter,
      roleFilter: r.default.roleFilter
    }));
    l.useEffect(() => ((0, o.setNotificationCenterActive)(!0), () => (0, o.setNotificationCenterActive)(!1)), []), l.useEffect(() => {
      N && t && (0, s.ackUserFeature)(c.ReadStateTypes.NOTIFICATION_CENTER)
    }, [t, N]);
    let O = (0, i.default)();
    l.useEffect(() => () => {
      f ? !O() && (C || m.length > 100) && (0, o.resetNotificationCenter)() : n && m.length > 100 && (0, o.resetNotificationCenter)()
    }, [n, m, f, O, C]), l.useEffect(() => {
      let e = _ && t;
      (!N || e) && (0, o.fetchNotificationCenterItems)({
        limit: null != h ? h : E ? 8 : 20,
        with_mentions: E,
        roles_filter: R,
        everyone_filter: M
      })
    }, [N, _, t, E, R, M, h]);
    let L = l.useCallback(async e => {
      !S.current && N && A && null != g && (e || !C) && (S.current = !0, p(!0), await (0, o.fetchNotificationCenterItems)({
        after: g,
        with_mentions: E,
        roles_filter: R,
        everyone_filter: M,
        limit: E ? 8 : 20
      }, () => {
        S.current = !1
      }), p(!1))
    }, [N, A, g, C, E, R, M]);
    return {
      initialized: N,
      loading: I,
      items: m,
      hasMore: A,
      loadMore: L,
      loadingMore: T,
      setReadNotifItemToAcked: e => {
        !e.acked && (e.acked = !0)
      },
      errored: C
    }
  },
  E = () => {
    let {
      initialized: e,
      loading: t,
      items: n,
      hasMore: l,
      loadMore: a
    } = f({
      isFocused: !0,
      isDesktop: !0
    });
    return {
      initialized: e,
      loading: t,
      items: n.filter(e => "notification-center-item" === e.kind),
      hasMore: l,
      loadMore: a
    }
  }
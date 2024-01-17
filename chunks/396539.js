"use strict";
n.r(t), n.d(t, {
  useDesktopNotificationCenterItemsLoader: function() {
    return h
  }
}), n("222007");
var a = n("884691"),
  l = n("446674"),
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
      withMentions: h = !1,
      initialPageSize: E
    } = e, m = (0, l.useStateFromStores)([d.default], () => d.default.shouldReload()), p = a.useRef(!1), [g, S] = a.useState(!1), {
      initialized: N,
      loading: _,
      items: I,
      hasMore: T,
      cursor: C,
      errored: A
    } = (0, l.useStateFromStoresObject)([u.default], () => ({
      initialized: u.default.initialized,
      loading: u.default.loading,
      items: u.default.items,
      hasMore: u.default.hasMore,
      cursor: u.default.cursor,
      errored: u.default.errored
    })), {
      roleFilter: x,
      everyoneFilter: v
    } = (0, l.useStateFromStoresObject)([r.default], () => ({
      everyoneFilter: r.default.everyoneFilter,
      roleFilter: r.default.roleFilter
    }));
    a.useEffect(() => ((0, o.setNotificationCenterActive)(!0), () => (0, o.setNotificationCenterActive)(!1)), []), a.useEffect(() => {
      N && t && (0, s.ackUserFeature)(c.ReadStateTypes.NOTIFICATION_CENTER)
    }, [t, N]);
    let M = (0, i.default)();
    a.useEffect(() => () => {
      f ? !M() && (A || I.length > 100) && (0, o.resetNotificationCenter)() : n && I.length > 100 && (0, o.resetNotificationCenter)()
    }, [n, I, f, M, A]), a.useEffect(() => {
      let e = m && t;
      (!N || e) && (0, o.fetchNotificationCenterItems)({
        limit: null != E ? E : h ? 8 : 20,
        with_mentions: h,
        roles_filter: x,
        everyone_filter: v
      })
    }, [N, m, t, h, x, v, E]);
    let R = a.useCallback(async e => {
      !p.current && N && T && null != C && (e || !A) && (p.current = !0, S(!0), await (0, o.fetchNotificationCenterItems)({
        after: C,
        with_mentions: h,
        roles_filter: x,
        everyone_filter: v,
        limit: h ? 8 : 20
      }, () => {
        p.current = !1
      }), S(!1))
    }, [N, T, C, A, h, x, v]);
    return {
      initialized: N,
      loading: _,
      items: I,
      hasMore: T,
      loadMore: R,
      loadingMore: g,
      setReadNotifItemToAcked: e => {
        !e.acked && (e.acked = !0)
      },
      errored: A
    }
  },
  h = () => {
    let {
      initialized: e,
      loading: t,
      items: n,
      hasMore: a,
      loadMore: l
    } = f({
      isFocused: !0,
      isDesktop: !0
    });
    return {
      initialized: e,
      loading: t,
      items: n.filter(e => "notification-center-item" === e.kind),
      hasMore: a,
      loadMore: l
    }
  }
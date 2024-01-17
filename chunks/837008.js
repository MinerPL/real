"use strict";
n.r(t), n.d(t, {
  useSubscriptionListingsForGroup: function() {
    return S
  },
  useSubscriptionListing: function() {
    return E
  },
  useGroupListingsForGuild: function() {
    return h
  },
  useSubscriptionListingsForGuild: function() {
    return g
  },
  useFetchListingsForSubscriptions: function() {
    return p
  },
  useDeleteSubscriptionListing: function() {
    return _
  },
  useArchiveSubscriptionListing: function() {
    return C
  },
  usePublishSubscriptionListing: function() {
    return m
  },
  useSubscriptionsSettings: function() {
    return I
  },
  useUpdateSubscriptionsSettings: function() {
    return T
  },
  useFetchSubscriptionsSettings: function() {
    return v
  },
  useSubscriptionTrial: function() {
    return N
  }
}), n("222007"), n("424973");
var i = n("884691"),
  r = n("446674"),
  l = n("162426"),
  u = n("619443");
n("449008");
var o = n("257869"),
  s = n("371358"),
  a = n("648825"),
  d = n("136185");
let c = [],
  f = function(e) {
    let {
      refetchOnMount: t = !1,
      includeSoftDeleted: n = !0,
      countryCode: l,
      dontFetchWhileTrue: o
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, d = (0, r.useStateFromStores)([u.default], () => u.default.isConnected()), c = (0, r.useStateFromStores)([a.default], () => null != e ? a.default.getSubscriptionGroupListingsForGuildFetchState(e) : a.FetchState.FETCHED), f = i.useRef(t);
    return i.useEffect(() => {
      if (null == e || !d || !0 === o) return;
      let i = a.default.getSubscriptionGroupListingsForGuildFetchState(e);
      (t || i === a.FetchState.NOT_FETCHED) && (f.current = !1, s.fetchAllSubscriptionListingsDataForGuild(e, {
        includeSoftDeleted: n,
        countryCode: l
      }))
    }, [d, e, n, t, l, o]), {
      listingsLoaded: c === a.FetchState.FETCHED && !0 !== f.current
    }
  },
  S = function(e) {
    let {
      includeSoftDeleted: t = !1,
      includeUnpublished: n = !0
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (0, r.useStateFromStoresArray)([a.default], () => {
      if (null == e) return [];
      let i = a.default.getSubscriptionGroupListing(e);
      if (null == i) return [];
      let r = [];
      for (let e of i.subscription_listings_ids) {
        let i = a.default.getSubscriptionListing(e);
        if (null != i && (!i.soft_deleted || !!t))(i.published || n) && r.push(i)
      }
      return r
    }, [e, t, n])
  },
  E = e => (0, r.useStateFromStores)([a.default], () => null != e ? a.default.getSubscriptionListing(e) : null),
  h = e => {
    let t = (0, o.useGroupListingsFetchContext)("useGroupListingsForGuild");
    return (0, r.useStateFromStores)([a.default], () => null != e && t ? a.default.getSubscriptionGroupListingsForGuild(e) : c)
  },
  g = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      includeSoftDeleted: !1,
      sortDeletedListingsLast: !1
    };
    return f(e), (0, r.useStateFromStoresArray)([a.default], () => {
      let n = null != e ? a.default.getSubscriptionGroupListingsForGuild(e) : c,
        i = [];
      for (let e of n)
        for (let n of e.subscription_listings_ids) {
          let e = a.default.getSubscriptionListing(n);
          null != e && (t.includeSoftDeleted || !e.soft_deleted) && i.push(e)
        }
      return t.includeSoftDeleted && t.sortDeletedListingsLast ? [...i.filter(e => !e.soft_deleted), ...i.filter(e => e.soft_deleted)] : i
    })
  },
  p = e => {
    let [t, n] = i.useState(!1), l = i.useMemo(() => e.map(d.getRoleSubscriptionPlanId), [e]), u = (0, r.useStateFromStoresArray)([a.default], () => l.filter(e => !a.default.getDidFetchListingForSubscriptionPlanId(e)), [l]);
    return i.useEffect(() => {
      !t && u.length > 0 && (n(!0), Promise.all(u.map(e => s.fetchSubscriptionListingForPlan(e))).catch(() => {}).then(() => {
        n(!1)
      }))
    }, [t, u]), {
      loading: t
    }
  },
  _ = () => {
    let [e, t] = i.useState(!1), [n, r] = i.useState(null), l = async (e, n, i) => {
      try {
        return t(!0), r(null), await s.deleteSubscriptionListing(e, n, i), !0
      } catch (e) {
        r(e)
      } finally {
        t(!1)
      }
    };
    return {
      error: n,
      submitting: e,
      deleteSubscriptionListing: l
    }
  },
  C = () => {
    let [e, t] = (0, l.default)(s.archiveSubscriptionListing), {
      loading: n,
      error: i
    } = t;
    return {
      error: i,
      submitting: n,
      archiveSubscriptionListing: e
    }
  },
  m = () => {
    let [e, t] = i.useState(!1), [n, r] = i.useState(null), l = async e => {
      let {
        guildId: n,
        groupListingId: i,
        listingId: l
      } = e;
      try {
        return t(!0), r(null), await s.updateSubscriptionListing({
          guildId: n,
          groupListingId: i,
          listingId: l,
          data: {
            published: !0
          }
        }), !0
      } catch (e) {
        r(e)
      } finally {
        t(!1)
      }
    };
    return {
      error: n,
      submitting: e,
      publishSubscriptionListing: l,
      clearError: () => r(null)
    }
  },
  I = e => (0, r.useStateFromStores)([a.default], () => null != e ? a.default.getSubscriptionSettings(e) : void 0),
  T = () => {
    let [e, t] = i.useState(!1), [n, r] = i.useState(null), l = i.useCallback(async (e, n) => {
      t(!0), r(null);
      try {
        await s.updateSubscriptionsSettings(e, n)
      } catch (e) {
        r(e)
      } finally {
        t(!1)
      }
    }, []);
    return {
      loading: e,
      updateSubscriptionsSettings: l,
      error: n
    }
  },
  v = () => {
    let [e, t] = i.useState(!1), [n, r] = i.useState(null), l = i.useCallback(async e => {
      t(!0), r(null);
      try {
        await s.fetchSubscriptionsSettings(e)
      } catch (e) {
        r(e)
      } finally {
        t(!1)
      }
    }, []);
    return {
      loading: e,
      fetchSubscriptionsSettings: l,
      error: n
    }
  },
  N = e => (0, r.useStateFromStores)([a.default], () => null != e ? a.default.getSubscriptionTrial(e) : null)
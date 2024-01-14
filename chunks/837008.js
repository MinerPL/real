"use strict";
n.r(t), n.d(t, {
  useSubscriptionListingsForGroup: function() {
    return h
  },
  useSubscriptionListing: function() {
    return _
  },
  useGroupListingsForGuild: function() {
    return C
  },
  useSubscriptionListingsForGuild: function() {
    return p
  },
  useFetchListingsForSubscriptions: function() {
    return g
  },
  useDeleteSubscriptionListing: function() {
    return E
  },
  useArchiveSubscriptionListing: function() {
    return S
  },
  usePublishSubscriptionListing: function() {
    return T
  },
  useSubscriptionsSettings: function() {
    return I
  },
  useUpdateSubscriptionsSettings: function() {
    return m
  },
  useFetchSubscriptionsSettings: function() {
    return L
  },
  useSubscriptionTrial: function() {
    return v
  }
}), n("222007"), n("424973");
var r = n("884691"),
  i = n("446674"),
  u = n("162426"),
  l = n("619443");
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
      countryCode: u,
      dontFetchWhileTrue: o
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, d = (0, i.useStateFromStores)([l.default], () => l.default.isConnected()), c = (0, i.useStateFromStores)([a.default], () => null != e ? a.default.getSubscriptionGroupListingsForGuildFetchState(e) : a.FetchState.FETCHED), f = r.useRef(t);
    return r.useEffect(() => {
      if (null == e || !d || !0 === o) return;
      let r = a.default.getSubscriptionGroupListingsForGuildFetchState(e);
      (t || r === a.FetchState.NOT_FETCHED) && (f.current = !1, s.fetchAllSubscriptionListingsDataForGuild(e, {
        includeSoftDeleted: n,
        countryCode: u
      }))
    }, [d, e, n, t, u, o]), {
      listingsLoaded: c === a.FetchState.FETCHED && !0 !== f.current
    }
  },
  h = function(e) {
    let {
      includeSoftDeleted: t = !1,
      includeUnpublished: n = !0
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (0, i.useStateFromStoresArray)([a.default], () => {
      if (null == e) return [];
      let r = a.default.getSubscriptionGroupListing(e);
      if (null == r) return [];
      let i = [];
      for (let e of r.subscription_listings_ids) {
        let r = a.default.getSubscriptionListing(e);
        if (null != r && (!r.soft_deleted || !!t))(r.published || n) && i.push(r)
      }
      return i
    }, [e, t, n])
  },
  _ = e => (0, i.useStateFromStores)([a.default], () => null != e ? a.default.getSubscriptionListing(e) : null),
  C = e => {
    let t = (0, o.useGroupListingsFetchContext)("useGroupListingsForGuild");
    return (0, i.useStateFromStores)([a.default], () => null != e && t ? a.default.getSubscriptionGroupListingsForGuild(e) : c)
  },
  p = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      includeSoftDeleted: !1,
      sortDeletedListingsLast: !1
    };
    return f(e), (0, i.useStateFromStoresArray)([a.default], () => {
      let n = null != e ? a.default.getSubscriptionGroupListingsForGuild(e) : c,
        r = [];
      for (let e of n)
        for (let n of e.subscription_listings_ids) {
          let e = a.default.getSubscriptionListing(n);
          null != e && (t.includeSoftDeleted || !e.soft_deleted) && r.push(e)
        }
      return t.includeSoftDeleted && t.sortDeletedListingsLast ? [...r.filter(e => !e.soft_deleted), ...r.filter(e => e.soft_deleted)] : r
    })
  },
  g = e => {
    let [t, n] = r.useState(!1), u = r.useMemo(() => e.map(d.getRoleSubscriptionPlanId), [e]), l = (0, i.useStateFromStoresArray)([a.default], () => u.filter(e => !a.default.getDidFetchListingForSubscriptionPlanId(e)), [u]);
    return r.useEffect(() => {
      !t && l.length > 0 && (n(!0), Promise.all(l.map(e => s.fetchSubscriptionListingForPlan(e))).catch(() => {}).then(() => {
        n(!1)
      }))
    }, [t, l]), {
      loading: t
    }
  },
  E = () => {
    let [e, t] = r.useState(!1), [n, i] = r.useState(null), u = async (e, n, r) => {
      try {
        return t(!0), i(null), await s.deleteSubscriptionListing(e, n, r), !0
      } catch (e) {
        i(e)
      } finally {
        t(!1)
      }
    };
    return {
      error: n,
      submitting: e,
      deleteSubscriptionListing: u
    }
  },
  S = () => {
    let [e, t] = (0, u.default)(s.archiveSubscriptionListing), {
      loading: n,
      error: r
    } = t;
    return {
      error: r,
      submitting: n,
      archiveSubscriptionListing: e
    }
  },
  T = () => {
    let [e, t] = r.useState(!1), [n, i] = r.useState(null), u = async e => {
      let {
        guildId: n,
        groupListingId: r,
        listingId: u
      } = e;
      try {
        return t(!0), i(null), await s.updateSubscriptionListing({
          guildId: n,
          groupListingId: r,
          listingId: u,
          data: {
            published: !0
          }
        }), !0
      } catch (e) {
        i(e)
      } finally {
        t(!1)
      }
    };
    return {
      error: n,
      submitting: e,
      publishSubscriptionListing: u,
      clearError: () => i(null)
    }
  },
  I = e => (0, i.useStateFromStores)([a.default], () => null != e ? a.default.getSubscriptionSettings(e) : void 0),
  m = () => {
    let [e, t] = r.useState(!1), [n, i] = r.useState(null), u = r.useCallback(async (e, n) => {
      t(!0), i(null);
      try {
        await s.updateSubscriptionsSettings(e, n)
      } catch (e) {
        i(e)
      } finally {
        t(!1)
      }
    }, []);
    return {
      loading: e,
      updateSubscriptionsSettings: u,
      error: n
    }
  },
  L = () => {
    let [e, t] = r.useState(!1), [n, i] = r.useState(null), u = r.useCallback(async e => {
      t(!0), i(null);
      try {
        await s.fetchSubscriptionsSettings(e)
      } catch (e) {
        i(e)
      } finally {
        t(!1)
      }
    }, []);
    return {
      loading: e,
      fetchSubscriptionsSettings: u,
      error: n
    }
  },
  v = e => (0, i.useStateFromStores)([a.default], () => null != e ? a.default.getSubscriptionTrial(e) : null)
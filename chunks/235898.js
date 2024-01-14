"use strict";
a.r(t), a.d(t, {
  default: function() {
    return u
  }
}), a("222007");
var l = a("884691"),
  s = a("65597"),
  r = a("875212"),
  n = a("21526"),
  o = a("853987"),
  i = a("775416");

function u() {
  var e;
  let t = "useFetchCollectiblesCategoriesAndPurchases";
  (0, r.useTriggerDebuggingAA)({
    location: t + " auto on",
    autoTrackExposure: !0
  }), (0, r.useTriggerDebuggingAA)({
    location: t + " auto off",
    autoTrackExposure: !1
  });
  let {
    isFetching: a,
    categories: u,
    error: c
  } = function() {
    let e = "useMaybeFetchCollectiblesCategories";
    (0, r.useTriggerDebuggingAA)({
      location: e + " auto on",
      autoTrackExposure: !0
    }), (0, r.useTriggerDebuggingAA)({
      location: e + " auto off",
      autoTrackExposure: !1
    });
    let [t, a, i, u] = (0, s.useStateFromStoresArray)([o.default], () => {
      var e;
      return [o.default.isFetching, o.default.error, null !== (e = o.default.lastFetched) && void 0 !== e ? e : 0, o.default.categories]
    });
    return (0, l.useEffect)(() => {
      !(t || a || Date.now() - i < 6e5) && (0, n.fetchCollectiblesCategories)()
    }, [t, i, a]), {
      isFetching: t,
      categories: u,
      error: a
    }
  }(), {
    isClaiming: d,
    fetchError: f,
    claimError: C,
    isFetching: E,
    purchases: m
  } = function() {
    let e = "useFetchPurchases";
    (0, r.useTriggerDebuggingAA)({
      location: e + " auto on",
      autoTrackExposure: !0
    }), (0, r.useTriggerDebuggingAA)({
      location: e + " auto off",
      autoTrackExposure: !1
    });
    let [t, a, o, u, c] = (0, s.useStateFromStoresArray)([i.default], () => [i.default.isFetching, i.default.isClaiming, i.default.fetchError, i.default.claimError, i.default.purchases]);
    return (0, l.useEffect)(() => {
      (0, n.fetchCollectiblesPurchases)()
    }, []), {
      isClaiming: a,
      fetchError: o,
      claimError: u,
      isFetching: t,
      purchases: c
    }
  }(), p = null !== (e = null != c ? c : f) && void 0 !== e ? e : C;
  return {
    isFetching: a || E,
    isFetchingCategories: a,
    isFetchingPurchases: E,
    isClaiming: d,
    categories: u,
    purchases: m,
    error: p
  }
}
"use strict";
n.r(t), n.d(t, {
  useFetchGuildProductListingsForGuild: function() {
    return c
  },
  useFetchGuildProductListing: function() {
    return f
  },
  useGuildProductsForGuild: function() {
    return h
  },
  useGuildProductListingById: function() {
    return _
  },
  useCanManageGuildProduct: function() {
    return C
  }
}), n("222007");
var r = n("884691"),
  i = n("446674");
n("162426");
var u = n("619443"),
  l = n("957255"),
  o = n("162771"),
  s = n("359366"),
  a = n("565559"),
  d = n("49111");
let c = e => {
    let t = (0, i.useStateFromStores)([a.default], () => null != e ? a.default.getGuildProductsForGuildFetchState(e) : a.FetchState.FETCHED, [e]),
      n = (0, i.useStateFromStores)([u.default], () => u.default.isConnected()),
      [l, o] = r.useState(!0);
    return r.useEffect(() => {
      l && (t === a.FetchState.NOT_FETCHED || t === a.FetchState.FETCHED && a.default.isGuildProductsCacheExpired(e)) && n && s.fetchGuildProductsForGuild(e), o(!n)
    }, [e, n, t, l]), {
      listingsLoaded: t === a.FetchState.FETCHED && !l
    }
  },
  f = function(e, t) {
    let {
      requireCurrentGuild: n
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      requireCurrentGuild: !0
    }, l = (0, i.useStateFromStores)([u.default], () => u.default.isConnected()), d = (0, i.useStateFromStores)([o.default], () => o.default.getGuildId());
    return r.useEffect(() => {
      let r = a.default.getGuildProductFetchState(t);
      if ((!n || d === e) && l && r === a.FetchState.NOT_FETCHED) try {
        s.fetchGuildProduct(e, t)
      } catch (e) {}
    }, [e, t, l, d, n]), (0, i.useStateFromStores)([a.default], () => a.default.getGuildProduct(t))
  },
  h = (e, t) => {
    let {
      publishedOnly: n
    } = t;
    return (0, i.useStateFromStores)([a.default], () => a.default.getGuildProductsForGuild(e, {
      publishedOnly: n
    }))
  },
  _ = e => (0, i.useStateFromStores)([a.default], () => null == e ? void 0 : a.default.getGuildProduct(e)),
  C = e => (0, i.useStateFromStores)([l.default], () => null != e && l.default.can(d.Permissions.ADMINISTRATOR, e))
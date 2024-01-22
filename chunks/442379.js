"use strict";
u.r(e), u.d(e, {
  useFetchGuildProductListingsForGuild: function() {
    return f
  },
  useFetchGuildProductListing: function() {
    return _
  },
  useGuildProductsForGuild: function() {
    return E
  },
  useGuildProductListingById: function() {
    return C
  },
  useCanManageGuildProduct: function() {
    return T
  }
}), u("222007");
var n = u("884691"),
  r = u("446674");
u("162426");
var i = u("619443"),
  l = u("38654"),
  o = u("957255"),
  c = u("162771"),
  a = u("359366"),
  d = u("565559"),
  s = u("49111");
let f = t => {
    let e = (0, r.useStateFromStores)([d.default], () => null != t ? d.default.getGuildProductsForGuildFetchState(t) : d.FetchState.FETCHED, [t]),
      u = (0, r.useStateFromStores)([i.default], () => i.default.isConnected()),
      [l, o] = n.useState(!0);
    return n.useEffect(() => {
      l && (e === d.FetchState.NOT_FETCHED || e === d.FetchState.FETCHED && d.default.isGuildProductsCacheExpired(t)) && u && a.fetchGuildProductsForGuild(t), o(!u)
    }, [t, u, e, l]), {
      listingsLoaded: e === d.FetchState.FETCHED && !l
    }
  },
  _ = function(t, e) {
    let {
      requireCurrentGuild: u
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      requireCurrentGuild: !0
    }, l = (0, r.useStateFromStores)([i.default], () => i.default.isConnected()), o = (0, r.useStateFromStores)([c.default], () => c.default.getGuildId());
    return n.useEffect(() => {
      let n = d.default.getGuildProductFetchState(e);
      if ((!u || o === t) && l && n === d.FetchState.NOT_FETCHED) try {
        a.fetchGuildProduct(t, e)
      } catch (t) {}
    }, [t, e, l, o, u]), (0, r.useStateFromStores)([d.default], () => d.default.getGuildProduct(e))
  },
  E = function(t) {
    let {
      publishedOnly: e
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (0, r.useStateFromStores)([d.default, l.default], () => d.default.getGuildProductsForGuild(t, {
      publishedOnly: null != e ? e : !l.default.isViewingServerShop(t)
    }))
  },
  C = t => (0, r.useStateFromStores)([d.default], () => null == t ? void 0 : d.default.getGuildProduct(t)),
  T = t => (0, r.useStateFromStores)([o.default], () => null != t && o.default.can(s.Permissions.ADMINISTRATOR, t))
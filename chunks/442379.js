"use strict";
u.r(e), u.d(e, {
  useFetchGuildProductListingsForGuild: function() {
    return s
  },
  useFetchGuildProductListing: function() {
    return f
  },
  useGuildProductsForGuild: function() {
    return _
  },
  useGuildProductListingById: function() {
    return E
  },
  useCanManageGuildProduct: function() {
    return C
  }
}), u("222007");
var r = u("884691"),
  n = u("446674");
u("162426");
var i = u("619443"),
  l = u("957255"),
  o = u("162771"),
  c = u("359366"),
  a = u("565559"),
  d = u("49111");
let s = t => {
    let e = (0, n.useStateFromStores)([a.default], () => null != t ? a.default.getGuildProductsForGuildFetchState(t) : a.FetchState.FETCHED, [t]),
      u = (0, n.useStateFromStores)([i.default], () => i.default.isConnected()),
      [l, o] = r.useState(!0);
    return r.useEffect(() => {
      l && (e === a.FetchState.NOT_FETCHED || e === a.FetchState.FETCHED && a.default.isGuildProductsCacheExpired(t)) && u && c.fetchGuildProductsForGuild(t), o(!u)
    }, [t, u, e, l]), {
      listingsLoaded: e === a.FetchState.FETCHED && !l
    }
  },
  f = function(t, e) {
    let {
      requireCurrentGuild: u
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      requireCurrentGuild: !0
    }, l = (0, n.useStateFromStores)([i.default], () => i.default.isConnected()), d = (0, n.useStateFromStores)([o.default], () => o.default.getGuildId());
    return r.useEffect(() => {
      let r = a.default.getGuildProductFetchState(e);
      if ((!u || d === t) && l && r === a.FetchState.NOT_FETCHED) try {
        c.fetchGuildProduct(t, e)
      } catch (t) {}
    }, [t, e, l, d, u]), (0, n.useStateFromStores)([a.default], () => a.default.getGuildProduct(e))
  },
  _ = (t, e) => {
    let {
      publishedOnly: u
    } = e;
    return (0, n.useStateFromStores)([a.default], () => a.default.getGuildProductsForGuild(t, {
      publishedOnly: u
    }))
  },
  E = t => (0, n.useStateFromStores)([a.default], () => null == t ? void 0 : a.default.getGuildProduct(t)),
  C = t => (0, n.useStateFromStores)([l.default], () => null != t && l.default.can(d.Permissions.ADMINISTRATOR, t))
"use strict";
n.r(t), n.d(t, {
  useGroupListingsFetchContext: function() {
    return d
  },
  GroupListingsFetchContextProvider: function() {
    return c
  }
}), n("70102");
var i = n("37983"),
  r = n("884691"),
  l = n("65597"),
  u = n("619443"),
  o = n("371358"),
  s = n("648825");
let a = r.createContext(void 0);

function d(e) {
  let t = r.useContext(a);
  if (null == t) throw Error("".concat(null != e ? e : "useGroupListingsFetchContext", " must be used within a GroupListingsFetchContextProvider"));
  let {
    listingsLoaded: n,
    fetchGroupListingsForGuild: i
  } = t;
  return i(), n
}

function c(e) {
  let {
    guildId: t,
    children: n,
    refetchOnMount: d,
    includeSoftDeleted: c,
    countryCode: f,
    dontFetchWhileTrue: S
  } = e, E = (0, l.default)([u.default], () => u.default.isConnected()), h = (0, l.default)([s.default], () => null != t ? s.default.getSubscriptionGroupListingsForGuildFetchState(t) : s.FetchState.FETCHED), g = r.useRef(d), p = r.useCallback(() => {
    if (null == t || !E || !0 === S) return;
    let e = s.default.getSubscriptionGroupListingsForGuildFetchState(t);
    (g.current || e === s.FetchState.NOT_FETCHED) && (g.current = !1, o.fetchAllSubscriptionListingsDataForGuild(t, {
      includeSoftDeleted: c,
      countryCode: f
    }))
  }, [E, t, c, f, S]), _ = r.useMemo(() => h === s.FetchState.FETCHED && !0 !== g.current, [h, g]);
  return (0, i.jsx)(a.Provider, {
    value: {
      listingsLoaded: _,
      fetchGroupListingsForGuild: p
    },
    children: n
  })
}
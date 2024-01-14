"use strict";
n.r(t), n.d(t, {
  FetchState: function() {
    return r
  },
  default: function() {
    return d
  }
}), n("222007");
var r, i, u = n("446674"),
  l = n("913144");
let o = new Map,
  s = new Map;
(i = r || (r = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
class a extends u.default.Store {
  getPriceTiersFetchStateForGuildAndType(e, t) {
    var n, r;
    return null !== (r = null === (n = s.get(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== r ? r : 0
  }
  getPriceTiersForGuildAndType(e, t) {
    var n;
    return null === (n = o.get(e)) || void 0 === n ? void 0 : n.get(t)
  }
}
a.displayName = "CreatorMonetizationStore";
var d = new a(l.default, {
  CONNECTION_OPEN: function() {
    o.clear(), s.clear()
  },
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function(e) {
    let {
      guildId: t,
      priceTierType: n
    } = e;
    !s.has(t) && s.set(t, new Map), s.get(t).set(n, 1)
  },
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      priceTierType: n,
      priceTiers: r
    } = e;
    !s.has(t) && s.set(t, new Map), s.get(t).set(n, 2), !o.has(t) && o.set(t, new Map), o.get(t).set(n, r)
  },
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function(e) {
    let {
      guildId: t,
      priceTierType: n
    } = e;
    !s.has(t) && s.set(t, new Map), s.get(t).set(n, 2)
  }
})
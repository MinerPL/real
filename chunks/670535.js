"use strict";
n.r(t), n.d(t, {
  FetchState: function() {
    return i
  },
  default: function() {
    return d
  }
}), n("222007");
var i, r, l = n("446674"),
  u = n("913144");
let o = new Map,
  s = new Map;
(r = i || (i = {}))[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED";
class a extends l.default.Store {
  getPriceTiersFetchStateForGuildAndType(e, t) {
    var n, i;
    return null !== (i = null === (n = s.get(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== i ? i : 0
  }
  getPriceTiersForGuildAndType(e, t) {
    var n;
    return null === (n = o.get(e)) || void 0 === n ? void 0 : n.get(t)
  }
}
a.displayName = "CreatorMonetizationStore";
var d = new a(u.default, {
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
      priceTiers: i
    } = e;
    !s.has(t) && s.set(t, new Map), s.get(t).set(n, 2), !o.has(t) && o.set(t, new Map), o.get(t).set(n, i)
  },
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function(e) {
    let {
      guildId: t,
      priceTierType: n
    } = e;
    !s.has(t) && s.set(t, new Map), s.get(t).set(n, 2)
  }
})
"use strict";
let i;
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007"), n("70102");
var r = n("446674"),
  l = n("913144"),
  a = n("915639"),
  s = n("928460"),
  u = n("449008");
let o = {},
  d = {},
  c = {},
  f = {};

function p(e) {
  let t = e.id,
    n = e.sku.id,
    i = o[t],
    r = s.default.createFromServer(e);
  !(null != i && !i.isSlimDirectoryVersion() && r.isSlimDirectoryVersion()) && (!1 === e.published ? (null == c[n] && (c[n] = new Set), c[n].add(t)) : f[n] = t, o[t] = r)
}

function h(e, t) {
  return "".concat(e, ":").concat(t)
}

function S(e) {
  let {
    storeListings: t
  } = e;
  for (let e of t) p(e)
}

function m() {
  o = {}, f = {}, c = {}, d = {}
}

function _() {
  if (i === a.default.locale) return !1;
  m(), i = a.default.locale
}
class I extends r.default.Store {
  initialize() {
    this.waitFor(a.default), this.syncWith([a.default], _), i = a.default.locale
  }
  get(e) {
    return o[e]
  }
  getForSKU(e, t) {
    let n = f[e];
    return null != t ? d[h(t, e)] : null != n ? o[n] : null
  }
  getUnpublishedForSKU(e) {
    let t = c[e];
    return null == t ? [] : Array.from(t).map(e => o[e]).filter(u.isNotNullish)
  }
  getForChannel(e, t) {
    return d[h(e, t)]
  }
  getStoreListing(e) {
    let {
      storeListingId: t,
      skuId: n,
      channelId: i,
      isTestMode: r
    } = e;
    if (r && null != n) {
      let e = this.getUnpublishedForSKU(n);
      if (null != e && e.length > 0) return e[0]
    }
    if (null != t) return this.get(t);
    if (null != i) {
      if (null == n) throw Error("getStoreListing with channel expects a skuId");
      return this.getForChannel(i, n)
    }
    if (null != n) return this.getForSKU(n);
    return null
  }
}
I.displayName = "StoreListingStore";
var E = new I(l.default, {
  STORE_LISTINGS_FETCH_SUCCESS: S,
  APPLICATION_STORE_DIRECTORY_FETCH_SUCCESS: S,
  STORE_LISTING_FETCH_SUCCESS: function(e) {
    let {
      storeListing: t,
      channelId: n
    } = e;
    if (null != n) {
      let e = s.default.createFromServer(t);
      d[h(n, e.skuId)] = e, f[e.skuId] = e.id
    } else p(t)
  },
  USER_SETTINGS_PROTO_UPDATE: _,
  APPLICATION_STORE_CLEAR_DATA: m,
  GIFT_CODE_RESOLVE_SUCCESS: function(e) {
    let {
      giftCode: t
    } = e;
    if (null == t.store_listing) return !1;
    p(t.store_listing)
  }
})
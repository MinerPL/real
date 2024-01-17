"use strict";
r.r(t), r.d(t, {
  default: function() {
    return C
  }
}), r("808653");
var u = r("635058"),
  l = r("265586"),
  n = r("446674"),
  i = r("913144"),
  s = r("853987");
let a = new Date(2023, 8, 25),
  c = new Date(2023, 9, 5),
  o = () => ({
    categoryItemViews: {
      [u.CollectiblesCategorySkuId.FANTASY]: {
        [l.CollectiblesItemType.AVATAR_DECORATION]: a,
        [l.CollectiblesItemType.PROFILE_EFFECT]: c
      },
      [u.CollectiblesCategorySkuId.ANIME]: {
        [l.CollectiblesItemType.AVATAR_DECORATION]: a,
        [l.CollectiblesItemType.PROFILE_EFFECT]: c
      },
      [u.CollectiblesCategorySkuId.BREAKFAST]: {
        [l.CollectiblesItemType.AVATAR_DECORATION]: a,
        [l.CollectiblesItemType.PROFILE_EFFECT]: c
      },
      [u.CollectiblesCategorySkuId.DISXCORE]: {
        [l.CollectiblesItemType.AVATAR_DECORATION]: a
      }
    }
  }),
  d = o();
class E extends n.default.PersistedStore {
  initialize(e) {
    null != e && (d = e)
  }
  getState() {
    return d
  }
  isItemViewed(e) {
    var t, r;
    let u = null === (t = s.default.getProduct(e.skuId)) || void 0 === t ? void 0 : t.categorySkuId;
    return null != u && (null === (r = d.categoryItemViews[u]) || void 0 === r ? void 0 : r[e.type]) != null
  }
  reset() {
    d = o()
  }
}
E.displayName = "CollectiblesPersistedStore", E.persistKey = "CollectiblesPersistedStoreV2";
var C = new E(i.default, {
  COLLECTIBLES_CATEGORY_ITEMS_VIEWED: e => {
    let {
      categories: t,
      itemTypes: r
    } = e, u = new Date;
    return t.reduce((e, t) => {
      let {
        skuId: l
      } = t, n = r.reduce((e, t) => {
        var r;
        return (null === (r = d.categoryItemViews[l]) || void 0 === r ? void 0 : r[t]) != null ? e : (null == d.categoryItemViews[l] && (d.categoryItemViews[l] = {}), d.categoryItemViews[l][t] = u, !0)
      }, !1);
      return e || n
    }, !1)
  }
})
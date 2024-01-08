            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return _
                }
            }), r("808653");
            var a = r("635058"),
                n = r("265586"),
                s = r("446674"),
                u = r("913144"),
                i = r("853987");
            let l = new Date(2023, 8, 25),
                o = new Date(2023, 9, 5),
                c = () => ({
                    categoryItemViews: {
                        [a.CollectiblesCategorySkuId.FANTASY]: {
                            [n.CollectiblesItemType.AVATAR_DECORATION]: l,
                            [n.CollectiblesItemType.PROFILE_EFFECT]: o
                        },
                        [a.CollectiblesCategorySkuId.ANIME]: {
                            [n.CollectiblesItemType.AVATAR_DECORATION]: l,
                            [n.CollectiblesItemType.PROFILE_EFFECT]: o
                        },
                        [a.CollectiblesCategorySkuId.BREAKFAST]: {
                            [n.CollectiblesItemType.AVATAR_DECORATION]: l,
                            [n.CollectiblesItemType.PROFILE_EFFECT]: o
                        },
                        [a.CollectiblesCategorySkuId.DISXCORE]: {
                            [n.CollectiblesItemType.AVATAR_DECORATION]: l
                        }
                    }
                }),
                d = c();
            class E extends s.default.PersistedStore {
                initialize(e) {
                    null != e && (d = e)
                }
                getState() {
                    return d
                }
                isItemViewed(e) {
                    var t, r;
                    let a = null === (t = i.default.getProduct(e.skuId)) || void 0 === t ? void 0 : t.categorySkuId;
                    return null != a && (null === (r = d.categoryItemViews[a]) || void 0 === r ? void 0 : r[e.type]) != null
                }
                reset() {
                    d = c()
                }
            }
            E.displayName = "CollectiblesPersistedStore", E.persistKey = "CollectiblesPersistedStoreV2";
            var _ = new E(u.default, {
                COLLECTIBLES_CATEGORY_ITEMS_VIEWED: e => {
                    let {
                        categories: t,
                        itemTypes: r
                    } = e, a = new Date;
                    return t.reduce((e, t) => {
                        let {
                            skuId: n
                        } = t, s = r.reduce((e, t) => {
                            var r;
                            return (null === (r = d.categoryItemViews[n]) || void 0 === r ? void 0 : r[t]) != null ? e : (null == d.categoryItemViews[n] && (d.categoryItemViews[n] = {}), d.categoryItemViews[n][t] = a, !0)
                        }, !1);
                        return e || s
                    }, !1)
                }
            })
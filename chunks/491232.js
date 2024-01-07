            "use strict";
            r.r(e), r.d(e, {
                isPremiumCollectiblesProduct: function() {
                    return E
                },
                isPremiumCollectiblesPurchase: function() {
                    return s
                },
                getFormattedPriceForCollectiblesProduct: function() {
                    return _
                },
                extractPriceByPurchaseTypes: function() {
                    return S
                },
                isFreeCollectiblesProduct: function() {
                    return d
                },
                getProductsFromCategories: function() {
                    return C
                },
                getAvatarDecorationsFromPurchases: function() {
                    return f
                },
                getAvatarDecorationsFromCategories: function() {
                    return v
                },
                getCollectiblesAssetURL: function() {
                    return O
                },
                getProfileEffectsFromPurchases: function() {
                    return N
                },
                getProfileEffectsFromCategories: function() {
                    return R
                },
                groupProfileEffects: function() {
                    return P
                },
                isCollectiblesGiftCode: function() {
                    return g
                }
            }), r("222007");
            var n = r("917351"),
                i = r("635058"),
                o = r("265586"),
                u = r("407063"),
                l = r("153160"),
                a = r("730297"),
                T = r("806410"),
                c = r("49111");
            let E = t => (null == t ? void 0 : t.categorySkuId) === i.CollectiblesCategorySkuId.DISXCORE,
                s = t => (null == t ? void 0 : t.purchaseType) === c.EntitlementTypes.PREMIUM_PURCHASE,
                _ = (t, e) => {
                    let r = S(t, e ? c.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2 : c.PriceSetAssignmentPurchaseTypes.DEFAULT);
                    return null == r ? "" : (0, l.formatPrice)(null == r ? void 0 : r.amount, null == r ? void 0 : r.currency)
                },
                S = (t, e) => {
                    var r, n, i;
                    let o = null !== (i = t.prices[e]) && void 0 !== i ? i : null;
                    return null == o ? null : null === (n = o.countryPrices) || void 0 === n ? void 0 : null === (r = n.prices) || void 0 === r ? void 0 : r[0]
                },
                d = t => {
                    var e;
                    return (null === (e = S(t, c.PriceSetAssignmentPurchaseTypes.DEFAULT)) || void 0 === e ? void 0 : e.amount) === 0
                },
                C = t => {
                    let e = (0, n.flatMap)([...t.values()], "products");
                    return (0, n.uniqBy)(e, "storeListingId")
                },
                I = (t, e) => {
                    if (e === o.CollectiblesItemType.AVATAR_DECORATION) {
                        let e = (0, n.flatMap)([...t.values()], "items").filter(a.isAvatarDecorationRecord);
                        return (0, n.uniqBy)(e, "id")
                    }
                    if (e === o.CollectiblesItemType.PROFILE_EFFECT) {
                        let e = (0, n.flatMap)([...t.values()], "items").filter(T.isProfileEffectRecord);
                        return (0, n.uniqBy)(e, "id")
                    }
                },
                A = (t, e) => {
                    let r = C(t);
                    if (e === o.CollectiblesItemType.AVATAR_DECORATION) {
                        let t = (0, n.flatMap)(r, "items").filter(a.isAvatarDecorationRecord);
                        return (0, n.uniqBy)(t, "id")
                    }
                    if (e === o.CollectiblesItemType.PROFILE_EFFECT) {
                        let t = (0, n.flatMap)(r, "items").filter(T.isProfileEffectRecord);
                        return (0, n.uniqBy)(t, "id")
                    }
                },
                f = t => I(t, o.CollectiblesItemType.AVATAR_DECORATION),
                v = t => A(t, o.CollectiblesItemType.AVATAR_DECORATION),
                O = (t, e) => {
                    var r;
                    let {
                        CDN_HOST: n,
                        API_ENDPOINT: i
                    } = window.GLOBAL_ENV, o = (0, u.getBestMediaProxySize)(e.size * (0, u.getDevicePixelRatio)()), l = null !== (r = null == e ? void 0 : e.format) && void 0 !== r ? r : "png";
                    if (null != n) return "".concat(location.protocol, "//").concat(n, "/app-assets/").concat(c.COLLECTIBLES_APPLICATION_ID, "/").concat(t, ".").concat(l, "?size=").concat(o);
                    let a = c.Endpoints.APPLICATION_ASSET(c.COLLECTIBLES_APPLICATION_ID, t, l);
                    return "".concat(location.protocol).concat(i).concat(a, "?size=").concat(o)
                },
                N = t => I(t, o.CollectiblesItemType.PROFILE_EFFECT),
                R = t => A(t, o.CollectiblesItemType.PROFILE_EFFECT),
                P = (t, e) => {
                    let r = N(e),
                        n = R(t).filter(t => {
                            let {
                                id: e
                            } = t;
                            return !r.some(t => t.id === e)
                        });
                    return {
                        purchased: r,
                        shopPreviews: n
                    }
                },
                g = t => t.applicationId === c.COLLECTIBLES_APPLICATION_ID
            "use strict";
            let a;
            r.r(t), r.d(t, {
                default: function() {
                    return d
                }
            });
            var n = r("446674"),
                s = r("913144");
            let i = [],
                u = i,
                l = null,
                o = e => {
                    u = i, l = null
                };
            class c extends n.default.Store {
                get analyticsLocations() {
                    return u
                }
                get analyticsSource() {
                    return l
                }
                get initialProductSkuId() {
                    return a
                }
                getAnalytics() {
                    return {
                        analyticsLocations: u,
                        analyticsSource: l
                    }
                }
            }
            c.displayName = "CollectiblesShopStore";
            var d = new c(s.default, {
                COLLECTIBLES_SHOP_OPEN: e => {
                    var t, r;
                    u = null !== (t = e.analyticsLocations) && void 0 !== t ? t : i, l = null !== (r = e.analyticsSource) && void 0 !== r ? r : null, a = e.initialProductSkuId
                },
                COLLECTIBLES_SHOP_CLOSE: o,
                COLLECTIBLES_PRODUCT_DETAILS_OPEN: e => {
                    e.item.skuId === a && (a = void 0)
                },
                LOGOUT: o
            })
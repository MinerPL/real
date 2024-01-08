            "use strict";
            let a;
            r.r(t), r.d(t, {
                default: function() {
                    return d
                }
            });
            var n = r("446674"),
                s = r("913144");
            let u = [],
                i = u,
                l = null,
                o = e => {
                    i = u, l = null
                };
            class c extends n.default.Store {
                get analyticsLocations() {
                    return i
                }
                get analyticsSource() {
                    return l
                }
                get initialProductSkuId() {
                    return a
                }
                getAnalytics() {
                    return {
                        analyticsLocations: i,
                        analyticsSource: l
                    }
                }
            }
            c.displayName = "CollectiblesShopStore";
            var d = new c(s.default, {
                COLLECTIBLES_SHOP_OPEN: e => {
                    var t, r;
                    i = null !== (t = e.analyticsLocations) && void 0 !== t ? t : u, l = null !== (r = e.analyticsSource) && void 0 !== r ? r : null, a = e.initialProductSkuId
                },
                COLLECTIBLES_SHOP_CLOSE: o,
                COLLECTIBLES_PRODUCT_DETAILS_OPEN: e => {
                    e.item.skuId === a && (a = void 0)
                },
                LOGOUT: o
            })
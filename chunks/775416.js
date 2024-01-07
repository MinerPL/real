            "use strict";
            let a, n, s;
            r.r(t), r.d(t, {
                default: function() {
                    return _
                }
            }), r("222007");
            var i = r("917351"),
                u = r("446674"),
                l = r("913144");
            let o = new Map,
                c = o,
                d = !1;
            class E extends u.default.Store {
                get isFetching() {
                    return d
                }
                get isClaiming() {
                    return a
                }
                get purchases() {
                    return c
                }
                get fetchError() {
                    return n
                }
                get claimError() {
                    return s
                }
                getPurchase(e) {
                    return null != e ? c.get(e) : void 0
                }
            }
            E.displayName = "CollectiblesPurchaseStore";
            var _ = new E(l.default, {
                COLLECTIBLES_PURCHASES_FETCH: e => {
                    d = !0, n = void 0
                },
                COLLECTIBLES_PURCHASES_FETCH_SUCCESS: e => {
                    0 === e.purchases.length ? c = o : !(0, i.isEqual)([...c.values()], e.purchases) && (c = new Map(e.purchases.map(e => [e.skuId, e]))), d = !1, n = void 0
                },
                COLLECTIBLES_PURCHASES_FETCH_FAILURE: e => {
                    let {
                        error: t
                    } = e;
                    c = o, d = !1, n = t
                },
                COLLECTIBLES_CLAIM: e => {
                    a = e.skuId, s = void 0
                },
                COLLECTIBLES_CLAIM_SUCCESS: e => {
                    null == e.purchases || 0 === e.purchases.length ? c = o : !(0, i.isEqual)([...c.values()], e.purchases) && (c = new Map(e.purchases.map(e => [e.skuId, e]))), a = void 0, s = void 0
                },
                COLLECTIBLES_CLAIM_FAILURE: e => {
                    let {
                        error: t,
                        skuId: r
                    } = e;
                    a = r, s = t
                },
                LOGOUT: e => {
                    c = o, d = !1, a = void 0, n = void 0, s = void 0
                }
            })
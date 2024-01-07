            "use strict";
            let i;
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("222007");
            var r = n("446674"),
                s = n("913144"),
                a = n("915639"),
                o = n("137406"),
                l = n("546463");
            let u = new Set,
                c = new Set,
                d = {},
                f = {},
                E = {};

            function h(e) {
                d[e.id] = o.default.createFromServer(e)
            }

            function p(e) {
                u.delete(e.id), c.delete(e.id), h(e)
            }

            function _(e) {
                h(e.sku), null != e.child_skus && e.child_skus.forEach(e => h(e)), null != e.alternative_skus && e.alternative_skus.forEach(e => h(e))
            }

            function S(e) {
                let {
                    storeListings: t
                } = e;
                for (let e of t) _(e)
            }

            function m(e) {
                let {
                    entitlements: t
                } = e;
                for (let e of t) null != e.sku && h(e.sku)
            }

            function T() {
                u = new Set, c = new Set, d = {}, f = {}, E = {}
            }

            function g() {
                if (i === a.default.locale) return !1;
                i = a.default.locale, T()
            }
            class I extends r.default.Store {
                initialize() {
                    this.waitFor(a.default, l.default), this.syncWith([a.default], g), i = a.default.locale
                }
                get(e) {
                    return d[e]
                }
                getForApplication(e) {
                    let t = f[e];
                    return null == t ? [] : Array.from(t).map(e => d[e])
                }
                isFetching(e) {
                    return u.has(e)
                }
                getSKUs() {
                    return d
                }
                didFetchingSkuFail(e) {
                    return c.has(e)
                }
            }
            I.displayName = "SKUStore";
            var C = new I(s.default, {
                STORE_LISTINGS_FETCH_SUCCESS: S,
                APPLICATION_STORE_DIRECTORY_FETCH_SUCCESS: S,
                STORE_LISTING_FETCH_SUCCESS: function(e) {
                    let {
                        storeListing: t
                    } = e;
                    _(t)
                },
                GIFT_CODE_RESOLVE_SUCCESS: function(e) {
                    let {
                        giftCode: t
                    } = e;
                    if (null == t.store_listing) return !1;
                    h(t.store_listing.sku)
                },
                SKU_FETCH_START: function(e) {
                    let {
                        skuId: t
                    } = e;
                    u.add(t)
                },
                SKU_FETCH_SUCCESS: function(e) {
                    let {
                        sku: t
                    } = e;
                    p(t)
                },
                SKU_FETCH_FAIL: function(e) {
                    let {
                        skuId: t
                    } = e;
                    u.delete(t), c.add(t)
                },
                SKUS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        applicationId: n,
                        skus: i
                    } = e;
                    for (let e of i) p(e);
                    null != t && (E[t] = new Set(i.map(e => e.id))), null != n && (f[n] = new Set(i.map(e => e.id)))
                },
                ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: m,
                APPLICATION_STORE_CLEAR_DATA: T,
                APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: m,
                ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: m
            })
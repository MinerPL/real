            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("222007"), n("424973");
            var l = n("917351"),
                a = n.n(l),
                s = n("446674"),
                i = n("95410"),
                r = n("913144"),
                o = n("316718"),
                u = n("465527"),
                d = n("651057"),
                c = n("299285"),
                f = n("568307"),
                E = n("697218"),
                h = n("437712"),
                _ = n("552712"),
                S = n("49111");
            let T = "DetectedOffPlatformPremiumPerksStore",
                p = {},
                N = {},
                I = [];

            function m() {
                let e = !1;
                for (let {
                        skuId: t,
                        applicationId: n
                    }
                    of a.values(N)) {
                    if (I.includes(t)) continue;
                    let l = c.default.getApplication(n);
                    if (null == l) {
                        !c.default.isFetchingApplication(n) && !c.default.didFetchingApplicationFail(n) && d.default.fetchApplication(n);
                        continue
                    }
                    let a = _.default.get(t);
                    if (null == a) {
                        !_.default.isFetching(t) && !_.default.didFetchingSkuFail(t) && u.fetchSKU(l.id, t);
                        continue
                    }
                    h.default.applicationIdsFetching.has(l.id) || h.default.isEntitledToSku(E.default.getCurrentUser(), t, l.id, l.id) || !a.available ? null != p[t] && (delete p[t], e = !0) : (p[t] = {
                        skuId: t,
                        applicationId: n
                    }, e = !0)
                }
                return e
            }
            class A extends s.default.Store {
                initialize() {
                    var e;
                    this.waitFor(f.default, _.default, h.default), I = null !== (e = i.default.get(T)) && void 0 !== e ? e : I
                }
                getDetectedOffPlatformPremiumPerks() {
                    return a.values(p)
                }
            }
            A.displayName = "DetectedOffPlatformPremiumPerksStore";
            var g = new A(r.default, {
                LOGOUT: function() {
                    p = {}, N = {}
                },
                SKU_FETCH_SUCCESS: m,
                ENTITLEMENT_FETCH_APPLICATION_SUCCESS: m,
                ENTITLEMENT_CREATE: m,
                APPLICATION_FETCH_SUCCESS: m,
                DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function(e) {
                    let {
                        skuId: t
                    } = e;
                    if (delete p[t], I.includes(t)) return !1;
                    I.push(t), i.default.set(T, I)
                },
                RUNNING_GAMES_CHANGE: function() {
                    let e = !1;
                    for (let {
                            id: t,
                            distributor: n
                        }
                        of f.default.getRunningGames())
                        if (null != t && n !== S.Distributors.DISCORD)
                            for (let {
                                    skuId: n,
                                    applicationId: l
                                }
                                of S.OFF_PLATFORM_PREMIUM_PERKS) {
                                if (!(l !== t || I.includes(n))) null == N[n] && (!h.default.applicationIdsFetched.has(l) && !h.default.applicationIdsFetching.has(l) && null == h.default.getForSku(n) && o.fetchUserEntitlementsForApplication(l), N[n] = {
                                    skuId: n,
                                    applicationId: l
                                }, e = !0)
                            }
                    return e && m(), e
                }
            })
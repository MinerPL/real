            "use strict";
            n.r(t), n.d(t, {
                openIAPPurchaseModal: function() {
                    return R
                },
                openSKUPaymentModal: function() {
                    return P
                }
            }), n("70102");
            var a = n("37983");
            n("884691");
            var s = n("627445"),
                l = n.n(s),
                i = n("77078"),
                r = n("913144"),
                o = n("850068"),
                u = n("427495"),
                d = n("73961"),
                c = n("465527"),
                f = n("55620"),
                m = n("775433"),
                E = n("524503"),
                _ = n("333955"),
                h = n("308592"),
                p = n("846286"),
                I = n("314058"),
                T = n("509167"),
                g = n("292687"),
                C = n("929479"),
                S = n("697218"),
                A = n("357957"),
                N = n("521012"),
                M = n("552712"),
                v = n("719923"),
                x = n("49111");

            function O(e, t) {
                let {
                    applicationId: n,
                    id: a
                } = e;
                return c.purchaseSKU(n, a).then(e => {
                    let {
                        entitlements: s
                    } = e;
                    return (0, d.openPurchaseConfirmationModal)(n, a, s, {
                        context: t
                    })
                })
            }

            function L() {
                let e = g.default.getWindow(x.PopoutWindowKeys.CHANNEL_CALL_POPOUT),
                    t = null != e && !e.closed;
                return t ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT
            }
            async function R(e) {
                let {
                    applicationId: t,
                    skuId: n,
                    initialPlanId: s,
                    openPremiumPaymentModal: i,
                    analyticsLocations: r,
                    analyticsLocationObject: o,
                    context: d
                } = e, c = M.default.get(n);
                if (null == c) {
                    let e = await (0, f.fetchAllStoreListingsForApplication)(t),
                        a = e.find(e => e.sku.id === n);
                    l(null != a, "Could not find store listing for sku"), a.sku.type === x.SKUTypes.SUBSCRIPTION_GROUP && await (0, E.fetchAllSubscriptionListingsDataForApplication)(t, a.id)
                }(null == (c = null != c ? c : M.default.get(n)) ? void 0 : c.type) === x.SKUTypes.SUBSCRIPTION && !(0, h.getSubscriptionPlansLoaded)([c.id]) && await (0, m.fetchSubscriptionPlansForSKU)(c.id);
                let {
                    enabled: g
                } = I.default.getCurrentConfig({
                    location: "ccd2f5_1"
                }, {
                    autoTrackExposure: !0
                }), A = L(), R = S.default.getCurrentUser();
                if (null != c && c.premium) {
                    if (v.default.canInstallPremiumApplications(R)) return O(c, d);
                    await u.openModal(d), await

                    function(e, t, n, a, s) {
                        let l = N.default.getPremiumSubscription(),
                            i = {
                                id: e.id,
                                applicationId: e.applicationId
                            };
                        if (null != l) {
                            let e = v.default.getClosestUpgrade(l.planId);
                            if (null == e) return Promise.reject(Error("Could not find premium upgrade."));
                            let t = {
                                initialPlanId: e,
                                followupSKUInfo: i,
                                analyticsLocations: a,
                                analyticsObject: n
                            };
                            switch (s) {
                                case x.AppContext.APP:
                                    return C.default.openPremiumPaymentModalInApp(t);
                                case x.AppContext.OVERLAY:
                                    return C.default.openPremiumPaymentModalInOverlay(t);
                                default:
                                    throw Error("Unexpected app context: ".concat(s))
                            }
                        }
                        return t()
                    }(c, i, o, r, d), await O(c, d)
                } else if (null != c && c.type === x.SKUTypes.SUBSCRIPTION) await

                function(e, t, n, s, l) {
                    return (0, p.openActivityApplicationPaymentModal)({
                        applicationId: e,
                        skuId: t,
                        initialPlanId: n,
                        analyticsLocationObject: s,
                        analyticsLocations: l,
                        renderHeader: (e, t, n) => (0, a.jsx)(_.PurchaseHeader, {
                            step: n,
                            onClose: () => t(!1)
                        })
                    })
                }(t, n, s, o, r);
                else if (g) return new Promise(async (e, a) => {
                    await (0, T.default)({
                        applicationId: t,
                        skuId: n,
                        analyticsLocationObject: o,
                        analyticsLocations: r,
                        contextKey: A,
                        onComplete: t => {
                            var n;
                            e(null !== (n = null == t ? void 0 : t.entitlements) && void 0 !== n ? n : [])
                        },
                        onClose: e => {
                            !e && a()
                        }
                    })
                });
                else return P(t, n, o, {
                    isIAP: !0,
                    context: d
                })
            }
            let y = {
                isIAP: !1,
                context: x.AppContext.APP,
                promotionId: null,
                isGift: !1
            };

            function P(e, t, s) {
                let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    u = Promise.resolve();
                !A.default.hasFetchedPaymentSources && (u = o.fetchPaymentSources());
                let {
                    isIAP: d,
                    context: c,
                    promotionId: f,
                    isGift: m
                } = {
                    ...y,
                    ...l
                }, E = L();
                return u.then(() => new Promise((l, o) => {
                    r.default.dispatch({
                        type: "SKU_PURCHASE_MODAL_OPEN",
                        applicationId: e,
                        skuId: t,
                        isIAP: d,
                        isGift: m,
                        analyticsLocation: s,
                        promotionId: f,
                        context: c,
                        resolve: l,
                        reject: o
                    }), (0, i.openModalLazy)(async () => {
                        let {
                            default: s
                        } = await n.el("787598").then(n.bind(n, "787598"));
                        return n => {
                            let {
                                onClose: l,
                                ...i
                            } = n;
                            return (0, a.jsx)(s, {
                                ...i,
                                onClose: function() {
                                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                                    r.default.dispatch({
                                        type: "SKU_PURCHASE_MODAL_CLOSE",
                                        error: e
                                    }), l()
                                },
                                applicationId: e,
                                skuId: t,
                                appContext: c
                            })
                        }
                    }, {
                        contextKey: E
                    })
                }))
            }
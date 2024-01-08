            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("70102"), n("222007");
            var a = n("308757"),
                s = n("812204"),
                i = n("929479"),
                l = n("861309"),
                r = n("716724"),
                o = n("613652"),
                u = n("383928"),
                d = n("56245"),
                c = n("492249"),
                E = n("49111"),
                f = n("646718");
            let _ = [s.default.RPC];

            function h(e) {
                if (null == e) return {
                    lock: E.NOOP_NULL,
                    context: E.AppContext.APP
                };
                let t = (0, d.unlockOverlay)(e);
                return {
                    lock: t.lock,
                    context: t.context
                }
            }

            function C(e, t) {
                let n = {
                    subscriptionTier: f.PremiumSubscriptionSKUs.TIER_2,
                    analyticsLocations: _,
                    analyticsObject: t
                };
                switch (e) {
                    case E.AppContext.APP:
                        return i.default.openPremiumPaymentModalInApp(n);
                    case E.AppContext.OVERLAY:
                        return i.default.openPremiumPaymentModalInOverlay(n);
                    default:
                        throw Error("Unexpected app context: ".concat(e))
                }
            }
            var I = {
                [E.RPCCommands.START_PURCHASE]: {
                    [c.RPC_SCOPE_CONFIG.ANY]: [c.RPC_AUTHENTICATED_SCOPE, c.RPC_LOCAL_SCOPE],
                    validation: e => (0, r.default)(e).required().keys({
                        sku_id: e.string().required(),
                        pid: e.number().min(0)
                    }),
                    handler(e) {
                        let {
                            socket: t,
                            args: {
                                sku_id: n,
                                pid: s
                            }
                        } = e;
                        (0, u.validateTransportType)(t.transport);
                        let i = t.application.id;
                        if (null == i) throw new l.default(c.RPCErrors.INVALID_COMMAND, "No application.");
                        let {
                            lock: r,
                            context: d
                        } = h(t.transport !== c.TransportTypes.POST_MESSAGE ? s : null), f = (0, o.default)();
                        if (null == f) throw new l.default(c.RPCErrors.INVALID_CHANNEL, "Invalid channel");
                        let I = {
                                page: E.AnalyticsPages.IN_APP
                            },
                            T = async () => {
                                try {
                                    let e = await (0, a.openIAPPurchaseModal)({
                                        applicationId: i,
                                        skuId: n,
                                        openPremiumPaymentModal: () => C(d, I),
                                        analyticsLocations: _,
                                        analyticsLocationObject: I,
                                        context: d
                                    });
                                    return r(), e
                                } catch (e) {
                                    if (r(), null != e) {
                                        let t = "";
                                        throw t = "object" == typeof e && "message" in e && "string" == typeof e.message ? e.message : "string" == typeof e ? e : JSON.stringify(e), new l.default(c.RPCErrors.PURCHASE_ERROR, t)
                                    }
                                    throw new l.default(c.RPCErrors.PURCHASE_CANCELED, "Purchase was canceled by the user.")
                                }
                            };
                        return T()
                    }
                },
                [E.RPCCommands.START_PREMIUM_PURCHASE]: {
                    [c.RPC_SCOPE_CONFIG.ANY]: [c.RPC_AUTHENTICATED_SCOPE, c.RPC_LOCAL_SCOPE],
                    validation: e => (0, r.default)(e).keys({
                        pid: e.number().min(0)
                    }),
                    handler(e) {
                        let {
                            socket: t,
                            args: {
                                pid: n
                            }
                        } = e;
                        (0, u.validateTransportType)(t.transport);
                        let a = t.application.id;
                        if (null == a) throw new l.default(c.RPCErrors.INVALID_COMMAND, "No application.");
                        let {
                            lock: s,
                            context: i
                        } = h(t.transport !== c.TransportTypes.POST_MESSAGE ? n : null), r = {
                            page: E.AnalyticsPages.IN_APP
                        };
                        return C(i, r).then(() => {
                            s()
                        }, e => {
                            if (s(), null != e) throw new l.default(c.RPCErrors.PURCHASE_ERROR, e);
                            throw new l.default(c.RPCErrors.PURCHASE_CANCELED, "Purchase was canceled by the user.")
                        })
                    }
                }
            }
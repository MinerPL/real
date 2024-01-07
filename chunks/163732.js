            "use strict";
            l.r(e), l.d(e, {
                default: function() {
                    return C
                }
            }), l("222007");
            var n = l("37983");
            l("884691");
            var a = l("77078"),
                s = l("404118"),
                i = l("850068"),
                o = l("775433"),
                r = l("521012"),
                u = l("599110"),
                c = l("719923"),
                d = l("49111"),
                f = l("782340");
            async function C(t) {
                let {
                    analyticsLocations: e,
                    analyticsLocation: C,
                    analyticsSourceLocation: h,
                    guildId: p,
                    closeLayer: M,
                    onCloseModal: L,
                    totalNumberOfSlotsToAssign: g = 1,
                    disablePremiumUpsell: m,
                    onSubscriptionConfirmation: S,
                    inPopout: _,
                    applicationId: A
                } = t, E = _ ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT, w = r.default.getPremiumTypeSubscription();
                if (null != w && w.isPurchasedExternally && null != w.paymentGateway) {
                    null != M && M(), s.default.show({
                        title: f.default.Messages.BILLING_MANAGED_BY_PAYMENT_GATEWAY.format({
                            paymentGatewayName: d.PaymentGatewayToFriendlyName[w.paymentGateway]
                        }),
                        body: f.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_UPGRADE_TO_PREMIUM_EXTERNAL_ERROR.format({
                            paymentGatewayName: d.PaymentGatewayToFriendlyName[w.paymentGateway],
                            subscriptionManagementLink: (0, c.getExternalSubscriptionMethodUrl)(w.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                        })
                    });
                    return
                }
                Promise.all([(0, i.fetchPaymentSources)(), (0, o.fetchPremiumSubscriptionPlans)()]);
                let y = await (0, a.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await l.el("860634").then(l.bind(l, "860634"));
                    return l => {
                        let {
                            transitionState: a,
                            onClose: s
                        } = l;
                        return (0, n.jsx)(t, {
                            transitionState: a,
                            onClose: t => {
                                s(), null == L || L(t)
                            },
                            analyticsLocations: e,
                            analyticsLocation: C,
                            analyticsSourceLocation: null != h ? h : C,
                            guildId: p,
                            totalNumberOfSlotsToAssign: g,
                            closeGuildPerksModal: M,
                            disablePremiumUpsell: m,
                            onSubscriptionConfirmation: S,
                            applicationId: A
                        })
                    }
                }, {
                    onCloseCallback: () => {
                        u.default.track(d.AnalyticEvents.MODAL_DISMISSED, {
                            type: d.AnalyticsSections.PREMIUM_GUILD_PURCHASE_MODAL,
                            location: C
                        })
                    },
                    onCloseRequest: () => {
                        null != y && (0, a.closeModal)(y), null == L || L(!1)
                    },
                    contextKey: E
                })
            }
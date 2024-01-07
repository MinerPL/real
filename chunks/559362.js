            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("446674"),
                s = n("834897"),
                a = n("90592"),
                u = n("333955"),
                o = n("547356"),
                c = n("305961"),
                d = n("642906"),
                f = n("85336"),
                I = n("159149"),
                _ = n("650484"),
                E = n("425480"),
                S = n("782340");

            function T(e) {
                let {
                    application: t,
                    listing: n,
                    handleStepChange: T,
                    handleClose: N
                } = e, {
                    subscriptionMetadataRequest: p
                } = (0, d.usePaymentContext)(), m = (0, s.default)(E.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY), C = (0, a.isApplicationUserSubscription)(n.sku_flags), h = (0, l.useStateFromStores)([c.default], () => c.default.getGuild(null == p ? void 0 : p.guild_id)), P = i.useCallback(() => T(f.Step.REVIEW), [T]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(_.PaymentPortalBody, {
                        children: m ? (0, r.jsx)(o.BenefitsConfirmationLite, {
                            confirmCta: S.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CONTINUE_BUTTON,
                            onConfirm: P,
                            onCancel: N,
                            title: S.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_TITLE_V2.format({
                                tier: n.name
                            }),
                            subtitle: C ? S.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE : S.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE.format({
                                guildName: null == h ? void 0 : h.name
                            }),
                            showOpenDiscord: !1
                        }) : (0, r.jsx)(u.BenefitsConfirmation, {
                            listing: n,
                            application: t,
                            title: S.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_TITLE_V2.format({
                                tier: n.name
                            }),
                            subtitle: C ? S.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER : S.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER,
                            description: C ? S.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
                                applicationName: t.name
                            }) : S.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS
                        })
                    }), !m && (0, r.jsx)(_.PaymentPortalFooter, {
                        children: (0, r.jsx)(I.default, {
                            onBack: N,
                            backText: S.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CANCEL_BUTTON,
                            onPrimary: P,
                            primaryCTA: I.CTAType.CONTINUE,
                            primaryText: S.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CONTINUE_BUTTON
                        })
                    })]
                })
            }
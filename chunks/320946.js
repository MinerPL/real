            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("627445"),
                i = n.n(s),
                r = n("866227"),
                u = n.n(r),
                o = n("446674"),
                d = n("913144"),
                c = n("775433"),
                f = n("834897"),
                h = n("685665"),
                p = n("233322"),
                m = n("567054"),
                E = n("982527"),
                C = n("157186"),
                S = n("267567"),
                g = n("666391"),
                _ = n("10514"),
                I = n("701909"),
                T = n("577357"),
                v = n("837008"),
                x = n("136185"),
                N = n("176687"),
                A = n("492548"),
                M = n("18544"),
                R = n("258501"),
                j = n("677795"),
                L = n("49111"),
                O = n("782340"),
                y = (e, t, n, s) => {
                    let r;
                    let y = (0, o.useStateFromStores)([S.default], () => S.default.isLurking(t)),
                        b = (0, C.useShowMemberVerificationGate)(t),
                        P = (0, o.useStateFromStores)([E.default], () => null != t ? E.default.getRequest(t) : null),
                        D = (null == P ? void 0 : P.applicationStatus) === m.GuildJoinRequestApplicationStatuses.SUBMITTED,
                        U = null == e ? void 0 : e.subscription_plans[0],
                        w = null == U ? void 0 : U.id,
                        F = (null == e ? void 0 : e.published) === !0,
                        k = null == U ? void 0 : U.sku_id,
                        V = (0, o.useStateFromStores)([_.default], () => null != w ? _.default.get(w) : null),
                        {
                            activeSubscription: B,
                            activeSubscriptionPlanFromStore: H
                        } = (0, N.default)(n),
                        G = null == B || null != H,
                        W = (0, v.useSubscriptionListingsForGroup)(n, {
                            includeSoftDeleted: !0
                        }),
                        Y = W.map(e => e.subscription_plans[0].id),
                        z = (0, x.getRoleSubscriptionMutationPlanId)(B),
                        K = null != z,
                        Z = (null == B ? void 0 : B.trialId) != null,
                        {
                            loading: X,
                            getTrialPurchaseEligibility: J
                        } = (0, A.useGetTrialPurchaseEligibility)(),
                        q = (0, v.useSubscriptionTrial)(null == e ? void 0 : e.id),
                        {
                            analyticsLocations: Q
                        } = (0, h.default)(),
                        $ = (null == B ? void 0 : B.paymentGateway) === L.PaymentGateways.APPLE_PARTNER;
                    D ? r = O.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_REQUIRE_APPROVED_MEMBER : y && !b ? r = O.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_REQUIRE_APPROVED_MEMBER : z === w ? r = O.default.Messages.GUILD_ROLE_SUBSCRIPTION_HAS_PENDING_MUTATION_TO_CURRENT_LISTING.format({
                        changeDate: null != B ? u(B.currentPeriodEnd).format("MMM DD, YYYY") : ""
                    }) : K ? r = O.default.Messages.GUILD_ROLE_SUBSCRIPTION_HAS_PENDING_MUTATION : Z ? r = O.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHANGE_TIER_DISABLED_IN_TRIAL : $ && (r = O.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHANGE_TIER_DISABLED_IF_IAP);
                    let ee = (0, f.default)(j.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY);
                    l.useEffect(() => {
                        F && null != k && d.default.wait(() => {
                            (0, c.fetchSubscriptionPlansForSKU)(k)
                        })
                    }, [F, k]);
                    let et = l.useCallback(async () => {
                            let n, l;
                            if (i(null != e, "No subscription listing"), i(null != U, "No subscription plan"), i(F, "Cannot purchase this unpublished plan"), (null == q ? void 0 : q.active_trial) != null) {
                                let a = await J(t, e.id, q.active_trial.id);
                                if ((null == a ? void 0 : a.is_eligible) === !0) {
                                    var r;
                                    n = null == q ? void 0 : null === (r = q.active_trial) || void 0 === r ? void 0 : r.id
                                } else l = O.default.Messages.GUILD_ROLE_SUBSCRIPTION_INELIGIBLE_TRIAL_DISCLAIMER
                            }(0, g.default)({
                                activeSubscription: B,
                                analyticsSubscriptionType: L.SubscriptionTypes.GUILD,
                                trialId: n,
                                trialFooterMessageOverride: (null == q ? void 0 : q.active_trial) != null ? O.default.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_RENEWAL_FOOTER_V2.format({
                                    buttonText: O.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SUBSCRIBE,
                                    interval: (0, T.formatPlanIntervalDuration)(U),
                                    days: 1,
                                    contactLink: L.MarketingURLs.CONTACT,
                                    cancelSubscriptionArticle: I.default.getArticleURL(L.HelpdeskArticles.ROLE_SUBSCRIPTION_CANCEL),
                                    helpdeskArticle: I.default.getArticleURL(L.HelpdeskArticles.ROLE_SUBSCRIPTION_TRIAL),
                                    paidServiceTermsArticle: I.default.getArticleURL(L.HelpdeskArticles.PAID_TERMS),
                                    tierName: U.name
                                }) : void 0,
                                analyticsLocations: Q,
                                analyticsLocation: s,
                                renderHeader: (n, l, s) => (0, a.jsx)(R.Header, {
                                    onClose: l,
                                    listing: e,
                                    step: s,
                                    guildId: t
                                }),
                                initialPlanId: U.id,
                                skuId: U.sku_id,
                                planGroup: Y,
                                renderPurchaseConfirmation: (n, l) => ee ? (0, a.jsx)(M.PurchaseConfirmationLite, {
                                    listing: e,
                                    onClose: l,
                                    guildId: t
                                }) : (0, a.jsx)(R.PurchaseConfirmation, {
                                    listing: e,
                                    onClose: l,
                                    guildId: t
                                }),
                                reviewWarningMessage: l
                            })
                        }, [F, e, U, B, Y, t, Q, s, J, q, ee]),
                        en = l.useCallback(() => {
                            (0, p.openMemberVerificationModal)(t)
                        }, [t]);
                    return {
                        openModal: b ? en : et,
                        canOpenModal: !y && null != V && G && !D && !K && !Z && !$,
                        cannotOpenReason: r,
                        isCheckingTrialEligibility: X
                    }
                }
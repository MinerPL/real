            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return H
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("446674"),
                o = s("77078"),
                d = s("913144"),
                u = s("850068"),
                c = s("583367"),
                S = s("316718"),
                E = s("775433"),
                f = s("79112"),
                m = s("642950"),
                T = s("736642"),
                _ = s("251334"),
                g = s("218989"),
                h = s("308592"),
                I = s("424876"),
                N = s("699260"),
                p = s("102985"),
                C = s("26092"),
                A = s("160299"),
                O = s("357957"),
                x = s("521012"),
                M = s("437712"),
                R = s("145131"),
                v = s("953109"),
                L = s("599110"),
                D = s("719923"),
                P = s("646105"),
                j = s("995362"),
                b = s("58820"),
                U = s("646718"),
                y = s("49111"),
                B = s("397336"),
                F = s("782340"),
                G = s("404234");

            function k() {
                return (0, a.jsx)(o.Card, {
                    className: G.noItemsCard,
                    type: o.Card.Types.CUSTOM,
                    children: (0, a.jsxs)(R.default, {
                        align: R.default.Align.CENTER,
                        children: [(0, a.jsx)(v.default, {
                            game: null,
                            size: v.default.Sizes.SMALL,
                            className: G.noItemsIcon
                        }), (0, a.jsx)("span", {
                            className: G.cardText,
                            children: F.default.Messages.USER_SETTINGS_NO_SUBSCRIPTION_CREDIT
                        })]
                    })
                })
            }

            function w() {
                let e = (0, r.useStateFromStores)([M.default], () => M.default.getForApplication(U.PREMIUM_SUBSCRIPTION_APPLICATION));
                return n.useEffect(() => {
                    (0, S.fetchUserEntitlementsForApplication)(U.PREMIUM_SUBSCRIPTION_APPLICATION)
                }, []), (0, a.jsxs)("section", {
                    className: G.sectionAccountCredit,
                    children: [(0, a.jsx)(o.FormTitle, {
                        className: G.accountCreditTitle,
                        tag: o.FormTitleTags.H1,
                        children: F.default.Messages.BILLING_SUBSCRIPTION_CREDIT
                    }), (0, a.jsx)("p", {
                        className: G.accountCreditDescription,
                        children: F.default.Messages.BILLING_ACCOUNT_CREDIT_DESCRIPTION
                    }), null != e && D.default.hasAccountCredit(e) ? (0, a.jsx)(P.default, {
                        className: G.accountCredit,
                        entitlements: e
                    }) : (0, a.jsx)(k, {})]
                })
            }
            var H = function() {
                let e = (0, r.useStateFromStores)([x.default], () => x.default.getPremiumTypeSubscription()),
                    t = (0, g.default)({
                        subscriptionFilter: e => b.ACTIVE_OR_PAST_DUE_STATUS.has(e.status)
                    }),
                    s = t.length > 1,
                    l = (0, r.useStateFromStores)([O.default], () => null != e && null != e.paymentSourceId ? O.default.getPaymentSource(e.paymentSourceId) : null, [e]),
                    S = (0, r.useStateFromStores)([x.default], () => x.default.hasFetchedSubscriptions()),
                    M = (0, r.useStateFromStores)([A.default], () => A.default.isBusy),
                    R = (0, h.useSubscriptionPlansLoaded)(),
                    v = (0, r.useStateFromStores)([C.default], () => C.default.getSubsection());
                return (n.useEffect(() => (d.default.wait(() => {
                    (0, E.fetchPremiumSubscriptionPlans)(), u.fetchSubscriptions(), (0, c.fetchGuildBoostSlots)(), u.fetchPaymentSources()
                }), function() {
                    f.default.clearSubsection()
                }), []), p.default.enabled) ? (0, a.jsx)(m.default, {}) : S && R ? v === B.ROLE_SUBSCRIPTION_SUBSECTION ? (0, a.jsx)(N.default, {
                    onGoBack: () => f.default.clearSubsection()
                }) : v === B.APPLICATION_SUBSCRIPTION_SUBSECTION ? (0, a.jsx)(_.default, {
                    onGoBack: () => f.default.clearSubsection()
                }) : (0, a.jsx)("div", {
                    className: G.container,
                    children: (0, a.jsxs)("div", {
                        className: G.content,
                        children: [s ? (0, a.jsx)(b.DuplicateSubscriptionsBanner, {}) : null, null != e ? (0, a.jsx)(b.default, {
                            className: G.subscriptionDetails,
                            subscription: e,
                            paymentSource: l,
                            busy: M,
                            subscriptions: t
                        }) : (0, a.jsx)(b.SubscriptionDetailsEmpty, {
                            className: G.subscriptionDetails
                        }), (0, a.jsx)(I.default, {
                            onClickManageSubscription: () => f.default.setSection(y.UserSettingsSections.SUBSCRIPTIONS, B.ROLE_SUBSCRIPTION_SUBSECTION)
                        }), (0, a.jsx)(T.default, {
                            onClickManageSubscription: () => {
                                f.default.setSection(y.UserSettingsSections.SUBSCRIPTIONS, B.APPLICATION_SUBSCRIPTION_SUBSECTION), L.default.track(y.AnalyticEvents.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED)
                            }
                        }), (0, a.jsx)(w, {}), null != e ? (0, a.jsx)(j.default, {
                            subscription: e,
                            withOverheadSeparator: !1
                        }) : null]
                    })
                }) : (0, a.jsx)("div", {
                    className: i(G.container, G.loading),
                    children: (0, a.jsx)(o.Spinner, {})
                })
            }
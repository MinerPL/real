            "use strict";
            s.r(t), s.d(t, {
                SubscriptionDetailsEmpty: function() {
                    return Y
                },
                ACTIVE_OR_PAST_DUE_STATUS: function() {
                    return V
                },
                DuplicateSubscriptionsBanner: function() {
                    return K
                },
                default: function() {
                    return W
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                i = s("414456"),
                r = s.n(i),
                l = s("627445"),
                u = s.n(l),
                o = s("866227"),
                d = s.n(o),
                c = s("446674"),
                f = s("669491"),
                E = s("77078"),
                p = s("79112"),
                I = s("812204"),
                m = s("685665"),
                _ = s("724038"),
                N = s("649844"),
                S = s("797647"),
                P = s("697218"),
                R = s("145131"),
                T = s("953109"),
                C = s("423487"),
                A = s("599110"),
                h = s("701909"),
                L = s("719923"),
                M = s("713518"),
                g = s("809071"),
                y = s("921149"),
                x = s("892843"),
                D = s("541554"),
                U = s("690679"),
                v = s("95637"),
                O = s("49111"),
                b = s("782340"),
                B = s("376121");

            function j(e) {
                let t, {
                        subscription: s,
                        renewalInvoicePreview: n,
                        fromStandaloneBillingPage: i = !0,
                        className: l
                    } = e,
                    o = (0, c.useStateFromStores)([P.default], () => {
                        let e = P.default.getCurrentUser();
                        return u(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e
                    });
                if (0 === (0, L.getNumPremiumGuildSubscriptions)(s.additionalPlans)) return null;
                let {
                    status: d
                } = s, f = (0, L.isPremiumGuildSubscriptionCanceled)(s);
                return t = f ? B.guildBoostingSubscriptionRowCanceled : (0, L.isSubscriptionStatusFailedPayment)(d) ? B.guildBoostingSubscriptionRowFailedPayment : B.guildBoostingSubscriptionRowActive, (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: r(t, l),
                        children: [(0, a.jsx)("div", {
                            className: B.guildBoostingSubscriptionRowBackground
                        }), (0, a.jsx)("div", {
                            className: B.guildBoostingImage
                        }), (0, a.jsxs)("div", {
                            className: B.guildBoostingSubscriptionRowBody,
                            children: [(0, a.jsx)("div", {
                                className: r(B.guildBoostingWordmark, {
                                    [B.canceled]: f
                                })
                            }), (0, a.jsx)("div", {
                                children: (0, L.getPremiumGuildHeaderDescription)({
                                    subscription: s,
                                    renewalInvoicePreview: n,
                                    user: o
                                })
                            })]
                        }), i && (0, a.jsx)(x.default, {
                            color: E.Button.Colors.BRAND,
                            onClick: () => p.default.open(O.UserSettingsSections.GUILD_BOOSTING),
                            children: b.default.Messages.PREMIUM_GUILD_PERKS_MODAL_MANAGE_YOUR_SUBSCRIPTIONS
                        })]
                    }), !i && (0, a.jsx)(E.Text, {
                        className: B.boostingDesktopAppBlurb,
                        variant: "text-sm/normal",
                        children: b.default.Messages.GUILD_BOOSTING_MANAGEMENT_OPEN_DESKTOP_APP.format({
                            openAppHook: () => (0, _.default)("app")
                        })
                    })]
                })
            }

            function G() {
                return n.useEffect(() => {
                    A.default.track(O.AnalyticEvents.TOOLTIP_VIEWED, {
                        type: "subscription_settings_missing_payment_method"
                    })
                }, []), (0, a.jsxs)("div", {
                    className: B.paymentBanner,
                    children: [(0, a.jsx)(C.default, {
                        className: B.paymentBannerIcon,
                        color: f.default.unsafe_rawColors.YELLOW_260.css
                    }), (0, a.jsx)(E.Text, {
                        className: B.paymentBannerText,
                        variant: "text-sm/normal",
                        children: b.default.Messages.MISSING_PAYMENT_METHOD_BANNER
                    })]
                })
            }

            function F() {
                return n.useEffect(() => {
                    A.default.track(O.AnalyticEvents.TOOLTIP_VIEWED, {
                        type: "subscription_settings_invalid_payment_method"
                    })
                }, []), (0, a.jsxs)("div", {
                    className: B.paymentBanner,
                    children: [(0, a.jsx)(C.default, {
                        className: B.paymentBannerIcon,
                        color: f.default.unsafe_rawColors.RED_360.css
                    }), (0, a.jsx)(E.Text, {
                        className: B.paymentBannerText,
                        variant: "text-sm/normal",
                        children: b.default.Messages.INVALID_PAYMENT_METHOD_BANNER
                    })]
                })
            }

            function w(e) {
                let {
                    daysPastDue: t,
                    subscription: s,
                    openInvoiceId: i
                } = e, {
                    analyticsLocations: r
                } = (0, m.default)(I.default.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
                return n.useEffect(() => {
                    A.default.track(O.AnalyticEvents.TOOLTIP_VIEWED, {
                        type: "subscription_settings_invalid_payment_method"
                    })
                }, []), (0, a.jsxs)("div", {
                    className: B.paymentBanner,
                    children: [(0, a.jsx)(C.default, {
                        className: B.paymentBannerIcon,
                        color: f.default.unsafe_rawColors.YELLOW_260.css
                    }), (0, a.jsx)(E.Text, {
                        className: B.paymentBannerText,
                        variant: "text-sm/normal",
                        children: b.default.Messages.PREMIUM_SUBSCRIPTION_ONE_TIME_PAYMENT_PAST_DUE_SUBSCRIPTION_TEXT.format({
                            daysPastDue: t,
                            paymentModalRedirect: () => {
                                (0, N.default)({
                                    initialPlanId: s.planIdFromItems,
                                    openInvoiceId: i,
                                    analyticsLocations: r
                                })
                            }
                        })
                    })]
                })
            }

            function k(e) {
                let {
                    subscription: t,
                    renewalInvoicePreview: s,
                    className: n
                } = e;
                return (0, a.jsxs)("div", {
                    className: r(B.billingInformation, n),
                    children: [(0, a.jsx)(E.FormTitle, {
                        tag: "h3",
                        className: B.detailBlockHeader,
                        children: b.default.Messages.PREMIUM_SETTINGS_BILLING_INFO
                    }), (0, a.jsx)("div", {
                        children: L.default.getBillingInformationString(t, s)
                    })]
                })
            }

            function Y(e) {
                let {
                    className: t
                } = e;
                return (0, a.jsxs)("div", {
                    className: t,
                    children: [(0, a.jsx)(E.FormTitle, {
                        className: B.sectionTitle,
                        tag: "h1",
                        children: b.default.Messages.USER_SETTINGS_SUBSCRIPTIONS_HEADER
                    }), (0, a.jsx)("p", {
                        className: B.sectionDescription,
                        children: b.default.Messages.BILLING_PAYMENT_PREMIUM_DESCRIPTION
                    }), (0, a.jsx)(E.Card, {
                        className: B.noItemsCard,
                        type: E.Card.Types.CUSTOM,
                        children: (0, a.jsxs)(R.default, {
                            align: R.default.Align.CENTER,
                            children: [(0, a.jsx)(T.default, {
                                game: null,
                                size: T.default.Sizes.SMALL,
                                className: B.noItemsIcon
                            }), (0, a.jsx)("span", {
                                className: B.cardText,
                                children: b.default.Messages.USER_SETTINGS_NO_SUBSCRIPTIONS
                            })]
                        })
                    })]
                })
            }

            function H(e) {
                let {
                    subscription: t,
                    analyticsLocation: s,
                    paymentSource: n,
                    busy: i,
                    fromStandaloneBillingPage: l,
                    showInvalidPaymentMethod: u,
                    showNoPaymentMethod: o,
                    fetchedCurrentInvoicePreview: d,
                    fetchedRenewalInvoicePreview: c
                } = e, {
                    analyticsLocations: f
                } = (0, m.default)(I.default.SUBSCRIPTION_DETAILS), p = null != d ? {} : {
                    subscriptionId: t.id,
                    renewal: !0,
                    analyticsLocations: f,
                    analyticsLocation: s
                }, [_] = (0, g.useSubscriptionInvoicePreview)(p);
                _ = null != d ? d : _;
                let N = null != c ? {} : {
                        subscriptionId: t.id,
                        renewal: !0,
                        applyEntitlements: !0,
                        analyticsLocations: f,
                        analyticsLocation: s
                    },
                    [S] = (0, g.useSubscriptionInvoicePreview)(N);
                return (S = null != c ? c : S, null == _ || null == S) ? (0, a.jsx)(E.Spinner, {}) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: B.subscriptionRows,
                        children: [(0, a.jsx)(D.default, {
                            subscription: t,
                            renewalInvoicePreview: _,
                            paymentSource: n,
                            busy: i,
                            analyticsLocation: s
                        }), (0, a.jsx)(j, {
                            subscription: t,
                            renewalInvoicePreview: _,
                            fromStandaloneBillingPage: l,
                            className: B.guildSubscriptionRow
                        })]
                    }), (0, a.jsx)("div", {
                        children: (0, a.jsx)(E.HeadingLevel, {
                            component: (0, a.jsx)(E.FormTitle, {
                                tag: "h5",
                                children: b.default.Messages.BILLING_STEP_PAYMENT
                            }),
                            children: (0, a.jsxs)("div", {
                                className: B.details,
                                children: [(0, a.jsx)(k, {
                                    subscription: t,
                                    renewalInvoicePreview: S,
                                    className: B.detailsBlock
                                }), t.isPurchasedExternally || (null == n ? void 0 : n.id) === t.paymentSourceId ? (0, a.jsxs)("div", {
                                    className: r(B.detailsBlock, {
                                        [B.redBorder]: u
                                    }),
                                    children: [(0, a.jsx)(E.FormTitle, {
                                        tag: "h3",
                                        className: B.detailBlockHeader,
                                        children: t.isPurchasedExternally && null != t.paymentGateway ? b.default.Messages.BILLING_MANAGED_BY_PAYMENT_GATEWAY.format({
                                            paymentGatewayName: O.PaymentGatewayToFriendlyName[t.paymentGateway]
                                        }) : b.default.Messages.BILLING_PAY_FOR_IT_WITH
                                    }), (0, a.jsx)(U.default, {
                                        subscription: t,
                                        onPaymentSourceAdded: M.fetchSubscriptionPlansOnNewPaymentSource,
                                        highlightAddPaymentMethodButton: o || u,
                                        analyticsLocation: s,
                                        currentInvoicePreview: _,
                                        dropdownClassName: B.paymentDropdown
                                    })]
                                }) : null]
                            })
                        })
                    })]
                })
            }
            let V = new Set([O.SubscriptionStatusTypes.ACTIVE, O.SubscriptionStatusTypes.PAST_DUE, O.SubscriptionStatusTypes.CANCELED]);

            function K() {
                return n.useEffect(() => {
                    A.default.track(O.AnalyticEvents.TOOLTIP_VIEWED, {
                        type: "subscription_settings_duplicate_subscriptions"
                    })
                }, []), (0, a.jsxs)("div", {
                    className: B.duplicateSubscriptionsBanner,
                    children: [(0, a.jsx)(C.default, {
                        color: f.default.unsafe_rawColors.RED_360.css
                    }), (0, a.jsx)(E.Text, {
                        className: B.duplicateSubscriptionsBannerText,
                        variant: "text-sm/normal",
                        children: b.default.Messages.DUPLICATE_SUBSCRIPTIONS_BANNER.format({
                            helpCenterLink: h.default.getArticleURL(O.HelpdeskArticles.NITRO)
                        })
                    })]
                })
            }

            function W(e) {
                var t;
                let s, {
                    subscription: n,
                    subscriptions: i,
                    paymentSource: r,
                    busy: l,
                    className: u,
                    fromStandaloneBillingPage: o = !0,
                    analyticsLocation: f
                } = e;
                null != i && (n = i[0]);
                let {
                    analyticsLocations: p
                } = (0, m.default)(I.default.SUBSCRIPTION_DETAILS), _ = null != i ? i.slice(1) : [], [N] = (0, g.useSubscriptionInvoicePreview)({
                    subscriptionId: n.id,
                    renewal: !0,
                    analyticsLocations: p,
                    analyticsLocation: f
                }), [R] = (0, g.useSubscriptionInvoicePreview)({
                    subscriptionId: n.id,
                    renewal: !0,
                    applyEntitlements: !0,
                    analyticsLocations: p,
                    analyticsLocation: f
                }), T = (0, c.useStateFromStores)([P.default], () => {
                    var e;
                    return null === (e = P.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasFreePremium()
                }), C = d(n.currentPeriodEnd), A = null != n.paymentSourceId, h = null !== (t = null == R ? void 0 : R.total) && void 0 !== t ? t : 0, L = null == r ? void 0 : r.invalid, M = !A && h > 0 && (7 >= C.diff(d(), "days") || n.status === O.SubscriptionStatusTypes.PAST_DUE) && !T && !n.isPurchasedExternally, x = L && n.status === O.SubscriptionStatusTypes.PAST_DUE && !T && !n.isPurchasedExternally, D = (0, y.useIsPrepaidPaymentPastDue)(), U = !T && D, j = (null == n ? void 0 : n.status) === O.SubscriptionStatusTypes.PAST_DUE ? d().diff(d(n.currentPeriodStart), "days") : 0, [k] = (0, g.useGetSubscriptionInvoice)({
                    subscriptionId: n.id,
                    preventFetch: !U
                });
                return null == N || null == R ? (0, a.jsx)(E.Spinner, {}) : (null != n.renewalMutations && (n.renewalMutations.planId !== n.planId && !(0, S.isNoneSubscription)(n.renewalMutations.planId) || n.hasExternalPlanChange) && (s = (0, a.jsx)(v.default, {
                    subscription: n,
                    renewalMutations: n.renewalMutations,
                    className: B.renewalMutationNotice,
                    analyticsLocation: f
                })), (0, a.jsx)("div", {
                    className: u,
                    children: (0, a.jsxs)(E.HeadingLevel, {
                        component: (0, a.jsx)(E.FormTitle, {
                            className: B.sectionTitle,
                            tag: "h1",
                            children: b.default.Messages.USER_SETTINGS_SUBSCRIPTIONS_HEADER
                        }),
                        children: [M ? (0, a.jsx)(G, {}) : null, x ? (0, a.jsx)(F, {}) : null, U && null != k ? (0, a.jsx)(w, {
                            daysPastDue: j,
                            subscription: n,
                            openInvoiceId: k.id
                        }) : null, s, (0, a.jsx)("div", {
                            children: (0, a.jsx)("p", {
                                className: B.sectionDescription,
                                children: b.default.Messages.BILLING_PAYMENT_PREMIUM_DESCRIPTION
                            })
                        }), (0, a.jsxs)("div", {
                            children: [(0, a.jsx)("div", {
                                className: _.length > 0 ? B.dupSubscriptionRow : B.singleSubscription,
                                children: (0, a.jsx)(H, {
                                    subscription: n,
                                    analyticsLocation: f,
                                    paymentSource: r,
                                    busy: l,
                                    fromStandaloneBillingPage: o,
                                    showNoPaymentMethod: M,
                                    showInvalidPaymentMethod: x,
                                    fetchedCurrentInvoicePreview: N,
                                    fetchedRenewalInvoicePreview: R
                                })
                            }), _.map((e, t) => (0, a.jsxs)("div", {
                                className: B.dupSubscriptionRow,
                                children: [(0, a.jsx)(E.FormTitle, {
                                    tag: "h2",
                                    className: B.duplicateHeader,
                                    children: "Duplicate Subscriptions"
                                }), (0, a.jsx)(H, {
                                    subscription: e,
                                    analyticsLocation: f,
                                    paymentSource: r,
                                    busy: l,
                                    fromStandaloneBillingPage: o,
                                    showNoPaymentMethod: M,
                                    showInvalidPaymentMethod: x,
                                    fetchedCurrentInvoicePreview: null,
                                    fetchedRenewalInvoicePreview: null
                                })]
                            }, t))]
                        })]
                    })
                }))
            }
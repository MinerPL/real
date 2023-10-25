(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["91355"], {
        108043: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return l
                }
            });
            var i = t("862205");
            let a = (0, i.createExperiment)({
                kind: "user",
                id: "2023-06_guild_boosting_legacy_pricing_fix_experiment",
                label: "Guild Boosting Legacy Pricing Fix Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use Invoice Preview for Boost Pricing",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var l = a
        },
        658206: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                GuildBoostingPlanSelect: function() {
                    return z
                },
                GuildBoostingReview: function() {
                    return ee
                },
                GuildBoostingConfirmation: function() {
                    return en
                }
            });
            var i = t("920040"),
                a = t("773670"),
                l = t("575482"),
                s = t.n(l),
                r = t("161179"),
                u = t.n(r),
                o = t("148606"),
                c = t("498225"),
                d = t("912557"),
                I = t("77078"),
                m = t("703332"),
                S = t("405932"),
                _ = t("740055"),
                P = t("545876"),
                p = t("812204"),
                f = t("685665"),
                T = t("809071"),
                E = t("643619"),
                N = t("15733"),
                C = t("917247"),
                U = t("296253"),
                R = t("883662"),
                L = t("824734"),
                v = t("977934"),
                O = t("623003"),
                A = t("146163"),
                M = t("962113"),
                g = t("915639"),
                y = t("305961"),
                x = t("102985"),
                D = t("697218"),
                b = t("160299"),
                G = t("357957"),
                h = t("10514"),
                j = t("791106"),
                B = t("751433"),
                H = t("467831"),
                w = t("118503"),
                F = t("423487"),
                W = t("427459"),
                k = t("701909"),
                Y = t("719923"),
                V = t("153160"),
                K = t("108043"),
                q = t("49111"),
                J = t("646718"),
                Q = t("809924"),
                X = t("782340"),
                Z = t("657195");

            function z(e) {
                var n, t;
                let {
                    guildId: a,
                    premiumSubscriptionPlan: l,
                    numGuildBoosts: r,
                    setNumGuildBoosts: o,
                    setForceDisableSubmitButton: m,
                    premiumSubscription: _,
                    onClickPremiumSubscriptionLink: P,
                    existingAvailableSlots: E = [],
                    priceOptions: R
                } = e, v = (0, U.default)(), O = l.interval, A = l.intervalCount, x = (0, c.useStateFromStores)([h.default], () => h.default.getForSkuAndInterval(J.PremiumSubscriptionSKUs.GUILD, O, A)), b = (0, c.useStateFromStores)([D.default], () => D.default.getCurrentUser()), G = (0, c.useStateFromStores)([y.default], () => y.default.getGuild(a), [a]);
                u(null != x, "Missing guildBoostingSubscriptionPlan"), u(null != G, "Unknown guild: ".concat(a));
                let H = [{
                        planId: x.id,
                        quantity: 1
                    }],
                    z = null == _ ? void 0 : _.items.find(e => e.planId === J.SubscriptionPlans.PREMIUM_MONTH_TIER_2 || e.planId === J.SubscriptionPlans.PREMIUM_YEAR_TIER_2);
                null != z && H.push(z);
                let $ = null == _ ? void 0 : _.items.find(e => e.planId === J.SubscriptionPlans.PREMIUM_MONTH_GUILD || e.planId === J.SubscriptionPlans.PREMIUM_YEAR_GUILD),
                    {
                        enabled: ee
                    } = K.default.useExperiment({
                        location: "32b64a_1"
                    }),
                    en = !ee || null == v || !J.LegacyPricingCountries.has(v) || null == $,
                    {
                        analyticsLocations: et
                    } = (0, f.default)(),
                    [ei, ea] = (0, T.useSubscriptionInvoicePreview)({
                        subscriptionId: null == _ ? void 0 : _.id,
                        items: H,
                        renewal: !0,
                        paymentSourceId: null == _ ? void 0 : _.paymentSourceId,
                        currency: R.currency,
                        preventFetch: en,
                        analyticsLocations: et,
                        analyticsLocation: p.default.GUILD_BOOSTING_PLAN_SELECT
                    }),
                    el = !en && null == ei && null == ea,
                    es = (null === (t = (0, C.usePremiumTrialOffer)()) || void 0 === t ? void 0 : null === (n = t.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === J.PremiumSubscriptionSKUs.TIER_2,
                    er = Y.default.hasBoostDiscount(b) && null != x.premiumUserPrice,
                    eu = null == ei ? void 0 : ei.invoiceItems.find(e => e.subscriptionPlanId === x.id),
                    eo = null != eu ? {
                        amount: eu.amount,
                        tax: 0,
                        taxInclusive: !0,
                        currency: R.currency
                    } : Y.default.getPrice(x.id, er, !1, R),
                    ec = r * eo.amount,
                    ed = Y.default.hasBoostDiscount(b) && null != _ ? X.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_FOOTER_DISCOUNT.format({
                        planName: Y.default.getDisplayPremiumType(_.planId)
                    }) : (es ? X.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_FOOTER_UPSELL_TRIAL_VARIANT : X.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_FOOTER_UPSELL).format({
                        onPremiumSubscriptionClick: P,
                        discountPercentage: (0, V.formatPercent)(g.default.locale, J.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100),
                        freeSubscriptionCount: J.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
                    }),
                    eI = E.filter(e => (0, W.isGuildBoostSlotCanceled)(e)).length,
                    em = (0, Y.isPrepaidPaymentSource)(R.paymentSourceId),
                    {
                        ipCountryCode: eS
                    } = (0, N.default)(),
                    e_ = "HR" === eS && eo.currency === Q.CurrencyCodes.EUR;
                return m(el), (0, i.jsxs)("div", {
                    className: Z.planSelectStep,
                    children: [(0, i.jsx)("div", {
                        className: s(Z.planSelectText, Z.bodyText),
                        children: X.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_STEP_SELECT_DESCRIPTION
                    }), E.length > 0 ? (0, i.jsxs)("div", {
                        className: Z.existingSlotNotice,
                        children: [(0, i.jsx)(w.default, {
                            className: Z.existingSlotIcon,
                            color: d.default.unsafe_rawColors.GUILD_BOOSTING_PINK.css
                        }), (0, i.jsxs)("div", {
                            children: [X.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_UNUSED_SLOT_NOTICE.format({
                                slotCount: E.length
                            }), eI > 0 && null != _ ? (0, i.jsx)(I.Tooltip, {
                                text: X.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CANCEL_WARNING.format({
                                    canceledCount: eI,
                                    date: _.currentPeriodEnd
                                }),
                                children: e => (0, i.jsx)(F.default, {
                                    ...e,
                                    className: Z.existingSlotTooltipWarningIcon,
                                    color: d.default.unsafe_rawColors.YELLOW_300.css
                                })
                            }) : null]
                        })]
                    }) : null, (0, i.jsxs)("div", {
                        className: Z.planSelectRow,
                        children: [(0, i.jsxs)("div", {
                            className: Z.planSelectorWrapper,
                            children: [(0, i.jsx)(B.default, {
                                value: r,
                                onChange: e => o(e),
                                className: Z.planSelector,
                                minValue: 1,
                                maxValue: 30
                            }), (0, i.jsx)("div", {
                                className: Z.planSelectorLabel,
                                children: em ? function(e) {
                                    let {
                                        intervalType: n,
                                        intervalCount: t = 1
                                    } = e;
                                    return n === J.SubscriptionIntervalTypes.YEAR ? X.default.Messages.PREMIUM_GUILD_PLAN_SINGLE_YEAR : n === J.SubscriptionIntervalTypes.MONTH && 1 === t ? X.default.Messages.PREMIUM_GUILD_PLAN_SINGLE_MONTH : null
                                }({
                                    intervalType: O,
                                    intervalCount: A
                                }) : X.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_COUNTER
                            })]
                        }), (0, i.jsx)("div", {
                            className: s(Z.planSelectorPreviewPrice, {
                                [Z.loadingSpinner]: el
                            }),
                            children: el ? (0, i.jsx)(I.Spinner, {}) : em ? (0, V.formatPrice)(eo.amount, eo.currency) : function(e) {
                                let {
                                    amount: n,
                                    currency: t,
                                    intervalType: i,
                                    intervalCount: a = 1
                                } = e, l = (0, V.formatPrice)(n, t);
                                if (i === J.SubscriptionIntervalTypes.YEAR) return X.default.Messages.BILLING_PRICE_PER_YEAR_EACH.format({
                                    price: l
                                });
                                if (i === J.SubscriptionIntervalTypes.MONTH && 1 === a) return X.default.Messages.BILLING_PRICE_PER_MONTH_EACH.format({
                                    price: l
                                });
                                if (i === J.SubscriptionIntervalTypes.MONTH && a > 1) return X.default.Messages.BILLING_PRICE_PER_MULTI_MONTH_EACH.format({
                                    price: l
                                });
                                return null
                            }({
                                intervalType: O,
                                intervalCount: A,
                                amount: eo.amount,
                                currency: eo.currency
                            })
                        })]
                    }), (0, i.jsx)("div", {
                        className: Z.planSelectDivider
                    }), (0, i.jsxs)("div", {
                        className: Z.planSelectRow,
                        children: [(0, i.jsx)("div", {
                            className: Z.planSelectorSubtotal,
                            children: X.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBTOTAL
                        }), (0, i.jsx)("div", {
                            className: s(Z.planSelectorSubtotalPrice, {
                                [Z.loadingSpinner]: el
                            }),
                            children: el ? (0, i.jsx)(I.Spinner, {}) : (0, i.jsx)(L.default, {
                                price: ec,
                                currency: eo.currency,
                                intervalType: O,
                                intervalCount: A,
                                isPrepaidPaymentSource: em
                            })
                        })]
                    }), e_ && (0, i.jsx)(S.default, {
                        message: X.default.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
                            kunaPriceWithCurrency: (0, V.formatPrice)(7.5345 * ec, Q.CurrencyCodes.HRK)
                        })
                    }), (0, i.jsx)(S.default, {
                        message: X.default.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
                            documentationLink: k.default.getArticleURL(q.HelpdeskArticles.LOCALIZED_PRICING)
                        })
                    }), (0, i.jsx)(M.default, {
                        text: ed,
                        color: j.GradientCssUrls.PREMIUM_TIER_2
                    })]
                })
            }

            function $(e) {
                let {
                    premiumSubscription: n,
                    premiumSubscriptionPlan: t,
                    proratedInvoicePreview: a,
                    renewalInvoicePreview: l,
                    priceOptions: s
                } = e, r = t.interval, o = t.intervalCount, d = (0, c.useStateFromStores)([h.default], () => h.default.getForSkuAndInterval(J.PremiumSubscriptionSKUs.GUILD, r, o));
                u(null != d, "Missing guildBoostingSubscriptionPlan");
                let I = e => (0, E.coalesceInvoiceItems)(a.invoiceItems).find(n => J.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(n.subscriptionPlanId) && e(n)),
                    m = I(e => e.amount >= 0);
                u(null != m, "Missing guild boosting invoice item");
                let S = I(e => e.amount < 0),
                    _ = null != S ? m.quantity - S.quantity : m.quantity,
                    P = a.invoiceItems.filter(e => (0, Y.isPremiumBaseSubscriptionPlan)(e.subscriptionPlanId)),
                    p = P.reduce((e, n) => e + n.amount, 0),
                    f = (0, T.getItemUnitPriceWithDiscount)(m) * _,
                    N = (0, V.formatPrice)(f, a.currency),
                    C = (0, V.formatRate)(N, r, o),
                    U = (0, V.formatPrice)(a.total, a.currency) + (a.currency !== Q.CurrencyCodes.USD ? "*" : ""),
                    L = a.total - f - p,
                    v = m.discounts.map(e => {
                        let n = e.amount / m.quantity;
                        return {
                            ...e,
                            amount: n * _
                        }
                    }),
                    O = (0, Y.isPrepaidPaymentSource)(s.paymentSourceId);
                return (0, i.jsxs)(i.Fragment, {
                    children: [O ? null : (0, i.jsx)(A.SubscriptionPeriodResetNotice, {
                        proratedInvoice: a,
                        renewalInvoice: l
                    }), (0, i.jsxs)(R.PremiumInvoiceTable, {
                        children: [(0, i.jsx)(R.PremiumInvoiceTableHeader, {
                            children: X.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_PURCHASE_DETAILS_HEADER
                        }), (0, i.jsx)(R.PremiumInvoiceDiscountedTableRow, {
                            label: X.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_INVOICE_ROW_CONTENT.format({
                                numGuildSubscriptions: _,
                                planName: (0, Y.getDisplayName)(d.id, !1, O)
                            }),
                            value: O ? N : C,
                            discounts: v,
                            originalAmount: m.subscriptionPlanPrice * _,
                            currency: a.currency,
                            interval: d.interval,
                            intervalCount: d.intervalCount
                        }), 0 !== p ? (0, i.jsx)(R.PremiumInvoiceTableRow, {
                            label: (0, i.jsx)(A.PremiumInvoiceLabelWithAdjustment, {
                                label: X.default.Messages.PREMIUM_SUBSCRIPTION_PLAN_ADJUSTMENT.format({
                                    planName: (0, Y.getTierDisplayName)(P[0].subscriptionPlanId)
                                }),
                                tooltipText: X.default.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP
                            }),
                            value: (0, V.formatPrice)(p, a.currency)
                        }) : null, 0 !== L ? (0, i.jsx)(R.PremiumInvoiceTableRow, {
                            label: (0, i.jsx)(A.PremiumInvoiceLabelWithAdjustment, {
                                label: X.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT,
                                tooltipText: X.default.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP
                            }),
                            value: (0, V.formatPrice)(L, a.currency)
                        }) : null, (0, i.jsx)(R.PremiumInvoiceTableDivider, {}), (0, i.jsx)(R.PremiumInvoiceTableTotalRow, {
                            label: (a.taxInclusive ? O ? X.default.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : X.default.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : X.default.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
                            value: U
                        }), null != n ? (0, i.jsx)(A.SubscriptionInvoiceFooter, {
                            premiumSubscription: n,
                            proratedInvoice: a,
                            renewalInvoice: l,
                            isUpdate: !0,
                            isPrepaidPaymentSource: O
                        }) : (0, i.jsx)(A.SubscriptionInvoiceFooter, {
                            renewalInvoice: l,
                            priceOptions: s,
                            isPrepaidPaymentSource: O
                        })]
                    })]
                })
            }

            function ee(e) {
                var n, t;
                let a, l, {
                        paymentSources: s,
                        priceOptions: r,
                        currentPremiumSubscription: u,
                        premiumSubscriptionPaymentSourceId: d,
                        premiumSubscriptionPlan: S,
                        newAdditionalPlans: E,
                        onPaymentSourceChange: N,
                        onPaymentSourceAdd: C,
                        onPurchaseTermsChange: U,
                        legalTermsNodeRef: R,
                        hasLegalTermsFlash: L
                    } = e,
                    v = r.paymentSourceId,
                    A = (0, c.useStateFromStores)([G.default], () => null != d ? G.default.getPaymentSource(d) : null),
                    M = (0, c.useStateFromStores)([x.default], () => x.default.hidePersonalInformation);
                a = null != u ? (0, Y.getItemsWithUpsertedPremiumGuildPlan)(u, E[0].quantity, E[0].planId) : E;
                let {
                    analyticsLocations: g
                } = (0, f.default)(), [y] = (0, T.useSubscriptionInvoicePreview)({
                    subscriptionId: null == u ? void 0 : u.id,
                    items: a,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: v,
                    currency: r.currency,
                    analyticsLocations: g,
                    analyticsLocation: p.default.GUILD_BOOSTING_REVIEW_PRORATED
                }), [D] = (0, T.useSubscriptionInvoicePreview)({
                    subscriptionId: null == u ? void 0 : u.id,
                    items: a,
                    renewal: !0,
                    paymentSourceId: v,
                    currency: r.currency,
                    analyticsLocations: g,
                    analyticsLocation: p.default.GUILD_BOOSTING_REVIEW_RENEWAL
                });
                null != D && (l = {
                    amount: D.total,
                    currency: D.currency,
                    tax: D.tax,
                    taxInclusive: D.taxInclusive
                });
                let h = o.CountryCodesSets.EEA_COUNTRIES.has(b.default.ipCountryCodeWithFallback);
                return (0, i.jsxs)("div", {
                    className: Z.reviewStep,
                    children: [null != y && null != D ? (0, i.jsx)($, {
                        premiumSubscription: u,
                        premiumSubscriptionPlan: S,
                        proratedInvoicePreview: y,
                        renewalInvoicePreview: D,
                        priceOptions: r
                    }) : null, (0, i.jsxs)("div", {
                        className: Z.paymentSourceWrapper,
                        children: [(0, i.jsx)(I.FormTitle, {
                            tag: I.FormTitleTags.H5,
                            children: X.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), null != d ? null != A ? (0, i.jsx)(I.TooltipContainer, {
                            text: X.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_PAYMENT_SOURCE_TOOLTIP,
                            children: (0, i.jsx)(_.default, {
                                paymentSources: [A],
                                selectedPaymentSourceId: A.id,
                                hidePersonalInformation: M,
                                disabled: !0
                            })
                        }) : (0, i.jsx)("div", {
                            children: (0, i.jsx)(I.Spinner, {})
                        }) : (0, i.jsx)(_.default, {
                            paymentSources: Object.values(s),
                            selectedPaymentSourceId: v,
                            onChange: N,
                            onPaymentSourceAdd: C,
                            hidePersonalInformation: M
                        })]
                    }), (0, i.jsx)(O.default, {
                        isActive: L,
                        ref: R,
                        children: null != l && (0, i.jsx)(P.default, {
                            onChange: U,
                            forceShow: !0,
                            finePrint: (0, i.jsx)(m.default, {
                                subscriptionPlan: S,
                                paymentSourceType: null === (n = s[null != v ? v : ""]) || void 0 === n ? void 0 : n.type,
                                basePrice: l
                            }),
                            showPricingLink: (null !== (t = null == y ? void 0 : y.currency) && void 0 !== t ? t : Q.CurrencyCodes.USD) !== Q.CurrencyCodes.USD,
                            showWithdrawalWaiver: h,
                            subscriptionPlan: S
                        })
                    })]
                })
            }

            function en(e) {
                let n, {
                        onClose: t,
                        guild: l,
                        guildBoostQuantity: s,
                        isTransfer: r = !1,
                        withAnimation: u = !0,
                        paymentSourceType: o
                    } = e,
                    {
                        theme: c
                    } = (0, I.useThemeContext)(),
                    [d, m] = a.useState(H.PremiumPaymentGuildAnimation.Scenes.ENTRY),
                    [S, _] = a.useState(!1);
                return n = r ? null == l ? X.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_TRANSFERRED_DESCRIPTION_GENERIC_GUILD.format() : X.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_TRANSFERRED_DESCRIPTION.format({
                    guildName: l.name
                }) : null == l ? X.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_ACTIVATED_DESCRIPTION_GENERIC_GUILD.format({
                    guildSubscriptionQuantity: s
                }) : X.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_ACTIVATED_DESCRIPTION.format({
                    guildName: l.name,
                    guildSubscriptionQuantity: s
                }), (0, i.jsxs)("div", {
                    className: Z.confirmationContainer,
                    children: [u ? (0, i.jsx)(H.PremiumPaymentGuildAnimation, {
                        className: Z.confirmationAnimation,
                        nextScene: d,
                        onScenePlay: e => {
                            if (!S) switch (e) {
                                case H.PremiumPaymentGuildAnimation.Scenes.ENTRY:
                                    return m(H.PremiumPaymentGuildAnimation.Scenes.IDLE);
                                case H.PremiumPaymentGuildAnimation.Scenes.IDLE:
                                    return m(H.PremiumPaymentGuildAnimation.Scenes.SUCCESS);
                                case H.PremiumPaymentGuildAnimation.Scenes.SUCCESS:
                                    return _(!0), m(H.PremiumPaymentGuildAnimation.Scenes.IDLE)
                            }
                        },
                        pauseWhileUnfocused: !1
                    }) : null, (0, i.jsx)(v.default, {
                        className: Z.confirmationUpgradedBanner,
                        theme: c,
                        premiumType: J.PremiumTypes.TIER_2,
                        type: Q.DELAYED_PAYMENTS.has(null != o ? o : Q.PaymentSourceTypes.UNKNOWN) ? v.default.Types.PREMIUM_PAYMENT_STARTED : v.default.Types.GUILD_BOOST_APPLIED
                    }), (0, i.jsx)("div", {
                        className: Z.confirmationText,
                        children: n
                    }), (0, i.jsx)(I.Button, {
                        onClick: t,
                        children: X.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_ACTIVATED_CLOSE_BUTTON
                    })]
                })
            }
        },
        962113: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return s
                }
            });
            var i = t("920040");
            t("773670");
            var a = t("216422"),
                l = t("140599");

            function s(e) {
                let {
                    text: n,
                    color: t
                } = e;
                return (0, i.jsxs)("div", {
                    className: l.upsellFooter,
                    children: [(0, i.jsx)(a.default, {
                        className: l.upsellFooterIcon,
                        color: t
                    }), (0, i.jsx)("div", {
                        children: n
                    })]
                })
            }
        },
        751433: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return I
                }
            });
            var i = t("920040"),
                a = t("773670"),
                l = t("575482"),
                s = t.n(l),
                r = t("77078"),
                u = t("151185"),
                o = t("342169"),
                c = t("131825");

            function d(e) {
                return "" === e || "-" === e
            }
            var I = e => {
                let {
                    value: n,
                    onChange: t,
                    className: l,
                    minValue: I,
                    maxValue: m
                } = e, [S, _] = a.useState(n), P = d(S) || null != I && S <= I, p = d(S) || null != m && S >= m, f = e => {
                    t(d(e) ? null != I ? I : 0 : e), _(e)
                };
                return (0, i.jsx)(r.FocusRing, {
                    within: !0,
                    children: (0, i.jsxs)("div", {
                        className: s(c.actions, l),
                        children: [(0, i.jsx)(r.Clickable, {
                            onClick: e => {
                                e.stopPropagation(), !P && f(S - 1)
                            },
                            tabIndex: -1,
                            className: s(c.iconWrapper, c.subtract, {
                                [c.disabled]: P
                            }),
                            children: (0, i.jsx)(o.default, {
                                className: s(c.icon, {
                                    [c.disabled]: P
                                })
                            })
                        }), (0, i.jsx)(r.TextInput, {
                            value: "".concat(S),
                            onChange: e => {
                                if (d(e)) return f(e);
                                let n = parseInt(e);
                                if (!isNaN(n)) return null != m && n >= m ? f(m) : null != I && n <= I ? f(I) : f(n)
                            },
                            inputClassName: c.value
                        }), (0, i.jsx)(r.Clickable, {
                            onClick: e => {
                                e.stopPropagation(), !p && f(S + 1)
                            },
                            tabIndex: -1,
                            className: s(c.iconWrapper, c.add, {
                                [c.disabled]: p
                            }),
                            children: (0, i.jsx)(u.default, {
                                className: s(c.icon, {
                                    [c.disabled]: p
                                })
                            })
                        })]
                    })
                })
            }
        }
    }
]);
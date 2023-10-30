(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["75232"], {
        52801: function(e, t, s) {
            "use strict";
            e.exports = s.p + "427c912d3d4dbb1e3e11.svg"
        },
        789108: function(e, t, s) {
            "use strict";
            e.exports = s.p + "a4d9f17caaf1041fa989.svg"
        },
        520535: function(e, t, s) {
            "use strict";
            e.exports = s.p + "d83a63e51c1f1f50df79.svg"
        },
        613012: function(e, t, s) {
            "use strict";
            e.exports = s.p + "c459634ec3785edb2529.svg"
        },
        904958: function(e, t, s) {
            "use strict";
            e.exports = s.p + "3d51005f05446f4bbb8d.svg"
        },
        585851: function(e, t, s) {
            "use strict";
            e.exports = s.p + "078c7debaf010103bacc.svg"
        },
        826205: function(e, t, s) {
            "use strict";
            e.exports = s.p + "79fa2a636e7543b0038e.svg"
        },
        92001: function(e, t, s) {
            "use strict";
            e.exports = s.p + "682809d345f8af5a3ca2.svg"
        },
        548101: function(e, t, s) {
            "use strict";
            e.exports = s.p + "9060782d88c4a5993423.svg"
        },
        522840: function(e, t, s) {
            "use strict";
            e.exports = s.p + "1ad291ea522c0221b8e4.svg"
        },
        950874: function(e, t, s) {
            "use strict";
            e.exports = s.p + "07b2e1151201a85aa5bf.svg"
        },
        252065: function(e, t, s) {
            "use strict";
            e.exports = s.p + "a3aa982e8b7cd877fcd6.svg"
        },
        107165: function(e, t, s) {
            "use strict";
            e.exports = s.p + "b2b4021247ae472a3393.svg"
        },
        145171: function(e, t, s) {
            "use strict";
            e.exports = s.p + "bf2112f95f21ba326716.svg"
        },
        187785: function(e, t, s) {
            "use strict";
            e.exports = s.p + "e2b3840db2a646d4551b.svg"
        },
        280103: function(e, t, s) {
            "use strict";
            e.exports = s.p + "d4e2b5a430b01fe5c996.svg"
        },
        259732: function(e, t, s) {
            "use strict";
            e.exports = s.p + "cc825f78ecea95a94d74.svg"
        },
        89553: function(e, t, s) {
            "use strict";
            var a, n, i, r, l, u;
            s.r(t), s.d(t, {
                RefundReason: function() {
                    return a
                },
                PremiumRefundDisqualificationReason: function() {
                    return n
                },
                AdyenResultCodes: function() {
                    return i
                }
            }), (r = a || (a = {}))[r.OTHER = 0] = "OTHER", r[r.GIFTING_REFUND = 1] = "GIFTING_REFUND", r[r.BUYERS_REMORSE = 2] = "BUYERS_REMORSE", r[r.WRONG_PURCHASE = 3] = "WRONG_PURCHASE", r[r.FORGOT_TO_CANCEL = 4] = "FORGOT_TO_CANCEL", r[r.SERVER_BOOSTING_COOLDOWN = 5] = "SERVER_BOOSTING_COOLDOWN", r[r.USER_CONFUSION = 6] = "USER_CONFUSION", r[r.WANT_TO_SWITCH_TIERS = 7] = "WANT_TO_SWITCH_TIERS", r[r.DONT_NEED = 8] = "DONT_NEED", (l = n || (n = {}))[l.OTHER = 0] = "OTHER", l[l.ALREADY_REFUNDED = 1] = "ALREADY_REFUNDED", l[l.NOT_USER_REFUNDABLE_TYPE = 2] = "NOT_USER_REFUNDABLE_TYPE", l[l.PAST_REFUNDABLE_DATE = 3] = "PAST_REFUNDABLE_DATE", l[l.ENTITLEMENT_ALREADY_CONSUMED = 4] = "ENTITLEMENT_ALREADY_CONSUMED", l[l.ALREADY_REFUNDED_PREMIUM = 5] = "ALREADY_REFUNDED_PREMIUM", l[l.ALREADY_REFUNDED_PREMIUM_GUILD = 6] = "ALREADY_REFUNDED_PREMIUM_GUILD", (u = i || (i = {})).Authorised = "Authorised", u.Error = "Error"
        },
        364735: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            });
            var a = s("37983"),
                n = s("884691"),
                i = s("414456"),
                r = s.n(i),
                l = s("77078"),
                u = s("339783"),
                o = s("865146"),
                d = s("145131"),
                c = s("712218"),
                f = s("745279"),
                E = s("159885"),
                I = s("782340"),
                p = s("584565");
            class _ extends n.PureComponent {
                get typeString() {
                    let {
                        paymentSource: e
                    } = this.props;
                    if (e instanceof o.PaypalSourceRecord) return c.default.Types.PAYPAL;
                    if (e instanceof o.SofortSourceRecord) return c.default.Types.SOFORT;
                    if (e instanceof o.CreditCardSourceRecord) return c.default.getType(e.brand);
                    else if (e instanceof o.GiropaySourceRecord) return c.default.Types.GIROPAY;
                    else if (e instanceof o.Przelewy24SourceRecord) return c.default.Types.PRZELEWY24;
                    else if (e instanceof o.PaysafeSourceRecord) return c.default.Types.PAYSAFECARD;
                    else if (e instanceof o.GcashSourceRecord) return c.default.Types.GCASH;
                    else if (e instanceof o.GrabPayMySourceRecord) return c.default.Types.GRABPAY;
                    else if (e instanceof o.MomoWalletSourceRecord) return c.default.Types.MOMO_WALLET;
                    else if (e instanceof o.VenmoSourceRecord) return c.default.Types.VENMO;
                    else if (e instanceof o.KaKaoPaySourceRecord) return c.default.Types.KAKAOPAY;
                    else if (e instanceof o.GoPayWalletSourceRecord) return c.default.Types.GOPAY_WALLET;
                    else if (e instanceof o.BancontactSourceRecord) return c.default.Types.BANCONTACT;
                    else if (e instanceof o.EPSSourceRecord) return c.default.Types.EPS;
                    else if (e instanceof o.IdealSourceRecord) return c.default.Types.IDEAL;
                    else if (e instanceof o.CashAppSourceRecord) return c.default.Types.CASH_APP;
                    return c.default.Types.UNKNOWN
                }
                getLabel(e) {
                    return e instanceof o.CreditCardSourceRecord ? I.default.Messages.PAYMENT_SOURCE_CARD_ENDING.format({
                        brand: (0, E.upperCaseFirstChar)(e.brand),
                        last_4: e.last4
                    }) : e instanceof o.PaypalSourceRecord ? I.default.Messages.PAYMENT_SOURCE_PAYPAL : e instanceof o.SofortSourceRecord ? I.default.Messages.PAYMENT_SOURCE_SOFORT : e instanceof o.GiropaySourceRecord ? I.default.Messages.PAYMENT_SOURCE_GIROPAY : e instanceof o.Przelewy24SourceRecord ? I.default.Messages.PAYMENT_SOURCE_PRZELEWY24 : e instanceof o.PaysafeSourceRecord ? I.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD : e instanceof o.GcashSourceRecord ? I.default.Messages.PAYMENT_SOURCE_GCASH : e instanceof o.GrabPayMySourceRecord ? I.default.Messages.PAYMENT_SOURCE_GRABPAY : e instanceof o.MomoWalletSourceRecord ? I.default.Messages.PAYMENT_SOURCE_MOMO_WALLET : e instanceof o.VenmoSourceRecord ? I.default.Messages.PAYMENT_SOURCE_VENMO : e instanceof o.KaKaoPaySourceRecord ? I.default.Messages.PAYMENT_SOURCE_KAKAOPAY : e instanceof o.GoPayWalletSourceRecord ? I.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET : e instanceof o.BancontactSourceRecord ? I.default.Messages.PAYMENT_SOURCE_BANCONTACT : e instanceof o.IdealSourceRecord ? I.default.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({
                        bank: (0, u.getIdealBankDisplayNameFromBankName)(e.bank)
                    }) : e instanceof o.EPSSourceRecord ? I.default.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({
                        bank: (0, u.getEPSBankDisplayNameFromBankName)(e.bank)
                    }) : e instanceof o.CashAppSourceRecord ? I.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY : I.default.Messages.PAYMENT_SOURCE_UNKNOWN
                }
                renderDescription() {
                    let {
                        paymentSource: e,
                        descriptionClassName: t
                    } = this.props;
                    return (0, a.jsx)(l.Text, {
                        className: r(p.description, t),
                        variant: "text-md/semibold",
                        children: this.getLabel(e)
                    })
                }
                renderSubText() {
                    let {
                        paymentSource: e,
                        locale: t
                    } = this.props, s = null;
                    return e instanceof o.CreditCardSourceRecord ? s = I.default.Messages.PAYMENT_SOURCE_CARD_EXPIRES.format({
                        month: (0, f.getLocalizedDisplayMonth)(e.expiresMonth, t),
                        year: e.expiresYear
                    }) : e instanceof o.PaypalSourceRecord ? s = e.email : e instanceof o.SofortSourceRecord ? s = e.email : e instanceof o.Przelewy24SourceRecord ? s = e.email : e instanceof o.VenmoSourceRecord ? s = "@" + e.username : e instanceof o.CashAppSourceRecord && (s = e.username), s
                }
                render() {
                    let {
                        isDefault: e,
                        paymentSource: t,
                        showSubtext: s,
                        isForSubscription: n
                    } = this.props, i = this.renderSubText();
                    return (0, a.jsxs)(d.default, {
                        children: [(0, a.jsx)(c.default, {
                            type: this.typeString
                        }), (0, a.jsxs)(d.default, {
                            direction: d.default.Direction.VERTICAL,
                            className: p.descriptionWrapper,
                            children: [(0, a.jsxs)(d.default, {
                                align: d.default.Align.CENTER,
                                children: [this.renderDescription(), e ? (0, a.jsx)("div", {
                                    className: p.defaultIndicator,
                                    children: I.default.Messages.DEFAULT
                                }) : null, n ? (0, a.jsx)("div", {
                                    className: p.premiumIndicator,
                                    children: I.default.Messages.PAYMENT_SOURCE_SUBSCRIPTION
                                }) : null, t.invalid ? (0, a.jsx)("div", {
                                    className: p.invalidIndicator,
                                    children: I.default.Messages.PAYMENT_SOURCE_INVALID
                                }) : null]
                            }), s && null != i ? (0, a.jsx)("div", {
                                className: p.subText,
                                children: i
                            }) : null]
                        })]
                    })
                }
            }
            _.defaultProps = {
                isForSubscription: !1,
                isDefault: !1,
                showSubtext: !1
            }
        },
        404515: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return U
                }
            });
            var a = s("37983"),
                n = s("884691"),
                i = s("414456"),
                r = s.n(i),
                l = s("627445"),
                u = s.n(l),
                o = s("974667"),
                d = s("446674"),
                c = s("77078"),
                f = s("913144"),
                E = s("850068"),
                I = s("444949"),
                p = s("775433"),
                _ = s("510889"),
                m = s("386876"),
                N = s("10514"),
                P = s("521012"),
                S = s("145131"),
                R = s("251752"),
                T = s("719923"),
                C = s("942456"),
                A = s("646718"),
                h = s("843455"),
                L = s("782340"),
                M = s("116523"),
                g = s("852225");

            function y(e) {
                let {
                    payments: t,
                    locale: s,
                    compactMode: i,
                    numPages: l
                } = e, u = n.useRef(null), [d, f] = n.useState(0), [I, p] = n.useState(null), m = t.slice(10 * d, (d + 1) * 10);
                n.useEffect(() => {
                    var e;
                    null === (e = u.current) || void 0 === e || e.scrollTo({
                        to: 0
                    })
                }, [d]);
                let N = n.useCallback(e => {
                        f(e);
                        let s = t[t.length - 1].id;
                        e === l - 1 && I !== s && ((0, E.fetchPayments)(10, s), p(s))
                    }, [t, l, I]),
                    P = (0, _.default)("billing-history", u);
                return (0, a.jsx)(o.ListNavigatorProvider, {
                    navigator: P,
                    children: (0, a.jsx)(o.ListNavigatorContainer, {
                        children: e => {
                            let {
                                ref: t,
                                ...n
                            } = e;
                            return (0, a.jsx)(R.default, {
                                className: r(M.verticalFit, M.paginator),
                                currentPageIndex: d,
                                onChangePage: N,
                                numPages: l,
                                ref: t,
                                ...n,
                                children: (0, a.jsx)(c.AdvancedScroller, {
                                    className: M.bottomDivider,
                                    ref: u,
                                    children: m.map((e, t) => (0, a.jsx)(C.default, {
                                        className: r(M.paymentRow, M.bottomDivider),
                                        payment: e,
                                        locale: s,
                                        compactMode: i
                                    }, t))
                                })
                            })
                        }
                    })
                })
            }
            class x extends n.PureComponent {
                get numPages() {
                    return Math.max(Math.ceil(this.props.payments.length / 10), 1)
                }
                componentDidMount() {
                    f.default.wait(() => {
                        (0, I.fetchActivityStatistics)(), (0, E.fetchPayments)(20)
                    })
                }
                renderPremiumExternalSubscription(e) {
                    return u(null != e.paymentGateway, "Expected payment gateway when rendering for external subscription"), (0, a.jsxs)(c.Card, {
                        className: M.externalRow,
                        children: [(0, a.jsx)("div", {
                            className: M.externalRowHeader,
                            children: L.default.Messages.BILLING_EXTERNAL_HEADER.format({
                                paymentGatewayName: h.PaymentGatewayToFriendlyName[e.paymentGateway]
                            })
                        }), (0, a.jsx)("div", {
                            className: M.externalRowBody,
                            children: L.default.Messages.BILLING_EXTERNAL_DESCRIPTION.format({
                                paymentGatewayName: h.PaymentGatewayToFriendlyName[e.paymentGateway],
                                billingHistoryLink: (0, T.getExternalSubscriptionMethodUrl)(e.paymentGateway, "BILLING_HISTORY")
                            })
                        })]
                    })
                }
                render() {
                    let {
                        compactMode: e,
                        payments: t,
                        subscription: s,
                        locale: n
                    } = this.props, i = null != s && s.isPurchasedExternally;
                    return 0 !== t.length || i ? (0, a.jsxs)("div", {
                        className: M.verticalFit,
                        children: [null != s && i ? this.renderPremiumExternalSubscription(s) : null, t.length > 0 ? (0, a.jsxs)("div", {
                            className: r(M.paymentPane, M.verticalFit),
                            children: [e ? null : (0, a.jsx)("div", {
                                className: r(M.paymentRow, M.bottomDivider),
                                children: (0, a.jsxs)(S.default, {
                                    className: M.paymentRowHeader,
                                    children: [(0, a.jsx)("div", {
                                        className: g.date,
                                        children: L.default.Messages.BILLING_PAYMENT_TABLE_HEADER_DATE
                                    }), (0, a.jsx)("div", {
                                        className: M.paymentRowHeaderDescription,
                                        children: L.default.Messages.BILLING_PAYMENT_TABLE_HEADER_DESCRIPTION
                                    }), (0, a.jsx)("div", {
                                        className: g.amount,
                                        children: L.default.Messages.BILLING_PAYMENT_TABLE_HEADER_AMOUNT
                                    })]
                                })
                            }), (0, a.jsx)(y, {
                                compactMode: e,
                                locale: n,
                                payments: t,
                                numPages: this.numPages
                            })]
                        }) : null]
                    }) : null
                }
                constructor(...e) {
                    super(...e), this.scrollerRef = n.createRef()
                }
            }

            function D(e) {
                var t;
                let s = e.skuId,
                    a = null === (t = e.subscription) || void 0 === t ? void 0 : t.items[0].planId;
                return !(null == s || null == a || Object.values(A.PremiumSubscriptionSKUs).includes(s) || (0, T.isPremiumSubscriptionPlan)(a))
            }

            function U(e) {
                let t = (0, d.useStateFromStores)([m.default], () => m.default.getPayments()),
                    s = (0, d.useStateFromStores)([P.default], () => P.default.getPremiumTypeSubscription()),
                    i = n.useMemo(() => new Set(t.filter(D).map(e => {
                        let {
                            subscription: t
                        } = e;
                        return null == t ? void 0 : t.items[0].planId
                    })), [t]),
                    r = n.useMemo(() => new Set(t.filter(D).map(e => {
                        let {
                            skuId: t
                        } = e;
                        return t
                    })), [t]),
                    l = (0, d.useStateFromStoresArray)([N.default], () => N.default.getPlanIdsForSkus(Array.from(r))),
                    u = n.useCallback(() => l.length === i.size, [l, i]);
                return n.useEffect(() => {
                    !u() && f.default.wait(() => {
                        r.forEach(e => (0, p.fetchSubscriptionPlansForSKU)(e, void 0, void 0, !0, void 0))
                    })
                }, [u, r]), (0, a.jsx)(x, {
                    ...e,
                    payments: u() ? t : [],
                    subscription: s
                })
            }
            x.defaultProps = {
                compactMode: !1
            }
        },
        942456: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return e_
                }
            });
            var a, n, i = s("37983"),
                r = s("884691"),
                l = s("414456"),
                u = s.n(l),
                o = s("627445"),
                d = s.n(o),
                c = s("866227"),
                f = s.n(c),
                E = s("974667"),
                I = s("199108"),
                p = s("446674"),
                _ = s("77078"),
                m = s("54239"),
                N = s("545158"),
                P = s("104449"),
                S = s("299285"),
                R = s("609190"),
                T = s("442379"),
                C = s("565559"),
                A = s("928576"),
                h = s("407417"),
                L = s("246421"),
                M = s("264742"),
                g = s("537325"),
                y = s("24373"),
                x = s("41170"),
                D = s("865146"),
                U = s("546463"),
                v = s("305961"),
                O = s("357957"),
                B = s("10514"),
                j = s("251013"),
                b = s("145131"),
                G = s("953109"),
                F = s("37785"),
                k = s("712218"),
                w = s("461380"),
                Y = s("36694"),
                H = s("945330"),
                V = s("743826"),
                K = s("978679"),
                W = s("216422"),
                z = s("306160"),
                Z = s("888400"),
                q = s("568734"),
                X = s("719923"),
                J = s("153160"),
                Q = s("364735"),
                $ = s("206343"),
                ee = s("89553"),
                et = s("49111"),
                es = s("646718"),
                ea = s("843455"),
                en = s("782340"),
                ei = s("852225");
            let er = e => "https://".concat(et.SUPPORT_DOMAIN, "/hc/").concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000118612"),
                el = [et.SKUTypes.DURABLE_PRIMARY, et.SKUTypes.DURABLE, et.SKUTypes.CONSUMABLE];
            (a = n || (n = {})).TIME_PLAYED = "TIME_PLAYED", a.PURCHASE_DATE = "PURCHASE_DATE", a.SKU_TYPE = "SKU_TYPE", a.ALREADY_REFUNDED = "ALREADY_REFUNDED", a.PAYMENT_STATUS = "PAYMENT_STATUS", a.PAYMENT_GATEWAY = "PAYMENT_GATEWAY", a.SKU_STICKER_PACK = "SKU_STICKER_PACK", a.SUBSCRIPTION_TYPE = "SUBSCRIPTION_TYPE", a.GUILD_PRODUCT = "GUILD_PRODUCT";
            let eu = [et.PaymentStatusTypes.FAILED, et.PaymentStatusTypes.REVERSED, et.PaymentStatusTypes.CANCELED],
                eo = [ea.PaymentGateways.APPLE],
                ed = e => {
                    let {
                        description: t,
                        cost: s
                    } = e;
                    return (0, i.jsx)("li", {
                        className: ei.paymentDetail,
                        children: (0, i.jsxs)(b.default, {
                            justify: b.default.Justify.BETWEEN,
                            children: [(0, i.jsx)("div", {
                                children: t
                            }), (0, i.jsx)("div", {
                                children: s
                            })]
                        })
                    })
                };

            function ec(e) {
                let {
                    value: t,
                    copyText: s,
                    copyFeedbackText: a
                } = e, [n, l] = r.useState(!1), [u, o] = r.useState(!1), d = () => {
                    (0, z.copy)(t), o(!0), l(!0)
                };
                return (0, i.jsx)(_.Tooltip, {
                    forceOpen: u,
                    text: n ? a : s,
                    children: e => {
                        let {
                            onMouseEnter: s,
                            onMouseLeave: a,
                            ...r
                        } = e;
                        return (0, i.jsx)(_.Clickable, {
                            ...r,
                            onMouseEnter: () => {
                                n && l(!1), "function" == typeof s && s()
                            },
                            onMouseLeave: () => {
                                o(!1), "function" == typeof a && a()
                            },
                            onClick: d,
                            children: (0, i.jsx)("div", {
                                className: ei.copiableContainer,
                                children: t
                            })
                        })
                    }
                })
            }
            let ef = e => {
                let {
                    description: t,
                    detail: s
                } = e;
                return (0, i.jsx)("li", {
                    className: ei.guildProductDetail,
                    children: (0, i.jsxs)(b.default, {
                        justify: b.default.Justify.BETWEEN,
                        children: [(0, i.jsx)("div", {
                            children: t
                        }), (0, i.jsx)("div", {
                            children: s
                        })]
                    })
                })
            };

            function eE(e) {
                let {
                    guildId: t,
                    guildProductListingId: s
                } = e, a = (0, T.useFetchGuildProductListing)(t, s, {
                    requireCurrentGuild: !1
                }), n = (0, A.useProductType)(a), l = (0, p.useStateFromStores)([v.default], () => v.default.getGuild(t)), u = (null == a ? void 0 : a.role_id) != null && (null == a ? void 0 : a.attachments_count) === 0 ? en.default.Messages.GUILD_PRODUCT_BILLING_TYPE_PREMIUM_ROLE : n, o = r.useCallback(async () => {
                    (null == l ? void 0 : l.hasFeature(et.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0 ? await (0, g.default)(et.Routes.GUILD_PRODUCT(t, s)) : await (0, g.default)(et.Routes.CHANNEL(t)), (0, m.popLayer)()
                }, [l, t, s]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [null != u && (0, i.jsx)(ef, {
                        description: en.default.Messages.GUILD_PRODUCT_BILLING_PRODUCT_TYPE,
                        detail: u
                    }), null != l && (0, i.jsx)(ef, {
                        description: en.default.Messages.GUILD_PRODUCT_BILLING_SERVER_NAME,
                        detail: (0, i.jsx)(F.default, {
                            onClick: o,
                            children: l.name
                        })
                    })]
                })
            }

            function eI(e) {
                var t, s;
                let {
                    guildId: a,
                    guildProductListingId: n
                } = e, r = (0, T.useFetchGuildProductListing)(a, n, {
                    requireCurrentGuild: !1
                }), l = (0, p.useStateFromStores)([C.default], () => C.default.getGuildProductFetchState(n) === C.FetchState.FETCHING), u = null == r ? void 0 : r.role_id, o = (0, p.useStateFromStores)([v.default], () => {
                    var e;
                    return null != u ? null === (e = v.default.getGuild(a)) || void 0 === e ? void 0 : e.roles[u] : void 0
                }, [a, u]), d = (null !== (s = null == r ? void 0 : null === (t = r.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== s ? s : 0) > 0, c = null != o;
                return l ? (0, i.jsx)("div", {
                    className: ei.guildProductBenefits,
                    children: (0, i.jsx)(_.Spinner, {})
                }) : null != r && (d || c) ? (0, i.jsxs)("div", {
                    className: ei.guildProductBenefits,
                    children: [d && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(_.Text, {
                            variant: "text-xs/semibold",
                            color: "header-secondary",
                            className: ei.guildProductBenefitLabel,
                            children: en.default.Messages.GUILD_PRODUCT_BILLING_ACCESS_DOWNLOADABLES
                        }), (0, i.jsx)(h.default, {
                            guildId: a,
                            productId: r.id
                        })]
                    }), c && (0, i.jsxs)(i.Fragment, {
                        children: [d && (0, i.jsx)("div", {
                            className: ei.divider
                        }), (0, i.jsx)(_.Text, {
                            variant: "text-xs/semibold",
                            color: "header-secondary",
                            className: ei.guildProductBenefitLabel,
                            children: en.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_ROLE_UNLOCKED
                        }), (0, i.jsx)(L.default, {
                            role: o
                        })]
                    })]
                }) : null
            }
            class ep extends r.PureComponent {
                get timePlayed() {
                    let {
                        applicationStatistics: e
                    } = this.props;
                    return null != e && null != e.total_discord_sku_duration ? f.duration(e.total_discord_sku_duration, "seconds") : null
                }
                get daysSincePurchase() {
                    let {
                        payment: e
                    } = this.props, t = null != e.sku ? e.sku.releaseDate : null, s = null != t && t.isAfter(e.createdAt) ? t : e.createdAt;
                    return f().diff(s, "days")
                }
                get isSkuPreorder() {
                    let {
                        payment: e
                    } = this.props;
                    return null != e.sku && e.sku.isPreorder()
                }
                get isPremium() {
                    let {
                        payment: e
                    } = this.props;
                    return e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift
                }
                get typeString() {
                    let {
                        payment: {
                            paymentSource: e
                        }
                    } = this.props;
                    return e instanceof D.PaypalSourceRecord ? k.default.Types.PAYPAL : e instanceof D.CreditCardSourceRecord ? k.default.getType(e.brand) : k.default.Types.UNKNOWN
                }
                validateRefundRules() {
                    return this.refundRules.filter(e => {
                        let {
                            canRefund: t
                        } = e;
                        return !t()
                    }).map(e => {
                        let {
                            rule: t
                        } = e;
                        return t
                    })
                }
                renderStatus() {
                    let {
                        payment: e
                    } = this.props;
                    switch (e.status) {
                        case et.PaymentStatusTypes.PENDING:
                            return (0, i.jsx)("span", {
                                className: ei.statusTagGrey,
                                children: en.default.Messages.BILLING_TAG_PENDING
                            });
                        case et.PaymentStatusTypes.FAILED:
                            return (0, i.jsx)("span", {
                                className: ei.statusTagRed,
                                children: en.default.Messages.BILLING_TAG_FAILED
                            });
                        case et.PaymentStatusTypes.REFUNDED:
                            if (e.amountRefunded !== e.amount) return (0, i.jsx)("span", {
                                className: ei.statusTagGreen,
                                children: en.default.Messages.BILLING_TAG_PARTIALLY_REFUNDED
                            });
                            return (0, i.jsx)("span", {
                                className: ei.statusTagGreen,
                                children: en.default.Messages.BILLING_TAG_REFUNDED
                            });
                        case et.PaymentStatusTypes.REVERSED:
                            return (0, i.jsx)("span", {
                                className: ei.statusTagRed,
                                children: en.default.Messages.BILLING_TAG_REVERSED
                            });
                        case et.PaymentStatusTypes.CANCELED:
                            return (0, i.jsx)("span", {
                                className: ei.statusTagRed,
                                children: en.default.Messages.BILLING_TAG_CANCELED
                            });
                        default:
                            return null
                    }
                }
                renderPrice() {
                    let {
                        payment: e
                    } = this.props, t = e.amount - e.amountRefunded;
                    return (0, i.jsx)("span", {
                        className: ei.price,
                        children: (0, J.formatPrice)(t, e.currency)
                    })
                }
                renderPaymentIdField() {
                    let {
                        payment: e
                    } = this.props;
                    return (0, i.jsx)("li", {
                        className: ei.paymentDetail,
                        children: (0, i.jsxs)("div", {
                            className: ei.paymentInfo,
                            children: [(0, i.jsx)("div", {
                                children: en.default.Messages.BILLING_PAYMENT_ID
                            }), (0, i.jsx)(ec, {
                                value: e.id,
                                copyText: en.default.Messages.BILLING_PAYMENT_ID_COPY,
                                copyFeedbackText: en.default.Messages.BILLING_PAYMENT_ID_COPIED
                            })]
                        })
                    })
                }
                renderPaymentBreakdown() {
                    let {
                        payment: e,
                        locale: t,
                        application: s
                    } = this.props, {
                        taxInclusive: a,
                        tax: n,
                        amount: l,
                        amountRefunded: o,
                        currency: d
                    } = e, c = null == s ? void 0 : s.guildId;
                    return (0, i.jsxs)("div", {
                        className: u(ei.paymentText, ei.paymentBreakdown),
                        children: [null != e.paymentSource ? (0, i.jsx)(Q.default, {
                            paymentSource: e.paymentSource,
                            locale: t,
                            descriptionClassName: ei.paymentText
                        }) : null, (0, i.jsxs)("ul", {
                            children: [this.renderPaymentIdField(), !a && n > 0 ? (0, i.jsxs)(r.Fragment, {
                                children: [(0, i.jsx)(ed, {
                                    description: e.description,
                                    cost: (0, J.formatPrice)(l - n, d)
                                }), (0, i.jsx)(ed, {
                                    description: en.default.Messages.BILLING_PAYMENT_BREAKDOWN_TAXES,
                                    cost: (0, J.formatPrice)(n, d)
                                })]
                            }) : null, (0, i.jsx)(ed, {
                                description: en.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                                cost: (0, J.formatPrice)(l, d)
                            }), e.isGuildProductPurchase && null != c && null != e.sku && (0, i.jsx)(eE, {
                                guildId: c,
                                guildProductListingId: e.sku.id
                            }), o > 0 && (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(ed, {
                                    description: en.default.Messages.BILLING_PAYMENT_BREAKDOWN_REFUNDED,
                                    cost: (0, J.formatPrice)(o, d)
                                }), (0, i.jsx)(ed, {
                                    description: en.default.Messages.BILLING_PAYMENT_BREAKDOWN_NET,
                                    cost: (0, J.formatPrice)(l - o, d)
                                })]
                            })]
                        })]
                    })
                }
                renderInvoiceDownload() {
                    let {
                        payment: e
                    } = this.props;
                    return (0, i.jsx)(R.default, {
                        payment: e
                    })
                }
                renderRefundDetails() {
                    var e;
                    let t;
                    let {
                        locale: s,
                        payment: a
                    } = this.props, l = this.validateRefundRules();
                    if (l.includes(n.PAYMENT_GATEWAY) || l.includes(n.PAYMENT_STATUS) || l.includes(n.ALREADY_REFUNDED) || l.includes(n.SKU_STICKER_PACK) || l.includes(n.SUBSCRIPTION_TYPE) || l.includes(n.GUILD_PRODUCT)) return null;
                    if ((null === (e = a.sku) || void 0 === e ? void 0 : e.productLine) === et.SKUProductLines.COLLECTIBLES) return (0, i.jsx)("div", {
                        className: ei.paymentText,
                        children: this.renderRefundActions(l)
                    });
                    let u = 0 === l.length,
                        o = er(s),
                        d = this.isPremium ? 5 : 14;
                    return t = l.includes(n.SKU_TYPE) ? en.default.Messages.BILLING_APPLICATION_CONSUMABLE_REFUND_TEXT_UNABLE.format({
                        supportURL: o
                    }) : u ? a.isPreorder && this.isSkuPreorder ? en.default.Messages.BILLING_PREORDER_REFUND_TEXT.format({
                        supportURL: o
                    }) : a.isPremiumSubscription || a.isPremiumGuildSubscription ? en.default.Messages.BILLING_PREMIUM_REFUND_TEXT.format({
                        dateLimit: d,
                        supportURL: o
                    }) : a.isGift ? en.default.Messages.BILLING_GIFT_REFUND_TEXT.format({
                        dateLimit: d,
                        supportURL: o
                    }) : en.default.Messages.BILLING_APPLICATION_REFUND_TEXT.format({
                        dateLimit: d,
                        playtimeLimit: 2,
                        supportURL: o
                    }) : a.isGift ? en.default.Messages.BILLING_GIFT_REFUND_TEXT_UNABLE.format({
                        dateLimit: d
                    }) : a.isPremiumSubscription || a.isPremiumGuildSubscription ? en.default.Messages.BILLING_PREMIUM_REFUND_TEXT_UNABLE.format({
                        dateLimit: d
                    }) : en.default.Messages.BILLING_APPLICATION_REFUND_TEXT_UNABLE.format({
                        dateLimit: d,
                        playtimeLimit: 2
                    }), this.isPremium && (0, $.userInRefundExperiment)() && (t = null), (0, i.jsxs)(r.Fragment, {
                        children: [(0, i.jsx)(_.H, {
                            className: ei.paymentHeader,
                            children: en.default.Messages.BILLING_REFUND_HEADER
                        }), (0, i.jsxs)("div", {
                            className: ei.paymentText,
                            children: [(0, i.jsx)("div", {
                                children: t
                            }), this.renderRefundActions(l)]
                        })]
                    })
                }
                renderRefundCriteria(e, t, s, a) {
                    return (0, i.jsxs)("div", {
                        className: ei.refundCriteria,
                        children: [(0, i.jsx)(_.H, {
                            className: ei.refundSubHeader,
                            children: e
                        }), (0, i.jsxs)("div", {
                            className: ei.refundIconContainer,
                            children: [(0, i.jsx)(t, {
                                className: ei.refundCriteriaIcon
                            }), null != s && (0, i.jsx)("div", {
                                children: s
                            })]
                        })]
                    }, a)
                }
                renderRefundActions(e) {
                    var t, a, r;
                    let {
                        locale: l,
                        payment: u
                    } = this.props;
                    if (this.isSkuPreorder || e.includes(n.SKU_TYPE)) return null;
                    let o = (null === (t = u.sku) || void 0 === t ? void 0 : t.productLine) === et.SKUProductLines.COLLECTIBLES,
                        d = e.includes(n.PURCHASE_DATE) ? H.default : Y.default,
                        c = e.includes(n.TIME_PLAYED) || (null === (a = u.premiumRefundDisqualificationReasons) || void 0 === a ? void 0 : a.includes(ee.PremiumRefundDisqualificationReason.PAST_REFUNDABLE_DATE)) ? H.default : Y.default;
                    if (!this.isPremium || !(0, $.userInRefundExperiment)()) return (0, i.jsxs)("div", {
                        className: ei.refundActions,
                        children: [(0, i.jsxs)("div", {
                            className: ei.refundRules,
                            children: [this.renderRefundCriteria(u.isPreorder ? en.default.Messages.BILLING_REFUND_RELEASE_DATE_SUBHEADER : en.default.Messages.BILLING_REFUND_PURCHASE_DATE_SUBHEADER, d, en.default.Messages.BILLING_REFUND_PURCHASE_DATE.format({
                                daysSincePurchase: this.daysSincePurchase
                            })), u.isSubscription || u.isGift || o ? null : this.renderRefundCriteria(en.default.Messages.BILLING_REFUND_PLAY_TIME_SUBHEADER, c, null != this.timePlayed ? this.timePlayed.humanize() : en.default.Messages.BILLING_REFUND_PLAY_TIME_NEVER_PLAYED)]
                        }), (0, i.jsx)(_.Anchor, {
                            href: er(l),
                            children: en.default.Messages.BILLING_REFUND_REPORT_A_PROBLEM
                        })]
                    });
                    let f = (null !== (r = u.premiumRefundDisqualificationReasons) && void 0 !== r ? r : [ee.PremiumRefundDisqualificationReason.OTHER])[0],
                        E = null != f || 0 !== e.length || u.isPurchasedExternally;
                    return (0, i.jsxs)("div", {
                        className: ei.refundActions,
                        children: [(0, i.jsx)(_.Tooltip, {
                            shouldShow: E,
                            text: function(e) {
                                switch (e) {
                                    case ee.PremiumRefundDisqualificationReason.ALREADY_REFUNDED_PREMIUM:
                                        return en.default.Messages.BILLING_REFUND_ALREADY_REFUNDED_PREMIUM_REASON;
                                    case ee.PremiumRefundDisqualificationReason.ALREADY_REFUNDED_PREMIUM_GUILD:
                                        return en.default.Messages.BILLING_REFUND_ALREADY_REFUNDED_PREMIUM_GUILD_REASON;
                                    case ee.PremiumRefundDisqualificationReason.ENTITLEMENT_ALREADY_CONSUMED:
                                        return en.default.Messages.BILLING_REFUND_ALREADY_CONSUMED_REASON;
                                    default:
                                        return en.default.Messages.BILLING_REFUND_GENERIC_REASON
                                }
                            }(f),
                            children: e => (0, i.jsx)(_.Button, {
                                ...e,
                                color: _.Button.Colors.PRIMARY,
                                disabled: E,
                                onClick: () => (0, _.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await s.el("560785").then(s.bind(s, "560785"));
                                    return t => (0, i.jsx)(e, {
                                        payment: u,
                                        reportProblemUrl: er(l),
                                        ...t
                                    })
                                }),
                                children: en.default.Messages.BILLING_REFUND_BUTTON_TEXT
                            })
                        }), (0, i.jsx)(_.Anchor, {
                            href: er(l),
                            children: en.default.Messages.BILLING_REFUND_REPORT_A_PROBLEM
                        })]
                    })
                }
                renderDescription() {
                    var e;
                    let t, s;
                    let {
                        compactMode: a,
                        payment: n,
                        application: l,
                        guild: u,
                        stickerPack: o
                    } = this.props, {
                        expanded: c
                    } = this.state, E = n.sku, I = n.subscription, p = null != n.paymentSource && et.PREPAID_PAYMENT_SOURCES.has(n.paymentSource.type);
                    if (null != I && 0 !== I.items.length) {
                        let e = [],
                            a = null;
                        if (I.type === et.SubscriptionTypes.PREMIUM) I.items.forEach(t => {
                            let {
                                planId: s,
                                quantity: n
                            } = t;
                            (0, X.isPremiumBaseSubscriptionPlan)(s) ? (e.push(X.default.getDisplayName(s, !1, p)), a = es.SubscriptionPlanInfo[s].skuId) : (e.push("".concat(n > 1 ? "".concat(n, "x ") : "").concat(X.default.getDisplayName(s, !1, p))), null == a && (a = es.SubscriptionPlanInfo[s].skuId))
                        });
                        else if (I.type === et.SubscriptionTypes.GUILD) {
                            let t = B.default.get(I.items[0].planId);
                            d(null != t, "Guild subscription plan should already have been loaded");
                            let s = t.interval === es.SubscriptionIntervalTypes.YEAR ? en.default.Messages.YEARLY_GUILD_SUBSCRIPTION : en.default.Messages.MONTHLY_GUILD_SUBSCRIPTION;
                            e.push(s.format({
                                planName: t.name
                            })), a = t.skuId
                        } else if (I.type === et.SubscriptionTypes.APPLICATION) {
                            let t = B.default.get(I.items[0].planId);
                            d(null != t, "Application subscription plan should already have been loaded"), null != l ? e.push(en.default.Messages.MONTHLY_APPLICATION_SUBSCRIPTION_V2.format({
                                tier: null == E ? void 0 : E.name
                            })) : e.push(en.default.Messages.APPLICATION_SUBSCRIPTION_FROM_DELETED_APPLICATION), a = t.skuId
                        }
                        s = e.join(", "), t = (0, i.jsx)(G.default, {
                            className: ei.descriptionIcon,
                            guildClassName: ei.guildDescriptionIcon,
                            game: l,
                            guild: u,
                            size: G.default.Sizes.XSMALL,
                            skuId: a
                        })
                    } else if (null != E) {
                        if (s = n.isPreorder ? en.default.Messages.PREORDER_SKU_NAME.format({
                                name: E.name
                            }) : n.isGuildProductPurchase && n.isSoftDeletedProduct ? en.default.Messages.GUILD_PRODUCT_BILLING_DELISTED_PRODUCT : E.name, null != o) {
                            let e = (0, y.getStickerPackPreviewSticker)(o);
                            t = (0, i.jsx)(x.default, {
                                disableAnimation: !c,
                                isInteracting: c,
                                sticker: e,
                                className: ei.descriptionIcon,
                                size: 24
                            })
                        } else t = (null === (e = n.sku) || void 0 === e ? void 0 : e.productLine) === et.SKUProductLines.COLLECTIBLES ? (0, i.jsx)(V.default, {
                            className: ei.shopIcon
                        }) : (0, i.jsx)(G.default, {
                            className: ei.descriptionIcon,
                            guildClassName: ei.guildDescriptionIcon,
                            game: l,
                            guild: u,
                            size: G.default.Sizes.XSMALL,
                            skuId: E.id
                        })
                    } else t = (0, i.jsx)(W.default, {
                        className: ei.descriptionIcon
                    }), s = n.description;
                    let m = (0, i.jsx)("div", {
                            className: ei.date,
                            children: (0, Z.dateFormat)(f(n.createdAt), "MM/DD/YYYY")
                        }),
                        N = n.isGift ? (0, i.jsx)(_.Tooltip, {
                            text: en.default.Messages.BILLING_GIFT_PURCHASE_TOOLTIP,
                            children: e => (0, i.jsx)(K.default, {
                                className: ei.giftIcon,
                                ...e
                            })
                        }) : null;
                    return a ? (0, i.jsxs)("div", {
                        className: ei.description,
                        children: [t, (0, i.jsxs)("div", {
                            children: [s, m]
                        }), N]
                    }) : (0, i.jsxs)(r.Fragment, {
                        children: [m, (0, i.jsxs)("div", {
                            className: ei.description,
                            children: [t, (0, i.jsx)("div", {
                                children: s
                            }), N]
                        })]
                    })
                }
                renderGuildProductBenefits() {
                    let {
                        payment: e,
                        application: t,
                        locale: s
                    } = this.props, a = null == t ? void 0 : t.guildId, n = e.isGuildProductPurchase;
                    return n ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            className: ei.sectionDivider
                        }), e.isSoftDeletedProduct ? (0, i.jsx)(M.default, {
                            className: ei.warningBlock,
                            buttonPosition: M.WarningBlockButtonPosition.RIGHT,
                            notice: en.default.Messages.GUILD_PRODUCT_BILLING_PRODUCT_UNAVAILABLE,
                            ctaLabel: en.default.Messages.GUILD_PRODUCT_BILLING_CONTACT_SUPPORT,
                            onClick: () => (0, N.default)(er(s))
                        }) : null != a && null != e.sku && (0, i.jsx)(eI, {
                            guildId: a,
                            guildProductListingId: e.sku.id
                        })]
                    }) : null
                }
                renderExpandedSection() {
                    return (0, i.jsx)(_.Clickable, {
                        onClick: e => e.stopPropagation(),
                        children: (0, i.jsxs)("div", {
                            className: ei.expandedInfo,
                            children: [(0, i.jsx)(_.H, {
                                className: ei.paymentHeader,
                                children: en.default.Messages.BILLING_PURCHASE_DETAILS_HEADER
                            }), this.renderPaymentBreakdown(), this.renderGuildProductBenefits(), this.renderInvoiceDownload(), this.renderRefundDetails()]
                        })
                    })
                }
                render() {
                    let {
                        payment: e,
                        className: t,
                        compactMode: s
                    } = this.props, {
                        expanded: a
                    } = this.state;
                    return (0, i.jsx)(E.ListNavigatorItem, {
                        id: e.id,
                        children: e => (0, i.jsxs)(_.Clickable, {
                            onClick: this.handleExpandInfo,
                            className: u(a ? ei.payment : ei.hoverablePayment, t, {
                                [ei.compact]: s
                            }),
                            focusProps: {
                                offset: 4
                            },
                            ...e,
                            children: [(0, i.jsxs)(b.default, {
                                className: ei.summaryInfo,
                                align: b.default.Align.CENTER,
                                children: [this.renderDescription(), (0, i.jsxs)("div", {
                                    className: ei.amount,
                                    children: [this.renderStatus(), this.renderPrice()]
                                }), (0, i.jsx)(w.default, {
                                    className: ei.expand,
                                    direction: a ? w.default.Directions.UP : w.default.Directions.DOWN
                                })]
                            }), a ? this.renderExpandedSection() : null]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        expanded: !1
                    }, this.refundRules = [{
                        rule: n.TIME_PLAYED,
                        canRefund: () => {
                            if (this.isSkuPreorder) return !0;
                            let e = this.timePlayed;
                            return null == e || e.asMilliseconds() < f.duration(2, "hours").asMilliseconds()
                        }
                    }, {
                        rule: n.PURCHASE_DATE,
                        canRefund: () => {
                            let {
                                payment: e
                            } = this.props;
                            if (this.isSkuPreorder) return !0;
                            let t = e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift ? 5 : 14;
                            return this.daysSincePurchase <= t
                        }
                    }, {
                        rule: n.SKU_TYPE,
                        canRefund: () => {
                            let {
                                payment: e
                            } = this.props;
                            return null == e.sku || e.sku.type !== et.SKUTypes.CONSUMABLE
                        }
                    }, {
                        rule: n.ALREADY_REFUNDED,
                        canRefund: () => {
                            let {
                                payment: e
                            } = this.props;
                            return e.amountRefunded < e.amount
                        }
                    }, {
                        rule: n.PAYMENT_STATUS,
                        canRefund: () => {
                            let {
                                payment: e
                            } = this.props;
                            return !eu.includes(e.status)
                        }
                    }, {
                        rule: n.PAYMENT_GATEWAY,
                        canRefund: () => {
                            let {
                                payment: e
                            } = this.props;
                            return null == e.paymentGateway || !eo.includes(e.paymentGateway)
                        }
                    }, {
                        rule: n.SKU_STICKER_PACK,
                        canRefund: () => {
                            let {
                                payment: e
                            } = this.props;
                            return null == e.sku || !(0, q.hasFlag)(e.sku.flags, et.SKUFlags.STICKER_PACK)
                        }
                    }, {
                        rule: n.SUBSCRIPTION_TYPE,
                        canRefund: () => {
                            var e, t;
                            let {
                                payment: s
                            } = this.props;
                            return (null === (e = s.subscription) || void 0 === e ? void 0 : e.type) !== et.SubscriptionTypes.GUILD && (null === (t = s.subscription) || void 0 === t ? void 0 : t.type) !== et.SubscriptionTypes.APPLICATION
                        }
                    }, {
                        rule: n.GUILD_PRODUCT,
                        canRefund: () => {
                            let {
                                payment: e
                            } = this.props;
                            return null == e.sku || !(0, q.hasFlag)(e.sku.flags, I.SKUFlags.GUILD_PRODUCT)
                        }
                    }], this.handleExpandInfo = () => {
                        this.setState({
                            expanded: !this.state.expanded
                        })
                    }
                }
            }

            function e_(e) {
                var t, s, a;
                let {
                    payment: n,
                    locale: l,
                    compactMode: u,
                    className: o
                } = e, d = null != n.sku && el.includes(n.sku.type), c = null != n.sku && d ? n.sku.applicationId : null, f = null === (t = n.sku) || void 0 === t ? void 0 : t.applicationId, E = (null === (s = n.subscription) || void 0 === s ? void 0 : s.type) === et.SubscriptionTypes.APPLICATION, {
                    applicationStatistics: I,
                    gameApplication: _,
                    paymentSources: m
                } = (0, p.useStateFromStoresObject)([j.default, U.default, O.default], () => {
                    var e;
                    return {
                        applicationStatistics: null != c ? j.default.getCurrentUserStatisticsForApplication(c) : null,
                        gameApplication: null !== (a = U.default.getGame(null != c ? c : "")) && void 0 !== a ? a : null === (e = n.sku) || void 0 === e ? void 0 : e.application,
                        paymentSources: O.default.paymentSources
                    }
                }), N = (0, p.useStateFromStores)([S.default], () => null != f ? S.default.getApplication(f) : null);
                r.useEffect(() => {
                    E && null != f && (0, P.getApplication)(f)
                }, [f, E]);
                let R = (0, p.useStateFromStores)([v.default], () => v.default.getGuild(null == _ ? void 0 : _.guildId)),
                    T = d ? _ : void 0;
                return (0, i.jsx)(ep, {
                    applicationStatistics: I,
                    application: E ? N : T,
                    guild: R,
                    stickerPack: null,
                    paymentSources: m,
                    locale: l,
                    compactMode: u,
                    className: o,
                    payment: n
                })
            }
            ep.defaultProps = {
                compactMode: !1
            }
        },
        206343: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                userInRefundExperiment: function() {
                    return i
                }
            });
            var a = s("862205");
            let n = (0, a.createExperiment)({
                id: "2021-08_user_initiated_refunds",
                label: "User Initiated Refunds",
                kind: "user",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 0,
                    label: "Control",
                    config: {
                        enabled: !1
                    }
                }, {
                    id: 1,
                    label: "Can refund",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function i() {
                let {
                    enabled: e
                } = n.getCurrentConfig({
                    location: "70b634_1"
                }, {
                    autoTrackExposure: !1
                });
                return n.trackExposure({
                    location: "70b634_2"
                }), e
            }
        },
        681421: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("77078"),
                i = {
                    open: function(e, t) {
                        (0, n.openModalLazy)(async () => {
                            let {
                                default: n
                            } = await s.el("524252").then(s.bind(s, "524252"));
                            return s => (0, a.jsx)(n, {
                                payment: e,
                                paymentSource: t,
                                ...s
                            })
                        })
                    }
                }
        },
        858561: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                InvoicePdfAllowlistExperiment: function() {
                    return n
                }
            });
            var a = s("862205");
            let n = (0, a.createExperiment)({
                kind: "user",
                id: "2023-08_invoice_pdf_allowlist",
                label: "Invoice PDF download feature",
                defaultConfig: {
                    isUserEligibleForInvoicePdf: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enables users to download invoice PDF",
                    config: {
                        isUserEligibleForInvoicePdf: !0
                    }
                }]
            })
        },
        609190: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("77078"),
                i = s("681421"),
                r = s("858561"),
                l = s("843455"),
                u = s("782340"),
                o = s("852225");

            function d(e) {
                let {
                    payment: t
                } = e, {
                    isUserEligibleForInvoicePdf: s
                } = r.InvoicePdfAllowlistExperiment.useExperiment({
                    location: "allow_invoice_pdf_download"
                }, {
                    autoTrackExposure: !0
                }), d = s && null != t.paymentSource && t.status === l.PaymentStatusTypes.COMPLETED;
                return null == t.downloadableInvoice || "" === t.downloadableInvoice ? d ? (0, a.jsx)("div", {
                    className: o.downloadInvoice,
                    children: (0, a.jsx)(n.Anchor, {
                        onClick: () => {
                            var e, s;
                            e = t, s = t.paymentSource, i.default.open(e, s)
                        },
                        children: u.default.Messages.BILLING_DOWNLOAD_INVOICE
                    })
                }) : null : (0, a.jsxs)("div", {
                    className: o.downloadInvoice,
                    children: [(0, a.jsx)(n.Anchor, {
                        href: t.downloadableInvoice,
                        children: u.default.Messages.BILLING_DOWNLOAD_INVOICE_VAT
                    }), null != t.downloadableRefundInvoices ? t.downloadableRefundInvoices.map((e, t) => (0, a.jsx)(n.Anchor, {
                        className: o.downloadRefundInvoice,
                        href: e,
                        children: u.default.Messages.BILLING_DOWNLOAD_REFUND_INVOICE
                    }, t)) : null]
                })
            }
        },
        892843: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("77078"),
                i = s("695421");

            function r(e) {
                let {
                    children: t,
                    ...s
                } = e;
                return (0, a.jsx)(n.Button, {
                    ...s,
                    size: n.Button.Sizes.SMALL,
                    look: n.Button.Looks.INVERTED,
                    className: i.button,
                    children: t
                })
            }
        },
        58820: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                SubscriptionDetailsEmpty: function() {
                    return w
                },
                default: function() {
                    return Y
                }
            });
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
                I = s("79112"),
                p = s("812204"),
                _ = s("685665"),
                m = s("724038"),
                N = s("649844"),
                P = s("797647"),
                S = s("697218"),
                R = s("145131"),
                T = s("953109"),
                C = s("423487"),
                A = s("599110"),
                h = s("719923"),
                L = s("713518"),
                M = s("809071"),
                g = s("921149"),
                y = s("892843"),
                x = s("541554"),
                D = s("690679"),
                U = s("95637"),
                v = s("49111"),
                O = s("782340"),
                B = s("376121");

            function j(e) {
                let t, {
                        subscription: s,
                        renewalInvoicePreview: n,
                        fromStandaloneBillingPage: i = !0,
                        className: l
                    } = e,
                    o = (0, c.useStateFromStores)([S.default], () => {
                        let e = S.default.getCurrentUser();
                        return u(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e
                    });
                if (0 === (0, h.getNumPremiumGuildSubscriptions)(s.additionalPlans)) return null;
                let {
                    status: d
                } = s, f = (0, h.isPremiumGuildSubscriptionCanceled)(s);
                return t = f ? B.guildBoostingSubscriptionRowCanceled : (0, h.isSubscriptionStatusFailedPayment)(d) ? B.guildBoostingSubscriptionRowFailedPayment : B.guildBoostingSubscriptionRowActive, (0, a.jsxs)(a.Fragment, {
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
                                children: (0, h.getPremiumGuildHeaderDescription)({
                                    subscription: s,
                                    renewalInvoicePreview: n,
                                    user: o
                                })
                            })]
                        }), i && (0, a.jsx)(y.default, {
                            color: E.Button.Colors.BRAND,
                            onClick: () => I.default.open(v.UserSettingsSections.GUILD_BOOSTING),
                            children: O.default.Messages.PREMIUM_GUILD_PERKS_MODAL_MANAGE_YOUR_SUBSCRIPTIONS
                        })]
                    }), !i && (0, a.jsx)(E.Text, {
                        className: B.boostingDesktopAppBlurb,
                        variant: "text-sm/normal",
                        children: O.default.Messages.GUILD_BOOSTING_MANAGEMENT_OPEN_DESKTOP_APP.format({
                            openAppHook: () => (0, m.default)("app")
                        })
                    })]
                })
            }

            function b() {
                return n.useEffect(() => {
                    A.default.track(v.AnalyticEvents.TOOLTIP_VIEWED, {
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
                        children: O.default.Messages.MISSING_PAYMENT_METHOD_BANNER
                    })]
                })
            }

            function G() {
                return n.useEffect(() => {
                    A.default.track(v.AnalyticEvents.TOOLTIP_VIEWED, {
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
                        children: O.default.Messages.INVALID_PAYMENT_METHOD_BANNER
                    })]
                })
            }

            function F(e) {
                let {
                    daysPastDue: t,
                    subscription: s,
                    openInvoiceId: i
                } = e, {
                    analyticsLocations: r
                } = (0, _.default)(p.default.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
                return n.useEffect(() => {
                    A.default.track(v.AnalyticEvents.TOOLTIP_VIEWED, {
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
                        children: O.default.Messages.PREMIUM_SUBSCRIPTION_ONE_TIME_PAYMENT_PAST_DUE_SUBSCRIPTION_TEXT.format({
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
                        children: O.default.Messages.PREMIUM_SETTINGS_BILLING_INFO
                    }), (0, a.jsx)("div", {
                        children: h.default.getBillingInformationString(t, s)
                    })]
                })
            }

            function w(e) {
                let {
                    className: t
                } = e;
                return (0, a.jsxs)("div", {
                    className: t,
                    children: [(0, a.jsx)(E.FormTitle, {
                        className: B.sectionTitle,
                        tag: "h1",
                        children: O.default.Messages.USER_SETTINGS_SUBSCRIPTIONS_HEADER
                    }), (0, a.jsx)("p", {
                        className: B.sectionDescription,
                        children: O.default.Messages.BILLING_PAYMENT_PREMIUM_DESCRIPTION
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
                                children: O.default.Messages.USER_SETTINGS_NO_SUBSCRIPTIONS
                            })]
                        })
                    })]
                })
            }

            function Y(e) {
                var t;
                let s, {
                        subscription: n,
                        paymentSource: i,
                        busy: l,
                        className: u,
                        fromStandaloneBillingPage: o = !0,
                        analyticsLocation: f
                    } = e,
                    [I] = (0, M.useSubscriptionInvoicePreview)({
                        subscriptionId: n.id,
                        renewal: !0,
                        analyticsLocations: (0, _.default)(p.default.SUBSCRIPTION_DETAILS),
                        analyticsLocation: f
                    }),
                    [m] = (0, M.useSubscriptionInvoicePreview)({
                        subscriptionId: n.id,
                        renewal: !0,
                        applyEntitlements: !0,
                        analyticsLocations: (0, _.default)(p.default.SUBSCRIPTION_DETAILS),
                        analyticsLocation: f
                    }),
                    N = (0, c.useStateFromStores)([S.default], () => {
                        var e;
                        return null === (e = S.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasFreePremium()
                    }),
                    R = d(n.currentPeriodEnd),
                    T = null != n.paymentSourceId,
                    C = null !== (t = null == m ? void 0 : m.total) && void 0 !== t ? t : 0,
                    A = null == i ? void 0 : i.invalid,
                    h = !T && C > 0 && (7 >= R.diff(d(), "days") || n.status === v.SubscriptionStatusTypes.PAST_DUE) && !N && !n.isPurchasedExternally,
                    y = A && n.status === v.SubscriptionStatusTypes.PAST_DUE && !N && !n.isPurchasedExternally,
                    w = (0, g.useIsPrepaidPaymentPastDue)(),
                    Y = !N && w,
                    H = (null == n ? void 0 : n.status) === v.SubscriptionStatusTypes.PAST_DUE ? d().diff(d(n.currentPeriodStart), "days") : 0,
                    [V] = (0, M.useGetSubscriptionInvoice)({
                        subscriptionId: n.id,
                        preventFetch: !Y
                    });
                return null == I || null == m ? (0, a.jsx)(E.Spinner, {}) : (null != n.renewalMutations && (n.renewalMutations.planId !== n.planId && !(0, P.isNoneSubscription)(n.renewalMutations.planId) || n.hasExternalPlanChange) && (s = (0, a.jsx)(U.default, {
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
                            children: O.default.Messages.USER_SETTINGS_SUBSCRIPTIONS_HEADER
                        }),
                        children: [h ? (0, a.jsx)(b, {}) : null, y ? (0, a.jsx)(G, {}) : null, Y && null != V ? (0, a.jsx)(F, {
                            daysPastDue: H,
                            subscription: n,
                            openInvoiceId: V.id
                        }) : null, s, (0, a.jsxs)("div", {
                            className: B.subscriptionRows,
                            children: [(0, a.jsx)("p", {
                                className: B.sectionDescription,
                                children: O.default.Messages.BILLING_PAYMENT_PREMIUM_DESCRIPTION
                            }), (0, a.jsx)(x.default, {
                                subscription: n,
                                renewalInvoicePreview: I,
                                paymentSource: i,
                                busy: l,
                                analyticsLocation: f
                            }), (0, a.jsx)(j, {
                                subscription: n,
                                renewalInvoicePreview: I,
                                fromStandaloneBillingPage: o,
                                className: B.guildSubscriptionRow
                            })]
                        }), (0, a.jsx)("div", {
                            children: (0, a.jsx)(E.HeadingLevel, {
                                component: (0, a.jsx)(E.FormTitle, {
                                    tag: "h5",
                                    children: O.default.Messages.BILLING_STEP_PAYMENT
                                }),
                                children: (0, a.jsxs)("div", {
                                    className: B.details,
                                    children: [(0, a.jsx)(k, {
                                        subscription: n,
                                        renewalInvoicePreview: m,
                                        className: B.detailsBlock
                                    }), (0, a.jsxs)("div", {
                                        className: r(B.detailsBlock, {
                                            [B.redBorder]: y
                                        }),
                                        children: [(0, a.jsx)(E.FormTitle, {
                                            tag: "h3",
                                            className: B.detailBlockHeader,
                                            children: n.isPurchasedExternally && null != n.paymentGateway ? O.default.Messages.BILLING_MANAGED_BY_PAYMENT_GATEWAY.format({
                                                paymentGatewayName: v.PaymentGatewayToFriendlyName[n.paymentGateway]
                                            }) : O.default.Messages.BILLING_PAY_FOR_IT_WITH
                                        }), (0, a.jsx)(D.default, {
                                            subscription: n,
                                            onPaymentSourceAdded: L.fetchSubscriptionPlansOnNewPaymentSource,
                                            highlightAddPaymentMethodButton: h || y,
                                            analyticsLocation: f,
                                            currentInvoicePreview: I,
                                            dropdownClassName: B.paymentDropdown
                                        })]
                                    })]
                                })
                            })
                        })]
                    })
                }))
            }
        },
        541554: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                Tier1AccountCreditBanner: function() {
                    return y
                },
                default: function() {
                    return x
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("414456"),
                i = s.n(n),
                r = s("627445"),
                l = s.n(r),
                u = s("77078"),
                o = s("596523"),
                d = s("812204"),
                c = s("685665"),
                f = s("605250"),
                E = s("649844"),
                I = s("797647"),
                p = s("10514"),
                _ = s("563890"),
                m = s("270227"),
                N = s("719923"),
                P = s("713518"),
                S = s("892843"),
                R = s("646718"),
                T = s("49111"),
                C = s("782340"),
                A = s("224138");
            let h = new f.default("SubscriptionHeader.tsx"),
                L = {
                    page: T.AnalyticsPages.USER_SETTINGS,
                    section: T.AnalyticsSections.SETTINGS_PREMIUM,
                    object: T.AnalyticsObjects.CARD
                };

            function M(e) {
                let {
                    wordMark: t,
                    subscriptionInfo: s,
                    buttons: n,
                    statusClasses: r
                } = e;
                return (0, a.jsxs)("div", {
                    className: i(A.banner, r),
                    children: [(0, a.jsx)("div", {
                        className: A.bannerBackgroundImage
                    }), (0, a.jsxs)("div", {
                        className: A.detailsContainer,
                        children: [(0, a.jsx)("div", {
                            className: A.image
                        }), (0, a.jsxs)("div", {
                            className: A.details,
                            children: [t, s]
                        })]
                    }), (0, a.jsx)("div", {
                        className: A.buttons,
                        children: n
                    })]
                })
            }

            function g() {
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(m.default, {
                        className: A.discordWordmark,
                        "aria-label": C.default.Messages.PREMIUM_TIER_1
                    }), (0, a.jsx)("div", {
                        className: A.classicWordmark
                    })]
                })
            }

            function y() {
                let {
                    analyticsLocations: e
                } = (0, c.default)(d.default.ACCOUNT_CREDIT_BANNER);
                return (0, a.jsx)(M, {
                    wordMark: (0, a.jsx)(g, {}),
                    subscriptionInfo: (0, a.jsx)("div", {
                        className: A.planInfo,
                        children: C.default.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_BANNER_DESCRIPTION
                    }),
                    buttons: (0, a.jsx)(S.default, {
                        className: A.toolsButton,
                        onClick: () => (0, E.default)({
                            subscriptionTier: R.PremiumSubscriptionSKUs.TIER_1,
                            analyticsLocations: e,
                            analyticsObject: L
                        }),
                        children: C.default.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_BANNER_CTA
                    }),
                    statusClasses: {
                        [A.tier1]: !0
                    }
                })
            }
            var x = function(e) {
                var t;
                let {
                    subscription: n,
                    renewalInvoicePreview: r,
                    paymentSource: f,
                    busy: y,
                    analyticsLocation: x
                } = e, {
                    analyticsLocations: D
                } = (0, c.default)(d.default.SUBSCRIPTION_HEADER), U = () => {
                    (n.status === T.SubscriptionStatusTypes.ACTIVE || n.status === T.SubscriptionStatusTypes.PAST_DUE) && v()
                }, v = () => {
                    (0, u.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await s.el("21367").then(s.bind(s, "21367"));
                        return t => (0, a.jsx)(e, {
                            ...t,
                            premiumSubscription: n,
                            analyticsLocation: x,
                            analyticsLocations: D
                        })
                    })
                }, O = () => {
                    if (null != n && null != n.planIdFromItems) {
                        let e = p.default.get(n.planIdFromItems);
                        if (null == e) {
                            h.info("Plan not fetched for plan id: ".concat(n.planIdFromItems));
                            return
                        }
                        let t = (0, P.getCurrencies)(e, null == f ? void 0 : f.id, !1),
                            s = t.length > 0 ? t[0] : n.currency,
                            a = !1;
                        1 === t.length && (null == f ? void 0 : f.id) === n.paymentSourceId && (0, P.planHasCurrency)(e.id, s, null == f ? void 0 : f.id) && (a = !0), a ? o.resubscribe(n, D) : (0, E.default)({
                            initialPlanId: n.planIdFromItems,
                            analyticsLocations: D,
                            analyticsLocation: x,
                            analyticsObject: L
                        })
                    }
                }, B = N.default.getPlanIdFromInvoice(n, r);
                if ((0, I.isNoneSubscription)(B)) return null;
                let j = N.default.getStatusFromInvoice(n, r),
                    b = N.default.getPremiumType(B),
                    G = {
                        [A.tier0]: b === R.PremiumTypes.TIER_0,
                        [A.tier1]: b === R.PremiumTypes.TIER_1,
                        [A.tier2]: b === R.PremiumTypes.TIER_2,
                        [A.canceled]: j === T.SubscriptionStatusTypes.CANCELED,
                        [A.failedPayment]: (0, N.isSubscriptionStatusFailedPayment)(j)
                    },
                    F = null;
                switch (b) {
                    case R.PremiumTypes.TIER_0:
                        F = (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(m.default, {
                                className: A.discordWordmark,
                                "aria-label": C.default.Messages.PREMIUM_TIER_0
                            }), (0, a.jsx)("div", {
                                className: A.basicWordmark
                            })]
                        });
                        break;
                    case R.PremiumTypes.TIER_1:
                        F = (0, a.jsx)(g, {});
                        break;
                    case R.PremiumTypes.TIER_2:
                        F = (0, a.jsx)(_.default, {
                            className: A.planName,
                            "aria-label": C.default.Messages.PREMIUM_TITLE
                        })
                }
                return (0, a.jsx)(M, {
                    wordMark: F,
                    subscriptionInfo: (t = B, l(null != r, "Expected renewalInvoicePreview"), (0, a.jsx)("div", {
                        className: A.planInfo,
                        children: (0, N.getPlanDescriptionFromInvoice)({
                            planId: t,
                            subscription: n,
                            renewalInvoicePreview: r
                        })
                    })),
                    buttons: (() => {
                        let {
                            status: e
                        } = n;
                        if (n.isPurchasedExternally) {
                            let e = (0, N.getExternalSubscriptionMethodUrl)(n.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
                            return (0, a.jsx)(u.Anchor, {
                                href: e,
                                useDefaultUnderlineStyles: !1,
                                children: (0, a.jsx)(u.Button, {
                                    className: i(A.toolsButton, A.externalButton),
                                    size: u.Button.Sizes.SMALL,
                                    look: u.ButtonLooks.OUTLINED,
                                    color: u.ButtonColors.WHITE,
                                    submitting: y,
                                    children: C.default.Messages.BILLING_MANAGE_SUBSCRIPTION
                                })
                            })
                        }
                        if (N.default.isBaseSubscriptionCanceled(n)) return (0, a.jsx)(u.Button, {
                            className: A.toolsButton,
                            size: u.Button.Sizes.SMALL,
                            look: u.ButtonLooks.INVERTED,
                            color: u.ButtonColors.BRAND,
                            submitting: y,
                            onClick: O,
                            children: C.default.Messages.RESUBSCRIBE
                        });
                        if (e === T.SubscriptionStatusTypes.ACTIVE || e === T.SubscriptionStatusTypes.PAST_DUE) {
                            let t = !1,
                                s = null;
                            return null != n.renewalMutations && (t = !0, s = n.renewalMutations.planId !== n.planId ? C.default.Messages.PREMIUM_SWITCH_PLAN_DISABLED_PENDING_MUTATION_PLAN : C.default.Messages.PREMIUM_SWITCH_PLAN_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION), null != n.trialEndsAt && (t = !0, s = C.default.Messages.PREMIUM_SWITCH_PLAN_DISABLED_IN_TRIAL), e === T.SubscriptionStatusTypes.PAST_DUE && (t = !0), (0, a.jsxs)("div", {
                                className: A.toolsButtons,
                                children: [(0, a.jsx)(u.Button, {
                                    className: A.toolsButton,
                                    size: u.Button.Sizes.SMALL,
                                    look: u.ButtonLooks.LINK,
                                    color: u.ButtonColors.WHITE,
                                    submitting: y,
                                    onClick: U,
                                    children: C.default.Messages.CANCEL
                                }), (0, a.jsx)(u.Tooltip, {
                                    text: s,
                                    children: e => (0, a.jsx)(S.default, {
                                        ...e,
                                        disabled: t,
                                        className: A.toolsButton,
                                        onClick: () => {
                                            (0, E.default)({
                                                analyticsLocations: D,
                                                analyticsLocation: x,
                                                analyticsObject: L
                                            })
                                        },
                                        children: C.default.Messages.PREMIUM_SWITCH_PLANS
                                    })
                                })]
                            })
                        }
                    })(),
                    statusClasses: G
                })
            }
        },
        690679: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return g
                }
            });
            var a = s("37983"),
                n = s("884691"),
                i = s("414456"),
                r = s.n(i),
                l = s("627445"),
                u = s.n(l),
                o = s("446674"),
                d = s("77078"),
                c = s("112679"),
                f = s("596523"),
                E = s("335430"),
                I = s("740055"),
                p = s("685665"),
                _ = s("308592"),
                m = s("102985"),
                N = s("357957"),
                P = s("10514"),
                S = s("719923"),
                R = s("713518"),
                T = s("380186"),
                C = s("809071"),
                A = s("49111"),
                h = s("782340"),
                L = s("539735"),
                M = s("173791");

            function g(e) {
                let {
                    subscription: t,
                    onPaymentSourceAdded: i,
                    highlightAddPaymentMethodButton: l,
                    dropdownClassName: g,
                    analyticsLocation: x,
                    currentInvoicePreview: D
                } = e, U = (0, o.useStateFromStores)([m.default], () => m.default.hidePersonalInformation), [v, O] = (0, o.useStateFromStoresArray)([N.default], () => [N.default.paymentSources, N.default.hasFetchedPaymentSources]), B = (0, _.useSubscriptionPlansLoaded)((0, T.getSubscriptionSKUs)(t)), {
                    analyticsLocations: j
                } = (0, p.default)(), b = n.useMemo(() => Object.values(v).filter(e => !e.invalid), [v]), [G, F] = n.useState(!1), [k, w] = n.useState(t.currency), Y = async (e, s) => {
                    if (null == t) throw Error("missing subscription and paymentSource");
                    null == e ? await f.changeSubscriptionCurrency(t, s, j, x) : await f.changePaymentSource(t, e, s, j, x), F(!1), w(s)
                }, H = async (e, s, a) => {
                    F(!0);
                    let n = await (0, C.updateSubscriptionInvoicePreview)({
                        subscriptionId: t.id,
                        paymentSourceId: null == e ? void 0 : e.id,
                        renewal: !0,
                        currency: s,
                        analyticsLocations: j,
                        analyticsLocation: x
                    });
                    D.currency !== n.currency || D.currency === n.currency && D.total !== n.total ? await y(n, () => {
                        a(e, s)
                    }, () => {
                        F(!1)
                    }) : a(e, s)
                }, V = e => {
                    let s = P.default.get(t.planIdForCurrencies);
                    u(null != e, "paymentSource not specified for change"), u(null != s, "Unable to fetch plan");
                    let a = (0, R.getCurrencies)(s.id, e.id, !1),
                        n = a.length > 0 ? a[0] : A.CurrencyCodes.USD;
                    return n
                }, K = e => {
                    null != e && H(e, V(e), Y)
                }, W = e => {
                    (0, R.fetchSubscriptionPlansOnNewPaymentSource)(e.id, (0, T.getSubscriptionSKUs)(t)).then(() => {
                        H(e, V(e), Y)
                    }), "function" == typeof i && i(e.id)
                }, z = () => {
                    (0, d.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await s.el("960391").then(s.bind(s, "960391"));
                        return t => (0, a.jsx)(e, {
                            ...t,
                            onAddPaymentSource: W,
                            analyticsLocation: x
                        })
                    }, {
                        onCloseCallback: () => {
                            (0, c.clearError)()
                        },
                        onCloseRequest: A.NOOP
                    })
                };
                if (t.isPurchasedExternally) return (e => {
                    u(null != e.paymentGateway, "Expected payment gateway when managed externally");
                    let t = (0, S.getExternalSubscriptionMethodUrl)(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT");
                    return (0, a.jsx)(d.Anchor, {
                        href: t,
                        useDefaultUnderlineStyles: !1,
                        className: L.externalLink,
                        children: (0, a.jsx)(d.Button, {
                            fullWidth: !0,
                            look: d.Button.Looks.FILLED,
                            color: d.Button.Colors.PRIMARY,
                            children: h.default.Messages.BILLING_MANAGE_BILLING
                        })
                    })
                })(t);
                if (!O || !B) return (0, a.jsx)(d.Spinner, {});
                if (!(b.length > 0)) return (0, a.jsx)(d.Button, {
                    fullWidth: !0,
                    look: d.Button.Looks.FILLED,
                    color: l ? d.Button.Colors.BRAND : d.Button.Colors.PRIMARY,
                    onClick: z,
                    children: h.default.Messages.BILLING_ADD_PAYMENT_METHOD
                });
                else {
                    let e = P.default.get(t.planIdForCurrencies);
                    u(null != e, "Unable to fetch plan");
                    let s = (0, R.getCurrencies)(e, t.paymentSourceId, !1);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(() => {
                            let e = t.paymentSourceId;
                            return (0, a.jsx)(I.default, {
                                prependOption: null == e ? {
                                    label: h.default.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION,
                                    value: null
                                } : null,
                                className: g,
                                paymentSources: b,
                                hidePersonalInformation: U,
                                selectedPaymentSourceId: e,
                                onChange: K,
                                onPaymentSourceAdd: z,
                                dropdownLoading: G
                            })
                        })(), null != t.paymentSourceId ? (0, a.jsx)(E.CurrencyWrapper, {
                            currencies: s,
                            children: (0, a.jsxs)("div", {
                                className: r(L.currency, M.flex, M.alignCenter),
                                children: [(0, a.jsx)("div", {
                                    children: h.default.Messages.PAYMENT_CURRENCY_PAYING_IN
                                }), (0, a.jsx)(E.default, {
                                    className: L.currencyDropdown,
                                    selectedCurrency: k,
                                    currencies: s,
                                    onChange: e => {
                                        H(void 0, e, Y)
                                    }
                                })]
                            })
                        }) : null]
                    })
                }
            }
            let y = async (e, t, n) => {
                let i = await (0, d.openModalLazy)(async () => {
                    let {
                        default: i
                    } = await s.el("336811").then(s.bind(s, "336811"));
                    return s => (0, a.jsx)(i, {
                        newInvoice: e,
                        onConfirm: t,
                        onCancel: n,
                        modalProps: s
                    })
                }, {
                    onCloseRequest: () => {
                        null != i && (0, d.closeModal)(i), n()
                    }
                })
            }
        },
        95637: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return h
                }
            });
            var a = s("37983"),
                n = s("884691"),
                i = s("414456"),
                r = s.n(i),
                l = s("627445"),
                u = s.n(l),
                o = s("446674"),
                d = s("819855"),
                c = s("77078"),
                f = s("850068"),
                E = s("812204"),
                I = s("685665"),
                p = s("161778"),
                _ = s("797647"),
                m = s("10514"),
                N = s("145131"),
                P = s("423487"),
                S = s("719923"),
                R = s("153160"),
                T = s("782340"),
                C = s("733848");

            function A(e) {
                let {
                    subscription: t,
                    renewalMutations: s,
                    transitionState: n,
                    onClose: i,
                    analyticsLocation: r
                } = e, l = (0, o.useStateFromStores)([p.default], () => p.default.theme), {
                    analyticsLocations: P
                } = (0, I.default)(E.default.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL);
                async function A() {
                    await (0, f.upgradeSubscription)(t, t.planId, P, r), i()
                }
                let h = m.default.get(t.planId);
                u(null != h, "Missing subscriptionPlan");
                let L = (0, S.getPrice)(t.planId, !1, !1, {
                        paymentSourceId: t.paymentSourceId,
                        currency: t.currency
                    }),
                    M = (0, R.formatRate)((0, R.formatPrice)(L.amount, L.currency), h.interval, h.intervalCount);
                return (0, a.jsxs)(c.ModalRoot, {
                    transitionState: n,
                    "aria-label": T.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_HEADER,
                    children: [(0, a.jsxs)(c.ModalHeader, {
                        justify: N.default.Justify.BETWEEN,
                        separator: !1,
                        children: [(0, a.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H4,
                            children: T.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_HEADER
                        }), (0, a.jsx)(c.ModalCloseButton, {
                            onClick: i
                        })]
                    }), (0, a.jsx)(c.ModalContent, {
                        className: C.modalBody,
                        children: (0, _.isNoneSubscription)(t.planId) ? T.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BODY_NO_EXISTING_PLAN.format({
                            downgradedPlan: S.default.getDisplayName(s.planId),
                            existingRate: M
                        }) : T.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BODY.format({
                            existingPlan: S.default.getDisplayName(t.planId),
                            downgradedPlan: S.default.getDisplayName(s.planId),
                            existingRate: M
                        })
                    }), (0, a.jsxs)(c.ModalFooter, {
                        children: [(0, a.jsx)(c.Button, {
                            onClick: A,
                            children: T.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BUTTON
                        }), (0, a.jsx)(c.Button, {
                            look: c.Button.Looks.LINK,
                            color: (0, d.isThemeLight)(l) ? c.Button.Colors.PRIMARY : c.Button.Colors.WHITE,
                            onClick: i,
                            children: T.default.Messages.NEVERMIND
                        })]
                    })]
                })
            }

            function h(e) {
                let {
                    subscription: t,
                    renewalMutations: s,
                    className: i,
                    analyticsLocation: l
                } = e, [u, o] = n.useState(!1);
                return (0, a.jsxs)("div", {
                    className: r(C.root, i),
                    children: [(0, a.jsx)(P.default, {
                        className: C.infoIcon
                    }), (0, a.jsx)("div", {
                        className: C.text,
                        children: T.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_NOTICE.format({
                            planName: t.hasExternalPlanChange ? (0, S.getExternalPlanDisplayName)(s) : S.default.getDisplayName(s.planId),
                            date: t.currentPeriodEnd
                        })
                    }), t.isPurchasedExternally ? null : (0, a.jsx)(c.Anchor, {
                        onClick: e => {
                            o(!0), e.preventDefault()
                        },
                        className: C.cancelLink,
                        children: T.default.Messages.CANCEL
                    }), u ? (0, a.jsx)(c.Modal, {
                        renderModal: e => {
                            let {
                                transitionState: n
                            } = e;
                            return (0, a.jsx)(A, {
                                subscription: t,
                                renewalMutations: s,
                                transitionState: n,
                                onClose: () => o(!1),
                                analyticsLocation: l
                            })
                        },
                        onCloseRequest: () => o(!1)
                    }) : null]
                })
            }
        },
        387225: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                }
            });
            var a = s("37983"),
                n = s("884691"),
                i = s("627445"),
                r = s.n(i),
                l = s("446674"),
                u = s("77078"),
                o = s("437822"),
                d = s("135230"),
                c = s("697218"),
                f = s("782340");
            class E extends n.Component {
                render() {
                    let {
                        color: e,
                        look: t,
                        size: s
                    } = this.props;
                    return (0, a.jsx)(u.Button, {
                        look: t,
                        size: s,
                        color: e,
                        disabled: this.state.isSendingVerificationEmail,
                        onClick: this.handleResendVerification,
                        children: f.default.Messages.RESEND_VERIFICATION_EMAIL
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        isSendingVerificationEmail: !1
                    }, this.handleResendVerification = () => {
                        let {
                            currentUser: e,
                            onClick: t
                        } = this.props;
                        null == t || t(), this.setState({
                            isSendingVerificationEmail: !0
                        }, () => {
                            o.default.verifyResend().then(() => (0, u.openModal)(t => (0, a.jsx)(u.ConfirmModal, {
                                header: f.default.Messages.VERIFICATION_EMAIL_TITLE,
                                confirmText: f.default.Messages.OKAY,
                                confirmButtonColor: u.Button.Colors.BRAND,
                                ...t,
                                children: (0, a.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    children: f.default.Messages.VERIFICATION_EMAIL_BODY.format({
                                        email: e.email
                                    })
                                })
                            }))).catch(e => {
                                let {
                                    body: t
                                } = e, s = f.default.Messages.VERIFICATION_EMAIL_ERROR_BODY;
                                null != t && t.email && (s = t.email), (0, u.openModal)(e => (0, a.jsx)(d.default, {
                                    title: f.default.Messages.VERIFICATION_EMAIL_ERROR_TITLE,
                                    body: s,
                                    ...e
                                }))
                            }).then(() => this.setState({
                                isSendingVerificationEmail: !1
                            }))
                        })
                    }
                }
            }
            E.defaultProps = {
                size: u.Button.Sizes.MEDIUM,
                color: u.Button.Colors.BRAND
            };
            var I = l.default.connectStores([c.default], () => {
                let e = c.default.getCurrentUser();
                return r(null != e, "ResendEmailVerificationButton: currentUser cannot be undefined"), {
                    currentUser: e
                }
            })(E)
        },
        8966: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            });
            var a, n, i = s("199108"),
                r = s("666038"),
                l = s("568734"),
                u = s("865146"),
                o = s("137406"),
                d = s("388290"),
                c = s("49111"),
                f = s("646718");
            (a = n || (n = {}))[a.GIFT = 1] = "GIFT", a[a.PREORDER = 8] = "PREORDER";
            class E extends r.default {
                static createFromServer(e) {
                    let t = null != e.payment_source ? u.default.createFromServer(e.payment_source) : null,
                        s = null != e.sku ? o.default.createFromServer(e.sku) : null,
                        a = null != e.subscription ? d.default.createFromServer(e.subscription) : null;
                    return new E({
                        id: e.id,
                        createdAt: new Date(e.created_at),
                        currency: e.currency,
                        tax: e.tax,
                        taxInclusive: e.tax_inclusive,
                        amount: e.amount,
                        amountRefunded: e.amount_refunded,
                        status: e.status,
                        metadata: e.metadata,
                        description: e.description,
                        paymentSource: t,
                        paymentGateway: e.payment_gateway,
                        paymentGatewayPaymentId: e.payment_gateway_payment_id,
                        flags: e.flags,
                        subscription: a,
                        skuId: e.sku_id,
                        skuPrice: e.sku_price,
                        sku: s,
                        downloadableInvoice: e.downloadable_invoice,
                        downloadableRefundInvoices: e.downloadable_refund_invoices,
                        premiumRefundDisqualificationReasons: e.premium_refund_disqualification_reasons
                    })
                }
                get isPurchasedViaApple() {
                    return this.paymentGateway === c.PaymentGateways.APPLE
                }
                get isPurchasedViaGoogle() {
                    return this.paymentGateway === c.PaymentGateways.GOOGLE
                }
                get isPurchasedExternally() {
                    return this.isPurchasedViaApple || this.isPurchasedViaGoogle
                }
                get isSubscription() {
                    return null != this.subscription
                }
                get isPremiumSubscription() {
                    return null != this.subscription && f.PREMIUM_PLANS.has(this.subscription.planId)
                }
                get isPremiumGuildSubscription() {
                    return null != this.subscription && null != this.subscription.additionalPlans.find(e => {
                        let {
                            planId: t
                        } = e;
                        return f.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t)
                    })
                }
                get isGift() {
                    return l.hasFlag(this.flags, n.GIFT)
                }
                get isPremiumGift() {
                    return this.isGift && Object.values(f.PremiumSubscriptionSKUs).includes(this.skuId)
                }
                get isPreorder() {
                    return l.hasFlag(this.flags, n.PREORDER)
                }
                get isGuildProductPurchase() {
                    return null != this.sku && (this.sku.productLine === c.SKUProductLines.GUILD_PRODUCT || l.hasFlag(this.sku.flags, i.SKUFlags.GUILD_PRODUCT))
                }
                get isSoftDeletedProduct() {
                    var e;
                    return (null === (e = this.sku) || void 0 === e ? void 0 : e.deleted) === !0
                }
                constructor(e) {
                    super(), this.id = e.id, this.amount = e.amount, this.amountRefunded = e.amountRefunded, this.createdAt = e.createdAt, this.currency = e.currency, this.description = e.description, this.paymentSource = e.paymentSource, this.status = e.status, this.tax = e.tax, this.taxInclusive = e.taxInclusive, this.subscription = e.subscription, this.skuId = e.skuId, this.skuPrice = e.skuPrice, this.sku = e.sku, this.flags = e.flags, this.downloadableInvoice = e.downloadableInvoice, this.downloadableRefundInvoices = e.downloadableRefundInvoices, this.premiumRefundDisqualificationReasons = e.premiumRefundDisqualificationReasons
                }
            }
        },
        386876: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var a = s("446674"),
                n = s("913144"),
                i = s("8966");
            let r = [];

            function l(e) {
                let {
                    payment: t
                } = e, s = i.default.createFromServer(t), a = r.findIndex(e => e.id === t.id); - 1 === a ? (r.push(s), r.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime())) : r[a] = s, r = [...r]
            }
            class u extends a.default.Store {
                getPayment(e) {
                    return r.find(t => t.id === e)
                }
                getPayments() {
                    return r
                }
            }
            u.displayName = "PaymentStore";
            var o = new u(n.default, {
                BILLING_PAYMENTS_FETCH_SUCCESS: function(e) {
                    let {
                        payments: t
                    } = e;
                    for (let e of t) {
                        let t = i.default.createFromServer(e),
                            s = r.findIndex(t => t.id === e.id); - 1 !== s ? r[s] = t : r.push(t)
                    }
                    r.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime()), r = [...r]
                },
                PAYMENT_UPDATE: l,
                BILLING_PAYMENT_FETCH_SUCCESS: l,
                LOGOUT: function() {
                    r = []
                }
            })
        },
        251752: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return f
                }
            });
            var a = s("37983"),
                n = s("884691"),
                i = s("414456"),
                r = s.n(i),
                l = s("77078"),
                u = s("980428"),
                o = s("772280"),
                d = s("782340"),
                c = s("911545"),
                f = n.forwardRef(function(e, t) {
                    let {
                        currentPageIndex: s,
                        numPages: n,
                        onChangePage: i,
                        children: f,
                        className: E,
                        showPageCount: I = !0,
                        ...p
                    } = e, _ = s <= 0, m = s >= n - 1;
                    return (0, a.jsxs)("div", {
                        className: r(c.paginator, E),
                        ref: t,
                        ...p,
                        children: [f, (0, a.jsxs)("div", {
                            className: c.pageActions,
                            children: [(0, a.jsx)(l.Clickable, {
                                className: r(c.pageButtonPrev, {
                                    [c.disabled]: _
                                }),
                                tabIndex: _ ? -1 : 0,
                                onClick: _ ? void 0 : () => i(s - 1),
                                children: (0, a.jsx)(u.default, {
                                    className: c.pageButtonIcon,
                                    "aria-label": d.default.Messages.PAGINATION_PREVIOUS
                                })
                            }), I ? (0, a.jsx)("div", {
                                className: c.pageIndicator,
                                children: d.default.Messages.PAGINATOR_OF_PAGES.format({
                                    currentPage: s + 1,
                                    numPages: n
                                })
                            }) : (0, a.jsx)("div", {
                                className: c.pageIndicator,
                                children: d.default.Messages.PAGINATOR_CURRENT_PAGE.format({
                                    currentPage: s + 1
                                })
                            }), (0, a.jsx)(l.Clickable, {
                                className: r(c.pageButtonNext, {
                                    [c.disabled]: m
                                }),
                                tabIndex: m ? -1 : 0,
                                onClick: m ? void 0 : () => i(s + 1),
                                children: (0, a.jsx)(o.default, {
                                    className: c.pageButtonIcon,
                                    "aria-label": d.default.Messages.PAGINATION_NEXT
                                })
                            })]
                        })]
                    })
                })
        },
        563890: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("75196");

            function i(e) {
                let {
                    width: t = 106,
                    height: s = 43,
                    color: i = "currentColor",
                    foreground: r,
                    ...l
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, n.default)(l),
                    width: t,
                    height: s,
                    viewBox: "0 0 106 43",
                    children: (0, a.jsxs)("g", {
                        fill: i,
                        className: r,
                        fillRule: "evenodd",
                        "aria-hidden": !0,
                        children: [(0, a.jsx)("path", {
                            d: "M96.4373 17.6233H83.2985C82.9632 17.6233 82.6698 17.8748 82.6279 18.21L81.9992 22.5687C81.9364 22.9669 82.2507 23.3441 82.6698 23.3441H85.0796C85.3311 23.3441 85.4778 23.5955 85.394 23.8051C85.1006 24.4966 84.8701 25.2719 84.7653 26.0892L83.5499 34.5341C82.7536 40.192 87.4476 43 92.5816 43C97.9461 43 103.227 40.171 104.023 34.5341L105.239 26.0892C105.993 20.557 101.446 17.749 96.4373 17.6233ZM98.952 26.1101L97.7366 34.3665C97.4641 36.3153 95.2638 37.2164 93.2312 37.2164C91.3452 37.2164 89.5012 36.3153 89.7526 34.5341L90.968 26.0892C91.2405 24.2451 93.4408 23.3021 95.4734 23.3021C97.5061 23.3021 99.2453 24.2451 98.952 26.1101Z"
                        }), (0, a.jsx)("path", {
                            d: "M23.5344 17.6233H18.6309C18.2956 17.6233 18.0023 17.8748 17.9603 18.21L16.4516 28.96V28.981L16.5144 33.1301C16.5144 33.2139 16.4516 33.2978 16.3678 33.3187L14.9638 28.3104V28.2895L10.5841 18.0424C10.4794 17.7909 10.2279 17.6233 9.95547 17.6233H4.9891C4.65382 17.6233 4.36044 17.8748 4.31853 18.21L1.00762 41.8894C0.944753 42.3085 1.28004 42.6647 1.67818 42.6647H6.6236C6.95889 42.6647 7.25226 42.4133 7.29417 42.078L8.59339 32.6691V32.6481L8.53052 27.8285L8.67721 27.7865L10.165 32.7948V32.8158L14.2513 42.2666C14.3561 42.518 14.6075 42.6857 14.8799 42.6857H20.2445C20.5797 42.6857 20.8731 42.4342 20.915 42.0989L24.2259 18.4196C24.2888 18.0005 23.9535 17.6233 23.5344 17.6233Z"
                        }), (0, a.jsx)("path", {
                            d: "M34.2634 17.6233H29.318C28.9827 17.6233 28.6893 17.8748 28.6474 18.21L25.3365 41.8684C25.2736 42.2875 25.6089 42.6438 26.007 42.6438H30.9525C31.2877 42.6438 31.5811 42.3923 31.623 42.057L34.9339 18.3986C34.9968 18.0005 34.6825 17.6233 34.2634 17.6233Z"
                        }), (0, a.jsx)("path", {
                            d: "M57.4608 17.6233H38.9573C38.6221 17.6233 38.3287 17.8748 38.2868 18.21L37.6372 22.6316C37.5743 23.0507 37.8886 23.4069 38.3077 23.4069H43.4837C43.9028 23.4069 44.2171 23.7632 44.1542 24.1823L41.7234 41.8684C41.6606 42.2875 41.9958 42.6438 42.394 42.6438H47.4023C47.7376 42.6438 48.0309 42.3923 48.0728 42.057L50.5665 23.9937C50.6084 23.6584 50.9018 23.4069 51.2371 23.4069H56.7902C57.1255 23.4069 57.4188 23.1555 57.4608 22.8202L58.1104 18.3986C58.2151 18.0005 57.8799 17.6233 57.4608 17.6233Z"
                        }), (0, a.jsx)("path", {
                            d: "M71.6056 17.6233H62.1967C61.8615 17.6233 61.5681 17.8748 61.5262 18.21L58.2153 41.8684C58.1524 42.2875 58.4877 42.6438 58.8858 42.6438H63.8941C64.2294 42.6438 64.5228 42.3923 64.5647 42.057L65.5286 34.9951C65.5496 34.8275 65.6963 34.7018 65.8639 34.7018H66.5135C66.6392 34.7018 66.744 34.7646 66.8069 34.8694L71.5847 42.3504C71.7104 42.539 71.9199 42.6647 72.1714 42.6647H78.3741C78.919 42.6647 79.2542 42.0361 78.9399 41.596L73.9107 34.4084C73.7849 34.2407 73.8478 33.9893 74.0364 33.9055C77.2425 32.3338 79.1076 30.7412 79.7153 26.2568C80.4277 20.3894 76.7606 17.6233 71.6056 17.6233ZM73.3239 26.3616C73.1563 27.8075 72.0247 29.2534 70.0759 29.2534H67.1631C66.744 29.2534 66.4297 28.8762 66.4925 28.4781L67.1212 24.1194C67.1631 23.7841 67.4565 23.5326 67.7918 23.5326H70.9141C72.7581 23.5326 73.5125 24.8528 73.3239 26.3616Z"
                        }), (0, a.jsx)("path", {
                            d: "M23.3458 2.64035H26.9082C27.7674 2.64035 28.5008 2.76608 29.0875 3.0385C29.6324 3.26901 30.0934 3.66715 30.4287 4.17008C30.722 4.673 30.8897 5.23879 30.8687 5.80458C30.8687 6.39132 30.722 6.95711 30.4077 7.46004C30.0724 7.98392 29.5695 8.38207 29.0037 8.63353C28.3751 8.9269 27.5788 9.07359 26.6567 9.07359H23.3458V2.64035V2.64035ZM26.6358 7.41813C27.2225 7.41813 27.6626 7.27144 27.9769 6.97807C28.2912 6.66374 28.4589 6.24464 28.4379 5.78363C28.4589 5.36452 28.3122 4.96637 28.0188 4.673C27.7464 4.40058 27.3273 4.2539 26.7615 4.2539H25.6509V7.39717H26.6358V7.41813Z"
                        }), (0, a.jsx)("path", {
                            d: "M36.2331 9.05262C35.7721 8.92689 35.3111 8.7383 34.892 8.48683V6.95711C35.2482 7.22952 35.6673 7.41812 36.0864 7.5229C36.5684 7.66958 37.0504 7.73245 37.5533 7.7534C37.7209 7.7534 37.8886 7.73245 38.0562 7.66958C38.161 7.60672 38.2238 7.54385 38.2238 7.46003C38.2238 7.37621 38.2029 7.29239 38.14 7.22952C38.0352 7.1457 37.9095 7.10379 37.7838 7.08284L36.6941 6.83137C36.0655 6.68469 35.6254 6.47514 35.353 6.22368C35.0806 5.95126 34.9339 5.57407 34.9548 5.19687C34.9548 4.86159 35.0806 4.52631 35.3111 4.27484C35.5835 3.98147 35.9188 3.77192 36.296 3.66714C36.7779 3.52046 37.2809 3.43664 37.8047 3.45759C38.2867 3.45759 38.7477 3.4995 39.2087 3.62523C39.5859 3.70906 39.9422 3.85574 40.2774 4.04434V5.49024C39.9631 5.30165 39.6278 5.17592 39.2926 5.0921C38.9154 4.98732 38.5172 4.94541 38.14 4.94541C37.5742 4.94541 37.2809 5.05019 37.2809 5.23878C37.2809 5.3226 37.3228 5.40642 37.4066 5.44833C37.5533 5.5112 37.7209 5.55311 37.8886 5.59502L38.8106 5.76266C39.3973 5.86744 39.8583 6.05603 40.1517 6.3075C40.4451 6.55896 40.5918 6.95711 40.5918 7.46003C40.5918 8.00486 40.3194 8.50779 39.8583 8.78021C39.3764 9.09453 38.6849 9.26218 37.7838 9.26218C37.2599 9.24122 36.736 9.17835 36.2331 9.05262Z"
                        }), (0, a.jsx)("path", {
                            d: "M42.7294 8.86404C42.2475 8.63353 41.8284 8.2773 41.535 7.81628C41.2626 7.37622 41.1368 6.85234 41.1368 6.32847C41.1368 5.80459 41.2626 5.30166 41.5559 4.8616C41.8493 4.40059 42.2684 4.06531 42.7713 3.8348C43.379 3.58334 44.0287 3.43665 44.6783 3.45761C45.6003 3.45761 46.3547 3.6462 46.9624 4.04435V5.72077C46.7319 5.57408 46.4804 5.44835 46.208 5.36453C45.9146 5.28071 45.6003 5.21784 45.286 5.21784C44.7202 5.21784 44.2801 5.32262 43.9448 5.53217C43.4838 5.78363 43.3371 6.34942 43.5886 6.81043C43.6724 6.95712 43.7981 7.08285 43.9448 7.16667C44.2592 7.37622 44.6992 7.481 45.3069 7.481C45.6212 7.481 45.9146 7.43909 46.208 7.35527C46.4804 7.27145 46.7319 7.16667 46.9624 7.01999V8.63353C46.2499 9.05264 45.4536 9.26219 44.6364 9.24123C43.9867 9.26219 43.3162 9.13646 42.7294 8.86404Z"
                        }), (0, a.jsx)("path", {
                            d: "M49.2463 8.86402C48.7434 8.63352 48.3243 8.27728 48.0309 7.81627C47.7585 7.37621 47.6118 6.85233 47.6118 6.32845C47.6118 5.80457 47.7375 5.30165 48.0309 4.86159C48.3243 4.42153 48.7434 4.06529 49.2463 3.85574C50.4408 3.37377 51.8028 3.37377 52.9973 3.85574C53.4793 4.06529 53.8984 4.42153 54.1917 4.86159C54.4641 5.30165 54.6108 5.82552 54.6108 6.32845C54.6108 6.85233 54.4641 7.37621 54.1917 7.81627C53.8984 8.27728 53.4793 8.63352 52.9973 8.86402C51.7819 9.36695 50.4408 9.36695 49.2463 8.86402ZM52.0124 7.22952C52.2429 6.99901 52.3686 6.66373 52.3477 6.3494C52.3686 6.01412 52.2429 5.69979 52.0124 5.46929C51.7609 5.23878 51.4257 5.134 51.0904 5.134C50.7551 5.11305 50.4198 5.23878 50.1683 5.46929C49.9378 5.69979 49.8121 6.01412 49.8331 6.3494C49.8121 6.68469 49.9378 6.99901 50.1683 7.22952C50.4198 7.46003 50.7551 7.58576 51.0904 7.5648C51.4466 7.58576 51.7819 7.46003 52.0124 7.22952Z"
                        }), (0, a.jsx)("path", {
                            d: "M60.1012 3.79287V5.78361C59.8288 5.61597 59.5145 5.53215 59.2002 5.55311C58.7182 5.55311 58.341 5.69979 58.0686 5.99316C57.8171 6.28654 57.6704 6.74755 57.6704 7.3762V9.05262H55.4282V3.6881H57.6285V5.38546C57.7543 4.75681 57.9429 4.2958 58.2153 4.00242C58.4877 3.70905 58.8649 3.54141 59.263 3.56237C59.5564 3.56237 59.8498 3.64619 60.1012 3.79287Z"
                        }), (0, a.jsx)("path", {
                            d: "M67.5613 2.45178V9.05266H65.3191V7.85821C65.1514 8.27732 64.8371 8.65451 64.4599 8.88502C64.0199 9.13648 63.5379 9.26221 63.035 9.24126C62.5739 9.26221 62.1129 9.11552 61.7148 8.86406C61.3376 8.6126 61.0233 8.25636 60.8347 7.83726C60.6251 7.37625 60.5203 6.87332 60.5203 6.3704C60.4994 5.84652 60.6251 5.32264 60.8347 4.86163C61.0442 4.42157 61.3795 4.06533 61.7776 3.81387C62.1968 3.56241 62.6787 3.43667 63.1607 3.43667C64.2294 3.43667 64.9419 3.89769 65.3191 4.81972V2.45178H67.5613ZM64.9838 7.18765C65.2143 6.95714 65.34 6.64282 65.3191 6.32849C65.3191 6.01416 65.1933 5.69983 64.9838 5.49028C64.4599 5.05022 63.7055 5.05022 63.1607 5.49028C62.9302 5.72079 62.8045 6.01416 62.8254 6.32849C62.8045 6.64282 62.9302 6.95714 63.1607 7.18765C63.4121 7.41816 63.7265 7.52293 64.0618 7.52293C64.418 7.54389 64.7323 7.41816 64.9838 7.18765Z"
                        }), (0, a.jsx)("path", {
                            d: "M15.0895 1.04776C13.9999 0.565789 12.8473 0.209552 11.6529 0C11.4853 0.293372 11.3386 0.586745 11.2128 0.901072C9.95553 0.712476 8.65631 0.712476 7.399 0.901072C7.27327 0.586745 7.12659 0.293372 6.95894 0C5.78546 0.209552 4.63292 0.565789 3.5223 1.06871C1.36391 4.27485 0.77717 7.39717 1.07054 10.4985C2.34881 11.4415 3.77376 12.154 5.28253 12.615C5.61781 12.154 5.93214 11.672 6.1836 11.1691C5.70163 10.9805 5.21967 10.75 4.75865 10.4985C4.88438 10.4147 4.98916 10.3309 5.11489 10.2471C7.7762 11.5044 10.8566 11.5044 13.5389 10.2471C13.6436 10.3309 13.7694 10.4357 13.8951 10.4985C13.4341 10.771 12.9731 11.0015 12.4702 11.1691C12.7216 11.672 13.0359 12.154 13.3712 12.615C14.88 12.154 16.3049 11.4415 17.5832 10.4985C17.9185 6.9152 16.9755 3.81384 15.0895 1.04776ZM6.53984 8.59162C5.72259 8.59162 5.03107 7.83723 5.03107 6.93616C5.03107 6.03509 5.68068 5.25975 6.51889 5.25975C7.35709 5.25975 8.02766 6.01413 8.02766 6.93616C8.02766 7.85819 7.37805 8.59162 6.53984 8.59162ZM12.072 8.59162C11.2548 8.59162 10.5842 7.83723 10.5842 6.93616C10.5842 6.03509 11.2338 5.25975 12.072 5.25975C12.9102 5.25975 13.5808 6.01413 13.5598 6.93616C13.5598 7.85819 12.9102 8.59162 12.072 8.59162Z"
                        }), (0, a.jsx)("path", {
                            d: "M32.7757 4.27485C33.389 4.27485 33.8863 3.82452 33.8863 3.269C33.8863 2.71349 33.389 2.26315 32.7757 2.26315C32.1623 2.26315 31.665 2.71349 31.665 3.269C31.665 3.82452 32.1623 4.27485 32.7757 4.27485Z"
                        }), (0, a.jsx)("path", {
                            d: "M31.665 4.9664C32.3775 5.25977 33.1948 5.25977 33.9072 4.9664V9.09457H31.665V4.9664Z"
                        })]
                    })
                })
            }
        },
        199108: function(e, t, s) {
            "use strict";
            var a, n;
            s.r(t), s.d(t, {
                SKUFlags: function() {
                    return a
                }
            }), (n = a || (a = {}))[n.PREMIUM_PURCHASE = 1] = "PREMIUM_PURCHASE", n[n.HAS_FREE_PREMIUM_CONTENT = 2] = "HAS_FREE_PREMIUM_CONTENT", n[n.AVAILABLE = 4] = "AVAILABLE", n[n.PREMIUM_AND_DISTRIBUTION = 8] = "PREMIUM_AND_DISTRIBUTION", n[n.STICKER = 16] = "STICKER", n[n.GUILD_ROLE = 32] = "GUILD_ROLE", n[n.AVAILABLE_FOR_SUBSCRIPTION_GIFTING = 64] = "AVAILABLE_FOR_SUBSCRIPTION_GIFTING", n[n.APPLICATION_GUILD_SUBSCRIPTION = 128] = "APPLICATION_GUILD_SUBSCRIPTION", n[n.APPLICATION_USER_SUBSCRIPTION = 256] = "APPLICATION_USER_SUBSCRIPTION", n[n.CREATOR_MONETIZATION = 512] = "CREATOR_MONETIZATION", n[n.GUILD_PRODUCT = 1024] = "GUILD_PRODUCT", n[n.USER_UPDATE_MASK = 0] = "USER_UPDATE_MASK", n[n.STAFF_CREATE_SUBSCRIPTION_GROUP_LISTING_MASK = 384] = "STAFF_CREATE_SUBSCRIPTION_GROUP_LISTING_MASK"
        }
    }
]);
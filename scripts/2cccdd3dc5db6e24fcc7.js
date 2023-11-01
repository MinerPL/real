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
                    return I
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
                p = s("782340"),
                m = s("584565");
            class I extends n.PureComponent {
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
                    return e instanceof o.CreditCardSourceRecord ? p.default.Messages.PAYMENT_SOURCE_CARD_ENDING.format({
                        brand: (0, E.upperCaseFirstChar)(e.brand),
                        last_4: e.last4
                    }) : e instanceof o.PaypalSourceRecord ? p.default.Messages.PAYMENT_SOURCE_PAYPAL : e instanceof o.SofortSourceRecord ? p.default.Messages.PAYMENT_SOURCE_SOFORT : e instanceof o.GiropaySourceRecord ? p.default.Messages.PAYMENT_SOURCE_GIROPAY : e instanceof o.Przelewy24SourceRecord ? p.default.Messages.PAYMENT_SOURCE_PRZELEWY24 : e instanceof o.PaysafeSourceRecord ? p.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD : e instanceof o.GcashSourceRecord ? p.default.Messages.PAYMENT_SOURCE_GCASH : e instanceof o.GrabPayMySourceRecord ? p.default.Messages.PAYMENT_SOURCE_GRABPAY : e instanceof o.MomoWalletSourceRecord ? p.default.Messages.PAYMENT_SOURCE_MOMO_WALLET : e instanceof o.VenmoSourceRecord ? p.default.Messages.PAYMENT_SOURCE_VENMO : e instanceof o.KaKaoPaySourceRecord ? p.default.Messages.PAYMENT_SOURCE_KAKAOPAY : e instanceof o.GoPayWalletSourceRecord ? p.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET : e instanceof o.BancontactSourceRecord ? p.default.Messages.PAYMENT_SOURCE_BANCONTACT : e instanceof o.IdealSourceRecord ? p.default.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({
                        bank: (0, u.getIdealBankDisplayNameFromBankName)(e.bank)
                    }) : e instanceof o.EPSSourceRecord ? p.default.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({
                        bank: (0, u.getEPSBankDisplayNameFromBankName)(e.bank)
                    }) : e instanceof o.CashAppSourceRecord ? p.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY : p.default.Messages.PAYMENT_SOURCE_UNKNOWN
                }
                renderDescription() {
                    let {
                        paymentSource: e,
                        descriptionClassName: t
                    } = this.props;
                    return (0, a.jsx)(l.Text, {
                        className: r(m.description, t),
                        variant: "text-md/semibold",
                        children: this.getLabel(e)
                    })
                }
                renderSubText() {
                    let {
                        paymentSource: e,
                        locale: t
                    } = this.props, s = null;
                    return e instanceof o.CreditCardSourceRecord ? s = p.default.Messages.PAYMENT_SOURCE_CARD_EXPIRES.format({
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
                            className: m.descriptionWrapper,
                            children: [(0, a.jsxs)(d.default, {
                                align: d.default.Align.CENTER,
                                children: [this.renderDescription(), e ? (0, a.jsx)("div", {
                                    className: m.defaultIndicator,
                                    children: p.default.Messages.DEFAULT
                                }) : null, n ? (0, a.jsx)("div", {
                                    className: m.premiumIndicator,
                                    children: p.default.Messages.PAYMENT_SOURCE_SUBSCRIPTION
                                }) : null, t.invalid ? (0, a.jsx)("div", {
                                    className: m.invalidIndicator,
                                    children: p.default.Messages.PAYMENT_SOURCE_INVALID
                                }) : null]
                            }), s && null != i ? (0, a.jsx)("div", {
                                className: m.subText,
                                children: i
                            }) : null]
                        })]
                    })
                }
            }
            I.defaultProps = {
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
                p = s("444949"),
                m = s("775433"),
                I = s("510889"),
                _ = s("386876"),
                N = s("10514"),
                P = s("521012"),
                S = s("145131"),
                R = s("251752"),
                T = s("719923"),
                A = s("942456"),
                h = s("646718"),
                L = s("843455"),
                g = s("782340"),
                y = s("116523"),
                M = s("852225");

            function D(e) {
                let {
                    payments: t,
                    locale: s,
                    compactMode: i,
                    numPages: l
                } = e, u = n.useRef(null), [d, f] = n.useState(0), [p, m] = n.useState(null), _ = t.slice(10 * d, (d + 1) * 10);
                n.useEffect(() => {
                    var e;
                    null === (e = u.current) || void 0 === e || e.scrollTo({
                        to: 0
                    })
                }, [d]);
                let N = n.useCallback(e => {
                        f(e);
                        let s = t[t.length - 1].id;
                        e === l - 1 && p !== s && ((0, E.fetchPayments)(10, s), m(s))
                    }, [t, l, p]),
                    P = (0, I.default)("billing-history", u);
                return (0, a.jsx)(o.ListNavigatorProvider, {
                    navigator: P,
                    children: (0, a.jsx)(o.ListNavigatorContainer, {
                        children: e => {
                            let {
                                ref: t,
                                ...n
                            } = e;
                            return (0, a.jsx)(R.default, {
                                className: r(y.verticalFit, y.paginator),
                                currentPageIndex: d,
                                onChangePage: N,
                                numPages: l,
                                ref: t,
                                ...n,
                                children: (0, a.jsx)(c.AdvancedScroller, {
                                    className: y.bottomDivider,
                                    ref: u,
                                    children: _.map((e, t) => (0, a.jsx)(A.default, {
                                        className: r(y.paymentRow, y.bottomDivider),
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
                        (0, p.fetchActivityStatistics)(), (0, E.fetchPayments)(20)
                    })
                }
                renderPremiumExternalSubscription(e) {
                    return u(null != e.paymentGateway, "Expected payment gateway when rendering for external subscription"), (0, a.jsxs)(c.Card, {
                        className: y.externalRow,
                        children: [(0, a.jsx)("div", {
                            className: y.externalRowHeader,
                            children: g.default.Messages.BILLING_EXTERNAL_HEADER.format({
                                paymentGatewayName: L.PaymentGatewayToFriendlyName[e.paymentGateway]
                            })
                        }), (0, a.jsx)("div", {
                            className: y.externalRowBody,
                            children: g.default.Messages.BILLING_EXTERNAL_DESCRIPTION.format({
                                paymentGatewayName: L.PaymentGatewayToFriendlyName[e.paymentGateway],
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
                        className: y.verticalFit,
                        children: [null != s && i ? this.renderPremiumExternalSubscription(s) : null, t.length > 0 ? (0, a.jsxs)("div", {
                            className: r(y.paymentPane, y.verticalFit),
                            children: [e ? null : (0, a.jsx)("div", {
                                className: r(y.paymentRow, y.bottomDivider),
                                children: (0, a.jsxs)(S.default, {
                                    className: y.paymentRowHeader,
                                    children: [(0, a.jsx)("div", {
                                        className: M.date,
                                        children: g.default.Messages.BILLING_PAYMENT_TABLE_HEADER_DATE
                                    }), (0, a.jsx)("div", {
                                        className: y.paymentRowHeaderDescription,
                                        children: g.default.Messages.BILLING_PAYMENT_TABLE_HEADER_DESCRIPTION
                                    }), (0, a.jsx)("div", {
                                        className: M.amount,
                                        children: g.default.Messages.BILLING_PAYMENT_TABLE_HEADER_AMOUNT
                                    })]
                                })
                            }), (0, a.jsx)(D, {
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

            function C(e) {
                var t;
                let s = e.skuId,
                    a = null === (t = e.subscription) || void 0 === t ? void 0 : t.items[0].planId;
                return !(null == s || null == a || Object.values(h.PremiumSubscriptionSKUs).includes(s) || (0, T.isPremiumSubscriptionPlan)(a))
            }

            function U(e) {
                let t = (0, d.useStateFromStores)([_.default], () => _.default.getPayments()),
                    s = (0, d.useStateFromStores)([P.default], () => P.default.getPremiumTypeSubscription()),
                    i = n.useMemo(() => new Set(t.filter(C).map(e => {
                        let {
                            subscription: t
                        } = e;
                        return null == t ? void 0 : t.items[0].planId
                    })), [t]),
                    r = n.useMemo(() => new Set(t.filter(C).map(e => {
                        let {
                            skuId: t
                        } = e;
                        return t
                    })), [t]),
                    l = (0, d.useStateFromStoresArray)([N.default], () => N.default.getPlanIdsForSkus(Array.from(r))),
                    u = n.useCallback(() => l.length === i.size, [l, i]);
                return n.useEffect(() => {
                    !u() && f.default.wait(() => {
                        r.forEach(e => (0, m.fetchSubscriptionPlansForSKU)(e, void 0, void 0, !0, void 0))
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
                    return eI
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
                p = s("199108"),
                m = s("446674"),
                I = s("77078"),
                _ = s("54239"),
                N = s("545158"),
                P = s("104449"),
                S = s("299285"),
                R = s("609190"),
                T = s("442379"),
                A = s("565559"),
                h = s("928576"),
                L = s("407417"),
                g = s("246421"),
                y = s("264742"),
                M = s("537325"),
                D = s("24373"),
                x = s("41170"),
                C = s("865146"),
                U = s("546463"),
                v = s("305961"),
                O = s("357957"),
                b = s("10514"),
                B = s("251013"),
                j = s("145131"),
                G = s("953109"),
                F = s("37785"),
                k = s("712218"),
                w = s("461380"),
                Y = s("36694"),
                H = s("945330"),
                W = s("743826"),
                K = s("978679"),
                V = s("216422"),
                z = s("306160"),
                q = s("888400"),
                X = s("568734"),
                J = s("719923"),
                Z = s("153160"),
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
                        children: (0, i.jsxs)(j.default, {
                            justify: j.default.Justify.BETWEEN,
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
                return (0, i.jsx)(I.Tooltip, {
                    forceOpen: u,
                    text: n ? a : s,
                    children: e => {
                        let {
                            onMouseEnter: s,
                            onMouseLeave: a,
                            ...r
                        } = e;
                        return (0, i.jsx)(I.Clickable, {
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
                    children: (0, i.jsxs)(j.default, {
                        justify: j.default.Justify.BETWEEN,
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
                }), n = (0, h.useProductType)(a), l = (0, m.useStateFromStores)([v.default], () => v.default.getGuild(t)), u = (null == a ? void 0 : a.role_id) != null && (null == a ? void 0 : a.attachments_count) === 0 ? en.default.Messages.GUILD_PRODUCT_BILLING_TYPE_PREMIUM_ROLE : n, o = r.useCallback(async () => {
                    (null == l ? void 0 : l.hasFeature(et.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0 ? await (0, M.default)(et.Routes.GUILD_PRODUCT(t, s)) : await (0, M.default)(et.Routes.CHANNEL(t)), (0, _.popLayer)()
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

            function ep(e) {
                var t, s;
                let {
                    guildId: a,
                    guildProductListingId: n
                } = e, r = (0, T.useFetchGuildProductListing)(a, n, {
                    requireCurrentGuild: !1
                }), l = (0, m.useStateFromStores)([A.default], () => A.default.getGuildProductFetchState(n) === A.FetchState.FETCHING), u = null == r ? void 0 : r.role_id, o = (0, m.useStateFromStores)([v.default], () => {
                    var e;
                    return null != u ? null === (e = v.default.getGuild(a)) || void 0 === e ? void 0 : e.roles[u] : void 0
                }, [a, u]), d = (null !== (s = null == r ? void 0 : null === (t = r.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== s ? s : 0) > 0, c = null != o;
                return l ? (0, i.jsx)("div", {
                    className: ei.guildProductBenefits,
                    children: (0, i.jsx)(I.Spinner, {})
                }) : null != r && (d || c) ? (0, i.jsxs)("div", {
                    className: ei.guildProductBenefits,
                    children: [d && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(I.Text, {
                            variant: "text-xs/semibold",
                            color: "header-secondary",
                            className: ei.guildProductBenefitLabel,
                            children: en.default.Messages.GUILD_PRODUCT_BILLING_ACCESS_DOWNLOADABLES
                        }), (0, i.jsx)(L.default, {
                            guildId: a,
                            productId: r.id
                        })]
                    }), c && (0, i.jsxs)(i.Fragment, {
                        children: [d && (0, i.jsx)("div", {
                            className: ei.divider
                        }), (0, i.jsx)(I.Text, {
                            variant: "text-xs/semibold",
                            color: "header-secondary",
                            className: ei.guildProductBenefitLabel,
                            children: en.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_ROLE_UNLOCKED
                        }), (0, i.jsx)(g.default, {
                            role: o
                        })]
                    })]
                }) : null
            }
            class em extends r.PureComponent {
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
                    return e instanceof C.PaypalSourceRecord ? k.default.Types.PAYPAL : e instanceof C.CreditCardSourceRecord ? k.default.getType(e.brand) : k.default.Types.UNKNOWN
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
                        children: (0, Z.formatPrice)(t, e.currency)
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
                                    cost: (0, Z.formatPrice)(l - n, d)
                                }), (0, i.jsx)(ed, {
                                    description: en.default.Messages.BILLING_PAYMENT_BREAKDOWN_TAXES,
                                    cost: (0, Z.formatPrice)(n, d)
                                })]
                            }) : null, (0, i.jsx)(ed, {
                                description: en.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                                cost: (0, Z.formatPrice)(l, d)
                            }), e.isGuildProductPurchase && null != c && null != e.sku && (0, i.jsx)(eE, {
                                guildId: c,
                                guildProductListingId: e.sku.id
                            }), o > 0 && (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(ed, {
                                    description: en.default.Messages.BILLING_PAYMENT_BREAKDOWN_REFUNDED,
                                    cost: (0, Z.formatPrice)(o, d)
                                }), (0, i.jsx)(ed, {
                                    description: en.default.Messages.BILLING_PAYMENT_BREAKDOWN_NET,
                                    cost: (0, Z.formatPrice)(l - o, d)
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
                        children: [(0, i.jsx)(I.H, {
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
                        children: [(0, i.jsx)(I.H, {
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
                        }), (0, i.jsx)(I.Anchor, {
                            href: er(l),
                            children: en.default.Messages.BILLING_REFUND_REPORT_A_PROBLEM
                        })]
                    });
                    let f = (null !== (r = u.premiumRefundDisqualificationReasons) && void 0 !== r ? r : [ee.PremiumRefundDisqualificationReason.OTHER])[0],
                        E = null != f || 0 !== e.length || u.isPurchasedExternally;
                    return (0, i.jsxs)("div", {
                        className: ei.refundActions,
                        children: [(0, i.jsx)(I.Tooltip, {
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
                            children: e => (0, i.jsx)(I.Button, {
                                ...e,
                                color: I.Button.Colors.PRIMARY,
                                disabled: E,
                                onClick: () => (0, I.openModalLazy)(async () => {
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
                        }), (0, i.jsx)(I.Anchor, {
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
                    } = this.state, E = n.sku, p = n.subscription, m = null != n.paymentSource && et.PREPAID_PAYMENT_SOURCES.has(n.paymentSource.type);
                    if (null != p && 0 !== p.items.length) {
                        let e = [],
                            a = null;
                        if (p.type === et.SubscriptionTypes.PREMIUM) p.items.forEach(t => {
                            let {
                                planId: s,
                                quantity: n
                            } = t;
                            (0, J.isPremiumBaseSubscriptionPlan)(s) ? (e.push(J.default.getDisplayName(s, !1, m)), a = es.SubscriptionPlanInfo[s].skuId) : (e.push("".concat(n > 1 ? "".concat(n, "x ") : "").concat(J.default.getDisplayName(s, !1, m))), null == a && (a = es.SubscriptionPlanInfo[s].skuId))
                        });
                        else if (p.type === et.SubscriptionTypes.GUILD) {
                            let t = b.default.get(p.items[0].planId);
                            d(null != t, "Guild subscription plan should already have been loaded");
                            let s = t.interval === es.SubscriptionIntervalTypes.YEAR ? en.default.Messages.YEARLY_GUILD_SUBSCRIPTION : en.default.Messages.MONTHLY_GUILD_SUBSCRIPTION;
                            e.push(s.format({
                                planName: t.name
                            })), a = t.skuId
                        } else if (p.type === et.SubscriptionTypes.APPLICATION) {
                            let t = b.default.get(p.items[0].planId);
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
                            let e = (0, D.getStickerPackPreviewSticker)(o);
                            t = (0, i.jsx)(x.default, {
                                disableAnimation: !c,
                                isInteracting: c,
                                sticker: e,
                                className: ei.descriptionIcon,
                                size: 24
                            })
                        } else t = (null === (e = n.sku) || void 0 === e ? void 0 : e.productLine) === et.SKUProductLines.COLLECTIBLES ? (0, i.jsx)(W.default, {
                            className: ei.shopIcon
                        }) : (0, i.jsx)(G.default, {
                            className: ei.descriptionIcon,
                            guildClassName: ei.guildDescriptionIcon,
                            game: l,
                            guild: u,
                            size: G.default.Sizes.XSMALL,
                            skuId: E.id
                        })
                    } else t = (0, i.jsx)(V.default, {
                        className: ei.descriptionIcon
                    }), s = n.description;
                    let _ = (0, i.jsx)("div", {
                            className: ei.date,
                            children: (0, q.dateFormat)(f(n.createdAt), "MM/DD/YYYY")
                        }),
                        N = n.isGift ? (0, i.jsx)(I.Tooltip, {
                            text: en.default.Messages.BILLING_GIFT_PURCHASE_TOOLTIP,
                            children: e => (0, i.jsx)(K.default, {
                                className: ei.giftIcon,
                                ...e
                            })
                        }) : null;
                    return a ? (0, i.jsxs)("div", {
                        className: ei.description,
                        children: [t, (0, i.jsxs)("div", {
                            children: [s, _]
                        }), N]
                    }) : (0, i.jsxs)(r.Fragment, {
                        children: [_, (0, i.jsxs)("div", {
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
                        }), e.isSoftDeletedProduct ? (0, i.jsx)(y.default, {
                            className: ei.warningBlock,
                            buttonPosition: y.WarningBlockButtonPosition.RIGHT,
                            notice: en.default.Messages.GUILD_PRODUCT_BILLING_PRODUCT_UNAVAILABLE,
                            ctaLabel: en.default.Messages.GUILD_PRODUCT_BILLING_CONTACT_SUPPORT,
                            onClick: () => (0, N.default)(er(s))
                        }) : null != a && null != e.sku && (0, i.jsx)(ep, {
                            guildId: a,
                            guildProductListingId: e.sku.id
                        })]
                    }) : null
                }
                renderExpandedSection() {
                    return (0, i.jsx)(I.Clickable, {
                        onClick: e => e.stopPropagation(),
                        children: (0, i.jsxs)("div", {
                            className: ei.expandedInfo,
                            children: [(0, i.jsx)(I.H, {
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
                        children: e => (0, i.jsxs)(I.Clickable, {
                            onClick: this.handleExpandInfo,
                            className: u(a ? ei.payment : ei.hoverablePayment, t, {
                                [ei.compact]: s
                            }),
                            focusProps: {
                                offset: 4
                            },
                            ...e,
                            children: [(0, i.jsxs)(j.default, {
                                className: ei.summaryInfo,
                                align: j.default.Align.CENTER,
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
                            return null == e.sku || !(0, X.hasFlag)(e.sku.flags, et.SKUFlags.STICKER_PACK)
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
                            return null == e.sku || !(0, X.hasFlag)(e.sku.flags, p.SKUFlags.GUILD_PRODUCT)
                        }
                    }], this.handleExpandInfo = () => {
                        this.setState({
                            expanded: !this.state.expanded
                        })
                    }
                }
            }

            function eI(e) {
                var t, s, a;
                let {
                    payment: n,
                    locale: l,
                    compactMode: u,
                    className: o
                } = e, d = null != n.sku && el.includes(n.sku.type), c = null != n.sku && d ? n.sku.applicationId : null, f = null === (t = n.sku) || void 0 === t ? void 0 : t.applicationId, E = (null === (s = n.subscription) || void 0 === s ? void 0 : s.type) === et.SubscriptionTypes.APPLICATION, {
                    applicationStatistics: p,
                    gameApplication: I,
                    paymentSources: _
                } = (0, m.useStateFromStoresObject)([B.default, U.default, O.default], () => {
                    var e;
                    return {
                        applicationStatistics: null != c ? B.default.getCurrentUserStatisticsForApplication(c) : null,
                        gameApplication: null !== (a = U.default.getGame(null != c ? c : "")) && void 0 !== a ? a : null === (e = n.sku) || void 0 === e ? void 0 : e.application,
                        paymentSources: O.default.paymentSources
                    }
                }), N = (0, m.useStateFromStores)([S.default], () => null != f ? S.default.getApplication(f) : null);
                r.useEffect(() => {
                    E && null != f && (0, P.getApplication)(f)
                }, [f, E]);
                let R = (0, m.useStateFromStores)([v.default], () => v.default.getGuild(null == I ? void 0 : I.guildId)),
                    T = d ? I : void 0;
                return (0, i.jsx)(em, {
                    applicationStatistics: p,
                    application: E ? N : T,
                    guild: R,
                    stickerPack: null,
                    paymentSources: _,
                    locale: l,
                    compactMode: u,
                    className: o,
                    payment: n
                })
            }
            em.defaultProps = {
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
                p = s("79112"),
                m = s("812204"),
                I = s("685665"),
                _ = s("724038"),
                N = s("649844"),
                P = s("797647"),
                S = s("697218"),
                R = s("145131"),
                T = s("953109"),
                A = s("423487"),
                h = s("599110"),
                L = s("719923"),
                g = s("713518"),
                y = s("809071"),
                M = s("921149"),
                D = s("892843"),
                x = s("541554"),
                C = s("690679"),
                U = s("95637"),
                v = s("49111"),
                O = s("782340"),
                b = s("376121");

            function B(e) {
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
                if (0 === (0, L.getNumPremiumGuildSubscriptions)(s.additionalPlans)) return null;
                let {
                    status: d
                } = s, f = (0, L.isPremiumGuildSubscriptionCanceled)(s);
                return t = f ? b.guildBoostingSubscriptionRowCanceled : (0, L.isSubscriptionStatusFailedPayment)(d) ? b.guildBoostingSubscriptionRowFailedPayment : b.guildBoostingSubscriptionRowActive, (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: r(t, l),
                        children: [(0, a.jsx)("div", {
                            className: b.guildBoostingSubscriptionRowBackground
                        }), (0, a.jsx)("div", {
                            className: b.guildBoostingImage
                        }), (0, a.jsxs)("div", {
                            className: b.guildBoostingSubscriptionRowBody,
                            children: [(0, a.jsx)("div", {
                                className: r(b.guildBoostingWordmark, {
                                    [b.canceled]: f
                                })
                            }), (0, a.jsx)("div", {
                                children: (0, L.getPremiumGuildHeaderDescription)({
                                    subscription: s,
                                    renewalInvoicePreview: n,
                                    user: o
                                })
                            })]
                        }), i && (0, a.jsx)(D.default, {
                            color: E.Button.Colors.BRAND,
                            onClick: () => p.default.open(v.UserSettingsSections.GUILD_BOOSTING),
                            children: O.default.Messages.PREMIUM_GUILD_PERKS_MODAL_MANAGE_YOUR_SUBSCRIPTIONS
                        })]
                    }), !i && (0, a.jsx)(E.Text, {
                        className: b.boostingDesktopAppBlurb,
                        variant: "text-sm/normal",
                        children: O.default.Messages.GUILD_BOOSTING_MANAGEMENT_OPEN_DESKTOP_APP.format({
                            openAppHook: () => (0, _.default)("app")
                        })
                    })]
                })
            }

            function j() {
                return n.useEffect(() => {
                    h.default.track(v.AnalyticEvents.TOOLTIP_VIEWED, {
                        type: "subscription_settings_missing_payment_method"
                    })
                }, []), (0, a.jsxs)("div", {
                    className: b.paymentBanner,
                    children: [(0, a.jsx)(A.default, {
                        className: b.paymentBannerIcon,
                        color: f.default.unsafe_rawColors.YELLOW_260.css
                    }), (0, a.jsx)(E.Text, {
                        className: b.paymentBannerText,
                        variant: "text-sm/normal",
                        children: O.default.Messages.MISSING_PAYMENT_METHOD_BANNER
                    })]
                })
            }

            function G() {
                return n.useEffect(() => {
                    h.default.track(v.AnalyticEvents.TOOLTIP_VIEWED, {
                        type: "subscription_settings_invalid_payment_method"
                    })
                }, []), (0, a.jsxs)("div", {
                    className: b.paymentBanner,
                    children: [(0, a.jsx)(A.default, {
                        className: b.paymentBannerIcon,
                        color: f.default.unsafe_rawColors.RED_360.css
                    }), (0, a.jsx)(E.Text, {
                        className: b.paymentBannerText,
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
                } = (0, I.default)(m.default.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
                return n.useEffect(() => {
                    h.default.track(v.AnalyticEvents.TOOLTIP_VIEWED, {
                        type: "subscription_settings_invalid_payment_method"
                    })
                }, []), (0, a.jsxs)("div", {
                    className: b.paymentBanner,
                    children: [(0, a.jsx)(A.default, {
                        className: b.paymentBannerIcon,
                        color: f.default.unsafe_rawColors.YELLOW_260.css
                    }), (0, a.jsx)(E.Text, {
                        className: b.paymentBannerText,
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
                    className: r(b.billingInformation, n),
                    children: [(0, a.jsx)(E.FormTitle, {
                        tag: "h3",
                        className: b.detailBlockHeader,
                        children: O.default.Messages.PREMIUM_SETTINGS_BILLING_INFO
                    }), (0, a.jsx)("div", {
                        children: L.default.getBillingInformationString(t, s)
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
                        className: b.sectionTitle,
                        tag: "h1",
                        children: O.default.Messages.USER_SETTINGS_SUBSCRIPTIONS_HEADER
                    }), (0, a.jsx)("p", {
                        className: b.sectionDescription,
                        children: O.default.Messages.BILLING_PAYMENT_PREMIUM_DESCRIPTION
                    }), (0, a.jsx)(E.Card, {
                        className: b.noItemsCard,
                        type: E.Card.Types.CUSTOM,
                        children: (0, a.jsxs)(R.default, {
                            align: R.default.Align.CENTER,
                            children: [(0, a.jsx)(T.default, {
                                game: null,
                                size: T.default.Sizes.SMALL,
                                className: b.noItemsIcon
                            }), (0, a.jsx)("span", {
                                className: b.cardText,
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
                    [p] = (0, y.useSubscriptionInvoicePreview)({
                        subscriptionId: n.id,
                        renewal: !0,
                        analyticsLocations: (0, I.default)(m.default.SUBSCRIPTION_DETAILS),
                        analyticsLocation: f
                    }),
                    [_] = (0, y.useSubscriptionInvoicePreview)({
                        subscriptionId: n.id,
                        renewal: !0,
                        applyEntitlements: !0,
                        analyticsLocations: (0, I.default)(m.default.SUBSCRIPTION_DETAILS),
                        analyticsLocation: f
                    }),
                    N = (0, c.useStateFromStores)([S.default], () => {
                        var e;
                        return null === (e = S.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasFreePremium()
                    }),
                    R = d(n.currentPeriodEnd),
                    T = null != n.paymentSourceId,
                    A = null !== (t = null == _ ? void 0 : _.total) && void 0 !== t ? t : 0,
                    h = null == i ? void 0 : i.invalid,
                    L = !T && A > 0 && (7 >= R.diff(d(), "days") || n.status === v.SubscriptionStatusTypes.PAST_DUE) && !N && !n.isPurchasedExternally,
                    D = h && n.status === v.SubscriptionStatusTypes.PAST_DUE && !N && !n.isPurchasedExternally,
                    w = (0, M.useIsPrepaidPaymentPastDue)(),
                    Y = !N && w,
                    H = (null == n ? void 0 : n.status) === v.SubscriptionStatusTypes.PAST_DUE ? d().diff(d(n.currentPeriodStart), "days") : 0,
                    [W] = (0, y.useGetSubscriptionInvoice)({
                        subscriptionId: n.id,
                        preventFetch: !Y
                    });
                return null == p || null == _ ? (0, a.jsx)(E.Spinner, {}) : (null != n.renewalMutations && (n.renewalMutations.planId !== n.planId && !(0, P.isNoneSubscription)(n.renewalMutations.planId) || n.hasExternalPlanChange) && (s = (0, a.jsx)(U.default, {
                    subscription: n,
                    renewalMutations: n.renewalMutations,
                    className: b.renewalMutationNotice,
                    analyticsLocation: f
                })), (0, a.jsx)("div", {
                    className: u,
                    children: (0, a.jsxs)(E.HeadingLevel, {
                        component: (0, a.jsx)(E.FormTitle, {
                            className: b.sectionTitle,
                            tag: "h1",
                            children: O.default.Messages.USER_SETTINGS_SUBSCRIPTIONS_HEADER
                        }),
                        children: [L ? (0, a.jsx)(j, {}) : null, D ? (0, a.jsx)(G, {}) : null, Y && null != W ? (0, a.jsx)(F, {
                            daysPastDue: H,
                            subscription: n,
                            openInvoiceId: W.id
                        }) : null, s, (0, a.jsxs)("div", {
                            className: b.subscriptionRows,
                            children: [(0, a.jsx)("p", {
                                className: b.sectionDescription,
                                children: O.default.Messages.BILLING_PAYMENT_PREMIUM_DESCRIPTION
                            }), (0, a.jsx)(x.default, {
                                subscription: n,
                                renewalInvoicePreview: p,
                                paymentSource: i,
                                busy: l,
                                analyticsLocation: f
                            }), (0, a.jsx)(B, {
                                subscription: n,
                                renewalInvoicePreview: p,
                                fromStandaloneBillingPage: o,
                                className: b.guildSubscriptionRow
                            })]
                        }), (0, a.jsx)("div", {
                            children: (0, a.jsx)(E.HeadingLevel, {
                                component: (0, a.jsx)(E.FormTitle, {
                                    tag: "h5",
                                    children: O.default.Messages.BILLING_STEP_PAYMENT
                                }),
                                children: (0, a.jsxs)("div", {
                                    className: b.details,
                                    children: [(0, a.jsx)(k, {
                                        subscription: n,
                                        renewalInvoicePreview: _,
                                        className: b.detailsBlock
                                    }), (0, a.jsxs)("div", {
                                        className: r(b.detailsBlock, {
                                            [b.redBorder]: D
                                        }),
                                        children: [(0, a.jsx)(E.FormTitle, {
                                            tag: "h3",
                                            className: b.detailBlockHeader,
                                            children: n.isPurchasedExternally && null != n.paymentGateway ? O.default.Messages.BILLING_MANAGED_BY_PAYMENT_GATEWAY.format({
                                                paymentGatewayName: v.PaymentGatewayToFriendlyName[n.paymentGateway]
                                            }) : O.default.Messages.BILLING_PAY_FOR_IT_WITH
                                        }), (0, a.jsx)(C.default, {
                                            subscription: n,
                                            onPaymentSourceAdded: g.fetchSubscriptionPlansOnNewPaymentSource,
                                            highlightAddPaymentMethodButton: L || D,
                                            analyticsLocation: f,
                                            currentInvoicePreview: p,
                                            dropdownClassName: b.paymentDropdown
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
                    return D
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
                p = s("797647"),
                m = s("10514"),
                I = s("563890"),
                _ = s("270227"),
                N = s("719923"),
                P = s("713518"),
                S = s("892843"),
                R = s("646718"),
                T = s("49111"),
                A = s("782340"),
                h = s("224138");
            let L = new f.default("SubscriptionHeader.tsx"),
                g = {
                    page: T.AnalyticsPages.USER_SETTINGS,
                    section: T.AnalyticsSections.SETTINGS_PREMIUM,
                    object: T.AnalyticsObjects.CARD
                };

            function y(e) {
                let {
                    wordMark: t,
                    subscriptionInfo: s,
                    buttons: n,
                    statusClasses: r
                } = e;
                return (0, a.jsxs)("div", {
                    className: i(h.banner, r),
                    children: [(0, a.jsx)("div", {
                        className: h.bannerBackgroundImage
                    }), (0, a.jsxs)("div", {
                        className: h.detailsContainer,
                        children: [(0, a.jsx)("div", {
                            className: h.image
                        }), (0, a.jsxs)("div", {
                            className: h.details,
                            children: [t, s]
                        })]
                    }), (0, a.jsx)("div", {
                        className: h.buttons,
                        children: n
                    })]
                })
            }

            function M() {
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(_.default, {
                        className: h.discordWordmark,
                        "aria-label": A.default.Messages.PREMIUM_TIER_1
                    }), (0, a.jsx)("div", {
                        className: h.classicWordmark
                    })]
                })
            }

            function D() {
                let {
                    analyticsLocations: e
                } = (0, c.default)(d.default.ACCOUNT_CREDIT_BANNER);
                return (0, a.jsx)(y, {
                    wordMark: (0, a.jsx)(M, {}),
                    subscriptionInfo: (0, a.jsx)("div", {
                        className: h.planInfo,
                        children: A.default.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_BANNER_DESCRIPTION
                    }),
                    buttons: (0, a.jsx)(S.default, {
                        className: h.toolsButton,
                        onClick: () => (0, E.default)({
                            subscriptionTier: R.PremiumSubscriptionSKUs.TIER_1,
                            analyticsLocations: e,
                            analyticsObject: g
                        }),
                        children: A.default.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_BANNER_CTA
                    }),
                    statusClasses: {
                        [h.tier1]: !0
                    }
                })
            }
            var x = function(e) {
                var t;
                let {
                    subscription: n,
                    renewalInvoicePreview: r,
                    paymentSource: f,
                    busy: D,
                    analyticsLocation: x
                } = e, {
                    analyticsLocations: C
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
                            analyticsLocations: C
                        })
                    })
                }, O = () => {
                    if (null != n && null != n.planIdFromItems) {
                        let e = m.default.get(n.planIdFromItems);
                        if (null == e) {
                            L.info("Plan not fetched for plan id: ".concat(n.planIdFromItems));
                            return
                        }
                        let t = (0, P.getCurrencies)(e, null == f ? void 0 : f.id, !1),
                            s = t.length > 0 ? t[0] : n.currency,
                            a = !1;
                        1 === t.length && (null == f ? void 0 : f.id) === n.paymentSourceId && (0, P.planHasCurrency)(e.id, s, null == f ? void 0 : f.id) && (a = !0), a ? o.resubscribe(n, C) : (0, E.default)({
                            initialPlanId: n.planIdFromItems,
                            analyticsLocations: C,
                            analyticsLocation: x,
                            analyticsObject: g
                        })
                    }
                }, b = N.default.getPlanIdFromInvoice(n, r);
                if ((0, p.isNoneSubscription)(b)) return null;
                let B = N.default.getStatusFromInvoice(n, r),
                    j = N.default.getPremiumType(b),
                    G = {
                        [h.tier0]: j === R.PremiumTypes.TIER_0,
                        [h.tier1]: j === R.PremiumTypes.TIER_1,
                        [h.tier2]: j === R.PremiumTypes.TIER_2,
                        [h.canceled]: B === T.SubscriptionStatusTypes.CANCELED,
                        [h.failedPayment]: (0, N.isSubscriptionStatusFailedPayment)(B)
                    },
                    F = null;
                switch (j) {
                    case R.PremiumTypes.TIER_0:
                        F = (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(_.default, {
                                className: h.discordWordmark,
                                "aria-label": A.default.Messages.PREMIUM_TIER_0
                            }), (0, a.jsx)("div", {
                                className: h.basicWordmark
                            })]
                        });
                        break;
                    case R.PremiumTypes.TIER_1:
                        F = (0, a.jsx)(M, {});
                        break;
                    case R.PremiumTypes.TIER_2:
                        F = (0, a.jsx)(I.default, {
                            className: h.planName,
                            "aria-label": A.default.Messages.PREMIUM_TITLE
                        })
                }
                return (0, a.jsx)(y, {
                    wordMark: F,
                    subscriptionInfo: (t = b, l(null != r, "Expected renewalInvoicePreview"), (0, a.jsx)("div", {
                        className: h.planInfo,
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
                                    className: i(h.toolsButton, h.externalButton),
                                    size: u.Button.Sizes.SMALL,
                                    look: u.ButtonLooks.OUTLINED,
                                    color: u.ButtonColors.WHITE,
                                    submitting: D,
                                    children: A.default.Messages.BILLING_MANAGE_SUBSCRIPTION
                                })
                            })
                        }
                        if (N.default.isBaseSubscriptionCanceled(n)) return (0, a.jsx)(u.Button, {
                            className: h.toolsButton,
                            size: u.Button.Sizes.SMALL,
                            look: u.ButtonLooks.INVERTED,
                            color: u.ButtonColors.BRAND,
                            submitting: D,
                            onClick: O,
                            children: A.default.Messages.RESUBSCRIBE
                        });
                        if (e === T.SubscriptionStatusTypes.ACTIVE || e === T.SubscriptionStatusTypes.PAST_DUE) {
                            let t = !1,
                                s = null;
                            return null != n.renewalMutations && (t = !0, s = n.renewalMutations.planId !== n.planId ? A.default.Messages.PREMIUM_SWITCH_PLAN_DISABLED_PENDING_MUTATION_PLAN : A.default.Messages.PREMIUM_SWITCH_PLAN_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION), null != n.trialEndsAt && (t = !0, s = A.default.Messages.PREMIUM_SWITCH_PLAN_DISABLED_IN_TRIAL), e === T.SubscriptionStatusTypes.PAST_DUE && (t = !0), (0, a.jsxs)("div", {
                                className: h.toolsButtons,
                                children: [(0, a.jsx)(u.Button, {
                                    className: h.toolsButton,
                                    size: u.Button.Sizes.SMALL,
                                    look: u.ButtonLooks.LINK,
                                    color: u.ButtonColors.WHITE,
                                    submitting: D,
                                    onClick: U,
                                    children: A.default.Messages.CANCEL
                                }), (0, a.jsx)(u.Tooltip, {
                                    text: s,
                                    children: e => (0, a.jsx)(S.default, {
                                        ...e,
                                        disabled: t,
                                        className: h.toolsButton,
                                        onClick: () => {
                                            (0, E.default)({
                                                analyticsLocations: C,
                                                analyticsLocation: x,
                                                analyticsObject: g
                                            })
                                        },
                                        children: A.default.Messages.PREMIUM_SWITCH_PLANS
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
                    return M
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
                p = s("740055"),
                m = s("685665"),
                I = s("308592"),
                _ = s("102985"),
                N = s("357957"),
                P = s("10514"),
                S = s("719923"),
                R = s("713518"),
                T = s("380186"),
                A = s("809071"),
                h = s("49111"),
                L = s("782340"),
                g = s("539735"),
                y = s("173791");

            function M(e) {
                let {
                    subscription: t,
                    onPaymentSourceAdded: i,
                    highlightAddPaymentMethodButton: l,
                    dropdownClassName: M,
                    analyticsLocation: x,
                    currentInvoicePreview: C
                } = e, U = (0, o.useStateFromStores)([_.default], () => _.default.hidePersonalInformation), [v, O] = (0, o.useStateFromStoresArray)([N.default], () => [N.default.paymentSources, N.default.hasFetchedPaymentSources]), b = (0, I.useSubscriptionPlansLoaded)((0, T.getSubscriptionSKUs)(t)), {
                    analyticsLocations: B
                } = (0, m.default)(), j = n.useMemo(() => Object.values(v).filter(e => !e.invalid), [v]), [G, F] = n.useState(!1), [k, w] = n.useState(t.currency), Y = async (e, s) => {
                    if (null == t) throw Error("missing subscription and paymentSource");
                    null == e ? await f.changeSubscriptionCurrency(t, s, B, x) : await f.changePaymentSource(t, e, s, B, x), F(!1), w(s)
                }, H = async (e, s, a) => {
                    F(!0);
                    let n = await (0, A.updateSubscriptionInvoicePreview)({
                        subscriptionId: t.id,
                        paymentSourceId: null == e ? void 0 : e.id,
                        renewal: !0,
                        currency: s,
                        analyticsLocations: B,
                        analyticsLocation: x
                    });
                    C.currency !== n.currency || C.currency === n.currency && C.total !== n.total ? await D(n, () => {
                        a(e, s)
                    }, () => {
                        F(!1)
                    }) : a(e, s)
                }, W = e => {
                    let s = P.default.get(t.planIdForCurrencies);
                    u(null != e, "paymentSource not specified for change"), u(null != s, "Unable to fetch plan");
                    let a = (0, R.getCurrencies)(s.id, e.id, !1),
                        n = a.length > 0 ? a[0] : h.CurrencyCodes.USD;
                    return n
                }, K = e => {
                    null != e && H(e, W(e), Y)
                }, V = e => {
                    (0, R.fetchSubscriptionPlansOnNewPaymentSource)(e.id, (0, T.getSubscriptionSKUs)(t)).then(() => {
                        H(e, W(e), Y)
                    }), "function" == typeof i && i(e.id)
                }, z = () => {
                    (0, d.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await s.el("960391").then(s.bind(s, "960391"));
                        return t => (0, a.jsx)(e, {
                            ...t,
                            onAddPaymentSource: V,
                            analyticsLocation: x
                        })
                    }, {
                        onCloseCallback: () => {
                            (0, c.clearError)()
                        },
                        onCloseRequest: h.NOOP
                    })
                };
                if (t.isPurchasedExternally) return (e => {
                    u(null != e.paymentGateway, "Expected payment gateway when managed externally");
                    let t = (0, S.getExternalSubscriptionMethodUrl)(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT");
                    return (0, a.jsx)(d.Anchor, {
                        href: t,
                        useDefaultUnderlineStyles: !1,
                        className: g.externalLink,
                        children: (0, a.jsx)(d.Button, {
                            fullWidth: !0,
                            look: d.Button.Looks.FILLED,
                            color: d.Button.Colors.PRIMARY,
                            children: L.default.Messages.BILLING_MANAGE_BILLING
                        })
                    })
                })(t);
                if (!O || !b) return (0, a.jsx)(d.Spinner, {});
                if (!(j.length > 0)) return (0, a.jsx)(d.Button, {
                    fullWidth: !0,
                    look: d.Button.Looks.FILLED,
                    color: l ? d.Button.Colors.BRAND : d.Button.Colors.PRIMARY,
                    onClick: z,
                    children: L.default.Messages.BILLING_ADD_PAYMENT_METHOD
                });
                else {
                    let e = P.default.get(t.planIdForCurrencies);
                    u(null != e, "Unable to fetch plan");
                    let s = (0, R.getCurrencies)(e, t.paymentSourceId, !1);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(() => {
                            let e = t.paymentSourceId;
                            return (0, a.jsx)(p.default, {
                                prependOption: null == e ? {
                                    label: L.default.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION,
                                    value: null
                                } : null,
                                className: M,
                                paymentSources: j,
                                hidePersonalInformation: U,
                                selectedPaymentSourceId: e,
                                onChange: K,
                                onPaymentSourceAdd: z,
                                dropdownLoading: G
                            })
                        })(), null != t.paymentSourceId ? (0, a.jsx)(E.CurrencyWrapper, {
                            currencies: s,
                            children: (0, a.jsxs)("div", {
                                className: r(g.currency, y.flex, y.alignCenter),
                                children: [(0, a.jsx)("div", {
                                    children: L.default.Messages.PAYMENT_CURRENCY_PAYING_IN
                                }), (0, a.jsx)(E.default, {
                                    className: g.currencyDropdown,
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
            let D = async (e, t, n) => {
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
                    return L
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
                p = s("685665"),
                m = s("161778"),
                I = s("797647"),
                _ = s("10514"),
                N = s("145131"),
                P = s("423487"),
                S = s("719923"),
                R = s("153160"),
                T = s("782340"),
                A = s("733848");

            function h(e) {
                let {
                    subscription: t,
                    renewalMutations: s,
                    transitionState: n,
                    onClose: i,
                    analyticsLocation: r
                } = e, l = (0, o.useStateFromStores)([m.default], () => m.default.theme), {
                    analyticsLocations: P
                } = (0, p.default)(E.default.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL);
                async function h() {
                    await (0, f.upgradeSubscription)(t, t.planId, P, r), i()
                }
                let L = _.default.get(t.planId);
                u(null != L, "Missing subscriptionPlan");
                let g = (0, S.getPrice)(t.planId, !1, !1, {
                        paymentSourceId: t.paymentSourceId,
                        currency: t.currency
                    }),
                    y = (0, R.formatRate)((0, R.formatPrice)(g.amount, g.currency), L.interval, L.intervalCount);
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
                        className: A.modalBody,
                        children: (0, I.isNoneSubscription)(t.planId) ? T.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BODY_NO_EXISTING_PLAN.format({
                            downgradedPlan: S.default.getDisplayName(s.planId),
                            existingRate: y
                        }) : T.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BODY.format({
                            existingPlan: S.default.getDisplayName(t.planId),
                            downgradedPlan: S.default.getDisplayName(s.planId),
                            existingRate: y
                        })
                    }), (0, a.jsxs)(c.ModalFooter, {
                        children: [(0, a.jsx)(c.Button, {
                            onClick: h,
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

            function L(e) {
                let {
                    subscription: t,
                    renewalMutations: s,
                    className: i,
                    analyticsLocation: l
                } = e, [u, o] = n.useState(!1);
                return (0, a.jsxs)("div", {
                    className: r(A.root, i),
                    children: [(0, a.jsx)(P.default, {
                        className: A.infoIcon
                    }), (0, a.jsx)("div", {
                        className: A.text,
                        children: T.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_NOTICE.format({
                            planName: t.hasExternalPlanChange ? (0, S.getExternalPlanDisplayName)(s) : S.default.getDisplayName(s.planId),
                            date: t.currentPeriodEnd
                        })
                    }), t.isPurchasedExternally ? null : (0, a.jsx)(c.Anchor, {
                        onClick: e => {
                            o(!0), e.preventDefault()
                        },
                        className: A.cancelLink,
                        children: T.default.Messages.CANCEL
                    }), u ? (0, a.jsx)(c.Modal, {
                        renderModal: e => {
                            let {
                                transitionState: n
                            } = e;
                            return (0, a.jsx)(h, {
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
                    return p
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
            var p = l.default.connectStores([c.default], () => {
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
        }
    }
]);
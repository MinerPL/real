            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return eI
                }
            }), s("222007"), s("424973"), s("702976");
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
                I = s("446674"),
                m = s("77078"),
                _ = s("54239"),
                N = s("545158"),
                S = s("104449"),
                P = s("299285"),
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
                U = s("305961"),
                v = s("357957"),
                O = s("10514"),
                b = s("251013"),
                B = s("145131"),
                j = s("953109"),
                G = s("37785"),
                F = s("712218"),
                w = s("461380"),
                k = s("36694"),
                Y = s("945330"),
                H = s("743826"),
                V = s("978679"),
                K = s("216422"),
                W = s("306160"),
                z = s("888400"),
                Z = s("568734"),
                q = s("719923"),
                X = s("153160"),
                J = s("364735"),
                Q = s("206343"),
                $ = s("89553"),
                ee = s("49111"),
                et = s("646718"),
                es = s("843455"),
                ea = s("782340"),
                en = s("852225");
            let ei = e => "https://".concat(ee.SUPPORT_DOMAIN, "/hc/").concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000118612"),
                er = [ee.SKUTypes.DURABLE_PRIMARY, ee.SKUTypes.DURABLE, ee.SKUTypes.CONSUMABLE];
            (n = a || (a = {})).TIME_PLAYED = "TIME_PLAYED", n.PURCHASE_DATE = "PURCHASE_DATE", n.SKU_TYPE = "SKU_TYPE", n.ALREADY_REFUNDED = "ALREADY_REFUNDED", n.PAYMENT_STATUS = "PAYMENT_STATUS", n.PAYMENT_GATEWAY = "PAYMENT_GATEWAY", n.SKU_STICKER_PACK = "SKU_STICKER_PACK", n.SUBSCRIPTION_TYPE = "SUBSCRIPTION_TYPE", n.GUILD_PRODUCT = "GUILD_PRODUCT";
            let el = [ee.PaymentStatusTypes.FAILED, ee.PaymentStatusTypes.REVERSED, ee.PaymentStatusTypes.CANCELED],
                eu = [es.PaymentGateways.APPLE],
                eo = e => {
                    let {
                        description: t,
                        cost: s
                    } = e;
                    return (0, i.jsx)("li", {
                        className: en.paymentDetail,
                        children: (0, i.jsxs)(B.default, {
                            justify: B.default.Justify.BETWEEN,
                            children: [(0, i.jsx)("div", {
                                children: t
                            }), (0, i.jsx)("div", {
                                children: s
                            })]
                        })
                    })
                };

            function ed(e) {
                let {
                    value: t,
                    copyText: s,
                    copyFeedbackText: a
                } = e, [n, l] = r.useState(!1), [u, o] = r.useState(!1), d = () => {
                    (0, W.copy)(t), o(!0), l(!0)
                };
                return (0, i.jsx)(m.Tooltip, {
                    forceOpen: u,
                    text: n ? a : s,
                    children: e => {
                        let {
                            onMouseEnter: s,
                            onMouseLeave: a,
                            ...r
                        } = e;
                        return (0, i.jsx)(m.Clickable, {
                            ...r,
                            onMouseEnter: () => {
                                n && l(!1), "function" == typeof s && s()
                            },
                            onMouseLeave: () => {
                                o(!1), "function" == typeof a && a()
                            },
                            onClick: d,
                            children: (0, i.jsx)("div", {
                                className: en.copiableContainer,
                                children: t
                            })
                        })
                    }
                })
            }
            let ec = e => {
                let {
                    description: t,
                    detail: s
                } = e;
                return (0, i.jsx)("li", {
                    className: en.guildProductDetail,
                    children: (0, i.jsxs)(B.default, {
                        justify: B.default.Justify.BETWEEN,
                        children: [(0, i.jsx)("div", {
                            children: t
                        }), (0, i.jsx)("div", {
                            children: s
                        })]
                    })
                })
            };

            function ef(e) {
                let {
                    guildId: t,
                    guildProductListingId: s
                } = e, a = (0, T.useFetchGuildProductListing)(t, s, {
                    requireCurrentGuild: !1
                }), n = (0, A.useProductType)(a), l = (0, I.useStateFromStores)([U.default], () => U.default.getGuild(t)), u = (null == a ? void 0 : a.role_id) != null && (null == a ? void 0 : a.attachments_count) === 0 ? ea.default.Messages.GUILD_PRODUCT_BILLING_TYPE_PREMIUM_ROLE : n, o = r.useCallback(async () => {
                    (null == l ? void 0 : l.hasFeature(ee.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0 ? await (0, g.default)(ee.Routes.GUILD_PRODUCT(t, s)) : await (0, g.default)(ee.Routes.CHANNEL(t)), (0, _.popLayer)()
                }, [l, t, s]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [null != u && (0, i.jsx)(ec, {
                        description: ea.default.Messages.GUILD_PRODUCT_BILLING_PRODUCT_TYPE,
                        detail: u
                    }), null != l && (0, i.jsx)(ec, {
                        description: ea.default.Messages.GUILD_PRODUCT_BILLING_SERVER_NAME,
                        detail: (0, i.jsx)(G.default, {
                            onClick: o,
                            children: l.name
                        })
                    })]
                })
            }

            function eE(e) {
                var t, s;
                let {
                    guildId: a,
                    guildProductListingId: n
                } = e, r = (0, T.useFetchGuildProductListing)(a, n, {
                    requireCurrentGuild: !1
                }), l = (0, I.useStateFromStores)([C.default], () => C.default.getGuildProductFetchState(n) === C.FetchState.FETCHING), u = null == r ? void 0 : r.role_id, o = (0, I.useStateFromStores)([U.default], () => {
                    var e;
                    return null != u ? null === (e = U.default.getGuild(a)) || void 0 === e ? void 0 : e.roles[u] : void 0
                }, [a, u]), d = (null !== (s = null == r ? void 0 : null === (t = r.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== s ? s : 0) > 0, c = null != o;
                return l ? (0, i.jsx)("div", {
                    className: en.guildProductBenefits,
                    children: (0, i.jsx)(m.Spinner, {})
                }) : null != r && (d || c) ? (0, i.jsxs)("div", {
                    className: en.guildProductBenefits,
                    children: [d && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(m.Text, {
                            variant: "text-xs/semibold",
                            color: "header-secondary",
                            className: en.guildProductBenefitLabel,
                            children: ea.default.Messages.GUILD_PRODUCT_BILLING_ACCESS_DOWNLOADABLES
                        }), (0, i.jsx)(h.default, {
                            guildId: a,
                            productId: r.id
                        })]
                    }), c && (0, i.jsxs)(i.Fragment, {
                        children: [d && (0, i.jsx)("div", {
                            className: en.divider
                        }), (0, i.jsx)(m.Text, {
                            variant: "text-xs/semibold",
                            color: "header-secondary",
                            className: en.guildProductBenefitLabel,
                            children: ea.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_ROLE_UNLOCKED
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
                    return e instanceof D.PaypalSourceRecord ? F.default.Types.PAYPAL : e instanceof D.CreditCardSourceRecord ? F.default.getType(e.brand) : F.default.Types.UNKNOWN
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
                        case ee.PaymentStatusTypes.PENDING:
                            return (0, i.jsx)("span", {
                                className: en.statusTagGrey,
                                children: ea.default.Messages.BILLING_TAG_PENDING
                            });
                        case ee.PaymentStatusTypes.FAILED:
                            return (0, i.jsx)("span", {
                                className: en.statusTagRed,
                                children: ea.default.Messages.BILLING_TAG_FAILED
                            });
                        case ee.PaymentStatusTypes.REFUNDED:
                            if (e.amountRefunded !== e.amount) return (0, i.jsx)("span", {
                                className: en.statusTagGreen,
                                children: ea.default.Messages.BILLING_TAG_PARTIALLY_REFUNDED
                            });
                            return (0, i.jsx)("span", {
                                className: en.statusTagGreen,
                                children: ea.default.Messages.BILLING_TAG_REFUNDED
                            });
                        case ee.PaymentStatusTypes.REVERSED:
                            return (0, i.jsx)("span", {
                                className: en.statusTagRed,
                                children: ea.default.Messages.BILLING_TAG_REVERSED
                            });
                        case ee.PaymentStatusTypes.CANCELED:
                            return (0, i.jsx)("span", {
                                className: en.statusTagRed,
                                children: ea.default.Messages.BILLING_TAG_CANCELED
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
                        className: en.price,
                        children: (0, X.formatPrice)(t, e.currency)
                    })
                }
                renderPaymentIdField() {
                    let {
                        payment: e
                    } = this.props;
                    return (0, i.jsx)("li", {
                        className: en.paymentDetail,
                        children: (0, i.jsxs)("div", {
                            className: en.paymentInfo,
                            children: [(0, i.jsx)("div", {
                                children: ea.default.Messages.BILLING_PAYMENT_ID
                            }), (0, i.jsx)(ed, {
                                value: e.id,
                                copyText: ea.default.Messages.BILLING_PAYMENT_ID_COPY,
                                copyFeedbackText: ea.default.Messages.BILLING_PAYMENT_ID_COPIED
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
                        className: u(en.paymentText, en.paymentBreakdown),
                        children: [null != e.paymentSource ? (0, i.jsx)(J.default, {
                            paymentSource: e.paymentSource,
                            locale: t,
                            descriptionClassName: en.paymentText
                        }) : null, (0, i.jsxs)("ul", {
                            children: [this.renderPaymentIdField(), !a && n > 0 ? (0, i.jsxs)(r.Fragment, {
                                children: [(0, i.jsx)(eo, {
                                    description: e.description,
                                    cost: (0, X.formatPrice)(l - n, d)
                                }), (0, i.jsx)(eo, {
                                    description: ea.default.Messages.BILLING_PAYMENT_BREAKDOWN_TAXES,
                                    cost: (0, X.formatPrice)(n, d)
                                })]
                            }) : null, (0, i.jsx)(eo, {
                                description: ea.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                                cost: (0, X.formatPrice)(l, d)
                            }), e.isGuildProductPurchase && null != c && null != e.sku && (0, i.jsx)(ef, {
                                guildId: c,
                                guildProductListingId: e.sku.id
                            }), o > 0 && (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(eo, {
                                    description: ea.default.Messages.BILLING_PAYMENT_BREAKDOWN_REFUNDED,
                                    cost: (0, X.formatPrice)(o, d)
                                }), (0, i.jsx)(eo, {
                                    description: ea.default.Messages.BILLING_PAYMENT_BREAKDOWN_NET,
                                    cost: (0, X.formatPrice)(l - o, d)
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
                    } = this.props, n = this.validateRefundRules();
                    if (n.includes("PAYMENT_GATEWAY") || n.includes("PAYMENT_STATUS") || n.includes("ALREADY_REFUNDED") || n.includes("SKU_STICKER_PACK") || n.includes("SUBSCRIPTION_TYPE") || n.includes("GUILD_PRODUCT")) return null;
                    if ((null === (e = a.sku) || void 0 === e ? void 0 : e.productLine) === ee.SKUProductLines.COLLECTIBLES) return (0, i.jsx)("div", {
                        className: en.paymentText,
                        children: this.renderRefundActions(n)
                    });
                    let l = 0 === n.length,
                        u = ei(s),
                        o = this.isPremium ? 5 : 14;
                    return t = n.includes("SKU_TYPE") ? ea.default.Messages.BILLING_APPLICATION_CONSUMABLE_REFUND_TEXT_UNABLE.format({
                        supportURL: u
                    }) : l ? a.isPreorder && this.isSkuPreorder ? ea.default.Messages.BILLING_PREORDER_REFUND_TEXT.format({
                        supportURL: u
                    }) : a.isPremiumSubscription || a.isPremiumGuildSubscription ? ea.default.Messages.BILLING_PREMIUM_REFUND_TEXT.format({
                        dateLimit: o,
                        supportURL: u
                    }) : a.isGift ? ea.default.Messages.BILLING_GIFT_REFUND_TEXT.format({
                        dateLimit: o,
                        supportURL: u
                    }) : ea.default.Messages.BILLING_APPLICATION_REFUND_TEXT.format({
                        dateLimit: o,
                        playtimeLimit: 2,
                        supportURL: u
                    }) : a.isGift ? ea.default.Messages.BILLING_GIFT_REFUND_TEXT_UNABLE.format({
                        dateLimit: o
                    }) : a.isPremiumSubscription || a.isPremiumGuildSubscription ? ea.default.Messages.BILLING_PREMIUM_REFUND_TEXT_UNABLE.format({
                        dateLimit: o
                    }) : ea.default.Messages.BILLING_APPLICATION_REFUND_TEXT_UNABLE.format({
                        dateLimit: o,
                        playtimeLimit: 2
                    }), this.isPremium && (0, Q.userInRefundExperiment)() && (t = null), (0, i.jsxs)(r.Fragment, {
                        children: [(0, i.jsx)(m.H, {
                            className: en.paymentHeader,
                            children: ea.default.Messages.BILLING_REFUND_HEADER
                        }), (0, i.jsxs)("div", {
                            className: en.paymentText,
                            children: [(0, i.jsx)("div", {
                                children: t
                            }), this.renderRefundActions(n)]
                        })]
                    })
                }
                renderRefundCriteria(e, t, s, a) {
                    return (0, i.jsxs)("div", {
                        className: en.refundCriteria,
                        children: [(0, i.jsx)(m.H, {
                            className: en.refundSubHeader,
                            children: e
                        }), (0, i.jsxs)("div", {
                            className: en.refundIconContainer,
                            children: [(0, i.jsx)(t, {
                                className: en.refundCriteriaIcon
                            }), null != s && (0, i.jsx)("div", {
                                children: s
                            })]
                        })]
                    }, a)
                }
                renderRefundActions(e) {
                    var t, a, n;
                    let {
                        locale: r,
                        payment: l
                    } = this.props;
                    if (this.isSkuPreorder || e.includes("SKU_TYPE")) return null;
                    let u = (null === (t = l.sku) || void 0 === t ? void 0 : t.productLine) === ee.SKUProductLines.COLLECTIBLES,
                        o = e.includes("PURCHASE_DATE") ? Y.default : k.default,
                        d = e.includes("TIME_PLAYED") || (null === (a = l.premiumRefundDisqualificationReasons) || void 0 === a ? void 0 : a.includes($.PremiumRefundDisqualificationReason.PAST_REFUNDABLE_DATE)) ? Y.default : k.default;
                    if (!this.isPremium || !(0, Q.userInRefundExperiment)()) return (0, i.jsxs)("div", {
                        className: en.refundActions,
                        children: [(0, i.jsxs)("div", {
                            className: en.refundRules,
                            children: [this.renderRefundCriteria(l.isPreorder ? ea.default.Messages.BILLING_REFUND_RELEASE_DATE_SUBHEADER : ea.default.Messages.BILLING_REFUND_PURCHASE_DATE_SUBHEADER, o, ea.default.Messages.BILLING_REFUND_PURCHASE_DATE.format({
                                daysSincePurchase: this.daysSincePurchase
                            })), l.isSubscription || l.isGift || u ? null : this.renderRefundCriteria(ea.default.Messages.BILLING_REFUND_PLAY_TIME_SUBHEADER, d, null != this.timePlayed ? this.timePlayed.humanize() : ea.default.Messages.BILLING_REFUND_PLAY_TIME_NEVER_PLAYED)]
                        }), (0, i.jsx)(m.Anchor, {
                            href: ei(r),
                            children: ea.default.Messages.BILLING_REFUND_REPORT_A_PROBLEM
                        })]
                    });
                    let c = (null !== (n = l.premiumRefundDisqualificationReasons) && void 0 !== n ? n : [$.PremiumRefundDisqualificationReason.OTHER])[0],
                        f = null != c || 0 !== e.length || l.isPurchasedExternally;
                    return (0, i.jsxs)("div", {
                        className: en.refundActions,
                        children: [(0, i.jsx)(m.Tooltip, {
                            shouldShow: f,
                            text: function(e) {
                                switch (e) {
                                    case $.PremiumRefundDisqualificationReason.ALREADY_REFUNDED_PREMIUM:
                                        return ea.default.Messages.BILLING_REFUND_ALREADY_REFUNDED_PREMIUM_REASON;
                                    case $.PremiumRefundDisqualificationReason.ALREADY_REFUNDED_PREMIUM_GUILD:
                                        return ea.default.Messages.BILLING_REFUND_ALREADY_REFUNDED_PREMIUM_GUILD_REASON;
                                    case $.PremiumRefundDisqualificationReason.ENTITLEMENT_ALREADY_CONSUMED:
                                        return ea.default.Messages.BILLING_REFUND_ALREADY_CONSUMED_REASON;
                                    default:
                                        return ea.default.Messages.BILLING_REFUND_GENERIC_REASON
                                }
                            }(c),
                            children: e => (0, i.jsx)(m.Button, {
                                ...e,
                                color: m.Button.Colors.PRIMARY,
                                disabled: f,
                                onClick: () => (0, m.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await s.el("560785").then(s.bind(s, "560785"));
                                    return t => (0, i.jsx)(e, {
                                        payment: l,
                                        reportProblemUrl: ei(r),
                                        ...t
                                    })
                                }),
                                children: ea.default.Messages.BILLING_REFUND_BUTTON_TEXT
                            })
                        }), (0, i.jsx)(m.Anchor, {
                            href: ei(r),
                            children: ea.default.Messages.BILLING_REFUND_REPORT_A_PROBLEM
                        })]
                    })
                }
                renderDescription() {
                    let e, t;
                    let {
                        compactMode: s,
                        payment: a,
                        application: n,
                        guild: l,
                        stickerPack: u
                    } = this.props, {
                        expanded: o
                    } = this.state, c = a.sku, E = a.subscription, p = null != a.paymentSource && ee.PREPAID_PAYMENT_SOURCES.has(a.paymentSource.type);
                    if (null != E && 0 !== E.items.length) {
                        let s = [],
                            a = null;
                        if (E.type === ee.SubscriptionTypes.PREMIUM) E.items.forEach(e => {
                            let {
                                planId: t,
                                quantity: n
                            } = e;
                            (0, q.isPremiumBaseSubscriptionPlan)(t) ? (s.push(q.default.getDisplayName(t, !1, p)), a = et.SubscriptionPlanInfo[t].skuId) : (s.push("".concat(n > 1 ? "".concat(n, "x ") : "").concat(q.default.getDisplayName(t, !1, p))), null == a && (a = et.SubscriptionPlanInfo[t].skuId))
                        });
                        else if (E.type === ee.SubscriptionTypes.GUILD) {
                            let e = O.default.get(E.items[0].planId);
                            d(null != e, "Guild subscription plan should already have been loaded");
                            let t = e.interval === et.SubscriptionIntervalTypes.YEAR ? ea.default.Messages.YEARLY_GUILD_SUBSCRIPTION : ea.default.Messages.MONTHLY_GUILD_SUBSCRIPTION;
                            s.push(t.format({
                                planName: e.name
                            })), a = e.skuId
                        } else if (E.type === ee.SubscriptionTypes.APPLICATION) {
                            let e = O.default.get(E.items[0].planId);
                            d(null != e, "Application subscription plan should already have been loaded"), null != n ? s.push(ea.default.Messages.MONTHLY_APPLICATION_SUBSCRIPTION_V2.format({
                                tier: null == c ? void 0 : c.name
                            })) : s.push(ea.default.Messages.APPLICATION_SUBSCRIPTION_FROM_DELETED_APPLICATION), a = e.skuId
                        }
                        t = s.join(", "), e = (0, i.jsx)(j.default, {
                            className: en.descriptionIcon,
                            guildClassName: en.guildDescriptionIcon,
                            game: n,
                            guild: l,
                            size: j.default.Sizes.XSMALL,
                            skuId: a
                        })
                    } else if (null != c) {
                        var I;
                        if (t = a.isPreorder ? ea.default.Messages.PREORDER_SKU_NAME.format({
                                name: c.name
                            }) : a.isGuildProductPurchase && a.isSoftDeletedProduct ? ea.default.Messages.GUILD_PRODUCT_BILLING_DELISTED_PRODUCT : c.name, null != u) {
                            let t = (0, y.getStickerPackPreviewSticker)(u);
                            e = (0, i.jsx)(x.default, {
                                disableAnimation: !o,
                                isInteracting: o,
                                sticker: t,
                                className: en.descriptionIcon,
                                size: 24
                            })
                        } else e = (null === (I = a.sku) || void 0 === I ? void 0 : I.productLine) === ee.SKUProductLines.COLLECTIBLES ? (0, i.jsx)(H.default, {
                            className: en.shopIcon
                        }) : (0, i.jsx)(j.default, {
                            className: en.descriptionIcon,
                            guildClassName: en.guildDescriptionIcon,
                            game: n,
                            guild: l,
                            size: j.default.Sizes.XSMALL,
                            skuId: c.id
                        })
                    } else e = (0, i.jsx)(K.default, {
                        className: en.descriptionIcon
                    }), t = a.description;
                    let _ = (0, i.jsx)("div", {
                            className: en.date,
                            children: (0, z.dateFormat)(f(a.createdAt), "MM/DD/YYYY")
                        }),
                        N = a.isGift ? (0, i.jsx)(m.Tooltip, {
                            text: ea.default.Messages.BILLING_GIFT_PURCHASE_TOOLTIP,
                            children: e => (0, i.jsx)(V.default, {
                                className: en.giftIcon,
                                ...e
                            })
                        }) : null;
                    return s ? (0, i.jsxs)("div", {
                        className: en.description,
                        children: [e, (0, i.jsxs)("div", {
                            children: [t, _]
                        }), N]
                    }) : (0, i.jsxs)(r.Fragment, {
                        children: [_, (0, i.jsxs)("div", {
                            className: en.description,
                            children: [e, (0, i.jsx)("div", {
                                children: t
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
                            className: en.sectionDivider
                        }), e.isSoftDeletedProduct ? (0, i.jsx)(M.default, {
                            className: en.warningBlock,
                            buttonPosition: M.WarningBlockButtonPosition.RIGHT,
                            notice: ea.default.Messages.GUILD_PRODUCT_BILLING_PRODUCT_UNAVAILABLE,
                            ctaLabel: ea.default.Messages.GUILD_PRODUCT_BILLING_CONTACT_SUPPORT,
                            onClick: () => (0, N.default)(ei(s))
                        }) : null != a && null != e.sku && (0, i.jsx)(eE, {
                            guildId: a,
                            guildProductListingId: e.sku.id
                        })]
                    }) : null
                }
                renderExpandedSection() {
                    return (0, i.jsx)(m.Clickable, {
                        onClick: e => e.stopPropagation(),
                        children: (0, i.jsxs)("div", {
                            className: en.expandedInfo,
                            children: [(0, i.jsx)(m.H, {
                                className: en.paymentHeader,
                                children: ea.default.Messages.BILLING_PURCHASE_DETAILS_HEADER
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
                        children: e => (0, i.jsxs)(m.Clickable, {
                            onClick: this.handleExpandInfo,
                            className: u(a ? en.payment : en.hoverablePayment, t, {
                                [en.compact]: s
                            }),
                            focusProps: {
                                offset: 4
                            },
                            ...e,
                            children: [(0, i.jsxs)(B.default, {
                                className: en.summaryInfo,
                                align: B.default.Align.CENTER,
                                children: [this.renderDescription(), (0, i.jsxs)("div", {
                                    className: en.amount,
                                    children: [this.renderStatus(), this.renderPrice()]
                                }), (0, i.jsx)(w.default, {
                                    className: en.expand,
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
                        rule: "TIME_PLAYED",
                        canRefund: () => {
                            if (this.isSkuPreorder) return !0;
                            let e = this.timePlayed;
                            return null == e || e.asMilliseconds() < f.duration(2, "hours").asMilliseconds()
                        }
                    }, {
                        rule: "PURCHASE_DATE",
                        canRefund: () => {
                            let {
                                payment: e
                            } = this.props;
                            if (this.isSkuPreorder) return !0;
                            let t = e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift ? 5 : 14;
                            return this.daysSincePurchase <= t
                        }
                    }, {
                        rule: "SKU_TYPE",
                        canRefund: () => {
                            let {
                                payment: e
                            } = this.props;
                            return null == e.sku || e.sku.type !== ee.SKUTypes.CONSUMABLE
                        }
                    }, {
                        rule: "ALREADY_REFUNDED",
                        canRefund: () => {
                            let {
                                payment: e
                            } = this.props;
                            return e.amountRefunded < e.amount
                        }
                    }, {
                        rule: "PAYMENT_STATUS",
                        canRefund: () => {
                            let {
                                payment: e
                            } = this.props;
                            return !el.includes(e.status)
                        }
                    }, {
                        rule: "PAYMENT_GATEWAY",
                        canRefund: () => {
                            let {
                                payment: e
                            } = this.props;
                            return null == e.paymentGateway || !eu.includes(e.paymentGateway)
                        }
                    }, {
                        rule: "SKU_STICKER_PACK",
                        canRefund: () => {
                            let {
                                payment: e
                            } = this.props;
                            return null == e.sku || !(0, Z.hasFlag)(e.sku.flags, ee.SKUFlags.STICKER_PACK)
                        }
                    }, {
                        rule: "SUBSCRIPTION_TYPE",
                        canRefund: () => {
                            var e, t;
                            let {
                                payment: s
                            } = this.props;
                            return (null === (e = s.subscription) || void 0 === e ? void 0 : e.type) !== ee.SubscriptionTypes.GUILD && (null === (t = s.subscription) || void 0 === t ? void 0 : t.type) !== ee.SubscriptionTypes.APPLICATION
                        }
                    }, {
                        rule: "GUILD_PRODUCT",
                        canRefund: () => {
                            let {
                                payment: e
                            } = this.props;
                            return null == e.sku || !(0, Z.hasFlag)(e.sku.flags, p.SKUFlags.GUILD_PRODUCT)
                        }
                    }], this.handleExpandInfo = () => {
                        this.setState({
                            expanded: !this.state.expanded
                        })
                    }
                }
            }

            function eI(e) {
                var t, s;
                let {
                    payment: a,
                    locale: n,
                    compactMode: l,
                    className: u
                } = e, o = null != a.sku && er.includes(a.sku.type), d = null != a.sku && o ? a.sku.applicationId : null, c = null === (t = a.sku) || void 0 === t ? void 0 : t.applicationId, f = (null === (s = a.subscription) || void 0 === s ? void 0 : s.type) === ee.SubscriptionTypes.APPLICATION, {
                    applicationStatistics: E,
                    gameApplication: p,
                    paymentSources: m
                } = (0, I.useStateFromStoresObject)([v.default, b.default, P.default], () => {
                    var e, t;
                    return {
                        applicationStatistics: null != d ? b.default.getCurrentUserStatisticsForApplication(d) : null,
                        gameApplication: null !== (t = P.default.getApplication(null != d ? d : "")) && void 0 !== t ? t : null === (e = a.sku) || void 0 === e ? void 0 : e.application,
                        paymentSources: v.default.paymentSources
                    }
                }), _ = (0, I.useStateFromStores)([P.default], () => null != c ? P.default.getApplication(c) : null);
                r.useEffect(() => {
                    f && null != c && (0, S.fetchApplication)(c)
                }, [c, f]);
                let N = (0, I.useStateFromStores)([U.default], () => U.default.getGuild(null == p ? void 0 : p.guildId));
                return (0, i.jsx)(ep, {
                    applicationStatistics: E,
                    application: f ? _ : o ? p : void 0,
                    guild: N,
                    stickerPack: null,
                    paymentSources: m,
                    locale: n,
                    compactMode: l,
                    className: u,
                    payment: a
                })
            }
            ep.defaultProps = {
                compactMode: !1
            }
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return F
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("627445"),
                o = s.n(r),
                d = s("733724"),
                u = s("446674"),
                c = s("77078"),
                S = s("850068"),
                E = s("812204"),
                f = s("685665"),
                m = s("306073"),
                T = s("430780"),
                _ = s("809071"),
                g = s("690679"),
                h = s("388290"),
                I = s("357957"),
                N = s("476263"),
                p = s("555158"),
                C = s("876269"),
                A = s("191814"),
                O = s("476765"),
                x = s("837899"),
                M = s("68238"),
                R = s("956089"),
                v = s("90592"),
                L = s("850644"),
                D = s("191816"),
                P = s("49111"),
                j = s("782340"),
                b = s("563810");
            let U = e => {
                    let {
                        label: t,
                        value: s,
                        showInfoIcon: n,
                        infoIconTooltipText: l
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: b.infoCard,
                        children: [(0, a.jsxs)("div", {
                            className: b.infoCardLabelContainer,
                            children: [(0, a.jsx)(c.Heading, {
                                variant: "heading-deprecated-12/semibold",
                                className: b.infoCardLabel,
                                children: t
                            }), n && (0, a.jsx)(c.Tooltip, {
                                text: l,
                                children: e => (0, a.jsx)(M.default, {
                                    ...e,
                                    className: b.infoCardIcon
                                })
                            })]
                        }), (0, a.jsx)(c.Heading, {
                            variant: "heading-xl/semibold",
                            className: b.infoCardValue,
                            children: s
                        })]
                    })
                },
                y = e => {
                    let {
                        subscription: t,
                        disabled: s
                    } = e, {
                        analyticsLocations: n
                    } = (0, f.default)(), [l] = (0, _.useSubscriptionInvoicePreview)({
                        subscriptionId: t.id,
                        renewal: !0,
                        analyticsLocations: n,
                        analyticsLocation: E.default.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
                    }), i = (0, u.useStateFromStores)([I.default], () => I.default.hasFetchedPaymentSources);
                    return i ? null == l ? null : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(c.FormTitle, {
                            children: j.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAYMENT_METHOD_LABEL
                        }), (0, a.jsx)(g.default, {
                            subscription: t,
                            currentInvoicePreview: l,
                            dropdownClassName: b.paymentSourceDropdown,
                            disabled: s
                        })]
                    }) : (0, a.jsx)(c.Spinner, {})
                },
                B = e => {
                    let {
                        isCancelled: t,
                        onCancelSubscriptionClick: s,
                        isResubscribing: n,
                        onResubscribeClick: l
                    } = e;
                    return (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(c.FormTitle, {
                            children: j.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_LABEL
                        }), (0, a.jsx)("div", {
                            className: b.rowButtons,
                            children: t ? (0, a.jsx)(c.Button, {
                                onClick: l,
                                submitting: n,
                                children: j.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_RESTART
                            }) : (0, a.jsx)(C.default, {
                                label: j.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_CANCEL,
                                onClick: s
                            })
                        })]
                    })
                };
            var F = e => {
                let {
                    subscription: t
                } = e, {
                    listing: l,
                    groupListing: r,
                    guild: u,
                    expanded: E,
                    handleToggleExpanded: _,
                    subscriptionInfo: g,
                    application: I
                } = (0, D.default)(t), C = (0, O.useUID)(), [M, F] = n.useState(!1), {
                    analyticsLocations: G
                } = (0, f.default)();
                if (null == r || null == l || null == g) return null;
                let k = () => {
                        o(null != I, "Application cannot be null"), (0, c.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await s.el("282941").then(s.bind(s, "282941"));
                            return s => (0, a.jsx)(e, {
                                application: I,
                                listing: l,
                                subscription: t,
                                guild: u,
                                ...s
                            })
                        })
                    },
                    w = async () => {
                        try {
                            F(!0);
                            let {
                                subscription: e
                            } = await S.resubscribeToSubscription(t, G);
                            null != e && (0, c.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await s.el("507030").then(s.bind(s, "507030"));
                                return s => (0, a.jsx)(t, {
                                    listing: l,
                                    subscription: h.default.createFromServer(e),
                                    ...s
                                })
                            })
                        } finally {
                            F(!1)
                        }
                    }, {
                        isCancelled: H,
                        isDeleted: V,
                        isPastDue: Y,
                        subscriptionPlanPrice: W,
                        subscribedSinceDate: K,
                        currentPeriodEndDate: z,
                        currentPeriodEndLabel: Q
                    } = g, q = (0, v.isApplicationUserSubscription)(l.sku_flags), Z = (0, v.isApplicationGuildSubscription)(l.sku_flags), X = l.soft_deleted || null == I || (!Z || null == u) && !q, J = () => H || V ? (0, a.jsx)(R.TextBadge, {
                        text: j.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CANCELED
                    }) : Y ? (0, a.jsx)(c.Tooltip, {
                        text: j.default.Messages.APPLICATION_SUBSCRIPTION_USER_SUBSCRIPTION_PAST_DUE_WARNING,
                        children: e => (0, a.jsx)("div", {
                            ...e,
                            children: (0, a.jsx)(R.TextBadge, {
                                className: b.paymentDueBadge,
                                text: j.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAST_DUE,
                                color: d.default.YELLOW_300
                            })
                        })
                    }) : null, $ = null;
                if (Z) {
                    var ee;
                    $ = (0, a.jsxs)(c.Text, {
                        variant: "text-sm/normal",
                        className: b.tierName,
                        children: [j.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_IN_GUILD.format({
                            guildName: null !== (ee = null == u ? void 0 : u.name) && void 0 !== ee ? ee : j.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_GUILD_NAME_UNAVAILABLE
                        }), null != u && (0, a.jsx)(N.default, {
                            guild: u,
                            size: N.default.Sizes.MINI,
                            className: b.guildIcon
                        })]
                    })
                } else q && ($ = (0, a.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    className: b.tierName,
                    children: j.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_PERSONAL_SUBSCRIPTION
                }));
                return (0, a.jsxs)("div", {
                    className: b.container,
                    children: [(0, a.jsx)(m.default, {
                        onClick: _,
                        className: b.headerContainer,
                        children: e => {
                            let {
                                areaRef: t,
                                handleStopPropagation: s
                            } = e;
                            return (0, a.jsxs)(a.Fragment, {
                                children: [null != I && (0, a.jsx)(L.default, {
                                    size: L.ApplicationIconSize.SMALL,
                                    className: b.applicationIcon,
                                    application: I,
                                    asset: l.image_asset
                                }), (0, a.jsxs)("div", {
                                    className: b.headerTextContainer,
                                    children: [(0, a.jsx)(c.Text, {
                                        variant: "text-md/medium",
                                        className: b.applicationName,
                                        children: null != I ? I.name : j.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_APPLICATION_NAME_UNAVAILABLE
                                    }), (0, a.jsxs)("div", {
                                        className: b.headerSubtitleContainer,
                                        children: [$, J()]
                                    })]
                                }), (0, a.jsx)(c.Clickable, {
                                    onClick: s(_),
                                    "aria-label": j.default.Messages.APPLICATION_SUBSCRIPTION_TOGGLE_SECTION_LABEL,
                                    "aria-controls": C,
                                    "aria-expanded": E,
                                    focusProps: {
                                        ringTarget: t
                                    },
                                    children: (0, a.jsx)(x.default, {
                                        className: i(b.arrowIcon, {
                                            [b.arrowIconExpanded]: E
                                        })
                                    })
                                })]
                            })
                        }
                    }), E ? (0, a.jsxs)("div", {
                        id: C,
                        children: [(0, a.jsx)("div", {
                            className: b.divider
                        }), V ? (0, a.jsx)(p.default, {
                            messageType: p.HelpMessageTypes.WARNING,
                            className: b.deletedHelpMessage,
                            children: j.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_DELETED_WARNING
                        }) : null, (0, a.jsx)(T.default, {
                            groupListingId: r.id,
                            subscription: t,
                            className: b.changePlanNotice
                        }), (0, a.jsxs)("div", {
                            className: b.subscriptionInfoCards,
                            children: [(0, a.jsx)(U, {
                                label: Q,
                                value: j.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_CURRENT_PERIOD_END_DATE.format({
                                    timestamp: z.getTime()
                                })
                            }), (0, a.jsx)(U, {
                                label: j.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_PRICE,
                                value: W
                            }), (0, a.jsx)(U, {
                                label: j.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIBED_SINCE,
                                value: j.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIBED_SINCE_DATE.format({
                                    timestamp: K.getTime()
                                })
                            })]
                        }), (0, a.jsx)(A.default, {
                            size: 16
                        }), t.status === P.SubscriptionStatusTypes.ACTIVE && (0, a.jsx)(y, {
                            subscription: t,
                            disabled: V
                        }), !X && (0, a.jsx)(B, {
                            isCancelled: H,
                            onCancelSubscriptionClick: k,
                            isResubscribing: M,
                            onResubscribeClick: w
                        })]
                    }) : null]
                })
            }
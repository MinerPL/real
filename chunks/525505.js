            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return V
                }
            }), s("424973");
            var a = s("37983"),
                n = s("884691"),
                r = s("414456"),
                l = s.n(r),
                i = s("446674"),
                u = s("819855"),
                o = s("77078"),
                d = s("875212"),
                c = s("841098"),
                _ = s("812204"),
                E = s("685665"),
                I = s("308592"),
                T = s("805172"),
                f = s("915639"),
                S = s("697218"),
                R = s("521012"),
                p = s("36694"),
                m = s("945330"),
                N = s("719923"),
                A = s("153160"),
                g = s("324878"),
                P = s("917247"),
                C = s("641078"),
                O = s("400307"),
                M = s("218435"),
                L = s("881155"),
                h = s("646718"),
                x = s("49111"),
                v = s("782340"),
                U = s("992250"),
                D = s("640754"),
                j = s("510407"),
                b = s("657890"),
                G = s("823986");
            let y = e => {
                    let {
                        isLightTheme: t
                    } = e, s = (0, C.getBOGOPillCopy)();
                    return (0, a.jsx)(O.PremiumPillWithSparkles, {
                        text: s,
                        className: U.bogoPillWithSparkles,
                        colorOptions: t ? O.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL : O.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL
                    })
                },
                B = () => (0, a.jsx)("div", {
                    className: U.mostPopularPill,
                    children: (0, a.jsx)(o.Heading, {
                        className: U.mostPopularText,
                        variant: "heading-deprecated-12/extrabold",
                        children: v.default.Messages.MOST_POPULAR
                    })
                }),
                k = e => {
                    let t, {
                            premiumType: s
                        } = e,
                        n = (0, c.default)();
                    t = s === h.PremiumTypes.TIER_0 ? (0, u.isThemeDark)(n) ? D : j : (0, u.isThemeDark)(n) ? b : G;
                    let r = (0, N.getPremiumTypeDisplayName)(s);
                    return (0, a.jsx)("img", {
                        src: t,
                        className: U.logo,
                        alt: r
                    })
                },
                H = e => {
                    let {
                        text: t,
                        badge: s
                    } = e;
                    return (0, a.jsxs)(o.Text, {
                        color: "text-normal",
                        variant: "text-sm/normal",
                        children: [t, " ", s]
                    })
                },
                K = e => {
                    let {
                        text: t
                    } = e;
                    return (0, a.jsx)(o.Text, {
                        color: "header-primary",
                        variant: "text-md/semibold",
                        children: t
                    })
                },
                F = e => {
                    let {
                        includes: t
                    } = e;
                    return t ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(p.default, {
                            className: U.checkmarkIcon,
                            "aria-hidden": !0
                        }), (0, a.jsx)(o.HiddenVisually, {
                            children: v.default.Messages.INCLUDED
                        })]
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(m.default, {
                            className: U.closeIcon,
                            "aria-hidden": !0
                        }), (0, a.jsx)(o.HiddenVisually, {
                            children: v.default.Messages.NOT_INCLUDED
                        })]
                    })
                },
                W = e => {
                    let {
                        label: t,
                        column1: s,
                        column2: n
                    } = e;
                    return (0, a.jsxs)("tr", {
                        className: l(U.headerRow, U.rowBottomBorder, U.topBorderRadius),
                        children: [(0, a.jsx)("th", {
                            scope: "col",
                            className: U.headerLabelCell,
                            children: t
                        }), (0, a.jsx)("th", {
                            scope: "col",
                            className: U.headerCell,
                            children: s
                        }), (0, a.jsx)("th", {
                            scope: "col",
                            className: l(U.headerCell, U.topBorderRadius),
                            children: n
                        })]
                    })
                },
                w = e => {
                    let {
                        label: t,
                        column1: s,
                        column2: n,
                        withBottomBorder: r = !0,
                        withTopBorderRadius: i = !1,
                        withBottomBorderRadius: u = !1,
                        buttonsRow: o = !1,
                        shortRow: d = !1
                    } = e;
                    return (0, a.jsxs)("tr", {
                        className: l(U.row, {
                            [U.wideRow]: o,
                            [U.topBorderRadius]: i,
                            [U.bottomBorderRadius]: u,
                            [U.rowBottomBorder]: r,
                            [U.shortRow]: d
                        }),
                        children: [(0, a.jsx)("th", {
                            scope: "row",
                            className: U.labelCell,
                            children: t
                        }), (0, a.jsx)("td", {
                            className: l(U.cell, {
                                [U.buttonsCell]: o
                            }),
                            children: s
                        }), (0, a.jsx)("td", {
                            className: l(U.cell, {
                                [U.topBorderRadius]: i,
                                [U.bottomBorderRadius]: u,
                                [U.buttonsCell]: o
                            }),
                            children: n
                        })]
                    })
                };
            var V = e => {
                var t;
                let s, {
                        className: r,
                        hideCTAs: p = !1,
                        headingOverride: m,
                        hidePill: D = !1,
                        selectedPlanColumnClassName: j,
                        selectedPlanTier: b = h.PremiumTypes.TIER_2
                    } = e,
                    {
                        AnalyticsLocationProvider: G
                    } = (0, E.default)(_.default.PREMIUM_MARKETING_PLAN_COMPARISON),
                    V = (0, i.useStateFromStores)([R.default], () => R.default.hasFetchedSubscriptions()),
                    Y = (0, I.useSubscriptionPlansLoaded)(),
                    z = "PlanComparisonTable";
                (0, d.useTriggerDebuggingAA)({
                    location: z + " auto on",
                    autoTrackExposure: !0
                }), (0, d.useTriggerDebuggingAA)({
                    location: z + " auto off",
                    autoTrackExposure: !1
                });
                let {
                    marketingEnabled: Z
                } = (0, T.default)({
                    location: z
                }), X = (0, c.default)(), Q = (0, u.isThemeLight)(X), J = (0, i.useStateFromStores)([S.default], () => S.default.getCurrentUser()), q = (0, N.isPremiumExactly)(J, h.PremiumTypes.TIER_2), $ = (0, P.usePremiumTrialOffer)(), ee = null == $ ? void 0 : null === (t = $.subscription_trial) || void 0 === t ? void 0 : t.sku_id, et = (0, g.useCurrentPremiumTrialTier)(), es = (0, C.useIsEligibleForBogoPromotion)();
                if (!V || !Y) return null;
                let ea = N.default.getDefaultPrice(h.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
                    en = N.default.getDefaultPrice(h.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
                    er = {
                        label: (0, a.jsx)(o.Heading, {
                            className: U.textColor,
                            variant: "heading-lg/extrabold",
                            children: v.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_HEADER
                        }),
                        column1: (0, a.jsx)(k, {
                            premiumType: h.PremiumTypes.TIER_0
                        }),
                        column2: (0, a.jsx)(k, {
                            premiumType: h.PremiumTypes.TIER_2
                        })
                    },
                    el = [{
                        label: (0, a.jsx)(H, {
                            text: v.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_PRICE
                        }),
                        column1: (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(K, {
                                text: N.default.formatPriceString(ea, h.SubscriptionIntervalTypes.MONTH)
                            })
                        }),
                        column2: (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(K, {
                                text: N.default.formatPriceString(en, h.SubscriptionIntervalTypes.MONTH)
                            })
                        })
                    }, {
                        label: (0, a.jsx)(H, {
                            text: v.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_EMOJI
                        }),
                        column1: (0, a.jsx)(F, {
                            includes: !0
                        }),
                        column2: (0, a.jsx)(F, {
                            includes: !0
                        })
                    }, {
                        label: (0, a.jsx)(H, {
                            text: v.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_STICKER
                        }),
                        column1: (0, a.jsx)(F, {
                            includes: !0
                        }),
                        column2: (0, a.jsx)(F, {
                            includes: !0
                        })
                    }, {
                        label: (0, a.jsx)(H, {
                            text: v.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE
                        }),
                        column1: (0, a.jsx)(F, {
                            includes: !0
                        }),
                        column2: (0, a.jsx)(F, {
                            includes: !0
                        })
                    }, {
                        label: (0, a.jsx)(H, {
                            text: v.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SUPER_REACTIONS
                        }),
                        column1: (0, a.jsx)(F, {
                            includes: !0
                        }),
                        column2: (0, a.jsx)(F, {
                            includes: !0
                        })
                    }, {
                        label: (0, a.jsx)(H, {
                            text: v.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_UPLOAD
                        }),
                        column1: (0, a.jsx)(K, {
                            text: (0, N.getMaxFileSizeForPremiumType)(h.PremiumTypes.TIER_0)
                        }),
                        column2: (0, a.jsx)(K, {
                            text: (0, N.getMaxFileSizeForPremiumType)(h.PremiumTypes.TIER_2)
                        })
                    }, {
                        label: (0, a.jsx)(H, {
                            text: v.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_STREAMING
                        }),
                        column1: (0, a.jsx)(F, {
                            includes: !1
                        }),
                        column2: (0, a.jsx)(K, {
                            text: v.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_STREAMING_DETAILS
                        })
                    }, {
                        label: (0, a.jsx)(H, {
                            text: v.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_BOOSTS.format({
                                numBoosts: h.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
                                percentageOff: (0, A.formatPercent)(f.default.locale, h.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
                            })
                        }),
                        column1: (0, a.jsx)(F, {
                            includes: !1
                        }),
                        column2: (0, a.jsx)(F, {
                            includes: !0
                        })
                    }, {
                        label: (0, a.jsx)(H, {
                            text: v.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_PROFILE_THEMES
                        }),
                        column1: (0, a.jsx)(F, {
                            includes: !1
                        }),
                        column2: (0, a.jsx)(F, {
                            includes: !0
                        })
                    }, {
                        label: (0, a.jsx)(H, {
                            text: v.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SERVER_PROFILE
                        }),
                        column1: (0, a.jsx)(F, {
                            includes: !1
                        }),
                        column2: (0, a.jsx)(F, {
                            includes: !0
                        })
                    }, {
                        label: (0, a.jsx)(H, {
                            text: Z ? v.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SHOP_DISCOUNTS_GENERIC : v.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SHOP_DISCOUNTS
                        }),
                        column1: (0, a.jsx)(F, {
                            includes: !1
                        }),
                        column2: (0, a.jsx)(F, {
                            includes: !0
                        })
                    }, {
                        label: (0, a.jsx)(H, {
                            text: v.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_CLIENT_THEME
                        }),
                        column1: (0, a.jsx)(F, {
                            includes: !1
                        }),
                        column2: (0, a.jsx)(F, {
                            includes: !0
                        })
                    }, {
                        label: (0, a.jsx)(H, {
                            text: v.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_BADGE
                        }),
                        column1: (0, a.jsx)(F, {
                            includes: !0
                        }),
                        column2: (0, a.jsx)(F, {
                            includes: !0
                        })
                    }, {
                        label: (0, a.jsx)(H, {
                            text: v.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_VIDEO_BACKGROUND
                        }),
                        column1: (0, a.jsx)(F, {
                            includes: !0
                        }),
                        column2: (0, a.jsx)(F, {
                            includes: !0
                        })
                    }, {
                        label: (0, a.jsx)(H, {
                            text: v.default.Messages.SOUNDBOARD_MARKETING_CUSTOM_SOUNDS_ANYWHERE
                        }),
                        column1: (0, a.jsx)(F, {
                            includes: !1
                        }),
                        column2: (0, a.jsx)(F, {
                            includes: !0
                        })
                    }, {
                        label: (0, a.jsx)(H, {
                            text: v.default.Messages.SOUNDBOARD_MARKETING_CUSTOM_ENTRY_SOUNDS
                        }),
                        column1: (0, a.jsx)(F, {
                            includes: !1
                        }),
                        column2: (0, a.jsx)(F, {
                            includes: !0
                        })
                    }, {
                        label: (0, a.jsx)(H, {
                            text: v.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SERVER_LIMIT
                        }),
                        column1: (0, a.jsx)(F, {
                            includes: !1
                        }),
                        column2: (0, a.jsx)(F, {
                            includes: !0
                        })
                    }, {
                        label: (0, a.jsx)(H, {
                            text: v.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_MESSAGE_LENGTH.format({
                                maxChars: x.MAX_MESSAGE_LENGTH_PREMIUM
                            })
                        }),
                        column1: (0, a.jsx)(F, {
                            includes: !1
                        }),
                        column2: (0, a.jsx)(F, {
                            includes: !0
                        })
                    }];
                return p ? el.push({
                    label: null,
                    column1: null,
                    column2: null,
                    withBottomBorder: !1,
                    withBottomBorderRadius: !0,
                    buttonsRow: !1,
                    shortRow: !0
                }) : el.push({
                    label: null,
                    column1: (0, a.jsxs)(a.Fragment, {
                        children: [ee === h.PremiumSubscriptionSKUs.TIER_2 || es ? (0, a.jsx)(L.default, {
                            className: U.button,
                            subscriptionTier: h.PremiumSubscriptionSKUs.TIER_0,
                            showIcon: !1,
                            look: o.ButtonLooks.OUTLINED,
                            color: Q ? o.ButtonColors.BRAND_NEW : o.ButtonColors.WHITE,
                            buttonShineClassName: void 0
                        }) : (0, a.jsx)(L.default, {
                            className: U.button,
                            subscriptionTier: h.PremiumSubscriptionSKUs.TIER_0,
                            showIcon: !1
                        }), et === h.PremiumTypes.TIER_2 || null != ee ? null : (0, a.jsx)(M.default, {
                            className: U.button,
                            subscriptionTier: h.PremiumSubscriptionSKUs.TIER_0
                        })]
                    }),
                    column2: (0, a.jsxs)(a.Fragment, {
                        children: [ee === h.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(L.default, {
                            className: U.button,
                            subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2,
                            showIcon: !1,
                            look: o.ButtonLooks.OUTLINED,
                            color: Q ? o.ButtonColors.BRAND_NEW : o.ButtonColors.WHITE,
                            buttonShineClassName: void 0
                        }) : (0, a.jsx)(L.default, {
                            className: U.button,
                            subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2,
                            showIcon: !1,
                            isEligibleForBogoPromotion: es
                        }), et === h.PremiumTypes.TIER_0 || null != ee ? null : (0, a.jsx)(M.default, {
                            className: U.button,
                            subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2
                        })]
                    }),
                    withBottomBorder: !1,
                    withBottomBorderRadius: !0,
                    buttonsRow: null == ee
                }), s = D ? null : null != ee || null != et ? (0, a.jsx)(O.PremiumPillWithSparkles, {
                    text: null != ee ? v.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT : v.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_PLAN_ACTIVATED_PILL,
                    className: U.freeTrialPillWithSparkles,
                    colorOptions: ee === h.PremiumSubscriptionSKUs.TIER_0 ? Q ? O.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_GRADIENT_FILL : O.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_WHITE_FILL : Q ? q ? O.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL : O.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL : O.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
                }) : es ? (0, a.jsx)(y, {
                    isLightTheme: Q
                }) : (0, a.jsx)(B, {}), (0, a.jsx)(G, {
                    children: (0, a.jsxs)("div", {
                        className: l(U.root, r),
                        "data-testid": "v2-marketing-page-comparison-table",
                        children: [(0, a.jsx)(o.Heading, {
                            className: l(U.titleText, U.textColor),
                            variant: "heading-xxl/extrabold",
                            children: null != m ? m : v.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_TITLE
                        }), (0, a.jsxs)("div", {
                            className: U.tableWrapper,
                            children: [(0, a.jsx)("div", {
                                className: ee === h.PremiumSubscriptionSKUs.TIER_0 || et === h.PremiumTypes.TIER_0 || b === h.PremiumTypes.TIER_0 ? l(j, U.tier0ColumnOuter) : l(j, U.tier2ColumnOuter),
                                children: s
                            }), (0, a.jsxs)("table", {
                                className: U.table,
                                children: [(0, a.jsx)("thead", {
                                    children: (0, a.jsx)(W, {
                                        ...er
                                    })
                                }), (0, a.jsx)("tbody", {
                                    children: el.map((e, t) => (0, n.createElement)(w, {
                                        ...e,
                                        key: t
                                    }))
                                })]
                            })]
                        })]
                    })
                })
            }
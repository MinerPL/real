            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return w
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
                f = s("915639"),
                T = s("697218"),
                S = s("521012"),
                R = s("36694"),
                p = s("945330"),
                A = s("719923"),
                N = s("153160"),
                m = s("324878"),
                g = s("917247"),
                P = s("641078"),
                C = s("400307"),
                O = s("218435"),
                M = s("881155"),
                L = s("646718"),
                h = s("49111"),
                x = s("782340"),
                v = s("992250"),
                U = s("640754"),
                D = s("510407"),
                b = s("657890"),
                j = s("823986");
            let G = e => {
                    let {
                        isLightTheme: t
                    } = e, s = (0, P.getBOGOPillCopy)();
                    return (0, a.jsx)(C.PremiumPillWithSparkles, {
                        text: s,
                        className: v.bogoPillWithSparkles,
                        colorOptions: t ? C.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL : C.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL
                    })
                },
                y = () => (0, a.jsx)("div", {
                    className: v.mostPopularPill,
                    children: (0, a.jsx)(o.Heading, {
                        className: v.mostPopularText,
                        variant: "heading-deprecated-12/extrabold",
                        children: x.default.Messages.MOST_POPULAR
                    })
                }),
                B = e => {
                    let t, {
                            premiumType: s
                        } = e,
                        n = (0, c.default)();
                    t = s === L.PremiumTypes.TIER_0 ? (0, u.isThemeDark)(n) ? U : D : (0, u.isThemeDark)(n) ? b : j;
                    let r = (0, A.getPremiumTypeDisplayName)(s);
                    return (0, a.jsx)("img", {
                        src: t,
                        className: v.logo,
                        alt: r
                    })
                },
                k = e => {
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
                H = e => {
                    let {
                        text: t
                    } = e;
                    return (0, a.jsx)(o.Text, {
                        color: "header-primary",
                        variant: "text-md/semibold",
                        children: t
                    })
                },
                K = e => {
                    let {
                        includes: t
                    } = e;
                    return t ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(R.default, {
                            className: v.checkmarkIcon,
                            "aria-hidden": !0
                        }), (0, a.jsx)(o.HiddenVisually, {
                            children: x.default.Messages.INCLUDED
                        })]
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(p.default, {
                            className: v.closeIcon,
                            "aria-hidden": !0
                        }), (0, a.jsx)(o.HiddenVisually, {
                            children: x.default.Messages.NOT_INCLUDED
                        })]
                    })
                },
                F = e => {
                    let {
                        label: t,
                        column1: s,
                        column2: n
                    } = e;
                    return (0, a.jsxs)("tr", {
                        className: l(v.headerRow, v.rowBottomBorder, v.topBorderRadius),
                        children: [(0, a.jsx)("th", {
                            scope: "col",
                            className: v.headerLabelCell,
                            children: t
                        }), (0, a.jsx)("th", {
                            scope: "col",
                            className: v.headerCell,
                            children: s
                        }), (0, a.jsx)("th", {
                            scope: "col",
                            className: l(v.headerCell, v.topBorderRadius),
                            children: n
                        })]
                    })
                },
                W = e => {
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
                        className: l(v.row, {
                            [v.wideRow]: o,
                            [v.topBorderRadius]: i,
                            [v.bottomBorderRadius]: u,
                            [v.rowBottomBorder]: r,
                            [v.shortRow]: d
                        }),
                        children: [(0, a.jsx)("th", {
                            scope: "row",
                            className: v.labelCell,
                            children: t
                        }), (0, a.jsx)("td", {
                            className: l(v.cell, {
                                [v.buttonsCell]: o
                            }),
                            children: s
                        }), (0, a.jsx)("td", {
                            className: l(v.cell, {
                                [v.topBorderRadius]: i,
                                [v.bottomBorderRadius]: u,
                                [v.buttonsCell]: o
                            }),
                            children: n
                        })]
                    })
                };
            var w = e => {
                var t;
                let s, {
                        className: r,
                        hideCTAs: R = !1,
                        headingOverride: p,
                        hidePill: U = !1,
                        selectedPlanColumnClassName: D,
                        selectedPlanTier: b = L.PremiumTypes.TIER_2
                    } = e,
                    {
                        AnalyticsLocationProvider: j
                    } = (0, E.default)(_.default.PREMIUM_MARKETING_PLAN_COMPARISON),
                    w = (0, i.useStateFromStores)([S.default], () => S.default.hasFetchedSubscriptions()),
                    V = (0, I.useSubscriptionPlansLoaded)(),
                    Y = "PlanComparisonTable";
                (0, d.useTriggerDebuggingAA)({
                    location: Y + " auto on",
                    autoTrackExposure: !0
                }), (0, d.useTriggerDebuggingAA)({
                    location: Y + " auto off",
                    autoTrackExposure: !1
                });
                let z = (0, c.default)(),
                    Z = (0, u.isThemeLight)(z),
                    X = (0, i.useStateFromStores)([T.default], () => T.default.getCurrentUser()),
                    Q = (0, A.isPremiumExactly)(X, L.PremiumTypes.TIER_2),
                    J = (0, g.usePremiumTrialOffer)(),
                    q = null == J ? void 0 : null === (t = J.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
                    $ = (0, m.useCurrentPremiumTrialTier)(),
                    ee = (0, P.useIsEligibleForBogoPromotion)();
                if (!w || !V) return null;
                let et = A.default.getDefaultPrice(L.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
                    es = A.default.getDefaultPrice(L.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
                    ea = {
                        label: (0, a.jsx)(o.Heading, {
                            className: v.textColor,
                            variant: "heading-lg/extrabold",
                            children: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_HEADER
                        }),
                        column1: (0, a.jsx)(B, {
                            premiumType: L.PremiumTypes.TIER_0
                        }),
                        column2: (0, a.jsx)(B, {
                            premiumType: L.PremiumTypes.TIER_2
                        })
                    },
                    en = [{
                        label: (0, a.jsx)(k, {
                            text: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_PRICE
                        }),
                        column1: (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(H, {
                                text: A.default.formatPriceString(et, L.SubscriptionIntervalTypes.MONTH)
                            })
                        }),
                        column2: (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(H, {
                                text: A.default.formatPriceString(es, L.SubscriptionIntervalTypes.MONTH)
                            })
                        })
                    }, {
                        label: (0, a.jsx)(k, {
                            text: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_EMOJI
                        }),
                        column1: (0, a.jsx)(K, {
                            includes: !0
                        }),
                        column2: (0, a.jsx)(K, {
                            includes: !0
                        })
                    }, {
                        label: (0, a.jsx)(k, {
                            text: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_STICKER
                        }),
                        column1: (0, a.jsx)(K, {
                            includes: !0
                        }),
                        column2: (0, a.jsx)(K, {
                            includes: !0
                        })
                    }, {
                        label: (0, a.jsx)(k, {
                            text: x.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE
                        }),
                        column1: (0, a.jsx)(K, {
                            includes: !0
                        }),
                        column2: (0, a.jsx)(K, {
                            includes: !0
                        })
                    }, {
                        label: (0, a.jsx)(k, {
                            text: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SUPER_REACTIONS
                        }),
                        column1: (0, a.jsx)(K, {
                            includes: !0
                        }),
                        column2: (0, a.jsx)(K, {
                            includes: !0
                        })
                    }, {
                        label: (0, a.jsx)(k, {
                            text: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_UPLOAD
                        }),
                        column1: (0, a.jsx)(H, {
                            text: (0, A.getMaxFileSizeForPremiumType)(L.PremiumTypes.TIER_0)
                        }),
                        column2: (0, a.jsx)(H, {
                            text: (0, A.getMaxFileSizeForPremiumType)(L.PremiumTypes.TIER_2)
                        })
                    }, {
                        label: (0, a.jsx)(k, {
                            text: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_STREAMING
                        }),
                        column1: (0, a.jsx)(K, {
                            includes: !1
                        }),
                        column2: (0, a.jsx)(H, {
                            text: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_STREAMING_DETAILS
                        })
                    }, {
                        label: (0, a.jsx)(k, {
                            text: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_BOOSTS.format({
                                numBoosts: L.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
                                percentageOff: (0, N.formatPercent)(f.default.locale, L.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
                            })
                        }),
                        column1: (0, a.jsx)(K, {
                            includes: !1
                        }),
                        column2: (0, a.jsx)(K, {
                            includes: !0
                        })
                    }, {
                        label: (0, a.jsx)(k, {
                            text: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_PROFILE_THEMES
                        }),
                        column1: (0, a.jsx)(K, {
                            includes: !1
                        }),
                        column2: (0, a.jsx)(K, {
                            includes: !0
                        })
                    }, {
                        label: (0, a.jsx)(k, {
                            text: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SERVER_PROFILE
                        }),
                        column1: (0, a.jsx)(K, {
                            includes: !1
                        }),
                        column2: (0, a.jsx)(K, {
                            includes: !0
                        })
                    }, {
                        label: (0, a.jsx)(k, {
                            text: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SHOP_DISCOUNTS_GENERIC
                        }),
                        column1: (0, a.jsx)(K, {
                            includes: !1
                        }),
                        column2: (0, a.jsx)(K, {
                            includes: !0
                        })
                    }, {
                        label: (0, a.jsx)(k, {
                            text: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_CLIENT_THEME
                        }),
                        column1: (0, a.jsx)(K, {
                            includes: !1
                        }),
                        column2: (0, a.jsx)(K, {
                            includes: !0
                        })
                    }, {
                        label: (0, a.jsx)(k, {
                            text: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_BADGE
                        }),
                        column1: (0, a.jsx)(K, {
                            includes: !0
                        }),
                        column2: (0, a.jsx)(K, {
                            includes: !0
                        })
                    }, {
                        label: (0, a.jsx)(k, {
                            text: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_VIDEO_BACKGROUND
                        }),
                        column1: (0, a.jsx)(K, {
                            includes: !0
                        }),
                        column2: (0, a.jsx)(K, {
                            includes: !0
                        })
                    }, {
                        label: (0, a.jsx)(k, {
                            text: x.default.Messages.SOUNDBOARD_MARKETING_CUSTOM_SOUNDS_ANYWHERE
                        }),
                        column1: (0, a.jsx)(K, {
                            includes: !1
                        }),
                        column2: (0, a.jsx)(K, {
                            includes: !0
                        })
                    }, {
                        label: (0, a.jsx)(k, {
                            text: x.default.Messages.SOUNDBOARD_MARKETING_CUSTOM_ENTRY_SOUNDS
                        }),
                        column1: (0, a.jsx)(K, {
                            includes: !1
                        }),
                        column2: (0, a.jsx)(K, {
                            includes: !0
                        })
                    }, {
                        label: (0, a.jsx)(k, {
                            text: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SERVER_LIMIT
                        }),
                        column1: (0, a.jsx)(K, {
                            includes: !1
                        }),
                        column2: (0, a.jsx)(K, {
                            includes: !0
                        })
                    }, {
                        label: (0, a.jsx)(k, {
                            text: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_MESSAGE_LENGTH.format({
                                maxChars: h.MAX_MESSAGE_LENGTH_PREMIUM
                            })
                        }),
                        column1: (0, a.jsx)(K, {
                            includes: !1
                        }),
                        column2: (0, a.jsx)(K, {
                            includes: !0
                        })
                    }];
                return R ? en.push({
                    label: null,
                    column1: null,
                    column2: null,
                    withBottomBorder: !1,
                    withBottomBorderRadius: !0,
                    buttonsRow: !1,
                    shortRow: !0
                }) : en.push({
                    label: null,
                    column1: (0, a.jsxs)(a.Fragment, {
                        children: [q === L.PremiumSubscriptionSKUs.TIER_2 || ee ? (0, a.jsx)(M.default, {
                            className: v.button,
                            subscriptionTier: L.PremiumSubscriptionSKUs.TIER_0,
                            showIcon: !1,
                            look: o.ButtonLooks.OUTLINED,
                            color: Z ? o.ButtonColors.BRAND_NEW : o.ButtonColors.WHITE,
                            buttonShineClassName: void 0
                        }) : (0, a.jsx)(M.default, {
                            className: v.button,
                            subscriptionTier: L.PremiumSubscriptionSKUs.TIER_0,
                            showIcon: !1
                        }), $ === L.PremiumTypes.TIER_2 || null != q ? null : (0, a.jsx)(O.default, {
                            className: v.button,
                            subscriptionTier: L.PremiumSubscriptionSKUs.TIER_0
                        })]
                    }),
                    column2: (0, a.jsxs)(a.Fragment, {
                        children: [q === L.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(M.default, {
                            className: v.button,
                            subscriptionTier: L.PremiumSubscriptionSKUs.TIER_2,
                            showIcon: !1,
                            look: o.ButtonLooks.OUTLINED,
                            color: Z ? o.ButtonColors.BRAND_NEW : o.ButtonColors.WHITE,
                            buttonShineClassName: void 0
                        }) : (0, a.jsx)(M.default, {
                            className: v.button,
                            subscriptionTier: L.PremiumSubscriptionSKUs.TIER_2,
                            showIcon: !1,
                            isEligibleForBogoPromotion: ee
                        }), $ === L.PremiumTypes.TIER_0 || null != q ? null : (0, a.jsx)(O.default, {
                            className: v.button,
                            subscriptionTier: L.PremiumSubscriptionSKUs.TIER_2
                        })]
                    }),
                    withBottomBorder: !1,
                    withBottomBorderRadius: !0,
                    buttonsRow: null == q
                }), s = U ? null : null != q || null != $ ? (0, a.jsx)(C.PremiumPillWithSparkles, {
                    text: null != q ? x.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT : x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_PLAN_ACTIVATED_PILL,
                    className: v.freeTrialPillWithSparkles,
                    colorOptions: q === L.PremiumSubscriptionSKUs.TIER_0 ? Z ? C.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_GRADIENT_FILL : C.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_WHITE_FILL : Z ? Q ? C.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL : C.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL : C.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
                }) : ee ? (0, a.jsx)(G, {
                    isLightTheme: Z
                }) : (0, a.jsx)(y, {}), (0, a.jsx)(j, {
                    children: (0, a.jsxs)("div", {
                        className: l(v.root, r),
                        "data-testid": "v2-marketing-page-comparison-table",
                        children: [(0, a.jsx)(o.Heading, {
                            className: l(v.titleText, v.textColor),
                            variant: "heading-xxl/extrabold",
                            children: null != p ? p : x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_TITLE
                        }), (0, a.jsxs)("div", {
                            className: v.tableWrapper,
                            children: [(0, a.jsx)("div", {
                                className: q === L.PremiumSubscriptionSKUs.TIER_0 || $ === L.PremiumTypes.TIER_0 || b === L.PremiumTypes.TIER_0 ? l(D, v.tier0ColumnOuter) : l(D, v.tier2ColumnOuter),
                                children: s
                            }), (0, a.jsxs)("table", {
                                className: v.table,
                                children: [(0, a.jsx)("thead", {
                                    children: (0, a.jsx)(F, {
                                        ...ea
                                    })
                                }), (0, a.jsx)("tbody", {
                                    children: en.map((e, t) => (0, n.createElement)(W, {
                                        ...e,
                                        key: t
                                    }))
                                })]
                            })]
                        })]
                    })
                })
            }
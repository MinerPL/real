            "use strict";
            n.r(t), n.d(t, {
                PremiumPillAndSparklesColorOptions: function() {
                    return s
                },
                PremiumPillWithSparkles: function() {
                    return ei
                },
                Tier0Card: function() {
                    return eo
                },
                Tier2FeatureSet: function() {
                    return o
                },
                Tier2FeatureItems: function() {
                    return eu
                },
                Tier2Card: function() {
                    return ed
                },
                default: function() {
                    return ec
                }
            });
            var i, r, l, s, a, o, u = n("37983");
            n("884691");
            var d = n("414456"),
                c = n.n(d),
                m = n("866227"),
                f = n.n(m),
                _ = n("446674"),
                E = n("669491"),
                T = n("819855"),
                I = n("77078"),
                p = n("841098"),
                P = n("812204"),
                S = n("685665"),
                R = n("441413"),
                C = n("915639"),
                O = n("697218"),
                M = n("521012"),
                g = n("594098"),
                L = n("491614"),
                U = n("716589"),
                h = n("46829"),
                N = n("118503"),
                v = n("41250"),
                x = n("379863"),
                A = n("216422"),
                b = n("619911"),
                D = n("698015"),
                F = n("75196"),
                j = n("719923"),
                y = n("153160"),
                w = n("309318"),
                B = n("446488"),
                G = n("182650"),
                H = n("154889"),
                k = n("917247"),
                K = n("641078"),
                V = n("992118"),
                Y = n("332291"),
                z = n("646718"),
                W = n("719347"),
                Z = n("782340"),
                X = n("205988"),
                J = n("939784"),
                q = n("769015");
            let Q = "premium_new_tier_2_gradient",
                $ = "premium_old_tier_2_gradient";

            function ee(e) {
                let {
                    width: t = 14,
                    height: n = 13,
                    color: i = "white",
                    foreground: r,
                    ...l
                } = e;
                return (0, u.jsxs)("svg", {
                    ...(0, F.default)({
                        ...l
                    }),
                    preserveAspectRatio: "none",
                    width: t,
                    height: n,
                    viewBox: "0 0 14 13",
                    className: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, u.jsxs)("defs", {
                        children: [(0, u.jsxs)("linearGradient", {
                            id: Q,
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [(0, u.jsx)("stop", {
                                offset: "0%",
                                stopColor: "#8547C6"
                            }), (0, u.jsx)("stop", {
                                offset: "50%",
                                stopColor: "#B845C1"
                            }), (0, u.jsx)("stop", {
                                offset: "100%",
                                stopColor: "#AB5D8A"
                            })]
                        }), (0, u.jsxs)("linearGradient", {
                            id: $,
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [(0, u.jsx)("stop", {
                                offset: "0%",
                                stopColor: "#B473F5"
                            }), (0, u.jsx)("stop", {
                                offset: "100%",
                                stopColor: "#E292AA"
                            })]
                        })]
                    }), (0, u.jsx)("path", {
                        d: "M9.30705 8.36284L13.5731 6.46363C13.5889 6.45487 13.6022 6.44203 13.6114 6.42644C13.6206 6.41086 13.6255 6.39309 13.6255 6.375C13.6255 6.35691 13.6206 6.33914 13.6114 6.32356C13.6022 6.30797 13.5889 6.29513 13.5731 6.28637L9.30705 4.38716C9.29358 4.38716 9.28066 4.38183 9.27114 4.37233C9.26162 4.36283 9.25627 4.34995 9.25627 4.33652L7.3518 0.0569762C7.30102 -0.0189921 7.19944 -0.0189921 7.17405 0.0569762L5.26958 4.33652C5.24419 4.36184 5.24419 4.38716 5.2188 4.38716L0.927401 6.28637C0.911525 6.29513 0.898291 6.30797 0.889077 6.32356C0.879862 6.33914 0.875 6.35691 0.875 6.375C0.875 6.39309 0.879862 6.41086 0.889077 6.42644C0.898291 6.44203 0.911525 6.45487 0.927401 6.46363L5.2188 8.36284C5.24419 8.36284 5.24419 8.38816 5.26958 8.41348L7.17405 12.693C7.19944 12.769 7.30102 12.769 7.3518 12.693L9.25627 8.41348C9.25627 8.40005 9.26162 8.38717 9.27114 8.37767C9.28066 8.36817 9.29358 8.36284 9.30705 8.36284Z",
                        fill: i
                    })]
                })
            }

            function et(e) {
                let {
                    tier: t = z.PremiumTypes.TIER_2
                } = e, n = (0, p.default)(), i = (0, T.isThemeLight)(n);
                return (0, u.jsxs)(u.Fragment, {
                    children: [!i && (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)("div", {
                            className: c(X.rimGlowVertical, {
                                [X.rimGlowVerticalTier0]: t === z.PremiumTypes.TIER_0,
                                [X.rimGlowVerticalTier2]: t === z.PremiumTypes.TIER_2
                            })
                        }), (0, u.jsx)(ee, {
                            foreground: X.buttonSparkleStar1
                        })]
                    }), (0, u.jsx)(ee, {
                        foreground: X.buttonSparkleStar2
                    }), (0, u.jsx)(ee, {
                        foreground: X.buttonSparkleStar3
                    }), (0, u.jsx)(ee, {
                        foreground: X.buttonSparkleStar4
                    }), (0, u.jsx)(ee, {
                        foreground: X.buttonSparkleStar5
                    })]
                })
            }

            function en(e) {
                let {
                    text: t,
                    className: n,
                    colorOptions: i = 2
                } = e;
                return (0, u.jsx)("div", {
                    className: c(n, X.freeTrialPill, {
                        [X.freeTrialPillTier0GradientFill]: 1 === i,
                        [X.freeTrialPillTier2GradientFill]: 3 === i,
                        [X.freeTrialPillTier2OldGradientFill]: 4 === i
                    }),
                    children: (0, u.jsx)(I.Text, {
                        variant: "text-xs/bold",
                        className: c(X.freeTrialPillText, {
                            [X.freeTrialPillTextInverted]: 0 !== i && 2 !== i,
                            [X.freeTrialPillTextTier0]: 0 === i,
                            [X.freeTrialPillTextTier2]: 2 === i
                        }),
                        children: t
                    })
                })
            }

            function ei(e) {
                let t, {
                    text: n,
                    className: i,
                    colorOptions: r = 2
                } = e;
                switch (r) {
                    case 1:
                        t = E.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
                        break;
                    case 3:
                        t = "url(#".concat(Q, ")");
                        break;
                    case 4:
                        t = "url(#".concat($, ")");
                        break;
                    default:
                        t = "white"
                }
                return (0, u.jsxs)("div", {
                    className: c(i, X.freeTrialPillWithSparkles),
                    children: [(0, u.jsx)(ee, {
                        foreground: X.sparkleStar1,
                        color: t
                    }), (0, u.jsx)(ee, {
                        foreground: X.sparkleStar2,
                        color: t
                    }), (0, u.jsx)(ee, {
                        foreground: X.sparkleStar3,
                        color: t
                    }), (0, u.jsx)(en, {
                        text: n,
                        colorOptions: r
                    }), (0, u.jsx)(ee, {
                        foreground: X.sparkleStar4,
                        color: t
                    }), (0, u.jsx)(ee, {
                        foreground: X.sparkleStar5,
                        color: t
                    })]
                })
            }

            function er(e) {
                let {
                    width: t = 83,
                    height: n = 82,
                    ...i
                } = e;
                return (0, u.jsxs)("svg", {
                    ...(0, F.default)({
                        ...i
                    }),
                    width: t,
                    height: n,
                    viewBox: "0 0 83 82",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, u.jsx)("g", {
                        clipPath: "url(#clip0_1691_113820)",
                        children: (0, u.jsx)("path", {
                            d: "M75.6975 45.1322C75.2844 48.0717 70.2815 49.7001 69.2458 52.3302C68.0858 55.0537 70.4287 59.7129 68.6614 62.0181C66.8941 64.3233 61.7294 63.1533 59.479 64.9465C57.2438 66.6308 56.836 71.9026 54.133 72.966C51.5389 74.0448 47.5818 70.602 44.6592 70.8574C41.8456 71.1281 38.9013 75.4884 35.9617 75.0752C33.0222 74.6621 31.3938 69.6592 28.7638 68.6235C26.0402 67.4635 21.381 69.8064 19.0758 68.0391C16.7706 66.2718 17.9406 61.1071 16.1474 58.8566C14.5873 56.5279 9.31547 56.1201 8.25204 53.4171C7.17332 50.823 10.6161 46.8659 10.3607 43.9434C9.96577 41.2233 5.60554 38.279 6.01868 35.3394C6.43181 32.3999 11.4347 30.7715 12.4704 28.1414C13.6304 25.4179 11.2876 20.7587 13.0548 18.4535C14.8221 16.1483 19.9868 17.3183 22.2373 15.5251C24.4724 13.8408 24.8802 8.56898 27.5832 7.50556C30.1774 6.42683 34.1345 9.86958 37.057 9.61417C39.8706 9.34346 42.8149 4.98323 45.7545 5.39636C48.6941 5.80949 50.3224 10.8124 52.9525 11.8481C55.6761 13.0081 60.3352 10.6652 62.6404 12.4325C64.9456 14.1998 63.7756 19.3645 65.5688 21.615C67.2531 23.8501 72.5249 24.2579 73.5884 26.9609C74.6671 29.555 71.2243 33.5122 71.4797 36.4347C71.7505 39.2483 76.1107 42.1926 75.6975 45.1322Z",
                            fill: "currentColor"
                        })
                    }), (0, u.jsx)("path", {
                        d: "M30.1999 41.1212L26.9681 32.3582L23.3318 31.8471L21.6757 43.6313L24.3355 44.0051L25.5209 35.571L28.9482 44.6534L32.3488 45.1313L34.0049 33.3471L31.3451 32.9733L30.1999 41.1212ZM43.2501 41.8738C43.6191 39.2476 42.3243 37.5893 39.7655 37.2296C36.971 36.8369 34.9959 38.4305 34.6269 41.0567C34.2341 43.8513 35.9048 45.8886 38.935 46.3145C40.3996 46.5203 41.6035 46.2603 42.3119 45.862L42.5887 43.8924C41.8322 44.2668 40.8661 44.4228 39.9065 44.288C38.2567 44.0561 37.4063 43.2671 37.286 42.1686L43.0939 42.9849L43.2501 41.8738ZM39.5418 39.3098C40.5182 39.447 41.0822 40.0756 40.9668 41.1409L37.5326 40.6583C37.8069 39.6839 38.4812 39.1607 39.5418 39.3098ZM53.3558 44.7704L52.6485 39.2977L49.9214 38.9145L47.757 43.9321L47.211 38.5335L44.4838 38.1503L45.6771 47.0045L48.4043 47.3878L50.7631 42.2087L51.6534 47.8444L54.4311 48.2348L58.2208 40.0809L55.5104 39.7L53.3558 44.7704ZM61.6245 45.4004L62.7507 37.3871L60.0067 37.0015L58.8805 45.0147L61.6245 45.4004ZM59.7123 49.2345C60.6719 49.3694 61.4423 48.7738 61.5677 47.8816C61.6954 46.9725 61.1167 46.2045 60.1571 46.0696C59.1975 45.9348 58.4127 46.5112 58.2849 47.4202C58.1595 48.3125 58.7527 49.0997 59.7123 49.2345Z",
                        fill: "#5865F2"
                    }), (0, u.jsx)("path", {
                        d: "M57.6991 28.0304L61.3718 26.9774C61.3856 26.9721 61.3978 26.9632 61.4071 26.9517C61.4163 26.9401 61.4223 26.9262 61.4243 26.9116C61.4264 26.8969 61.4245 26.882 61.4188 26.8683C61.4131 26.8546 61.4038 26.8427 61.392 26.8338L58.1518 24.8093C58.1409 24.8077 58.1311 24.8019 58.1244 24.7932C58.1178 24.7844 58.1149 24.7733 58.1165 24.7625L57.0607 21.0782C57.0282 21.0109 56.9459 20.9993 56.9167 21.058L54.8864 24.3085C54.8629 24.3261 54.86 24.3466 54.8394 24.3437L51.1462 25.3939C51.1324 25.3992 51.1202 25.4081 51.1109 25.4196C51.1017 25.4312 51.0957 25.445 51.0937 25.4597C51.0916 25.4744 51.0935 25.4893 51.0992 25.503C51.1049 25.5167 51.1142 25.5286 51.126 25.5375L54.3867 27.5649C54.4073 27.5678 54.4044 27.5883 54.4221 27.6117L55.4778 31.296C55.4898 31.3604 55.5721 31.372 55.6219 31.3162L57.6522 28.0657C57.6537 28.0548 57.6595 28.045 57.6683 28.0384C57.6771 28.0318 57.6882 28.0289 57.6991 28.0304V28.0304Z",
                        fill: "#5865F2"
                    }), (0, u.jsx)("path", {
                        d: "M27.9939 54.8801L30.1446 54.2599C30.156 54.2502 30.1635 54.2367 30.1656 54.2219C30.1676 54.207 30.1642 54.1919 30.1559 54.1795L28.2594 52.9905C28.2541 52.9897 28.2493 52.9869 28.2461 52.9826C28.2429 52.9783 28.2415 52.9729 28.2422 52.9676L27.626 50.8105C27.6275 50.7998 27.6247 50.789 27.6182 50.7804C27.6118 50.7718 27.6022 50.7662 27.5915 50.7647C27.5809 50.7632 27.5701 50.766 27.5616 50.7725C27.553 50.7789 27.5473 50.7886 27.5458 50.7992L26.3589 52.7029L26.3388 52.7001L24.1881 53.3203C24.1775 53.3188 24.1667 53.3216 24.1581 53.3281C24.1495 53.3346 24.1439 53.3442 24.1424 53.3549C24.1409 53.3655 24.1437 53.3763 24.1501 53.3849C24.1566 53.3935 24.1662 53.3992 24.1768 53.4007L26.0733 54.5897C26.0786 54.5904 26.0834 54.5933 26.0866 54.5976C26.0898 54.6019 26.0912 54.6073 26.0905 54.6126L26.7067 56.7697C26.7164 56.7811 26.7299 56.7886 26.7446 56.7907C26.7594 56.7928 26.7745 56.7893 26.7869 56.7809L27.9738 54.8773C27.9738 54.8773 27.9738 54.8773 27.9939 54.8801Z",
                        fill: "#5865F2"
                    }), (0, u.jsx)("defs", {
                        children: (0, u.jsx)("clipPath", {
                            id: "clip0_1691_113820",
                            children: (0, u.jsx)("rect", {
                                width: "70.3636",
                                height: "70.3636",
                                fill: "white",
                                transform: "translate(10.915 0.5) rotate(8)"
                            })
                        })
                    })]
                })
            }

            function el(e) {
                let {
                    Icon: t,
                    text: n,
                    isNew: i = !1
                } = e;
                return (0, u.jsxs)("div", {
                    className: X.item,
                    children: [(0, u.jsx)(t, {
                        className: X.icon
                    }), (0, u.jsx)(I.Text, {
                        variant: "text-md/normal",
                        color: "always-white",
                        children: n
                    }), i ? (0, u.jsx)(R.default, {
                        className: X.newTagItem,
                        forceUseColorForSparkles: !0,
                        shouldInheritBackgroundColor: !0,
                        shouldInheritTextColor: !0
                    }) : null]
                })
            }

            function es(e) {
                let {
                    isGift: t,
                    premiumTier: n,
                    offerTierMatchesCard: i,
                    offerType: r,
                    showYearlyPrice: l
                } = e, s = (0, _.useStateFromStores)([M.default], () => M.default.getPremiumTypeSubscription()), a = (0, _.useStateFromStores)([O.default], () => O.default.getCurrentUser()), o = (0, G.useHasDiscountApplied)(), d = n === z.PremiumTypes.TIER_0 ? z.PremiumSubscriptionSKUs.TIER_0 : z.PremiumSubscriptionSKUs.TIER_2, c = (null == s ? void 0 : s.trialId) != null ? null == a ? void 0 : a.premiumType : o ? z.PremiumTypes.TIER_2 : null, m = (0, k.usePremiumTrialOffer)(), E = null == m ? void 0 : m.subscription_trial;
                if (!t && null != c && n === c && null != s && null != s.planIdFromItems) {
                    let e = null != s.trialEndsAt ? f(null == s ? void 0 : s.trialEndsAt).diff(f(), "d") : 0,
                        t = z.SubscriptionPlanInfo[s.planIdFromItems],
                        n = j.default.formatPriceString(j.default.getDefaultPrice(t.id), t.interval);
                    return (0, u.jsx)(u.Fragment, {
                        children: (0, u.jsx)(I.Heading, {
                            variant: "heading-md/normal",
                            color: "always-white",
                            className: X.trialHeader,
                            children: 0 === r ? Z.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
                                remainingTime: e,
                                price: n
                            }) : Z.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION.format({
                                percent: 30,
                                regularPrice: n
                            })
                        })
                    })
                }
                if (!t && i) {
                    var T, p, P, S;
                    let e = j.default.formatPriceString(j.default.getDefaultPrice(n === z.PremiumTypes.TIER_0 ? z.SubscriptionPlans.PREMIUM_MONTH_TIER_0 : z.SubscriptionPlans.PREMIUM_MONTH_TIER_2), z.SubscriptionIntervalTypes.MONTH);
                    return (0, u.jsx)(I.Heading, {
                        variant: "heading-md/normal",
                        color: "always-white",
                        className: X.trialHeader,
                        children: 0 === r ? Z.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_BEFORE_REDEMPTION_NEW.format({
                            planName: (0, j.getTierDisplayName)(null !== (p = z.PREMIUM_SKU_TO_MONTHLY_PLAN[null !== (T = null == E ? void 0 : E.sku_id) && void 0 !== T ? T : z.PremiumSubscriptionSKUs.NONE]) && void 0 !== p ? p : z.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
                            duration: (0, j.formatIntervalDuration)({
                                intervalType: null !== (P = null == E ? void 0 : E.interval) && void 0 !== P ? P : z.SubscriptionIntervalTypes.DAY,
                                intervalCount: null !== (S = null == E ? void 0 : E.interval_count) && void 0 !== S ? S : 30,
                                capitalize: !1
                            }),
                            price: e
                        }) : Z.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_BEFORE_REDEMPTION.format({
                            discountedPrice: "$6.99",
                            regularPrice: e
                        })
                    })
                }
                return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(V.default, {
                        subscriptionTier: d,
                        isGift: t,
                        className: X.price
                    }), l && (0, u.jsx)(V.default, {
                        subscriptionTier: d,
                        interval: z.SubscriptionIntervalTypes.YEAR,
                        isGift: t,
                        className: X.price
                    })]
                })
            }

            function ea() {
                return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(el, {
                        Icon: D.default,
                        text: Z.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                            maxUploadPremium: (0, j.getMaxFileSizeForPremiumType)(z.PremiumTypes.TIER_0, {
                                useSpace: !1
                            })
                        })
                    }), (0, u.jsx)(el, {
                        Icon: h.default,
                        text: Z.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
                    }), (0, u.jsx)(el, {
                        Icon: L.default,
                        text: Z.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
                    }), (0, u.jsx)(el, {
                        Icon: A.default,
                        text: Z.default.Messages.PREMIUM_TIER_NITRO_BADGE_ITEM
                    })]
                })
            }

            function eo(e) {
                var t;
                let {
                    showWumpus: n,
                    showBadge: i,
                    ctaButton: r,
                    showYearlyPrice: l,
                    className: s,
                    isGift: a = !1
                } = e, o = (0, _.useStateFromStores)([M.default], () => M.default.getPremiumTypeSubscription()), d = (0, _.useStateFromStores)([O.default], () => O.default.getCurrentUser()), m = (0, k.usePremiumTrialOffer)(), f = null == m ? void 0 : null === (t = m.subscription_trial) || void 0 === t ? void 0 : t.sku_id, E = (null == o ? void 0 : o.trialId) != null, T = (null == o ? void 0 : o.trialId) != null ? null == d ? void 0 : d.premiumType : null, I = null != f || E;
                return (0, u.jsxs)("div", {
                    className: c(X.tier0, X.card, s, {
                        [X.withTier0Rim]: !a && I,
                        [X.withCardHover]: !a && I
                    }),
                    children: [f === z.PremiumSubscriptionSKUs.TIER_0 ? (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(ei, {
                            text: Z.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                            className: X.topRimPill,
                            colorOptions: 0
                        }), (0, u.jsx)("div", {
                            className: X.rimGlowTier0
                        })]
                    }) : null, i && (0, u.jsx)(er, {
                        className: X.newCircleIcon
                    }), n ? (0, u.jsx)("div", {
                        className: X.wumpusImageContainer,
                        children: (0, u.jsx)(g.default, {
                            src: J,
                            mediaLayoutType: W.MediaLayoutType.RESPONSIVE,
                            width: 270,
                            height: 242,
                            zoomable: !1
                        })
                    }) : null, a || f !== z.PremiumSubscriptionSKUs.TIER_0 ? null : (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(ei, {
                            text: Z.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                            className: X.topRimPill,
                            colorOptions: 0
                        }), (0, u.jsx)("div", {
                            className: X.rimGlowTier0
                        })]
                    }), a || T !== z.PremiumTypes.TIER_0 ? null : (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(ei, {
                            text: Z.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                            className: X.topRimPill,
                            colorOptions: 0
                        }), (0, u.jsx)("div", {
                            className: X.rimGlowTier0
                        })]
                    }), (0, u.jsx)("div", {
                        children: (0, u.jsxs)("div", {
                            className: X.body,
                            children: [(0, u.jsx)("div", {
                                className: X.tier0LogoContainer,
                                children: (0, u.jsx)(x.default, {
                                    className: c(X.tier0Title, X.title)
                                })
                            }), (0, u.jsx)(es, {
                                isGift: a,
                                premiumTier: z.PremiumTypes.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: f === z.PremiumSubscriptionSKUs.TIER_0,
                                showYearlyPrice: l
                            }), (0, u.jsx)(ea, {})]
                        })
                    }), r, a || f !== z.PremiumSubscriptionSKUs.TIER_0 ? null : (0, u.jsx)(et, {
                        tier: z.PremiumTypes.TIER_0
                    })]
                })
            }

            function eu(e) {
                let {
                    featureSet: t = 0,
                    isModal: n = !1,
                    isGift: i = !1
                } = e, r = (0, _.useStateFromStores)([C.default], () => C.default.locale), l = (0, _.useStateFromStores)([B.default], () => B.default.affinities), {
                    planSelectionEnabled: s
                } = w.default.useExperiment({
                    location: "planSelection"
                }, {
                    autoTrackExposure: !1
                }), a = n && !i && l.length > 0;
                a && w.default.trackExposure({
                    location: "planSelection"
                });
                if (1 === t) return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(el, {
                        Icon: N.default,
                        text: Z.default.Messages.PREMIUM_TIER_SERVER_BOOST_WITH_PERCENTAGE_ITEM.format({
                            numBoosts: z.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
                            percentageOff: (0, y.formatPercent)(r, z.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
                        })
                    }), (0, u.jsx)(el, {
                        Icon: D.default,
                        text: Z.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                            maxUploadPremium: (0, j.getMaxFileSizeForPremiumType)(z.PremiumTypes.TIER_2, {
                                useSpace: !1
                            })
                        })
                    }), (0, u.jsx)(el, {
                        Icon: h.default,
                        text: Z.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
                    }), (0, u.jsx)(el, {
                        Icon: b.default,
                        text: Z.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
                    }), (0, u.jsx)(el, {
                        Icon: U.default,
                        text: Z.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
                    })]
                });
                return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(el, {
                        Icon: D.default,
                        text: Z.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                            maxUploadPremium: (0, j.getMaxFileSizeForPremiumType)(z.PremiumTypes.TIER_2, {
                                useSpace: !1
                            })
                        })
                    }), (0, u.jsx)(el, {
                        Icon: h.default,
                        text: Z.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
                    }), (0, u.jsx)(el, {
                        Icon: L.default,
                        text: Z.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
                    }), (0, u.jsx)(el, {
                        Icon: b.default,
                        text: Z.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
                    }), (0, u.jsx)(el, {
                        Icon: N.default,
                        text: Z.default.Messages.PREMIUM_TIER_SERVER_BOOST_ITEM
                    }), (0, u.jsx)(el, {
                        Icon: U.default,
                        text: Z.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
                    }), s && a && (0, u.jsx)(Y.default, {})]
                })
            }

            function ed(e) {
                var t, n, i;
                let {
                    showWumpus: r,
                    ctaButton: l,
                    showYearlyPrice: s,
                    featureSet: a = 0,
                    className: o,
                    isGift: d = !1,
                    isModal: m = !1
                } = e, f = (0, _.useStateFromStores)([M.default], () => M.default.getPremiumTypeSubscription()), E = (0, _.useStateFromStores)([O.default], () => O.default.getCurrentUser()), T = (0, k.usePremiumTrialOffer)(), p = null == T ? void 0 : null === (t = T.subscription_trial) || void 0 === t ? void 0 : t.sku_id, P = (null == f ? void 0 : f.trialId) != null ? null == E ? void 0 : E.premiumType : null, S = (0, G.useIsInPremiumOfferExperience)(), R = (0, H.usePremiumDiscountOffer)(), C = (0, G.useHasDiscountApplied)(), L = null != p || null != P ? 0 : null != R || C ? 1 : null, U = (0, K.useIsEligibleForBogoPromotion)(), h = (0, K.getBOGOPillCopy)();
                return (0, u.jsxs)("div", {
                    className: c(X.tier2, X.card, o, {
                        [X.withTier2Rim]: !d && S,
                        [X.withCardHover]: !d && S
                    }),
                    children: [!d && null != R && (0, H.discountOfferHasTier)(R, z.PremiumSubscriptionSKUs.TIER_2) && (null === (n = R.discount) || void 0 === n ? void 0 : n.amount) !== void 0 ? (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(ei, {
                            text: Z.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                                percent: null === (i = R.discount) || void 0 === i ? void 0 : i.amount
                            }),
                            className: X.topRimPill,
                            colorOptions: 2
                        }), (0, u.jsx)("div", {
                            className: X.rimGlowTier2
                        })]
                    }) : null, d || p !== z.PremiumSubscriptionSKUs.TIER_2 ? null : (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(ei, {
                            text: Z.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                            className: X.topRimPill,
                            colorOptions: 2
                        }), (0, u.jsx)("div", {
                            className: X.rimGlowTier2
                        })]
                    }), d || P !== z.PremiumTypes.TIER_2 ? null : (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(ei, {
                            text: Z.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                            className: X.topRimPill,
                            colorOptions: 2
                        }), (0, u.jsx)("div", {
                            className: X.rimGlowTier2
                        })]
                    }), !d && C && (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(ei, {
                            text: Z.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
                            className: X.topRimPill,
                            colorOptions: 2
                        }), (0, u.jsx)("div", {
                            className: X.rimGlowTier2
                        })]
                    }), r ? (0, u.jsx)("div", {
                        className: X.wumpusImageContainer,
                        children: (0, u.jsx)(g.default, {
                            src: q,
                            mediaLayoutType: W.MediaLayoutType.RESPONSIVE,
                            width: 270,
                            height: 242,
                            zoomable: !1
                        })
                    }) : null, (0, u.jsxs)("div", {
                        children: [(0, u.jsx)(v.default, {
                            className: c(X.tier2Title, X.title)
                        }), !d && p !== z.PremiumSubscriptionSKUs.TIER_2 && U && (0, u.jsx)(I.Text, {
                            variant: "text-xs/bold",
                            className: X.freeTrialPillInline,
                            children: h
                        }), (0, u.jsx)(es, {
                            isGift: d,
                            premiumTier: z.PremiumTypes.TIER_2,
                            offerType: L,
                            offerTierMatchesCard: p === z.PremiumSubscriptionSKUs.TIER_2 || (0, H.discountOfferHasTier)(R, z.PremiumSubscriptionSKUs.TIER_2),
                            showYearlyPrice: s
                        }), (0, u.jsx)(eu, {
                            featureSet: a,
                            isModal: m,
                            isGift: d
                        })]
                    }), l, d || p !== z.PremiumSubscriptionSKUs.TIER_2 && null == R ? null : (0, u.jsx)(et, {
                        tier: z.PremiumTypes.TIER_2
                    })]
                })
            }

            function ec(e) {
                let {
                    showWumpus: t,
                    showBadge: n,
                    tier0CTAButton: i,
                    tier2CTAButton: r,
                    className: l
                } = e, {
                    AnalyticsLocationProvider: s
                } = (0, S.default)(P.default.PREMIUM_MARKETING_TIER_CARD);
                return (0, u.jsx)(s, {
                    children: (0, u.jsxs)("div", {
                        className: c(X.premiumCards, l),
                        children: [(0, u.jsx)(eo, {
                            showWumpus: t,
                            showBadge: n,
                            ctaButton: i
                        }), (0, u.jsx)(ed, {
                            showWumpus: t,
                            ctaButton: r
                        })]
                    })
                })
            }(i = s || (s = {}))[i.PREMIUM_TIER_0_WHITE_FILL = 0] = "PREMIUM_TIER_0_WHITE_FILL", i[i.PREMIUM_TIER_0_GRADIENT_FILL = 1] = "PREMIUM_TIER_0_GRADIENT_FILL", i[i.PREMIUM_TIER_2_WHITE_FILL = 2] = "PREMIUM_TIER_2_WHITE_FILL", i[i.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3] = "PREMIUM_TIER_2_NEW_GRADIENT_FILL", i[i.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL", (r = a || (a = {}))[r.PREMIUM_TRIAL = 0] = "PREMIUM_TRIAL", r[r.PREMIUM_DISCOUNT = 1] = "PREMIUM_DISCOUNT", (l = o || (o = {}))[l.DEFAULT = 0] = "DEFAULT", l[l.BOOSTING = 1] = "BOOSTING"
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var s = n("37983"),
                i = n("884691"),
                a = n("617258"),
                l = n("446674"),
                r = n("769846"),
                u = n("77078"),
                o = n("598981"),
                c = n("682777"),
                d = n("577357"),
                f = n("393414"),
                p = n("160299"),
                h = n("153160"),
                I = n("271560"),
                E = n("650509"),
                v = n("910861"),
                _ = n("899604"),
                C = n("153335"),
                T = n("49111"),
                S = n("782340"),
                A = n("208961");
            let m = (0, a.cssValueToNumber)(r.default.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
                g = "start_application_subscription",
                R = e => {
                    let {
                        listing: t
                    } = e, n = t.image_asset;
                    if (null == n) return null;
                    let i = (0, I.getAssetURL)(t.application_id, n, m);
                    return (0, s.jsx)("div", {
                        children: (0, s.jsx)("img", {
                            src: i,
                            alt: "",
                            className: A.listingImage
                        })
                    })
                },
                N = e => {
                    let {
                        children: t
                    } = e;
                    return (0, s.jsx)(u.Button, {
                        look: u.Button.Looks.OUTLINED,
                        color: u.Button.Colors.PRIMARY,
                        disabled: !0,
                        size: u.Button.Sizes.SMALL,
                        children: t
                    })
                };

            function L(e) {
                let {
                    listing: t,
                    groupListingId: n,
                    guildId: a,
                    analyticsLocation: r,
                    onComplete: I,
                    forcesTransitionToGuild: m
                } = e, L = (0, l.useStateFromStores)([p.default], () => p.default.isSyncing), {
                    activeSubscription: x,
                    activeSubscriptionListing: P
                } = (0, E.useActiveSubscriptionListingForApplication)(t.application_id, a), {
                    openModal: y,
                    canOpenModal: M,
                    cannotOpenReason: O
                } = (0, C.default)({
                    listing: t,
                    guildId: a,
                    groupListingId: n,
                    showBenefitsFirst: !1,
                    analyticsLocation: r,
                    onComplete: I,
                    forcesTransitionToGuild: m
                }), w = t.subscription_plans[0], j = 0 === w.price, b = (null == P ? void 0 : P.id) === t.id, U = (0, o.default)(), D = U && !M || L, V = () => {
                    U ? y() : (0, c.redirectToLogin)({
                        [g]: "true"
                    })
                };
                return i.useEffect(() => {
                    let e = new URL(location.href);
                    if (U && !D && "true" === e.searchParams.get(g)) {
                        e.searchParams.delete(g);
                        let t = e.pathname + e.search;
                        (0, f.replaceWith)(t), y()
                    }
                }, [U, y, t, D]), (0, s.jsxs)("div", {
                    className: A.container,
                    children: [(0, s.jsxs)("div", {
                        className: A.cardHeader,
                        children: [(0, s.jsx)(R, {
                            listing: t
                        }), (0, s.jsx)(u.Text, {
                            variant: "text-lg/medium",
                            color: "interactive-active",
                            children: t.name
                        }), (0, s.jsxs)("div", {
                            className: A.priceAndButtonContainer,
                            children: [(0, s.jsx)(u.Text, {
                                variant: "text-md/normal",
                                color: "interactive-normal",
                                children: j ? S.default.Messages.APPLICATION_SUBSCRIPTION_FREE : S.default.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
                                    amount: (0, h.formatPrice)(w.price, w.currency),
                                    period: (0, d.formatPlanInterval)(w)
                                })
                            }), (() => {
                                var e;
                                if (b) return (0, s.jsx)(N, {
                                    children: (null == x ? void 0 : x.status) === T.SubscriptionStatusTypes.CANCELED ? S.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : S.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
                                });
                                if (j) return null == P ? (0, s.jsx)(N, {
                                    children: S.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
                                }) : null;
                                return (0, s.jsx)(u.Tooltip, {
                                    tooltipClassName: A.subscribeButtonTooltip,
                                    text: M || !U ? null : O,
                                    "aria-label": null !== (e = !M && O) && void 0 !== e && e,
                                    children: e => (0, s.jsx)(v.default, {
                                        ...e,
                                        disabled: D,
                                        submitting: !1,
                                        onClick: V,
                                        children: S.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
                                    })
                                })
                            })()]
                        })]
                    }), t.sku_benefits.benefits.length > 0 ? (0, s.jsx)("div", {
                        className: A.benefitsContainer,
                        children: t.sku_benefits.benefits.map((e, t) => (0, s.jsx)(_.default, {
                            benefit: e,
                            className: A.benefit
                        }, t))
                    }) : null]
                })
            }
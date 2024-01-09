            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var r = n("37983"),
                i = n("884691"),
                s = n("617258"),
                l = n("446674"),
                a = n("769846"),
                o = n("77078"),
                u = n("598981"),
                c = n("682777"),
                d = n("577357"),
                f = n("393414"),
                p = n("160299"),
                _ = n("153160"),
                m = n("271560"),
                E = n("650509"),
                I = n("910861"),
                h = n("899604"),
                C = n("153335"),
                S = n("49111"),
                g = n("782340"),
                T = n("208961");
            let N = (0, s.cssValueToNumber)(a.default.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
                A = "start_application_subscription",
                v = e => {
                    let {
                        listing: t
                    } = e, n = t.image_asset;
                    if (null == n) return null;
                    let i = (0, m.getAssetURL)(t.application_id, n, N);
                    return (0, r.jsx)("div", {
                        children: (0, r.jsx)("img", {
                            src: i,
                            alt: "",
                            className: T.listingImage
                        })
                    })
                },
                R = e => {
                    let {
                        children: t
                    } = e;
                    return (0, r.jsx)(o.Button, {
                        look: o.Button.Looks.OUTLINED,
                        color: o.Button.Colors.PRIMARY,
                        disabled: !0,
                        size: o.Button.Sizes.SMALL,
                        children: t
                    })
                };

            function O(e) {
                let {
                    listing: t,
                    groupListingId: n,
                    guildId: s,
                    analyticsLocation: a,
                    onComplete: m,
                    forcesTransitionToGuild: N
                } = e, O = (0, l.useStateFromStores)([p.default], () => p.default.isSyncing), {
                    activeSubscription: x,
                    activeSubscriptionListing: D
                } = (0, E.useActiveSubscriptionListingForApplication)(t.application_id, s), {
                    openModal: b,
                    canOpenModal: M,
                    cannotOpenReason: L
                } = (0, C.default)({
                    listing: t,
                    guildId: s,
                    groupListingId: n,
                    showBenefitsFirst: !1,
                    analyticsLocation: a,
                    onComplete: m,
                    forcesTransitionToGuild: N
                }), y = t.subscription_plans[0], P = 0 === y.price, j = (null == D ? void 0 : D.id) === t.id, U = (0, u.default)(), G = U && !M || O, w = () => {
                    U ? b() : (0, c.redirectToLogin)({
                        [A]: "true"
                    })
                };
                return i.useEffect(() => {
                    let e = new URL(location.href);
                    if (U && !G && "true" === e.searchParams.get(A)) {
                        e.searchParams.delete(A);
                        let t = e.pathname + e.search;
                        (0, f.replaceWith)(t), b()
                    }
                }, [U, b, t, G]), (0, r.jsxs)("div", {
                    className: T.container,
                    children: [(0, r.jsxs)("div", {
                        className: T.cardHeader,
                        children: [(0, r.jsx)(v, {
                            listing: t
                        }), (0, r.jsx)(o.Text, {
                            variant: "text-lg/medium",
                            color: "interactive-active",
                            children: t.name
                        }), (0, r.jsxs)("div", {
                            className: T.priceAndButtonContainer,
                            children: [(0, r.jsx)(o.Text, {
                                variant: "text-md/normal",
                                color: "interactive-normal",
                                children: P ? g.default.Messages.APPLICATION_SUBSCRIPTION_FREE : g.default.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
                                    amount: (0, _.formatPrice)(y.price, y.currency),
                                    period: (0, d.formatPlanInterval)(y)
                                })
                            }), (() => {
                                var e;
                                if (j) return (0, r.jsx)(R, {
                                    children: (null == x ? void 0 : x.status) === S.SubscriptionStatusTypes.CANCELED ? g.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : g.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
                                });
                                if (P) return null == D ? (0, r.jsx)(R, {
                                    children: g.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
                                }) : null;
                                return (0, r.jsx)(o.Tooltip, {
                                    tooltipClassName: T.subscribeButtonTooltip,
                                    text: M || !U ? null : L,
                                    "aria-label": null !== (e = !M && L) && void 0 !== e && e,
                                    children: e => (0, r.jsx)(I.default, {
                                        ...e,
                                        disabled: G,
                                        submitting: !1,
                                        onClick: w,
                                        children: g.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
                                    })
                                })
                            })()]
                        })]
                    }), t.sku_benefits.benefits.length > 0 ? (0, r.jsx)("div", {
                        className: T.benefitsContainer,
                        children: t.sku_benefits.benefits.map((e, t) => (0, r.jsx)(h.default, {
                            benefit: e,
                            className: T.benefit
                        }, t))
                    }) : null]
                })
            }
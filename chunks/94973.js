            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var s = n("37983"),
                i = n("884691"),
                l = n("617258"),
                r = n("446674"),
                a = n("769846"),
                u = n("77078"),
                o = n("598981"),
                c = n("682777"),
                d = n("577357"),
                f = n("393414"),
                h = n("160299"),
                p = n("153160"),
                I = n("271560"),
                v = n("650509"),
                E = n("910861"),
                C = n("899604"),
                _ = n("153335"),
                T = n("49111"),
                m = n("782340"),
                S = n("208961");
            let A = (0, l.cssValueToNumber)(a.default.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
                g = "start_application_subscription",
                R = e => {
                    let {
                        listing: t
                    } = e, n = t.image_asset;
                    if (null == n) return null;
                    let i = (0, I.getAssetURL)(t.application_id, n, A);
                    return (0, s.jsx)("div", {
                        children: (0, s.jsx)("img", {
                            src: i,
                            alt: "",
                            className: S.listingImage
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

            function x(e) {
                let {
                    listing: t,
                    groupListingId: n,
                    guildId: l,
                    analyticsLocation: a,
                    onComplete: I,
                    forcesTransitionToGuild: A
                } = e, x = (0, r.useStateFromStores)([h.default], () => h.default.isSyncing), {
                    activeSubscription: P,
                    activeSubscriptionListing: L
                } = (0, v.useActiveSubscriptionListingForApplication)(t.application_id, l), {
                    openModal: y,
                    canOpenModal: M,
                    cannotOpenReason: O
                } = (0, _.default)({
                    listing: t,
                    guildId: l,
                    groupListingId: n,
                    showBenefitsFirst: !1,
                    analyticsLocation: a,
                    onComplete: I,
                    forcesTransitionToGuild: A
                }), w = t.subscription_plans[0], j = 0 === w.price, U = (null == L ? void 0 : L.id) === t.id, b = (0, o.default)(), D = b && !M || x, V = () => {
                    b ? y() : (0, c.redirectToLogin)({
                        [g]: "true"
                    })
                };
                return i.useEffect(() => {
                    let e = new URL(location.href);
                    if (b && !D && "true" === e.searchParams.get(g)) {
                        e.searchParams.delete(g);
                        let t = e.pathname + e.search;
                        (0, f.replaceWith)(t), y()
                    }
                }, [b, y, t, D]), (0, s.jsxs)("div", {
                    className: S.container,
                    children: [(0, s.jsxs)("div", {
                        className: S.cardHeader,
                        children: [(0, s.jsx)(R, {
                            listing: t
                        }), (0, s.jsx)(u.Text, {
                            variant: "text-lg/medium",
                            color: "interactive-active",
                            children: t.name
                        }), (0, s.jsxs)("div", {
                            className: S.priceAndButtonContainer,
                            children: [(0, s.jsx)(u.Text, {
                                variant: "text-md/normal",
                                color: "interactive-normal",
                                children: j ? m.default.Messages.APPLICATION_SUBSCRIPTION_FREE : m.default.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
                                    amount: (0, p.formatPrice)(w.price, w.currency),
                                    period: (0, d.formatPlanInterval)(w)
                                })
                            }), (() => {
                                var e;
                                if (U) return (0, s.jsx)(N, {
                                    children: (null == P ? void 0 : P.status) === T.SubscriptionStatusTypes.CANCELED ? m.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : m.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
                                });
                                if (j) return null == L ? (0, s.jsx)(N, {
                                    children: m.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
                                }) : null;
                                return (0, s.jsx)(u.Tooltip, {
                                    tooltipClassName: S.subscribeButtonTooltip,
                                    text: M || !b ? null : O,
                                    "aria-label": null !== (e = !M && O) && void 0 !== e && e,
                                    children: e => (0, s.jsx)(E.default, {
                                        ...e,
                                        disabled: D,
                                        submitting: !1,
                                        onClick: V,
                                        children: m.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
                                    })
                                })
                            })()]
                        })]
                    }), t.sku_benefits.benefits.length > 0 ? (0, s.jsx)("div", {
                        className: S.benefitsContainer,
                        children: t.sku_benefits.benefits.map((e, t) => (0, s.jsx)(C.default, {
                            benefit: e,
                            className: S.benefit
                        }, t))
                    }) : null]
                })
            }
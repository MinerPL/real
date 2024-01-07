            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var s = n("37983"),
                r = n("884691"),
                i = n("617258"),
                l = n("446674"),
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
                C = n("910861"),
                E = n("899604"),
                T = n("153335"),
                m = n("49111"),
                _ = n("782340"),
                S = n("208961");
            let A = (0, i.cssValueToNumber)(a.default.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
                R = "start_application_subscription",
                g = e => {
                    let {
                        listing: t
                    } = e, n = t.image_asset;
                    if (null == n) return null;
                    let r = (0, I.getAssetURL)(t.application_id, n, A);
                    return (0, s.jsx)("div", {
                        children: (0, s.jsx)("img", {
                            src: r,
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
                    guildId: i,
                    analyticsLocation: a,
                    onComplete: I,
                    forcesTransitionToGuild: A
                } = e, x = (0, l.useStateFromStores)([h.default], () => h.default.isSyncing), {
                    activeSubscription: L,
                    activeSubscriptionListing: P
                } = (0, v.useActiveSubscriptionListingForApplication)(t.application_id, i), {
                    openModal: w,
                    canOpenModal: M,
                    cannotOpenReason: O
                } = (0, T.default)({
                    listing: t,
                    guildId: i,
                    groupListingId: n,
                    showBenefitsFirst: !1,
                    analyticsLocation: a,
                    onComplete: I,
                    forcesTransitionToGuild: A
                }), j = t.subscription_plans[0], y = 0 === j.price, b = (null == P ? void 0 : P.id) === t.id, U = (0, o.default)(), D = U && !M || x, V = () => {
                    U ? w() : (0, c.redirectToLogin)({
                        [R]: "true"
                    })
                };
                return r.useEffect(() => {
                    let e = new URL(location.href);
                    if (U && !D && "true" === e.searchParams.get(R)) {
                        e.searchParams.delete(R);
                        let t = e.pathname + e.search;
                        (0, f.replaceWith)(t), w()
                    }
                }, [U, w, t, D]), (0, s.jsxs)("div", {
                    className: S.container,
                    children: [(0, s.jsxs)("div", {
                        className: S.cardHeader,
                        children: [(0, s.jsx)(g, {
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
                                children: y ? _.default.Messages.APPLICATION_SUBSCRIPTION_FREE : _.default.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
                                    amount: (0, p.formatPrice)(j.price, j.currency),
                                    period: (0, d.formatPlanInterval)(j)
                                })
                            }), (() => {
                                var e;
                                if (b) return (0, s.jsx)(N, {
                                    children: (null == L ? void 0 : L.status) === m.SubscriptionStatusTypes.CANCELED ? _.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : _.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
                                });
                                if (y) return null == P ? (0, s.jsx)(N, {
                                    children: _.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
                                }) : null;
                                return (0, s.jsx)(u.Tooltip, {
                                    tooltipClassName: S.subscribeButtonTooltip,
                                    text: M || !U ? null : O,
                                    "aria-label": null !== (e = !M && O) && void 0 !== e && e,
                                    children: e => (0, s.jsx)(C.default, {
                                        ...e,
                                        disabled: D,
                                        submitting: !1,
                                        onClick: V,
                                        children: _.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
                                    })
                                })
                            })()]
                        })]
                    }), t.sku_benefits.benefits.length > 0 ? (0, s.jsx)("div", {
                        className: S.benefitsContainer,
                        children: t.sku_benefits.benefits.map((e, t) => (0, s.jsx)(E.default, {
                            benefit: e,
                            className: S.benefit
                        }, t))
                    }) : null]
                })
            }
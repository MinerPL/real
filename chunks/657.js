            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return G
                }
            }), s("222007"), s("424973");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("446674"),
                o = s("77078"),
                d = s("997289"),
                u = s("685665"),
                c = s("617917"),
                E = s("163732"),
                _ = s("817963"),
                T = s("599110"),
                I = s("427459"),
                S = s("467094"),
                N = s("364685"),
                g = s("566171"),
                f = s("417385"),
                A = s("910687"),
                L = s("49111"),
                m = s("782340"),
                C = s("116407");
            let O = e => e < (0, I.getTotalStickerCountForTier)(L.BoostedGuildTiers.NONE) ? L.BoostedGuildTiers.NONE : e < (0, I.getTotalStickerCountForTier)(L.BoostedGuildTiers.TIER_1) ? L.BoostedGuildTiers.TIER_1 : e < (0, I.getTotalStickerCountForTier)(L.BoostedGuildTiers.TIER_2) ? L.BoostedGuildTiers.TIER_2 : e < (0, I.getTotalStickerCountForTier)(L.BoostedGuildTiers.TIER_3) ? L.BoostedGuildTiers.TIER_3 : L.BoostedGuildTiers.NONE,
                h = e => {
                    let {
                        children: t,
                        currentGuildTier: s,
                        guildStickers: n,
                        tier: l
                    } = e, i = s < l, r = (0, I.getIncrementalStickerCountForTier)(l);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(o.Heading, {
                            color: "header-primary",
                            variant: "heading-md/semibold",
                            children: t
                        }), !i && (0, a.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            children: m.default.Messages.GUILD_STICKER_SETTINGS_REMAINING_SLOTS_AVAILABLE.format({
                                numTotal: r,
                                numAvailable: (0, I.getAvailableStickerSlotCount)(n, l)
                            })
                        })]
                    })
                },
                R = e => {
                    let {
                        guildId: t
                    } = e;
                    (0, o.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await s.el("54666").then(s.bind(s, "54666"));
                        return s => (0, a.jsx)(e, {
                            guildId: t,
                            ...s
                        })
                    })
                },
                D = () => (0, a.jsx)("div", {
                    className: C.placeholderCard,
                    children: (0, a.jsx)("img", {
                        className: C.placeholderImg,
                        alt: m.default.Messages.GUILD_STICKER_SETTINGS_PLACEHOLDER_ALT_TEXT,
                        src: s("89734")
                    })
                }),
                M = e => {
                    let {
                        guild: t
                    } = e, {
                        location: s
                    } = (0, d.useAnalyticsContext)(), {
                        canCreateExpressions: n
                    } = (0, _.useManageResourcePermissions)(t);
                    return (0, a.jsx)(o.Button, {
                        size: o.Button.Sizes.SMALL,
                        color: o.Button.Colors.BRAND,
                        onClick: () => {
                            T.default.track(L.AnalyticEvents.OPEN_MODAL, {
                                type: L.AnalyticsSections.CREATE_STICKER_MODAL,
                                location: s
                            }), R({
                                guildId: t.id
                            })
                        },
                        disabled: !n,
                        children: m.default.Messages.GUILD_STICKER_GRID_UPLOAD_LABEL
                    })
                };
            var G = e => {
                let {
                    guild: t
                } = e, [l, d] = n.useState(!0), T = (0, r.useStateFromStores)([N.default], () => {
                    var e;
                    return null !== (e = N.default.getStickersByGuildId(t.id)) && void 0 !== e ? e : []
                }, [t]), {
                    analyticsLocations: R
                } = (0, u.default)(), G = t.hasFeature(L.GuildFeatures.MORE_STICKERS) ? L.BoostedGuildTiers.TIER_3 : t.premiumTier, x = t.hasFeature(L.GuildFeatures.MORE_STICKERS) ? (0, I.getAppliedGuildBoostsRequired)(t.id)[L.BoostedGuildTiers.TIER_3] : t.premiumSubscriberCount;
                if (n.useEffect(() => {
                        let e = !1,
                            s = async () => {
                                d(!0), await (0, S.fetchGuildStickers)(t.id), !e && d(!1)
                            };
                        return s(), () => {
                            e = !0
                        }
                    }, [t]), n.useEffect(() => {
                        window.dispatchEvent(new Event("resize"))
                    }, [T]), l) return (0, a.jsx)(o.Spinner, {});
                let p = (e, s) => {
                        let a = null;
                        s === L.BoostedGuildTiers.TIER_1 ? a = L.AnalyticsObjectTypes.TIER_1 : s === L.BoostedGuildTiers.TIER_2 ? a = L.AnalyticsObjectTypes.TIER_2 : s === L.BoostedGuildTiers.TIER_3 && (a = L.AnalyticsObjectTypes.TIER_3), (0, E.default)({
                            analyticsLocations: R,
                            analyticsLocation: {
                                page: L.AnalyticsPages.GUILD_SETTINGS,
                                section: L.AnalyticsSections.GUILD_SETTINGS_STICKERS,
                                object: L.AnalyticsObjects.BOOST_LEVEL_UPSELL_BUTTON,
                                objectType: a
                            },
                            guildId: t.id,
                            totalNumberOfSlotsToAssign: e
                        })
                    },
                    U = [{
                        tier: L.BoostedGuildTiers.NONE,
                        title: (0, a.jsx)(h, {
                            guildStickers: T,
                            currentGuildTier: G,
                            tier: L.BoostedGuildTiers.NONE,
                            children: m.default.Messages.GUILD_SETTINGS_STICKERS_FREE_SLOTS_HEADER
                        })
                    }, {
                        tier: L.BoostedGuildTiers.TIER_1,
                        title: (0, a.jsx)(h, {
                            guildStickers: T,
                            currentGuildTier: G,
                            tier: L.BoostedGuildTiers.TIER_1,
                            children: m.default.Messages.PREMIUM_GUILD_TIER_1
                        })
                    }, {
                        tier: L.BoostedGuildTiers.TIER_2,
                        title: (0, a.jsx)(h, {
                            guildStickers: T,
                            currentGuildTier: G,
                            tier: L.BoostedGuildTiers.TIER_2,
                            children: m.default.Messages.PREMIUM_GUILD_TIER_2
                        })
                    }, {
                        tier: L.BoostedGuildTiers.TIER_3,
                        title: (0, a.jsx)(h, {
                            guildStickers: T,
                            currentGuildTier: G,
                            tier: L.BoostedGuildTiers.TIER_3,
                            children: m.default.Messages.PREMIUM_GUILD_TIER_3
                        })
                    }];
                return (0, a.jsx)(g.default, {
                    tiers: U,
                    renderTier: e => {
                        let n, {
                                isAnimatedTo: l,
                                onSetRef: r,
                                tier: d,
                                tiers: u,
                                tierIndex: E
                            } = e,
                            {
                                canCreateExpressions: S,
                                canManageGuildExpression: N
                            } = (0, _.getManageResourcePermissions)(t),
                            g = u[E - 1],
                            h = null != g ? (0, I.getTotalStickerCountForTier)(g.tier) : 0,
                            R = (0, I.getTotalStickerCountForTier)(d.tier),
                            U = (0, I.getIncrementalStickerCountForTier)(d.tier),
                            v = T.slice(h, R),
                            j = v.length > 0,
                            P = G < d.tier,
                            y = O(T.length),
                            b = S && !P && y === d.tier && R !== v.length,
                            B = b || v.length > 0,
                            F = R - h,
                            H = s("89734"),
                            V = U - v.length,
                            w = b ? Math.min(5 - (v.length + 0) % 5, V) : 0,
                            k = [];
                        for (let e = 0; e < w; e++) k.push((0, a.jsx)(D, {}, "placeholder-".concat(e)));
                        let Y = y === E + 1 && y > G,
                            K = b || Y || E > G;
                        return Y ? n = (0, a.jsx)(c.default, {
                            guild: t,
                            size: o.Button.Sizes.SMALL,
                            color: o.Button.Colors.GREEN,
                            buttonText: m.default.Messages.GUILD_STICKER_SETTINGS_UNLOCK_SLOTS,
                            targetBoostedGuildTier: G + 1,
                            analyticsLocation: {
                                page: L.AnalyticsPages.GUILD_SETTINGS,
                                section: L.AnalyticsSections.GUILD_SETTINGS_STICKERS,
                                object: L.AnalyticsObjects.BOOST_UPSELL_NEXT_LEVEL_HEADER,
                                objectType: (0, I.boostedGuildTierToAnalyticsObjectType)(d.tier)
                            }
                        }) : b && (n = (0, a.jsx)(M, {
                            guild: t
                        })), (0, a.jsxs)(f.default, {
                            subscriptionCount: x,
                            tier: d,
                            onSetRef: r,
                            isAnimatedTo: l,
                            hasBottomMargin: E !== u.length - 1,
                            withCardBody: !B,
                            headerButton: n,
                            showHeaderLockStatus: K,
                            guildId: t.id,
                            children: [B && (0, a.jsxs)("div", {
                                className: C.grid,
                                children: [v.map(e => (0, a.jsx)(A.default, {
                                    isDisabled: P,
                                    sticker: e,
                                    canManageSticker: N(e)
                                }, e.id)), k]
                            }), !P && !b && 0 === v.length && (0, a.jsx)("div", {
                                className: i(C.emptyTierWrapper, C.unusedTierWrapper),
                                children: (0, a.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    color: "header-secondary",
                                    children: m.default.Messages.GUILD_STICKER_UNUSED_TIER
                                })
                            }), P && !j && (0, a.jsxs)("div", {
                                className: C.emptyTierWrapper,
                                children: [(0, a.jsx)("img", {
                                    alt: m.default.Messages.GUILD_STICKER_SETTINGS_ICON_ALT_TEXT,
                                    className: C.emptyTierImage,
                                    src: H
                                }), (0, a.jsx)(o.Text, {
                                    className: C.unlockTierCtaHeading,
                                    variant: "text-md/normal",
                                    color: "header-secondary",
                                    children: d.tier === L.BoostedGuildTiers.TIER_1 ? m.default.Messages.GUILD_STICKER_SETTINGS_ADDITIONAL_SLOTS_WITHOUT_TOTAL.format({
                                        numAdditional: F
                                    }) : m.default.Messages.GUILD_STICKER_SETTINGS_ADDITIONAL_SLOTS.format({
                                        numAdditional: F,
                                        numTotal: R
                                    })
                                }), (0, a.jsx)(o.Button, {
                                    color: o.Button.Colors.GREEN,
                                    onClick: () => p((0, I.getAppliedGuildBoostsRequired)(t.id)[d.tier] - t.premiumSubscriberCount, d.tier),
                                    children: m.default.Messages.GUILD_STICKER_SETTINGS_BUY_LEVEL
                                })]
                            })]
                        }, d.tier)
                    }
                })
            }
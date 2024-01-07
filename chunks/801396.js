            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("446674"),
                a = n("77078"),
                u = n("997289"),
                d = n("716241"),
                c = n("685665"),
                f = n("538282"),
                p = n("379532"),
                m = n("592407"),
                h = n("817963"),
                E = n("305961"),
                S = n("326880"),
                g = n("595086"),
                C = n("427459"),
                T = n("49111"),
                v = n("944305"),
                y = n("782340"),
                x = n("12180"),
                I = e => {
                    let {
                        className: t,
                        guildId: n,
                        channel: r,
                        shouldTrackUpsellViewed: I,
                        setTrackedUpsellViewed: N
                    } = e, {
                        location: _
                    } = (0, u.useAnalyticsContext)(), {
                        analyticsLocations: A
                    } = (0, c.default)(), R = (0, s.useStateFromStores)([E.default], () => E.default.getGuild(n)), {
                        canManageAllExpressions: O
                    } = (0, h.useManageResourcePermissions)(R), M = null != R && 0 === (0, C.getTotalStickerCountForTier)(R.premiumTier) && !R.hasFeature(T.GuildFeatures.MORE_STICKERS);
                    return (i.useEffect(() => {
                        O && M && I && ((0, d.trackWithMetadata)(T.AnalyticEvents.PREMIUM_GUILD_UPSELL_VIEWED, {
                            location: _,
                            guild_id: null == R ? void 0 : R.id,
                            channel_id: null == r ? void 0 : r.id,
                            type: "Expression Picker Inline Sticker Upsell",
                            location_stack: A
                        }), N(!0))
                    }, [M, R, r, _, I, N, A, O]), null != R && O) ? M ? (0, l.jsxs)("div", {
                        className: o(x.upsell, t),
                        children: [(0, l.jsx)(S.default, {
                            className: x.icon,
                            width: 24,
                            height: 24
                        }), (0, l.jsx)(a.Text, {
                            color: "interactive-normal",
                            className: x.body,
                            variant: "text-sm/normal",
                            children: y.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_PREMIUM_SUBSCRIPTIONS_DESCRIPTION.format({
                                count: (0, C.getTotalStickerCountForTier)(T.BoostedGuildTiers.TIER_1)
                            })
                        }), (0, l.jsx)(a.Button, {
                            look: a.Button.Looks.LINK,
                            color: a.Button.Colors.LINK,
                            onClick: () => {
                                (0, p.default)({
                                    analyticsLocations: A,
                                    analyticsSourceLocation: _,
                                    guild: R,
                                    perks: (0, v.guildBoostingPerks)()
                                })
                            },
                            children: y.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_PREMIUM_SUBSCRIPTIONS_CTA
                        })]
                    }) : (0, l.jsxs)("div", {
                        className: o(x.upsell, t),
                        children: [(0, l.jsx)(g.default, {
                            className: x.icon,
                            width: 20,
                            height: 20
                        }), (0, l.jsx)(a.Text, {
                            color: "interactive-normal",
                            className: x.body,
                            variant: "text-sm/normal",
                            children: y.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_STICKERS_DESCRIPTION
                        }), (0, l.jsx)(a.Button, {
                            look: a.Button.Looks.LINK,
                            color: a.Button.Colors.LINK,
                            onClick: () => {
                                (0, f.closeExpressionPicker)(), m.default.open(n, T.GuildSettingsSections.STICKERS, _)
                            },
                            children: y.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_STICKERS_CTA
                        })]
                    }) : null
                }
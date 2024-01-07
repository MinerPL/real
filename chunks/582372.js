            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return h
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("446674"),
                l = s("77078"),
                i = s("812204"),
                r = s("685665"),
                o = s("95039"),
                d = s("345988"),
                u = s("163732"),
                c = s("364685"),
                E = s("657"),
                _ = s("993105"),
                T = s("427459"),
                I = s("701909"),
                S = s("900938"),
                N = s("49111"),
                g = s("560241"),
                f = s("782340"),
                A = s("163810");
            let L = {
                    page: N.AnalyticsPages.GUILD_SETTINGS,
                    section: N.AnalyticsSections.GUILD_SETTINGS_STICKERS,
                    object: N.AnalyticsObjects.BOOSTING_BANNER
                },
                m = e => {
                    let {
                        guild: t
                    } = e, {
                        analyticsLocations: s
                    } = (0, r.default)(), n = (0, T.getAppliedGuildBoostsRequired)(t.id)[N.BoostedGuildTiers.TIER_1] - t.premiumSubscriberCount;
                    return (0, a.jsxs)("div", {
                        className: A.upsellContainer,
                        children: [(0, a.jsx)(l.Heading, {
                            className: A.upsellHeader,
                            variant: "heading-xl/semibold",
                            children: f.default.Messages.GUILD_SETTINGS_STICKERS_UPSELL_TITLE
                        }), (0, a.jsx)(l.Text, {
                            className: A.upsellDescription,
                            variant: "text-md/normal",
                            children: f.default.Messages.GUILD_SETTINGS_STICKERS_UPSELL_DESCRIPTION_FREE_SLOTS
                        }), (0, a.jsxs)("div", {
                            className: A.upsellButtons,
                            children: [(0, a.jsx)(l.Button, {
                                className: A.upsellButtonPrimary,
                                innerClassName: A.upsellButton,
                                color: l.Button.Colors.WHITE,
                                onClick: () => (0, u.default)({
                                    analyticsLocations: s,
                                    analyticsLocation: L,
                                    guildId: t.id,
                                    totalNumberOfSlotsToAssign: n
                                }),
                                children: f.default.Messages.GUILD_SETTINGS_STICKERS_BOOST_SERVER
                            }), (0, a.jsx)(l.Button, {
                                innerClassName: A.upsellButton,
                                color: l.Button.Colors.WHITE,
                                onClick: () => (0, o.openGuildBoostingMarketingModal)({
                                    guildId: t.id,
                                    location: {
                                        section: N.AnalyticsSections.GUILD_SETTINGS_STICKERS
                                    }
                                }),
                                children: f.default.Messages.LEARN_MORE
                            })]
                        })]
                    })
                },
                C = () => (0, a.jsxs)(l.FormSection, {
                    title: f.default.Messages.GUILD_SETTINGS_STICKERS_UPLOAD_AUTO_RESIZE_HEADING,
                    children: [(0, a.jsx)(l.FormText, {
                        type: l.FormTextTypes.DESCRIPTION,
                        children: f.default.Messages.GUILD_SETTINGS_STICKERS_UPLOAD_AUTO_RESIZE_INSTRUCTIONS.format({
                            fileSize: (0, _.formatKbSize)(g.MAX_STICKER_FILE_SIZE, {
                                useKibibytes: !0
                            })
                        })
                    }), (0, a.jsx)(l.FormText, {
                        type: l.FormTextTypes.DESCRIPTION,
                        children: f.default.Messages.GUILD_SETTINGS_STICKERS_UPLOAD_AUTO_RESIZE_HELP.format({
                            articleUrl: I.default.getArticleURL(N.HelpdeskArticles.STICKERS_UPLOAD)
                        })
                    })]
                }),
                O = e => {
                    let t, s, n, {
                            guild: l,
                            guildStickers: i
                        } = e,
                        r = l.premiumTier,
                        o = (0, T.getAvailableStickerSlotCount)(i, r),
                        u = (0, T.getNextTier)(r, l.id),
                        c = (0, T.getTotalStickerCountForTier)(r),
                        E = i.length;
                    return null == u || r === N.BoostedGuildTiers.TIER_3 || o > 0 ? (0, a.jsx)(a.Fragment, {}) : (E > c ? (t = f.default.Messages.GUILD_SETTINGS_STICKERS_UPSELL_BANNER_TOO_MANY_STICKERS_HEADER.format({
                        level: u
                    }), s = f.default.Messages.GUILD_SETTINGS_STICKERS_UPSELL_BANNER_TOO_MANY_STICKERS_TEXT.format({
                        level: u
                    }), n = N.AnalyticsObjects.BOOST_UPSELL_BANNER_LOST_LEVEL) : (t = f.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_BANNER_HEADER, s = f.default.Messages.GUILD_SETTINGS_STICKERS_UPSELL_BANNER_TEXT.format({
                        level: u,
                        numAdditional: (0, T.getIncrementalStickerCountForTier)(u)
                    }), n = N.AnalyticsObjects.BOOST_UPSELL_BANNER_SLOTS_FULL), (0, a.jsx)(d.default, {
                        header: t,
                        text: s,
                        guild: l,
                        analyticsLocation: {
                            page: N.AnalyticsPages.GUILD_SETTINGS,
                            section: N.AnalyticsSections.GUILD_SETTINGS_STICKERS,
                            object: n,
                            objectType: (0, T.boostedGuildTierToAnalyticsObjectType)(u)
                        }
                    }))
                };
            var h = () => {
                let e = (0, n.useStateFromStores)([S.default], () => S.default.getGuild()),
                    t = (0, n.useStateFromStores)([c.default], () => {
                        var t;
                        return null != e && null !== (t = c.default.getStickersByGuildId(e.id)) && void 0 !== t ? t : []
                    }, [e]),
                    {
                        AnalyticsLocationProvider: s
                    } = (0, r.default)(i.default.STICKERS);
                if (null == e) return null;
                let o = e.premiumTier !== N.BoostedGuildTiers.NONE || t.length > 0;
                return (0, a.jsx)(s, {
                    children: (0, a.jsxs)(l.FormSection, {
                        title: f.default.Messages.GUILD_SETTINGS_STICKERS,
                        tag: l.FormTitleTags.H1,
                        children: [o ? (0, a.jsxs)("div", {
                            children: [(0, a.jsx)(O, {
                                guild: e,
                                guildStickers: t
                            }), (0, a.jsx)(C, {})]
                        }) : (0, a.jsx)(m, {
                            guild: e
                        }), (0, a.jsx)(l.FormDivider, {
                            className: A.divider
                        }), (0, a.jsx)(E.default, {
                            guild: e
                        })]
                    })
                })
            }
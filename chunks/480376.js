            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            }), n("808653"), n("424973"), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("974667"),
                i = n("446674"),
                r = n("77078"),
                o = n("450911"),
                u = n("272030"),
                d = n("191225"),
                c = n("610898"),
                f = n("255991"),
                h = n("698652"),
                C = n("393027"),
                p = n("373469"),
                m = n("42203"),
                E = n("18494"),
                g = n("800762"),
                I = n("290581"),
                S = n("15738"),
                _ = n("108189"),
                N = n("379881"),
                T = n("986373"),
                A = n("690874"),
                L = n("620882"),
                v = n("686373"),
                x = n("49111"),
                R = n("782340"),
                M = n("308611");
            let O = {
                analyticsSource: {
                    page: x.AnalyticsPages.GUILD_CHANNEL,
                    section: x.AnalyticsSections.CHANNEL_LIST,
                    object: x.AnalyticsObjects.CHANNEL
                }
            };

            function y() {
                let e = (0, s.useTreeItem)("favorites"),
                    {
                        clearFavoriteAdded: t
                    } = (0, T.useFavoriteAdded)(),
                    [y, D] = a.useState(!1),
                    {
                        favoriteServerMuted: b,
                        favoriteChannels: j
                    } = (0, i.useStateFromStoresObject)([N.default], () => ({
                        favoriteChannels: N.default.getFavoriteChannels(),
                        favoriteServerMuted: N.default.favoriteServerMuted
                    })),
                    G = (0, i.useStateFromStores)([E.default], () => E.default.getChannelId(x.FAVORITES)),
                    U = (0, i.useStateFromStores)([m.default], () => m.default.getChannel(G)),
                    P = (0, C.default)(e => e.guildId),
                    w = P === x.FAVORITES,
                    {
                        badge: F,
                        unread: B
                    } = (0, A.default)(j),
                    V = function(e) {
                        let t = (0, i.useStateFromStores)([E.default], () => E.default.getVoiceChannelId()),
                            n = null != t && null != e[t],
                            l = (0, i.useStateFromStores)([p.default], () => {
                                if (!n) return !1;
                                let t = p.default.getCurrentUserActiveStream();
                                return null != t && null != e[t.channelId]
                            }),
                            a = (0, i.useStateFromStores)([p.default], () => p.default.getAllApplicationStreams().some(t => null != e[t.channelId])),
                            s = (0, i.useStateFromStores)([g.default], () => n && null != t && g.default.hasVideo(t), [n, t]),
                            r = (0, i.useStateFromStoresArray)([d.default], () => Object.keys(e).reduce((e, t) => (e.push(...d.default.getEmbeddedActivitiesForChannel(t)), e), [])),
                            o = (0, i.useStateFromStores)([d.default], () => Array.from(d.default.getSelfEmbeddedActivities().values()).some(t => {
                                let {
                                    channelId: n
                                } = t;
                                return null != e[n]
                            })),
                            u = r.length > 0,
                            c = !1,
                            h = !1,
                            C = !1,
                            m = !1;
                        return n ? (c = !s, h = s, C = l, m = o) : (C = a, m = u), (0, f.renderMediaBadge)({
                            audio: c,
                            video: h,
                            screenshare: C,
                            liveStage: !1,
                            isCurrentUserConnected: n,
                            activity: m
                        })
                    }(j),
                    H = F > 0 ? (0, h.renderMentionBadge)(F) : null,
                    k = a.useCallback(() => {
                        t()
                    }, [t]);
                return (0, l.jsxs)(c.ListItem, {
                    children: [(0, l.jsx)(S.default, {
                        selected: w,
                        hovered: y,
                        unread: B && !b,
                        className: M.pill
                    }), (0, l.jsx)(v.default, {
                        onShow: k,
                        children: (0, l.jsx)(L.FavoriteAddedTooltip, {
                            children: (0, l.jsx)(r.BlobMask, {
                                selected: w || y,
                                upperBadge: V,
                                lowerBadge: H,
                                children: (0, l.jsx)(_.default, {
                                    ...e,
                                    ariaLabel: R.default.Messages.GUILD_TOOLTIP_A11Y_LABEL.format({
                                        guildName: R.default.Messages.FAVORITES_GUILD_NAME,
                                        mentions: F
                                    }),
                                    to: {
                                        pathname: x.Routes.CHANNEL(x.FAVORITES, G),
                                        state: O
                                    },
                                    selected: w || y,
                                    onMouseEnter: () => D(!0),
                                    onMouseLeave: () => D(!1),
                                    onMouseDown: function() {
                                        null != U && o.default.preload(U.guild_id, U.id)
                                    },
                                    onContextMenu: function(e) {
                                        (0, u.openContextMenuLazy)(e, async () => {
                                            let {
                                                default: e
                                            } = await n.el("95086").then(n.bind(n, "95086"));
                                            return t => (0, l.jsx)(e, {
                                                ...t
                                            })
                                        })
                                    },
                                    children: (0, l.jsx)(I.default, {
                                        className: M.favoriteIcon,
                                        width: 20,
                                        height: 20
                                    })
                                })
                            })
                        })
                    })]
                })
            }
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            }), n("808653"), n("424973"), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("974667"),
                o = n("446674"),
                u = n("77078"),
                d = n("450911"),
                c = n("272030"),
                f = n("191225"),
                h = n("610898"),
                C = n("255991"),
                p = n("698652"),
                m = n("393027"),
                E = n("373469"),
                g = n("42203"),
                I = n("18494"),
                S = n("800762"),
                _ = n("290581"),
                N = n("15738"),
                T = n("108189"),
                A = n("379881"),
                L = n("986373"),
                v = n("690874"),
                x = n("620882"),
                R = n("686373"),
                M = n("49111"),
                O = n("782340"),
                y = n("308611");
            let D = {
                analyticsSource: {
                    page: M.AnalyticsPages.GUILD_CHANNEL,
                    section: M.AnalyticsSections.CHANNEL_LIST,
                    object: M.AnalyticsObjects.CHANNEL
                }
            };

            function b() {
                let e = (0, r.useTreeItem)("favorites"),
                    {
                        favoriteAdded: t,
                        clearFavoriteAdded: s
                    } = (0, L.useFavoriteAdded)(),
                    [b, j] = a.useState(!1),
                    {
                        favoriteServerMuted: G,
                        favoriteChannels: U
                    } = (0, o.useStateFromStoresObject)([A.default], () => ({
                        favoriteChannels: A.default.getFavoriteChannels(),
                        favoriteServerMuted: A.default.favoriteServerMuted
                    })),
                    P = (0, o.useStateFromStores)([I.default], () => I.default.getChannelId(M.FAVORITES)),
                    w = (0, o.useStateFromStores)([g.default], () => g.default.getChannel(P)),
                    F = (0, m.default)(e => e.guildId),
                    B = F === M.FAVORITES,
                    {
                        badge: V,
                        unread: H
                    } = (0, v.default)(U),
                    k = function(e) {
                        let t = (0, o.useStateFromStores)([I.default], () => I.default.getVoiceChannelId()),
                            n = null != t && null != e[t],
                            l = (0, o.useStateFromStores)([E.default], () => {
                                if (!n) return !1;
                                let t = E.default.getCurrentUserActiveStream();
                                return null != t && null != e[t.channelId]
                            }),
                            a = (0, o.useStateFromStores)([E.default], () => E.default.getAllApplicationStreams().some(t => null != e[t.channelId])),
                            s = (0, o.useStateFromStores)([S.default], () => n && null != t && S.default.hasVideo(t), [n, t]),
                            i = (0, o.useStateFromStoresArray)([f.default], () => Object.keys(e).reduce((e, t) => (e.push(...f.default.getEmbeddedActivitiesForChannel(t)), e), [])),
                            r = (0, o.useStateFromStores)([f.default], () => Array.from(f.default.getSelfEmbeddedActivities().values()).some(t => {
                                let {
                                    channelId: n
                                } = t;
                                return null != e[n]
                            })),
                            u = i.length > 0,
                            d = !1,
                            c = !1,
                            h = !1,
                            p = !1;
                        return n ? (d = !s, c = s, h = l, p = r) : (h = a, p = u), (0, C.renderMediaBadge)({
                            audio: d,
                            video: c,
                            screenshare: h,
                            liveStage: !1,
                            isCurrentUserConnected: n,
                            activity: p
                        })
                    }(U),
                    Y = V > 0 ? (0, p.renderMentionBadge)(V) : null,
                    K = a.useCallback(() => {
                        s()
                    }, [s]);
                return (0, l.jsxs)(h.ListItem, {
                    children: [(0, l.jsx)(N.default, {
                        selected: B,
                        hovered: b,
                        unread: H && !G,
                        className: y.pill
                    }), (0, l.jsx)(R.default, {
                        onShow: K,
                        children: (0, l.jsx)(x.FavoriteAddedTooltip, {
                            children: (0, l.jsx)(u.BlobMask, {
                                selected: B || b,
                                upperBadge: k,
                                lowerBadge: Y,
                                children: (0, l.jsx)(T.default, {
                                    ...e,
                                    ariaLabel: O.default.Messages.GUILD_TOOLTIP_A11Y_LABEL.format({
                                        guildName: O.default.Messages.FAVORITES_GUILD_NAME,
                                        mentions: V
                                    }),
                                    to: {
                                        pathname: M.Routes.CHANNEL(M.FAVORITES, P),
                                        state: D
                                    },
                                    selected: B || b,
                                    onMouseEnter: () => j(!0),
                                    onMouseLeave: () => j(!1),
                                    onMouseDown: function() {
                                        null != w && d.default.preload(w.guild_id, w.id)
                                    },
                                    onContextMenu: function(e) {
                                        (0, c.openContextMenuLazy)(e, async () => {
                                            let {
                                                default: e
                                            } = await n.el("95086").then(n.bind(n, "95086"));
                                            return t => (0, l.jsx)(e, {
                                                ...t
                                            })
                                        })
                                    },
                                    children: (0, l.jsx)("div", {
                                        className: i(y.ring, {
                                            [y.ringActive]: t
                                        }),
                                        children: (0, l.jsx)(_.default, {
                                            className: y.favoriteIcon,
                                            width: 20,
                                            height: 20
                                        })
                                    })
                                })
                            })
                        })
                    })]
                })
            }
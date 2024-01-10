            "use strict";
            n.r(t), n.d(t, {
                useFilterCategoriesByQuery: function() {
                    return O
                },
                getFirstRouteFor: function() {
                    return x
                },
                clearRecentChannels: function() {
                    return D
                },
                useChannelBrowserSections: function() {
                    return b
                },
                useChannelBrowserChannelCount: function() {
                    return M
                },
                getActiveAgoTimestamp: function() {
                    return L
                }
            }), n("843762");
            var r = n("884691"),
                i = n("448105"),
                s = n.n(i),
                l = n("866227"),
                a = n.n(l),
                o = n("249654"),
                u = n("446674"),
                c = n("151426"),
                d = n("267363"),
                f = n("320954"),
                p = n("10641"),
                _ = n("290886"),
                m = n("319839"),
                E = n("194704"),
                I = n("393414"),
                h = n("42203"),
                C = n("245997"),
                S = n("660478"),
                g = n("49111"),
                T = n("724210"),
                N = n("796618"),
                A = n("133335"),
                v = n("782340");

            function R(e, t) {
                e.index = t
            }

            function O(e, t, n, i) {
                i = i.toLowerCase();
                let l = (0, _.useCanSeeOnboardingHome)(e),
                    a = r.useCallback((e, t) => !(l && e.channel.hasFlag(T.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) && e.channel.type !== g.ChannelTypes.GUILD_DIRECTORY && (0 === t.length || s(t, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(t)), [l]);
                return r.useMemo(() => {
                    let e = {
                        null: [],
                        _categories: []
                    };
                    return n[g.ChannelTypes.GUILD_CATEGORY].forEach(n => {
                        let {
                            channel: r
                        } = n;
                        "null" === r.id && (e.null = t.null.filter(e => a(e, i))), e[r.id] = t[r.id].filter(e => a(e, i))
                    }), e._categories = t._categories.filter(t => "null" === t.channel.id || 0 === i.length || e[t.channel.id].length > 0), (0, f.default)(e._categories, e).forEach(R), e
                }, [t, n, a, i])
            }

            function x(e) {
                let t = e.getSections();
                if (t[m.SECTION_INDEX_COMMUNITY] > 0) {
                    let t = e.getCommunitySection().getRow(0);
                    switch (t) {
                        case N.ChannelListCommunityRow.GUILD_HOME:
                            return T.StaticChannelRoute.GUILD_HOME;
                        case N.ChannelListCommunityRow.GUILD_ROLE_SUBSCRIPTIONS:
                            return T.StaticChannelRoute.ROLE_SUBSCRIPTIONS;
                        case N.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS:
                            return T.StaticChannelRoute.MEMBER_APPLICATIONS
                    }
                }
                for (let r = m.SECTION_INDEX_UNCATEGORIZED_CHANNELS; r < e.voiceChannelsSectionNumber; r++)
                    if (t[r] > 0) {
                        var n;
                        let t = null === (n = e.getChannelFromSectionRow(r, 0)) || void 0 === n ? void 0 : n.channel;
                        if (null != t) return t.id
                    } return null
            }

            function D(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                (0, E.bulkClearRecents)(e, t), (0, d.bulkAck)(t.map(e => ({
                    channelId: e,
                    readStateType: A.ReadStateTypes.CHANNEL,
                    messageId: S.default.lastMessageId(e)
                }))), null != n && (0, I.transitionTo)(g.Routes.CHANNEL(e, n))
            }

            function b(e, t, n, r) {
                let i = (0, p.useIsDismissibleContentDismissed)(c.DismissibleContent.CHANNEL_BROWSER_NUX),
                    s = (0, u.useStateFromStoresObject)([h.default], () => {
                        let t = {},
                            n = h.default.getMutableGuildChannelsForGuild(e);
                        for (let e in n) {
                            let {
                                parent_id: i
                            } = n[e];
                            if (null != i) {
                                var r;
                                t[i] = (null !== (r = t[i]) && void 0 !== r ? r : 0) + 1
                            }
                        }
                        return t
                    }, [e]),
                    l = t._categories.map(e => {
                        let r = t[e.channel.id];
                        return {
                            rowCount: "null" !== e.channel.id && 0 === s[e.channel.id] ? 1 : r.length,
                            rowHeight: 0 === r.length ? 0 : n
                        }
                    });
                return !i && null != r && l.unshift({
                    rowCount: 1,
                    rowHeight: r
                }), l
            }

            function M(e) {
                var t, n;
                let r = (0, u.useStateFromStores)([C.default], () => C.default.getCategories(e)),
                    i = r._categories.length,
                    s = r._categories[r._categories.length - 1];
                if (null == s) return 0;
                let l = null !== (n = null === (t = s.channel) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : "null",
                    a = r[l];
                return null == a ? 0 : 0 === a.length ? s.index + 2 - i : a[a.length - 1].index + 2 - i
            }

            function L(e) {
                var t;
                return v.default.Messages.CHANNEL_BROWSER_ACTIVE_TEXT.format({
                    timeAgo: a(o.default.extractTimestamp(null !== (t = S.default.lastMessageId(e)) && void 0 !== t ? t : e)).fromNow()
                })
            }
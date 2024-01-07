            "use strict";
            n.r(t), n.d(t, {
                useFilterCategoriesByQuery: function() {
                    return A
                },
                getFirstRouteFor: function() {
                    return x
                },
                clearRecentChannels: function() {
                    return R
                },
                useChannelBrowserSections: function() {
                    return M
                },
                useChannelBrowserChannelCount: function() {
                    return L
                },
                getActiveAgoTimestamp: function() {
                    return D
                }
            }), n("843762");
            var i = n("884691"),
                a = n("448105"),
                l = n.n(a),
                s = n("866227"),
                o = n.n(s),
                r = n("249654"),
                d = n("446674"),
                u = n("151426"),
                c = n("267363"),
                f = n("320954"),
                h = n("10641"),
                p = n("290886"),
                g = n("319839"),
                m = n("194704"),
                E = n("393414"),
                S = n("42203"),
                v = n("245997"),
                y = n("660478"),
                C = n("49111"),
                N = n("724210"),
                O = n("796618"),
                T = n("133335"),
                I = n("782340");

            function _(e, t) {
                e.index = t
            }

            function A(e, t, n, a) {
                a = a.toLowerCase();
                let s = (0, p.useCanSeeOnboardingHome)(e),
                    o = i.useCallback((e, t) => !(s && e.channel.hasFlag(N.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) && e.channel.type !== C.ChannelTypes.GUILD_DIRECTORY && (0 === t.length || l(t, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(t)), [s]);
                return i.useMemo(() => {
                    let e = {
                        null: [],
                        _categories: []
                    };
                    return n[C.ChannelTypes.GUILD_CATEGORY].forEach(n => {
                        let {
                            channel: i
                        } = n;
                        "null" === i.id && (e.null = t.null.filter(e => o(e, a))), e[i.id] = t[i.id].filter(e => o(e, a))
                    }), e._categories = t._categories.filter(t => "null" === t.channel.id || 0 === a.length || e[t.channel.id].length > 0), (0, f.default)(e._categories, e).forEach(_), e
                }, [t, n, o, a])
            }

            function x(e) {
                let t = e.getSections();
                if (t[g.SECTION_INDEX_COMMUNITY] > 0) {
                    let t = e.getCommunitySection().getRow(0);
                    switch (t) {
                        case O.ChannelListCommunityRow.GUILD_HOME:
                            return N.StaticChannelRoute.GUILD_HOME;
                        case O.ChannelListCommunityRow.GUILD_ROLE_SUBSCRIPTIONS:
                            return N.StaticChannelRoute.ROLE_SUBSCRIPTIONS;
                        case O.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS:
                            return N.StaticChannelRoute.MEMBER_APPLICATIONS
                    }
                }
                for (let i = g.SECTION_INDEX_UNCATEGORIZED_CHANNELS; i < e.voiceChannelsSectionNumber; i++)
                    if (t[i] > 0) {
                        var n;
                        let t = null === (n = e.getChannelFromSectionRow(i, 0)) || void 0 === n ? void 0 : n.channel;
                        if (null != t) return t.id
                    } return null
            }

            function R(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                (0, m.bulkClearRecents)(e, t), (0, c.bulkAck)(t.map(e => ({
                    channelId: e,
                    readStateType: T.ReadStateTypes.CHANNEL,
                    messageId: y.default.lastMessageId(e)
                }))), null != n && (0, E.transitionTo)(C.Routes.CHANNEL(e, n))
            }

            function M(e, t, n, i) {
                let a = (0, h.useIsDismissibleContentDismissed)(u.DismissibleContent.CHANNEL_BROWSER_NUX),
                    l = (0, d.useStateFromStoresObject)([S.default], () => {
                        let t = {},
                            n = S.default.getMutableGuildChannelsForGuild(e);
                        for (let e in n) {
                            let {
                                parent_id: a
                            } = n[e];
                            if (null != a) {
                                var i;
                                t[a] = (null !== (i = t[a]) && void 0 !== i ? i : 0) + 1
                            }
                        }
                        return t
                    }, [e]),
                    s = t._categories.map(e => {
                        let i = t[e.channel.id];
                        return {
                            rowCount: "null" !== e.channel.id && 0 === l[e.channel.id] ? 1 : i.length,
                            rowHeight: 0 === i.length ? 0 : n
                        }
                    });
                return !a && null != i && s.unshift({
                    rowCount: 1,
                    rowHeight: i
                }), s
            }

            function L(e) {
                var t, n;
                let i = (0, d.useStateFromStores)([v.default], () => v.default.getCategories(e)),
                    a = i._categories.length,
                    l = i._categories[i._categories.length - 1];
                if (null == l) return 0;
                let s = null !== (n = null === (t = l.channel) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : "null",
                    o = i[s];
                return null == o ? 0 : 0 === o.length ? l.index + 2 - a : o[o.length - 1].index + 2 - a
            }

            function D(e) {
                var t;
                return I.default.Messages.CHANNEL_BROWSER_ACTIVE_TEXT.format({
                    timeAgo: o(r.default.extractTimestamp(null !== (t = y.default.lastMessageId(e)) && void 0 !== t ? t : e)).fromNow()
                })
            }
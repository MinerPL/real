            "use strict";
            a.r(t), a.d(t, {
                useTrackThreadBrowserTab: function() {
                    return x
                },
                useActiveThreads: function() {
                    return v
                },
                useActiveGuildThreads: function() {
                    return _
                },
                useArchivedThreads: function() {
                    return N
                }
            }), a("222007");
            var s = a("884691"),
                r = a("917351"),
                l = a.n(r),
                n = a("446674"),
                d = a("404607"),
                u = a("42203"),
                i = a("957255"),
                o = a("660478"),
                c = a("449008"),
                f = a("299039"),
                h = a("689275"),
                m = a("821343"),
                g = a("755624"),
                S = a("263024"),
                T = a("487269"),
                E = a("843455");

            function x() {
                s.useEffect(() => {
                    (0, T.trackThreadBrowserTab)()
                }, [])
            }

            function v(e) {
                let t = function(e) {
                        let t = (0, n.useStateFromStoresArray)([i.default, h.default, u.default], () => l(h.default.getThreadsForParent(e.guild_id, e.id)).values().map(e => {
                            let {
                                id: t
                            } = e;
                            return u.default.getChannel(t)
                        }).filter(c.isNotNullish).filter(e => i.default.can(E.Permissions.VIEW_CHANNEL, e)).map(e => e.id).value(), [e.guild_id, e.id]);
                        return s.useMemo(() => l(t).sort((e, t) => f.default.compare(o.default.lastMessageId(e), o.default.lastMessageId(t))).reverse().value(), [t])
                    }(e),
                    [a, r] = (0, n.useStateFromStores)([g.default], () => l.partition(t, e => g.default.hasJoined(e)), [t], n.statesWillNeverBeEqual);
                return {
                    joinedThreadIds: a,
                    unjoinedThreadIds: r
                }
            }

            function _(e) {
                let t = (0, n.useStateFromStoresArray)([i.default, h.default, u.default], () => l(h.default.getThreadsForGuild(e)).values().map(e => l.values(e)).flatten().map(e => {
                    let {
                        id: t
                    } = e;
                    return u.default.getChannel(t)
                }).filter(c.isNotNullish).filter(e => i.default.can(E.Permissions.VIEW_CHANNEL, e)).map(e => e.id).value(), [e]);
                return s.useMemo(() => l(t).sort((e, t) => f.default.compare(o.default.lastMessageId(e), o.default.lastMessageId(t))).reverse().value(), [t])
            }

            function N(e, t, a) {
                let {
                    canLoadMore: r,
                    loading: o,
                    nextOffset: c,
                    isInitialLoad: f
                } = (0, n.useStateFromStoresObject)([m.default], () => ({
                    loading: m.default.isLoading(e.id, t, a),
                    isInitialLoad: m.default.isInitialLoad,
                    canLoadMore: m.default.canLoadMore,
                    nextOffset: m.default.nextOffset
                })), h = s.useCallback(() => {
                    i.default.can(E.Permissions.READ_MESSAGE_HISTORY, e) && S.default.loadArchivedThreads(e.guild_id, e.id, t, a, c)
                }, [e, t, a, c]);
                s.useEffect(() => {
                    f && h()
                }, [e.id, t, a, f]), s.useEffect(() => {
                    d.default.resort(e.id)
                }, [e.id]);
                let g = (0, n.useStateFromStoresArray)([m.default, u.default, i.default], () => l(m.default.getThreads(e.id, t, a)).filter(e => {
                    let t = u.default.getChannel(e);
                    return null != t && i.default.can(E.Permissions.VIEW_CHANNEL, t)
                }).value());
                return {
                    threadIds: g,
                    canLoadMore: r,
                    loading: o || f,
                    loadMore: h
                }
            }
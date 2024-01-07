            "use strict";
            n.r(t), n.d(t, {
                useTrackThreadBrowserTab: function() {
                    return S
                },
                useActiveThreads: function() {
                    return E
                },
                useActiveGuildThreads: function() {
                    return I
                },
                useArchivedThreads: function() {
                    return _
                }
            }), n("222007");
            var l = n("884691"),
                a = n("917351"),
                r = n.n(a),
                i = n("446674"),
                s = n("404607"),
                u = n("42203"),
                o = n("957255"),
                d = n("660478"),
                c = n("449008"),
                f = n("299039"),
                h = n("689275"),
                p = n("821343"),
                C = n("755624"),
                m = n("263024"),
                v = n("487269"),
                g = n("843455");

            function S() {
                l.useEffect(() => {
                    (0, v.trackThreadBrowserTab)()
                }, [])
            }

            function E(e) {
                let t = function(e) {
                        let t = (0, i.useStateFromStoresArray)([o.default, h.default, u.default], () => r(h.default.getThreadsForParent(e.guild_id, e.id)).values().map(e => {
                            let {
                                id: t
                            } = e;
                            return u.default.getChannel(t)
                        }).filter(c.isNotNullish).filter(e => o.default.can(g.Permissions.VIEW_CHANNEL, e)).map(e => e.id).value(), [e.guild_id, e.id]);
                        return l.useMemo(() => r(t).sort((e, t) => f.default.compare(d.default.lastMessageId(e), d.default.lastMessageId(t))).reverse().value(), [t])
                    }(e),
                    [n, a] = (0, i.useStateFromStores)([C.default], () => r.partition(t, e => C.default.hasJoined(e)), [t], i.statesWillNeverBeEqual);
                return {
                    joinedThreadIds: n,
                    unjoinedThreadIds: a
                }
            }

            function I(e) {
                let t = (0, i.useStateFromStoresArray)([o.default, h.default, u.default], () => r(h.default.getThreadsForGuild(e)).values().map(e => r.values(e)).flatten().map(e => {
                    let {
                        id: t
                    } = e;
                    return u.default.getChannel(t)
                }).filter(c.isNotNullish).filter(e => o.default.can(g.Permissions.VIEW_CHANNEL, e)).map(e => e.id).value(), [e]);
                return l.useMemo(() => r(t).sort((e, t) => f.default.compare(d.default.lastMessageId(e), d.default.lastMessageId(t))).reverse().value(), [t])
            }

            function _(e, t, n) {
                let {
                    canLoadMore: a,
                    loading: d,
                    nextOffset: c,
                    isInitialLoad: f
                } = (0, i.useStateFromStoresObject)([p.default], () => ({
                    loading: p.default.isLoading(e.id, t, n),
                    isInitialLoad: p.default.isInitialLoad,
                    canLoadMore: p.default.canLoadMore,
                    nextOffset: p.default.nextOffset
                })), h = l.useCallback(() => {
                    o.default.can(g.Permissions.READ_MESSAGE_HISTORY, e) && m.default.loadArchivedThreads(e.guild_id, e.id, t, n, c)
                }, [e, t, n, c]);
                l.useEffect(() => {
                    f && h()
                }, [e.id, t, n, f]), l.useEffect(() => {
                    s.default.resort(e.id)
                }, [e.id]);
                let C = (0, i.useStateFromStoresArray)([p.default, u.default, o.default], () => r(p.default.getThreads(e.id, t, n)).filter(e => {
                    let t = u.default.getChannel(e);
                    return null != t && o.default.can(g.Permissions.VIEW_CHANNEL, t)
                }).value());
                return {
                    threadIds: C,
                    canLoadMore: a,
                    loading: d || f,
                    loadMore: h
                }
            }
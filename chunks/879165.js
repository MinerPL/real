            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("917351"),
                i = n.n(s),
                r = n("249654"),
                o = n("446674"),
                u = n("913144"),
                d = n("267363"),
                c = n("152637"),
                f = n("578198"),
                E = n("689275"),
                _ = n("967241"),
                h = n("42203"),
                S = n("449008"),
                T = n("648564"),
                p = n("419309");

            function N(e) {
                let {
                    channel: t,
                    channelRecord: n,
                    deleteChannel: s
                } = e, N = (0, o.useStateFromStoresArray)([E.default, h.default], () => i(E.default.getThreadsForParent(n.guild_id, n.id)).values().filter(e => {
                    let {
                        id: n
                    } = e;
                    return r.default.compare(n, t.oldestReadMessageId) > 0
                }).map(e => {
                    let {
                        id: t
                    } = e;
                    return h.default.getChannel(t)
                }).filter(S.isNotNullish).sort((e, t) => r.default.compare(e.id, t.id)).value(), [t.oldestReadMessageId, n.guild_id, n.id]), I = a.useCallback((e, t) => {
                    (0, _.openThreadSidebarForViewing)(e, t, T.OpenThreadAnalyticsLocations.INBOX)
                }, []);
                return a.useEffect(() => {
                    null != n && t.isFullyLoaded && !t.hasError && !t.collapsed && 0 === N.length && u.default.wait(() => {
                        (0, d.ack)(t.channelId, !0), s(t.channelId)
                    })
                }), (0, l.jsx)("div", {
                    className: p.container,
                    children: N.map(e => (0, l.jsx)(f.ForumPostComposerStoreProvider, {
                        createStore: () => (0, f.createForumPostComposerStore)(n),
                        children: (0, l.jsx)(c.default, {
                            className: p.forumPost,
                            threadId: e.id,
                            goToThread: I
                        })
                    }, e.id))
                })
            }
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("917351"),
                i = n.n(s),
                r = n("446674"),
                o = n("77078"),
                u = n("308289"),
                d = n("144491"),
                c = n("401690"),
                f = n("487269"),
                h = n("967241"),
                C = n("957255"),
                p = n("660478"),
                m = n("697218"),
                E = n("315102"),
                g = n("299039"),
                I = n("49111"),
                S = n("648564"),
                _ = n("782340"),
                N = n("141322");

            function T(e) {
                let {
                    channel: t
                } = e, s = (0, r.useStateFromStoresArray)([c.default, p.default, C.default], () => {
                    let e = c.default.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
                    return i(c.default.getActiveJoinedThreadsForParent(t.guild_id, t.id)).values().map(e => e.channel).concat(i.values(c.default.getActiveUnjoinedThreadsForParent(t.guild_id, t.id))).filter(t => !(t.id in e) && C.default.can(I.Permissions.VIEW_CHANNEL, t)).sort((e, t) => {
                        let n = p.default.lastMessageId(e.id),
                            l = p.default.lastMessageId(t.id);
                        return g.default.compare(n, l)
                    }).reverse().value()
                }), u = t.isForumLikeChannel() ? 5 : 3;
                return a.useEffect(() => {
                    (0, f.trackActiveThreadsPopoutOpened)()
                }, []), (0, l.jsxs)("div", {
                    className: N.popout,
                    children: [(0, l.jsx)(o.Text, {
                        className: N.title,
                        variant: "text-xs/bold",
                        color: "header-secondary",
                        children: t.isForumLikeChannel() ? _.default.Messages.ACTIVE_THREADS_POPOUT_HEADER_FORUM : _.default.Messages.ACTIVE_THREADS_POPOUT_HEADER
                    }), s.slice(0, t.isForumLikeChannel() ? s.length : u).map(e => (0, l.jsx)(A, {
                        thread: e
                    }, e.id)).filter(e => a.isValidElement(e)).slice(0, u), (0, l.jsx)(o.Clickable, {
                        className: N.more,
                        onClick: () => {
                            t.isForumLikeChannel() ? (0, d.transitionToChannel)(t.id) : (0, o.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("33250").then(n.bind(n, "33250"));
                                return n => (0, l.jsx)(e, {
                                    channel: t,
                                    ...n
                                })
                            })
                        },
                        children: (0, l.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "none",
                            children: _.default.Messages.ACTIVE_THREADS_POPOUT_LINK
                        })
                    })]
                })
            }

            function A(e) {
                let {
                    thread: t
                } = e, n = (0, r.useStateFromStores)([m.default], () => m.default.getUser(t.ownerId)), a = (0, f.useLastMessageTimestamp)(t);
                return (0, l.jsxs)(o.Clickable, {
                    className: N.row,
                    onClick: e => {
                        (0, h.openThreadSidebarForViewing)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, S.OpenThreadAnalyticsLocations.POPOUT)
                    },
                    children: [null == n ? (0, l.jsx)("img", {
                        className: N.avatar,
                        src: E.default.getDefaultAvatarURL(void 0, void 0),
                        alt: ""
                    }) : (0, l.jsx)(u.default, {
                        className: N.avatar,
                        user: n,
                        size: o.AvatarSizes.SIZE_16
                    }), (0, l.jsx)(o.Text, {
                        className: N.name,
                        variant: "text-sm/normal",
                        color: "none",
                        children: t.name
                    }), (0, l.jsxs)(o.Text, {
                        className: N.timestamp,
                        variant: "text-sm/normal",
                        color: "none",
                        children: [(0, l.jsx)("span", {
                            className: N.bullet,
                            children: "•"
                        }), (0, f.getTimestampString)(a)]
                    })]
                })
            }
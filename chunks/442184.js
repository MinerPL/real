            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var l = n("37983"),
                a = n("884691"),
                r = n("446674"),
                i = n("77078"),
                s = n("308289"),
                u = n("750560"),
                o = n("619335"),
                d = n("95045"),
                c = n("574073"),
                f = n("26989"),
                h = n("660478"),
                p = n("27618"),
                C = n("697218"),
                m = n("959097"),
                v = n("93427"),
                g = n("299039"),
                S = n("158998"),
                E = n("610730"),
                I = n("487269"),
                _ = n("719347"),
                x = n("782340"),
                T = n("140407");

            function L(e) {
                return e.isActiveThread() ? (0, l.jsx)(N, {
                    channel: e
                }) : (0, l.jsx)(R, {
                    channel: e
                })
            }

            function N(e) {
                let {
                    channel: t
                } = e, n = (0, r.useStateFromStores)([E.default], () => E.default.getMostRecentMessage(t.id));
                return null == n ? (0, l.jsx)(A, {
                    channel: t
                }) : (0, l.jsx)(y, {
                    channel: t,
                    message: n
                })
            }

            function A(e) {
                let {
                    channel: t
                } = e, n = (0, I.useLastMessageTimestamp)(t);
                return (0, l.jsxs)(i.Text, {
                    className: T.subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: [x.default.Messages.THREAD_BROWSER_NO_RECENT_MESSAGES, "\xa0 • \xa0", (0, I.getTimestampString)(n)]
                })
            }

            function y(e) {
                let {
                    channel: t,
                    message: n
                } = e;
                (0, u.useSubscribeGuildMembers)({
                    [t.guild_id]: [n.author.id]
                });
                let o = (0, r.useStateFromStores)([C.default], () => {
                        var e;
                        return null !== (e = C.default.getUser(n.author.id)) && void 0 !== e ? e : n.author
                    }),
                    {
                        nick: f,
                        colorString: h
                    } = (0, c.default)(n),
                    m = (0, r.useStateFromStores)([p.default], () => p.default.isBlocked(n.author.id)),
                    S = a.useMemo(() => {
                        let e = null != n.content && "" !== n.content ? (0, d.default)(n, {
                                formatInline: !0
                            }).content : null,
                            {
                                contentPlaceholder: t,
                                renderedContent: a,
                                icon: r
                            } = (0, v.renderSingleLineMessage)(n, e, m, T.messageContent, {
                                iconClass: T.messageContentIcon,
                                iconSize: _.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
                            });
                        return (0, l.jsxs)(l.Fragment, {
                            children: [null != a ? a : (0, l.jsx)("span", {
                                children: t
                            }), r]
                        })
                    }, [n, m]);
                return (0, l.jsxs)(i.Text, {
                    className: T.subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: [(0, l.jsx)(s.default, {
                        className: T.avatar,
                        user: o,
                        size: i.AvatarSizes.SIZE_16
                    }), (0, l.jsx)(i.NameWithRole, {
                        name: f,
                        color: h,
                        className: T.authorName
                    }), ":\xa0", S, "\xa0 • \xa0", (0, I.getTimestampString)(g.default.extractTimestamp(n.id))]
                })
            }

            function R(e) {
                var t, n, a;
                let {
                    channel: d
                } = e, c = (0, r.useStateFromStores)([h.default], () => h.default.lastMessageId(d.id)), p = null == c ? new Date(null !== (n = null === (t = d.threadMetadata) || void 0 === t ? void 0 : t.archiveTimestamp) && void 0 !== n ? n : Date.now()).getTime() : g.default.extractTimestamp(c);
                (0, u.useSubscribeGuildMembers)({
                    [d.guild_id]: [d.ownerId]
                });
                let v = (0, r.useStateFromStores)([C.default], () => C.default.getUser(d.ownerId)),
                    E = (0, r.useStateFromStores)([f.default], () => f.default.getMember(d.guild_id, d.ownerId)),
                    _ = null !== (a = (0, o.default)(d)) && void 0 !== a ? a : m.default;
                return (0, l.jsx)(i.Text, {
                    className: T.subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: null == v ? (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("div", {
                            className: T.noAvatarIcon,
                            children: (0, l.jsx)(_, {
                                width: 10,
                                height: 10
                            })
                        }), x.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
                            time: (0, I.getTimestampString)(p)
                        })]
                    }) : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(s.default, {
                            className: T.avatar,
                            user: v,
                            size: i.AvatarSizes.SIZE_16
                        }), x.default.Messages.THREAD_BROWSER_STARTED_BY.format({
                            authorHook(e, t) {
                                var n, a;
                                return (0, l.jsx)(i.NameWithRole, {
                                    className: T.startedByName,
                                    color: null !== (n = null == E ? void 0 : E.colorString) && void 0 !== n ? n : void 0,
                                    name: null !== (a = null == E ? void 0 : E.nick) && void 0 !== a ? a : S.default.getName(v)
                                }, t)
                            }
                        }), (0, l.jsx)("span", {
                            className: T.bullet,
                            children: "•"
                        }), x.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
                            time: (0, I.getTimestampString)(p)
                        })]
                    })
                })
            }
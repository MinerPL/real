            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return j
                }
            });
            var s = a("37983"),
                r = a("884691"),
                l = a("446674"),
                n = a("77078"),
                d = a("308289"),
                u = a("750560"),
                i = a("619335"),
                o = a("95045"),
                c = a("574073"),
                f = a("26989"),
                h = a("660478"),
                m = a("27618"),
                g = a("697218"),
                S = a("959097"),
                T = a("93427"),
                E = a("299039"),
                x = a("158998"),
                v = a("610730"),
                _ = a("487269"),
                N = a("719347"),
                R = a("782340"),
                A = a("140407");

            function j(e) {
                return e.isActiveThread() ? (0, s.jsx)(M, {
                    channel: e
                }) : (0, s.jsx)(I, {
                    channel: e
                })
            }

            function M(e) {
                let {
                    channel: t
                } = e, a = (0, l.useStateFromStores)([v.default], () => v.default.getMostRecentMessage(t.id));
                return null == a ? (0, s.jsx)(C, {
                    channel: t
                }) : (0, s.jsx)(p, {
                    channel: t,
                    message: a
                })
            }

            function C(e) {
                let {
                    channel: t
                } = e, a = (0, _.useLastMessageTimestamp)(t);
                return (0, s.jsxs)(n.Text, {
                    className: A.subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: [R.default.Messages.THREAD_BROWSER_NO_RECENT_MESSAGES, "\xa0 • \xa0", (0, _.getTimestampString)(a)]
                })
            }

            function p(e) {
                let {
                    channel: t,
                    message: a
                } = e;
                (0, u.useSubscribeGuildMembers)({
                    [t.guild_id]: [a.author.id]
                });
                let i = (0, l.useStateFromStores)([g.default], () => {
                        var e;
                        return null !== (e = g.default.getUser(a.author.id)) && void 0 !== e ? e : a.author
                    }),
                    {
                        nick: f,
                        colorString: h
                    } = (0, c.default)(a),
                    S = (0, l.useStateFromStores)([m.default], () => m.default.isBlocked(a.author.id)),
                    x = r.useMemo(() => {
                        let e = null != a.content && "" !== a.content ? (0, o.default)(a, {
                                formatInline: !0
                            }).content : null,
                            {
                                contentPlaceholder: t,
                                renderedContent: r,
                                icon: l
                            } = (0, T.renderSingleLineMessage)(a, e, S, A.messageContent, {
                                iconClass: A.messageContentIcon,
                                iconSize: N.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
                            });
                        return (0, s.jsxs)(s.Fragment, {
                            children: [null != r ? r : (0, s.jsx)("span", {
                                children: t
                            }), l]
                        })
                    }, [a, S]);
                return (0, s.jsxs)(n.Text, {
                    className: A.subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: [(0, s.jsx)(d.default, {
                        className: A.avatar,
                        user: i,
                        size: n.AvatarSizes.SIZE_16
                    }), (0, s.jsx)(n.NameWithRole, {
                        name: f,
                        color: h,
                        className: A.authorName
                    }), ":\xa0", x, "\xa0 • \xa0", (0, _.getTimestampString)(E.default.extractTimestamp(a.id))]
                })
            }

            function I(e) {
                var t, a, r;
                let {
                    channel: o
                } = e, c = (0, l.useStateFromStores)([h.default], () => h.default.lastMessageId(o.id)), m = null == c ? new Date(null !== (a = null === (t = o.threadMetadata) || void 0 === t ? void 0 : t.archiveTimestamp) && void 0 !== a ? a : Date.now()).getTime() : E.default.extractTimestamp(c);
                (0, u.useSubscribeGuildMembers)({
                    [o.guild_id]: [o.ownerId]
                });
                let T = (0, l.useStateFromStores)([g.default], () => g.default.getUser(o.ownerId)),
                    v = (0, l.useStateFromStores)([f.default], () => f.default.getMember(o.guild_id, o.ownerId)),
                    N = null !== (r = (0, i.default)(o)) && void 0 !== r ? r : S.default;
                return (0, s.jsx)(n.Text, {
                    className: A.subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: null == T ? (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("div", {
                            className: A.noAvatarIcon,
                            children: (0, s.jsx)(N, {
                                width: 10,
                                height: 10
                            })
                        }), R.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
                            time: (0, _.getTimestampString)(m)
                        })]
                    }) : (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(d.default, {
                            className: A.avatar,
                            user: T,
                            size: n.AvatarSizes.SIZE_16
                        }), R.default.Messages.THREAD_BROWSER_STARTED_BY.format({
                            authorHook(e, t) {
                                var a, r;
                                return (0, s.jsx)(n.NameWithRole, {
                                    className: A.startedByName,
                                    color: null !== (a = null == v ? void 0 : v.colorString) && void 0 !== a ? a : void 0,
                                    name: null !== (r = null == v ? void 0 : v.nick) && void 0 !== r ? r : x.default.getName(T)
                                }, t)
                            }
                        }), (0, s.jsx)("span", {
                            className: A.bullet,
                            children: "•"
                        }), R.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
                            time: (0, _.getTimestampString)(m)
                        })]
                    })
                })
            }
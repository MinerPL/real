            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983"),
                a = n("884691"),
                r = n("446674"),
                i = n("77078"),
                s = n("272030"),
                u = n("42203"),
                o = n("124948"),
                d = n("697218"),
                c = n("811305"),
                f = n("800843"),
                h = n("442184"),
                p = n("648564"),
                C = n("140407"),
                m = a.memo(function(e) {
                    let {
                        threadId: t,
                        goToThread: a,
                        showChannelName: o
                    } = e, d = (0, r.useStateFromStores)([u.default], () => u.default.getChannel(t)), c = (0, r.useStateFromStores)([u.default], () => u.default.getChannel(d.parent_id));
                    return (0, l.jsxs)(i.Clickable, {
                        className: C.container,
                        onClick: e => a(d, e.shiftKey),
                        onContextMenu: e => (0, s.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("994827").then(n.bind(n, "994827"));
                            return t => (0, l.jsx)(e, {
                                ...t,
                                channel: d
                            })
                        }),
                        children: [(0, l.jsxs)("div", {
                            className: C.left,
                            children: [(0, l.jsxs)(i.Heading, {
                                className: C.threadNameLine,
                                variant: "heading-md/semibold",
                                children: [(0, l.jsx)("span", {
                                    className: C.threadName,
                                    children: d.name
                                }), o && null != c ? (0, l.jsx)("span", {
                                    className: C.parentName,
                                    children: "#".concat(c.name)
                                }) : null]
                            }), (0, h.default)(d)]
                        }), (0, l.jsx)(v, {
                            channel: d
                        })]
                    })
                });

            function v(e) {
                let {
                    channel: t
                } = e, n = (0, r.useStateFromStores)([f.default], () => {
                    var e;
                    return null !== (e = f.default.getMemberIdsPreview(t.id)) && void 0 !== e ? e : []
                }), i = (0, r.useStateFromStores)([f.default], () => {
                    var e;
                    return null !== (e = f.default.getMemberCount(t.id)) && void 0 !== e ? e : 0
                }), s = (0, r.useStateFromStoresArray)([d.default], () => n.map(e => d.default.getUser(e)));
                return (a.useEffect(() => {
                    n.filter((e, t) => null == s[t]).forEach(e => {
                        o.default.requestMember(t.guild_id, e)
                    })
                }, []), 0 === n.length) ? null : (0, l.jsx)(c.default, {
                    className: C.facepile,
                    showDefaultAvatarsForNullUsers: !0,
                    guildId: t.guild_id,
                    users: s,
                    count: i,
                    max: p.MAX_THREAD_MEMBERS_PREVIEW
                })
            }
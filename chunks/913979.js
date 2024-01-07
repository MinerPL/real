            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return S
                }
            });
            var s = a("37983"),
                r = a("884691"),
                l = a("446674"),
                n = a("77078"),
                d = a("272030"),
                u = a("42203"),
                i = a("124948"),
                o = a("697218"),
                c = a("811305"),
                f = a("800843"),
                h = a("442184"),
                m = a("648564"),
                g = a("140407"),
                S = r.memo(function(e) {
                    let {
                        threadId: t,
                        goToThread: r,
                        showChannelName: i
                    } = e, o = (0, l.useStateFromStores)([u.default], () => u.default.getChannel(t)), c = (0, l.useStateFromStores)([u.default], () => u.default.getChannel(o.parent_id));
                    return (0, s.jsxs)(n.Clickable, {
                        className: g.container,
                        onClick: e => r(o, e.shiftKey),
                        onContextMenu: e => (0, d.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await a.el("994827").then(a.bind(a, "994827"));
                            return t => (0, s.jsx)(e, {
                                ...t,
                                channel: o
                            })
                        }),
                        children: [(0, s.jsxs)("div", {
                            className: g.left,
                            children: [(0, s.jsxs)(n.Heading, {
                                className: g.threadNameLine,
                                variant: "heading-md/semibold",
                                children: [(0, s.jsx)("span", {
                                    className: g.threadName,
                                    children: o.name
                                }), i && null != c ? (0, s.jsx)("span", {
                                    className: g.parentName,
                                    children: "#".concat(c.name)
                                }) : null]
                            }), (0, h.default)(o)]
                        }), (0, s.jsx)(T, {
                            channel: o
                        })]
                    })
                });

            function T(e) {
                let {
                    channel: t
                } = e, a = (0, l.useStateFromStores)([f.default], () => {
                    var e;
                    return null !== (e = f.default.getMemberIdsPreview(t.id)) && void 0 !== e ? e : []
                }), n = (0, l.useStateFromStores)([f.default], () => {
                    var e;
                    return null !== (e = f.default.getMemberCount(t.id)) && void 0 !== e ? e : 0
                }), d = (0, l.useStateFromStoresArray)([o.default], () => a.map(e => o.default.getUser(e)));
                return (r.useEffect(() => {
                    a.filter((e, t) => null == d[t]).forEach(e => {
                        i.default.requestMember(t.guild_id, e)
                    })
                }, []), 0 === a.length) ? null : (0, s.jsx)(c.default, {
                    className: g.facepile,
                    showDefaultAvatarsForNullUsers: !0,
                    guildId: t.guild_id,
                    users: d,
                    count: n,
                    max: m.MAX_THREAD_MEMBERS_PREVIEW
                })
            }
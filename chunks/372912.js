            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("414456"),
                l = n.n(a),
                i = n("446674"),
                r = n("77078"),
                o = n("272030"),
                u = n("619335"),
                d = n("506885"),
                c = n("981601"),
                f = n("26989"),
                h = n("697218"),
                C = n("959097"),
                p = n("158998"),
                m = n("172554"),
                E = n("49111"),
                g = n("782340"),
                S = n("881812");

            function _(e) {
                var t, a;
                let {
                    userId: u,
                    channel: C
                } = e, m = (0, i.useStateFromStores)([h.default], () => h.default.getUser(u)), E = (0, i.useStateFromStores)([f.default], () => null != u ? f.default.getMember(C.guild_id, u) : null);

                function g(e) {
                    if (null == m) return null;
                    (0, o.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("721429").then(n.bind(n, "721429"));
                        return t => (0, s.jsx)(e, {
                            ...t,
                            user: m,
                            guildId: C.guild_id,
                            channel: C
                        })
                    })
                }
                let _ = null !== (a = null !== (t = null == E ? void 0 : E.nick) && void 0 !== t ? t : p.default.getName(m)) && void 0 !== a ? a : "???",
                    A = null == E ? void 0 : E.colorString;
                return null == m ? (0, s.jsx)("span", {
                    className: l(S.threadCreatorName, S.unknownCreatorName),
                    children: _
                }) : (0, s.jsx)(r.Popout, {
                    preload: () => (0, d.default)(m.id, m.getAvatarURL(C.guild_id, 80), {
                        guildId: C.guild_id,
                        channelId: C.id
                    }),
                    renderPopout: e => (0, s.jsx)(c.default, {
                        userId: m.id,
                        guildId: C.guild_id,
                        channelId: C.id,
                        ...e
                    }),
                    position: "right",
                    children: e => (0, s.jsx)(r.Clickable, {
                        ...e,
                        tag: "span",
                        className: S.threadCreatorName,
                        onContextMenu: g,
                        children: (0, s.jsx)(r.NameWithRole, {
                            name: _,
                            color: null != A ? A : void 0
                        })
                    })
                })
            }

            function A(e) {
                let {
                    channel: t
                } = e, {
                    threadMetadata: n
                } = t;
                return null == n ? (0, s.jsx)("div", {
                    style: {
                        marginTop: -8
                    }
                }) : (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(r.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: (0, s.jsx)("div", {
                            className: S.subtitle,
                            children: g.default.Messages.THREAD_STARTED_BY.format({
                                usernameHook: (e, n) => (0, s.jsx)(_, {
                                    userId: t.ownerId,
                                    channel: t
                                }, n)
                            })
                        })
                    }), t.type === E.ChannelTypes.PRIVATE_THREAD ? (0, s.jsx)(r.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: g.default.Messages.EMPTY_MESSAGE_PRIVATE_THREAD_INSTRUCTIONS
                    }) : null]
                })
            }

            function T(e) {
                var t;
                let {
                    channel: n
                } = e, a = null !== (t = (0, u.default)(n)) && void 0 !== t ? t : C.default;
                return (0, s.jsxs)(m.default, {
                    channelId: n.id,
                    children: [(0, s.jsx)("div", {
                        className: S.iconWrapper,
                        children: (0, s.jsx)(a, {
                            className: S.icon
                        })
                    }), (0, s.jsx)(m.EmptyMessageHeader, {
                        children: n.name
                    }), (0, s.jsx)(A, {
                        channel: n
                    })]
                })
            }
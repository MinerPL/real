            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("446674"),
                o = n("77078"),
                u = n("851387"),
                d = n("750560"),
                c = n("645266"),
                f = n("506885"),
                h = n("430312"),
                p = n("26989"),
                m = n("697218"),
                E = n("459824"),
                C = n("516832"),
                g = n("986358"),
                S = n("590456"),
                _ = n("623529");

            function I(e) {
                let {
                    userId: t,
                    guildId: n,
                    onClose: s,
                    className: I,
                    infoPanelClassName: T,
                    style: v
                } = e, x = (0, E.useCanAccessGuildMemberModView)(n, !0), N = (0, r.useStateFromStores)([m.default], () => m.default.getUser(t), [t]), A = (0, r.useStateFromStores)([p.default], () => p.default.getMember(n, t), [n, t]), M = null == N || null == A;
                return (l.useEffect(() => {
                    !x && s()
                }, [x, s]), (0, d.useSubscribeGuildMembers)({
                    [n]: [t]
                }), l.useEffect(() => {
                    u.default.requestMembersById(n, [t]), (0, f.default)(t, void 0, {
                        guildId: n
                    }), (0, c.getMemberSupplemental)(n, [t])
                }, [n, t]), x) ? M ? (0, a.jsx)("div", {
                    className: i(_.sidebarContianer, _.loadingContainer, I),
                    style: v,
                    children: (0, a.jsx)(o.Spinner, {
                        animated: !0,
                        type: o.Spinner.Type.SPINNING_CIRCLE
                    })
                }) : (0, a.jsx)("div", {
                    className: i(_.sidebarContianer, I),
                    style: v,
                    children: (0, a.jsx)(h.default, {
                        user: N,
                        guildId: n,
                        profileType: S.UserProfileTypes.MODAL,
                        forceShowPremium: !0,
                        className: i(_.profileThemedContainer),
                        children: (0, a.jsxs)("div", {
                            className: i(_.innerContainer),
                            children: [(0, a.jsx)(g.default, {
                                userId: t,
                                guildId: n,
                                onClose: s
                            }), (0, a.jsx)(C.default, {
                                userId: t,
                                guildId: n,
                                onClose: s,
                                className: T
                            })]
                        })
                    })
                }) : null
            }
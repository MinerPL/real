            "use strict";
            n.r(t), n.d(t, {
                FriendRow: function() {
                    return E
                },
                default: function() {
                    return C
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("446674"),
                i = n("77078"),
                r = n("272030"),
                u = n("327037"),
                o = n("145079"),
                d = n("824563"),
                c = n("713135"),
                f = n("401642"),
                h = n("49111"),
                p = n("782340"),
                m = n("568719");

            function E(e) {
                let {
                    user: t,
                    status: n,
                    onSelect: l,
                    onContextMenu: r
                } = e, u = (0, s.useStateFromStores)([d.default], () => d.default.isMobileOnline(t.id));
                return (0, a.jsxs)(i.Clickable, {
                    className: m.listRow,
                    onClick: () => l(t.id),
                    onContextMenu: e => r(e, t),
                    children: [(0, a.jsx)(i.Avatar, {
                        src: t.getAvatarURL(void 0, 40),
                        "aria-label": t.username,
                        size: i.AvatarSizes.SIZE_40,
                        status: n,
                        isMobile: u,
                        className: m.listAvatar
                    }), (0, a.jsx)(o.default, {
                        user: t,
                        className: m.listName,
                        discriminatorClass: m.listDiscriminator
                    })]
                })
            }

            function C(e) {
                let t, {
                        user: o,
                        onClose: d
                    } = e,
                    C = (0, s.useStateFromStores)([c.default], () => c.default.getMutualFriends(o.id));

                function S(e) {
                    d(), (0, f.openUserProfileModal)({
                        userId: e,
                        analyticsLocation: {
                            section: h.AnalyticsSections.USER_PROFILE_MUTUAL_FRIENDS
                        }
                    })
                }

                function g(e, t) {
                    (0, r.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("406784").then(n.bind(n, "406784"));
                        return n => (0, a.jsx)(e, {
                            ...n,
                            user: t
                        })
                    })
                }
                return l.useEffect(() => {
                    null == C && (0, u.fetchMutualFriends)(o.id)
                }, [C, o.id]), t = null == C ? (0, a.jsx)("div", {
                    className: m.empty,
                    children: (0, a.jsx)(i.Spinner, {})
                }) : 0 === C.length ? (0, a.jsxs)("div", {
                    className: m.empty,
                    children: [(0, a.jsx)("div", {
                        className: m.emptyIconFriends
                    }), (0, a.jsx)("div", {
                        className: m.emptyText,
                        children: p.default.Messages.NO_MUTUAL_FRIENDS
                    })]
                }) : C.map(e => (0, a.jsx)(E, {
                    user: e.user,
                    status: e.status,
                    onSelect: S,
                    onContextMenu: g
                }, e.key)), (0, a.jsx)(i.ScrollerThin, {
                    className: m.listScroller,
                    fade: !0,
                    children: t
                })
            }
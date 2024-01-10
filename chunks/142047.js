            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                s = n("272030"),
                l = n("158534"),
                u = n("812204"),
                r = n("861370"),
                d = n("20209"),
                o = n("390008"),
                c = n("47495"),
                f = n("178261"),
                _ = n("852275"),
                E = n("963150"),
                N = n("308798"),
                g = n("47006"),
                M = n("44141"),
                S = n("531674"),
                A = n("619436"),
                O = n("625399"),
                C = n("339876"),
                L = n("295189"),
                T = n("782340");

            function U(e) {
                let {
                    channel: t,
                    onSelect: n
                } = e, l = (0, M.default)(t), u = (0, S.default)(t), d = (0, A.default)(t), E = (0, _.default)(t), N = (0, f.default)(t), g = (0, o.default)(t), C = (0, L.default)(t), U = (0, r.default)({
                    id: t.id,
                    label: T.default.Messages.COPY_ID_CHANNEL
                }), h = (0, c.useShouldUseNewNotificationSystem)("ChannelCategoryFavoritesMenu"), I = (0, O.default)(t);
                return (0, a.jsxs)(i.Menu, {
                    navId: "channel-context",
                    onClose: s.closeContextMenu,
                    "aria-label": T.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, a.jsx)(i.MenuGroup, {
                        children: l
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [u, h ? I : d]
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [E, N, g]
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: C
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: U
                    })]
                })
            }

            function h(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: l
                } = e, u = (0, M.default)(t), d = (0, S.default)(t), L = (0, A.default)(t), U = (0, _.default)(t), h = (0, f.default)(t), I = (0, g.default)(t), p = (0, o.default)(t), v = (0, E.default)(t, n), R = (0, N.default)(t), m = (0, r.default)({
                    id: t.id,
                    label: T.default.Messages.COPY_ID_CHANNEL
                }), G = (0, C.default)(t), b = (0, c.useShouldUseNewNotificationSystem)("ChannelCategoryNormalMenu"), y = (0, O.default)(t);
                return (0, a.jsxs)(i.Menu, {
                    navId: "channel-context",
                    onClose: s.closeContextMenu,
                    "aria-label": T.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: l,
                    children: [(0, a.jsx)(i.MenuGroup, {
                        children: u
                    }, "mark-as-read"), (0, a.jsxs)(i.MenuGroup, {
                        children: [G, U, h]
                    }, "channel-actions"), (0, a.jsxs)(i.MenuGroup, {
                        children: [d, b ? y : L]
                    }, "notifications"), (0, a.jsxs)(i.MenuGroup, {
                        children: [I, p, v, R]
                    }, "admin-actions"), (0, a.jsx)(i.MenuGroup, {
                        children: m
                    }, "developer-actions")]
                })
            }
            var I = (0, l.default)(function(e) {
                let t = (0, d.default)();
                return t ? (0, a.jsx)(U, {
                    ...e
                }) : (0, a.jsx)(h, {
                    ...e
                })
            }, [u.default.CONTEXT_MENU, u.default.CHANNEL_CATEGORY_MENU])
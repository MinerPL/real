            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("272030"),
                l = n("158534"),
                u = n("812204"),
                r = n("861370"),
                o = n("20209"),
                d = n("390008"),
                f = n("47495"),
                c = n("178261"),
                _ = n("852275"),
                S = n("963150"),
                g = n("308798"),
                E = n("47006"),
                N = n("44141"),
                M = n("531674"),
                A = n("619436"),
                T = n("625399"),
                O = n("339876"),
                C = n("295189"),
                h = n("782340");

            function L(e) {
                let {
                    channel: t,
                    onSelect: n
                } = e, l = (0, N.default)(t), u = (0, M.default)(t), o = (0, A.default)(t), S = (0, _.default)(t), g = (0, c.default)(t), E = (0, d.default)(t), O = (0, C.default)(t), L = (0, r.default)({
                    id: t.id,
                    label: h.default.Messages.COPY_ID_CHANNEL
                }), I = (0, f.useShouldUseNewNotificationSystem)("ChannelCategoryFavoritesMenu"), U = (0, T.default)(t);
                return (0, i.jsxs)(a.Menu, {
                    navId: "channel-context",
                    onClose: s.closeContextMenu,
                    "aria-label": h.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, i.jsx)(a.MenuGroup, {
                        children: l
                    }), (0, i.jsxs)(a.MenuGroup, {
                        children: [u, I ? U : o]
                    }), (0, i.jsxs)(a.MenuGroup, {
                        children: [S, g, E]
                    }), (0, i.jsx)(a.MenuGroup, {
                        children: O
                    }), (0, i.jsx)(a.MenuGroup, {
                        children: L
                    })]
                })
            }

            function I(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: l
                } = e, u = (0, N.default)(t), o = (0, M.default)(t), C = (0, A.default)(t), L = (0, _.default)(t), I = (0, c.default)(t), U = (0, E.default)(t), p = (0, d.default)(t), v = (0, S.default)(t, n), m = (0, g.default)(t), R = (0, r.default)({
                    id: t.id,
                    label: h.default.Messages.COPY_ID_CHANNEL
                }), F = (0, O.default)(t), G = (0, f.useShouldUseNewNotificationSystem)("ChannelCategoryNormalMenu"), y = (0, T.default)(t);
                return (0, i.jsxs)(a.Menu, {
                    navId: "channel-context",
                    onClose: s.closeContextMenu,
                    "aria-label": h.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: l,
                    children: [(0, i.jsx)(a.MenuGroup, {
                        children: u
                    }, "mark-as-read"), (0, i.jsxs)(a.MenuGroup, {
                        children: [F, L, I]
                    }, "channel-actions"), (0, i.jsxs)(a.MenuGroup, {
                        children: [o, G ? y : C]
                    }, "notifications"), (0, i.jsxs)(a.MenuGroup, {
                        children: [U, p, v, m]
                    }, "admin-actions"), (0, i.jsx)(a.MenuGroup, {
                        children: R
                    }, "developer-actions")]
                })
            }
            var U = (0, l.default)(function(e) {
                let t = (0, o.default)();
                return t ? (0, i.jsx)(L, {
                    ...e
                }) : (0, i.jsx)(I, {
                    ...e
                })
            }, [u.default.CONTEXT_MENU, u.default.CHANNEL_CATEGORY_MENU])
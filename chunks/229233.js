            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                i = n("272030"),
                u = n("158534"),
                s = n("812204"),
                d = n("861370"),
                r = n("47495"),
                o = n("715243"),
                c = n("261675"),
                f = n("963150"),
                E = n("308798"),
                _ = n("47006"),
                C = n("878526"),
                p = n("531674"),
                T = n("619436"),
                I = n("625399"),
                A = n("731390"),
                m = n("339876"),
                N = n("49111"),
                S = n("782340"),
                h = (0, u.default)(function(e) {
                    let {
                        channel: t,
                        guild: n,
                        includeTopic: u = !1,
                        onSelect: s
                    } = e, h = (0, m.default)(t), g = (0, p.default)(t), M = (0, T.default)(t), O = (0, c.default)(t), v = (0, _.default)(t), L = (0, C.default)(t, n), x = (0, o.default)(t, n), y = (0, f.default)(t, n, N.ChannelTypes.GUILD_TEXT), D = (0, f.default)(t, n, N.ChannelTypes.GUILD_VOICE), P = (0, E.default)(t), U = (0, d.default)({
                        id: t.id,
                        label: S.default.Messages.COPY_ID_CHANNEL
                    }), V = (0, A.default)(t, "title_context_menu"), b = (0, r.useShouldUseNewNotificationSystem)("ChannelTitleContextMenu"), R = (0, I.default)(t);
                    return (0, a.jsxs)(l.Menu, {
                        navId: "channel-context",
                        onClose: i.closeContextMenu,
                        "aria-label": S.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                        onSelect: s,
                        children: [(0, a.jsx)(l.MenuGroup, {
                            children: h
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: g
                        }), (0, a.jsxs)(l.MenuGroup, {
                            children: [u ? O : b ? R : M, v]
                        }), (0, a.jsxs)(l.MenuGroup, {
                            children: [L, x, y, D]
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: V
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: P
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: U
                        })]
                    })
                }, [s.default.CONTEXT_MENU, s.default.CHANNEL_TITLE_MENU])
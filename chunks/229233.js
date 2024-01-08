            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                i = n("272030"),
                u = n("158534"),
                d = n("812204"),
                s = n("861370"),
                r = n("47495"),
                o = n("715243"),
                c = n("261675"),
                f = n("963150"),
                _ = n("308798"),
                E = n("47006"),
                C = n("878526"),
                I = n("531674"),
                T = n("619436"),
                p = n("625399"),
                S = n("731390"),
                A = n("339876"),
                N = n("49111"),
                h = n("782340"),
                m = (0, u.default)(function(e) {
                    let {
                        channel: t,
                        guild: n,
                        includeTopic: u = !1,
                        onSelect: d
                    } = e, m = (0, A.default)(t), M = (0, I.default)(t), g = (0, T.default)(t), O = (0, c.default)(t), v = (0, E.default)(t), L = (0, C.default)(t, n), y = (0, o.default)(t, n), x = (0, f.default)(t, n, N.ChannelTypes.GUILD_TEXT), D = (0, f.default)(t, n, N.ChannelTypes.GUILD_VOICE), P = (0, _.default)(t), U = (0, s.default)({
                        id: t.id,
                        label: h.default.Messages.COPY_ID_CHANNEL
                    }), V = (0, S.default)(t, "title_context_menu"), b = (0, r.useShouldUseNewNotificationSystem)("ChannelTitleContextMenu"), G = (0, p.default)(t);
                    return (0, a.jsxs)(l.Menu, {
                        navId: "channel-context",
                        onClose: i.closeContextMenu,
                        "aria-label": h.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                        onSelect: d,
                        children: [(0, a.jsx)(l.MenuGroup, {
                            children: m
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: M
                        }), (0, a.jsxs)(l.MenuGroup, {
                            children: [u ? O : b ? G : g, v]
                        }), (0, a.jsxs)(l.MenuGroup, {
                            children: [L, y, x, D]
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: V
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: P
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: U
                        })]
                    })
                }, [d.default.CONTEXT_MENU, d.default.CHANNEL_TITLE_MENU])
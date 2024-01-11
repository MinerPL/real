            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                i = n("272030"),
                u = n("158534"),
                s = n("812204"),
                r = n("861370"),
                d = n("47495"),
                o = n("715243"),
                c = n("261675"),
                f = n("963150"),
                _ = n("308798"),
                E = n("47006"),
                p = n("878526"),
                C = n("531674"),
                h = n("619436"),
                N = n("625399"),
                T = n("731390"),
                m = n("339876"),
                I = n("49111"),
                g = n("782340"),
                A = (0, u.default)(function(e) {
                    let {
                        channel: t,
                        guild: n,
                        includeTopic: u = !1,
                        onSelect: s
                    } = e, A = (0, m.default)(t), O = (0, C.default)(t), S = (0, h.default)(t), v = (0, c.default)(t), M = (0, E.default)(t), L = (0, p.default)(t, n), y = (0, o.default)(t, n), x = (0, f.default)(t, n, I.ChannelTypes.GUILD_TEXT), P = (0, f.default)(t, n, I.ChannelTypes.GUILD_VOICE), U = (0, _.default)(t), G = (0, r.default)({
                        id: t.id,
                        label: g.default.Messages.COPY_ID_CHANNEL
                    }), j = (0, T.default)(t, "title_context_menu"), b = (0, d.useShouldUseNewNotificationSystem)("ChannelTitleContextMenu"), R = (0, N.default)(t);
                    return (0, a.jsxs)(l.Menu, {
                        navId: "channel-context",
                        onClose: i.closeContextMenu,
                        "aria-label": g.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                        onSelect: s,
                        children: [(0, a.jsx)(l.MenuGroup, {
                            children: A
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: O
                        }), (0, a.jsxs)(l.MenuGroup, {
                            children: [u ? v : b ? R : S, M]
                        }), (0, a.jsxs)(l.MenuGroup, {
                            children: [L, y, x, P]
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: j
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: U
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: G
                        })]
                    })
                }, [s.default.CONTEXT_MENU, s.default.CHANNEL_TITLE_MENU])
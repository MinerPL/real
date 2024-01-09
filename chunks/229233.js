            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                u = n("272030"),
                i = n("158534"),
                d = n("812204"),
                s = n("861370"),
                r = n("47495"),
                o = n("715243"),
                c = n("261675"),
                f = n("963150"),
                _ = n("308798"),
                E = n("47006"),
                C = n("878526"),
                p = n("531674"),
                h = n("619436"),
                N = n("625399"),
                I = n("731390"),
                T = n("339876"),
                O = n("49111"),
                g = n("782340"),
                M = (0, i.default)(function(e) {
                    let {
                        channel: t,
                        guild: n,
                        includeTopic: i = !1,
                        onSelect: d
                    } = e, M = (0, T.default)(t), m = (0, p.default)(t), A = (0, h.default)(t), L = (0, c.default)(t), S = (0, E.default)(t), x = (0, C.default)(t, n), v = (0, o.default)(t, n), U = (0, f.default)(t, n, O.ChannelTypes.GUILD_TEXT), y = (0, f.default)(t, n, O.ChannelTypes.GUILD_VOICE), P = (0, _.default)(t), b = (0, s.default)({
                        id: t.id,
                        label: g.default.Messages.COPY_ID_CHANNEL
                    }), G = (0, I.default)(t, "title_context_menu"), j = (0, r.useShouldUseNewNotificationSystem)("ChannelTitleContextMenu"), V = (0, N.default)(t);
                    return (0, a.jsxs)(l.Menu, {
                        navId: "channel-context",
                        onClose: u.closeContextMenu,
                        "aria-label": g.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                        onSelect: d,
                        children: [(0, a.jsx)(l.MenuGroup, {
                            children: M
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: m
                        }), (0, a.jsxs)(l.MenuGroup, {
                            children: [i ? L : j ? V : A, S]
                        }), (0, a.jsxs)(l.MenuGroup, {
                            children: [x, v, U, y]
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: G
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: P
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: b
                        })]
                    })
                }, [d.default.CONTEXT_MENU, d.default.CHANNEL_TITLE_MENU])
            "use strict";
            a.r(n), a.d(n, {
                default: function() {
                    return _
                }
            });
            var t = a("37983");
            a("884691");
            var s = a("77078"),
                u = a("272030"),
                l = a("54239"),
                i = a("158534"),
                r = a("812204"),
                c = a("861370"),
                d = a("393414"),
                o = a("47006"),
                f = a("782340"),
                _ = (0, i.default)(function(e) {
                    let {
                        channel: n,
                        onSelect: a
                    } = e, i = (0, o.default)(n), r = (0, c.default)({
                        id: n.id,
                        label: f.default.Messages.COPY_ID_CHANNEL
                    });
                    return (0, t.jsxs)(s.Menu, {
                        navId: "channel-context",
                        onClose: u.closeContextMenu,
                        "aria-label": f.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                        onSelect: a,
                        children: [(0, t.jsxs)(s.MenuGroup, {
                            children: [i, n.isCategory() ? null : (0, t.jsx)(s.MenuItem, {
                                id: "jump-to-channel",
                                label: f.default.Messages.JUMP_TO_CHANNEL,
                                action: () => {
                                    (0, d.transitionToGuild)(n.guild_id, n.id), (0, l.popLayer)()
                                }
                            })]
                        }), (0, t.jsx)(s.MenuGroup, {
                            children: r
                        })]
                    })
                }, [r.default.CONTEXT_MENU, r.default.CHANNEL_AUDIT_LOG_MENU])
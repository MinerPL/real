            "use strict";
            a.r(n), a.d(n, {
                default: function() {
                    return o
                }
            });
            var t = a("37983");
            a("884691");
            var s = a("77078"),
                u = a("272030"),
                l = a("158534"),
                r = a("812204"),
                c = a("861370"),
                d = a("47006"),
                i = a("782340"),
                o = (0, l.default)(function(e) {
                    let {
                        channel: n,
                        onSelect: a
                    } = e, l = (0, d.default)(n), r = (0, c.default)({
                        id: n.id,
                        label: i.default.Messages.COPY_ID_CHANNEL
                    });
                    return (0, t.jsxs)(s.Menu, {
                        navId: "channel-context",
                        onClose: u.closeContextMenu,
                        "aria-label": i.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                        onSelect: a,
                        children: [(0, t.jsx)(s.MenuGroup, {
                            children: l
                        }), (0, t.jsx)(s.MenuGroup, {
                            children: r
                        })]
                    })
                }, [r.default.CONTEXT_MENU, r.default.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU])
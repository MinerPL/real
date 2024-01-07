            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return f
                }
            });
            var n = r("37983");
            r("884691");
            var u = r("446674"),
                c = r("77078"),
                a = r("272030"),
                o = r("838446"),
                s = r("379881"),
                i = r("200008"),
                d = r("49111"),
                l = r("782340"),
                f = (0, o.default)(function(e) {
                    let {
                        onSelect: t
                    } = e, r = (0, u.useStateFromStores)([s.default], () => s.default.favoriteServerMuted);
                    return (0, n.jsx)(c.Menu, {
                        navId: "favorite-server-context",
                        onClose: a.closeContextMenu,
                        "aria-label": l.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: t,
                        children: (0, n.jsx)(c.MenuGroup, {
                            children: (0, n.jsx)(c.MenuCheckboxItem, {
                                id: "mute-server",
                                label: l.default.Messages.MUTE_SERVER,
                                action: () => (0, i.toggleFavoriteServerMuted)(),
                                checked: r
                            })
                        })
                    })
                }, {
                    object: d.AnalyticsObjects.CONTEXT_MENU
                })
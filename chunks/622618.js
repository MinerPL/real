            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return r
                }
            });
            var l = t("37983");
            t("884691");
            var a = t("77078"),
                u = t("272030"),
                o = t("773336"),
                s = t("50885"),
                c = t("667358"),
                d = t("782340");

            function r(e) {
                let {
                    text: n,
                    onSelect: t
                } = e, r = (0, c.default)(n);
                return o.isPlatformEmbedded ? (0, l.jsxs)(a.Menu, {
                    navId: "text-context",
                    onClose: u.closeContextMenu,
                    "aria-label": d.default.Messages.TEXT_ACTIONS_MENU_LABEL,
                    onSelect: t,
                    children: [(0, l.jsx)(a.MenuGroup, {
                        children: r
                    }), (0, l.jsx)(a.MenuGroup, {
                        children: (0, l.jsx)(a.MenuItem, {
                            id: "copy",
                            label: d.default.Messages.COPY,
                            action: () => s.default.copy(n)
                        })
                    })]
                }) : null
            }
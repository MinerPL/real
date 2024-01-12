            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                u = n("272030"),
                o = n("773336"),
                a = n("447651"),
                l = n("26051"),
                s = n("782340");

            function c(t) {
                let {
                    src: e,
                    onSelect: n
                } = t, c = (0, a.default)(e), d = (0, l.default)(e, null);
                return o.isPlatformEmbedded ? (0, r.jsxs)(i.Menu, {
                    navId: "image-context",
                    onClose: u.closeContextMenu,
                    "aria-label": s.default.Messages.IMAGE_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, r.jsx)(i.MenuGroup, {
                        children: c
                    }), (0, r.jsx)(i.MenuGroup, {
                        children: d
                    })]
                }) : null
            }
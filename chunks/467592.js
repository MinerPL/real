            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                a = n("272030"),
                s = n("773336"),
                l = n("447651"),
                o = n("26051"),
                u = n("782340");

            function d(e) {
                let {
                    src: t,
                    onSelect: n
                } = e, d = (0, l.default)(t), _ = (0, o.default)(t, null);
                return s.isPlatformEmbedded ? (0, r.jsxs)(i.Menu, {
                    navId: "image-context",
                    onClose: a.closeContextMenu,
                    "aria-label": u.default.Messages.IMAGE_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, r.jsx)(i.MenuGroup, {
                        children: d
                    }), (0, r.jsx)(i.MenuGroup, {
                        children: _
                    })]
                }) : null
            }
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                a = n("272030"),
                o = n("773336"),
                s = n("26051"),
                l = n("782340");

            function u(e) {
                let {
                    href: t,
                    textContent: n,
                    onSelect: u
                } = e, d = (0, s.default)(t, n);
                return o.isPlatformEmbedded && null != d ? (0, r.jsx)(i.Menu, {
                    navId: "image-context",
                    onClose: a.closeContextMenu,
                    "aria-label": l.default.Messages.IMAGE_ACTIONS_MENU_LABEL,
                    onSelect: u,
                    children: (0, r.jsx)(i.MenuGroup, {
                        children: d
                    })
                }) : null
            }
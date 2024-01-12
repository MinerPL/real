            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return c
                }
            });
            var r = e("37983");
            e("884691");
            var i = e("77078"),
                u = e("272030"),
                o = e("773336"),
                l = e("26051"),
                a = e("782340");

            function c(t) {
                let {
                    href: n,
                    textContent: e,
                    onSelect: c
                } = t, s = (0, l.default)(n, e);
                return o.isPlatformEmbedded && null != s ? (0, r.jsx)(i.Menu, {
                    navId: "image-context",
                    onClose: u.closeContextMenu,
                    "aria-label": a.default.Messages.IMAGE_ACTIONS_MENU_LABEL,
                    onSelect: c,
                    children: (0, r.jsx)(i.MenuGroup, {
                        children: s
                    })
                }) : null
            }
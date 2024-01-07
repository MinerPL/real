            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                a = n("272030"),
                u = n("702495"),
                s = n("835487"),
                o = n("782340");

            function c(t) {
                let {
                    target: e,
                    onSelect: n
                } = t, c = (0, u.default)({
                    type: e.getAttribute("data-type"),
                    id: e.getAttribute("data-id"),
                    name: e.getAttribute("data-name"),
                    isInExpressionPicker: !0
                }), l = (0, s.default)({
                    type: e.getAttribute("data-type"),
                    packId: e.getAttribute("data-pack-id")
                });
                return (0, r.jsx)(i.Menu, {
                    navId: "expression-picker",
                    onClose: a.closeContextMenu,
                    "aria-label": o.default.Messages.EXPRESSION_PICKER_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    className: "context-menu",
                    children: (0, r.jsxs)(i.MenuGroup, {
                        children: [c, l]
                    })
                })
            }
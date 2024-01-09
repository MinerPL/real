            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                l = n("820542"),
                u = n("870691"),
                r = n("782340");

            function o(e) {
                let t = (0, a.useStateFromStores)([u.default], () => u.default.isCollapsed(e.id), [e.id]);
                return (0, i.jsx)(s.MenuCheckboxItem, {
                    id: "collapse-category",
                    label: r.default.Messages.COLLAPSE_CATEGORY,
                    action: () => t ? (0, l.categoryExpand)(e.id) : (0, l.categoryCollapse)(e.id),
                    checked: t
                })
            }
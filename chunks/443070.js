            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var n = a("37983"),
                l = a("884691"),
                i = a("77078"),
                u = a("272030"),
                r = a("861370"),
                d = a("782340");

            function s(e) {
                var t;
                let a = (0, r.default)({
                    id: e.id,
                    label: e.label,
                    shiftId: e.shiftId
                });
                return l.useEffect(() => {
                    null == a && (0, u.closeContextMenu)()
                }, [a]), (0, n.jsx)(i.Menu, {
                    onSelect: e.onSelect,
                    navId: "dev-context",
                    "aria-label": null !== (t = e["aria-label"]) && void 0 !== t ? t : d.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
                    onClose: u.closeContextMenu,
                    children: a
                })
            }
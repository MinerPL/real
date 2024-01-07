            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                i = n.n(s),
                l = n("77078"),
                r = n("292346");

            function o(e) {
                let {
                    icon: t,
                    tooltip: n,
                    onClick: s,
                    className: o
                } = e, u = e => {
                    e.preventDefault(), e.stopPropagation(), s(e)
                };
                return (0, a.jsx)(l.Tooltip, {
                    text: n,
                    children: e => (0, a.jsx)(l.Clickable, {
                        ...e,
                        "aria-label": n,
                        onClick: u,
                        className: i(r.actionButton, o),
                        children: (0, a.jsx)(t, {
                            className: r.icon
                        })
                    })
                })
            }
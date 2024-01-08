            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                i = n("77078"),
                r = n("423487"),
                o = n("550410"),
                u = n("764877");

            function d(e) {
                let {
                    errorMessage: t,
                    className: n
                } = e;
                return (0, a.jsx)(i.TooltipContainer, {
                    className: s(n, u.root),
                    text: t,
                    position: "bottom",
                    color: i.TooltipColors.GREY,
                    children: (0, a.jsx)(o.default, {
                        children: (0, a.jsx)(r.default, {
                            "aria-label": null != t ? t : "",
                            className: u.warningIcon
                        })
                    })
                })
            }
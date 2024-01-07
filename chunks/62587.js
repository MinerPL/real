            "use strict";
            n.r(t), n.d(t, {
                NitroTooltipLabel: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("216422"),
                i = n("560354");

            function r(e) {
                let {
                    tooltipText: t,
                    textColor: n
                } = e;
                return (0, a.jsxs)("span", {
                    className: i.tooltipTextContainer,
                    children: [(0, a.jsx)(l.default, {
                        className: i.nitroWheel
                    }), (0, a.jsx)(s.Text, {
                        className: i.tooltipText,
                        variant: "text-sm/medium",
                        color: null != n ? n : "text-normal",
                        children: t
                    })]
                })
            }
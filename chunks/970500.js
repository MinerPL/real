            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("77078"),
                l = s("68238"),
                i = s("476462");

            function r(e) {
                let {
                    label: t,
                    sublabel: s,
                    value: r,
                    additionalContent: o,
                    tooltip: d
                } = e;
                return (0, a.jsxs)("div", {
                    className: i.metricCard,
                    "aria-label": t,
                    children: [(0, a.jsxs)("div", {
                        className: i.metricCardLabelContainer,
                        children: [(0, a.jsx)(n.Text, {
                            className: i.metricCardLabel,
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            "aria-hidden": !0,
                            children: t
                        }), null != d && (0, a.jsx)(n.Tooltip, {
                            text: d,
                            children: e => (0, a.jsx)(l.default, {
                                className: i.labelTooltipIcon,
                                ...e
                            })
                        }), null != s ? (0, a.jsx)(n.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: s
                        }) : null]
                    }), (0, a.jsx)(n.Text, {
                        tag: "span",
                        variant: "heading-xl/medium",
                        color: "header-primary",
                        children: r
                    }), o]
                })
            }
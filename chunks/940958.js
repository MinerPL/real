            "use strict";
            s.r(t), s.d(t, {
                MetricTrend: function() {
                    return E
                },
                default: function() {
                    return _
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("414456"),
                l = s.n(n),
                i = s("77078"),
                r = s("68238"),
                o = s("434014"),
                d = s("223968"),
                u = s("782340"),
                c = s("297904");
            let E = e => {
                let {
                    value: t,
                    isPercent: s
                } = e;
                if (null == t) return null;
                let {
                    formattedValue: n,
                    isPositive: r
                } = (0, o.formatMetricTrend)(t, s);
                return (0, a.jsxs)("div", {
                    className: c.trendContainer,
                    children: [(0, a.jsx)(d.default, {
                        className: l(c.chartLineIcon, {
                            [c.chartLineIconNegative]: !r
                        })
                    }), (0, a.jsx)(i.Text, {
                        variant: "text-md/normal",
                        className: c.trendDescription,
                        children: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_METRIC_TREND_DESCRIPTION.format({
                            value: n
                        })
                    })]
                })
            };
            var _ = e => {
                let {
                    label: t,
                    sublabel: s,
                    value: n,
                    additionalContent: l,
                    tooltip: o
                } = e;
                return (0, a.jsxs)("div", {
                    className: c.container,
                    children: [(0, a.jsxs)("div", {
                        children: [(0, a.jsxs)("div", {
                            className: c.labelContainer,
                            children: [(0, a.jsx)(i.Text, {
                                variant: "text-xs/medium",
                                className: c.label,
                                children: t
                            }), null != o && (0, a.jsx)(i.Tooltip, {
                                text: o,
                                children: e => (0, a.jsx)(r.default, {
                                    className: c.labelTooltipIcon,
                                    ...e
                                })
                            }), null != s ? (0, a.jsx)(i.Text, {
                                variant: "text-xs/normal",
                                className: c.sublabel,
                                children: s
                            }) : null]
                        }), (0, a.jsx)(i.Text, {
                            className: c.value,
                            variant: "text-sm/normal",
                            children: n
                        })]
                    }), l]
                })
            }
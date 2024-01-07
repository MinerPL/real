            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("669491"),
                l = s("77078"),
                i = s("68238"),
                r = s("69080"),
                o = s("782340"),
                d = s("91900"),
                u = e => {
                    let {
                        title: t,
                        subtext: s = o.default.Messages.NOT_AVAILABLE,
                        localizedNumber: u,
                        isTrendingUp: c,
                        isTrendingDown: E,
                        tooltipText: _
                    } = e, T = "string" == typeof _ ? _ : t, I = null != _ ? (0, a.jsx)(l.Tooltip, {
                        text: _,
                        position: "top",
                        "aria-label": T,
                        children: e => (0, a.jsx)(i.default, {
                            ...e,
                            className: d.infoIcon,
                            height: 16,
                            width: 16
                        })
                    }) : null;
                    return (0, a.jsxs)("div", {
                        className: d.analyticsCard,
                        children: [(0, a.jsxs)(l.FormTitle, {
                            className: d.analyticsCardTitle,
                            children: [t, I]
                        }), (0, a.jsx)("div", {
                            className: d.analyticsCardContent,
                            children: (0, a.jsx)(l.Heading, {
                                className: null != u ? d.analyticsCardNumber : d.analyticsCardNumberNotAvailable,
                                variant: "heading-xl/semibold",
                                children: null != u ? u : o.default.Messages.NOT_AVAILABLE
                            })
                        }), (0, a.jsxs)("div", {
                            className: d.analyticsCardArrowSubText,
                            children: [c ? (0, a.jsx)(r.default, {
                                className: d.trendingArrow,
                                color: n.default.unsafe_rawColors.GREEN_360.css,
                                "aria-label": o.default.Messages.TRENDING_ARROW_UP,
                                width: 14,
                                height: 12
                            }) : null, E ? (0, a.jsx)(r.default, {
                                className: d.trendingArrowIconDown,
                                color: n.default.unsafe_rawColors.RED_400.css,
                                "aria-label": o.default.Messages.TRENDING_ARROW_DOWN,
                                width: 14,
                                height: 12
                            }) : null, (0, a.jsx)(l.Text, {
                                variant: "text-xs/normal",
                                children: s
                            })]
                        })]
                    })
                }
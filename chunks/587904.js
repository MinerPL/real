            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("414456"),
                s = n.n(i),
                r = n("77078"),
                l = n("38600"),
                o = n("888400"),
                u = n("782340"),
                c = n("741566"),
                d = function(e) {
                    let {
                        children: t,
                        className: n,
                        compact: i = !1,
                        timestamp: d,
                        isVisibleOnlyOnHover: m = !1,
                        cozyAlt: f = !1,
                        isInline: g = !0,
                        id: p,
                        isEdited: E = !1
                    } = e, A = (0, o.accessibilityLabelCalendarFormat)(d), S = i ? (0, o.dateFormat)(d, "LT") : (0, o.calendarFormat)(d), h = i ? (0, l.default)(S) : null, I = E ? u.default.Messages.MESSAGE_EDITED_TIMESTAMP_A11Y_LABEL.format({
                        timeFormatted: A
                    }) : A;
                    return (0, a.jsx)("span", {
                        className: s(n, h, {
                            [c.timestamp]: !0,
                            [c.timestampVisibleOnHover]: m,
                            [c.timestampInline]: g,
                            [c.alt]: f
                        }),
                        children: (0, a.jsx)(r.Tooltip, {
                            text: (0, o.dateFormat)(d, "LLLL"),
                            "aria-label": I,
                            tooltipClassName: c.timestampTooltip,
                            delay: 750,
                            children: e => (0, a.jsx)("time", {
                                ...e,
                                id: p,
                                dateTime: d.toISOString(),
                                children: null != t ? t : (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)("i", {
                                        className: c.separator,
                                        "aria-hidden": !0,
                                        children: i ? "[" : " — "
                                    }), S, i && (0, a.jsxs)("i", {
                                        className: c.separator,
                                        "aria-hidden": !0,
                                        children: ["]", " "]
                                    })]
                                })
                            })
                        })
                    })
                }
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return c
                }
            }), i("222007");
            var l = i("37983"),
                a = i("884691"),
                n = i("77078"),
                r = i("798609"),
                d = i("956089"),
                o = i("782340"),
                u = i("569214");

            function c(e) {
                let {
                    name: t,
                    labelType: i,
                    collapsed: c = !1,
                    showTooltip: s = !1
                } = e, f = i === r.EmbeddedActivityLabelTypes.NEW ? o.default.Messages.NEW : o.default.Messages.UPDATED, p = i === r.EmbeddedActivityLabelTypes.NEW ? u.activityNewBadge : u.activityUpdatedBadge, [v, m] = a.useState(c ? "" : f);
                if (a.useEffect(() => {
                        c ? m("") : i === r.EmbeddedActivityLabelTypes.NEW ? m(o.default.Messages.NEW) : i === r.EmbeddedActivityLabelTypes.UPDATED && m(o.default.Messages.UPDATED)
                    }, [c, i]), i === r.EmbeddedActivityLabelTypes.NONE) return null;
                let b = (0, l.jsx)(d.TextBadge, {
                    className: p,
                    disableColor: !0,
                    text: (0, l.jsx)("span", {
                        children: v
                    })
                });
                if (!s) return b;
                let A = o.default.Messages.EMBEDDED_ACTIVITIES_FREE_PREVIEW_TOOLTIP.format({
                    activity: t
                });
                return (0, l.jsx)(n.TooltipContainer, {
                    text: A,
                    tooltipContentClassName: u.tooltip,
                    children: b
                })
            }
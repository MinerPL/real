            "use strict";
            n.r(t), n.d(t, {
                Heading: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                a = n("577776"),
                o = n("860226"),
                l = n("742109");
            let u = e => {
                let {
                    variant: t,
                    className: n,
                    ...r
                } = e, u = (0, o.usePrivateHeadingLevel)(), c = "h".concat(Math.min(u, 6));
                return (0, i.jsx)(a.Text, {
                    variant: t,
                    tag: c,
                    className: s(l.defaultColor, n),
                    ...u > 6 ? {
                        "data-excessive-heading-level": u
                    } : {},
                    ...r
                })
            }
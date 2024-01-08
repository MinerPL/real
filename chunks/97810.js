            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("898260"),
                o = n("877671");
            let u = s.forwardRef(function(e, t) {
                let {
                    className: n,
                    isBeforeGroup: s = !1,
                    ...l
                } = e, {
                    children: u
                } = l;
                return (0, a.jsx)(r.default, {
                    ...l,
                    ref: t,
                    role: "separator",
                    "aria-label": "string" == typeof u ? u : void 0,
                    className: i(n, {
                        [o.divider]: !0,
                        [o.hasContent]: null != u,
                        [o.beforeGroup]: s
                    })
                })
            });
            var d = s.memo(u)
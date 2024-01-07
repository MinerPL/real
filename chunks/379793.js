            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("77078"),
                o = n("129141");
            let u = a.forwardRef(function(e, t) {
                let {
                    className: n,
                    focusProps: a,
                    ...s
                } = e;
                return (0, l.jsx)(r.FocusRing, {
                    ...a,
                    children: (0, l.jsx)("li", {
                        className: i(n, o.container),
                        ...s,
                        ref: t
                    })
                })
            });
            var d = u
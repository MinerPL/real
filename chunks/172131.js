            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a, l, s = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                o = n("256170"),
                u = n("981913"),
                d = n("698310");

            function c(e) {
                let {
                    direction: t,
                    className: n,
                    themeable: a,
                    ...l
                } = e;
                return (0, s.jsx)(u.default, {
                    className: r(n, d.arrow, {
                        [d.up]: 0 === t
                    }),
                    iconComponent: o.default,
                    themeable: a,
                    ...l
                })
            }(a = l || (l = {}))[a.UP = 0] = "UP", a[a.DOWN = 1] = "DOWN", c.Directions = l;
            var f = c
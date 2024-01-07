            "use strict";
            a.r(t), a.d(t, {
                InfoBoxLooks: function() {
                    return s
                },
                default: function() {
                    return m
                }
            });
            var n, s, l = a("37983");
            a("884691");
            var i = a("414456"),
                r = a.n(i),
                d = a("77078"),
                o = a("266926"),
                c = a("423487"),
                u = a("759538");
            (n = s || (s = {})).INFO = "info", n.WARNING = "warning";
            let f = {
                    info: u.info,
                    warning: u.warning
                },
                C = {
                    info: o.default,
                    warning: c.default
                };

            function m(e) {
                let {
                    children: t,
                    className: a,
                    look: n = "info"
                } = e, s = C[n];
                return (0, l.jsxs)("div", {
                    className: r(u.root, a, f[n]),
                    children: [(0, l.jsx)(s, {
                        className: u.icon
                    }), (0, l.jsx)(d.Text, {
                        className: u.text,
                        variant: "text-sm/medium",
                        color: "text-normal",
                        children: t
                    })]
                })
            }
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("437825"),
                r = n("595755");

            function o(e) {
                let {
                    total: t,
                    users: n,
                    videoLimit: a
                } = e;
                return (0, l.jsxs)("div", {
                    className: r.wrapper,
                    children: [(0, l.jsxs)("span", {
                        className: s(r.users, {
                            [r.video]: a,
                            [r.extraLong]: n >= 100
                        }),
                        children: [a ? (0, l.jsx)(i.default, {
                            className: r.videoIcon
                        }) : null, n.toString().padStart(2, "0")]
                    }), (0, l.jsx)("span", {
                        className: s(r.total, {
                            [r.extraLong]: t >= 100
                        }),
                        children: t.toString().padStart(2, "0")
                    })]
                })
            }
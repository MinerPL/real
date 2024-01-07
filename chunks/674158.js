            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("288264");

            function u(e) {
                let {
                    icon: t,
                    iconClassName: n,
                    description: a,
                    color: u
                } = e;
                return (0, l.jsxs)("div", {
                    className: i.perkRow,
                    children: [(0, l.jsx)("div", {
                        className: i.perkIconContainer,
                        children: (0, l.jsx)(t, {
                            color: u,
                            className: s(i.perkIcon, n)
                        })
                    }), (0, l.jsx)("div", {
                        className: i.perkDescription,
                        children: a
                    })]
                })
            }
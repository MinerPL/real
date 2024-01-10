            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                l = n.n(s),
                i = n("339023"),
                r = n("555857");

            function o(e) {
                let t, {
                    className: n,
                    children: s,
                    verified: o,
                    roleColor: u,
                    roleName: d
                } = e;
                return t = o ? (0, a.jsx)(i.default, {
                    size: 12,
                    color: u,
                    className: r.linkedRoleColor
                }) : (0, a.jsx)("div", {
                    className: r.roleColor,
                    style: {
                        backgroundColor: u
                    }
                }), (0, a.jsxs)("div", {
                    className: l(n, r.role),
                    children: [t, d, s]
                })
            }
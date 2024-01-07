            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("77078"),
                r = n("181114"),
                o = n("915675"),
                u = n("302287");

            function d(e) {
                let {
                    children: t,
                    className: n,
                    size: a = i.Button.Sizes.MEDIUM,
                    onlyShineOnHover: d = !1,
                    ...c
                } = e;
                return (0, l.jsx)(r.default, {
                    ...c,
                    color: i.Button.Colors.CUSTOM,
                    size: a,
                    className: s(u.button, n),
                    onlyShineOnHover: d,
                    children: (0, l.jsxs)("div", {
                        className: u.buttonContents,
                        children: [(0, l.jsx)(o.default, {
                            className: u.icon
                        }), t]
                    })
                })
            }
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            });
            var i = l("37983");
            l("884691");
            var a = l("414456"),
                n = l.n(a),
                s = l("77078"),
                r = l("953109"),
                c = l("450754");

            function d(e) {
                let {
                    className: t,
                    embeddedApps: l
                } = e;
                if (l.length <= 0) return null;
                {
                    if (1 === l.length) return (0, i.jsx)("div", {
                        className: n(c.container, t),
                        children: (0, i.jsx)(r.default, {
                            game: l[0].application,
                            className: c.icon24px
                        })
                    });
                    let e = l.length - 1;
                    return (0, i.jsxs)("div", {
                        className: n(c.container, t),
                        children: [(0, i.jsx)(r.default, {
                            game: l[0].application,
                            className: c.icon20px
                        }), 2 === l.length ? (0, i.jsx)(r.default, {
                            game: l[1].application,
                            className: c.icon20px
                        }) : (0, i.jsx)(s.Text, {
                            className: c.overflow,
                            variant: "text-xs/bold",
                            color: "interactive-active",
                            children: "+".concat(e)
                        })]
                    })
                }
            }
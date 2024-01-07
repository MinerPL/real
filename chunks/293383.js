            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("509043"),
                o = n("437825"),
                u = n("587974"),
                d = n("624468");
            let c = [1752220, 3066993, 3447003, 10181046, 15277667, 15844367];

            function f(e) {
                return (0, r.int2hex)(c[function(e) {
                    let t = 5381,
                        n = 0;
                    for (; n < e.length;) t = 33 * t ^ e.charCodeAt(n++);
                    return t >>> 0
                }(e) % c.length])
            }

            function h(e) {
                var t;
                let {
                    title: n,
                    className: s
                } = e, [r, c] = a.useState(f(n));
                return a.useEffect(() => {
                    c(f(n))
                }, [n]), (0, l.jsxs)("div", {
                    className: d.wrapper,
                    children: [(0, l.jsx)(u.default, {
                        mask: u.default.Masks.STATUS_SCREENSHARE,
                        width: 32,
                        height: 32,
                        children: (0, l.jsx)("div", {
                            className: i(d.icon, s),
                            style: {
                                backgroundColor: r
                            },
                            children: null !== (t = n[0]) && void 0 !== t ? t : "?"
                        })
                    }), (0, l.jsx)(o.default, {
                        className: d.badge
                    })]
                })
            }
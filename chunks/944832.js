            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("414456"),
                a = n.n(i),
                l = n("561445"),
                r = e => {
                    let {
                        aspectRatio: t,
                        style: n,
                        className: i,
                        children: r
                    } = e;
                    return (0, s.jsx)("div", {
                        className: a(l.outer, i),
                        style: {
                            paddingTop: "".concat(1 / t * 100, "%"),
                            ...n
                        },
                        children: (0, s.jsx)("div", {
                            className: l.inner,
                            children: r
                        })
                    })
                }
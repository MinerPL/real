            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("75196");

            function r(e) {
                let {
                    width: t = 12,
                    height: n = 12,
                    color: r = "currentColor",
                    foreground: i,
                    ...l
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, s.default)(l),
                    width: t,
                    height: n,
                    viewBox: "0 0 12 12",
                    children: (0, a.jsx)("rect", {
                        className: i,
                        fill: r,
                        width: "10",
                        height: "1",
                        x: "1",
                        y: "6"
                    })
                })
            }
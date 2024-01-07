            "use strict";
            s.r(t), s.d(t, {
                ArrowSmallDownIcon: function() {
                    return i
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("669491"),
                l = s("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: i = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M12.7 20.7a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.4l3.3 3.29V4a1 1 0 1 1 2 0v13.59l3.3-3.3a1 1 0 0 1 1.4 1.42l-5 5Z",
                        className: r
                    })
                })
            }
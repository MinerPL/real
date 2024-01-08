            "use strict";
            n.r(e), n.d(e, {
                LinkIcon: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("669491"),
                _ = n("75196");
            let i = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...l
                } = t;
                return (0, r.jsxs)("svg", {
                    ...(0, _.default)(l),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M16.3 14.7a1 1 0 0 1 0-1.4l2.5-2.5a3.95 3.95 0 1 0-5.6-5.6l-2.5 2.5a1 1 0 1 1-1.4-1.4l2.5-2.5a5.95 5.95 0 1 1 8.4 8.4l-2.5 2.5a1 1 0 0 1-1.4 0ZM7.7 9.3a1 1 0 0 1 0 1.4l-2.5 2.5a3.95 3.95 0 0 0 5.6 5.6l2.5-2.5a1 1 0 1 1 1.4 1.4l-2.5 2.5a5.95 5.95 0 0 1-8.4-8.4l2.5-2.5a1 1 0 0 1 1.4 0Z",
                        className: o
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M14.7 10.7a1 1 0 1 0-1.4-1.4l-4 4a1 1 0 0 0 1.4 1.4l4-4Z",
                        className: o
                    })]
                })
            }
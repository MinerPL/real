            "use strict";
            E.r(I), E.d(I, {
                LinkIcon: function() {
                    return R
                }
            });
            var T = E("37983");
            E("884691");
            var S = E("669491"),
                N = E("75196");
            let R = _ => {
                let {
                    width: I = 24,
                    height: E = 24,
                    color: R = S.default.colors.INTERACTIVE_NORMAL,
                    colorClass: A = "",
                    ...O
                } = _;
                return (0, T.jsxs)("svg", {
                    ...(0, N.default)(O),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: I,
                    height: E,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, T.jsx)("path", {
                        fill: "string" == typeof R ? R : R.css,
                        d: "M16.3 14.7a1 1 0 0 1 0-1.4l2.5-2.5a3.95 3.95 0 1 0-5.6-5.6l-2.5 2.5a1 1 0 1 1-1.4-1.4l2.5-2.5a5.95 5.95 0 1 1 8.4 8.4l-2.5 2.5a1 1 0 0 1-1.4 0ZM7.7 9.3a1 1 0 0 1 0 1.4l-2.5 2.5a3.95 3.95 0 0 0 5.6 5.6l2.5-2.5a1 1 0 1 1 1.4 1.4l-2.5 2.5a5.95 5.95 0 0 1-8.4-8.4l2.5-2.5a1 1 0 0 1 1.4 0Z",
                        className: A
                    }), (0, T.jsx)("path", {
                        fill: "string" == typeof R ? R : R.css,
                        d: "M14.7 10.7a1 1 0 1 0-1.4-1.4l-4 4a1 1 0 0 0 1.4 1.4l4-4Z",
                        className: A
                    })]
                })
            }
            "use strict";
            t.r(a), t.d(a, {
                WindowLaunchIcon: function() {
                    return r
                }
            });
            var s = t("37983");
            t("884691");
            var n = t("669491"),
                l = t("75196");
            let r = e => {
                let {
                    width: a = 24,
                    height: t = 24,
                    color: r = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...i
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, l.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: a,
                    height: t,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, s.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M15 2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V4.41l-4.3 4.3a1 1 0 1 1-1.4-1.42L19.58 3H16a1 1 0 0 1-1-1Z",
                        className: o
                    }), (0, s.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 1 0-2 0v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 1 0 0-2H5Z",
                        className: o
                    })]
                })
            }
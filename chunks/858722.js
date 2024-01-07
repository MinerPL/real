            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("351275"),
                i = n("75196");

            function l(e) {
                return "CloudDone-".concat(e)
            }

            function r(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = "currentColor",
                    foreground: o,
                    gradientConfig: u,
                    ...d
                } = e, c = null;
                return null != u && (c = (0, a.jsx)(s.default, {
                    ...u,
                    color: r,
                    id: l(u.id)
                })), (0, a.jsxs)("svg", {
                    ...(0, i.default)(d),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    children: [(0, a.jsx)("defs", {
                        children: c
                    }), (0, a.jsx)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, a.jsx)("path", {
                        fill: null != u ? "url(#".concat(l(u.id), ")") : r,
                        className: o,
                        d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"
                    })]
                })
            }
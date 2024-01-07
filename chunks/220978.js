            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("469563"),
                i = n("691096"),
                l = n("351275"),
                r = n("75196");

            function o(e) {
                return "CloudDownload-".concat(e)
            }
            var u = (0, s.replaceIcon)(function(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = "currentColor",
                    foreground: i,
                    gradientConfig: u,
                    ...d
                } = e, c = null;
                return null != u && (c = (0, a.jsx)(l.default, {
                    ...u,
                    color: s,
                    id: o(u.id)
                })), (0, a.jsxs)("svg", {
                    ...(0, r.default)(d),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    children: [(0, a.jsx)("defs", {
                        children: c
                    }), (0, a.jsx)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, a.jsx)("path", {
                        fill: null != u ? "url(#".concat(o(u.id), ")") : s,
                        className: i,
                        d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"
                    })]
                })
            }, i.DownloadIcon, void 0, {
                size: 24
            })
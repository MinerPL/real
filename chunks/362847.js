            "use strict";
            n.r(e), n.d(e, {
                TvIcon: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                c = n("75196");
            let o = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...a
                } = t;
                return (0, r.jsx)("svg", {
                    ...(0, c.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M4 3a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H4ZM6 20a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H6Z",
                        className: l
                    })
                })
            }
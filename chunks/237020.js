            "use strict";
            l.r(t), l.d(t, {
                CheckmarkBoldIcon: function() {
                    return n
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("669491"),
                r = l("75196");
            let n = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: n = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...i
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        fillRule: "evenodd",
                        d: "M22.06 4.94a1.5 1.5 0 0 1 0 2.12l-12 12a1.5 1.5 0 0 1-2.12 0l-6-6a1.5 1.5 0 0 1 2.12-2.12L9 15.88 19.94 4.94a1.5 1.5 0 0 1 2.12 0Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
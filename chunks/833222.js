            "use strict";
            t.r(s), t.d(s, {
                DenyIcon: function() {
                    return n
                }
            });
            var r = t("37983");
            t("884691");
            var l = t("669491"),
                a = t("75196");
            let n = e => {
                let {
                    width: s = 24,
                    height: t = 24,
                    color: n = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...c
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: s,
                    height: t,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        fillRule: "evenodd",
                        d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-2 0a9 9 0 0 1-14.62 7.03L19.03 6.38A8.96 8.96 0 0 1 21 12ZM4.97 17.62 17.62 4.97A9 9 0 0 0 4.97 17.62Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
            "use strict";
            n.r(t), n.d(t, {
                BoostTier1SimpleIcon: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M13.05 1.4a1.59 1.59 0 0 0-2.1 0l-4.9 4A3.37 3.37 0 0 0 5 8v8c0 1.07.4 2.06 1.05 2.6l4.9 4c.65.53 1.45.53 2.1 0l4.9-4A3.37 3.37 0 0 0 19 16V8c0-1.07-.4-2.06-1.05-2.6l-4.9-4ZM12 3.12 7.32 6.95C7.25 7.01 7 7.35 7 8v8c0 .65.25 1 .32 1.05L12 20.88l4.68-3.83c.07-.06.32-.4.32-1.05V8c0-.65-.25-1-.32-1.05L12 3.12Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
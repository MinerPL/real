            "use strict";
            n.r(t), n.d(t, {
                PinUprightIcon: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("669491"),
                s = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M16.91 5C18.61 5 20 3.48 20 1.6v-.1a.5.5 0 0 0-.5-.5h-15a.5.5 0 0 0-.5.5v.1C4 3.49 5.38 5 7.09 5H8v4.35l-3.39 3.26A2 2 0 0 0 4 14.05V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-.95a2 2 0 0 0-.61-1.44L16 9.35V5h.91ZM13.37 17.25c.33 0 .56.3.5.61l-1.08 4.75a.5.5 0 0 1-.49.39h-.6a.5.5 0 0 1-.49-.39l-1.07-4.75a.5.5 0 0 1 .49-.61h2.74Z",
                        className: r
                    })
                })
            }
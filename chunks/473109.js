            "use strict";
            n.r(t), n.d(t, {
                MusicSlashIcon: function() {
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
                        d: "M22.7 2.7a1 1 0 0 0-1.4-1.4l-20 20a1 1 0 1 0 1.4 1.4l20-20ZM15.2 3.78a.5.5 0 0 1 .2.83l-2.28 2.27a.5.5 0 0 1-.52.12L8 5.4v6.4a.5.5 0 0 1-.15.35L2.3 17.7c-.2.2-.5.2-.67 0A2.7 2.7 0 0 1 1 16c0-1.66 1.57-3 3.5-3 .54 0 1.05.1 1.5.29V3.4a2 2 0 0 1 2.65-1.89l6.55 2.27ZM19.15 8.85a.5.5 0 0 0-.15.36v7.08a3.98 3.98 0 0 0-1.5-.29c-1.93 0-3.5 1.34-3.5 3s1.57 3 3.5 3 3.5-1.34 3.5-3V7.6a.25.25 0 0 0-.43-.17l-1.42 1.42Z",
                        className: r
                    })
                })
            }
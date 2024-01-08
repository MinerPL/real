            "use strict";
            n.r(t), n.d(t, {
                GridVerticalIcon: function() {
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
                    ...u
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M4 22a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h5a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4ZM15 22a2 2 0 0 1-2-2v-5c0-1.1.9-2 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5ZM13 9c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v5Z",
                        className: r
                    })
                })
            }
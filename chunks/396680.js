            "use strict";
            s.r(t), s.d(t, {
                ChannelListPlusIcon: function() {
                    return i
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("669491"),
                l = s("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: i = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        d: "M3 3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2H3ZM19 14a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1ZM2 8a1 1 0 0 1 1-1h18a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1ZM3 11a1 1 0 1 0 0 2h11a1 1 0 0 0 0-2H3ZM2 16a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1ZM3 19a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2H3Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    })
                })
            }
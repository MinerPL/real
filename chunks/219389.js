            "use strict";
            n.r(t), n.d(t, {
                TagsIcon: function() {
                    return l
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...r
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, a.default)(r),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, s.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M9.12 1.88A3 3 0 0 1 11.24 1H17a2 2 0 0 1 1.94 1.5c.07.27-.16.5-.44.5h-4.26a4 4 0 0 0-2.83 1.17l-7.25 7.25c-.5.51-.85 1.12-1.03 1.77-.12.45-.74.7-1.06.38l-.2-.2a3 3 0 0 1 0-4.24l7.25-7.25Z",
                        className: u
                    }), (0, s.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M13.12 5.88A3 3 0 0 1 15.24 5H21a2 2 0 0 1 2 2v5.76a3 3 0 0 1-.88 2.12l-7.25 7.25a3 3 0 0 1-4.24 0l-4.76-4.76a3 3 0 0 1 0-4.24l7.25-7.25ZM20 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
                        clipRule: "evenodd",
                        className: u
                    })]
                })
            }
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("75196");

            function s(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = "currentColor",
                    className: a,
                    foreground: o,
                    ...l
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(l),
                    className: a,
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M18.625 3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V5.375C21.0057 4.08803 19.9197 3 18.625 3ZM19 19V5H4.99999V19H19Z",
                        className: o,
                        fill: s
                    })
                })
            }
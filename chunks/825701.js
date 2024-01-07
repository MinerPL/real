            "use strict";
            r.r(t), r.d(t, {
                StarIcon: function() {
                    return s
                }
            });
            var o = r("37983");
            r("884691");
            var a = r("669491"),
                l = r("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: r = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...n
                } = e;
                return (0, o.jsx)("svg", {
                    ...(0, l.default)(n),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: r,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, o.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M10.81 2.86c.38-1.15 2-1.15 2.38 0l1.89 5.83h6.12c1.2 0 1.71 1.54.73 2.25l-4.95 3.6 1.9 5.82a1.25 1.25 0 0 1-1.93 1.4L12 18.16l-4.95 3.6c-.98.7-2.3-.25-1.92-1.4l1.89-5.82-4.95-3.6a1.25 1.25 0 0 1 .73-2.25h6.12l1.9-5.83Z",
                        className: i
                    })
                })
            }
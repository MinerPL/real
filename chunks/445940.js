            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("75196");

            function l(e) {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: l = "currentColor",
                    foreground: i,
                    ...r
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, n.default)(r),
                    width: t,
                    height: s,
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        className: i,
                        fill: l,
                        d: "M13.5605 11L11.2646 8.706L12.6842 7.294L17.4023 12.009L12.6822 16.708L11.2656 15.292L13.5685 13H2C2.50429 18.045 6.7842 22 11.9744 22C17.5025 22 22 17.513 22 12C22 6.487 17.5025 2 11.9744 2C6.7842 2 2.50429 5.954 2 11H13.5605Z"
                    })
                })
            }
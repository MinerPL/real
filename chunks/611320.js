            "use strict";
            t.r(l), t.d(l, {
                VoiceLockIcon: function() {
                    return r
                }
            });
            var a = t("37983");
            t("884691");
            var n = t("669491"),
                s = t("75196");
            let r = e => {
                let {
                    width: l = 24,
                    height: t = 24,
                    color: r = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...c
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, s.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: l,
                    height: t,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, a.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M16 4h.5v-.5a2.5 2.5 0 0 1 5 0V4h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm4-.5V4h-2v-.5a1 1 0 1 1 2 0Z",
                        clipRule: "evenodd",
                        className: i
                    }), (0, a.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M11 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-.06a1 1 0 0 1-.74-.32L5.92 17H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2.92l4.28-4.68a1 1 0 0 1 .74-.32H11ZM20.5 12c-.28 0-.5.22-.52.5a7 7 0 0 1-5.13 6.25c-.48.13-.85.55-.85 1.05v.03c0 .6.52 1.06 1.1.92a9 9 0 0 0 6.89-8.25.48.48 0 0 0-.49-.5h-1ZM16.5 12c-.28 0-.5.23-.54.5a3 3 0 0 1-1.33 2.02c-.35.23-.63.6-.63 1.02v.14c0 .63.59 1.1 1.16.83a5 5 0 0 0 2.82-4.01c.02-.28-.2-.5-.48-.5h-1Z",
                        className: i
                    })]
                })
            }
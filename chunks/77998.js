            "use strict";
            A.r(t), A.d(t, {
                ImageFileIcon: function() {
                    return r
                }
            });
            var a = A("37983");
            A("884691");
            var l = A("669491"),
                n = A("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: A = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, n.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: A,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, a.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M6 22h12a4 4 0 0 0 4-4v-7.5a.5.5 0 0 0-.5-.5H19a5 5 0 0 1-5-5V2.5a.5.5 0 0 0-.5-.5H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4Zm9.35-8.87 3.5 4.67c.37.5.02 1.2-.6 1.2H5.81a.75.75 0 0 1-.59-1.22l1.86-2.32a1.5 1.5 0 0 1 2.34 0l.5.64 2.23-2.97a2 2 0 0 1 3.2 0ZM10.2 5.98c.23-.91-.88-1.55-1.55-.9a.93.93 0 0 1-1.3 0c-.67-.65-1.78-.01-1.55.9a.93.93 0 0 1-.65 1.12c-.9.26-.9 1.54 0 1.8.48.14.77.63.65 1.12-.23.91.88 1.55 1.55.9a.93.93 0 0 1 1.3 0c.67.65 1.78.01 1.55-.9a.93.93 0 0 1 .65-1.12c.9-.26.9-1.54 0-1.8a.93.93 0 0 1-.65-1.12Z",
                        clipRule: "evenodd",
                        className: s
                    }), (0, a.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M21.66 8c.03 0 .05-.03.04-.06a3 3 0 0 0-.58-.82l-4.24-4.24a3 3 0 0 0-.82-.58.04.04 0 0 0-.06.04V5a3 3 0 0 0 3 3h2.66Z",
                        className: s
                    })]
                })
            }
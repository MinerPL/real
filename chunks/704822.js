            "use strict";
            n.r(t), n.d(t, {
                KeyIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M21.41 5.41A2 2 0 1 0 18.6 2.6l-7.75 7.74a.53.53 0 0 1-.58.11 6 6 0 1 0 3.3 3.28.51.51 0 0 1 .1-.55c.19-.19.5-.19.68 0l1.25 1.24a2 2 0 1 0 2.82-2.82l-1.23-1.24a.5.5 0 0 1 0-.7l.47-.47c.2-.2.5-.2.7 0l1.24 1.23A2 2 0 1 0 22.4 7.6l-1.23-1.24a.5.5 0 0 1 0-.7l.23-.24ZM10 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
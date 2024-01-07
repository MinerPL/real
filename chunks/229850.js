            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("414456"),
                n = a.n(s),
                o = a("77078"),
                u = a("461380"),
                i = a("133251");

            function d(e) {
                let {
                    options: t,
                    onClick: a,
                    className: s,
                    optionClassName: d,
                    hideCaret: c
                } = e;
                return (0, l.jsx)("div", {
                    className: n(i.root, s),
                    children: t.map((e, t) => (0, l.jsxs)(o.Clickable, {
                        onClick: () => a(e),
                        className: n(i.option, d),
                        children: [(0, l.jsx)(o.Text, {
                            className: i.text,
                            color: "none",
                            variant: "text-md/normal",
                            children: e.label
                        }), !(null == c ? void 0 : c(e)) && (0, l.jsx)(u.default, {
                            className: i.caret,
                            direction: u.default.Directions.RIGHT
                        })]
                    }, t))
                })
            }
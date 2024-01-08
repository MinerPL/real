            "use strict";
            n.r(t), n.d(t, {
                getSizeForWidth: function() {
                    return o
                },
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                r = n.n(s),
                i = n("77078"),
                l = n("145131"),
                u = n("929422");

            function o(e) {
                return e < 400 ? "small" : e < 1e3 ? "medium" : "large"
            }

            function d(e) {
                let {
                    onCTAClick: t,
                    callToAction: n,
                    header: s,
                    description: o,
                    size: d,
                    className: c,
                    artURL: f,
                    noArt: E = !1,
                    selected: h = !1
                } = e;
                return (0, a.jsxs)(l.default, {
                    className: c,
                    justify: l.default.Justify.CENTER,
                    align: l.default.Align.CENTER,
                    direction: l.default.Direction.VERTICAL,
                    style: {
                        padding: 4
                    },
                    children: [!E && null != f && (0, a.jsx)("div", {
                        className: r(u.art, u[d]),
                        style: {
                            backgroundImage: "url(".concat(f, ")")
                        }
                    }), null != s ? (0, a.jsx)(i.Text, {
                        color: "none",
                        variant: "text-md/semibold",
                        className: u.header,
                        children: s
                    }) : null, null != o ? (0, a.jsx)(i.Text, {
                        color: "none",
                        className: u.description,
                        variant: "text-sm/medium",
                        children: o
                    }) : null, h || null == n ? null : (0, a.jsx)(i.Button, {
                        className: u.outerButton,
                        size: i.Button.Sizes.NONE,
                        color: i.Button.Colors.WHITE,
                        look: i.Button.Looks.BLANK,
                        innerClassName: u.button,
                        onClick: e => {
                            e.stopPropagation(), null == t || t(e)
                        },
                        children: n
                    })]
                })
            }
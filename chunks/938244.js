            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("145131"),
                i = n("661569");

            function r(e) {
                let {
                    icon: t,
                    onClick: n,
                    label: r
                } = e;
                return (0, a.jsx)(s.Button, {
                    look: s.Button.Looks.BLANK,
                    size: s.Button.Sizes.MIN,
                    className: i.button,
                    onClick: n,
                    children: (0, a.jsxs)(l.default, {
                        align: l.default.Align.CENTER,
                        children: [(0, a.jsx)("div", {
                            className: i.buttonIcon,
                            children: t
                        }), (0, a.jsx)(s.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            children: r
                        })]
                    })
                })
            }
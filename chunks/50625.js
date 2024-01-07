            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return m
                }
            }), r("222007");
            var a = r("37983");
            r("884691");
            var n = r("420117"),
                i = r("669491"),
                l = r("841098"),
                o = r("505684"),
                s = r("49111"),
                c = r("694735");
            let d = {
                base00: i.default.colors.BACKGROUND_SECONDARY.css,
                base03: i.default.colors.TEXT_WARNING.css,
                base07: i.default.colors.TEXT_NORMAL.css,
                base08: i.default.colors.TEXT_MUTED.css,
                base09: i.default.colors.TEXT_POSITIVE.css,
                base0B: i.default.colors.TEXT_WARNING.css,
                base0D: i.default.colors.TEXT_BRAND.css
            };

            function u(e) {
                let t = {};
                for (let [r, a] of Object.entries(e)) t[r] = a;
                return t
            }
            let h = u(d),
                p = u(d);

            function f(e) {
                return s.TOKEN_REGEX.test(e) ? (0, a.jsx)(o.default, {
                    type: o.default.Types.TEXT,
                    children: () => (0, a.jsx)(a.Fragment, {
                        children: e
                    })
                }) : e
            }

            function m(e) {
                let {
                    data: t
                } = e, r = (0, l.default)();
                return (0, a.jsx)("div", {
                    className: c.inspectorWrapper,
                    children: (0, a.jsx)(n.JSONTree, {
                        data: t,
                        theme: "light" === r ? p : h,
                        invertTheme: !1,
                        valueRenderer: f
                    })
                })
            }
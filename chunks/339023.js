            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            }), l("222007");
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                i = l("509043"),
                r = l("446674"),
                o = l("669491"),
                u = l("77078"),
                d = l("206230"),
                c = l("83900"),
                f = l("391866");

            function m(e) {
                let t, {
                        color: l,
                        size: a,
                        forcedIconColor: m,
                        className: p,
                        iconClassName: E
                    } = e,
                    [T, _] = (0, r.useStateFromStoresArray)([d.default], () => [d.default.desaturateUserColors, d.default.saturation]),
                    S = (0, u.useToken)(o.default.unsafe_rawColors.PRIMARY_300).hex(),
                    h = (0, i.hex2int)(null != l ? l : S),
                    I = (0, i.int2hsl)(h, !1, T ? _ : null);
                t = null != m ? m : .3 > (0, i.getDarkness)(h) ? o.default.unsafe_rawColors.PRIMARY_630.css : o.default.unsafe_rawColors.WHITE_500.css;
                let A = a / 8;
                return (0, n.jsx)("div", {
                    style: {
                        background: I,
                        width: a,
                        height: a,
                        borderRadius: a,
                        lineHeight: "".concat(a, "px")
                    },
                    className: p,
                    children: (0, n.jsx)(c.default, {
                        color: t,
                        className: s(f.linkIcon, E),
                        width: a - 2 * A,
                        height: a - 2 * A,
                        style: {
                            margin: A
                        }
                    })
                })
            }
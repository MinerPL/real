            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            }), l("222007");
            var n = l("37983");
            l("884691");
            var a = l("509043"),
                s = l("446674"),
                i = l("669491"),
                r = l("77078"),
                o = l("206230"),
                u = l("931138"),
                d = l("486952"),
                c = l("782340");

            function f(e) {
                let t, {
                        color: l,
                        size: f,
                        forcedIconColor: m,
                        className: p,
                        iconClassName: E,
                        tooltipText: T
                    } = e,
                    [_, S] = (0, s.useStateFromStoresArray)([o.default], () => [o.default.desaturateUserColors, o.default.saturation]),
                    h = (0, r.useToken)(i.default.unsafe_rawColors.PRIMARY_300).hex(),
                    I = (0, a.hex2int)(null != l ? l : h),
                    A = (0, a.int2hsl)(I, !1, _ ? S : null);
                return t = null != m ? m : .3 > (0, a.getDarkness)(I) ? i.default.unsafe_rawColors.PRIMARY_630.css : i.default.unsafe_rawColors.WHITE_500.css, (0, n.jsx)(r.Tooltip, {
                    text: null != T ? T : c.default.Messages.CONNECTIONS_ROLE_OFFICIAL_ICON_TOOLTIP,
                    children: e => (0, n.jsx)(u.default, {
                        ...e,
                        className: p,
                        color: A,
                        size: f,
                        children: (0, n.jsx)(d.default, {
                            color: t,
                            height: f,
                            width: f,
                            className: E
                        })
                    })
                })
            }
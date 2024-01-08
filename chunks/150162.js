            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            }), l("222007");
            var a = l("37983"),
                n = l("884691"),
                s = l("969176"),
                i = l.n(s),
                o = l("907002"),
                d = l("458960"),
                r = l("669491"),
                u = l("77078"),
                C = l("84339");
            let c = {
                    duration: 100,
                    easing: d.default.Easing.inOut(d.default.Easing.back()),
                    clamp: !0
                },
                f = {
                    duration: 2e3,
                    easing: d.default.Easing.quad,
                    clamp: !0
                };

            function m(e) {
                let {
                    value: t,
                    children: l,
                    equalityFn: s = i,
                    style: d,
                    ...m
                } = e, E = (0, C.default)(t), [{
                    spring: M
                }, T] = (0, o.useSpring)(() => ({
                    spring: 0
                })), h = (0, u.useToken)(r.default.colors.BACKGROUND_PRIMARY).hex(), x = (0, u.useToken)(r.default.colors.CONTROL_BRAND_FOREGROUND).hex(), _ = n.useCallback(() => {
                    T({
                        spring: 1,
                        config: c
                    }), T({
                        spring: 0,
                        config: f,
                        delay: 300
                    })
                }, [T]);
                n.useEffect(() => {
                    if (null != t && null != E) !s(t, E) && _()
                }, [_, t, E, s]);
                let H = null == M ? void 0 : M.to({
                        range: [0, 1],
                        output: ["".concat(h, "00"), "".concat(x, "27")]
                    }),
                    A = null != d ? {
                        ...d,
                        backgroundColor: H
                    } : {
                        backgroundColor: H
                    };
                return (0, a.jsx)(o.animated.tr, {
                    ...m,
                    style: A,
                    children: l
                })
            }
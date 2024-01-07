            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return E
                }
            }), l("222007");
            var a = l("37983"),
                n = l("884691"),
                s = l("969176"),
                i = l.n(s),
                o = l("907002"),
                d = l("458960"),
                C = l("669491"),
                r = l("77078"),
                u = l("84339");
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

            function E(e) {
                let {
                    value: t,
                    children: l,
                    equalityFn: s = i,
                    style: d,
                    ...E
                } = e, m = (0, u.default)(t), [{
                    spring: M
                }, T] = (0, o.useSpring)(() => ({
                    spring: 0
                })), h = (0, r.useToken)(C.default.colors.BACKGROUND_PRIMARY).hex(), x = (0, r.useToken)(C.default.colors.CONTROL_BRAND_FOREGROUND).hex(), _ = n.useCallback(() => {
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
                    if (null != t && null != m) !s(t, m) && _()
                }, [_, t, m, s]);
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
                    ...E,
                    style: A,
                    children: l
                })
            }
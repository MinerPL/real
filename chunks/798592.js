            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var r = n("884691"),
                i = n("65597"),
                o = n("526887"),
                u = n("880731");

            function a() {
                let {
                    createMultipleConfettiAt: t
                } = r.useContext(o.ConfettiCannonContext), e = (0, i.default)([u.default], () => u.default.getState()), n = r.useCallback(t => ({
                    size: {
                        type: "static-random",
                        minValue: t.confettiSize - 7,
                        maxValue: t.confettiSize + 7
                    }
                }), []), a = r.useMemo(() => ({
                    fire: (r, i, o) => {
                        var u, a;
                        let s = (null == o ? void 0 : o.settings) != null ? {
                                ...e,
                                ...o.settings
                            } : e,
                            l = n(s);
                        t(r, i, l, (null !== (u = null == o ? void 0 : o.count) && void 0 !== u ? u : s.confettiCount) * (null !== (a = null == o ? void 0 : o.countMultiplier) && void 0 !== a ? a : 1), {
                            sprite: null == o ? void 0 : o.sprite
                        })
                    }
                }), [t, n, e]);
                return a
            }
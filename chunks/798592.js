            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("884691"),
                l = n("65597"),
                a = n("526887"),
                r = n("880731");

            function s() {
                let {
                    createMultipleConfettiAt: e
                } = i.useContext(a.ConfettiCannonContext), t = (0, l.default)([r.default], () => r.default.getState()), n = i.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), s = i.useMemo(() => ({
                    fire: (i, l, a) => {
                        var r, s;
                        let o = (null == a ? void 0 : a.settings) != null ? {
                                ...t,
                                ...a.settings
                            } : t,
                            u = n(o);
                        e(i, l, u, (null !== (r = null == a ? void 0 : a.count) && void 0 !== r ? r : o.confettiCount) * (null !== (s = null == a ? void 0 : a.countMultiplier) && void 0 !== s ? s : 1), {
                            sprite: null == a ? void 0 : a.sprite
                        })
                    }
                }), [e, n, t]);
                return s
            }
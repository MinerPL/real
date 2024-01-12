            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("884691"),
                r = n("65597"),
                l = n("526887"),
                o = n("880731");

            function s() {
                let {
                    createMultipleConfettiAt: e
                } = i.useContext(l.ConfettiCannonContext), t = (0, r.default)([o.default], () => o.default.getState()), n = i.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), s = i.useMemo(() => ({
                    fire: (i, r, l) => {
                        var o, s;
                        let u = (null == l ? void 0 : l.settings) != null ? {
                                ...t,
                                ...l.settings
                            } : t,
                            a = n(u);
                        e(i, r, a, (null !== (o = null == l ? void 0 : l.count) && void 0 !== o ? o : u.confettiCount) * (null !== (s = null == l ? void 0 : l.countMultiplier) && void 0 !== s ? s : 1), {
                            sprite: null == l ? void 0 : l.sprite
                        })
                    }
                }), [e, n, t]);
                return s
            }
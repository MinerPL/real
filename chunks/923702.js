            "use strict";
            o.r(t), o.d(t, {
                default: function() {
                    return s
                }
            }), o("222007");
            var r = o("37983"),
                n = o("884691"),
                a = o("516555"),
                l = o("172858"),
                s = function(e) {
                    let {
                        confettiTarget: t,
                        confettiCanvas: o,
                        sprites: s,
                        colors: i
                    } = e, [u, c] = n.useState(null), d = (0, a.useConfettiCannon)(o, u), [C, f] = n.useState(!1);
                    return n.useEffect(() => {
                        let e = Array(10).fill(0);
                        return null != t && d.isReady && !C && (e = e.map((o, r) => setTimeout(() => {
                            var o;
                            r === e.length - 1 && f(!0), d.createMultipleConfetti((o = t.getBoundingClientRect(), {
                                ...l.COMMON_CONFETTI_BASE_CONFIG,
                                position: {
                                    type: "static-random",
                                    minValue: {
                                        x: o.x,
                                        y: o.y
                                    },
                                    maxValue: {
                                        x: o.x + o.width,
                                        y: o.y + o.height / 2
                                    }
                                },
                                velocity: {
                                    type: "static-random",
                                    minValue: {
                                        x: -100,
                                        y: -50
                                    },
                                    maxValue: {
                                        x: 100,
                                        y: -300
                                    }
                                },
                                dragCoefficient: {
                                    type: "static",
                                    value: 1e-4
                                }
                            }), 50)
                        }, 100 * r))), () => {
                            for (let t of e) clearTimeout(t)
                        }
                    }, [d, t, C]), (0, r.jsx)(a.SpriteCanvas, {
                        ref: c,
                        sprites: null != s ? s : l.COMMON_CONFETTI_SPRITES,
                        colors: null != i ? i : l.COMMON_CONFETTI_COLORS,
                        spriteWidth: l.COMMON_CONFETTI_MAX_SPRITE_SIZE,
                        spriteHeight: l.COMMON_CONFETTI_MAX_SPRITE_SIZE
                    })
                }
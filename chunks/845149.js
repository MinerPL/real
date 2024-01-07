            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            }), s("222007");
            var i = s("37983"),
                n = s("884691"),
                a = s("516555"),
                o = s("526887"),
                u = s("172858"),
                r = function(e) {
                    let {
                        confettiTarget: t,
                        colors: s,
                        emojiURL: r
                    } = e, [l, c] = n.useState(null), {
                        confettiCanvas: d
                    } = n.useContext(o.ConfettiCannonContext), p = (0, a.useConfettiCannon)(d, l), f = n.useMemo(() => [{
                        src: r,
                        colorize: !1
                    }], [r]);
                    return n.useEffect(() => {
                        let e = [, , , , ].fill(0);
                        return null != t && (e = e.map((e, s) => setTimeout(() => {
                            var e;
                            p.createMultipleConfetti((e = t.getBoundingClientRect(), {
                                ...u.COMMON_CONFETTI_BASE_CONFIG,
                                position: {
                                    type: "static-random",
                                    minValue: {
                                        x: e.left + 100,
                                        y: e.top + 75
                                    },
                                    maxValue: {
                                        x: e.left + 350,
                                        y: e.top + 150
                                    }
                                },
                                velocity: {
                                    type: "static-random",
                                    minValue: {
                                        x: -40,
                                        y: -40
                                    },
                                    maxValue: {
                                        x: 40,
                                        y: -70
                                    }
                                },
                                size: {
                                    type: "static-random",
                                    minValue: u.COMMON_CONFETTI_MAX_SPRITE_SIZE,
                                    maxValue: u.COMMON_CONFETTI_MAX_SPRITE_SIZE
                                },
                                dragCoefficient: {
                                    type: "static",
                                    value: .001
                                }
                            }), 50)
                        }, 60 * s))), () => {
                            for (let t of e) clearTimeout(t)
                        }
                    }, [p, t]), (0, i.jsx)(a.SpriteCanvas, {
                        ref: c,
                        sprites: null != f ? f : u.COMMON_CONFETTI_SPRITES,
                        colors: null != s ? s : u.COMMON_CONFETTI_COLORS,
                        spriteWidth: u.COMMON_CONFETTI_MAX_SPRITE_SIZE,
                        spriteHeight: u.COMMON_CONFETTI_MAX_SPRITE_SIZE
                    })
                }
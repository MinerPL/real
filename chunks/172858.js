            "use strict";
            n.r(t), n.d(t, {
                DUCK_CONFETTI_SPRITE: function() {
                    return s
                },
                COMMON_CONFETTI_COLORS: function() {
                    return u
                },
                COMMON_CONFETTI_SPRITES: function() {
                    return l
                },
                COMMON_CONFETTI_MAX_SPRITE_SIZE: function() {
                    return o
                },
                COMMON_CONFETTI_BASE_CONFIG: function() {
                    return r
                },
                COMMON_CONFETTI_ENVIRONMENT: function() {
                    return d
                }
            });
            var a = n("516555"),
                i = n("839491");
            let s = i,
                u = ["#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"],
                l = [n("606863"), s, n("164654"), n("540346"), n("526094"), n("367469"), n("23933"), {
                    src: n("283397"),
                    colorize: !1
                }],
                o = 28,
                r = {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: 30,
                            y: -80
                        },
                        maxValue: {
                            x: -30,
                            y: -180
                        }
                    },
                    rotation: {
                        type: "linear-random",
                        minValue: 0,
                        maxValue: 360,
                        minAddValue: -25,
                        maxAddValue: 25
                    },
                    size: {
                        type: "static-random",
                        minValue: 14,
                        maxValue: o
                    }
                },
                d = new a.Environment
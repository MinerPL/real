            "use strict";
            A.r(t), A.d(t, {
                DUCK_CONFETTI_SPRITE: function() {
                    return n
                },
                COMMON_CONFETTI_COLORS: function() {
                    return r
                },
                COMMON_CONFETTI_SPRITES: function() {
                    return s
                },
                COMMON_CONFETTI_MAX_SPRITE_SIZE: function() {
                    return o
                },
                COMMON_CONFETTI_BASE_CONFIG: function() {
                    return i
                },
                COMMON_CONFETTI_ENVIRONMENT: function() {
                    return d
                }
            });
            var a = A("516555"),
                l = A("839491");
            let n = l,
                r = ["#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"],
                s = [A("606863"), n, A("164654"), A("540346"), A("526094"), A("367469"), A("23933"), {
                    src: A("283397"),
                    colorize: !1
                }],
                o = 28,
                i = {
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
            "use strict";
            l.r(t), l.d(t, {
                DEFAULT_CONFETTI_SPRITES: function() {
                    return d
                },
                DEFAULT_CONFETTI_COLORS: function() {
                    return f
                },
                default: function() {
                    return b
                }
            }), l("222007");
            var a = l("656280"),
                s = l.n(a),
                r = l("635058"),
                n = l("65597"),
                o = l("669491"),
                i = l("206230"),
                u = l("388491"),
                c = l("172858");
            let d = c.COMMON_CONFETTI_SPRITES.filter((e, t) => 1 !== t && 7 !== t),
                f = ["#F53273", "#9595FF", "#A7FA4E", "#331EAF"],
                C = s(o.default.unsafe_rawColors.WHITE_500.resolve({
                    saturation: 1
                }).hex()),
                m = s(o.default.unsafe_rawColors.BLACK_500.resolve({
                    saturation: 1
                }).hex()),
                E = (e, t) => {
                    let l = e.toRgb(),
                        a = t.toRgb(),
                        [r, n, o] = (0, u.getValueInColorGradientByPercentage)([l.r, l.g, l.b], [a.r, a.g, a.b], 50);
                    return s({
                        r,
                        g: n,
                        b: o
                    })
                },
                p = (e, t) => {
                    let l = s(e),
                        a = s(t),
                        r = E(l, a);
                    return {
                        primary: l,
                        secondary: a,
                        border: r.setAlpha(.4)
                    }
                },
                g = (e, t) => {
                    let l = s(e),
                        a = s(t),
                        r = E(l, a);
                    return {
                        primary: l,
                        secondary: a,
                        text: s(r.isLight() ? m : C)
                    }
                },
                h = (e, t) => {
                    let {
                        h: l,
                        s: a,
                        l: r
                    } = e.toHsl();
                    return s({
                        h: l,
                        s: a * t,
                        l: r
                    })
                },
                T = {
                    [r.CollectiblesCategorySkuId.FANTASY]: {
                        backgroundColors: p("#146144", "#021A0E"),
                        buttonColors: g("#028737", "#00694A"),
                        confettiSprites: [l("655029"), l("290216")],
                        confettiColors: ["#EFA7F7", "#B646C1", "#56B3B3", "#1A8199", "#7160AF", "#AEC7FF"]
                    },
                    [r.CollectiblesCategorySkuId.ANIME]: {
                        backgroundColors: p("#4B79B0", "#0F0E3A"),
                        buttonColors: g("#8A45C1", "#136897"),
                        confettiSprites: [l("597704"), l("714293")],
                        confettiColors: ["#2C9BD9", "#E46A80", "#FFE500", "#BBA8D5", "#3EDDD3", "#E2B761"]
                    },
                    [r.CollectiblesCategorySkuId.BREAKFAST]: {
                        backgroundColors: p("#E8B26B", "#7A3A00"),
                        buttonColors: g("#FFC355", "#FF9537"),
                        confettiSprites: [l("286642"), l("94646")],
                        confettiColors: ["#DD9C98", "#FFC037", "#FF6B00", "#FDE081", "#DD923E", "#FFEECC"]
                    },
                    [r.CollectiblesCategorySkuId.DISXCORE]: {
                        backgroundColors: p("#732565", "#111D40"),
                        buttonColors: g(o.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.resolve({
                            saturation: 1
                        }).hex(), o.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.resolve({
                            saturation: 1
                        }).hex()),
                        confettiSprites: d,
                        confettiColors: f
                    },
                    [r.CollectiblesCategorySkuId.HALLOWEEN]: {
                        backgroundColors: p("#5280DC", "#060F25"),
                        buttonColors: g("#496BDB", "#3E41B5"),
                        confettiSprites: [l("638538"), l("861485")],
                        confettiColors: ["#EE5619", "#FDBE44", "#42D612", "#DC0DDE", "#8A0AE5"]
                    },
                    [r.CollectiblesCategorySkuId.FALL]: {
                        backgroundColors: p("#FFC267", "#6C1A00"),
                        buttonColors: g("#F5A142", "#E4760E"),
                        confettiSprites: [l("740683"), l("489847")],
                        confettiColors: ["#FF7138", "#92360C", "#F6A334", "#FFC586", "#FF8A00"]
                    },
                    [r.CollectiblesCategorySkuId.WINTER]: {
                        backgroundColors: p("#467FFF", "#154ECF"),
                        buttonColors: g("#44C7FF", "#009DFF"),
                        confettiSprites: [l("770704"), l("165057")],
                        confettiColors: ["#3DC3FF", "#297AFF", "#FD8BFF", "#FF3BF5"]
                    },
                    [r.CollectiblesCategorySkuId.MONSTERS]: {
                        backgroundColors: p("#00475E", "#002B39"),
                        buttonColors: g("#00E6B2", "#009B7C"),
                        confettiSprites: [l("330825"), l("125221")],
                        confettiColors: ["#00C49A", "#F8B531", "#F24E7E", "#64CC6F", "#BB5CF0"]
                    }
                };
            var b = e => {
                let t = (0, n.default)([i.default], () => i.default.saturation);
                if (null == e) return {};
                let l = T[e];
                return (null == l ? void 0 : l.backgroundColors) == null || 1 === t ? null != l ? l : {} : {
                    ...l,
                    backgroundColors: {
                        primary: h(l.backgroundColors.primary, t),
                        secondary: h(l.backgroundColors.secondary, t),
                        border: h(l.backgroundColors.border, t)
                    },
                    buttonColors: {
                        primary: h(l.buttonColors.primary, t),
                        secondary: h(l.buttonColors.secondary, t),
                        text: l.buttonColors.text
                    },
                    confettiColors: l.confettiColors.map(e => h(s(e), t).toHexString())
                }
            }
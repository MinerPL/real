            "use strict";
            a.r(t), a.d(t, {
                DEFAULT_CONFETTI_SPRITES: function() {
                    return d
                },
                DEFAULT_CONFETTI_COLORS: function() {
                    return f
                },
                default: function() {
                    return T
                }
            }), a("222007");
            var l = a("656280"),
                s = a.n(l),
                r = a("635058"),
                n = a("65597"),
                o = a("669491"),
                i = a("206230"),
                u = a("388491"),
                c = a("172858");
            let d = c.COMMON_CONFETTI_SPRITES.filter((e, t) => 1 !== t && 7 !== t),
                f = ["#F53273", "#9595FF", "#A7FA4E", "#331EAF"],
                C = s(o.default.unsafe_rawColors.WHITE_500.resolve({
                    saturation: 1
                }).hex()),
                E = s(o.default.unsafe_rawColors.BLACK_500.resolve({
                    saturation: 1
                }).hex()),
                m = (e, t) => {
                    let a = e.toRgb(),
                        l = t.toRgb(),
                        [r, n, o] = (0, u.getValueInColorGradientByPercentage)([a.r, a.g, a.b], [l.r, l.g, l.b], 50);
                    return s({
                        r,
                        g: n,
                        b: o
                    })
                },
                p = (e, t) => {
                    let a = s(e),
                        l = s(t),
                        r = m(a, l);
                    return {
                        primary: a,
                        secondary: l,
                        border: r.setAlpha(.4)
                    }
                },
                g = (e, t) => {
                    let a = s(e),
                        l = s(t),
                        r = m(a, l);
                    return {
                        primary: a,
                        secondary: l,
                        text: s(r.isLight() ? E : C)
                    }
                },
                h = (e, t) => {
                    let {
                        h: a,
                        s: l,
                        l: r
                    } = e.toHsl();
                    return s({
                        h: a,
                        s: l * t,
                        l: r
                    })
                },
                b = {
                    [r.CollectiblesCategorySkuId.FANTASY]: {
                        backgroundColors: p("#146144", "#021A0E"),
                        buttonColors: g("#028737", "#00694A"),
                        confettiSprites: [a("655029"), a("290216")],
                        confettiColors: ["#EFA7F7", "#B646C1", "#56B3B3", "#1A8199", "#7160AF", "#AEC7FF"]
                    },
                    [r.CollectiblesCategorySkuId.ANIME]: {
                        backgroundColors: p("#4B79B0", "#0F0E3A"),
                        buttonColors: g("#8A45C1", "#136897"),
                        confettiSprites: [a("597704"), a("714293")],
                        confettiColors: ["#2C9BD9", "#E46A80", "#FFE500", "#BBA8D5", "#3EDDD3", "#E2B761"]
                    },
                    [r.CollectiblesCategorySkuId.BREAKFAST]: {
                        backgroundColors: p("#E8B26B", "#7A3A00"),
                        buttonColors: g("#FFC355", "#FF9537"),
                        confettiSprites: [a("286642"), a("94646")],
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
                        confettiSprites: [a("638538"), a("861485")],
                        confettiColors: ["#EE5619", "#FDBE44", "#42D612", "#DC0DDE", "#8A0AE5"]
                    },
                    [r.CollectiblesCategorySkuId.FALL]: {
                        backgroundColors: p("#FFC267", "#6C1A00"),
                        buttonColors: g("#F5A142", "#E4760E"),
                        confettiSprites: [a("740683"), a("489847")],
                        confettiColors: ["#FF7138", "#92360C", "#F6A334", "#FFC586", "#FF8A00"]
                    },
                    [r.CollectiblesCategorySkuId.WINTER]: {
                        backgroundColors: p("#467FFF", "#154ECF"),
                        buttonColors: g("#44C7FF", "#009DFF"),
                        confettiSprites: [a("770704"), a("165057")],
                        confettiColors: ["#3DC3FF", "#297AFF", "#FD8BFF", "#FF3BF5"]
                    },
                    [r.CollectiblesCategorySkuId.MONSTERS]: {
                        backgroundColors: p("#00475E", "#002B39"),
                        buttonColors: g("#00E6B2", "#009B7C"),
                        confettiSprites: [a("330825"), a("125221")],
                        confettiColors: ["#00C49A", "#F8B531", "#F24E7E", "#64CC6F", "#BB5CF0"]
                    }
                };
            var T = e => {
                let t = (0, n.default)([i.default], () => i.default.saturation);
                if (null == e) return {};
                let a = b[e];
                return (null == a ? void 0 : a.backgroundColors) == null || 1 === t ? null != a ? a : {} : {
                    ...a,
                    backgroundColors: {
                        primary: h(a.backgroundColors.primary, t),
                        secondary: h(a.backgroundColors.secondary, t),
                        border: h(a.backgroundColors.border, t)
                    },
                    buttonColors: {
                        primary: h(a.buttonColors.primary, t),
                        secondary: h(a.buttonColors.secondary, t),
                        text: a.buttonColors.text
                    },
                    confettiColors: a.confettiColors.map(e => h(s(e), t).toHexString())
                }
            }
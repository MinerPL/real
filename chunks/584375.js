            "use strict";
            n.r(t), n.d(t, {
                buildPlatformedThemedEmojiColorPalette: function() {
                    return r
                },
                buildEmojiColorPalette: function() {
                    return u
                }
            });
            var i = n("172182"),
                a = n("284679"),
                l = n("61069");
            let s = e => {
                    var t, n;
                    let {
                        colors: l,
                        saturationFactor: s = 1
                    } = e;
                    if (null == l || l.length < 1) return null;
                    let r = (0, a.findColorByHsv)(l),
                        u = i.default.parseString("#ffffff");
                    if (null == u) return null;
                    let o = i.default.parseString("#36393e");
                    if (null == o) return null;
                    let d = i.default.parseString(r);
                    if (null == d) return null;
                    let c = (0, a.rawRgbToHsl)(d.red, d.blue, d.green),
                        _ = null !== (t = (0, a.getAccessibleColor)({
                            colors: [(0, a.getColorLightnessAdjusted)(d, .6, !0), u],
                            ratio: 3,
                            saturationFactor: s
                        })) && void 0 !== t ? t : d,
                        E = null !== (n = (0, a.getAccessibleColor)({
                            colors: [(0, a.getColorLightnessAdjusted)(d, .6, !1), o],
                            ratio: 5,
                            saturationFactor: s
                        })) && void 0 !== n ? n : d,
                        f = (0, a.getAccessibleColor)({
                            colors: [d, u],
                            ratio: 7,
                            saturationFactor: s
                        }),
                        h = (0, a.getAccessibleColor)({
                            colors: [d, o],
                            ratio: 7,
                            saturationFactor: s
                        });
                    return {
                        LIGHT: {
                            accentColor: null == f ? void 0 : f.toHexString(),
                            backgroundColor: (0, a.getSaturatedColorHex)({
                                colorRGB: _,
                                saturationFactor: s
                            }),
                            highlightColor: null == d ? void 0 : d.toHexString(),
                            opacity: (null == c ? void 0 : c.saturation) < .1 ? .35 : .1
                        },
                        DARK: {
                            accentColor: null == h ? void 0 : h.toHexString(),
                            backgroundColor: (0, a.getSaturatedColorHex)({
                                colorRGB: E,
                                saturationFactor: s
                            }),
                            highlightColor: null == d ? void 0 : d.toHexString(),
                            opacity: (null == c ? void 0 : c.saturation) < .1 ? .5 : .2
                        }
                    }
                },
                r = e => {
                    let {
                        colors: t,
                        saturationFactor: n = 1,
                        shouldProcessMobileColors: i = !1
                    } = e, a = s({
                        colors: t,
                        saturationFactor: n
                    });
                    return l.default.applyPlatformToThemedEmojiColorPalette({
                        palette: a,
                        shouldProcessMobileColors: i
                    })
                },
                u = (e, t, n) => {
                    var i;
                    if (null == e || e.length < 1) return null;
                    let a = r({
                            colors: e,
                            saturationFactor: t
                        }),
                        l = n ? null == a ? void 0 : a.DARK : null == a ? void 0 : a.LIGHT;
                    return {
                        backgroundColor: null == l ? void 0 : l.backgroundColor,
                        accentColor: null == l ? void 0 : l.accentColor,
                        highlightColor: null == l ? void 0 : l.highlightColor,
                        opacity: null !== (i = null == l ? void 0 : l.opacity) && void 0 !== i ? i : .15
                    }
                }
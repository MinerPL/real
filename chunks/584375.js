            "use strict";
            n.r(t), n.d(t, {
                buildPlatformedThemedEmojiColorPalette: function() {
                    return o
                },
                buildEmojiColorPalette: function() {
                    return d
                }
            });
            var s = n("172182"),
                i = n("284679"),
                r = n("61069");
            let a = e => {
                    var t, n;
                    let {
                        colors: r,
                        saturationFactor: a = 1
                    } = e;
                    if (null == r || r.length < 1) return null;
                    let o = (0, i.findColorByHsv)(r),
                        d = s.default.parseString("#ffffff");
                    if (null == d) return null;
                    let u = s.default.parseString("#36393e");
                    if (null == u) return null;
                    let l = s.default.parseString(o);
                    if (null == l) return null;
                    let f = (0, i.rawRgbToHsl)(l.red, l.blue, l.green),
                        _ = null !== (t = (0, i.getAccessibleColor)({
                            colors: [(0, i.getColorLightnessAdjusted)(l, .6, !0), d],
                            ratio: 3,
                            saturationFactor: a
                        })) && void 0 !== t ? t : l,
                        c = null !== (n = (0, i.getAccessibleColor)({
                            colors: [(0, i.getColorLightnessAdjusted)(l, .6, !1), u],
                            ratio: 5,
                            saturationFactor: a
                        })) && void 0 !== n ? n : l,
                        g = (0, i.getAccessibleColor)({
                            colors: [l, d],
                            ratio: 7,
                            saturationFactor: a
                        }),
                        m = (0, i.getAccessibleColor)({
                            colors: [l, u],
                            ratio: 7,
                            saturationFactor: a
                        });
                    return {
                        LIGHT: {
                            accentColor: null == g ? void 0 : g.toHexString(),
                            backgroundColor: (0, i.getSaturatedColorHex)({
                                colorRGB: _,
                                saturationFactor: a
                            }),
                            highlightColor: null == l ? void 0 : l.toHexString(),
                            opacity: (null == f ? void 0 : f.saturation) < .1 ? .35 : .1
                        },
                        DARK: {
                            accentColor: null == m ? void 0 : m.toHexString(),
                            backgroundColor: (0, i.getSaturatedColorHex)({
                                colorRGB: c,
                                saturationFactor: a
                            }),
                            highlightColor: null == l ? void 0 : l.toHexString(),
                            opacity: (null == f ? void 0 : f.saturation) < .1 ? .5 : .2
                        }
                    }
                },
                o = e => {
                    let {
                        colors: t,
                        saturationFactor: n = 1,
                        shouldProcessMobileColors: s = !1
                    } = e, i = a({
                        colors: t,
                        saturationFactor: n
                    });
                    return r.default.applyPlatformToThemedEmojiColorPalette({
                        palette: i,
                        shouldProcessMobileColors: s
                    })
                },
                d = (e, t, n) => {
                    var s;
                    if (null == e || e.length < 1) return null;
                    let i = o({
                            colors: e,
                            saturationFactor: t
                        }),
                        r = n ? null == i ? void 0 : i.DARK : null == i ? void 0 : i.LIGHT;
                    return {
                        backgroundColor: null == r ? void 0 : r.backgroundColor,
                        accentColor: null == r ? void 0 : r.accentColor,
                        highlightColor: null == r ? void 0 : r.highlightColor,
                        opacity: null !== (s = null == r ? void 0 : r.opacity) && void 0 !== s ? s : .15
                    }
                }
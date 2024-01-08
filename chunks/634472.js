            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                i = n("446674"),
                r = n("629109"),
                u = n("42887"),
                o = n("316680"),
                d = n("829536"),
                c = n("773336"),
                f = n("550410"),
                h = n("397651"),
                p = i.default.connectStores([u.default], e => {
                    let {
                        userId: t,
                        context: n
                    } = e;
                    return {
                        currentVolume: u.default.getLocalVolume(t, n),
                        muted: u.default.isLocalMute(t, n)
                    }
                })(function(e) {
                    let {
                        className: t,
                        iconClassName: n,
                        sliderClassName: l,
                        userId: i,
                        currentVolume: u,
                        muted: p,
                        context: m,
                        currentWindow: E = window
                    } = e;
                    return (0, a.jsx)(f.default, {
                        children: (0, a.jsx)(o.default, {
                            currentWindow: E,
                            iconClassName: s(n, h.controlIcon),
                            sliderClassName: l,
                            className: t,
                            value: (0, d.amplitudeToPerceptual)(u),
                            muted: p,
                            maxValue: c.isPlatformEmbedded ? 200 : 100,
                            onValueChange: e => {
                                var t, n, a, l;
                                return t = e, n = i, a = p, l = m, void(t > 0 && a && r.default.toggleLocalMute(n, l), r.default.setLocalVolume(n, (0, d.perceptualToAmplitude)(t), l))
                            },
                            onToggleMute: () => {
                                var e, t;
                                return e = i, t = m, void r.default.toggleLocalMute(e, t)
                            }
                        })
                    })
                })
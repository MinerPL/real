            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("884691"),
                i = n("446674"),
                r = n("462550"),
                o = n("235004"),
                s = n("78581"),
                a = n("520497"),
                u = n("812809");

            function d(e, t) {
                let {
                    currentPreviewRef: n
                } = l.useContext(r.default), d = (0, i.useStateFromStores)([o.default], () => o.default.isPlayingSound(e.soundId), [e]), c = l.useCallback(l => {
                    null != n.current && n.current.pause(), null != t && (0, s.playSound)(e, t, l)
                }, [e, n, t]), f = l.useCallback(() => {
                    let t = new Audio((0, a.default)(e.soundId));
                    null != n.current && n.current.pause(), n.current = t, t.currentTime = 0, t.volume = (0, u.default)(e.volume), t.play()
                }, [e, n]);
                return l.useCallback(() => () => {
                    var e;
                    return null === (e = n.current) || void 0 === e ? void 0 : e.pause()
                }, [n]), {
                    playSoundboardSound: c,
                    isPlayingSound: d,
                    previewSound: f
                }
            }
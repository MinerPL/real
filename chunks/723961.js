            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007");
            var i = n("37983"),
                r = n("884691"),
                l = n("77078"),
                s = n("132755"),
                a = n("78404"),
                o = n("520497"),
                u = n("812809"),
                d = n("129722"),
                c = n("859971"),
                E = n("477633"),
                f = n("782340"),
                _ = n("803336"),
                I = r.memo(function(e) {
                    let {
                        sound: t,
                        volume: n,
                        disabled: I
                    } = e, [h, m] = r.useState(!1), A = r.useRef(null), {
                        file: N,
                        audio: S,
                        loadAudioFromFile: g
                    } = (0, d.useAudioTrimmerStore)(), p = r.useMemo(() => (0, o.default)(t.soundId), [t]);
                    return r.useEffect(() => {
                        null == A.current && (A.current = (0, c.loadAudioFileFromUrl)(p, t.name).then(g))
                    }, [p, g, t.name]), (0, i.jsxs)("div", {
                        className: _.previewContainer,
                        children: [(0, i.jsx)(l.Clickable, {
                            onClick: I ? void 0 : function() {
                                null != S && (S.paused ? (S.volume = (0, u.default)(n), S.currentTime = 0, S.play(), m(!0), S.addEventListener("ended", () => m(!1), {
                                    once: !0
                                })) : (S.pause(), m(!1)))
                            },
                            className: _.playButton,
                            "aria-label": h ? f.default.Messages.STOP : f.default.Messages.PLAY,
                            children: h ? (0, i.jsx)(a.default, {
                                className: _.playIcon
                            }) : (0, i.jsx)(s.default, {
                                className: _.playIcon
                            })
                        }), (0, i.jsx)("div", {
                            className: _.waveformContainer,
                            children: (0, i.jsx)(E.default, {
                                className: _.waveform,
                                file: N,
                                audio: S
                            })
                        })]
                    })
                })
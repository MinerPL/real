            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
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
                f = n("477633"),
                E = n("782340"),
                _ = n("803336"),
                h = r.memo(function(e) {
                    let {
                        sound: t,
                        volume: n,
                        disabled: h
                    } = e, [m, g] = r.useState(!1), p = r.useRef(null), {
                        file: I,
                        audio: S,
                        loadAudioFromFile: A
                    } = (0, d.useAudioTrimmerStore)(), N = r.useMemo(() => (0, o.default)(t.soundId), [t]);
                    return r.useEffect(() => {
                        null == p.current && (p.current = (0, c.loadAudioFileFromUrl)(N, t.name).then(A))
                    }, [N, A, t.name]), (0, i.jsxs)("div", {
                        className: _.previewContainer,
                        children: [(0, i.jsx)(l.Clickable, {
                            onClick: h ? void 0 : function() {
                                null != S && (S.paused ? (S.volume = (0, u.default)(n), S.currentTime = 0, S.play(), g(!0), S.addEventListener("ended", () => g(!1), {
                                    once: !0
                                })) : (S.pause(), g(!1)))
                            },
                            className: _.playButton,
                            "aria-label": m ? E.default.Messages.STOP : E.default.Messages.PLAY,
                            children: m ? (0, i.jsx)(a.default, {
                                className: _.playIcon
                            }) : (0, i.jsx)(s.default, {
                                className: _.playIcon
                            })
                        }), (0, i.jsx)("div", {
                            className: _.waveformContainer,
                            children: (0, i.jsx)(f.default, {
                                className: _.waveform,
                                file: I,
                                audio: S
                            })
                        })]
                    })
                })
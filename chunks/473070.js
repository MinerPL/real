            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            }), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660");
            var a = n("37983"),
                l = n("884691"),
                i = n("759843"),
                r = n("77078"),
                s = n("477566"),
                u = n("49671"),
                o = n("812204"),
                d = n("685665"),
                c = n("803725"),
                f = n("758946"),
                m = n("99366"),
                v = n("135284"),
                E = n("488673"),
                p = n("5431"),
                h = n("464135"),
                C = n("782340"),
                N = n("756458");

            function x(e) {
                var t, n, p, h, x, g, I, _;
                let {
                    clip: L,
                    channelId: M,
                    transitionState: T,
                    onClose: A
                } = e, [j, R] = l.useState(!0), [P, b] = l.useState(!1), [w, y] = l.useState(null), [D, k] = l.useState(null), {
                    AnalyticsLocationProvider: O
                } = (0, d.default)(o.default.CLIPS_EDITOR);
                l.useEffect(() => {
                    (async function e() {
                        let e;
                        try {
                            e = await u.default.clips.loadClip(L.filepath)
                        } catch {
                            A(), s.default.show({
                                title: C.default.Messages.CLIPS_LOAD_ERROR_TITLE,
                                body: C.default.Messages.CLIPS_LOAD_ERROR_BODY
                            });
                            return
                        }
                        let t = e.data.buffer,
                            n = await (0, f.createAudioMP4FromVideoMP4)(t),
                            a = URL.createObjectURL(new Blob([n], {
                                type: "audio/mp4"
                            })),
                            l = URL.createObjectURL(new Blob([e.data], {
                                type: "video/mp4"
                            }));
                        k(a), y(l)
                    })()
                }, [L.filepath, A]), l.useEffect(() => () => {
                    null != w && URL.revokeObjectURL(w)
                }, [w]), l.useEffect(() => () => {
                    null != D && URL.revokeObjectURL(D)
                }, [D]);
                let [G, F] = l.useState(null === (x = null === (t = L.editMetadata) || void 0 === t ? void 0 : t.voiceAudio) || void 0 === x || x), [U, B] = l.useState(null === (g = null === (n = L.editMetadata) || void 0 === n ? void 0 : n.applicationAudio) || void 0 === g || g), [V, H] = l.useState({
                    start: null !== (I = null === (p = L.editMetadata) || void 0 === p ? void 0 : p.start) && void 0 !== I ? I : 0,
                    end: null !== (_ = null === (h = L.editMetadata) || void 0 === h ? void 0 : h.end) && void 0 !== _ ? _ : 0
                }), [z, Z] = l.useState(L.name), X = l.useRef({
                    name: z,
                    editMetadata: {
                        start: V.start,
                        end: V.end,
                        voiceAudio: G,
                        applicationAudio: U
                    }
                });
                X.current = {
                    name: z,
                    editMetadata: {
                        start: V.start,
                        end: V.end,
                        voiceAudio: G,
                        applicationAudio: U
                    }
                };
                let W = (0, v.useClipProtocolURL)(L);
                return l.useEffect(() => {
                    async function e() {
                        let e = {};
                        null != W && (e = {
                            thumbnail: await (0, m.createThumbnailFromVideo)(W, X.current.editMetadata.start)
                        }), (0, c.updateClipMetadata)(L.id, {
                            ...X.current,
                            ...e
                        })
                    }
                    return () => {
                        e()
                    }
                }, [L.id, W]), (0, a.jsx)(r.ModalRoot, {
                    impression: {
                        impressionName: i.ImpressionNames.CLIP_EDITOR_VIEWED
                    },
                    size: r.ModalSize.DYNAMIC,
                    className: N.modalRoot,
                    transitionState: T,
                    children: (0, a.jsx)(O, {
                        children: (0, a.jsx)(r.ModalContent, {
                            className: N.modalContent,
                            children: null == w || null == D ? (0, a.jsx)("div", {
                                className: N.spinnerContainer,
                                children: (0, a.jsx)(r.Spinner, {})
                            }) : (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(S, {
                                    voiceAudioEnabled: G,
                                    applicationAudioEnabled: U,
                                    videoURL: w,
                                    cropData: V,
                                    onSetCropData: H,
                                    isLoading: j,
                                    hasOpenPrompt: P,
                                    onDoneLoading: () => R(!1),
                                    audioURL: D,
                                    transitionState: T
                                }), !j && (0, a.jsx)(E.default, {
                                    voiceAudioEnabled: G,
                                    channelId: M,
                                    applicationAudioEnabled: U,
                                    onChangeApplicationAudioEnabled: B,
                                    onChangeVoiceAudioEnabled: F,
                                    cropData: V,
                                    onSetClipName: Z,
                                    clipName: z,
                                    clip: L,
                                    onPrompt: b,
                                    onClose: A
                                })]
                            })
                        })
                    })
                })
            }

            function S(e) {
                let {
                    cropData: t,
                    onSetCropData: n,
                    voiceAudioEnabled: i,
                    applicationAudioEnabled: s,
                    isLoading: u,
                    hasOpenPrompt: o,
                    onDoneLoading: d,
                    videoURL: c,
                    audioURL: f,
                    transitionState: m
                } = e, v = l.useRef(null), E = l.useCallback(() => {
                    var e;
                    null === (e = v.current) || void 0 === e || e.seek(t.start), d()
                }, [d, t.start]);
                return l.useEffect(() => {
                    var e, t, n;
                    o && !(null === (t = v.current) || void 0 === t ? void 0 : null === (e = t.videoElement) || void 0 === e ? void 0 : e.paused) && (null === (n = v.current) || void 0 === n || n.pause())
                }, [o]), l.useEffect(() => {
                    function e(e) {
                        var n, a;
                        if ((null === (n = document.activeElement) || void 0 === n ? void 0 : n.tagName) === "INPUT") return;
                        let l = v.current;
                        if (null == l) return;
                        let i = null === (a = v.current) || void 0 === a ? void 0 : a.videoElement;
                        if (null == i) return;
                        let r = !1;
                        switch (e.key) {
                            case " ":
                                r = !0, i.paused ? l.play() : l.pause();
                                break;
                            case "ArrowLeft":
                                r = !0, l.seek(Math.max(i.currentTime - i.duration / 30, t.start));
                                break;
                            case "ArrowRight":
                                r = !0, l.seek(Math.min(i.currentTime + i.duration / 30, t.end))
                        }
                        r && (e.stopPropagation(), e.preventDefault())
                    }
                    return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                }, [t.start, t.end]), (0, a.jsxs)("div", {
                    className: N.editorPane,
                    children: [(0, a.jsx)("div", {
                        className: N.videoSizer,
                        children: (0, a.jsx)(p.default, {
                            applicationAudioEnabled: s,
                            voiceAudioEnabled: i,
                            ref: v,
                            audioSrc: f,
                            src: c,
                            isLoading: u,
                            onDoneLoading: E,
                            startTime: t.start,
                            endTime: t.end
                        })
                    }), !u && m && [r.ModalTransitionState.ENTERED, r.ModalTransitionState.HIDDEN].includes(m) ? (0, a.jsx)(h.default, {
                        videoPlayerRef: v,
                        cropData: t,
                        setCropData: n,
                        sourceURL: c
                    }) : null]
                })
            }
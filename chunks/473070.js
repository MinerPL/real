            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return x
                }
            }), a("222007"), a("511434"), a("313619"), a("654714"), a("287168"), a("956660");
            var n = a("37983"),
                l = a("884691"),
                i = a("759843"),
                r = a("77078"),
                s = a("477566"),
                u = a("49671"),
                o = a("812204"),
                d = a("685665"),
                c = a("803725"),
                f = a("758946"),
                m = a("99366"),
                v = a("135284"),
                E = a("488673"),
                p = a("5431"),
                h = a("464135"),
                C = a("782340"),
                N = a("756458");

            function x(e) {
                var t, a, p, h, x, S, I, _;
                let {
                    clip: L,
                    channelId: M,
                    transitionState: T,
                    onClose: A
                } = e, [j, R] = l.useState(!0), [P, b] = l.useState(null), [w, y] = l.useState(null), {
                    AnalyticsLocationProvider: D
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
                            a = await (0, f.createAudioMP4FromVideoMP4)(t),
                            n = URL.createObjectURL(new Blob([a], {
                                type: "audio/mp4"
                            })),
                            l = URL.createObjectURL(new Blob([e.data], {
                                type: "video/mp4"
                            }));
                        y(n), b(l)
                    })()
                }, [L.filepath, A]), l.useEffect(() => () => {
                    null != P && URL.revokeObjectURL(P)
                }, [P]), l.useEffect(() => () => {
                    null != w && URL.revokeObjectURL(w)
                }, [w]);
                let [k, O] = l.useState(null === (x = null === (t = L.editMetadata) || void 0 === t ? void 0 : t.voiceAudio) || void 0 === x || x), [G, F] = l.useState(null === (S = null === (a = L.editMetadata) || void 0 === a ? void 0 : a.applicationAudio) || void 0 === S || S), [U, B] = l.useState({
                    start: null !== (I = null === (p = L.editMetadata) || void 0 === p ? void 0 : p.start) && void 0 !== I ? I : 0,
                    end: null !== (_ = null === (h = L.editMetadata) || void 0 === h ? void 0 : h.end) && void 0 !== _ ? _ : 0
                }), [V, H] = l.useState(L.name), z = l.useRef({
                    name: V,
                    editMetadata: {
                        start: U.start,
                        end: U.end,
                        voiceAudio: k,
                        applicationAudio: G
                    }
                });
                z.current = {
                    name: V,
                    editMetadata: {
                        start: U.start,
                        end: U.end,
                        voiceAudio: k,
                        applicationAudio: G
                    }
                };
                let Z = (0, v.useClipProtocolURL)(L);
                return l.useEffect(() => {
                    async function e() {
                        let e = {};
                        null != Z && (e = {
                            thumbnail: await (0, m.createThumbnailFromVideo)(Z, z.current.editMetadata.start)
                        }), (0, c.updateClipMetadata)(L.id, {
                            ...z.current,
                            ...e
                        })
                    }
                    return () => {
                        e()
                    }
                }, [L.id, Z]), (0, n.jsx)(r.ModalRoot, {
                    impression: {
                        impressionName: i.ImpressionNames.CLIP_EDITOR_VIEWED
                    },
                    size: r.ModalSize.DYNAMIC,
                    className: N.modalRoot,
                    transitionState: T,
                    children: (0, n.jsx)(D, {
                        children: (0, n.jsx)(r.ModalContent, {
                            className: N.modalContent,
                            children: null == P || null == w ? (0, n.jsx)("div", {
                                className: N.spinnerContainer,
                                children: (0, n.jsx)(r.Spinner, {})
                            }) : (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(g, {
                                    voiceAudioEnabled: k,
                                    applicationAudioEnabled: G,
                                    videoURL: P,
                                    cropData: U,
                                    onSetCropData: B,
                                    isLoading: j,
                                    onDoneLoading: () => R(!1),
                                    audioURL: w,
                                    transitionState: T
                                }), !j && (0, n.jsx)(E.default, {
                                    voiceAudioEnabled: k,
                                    channelId: M,
                                    applicationAudioEnabled: G,
                                    onChangeApplicationAudioEnabled: F,
                                    onChangeVoiceAudioEnabled: O,
                                    cropData: U,
                                    onSetClipName: H,
                                    clipName: V,
                                    clip: L,
                                    onClose: A
                                })]
                            })
                        })
                    })
                })
            }

            function g(e) {
                let {
                    cropData: t,
                    onSetCropData: a,
                    voiceAudioEnabled: i,
                    applicationAudioEnabled: s,
                    isLoading: u,
                    onDoneLoading: o,
                    videoURL: d,
                    audioURL: c,
                    transitionState: f
                } = e, m = l.useRef(null), v = l.useCallback(() => {
                    var e;
                    null === (e = m.current) || void 0 === e || e.seek(t.start), o()
                }, [o, t.start]);
                return l.useEffect(() => {
                    function e(e) {
                        var a, n;
                        if ((null === (a = document.activeElement) || void 0 === a ? void 0 : a.tagName) === "INPUT") return;
                        let l = m.current;
                        if (null == l) return;
                        let i = null === (n = m.current) || void 0 === n ? void 0 : n.videoElement;
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
                }, [t.start, t.end]), (0, n.jsxs)("div", {
                    className: N.editorPane,
                    children: [(0, n.jsx)("div", {
                        className: N.videoSizer,
                        children: (0, n.jsx)(p.default, {
                            applicationAudioEnabled: s,
                            voiceAudioEnabled: i,
                            ref: m,
                            audioSrc: c,
                            src: d,
                            isLoading: u,
                            onDoneLoading: v,
                            startTime: t.start,
                            endTime: t.end
                        })
                    }), !u && f && [r.ModalTransitionState.ENTERED, r.ModalTransitionState.HIDDEN].includes(f) ? (0, n.jsx)(h.default, {
                        videoPlayerRef: m,
                        cropData: t,
                        setCropData: a,
                        sourceURL: d
                    }) : null]
                })
            }
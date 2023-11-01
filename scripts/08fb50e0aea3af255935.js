(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["97203"], {
        295544: function(e, t, a) {
            "use strict";
            e.exports = a.p + "e866c0682a80de08f451.svg"
        },
        195272: function(e, t, a) {
            "use strict";
            e.exports = a.p + "e69c6ba7f0551970b560.svg"
        },
        758946: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                createAudioMP4FromVideoMP4: function() {
                    return n
                }
            });
            var l = a("547757");
            async function n(e) {
                let t = l.createFile(),
                    a = new Promise(e => {
                        t.onReady = e
                    });
                return e.fileStart = 0, t.appendBuffer(e), t.flush(), await a, t.moov.boxes = t.moov.boxes.filter(e => !("trak" === e.type && "vide" === e.mdia.hdlr.handler)), t.getBuffer()
            }
        },
        643290: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var l = a("37983"),
                n = a("884691"),
                i = a("446674"),
                r = a("77078"),
                s = a("915639"),
                u = a("546463"),
                o = a("953109"),
                d = a("299039"),
                c = a("782340"),
                m = a("258818");

            function f(e) {
                var t, a;
                let {
                    clip: f
                } = e, E = (0, i.useStateFromStores)([u.default], () => u.default.getGame(null !== (t = f.applicationId) && void 0 !== t ? t : "")), v = (0, i.useStateFromStores)([s.default], () => s.default.locale), p = n.useMemo(() => new Date(d.default.extractTimestamp(f.id)), [f.id]);
                return (0, l.jsxs)("div", {
                    className: m.root,
                    children: [(0, l.jsxs)("div", {
                        className: m.nameSection,
                        children: [(0, l.jsx)(o.default, {
                            game: E
                        }), (0, l.jsx)(r.Text, {
                            className: m.name,
                            variant: "text-md/medium",
                            color: "interactive-active",
                            children: null !== (a = null == E ? void 0 : E.name) && void 0 !== a ? a : f.applicationName
                        })]
                    }), (0, l.jsxs)("div", {
                        className: m.timeContainer,
                        children: [(0, l.jsxs)("div", {
                            children: [(0, l.jsx)(r.FormTitle, {
                                className: m.timeTitle,
                                children: c.default.Messages.CLIPS_EDIT_DATE_TITLE
                            }), (0, l.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                color: "interactive-active",
                                children: p.toLocaleDateString(v, {
                                    year: "2-digit",
                                    month: "2-digit",
                                    day: "2-digit"
                                })
                            })]
                        }), (0, l.jsxs)("div", {
                            children: [(0, l.jsx)(r.FormTitle, {
                                className: m.timeTitle,
                                children: c.default.Messages.CLIPS_EDIT_TIME_TITLE
                            }), (0, l.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                color: "interactive-active",
                                children: p.toLocaleTimeString(v, {
                                    hour: "numeric",
                                    minute: "numeric"
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        488673: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return P
                }
            });
            var l = a("37983"),
                n = a("884691"),
                i = a("414456"),
                r = a.n(i),
                s = a("65597"),
                u = a("551042"),
                o = a("77078"),
                d = a("49671"),
                c = a("817963"),
                m = a("42203"),
                f = a("305961"),
                E = a("957255"),
                v = a("677099"),
                p = a("697218"),
                h = a("36694"),
                x = a("195812"),
                C = a("754576"),
                N = a("228220"),
                S = a("299039"),
                _ = a("803725"),
                g = a("142485"),
                I = a("643290"),
                T = a("431734"),
                L = a("80028"),
                M = a("782340"),
                A = a("515597"),
                j = a("446825").Buffer;

            function R(e) {
                let {
                    closePopout: t,
                    onExportToFile: a,
                    onExportToSoundboard: n
                } = e, i = (0, s.default)([v.default, E.default, p.default, f.default], () => v.default.getFlattenedGuildIds().some(e => {
                    let t = f.default.getGuild(e);
                    if (null == t) return !1;
                    let a = (0, c.getManageResourcePermissions)(t, E.default, p.default);
                    return a.canCreateExpressions
                }));
                return (0, l.jsxs)(o.Menu, {
                    navId: "clips-export",
                    "aria-label": M.default.Messages.CLIPS_EDIT_EXPORT,
                    onClose: t,
                    onSelect: t,
                    children: [i ? (0, l.jsx)(o.MenuItem, {
                        icon: C.default,
                        id: "clips-export-soundboard",
                        label: M.default.Messages.CLIPS_EXPORT_TO_SOUNDBOARD,
                        action: n
                    }) : null, (0, l.jsx)(o.MenuItem, {
                        icon: x.default,
                        id: "clips-export-file",
                        label: M.default.Messages.CLIPS_EXPORT_TO_FILE,
                        action: a
                    })]
                })
            }

            function P(e) {
                let {
                    clip: t,
                    cropData: i,
                    channelId: s,
                    clipName: v,
                    voiceAudioEnabled: C,
                    applicationAudioEnabled: P,
                    onSetClipName: b,
                    onChangeVoiceAudioEnabled: D,
                    onChangeApplicationAudioEnabled: w,
                    onClose: O
                } = e, [k, y] = n.useState(null), {
                    onShareClick: F,
                    canAttachFiles: G
                } = (0, g.default)({
                    channelId: s,
                    setExporting: e => y(null != e ? "share" : null)
                });
                async function B() {
                    let e = m.default.getChannel(s);
                    y("export");
                    try {
                        let n = await (0, _.exportClip)(t, {
                            ...i,
                            applicationAudio: P,
                            voiceAudio: C
                        });
                        O(), (0, o.openModalLazy)(async () => {
                            let {
                                default: i
                            } = await a.el("823749").then(a.bind(a, "823749")), r = (null == e ? void 0 : e.guild_id) != null ? f.default.getGuild(e.guild_id) : null, s = null != r && (0, c.getManageResourcePermissions)(r, E.default, p.default).canCreateExpressions, u = null == v || "" === v ? (0, L.CLIP_NAME_TEMPLATE)(S.default.extractTimestamp(t.id)) : v;
                            return t => (0, l.jsx)(i, {
                                ...t,
                                showGuildPicker: !0,
                                guildId: s ? null == e ? void 0 : e.guild_id : void 0,
                                sourceFile: {
                                    file: new File([n], "".concat(u, ".mp4"), {
                                        type: "video/mp4"
                                    }),
                                    name: u
                                }
                            })
                        })
                    } catch (e) {} finally {
                        y(null)
                    }
                }
                async function U() {
                    y("export");
                    try {
                        let e = await (0, _.exportClip)(t, {
                                ...i,
                                applicationAudio: P,
                                voiceAudio: C
                            }),
                            a = await e.arrayBuffer();
                        await d.default.fileManager.saveWithDialog(j.from(a), (0, L.CLIPS_EXPORT_FILENAME)(t.id))
                    } catch (e) {} finally {
                        y(null)
                    }
                }

                function V() {
                    (0, o.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("386092").then(a.bind(a, "386092"));
                        return a => (0, l.jsx)(e, {
                            clip: t,
                            ...a,
                            onDelete: async () => {
                                await a.onClose(), O()
                            }
                        })
                    })
                }
                return (0, l.jsxs)("div", {
                    className: A.clipForm,
                    children: [(0, l.jsxs)("div", {
                        className: r(A.clipFormSection, A.editSection),
                        children: [(0, l.jsx)(o.FormItem, {
                            className: A.clipFormItem,
                            title: M.default.Messages.CLIPS_EDIT_TITLE,
                            children: (0, l.jsx)(o.TextInput, {
                                onChange: e => {
                                    "" === e ? b(void 0) : b(e)
                                },
                                value: v,
                                minLength: L.CLIP_NAME_MIN_CHAR_LENGTH,
                                maxLength: L.CLIP_NAME_MAX_CHAR_LENGTH,
                                placeholder: M.default.Messages.CLIPS_UNTITLED
                            })
                        }), (0, l.jsxs)("div", {
                            className: A.clipFormSwitches,
                            children: [(0, l.jsx)(o.FormSwitch, {
                                onChange: w,
                                value: P,
                                hideBorder: !0,
                                children: M.default.Messages.CLIPS_EDIT_GAME_AUDIO
                            }), (0, l.jsx)(o.FormSwitch, {
                                onChange: D,
                                value: C,
                                hideBorder: !0,
                                children: M.default.Messages.CLIPS_EDIT_VOICE_CHANNEL_AUDIO
                            })]
                        })]
                    }), (0, l.jsxs)("div", {
                        className: r(A.clipFormSection, A.metadataSection),
                        children: [(0, l.jsx)(I.default, {
                            clip: t
                        }), (0, l.jsx)(T.default, {
                            className: A.userList,
                            clip: t
                        })]
                    }), (0, l.jsxs)("div", {
                        className: A.clipFormFooter,
                        children: [(0, l.jsx)(o.Tooltip, {
                            shouldShow: !G,
                            text: M.default.Messages.CLIPS_CANNOT_ATTACH_FILE_TO_CHANNEL,
                            children: e => (0, l.jsx)(o.Button, {
                                ...e,
                                submitting: "share" === k,
                                disabled: !G || null != k && "share" !== k,
                                color: o.Button.Colors.BRAND,
                                wrapperClassName: A.clipFormFooterPrimaryButton,
                                onClick: () => F({
                                    clip: {
                                        ...t,
                                        name: v
                                    },
                                    applicationAudioEnabled: P,
                                    voiceAudioEnabled: C,
                                    onShareComplete: () => {
                                        u.closeModal(L.CLIPS_EDIT_MODAL_KEY), u.closeModal(L.CLIPS_GALLERY_MODAL_KEY)
                                    }
                                }),
                                children: M.default.Messages.CLIPS_EDIT_SHARE_CLIP
                            })
                        }), (0, l.jsx)(o.Tooltip, {
                            text: M.default.Messages.SAVE_CHANGES,
                            children: e => (0, l.jsx)(o.Button, {
                                ...e,
                                size: o.Button.Sizes.ICON,
                                className: A.clipFormFooterButton,
                                disabled: null != k,
                                wrapperClassName: r(A.clipFormFooterButton, {
                                    [A.submittingWrapperFix]: null != k
                                }),
                                color: o.Button.Colors.PRIMARY,
                                onClick: O,
                                children: (0, l.jsx)(h.default, {})
                            })
                        }), (0, l.jsx)(o.Popout, {
                            position: "top",
                            renderPopout: e => (0, l.jsx)(R, {
                                ...e,
                                channelId: s,
                                onExportToFile: U,
                                onExportToSoundboard: B
                            }),
                            children: (e, t) => {
                                let {
                                    isShown: a
                                } = t;
                                return (0, l.jsx)(o.Tooltip, {
                                    text: a ? null : M.default.Messages.CLIPS_EDIT_EXPORT,
                                    children: t => (0, l.jsx)(o.Button, {
                                        ...t,
                                        size: o.Button.Sizes.ICON,
                                        wrapperClassName: r(A.clipFormFooterButton, {
                                            [A.submittingWrapperFix]: null != k
                                        }),
                                        submitting: "export" === k,
                                        disabled: null != k && "export" !== k,
                                        color: o.Button.Colors.PRIMARY,
                                        onClick: a => {
                                            var l, n;
                                            null === (l = t.onClick) || void 0 === l || l.call(t), null === (n = e.onClick) || void 0 === n || n.call(e, a)
                                        },
                                        children: (0, l.jsx)(x.default, {})
                                    })
                                })
                            }
                        }), (0, l.jsx)(o.Tooltip, {
                            text: M.default.Messages.DELETE,
                            children: e => (0, l.jsx)(o.Button, {
                                ...e,
                                size: o.Button.Sizes.ICON,
                                className: A.clipFormFooterButton,
                                wrapperClassName: r(A.clipFormFooterButton, {
                                    [A.submittingWrapperFix]: null != k
                                }),
                                disabled: null != k,
                                color: o.Button.Colors.PRIMARY,
                                onClick: V,
                                children: (0, l.jsx)(N.default, {})
                            })
                        })]
                    })]
                })
            }
        },
        473070: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return C
                }
            });
            var l = a("37983"),
                n = a("884691"),
                i = a("759843"),
                r = a("77078"),
                s = a("477566"),
                u = a("49671"),
                o = a("812204"),
                d = a("685665"),
                c = a("803725"),
                m = a("758946"),
                f = a("99366"),
                E = a("488673"),
                v = a("5431"),
                p = a("464135"),
                h = a("782340"),
                x = a("756458");

            function C(e) {
                var t, a, v, p, C, S, _, g;
                let {
                    clip: I,
                    channelId: T,
                    transitionState: L,
                    onClose: M
                } = e, [A, j] = n.useState(!0), [R, P] = n.useState(null), [b, D] = n.useState(null), {
                    AnalyticsLocationProvider: w
                } = (0, d.default)(o.default.CLIPS_EDITOR);
                n.useEffect(() => {
                    (async function e() {
                        let e;
                        try {
                            e = await u.default.clips.loadClip(I.filepath)
                        } catch {
                            M(), s.default.show({
                                title: h.default.Messages.CLIPS_LOAD_ERROR_TITLE,
                                body: h.default.Messages.CLIPS_LOAD_ERROR_BODY
                            });
                            return
                        }
                        let t = e.data.buffer,
                            a = await (0, m.createAudioMP4FromVideoMP4)(t),
                            l = URL.createObjectURL(new Blob([a], {
                                type: "audio/mp4"
                            })),
                            n = URL.createObjectURL(new Blob([e.data], {
                                type: "video/mp4"
                            }));
                        D(l), P(n)
                    })()
                }, [I.filepath, M]), n.useEffect(() => () => {
                    null != R && URL.revokeObjectURL(R)
                }, [R]), n.useEffect(() => () => {
                    null != b && URL.revokeObjectURL(b)
                }, [b]);
                let [O, k] = n.useState(null === (C = null === (t = I.editMetadata) || void 0 === t ? void 0 : t.voiceAudio) || void 0 === C || C), [y, F] = n.useState(null === (S = null === (a = I.editMetadata) || void 0 === a ? void 0 : a.applicationAudio) || void 0 === S || S), [G, B] = n.useState({
                    start: null !== (_ = null === (v = I.editMetadata) || void 0 === v ? void 0 : v.start) && void 0 !== _ ? _ : 0,
                    end: null !== (g = null === (p = I.editMetadata) || void 0 === p ? void 0 : p.end) && void 0 !== g ? g : 0
                }), [U, V] = n.useState(I.name), H = n.useRef({
                    name: U,
                    editMetadata: {
                        start: G.start,
                        end: G.end,
                        voiceAudio: O,
                        applicationAudio: y
                    }
                });
                return H.current = {
                    name: U,
                    editMetadata: {
                        start: G.start,
                        end: G.end,
                        voiceAudio: O,
                        applicationAudio: y
                    }
                }, n.useEffect(() => {
                    async function e() {
                        let e = {};
                        null != R && (e = {
                            thumbnail: await (0, f.createThumbnailFromVideo)(R, H.current.editMetadata.start)
                        }), (0, c.updateClipMetadata)(I.id, {
                            ...H.current,
                            ...e
                        })
                    }
                    return () => {
                        e()
                    }
                }, [I.id, R]), (0, l.jsx)(r.ModalRoot, {
                    impression: {
                        impressionName: i.ImpressionNames.CLIP_EDITOR_VIEWED
                    },
                    size: r.ModalSize.DYNAMIC,
                    className: x.modalRoot,
                    transitionState: L,
                    children: (0, l.jsx)(w, {
                        children: (0, l.jsx)(r.ModalContent, {
                            className: x.modalContent,
                            children: null == R || null == b ? (0, l.jsx)("div", {
                                className: x.spinnerContainer,
                                children: (0, l.jsx)(r.Spinner, {})
                            }) : (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(N, {
                                    voiceAudioEnabled: O,
                                    applicationAudioEnabled: y,
                                    videoURL: R,
                                    cropData: G,
                                    onSetCropData: B,
                                    isLoading: A,
                                    onDoneLoading: () => j(!1),
                                    audioURL: b
                                }), !A && (0, l.jsx)(E.default, {
                                    voiceAudioEnabled: O,
                                    channelId: T,
                                    applicationAudioEnabled: y,
                                    onChangeApplicationAudioEnabled: F,
                                    onChangeVoiceAudioEnabled: k,
                                    cropData: G,
                                    onSetClipName: V,
                                    clipName: U,
                                    clip: I,
                                    onClose: M
                                })]
                            })
                        })
                    })
                })
            }

            function N(e) {
                let {
                    cropData: t,
                    onSetCropData: a,
                    voiceAudioEnabled: i,
                    applicationAudioEnabled: r,
                    isLoading: s,
                    onDoneLoading: u,
                    videoURL: o,
                    audioURL: d
                } = e, c = n.useRef(null), m = n.useCallback(() => {
                    var e;
                    null === (e = c.current) || void 0 === e || e.seek(t.start), u()
                }, [u, t.start]);
                return n.useEffect(() => {
                    function e(e) {
                        var a, l;
                        if ((null === (a = document.activeElement) || void 0 === a ? void 0 : a.tagName) === "INPUT") return;
                        let n = c.current;
                        if (null == n) return;
                        let i = null === (l = c.current) || void 0 === l ? void 0 : l.videoElement;
                        if (null == i) return;
                        let r = !1;
                        switch (e.key) {
                            case " ":
                                r = !0, i.paused ? n.play() : n.pause();
                                break;
                            case "ArrowLeft":
                                r = !0, n.seek(Math.max(i.currentTime - i.duration / 30, t.start));
                                break;
                            case "ArrowRight":
                                r = !0, n.seek(Math.min(i.currentTime + i.duration / 30, t.end))
                        }
                        r && (e.stopPropagation(), e.preventDefault())
                    }
                    return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                }, [t.start, t.end]), (0, l.jsxs)("div", {
                    className: x.editorPane,
                    children: [(0, l.jsx)("div", {
                        className: x.videoSizer,
                        children: (0, l.jsx)(v.default, {
                            applicationAudioEnabled: r,
                            voiceAudioEnabled: i,
                            ref: c,
                            audioSrc: d,
                            src: o,
                            isLoading: s,
                            onDoneLoading: m
                        })
                    }), s ? null : (0, l.jsx)(p.default, {
                        videoPlayerRef: c,
                        cropData: t,
                        setCropData: a,
                        sourceURL: o
                    })]
                })
            }
        },
        5431: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var l = a("37983"),
                n = a("884691"),
                i = a("58608"),
                r = a("756458");

            function s(e) {
                let {
                    setRef: t,
                    audioTrackLabel: a,
                    src: i,
                    muted: s
                } = e, u = n.useCallback(e => {
                    t(e, a)
                }, [t, a]), o = n.useCallback(e => {
                    Object.values(e.currentTarget.audioTracks).forEach(e => {
                        e.enabled = a === e.label
                    })
                }, [a]);
                return (0, l.jsx)("audio", {
                    id: "ClipsPlayerAudioTrack:".concat(a),
                    className: r.hidden,
                    ref: u,
                    src: i,
                    loop: !0,
                    muted: s,
                    preload: "auto",
                    onLoadedMetadata: o
                })
            }
            var u = n.forwardRef(function(e, t) {
                let {
                    src: a,
                    audioSrc: u,
                    applicationAudioEnabled: o,
                    voiceAudioEnabled: d,
                    isLoading: c,
                    onDoneLoading: m
                } = e, f = n.useRef({}), [E, v] = n.useState([]), p = n.useCallback(() => {
                    for (let e of Object.values(f.current)) null != e && e.play()
                }, []), h = n.useCallback(() => {
                    for (let e of Object.values(f.current)) null != e && e.pause()
                }, []), x = n.useCallback(e => {
                    for (let t of Object.values(f.current)) null != t && (t.currentTime = e)
                }, []), C = n.useCallback(() => {
                    var e;
                    (null === (e = f.current.main) || void 0 === e ? void 0 : e.paused) ? p(): h()
                }, [p, h]), N = n.useCallback(e => {
                    let t = f.current.main;
                    if (null != t)
                        for (let [a, l] of Object.entries(f.current)) {
                            if ("main" === a || null == l) continue;
                            let n = t.currentTime - l.currentTime;
                            !(.1 >= Math.abs(n)) && (l.currentTime = e.currentTarget.currentTime)
                        }
                }, []), S = n.useCallback(e => {
                    f.current.main = e
                }, []), _ = n.useCallback(e => {
                    let t = [];
                    for (let a of Object.values(e.currentTarget.audioTracks)) a.label.includes(":application") ? a.enabled = !0 : a.label.includes(":voice") ? (a.enabled = !1, !t.includes(a.label) && t.push(a.label)) : a.enabled = !1;
                    v(t)
                }, []), g = n.useCallback((e, t) => {
                    f.current[t] = e
                }, []);
                return (n.useImperativeHandle(t, () => ({
                    play: p,
                    seek: x,
                    pause: h,
                    videoElement: f.current.main
                })), null == a) ? null : (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(i.default, {
                        onClick: C,
                        className: c ? r.hidden : r.displayVideo,
                        ref: S,
                        src: a,
                        muted: !o,
                        onLoadedMetadata: _,
                        onLoadedData: m,
                        onTimeUpdate: N,
                        preload: "auto",
                        loop: !0
                    }), E.map(e => (0, l.jsx)(s, {
                        audioTrackLabel: e,
                        setRef: g,
                        src: u,
                        muted: !d
                    }, e))]
                })
            })
        },
        464135: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return x
                }
            });
            var l = a("37983"),
                n = a("884691"),
                i = a("414456"),
                r = a.n(i),
                s = a("917351"),
                u = a("65597"),
                o = a("77078"),
                d = a("731898"),
                c = a("31695"),
                m = a("471671"),
                f = a("830837"),
                E = a("132755"),
                v = a("58608"),
                p = a("80028"),
                h = a("766825");

            function x(e) {
                var t, a, i, x;
                let {
                    sourceURL: N,
                    cropData: S,
                    videoPlayerRef: _,
                    setCropData: g
                } = e, [I, T] = n.useState((x = !(null === (a = _.current) || void 0 === a ? void 0 : null === (t = a.videoElement) || void 0 === t ? void 0 : t.paused), x)), L = n.useRef(null), [M, A] = n.useState(null), [j, R] = n.useState(), P = n.useRef(null), b = n.useRef(null), [D, w] = n.useState(0), [O, k] = n.useState(!1), [y, F] = n.useState(null);
                (0, c.default)(() => {
                    var e, t;
                    let a = null === (e = _.current) || void 0 === e ? void 0 : e.videoElement;
                    if (null == a) return;
                    let l = (0, s.round)(a.currentTime, 3),
                        n = (0, s.round)(S.start, 3),
                        i = (0, s.round)(S.end, 3);
                    if (I && (l >= i || l < n)) {
                        null === (t = _.current) || void 0 === t || t.seek(S.start), w(S.start);
                        return
                    }
                    D !== l && w(l)
                });
                let G = n.useMemo(() => S.end - S.start, [S]);
                n.useEffect(() => {
                    var e;
                    let t = null === (e = _.current) || void 0 === e ? void 0 : e.videoElement,
                        a = P.current,
                        l = b.current;
                    if (null == t || null == a || null == l) return;
                    let n = () => {
                            A(null), k(!1), T(!0)
                        },
                        i = () => {
                            T(!1)
                        };
                    return t.addEventListener("play", n), t.addEventListener("pause", i), () => {
                        t.removeEventListener("play", n), t.removeEventListener("pause", i)
                    }
                }, [_]);
                let {
                    ref: B,
                    width: U = 0,
                    height: V = 0
                } = (0, d.default)(), H = (0, u.default)([m.default], () => m.default.windowSize());
                n.useMemo(() => {
                    let e = B.current;
                    null != e && F(e.getBoundingClientRect())
                }, [H.width, H.height, U]);
                let z = n.useRef(null),
                    X = n.useRef({}),
                    W = n.useCallback((e, t) => {
                        var a, l, n, i;
                        if (null == j) return;
                        if (null == y) return null;
                        let r = (0, s.clamp)(e, y.left, y.right),
                            u = (r - y.left) / U * j,
                            o = (0, s.clamp)(u, 0, j),
                            d = M;
                        if (null == d && t && (d = o <= S.start ? "start" : o >= S.end ? "end" : "playhead", null === (a = _.current) || void 0 === a || a.pause(), A(d), k(I)), "start" === d) {
                            let e = (0, s.clamp)(o, 0, S.end - p.MIN_CLIP_DURATION_SECONDS);
                            g({
                                ...S,
                                start: e
                            }), null === (l = _.current) || void 0 === l || l.seek(e)
                        } else if ("end" === d) {
                            let e = (0, s.clamp)(o, S.start + p.MIN_CLIP_DURATION_SECONDS, j);
                            g({
                                ...S,
                                end: e
                            }), null === (n = _.current) || void 0 === n || n.seek(e)
                        } else if ("playhead" === d) {
                            let e = (0, s.clamp)(o, S.start, S.end);
                            null === (i = _.current) || void 0 === i || i.seek(e)
                        }
                    }, [j, y, U, M, S, _, I, g]),
                    Y = n.useCallback(e => {
                        W(e.clientX, !0)
                    }, [W]),
                    K = n.useCallback(e => {
                        W(e.clientX, !1)
                    }, [W]),
                    q = n.useCallback(() => {
                        if (O) {
                            var e;
                            null === (e = _.current) || void 0 === e || e.play()
                        }
                        k(!1), A(null)
                    }, [_, O]);
                n.useEffect(() => (document.addEventListener("mousemove", K), document.addEventListener("mouseup", q), () => {
                    document.removeEventListener("mousemove", K), document.removeEventListener("mouseup", q)
                }), [K, q]), n.useEffect(() => {
                    (async function e() {
                        var e;
                        let t = B.current,
                            a = L.current;
                        if (null == t || null == a || null == j) return;
                        t.height = V, t.width = U;
                        let l = t.getContext("2d");
                        if (null == l) return;
                        l.fillStyle = "#000", l.fillRect(0, 0, U, V);
                        let n = a.videoWidth / a.videoHeight,
                            i = Math.ceil(V * n),
                            r = Math.ceil(U / i),
                            s = z.current;
                        if (null == s) return;
                        s.width = i, s.height = V;
                        let u = null == s ? void 0 : s.getContext("2d", {
                            willReadFrequently: !0
                        });
                        if (null == u) return;
                        let o = X.current;
                        if ((null === (e = o[r]) || void 0 === e ? void 0 : e.length) === r) {
                            for (let e = 0; e < r; e++) l.putImageData(o[r][e], i * e, 0);
                            return
                        }
                        for (let e = 0; e < r; e++) await new Promise(t => {
                            a.onseeked = () => {
                                l.drawImage(a, i * e, 0, i, V), u.drawImage(a, 0, 0, i, V);
                                let n = u.getImageData(0, 0, i, V);
                                null == o[r] && (o[r] = []), o[r][e] = n, t()
                            }, a.currentTime = i / U * j * e
                        })
                    })()
                }, [U, V, B, j, z]);
                let J = D - S.start,
                    Q = null === (i = _.current) || void 0 === i ? void 0 : i.videoElement;
                return (0, l.jsx)("div", {
                    className: h.centeringWrapper,
                    children: (0, l.jsxs)("div", {
                        className: h.timelineContainer,
                        children: [(0, l.jsx)("div", {
                            className: h.playPauseButtonWrapper,
                            children: (0, l.jsx)(o.Clickable, {
                                onClick: () => {
                                    var e, t;
                                    return I ? null === (e = _.current) || void 0 === e ? void 0 : e.pause() : null === (t = _.current) || void 0 === t ? void 0 : t.play()
                                },
                                className: h.playPauseButton,
                                children: I ? (0, l.jsx)(f.default, {
                                    width: 24,
                                    height: 24,
                                    className: h.playPauseIcon
                                }) : (0, l.jsx)(E.default, {
                                    width: 24,
                                    height: 24,
                                    className: h.playPauseIcon
                                })
                            })
                        }), (0, l.jsxs)("div", {
                            className: r(h.timeline, {
                                [h.timelineDragging]: null != M
                            }),
                            onMouseDown: Y,
                            children: [(0, l.jsx)("canvas", {
                                className: h.hiddenCanvas,
                                ref: z
                            }), (0, l.jsx)("canvas", {
                                className: h.timelineBackground,
                                ref: B
                            }), (0, l.jsx)("div", {
                                ref: P,
                                className: h.playhead,
                                style: {
                                    left: null != Q ? "".concat(Q.currentTime / Q.duration * 100, "%") : 0
                                }
                            }), (0, l.jsx)(v.default, {
                                preload: "auto",
                                onLoadedMetadata: function() {
                                    let e = L.current;
                                    if (null != e) {
                                        if (R(e.duration), 0 === S.start && (0 === S.end || S.end === e.duration)) {
                                            var t;
                                            null === (t = _.current) || void 0 === t || t.seek(e.duration / 2), w(e.duration / 2)
                                        }
                                        0 === S.end && g(t => ({
                                            ...t,
                                            end: e.duration
                                        }))
                                    }
                                },
                                className: h.timelineVideo,
                                ref: L,
                                src: N,
                                muted: !0
                            }), (0, l.jsxs)("div", {
                                className: h.dragBox,
                                style: {
                                    left: null != j ? "".concat(S.start / j * 100, "%") : "0",
                                    right: null != j ? "".concat((j - S.end) / j * 100, "%") : "0"
                                },
                                children: [(0, l.jsx)("div", {
                                    className: h.timePillContainer,
                                    children: (0, l.jsx)("div", {
                                        ref: b,
                                        className: h.timePillBackground,
                                        children: (0, l.jsxs)(o.Text, {
                                            variant: "text-sm/normal",
                                            className: h.timePillText,
                                            color: "always-white",
                                            children: [C(J), (0, l.jsx)("span", {
                                                className: h.slashCharacter,
                                                children: " / "
                                            }), C(G)]
                                        })
                                    })
                                }), (0, l.jsx)("div", {
                                    className: r(h.dragHandleLeft, {
                                        [h.dragging]: "start" === M
                                    }),
                                    onMouseDown: Y,
                                    children: (0, l.jsx)("div", {
                                        className: h.cropLeftArrow
                                    })
                                }), (0, l.jsx)("div", {
                                    className: r(h.dragHandleRight, {
                                        [h.dragging]: "end" === M
                                    }),
                                    onMouseDown: Y,
                                    children: (0, l.jsx)("div", {
                                        className: h.cropRightArrow
                                    })
                                })]
                            })]
                        })]
                    })
                })
            }

            function C(e) {
                var t;
                let a, n, i;
                let r = (((t = Math.round(100 * (t = e)) / 100) < 0 || .01 > Math.abs(t)) && (t = 0), a = (a = Math.floor(t / 60)) < 10 ? "0" + a : a, n = (n = Math.floor(t % 60)) < 10 ? "0" + n : n, i = (i = Math.floor(t % 1 * 100)) < 10 ? "0" + i : i, "".concat(a, ":").concat(n, ".").concat(i));
                return r.split("").map((e, t) => (0, l.jsx)("span", {
                    className: ":" === e || "." === e ? h.narrowCharacter : h.fixedWidthCharacter,
                    children: e
                }, t))
            }
        },
        431734: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return h
                }
            });
            var l = a("37983"),
                n = a("884691"),
                i = a("414456"),
                r = a.n(i),
                s = a("446674"),
                u = a("77078"),
                o = a("308289"),
                d = a("697218"),
                c = a("564875"),
                m = a("449008"),
                f = a("387111"),
                E = a("782340"),
                v = a("887642");

            function p(e) {
                let {
                    user: t
                } = e, a = f.default.useName(null, null, t);
                return (0, l.jsxs)("div", {
                    className: v.userItem,
                    children: [(0, l.jsx)(o.default, {
                        user: t
                    }), (0, l.jsx)(u.Text, {
                        color: "header-primary",
                        variant: "text-sm/medium",
                        children: a
                    })]
                })
            }

            function h(e) {
                let {
                    clip: t,
                    className: a
                } = e, i = (0, s.useStateFromStoresArray)([d.default], () => t.users.map(d.default.getUser).filter(m.isNotNullish)), o = n.useCallback(e => {
                    let {
                        row: t
                    } = e, a = i[t];
                    return null == a ? null : (0, l.jsx)(p, {
                        user: a
                    }, t)
                }, [i]);
                return (0, l.jsxs)("div", {
                    className: r(a, v.root),
                    children: [(0, l.jsx)("div", {
                        className: v.header,
                        children: (0, l.jsxs)(u.FormTitle, {
                            className: v.title,
                            children: [E.default.Messages.CLIPS_EDIT_USER_LIST_TITLE, (0, l.jsxs)("div", {
                                className: v.userCountPill,
                                children: [(0, l.jsx)(u.Text, {
                                    color: "text-normal",
                                    variant: "text-xs/medium",
                                    children: i.length
                                }), (0, l.jsx)(c.default, {
                                    className: v.userCountIcon
                                })]
                            })]
                        })
                    }), (0, l.jsx)(u.List, {
                        className: v.userList,
                        sectionHeight: 0,
                        rowHeight: 40,
                        sections: [i.length],
                        renderRow: o
                    })]
                })
            }
        },
        270161: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                CREATE_GUILD_EVENT_CORE_PERMISSIONS: function() {
                    return r
                },
                CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function() {
                    return s
                },
                CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function() {
                    return u
                }
            });
            var l = a("316693"),
                n = a("923510"),
                i = a("49111");
            let r = i.Permissions.VIEW_CHANNEL,
                s = l.default.combine(r, i.Permissions.CONNECT),
                u = l.default.combine(r, n.MODERATE_STAGE_CHANNEL_PERMISSIONS)
        },
        817963: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useManageResourcePermissions: function() {
                    return v
                },
                getManageResourcePermissions: function() {
                    return p
                },
                useHasInventoryGuildSettingsPermission: function() {
                    return h
                }
            });
            var l = a("884691"),
                n = a("316693"),
                i = a("446674"),
                r = a("252931"),
                s = a("813006");
            a("923959");
            var u = a("957255"),
                o = a("697218");
            a("991170");
            var d = a("270161"),
                c = a("843455");
            let m = {
                    canCreateExpressions: !1,
                    canCreateGuildEvent: !1,
                    canManageAllExpressions: !1,
                    canManageAllEvents: !1,
                    canManageGuildExpression: () => !1,
                    canManageGuildEvent: () => !1
                },
                f = (e, t, a, l) => {
                    if (null == e) return !1;
                    if (a) return !0;
                    if ("creator_id" in e) return l && null != t && e.creator_id === t.id;
                    if ("userId" in e) return l && null != t && e.userId === t.id;
                    if ("user" in e) {
                        var n;
                        return l && null != t && (null === (n = e.user) || void 0 === n ? void 0 : n.id) === t.id
                    }
                    return !1
                },
                E = e => {
                    if (null == e) return [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS];
                    let t = d.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
                    return e.isGuildStageVoice() ? t = d.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (t = d.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [n.default.combine(t, c.Permissions.CREATE_EVENTS), n.default.combine(t, c.Permissions.MANAGE_EVENTS)]
                },
                v = e => {
                    let [t, a] = e instanceof s.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : E(e), [n, r, d, v] = (0, i.useStateFromStoresArray)([u.default], () => [u.default.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e), u.default.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e), u.default.can(t, e), u.default.can(a, e)]), p = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser()), h = l.useCallback(e => f(e, p, r, n), [n, r, p]), x = l.useCallback(e => f(e, p, v, d), [v, d, p]);
                    return null == e ? m : {
                        canCreateExpressions: n,
                        canCreateGuildEvent: d,
                        canManageAllExpressions: r,
                        canManageAllEvents: v,
                        canManageGuildExpression: h,
                        canManageGuildEvent: x
                    }
                },
                p = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default,
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.default,
                        [l, n] = e instanceof s.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : E(e),
                        i = t.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                        r = t.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                        d = t.can(l, e),
                        v = t.can(n, e),
                        p = a.getCurrentUser();
                    return null == e ? m : {
                        canCreateExpressions: i,
                        canCreateGuildEvent: d,
                        canManageAllExpressions: r,
                        canManageAllEvents: v,
                        canManageGuildExpression: e => f(e, p, r, i),
                        canManageGuildEvent: e => f(e, p, v, d)
                    }
                },
                h = e => {
                    let t = (0, i.useStateFromStores)([u.default], () => u.default.can(c.Permissions.MANAGE_GUILD, e)),
                        {
                            showSettingsToggle: a
                        } = (0, r.useInventoryGuildSettingsExperiment)({
                            guildId: null == e ? void 0 : e.id
                        });
                    return t && a
                }
        }
    }
]);
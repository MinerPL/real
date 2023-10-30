(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["97203"], {
        295544: function(e, t, l) {
            "use strict";
            e.exports = l.p + "e866c0682a80de08f451.svg"
        },
        195272: function(e, t, l) {
            "use strict";
            e.exports = l.p + "e69c6ba7f0551970b560.svg"
        },
        907572: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                FriendsIcon: function() {
                    return r
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("669491"),
                i = l("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: r = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, i.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM3 5v-.75C3 3.56 3.56 3 4.25 3s1.242.562 1.326 1.248C6.117 8.649 9.462 12 13 12h1a8 8 0 0 1 8 8 2 2 0 0 1-2 2 .21.21 0 0 1-.199-.147c-.289-.885-.841-1.723-1.317-2.31-.15-.184-.423-.056-.394.18l.25 1.996a.25.25 0 0 1-.248.281H9a2 2 0 0 1-2-2v-2.22c0-1.574-.671-3.054-1.53-4.374C3.888 10.969 3 7.888 3 5Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        292915: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                SoundboardIcon: function() {
                    return r
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("669491"),
                i = l("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: r = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, i.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M14.243 1.03a1 1 0 0 1 .727 1.213l-1 4a1 1 0 0 1-1.94-.486l1-4a1 1 0 0 1 1.213-.727Zm6.464 3.677a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 1.414 1.414l4-4Zm-6.867 12.03c-.33-1.212-1.172-2.69-2.53-4.047-1.357-1.358-2.835-2.2-4.046-2.53-1.275-.348-1.828-.052-1.992.112-.164.163-.46.717-.112 1.992.33 1.211 1.172 2.689 2.53 4.046 1.358 1.358 2.835 2.2 4.046 2.53 1.275.348 1.829.052 1.992-.112.164-.164.46-.717.112-1.992Zm1.303 3.406c1.78-1.781.698-5.751-2.419-8.867-3.116-3.117-7.086-4.2-8.867-2.419-.542.542-.818 1.287-.853 2.149L3 11l-1.164 8.922a2 2 0 0 0 2.242 2.242L13 21l-.006-.004c.862-.035 1.607-.311 2.149-.853ZM7.05 3.316a1 1 0 0 1 1.898-.632l1 3a1 1 0 1 1-1.898.632l-1-3Zm15.92 6.441a1 1 0 0 0-1.213-.727l-4 1a1 1 0 1 0 .485 1.94l4-1a1 1 0 0 0 .727-1.213Zm-2.287 7.192a1 1 0 0 0 .632-1.898l-3-1a1 1 0 0 0-.632 1.898l3 1Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        758946: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                createAudioMP4FromVideoMP4: function() {
                    return n
                }
            });
            var a = l("547757");
            async function n(e) {
                let t = a.createFile(),
                    l = new Promise(e => {
                        t.onReady = e
                    });
                return e.fileStart = 0, t.appendBuffer(e), t.flush(), await l, t.moov.boxes = t.moov.boxes.filter(e => !("trak" === e.type && "vide" === e.mdia.hdlr.handler)), t.getBuffer()
            }
        },
        643290: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            });
            var a = l("37983"),
                n = l("884691"),
                i = l("446674"),
                r = l("77078"),
                s = l("915639"),
                u = l("546463"),
                o = l("953109"),
                d = l("299039"),
                c = l("782340"),
                f = l("258818");

            function m(e) {
                var t, l;
                let {
                    clip: m
                } = e, v = (0, i.useStateFromStores)([u.default], () => u.default.getGame(null !== (t = m.applicationId) && void 0 !== t ? t : "")), p = (0, i.useStateFromStores)([s.default], () => s.default.locale), E = n.useMemo(() => new Date(d.default.extractTimestamp(m.id)), [m.id]);
                return (0, a.jsxs)("div", {
                    className: f.root,
                    children: [(0, a.jsxs)("div", {
                        className: f.nameSection,
                        children: [(0, a.jsx)(o.default, {
                            game: v
                        }), (0, a.jsx)(r.Text, {
                            className: f.name,
                            variant: "text-md/medium",
                            color: "interactive-active",
                            children: null !== (l = null == v ? void 0 : v.name) && void 0 !== l ? l : m.applicationName
                        })]
                    }), (0, a.jsxs)("div", {
                        className: f.timeContainer,
                        children: [(0, a.jsxs)("div", {
                            children: [(0, a.jsx)(r.FormTitle, {
                                className: f.timeTitle,
                                children: c.default.Messages.CLIPS_EDIT_DATE_TITLE
                            }), (0, a.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                color: "interactive-active",
                                children: E.toLocaleDateString(p, {
                                    year: "2-digit",
                                    month: "2-digit",
                                    day: "2-digit"
                                })
                            })]
                        }), (0, a.jsxs)("div", {
                            children: [(0, a.jsx)(r.FormTitle, {
                                className: f.timeTitle,
                                children: c.default.Messages.CLIPS_EDIT_TIME_TITLE
                            }), (0, a.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                color: "interactive-active",
                                children: E.toLocaleTimeString(p, {
                                    hour: "numeric",
                                    minute: "numeric"
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        488673: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return P
                }
            });
            var a = l("37983"),
                n = l("884691"),
                i = l("414456"),
                r = l.n(i),
                s = l("65597"),
                u = l("551042"),
                o = l("77078"),
                d = l("49671"),
                c = l("817963"),
                f = l("42203"),
                m = l("305961"),
                v = l("957255"),
                p = l("677099"),
                E = l("697218"),
                h = l("36694"),
                C = l("195812"),
                x = l("754576"),
                N = l("228220"),
                g = l("299039"),
                I = l("803725"),
                _ = l("142485"),
                S = l("643290"),
                L = l("431734"),
                T = l("80028"),
                M = l("782340"),
                j = l("515597"),
                A = l("446825").Buffer;

            function R(e) {
                let {
                    closePopout: t,
                    onExportToFile: l,
                    onExportToSoundboard: n
                } = e, i = (0, s.default)([p.default, v.default, E.default, m.default], () => p.default.getFlattenedGuildIds().some(e => {
                    let t = m.default.getGuild(e);
                    if (null == t) return !1;
                    let l = (0, c.getManageResourcePermissions)(t, v.default, E.default);
                    return l.canCreateExpressions
                }));
                return (0, a.jsxs)(o.Menu, {
                    navId: "clips-export",
                    "aria-label": M.default.Messages.CLIPS_EDIT_EXPORT,
                    onClose: t,
                    onSelect: t,
                    children: [i ? (0, a.jsx)(o.MenuItem, {
                        icon: x.default,
                        id: "clips-export-soundboard",
                        label: M.default.Messages.CLIPS_EXPORT_TO_SOUNDBOARD,
                        action: n
                    }) : null, (0, a.jsx)(o.MenuItem, {
                        icon: C.default,
                        id: "clips-export-file",
                        label: M.default.Messages.CLIPS_EXPORT_TO_FILE,
                        action: l
                    })]
                })
            }

            function P(e) {
                let {
                    clip: t,
                    cropData: i,
                    channelId: s,
                    clipName: p,
                    voiceAudioEnabled: x,
                    applicationAudioEnabled: P,
                    onSetClipName: b,
                    onChangeVoiceAudioEnabled: w,
                    onChangeApplicationAudioEnabled: D,
                    onClose: O
                } = e, [y, k] = n.useState(null), {
                    onShareClick: F,
                    canAttachFiles: G
                } = (0, _.default)({
                    channelId: s,
                    setExporting: e => k(null != e ? "share" : null)
                });
                async function B() {
                    let e = f.default.getChannel(s);
                    k("export");
                    try {
                        let n = await (0, I.exportClip)(t, {
                            ...i,
                            applicationAudio: P,
                            voiceAudio: x
                        });
                        O(), (0, o.openModalLazy)(async () => {
                            let {
                                default: i
                            } = await l.el("823749").then(l.bind(l, "823749")), r = (null == e ? void 0 : e.guild_id) != null ? m.default.getGuild(e.guild_id) : null, s = null != r && (0, c.getManageResourcePermissions)(r, v.default, E.default).canCreateExpressions, u = null == p || "" === p ? (0, T.CLIP_NAME_TEMPLATE)(g.default.extractTimestamp(t.id)) : p;
                            return t => (0, a.jsx)(i, {
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
                        k(null)
                    }
                }
                async function V() {
                    k("export");
                    try {
                        let e = await (0, I.exportClip)(t, {
                                ...i,
                                applicationAudio: P,
                                voiceAudio: x
                            }),
                            l = await e.arrayBuffer();
                        await d.default.fileManager.saveWithDialog(A.from(l), (0, T.CLIPS_EXPORT_FILENAME)(t.id))
                    } catch (e) {} finally {
                        k(null)
                    }
                }

                function U() {
                    (0, o.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await l.el("386092").then(l.bind(l, "386092"));
                        return l => (0, a.jsx)(e, {
                            clip: t,
                            ...l,
                            onDelete: async () => {
                                await l.onClose(), O()
                            }
                        })
                    })
                }
                return (0, a.jsxs)("div", {
                    className: j.clipForm,
                    children: [(0, a.jsxs)("div", {
                        className: r(j.clipFormSection, j.editSection),
                        children: [(0, a.jsx)(o.FormItem, {
                            className: j.clipFormItem,
                            title: M.default.Messages.CLIPS_EDIT_TITLE,
                            children: (0, a.jsx)(o.TextInput, {
                                onChange: e => {
                                    "" === e ? b(void 0) : b(e)
                                },
                                value: p,
                                minLength: T.CLIP_NAME_MIN_CHAR_LENGTH,
                                maxLength: T.CLIP_NAME_MAX_CHAR_LENGTH,
                                placeholder: M.default.Messages.CLIPS_UNTITLED
                            })
                        }), (0, a.jsxs)("div", {
                            className: j.clipFormSwitches,
                            children: [(0, a.jsx)(o.FormSwitch, {
                                onChange: D,
                                value: P,
                                hideBorder: !0,
                                children: M.default.Messages.CLIPS_EDIT_GAME_AUDIO
                            }), (0, a.jsx)(o.FormSwitch, {
                                onChange: w,
                                value: x,
                                hideBorder: !0,
                                children: M.default.Messages.CLIPS_EDIT_VOICE_CHANNEL_AUDIO
                            })]
                        })]
                    }), (0, a.jsxs)("div", {
                        className: r(j.clipFormSection, j.metadataSection),
                        children: [(0, a.jsx)(S.default, {
                            clip: t
                        }), (0, a.jsx)(L.default, {
                            className: j.userList,
                            clip: t
                        })]
                    }), (0, a.jsxs)("div", {
                        className: j.clipFormFooter,
                        children: [(0, a.jsx)(o.Tooltip, {
                            shouldShow: !G,
                            text: M.default.Messages.CLIPS_CANNOT_ATTACH_FILE_TO_CHANNEL,
                            children: e => (0, a.jsx)(o.Button, {
                                ...e,
                                submitting: "share" === y,
                                disabled: !G || null != y && "share" !== y,
                                color: o.Button.Colors.BRAND,
                                wrapperClassName: j.clipFormFooterPrimaryButton,
                                onClick: () => F({
                                    clip: {
                                        ...t,
                                        name: p
                                    },
                                    applicationAudioEnabled: P,
                                    voiceAudioEnabled: x,
                                    onShareComplete: () => {
                                        u.closeModal(T.CLIPS_EDIT_MODAL_KEY), u.closeModal(T.CLIPS_GALLERY_MODAL_KEY)
                                    }
                                }),
                                children: M.default.Messages.CLIPS_EDIT_SHARE_CLIP
                            })
                        }), (0, a.jsx)(o.Tooltip, {
                            text: M.default.Messages.SAVE_CHANGES,
                            children: e => (0, a.jsx)(o.Button, {
                                ...e,
                                size: o.Button.Sizes.ICON,
                                className: j.clipFormFooterButton,
                                disabled: null != y,
                                wrapperClassName: r(j.clipFormFooterButton, {
                                    [j.submittingWrapperFix]: null != y
                                }),
                                color: o.Button.Colors.PRIMARY,
                                onClick: O,
                                children: (0, a.jsx)(h.default, {})
                            })
                        }), (0, a.jsx)(o.Popout, {
                            position: "top",
                            renderPopout: e => (0, a.jsx)(R, {
                                ...e,
                                channelId: s,
                                onExportToFile: V,
                                onExportToSoundboard: B
                            }),
                            children: (e, t) => {
                                let {
                                    isShown: l
                                } = t;
                                return (0, a.jsx)(o.Tooltip, {
                                    text: l ? null : M.default.Messages.CLIPS_EDIT_EXPORT,
                                    children: t => (0, a.jsx)(o.Button, {
                                        ...t,
                                        size: o.Button.Sizes.ICON,
                                        wrapperClassName: r(j.clipFormFooterButton, {
                                            [j.submittingWrapperFix]: null != y
                                        }),
                                        submitting: "export" === y,
                                        disabled: null != y && "export" !== y,
                                        color: o.Button.Colors.PRIMARY,
                                        onClick: l => {
                                            var a, n;
                                            null === (a = t.onClick) || void 0 === a || a.call(t), null === (n = e.onClick) || void 0 === n || n.call(e, l)
                                        },
                                        children: (0, a.jsx)(C.default, {})
                                    })
                                })
                            }
                        }), (0, a.jsx)(o.Tooltip, {
                            text: M.default.Messages.DELETE,
                            children: e => (0, a.jsx)(o.Button, {
                                ...e,
                                size: o.Button.Sizes.ICON,
                                className: j.clipFormFooterButton,
                                wrapperClassName: r(j.clipFormFooterButton, {
                                    [j.submittingWrapperFix]: null != y
                                }),
                                disabled: null != y,
                                color: o.Button.Colors.PRIMARY,
                                onClick: U,
                                children: (0, a.jsx)(N.default, {})
                            })
                        })]
                    })]
                })
            }
        },
        473070: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return x
                }
            });
            var a = l("37983"),
                n = l("884691"),
                i = l("759843"),
                r = l("77078"),
                s = l("477566"),
                u = l("49671"),
                o = l("812204"),
                d = l("685665"),
                c = l("803725"),
                f = l("758946"),
                m = l("99366"),
                v = l("488673"),
                p = l("5431"),
                E = l("464135"),
                h = l("782340"),
                C = l("756458");

            function x(e) {
                var t, l, p, E, x, g, I, _;
                let {
                    clip: S,
                    channelId: L,
                    transitionState: T,
                    onClose: M
                } = e, [j, A] = n.useState(!0), [R, P] = n.useState(null), [b, w] = n.useState(null), {
                    AnalyticsLocationProvider: D
                } = (0, d.default)(o.default.CLIPS_EDITOR);
                n.useEffect(() => {
                    (async function e() {
                        let e;
                        try {
                            e = await u.default.clips.loadClip(S.filepath)
                        } catch {
                            M(), s.default.show({
                                title: h.default.Messages.CLIPS_LOAD_ERROR_TITLE,
                                body: h.default.Messages.CLIPS_LOAD_ERROR_BODY
                            });
                            return
                        }
                        let t = e.data.buffer,
                            l = await (0, f.createAudioMP4FromVideoMP4)(t),
                            a = URL.createObjectURL(new Blob([l], {
                                type: "audio/mp4"
                            })),
                            n = URL.createObjectURL(new Blob([e.data], {
                                type: "video/mp4"
                            }));
                        w(a), P(n)
                    })()
                }, [S.filepath, M]), n.useEffect(() => () => {
                    null != R && URL.revokeObjectURL(R)
                }, [R]), n.useEffect(() => () => {
                    null != b && URL.revokeObjectURL(b)
                }, [b]);
                let [O, y] = n.useState(null === (x = null === (t = S.editMetadata) || void 0 === t ? void 0 : t.voiceAudio) || void 0 === x || x), [k, F] = n.useState(null === (g = null === (l = S.editMetadata) || void 0 === l ? void 0 : l.applicationAudio) || void 0 === g || g), [G, B] = n.useState({
                    start: null !== (I = null === (p = S.editMetadata) || void 0 === p ? void 0 : p.start) && void 0 !== I ? I : 0,
                    end: null !== (_ = null === (E = S.editMetadata) || void 0 === E ? void 0 : E.end) && void 0 !== _ ? _ : 0
                }), [V, U] = n.useState(S.name), H = n.useRef({
                    name: V,
                    editMetadata: {
                        start: G.start,
                        end: G.end,
                        voiceAudio: O,
                        applicationAudio: k
                    }
                });
                return H.current = {
                    name: V,
                    editMetadata: {
                        start: G.start,
                        end: G.end,
                        voiceAudio: O,
                        applicationAudio: k
                    }
                }, n.useEffect(() => {
                    async function e() {
                        let e = {};
                        null != R && (e = {
                            thumbnail: await (0, m.createThumbnailFromVideo)(R, H.current.editMetadata.start)
                        }), (0, c.updateClipMetadata)(S.id, {
                            ...H.current,
                            ...e
                        })
                    }
                    return () => {
                        e()
                    }
                }, [S.id, R]), (0, a.jsx)(r.ModalRoot, {
                    impression: {
                        impressionName: i.ImpressionNames.CLIP_EDITOR_VIEWED
                    },
                    size: r.ModalSize.DYNAMIC,
                    className: C.modalRoot,
                    transitionState: T,
                    children: (0, a.jsx)(D, {
                        children: (0, a.jsx)(r.ModalContent, {
                            className: C.modalContent,
                            children: null == R || null == b ? (0, a.jsx)("div", {
                                className: C.spinnerContainer,
                                children: (0, a.jsx)(r.Spinner, {})
                            }) : (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(N, {
                                    voiceAudioEnabled: O,
                                    applicationAudioEnabled: k,
                                    videoURL: R,
                                    cropData: G,
                                    onSetCropData: B,
                                    isLoading: j,
                                    onDoneLoading: () => A(!1),
                                    audioURL: b
                                }), !j && (0, a.jsx)(v.default, {
                                    voiceAudioEnabled: O,
                                    channelId: L,
                                    applicationAudioEnabled: k,
                                    onChangeApplicationAudioEnabled: F,
                                    onChangeVoiceAudioEnabled: y,
                                    cropData: G,
                                    onSetClipName: U,
                                    clipName: V,
                                    clip: S,
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
                    onSetCropData: l,
                    voiceAudioEnabled: i,
                    applicationAudioEnabled: r,
                    isLoading: s,
                    onDoneLoading: u,
                    videoURL: o,
                    audioURL: d
                } = e, c = n.useRef(null), f = n.useCallback(() => {
                    var e;
                    null === (e = c.current) || void 0 === e || e.seek(t.start), u()
                }, [u, t.start]);
                return n.useEffect(() => {
                    function e(e) {
                        var l, a;
                        if ((null === (l = document.activeElement) || void 0 === l ? void 0 : l.tagName) === "INPUT") return;
                        let n = c.current;
                        if (null == n) return;
                        let i = null === (a = c.current) || void 0 === a ? void 0 : a.videoElement;
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
                }, [t.start, t.end]), (0, a.jsxs)("div", {
                    className: C.editorPane,
                    children: [(0, a.jsx)("div", {
                        className: C.videoSizer,
                        children: (0, a.jsx)(p.default, {
                            applicationAudioEnabled: r,
                            voiceAudioEnabled: i,
                            ref: c,
                            audioSrc: d,
                            src: o,
                            isLoading: s,
                            onDoneLoading: f
                        })
                    }), s ? null : (0, a.jsx)(E.default, {
                        videoPlayerRef: c,
                        cropData: t,
                        setCropData: l,
                        sourceURL: o
                    })]
                })
            }
        },
        5431: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var a = l("37983"),
                n = l("884691"),
                i = l("58608"),
                r = l("756458");

            function s(e) {
                let {
                    setRef: t,
                    audioTrackLabel: l,
                    src: i,
                    muted: s
                } = e, u = n.useCallback(e => {
                    t(e, l)
                }, [t, l]), o = n.useCallback(e => {
                    Object.values(e.currentTarget.audioTracks).forEach(e => {
                        e.enabled = l === e.label
                    })
                }, [l]);
                return (0, a.jsx)("audio", {
                    id: "ClipsPlayerAudioTrack:".concat(l),
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
                    src: l,
                    audioSrc: u,
                    applicationAudioEnabled: o,
                    voiceAudioEnabled: d,
                    isLoading: c,
                    onDoneLoading: f
                } = e, m = n.useRef({}), [v, p] = n.useState([]), E = n.useCallback(() => {
                    for (let e of Object.values(m.current)) null != e && e.play()
                }, []), h = n.useCallback(() => {
                    for (let e of Object.values(m.current)) null != e && e.pause()
                }, []), C = n.useCallback(e => {
                    for (let t of Object.values(m.current)) null != t && (t.currentTime = e)
                }, []), x = n.useCallback(() => {
                    var e;
                    (null === (e = m.current.main) || void 0 === e ? void 0 : e.paused) ? E(): h()
                }, [E, h]), N = n.useCallback(e => {
                    let t = m.current.main;
                    if (null != t)
                        for (let [l, a] of Object.entries(m.current)) {
                            if ("main" === l || null == a) continue;
                            let n = t.currentTime - a.currentTime;
                            !(.1 >= Math.abs(n)) && (a.currentTime = e.currentTarget.currentTime)
                        }
                }, []), g = n.useCallback(e => {
                    m.current.main = e
                }, []), I = n.useCallback(e => {
                    let t = [];
                    for (let l of Object.values(e.currentTarget.audioTracks)) l.label.includes(":application") ? l.enabled = !0 : l.label.includes(":voice") ? (l.enabled = !1, !t.includes(l.label) && t.push(l.label)) : l.enabled = !1;
                    p(t)
                }, []), _ = n.useCallback((e, t) => {
                    m.current[t] = e
                }, []);
                return (n.useImperativeHandle(t, () => ({
                    play: E,
                    seek: C,
                    pause: h,
                    videoElement: m.current.main
                })), null == l) ? null : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(i.default, {
                        onClick: x,
                        className: c ? r.hidden : r.displayVideo,
                        ref: g,
                        src: l,
                        muted: !o,
                        onLoadedMetadata: I,
                        onLoadedData: f,
                        onTimeUpdate: N,
                        preload: "auto",
                        loop: !0
                    }), v.map(e => (0, a.jsx)(s, {
                        audioTrackLabel: e,
                        setRef: _,
                        src: u,
                        muted: !d
                    }, e))]
                })
            })
        },
        464135: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return C
                }
            });
            var a = l("37983"),
                n = l("884691"),
                i = l("414456"),
                r = l.n(i),
                s = l("917351"),
                u = l("65597"),
                o = l("77078"),
                d = l("731898"),
                c = l("31695"),
                f = l("471671"),
                m = l("830837"),
                v = l("132755"),
                p = l("58608"),
                E = l("80028"),
                h = l("766825");

            function C(e) {
                var t, l, i, C;
                let {
                    sourceURL: N,
                    cropData: g,
                    videoPlayerRef: I,
                    setCropData: _
                } = e, [S, L] = n.useState((C = !(null === (l = I.current) || void 0 === l ? void 0 : null === (t = l.videoElement) || void 0 === t ? void 0 : t.paused), C)), T = n.useRef(null), [M, j] = n.useState(null), [A, R] = n.useState(), P = n.useRef(null), b = n.useRef(null), [w, D] = n.useState(0), [O, y] = n.useState(!1), [k, F] = n.useState(null);
                (0, c.default)(() => {
                    var e, t;
                    let l = null === (e = I.current) || void 0 === e ? void 0 : e.videoElement;
                    if (null == l) return;
                    let a = (0, s.round)(l.currentTime, 3),
                        n = (0, s.round)(g.start, 3),
                        i = (0, s.round)(g.end, 3);
                    if (S && (a >= i || a < n)) {
                        null === (t = I.current) || void 0 === t || t.seek(g.start), D(g.start);
                        return
                    }
                    w !== a && D(a)
                });
                let G = n.useMemo(() => g.end - g.start, [g]);
                n.useEffect(() => {
                    var e;
                    let t = null === (e = I.current) || void 0 === e ? void 0 : e.videoElement,
                        l = P.current,
                        a = b.current;
                    if (null == t || null == l || null == a) return;
                    let n = () => {
                            j(null), y(!1), L(!0)
                        },
                        i = () => {
                            L(!1)
                        };
                    return t.addEventListener("play", n), t.addEventListener("pause", i), () => {
                        t.removeEventListener("play", n), t.removeEventListener("pause", i)
                    }
                }, [I]);
                let {
                    ref: B,
                    width: V = 0,
                    height: U = 0
                } = (0, d.default)(), H = (0, u.default)([f.default], () => f.default.windowSize());
                n.useMemo(() => {
                    let e = B.current;
                    null != e && F(e.getBoundingClientRect())
                }, [H.width, H.height, V]);
                let Z = n.useRef(null),
                    z = n.useRef({}),
                    X = n.useCallback((e, t) => {
                        var l, a, n, i;
                        if (null == A) return;
                        if (null == k) return null;
                        let r = (0, s.clamp)(e, k.left, k.right),
                            u = (r - k.left) / V * A,
                            o = (0, s.clamp)(u, 0, A),
                            d = M;
                        if (null == d && t && (d = o <= g.start ? "start" : o >= g.end ? "end" : "playhead", null === (l = I.current) || void 0 === l || l.pause(), j(d), y(S)), "start" === d) {
                            let e = (0, s.clamp)(o, 0, g.end - E.MIN_CLIP_DURATION_SECONDS);
                            _({
                                ...g,
                                start: e
                            }), null === (a = I.current) || void 0 === a || a.seek(e)
                        } else if ("end" === d) {
                            let e = (0, s.clamp)(o, g.start + E.MIN_CLIP_DURATION_SECONDS, A);
                            _({
                                ...g,
                                end: e
                            }), null === (n = I.current) || void 0 === n || n.seek(e)
                        } else if ("playhead" === d) {
                            let e = (0, s.clamp)(o, g.start, g.end);
                            null === (i = I.current) || void 0 === i || i.seek(e)
                        }
                    }, [A, k, V, M, g, I, S, _]),
                    W = n.useCallback(e => {
                        X(e.clientX, !0)
                    }, [X]),
                    Y = n.useCallback(e => {
                        X(e.clientX, !1)
                    }, [X]),
                    K = n.useCallback(() => {
                        if (O) {
                            var e;
                            null === (e = I.current) || void 0 === e || e.play()
                        }
                        y(!1), j(null)
                    }, [I, O]);
                n.useEffect(() => (document.addEventListener("mousemove", Y), document.addEventListener("mouseup", K), () => {
                    document.removeEventListener("mousemove", Y), document.removeEventListener("mouseup", K)
                }), [Y, K]), n.useEffect(() => {
                    (async function e() {
                        var e;
                        let t = B.current,
                            l = T.current;
                        if (null == t || null == l || null == A) return;
                        t.height = U, t.width = V;
                        let a = t.getContext("2d");
                        if (null == a) return;
                        a.fillStyle = "#000", a.fillRect(0, 0, V, U);
                        let n = l.videoWidth / l.videoHeight,
                            i = Math.ceil(U * n),
                            r = Math.ceil(V / i),
                            s = Z.current;
                        if (null == s) return;
                        s.width = i, s.height = U;
                        let u = null == s ? void 0 : s.getContext("2d", {
                            willReadFrequently: !0
                        });
                        if (null == u) return;
                        let o = z.current;
                        if ((null === (e = o[r]) || void 0 === e ? void 0 : e.length) === r) {
                            for (let e = 0; e < r; e++) a.putImageData(o[r][e], i * e, 0);
                            return
                        }
                        for (let e = 0; e < r; e++) await new Promise(t => {
                            l.onseeked = () => {
                                a.drawImage(l, i * e, 0, i, U), u.drawImage(l, 0, 0, i, U);
                                let n = u.getImageData(0, 0, i, U);
                                null == o[r] && (o[r] = []), o[r][e] = n, t()
                            }, l.currentTime = i / V * A * e
                        })
                    })()
                }, [V, U, B, A, Z]);
                let q = w - g.start,
                    J = null === (i = I.current) || void 0 === i ? void 0 : i.videoElement;
                return (0, a.jsx)("div", {
                    className: h.centeringWrapper,
                    children: (0, a.jsxs)("div", {
                        className: h.timelineContainer,
                        children: [(0, a.jsx)("div", {
                            className: h.playPauseButtonWrapper,
                            children: (0, a.jsx)(o.Clickable, {
                                onClick: () => {
                                    var e, t;
                                    return S ? null === (e = I.current) || void 0 === e ? void 0 : e.pause() : null === (t = I.current) || void 0 === t ? void 0 : t.play()
                                },
                                className: h.playPauseButton,
                                children: S ? (0, a.jsx)(m.default, {
                                    width: 24,
                                    height: 24,
                                    className: h.playPauseIcon
                                }) : (0, a.jsx)(v.default, {
                                    width: 24,
                                    height: 24,
                                    className: h.playPauseIcon
                                })
                            })
                        }), (0, a.jsxs)("div", {
                            className: r(h.timeline, {
                                [h.timelineDragging]: null != M
                            }),
                            onMouseDown: W,
                            children: [(0, a.jsx)("canvas", {
                                className: h.hiddenCanvas,
                                ref: Z
                            }), (0, a.jsx)("canvas", {
                                className: h.timelineBackground,
                                ref: B
                            }), (0, a.jsx)("div", {
                                ref: P,
                                className: h.playhead,
                                style: {
                                    left: null != J ? "".concat(J.currentTime / J.duration * 100, "%") : 0
                                }
                            }), (0, a.jsx)(p.default, {
                                preload: "auto",
                                onLoadedMetadata: function() {
                                    let e = T.current;
                                    if (null != e) {
                                        if (R(e.duration), 0 === g.start && (0 === g.end || g.end === e.duration)) {
                                            var t;
                                            null === (t = I.current) || void 0 === t || t.seek(e.duration / 2), D(e.duration / 2)
                                        }
                                        0 === g.end && _(t => ({
                                            ...t,
                                            end: e.duration
                                        }))
                                    }
                                },
                                className: h.timelineVideo,
                                ref: T,
                                src: N,
                                muted: !0
                            }), (0, a.jsxs)("div", {
                                className: h.dragBox,
                                style: {
                                    left: null != A ? "".concat(g.start / A * 100, "%") : "0",
                                    right: null != A ? "".concat((A - g.end) / A * 100, "%") : "0"
                                },
                                children: [(0, a.jsx)("div", {
                                    className: h.timePillContainer,
                                    children: (0, a.jsx)("div", {
                                        ref: b,
                                        className: h.timePillBackground,
                                        children: (0, a.jsxs)(o.Text, {
                                            variant: "text-sm/normal",
                                            className: h.timePillText,
                                            color: "always-white",
                                            children: [x(q), (0, a.jsx)("span", {
                                                className: h.slashCharacter,
                                                children: " / "
                                            }), x(G)]
                                        })
                                    })
                                }), (0, a.jsx)("div", {
                                    className: r(h.dragHandleLeft, {
                                        [h.dragging]: "start" === M
                                    }),
                                    onMouseDown: W,
                                    children: (0, a.jsx)("div", {
                                        className: h.cropLeftArrow
                                    })
                                }), (0, a.jsx)("div", {
                                    className: r(h.dragHandleRight, {
                                        [h.dragging]: "end" === M
                                    }),
                                    onMouseDown: W,
                                    children: (0, a.jsx)("div", {
                                        className: h.cropRightArrow
                                    })
                                })]
                            })]
                        })]
                    })
                })
            }

            function x(e) {
                var t;
                let l, n, i;
                let r = (((t = Math.round(100 * (t = e)) / 100) < 0 || .01 > Math.abs(t)) && (t = 0), l = (l = Math.floor(t / 60)) < 10 ? "0" + l : l, n = (n = Math.floor(t % 60)) < 10 ? "0" + n : n, i = (i = Math.floor(t % 1 * 100)) < 10 ? "0" + i : i, "".concat(l, ":").concat(n, ".").concat(i));
                return r.split("").map((e, t) => (0, a.jsx)("span", {
                    className: ":" === e || "." === e ? h.narrowCharacter : h.fixedWidthCharacter,
                    children: e
                }, t))
            }
        },
        431734: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return h
                }
            });
            var a = l("37983"),
                n = l("884691"),
                i = l("414456"),
                r = l.n(i),
                s = l("446674"),
                u = l("77078"),
                o = l("308289"),
                d = l("697218"),
                c = l("564875"),
                f = l("449008"),
                m = l("387111"),
                v = l("782340"),
                p = l("887642");

            function E(e) {
                let {
                    user: t
                } = e, l = m.default.useName(null, null, t);
                return (0, a.jsxs)("div", {
                    className: p.userItem,
                    children: [(0, a.jsx)(o.default, {
                        user: t
                    }), (0, a.jsx)(u.Text, {
                        color: "header-primary",
                        variant: "text-sm/medium",
                        children: l
                    })]
                })
            }

            function h(e) {
                let {
                    clip: t,
                    className: l
                } = e, i = (0, s.useStateFromStoresArray)([d.default], () => t.users.map(d.default.getUser).filter(f.isNotNullish)), o = n.useCallback(e => {
                    let {
                        row: t
                    } = e, l = i[t];
                    return null == l ? null : (0, a.jsx)(E, {
                        user: l
                    }, t)
                }, [i]);
                return (0, a.jsxs)("div", {
                    className: r(l, p.root),
                    children: [(0, a.jsx)("div", {
                        className: p.header,
                        children: (0, a.jsxs)(u.FormTitle, {
                            className: p.title,
                            children: [v.default.Messages.CLIPS_EDIT_USER_LIST_TITLE, (0, a.jsxs)("div", {
                                className: p.userCountPill,
                                children: [(0, a.jsx)(u.Text, {
                                    color: "text-normal",
                                    variant: "text-xs/medium",
                                    children: i.length
                                }), (0, a.jsx)(c.default, {
                                    className: p.userCountIcon
                                })]
                            })]
                        })
                    }), (0, a.jsx)(u.List, {
                        className: p.userList,
                        sectionHeight: 0,
                        rowHeight: 40,
                        sections: [i.length],
                        renderRow: o
                    })]
                })
            }
        },
        270161: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
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
            var a = l("316693"),
                n = l("923510"),
                i = l("49111");
            let r = i.Permissions.VIEW_CHANNEL,
                s = a.default.combine(r, i.Permissions.CONNECT),
                u = a.default.combine(r, n.MODERATE_STAGE_CHANNEL_PERMISSIONS)
        },
        817963: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useManageResourcePermissions: function() {
                    return p
                },
                getManageResourcePermissions: function() {
                    return E
                },
                useHasInventoryGuildSettingsPermission: function() {
                    return h
                }
            });
            var a = l("884691"),
                n = l("316693"),
                i = l("446674"),
                r = l("252931"),
                s = l("813006");
            l("923959");
            var u = l("957255"),
                o = l("697218");
            l("991170");
            var d = l("270161"),
                c = l("843455");
            let f = {
                    canCreateExpressions: !1,
                    canCreateGuildEvent: !1,
                    canManageAllExpressions: !1,
                    canManageAllEvents: !1,
                    canManageGuildExpression: () => !1,
                    canManageGuildEvent: () => !1
                },
                m = (e, t, l, a) => {
                    if (null == e) return !1;
                    if (l) return !0;
                    if ("creator_id" in e) return a && null != t && e.creator_id === t.id;
                    if ("userId" in e) return a && null != t && e.userId === t.id;
                    if ("user" in e) {
                        var n;
                        return a && null != t && (null === (n = e.user) || void 0 === n ? void 0 : n.id) === t.id
                    }
                    return !1
                },
                v = e => {
                    if (null == e) return [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS];
                    let t = d.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
                    return e.isGuildStageVoice() ? t = d.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (t = d.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [n.default.combine(t, c.Permissions.CREATE_EVENTS), n.default.combine(t, c.Permissions.MANAGE_EVENTS)]
                },
                p = e => {
                    let [t, l] = e instanceof s.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : v(e), [n, r, d, p] = (0, i.useStateFromStoresArray)([u.default], () => [u.default.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e), u.default.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e), u.default.can(t, e), u.default.can(l, e)]), E = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser()), h = a.useCallback(e => m(e, E, r, n), [n, r, E]), C = a.useCallback(e => m(e, E, p, d), [p, d, E]);
                    return null == e ? f : {
                        canCreateExpressions: n,
                        canCreateGuildEvent: d,
                        canManageAllExpressions: r,
                        canManageAllEvents: p,
                        canManageGuildExpression: h,
                        canManageGuildEvent: C
                    }
                },
                E = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default,
                        l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.default,
                        [a, n] = e instanceof s.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : v(e),
                        i = t.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                        r = t.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                        d = t.can(a, e),
                        p = t.can(n, e),
                        E = l.getCurrentUser();
                    return null == e ? f : {
                        canCreateExpressions: i,
                        canCreateGuildEvent: d,
                        canManageAllExpressions: r,
                        canManageAllEvents: p,
                        canManageGuildExpression: e => m(e, E, r, i),
                        canManageGuildEvent: e => m(e, E, p, d)
                    }
                },
                h = e => {
                    let t = (0, i.useStateFromStores)([u.default], () => u.default.can(c.Permissions.MANAGE_GUILD, e)),
                        {
                            showSettingsToggle: l
                        } = (0, r.useInventoryGuildSettingsExperiment)({
                            guildId: null == e ? void 0 : e.id
                        });
                    return t && l
                }
        },
        564875: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("469563"),
                i = l("907572"),
                r = l("75196"),
                s = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: l = 16,
                        color: n = "currentColor",
                        foreground: i,
                        ...s
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, r.default)(s),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, a.jsx)("path", {
                                fill: n,
                                className: i,
                                fillRule: "nonzero",
                                d: "M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z",
                                transform: "translate(2 4)"
                            }), (0, a.jsx)("path", {
                                d: "M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"
                            })]
                        })
                    })
                }, i.FriendsIcon)
        },
        754576: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("469563"),
                i = l("292915"),
                r = l("75196"),
                s = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: n = "currentColor",
                        ...i
                    } = e;
                    return (0, a.jsxs)("svg", {
                        ...(0, r.default)(i),
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        children: [(0, a.jsxs)("g", {
                            clipPath: "url(#clip0_414_20322)",
                            children: [(0, a.jsx)("path", {
                                d: "M2 6.00299V18.003C2 19.107 2.895 20.003 4 20.003H5V4.00299H4C2.895 4.00299 2 4.89799 2 6.00299Z",
                                fill: n
                            }), (0, a.jsx)("path", {
                                d: "M20 4.00299H7V20.003H20C21.104 20.003 22 19.107 22 18.003V6.00299C22 4.89799 21.104 4.00299 20 4.00299ZM19 14.003C19 15.107 18.104 16.003 17 16.003C15.896 16.003 15 15.107 15 14.003C15 12.899 15.896 12.003 17 12.003V9.38999L13 10.724C13 10.724 13 14.984 13 15.003C13 16.107 12.104 17.003 11 17.003C9.896 17.003 9 16.107 9 15.003C9 13.899 9.896 13.003 11 13.003V10.003C11 9.57199 11.275 9.19099 11.684 9.05399L17.684 7.05399C17.989 6.95199 18.323 7.00299 18.585 7.19199C18.846 7.37899 19 7.68199 19 8.00299C19 8.00299 19 13.983 19 14.003Z",
                                fill: n
                            })]
                        }), (0, a.jsx)("defs", {
                            children: (0, a.jsx)("clipPath", {
                                id: "clip0_414_20322",
                                children: (0, a.jsx)("rect", {
                                    width: "24",
                                    height: "24",
                                    fill: "white"
                                })
                            })
                        })]
                    })
                }, i.SoundboardIcon)
        }
    }
]);
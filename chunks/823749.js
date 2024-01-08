            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007"), n("70102");
            var i, r, l = n("37983"),
                s = n("884691"),
                a = n("414456"),
                o = n.n(a),
                u = n("627445"),
                d = n.n(u),
                c = n("77078"),
                f = n("599417"),
                E = n("208548"),
                _ = n("104945"),
                h = n("599110"),
                m = n("305122"),
                g = n("664113"),
                p = n("129722"),
                I = n("102432"),
                S = n("876189"),
                A = n("846325"),
                N = n("49111"),
                v = n("782340"),
                R = n("921389");
            (r = i || (i = {})).READY = "ready", r.ENCODING_FAILED = "encoding-failed", r.ENCODING = "encoding", r.UPLOADING = "uploading";
            let C = [{
                name: "audio",
                extensions: ["mp3", "wav", "ogg", "x-wav", "mp4"]
            }];

            function T(e) {
                var t, n, i, r;
                let {
                    guildId: a,
                    sourceFile: u,
                    existingSound: T,
                    onClose: O,
                    transitionState: L,
                    showGuildPicker: D = !1
                } = e, [M, b] = s.useState(null !== (n = null !== (t = null == u ? void 0 : u.name) && void 0 !== t ? t : null == T ? void 0 : T.name) && void 0 !== n ? n : ""), [U, y] = s.useState(null !== (i = null == T ? void 0 : T.volume) && void 0 !== i ? i : 1), [P, w] = s.useState(null == T ? void 0 : T.emojiId), [x, F] = s.useState(null == T ? void 0 : T.emojiName), {
                    file: V,
                    loadAudioFromFile: G,
                    maxVolume: k,
                    setMaxVolume: B
                } = (0, p.useAudioTrimmerStore)(), [j, H] = s.useState(!1), [W, K] = s.useState(null), [Y, z] = s.useState(null), [q, Z] = s.useState("ready"), [X, Q] = s.useState(a);
                async function J(e) {
                    try {
                        await G(null != e ? e : null), Z("ready"), K(null)
                    } catch (e) {
                        $(e)
                    }
                }

                function $(e) {
                    if (e instanceof f.default) K(e);
                    else if (e instanceof Error) {
                        let t = {
                            status: 500,
                            body: {
                                message: e.message
                            }
                        };
                        K(new f.default(t))
                    } else K(new f.default(e))
                }
                s.useEffect(() => {
                    (null == u ? void 0 : u.file) != null && e(u.file);
                    async function e(e) {
                        try {
                            await G(e), Z("ready"), K(null)
                        } catch (e) {
                            $(e)
                        }
                    }
                }, [null == u ? void 0 : u.file, G]);
                let ee = function(e) {
                        switch (e) {
                            case "encoding":
                                return v.default.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING;
                            case "encoding-failed":
                                return v.default.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING_FAILED;
                            case "uploading":
                                return v.default.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_UPLOADING
                        }
                        return null
                    }(q),
                    et = "uploading" === q || "encoding" === q,
                    en = null != T,
                    ei = M.length >= 2 && (en || null != V) && null != X && function(e) {
                        if (null == e) return !0;
                        let t = (e.endMs - e.startMs) / 1e3;
                        return t > 0 && t <= A.MAX_SOUND_LENGTH_SECONDS
                    }(Y),
                    er = s.useCallback(async (e, t) => {
                        Z("encoding");
                        try {
                            let n = await (0, I.trimAndEncodeAudio)(e, t);
                            return Z("ready"), n
                        } catch (e) {
                            throw Z("encoding-failed"), e
                        }
                    }, []),
                    el = s.useCallback(async () => {
                        if (null == V) return;
                        d(null != X, "Cannot submit soundboard sound with no guildId");
                        let e = V;
                        if (null != Y) {
                            let t = await er(V, Y);
                            if (null == t) return;
                            e = t
                        }
                        let t = (0, I.getDataUrlFromFile)(e);
                        Z("uploading");
                        try {
                            await (0, I.uploadFileReadPromise)({
                                readPromise: t,
                                guildId: X,
                                name: M,
                                volume: U,
                                emojiId: P,
                                emojiName: x
                            }), Z("ready")
                        } catch (e) {
                            throw new f.default(e)
                        }
                    }, [V, X, M, er, Y, U, P, x]),
                    es = s.useCallback(async () => {
                        d(null != X, "Cannot submit soundboard sound with no guildId"), H(!0), K(null);
                        try {
                            en ? await (0, m.updateSound)({
                                guildId: X,
                                soundId: T.soundId,
                                name: M,
                                volume: U,
                                emojiId: P,
                                emojiName: x
                            }) : await el(), O()
                        } catch (e) {
                            $(e)
                        } finally {
                            Z("ready"), H(!1), y(1), B(1)
                        }
                    }, [en, O, X, T, M, U, P, x, el, B]);
                s.useEffect(() => {
                    G(null), h.default.track(N.AnalyticEvents.OPEN_MODAL, {
                        type: "Soundboard Upload Sound",
                        guild_id: X
                    })
                }, []), s.useEffect(() => {
                    y(Math.min(U, k))
                }, [U, y, k]);
                let ea = (0, l.jsx)(E.default, {
                    guildId: X,
                    emojiId: P,
                    emojiName: x,
                    setEmojiId: w,
                    setEmojiName: F,
                    error: null == W ? void 0 : W.getFirstFieldErrorMessage("emoji"),
                    isRequiredField: !1
                });
                return (0, l.jsxs)(c.ModalRoot, {
                    transitionState: L,
                    children: [(0, l.jsx)(c.ModalCloseButton, {
                        onClick: O,
                        className: R.modalClose
                    }), (0, l.jsx)(c.ModalHeader, {
                        className: R.headerContainer,
                        separator: !1,
                        children: (0, l.jsx)(c.Heading, {
                            className: R.header,
                            variant: "heading-xl/extrabold",
                            children: en ? v.default.Messages.SOUNDBOARD_SOUND_UPDATE_MODAL_HEADER : v.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_HEADER
                        })
                    }), (0, l.jsxs)(c.ModalContent, {
                        className: R.content,
                        children: [null != W && !W.hasFieldErrors() && (0, l.jsx)(c.FormErrorBlock, {
                            className: R.section,
                            children: W.message
                        }), D ? (0, l.jsx)(c.FormItem, {
                            required: !0,
                            className: R.section,
                            title: v.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT,
                            children: (0, l.jsx)(S.default, {
                                value: X,
                                onChange: Q
                            })
                        }) : null, (en || null != V) && (0, l.jsx)(g.default, {
                            sound: T,
                            volume: U,
                            disabled: et,
                            onChange: z
                        }), en || null != u ? null : (0, l.jsx)(c.FormItem, {
                            required: !0,
                            error: null == W ? void 0 : W.getFirstFieldErrorMessage("sound"),
                            className: R.section,
                            title: v.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_FILE,
                            children: (0, l.jsx)(_.default, {
                                filename: null !== (r = null == V ? void 0 : V.name) && void 0 !== r ? r : "",
                                buttonText: v.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_BROWSE,
                                placeholder: v.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_INPUT_PLACEHOLDER,
                                onFileSelect: J,
                                filters: C
                            })
                        }), (0, l.jsxs)("div", {
                            className: R.multiInput,
                            children: [(0, l.jsx)(c.FormItem, {
                                required: !0,
                                error: null == W ? void 0 : W.getFirstFieldErrorMessage("name"),
                                className: o(R.section, R.halfInput),
                                title: v.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
                                children: (0, l.jsx)(c.TextInput, {
                                    placeholder: v.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
                                    value: M,
                                    onChange: b,
                                    maxLength: A.MAX_LENGTH_SOUND_NAME
                                })
                            }), ea]
                        }), (0, l.jsx)(c.FormItem, {
                            error: null == W ? void 0 : W.getFirstFieldErrorMessage("volume"),
                            className: R.section,
                            title: v.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_VOLUME,
                            children: (0, l.jsx)(c.Slider, {
                                initialValue: U,
                                onValueChange: e => y(e),
                                minValue: 0,
                                maxValue: k
                            })
                        })]
                    }), (0, l.jsxs)(c.ModalFooter, {
                        children: [(0, l.jsx)(c.Button, {
                            disabled: !ei,
                            submitting: j,
                            size: c.Button.Sizes.SMALL,
                            onClick: es,
                            children: en ? v.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SAVE : v.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_UPLOAD
                        }), (0, l.jsx)(c.Button, {
                            disabled: j,
                            onClick: O,
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            children: v.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_CANCEL
                        }), null != ee && (0, l.jsx)("div", {
                            className: R.soundStateHint,
                            children: (0, l.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: ee
                            })
                        })]
                    })]
                })
            }
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            }), n("222007"), n("70102");
            var i, r, l = n("37983"),
                s = n("884691"),
                a = n("414456"),
                o = n.n(a),
                u = n("627445"),
                d = n.n(u),
                c = n("77078"),
                E = n("599417"),
                f = n("208548"),
                _ = n("104945"),
                I = n("599110"),
                h = n("305122"),
                m = n("664113"),
                A = n("129722"),
                N = n("102432"),
                S = n("876189"),
                g = n("846325"),
                p = n("49111"),
                T = n("782340"),
                C = n("921389");
            (r = i || (i = {})).READY = "ready", r.ENCODING_FAILED = "encoding-failed", r.ENCODING = "encoding", r.UPLOADING = "uploading";
            let R = [{
                name: "audio",
                extensions: ["mp3", "wav", "ogg", "x-wav", "mp4"]
            }];

            function O(e) {
                var t, n, i, r;
                let {
                    guildId: a,
                    sourceFile: u,
                    existingSound: O,
                    onClose: v,
                    transitionState: L,
                    showGuildPicker: D = !1
                } = e, [M, U] = s.useState(null !== (n = null !== (t = null == u ? void 0 : u.name) && void 0 !== t ? t : null == O ? void 0 : O.name) && void 0 !== n ? n : ""), [P, b] = s.useState(null !== (i = null == O ? void 0 : O.volume) && void 0 !== i ? i : 1), [y, w] = s.useState(null == O ? void 0 : O.emojiId), [x, F] = s.useState(null == O ? void 0 : O.emojiName), {
                    file: V,
                    loadAudioFromFile: G,
                    maxVolume: B,
                    setMaxVolume: k
                } = (0, A.useAudioTrimmerStore)(), [H, j] = s.useState(!1), [W, K] = s.useState(null), [Y, z] = s.useState(null), [q, Z] = s.useState("ready"), [X, Q] = s.useState(a);
                async function J(e) {
                    try {
                        await G(null != e ? e : null), Z("ready"), K(null)
                    } catch (e) {
                        $(e)
                    }
                }

                function $(e) {
                    if (e instanceof E.default) K(e);
                    else if (e instanceof Error) {
                        let t = {
                            status: 500,
                            body: {
                                message: e.message
                            }
                        };
                        K(new E.default(t))
                    } else K(new E.default(e))
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
                                return T.default.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING;
                            case "encoding-failed":
                                return T.default.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING_FAILED;
                            case "uploading":
                                return T.default.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_UPLOADING
                        }
                        return null
                    }(q),
                    et = "uploading" === q || "encoding" === q,
                    en = null != O,
                    ei = M.length >= 2 && (en || null != V) && null != X && function(e) {
                        if (null == e) return !0;
                        let t = (e.endMs - e.startMs) / 1e3;
                        return t > 0 && t <= g.MAX_SOUND_LENGTH_SECONDS
                    }(Y),
                    er = s.useCallback(async (e, t) => {
                        Z("encoding");
                        try {
                            let n = await (0, N.trimAndEncodeAudio)(e, t);
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
                        let t = (0, N.getDataUrlFromFile)(e);
                        Z("uploading");
                        try {
                            await (0, N.uploadFileReadPromise)({
                                readPromise: t,
                                guildId: X,
                                name: M,
                                volume: P,
                                emojiId: y,
                                emojiName: x
                            }), Z("ready")
                        } catch (e) {
                            throw new E.default(e)
                        }
                    }, [V, X, M, er, Y, P, y, x]),
                    es = s.useCallback(async () => {
                        d(null != X, "Cannot submit soundboard sound with no guildId"), j(!0), K(null);
                        try {
                            en ? await (0, h.updateSound)({
                                guildId: X,
                                soundId: O.soundId,
                                name: M,
                                volume: P,
                                emojiId: y,
                                emojiName: x
                            }) : await el(), v()
                        } catch (e) {
                            $(e)
                        } finally {
                            Z("ready"), j(!1), b(1), k(1)
                        }
                    }, [en, v, X, O, M, P, y, x, el, k]);
                s.useEffect(() => {
                    G(null), I.default.track(p.AnalyticEvents.OPEN_MODAL, {
                        type: "Soundboard Upload Sound",
                        guild_id: X
                    })
                }, []), s.useEffect(() => {
                    b(Math.min(P, B))
                }, [P, b, B]);
                let ea = (0, l.jsx)(f.default, {
                    guildId: X,
                    emojiId: y,
                    emojiName: x,
                    setEmojiId: w,
                    setEmojiName: F,
                    error: null == W ? void 0 : W.getFirstFieldErrorMessage("emoji"),
                    isRequiredField: !1
                });
                return (0, l.jsxs)(c.ModalRoot, {
                    transitionState: L,
                    children: [(0, l.jsx)(c.ModalCloseButton, {
                        onClick: v,
                        className: C.modalClose
                    }), (0, l.jsx)(c.ModalHeader, {
                        className: C.headerContainer,
                        separator: !1,
                        children: (0, l.jsx)(c.Heading, {
                            className: C.header,
                            variant: "heading-xl/extrabold",
                            children: en ? T.default.Messages.SOUNDBOARD_SOUND_UPDATE_MODAL_HEADER : T.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_HEADER
                        })
                    }), (0, l.jsxs)(c.ModalContent, {
                        className: C.content,
                        children: [null != W && !W.hasFieldErrors() && (0, l.jsx)(c.FormErrorBlock, {
                            className: C.section,
                            children: W.message
                        }), D ? (0, l.jsx)(c.FormItem, {
                            required: !0,
                            className: C.section,
                            title: T.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT,
                            children: (0, l.jsx)(S.default, {
                                value: X,
                                onChange: Q
                            })
                        }) : null, (en || null != V) && (0, l.jsx)(m.default, {
                            sound: O,
                            volume: P,
                            disabled: et,
                            onChange: z
                        }), en || null != u ? null : (0, l.jsx)(c.FormItem, {
                            required: !0,
                            error: null == W ? void 0 : W.getFirstFieldErrorMessage("sound"),
                            className: C.section,
                            title: T.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_FILE,
                            children: (0, l.jsx)(_.default, {
                                filename: null !== (r = null == V ? void 0 : V.name) && void 0 !== r ? r : "",
                                buttonText: T.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_BROWSE,
                                placeholder: T.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_INPUT_PLACEHOLDER,
                                onFileSelect: J,
                                filters: R
                            })
                        }), (0, l.jsxs)("div", {
                            className: C.multiInput,
                            children: [(0, l.jsx)(c.FormItem, {
                                required: !0,
                                error: null == W ? void 0 : W.getFirstFieldErrorMessage("name"),
                                className: o(C.section, C.halfInput),
                                title: T.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
                                children: (0, l.jsx)(c.TextInput, {
                                    placeholder: T.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
                                    value: M,
                                    onChange: U,
                                    maxLength: g.MAX_LENGTH_SOUND_NAME
                                })
                            }), ea]
                        }), (0, l.jsx)(c.FormItem, {
                            error: null == W ? void 0 : W.getFirstFieldErrorMessage("volume"),
                            className: C.section,
                            title: T.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_VOLUME,
                            children: (0, l.jsx)(c.Slider, {
                                initialValue: P,
                                onValueChange: e => b(e),
                                minValue: 0,
                                maxValue: B
                            })
                        })]
                    }), (0, l.jsxs)(c.ModalFooter, {
                        children: [(0, l.jsx)(c.Button, {
                            disabled: !ei,
                            submitting: H,
                            size: c.Button.Sizes.SMALL,
                            onClick: es,
                            children: en ? T.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SAVE : T.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_UPLOAD
                        }), (0, l.jsx)(c.Button, {
                            disabled: H,
                            onClick: v,
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            children: T.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_CANCEL
                        }), null != ee && (0, l.jsx)("div", {
                            className: C.soundStateHint,
                            children: (0, l.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: ee
                            })
                        })]
                    })]
                })
            }
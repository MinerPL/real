            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return j
                }
            }), r("222007");
            var a = r("37983"),
                n = r("884691"),
                i = r("414456"),
                l = r.n(i),
                s = r("748820"),
                o = r("446674"),
                u = r("819855"),
                d = r("77078"),
                c = r("385976"),
                _ = r("208548"),
                f = r("104945"),
                E = r("8731"),
                I = r("161778"),
                p = r("305961"),
                m = r("697218"),
                h = r("145131"),
                T = r("68238"),
                g = r("599110"),
                S = r("993105"),
                A = r("701909"),
                L = r("103603"),
                O = r("467094"),
                D = r("161585"),
                y = r("24373"),
                v = r("41170"),
                R = r("560241"),
                U = r("49111"),
                C = r("782340"),
                N = r("735193"),
                w = r("357450"),
                P = r("348919");
            let G = new Set(["application/json", "image/png", "image/apng", "image/gif"]),
                b = [{
                    name: "Sticker file",
                    extensions: ["json", "png", "apng", "gif"]
                }];

            function M(e, t) {
                g.default.track(U.AnalyticEvents.STICKER_UPLOAD_COMPLETED, {
                    successful: e,
                    error: null != t ? t : ""
                })
            }
            let F = e => {
                    let {
                        stickerPreview: t
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: N.preview,
                        children: [(0, a.jsx)("div", {
                            className: N.previewDark,
                            children: null != t ? t : (0, a.jsx)("img", {
                                src: w,
                                alt: C.default.Messages.GUILD_STICKER_PREVIEW_IMG_ALT_DARK
                            })
                        }), (0, a.jsx)("div", {
                            className: N.previewLight,
                            children: null != t ? t : (0, a.jsx)("img", {
                                src: P,
                                alt: C.default.Messages.GUILD_STICKER_PREVIEW_IMG_ALT_LIGHT
                            })
                        })]
                    })
                },
                B = e => {
                    let {
                        sticker: t,
                        previewData: r,
                        onStickerError: n
                    } = e;
                    if (null != t) return (0, a.jsx)(v.default, {
                        size: 160,
                        sticker: t
                    });
                    if (null == r) return null;
                    let {
                        id: i,
                        formatType: l,
                        content: s
                    } = r;
                    return (0, a.jsx)(v.default, {
                        assetData: s,
                        fileUri: s,
                        size: 160,
                        sticker: {
                            name: i,
                            description: "",
                            id: i,
                            pack_id: "",
                            format_type: l
                        },
                        onError: n
                    }, i)
                };
            async function x(e) {
                let t = await (0, L.readFileAsBase64)(e),
                    r = new Image;
                r.src = t, await r.decode();
                let a = (0, E.downsizeImage)(r, 320, 320);
                return (0, L.dataUrlToFile)(a, e.name, e.type)
            }

            function j(e) {
                var t, r, i, E, v, w, P, j;
                let {
                    transitionState: H,
                    onClose: K,
                    guildId: k,
                    sticker: V
                } = e, z = (0, o.useStateFromStores)([I.default], () => I.default.theme), W = (0, o.useStateFromStores)([c.default], () => (null == V ? void 0 : V.tags) != null ? c.default.getCustomEmojiById(V.tags) : null), Y = null !== (r = null === (t = m.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && void 0 !== r && r, X = Y ? R.STAFF_MAX_STICKER_FILE_SIZE : R.MAX_STICKER_FILE_SIZE, [Z, q] = n.useState(null), [J, Q] = n.useState(null !== (i = null == V ? void 0 : V.name) && void 0 !== i ? i : ""), [$, ee] = n.useState({
                    file: null,
                    filename: null !== (E = (0, y.getFilenameForSticker)(V)) && void 0 !== E ? E : ""
                }), [et, er] = n.useState(null == W ? void 0 : W.id), [ea, en] = n.useState(null !== (v = null == W ? void 0 : W.name) && void 0 !== v ? v : null == V ? void 0 : V.tags), [ei, el] = n.useState(null !== (w = null == V ? void 0 : V.description) && void 0 !== w ? w : ""), [es, eo] = n.useState(!1), [eu, ed] = n.useState(null), ec = (0, o.useStateFromStores)([p.default], () => p.default.getGuild(k)), e_ = (null == ec ? void 0 : ec.hasFeature(U.GuildFeatures.PARTNERED)) || (null == ec ? void 0 : ec.hasFeature(U.GuildFeatures.VERIFIED)), ef = null != V, eE = ef || (null == $ ? void 0 : $.file) != null, eI = 0 === ei.length || ei.length >= 2 && ei.length <= 100, ep = !es && (null == eu ? void 0 : eu.isBlocking) !== !0 && J.length >= 2 && (null != et || null != ea || (null == V ? void 0 : V.tags) != null && (null == V ? void 0 : V.tags) !== "") && eE && eI, em = async e => {
                    var t;
                    if (null == e) return;
                    let r = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                    if (!G.has(r)) {
                        ed({
                            message: C.default.Messages.GUILD_STICKER_UNKNOWN_MIME_TYPE,
                            isBlocking: !0
                        });
                        return
                    }
                    let a = e;
                    if ("image/png" === r && e.size > X && !await (0, L.isPNGAnimated)(e)) {
                        a = await x(e);
                        let t = a.size > X;
                        g.default.track(U.AnalyticEvents.STICKER_FILE_RESIZED, {
                            original_file_size_bytes: e.size,
                            resized_file_size_bytes: a.size,
                            resized_file_too_big: t
                        })
                    }
                    if (a.size > X) {
                        ed({
                            message: C.default.Messages.GUILD_STICKER_FILE_TOO_BIG.format({
                                maxSize: (0, S.formatKbSize)(X, {
                                    useKibibytes: !0
                                })
                            }),
                            isBlocking: null == $.file
                        }), g.default.track(U.AnalyticEvents.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                            size: a.size,
                            filetype: r
                        });
                        return
                    }
                    let n = (0, y.getStickerFormatTypeFromFileType)(a.type),
                        i = n === D.StickerFormat.LOTTIE;
                    if (i) {
                        if (!e_) {
                            ed({
                                message: C.default.Messages.GUILD_STICKER_UNSUPPORTED_MIME_TYPE.format({
                                    articleURL: A.default.getArticleURL(U.HelpdeskArticles.STICKERS_UPLOAD)
                                }),
                                isBlocking: !0
                            });
                            return
                        }
                        let e = new FileReader;
                        e.addEventListener("load", () => {
                            q({
                                id: (0, s.v4)(),
                                formatType: n,
                                content: e.result
                            }), ed(null)
                        }), e.readAsText(a)
                    } else {
                        let e = await (0, L.readFileAsBase64)(a);
                        q({
                            id: (0, s.v4)(),
                            formatType: n,
                            content: e
                        }), ed(null)
                    }
                    ee({
                        file: a,
                        filename: a.name
                    })
                }, eh = async e => {
                    var t, r, a, n, i, l;
                    e.preventDefault();
                    let s = null !== (r = null !== (t = null != et ? et : ea) && void 0 !== t ? t : null == V ? void 0 : V.tags) && void 0 !== r ? r : "";
                    try {
                        if (eo(!0), ef) await (0, O.updateGuildSticker)(k, null !== (a = null == V ? void 0 : V.id) && void 0 !== a ? a : "", {
                            name: J,
                            tags: s,
                            description: ei
                        });
                        else {
                            ;
                            let e = new FormData;
                            e.append("name", J), e.append("tags", s), e.append("description", ei), (null == $ ? void 0 : $.file) != null && e.append("file", $.file), l = null !== (i = null === (n = $.file) || void 0 === n ? void 0 : n.type) && void 0 !== i ? i : "", g.default.track(U.AnalyticEvents.STICKER_UPLOAD_STARTED, {
                                filetype: l
                            }), await (0, O.createGuildSticker)(k, e), M(!0)
                        }
                        K()
                    } catch (e) {
                        ed({
                            message: e.body.message,
                            isBlocking: !1
                        }), M(!1, e.body.message)
                    } finally {
                        eo(!1)
                    }
                }, eT = n.useCallback(() => {
                    ed({
                        message: C.default.Messages.GUILD_STICKER_INVALID_STICKER,
                        isBlocking: !0
                    })
                }, []), eg = B({
                    sticker: V,
                    previewData: Z,
                    onStickerError: eT
                }), eS = e_ ? C.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION : C.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_NO_LOTTIE;
                return (0, a.jsxs)(d.ModalRoot, {
                    transitionState: H,
                    "aria-labelledby": "STICKER_UPLOAD_MODAL",
                    className: N.modal,
                    children: [(0, a.jsx)(d.ModalCloseButton, {
                        onClick: K,
                        className: N.modalClose
                    }), (0, a.jsxs)("form", {
                        onSubmit: eh,
                        className: N.form,
                        children: [(0, a.jsxs)(d.ModalContent, {
                            className: N.modalContent,
                            children: [(0, a.jsxs)(d.ModalHeader, {
                                direction: h.default.Direction.VERTICAL,
                                separator: !1,
                                className: N.modalHeader,
                                children: [(0, a.jsx)(d.Heading, {
                                    variant: "heading-xl/semibold",
                                    className: N.modalHeaderTitle,
                                    children: C.default.Messages.GUILD_STICKER_UPLOAD_TITLE
                                }), (0, a.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    children: eS.format({
                                        fileSize: (0, S.formatKbSize)(R.MAX_STICKER_FILE_SIZE, {
                                            useKibibytes: !0
                                        })
                                    })
                                })]
                            }), (0, a.jsx)(d.FormSection, {
                                title: C.default.Messages.GUILD_STICKER_UPLOAD_PREVIEW_TITLE,
                                className: N.formItem,
                                children: (0, a.jsx)(F, {
                                    stickerPreview: eg
                                })
                            }), (0, a.jsxs)(d.FormSection, {
                                className: l(N.formItem, N.formItemRow),
                                children: [(0, a.jsx)(d.FormItem, {
                                    title: ef ? C.default.Messages.GUILD_STICKER_UPLOAD_FILE_TITLE_BLOCKED : C.default.Messages.GUILD_STICKER_UPLOAD_FILE_TITLE,
                                    required: !0,
                                    className: N.formItemRowChild,
                                    children: ef ? (0, a.jsx)(d.TextInput, {
                                        disabled: !0,
                                        value: null !== (P = null == $ ? void 0 : $.filename) && void 0 !== P ? P : ""
                                    }) : (0, a.jsx)(f.default, {
                                        buttonText: C.default.Messages.GUILD_STICKER_UPLOAD_FILE_BUTTON,
                                        filters: b,
                                        filename: null !== (j = null == $ ? void 0 : $.filename) && void 0 !== j ? j : "",
                                        placeholder: C.default.Messages.GUILD_STICKER_UPLOAD_FILE_PLACEHOLDER,
                                        onFileSelect: em
                                    })
                                }), (0, a.jsx)(_.default, {
                                    className: N.formItemRowChild,
                                    guildId: k,
                                    emojiId: et,
                                    emojiName: ea,
                                    setEmojiId: er,
                                    setEmojiName: en,
                                    shouldUpdateBothEmojiFields: !0
                                })]
                            }), (0, a.jsx)(d.FormItem, {
                                title: C.default.Messages.GUILD_STICKER_UPLOAD_NAME_TITLE,
                                required: !0,
                                className: N.formItem,
                                children: (0, a.jsx)(d.TextInput, {
                                    value: J,
                                    onChange: Q,
                                    placeholder: C.default.Messages.GUILD_STICKER_UPLOAD_NAME_PLACEHOLDER,
                                    maxLength: 30
                                })
                            }), (0, a.jsxs)("div", {
                                className: N.formItem,
                                children: [(0, a.jsxs)(d.FormTitle, {
                                    children: [C.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_TITLE, (0, a.jsx)(d.Tooltip, {
                                        text: C.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_TOOLTIP,
                                        children: e => (0, a.jsx)(T.default, {
                                            className: N.infoIcon,
                                            ...e
                                        })
                                    })]
                                }), (0, a.jsx)(d.TextArea, {
                                    value: ei,
                                    onChange: el,
                                    placeholder: C.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_PLACEHOLDER,
                                    maxLength: 100
                                })]
                            }), null != eu && (0, a.jsx)(d.Text, {
                                className: N.formItem,
                                variant: "text-sm/normal",
                                color: "text-danger",
                                children: eu.message
                            })]
                        }), (0, a.jsxs)(d.ModalFooter, {
                            className: N.modalFooter,
                            children: [(0, a.jsx)(d.Button, {
                                type: "submit",
                                disabled: !ep,
                                children: ef ? C.default.Messages.GUILD_STICKERS_UPDATE : C.default.Messages.UPLOAD
                            }), (0, a.jsx)(d.Button, {
                                look: d.Button.Looks.LINK,
                                color: (0, u.isThemeLight)(z) ? d.Button.Colors.PRIMARY : d.Button.Colors.WHITE,
                                onClick: K,
                                children: C.default.Messages.NEVERMIND
                            })]
                        })]
                    })]
                })
            }
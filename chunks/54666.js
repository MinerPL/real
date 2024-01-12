            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return j
                }
            }), a("222007");
            var l = a("37983"),
                i = a("884691"),
                n = a("414456"),
                s = a.n(n),
                r = a("748820"),
                o = a("446674"),
                u = a("819855"),
                d = a("77078"),
                c = a("385976"),
                _ = a("208548"),
                E = a("104945"),
                I = a("8731"),
                f = a("161778"),
                T = a("305961"),
                p = a("697218"),
                m = a("145131"),
                S = a("68238"),
                h = a("599110"),
                L = a("993105"),
                A = a("701909"),
                D = a("103603"),
                g = a("467094"),
                O = a("161585"),
                R = a("24373"),
                U = a("41170"),
                C = a("560241"),
                N = a("49111"),
                y = a("782340"),
                v = a("735193"),
                G = a("357450"),
                P = a("348919");
            let M = new Set(["application/json", "image/png", "image/apng", "image/gif"]),
                w = [{
                    name: "Sticker file",
                    extensions: ["json", "png", "apng", "gif"]
                }];

            function F(e, t) {
                h.default.track(N.AnalyticEvents.STICKER_UPLOAD_COMPLETED, {
                    successful: e,
                    error: null != t ? t : ""
                })
            }
            let B = e => {
                    let {
                        stickerPreview: t
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: v.preview,
                        children: [(0, l.jsx)("div", {
                            className: v.previewDark,
                            children: null != t ? t : (0, l.jsx)("img", {
                                src: G,
                                alt: y.default.Messages.GUILD_STICKER_PREVIEW_IMG_ALT_DARK
                            })
                        }), (0, l.jsx)("div", {
                            className: v.previewLight,
                            children: null != t ? t : (0, l.jsx)("img", {
                                src: P,
                                alt: y.default.Messages.GUILD_STICKER_PREVIEW_IMG_ALT_LIGHT
                            })
                        })]
                    })
                },
                x = e => {
                    let {
                        sticker: t,
                        previewData: a,
                        onStickerError: i
                    } = e;
                    if (null != t) return (0, l.jsx)(U.default, {
                        size: 160,
                        sticker: t
                    });
                    if (null == a) return null;
                    let {
                        id: n,
                        formatType: s,
                        content: r
                    } = a;
                    return (0, l.jsx)(U.default, {
                        assetData: r,
                        fileUri: r,
                        size: 160,
                        sticker: {
                            name: n,
                            description: "",
                            id: n,
                            pack_id: "",
                            format_type: s
                        },
                        onError: i
                    }, n)
                };
            async function b(e) {
                let t = await (0, D.readFileAsBase64)(e),
                    a = new Image;
                a.src = t, await a.decode();
                let l = (0, I.downsizeImage)(a, 320, 320);
                return (0, D.dataUrlToFile)(l, e.name, e.type)
            }

            function j(e) {
                var t, a, n, I, U, G, P, j;
                let {
                    transitionState: H,
                    onClose: K,
                    guildId: k,
                    sticker: V
                } = e, z = (0, o.useStateFromStores)([f.default], () => f.default.theme), W = (0, o.useStateFromStores)([c.default], () => (null == V ? void 0 : V.tags) != null ? c.default.getCustomEmojiById(V.tags) : null), Y = null !== (a = null === (t = p.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && void 0 !== a && a, X = Y ? C.STAFF_MAX_STICKER_FILE_SIZE : C.MAX_STICKER_FILE_SIZE, [Z, q] = i.useState(null), [J, Q] = i.useState(null !== (n = null == V ? void 0 : V.name) && void 0 !== n ? n : ""), [$, ee] = i.useState({
                    file: null,
                    filename: null !== (I = (0, R.getFilenameForSticker)(V)) && void 0 !== I ? I : ""
                }), [et, ea] = i.useState(null == W ? void 0 : W.id), [el, ei] = i.useState(null !== (U = null == W ? void 0 : W.name) && void 0 !== U ? U : null == V ? void 0 : V.tags), [en, es] = i.useState(null !== (G = null == V ? void 0 : V.description) && void 0 !== G ? G : ""), [er, eo] = i.useState(!1), [eu, ed] = i.useState(null), ec = (0, o.useStateFromStores)([T.default], () => T.default.getGuild(k)), e_ = (null == ec ? void 0 : ec.hasFeature(N.GuildFeatures.PARTNERED)) || (null == ec ? void 0 : ec.hasFeature(N.GuildFeatures.VERIFIED)), eE = null != V, eI = eE || (null == $ ? void 0 : $.file) != null, ef = 0 === en.length || en.length >= 2 && en.length <= 100, eT = !er && (null == eu ? void 0 : eu.isBlocking) !== !0 && J.length >= 2 && (null != et || null != el || (null == V ? void 0 : V.tags) != null && (null == V ? void 0 : V.tags) !== "") && eI && ef, ep = async e => {
                    var t;
                    if (null == e) return;
                    let a = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                    if (!M.has(a)) {
                        ed({
                            message: y.default.Messages.GUILD_STICKER_UNKNOWN_MIME_TYPE,
                            isBlocking: !0
                        });
                        return
                    }
                    let l = e;
                    if ("image/png" === a && e.size > X && !await (0, D.isPNGAnimated)(e)) {
                        l = await b(e);
                        let t = l.size > X;
                        h.default.track(N.AnalyticEvents.STICKER_FILE_RESIZED, {
                            original_file_size_bytes: e.size,
                            resized_file_size_bytes: l.size,
                            resized_file_too_big: t
                        })
                    }
                    if (l.size > X) {
                        ed({
                            message: y.default.Messages.GUILD_STICKER_FILE_TOO_BIG.format({
                                maxSize: (0, L.formatKbSize)(X, {
                                    useKibibytes: !0
                                })
                            }),
                            isBlocking: null == $.file
                        }), h.default.track(N.AnalyticEvents.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                            size: l.size,
                            filetype: a
                        });
                        return
                    }
                    let i = (0, R.getStickerFormatTypeFromFileType)(l.type),
                        n = i === O.StickerFormat.LOTTIE;
                    if (n) {
                        if (!e_) {
                            ed({
                                message: y.default.Messages.GUILD_STICKER_UNSUPPORTED_MIME_TYPE.format({
                                    articleURL: A.default.getArticleURL(N.HelpdeskArticles.STICKERS_UPLOAD)
                                }),
                                isBlocking: !0
                            });
                            return
                        }
                        let e = new FileReader;
                        e.addEventListener("load", () => {
                            q({
                                id: (0, r.v4)(),
                                formatType: i,
                                content: e.result
                            }), ed(null)
                        }), e.readAsText(l)
                    } else {
                        let e = await (0, D.readFileAsBase64)(l);
                        q({
                            id: (0, r.v4)(),
                            formatType: i,
                            content: e
                        }), ed(null)
                    }
                    ee({
                        file: l,
                        filename: l.name
                    })
                }, em = async e => {
                    var t, a, l, i, n, s;
                    e.preventDefault();
                    let r = null !== (a = null !== (t = null != et ? et : el) && void 0 !== t ? t : null == V ? void 0 : V.tags) && void 0 !== a ? a : "";
                    try {
                        if (eo(!0), eE) await (0, g.updateGuildSticker)(k, null !== (l = null == V ? void 0 : V.id) && void 0 !== l ? l : "", {
                            name: J,
                            tags: r,
                            description: en
                        });
                        else {
                            ;
                            let e = new FormData;
                            e.append("name", J), e.append("tags", r), e.append("description", en), (null == $ ? void 0 : $.file) != null && e.append("file", $.file), s = null !== (n = null === (i = $.file) || void 0 === i ? void 0 : i.type) && void 0 !== n ? n : "", h.default.track(N.AnalyticEvents.STICKER_UPLOAD_STARTED, {
                                filetype: s
                            }), await (0, g.createGuildSticker)(k, e), F(!0)
                        }
                        K()
                    } catch (e) {
                        ed({
                            message: e.body.message,
                            isBlocking: !1
                        }), F(!1, e.body.message)
                    } finally {
                        eo(!1)
                    }
                }, eS = i.useCallback(() => {
                    ed({
                        message: y.default.Messages.GUILD_STICKER_INVALID_STICKER,
                        isBlocking: !0
                    })
                }, []), eh = x({
                    sticker: V,
                    previewData: Z,
                    onStickerError: eS
                }), eL = e_ ? y.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION : y.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_NO_LOTTIE;
                return (0, l.jsxs)(d.ModalRoot, {
                    transitionState: H,
                    "aria-labelledby": "STICKER_UPLOAD_MODAL",
                    className: v.modal,
                    children: [(0, l.jsx)(d.ModalCloseButton, {
                        onClick: K,
                        className: v.modalClose
                    }), (0, l.jsxs)("form", {
                        onSubmit: em,
                        className: v.form,
                        children: [(0, l.jsxs)(d.ModalContent, {
                            className: v.modalContent,
                            children: [(0, l.jsxs)(d.ModalHeader, {
                                direction: m.default.Direction.VERTICAL,
                                separator: !1,
                                className: v.modalHeader,
                                children: [(0, l.jsx)(d.Heading, {
                                    variant: "heading-xl/semibold",
                                    className: v.modalHeaderTitle,
                                    children: y.default.Messages.GUILD_STICKER_UPLOAD_TITLE
                                }), (0, l.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    children: eL.format({
                                        fileSize: (0, L.formatKbSize)(C.MAX_STICKER_FILE_SIZE, {
                                            useKibibytes: !0
                                        })
                                    })
                                })]
                            }), (0, l.jsx)(d.FormSection, {
                                title: y.default.Messages.GUILD_STICKER_UPLOAD_PREVIEW_TITLE,
                                className: v.formItem,
                                children: (0, l.jsx)(B, {
                                    stickerPreview: eh
                                })
                            }), (0, l.jsxs)(d.FormSection, {
                                className: s(v.formItem, v.formItemRow),
                                children: [(0, l.jsx)(d.FormItem, {
                                    title: eE ? y.default.Messages.GUILD_STICKER_UPLOAD_FILE_TITLE_BLOCKED : y.default.Messages.GUILD_STICKER_UPLOAD_FILE_TITLE,
                                    required: !0,
                                    className: v.formItemRowChild,
                                    children: eE ? (0, l.jsx)(d.TextInput, {
                                        disabled: !0,
                                        value: null !== (P = null == $ ? void 0 : $.filename) && void 0 !== P ? P : ""
                                    }) : (0, l.jsx)(E.default, {
                                        buttonText: y.default.Messages.GUILD_STICKER_UPLOAD_FILE_BUTTON,
                                        filters: w,
                                        filename: null !== (j = null == $ ? void 0 : $.filename) && void 0 !== j ? j : "",
                                        placeholder: y.default.Messages.GUILD_STICKER_UPLOAD_FILE_PLACEHOLDER,
                                        onFileSelect: ep
                                    })
                                }), (0, l.jsx)(_.default, {
                                    className: v.formItemRowChild,
                                    guildId: k,
                                    emojiId: et,
                                    emojiName: el,
                                    setEmojiId: ea,
                                    setEmojiName: ei,
                                    shouldUpdateBothEmojiFields: !0
                                })]
                            }), (0, l.jsx)(d.FormItem, {
                                title: y.default.Messages.GUILD_STICKER_UPLOAD_NAME_TITLE,
                                required: !0,
                                className: v.formItem,
                                children: (0, l.jsx)(d.TextInput, {
                                    value: J,
                                    onChange: Q,
                                    placeholder: y.default.Messages.GUILD_STICKER_UPLOAD_NAME_PLACEHOLDER,
                                    maxLength: 30
                                })
                            }), (0, l.jsxs)("div", {
                                className: v.formItem,
                                children: [(0, l.jsxs)(d.FormTitle, {
                                    children: [y.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_TITLE, (0, l.jsx)(d.Tooltip, {
                                        text: y.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_TOOLTIP,
                                        children: e => (0, l.jsx)(S.default, {
                                            className: v.infoIcon,
                                            ...e
                                        })
                                    })]
                                }), (0, l.jsx)(d.TextArea, {
                                    value: en,
                                    onChange: es,
                                    placeholder: y.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_PLACEHOLDER,
                                    maxLength: 100
                                })]
                            }), null != eu && (0, l.jsx)(d.Text, {
                                className: v.formItem,
                                variant: "text-sm/normal",
                                color: "text-danger",
                                children: eu.message
                            })]
                        }), (0, l.jsxs)(d.ModalFooter, {
                            className: v.modalFooter,
                            children: [(0, l.jsx)(d.Button, {
                                type: "submit",
                                disabled: !eT,
                                children: eE ? y.default.Messages.GUILD_STICKERS_UPDATE : y.default.Messages.UPLOAD
                            }), (0, l.jsx)(d.Button, {
                                look: d.Button.Looks.LINK,
                                color: (0, u.isThemeLight)(z) ? d.Button.Colors.PRIMARY : d.Button.Colors.WHITE,
                                onClick: K,
                                children: y.default.Messages.NEVERMIND
                            })]
                        })]
                    })]
                })
            }
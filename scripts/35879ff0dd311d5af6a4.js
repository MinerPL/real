(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["8677"], {
        783480: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return R
                }
            }), l("222007"), l("702976");
            var a = l("77078"),
                n = l("913144"),
                s = l("295426"),
                r = l("819689"),
                o = l("81594"),
                i = l("336522"),
                d = l("979911"),
                u = l("282928"),
                f = l("966724"),
                _ = l("681736"),
                p = l("600798"),
                E = l("692038"),
                c = l("815297"),
                A = l("168730"),
                h = l("529805"),
                g = l("685841"),
                T = l("804888"),
                m = l("474643"),
                L = l("585722"),
                O = l("568734"),
                P = l("49111"),
                U = l("782340");

            function y(e) {
                var t, l, a;
                let u, {
                        channelId: f,
                        uploads: y,
                        draftType: R,
                        parsedMessage: I,
                        options: M = {}
                    } = e,
                    D = new _.default(P.Endpoints.MESSAGES(f)),
                    C = {
                        content: "",
                        nonce: "",
                        channel_id: f,
                        type: P.MessageTypes.DEFAULT,
                        sticker_ids: null == M ? void 0 : M.stickerIds
                    };
                null != I && (C.content = null == I ? void 0 : I.content);
                let S = g.default.getPendingReply(f);
                null != S && (C.type = P.MessageTypes.REPLY, C.message_reference = M.messageReference, C.allowed_mentions = M.allowedMentions, (0, h.deletePendingReply)(f));
                let [F, v] = (0, T.default)(C.content);
                F && (C.content = v, C.flags = (0, O.addFlag)(null !== (t = C.flags) && void 0 !== t ? t : 0, P.MessageFlags.SUPPRESS_NOTIFICATIONS));
                let w = null !== (l = M.nonce) && void 0 !== l ? l : (0, c.createNonce)(),
                    b = (0, c.default)({
                        channelId: f,
                        content: C.content,
                        tts: null !== (a = null == I ? void 0 : I.tts) && void 0 !== a && a,
                        type: C.type,
                        messageReference: C.message_reference,
                        flags: C.flags,
                        nonce: w
                    });
                C.nonce = w, D.on("start", e => {
                    u = (0, E.createMessageRecord)({
                        ...b,
                        id: e.id
                    }), n.default.dispatch({
                        type: "UPLOAD_START",
                        channelId: f,
                        file: e,
                        message: u,
                        uploader: D
                    })
                }), D.on("progress", e => {
                    n.default.dispatch({
                        type: "UPLOAD_PROGRESS",
                        channelId: f,
                        file: e
                    })
                });
                D.on("error", (e, t, l, a) => {
                    if (n.default.dispatch({
                            type: "UPLOAD_FAIL",
                            channelId: f,
                            file: e,
                            messageRecord: u
                        }), (0, A.logMessageSendFailure)({
                            fileItems: e.items,
                            failureCode: t,
                            errorMessage: null == a ? void 0 : a.msg
                        }), t === P.AbortCodes.EXPLICIT_CONTENT) {
                        r.default.sendClydeError(f, t);
                        return
                    }
                    if (t === P.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) {
                        let e = {
                                code: t,
                                message: null == l ? void 0 : l.message
                            },
                            a = null == u ? null : {
                                type: d.MessageDataType.SEND,
                                message: {
                                    ...u,
                                    channelId: f
                                }
                            };
                        (0, i.openUploadError)({
                            title: U.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                            help: (0, p.getAutomodErrorMessage)(a, e)
                        });
                        return
                    }
                    t !== P.AbortCodes.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS && ((0, i.openUploadError)({
                        title: U.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                        help: U.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP
                    }), "" !== C.content && "" === m.default.getDraft(f, R) && s.default.saveDraft(f, C.content, R), 0 === L.default.getUploadCount(f, R) && o.default.setUploads({
                        channelId: f,
                        uploads: y,
                        draftType: R
                    }))
                }), D.on("complete", e => {
                    n.default.dispatch({
                        type: "UPLOAD_COMPLETE",
                        channelId: f,
                        file: e,
                        aborted: D._aborted
                    })
                }), D.uploadFiles(y, C)
            }
            var R = {
                instantBatchUpload: function(e) {
                    let {
                        channelId: t,
                        files: l,
                        draftType: a,
                        isThumbnail: n = !1,
                        filesMetadata: s = []
                    } = e, r = Array.from(l).map((e, l) => {
                        let a = null != s ? s[l] : {};
                        return new u.CloudUpload({
                            file: e,
                            platform: f.UploadPlatform.WEB,
                            isThumbnail: n,
                            ...a
                        }, t)
                    });
                    y({
                        channelId: t,
                        uploads: r,
                        draftType: a
                    })
                },
                upload: function e(t) {
                    let {
                        channelId: l,
                        file: o,
                        draftType: d,
                        message: u,
                        hasSpoiler: f,
                        filename: p
                    } = t, E = {
                        content: "",
                        tts: !1,
                        hasSpoiler: f,
                        filename: p
                    };
                    if (null != u) {
                        E.content = u.content, E.tts = u.tts, E.channel_id = u.channel_id;
                        let e = g.default.getPendingReply(l);
                        if (null != e) {
                            let t = r.default.getSendMessageOptionsForReply(e);
                            E.type = P.MessageTypes.REPLY, E.message_reference = t.messageReference, E.allowed_mentions = t.allowedMentions, (0, h.deletePendingReply)(l)
                        }
                    }
                    let c = new _.default(P.Endpoints.MESSAGES(l));
                    c.on("start", e => {
                        n.default.dispatch({
                            type: "UPLOAD_START",
                            channelId: l,
                            file: e,
                            uploader: c
                        })
                    }), c.on("progress", e => {
                        n.default.dispatch({
                            type: "UPLOAD_PROGRESS",
                            channelId: l,
                            file: e
                        })
                    }), c.on("error", (t, f) => {
                        if (n.default.dispatch({
                                type: "UPLOAD_FAIL",
                                channelId: l,
                                file: t
                            }), (0, A.logMessageSendFailure)({
                                fileItems: t.items,
                                failureCode: f
                            }), f === P.AbortCodes.EXPLICIT_CONTENT) {
                            r.default.sendClydeError(l, f);
                            return
                        }(0, i.openUploadError)({
                            title: U.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                            help: U.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
                                onClick: () => {
                                    (0, a.closeModal)(i.UPLOAD_ERROR_MODAL_KEY), e({
                                        channelId: l,
                                        file: o,
                                        draftType: d,
                                        message: u
                                    })
                                }
                            })
                        }), "" !== E.content && "" === m.default.getDraft(l, d) && s.default.saveDraft(l, E.content, d)
                    }), c.on("complete", e => {
                        n.default.dispatch({
                            type: "UPLOAD_COMPLETE",
                            channelId: l,
                            file: e
                        })
                    }), c.upload(o, E)
                },
                uploadFiles: y,
                cancel(e) {
                    if (n.default.dispatch({
                            type: "UPLOAD_CANCEL_REQUEST",
                            file: e
                        }), null != e.draftContent && null != e.channelId) {
                        let t = m.default.getDraft(e.channelId, m.DraftType.ChannelMessage);
                        "" === t && n.default.dispatch({
                            type: "DRAFT_SAVE",
                            channelId: e.channelId,
                            draft: e.draftContent,
                            draftType: m.DraftType.ChannelMessage
                        })
                    }
                }
            }
        },
        681736: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            }), l("424973");
            var a, n = l("872717"),
                s = l("448993"),
                r = l("981112"),
                o = l("966724"),
                i = l("980134"),
                d = l("782340");
            a = class extends r.default {
                async uploadFiles(e, t) {
                    let {
                        addFilesTo: l
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    super.upload({
                        name: d.default.Messages.ATTACHMENT_PROCESSING
                    }, t, e);
                    let a = new AbortController;
                    try {
                        if (this.files = e, this._aborted) return;
                        if (this._handleStart(() => a.abort()), !await this.compressAndCheckFileSize()) return;
                        this.setUploadingTextForUI(), await (0, r.stageAttachmentFiles)(this.files, !0, this._recomputeProgress.bind(this))
                    } catch (e) {
                        this._handleException(e)
                    }
                    try {
                        return await this._createMessage(a.signal, t, l)
                    } catch (e) {
                        if (this._raiseEndpointErrors) throw e;
                        this._handleException(e)
                    }
                }
                async _createMessage(e, t, l) {
                    let a;
                    let r = [];
                    this.files.forEach((e, t) => {
                        let l = (0, i.getAttachmentPayload)(e, t);
                        e.item.platform === o.UploadPlatform.WEB && r.push({
                            ...l
                        })
                    }), a = null != l && null != t ? this._addAttachmentsToPayload(t, l, r) : {
                        ...t,
                        attachments: r
                    };
                    let d = {
                            url: this._url,
                            body: a,
                            signal: e
                        },
                        u = "POST" === this._method ? n.default.post : n.default.patch;
                    try {
                        let e = await u(d);
                        return this._handleComplete(e.body), e.body
                    } catch (e) {
                        var f;
                        if (this._raiseEndpointErrors) throw new s.APIError(e);
                        this._handleError({
                            code: null == e ? void 0 : null === (f = e.body) || void 0 === f ? void 0 : f.code,
                            body: null == e ? void 0 : e.body
                        })
                    }
                }
                constructor(e, t = "POST", l) {
                    super(e, t, l)
                }
            }
        },
        412861: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                showUploadFileSizeExceededError: function() {
                    return m
                },
                promptToUpload: function() {
                    return L
                }
            }), l("424973"), l("222007"), l("70102");
            var a = l("255397"),
                n = l("81594"),
                s = l("783480"),
                r = l("336522"),
                o = l("966724"),
                i = l("716241"),
                d = l("191145"),
                u = l("585722"),
                f = l("697218"),
                _ = l("599110"),
                p = l("254490"),
                E = l("719923"),
                c = l("834021"),
                A = l("49111"),
                h = l("894488"),
                g = l("646718"),
                T = l("782340");

            function m(e, t) {
                let l = f.default.getCurrentUser(),
                    a = e.getGuildId(),
                    n = p.maxFileSize(a),
                    s = [],
                    o = 0,
                    d = 0,
                    u = 0,
                    _ = [];
                for (let e of t) u += 1, o += e.size, s.push(e.size), e.size > d && (d = e.size), null != e.type ? _.push(e.type) : _.push("unknown");
                if (d > n) {
                    (0, i.trackWithMetadata)(A.AnalyticEvents.FILE_SIZE_LIMIT_EXCEEDED, {
                        channel_id: e.id,
                        guild_id: a,
                        user_individual_file_size_limit: n,
                        pre_compression_file_sizes: s,
                        pre_compression_aggregate_file_size: o,
                        num_attachments: u,
                        error_type: h.FileUploadErrorTypes.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
                        attachment_mimetypes: _
                    }), (0, r.openUploadError)({
                        title: T.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                        help: (0, c.getErrorHelp)(l, a),
                        showPremiumUpsell: !(0, E.isPremiumExactly)(l, g.PremiumTypes.TIER_2),
                        fileSize: d
                    });
                    return
                }(0, r.openUploadError)({
                    title: T.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    help: T.default.Messages.UPLOAD_AREA_REQUEST_LIMIT_HELP.format({
                        maxSize: p.sizeString(p.getMaxRequestSize())
                    })
                })
            }

            function L(e, t, l) {
                let {
                    filesMetadata: i,
                    requireConfirm: f = !0,
                    showLargeMessageDialog: p = !1,
                    isThumbnail: E = !1
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (e.length < 1) return;
                if (null != i && i.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
                let h = t.getGuildId();
                if ((0, c.filesExceedUploadLimits)(e, h)) {
                    m(t, e);
                    return
                }
                if (u.default.getUploadCount(t.id, l) + e.length > A.MAX_UPLOAD_COUNT) {
                    (0, r.openUploadError)({
                        title: T.default.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
                        help: T.default.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
                            limit: A.MAX_UPLOAD_COUNT
                        })
                    }), _.default.track(A.AnalyticEvents.UPLOAD_FILE_LIMIT_ERROR, {
                        existing_count: u.default.getUploadCount(t.id, l),
                        new_count: e.length
                    });
                    return
                }
                if ((t.type === A.ChannelTypes.GUILD_VOICE || t.type === A.ChannelTypes.GUILD_STAGE_VOICE) && !d.default.getChatOpen(t.id) && a.default.updateChatOpen(t.id, !0), f) {
                    let a = Array.from(e).map((e, t) => ({
                        file: e,
                        platform: o.UploadPlatform.WEB,
                        isThumbnail: E,
                        ...null == i ? void 0 : i[t]
                    }));
                    n.default.addFiles({
                        files: a,
                        channelId: t.id,
                        showLargeMessageDialog: p,
                        draftType: l
                    })
                } else s.default.instantBatchUpload({
                    channelId: t.id,
                    files: e,
                    draftType: l,
                    isThumbnail: E,
                    filesMetadata: i
                })
            }
        },
        834021: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                getErrorHelp: function() {
                    return i
                },
                filesExceedUploadLimits: function() {
                    return d
                },
                getWebUploadFiles: function() {
                    return u
                }
            }), l("808653"), l("424973");
            var a = l("966724"),
                n = l("254490"),
                s = l("719923"),
                r = l("646718"),
                o = l("782340");

            function i(e, t) {
                let l = n.sizeString(n.maxFileSize(t));
                return s.default.isPremium(e, r.PremiumTypes.TIER_2) ? o.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                    maxSize: l
                }) : s.default.isPremium(e, r.PremiumTypes.TIER_1) ? o.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP_PREMIUM_TIER_1.format({
                    maxSize: l
                }) : o.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                    maxSize: l
                })
            }

            function d(e, t) {
                return n.anyFileTooLarge(e, t) || n.uploadSumTooLarge(e)
            }

            function u(e) {
                return e.reduce((e, t) => (t.item.platform === a.UploadPlatform.WEB && e.push(t.item.file), e), [])
            }
        }
    }
]);
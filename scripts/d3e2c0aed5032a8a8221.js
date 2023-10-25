(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["82329"], {
        7115: function(e, t, s) {
            "use strict";
            e.exports = s.p + "939a6d418697a2811ab8.png"
        },
        783480: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return S
                }
            });
            var l = s("77078"),
                a = s("913144"),
                i = s("295426"),
                n = s("819689"),
                r = s("81594"),
                o = s("336522"),
                d = s("979911"),
                c = s("282928"),
                u = s("966724"),
                _ = s("681736"),
                h = s("600798"),
                f = s("692038"),
                p = s("815297"),
                E = s("168730"),
                g = s("529805"),
                A = s("685841"),
                m = s("804888"),
                T = s("474643"),
                L = s("585722"),
                O = s("568734"),
                U = s("49111"),
                M = s("782340");

            function P(e) {
                var t, s, l;
                let c, {
                        channelId: u,
                        uploads: P,
                        draftType: S,
                        parsedMessage: C,
                        options: y = {}
                    } = e,
                    I = new _.default(U.Endpoints.MESSAGES(u)),
                    R = {
                        content: "",
                        nonce: "",
                        channel_id: u,
                        type: U.MessageTypes.DEFAULT,
                        sticker_ids: null == y ? void 0 : y.stickerIds
                    };
                null != C && (R.content = null == C ? void 0 : C.content);
                let D = A.default.getPendingReply(u);
                null != D && (R.type = U.MessageTypes.REPLY, R.message_reference = y.messageReference, R.allowed_mentions = y.allowedMentions, (0, g.deletePendingReply)(u));
                let [v, N] = (0, m.default)(R.content);
                v && (R.content = N, R.flags = (0, O.addFlag)(null !== (t = R.flags) && void 0 !== t ? t : 0, U.MessageFlags.SUPPRESS_NOTIFICATIONS));
                let G = null !== (s = y.nonce) && void 0 !== s ? s : (0, p.createNonce)(),
                    F = (0, p.default)({
                        channelId: u,
                        content: R.content,
                        tts: null !== (l = null == C ? void 0 : C.tts) && void 0 !== l && l,
                        type: R.type,
                        messageReference: R.message_reference,
                        flags: R.flags,
                        nonce: G
                    });
                R.nonce = G, I.on("start", e => {
                    c = (0, f.createMessageRecord)({
                        ...F,
                        id: e.id
                    }), a.default.dispatch({
                        type: "UPLOAD_START",
                        channelId: u,
                        file: e,
                        message: c,
                        uploader: I
                    })
                }), I.on("progress", e => {
                    a.default.dispatch({
                        type: "UPLOAD_PROGRESS",
                        channelId: u,
                        file: e
                    })
                });
                I.on("error", (e, t, s, l) => {
                    if (a.default.dispatch({
                            type: "UPLOAD_FAIL",
                            channelId: u,
                            file: e,
                            messageRecord: c
                        }), (0, E.logMessageSendFailure)({
                            fileItems: e.items,
                            failureCode: t,
                            errorMessage: null == l ? void 0 : l.msg
                        }), t === U.AbortCodes.EXPLICIT_CONTENT) {
                        n.default.sendClydeError(u, t);
                        return
                    }
                    if (t === U.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) {
                        let e = {
                                code: t,
                                message: null == s ? void 0 : s.message
                            },
                            l = null == c ? null : {
                                type: d.MessageDataType.SEND,
                                message: {
                                    ...c,
                                    channelId: u
                                }
                            };
                        (0, o.openUploadError)({
                            title: M.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                            help: (0, h.getAutomodErrorMessage)(l, e)
                        });
                        return
                    }
                    t !== U.AbortCodes.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS && ((0, o.openUploadError)({
                        title: M.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                        help: M.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP
                    }), "" !== R.content && "" === T.default.getDraft(u, S) && i.default.saveDraft(u, R.content, S), 0 === L.default.getUploadCount(u, S) && r.default.setUploads({
                        channelId: u,
                        uploads: P,
                        draftType: S
                    }))
                }), I.on("complete", e => {
                    a.default.dispatch({
                        type: "UPLOAD_COMPLETE",
                        channelId: u,
                        file: e,
                        aborted: I._aborted
                    })
                }), I.uploadFiles(P, R)
            }
            var S = {
                instantBatchUpload: function(e) {
                    let {
                        channelId: t,
                        files: s,
                        draftType: l,
                        isThumbnail: a = !1,
                        isClip: i = !1
                    } = e, n = Array.from(s).map(e => new c.CloudUpload({
                        file: e,
                        platform: u.UploadPlatform.WEB,
                        isThumbnail: a,
                        isClip: i
                    }, t));
                    P({
                        channelId: t,
                        uploads: n,
                        draftType: l
                    })
                },
                upload: function e(t) {
                    let {
                        channelId: s,
                        file: r,
                        draftType: d,
                        message: c,
                        hasSpoiler: u,
                        filename: h
                    } = t, f = {
                        content: "",
                        tts: !1,
                        hasSpoiler: u,
                        filename: h
                    };
                    if (null != c) {
                        f.content = c.content, f.tts = c.tts, f.channel_id = c.channel_id;
                        let e = A.default.getPendingReply(s);
                        if (null != e) {
                            let t = n.default.getSendMessageOptionsForReply(e);
                            f.type = U.MessageTypes.REPLY, f.message_reference = t.messageReference, f.allowed_mentions = t.allowedMentions, (0, g.deletePendingReply)(s)
                        }
                    }
                    let p = new _.default(U.Endpoints.MESSAGES(s));
                    p.on("start", e => {
                        a.default.dispatch({
                            type: "UPLOAD_START",
                            channelId: s,
                            file: e,
                            uploader: p
                        })
                    }), p.on("progress", e => {
                        a.default.dispatch({
                            type: "UPLOAD_PROGRESS",
                            channelId: s,
                            file: e
                        })
                    }), p.on("error", (t, u) => {
                        if (a.default.dispatch({
                                type: "UPLOAD_FAIL",
                                channelId: s,
                                file: t
                            }), (0, E.logMessageSendFailure)({
                                fileItems: t.items,
                                failureCode: u
                            }), u === U.AbortCodes.EXPLICIT_CONTENT) {
                            n.default.sendClydeError(s, u);
                            return
                        }(0, o.openUploadError)({
                            title: M.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                            help: M.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
                                onClick: () => {
                                    (0, l.closeModal)(o.UPLOAD_ERROR_MODAL_KEY), e({
                                        channelId: s,
                                        file: r,
                                        draftType: d,
                                        message: c
                                    })
                                }
                            })
                        }), "" !== f.content && "" === T.default.getDraft(s, d) && i.default.saveDraft(s, f.content, d)
                    }), p.on("complete", e => {
                        a.default.dispatch({
                            type: "UPLOAD_COMPLETE",
                            channelId: s,
                            file: e
                        })
                    }), p.upload(r, f)
                },
                uploadFiles: P,
                cancel(e) {
                    if (a.default.dispatch({
                            type: "UPLOAD_CANCEL_REQUEST",
                            file: e
                        }), null != e.draftContent && null != e.channelId) {
                        let t = T.default.getDraft(e.channelId, T.DraftType.ChannelMessage);
                        "" === t && a.default.dispatch({
                            type: "DRAFT_SAVE",
                            channelId: e.channelId,
                            draft: e.draftContent,
                            draftType: T.DraftType.ChannelMessage
                        })
                    }
                }
            }
        },
        981112: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return h
                },
                stageAttachmentFiles: function() {
                    return f
                }
            });
            var l = s("307391"),
                a = s("994440"),
                i = s("282928"),
                n = s("142852"),
                r = s("402752"),
                o = s("572868"),
                d = s("49111"),
                c = s("894488"),
                u = s("782340");
            let _ = new l.default("CloudUploaderBase.tsx");
            class h extends o.default {
                _fileSize() {
                    return this.files.reduce((e, t) => {
                        var s;
                        return e += null !== (s = t.currentSize) && void 0 !== s ? s : 0
                    }, 0)
                }
                async compressAndCheckFileSize() {
                    var e, t;
                    let s = (0, n.getUploadTarget)(null === (t = this.files[0]) || void 0 === t ? void 0 : null === (e = t.item) || void 0 === e ? void 0 : e.target);
                    return this.files.length > s.getMaxAttachmentsCount() ? (_.log("Too many attachments for ".concat(this.id)), this._handleError({
                        code: d.AbortCodes.TOO_MANY_ATTACHMENTS
                    }), !1) : !(this._fileSize() > s.getMaxTotalAttachmentSize()) || (this._handleError({
                        code: d.AbortCodes.ENTITY_TOO_LARGE,
                        reason: {
                            type: c.FileUploadErrorTypes.POSTCOMPRESSION_SUM_TOO_LARGE
                        }
                    }), !1)
                }
                _filesTooLarge() {
                    return this.files.some(e => e.error === d.AbortCodes.ENTITY_TOO_LARGE)
                }
                setUploadingTextForUI() {
                    let e = 1 === this.files.length && null != this.files[0].filename ? this.files[0].filename : u.default.Messages.UPLOADING_FILES.format({
                            count: this.files.length
                        }),
                        t = this.files.some(e => e.isImage),
                        s = this.files.some(e => e.isVideo),
                        l = this._fileSize();
                    _.log("setUploadingTextForUI - total content: ".concat(l, " bytes and ").concat(this.files.length, " attachments for ").concat(this.id)), this._file = {
                        ...this._file,
                        totalPostCompressionSize: l,
                        currentSize: l,
                        name: e,
                        hasVideo: s,
                        hasImage: t,
                        attachmentsCount: this.files.length,
                        items: this.files
                    }
                }
                _recomputeProgress() {
                    let {
                        loaded: e,
                        total: t
                    } = this._recomputeProgressTotal(), s = this._recomputeProgressByFile();
                    this._handleProgress(e, t, s)
                }
                _recomputeProgressTotal() {
                    let e = this._fileSize(),
                        t = this.files.reduce((e, t) => {
                            var s;
                            return e += null !== (s = t.loaded) && void 0 !== s ? s : 0
                        }, 0);
                    return {
                        loaded: t,
                        total: e
                    }
                }
                _recomputeProgressByFile() {
                    let e = {};
                    return this.files.forEach(t => {
                        e[t.id] = (0, r.calculateProgress)(t.loaded, t.currentSize)
                    }), e
                }
                cancel() {
                    _.log("Cancel called for ".concat(this.id)), !this._aborted && (this._aborted = !0, null != this._cancel && this._cancel(), this.files.forEach(e => e.cancel()), this._handleComplete())
                }
                async cancelItem(e) {
                    _.log("Cancel called for ".concat(this.id, " for item ").concat(e));
                    let t = this.files.find(t => t.id === e);
                    if (null == t || t.status === i.CloudUploadStatus.CANCELED) return;
                    let s = this.files.indexOf(t);
                    this.files = [...this.files.slice(0, s), ...this.files.slice(s + 1)], this._file = {
                        ...this._file,
                        items: this.files
                    }, await (0, a.cancelGetAttachmentFile)(t), t.cancel(), this.emit("cancel-upload-item", this._file), 0 === this.files.length && this.cancel()
                }
                failed() {
                    return this.files.some(e => e.status === i.CloudUploadStatus.ERROR)
                }
                _remainingUploadCount() {
                    let e = this.files;
                    return e.length - e.filter(e => e.status === i.CloudUploadStatus.COMPLETED).length
                }
                clear() {
                    this.cancel(), this.files = []
                }
                constructor(...e) {
                    super(...e), this.files = []
                }
            }
            async function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    s = arguments.length > 2 ? arguments[2] : void 0,
                    l = e.map(e => new Promise((l, a) => {
                        switch (e.status) {
                            case i.CloudUploadStatus.NOT_STARTED:
                                e.upload();
                                break;
                            case i.CloudUploadStatus.COMPLETED:
                                l("complete");
                                break;
                            case i.CloudUploadStatus.ERROR:
                                t && e.error !== d.AbortCodes.ENTITY_TOO_LARGE ? e.upload() : a(Error("File failed to upload"));
                                break;
                            case i.CloudUploadStatus.CANCELED:
                                a(Error("Upload is canceled"))
                        }
                        e.on("complete", () => {
                            l("complete")
                        }), e.on("error", () => {
                            a(Error("File ".concat(e.id, " failed to upload")))
                        }), e.on("progress", (e, t) => {
                            null == s || s(e, t)
                        })
                    }));
                await Promise.all(l)
            }
        },
        572868: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            });
            var l = s("813361"),
                a = s("427964"),
                i = s.n(a),
                n = s("605250"),
                r = s("402752"),
                o = s("894488");
            let d = new n.default("UploaderBase.tsx");
            class c extends l.EventEmitter {
                _addAttachmentsToPayload(e, t, s) {
                    let l = {
                            ...e
                        },
                        a = [...i.get(l, t, []), ...s];
                    return i.set(l, t, a)
                }
                clearProcessingMessageInterval() {
                    null != this.processingMessageChangeInterval && (clearInterval(this.processingMessageChangeInterval), this.processingMessageChangeInterval = void 0)
                }
                cancel() {
                    d.log("cancel() for ".concat(this.id)), this._aborted = !0, null != this._cancel && this._cancel(), this._handleComplete()
                }
                cancelItem(e) {
                    throw Error("cancelItem() is not implemented on UploaderBase; must implement cancelItem() on subclass")
                }
                upload(e, t, s) {
                    if (null != this._cancel) throw Error("Uploader.upload(...): An upload is already in progress.");
                    this._lastUpdate = Date.now(), this._loaded = 0, this._file = {
                        id: this.id,
                        name: e.name,
                        currentSize: 0,
                        totalPreCompressionSize: 0,
                        compressionProgress: 0,
                        progress: 0,
                        rate: 0,
                        hasImage: !1,
                        hasVideo: !1,
                        attachmentsCount: 0,
                        draftContent: null == t ? void 0 : t.content,
                        channelId: null == t ? void 0 : t.channel_id,
                        items: s
                    }
                }
                constructor(e, t = "POST", s) {
                    var l;
                    super(), this._token = "", this._lastUpdate = 0, this._loaded = 0, this._aborted = !1, this._errored = !1, this._raiseEndpointErrors = !1, this.alreadyStarted = !1, this._handleStart = e => {
                        this._cancel = e, !this.alreadyStarted && this.emit("start", this._file), this.alreadyStarted = !0
                    }, this._handleProgress = (e, t, s) => {
                        let l = Date.now(),
                            a = (0, r.calculateProgress)(e, t),
                            i = Math.floor((e - this._loaded) / ((l - this._lastUpdate) / 1e3));
                        if (null != s) {
                            var n;
                            null === (n = this._file.items) || void 0 === n || n.forEach(e => {
                                e.item.progress = s[e.id]
                            })
                        }
                        this._lastUpdate = l, this._loaded = e, this._file = {
                            ...this._file,
                            currentSize: t,
                            progress: a,
                            rate: i
                        }, this.emit("progress", this._file)
                    }, this._handleException = e => {
                        this._handleError({
                            reason: {
                                type: o.FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN,
                                msg: e.toString()
                            }
                        })
                    }, this._handleAborted = () => {
                        this.clearProcessingMessageInterval()
                    }, this._handleError = e => {
                        let {
                            code: t,
                            reason: s,
                            body: l
                        } = e;
                        this.clearProcessingMessageInterval(), !this._aborted && (this._errored = !0, d.log("_handleError: ".concat(t, " (").concat(JSON.stringify(s), ") for ").concat(this.id)), this.emit("error", this._file, t, l, s), this.removeAllListeners())
                    }, this._handleComplete = e => {
                        this.clearProcessingMessageInterval(), d.log("_handleComplete for ".concat(this.id)), this.emit("complete", this._file, e), this.removeAllListeners()
                    }, this.id = i.uniqueId("Uploader"), this._url = e, this._method = t, this._raiseEndpointErrors = null !== (l = null == s ? void 0 : s.raiseEndpointErrors) && void 0 !== l && l
                }
            }
        },
        681736: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            });
            var l = s("990746"),
                a = s("448993"),
                i = s("981112"),
                n = s("966724"),
                r = s("980134"),
                o = s("782340");
            class d extends i.default {
                async uploadFiles(e, t) {
                    let {
                        addFilesTo: s
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    super.upload({
                        name: o.default.Messages.ATTACHMENT_PROCESSING
                    }, t, e);
                    let l = new AbortController;
                    try {
                        if (this.files = e, this._aborted) return;
                        if (this._handleStart(() => l.abort()), !await this.compressAndCheckFileSize()) return;
                        this.setUploadingTextForUI(), await (0, i.stageAttachmentFiles)(this.files, !0, this._recomputeProgress.bind(this))
                    } catch (e) {
                        this._handleException(e)
                    }
                    try {
                        return await this._createMessage(l.signal, t, s)
                    } catch (e) {
                        if (this._raiseEndpointErrors) throw e;
                        this._handleException(e)
                    }
                }
                async _createMessage(e, t, s) {
                    let i;
                    let o = [];
                    this.files.forEach((e, t) => {
                        let s = (0, r.getAttachmentPayload)(e, t);
                        e.item.platform === n.UploadPlatform.WEB && o.push({
                            ...s
                        })
                    }), i = null != s && null != t ? this._addAttachmentsToPayload(t, s, o) : {
                        ...t,
                        attachments: o
                    };
                    let d = {
                            url: this._url,
                            body: i,
                            signal: e
                        },
                        c = "POST" === this._method ? l.default.post : l.default.patch;
                    try {
                        let e = await c(d);
                        return this._handleComplete(e.body), e.body
                    } catch (e) {
                        var u;
                        if (this._raiseEndpointErrors) throw new a.APIError(e);
                        this._handleError({
                            code: null == e ? void 0 : null === (u = e.body) || void 0 === u ? void 0 : u.code,
                            body: null == e ? void 0 : e.body
                        })
                    }
                }
                constructor(e, t = "POST", s) {
                    super(e, t, s)
                }
            }
        },
        571034: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            });
            var l = s("920040");
            s("773670");
            var a = s("474643"),
                i = s("254490"),
                n = s("412861"),
                r = s("396053"),
                o = s("789946"),
                d = s("646718"),
                c = s("49111"),
                u = s("782340");

            function _(e) {
                let {
                    channel: t,
                    onClose: _,
                    content: h,
                    ...f
                } = e;

                function p() {
                    _(), (0, r.navigateToPremiumMarketingPage)(!0)
                }
                return (0, l.jsx)(o.default, {
                    artURL: s("7115"),
                    type: d.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL,
                    title: u.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_HEADER,
                    body: u.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_BODY.format({
                        maxLength: c.MAX_MESSAGE_LENGTH,
                        onLearnMore: p
                    }),
                    context: u.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT.format({
                        maxLength: c.MAX_MESSAGE_LENGTH
                    }),
                    glowUp: u.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_GLOW_UP.format({
                        onLearnMore: p
                    }),
                    analyticsSource: {
                        page: function(e) {
                            return (null == e ? void 0 : e.getGuildId()) != null ? c.AnalyticsPages.GUILD_CHANNEL : (null == e ? void 0 : e.isGroupDM()) || (null == e ? void 0 : e.isPrivate()) ? c.AnalyticsPages.DM_CHANNEL : null
                        }(t)
                    },
                    analyticsLocation: {
                        section: c.AnalyticsSections.MESSAGE_LENGTH_UPSELL_MODAL,
                        object: c.AnalyticsObjects.BUTTON_CTA
                    },
                    onClose: _,
                    secondaryCTA: u.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_UPLOAD,
                    onSecondaryClick: function() {
                        _();
                        let e = new Blob([h], {
                            type: "text/plain"
                        });
                        (0, n.promptToUpload)([(0, i.makeFile)(e, "message.txt")], t, a.DraftType.ChannelMessage, {
                            requireConfirm: !0,
                            showLargeMessageDialog: !0
                        })
                    },
                    ...f
                })
            }
        },
        412861: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                showUploadFileSizeExceededError: function() {
                    return T
                },
                promptToUpload: function() {
                    return L
                }
            });
            var l = s("255397"),
                a = s("81594"),
                i = s("783480"),
                n = s("336522"),
                r = s("966724"),
                o = s("716241"),
                d = s("191145"),
                c = s("585722"),
                u = s("697218"),
                _ = s("599110"),
                h = s("254490"),
                f = s("719923"),
                p = s("834021"),
                E = s("49111"),
                g = s("894488"),
                A = s("646718"),
                m = s("782340");

            function T(e, t) {
                let s = u.default.getCurrentUser(),
                    l = e.getGuildId(),
                    a = h.maxFileSize(l),
                    i = [],
                    r = 0,
                    d = 0,
                    c = 0,
                    _ = [];
                for (let e of t) c += 1, r += e.size, i.push(e.size), e.size > d && (d = e.size), null != e.type ? _.push(e.type) : _.push("unknown");
                if (d > a) {
                    (0, o.trackWithMetadata)(E.AnalyticEvents.FILE_SIZE_LIMIT_EXCEEDED, {
                        channel_id: e.id,
                        guild_id: l,
                        user_individual_file_size_limit: a,
                        pre_compression_file_sizes: i,
                        pre_compression_aggregate_file_size: r,
                        num_attachments: c,
                        error_type: g.FileUploadErrorTypes.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
                        attachment_mimetypes: _
                    }), (0, n.openUploadError)({
                        title: m.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                        help: (0, p.getErrorHelp)(s, l),
                        showPremiumUpsell: !(0, f.isPremiumExactly)(s, A.PremiumTypes.TIER_2),
                        fileSize: d
                    });
                    return
                }(0, n.openUploadError)({
                    title: m.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    help: m.default.Messages.UPLOAD_AREA_REQUEST_LIMIT_HELP.format({
                        maxSize: h.sizeString(h.getMaxRequestSize())
                    })
                })
            }

            function L(e, t, s) {
                let {
                    requireConfirm: o = !0,
                    showLargeMessageDialog: u = !1,
                    isThumbnail: h = !1,
                    isClip: f = !1
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (e.length < 1) return;
                let g = t.getGuildId();
                if ((0, p.filesExceedUploadLimits)(e, g)) {
                    T(t, e);
                    return
                }
                if (c.default.getUploadCount(t.id, s) + e.length > E.MAX_UPLOAD_COUNT) {
                    (0, n.openUploadError)({
                        title: m.default.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
                        help: m.default.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
                            limit: E.MAX_UPLOAD_COUNT
                        })
                    }), _.default.track(E.AnalyticEvents.UPLOAD_FILE_LIMIT_ERROR, {
                        existing_count: c.default.getUploadCount(t.id, s),
                        new_count: e.length
                    });
                    return
                }
                if ((t.type === E.ChannelTypes.GUILD_VOICE || t.type === E.ChannelTypes.GUILD_STAGE_VOICE) && !d.default.getChatOpen(t.id) && l.default.updateChatOpen(t.id, !0), o) {
                    let l = Array.from(e).map(e => ({
                        file: e,
                        platform: r.UploadPlatform.WEB,
                        isThumbnail: h,
                        isClip: f
                    }));
                    a.default.addFiles({
                        files: l,
                        channelId: t.id,
                        showLargeMessageDialog: u,
                        draftType: s
                    })
                } else i.default.instantBatchUpload({
                    channelId: t.id,
                    files: e,
                    draftType: s,
                    isThumbnail: h,
                    isClip: f
                })
            }
        },
        834021: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getErrorHelp: function() {
                    return o
                },
                filesExceedUploadLimits: function() {
                    return d
                },
                getWebUploadFiles: function() {
                    return c
                }
            });
            var l = s("966724"),
                a = s("254490"),
                i = s("719923"),
                n = s("646718"),
                r = s("782340");

            function o(e, t) {
                let s = a.sizeString(a.maxFileSize(t));
                return i.default.isPremium(e, n.PremiumTypes.TIER_2) ? r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                    maxSize: s
                }) : i.default.isPremium(e, n.PremiumTypes.TIER_1) ? r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP_PREMIUM_TIER_1.format({
                    maxSize: s
                }) : r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                    maxSize: s
                })
            }

            function d(e, t) {
                return a.anyFileTooLarge(e, t) || a.uploadSumTooLarge(e)
            }

            function c(e) {
                return e.reduce((e, t) => (t.item.platform === l.UploadPlatform.WEB && e.push(t.item.file), e), [])
            }
        }
    }
]);
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["38507"], {
        7115: function(e, t, s) {
            "use strict";
            e.exports = s.p + "939a6d418697a2811ab8.png"
        },
        981112: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                stageAttachmentFiles: function() {
                    return f
                },
                default: function() {
                    return i
                }
            }), s("808653"), s("222007"), s("70102");
            var i, l = s("811022"),
                a = s("994440"),
                r = s("282928"),
                o = s("142852"),
                n = s("402752"),
                c = s("572868"),
                d = s("49111"),
                h = s("894488"),
                u = s("782340");
            let _ = new l.default("CloudUploaderBase.tsx");
            async function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    s = arguments.length > 2 ? arguments[2] : void 0,
                    i = e.map(e => new Promise((i, l) => {
                        switch (e.status) {
                            case r.CloudUploadStatus.NOT_STARTED:
                                e.upload();
                                break;
                            case r.CloudUploadStatus.COMPLETED:
                                i("complete");
                                break;
                            case r.CloudUploadStatus.ERROR:
                                t && e.error !== d.AbortCodes.ENTITY_TOO_LARGE ? e.upload() : l(Error("File failed to upload"));
                                break;
                            case r.CloudUploadStatus.CANCELED:
                                l(Error("Upload is canceled"))
                        }
                        e.on("complete", () => {
                            i("complete")
                        }), e.on("error", () => {
                            l(Error("File ".concat(e.id, " failed to upload")))
                        }), e.on("progress", (e, t) => {
                            null == s || s(e, t)
                        })
                    }));
                await Promise.all(i)
            }
            i = class extends c.default {
                _fileSize() {
                    return this.files.reduce((e, t) => {
                        var s;
                        return e += null !== (s = t.currentSize) && void 0 !== s ? s : 0
                    }, 0)
                }
                async compressAndCheckFileSize() {
                    var e, t;
                    let s = (0, o.getUploadTarget)(null === (t = this.files[0]) || void 0 === t ? void 0 : null === (e = t.item) || void 0 === e ? void 0 : e.target);
                    return this.files.length > s.getMaxAttachmentsCount() ? (_.log("Too many attachments for ".concat(this.id)), this._handleError({
                        code: d.AbortCodes.TOO_MANY_ATTACHMENTS
                    }), !1) : !(this._fileSize() > s.getMaxTotalAttachmentSize()) || (this._handleError({
                        code: d.AbortCodes.ENTITY_TOO_LARGE,
                        reason: {
                            type: h.FileUploadErrorTypes.POSTCOMPRESSION_SUM_TOO_LARGE
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
                        i = this._fileSize();
                    _.log("setUploadingTextForUI - total content: ".concat(i, " bytes and ").concat(this.files.length, " attachments for ").concat(this.id)), this._file = {
                        ...this._file,
                        totalPostCompressionSize: i,
                        currentSize: i,
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
                        e[t.id] = (0, n.calculateProgress)(t.loaded, t.currentSize)
                    }), e
                }
                cancel() {
                    _.log("Cancel called for ".concat(this.id)), !this._aborted && (this._aborted = !0, null != this._cancel && this._cancel(), this.files.forEach(e => e.cancel()), this._handleComplete())
                }
                async cancelItem(e) {
                    _.log("Cancel called for ".concat(this.id, " for item ").concat(e));
                    let t = this.files.find(t => t.id === e);
                    if (null == t || t.status === r.CloudUploadStatus.CANCELED) return;
                    let s = this.files.indexOf(t);
                    this.files = [...this.files.slice(0, s), ...this.files.slice(s + 1)], this._file = {
                        ...this._file,
                        items: this.files
                    }, await (0, a.cancelGetAttachmentFile)(t), t.cancel(), this.emit("cancel-upload-item", this._file), 0 === this.files.length && this.cancel()
                }
                failed() {
                    return this.files.some(e => e.status === r.CloudUploadStatus.ERROR)
                }
                _remainingUploadCount() {
                    let e = this.files;
                    return e.length - e.filter(e => e.status === r.CloudUploadStatus.COMPLETED).length
                }
                clear() {
                    this.cancel(), this.files = []
                }
                constructor(...e) {
                    super(...e), this.files = []
                }
            }
        },
        572868: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            }), s("222007"), s("70102");
            var i, l = s("44170"),
                a = s("917351"),
                r = s.n(a),
                o = s("605250"),
                n = s("402752"),
                c = s("894488");
            let d = new o.default("UploaderBase.tsx");
            i = class extends l.EventEmitter {
                _addAttachmentsToPayload(e, t, s) {
                    let i = {
                            ...e
                        },
                        l = [...r.get(i, t, []), ...s];
                    return r.set(i, t, l)
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
                    var i;
                    super(), this._token = "", this._lastUpdate = 0, this._loaded = 0, this._aborted = !1, this._errored = !1, this._raiseEndpointErrors = !1, this.alreadyStarted = !1, this._handleStart = e => {
                        this._cancel = e, !this.alreadyStarted && this.emit("start", this._file), this.alreadyStarted = !0
                    }, this._handleProgress = (e, t, s) => {
                        let i = Date.now(),
                            l = (0, n.calculateProgress)(e, t),
                            a = Math.floor((e - this._loaded) / ((i - this._lastUpdate) / 1e3));
                        if (null != s) {
                            var r;
                            null === (r = this._file.items) || void 0 === r || r.forEach(e => {
                                e.item.progress = s[e.id]
                            })
                        }
                        this._lastUpdate = i, this._loaded = e, this._file = {
                            ...this._file,
                            currentSize: t,
                            progress: l,
                            rate: a
                        }, this.emit("progress", this._file)
                    }, this._handleException = e => {
                        this._handleError({
                            reason: {
                                type: c.FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN,
                                msg: e.toString()
                            }
                        })
                    }, this._handleAborted = () => {
                        this.clearProcessingMessageInterval()
                    }, this._handleError = e => {
                        let {
                            code: t,
                            reason: s,
                            body: i
                        } = e;
                        this.clearProcessingMessageInterval(), !this._aborted && (this._errored = !0, d.log("_handleError: ".concat(t, " (").concat(JSON.stringify(s), ") for ").concat(this.id)), this.emit("error", this._file, t, i, s), this.removeAllListeners())
                    }, this._handleComplete = e => {
                        this.clearProcessingMessageInterval(), d.log("_handleComplete for ".concat(this.id)), this.emit("complete", this._file, e), this.removeAllListeners()
                    }, this.id = r.uniqueId("Uploader"), this._url = e, this._method = t, this._raiseEndpointErrors = null !== (i = null == s ? void 0 : s.raiseEndpointErrors) && void 0 !== i && i
                }
            }
        },
        571034: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var i = s("37983");
            s("884691");
            var l = s("474643"),
                a = s("254490"),
                r = s("412861"),
                o = s("626301"),
                n = s("789946"),
                c = s("646718"),
                d = s("49111"),
                h = s("782340");

            function u(e) {
                var t;
                let {
                    channel: u,
                    onClose: _,
                    content: f,
                    ...p
                } = e;

                function g() {
                    _(), (0, o.navigateToPremiumMarketingPage)(!0)
                }
                return (0, i.jsx)(n.default, {
                    artURL: s("7115"),
                    type: c.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL,
                    title: h.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_HEADER,
                    body: h.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_BODY.format({
                        maxLength: d.MAX_MESSAGE_LENGTH,
                        onLearnMore: g
                    }),
                    context: h.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT.format({
                        maxLength: d.MAX_MESSAGE_LENGTH
                    }),
                    glowUp: h.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_GLOW_UP.format({
                        onLearnMore: g
                    }),
                    analyticsSource: {
                        page: (null == (t = u) ? void 0 : t.getGuildId()) != null ? d.AnalyticsPages.GUILD_CHANNEL : (null == t ? void 0 : t.isGroupDM()) || (null == t ? void 0 : t.isPrivate()) ? d.AnalyticsPages.DM_CHANNEL : null
                    },
                    analyticsLocation: {
                        section: d.AnalyticsSections.MESSAGE_LENGTH_UPSELL_MODAL,
                        object: d.AnalyticsObjects.BUTTON_CTA
                    },
                    onClose: _,
                    secondaryCTA: h.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_UPLOAD,
                    onSecondaryClick: function() {
                        _();
                        let e = new Blob([f], {
                            type: "text/plain"
                        });
                        (0, r.promptToUpload)([(0, a.makeFile)(e, "message.txt")], u, l.DraftType.ChannelMessage, {
                            requireConfirm: !0,
                            showLargeMessageDialog: !0
                        })
                    },
                    ...p
                })
            }
        }
    }
]);
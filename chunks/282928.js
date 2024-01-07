            "use strict";
            n.r(t), n.d(t, {
                CloudUploadStatus: function() {
                    return i
                },
                CloudUpload: function() {
                    return m
                }
            }), n("222007"), n("70102");
            var i, a, l = n("917351"),
                s = n.n(l),
                r = n("981980"),
                u = n("872717"),
                o = n("605250"),
                d = n("676574"),
                c = n("994440"),
                _ = n("286235"),
                E = n("980134"),
                f = n("966724"),
                h = n("142852"),
                p = n("49111");
            let T = new o.default("CloudUpload.tsx"),
                C = n("123010").default;
            (a = i || (i = {})).NOT_STARTED = "NOT_STARTED", a.STARTED = "STARTED", a.UPLOADING = "UPLOADING", a.ERROR = "ERROR", a.COMPLETED = "COMPLETED", a.CANCELED = "CANCELED";
            class m extends f.default {
                static fromJson(e) {
                    let {
                        item: t,
                        channelId: n,
                        showLargeMessageDialog: i,
                        reactNativeFileIndex: a
                    } = e, l = new m(t, n, i, a);
                    return "COMPLETED" !== l.status && (l.status = "NOT_STARTED"), Object.entries(e).forEach(e => {
                        let [t, n] = e;
                        !t.startsWith("_") && (l[t] = n)
                    }), l
                }
                retryOpts() {
                    return this.item.platform === f.UploadPlatform.REACT_NATIVE ? {
                        timeout: 36e5,
                        backoff: new r.default(500, 2048e3),
                        retries: 12
                    } : {
                        timeout: 36e5,
                        retries: 12,
                        backoff: new r.default
                    }
                }
                uploadFileToCloud() {
                    let e, t;
                    if (null == this.responseUrl) throw Error("_uploadFileToCloud - responseUrl is not set");
                    T.log("Uploading ".concat(this.id)), this.item.platform === f.UploadPlatform.REACT_NATIVE ? t = null != (e = {
                        type: this.item.mimeType,
                        uri: this.item.uri,
                        name: this.item.filename
                    }).type && "application/json" !== e.type ? e.type : "application/octet-stream" : (e = this.item.file, t = "application/octet-stream");
                    let n = s.throttle(e => {
                            this.emit("progress", e.loaded, e.total, e.loaded - this.loaded), this.loaded = e.loaded
                        }, 50),
                        i = {
                            "Content-Type": t
                        };
                    return u.default.put({
                        url: this.responseUrl,
                        body: e,
                        headers: i,
                        signal: this._abortController.signal,
                        onRequestProgress: n,
                        ...this.retryOpts()
                    })
                }
                async getSize() {
                    var e;
                    return null !== (e = this.currentSize) && void 0 !== e ? e : 0
                }
                async upload() {
                    var e, t, n;
                    if ("COMPLETED" === this.status) return;
                    if (this.setStatus("STARTED"), "CANCELED" === this.status) {
                        this.handleComplete(this.id);
                        return
                    }
                    let i = await C.getUploadPayload(this),
                        a = (0, h.getUploadTarget)(this.item.target);
                    if (null == i.filename || "" === i.filename || 0 === this.currentSize) {
                        T.error("File does not have a filename or size is 0.", JSON.stringify(i)), this.handleError(p.AbortCodes.INVALID_FILE_ASSET);
                        return
                    }
                    if ((null !== (e = this.currentSize) && void 0 !== e ? e : 0) > a.getMaxFileSize(this.channelId)) {
                        this.handleError(p.AbortCodes.ENTITY_TOO_LARGE);
                        return
                    }
                    if (d.default.get("upload_fail_50") && .5 > Math.random()) {
                        setTimeout(() => {
                            this.handleError(500)
                        }, 1e3);
                        return
                    }
                    try {
                        T.log("Requesting upload url for ".concat(this.id));
                        let e = await u.default.post({
                            url: a.getCreateAttachmentURL(this.channelId),
                            body: {
                                files: [i]
                            },
                            ...this.retryOpts()
                        });
                        this.setResponseUrl(e.body.attachments[0].upload_url), this.setUploadedFilename(e.body.attachments[0].upload_filename)
                    } catch (i) {
                        let e = null !== (n = null == i ? void 0 : null === (t = i.body) || void 0 === t ? void 0 : t.code) && void 0 !== n ? n : i.status;
                        e !== p.AbortCodes.ENTITY_TOO_LARGE && (T.error("Requesting upload url failed with code ".concat(null != e ? e : JSON.stringify(i.body), " for ").concat(this.id)), _.default.captureException(i)), this.handleError(e);
                        return
                    }
                    try {
                        let e = await this.uploadFileToCloud();
                        this.handleComplete(e)
                    } catch (e) {
                        "CANCELED" === this.status ? this.handleComplete(e) : (T.info("Error: status ".concat(e.status, " for ").concat(this.id)), this.handleError(e))
                    }
                }
                async reactNativeCompressAndExtractData() {
                    var e, t;
                    if (!(0, h.getUploadTarget)(this.item.target).shouldReactNativeCompressUploads) {
                        T.log("reactNativeCompressAndExtractData() disabled by upload target");
                        return
                    }
                    if (!0 === this.reactNativeFilePrepped) {
                        T.log("reactNativeCompressAndExtractData() file already prepped - ".concat(this.id));
                        return
                    }
                    T.log("Starting compression/conversion for ".concat(this.id));
                    let n = await (0, c.getAttachmentFile)(this, null !== (e = this.reactNativeFileIndex) && void 0 !== e ? e : 0);
                    if (null == n || null == n.file) return;
                    let i = n.uri,
                        a = n.file.name,
                        l = n.file.type;
                    if (this.filename = a, null == a || null == i || null == l) throw T.error("Insufficient file data: ".concat({
                        filename: a,
                        uri: i,
                        mimeType: l
                    }, " for ").concat(this.id)), Error("Insufficient file data: ".concat({
                        filename: a,
                        uri: i,
                        mimeType: l
                    }));
                    let s = null !== (t = n.fileSize) && void 0 !== t ? t : (await (0, E.getFileData)(i)).size;
                    if (this.postCompressionSize = s, this.currentSize = s, null == s) throw T.error("Size missing from file data for ".concat(this.id)), Error("Size missing from file data");
                    T.log("Completed compression and conversion. Output size=".concat(s, " bytes; filename=").concat(a, " for ").concat(this.id));
                    this.item = {
                        ...this.item,
                        uri: i,
                        filename: a,
                        mimeType: l
                    }, this.reactNativeFilePrepped = !0
                }
                handleError(e) {
                    this.setStatus("ERROR"), this.error = e;
                    try {
                        this.emit("error", e)
                    } catch {}
                    this.removeAllListeners()
                }
                handleComplete(e) {
                    this.setStatus("COMPLETED"), T.log("Upload complete for ".concat(this.id)), this.emit("complete", e), this.removeAllListeners()
                }
                cancel() {
                    T.log("Cancelled called for ".concat(this.id)), this._abortController.abort(), "COMPLETED" === this.status && this.delete(), this.setStatus("CANCELED"), this.emit("complete"), this.removeAllListeners()
                }
                resetState() {
                    return this.status = "NOT_STARTED", this.uploadedFilename = void 0, this.responseUrl = void 0, this.error = void 0, this._abortController = new AbortController, super.resetState()
                }
                async delete() {
                    if (null == this.uploadedFilename) return;
                    let e = (0, h.getUploadTarget)(this.item.target).getDeleteUploadURL(this.uploadedFilename);
                    try {
                        await u.default.delete(e)
                    } catch {}
                }
                setResponseUrl(e) {
                    this.responseUrl = e
                }
                setStatus(e) {
                    this.status = e
                }
                setFilename(e) {
                    this.filename = e
                }
                setUploadedFilename(e) {
                    this.uploadedFilename = e
                }
                constructor(e, t, n, i) {
                    var a, l, s, r;
                    super(e, n), this.status = "NOT_STARTED", this.loaded = 0, this.reactNativeFilePrepped = !1, this._aborted = !1, this.channelId = t, this.preCompressionSize = null !== (s = null === (a = e.file) || void 0 === a ? void 0 : a.size) && void 0 !== s ? s : 0, this.currentSize = null !== (r = null === (l = e.file) || void 0 === l ? void 0 : l.size) && void 0 !== r ? r : 0, this.reactNativeFileIndex = i, this._abortController = new AbortController
                }
            }
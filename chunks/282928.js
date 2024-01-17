"use strict";
n.r(t), n.d(t, {
  CloudUploadStatus: function() {
    return s
  },
  CloudUpload: function() {
    return T
  }
}), n("222007"), n("70102");
var s, i, r = n("917351"),
  a = n.n(r),
  o = n("981980"),
  d = n("872717"),
  u = n("605250"),
  l = n("676574"),
  f = n("668273"),
  _ = n("994440"),
  c = n("718517"),
  g = n("286235"),
  m = n("980134"),
  h = n("966724"),
  v = n("142852"),
  E = n("49111");
let p = new u.default("CloudUpload.tsx"),
  y = n("123010").default;
(i = s || (s = {})).NOT_STARTED = "NOT_STARTED", i.STARTED = "STARTED", i.UPLOADING = "UPLOADING", i.ERROR = "ERROR", i.COMPLETED = "COMPLETED", i.CANCELED = "CANCELED";
class T extends h.default {
  static fromJson(e) {
    let {
      item: t,
      channelId: n,
      showLargeMessageDialog: s,
      reactNativeFileIndex: i
    } = e, r = new T(t, n, s, i);
    return "COMPLETED" !== r.status && (r.status = "NOT_STARTED"), Object.entries(e).forEach(e => {
      let [t, n] = e;
      !t.startsWith("_") && (r[t] = n)
    }), r
  }
  retryOpts() {
    return this.item.platform === h.UploadPlatform.REACT_NATIVE ? {
      timeout: 1 * c.default.Millis.HOUR,
      backoff: new o.default(.5 * c.default.Millis.SECOND, 30 * c.default.Millis.MINUTE),
      retries: 12
    } : {
      timeout: 1 * c.default.Millis.HOUR,
      retries: 12,
      backoff: new o.default
    }
  }
  async uploadFileToCloudAsChunks(e) {
    if (null == this.responseUrl || "" === this.responseUrl) throw Error("_uploadFileToCloudAsChunks - responseUrl is not set");
    let {
      contentType: t,
      fileSize: n,
      bufferedFileData: s
    } = await this.prepareChunkUploadItem(), i = Math.ceil(n / e);
    for (let r = 0; r < i; r++) {
      p.info("Uploading chunk ".concat(r + 1, " of ").concat(i, " for file id ").concat(this.id));
      let a = r * e,
        o = Math.min(a + e, n),
        d = await this.getChunk(a, o, s);
      try {
        await this.uploadChunk({
          chunk: d,
          start: a,
          end: o,
          totalSize: n,
          sessionUrl: this.responseUrl,
          contentType: t
        })
      } catch (e) {
        throw p.error("Error uploading chunk ".concat(r + 1, " for file id ").concat(this.id, ": ").concat(e)), e
      }
    }
    p.log("Upload complete for file id ".concat(this.id))
  }
  async prepareChunkUploadItem() {
    let e, t, n;
    if (this.item.platform === h.UploadPlatform.REACT_NATIVE) {
      let s = this.item;
      if (e = null != s.mimeType && "" !== s.mimeType ? s.mimeType : "application/octet-stream", null == s.size || 0 === s.size || isNaN(s.size)) try {
        t = await (0, m.getFileContentLength)(s.uri)
      } catch (e) {
        p.warn("Failed to peek content length for file id ".concat(this.id, ", reading whole file instead: ").concat(e)), t = (n = await (0, m.getFileData)(s.uri)).size
      } else t = s.size
    } else e = "application/octet-stream", t = this.item.file.size;
    return {
      contentType: e,
      fileSize: t,
      bufferedFileData: n
    }
  }
  async getChunk(e, t, n) {
    return this.item.platform !== h.UploadPlatform.REACT_NATIVE ? this.item.file.slice(e, t) : null != n ? n.slice(e, t) : await (0, m.getFileChunk)(this.item.uri, e, t)
  }
  async uploadChunk(e) {
    let t = {
      "Content-Type": e.contentType,
      "Content-Range": "bytes ".concat(e.start, "-").concat(e.end - 1, "/").concat(e.totalSize)
    };
    for (let n = 1; n <= 3; n++) {
      p.log("Attempt ".concat(n, ": Uploading chunk ").concat(e.start, "-").concat(e.end - 1, " of ").concat(e.totalSize, " bytes"));
      let s = a.throttle(t => {
          let n = e.start + t.loaded;
          this.emit("progress", n, e.totalSize, n - this.loaded), this.loaded = n
        }, 50),
        i = await d.default.put({
          url: e.sessionUrl,
          body: e.chunk,
          headers: t,
          signal: this._abortController.signal,
          onRequestProgress: s,
          ...this.retryOpts()
        });
      if (this.isUnsuccessfulChunkUpload(i, e.end - 1)) {
        p.error("Incomplete chunk upload: ".concat(i.status));
        continue
      }
      if (i.ok) return
    }
    throw Error("Failed to upload chunk")
  }
  isUnsuccessfulChunkUpload(e, t) {
    if (!this.RESUME_INCOMPLETE_CODES.includes(e.status)) return !1;
    if (null == e.headers.range || "" === e.headers.range) return !0;
    let n = e.headers.range.match(/bytes=(\d+)-(\d+)/);
    return null !== n && parseInt(n[2], 10) !== t
  }
  uploadFileToCloud() {
    let e, t;
    if (null == this.responseUrl) throw Error("_uploadFileToCloud - responseUrl is not set");
    p.log("Uploading ".concat(this.id)), this.item.platform === h.UploadPlatform.REACT_NATIVE ? t = null != (e = {
      type: this.item.mimeType,
      uri: this.item.uri,
      name: this.item.filename
    }).type && "application/json" !== e.type ? e.type : "application/octet-stream" : (e = this.item.file, t = "application/octet-stream");
    let n = a.throttle(e => {
        this.emit("progress", e.loaded, e.total, e.loaded - this.loaded), this.loaded = e.loaded
      }, 50),
      s = {
        "Content-Type": t
      };
    return d.default.put({
      url: this.responseUrl,
      body: e,
      headers: s,
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
    let s = await y.getUploadPayload(this),
      i = (0, v.getUploadTarget)(this.item.target);
    if (null == s.filename || "" === s.filename || 0 === this.currentSize) {
      p.error("File does not have a filename or size is 0.", JSON.stringify(s)), this.handleError(E.AbortCodes.INVALID_FILE_ASSET);
      return
    }
    if ((null !== (e = this.currentSize) && void 0 !== e ? e : 0) > i.getMaxFileSize(this.channelId)) {
      this.handleError(E.AbortCodes.ENTITY_TOO_LARGE);
      return
    }
    if (l.default.get("upload_fail_50") && .5 > Math.random()) {
      setTimeout(() => {
        this.handleError(500)
      }, 1e3);
      return
    }
    try {
      p.log("Requesting upload url for ".concat(this.id));
      let e = await d.default.post({
        url: i.getCreateAttachmentURL(this.channelId),
        body: {
          files: [s]
        },
        ...this.retryOpts()
      });
      this.setResponseUrl(e.body.attachments[0].upload_url), this.setUploadedFilename(e.body.attachments[0].upload_filename)
    } catch (s) {
      let e = null !== (n = null == s ? void 0 : null === (t = s.body) || void 0 === t ? void 0 : t.code) && void 0 !== n ? n : s.status;
      e !== E.AbortCodes.ENTITY_TOO_LARGE && (p.error("Requesting upload url failed with code ".concat(null != e ? e : JSON.stringify(s.body), " for ").concat(this.id)), g.default.captureException(s)), this.handleError(e);
      return
    }
    try {
      let e;
      let t = f.default.getCurrentConfig({
        location: "CloudUpload"
      }, {
        autoTrackExposure: !0
      });
      e = t.enabled && t.chunkSize > 0 ? await this.uploadFileToCloudAsChunks(t.chunkSize) : await this.uploadFileToCloud(), this.handleComplete(e)
    } catch (e) {
      "CANCELED" === this.status ? this.handleComplete(e) : (p.info("Error: status ".concat(e.status, " for ").concat(this.id)), this.handleError(e))
    }
  }
  async reactNativeCompressAndExtractData() {
    var e, t;
    if (!(0, v.getUploadTarget)(this.item.target).shouldReactNativeCompressUploads) {
      p.log("reactNativeCompressAndExtractData() disabled by upload target");
      return
    }
    if (!0 === this.reactNativeFilePrepped) {
      p.log("reactNativeCompressAndExtractData() file already prepped - ".concat(this.id));
      return
    }
    p.log("Starting compression/conversion for ".concat(this.id));
    let n = await (0, _.getAttachmentFile)(this, null !== (e = this.reactNativeFileIndex) && void 0 !== e ? e : 0);
    if (null == n || null == n.file) return;
    let s = n.uri,
      i = n.file.name,
      r = n.file.type;
    if (this.filename = i, null == i || null == s || null == r) throw p.error("Insufficient file data: ".concat({
      filename: i,
      uri: s,
      mimeType: r
    }, " for ").concat(this.id)), Error("Insufficient file data: ".concat({
      filename: i,
      uri: s,
      mimeType: r
    }));
    let a = null !== (t = n.fileSize) && void 0 !== t ? t : (await (0, m.getFileData)(s)).size;
    if (this.postCompressionSize = a, this.currentSize = a, null == a) throw p.error("Size missing from file data for ".concat(this.id)), Error("Size missing from file data");
    p.log("Completed compression and conversion. Output size=".concat(a, " bytes; filename=").concat(i, " for ").concat(this.id));
    this.item = {
      ...this.item,
      uri: s,
      filename: i,
      mimeType: r
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
    this.setStatus("COMPLETED"), p.log("Upload complete for ".concat(this.id)), this.emit("complete", e), this.removeAllListeners()
  }
  cancel() {
    p.log("Cancelled called for ".concat(this.id)), this._abortController.abort(), "COMPLETED" === this.status && this.delete(), this.setStatus("CANCELED"), this.emit("complete"), this.removeAllListeners()
  }
  resetState() {
    return this.status = "NOT_STARTED", this.uploadedFilename = void 0, this.responseUrl = void 0, this.error = void 0, this._abortController = new AbortController, super.resetState()
  }
  async delete() {
    if (null == this.uploadedFilename) return;
    let e = (0, v.getUploadTarget)(this.item.target).getDeleteUploadURL(this.uploadedFilename);
    try {
      await d.default.delete(e)
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
  constructor(e, t, n, s) {
    var i, r, a, o;
    super(e, n), this.RESUME_INCOMPLETE_CODES = [308], this.status = "NOT_STARTED", this.loaded = 0, this.reactNativeFilePrepped = !1, this._aborted = !1, this.channelId = t, this.preCompressionSize = null !== (a = null === (i = e.file) || void 0 === i ? void 0 : i.size) && void 0 !== a ? a : 0, this.currentSize = null !== (o = null === (r = e.file) || void 0 === r ? void 0 : r.size) && void 0 !== o ? o : 0, this.reactNativeFileIndex = s, this._abortController = new AbortController
  }
}
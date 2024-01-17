"use strict";
n.r(t), n.d(t, {
  CloudUploadStatus: function() {
    return s
  },
  CloudUpload: function() {
    return y
  }
}), n("222007"), n("70102");
var s, i, r = n("917351"),
  a = n.n(r),
  o = n("981980"),
  d = n("872717"),
  u = n("605250"),
  l = n("676574"),
  f = n("994440"),
  _ = n("718517"),
  c = n("286235"),
  g = n("980134"),
  m = n("966724"),
  h = n("142852"),
  v = n("49111");
let E = new u.default("CloudUpload.tsx"),
  p = n("123010").default;
(i = s || (s = {})).NOT_STARTED = "NOT_STARTED", i.STARTED = "STARTED", i.UPLOADING = "UPLOADING", i.ERROR = "ERROR", i.COMPLETED = "COMPLETED", i.CANCELED = "CANCELED";
class y extends m.default {
  static fromJson(e) {
    let {
      item: t,
      channelId: n,
      showLargeMessageDialog: s,
      reactNativeFileIndex: i
    } = e, r = new y(t, n, s, i);
    return "COMPLETED" !== r.status && (r.status = "NOT_STARTED"), Object.entries(e).forEach(e => {
      let [t, n] = e;
      !t.startsWith("_") && (r[t] = n)
    }), r
  }
  retryOpts() {
    return this.item.platform === m.UploadPlatform.REACT_NATIVE ? {
      timeout: 1 * _.default.Millis.HOUR,
      backoff: new o.default(.5 * _.default.Millis.SECOND, 30 * _.default.Millis.MINUTE),
      retries: 12
    } : {
      timeout: 1 * _.default.Millis.HOUR,
      retries: 12,
      backoff: new o.default
    }
  }
  uploadFileToCloud() {
    let e, t;
    if (null == this.responseUrl) throw Error("_uploadFileToCloud - responseUrl is not set");
    E.log("Uploading ".concat(this.id)), this.item.platform === m.UploadPlatform.REACT_NATIVE ? t = null != (e = {
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
    let s = await p.getUploadPayload(this),
      i = (0, h.getUploadTarget)(this.item.target);
    if (null == s.filename || "" === s.filename || 0 === this.currentSize) {
      E.error("File does not have a filename or size is 0.", JSON.stringify(s)), this.handleError(v.AbortCodes.INVALID_FILE_ASSET);
      return
    }
    if ((null !== (e = this.currentSize) && void 0 !== e ? e : 0) > i.getMaxFileSize(this.channelId)) {
      this.handleError(v.AbortCodes.ENTITY_TOO_LARGE);
      return
    }
    if (l.default.get("upload_fail_50") && .5 > Math.random()) {
      setTimeout(() => {
        this.handleError(500)
      }, 1e3);
      return
    }
    try {
      E.log("Requesting upload url for ".concat(this.id));
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
      e !== v.AbortCodes.ENTITY_TOO_LARGE && (E.error("Requesting upload url failed with code ".concat(null != e ? e : JSON.stringify(s.body), " for ").concat(this.id)), c.default.captureException(s)), this.handleError(e);
      return
    }
    try {
      let e = await this.uploadFileToCloud();
      this.handleComplete(e)
    } catch (e) {
      "CANCELED" === this.status ? this.handleComplete(e) : (E.info("Error: status ".concat(e.status, " for ").concat(this.id)), this.handleError(e))
    }
  }
  async reactNativeCompressAndExtractData() {
    var e, t;
    if (!(0, h.getUploadTarget)(this.item.target).shouldReactNativeCompressUploads) {
      E.log("reactNativeCompressAndExtractData() disabled by upload target");
      return
    }
    if (!0 === this.reactNativeFilePrepped) {
      E.log("reactNativeCompressAndExtractData() file already prepped - ".concat(this.id));
      return
    }
    E.log("Starting compression/conversion for ".concat(this.id));
    let n = await (0, f.getAttachmentFile)(this, null !== (e = this.reactNativeFileIndex) && void 0 !== e ? e : 0);
    if (null == n || null == n.file) return;
    let s = n.uri,
      i = n.file.name,
      r = n.file.type;
    if (this.filename = i, null == i || null == s || null == r) throw E.error("Insufficient file data: ".concat({
      filename: i,
      uri: s,
      mimeType: r
    }, " for ").concat(this.id)), Error("Insufficient file data: ".concat({
      filename: i,
      uri: s,
      mimeType: r
    }));
    let a = null !== (t = n.fileSize) && void 0 !== t ? t : (await (0, g.getFileData)(s)).size;
    if (this.postCompressionSize = a, this.currentSize = a, null == a) throw E.error("Size missing from file data for ".concat(this.id)), Error("Size missing from file data");
    E.log("Completed compression and conversion. Output size=".concat(a, " bytes; filename=").concat(i, " for ").concat(this.id));
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
    this.setStatus("COMPLETED"), E.log("Upload complete for ".concat(this.id)), this.emit("complete", e), this.removeAllListeners()
  }
  cancel() {
    E.log("Cancelled called for ".concat(this.id)), this._abortController.abort(), "COMPLETED" === this.status && this.delete(), this.setStatus("CANCELED"), this.emit("complete"), this.removeAllListeners()
  }
  resetState() {
    return this.status = "NOT_STARTED", this.uploadedFilename = void 0, this.responseUrl = void 0, this.error = void 0, this._abortController = new AbortController, super.resetState()
  }
  async delete() {
    if (null == this.uploadedFilename) return;
    let e = (0, h.getUploadTarget)(this.item.target).getDeleteUploadURL(this.uploadedFilename);
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
    super(e, n), this.status = "NOT_STARTED", this.loaded = 0, this.reactNativeFilePrepped = !1, this._aborted = !1, this.channelId = t, this.preCompressionSize = null !== (a = null === (i = e.file) || void 0 === i ? void 0 : i.size) && void 0 !== a ? a : 0, this.currentSize = null !== (o = null === (r = e.file) || void 0 === r ? void 0 : r.size) && void 0 !== o ? o : 0, this.reactNativeFileIndex = s, this._abortController = new AbortController
  }
}
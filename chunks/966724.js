"use strict";
n.r(t), n.d(t, {
  UploadPlatform: function() {
    return r
  },
  default: function() {
    return o
  }
});
var s, i, r, a, o, d = n("44170"),
  u = n("917351"),
  l = n.n(u),
  f = n("748820"),
  _ = n("254490"),
  c = n("980134");
(s = r || (r = {}))[s.REACT_NATIVE = 0] = "REACT_NATIVE", s[s.WEB = 1] = "WEB", (i = a || (a = {}))[i.FILE_ATTACHMENT = 0] = "FILE_ATTACHMENT", i[i.IMAGE_PICKER = 1] = "IMAGE_PICKER", o = class extends d.EventEmitter {
  cancel() {}
  resetState() {
    return this
  }
  constructor(e, t) {
    var n, s;
    if (super(), this.item = e, 0 === e.platform) {
      this.id = null !== (n = e.id) && void 0 !== n ? n : e.uri;
      let t = (0, c.getFile)({
        uri: e.uri,
        overrideFilename: e.filename,
        overrideType: e.mimeType
      });
      this.filename = t.filename, this.isImage = t.isImage, this.isVideo = t.isVideo, this.mimeType = t.type, this.origin = e.origin, this.durationSecs = e.durationSecs, this.waveform = e.waveform, this.isRemix = e.isRemix
    } else this.id = null !== (s = e.id) && void 0 !== s ? s : l.uniqueId("upload"), this.classification = _.classifyFile(e.file), this.isImage = "image" === this.classification, this.isVideo = "video" === this.classification, this.filename = e.file.name, this.mimeType = e.file.type;
    this.isThumbnail = e.isThumbnail, this.clip = e.clip, this.uniqueId = (0, f.v4)(), this.showLargeMessageDialog = t, this.spoiler = !1, this.description = null
  }
}
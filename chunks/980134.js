"use strict";
n.r(t), n.d(t, {
  MAX_TOTAL_ATTACHMENT_SIZE: function() {
    return a
  },
  getAttachmentPayload: function() {
    return o
  },
  getFileData: function() {
    return l
  },
  getFile: function() {
    return u
  }
});
var i = n("66175"),
  r = n("894488");
let s = [{
    reName: /\.jpe?g$/i,
    name: e => "image".concat(e, ".jpg"),
    type: "image/jpeg"
  }, {
    reName: /\.png$/i,
    name: e => "image".concat(e, ".png"),
    type: "image/png"
  }, {
    reName: /\.gif$/i,
    name: e => "image".concat(e, ".gif"),
    type: "image/gif"
  }, {
    reName: /\.webp$/i,
    name: e => "image".concat(e, ".webp"),
    type: "image/webp"
  }, {
    reName: /\.heic$/i,
    name: e => "image".concat(e, ".heic"),
    type: "image/heic"
  }, {
    reName: /\.heif$/i,
    name: e => "image".concat(e, ".heif"),
    type: "image/heif"
  }, {
    reName: /\.dng$/i,
    name: e => "image".concat(e, ".dng"),
    type: "image/x-adobe-dng"
  }, {
    reName: /\.mov$/i,
    name: e => "video".concat(e, ".mov"),
    type: "video/quicktime"
  }, {
    reName: /\.avi$/i,
    name: e => "video".concat(e, ".avi"),
    type: "video/x-msvideo"
  }, {
    reName: /\.mp4$/i,
    name: e => "video".concat(e, ".mp4"),
    type: "video/mp4"
  }, {
    reName: /\.webm$/i,
    name: e => "video".concat(e, ".webm"),
    type: "image/webm"
  }],
  a = 524288e3;

function o(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
    s = arguments.length > 2 ? arguments[2] : void 0,
    a = {
      id: null !== (t = null == n ? void 0 : n.toString()) && void 0 !== t ? t : e.id
    };
  null != e.description && (a.description = e.description);
  let o = function(e) {
    let {
      spoiler: t
    } = e;
    return t ? r.SPOILER_ATTACHMENT_PREFIX : ""
  }({
    spoiler: e.spoiler
  });
  return a.filename = "".concat(o).concat(null != s ? s : e.filename), a.uploaded_filename = e.uploadedFilename, "durationSecs" in e && null != e.durationSecs && (a.duration_secs = e.durationSecs), "waveform" in e && null != e.waveform && (a.waveform = e.waveform), "isThumbnail" in e && !0 === e.isThumbnail && (a.is_thumbnail = e.isThumbnail), "isRemix" in e && !0 === e.isRemix && (a.is_remix = e.isRemix), "clip" in e && null != e.clip && (a.is_clip = !0, a.title = e.clip.name, a.application_id = e.clip.applicationId, a.clip_created_at = (0, i.getClipCreatedAt)(e.clip.id), a.clip_participant_ids = (0, i.getClipParticipantIds)(e.clip.users)), a
}

function l(e) {
  let t = new XMLHttpRequest;
  return new Promise((n, i) => {
    t.open("GET", e, !0), t.responseType = "blob", t.onabort = e => i(e), t.onerror = e => i(e), t.ontimeout = e => i(e), t.onload = () => {
      var e;
      return n(null == t ? void 0 : null === (e = t.response) || void 0 === e ? void 0 : e.data)
    }, t.send()
  })
}

function u(e) {
  var t, n, i, r, a, o;
  let l, {
      uri: u,
      i: c,
      overrideFilename: d,
      overrideType: f
    } = e,
    E = u.split("/"),
    h = E[E.length - 1];
  h = null !== (i = null === (n = h.split("?")) || void 0 === n ? void 0 : null === (t = n[0]) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== i ? i : "";
  let p = s.find(e => e.reName.test(h));
  if (null == p && null != d && (p = s.find(e => e.reName.test(d))), null != p && null != d) {
    let e = p.name(c).split(".").pop(),
      t = d.lastIndexOf(".");
    l = -1 !== t ? "".concat(d.substr(0, t), ".").concat(e) : "".concat(d, ".").concat(e)
  } else l = null != p ? p.name(c) : null != d ? d : "unknown";
  return {
    uri: u,
    filename: l,
    type: null !== (r = null != f ? f : null == p ? void 0 : p.type) && void 0 !== r ? r : "unknown",
    isVideo: -1 !== (null !== (a = null != f ? f : null == p ? void 0 : p.name(c)) && void 0 !== a ? a : "").indexOf("video"),
    isImage: -1 !== (null !== (o = null != f ? f : null == p ? void 0 : p.name(c)) && void 0 !== o ? o : "").indexOf("image")
  }
}
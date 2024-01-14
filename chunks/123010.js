"use strict";
n.r(t), n.d(t, {
  getUploadPayload: function() {
    return d
  },
  default: function() {
    return u
  }
});
var s = n("627445"),
  i = n.n(s),
  r = n("917351"),
  a = n.n(r),
  o = n("66175");

function d(e) {
  var t, n;
  let s = e.item.file;
  return i(null != s, "file data must not be empty"), {
    filename: s.name,
    file_size: s.size,
    id: a.uniqueId(),
    is_clip: null != e.clip,
    title: null === (t = e.clip) || void 0 === t ? void 0 : t.name,
    application_id: null === (n = e.clip) || void 0 === n ? void 0 : n.applicationId,
    clip_created_at: null != e.clip ? (0, o.getClipCreatedAt)(e.clip.id) : void 0,
    clip_participant_ids: null != e.clip ? (0, o.getClipParticipantIds)(e.clip.users) : void 0
  }
}
var u = {
  getUploadPayload: d
}
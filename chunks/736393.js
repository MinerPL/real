"use strict";
n.r(t), n.d(t, {
  getClassificationRelativeIncidentTime: function() {
    return u
  },
  getAttachmentFilename: function() {
    return d
  },
  parseMessageEmbedForProps: function() {
    return c
  },
  isFlaggedContentEmpty: function() {
    return f
  }
}), n("808653");
var s = n("866227"),
  l = n.n(s),
  a = n("651693"),
  i = n("908539"),
  r = n("170213"),
  o = n("894488");

function u(e) {
  return l().to(l(e))
}

function d(e) {
  var t, n;
  return (0, a.isImageFile)(e.filename) ? "".concat(o.SPOILER_ATTACHMENT_PREFIX).concat(null !== (t = e.filename) && void 0 !== t ? t : ".png") : null !== (n = e.filename) && void 0 !== n ? n : ""
}

function c(e) {
  var t, n, s, l;
  if (null == e.fields) return;
  let a = e.fields.reduce((e, t) => (e[t.rawName] = t.rawValue, e), {});
  return {
    header: null !== (t = a[r.SafetySystemNotificationEmbedKeys.HEADER]) && void 0 !== t ? t : "",
    icon: a[r.SafetySystemNotificationEmbedKeys.ICON_TYPE],
    body: null !== (n = a[r.SafetySystemNotificationEmbedKeys.BODY]) && void 0 !== n ? n : "",
    ctas: (null !== (s = a[r.SafetySystemNotificationEmbedKeys.CTAS]) && void 0 !== s ? s : "").split(",").filter(e => "" !== e),
    timestamp: parseFloat(null !== (l = a[r.SafetySystemNotificationEmbedKeys.TIMESTAMP]) && void 0 !== l ? l : 0),
    theme: a[r.SafetySystemNotificationEmbedKeys.THEME],
    learn_more_link: a[r.SafetySystemNotificationEmbedKeys.LEARN_MORE_LINK],
    classification_id: a[r.SafetySystemNotificationEmbedKeys.CLASSIFICATION_ID]
  }
}

function f(e) {
  if (e.type === i.ContentIdType.MESSAGE) return "" === e.content && 0 === e.attachments.length;
  return !0
}
n("782340")
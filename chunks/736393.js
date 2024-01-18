"use strict";
n.r(t), n.d(t, {
  getClassificationRelativeIncidentTime: function() {
    return d
  },
  getAttachmentFilename: function() {
    return c
  },
  parseMessageEmbedForProps: function() {
    return f
  },
  isFlaggedContentEmpty: function() {
    return E
  },
  getAppealSignalDisplayText: function() {
    return _
  },
  capitalizeText: function() {
    return T
  }
}), n("808653");
var s = n("866227"),
  l = n.n(s),
  a = n("651693"),
  i = n("908539"),
  r = n("170213"),
  o = n("894488"),
  u = n("782340");

function d(e) {
  return l().to(l(e))
}

function c(e) {
  var t, n;
  return (0, a.isImageFile)(e.filename) ? "".concat(o.SPOILER_ATTACHMENT_PREFIX).concat(null !== (t = e.filename) && void 0 !== t ? t : ".png") : null !== (n = e.filename) && void 0 !== n ? n : ""
}

function f(e) {
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

function E(e) {
  if (e.type === i.ContentIdType.MESSAGE) return "" === e.content && 0 === e.attachments.length;
  return !0
}
let _ = e => {
    let t = {
      [r.AppealIngestionSignal.DIDNT_VIOLATE_POLICY]: u.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DIDNT_VIOLATE_POLICY,
      [r.AppealIngestionSignal.TOO_STRICT_UNFAIR]: u.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_TOO_STRICT_UNFAIR,
      [r.AppealIngestionSignal.DONT_AGREE_PENALTY]: u.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DONT_AGREE_PENALTY,
      [r.AppealIngestionSignal.SOMETHING_ELSE]: u.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_SOMETHING_ELSE
    };
    return t[e]
  },
  T = e => null == e || 0 === e.length ? "" : 1 === e.length ? e.toUpperCase() : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1))
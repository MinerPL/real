"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("37983");
n("884691");
var l = n("452804"),
  s = n("135230"),
  i = n("535348"),
  r = n("782340");

function o(e) {
  let {
    type: t,
    onConfirm: n,
    ...o
  } = e, u = t === i.SelfStreamAndVideoAlertType.STREAM ? r.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : r.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, d = t === i.SelfStreamAndVideoAlertType.STREAM ? r.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : r.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
  return (0, a.jsx)(s.default, {
    confirmText: r.default.Messages.CONFIRM,
    secondaryConfirmText: r.default.Messages.DONT_ASK_AGAIN,
    title: u,
    cancelText: r.default.Messages.CANCEL,
    onConfirm: n,
    onConfirmSecondary: () => {
      l.default.updatedUnsyncedSettings({
        disableHideSelfStreamAndVideoConfirmationAlert: !0
      }), n()
    },
    body: d,
    ...o
  })
}
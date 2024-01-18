"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("37983");
n("884691");
var i = n("452804"),
  a = n("135230"),
  u = n("535348"),
  o = n("782340");

function d(e) {
  let {
    type: t,
    onConfirm: n,
    ...d
  } = e, r = t === u.SelfStreamAndVideoAlertType.STREAM ? o.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : o.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, s = t === u.SelfStreamAndVideoAlertType.STREAM ? o.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : o.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
  return (0, l.jsx)(a.default, {
    confirmText: o.default.Messages.CONFIRM,
    secondaryConfirmText: o.default.Messages.DONT_ASK_AGAIN,
    title: r,
    cancelText: o.default.Messages.CANCEL,
    onConfirm: n,
    onConfirmSecondary: () => {
      i.default.updatedUnsyncedSettings({
        disableHideSelfStreamAndVideoConfirmationAlert: !0
      }), n()
    },
    body: s,
    ...d
  })
}
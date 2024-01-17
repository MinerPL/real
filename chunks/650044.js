"use strict";
n.r(t), n.d(t, {
  open: function() {
    return c
  }
});
var s = n("37983");
n("884691");
var l = n("77078"),
  a = n("629109"),
  i = n("135230"),
  r = n("782340");
let o = null;

function u() {
  null !== o && (0, l.closeModal)(o), o = null
}

function d() {
  a.default.setSilenceWarning(!1), u()
}

function c() {
  o = (0, l.openModal)(e => (0, s.jsx)(i.default, {
    title: r.default.Messages.CONFIRM_DISABLE_SILENCE_TITLE,
    body: r.default.Messages.CONFIRM_DISABLE_SILENCE_BODY,
    secondaryConfirmText: r.default.Messages.CONFIRM_DISABLE_SILENCE_DONT_SHOW,
    onConfirmSecondary: d,
    onConfirm: u,
    confirmText: r.default.Messages.OKAY,
    ...e
  }))
}
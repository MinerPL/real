"use strict";
n.r(t), n.d(t, {
  open: function() {
    return c
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  i = n("629109"),
  l = n("135230"),
  r = n("782340");
let o = null;

function u() {
  null !== o && (0, s.closeModal)(o), o = null
}

function d() {
  i.default.setSilenceWarning(!1), u()
}

function c() {
  o = (0, s.openModal)(e => (0, a.jsx)(l.default, {
    title: r.default.Messages.CONFIRM_DISABLE_SILENCE_TITLE,
    body: r.default.Messages.CONFIRM_DISABLE_SILENCE_BODY,
    secondaryConfirmText: r.default.Messages.CONFIRM_DISABLE_SILENCE_DONT_SHOW,
    onConfirmSecondary: d,
    onConfirm: u,
    confirmText: r.default.Messages.OKAY,
    ...e
  }))
}
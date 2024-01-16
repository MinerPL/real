"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("37983");
n("884691");
var i = n("446674"),
  u = n("77078"),
  s = n("244480"),
  l = n("923510"),
  d = n("957255"),
  o = n("782340");

function r(e, t) {
  let n = (0, i.useStateFromStores)([d.default], () => d.default.can(l.MODERATE_STAGE_CHANNEL_PERMISSIONS, e), [e]);
  return null != t && n ? (0, a.jsx)(u.MenuItem, {
    id: "end-stage",
    label: o.default.Messages.END_STAGE,
    color: "danger",
    action: function() {
      (0, u.openModal)(t => (0, a.jsx)(u.ConfirmModal, {
        ...t,
        header: o.default.Messages.END_STAGE_TITLE,
        confirmText: o.default.Messages.END_STAGE,
        cancelText: o.default.Messages.CANCEL,
        onConfirm: () => (0, s.endStage)(e),
        children: (0, a.jsx)(u.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: o.default.Messages.EXPLICIT_END_STAGE_SUBTITLE
        })
      }))
    }
  }) : null
}
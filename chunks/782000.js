"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("37983");
n("884691");
var i = n("446674"),
  l = n("77078"),
  u = n("244480"),
  s = n("923510"),
  d = n("957255"),
  o = n("782340");

function r(e, t) {
  let n = (0, i.useStateFromStores)([d.default], () => d.default.can(s.MODERATE_STAGE_CHANNEL_PERMISSIONS, e), [e]);
  return null != t && n ? (0, a.jsx)(l.MenuItem, {
    id: "end-stage",
    label: o.default.Messages.END_STAGE,
    color: "danger",
    action: function() {
      (0, l.openModal)(t => (0, a.jsx)(l.ConfirmModal, {
        ...t,
        header: o.default.Messages.END_STAGE_TITLE,
        confirmText: o.default.Messages.END_STAGE,
        cancelText: o.default.Messages.CANCEL,
        onConfirm: () => (0, u.endStage)(e),
        children: (0, a.jsx)(l.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: o.default.Messages.EXPLICIT_END_STAGE_SUBTITLE
        })
      }))
    }
  }) : null
}
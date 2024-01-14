"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var l = n("37983");
n("884691");
var u = n("446674"),
  a = n("77078"),
  d = n("817963"),
  i = n("244480"),
  r = n("398604"),
  s = n("322224"),
  o = n("745049"),
  c = n("782340");

function E(e, t, n) {
  let {
    canManageGuildEvent: E
  } = (0, d.useManageResourcePermissions)(null != n ? n : t), f = (0, u.useStateFromStores)([r.default], () => r.default.isActive(e)), _ = (0, u.useStateFromStores)([r.default], () => r.default.getGuildScheduledEvent(e), [e]), S = E(_);
  if (null == e || !S || !f || (null == _ ? void 0 : _.entity_type) === o.GuildScheduledEventEntityTypes.EXTERNAL) return null;
  let T = () => {
    if (null == n ? void 0 : n.isGuildStageVoice()) {
      (0, i.endStage)(n);
      return
    }
    null != e && s.default.endEvent(e, t.id), (0, a.closeAllModals)()
  };
  return (0, l.jsx)(a.MenuItem, {
    id: c.default.Messages.END_EVENT,
    label: c.default.Messages.END_EVENT,
    action: function() {
      (0, a.openModal)(e => (0, l.jsx)(a.ConfirmModal, {
        ...e,
        header: c.default.Messages.END_EVENT,
        confirmText: c.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
        cancelText: c.default.Messages.CANCEL,
        onConfirm: T,
        children: (0, l.jsx)(a.Text, {
          variant: "text-md/normal",
          children: c.default.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
        })
      }))
    },
    color: "danger"
  })
}
"use strict";
t.r(n), t.d(n, {
  default: function() {
    return E
  },
  useMessageReminderDurations: function() {
    return f
  }
});
var a = t("37983");
t("884691");
var s = t("866227"),
  d = t.n(s),
  u = t("446674"),
  r = t("77078"),
  i = t("931318"),
  o = t("979268"),
  l = t("520899"),
  c = t("988864"),
  M = t("36562"),
  m = t("782340");

function E(e) {
  let {
    showReminders: n
  } = o.default.useExperiment({
    location: "a65531_1"
  }, {
    autoTrackExposure: !1
  }), t = (0, u.useStateFromStores)([l.default], () => null != l.default.getMessageReminders().find(n => n.messageId === e.id)), s = f(e, n => (0, i.addMessageReminders)(e, d().add(n, "millisecond").toDate()));
  return n ? (0, a.jsx)(r.MenuItem, {
    id: "mark-todo",
    label: t ? m.default.Messages.MESSAGE_REMINDERS_MARK_AS_DONE : m.default.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
    icon: t ? M.default : void 0,
    action: () => t ? (0, i.completeMessageReminders)(e.id) : (0, i.addMessageReminders)(e),
    children: t ? null : s
  }) : null
}

function f(e, n) {
  return c.MESSAGE_REMINDER_DURATION_ITEMS.map(e => {
    let {
      duration: t,
      getLabel: s
    } = e;
    return (0, a.jsx)(r.MenuItem, {
      id: "mark-todo-".concat(t),
      label: s(),
      action: () => n(t)
    }, t)
  })
}
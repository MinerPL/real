"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  },
  useMessageReminderDurations: function() {
    return m
  }
});
var a = n("37983");
n("884691");
var i = n("866227"),
  l = n.n(i),
  s = n("446674"),
  u = n("77078"),
  r = n("931318"),
  d = n("979268"),
  o = n("520899"),
  c = n("988864"),
  f = n("36562"),
  E = n("782340");

function M(e) {
  let {
    showReminders: t
  } = d.default.useExperiment({
    location: "a65531_1"
  }, {
    autoTrackExposure: !1
  }), n = (0, s.useStateFromStores)([o.default], () => null != o.default.getMessageReminders().find(t => t.messageId === e.id)), i = m(e, t => (0, r.addMessageReminders)(e, l().add(t, "millisecond").toDate()));
  return t ? (0, a.jsx)(u.MenuItem, {
    id: "mark-todo",
    label: n ? E.default.Messages.MESSAGE_REMINDERS_MARK_AS_DONE : E.default.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
    icon: n ? f.default : void 0,
    action: () => n ? (0, r.completeMessageReminders)(e.id) : (0, r.addMessageReminders)(e),
    children: n ? null : i
  }) : null
}

function m(e, t) {
  return c.MESSAGE_REMINDER_DURATION_ITEMS.map(e => {
    let {
      duration: n,
      getLabel: i
    } = e;
    return (0, a.jsx)(u.MenuItem, {
      id: "mark-todo-".concat(n),
      label: i(),
      action: () => t(n)
    }, n)
  })
}
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
  i = n("398604"),
  r = n("397680"),
  s = n("466148"),
  o = n("842672"),
  c = n("782340");

function E(e) {
  let {
    guildEventId: t,
    guild: E,
    channel: f,
    recurrenceId: _,
    isRecurrenceItem: S
  } = e, {
    canManageGuildEvent: T
  } = (0, d.useManageResourcePermissions)(null != f ? f : E), v = (0, u.useStateFromStores)([i.default], () => i.default.getGuildScheduledEvent(t)), I = T(v), N = (0, o.default)(), g = (0, r.default)(_, null == v ? void 0 : v.id), m = (0, s.default)(t, _);
  if (!I || null == v) return null;
  let R = null != v.recurrence_rule && !S,
    h = e => {
      (null == _ || e) && !S ? (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("590942").then(n.bind(n, "590942"));
        return n => (0, l.jsx)(e, {
          ...n,
          guildScheduledEventId: t,
          guildId: E.id
        })
      }, N) : null != _ && (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("229798").then(n.bind(n, "229798"));
        return t => (0, l.jsx)(e, {
          ...t,
          guildEvent: v,
          recurrenceId: _
        })
      }, N)
    };
  return (0, l.jsx)(a.MenuItem, {
    id: c.default.Messages.EDIT_EVENT,
    label: c.default.Messages.EDIT_EVENT,
    action: R ? void 0 : () => h(!0),
    children: R && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(a.MenuItem, {
        id: c.default.Messages.EDIT_THIS_EVENT,
        label: c.default.Messages.EDIT_THIS_EVENT,
        action: () => h(!1),
        disabled: (null == g ? void 0 : g.is_canceled) || m.startTime.getTime() < Date.now()
      }), (0, l.jsx)(a.MenuItem, {
        id: c.default.Messages.EDIT_ALL_EVENTS,
        label: c.default.Messages.EDIT_ALL_EVENTS,
        action: () => h(!0),
        disabled: new Date(v.scheduled_start_time).getTime() < Date.now()
      })]
    })
  })
}
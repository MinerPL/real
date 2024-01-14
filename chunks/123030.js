"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var l = n("37983");
n("884691");
var s = n("414456"),
  u = n.n(s),
  i = n("446674"),
  a = n("77078"),
  o = n("272030"),
  r = n("42203"),
  d = n("305961"),
  c = n("433487"),
  f = n("398604"),
  E = n("397680"),
  h = n("822516"),
  C = n("393745"),
  v = n("745049"),
  N = n("782340"),
  g = n("157624");

function S(e) {
  let {
    recurrenceId: t,
    originalScheduledStartTime: s,
    guildEventId: S,
    onClick: I,
    isActive: L
  } = e, _ = (0, i.useStateFromStores)([f.default], () => f.default.getGuildScheduledEvent(S)), m = (0, E.default)(t, null == _ ? void 0 : _.id), x = (0, i.useStateFromStores)([d.default], () => d.default.getGuild(null == _ ? void 0 : _.guild_id)), T = (0, i.useStateFromStores)([r.default], () => r.default.getChannel(null == _ ? void 0 : _.channel_id));
  if (null == _) return null;
  let {
    is_canceled: p = !1
  } = null != m ? m : {}, R = (null == m ? void 0 : m.scheduled_start_time) != null ? new Date(null == m ? void 0 : m.scheduled_start_time) : s, M = (0, h.getNextRecurrenceIdInEvent)(_), B = p ? v.GuildScheduledEventStatus.CANCELED : v.GuildScheduledEventStatus.SCHEDULED;
  M === t && (B = _.status);
  let G = e => {
    e.stopPropagation(), null != x && (0, o.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("110374").then(n.bind(n, "110374"));
      return n => (0, l.jsx)(e, {
        guildEventId: _.id,
        recurrenceId: t,
        channel: T,
        guild: x,
        isRecurrenceItem: !0,
        ...n
      })
    })
  };
  return (0, l.jsxs)(a.ClickableContainer, {
    className: u(g.container, {
      [g.canceled]: p,
      [g.clickable]: null != I,
      [g.active]: L
    }),
    onClick: e => {
      e.stopPropagation(), !p && (null == I || I(t))
    },
    onContextMenu: G,
    "aria-label": "",
    children: [(0, l.jsx)(C.GuildEventTimeStatus, {
      startTime: R.toISOString(),
      status: B,
      eventType: _.entity_type,
      guildEventId: _.id,
      recurrenceId: t,
      className: g.timeStatus
    }), p && (0, l.jsx)(a.Text, {
      variant: "text-sm/semibold",
      color: "text-danger",
      className: g.canceledStatus,
      children: N.default.Messages.EVENT_CANCELED
    }), (0, l.jsx)(a.Tooltip, {
      text: N.default.Messages.MORE,
      position: "top",
      "aria-label": N.default.Messages.EDIT,
      children: e => (0, l.jsx)(a.Clickable, {
        ...e,
        onClick: G,
        className: g.iconButton,
        children: (0, l.jsx)(c.default, {
          width: 20,
          height: 20,
          className: g.icon
        })
      })
    })]
  })
}
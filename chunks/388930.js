"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var l = n("37983");
n("884691");
var a = n("974667"),
  s = n("446674"),
  i = n("151426"),
  r = n("77078"),
  o = n("272030"),
  u = n("120363"),
  d = n("10641"),
  c = n("534222"),
  f = n("131143"),
  h = n("660478"),
  C = n("282109"),
  p = n("943232"),
  m = n("956089"),
  E = n("708402"),
  g = n("133335"),
  I = n("782340"),
  S = n("404135");

function _(e) {
  let {
    selected: t,
    showUnread: n,
    onClick: s,
    onContextMenu: r,
    eventsMuted: o,
    rowLabel: d,
    mentionCount: c,
    guildId: h
  } = e, C = (0, a.useListItem)("upcoming-events-".concat(h)), g = (0, f.useCanShowRecurringEventUpsell)(h), I = (0, u.useChannelListUpsellLocationTrackerRef)(h, i.DismissibleContent.RECURRING_EVENT_COACHMARK, !g);
  return (0, l.jsx)(E.default, {
    ...C,
    ref: I,
    renderIcon: e => (0, l.jsx)(p.default, {
      className: e
    }),
    text: d,
    selected: t,
    onClick: s,
    onContextMenu: r,
    showUnread: n,
    badge: !o && c > 0 ? (0, l.jsx)(m.NumberBadge, {
      className: S.numberBadge,
      disableColor: !0,
      count: c
    }) : null
  })
}

function N(e) {
  let {
    guild: t,
    selected: a
  } = e, {
    hasUnread: u,
    mentionCount: f
  } = (0, s.useStateFromStoresObject)([h.default], () => ({
    hasUnread: h.default.hasUnread(t.id, g.ReadStateTypes.GUILD_EVENT),
    mentionCount: h.default.getMentionCount(t.id, g.ReadStateTypes.GUILD_EVENT)
  }), [t.id]), p = (0, s.useStateFromStores)([C.default], () => C.default.isMuteScheduledEventsEnabled(t.id));
  async function m() {
    await (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("659707").then(n.bind(n, "659707"));
      return n => (0, l.jsx)(e, {
        ...n,
        guildId: t.id
      })
    }), (0, d.markDismissibleContentAsDismissed)(i.DismissibleContent.GUILD_HEADER_EVENT_UPSELL)
  }
  let E = (0, c.default)(t.id),
    S = E.length > 0 ? I.default.Messages.GUILD_EVENTS_PLURAL.format({
      number: E.length
    }) : I.default.Messages.GUILD_EVENTS;
  return (0, l.jsx)(_, {
    selected: a,
    showUnread: u && !p,
    onClick: m,
    onContextMenu: e => {
      (0, o.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("213528").then(n.bind(n, "213528"));
        return n => (0, l.jsx)(e, {
          ...n,
          guildId: t.id
        })
      })
    },
    eventsMuted: p,
    rowLabel: S,
    mentionCount: f,
    guildId: t.id
  })
}
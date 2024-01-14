"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var l = n("37983");
n("884691");
var u = n("446674"),
  a = n("77078"),
  d = n("267567"),
  i = n("271938"),
  r = n("398604"),
  s = n("397680"),
  o = n("936965"),
  c = n("745049"),
  E = n("782340");

function f(e) {
  let {
    guildEventId: t,
    guildId: n,
    recurrenceId: f
  } = e, _ = (0, u.useStateFromStores)([d.default], () => d.default.isLurking(n), [n]), S = (0, u.useStateFromStores)([i.default], () => i.default.getId()), {
    rsvped: T,
    baseRsvp: v,
    recurrenceRsvp: I
  } = (0, u.useStateFromStoresObject)([r.default], () => ({
    rsvped: r.default.isInterestedInEventRecurrence(t, f),
    baseRsvp: r.default.getRsvp(t, null, S),
    recurrenceRsvp: r.default.getRsvp(t, f, S)
  }), [f, t, S]), N = (0, s.default)(f, t);
  if (_ || (null == N ? void 0 : N.is_canceled)) return null;
  let g = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      l = (null == v ? void 0 : v.response) === c.GuildScheduledEventUserResponses.INTERESTED,
      u = l ? c.GuildScheduledEventUserResponses.UNINTERESTED : c.GuildScheduledEventUserResponses.INTERESTED;
    e ? (0, o.updateRsvp)(t, null, n, u) : (0, o.updateRsvp)(t, f, n, u)
  };
  return (0, l.jsxs)(a.MenuItem, {
    id: T ? E.default.Messages.EVENT_MARK_NOT_INTERESTED : E.default.Messages.EVENT_MARK_INTERESTED,
    label: T ? E.default.Messages.EVENT_MARK_NOT_INTERESTED : E.default.Messages.EVENT_MARK_INTERESTED,
    action: void 0,
    children: [(0, l.jsx)(a.MenuItem, {
      id: E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
      label: E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
      action: () => g(!1)
    }), (0, l.jsx)(a.MenuItem, {
      id: E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
      label: E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
      action: () => g(!0),
      disabled: null != I
    })]
  })
}
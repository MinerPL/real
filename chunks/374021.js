"use strict";
n.r(t), n.d(t, {
  openGuildEventDetails: function() {
    return d
  },
  transitionToEventDetailsFromInvite: function() {
    return u
  },
  openEndEventModal: function() {
    return l
  }
});
var s = n("37983");
n("884691");
var i = n("551042"),
  r = n("851387"),
  a = n("49111"),
  o = n("625611");

function d(e) {
  let {
    eventId: t,
    parentGuildId: r,
    recurrenceId: a
  } = e;
  (0, i.openModalLazy)(async () => {
    let {
      default: e
    } = await n.el("833843").then(n.bind(n, "833843"));
    return n => (0, s.jsx)(e, {
      guildScheduledEventId: t,
      parentGuildId: r,
      initialRecurrenceId: a,
      ...n
    })
  })
}
async function u(e, t) {
  let {
    guild_id: n
  } = e;
  await r.default.transitionToGuildSync(n, t), d({
    eventId: e.id,
    event: e
  })
}

function l(e, t) {
  (0, i.openModalLazy)(async () => {
    let {
      default: t
    } = await n.el("203811").then(n.bind(n, "203811"));
    return n => (0, s.jsx)(t, {
      ...n,
      channel: e
    })
  }, {
    contextKey: t === a.AppContext.POPOUT ? o.POPOUT_MODAL_CONTEXT : o.DEFAULT_MODAL_CONTEXT
  })
}
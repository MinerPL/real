"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  },
  getEventException: function() {
    return u
  }
});
var a = n("446674"),
  i = n("398604");

function l(e, t) {
  let n = (0, a.useStateFromStoresArray)([i.default], () => {
    var e, n;
    return null !== (n = null === (e = i.default.getGuildScheduledEvent(t)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== n ? n : []
  });
  return s(n, e)
}

function u(e, t) {
  var n, a;
  let l = null !== (a = null === (n = i.default.getGuildScheduledEvent(t)) || void 0 === n ? void 0 : n.guild_scheduled_event_exceptions) && void 0 !== a ? a : [];
  return s(l, e)
}

function s(e, t) {
  let n = null == e ? void 0 : e.find(e => e.event_exception_id === t);
  return n
}
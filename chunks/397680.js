"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  },
  getEventException: function() {
    return i
  }
});
var l = n("446674"),
  a = n("398604");

function s(e, t) {
  let n = (0, l.useStateFromStoresArray)([a.default], () => {
    var e, n;
    return null !== (n = null === (e = a.default.getGuildScheduledEvent(t)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== n ? n : []
  });
  return r(n, e)
}

function i(e, t) {
  var n, l;
  let s = null !== (l = null === (n = a.default.getGuildScheduledEvent(t)) || void 0 === n ? void 0 : n.guild_scheduled_event_exceptions) && void 0 !== l ? l : [];
  return r(s, e)
}

function r(e, t) {
  let n = null == e ? void 0 : e.find(e => e.event_exception_id === t);
  return n
}
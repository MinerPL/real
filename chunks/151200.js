"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var i = n("37983");
n("884691");
var r = n("446674"),
  l = n("77078"),
  a = n("561288"),
  s = n("191145"),
  o = n("271938"),
  u = n("99795"),
  d = n("782340");

function c(e, t) {
  let n = (0, r.useStateFromStores)([o.default], () => o.default.getId() === e, [e]),
    [c, f] = (0, r.useStateFromStoresArray)([s.default], () => [s.default.getParticipants(t), s.default.getParticipant(t, e)], [t, e]);
  return n || 0 === c.length ? null : null == f ? (0, i.jsx)(l.MenuItem, {
    id: "ring",
    label: d.default.Messages.RING,
    action: () => a.default.ring(t, [e])
  }) : f.type === u.ParticipantTypes.USER && f.ringing ? (0, i.jsx)(l.MenuItem, {
    id: "stop-ringing",
    label: d.default.Messages.STOP_RINGING,
    action: () => a.default.stopRinging(t, [e])
  }) : null
}
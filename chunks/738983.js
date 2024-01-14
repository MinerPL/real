"use strict";
n.r(t), n.d(t, {
  startStageInstance: function() {
    return u
  },
  updateStageInstance: function() {
    return o
  },
  endStageInstance: function() {
    return a
  }
});
var i = n("872717"),
  l = n("49111");
async function u(e, t, n, u, o) {
  let a = await i.default.post({
    url: l.Endpoints.STAGE_INSTANCES,
    body: {
      channel_id: e,
      topic: t,
      privacy_level: n,
      guild_scheduled_event_id: o,
      send_start_notification: u
    }
  });
  return a.body
}
async function o(e, t, n) {
  let u = await i.default.patch({
    url: l.Endpoints.STAGE_INSTANCE(e),
    body: {
      topic: t,
      privacy_level: n
    }
  });
  return u.body
}

function a(e) {
  return i.default.delete(l.Endpoints.STAGE_INSTANCE(e))
}
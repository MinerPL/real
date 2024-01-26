"use strict";
n.r(t), n.d(t, {
  socket: function() {
    return g
  },
  localPresenceState: function() {
    return m
  },
  localVoiceState: function() {
    return E
  },
  localLobbyVoiceStates: function() {
    return p
  }
});
var i = n("913144"),
  s = n("49671"),
  r = n("605250"),
  a = n("271938"),
  o = n("599110"),
  l = n("35468"),
  u = n("773336"),
  d = n("447214"),
  c = n("413196"),
  f = n("764867"),
  _ = n("292892");
let h = new r.default("ConnectionStore"),
  g = new d.default,
  m = new f.default(g),
  E = new _.default(g),
  p = new c.default(g);
g.handleIdentify = () => {
  let e = a.default.getToken();
  return (h.verbose("handleIdentify called", {
    hasToken: null != e
  }), null == e) ? null : {
    token: e,
    properties: o.default.getSuperProperties(),
    presence: m.getState()
  }
}, (0, u.isDesktop)() && s.default.remotePowerMonitor.on("resume", () => {
  g.expeditedHeartbeat(5e3, "power monitor resumed")
}), l.default.addOfflineCallback(() => {
  g.networkStateChange(15e3, "network detected offline.", !1)
}), l.default.addOnlineCallback(() => {
  g.networkStateChange(5e3, "network detected online.")
}), g.on("disconnect", e => {
  let {
    code: t,
    reason: n
  } = e;
  i.default.dispatch({
    type: "CONNECTION_CLOSED",
    code: t,
    reason: n
  })
}), g.on("close", e => {
  let {
    code: t,
    reason: n
  } = e;
  i.default.dispatch({
    type: "CONNECTION_INTERRUPTED",
    code: t,
    reason: n
  })
})
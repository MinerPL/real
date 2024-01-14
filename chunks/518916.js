"use strict";
n.r(t), n.d(t, {
  socket: function() {
    return v
  },
  localPresenceState: function() {
    return E
  },
  localVoiceState: function() {
    return p
  },
  localLobbyVoiceStates: function() {
    return y
  },
  setDispatchSocketMessageFunction: function() {
    return C
  }
}), n("222007"), n("424973"), n("70102");
var s = n("35092"),
  i = n("913144"),
  r = n("49671"),
  a = n("605250"),
  o = n("271938"),
  d = n("599110"),
  u = n("35468"),
  l = n("773336"),
  f = n("509065"),
  _ = n("447214"),
  c = n("413196"),
  g = n("764867"),
  m = n("292892");
let h = new a.default("ConnectionStore"),
  v = new _.default,
  E = new g.default(v),
  p = new m.default(v),
  y = new c.default(v),
  T = null;

function C(e) {
  T = e
}
v.handleIdentify = () => {
  let e = o.default.getToken();
  return (h.verbose("handleIdentify called", {
    hasToken: null != e
  }), null == e) ? null : {
    token: e,
    properties: d.default.getSuperProperties(),
    presence: E.getState()
  }
}, (0, l.isDesktop)() && r.default.remotePowerMonitor.on("resume", () => {
  v.expeditedHeartbeat(5e3, "power monitor resumed")
}), u.default.addOfflineCallback(() => {
  v.networkStateChange(15e3, "network detected offline.", !1)
}), u.default.addOnlineCallback(() => {
  v.networkStateChange(5e3, "network detected online.")
}), v.on("disconnect", e => {
  let {
    code: t,
    reason: n
  } = e;
  i.default.dispatch({
    type: "CONNECTION_CLOSED",
    code: t,
    reason: n
  })
}), v.on("close", e => {
  let {
    code: t,
    reason: n
  } = e;
  i.default.dispatch({
    type: "CONNECTION_INTERRUPTED",
    code: t,
    reason: n
  })
});
let S = [],
  I = null,
  A = 33,
  D = new Set(["READY", "INITIAL_GUILD"]);

function N() {
  I = null;
  let e = Date.now(),
    t = S.slice();
  if (S.length = 0, null == T) throw Error("setDispatchSocketMessageFunction needs to be called first!");
  let n = "none";
  try {
    s.default.Emitter.batched(() => {
      t.forEach(e => {
        let [t, s] = e;
        n = t, T(t, s)
      }), f.default.flush()
    })
  } catch (e) {
    v.resetSocketOnError(e, n)
  }
  let i = Date.now() - e;
  i > 100 ? (h.log("Dispatched ".concat(t.length, " messages in ").concat(i, "ms")), A = 250) : A = 33
}
v.on("dispatch", (e, t) => {
  S.push([e, t]), D.has(e) ? (null != I && clearTimeout(I), N()) : null == I && (I = setTimeout(N, A))
})
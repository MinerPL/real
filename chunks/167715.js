"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("37983");
n("884691");
var s = n("414456"),
  i = n.n(s),
  l = n("446674"),
  r = n("77078"),
  o = n("235660"),
  u = n("998564"),
  d = n("420145"),
  c = n("209969"),
  E = n("171644"),
  f = n("782340"),
  _ = n("505393");

function h(e) {
  let {
    platform: t
  } = e;
  return t === E.GameConsoleTypes.XBOX ? (0, a.jsx)(d.default, {
    className: _.icon
  }) : t === E.GameConsoleTypes.PLAYSTATION ? (0, a.jsx)(u.default, {
    className: _.icon
  }) : null
}

function C(e) {
  let {
    voiceState: t,
    awaitingRemoteSessionInfo: n
  } = e, s = null != n ? (0, c.coercePlatformTypeToConsoleType)(n.type) : null, u = (0, l.useStateFromStores)([o.default], () => {
    var e, n;
    return null === (e = o.default.getSessionById(null !== (n = null == t ? void 0 : t.sessionId) && void 0 !== n ? n : "")) || void 0 === e ? void 0 : e.clientInfo.os
  }), d = null != s ? s : u;
  if (null == d || !E.GAME_CONSOLE_SESSIONS.has(d)) return null;
  let C = null != n,
    T = C ? d === E.GameConsoleTypes.XBOX ? f.default.Messages.XBOX_TRANSFERRING_ELLIPSIS : f.default.Messages.PLAYSTATION_TRANSFERRING_ELLIPSIS : d === E.GameConsoleTypes.XBOX ? f.default.Messages.XBOX_REMOTE_CONNECTED.format() : f.default.Messages.PLAYSTATION_REMOTE_CONNECTED.format();
  return (0, a.jsxs)("div", {
    className: i(_.root, C ? _.connecting : _.connected),
    children: [(0, a.jsx)(h, {
      platform: d
    }), (0, a.jsx)(r.Text, {
      color: C ? "header-primary" : "always-white",
      variant: "text-xs/medium",
      children: T
    })]
  })
}
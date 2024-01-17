"use strict";
n.r(t), n.d(t, {
  activityInstanceConnectedParticipants: function() {
    return f
  },
  activityInstanceConnectedParticipantsScope: function() {
    return E
  },
  activityInstanceConnectedParticipantsUpdateEvent: function() {
    return _
  },
  subscribeToActivityInstanceConnectedParticipants: function() {
    return h
  }
});
var a = n("917351"),
  s = n.n(a),
  i = n("913144"),
  l = n("191225"),
  r = n("697218"),
  o = n("449008"),
  u = n("387111"),
  d = n("694352"),
  c = n("492249");

function f() {
  let e = l.default.getCurrentEmbeddedActivity();
  if (null == e) return {
    participants: []
  };
  let {
    guildId: t,
    channelId: n
  } = e, a = Array.from(e.userIds, e => {
    let a = r.default.getUser(e);
    if (null == a) return;
    let s = (0, u.getNickname)(t, n, a);
    return {
      ...(0, d.default)(a),
      nickname: null != s ? s : void 0
    }
  }).filter(o.isNotNullish);
  return {
    participants: a
  }
}
let E = {
    [c.RPC_SCOPE_CONFIG.ANY]: [c.RPC_AUTHENTICATED_SCOPE]
  },
  _ = {
    scope: E,
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, a = f();
      return !s.isEqual(a, t) && n(a), a
    }
  };

function h(e) {
  let t = "EMBEDDED_ACTIVITY_INBOUND_UPDATE",
    n = () => {
      e(f())
    };
  return i.default.subscribe(t, n), () => i.default.unsubscribe(t, n)
}
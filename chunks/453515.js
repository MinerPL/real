"use strict";
n.r(t), n("222007");
var a, s = n("446674"),
  i = n("95410"),
  l = n("862337"),
  r = n("913144"),
  o = n("260365"),
  u = n("374363"),
  d = n("718517"),
  c = n("964889"),
  E = n("546463"),
  f = n("686470"),
  _ = n("568307"),
  h = n("49111");
let C = "ActivityTrackingStore",
  T = 30 * d.default.Millis.MINUTE,
  I = 5 * d.default.Millis.MINUTE,
  S = null !== (a = i.default.get(C)) && void 0 !== a ? a : {},
  N = {},
  A = !1;

function p(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  t && m(e, !0);
  let n = N[e.applicationId];
  null != n && (n.stop(), delete N[e.applicationId]), delete S[e.applicationId], i.default.set(C, S)
}

function m(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = Date.now(),
    a = null != e.updatedAt ? n - e.updatedAt : 0;
  a > T + I && (a = 0), o.default.updateActivity({
    applicationId: e.applicationId,
    distributor: e.isDiscordApplication ? h.Distributors.DISCORD : e.distributor,
    shareActivity: (0, c.shouldShareApplicationActivity)(e.applicationId, f.default),
    token: e.token,
    duration: Math.floor(a / 1e3),
    closed: t
  }), e.updatedAt = n;
  let s = N[e.applicationId];
  null == s && (s = N[e.applicationId] = new l.Interval).start(T, () => m(e)), !t && (S[e.applicationId] = e, i.default.set(C, S))
}

function g() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
    t = _.default.getRunningGames(),
    n = new Set;
  for (let {
      name: e,
      distributor: a
    }
    of t) {
    let t = E.default.getGameByName(e);
    if (null != t) n.add(t.id), !(t.id in S) && m({
      applicationId: t.id,
      updatedAt: Date.now(),
      distributor: a
    })
  }
  for (let t of Object.keys(S)) !n.has(t) && p(S[t], e)
}

function R() {
  for (let e of Object.keys(S)) p(S[e]);
  A = !1
}
class O extends s.default.Store {
  initialize() {
    this.waitFor(_.default, u.default, f.default), this.syncWith([u.default], g)
  }
  getActivities() {
    return S
  }
}
O.displayName = "ActivityTrackingStore", new O(r.default, {
  RUNNING_GAMES_CHANGE: () => g(),
  CONNECTION_OPEN: function() {
    if (A) return !1;
    for (let e of Object.keys(S)) m(S[e]);
    g(!1), A = !0
  },
  CONNECTION_CLOSED: function(e) {
    let {
      code: t
    } = e;
    4004 === t && R()
  },
  LOGOUT: R,
  ACTIVITY_UPDATE_SUCCESS: function(e) {
    let {
      applicationId: t,
      token: n
    } = e, a = S[t];
    if (null == a) return !1;
    a.token = n, i.default.set(C, S)
  },
  ACTIVITY_UPDATE_FAIL: function(e) {
    let {
      applicationId: t
    } = e, n = S[t];
    if (null == n) return !1;
    n.token = null, n.updatedAt = null, i.default.set(C, S)
  }
})
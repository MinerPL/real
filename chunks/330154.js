"use strict";
let s;
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var i = n("671725"),
  r = n.n(i),
  a = n("533865"),
  o = n.n(a),
  d = n("953406"),
  u = n.n(d),
  l = n("446674"),
  f = n("913144"),
  _ = n("517763"),
  c = n("91366");
let g = {},
  m = {},
  h = {},
  v = {},
  E = !1,
  p = !1,
  y = !1;
class C extends l.default.Store {
  getInvite(e) {
    var t, n;
    let {
      targetType: s,
      targetUserId: i,
      targetApplicationId: r
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return s === c.InviteTargetTypes.STREAM && null != i ? null === (t = m[e]) || void 0 === t ? void 0 : t[i] : s === c.InviteTargetTypes.EMBEDDED_APPLICATION && null != r ? null === (n = h[e]) || void 0 === n ? void 0 : n[r] : g[e]
  }
  getFriendInvite() {
    return s
  }
  getFriendInvitesFetching() {
    return E
  }
  canRevokeFriendInvite() {
    return null != s && !p && !y
  }
}
C.displayName = "InstantInviteStore";
var T = new C(f.default, {
  CONNECTION_OPEN: function() {
    g = {}, m = {}, h = {}, v = {}, s = null, p = !1, y = !1, E = !1
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    delete g[t.id], delete m[t.id], delete h[t.id]
  },
  FRIEND_INVITE_CREATE_SUCCESS: function(e) {
    var t;
    v[e.invite.code] = _.default.createFromServer(e.invite), s = null !== (t = r(o(u(Object.values(v), "createdAt")))) && void 0 !== t ? t : null, y = !1
  },
  FRIEND_INVITE_CREATE_FAILURE: function() {
    y = !1
  },
  FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
    var t;
    null != e.invites && e.invites.forEach(e => {
      null != v[e.code] && delete v[e.code]
    }), s = null !== (t = r(o(u(Object.values(v), "createdAt")))) && void 0 !== t ? t : null, p = !1
  },
  INSTANT_INVITE_CREATE_SUCCESS: function(e) {
    let {
      channelId: t,
      invite: n
    } = e, s = _.default.createFromServer(n);
    s.targetType === c.InviteTargetTypes.STREAM && null != s.targetUser ? (null == m[t] && (m[t] = {}), m[t][String(s.targetUser.id)] = s) : s.targetType === c.InviteTargetTypes.EMBEDDED_APPLICATION && null != s.targetApplication ? (null == h[t] && (h[t] = {}), h[t][s.targetApplication.id] = s) : g[t] = s
  },
  INSTANT_INVITE_CREATE_FAILURE: function(e) {
    let {
      channelId: t
    } = e;
    g[t] = null
  },
  INSTANT_INVITE_REVOKE_SUCCESS: function(e) {
    let {
      channelId: t
    } = e;
    g[t] = null
  },
  FRIEND_INVITE_REVOKE_REQUEST: function() {
    p = !0
  },
  FRIEND_INVITE_CREATE_REQUEST: function() {
    y = !0
  },
  FRIEND_INVITES_FETCH_REQUEST: function() {
    E = !0
  },
  FRIEND_INVITES_FETCH_RESPONSE: function(e) {
    var t;
    v = {}, e.invites.forEach(e => {
      v[e.code] = _.default.createFromServer(e)
    }), s = null !== (t = r(o(u(Object.values(v), "createdAt")))) && void 0 !== t ? t : null, E = !1
  },
  INSTANT_INVITE_CLEAR: function(e) {
    delete g[e.channelId]
  }
})
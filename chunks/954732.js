"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var l = n("446674"),
  a = n("913144"),
  s = n("449008"),
  i = n("49111");
let r = [],
  o = {},
  u = null,
  d = 0;

function c(e) {
  let t = null;
  try {
    t = JSON.parse(e.launch_parameters)
  } catch {
    return null
  }
  if (e.platform_type === i.PlatformTypes.XBOX) {
    let n = null == t ? void 0 : t.titleId,
      l = null == t ? void 0 : t.inviteToken;
    return null == n || null == l ? null : {
      ...e,
      parsed_launch_parameters: {
        titleId: n,
        inviteToken: l
      }
    }
  }
  return null
}
class f extends l.default.Store {
  getInvites() {
    return r
  }
  isInviteGameInstalled(e) {
    var t, n;
    return null !== (n = null === (t = o[e.invite_id]) || void 0 === t ? void 0 : t.installed) && void 0 !== n && n
  }
  isInviteJoinable(e) {
    var t, n;
    return null !== (n = null === (t = o[e.invite_id]) || void 0 === t ? void 0 : t.joinable) && void 0 !== n && n
  }
  getLastUnseenInvite() {
    return u
  }
  getUnseenInviteCount() {
    return d
  }
}
f.displayName = "GameInviteStore";
var E = new f(a.default, {
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      gameInvites: t
    } = e;
    r = t.map(c).filter(s.isNotNullish)
  },
  GAME_INVITE_CREATE: function(e) {
    let {
      gameInvite: t
    } = e, n = c(t);
    null != n && (r = [...r, n], u = t, d += 1)
  },
  GAME_INVITE_DELETE: function(e) {
    let {
      inviteId: t
    } = e;
    r = r.filter(e => e.invite_id !== t)
  },
  GAME_INVITE_DELETE_MANY: function(e) {
    let {
      inviteIds: t
    } = e;
    r = r.filter(e => !t.includes(e.invite_id))
  },
  GAME_INVITE_UPDATE_STATUS: function(e) {
    o[e.inviteId] = {
      installed: e.installed,
      joinable: e.joinable
    }
  },
  GAME_INVITE_CLEAR_UNSEEN: function(e) {
    u = null, d = 0
  }
})
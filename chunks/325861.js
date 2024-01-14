"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007"), n("808653");
var r, i, l = n("917351"),
  u = n.n(l),
  a = n("446674"),
  o = n("913144"),
  d = n("42203"),
  s = n("923959"),
  E = n("26989"),
  _ = n("305961"),
  c = n("697218"),
  I = n("800762"),
  S = n("991170"),
  T = n("923510"),
  f = n("808422");
(i = r || (r = {})).SPEAKER = "speaker", i.MODERATOR = "moderator";
let p = {},
  N = {
    speaker: !1,
    moderator: !1
  };

function C(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  null == p[t] && (p[t] = {});
  let r = function(e, t) {
    var n, r, i;
    let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      u = d.default.getChannel(t),
      a = null == u ? void 0 : u.getGuildId(),
      o = _.default.getGuild(a);
    if (null == o || null == u || !u.isGuildStageVoice()) return N;
    return {
      speaker: function(e, t) {
        let n = I.default.getVoiceStateForChannel(t, e);
        return (0, f.getAudienceRequestToSpeakState)(n) === f.RequestToSpeakStates.ON_STAGE
      }(e, t),
      moderator: l ? (n = e, r = o, i = u, S.default.can({
        permission: T.MODERATE_STAGE_CHANNEL_PERMISSIONS,
        user: n,
        context: r,
        overwrites: i.permissionOverwrites,
        roles: r.roles
      })) : null
    }
  }(e, t, n);
  return p[t][e] = r, r
}

function A(e, t) {
  var n;
  if (null == t) return !1;
  let r = d.default.getChannel(t);
  return !!(null != r && r.isGuildStageVoice()) && (null === (n = p[t]) || void 0 === n || delete n[e], !0)
}

function R(e) {
  let t = s.default.getChannels(e)[s.GUILD_VOCAL_CHANNELS_KEY].filter(e => {
    let {
      channel: t
    } = e;
    return t.isGuildStageVoice()
  });
  for (let {
      channel: e
    }
    of t) delete p[e.id];
  return t.length > 0
}

function h(e) {
  let {
    guildId: t,
    user: n
  } = e;
  return null != n && null != t && function(e, t) {
    for (let n in p) {
      let r = d.default.getBasicChannel(n);
      if (null != r) r.guild_id === t && delete p[n][e]
    }
    return !0
  }(n.id, t)
}

function O(e) {
  let {
    guild: t
  } = e;
  for (let e in p) {
    let n = d.default.getBasicChannel(e);
    (null == n || n.guild_id === t.id) && delete p[e]
  }
}
class L extends a.default.Store {
  initialize() {
    this.waitFor(E.default, d.default, _.default, c.default, I.default)
  }
  isSpeaker(e, t) {
    return this.getPermissionsForUser(e, t).speaker
  }
  isModerator(e, t) {
    var n;
    return null !== (n = this.getPermissionsForUser(e, t, !0).moderator) && void 0 !== n && n
  }
  isAudienceMember(e, t) {
    let n = this.getPermissionsForUser(e, t);
    return !n.speaker && !n.moderator
  }
  getPermissionsForUser(e, t) {
    var n;
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null == e || null == t) return N;
    let i = null === (n = p[t]) || void 0 === n ? void 0 : n[e];
    if (null != i) return r && null == i.moderator ? C(e, t, !0) : i;
    return C(e, t, r)
  }
}
L.displayName = "StageChannelRoleStore";
var g = new L(o.default, {
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    for (let e of t) delete p[e.id]
  },
  CONNECTION_OPEN: function() {
    p = {}
  },
  GUILD_MEMBER_REMOVE: h,
  GUILD_MEMBER_UPDATE: h,
  GUILD_ROLE_UPDATE: function(e) {
    let {
      guildId: t
    } = e;
    R(t)
  },
  PASSIVE_UPDATE_V1: function(e) {
    var t;
    let n = R(e.guildId);
    for (let r of null !== (t = e.voiceStates) && void 0 !== t ? t : []) n = A(r.userId, r.channelId) || n;
    return n
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return !u.isEmpty(p) && t.reduce((e, t) => {
      let {
        userId: n,
        channelId: r
      } = t;
      return A(n, r) || e
    }, !1)
  },
  GUILD_CREATE: O,
  GUILD_DELETE: O
})
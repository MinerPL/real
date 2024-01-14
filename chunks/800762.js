"use strict";
let i, r;
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("808653"), n("222007");
var s = n("917351"),
  a = n.n(s),
  o = n("446674"),
  l = n("913144"),
  u = n("628454"),
  c = n("49111"),
  d = n("99795");
let f = 0,
  E = 0,
  h = {},
  p = {},
  _ = {},
  S = {},
  m = {};

function T(e, t) {
  return "".concat(e, ":").concat(t)
}

function g(e, t) {
  let n = e[t];
  return null == n && (n = {}, e[t] = n), n
}

function I(e) {
  var t;
  let n = null !== (t = h[c.ME]) && void 0 !== t ? t : {},
    i = {};
  a.each(n, (t, n) => {
    t.channelId !== e && (i[n] = t)
  }), h[c.ME] = i
}

function C(e, t, n) {
  let i = g(h, null != e ? e : c.ME),
    r = i[t],
    s = n(r);
  return r === s ? [!1, s, r] : (null != r && (delete i[t], null != r.channelId && (delete g(p, r.channelId)[t], delete g(_, r.channelId)[t]), null != r.sessionId && delete g(S, t)[r.sessionId]), null != s && (i[t] = s, null != s.channelId && (g(p, s.channelId)[t] = s, s.selfVideo && (g(_, s.channelId)[t] = s)), null != s.sessionId && (g(S, t)[s.sessionId] = s)), [!0, s, r])
}

function v(e, t) {
  return C(e, t.userId, e => {
    if (null == t.channelId) return null;
    {
      let n = {
        channelId: t.channelId,
        deaf: t.deaf,
        mute: t.mute,
        requestToSpeakTimestamp: t.requestToSpeakTimestamp,
        selfDeaf: t.selfDeaf,
        selfMute: t.selfMute,
        selfStream: t.selfStream,
        selfVideo: t.selfVideo,
        sessionId: t.sessionId,
        suppress: t.suppress,
        userId: t.userId
      };
      return null != e ? e.merge(n) : new u.default(n)
    }
  })
}

function A(e) {
  let {
    guild: t
  } = e;
  a.forEach(h[t.id], e => {
    C(t.id, e.userId, () => null)
  }), delete h[t.id]
}
class R extends o.default.Store {
  getAllVoiceStates() {
    return h
  }
  getVoiceStateVersion() {
    return E
  }
  getVoiceStates(e) {
    return g(h, null != e ? e : c.ME)
  }
  getVoiceStatesForChannel(e) {
    return g(p, e)
  }
  getVideoVoiceStatesForChannel(e) {
    return g(_, e)
  }
  getVoiceState(e, t) {
    return this.getVoiceStates(e)[t]
  }
  getVoiceStateForChannel(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
    return null === (t = g(p, e)) || void 0 === t ? void 0 : t[n]
  }
  getVoiceStateForUser(e) {
    return Object.values(g(S, e))[0]
  }
  getVoiceStateForSession(e, t) {
    var n;
    return null != t ? null === (n = g(S, e)) || void 0 === n ? void 0 : n[t] : null
  }
  getUserVoiceChannelId(e, t) {
    var n;
    return null === (n = this.getVoiceState(e, t)) || void 0 === n ? void 0 : n.channelId
  }
  getCurrentClientVoiceChannelId(e) {
    let t = this.getVoiceState(e, i);
    return null != t && null != r && t.sessionId === r ? t.channelId : null
  }
  isCurrentClientInVoiceChannel() {
    var e;
    return null != r && (null === (e = S[i]) || void 0 === e ? void 0 : e[r]) != null
  }
  isInChannel(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
    if (null == e) return !1;
    let n = this.getVoiceStateForChannel(e, t);
    return null != n && (t !== i || null != r && n.sessionId === r)
  }
  hasVideo(e) {
    return Object.values(g(_, e)).length > 0
  }
  getVoicePlatformForChannel(e, t) {
    var n, s;
    let a = null != r && (null === (s = S[i]) || void 0 === s ? void 0 : null === (n = s[r]) || void 0 === n ? void 0 : n.channelId);
    return t === i && e === a ? d.VoicePlatforms.DESKTOP : m[T(t, e)]
  }
  get userHasBeenMovedVersion() {
    return f
  }
}
R.displayName = "VoiceStateStore";
var N = new R(l.default, {
  CONNECTION_OPEN: function(e) {
    let {
      user: t,
      sessionId: n
    } = e;
    h = {}, p = {}, S = {}, _ = {}, i = t.id, r = n
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      voiceStates: t,
      user: n,
      sessionId: s
    } = e;
    for (let [e, n] of(h = {}, p = {}, S = {}, _ = {}, Object.entries(t)))
      for (let [t, i] of Object.entries(n)) C(e, t, () => new u.default(i));
    i = n.id, r = s
  },
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e, [r] = C(t, i, e => null == e ? void 0 : e.set("channelId", n));
    return r
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      let [n, i, s] = v(t.guildId, t);
      return n ? (t.sessionId === r && null != i && null != s && s.channelId !== i.channelId && (f += 1), E++, !0) : e
    }, !1)
  },
  GUILD_DELETE: A,
  GUILD_CREATE: A,
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    I(t.id)
  },
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    I(t)
  },
  PASSIVE_UPDATE_V1: function(e) {
    var t, n;
    let i = !1,
      r = Object.keys(null !== (t = h[e.guildId]) && void 0 !== t ? t : {}),
      s = new Set(r);
    for (let t of null !== (n = e.voiceStates) && void 0 !== n ? n : []) {
      let [n] = v(e.guildId, t);
      i = i || n, s.delete(t.userId)
    }
    for (let t of s) C(e.guildId, t, () => null), i = !0;
    return i && E++, i
  },
  RTC_CONNECTION_PLATFORM: function(e) {
    let {
      userId: t,
      channelId: n,
      platform: i
    } = e;
    m[T(t, n)] = i
  }
})
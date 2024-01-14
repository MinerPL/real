"use strict";
n.r(t), n.d(t, {
  toggleRequestToSpeak: function() {
    return A
  },
  inviteUserToStage: function() {
    return g
  },
  audienceAckRequestToSpeak: function() {
    return C
  },
  moveSelfToAudience: function() {
    return I
  },
  setUserSuppress: function() {
    return N
  },
  moveUserToAudience: function() {
    return U
  },
  setEveryoneRolePermissionAllowed: function() {
    return O
  },
  startStage: function() {
    return h
  },
  editStage: function() {
    return R
  },
  endStage: function() {
    return v
  }
});
var i = n("627445"),
  l = n.n(i),
  u = n("316693"),
  o = n("872717"),
  a = n("450911");
n("851387");
var r = n("798609"),
  d = n("716241"),
  s = n("18494"),
  c = n("800762"),
  f = n("991170"),
  E = n("716214"),
  _ = n("230324"),
  S = n("738983"),
  T = n("808422"),
  p = n("49111");

function A(e, t) {
  let n = e.getGuildId();
  return l(null != n, "This channel cannot be guildless."), t && (0, d.trackWithMetadata)(p.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
    ...(0, _.getStageChannelMetadata)(e)
  }), o.default.patch({
    url: p.Endpoints.UPDATE_VOICE_STATE(n),
    body: {
      request_to_speak_timestamp: t ? new Date().toISOString() : null,
      channel_id: e.id
    }
  })
}

function g(e, t) {
  let n = e.getGuildId();
  return l(null != n, "This channel cannot be guildless."), o.default.patch({
    url: p.Endpoints.UPDATE_VOICE_STATE(n, t),
    body: {
      suppress: !1,
      request_to_speak_timestamp: new Date().toISOString(),
      channel_id: e.id
    }
  })
}

function C(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = null == e ? void 0 : e.getGuildId();
  l(null != i, "This channel cannot be guildless.");
  let u = c.default.getVoiceStateForChannel(e.id),
    a = (0, T.getAudienceRequestToSpeakState)(u);
  return a === T.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, d.trackWithMetadata)(p.AnalyticEvents.PROMOTED_TO_SPEAKER, {
    ...(0, _.getStageChannelMetadata)(e)
  }), o.default.patch({
    url: p.Endpoints.UPDATE_VOICE_STATE(i),
    body: {
      suppress: t,
      request_to_speak_timestamp: null,
      channel_id: e.id,
      ...n ? {
        silent: n
      } : {}
    }
  })
}

function I(e) {
  let t = null == e ? void 0 : e.getGuildId();
  return l(null != t, "This channel cannot be guildless."), o.default.patch({
    url: p.Endpoints.UPDATE_VOICE_STATE(t),
    body: {
      suppress: !0,
      channel_id: e.id,
      self_video: !1,
      self_stream: !1
    }
  })
}

function N(e, t, n) {
  let i = e.getGuildId();
  return l(null != i, "This channel cannot be guildless."), o.default.patch({
    url: p.Endpoints.UPDATE_VOICE_STATE(i, t),
    body: {
      suppress: n,
      channel_id: e.id
    }
  })
}

function U(e, t) {
  if (null == t || null == e) return;
  let n = t.getGuildId();
  return l(null != n, "This channel cannot be guildless."), N(t, e.id, !0), o.default.patch({
    url: p.Endpoints.UPDATE_VOICE_STATE(n, e.id),
    body: {
      suppress: !0,
      channel_id: t.id,
      self_video: !1,
      self_stream: !1
    }
  })
}

function O(e, t, n) {
  let i = e.getGuildId();
  l(null != i, "Channel cannot be guildless");
  let o = e.permissionOverwrites[i],
    d = {
      id: i,
      type: r.PermissionOverwriteType.ROLE,
      allow: f.default.NONE,
      deny: f.default.NONE,
      ...o
    };
  n ? (d.allow = u.default.add(d.allow, t), d.deny = u.default.remove(d.deny, t)) : (d.allow = u.default.remove(d.allow, t), d.deny = u.default.add(d.deny, t)), a.default.updatePermissionOverwrite(e.id, d)
}
async function h(e, t, n, i) {
  if ("" === t) return;
  let l = s.default.getVoiceChannelId() === e.id;
  !l && (0, E.connectToStage)(e);
  let u = await (0, S.startStageInstance)(e.id, t, n, i);
  return C(e, !1, !0), u
}
async function R(e, t, n) {
  if ("" === t) return;
  let i = await (0, S.updateStageInstance)(e.id, t, n);
  return i
}
async function v(e) {
  await (0, S.endStageInstance)(e.id)
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var l = n("37983");
n("884691");
var i = n("446674"),
  u = n("77078"),
  a = n("305961"),
  o = n("697218"),
  r = n("800762"),
  d = n("244480"),
  s = n("619395"),
  c = n("325861"),
  f = n("77445"),
  E = n("130563"),
  _ = n("782340");

function S(e) {
  var t;
  let n = (0, E.default)(),
    S = null == n ? void 0 : n.id,
    T = null == n ? void 0 : n.guild_id,
    p = (0, i.useStateFromStores)([a.default], () => a.default.getGuild(T), [T]),
    A = (0, i.useStateFromStores)([r.default], () => null != S ? r.default.getVoiceStateForChannel(S, e.id) : null, [S, e.id]),
    g = (null === (t = o.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id,
    N = (0, f.default)(),
    C = (0, i.useStateFromStores)([c.default], () => c.default.getPermissionsForUser(e.id, S), [S, e.id]),
    I = (0, s.useCanModerateRequestToSpeak)(S);
  if (null == n || null == p || null == A || C.speaker) return null;
  let O = () => {
    g ? (0, d.audienceAckRequestToSpeak)(n, !1) : (0, d.inviteUserToStage)(n, e.id)
  };
  return I ? (0, l.jsx)(u.MenuItem, {
    id: "invite-speaker",
    label: g ? _.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : _.default.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
    action: O
  }) : N && g ? (0, l.jsx)(u.MenuItem, {
    id: "invite-speaker",
    label: _.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
    action: O
  }) : null
}
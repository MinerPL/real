"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var l = n("37983");
n("884691");
var i = n("446674"),
  a = n("77078"),
  u = n("305961"),
  o = n("697218"),
  d = n("800762"),
  r = n("244480"),
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
    A = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(T), [T]),
    p = (0, i.useStateFromStores)([d.default], () => null != S ? d.default.getVoiceStateForChannel(S, e.id) : null, [S, e.id]),
    g = (null === (t = o.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id,
    I = (0, f.default)(),
    N = (0, i.useStateFromStores)([c.default], () => c.default.getPermissionsForUser(e.id, S), [S, e.id]),
    C = (0, s.useCanModerateRequestToSpeak)(S);
  if (null == n || null == A || null == p || N.speaker) return null;
  let O = () => {
    g ? (0, r.audienceAckRequestToSpeak)(n, !1) : (0, r.inviteUserToStage)(n, e.id)
  };
  return C ? (0, l.jsx)(a.MenuItem, {
    id: "invite-speaker",
    label: g ? _.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : _.default.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
    action: O
  }) : I && g ? (0, l.jsx)(a.MenuItem, {
    id: "invite-speaker",
    label: _.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
    action: O
  }) : null
}
"use strict";
n.r(t), n.d(t, {
  removeModeratorOverwrite: function() {
    return c
  },
  isEmptyOverwrite: function() {
    return g
  },
  useCanUpdateStageChannelModerators: function() {
    return m
  },
  useCanModerateRequestToSpeak: function() {
    return h
  },
  canLurkerListen: function() {
    return v
  }
});
var s = n("316693"),
  i = n("446674"),
  r = n("267567");
n("271938");
var a = n("42203"),
  o = n("305961"),
  d = n("957255"),
  u = n("991170"),
  l = n("923510"),
  f = n("834052"),
  _ = n("49111");

function c(e, t, n) {
  var i, r;
  let a = null == n ? void 0 : n.permissionOverwrites[e];
  return {
    id: e,
    type: t,
    deny: null !== (i = null == a ? void 0 : a.deny) && void 0 !== i ? i : u.default.NONE,
    allow: s.default.remove(null !== (r = null == a ? void 0 : a.allow) && void 0 !== r ? r : u.default.NONE, l.MODERATE_STAGE_CHANNEL_PERMISSIONS)
  }
}

function g(e) {
  let {
    allow: t,
    deny: n
  } = e;
  return s.default.equals(t, u.default.NONE) && s.default.equals(n, u.default.NONE)
}

function m(e) {
  return (0, i.useStateFromStores)([d.default, o.default, a.default], () => {
    let t = a.default.getChannel(e),
      n = o.default.getGuild(null == t ? void 0 : t.getGuildId());
    return !!(d.default.can(_.Permissions.ADMINISTRATOR, n) || d.default.can(_.Permissions.MANAGE_ROLES, t, void 0, void 0, !0) || d.default.can(l.UPDATE_STAGE_CHANNEL_MODERATOR_PERMISSIONS, t)) || !1
  }, [e])
}

function h(e) {
  return (0, i.useStateFromStores)([a.default, d.default], () => null != e && d.default.can(_.Permissions.MUTE_MEMBERS, a.default.getChannel(e)), [e])
}

function v(e) {
  return !!(null != e && e.isGuildStageVoice() && r.default.isLurking(e.guild_id) && f.default.isPublic(e.id)) && d.default.can(l.JOIN_VOCAL_CHANNEL_PERMISSIONS, e)
}
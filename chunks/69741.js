"use strict";
n.r(t), n.d(t, {
  PUBLIC_SUCCESS_MODAL_SEEN_KEY: function() {
    return s
  },
  PUBLIC_GUILD_ANNOUNCEMENTS_GUILD_ID: function() {
    return u
  },
  PUBLIC_GUILD_UPDATES_WEBHOOK_USER_ID: function() {
    return a
  },
  CREATE_NEW_CHANNEL_VALUE: function() {
    return o
  },
  MODERATOR_PERMISSIONS: function() {
    return E
  },
  MODERATOR_PERMISSIONS_FLAG: function() {
    return _
  },
  COMMUNITY_UPSELL_MINIMUM_GUILD_SIZE: function() {
    return S
  },
  ENABLE_COMMUNITY_FLOW_MODAL_KEY: function() {
    return I
  },
  EnableCommunityModalSteps: function() {
    return i
  }
}), n("222007");
var i, l, r = n("316693"),
  d = n("49111");
let s = "publicSuccessModalSeen",
  u = "667560445975986187",
  a = "669627189624307712",
  o = "1",
  E = [d.Permissions.ADMINISTRATOR, d.Permissions.MANAGE_GUILD, d.Permissions.MANAGE_CHANNELS, d.Permissions.MANAGE_ROLES, d.Permissions.KICK_MEMBERS, d.Permissions.BAN_MEMBERS, d.Permissions.MANAGE_MESSAGES, d.Permissions.MENTION_EVERYONE, d.Permissions.MANAGE_GUILD_EXPRESSIONS, d.Permissions.CREATE_GUILD_EXPRESSIONS, d.Permissions.MANAGE_EVENTS, d.Permissions.CREATE_EVENTS, d.Permissions.MODERATE_MEMBERS],
  _ = r.default.combine(...E),
  S = 1e3,
  I = "Enable Community Modal";
(l = i || (i = {})).SAFETY_CHECK = "safety_check", l.BASICS = "basics", l.FINISH = "finish"
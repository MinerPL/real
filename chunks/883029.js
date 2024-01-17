"use strict";
n.r(t), n.d(t, {
  getDescriptiveInviteError: function() {
    return a
  },
  getInviteError: function() {
    return s
  }
});
var r = n("697218"),
  i = n("701909"),
  l = n("719923"),
  o = n("49111"),
  u = n("782340");

function a(e) {
  switch (e) {
    case o.AbortCodes.TOO_MANY_USER_GUILDS:
      let t = r.default.getCurrentUser(),
        n = l.default.canUseIncreasedGuildCap(t) || (null == t ? void 0 : t.isStaff()),
        i = n ? o.MAX_USER_GUILDS_PREMIUM : o.MAX_USER_GUILDS;
      return {
        title: u.default.Messages.TOO_MANY_USER_GUILDS_TITLE_2.format({
          quantity: i
        }), description: u.default.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION
      };
    case o.AbortCodes.GUILD_AT_CAPACITY:
      return {
        title: u.default.Messages.SERVER_IS_CURRENTLY_FULL, description: u.default.Messages.PLEASE_TRY_AGAIN_LATER
      };
    case o.AbortCodes.GUILD_JOIN_INVITE_LIMITED_ACCESS:
      return {
        title: u.default.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_HEADING, description: u.default.Messages.PLEASE_TRY_AGAIN_LATER
      };
    default:
      return null
  }
}

function s(e) {
  switch (e) {
    case o.AbortCodes.TOO_MANY_USER_GUILDS:
      return u.default.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION;
    case o.AbortCodes.GUILD_AT_CAPACITY:
      return u.default.Messages.MAX_GUILD_MEMBERS_REACHED_ERROR;
    case o.AbortCodes.INVALID_COUNTRY_CODE:
      return u.default.Messages.INVALID_COUNTRY_CODE;
    case o.AbortCodes.INVALID_CANNOT_FRIEND_SELF:
      return u.default.Messages.INVALID_CANNOT_FRIEND_SELF;
    case o.AbortCodes.INVITES_DISABLED:
      return u.default.Messages.INVITES_DISABLED_MODAL_DESCRIPTION.format({
        articleLink: i.default.getArticleURL(o.HelpdeskArticles.INVITE_DISABLED)
      });
    default:
      return u.default.Messages.INVITE_MODAL_ERROR_DEFAULT
  }
}
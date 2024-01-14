"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("446674"),
  n = s("913144"),
  l = s("900938"),
  i = s("772871"),
  r = s("49111");
let o = i.GuildSettingsSafetyPage.OVERVIEW,
  d = null;

function u(e) {
  let {
    subsection: t
  } = e;
  switch (t) {
    case r.GuildSettingsSubsections.SAFETY_AUTOMOD:
      o = i.GuildSettingsSafetyPage.AUTOMOD;
      break;
    case r.GuildSettingsSubsections.SAFETY_DM_AND_SPAM_PROTECTION:
      o = i.GuildSettingsSafetyPage.DM_AND_SPAM_PROTECTION;
      break;
    case r.GuildSettingsSubsections.SAFETY_CAPTCHA_AND_RAID_PROTECTION:
      o = i.GuildSettingsSafetyPage.CAPTCHA_AND_RAID_PROTECTION;
      break;
    case r.GuildSettingsSubsections.SAFETY_PERMISSIONS:
      o = i.GuildSettingsSafetyPage.PERMISSIONS;
      break;
    case r.GuildSettingsSubsections.SAFETY_OVERVIEW:
    default:
      o = i.GuildSettingsSafetyPage.OVERVIEW
  }
}
class c extends a.default.Store {
  getCurrentPage() {
    return o
  }
}
c.displayName = "GuildSettingsSafetyStore";
var E = new c(n.default, {
  GUILD_SETTINGS_INIT: function() {
    if (l.default.getGuildId() === d) return !1;
    d = l.default.getGuildId()
  },
  GUILD_SETTINGS_SET_SECTION: u,
  GUILD_SETTINGS_SAFETY_SET_SUBSECTION: u,
  GUILD_SETTINGS_SAFETY_PAGE: function(e) {
    let {
      page: t
    } = e;
    o = t
  }
})
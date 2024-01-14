"use strict";
s.r(t), s.d(t, {
  MAX_SUBCATEGORIES: function() {
    return i
  },
  MAX_KEYWORDS: function() {
    return r
  },
  MAX_KEYWORD_LENGTH: function() {
    return o
  },
  GuildSettingsRoleEditSections: function() {
    return n
  },
  getSettingsErrorMessage: function() {
    return u
  }
});
var a, n, l = s("782340");
let i = 5,
  r = 10,
  o = 30;
(a = n || (n = {}))[a.DISPLAY = 0] = "DISPLAY", a[a.PERMISSIONS = 1] = "PERMISSIONS", a[a.MEMBERS = 2] = "MEMBERS", a[a.VERIFICATIONS = 3] = "VERIFICATIONS";
let d = {
  afk_channel_id: () => l.default.Messages.FORM_LABEL_AFK_CHANNEL,
  public_updates_channel_id: () => l.default.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_TITLE,
  safety_alerts_channel_id: () => l.default.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_TITLE,
  system_channel_id: () => l.default.Messages.FORM_LABEL_SYSTEM_CHANNEL
};

function u(e) {
  var t;
  if (0 === Object.keys(e).length) return null;
  let s = Object.keys(e)[0],
    a = null === (t = d[s]) || void 0 === t ? void 0 : t.call(d);
  return null != a ? "(".concat(a, ") ").concat(e[s]) : e[s]
}
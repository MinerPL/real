"use strict";
n.r(t), n.d(t, {
  NAGBAR_DISPLAY_MAX_HOURS: function() {
    return a
  },
  DEFAULT_LOCKDOWN_DURATION: function() {
    return r
  },
  getTimeframes: function() {
    return d
  },
  IncidentAlertModeratorPermissions: function() {
    return s
  }
});
var i = n("316693"),
  l = n("843455"),
  u = n("782340");
let a = 2,
  r = 2,
  d = () => [{
    value: 1,
    label: u.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_1_HOUR
  }, {
    value: 2,
    label: u.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_2_HOURS
  }, {
    value: 4,
    label: u.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_4_HOURS
  }, {
    value: 6,
    label: u.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_6_HOURS
  }, {
    value: 12,
    label: u.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_12_HOURS
  }, {
    value: 24,
    label: u.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_24_HOURS
  }],
  s = i.default.combine(l.Permissions.ADMINISTRATOR, l.Permissions.MANAGE_GUILD, l.Permissions.BAN_MEMBERS, l.Permissions.KICK_MEMBERS, l.Permissions.MODERATE_MEMBERS)
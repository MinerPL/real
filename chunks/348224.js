"use strict";
s.r(t), s.d(t, {
  GuildHomeRemoveChannelReasons: function() {
    return n
  },
  getGuildHomeRemoveChannelReasons: function() {
    return i
  },
  trackGuildHomeRemoveChannelFeedback: function() {
    return d
  }
});
var l, n, a = s("42203"),
  o = s("599110"),
  u = s("49111"),
  r = s("782340");

function i() {
  return [{
    value: "bot-spam",
    label: r.default.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_OPTION_BOTS
  }, {
    value: "no-go",
    label: r.default.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_OPTION_NO_GO
  }, {
    value: "overwhelm",
    label: r.default.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_OPTION_TOO_MUCH
  }, {
    value: "sensitive",
    label: r.default.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_OPTION_SENSITIVE
  }, {
    value: "other",
    label: r.default.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_OPTION_OTHER
  }]
}

function d(e, t, s, l) {
  let n = a.default.getChannel(e);
  null != n && o.default.track(u.AnalyticEvents.USER_REPORT_SUBMITTED, {
    report_name: "Guild Home Channel Removed",
    guild_id: n.guild_id,
    channel_id: n.id,
    reason: t,
    feedback: s,
    skipped: l
  })
}(l = n || (n = {})).BOT_SPAM = "bot-spam", l.NO_GO = "no-go", l.OVERWHELM = "overwhelm", l.SENSITIVE = "sensitive", l.OTHER = "other"
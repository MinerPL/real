"use strict";
n.r(t), n.d(t, {
  DisableCommunicationDuration: function() {
    return r
  },
  getFriendlyDurationString: function() {
    return l
  },
  getDisableCommunicationDurationOptions: function() {
    return u
  },
  GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK: function() {
    return c
  },
  DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY: function() {
    return d
  },
  SET_COMMUNICATION_DISABLED_MODAL_NAME: function() {
    return f
  },
  CLEAR_COMMUNICATION_DISABLED_MODAL_NAME: function() {
    return E
  },
  MAX_REASON_LENGTH: function() {
    return h
  }
});
var i, r, s = n("701909"),
  a = n("49111"),
  o = n("782340");

function l(e) {
  switch (e) {
    case 60:
      return o.default.Messages.DURATION_SECS.format({
        secs: 60
      });
    case 300:
      return o.default.Messages.DURATION_MINS.format({
        mins: 5
      });
    case 600:
      return o.default.Messages.DURATION_MINS.format({
        mins: 10
      });
    case 3600:
      return o.default.Messages.DURATION_HOURS.format({
        hours: 1
      });
    case 86400:
      return o.default.Messages.DURATION_DAYS.format({
        days: 1
      });
    case 604800:
      return o.default.Messages.DURATION_WEEKS.format({
        weeks: 1
      });
    default:
      return
  }
}(i = r || (r = {}))[i.DURATION_60_SEC = 60] = "DURATION_60_SEC", i[i.DURATION_5_MIN = 300] = "DURATION_5_MIN", i[i.DURATION_10_MIN = 600] = "DURATION_10_MIN", i[i.DURATION_1_HOUR = 3600] = "DURATION_1_HOUR", i[i.DURATION_1_DAY = 86400] = "DURATION_1_DAY", i[i.DURATION_1_WEEK = 604800] = "DURATION_1_WEEK";
let u = () => Object.keys(r).filter(e => isNaN(Number(e))).map(e => {
    var t;
    let n = null !== (t = l(r[e])) && void 0 !== t ? t : "";
    return {
      label: n,
      value: r[e]
    }
  }),
  c = s.default.getArticleURL(a.HelpdeskArticles.DISABLE_GUILD_COMMUNICATION),
  d = "GuildCommunicationDisabledDismissedGuilds",
  f = "Set Communication Disabled Modal",
  E = "Clear Communication Disabled Modal",
  h = 512
"use strict";
n.r(t), n.d(t, {
  ACCOUNT_AGE_DATE_TOOLTIP_CONFIG: function() {
    return o
  },
  MEMBER_JOIN_DATE_TOOLTIP_CONFIG: function() {
    return a
  },
  MembersTableDateFormats: function() {
    return i
  },
  formatDateRelativeTime: function() {
    return d
  }
});
var l, i, r = n("319126"),
  s = n("782340");
let o = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  },
  a = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  };
(l = i || (i = {}))[l.JOINED_AT = 0] = "JOINED_AT", l[l.ACCOUNT_AGE = 1] = "ACCOUNT_AGE";
let u = () => ({
    seconds: s.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_SECONDS,
    minutes: s.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MINUTES,
    hours: s.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_HOURS,
    days: s.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_DAYS,
    months: s.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MORE_THAN_MONTH,
    years: s.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MORE_THAN_YEAR
  }),
  c = () => ({
    hours: s.default.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_HOURS,
    days: s.default.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_DAYS,
    months: s.default.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_MORE_THAN_MONTH,
    years: s.default.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_MORE_THAN_YEAR
  }),
  d = (e, t) => {
    var n;
    let l = 0 === (n = t) ? u : 1 === n ? c : void 0;
    return (0, r.default)(e, l, !1)
  }
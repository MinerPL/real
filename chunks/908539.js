"use strict";
var a, s, l, i, r, o, u, d, c, f, m;
n.r(t), n.d(t, {
  ContentIdType: function() {
    return a
  },
  AccountStandingState: function() {
    return r
  },
  ClassificationRequestState: function() {
    return o
  }
}), (a || (a = {})).MESSAGE = "message", (u = s || (s = {}))[u.REVIEW_PENDING = 1] = "REVIEW_PENDING", u[u.CLASSIFICATION_UPHELD = 2] = "CLASSIFICATION_UPHELD", u[u.CLASSIFICATION_INVALIDATED = 3] = "CLASSIFICATION_INVALIDATED", (d = l || (l = {}))[d.UNSPECIFIED = 0] = "UNSPECIFIED", d[d.UNKNOWN = 1] = "UNKNOWN", d[d.UNSOLICITED_PORNOGRAPHY = 100] = "UNSOLICITED_PORNOGRAPHY", d[d.NONCONSENSUAL_PORNOGRAPHY = 200] = "NONCONSENSUAL_PORNOGRAPHY", d[d.GLORIFYING_VIOLENCE = 210] = "GLORIFYING_VIOLENCE", d[d.HATE_SPEECH = 220] = "HATE_SPEECH", d[d.CRACKED_ACCOUNTS = 230] = "CRACKED_ACCOUNTS", d[d.ILLICIT_GOODS = 240] = "ILLICIT_GOODS", d[d.SOCIAL_ENGINEERING = 250] = "SOCIAL_ENGINEERING", d[d.TEST_CLASSIFICATION = 9e3] = "TEST_CLASSIFICATION", d[d.TEST_CLASSIFICATION_LOW = 9001] = "TEST_CLASSIFICATION_LOW", d[d.TEST_CLASSIFICATION_SEVERE = 9002] = "TEST_CLASSIFICATION_SEVERE", (c = i || (i = {}))[c.BAN = 0] = "BAN", c[c.TEMP_BAN = 1] = "TEMP_BAN", c[c.GLOBAL_QUARANTINE = 2] = "GLOBAL_QUARANTINE", c[c.REQUIRE_VERIFICATION = 3] = "REQUIRE_VERIFICATION", c[c.USER_WARNING = 4] = "USER_WARNING", c[c.USER_SPAMMER = 5] = "USER_SPAMMER", c[c.CHANNEL_SPAM = 6] = "CHANNEL_SPAM", c[c.MESSAGE_SPAM = 7] = "MESSAGE_SPAM", c[c.DISABLE_SUSPICIOUS_ACTIVITY = 8] = "DISABLE_SUSPICIOUS_ACTIVITY", c[c.LIMITED_ACCESS = 9] = "LIMITED_ACCESS", c[c.CHANNEL_SCHEDULE_DELETE = 10] = "CHANNEL_SCHEDULE_DELETE", c[c.MESSAGE_CONTENT_REMOVAL = 11] = "MESSAGE_CONTENT_REMOVAL", c[c.GUILD_DISABLE_INVITE = 12] = "GUILD_DISABLE_INVITE", c[c.USER_CONTENT_REMOVAL = 13] = "USER_CONTENT_REMOVAL", c[c.USER_USERNAME_MANGLE = 14] = "USER_USERNAME_MANGLE", c[c.GUILD_LIMITED_ACCESS = 15] = "GUILD_LIMITED_ACCESS", c[c.USER_MESSAGE_REMOVAL = 16] = "USER_MESSAGE_REMOVAL", (f = r || (r = {}))[f.ALL_GOOD = 100] = "ALL_GOOD", f[f.LIMITED = 200] = "LIMITED", f[f.VERY_LIMITED = 300] = "VERY_LIMITED", f[f.AT_RISK = 400] = "AT_RISK", f[f.SUSPENDED = 500] = "SUSPENDED", (m = o || (o = {}))[m.PENDING = 0] = "PENDING", m[m.SUCCESS = 1] = "SUCCESS", m[m.FAILED = 2] = "FAILED"
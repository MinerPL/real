"use strict";
r.r(t), r.d(t, {
  BadgeCategory: function() {
    return a
  },
  getBadgeCategory: function() {
    return s
  }
});
var o, a, l = r("883474");

function s(e) {
  return e.staff ? 5 : e.verified && e.partnered ? 2 : e.verified ? 1 : e.partnered ? 0 : e.community && e.visibility === l.GuildVisibility.PUBLIC ? 4 : e.community ? 3 : 6
}(o = a || (a = {}))[o.PARTNERED = 0] = "PARTNERED", o[o.VERIFIED = 1] = "VERIFIED", o[o.VERIFIED_AND_PARTNERED = 2] = "VERIFIED_AND_PARTNERED", o[o.COMMUNITY = 3] = "COMMUNITY", o[o.DISCOVERABLE = 4] = "DISCOVERABLE", o[o.STAFF = 5] = "STAFF", o[o.NONE = 6] = "NONE"
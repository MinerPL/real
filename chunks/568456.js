"use strict";
n.r(t), n.d(t, {
  DMSafetyCoachmarkActions: function() {
    return i
  },
  DmSpamFilterTypes: function() {
    return r
  },
  ExplicitContentFilterTypes: function() {
    return o
  },
  ExplicitContentFilterToDmSpamFilterV2: function() {
    return c
  }
}), n("222007");
var i, r, o, s, l, a, u = n("151426");
(s = i || (i = {}))[s.VIEW = 0] = "VIEW", s[s.DISMISS = 1] = "DISMISS", s[s.CHANGE_SETTING = 2] = "CHANGE_SETTING", (l = r || (r = {}))[l.DISABLED = 0] = "DISABLED", l[l.NON_FRIENDS = 1] = "NON_FRIENDS", l[l.FRIENDS_AND_NON_FRIENDS = 2] = "FRIENDS_AND_NON_FRIENDS", (a = o || (o = {}))[a.DISABLED = 0] = "DISABLED", a[a.NON_FRIENDS = 1] = "NON_FRIENDS", a[a.FRIENDS_AND_NON_FRIENDS = 2] = "FRIENDS_AND_NON_FRIENDS";
let c = new Map([
  [0, u.DmSpamFilterV2.DISABLED],
  [1, u.DmSpamFilterV2.NON_FRIENDS],
  [2, u.DmSpamFilterV2.FRIENDS_AND_NON_FRIENDS]
])
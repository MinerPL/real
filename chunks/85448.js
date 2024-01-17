"use strict";
var o, u, r, _, i, a, E, s;

function A(e) {
  return e.includes("LEGITIMATE_ACTIVITY") ? "LEGITIMATE_ACTIVITY" : e.includes("DM_SPAM") ? "DM_SPAM" : e.includes("JOIN_RAID") ? "JOIN_RAID" : "OTHER"
}
n.r(t), n.d(t, {
  Feedback: function() {
    return o
  },
  RaidAlertType: function() {
    return u
  },
  RaidResolutionType: function() {
    return r
  },
  getMostImportantRaidResolutionType: function() {
    return A
  },
  RaidLockdownFeedbackType: function() {
    return _
  }
}), n("782340"), (i = o || (o = {})).BUG = "BUG", i.ALLOWED = "ALLOWED", i.MENTION_RAID_REMOVE_RESTRICTION = "MENTION_RAID_REMOVE_RESTRICTION", (a = u || (u = {})).JOIN_RAID = "JOIN_RAID", a.MENTION_RAID = "MENTION_RAID", (E = r || (r = {})).LEGITIMATE_ACTIVITY = "LEGITIMATE_ACTIVITY", E.LEGITIMATE_ACCOUNTS = "LEGITIMATE_ACCOUNTS", E.LEGITIMATE_DMS = "LEGITIMATE_DMS", E.DM_SPAM = "DM_SPAM", E.JOIN_RAID = "JOIN_RAID", E.OTHER = "OTHER", (s = _ || (_ = {})).DM_SPAM = "DM_SPAM", s.MENTION_SPAM = "MENTION_SPAM", s.CHANNEL_SPAM = "CHANNEL_SPAM", s.SUS_NEW_MEMBERS = "SUS_NEW_MEMBERS", s.CHANGING_SETTINGS = "CHANGING_SETTINGS", s.OTHER = "OTHER"
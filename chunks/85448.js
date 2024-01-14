"use strict";
var o, u, r, a, _, E, i, s;

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
    return a
  }
}), n("782340"), (_ = o || (o = {})).BUG = "BUG", _.ALLOWED = "ALLOWED", _.MENTION_RAID_REMOVE_RESTRICTION = "MENTION_RAID_REMOVE_RESTRICTION", (E = u || (u = {})).JOIN_RAID = "JOIN_RAID", E.MENTION_RAID = "MENTION_RAID", (i = r || (r = {})).LEGITIMATE_ACTIVITY = "LEGITIMATE_ACTIVITY", i.LEGITIMATE_ACCOUNTS = "LEGITIMATE_ACCOUNTS", i.LEGITIMATE_DMS = "LEGITIMATE_DMS", i.DM_SPAM = "DM_SPAM", i.JOIN_RAID = "JOIN_RAID", i.OTHER = "OTHER", (s = a || (a = {})).DM_SPAM = "DM_SPAM", s.MENTION_SPAM = "MENTION_SPAM", s.CHANNEL_SPAM = "CHANNEL_SPAM", s.SUS_NEW_MEMBERS = "SUS_NEW_MEMBERS", s.CHANGING_SETTINGS = "CHANGING_SETTINGS", s.OTHER = "OTHER"
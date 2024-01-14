"use strict";
n.r(t), n.d(t, {
  DEFAULT_AUTO_ARCHIVE_DURATION: function() {
    return u
  },
  MAX_THREAD_MESSAGE_COUNT_OLD: function() {
    return c
  },
  MAX_THREAD_MESSAGE_COUNT: function() {
    return d
  },
  MAX_THREAD_MEMBERS_PREVIEW: function() {
    return f
  },
  MAX_THREAD_UNREAD_MESSAGE_COUNT: function() {
    return E
  },
  ThreadMemberFlags: function() {
    return h
  },
  OpenThreadAnalyticsLocations: function() {
    return i
  },
  getThreadNotificationOptions: function() {
    return p
  },
  ThreadSortOrderReadableForAnalytics: function() {
    return r
  },
  FORUM_POST_CREATION_UPLOAD_ERRORS: function() {
    return _
  },
  FORUM_POST_CREATION_AUTOMOD_ERRORS: function() {
    return S
  }
}), n("222007");
var i, r, s, a, o = n("49111"),
  l = n("782340");
let u = 4320,
  c = 50,
  d = 1e5,
  f = 50,
  E = 25,
  h = {
    HAS_INTERACTED: 1,
    ALL_MESSAGES: 2,
    ONLY_MENTIONS: 4,
    NO_MESSAGES: 8
  };

function p() {
  return [{
    setting: h.ALL_MESSAGES,
    label: l.default.Messages.FORM_LABEL_ALL_MESSAGES
  }, {
    setting: h.ONLY_MENTIONS,
    label: l.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
  }, {
    setting: h.NO_MESSAGES,
    label: l.default.Messages.FORM_LABEL_NOTHING
  }]
}(s = i || (i = {})).EMBED = "Embed", s.BROWSER = "Thread Browser", s.POPOUT = "Active Threads Popout", s.CHANNEL_LIST = "Channel List", s.GUILD_ACTIVE_THREADS_MODAL = "Guild Active Threads Modal", s.INBOX = "Inbox", s.FORUM = "Forum", s.VOICE_AUTO_OPEN = "Voice Auto Open", (a = r || (r = {})).LATEST_ACTIVITY = "Last Message", a.CREATION_DATE = "Creation";
let _ = new Set([o.AbortCodes.TOO_MANY_ATTACHMENTS, o.AbortCodes.EXPLICIT_CONTENT, o.AbortCodes.ENTITY_TOO_LARGE]),
  S = new Set([o.AbortCodes.AUTOMOD_MESSAGE_BLOCKED, o.AbortCodes.AUTOMOD_TITLE_BLOCKED])
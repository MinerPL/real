"use strict";
n.r(t), n.d(t, {
  FOR_YOU_ICONS: function() {
    return C
  },
  getIcon: function() {
    return x
  },
  getIconByName: function() {
    return v
  },
  getMask: function() {
    return M
  },
  getBackground: function() {
    return R
  }
});
var a, l, s, i, r = n("669491"),
  o = n("360191"),
  u = n("777204"),
  d = n("505406"),
  c = n("92440"),
  f = n("608108"),
  h = n("804621"),
  E = n("578299"),
  m = n("522420"),
  p = n("371031"),
  g = n("674517"),
  S = n("989306"),
  N = n("695449"),
  _ = n("816428"),
  I = n("710672");
(a = s || (s = {})).CHECKED = "CHECKED", a.FRIENDS = "FRIENDS", a.SHARE_SCREEN = "SHARE_SCREEN", a.NEW_MESSAGE = "NEW_MESSAGE";
let T = {
  CHECKED: f,
  FRIENDS: E,
  SHARE_SCREEN: _,
  NEW_MESSAGE: S
};
(l = i || (i = {})).MISSED_MESSAGES = "MISSED_MESSAGES", l.FRIEND_REQUEST_REMINDER = "FRIEND_REQUEST_REMINDER", l.SCHEDULED_GUILD_EVENT = "SCHEDULED_GUILD_EVENT", l.TOP_MESSAGES = "TOP_MESSAGES", l.NOTIFICATION_CENTER = "NOTIFICATION_CENTER", l.UPDATE_PROFILE = "UPDATE_PROFILE", l.FIND_FRIENDS = "FIND_FRIENDS", l.ADD_FRIEND = "ADD_FRIEND", l.FIRST_MESSAGE = "FIRST_MESSAGE";
let C = {
    MISSED_MESSAGES: g,
    FRIEND_REQUEST_REMINDER: m,
    SCHEDULED_GUILD_EVENT: h,
    TOP_MESSAGES: p,
    NOTIFICATION_CENTER: c,
    UPDATE_PROFILE: I,
    FIND_FRIENDS: d,
    ADD_FRIEND: d,
    FIRST_MESSAGE: N
  },
  A = e => {
    switch (e.item_enum) {
      case o.ItemEnum.ADD_FRIEND:
        return "ADD_FRIEND";
      case o.ItemEnum.FIND_FRIENDS:
        return "FIND_FRIENDS";
      case o.ItemEnum.FIRST_MESSAGE:
        return "FIRST_MESSAGE";
      case o.ItemEnum.UPDATE_PROFILE:
        return "UPDATE_PROFILE";
      default:
        return "NOTIFICATION_CENTER"
    }
  },
  x = e => {
    switch (e.type) {
      case "lifecycle_item":
        return A(e);
      case "missed_messages":
        return "MISSED_MESSAGES";
      case "friend_request_reminder":
        return "FRIEND_REQUEST_REMINDER";
      case "scheduled_guild_event_started":
        return "SCHEDULED_GUILD_EVENT";
      case "top_messages":
        return "TOP_MESSAGES";
      default:
        return "NOTIFICATION_CENTER"
    }
  },
  v = e => {
    if ("icHighlight" === e) return "TOP_MESSAGES";
    return "NOTIFICATION_CENTER"
  },
  M = e => {
    switch (e) {
      case o.NotificationCenterItems.GO_LIVE_PUSH:
        return {
          icon: T.SHARE_SCREEN, color: r.default.colors.BACKGROUND_ACCENT
        };
      case o.NotificationCenterItems.FRIEND_REQUEST_ACCEPTED:
        return {
          icon: T.CHECKED, color: r.default.colors.STATUS_POSITIVE_BACKGROUND
        };
      case o.NotificationCenterItems.FRIEND_REQUEST_PENDING:
      case o.NotificationCenterItems.FRIEND_SUGGESTION_CREATED:
        return {
          icon: T.FRIENDS, color: r.default.colors.BACKGROUND_ACCENT
        };
      case o.NotificationCenterItems.DM_FRIEND_NUDGE:
        return {
          icon: T.NEW_MESSAGE, color: r.default.colors.BACKGROUND_ACCENT
        };
      case o.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS:
      case o.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED:
        return {
          icon: T.FRIENDS, color: r.default.colors.BACKGROUND_ACCENT
        };
      default:
        return null
    }
  },
  R = e => {
    switch (e.item_enum) {
      case o.ItemEnum.UPDATE_PROFILE:
        return u.PROFILE_BACKGROUND;
      case o.ItemEnum.ADD_FRIEND:
      case o.ItemEnum.FIND_FRIENDS:
        return u.FRIEND_BACKGROUND;
      case o.ItemEnum.FIRST_MESSAGE:
        return u.MESSAGE_BACKGROUND;
      default:
        return r.default.unsafe_rawColors.BRAND_500.css
    }
  }
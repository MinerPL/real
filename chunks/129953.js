"use strict";
n.r(t), n.d(t, {
  trackGuildInviteNotificationAction: function() {
    return r
  },
  trackGuildInviteNotificationDismissed: function() {
    return d
  }
});
var a, l, s = n("716241"),
  i = n("49111");

function r() {
  s.default.trackWithMetadata(i.AnalyticEvents.NOTIFICATION_CTA_CLICKED, {
    notification_type: "Reminder Notification",
    action: "Guild Invite",
    dismissed: !1
  })
}

function d() {
  s.default.trackWithMetadata(i.AnalyticEvents.NOTIFICATION_CTA_CLICKED, {
    notification_type: "Reminder Notification",
    action: "Guild Invite",
    dismissed: !0
  })
}(a || (a = {})).REMINDER_NOTIFICATION = "Reminder Notification", (l || (l = {})).GUILD_INVITE = "Guild Invite"
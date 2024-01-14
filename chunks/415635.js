"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("823411"),
  a = n("539405"),
  l = n("415518"),
  s = n("189771"),
  o = n("910340"),
  r = n("6791"),
  d = n("782340");

function u(e, t, n, u, c) {
  if (null == t.activity) return null;
  let f = t.activity.type,
    h = c.session_id;
  if (null == h) return null;
  let {
    icon: p,
    title: g,
    body: m
  } = (0, s.makeTextChatNotification)(e, t, n), {
    trackView: E,
    trackClick: S
  } = (0, o.makeAnalyticsTrackers)(r.OverlayNotificationType.ActivityInvite, {
    notif_type: r.OverlayNotificationType.ActivityInvite,
    notif_user_id: n.id,
    message_id: t.id,
    message_type: t.type,
    guild_id: e.guild_id,
    channel_id: e.id,
    channel_type: e.type,
    activity_type: f,
    activity_name: c.name
  });
  return {
    colorScheme: l.default.ColorSchemes.PRIMARY,
    icon: p,
    title: g,
    body: m,
    hint: e => (0, l.renderKeybindHint)(e, (0, o.getOverlayKeybind)(), d.default.Messages.OVERLAY_UNLOCK_TO_JOIN),
    onNotificationShow: () => {
      E()
    },
    confirmText: d.default.Messages.JOIN,
    onConfirmClick: (l, s) => {
      i.default.join({
        userId: n.id,
        sessionId: h,
        applicationId: u.id,
        channelId: e.id,
        messageId: t.id
      }), a.default.updateNotificationStatus(s), S("join")
    },
    onDismissClick: () => {
      S("dismiss")
    }
  }
}
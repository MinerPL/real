"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var l = n("77078"),
  u = n("306160"),
  i = n("782340");

function d(e) {
  return u.SUPPORTS_COPY ? (0, a.jsx)(l.MenuItem, {
    id: "copy-channel-topic",
    label: i.default.Messages.COPY_CHANNEL_TOPIC,
    action: () => (0, u.copy)(e.topic)
  }) : null
}
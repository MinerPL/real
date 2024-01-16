"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("37983");
n("884691");
var r = n("77078"),
  l = n("450911"),
  a = n("42203"),
  s = n("782340");

function o(e, t) {
  let n = a.default.getChannel(e);
  return null == n || n.isMultiUserDM() ? null : (0, i.jsx)(r.MenuItem, {
    id: "close-dm",
    label: s.default.Messages.CLOSE_DM,
    action: () => l.default.closePrivateChannel(e, t)
  })
}
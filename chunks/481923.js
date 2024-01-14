"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("37983");
s("884691");
var l = s("656416"),
  r = s("821721"),
  i = s("869250"),
  o = s("69682"),
  n = s("446509"),
  u = s("590456");

function d(e) {
  let {
    displayProfile: t,
    user: s,
    selectedSection: d,
    autoFocusNote: c,
    onClose: f
  } = e;
  switch (d) {
    case u.UserProfileSections.ACTIVITY:
      return (0, a.jsx)(l.default, {
        user: s
      });
    case u.UserProfileSections.MUTUAL_GUILDS:
      return (0, a.jsx)(n.default, {
        user: s,
        onClose: f
      });
    case u.UserProfileSections.MUTUAL_FRIENDS:
      return (0, a.jsx)(o.default, {
        user: s,
        onClose: f
      });
    case u.UserProfileSections.BOT_DATA_ACCESS:
      return (0, a.jsx)(r.default, {
        user: s
      });
    case u.UserProfileSections.USER_INFO_CONNECTIONS:
    case u.UserProfileSections.USER_INFO:
    default:
      return (0, a.jsx)(i.default, {
        displayProfile: t,
        autoFocusNote: c,
        user: s,
        scrollToConnections: d === u.UserProfileSections.USER_INFO_CONNECTIONS
      })
  }
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var i = n("37983");
n("884691");
var l = n("77078"),
  u = n("54239"),
  a = n("592407"),
  r = n("49111"),
  d = n("782340");

function s(e, t) {
  let n = t === r.AppContext.POPOUT;
  return n ? null : (0, i.jsx)(l.MenuItem, {
    id: "nav-server-settings",
    label: d.default.Messages.SERVER_SETTINGS,
    action: () => {
      (0, u.popLayer)(), a.default.open(e, r.GuildSettingsSections.MODERATION)
    }
  })
}
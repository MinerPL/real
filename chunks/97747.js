"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var a = s("37983");
s("884691");
var n = s("77078"),
  l = s("845579"),
  i = s("782340");

function r(e) {
  let t = l.LegacyUsernameDisabled.useSetting();
  return (0, a.jsx)(n.FormSwitch, {
    hideBorder: !0,
    value: !t,
    onChange: () => l.LegacyUsernameDisabled.updateSetting(!t),
    note: t ? null : i.default.Messages.UNIQUE_USERNAME_TOGGLE_SUBTITLE.format({
      username: e.legacyUsername
    }),
    children: i.default.Messages.UNIQUE_USERNAME_TOGGLE_TITLE
  })
}
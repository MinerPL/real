"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var l = n("37983");
n("884691");
var a = n("77078"),
  r = n("782340"),
  s = n("93086");

function i(e) {
  let {
    sendStartNotification: t,
    setSendStartNotification: n
  } = e, i = t ? r.default.Messages.GUILD_NOTIFY_MEMBERS_ENABLED_NEW : r.default.Messages.GUILD_NOTIFY_MEMBERS_DISABLED_NEW;
  return (0, l.jsx)("div", {
    className: s.notificationToggle,
    children: (0, l.jsx)(a.Checkbox, {
      type: a.Checkbox.Types.INVERTED,
      size: 14,
      className: s.checkbox,
      value: t,
      onChange: function() {
        n(!t)
      },
      children: (0, l.jsx)(a.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: (0, l.jsx)(a.Tooltip, {
          position: "bottom",
          tooltipClassName: s.tooltip,
          text: r.default.Messages.GUILD_NOTIFY_MEMBERS_TOOLTIP_NEW,
          "aria-label": r.default.Messages.GUILD_NOTIFY_MEMBERS_TOOLTIP_NEW,
          children: e => (0, l.jsx)("span", {
            ...e,
            children: i
          })
        })
      })
    })
  })
}
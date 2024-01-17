"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var l = n("77078"),
  s = n("64016"),
  i = n("255228"),
  r = n("263024"),
  o = n("414833"),
  u = n("648564");

function d(e) {
  let {
    channel: t,
    closePopout: n,
    onSelect: d,
    navId: c,
    label: f
  } = e, h = (0, s.default)(t, "Notifications Bell"), E = (0, i.default)(t), m = (0, o.useThreadNotificationSetting)(t);
  return (0, a.jsxs)(l.Menu, {
    navId: c,
    onClose: n,
    "aria-label": f,
    onSelect: d,
    children: [(0, a.jsxs)(l.MenuGroup, {
      children: [t.isForumPost() ? h : null, E]
    }), (0, a.jsx)(l.MenuGroup, {
      children: (0, u.getThreadNotificationOptions)().map(e => {
        let {
          setting: n,
          label: s
        } = e;
        return (0, a.jsx)(l.MenuRadioItem, {
          group: "thread-notifications",
          id: "".concat(n),
          label: s,
          action: () => r.default.setNotificationSettings(t, {
            flags: n
          }),
          checked: n === m
        }, n)
      })
    })]
  })
}
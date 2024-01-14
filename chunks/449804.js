"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
}), s("702976");
var a = s("37983");
s("884691");
var n = s("77078"),
  l = s("423487"),
  i = s("568734"),
  r = s("385334"),
  o = s("49111"),
  d = s("782340"),
  u = s("539605"),
  c = e => {
    let {
      role: t
    } = e;
    return (0, i.hasFlag)(t.flags, o.RoleFlags.IN_PROMPT) ? (0, r.isRolePowerful)(t) ? (0, a.jsxs)("div", {
      className: u.notice,
      children: [(0, a.jsx)(l.default, {
        className: u.noticeIconPowerful
      }), (0, a.jsx)(n.Text, {
        variant: "text-sm/normal",
        children: d.default.Messages.ROLE_IN_PROMPT_POWERFUL_NOTICE_TEXT
      })]
    }) : (0, a.jsxs)("div", {
      className: u.notice,
      children: [(0, a.jsx)(l.default, {
        className: u.noticeIcon
      }), (0, a.jsx)(n.Text, {
        variant: "text-sm/normal",
        children: d.default.Messages.ROLE_IN_PROMPT_NOTICE_TEXT
      })]
    }) : null
  }
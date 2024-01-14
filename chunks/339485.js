"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("37983"),
  i = n("884691"),
  r = n("819855"),
  a = n("77078"),
  s = n("272091"),
  o = n("782340");

function u(e) {
  let {
    guildId: t,
    maxAge: n,
    onConfirm: u,
    onDismiss: d,
    theme: c
  } = e, f = (0, s.default)(t, 0 === n);
  return (0, l.jsxs)(i.Fragment, {
    children: [(0, l.jsx)(a.Button, {
      onClick: u,
      disabled: f,
      children: o.default.Messages.GENERATE_A_NEW_LINK
    }), (0, l.jsx)(a.Button, {
      look: a.Button.Looks.LINK,
      color: (0, r.isThemeLight)(c) ? a.Button.Colors.PRIMARY : a.Button.Colors.WHITE,
      onClick: d,
      children: o.default.Messages.CANCEL
    })]
  })
}
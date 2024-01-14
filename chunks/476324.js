"use strict";
s.r(t), s.d(t, {
  useLockTooltip: function() {
    return u
  },
  default: function() {
    return c
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("446674"),
  i = s("77078"),
  r = s("957255"),
  o = s("45029"),
  d = s("782340");

function u(e, t, s) {
  let a = (0, l.useStateFromStores)([r.default], () => !r.default.isRoleHigher(e, t, s), [e, t, s]),
    i = n.useMemo(() => a && s.id === (null == t ? void 0 : t.id), [a, s, t]);
  return i ? d.default.Messages.HELP_ROLE_LOCKED_MINE : a ? d.default.Messages.HELP_ROLE_LOCKED : null
}

function c(e) {
  let {
    className: t,
    tooltipText: s,
    width: n = 16,
    height: l = 16
  } = e;
  return (0, a.jsx)(i.Tooltip, {
    text: s,
    children: e => (0, a.jsx)("div", {
      className: t,
      ...e,
      children: (0, a.jsx)(o.default, {
        width: n,
        height: l
      })
    })
  })
}
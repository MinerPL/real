"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("454686"),
  i = s("842357");

function r(e) {
  let {
    guildId: t,
    triggerType: s
  } = e, r = n.useMemo(() => () => (0, l.createDefaultRule)(t, s), [t, s]), [o] = n.useState(r);
  return (0, a.jsx)(i.default, {
    rule: o
  })
}
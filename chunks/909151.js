"use strict";
l.r(t), l.d(t, {
  default: function() {
    return d
  }
});
var n = l("37983"),
  a = l("884691"),
  s = l("414456"),
  r = l.n(s),
  u = l("1339"),
  i = l("139225"),
  c = l("632215");

function d(e) {
  let {
    description: t,
    className: l,
    guildId: s,
    truncate: d = !0
  } = e, o = a.useMemo(() => (0, u.guildEventDetailsParser)(t, !0, {
    guildId: s,
    allowLinks: !0,
    allowHeading: !0,
    allowList: !0
  }), [t, s]);
  return (0, n.jsx)("div", {
    className: r(i.descriptionText, l, c.markup, {
      [i.truncate]: d
    }),
    children: o
  })
}
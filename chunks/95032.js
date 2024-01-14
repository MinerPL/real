"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  s = n("292687"),
  i = n("471671"),
  r = n("2770"),
  o = n("45622"),
  u = n("563680"),
  d = n("981913"),
  c = n("782340"),
  m = a.default.connectStores([i.default, s.default], e => {
    let {
      node: t,
      guestWindow: n
    } = e;
    return {
      enabled: (0, u.isFullScreen)(t, null == n ? void 0 : n.document)
    }
  })(function(e) {
    let {
      enabled: t,
      ...n
    } = e, a = t ? c.default.Messages.EXIT_FULL_SCREEN : c.default.Messages.FULL_SCREEN, s = t ? o.default : r.default;
    return (0, l.jsx)(d.default, {
      label: a,
      iconComponent: s,
      ...n
    })
  })
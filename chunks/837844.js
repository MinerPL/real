"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("65597"),
  o = n("151426"),
  u = n("384997"),
  d = n("131143"),
  c = n("162771"),
  f = n("120363"),
  E = n("994428"),
  _ = n("326185");
let h = s.memo(function(e) {
  var t, n, i;
  let {
    state: r,
    markAsDismissed: u
  } = e, {
    name: c,
    guildId: f,
    boundingRect: E
  } = r, h = s.useMemo(() => (function(e, t, n) {
    if (e === o.DismissibleContent.RECURRING_EVENT_COACHMARK) return (0, a.jsx)(d.default, {
      guildId: t,
      markAsDismissed: n
    });
    return null
  })(c, f, u), [c, f, u]);
  if (null == h) return null;
  return (0, a.jsx)("div", {
    className: l(_.upsell, !(null != (t = E) && !(t.y < 0)) && _.hidden),
    style: (n = 0, null == (i = E) ? {} : {
      top: i.top,
      left: i.right - i.x
    }),
    children: h
  })
});

function C() {
  let e = (0, r.default)([c.default], () => c.default.getGuildId()),
    t = (0, f.useChannelListUpsells)(e),
    [n, s] = (0, u.useSelectedDismissibleContent)(Object.values(t).filter(e => {
      let {
        disabled: t
      } = e;
      return !t
    }).map(e => {
      let {
        name: t
      } = e;
      return t
    }), E.DismissibleContentGroupName.SIDEBAR);
  if (null == n) return null;
  let i = t[n];
  return null == i ? null : (0, a.jsx)("div", {
    className: _.container,
    children: (0, a.jsx)(h, {
      state: i,
      markAsDismissed: s
    })
  })
}
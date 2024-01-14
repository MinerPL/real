"use strict";
l.r(t), l.d(t, {
  default: function() {
    return o
  }
});
var n = l("37983");
l("884691");
var a = l("287585"),
  s = l("502651"),
  i = l("295999"),
  r = l("782340");

function o(e) {
  let {
    activity: t,
    color: l,
    look: o
  } = e, u = (0, s.default)(t);
  return u ? (0, n.jsx)(i.default, {
    onClick: () => {
      let e = (0, a.default)(t);
      return window.open(null != e ? e : void 0)
    },
    color: l,
    look: o,
    fullWidth: !0,
    children: r.default.Messages.WATCH
  }, "play-activity") : null
}
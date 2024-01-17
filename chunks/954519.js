"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("37983");
n("884691");
var r = n("985622"),
  s = n("356553"),
  l = n("981913"),
  i = n("782340");

function u(e) {
  let {
    isSelfStream: t,
    centerButton: n = !1,
    ...u
  } = e, o = n ? l.CenterControlButton : l.default;
  return (0, a.jsx)(o, {
    label: t ? i.default.Messages.STOP_STREAMING : i.default.Messages.STOP_WATCHING,
    iconComponent: t ? r.default : s.default,
    isActive: !0,
    ...u
  })
}
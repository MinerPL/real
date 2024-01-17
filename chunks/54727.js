"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var r = n("987317"),
  s = n("713726"),
  l = n("754493"),
  i = n("293137"),
  u = n("981913"),
  o = n("782340");

function d(e) {
  let {
    centerButton: t = !1,
    channel: n,
    onClick: d,
    ...c
  } = e, f = t ? u.CenterControlButton : u.default, h = n.isBroadcastChannel(), p = (0, l.useIsBroadcastingInChannel)(n.id);
  return (0, a.jsx)(f, {
    ...c,
    onClick: () => {
      p && (0, s.stopBroadcast)(), r.default.disconnect(), null == d || d()
    },
    iconComponent: i.default,
    label: p ? o.default.Messages.STOP_BROADCASTING : h ? o.default.Messages.LEAVE_BROADCAST : o.default.Messages.DISCONNECT_SELF
  })
}
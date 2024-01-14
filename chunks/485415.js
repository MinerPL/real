"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var i = n("37983"),
  a = n("884691"),
  l = n("414456"),
  s = n.n(l),
  o = n("446674"),
  r = n("266491"),
  d = n("786770"),
  u = n("901165"),
  c = n("750549"),
  f = n("49111"),
  h = n("246412");
class p extends a.Component {
  render() {
    let {
      keybind: e,
      notifications: t,
      position: n,
      locked: a
    } = this.props;
    if (n === f.OverlayNotificationPositions.DISABLED) return null;
    let l = -1;
    return (0, i.jsx)(r.default, {
      component: "div",
      className: s(h.container, h[n]),
      children: t.map(t => a && t.status === f.OverlayNotificationStatus.TIMED_OUT ? null : (l += 1, (0, i.jsx)(c.default, {
        index: l,
        zIndex: 100 - l,
        position: n,
        notification: t,
        keybind: e,
        locked: a
      }, t.id)))
    })
  }
}
var g = o.default.connectStores([d.default, u.default], () => ({
  notifications: d.default.getNotifications(),
  position: u.default.getNotificationPositionMode()
}))(p)
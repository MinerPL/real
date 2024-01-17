"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var i = n("37983"),
  s = n("884691"),
  r = n("414456"),
  l = n.n(r),
  a = n("546671"),
  u = n("341417");
let o = {
    UP: "up",
    RIGHT: "right",
    DOWN: "down",
    LEFT: "left"
  },
  c = {
    [o.UP]: u.up,
    [o.RIGHT]: u.right,
    [o.DOWN]: u.down,
    [o.LEFT]: u.left
  };
class d extends s.PureComponent {
  render() {
    let {
      direction: e,
      className: t
    } = this.props;
    return (0, i.jsx)(a.default, {
      className: l(u.arrow, t, {
        [c[e]]: !0
      })
    })
  }
}
d.Directions = o;
var f = d
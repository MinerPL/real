"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  l = n.n(s),
  a = n("546671"),
  o = n("341417");
let u = {
    UP: "up",
    RIGHT: "right",
    DOWN: "down",
    LEFT: "left"
  },
  c = {
    [u.UP]: o.up,
    [u.RIGHT]: o.right,
    [u.DOWN]: o.down,
    [u.LEFT]: o.left
  };
class d extends r.PureComponent {
  render() {
    let {
      direction: e,
      className: t
    } = this.props;
    return (0, i.jsx)(a.default, {
      className: l(o.arrow, t, {
        [c[e]]: !0
      })
    })
  }
}
d.Directions = u;
var f = d
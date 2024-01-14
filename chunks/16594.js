"use strict";
s.r(t), s.d(t, {
  SlideDirection: function() {
    return a
  },
  default: function() {
    return m
  }
});
var n, a, i = s("37983"),
  r = s("884691"),
  l = s("414456"),
  o = s.n(l),
  d = s("458960"),
  u = s("266491"),
  h = s("747287");
(n = a || (a = {}))[n.RIGHT = -1] = "RIGHT", n[n.LEFT = 1] = "LEFT";
let c = {
  friction: 7,
  tension: 40,
  overshootClamping: !0
};
class p extends r.PureComponent {
  componentWillEnter(e) {
    this._animated.setValue(-this.props.direction), d.default.spring(this._animated, {
      toValue: 0,
      ...c
    }).start(e)
  }
  componentDidAppear() {
    this._animated.setValue(0)
  }
  componentWillLeave(e) {
    d.default.spring(this._animated, {
      toValue: this.props.direction,
      ...c
    }).start(e)
  }
  getStyle() {
    return d.default.accelerate({
      transform: [{
        translateX: this._animated.interpolate({
          inputRange: [0, 1],
          outputRange: ["0%", "-100%"]
        })
      }]
    })
  }
  render() {
    return (0, i.jsx)(d.default.div, {
      style: this.getStyle(),
      className: h.item,
      children: this.props.children
    })
  }
  constructor(e) {
    super(e), this._animated = new d.default.Value(-1 * e.direction)
  }
}
var m = e => {
  let {
    children: t,
    step: s,
    direction: n,
    className: a
  } = e;
  return (0, i.jsx)(u.default, {
    component: "div",
    className: o(h.animator, a),
    children: (0, i.jsx)(p, {
      direction: n,
      children: t
    }, s)
  })
}
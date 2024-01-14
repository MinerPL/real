"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("222007");
var s, i, r = n("37983"),
  a = n("884691"),
  o = n("414456"),
  d = n.n(o),
  u = n("458960"),
  l = n("77078"),
  f = n("49111"),
  _ = n("603127");
(s = class extends a.Component {
  componentDidMount() {
    this.props.show && this.animate(1)
  }
  componentDidUpdate(e) {
    e.show !== this.props.show && this.animate(this.props.show ? 1 : 0)
  }
  getAnimatedStyle() {
    let {
      anim: e
    } = this, {
      reducedMotion: t
    } = this.context;
    return {
      opacity: e,
      transform: t.enabled ? void 0 : [{
        translateY: e.interpolate({
          inputRange: [0, 1],
          outputRange: ["-100px", "0px"]
        })
      }, {
        translateZ: 0
      }]
    }
  }
  render() {
    return (0, r.jsx)(u.default.a, {
      href: f.Routes.INDEX,
      target: "_blank",
      rel: "noopener",
      className: d(_.logo, this.props.className),
      style: this.getAnimatedStyle()
    })
  }
  constructor(...e) {
    super(...e), this.anim = new u.default.Value(0), this.animate = e => {
      u.default.spring(this.anim, {
        toValue: e,
        friction: 10,
        tension: 100
      }).start()
    }
  }
}).contextType = l.AccessibilityPreferencesContext, i = s
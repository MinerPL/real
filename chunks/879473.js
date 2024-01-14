"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
}), s("222007");
var a, n, l = s("37983"),
  i = s("884691"),
  r = s("414456"),
  o = s.n(r),
  d = s("917351"),
  u = s.n(d),
  c = s("661486"),
  E = s("663785");
(n = a || (a = {}))[n.HOVERING = 0] = "HOVERING", n[n.FLYING = 1] = "FLYING";
let _ = Object.freeze({
  HOVERING: {
    Y_DURATION: 1500,
    Y_VALUE: -5,
    Y_VALUE_MODIFIER: -1,
    FIRE_COUNT: 10,
    FIRE_MIN_INTENSITY_FALLING: .8,
    FIRE_MAX_INTENSITY_FALLING: 1,
    FIRE_MIN_INTENSITY_RISING: 1,
    FIRE_MAX_INTENSITY_RISING: 1.2
  },
  FALLING: {
    Y_VALUE: 10,
    FIRE_COUNT: 10,
    FIRE_VALUE: .2
  },
  STAGING: {
    DURATION: 500,
    Y_VALUE: 22,
    SHAKE_COUNT: 10,
    SHAKE_INTENSITY: 2,
    FIRE_COUNT: 4,
    FIRE_MIN_INTENSITY: .6,
    FIRE_MAX_INTENSITY: 1
  },
  FLYING: {
    DURATION: 500,
    Y_VALUE: -1e3,
    Y_EASING: c.default.Easing.bezier(.46, .01, 1, -.3),
    X_VALUE: 200,
    X_EASING: c.default.Easing.bezier(.65, .05, 1, .25),
    FIRE_COUNT: 10,
    FIRE_MIN_INTENSITY: 1.2,
    FIRE_MAX_INTENSITY: 1.4,
    OPACITY_VALUE: 0,
    OPACITY_DURATION_DIVIDEND: 2
  }
});

function T(e, t, s, a) {
  return c.default.sequence(u.times(t, n => c.default.timing(e, {
    toValue: a(n),
    duration: s / t
  })))
}
class I extends i.Component {
  componentDidMount() {
    this.startAnimation()
  }
  componentWillUnmount() {
    this.isUnmounted = !0
  }
  componentDidUpdate(e) {
    this.props.stage !== e.stage && this.startAnimation()
  }
  startAnimation() {
    switch (null != this.currentAnimation && this.currentAnimation.stop(), this.props.stage) {
      case 0:
        return this.startHoverAnimate();
      case 1:
        return this.flyAnimate()
    }
  }
  resetAnimation() {
    this.y.setValue(0), this.x.setValue(0), this.opacity.setValue(1), this.fireScale.setValue(1)
  }
  startHoverAnimate() {
    this.resetAnimation(), this.hoverAnimate(_.HOVERING.Y_VALUE)
  }
  createFireAnimation(e, t, s, a) {
    return T(this.fireScale, e, t, () => u.random(s, a))
  }
  async hoverAnimate(e) {
    if (0 !== this.props.stage || this.isUnmounted) return;
    let t = e > 1,
      s = t ? _.HOVERING.FIRE_MIN_INTENSITY_FALLING : _.HOVERING.FIRE_MIN_INTENSITY_RISING,
      a = t ? _.HOVERING.FIRE_MAX_INTENSITY_FALLING : _.HOVERING.FIRE_MAX_INTENSITY_RISING,
      n = this.createFireAnimation(_.HOVERING.FIRE_COUNT, _.HOVERING.Y_DURATION, s, a),
      l = c.default.timing(this.y, {
        toValue: e,
        duration: _.HOVERING.Y_DURATION,
        easing: c.default.Easing.inOut(c.default.Easing.ease)
      });
    this.currentAnimation = c.default.parallel([l, n]), await this.currentAnimation.start(), this.hoverAnimate(e * _.HOVERING.Y_VALUE_MODIFIER)
  }
  createShakeAnimation(e, t, s) {
    return T(this.x, e, t, e => u.random(1, s) * (e % 2 == 0 ? 1 : -1))
  }
  async flyAnimate() {
    let e = c.default.spring(this.y, {
        toValue: _.FALLING.Y_VALUE,
        overshootClamping: !0
      }),
      t = c.default.spring(this.fireScale, {
        toValue: _.FALLING.FIRE_VALUE,
        overshootClamping: !0
      }),
      s = c.default.parallel([e, t]),
      a = c.default.timing(this.y, {
        toValue: _.STAGING.Y_VALUE,
        duration: _.STAGING.DURATION
      }),
      n = this.createShakeAnimation(_.STAGING.SHAKE_COUNT, _.STAGING.DURATION, _.STAGING.SHAKE_INTENSITY),
      l = this.createFireAnimation(_.STAGING.FIRE_COUNT, _.STAGING.DURATION, _.STAGING.FIRE_MIN_INTENSITY, _.STAGING.FIRE_MAX_INTENSITY),
      i = c.default.parallel([a, n, l]),
      r = c.default.timing(this.y, {
        toValue: _.FLYING.Y_VALUE,
        duration: _.FLYING.DURATION,
        easing: _.FLYING.Y_EASING
      }),
      o = c.default.timing(this.x, {
        toValue: _.FLYING.X_VALUE,
        duration: _.FLYING.DURATION,
        easing: _.FLYING.X_EASING
      }),
      d = c.default.timing(this.opacity, {
        toValue: _.FLYING.OPACITY_VALUE,
        duration: _.FLYING.DURATION / _.FLYING.OPACITY_DURATION_DIVIDEND,
        delay: _.FLYING.DURATION / _.FLYING.OPACITY_DURATION_DIVIDEND
      }),
      u = this.createFireAnimation(_.FLYING.FIRE_COUNT, _.FLYING.DURATION, _.FLYING.FIRE_MIN_INTENSITY, _.FLYING.FIRE_MAX_INTENSITY),
      E = c.default.parallel([r, o, d, u]);
    if (this.currentAnimation = c.default.sequence([s, i, E]), await this.currentAnimation.start(), !this.isUnmounted) {
      let {
        onFlyingComplete: e
      } = this.props;
      null != e && e()
    }
  }
  getWumpusStyle() {
    return {
      transform: [{
        translateY: this.y.interpolate({
          inputRange: [0, 1],
          outputRange: ["0px", "1px"]
        })
      }, {
        translateX: this.x.interpolate({
          inputRange: [0, 1],
          outputRange: ["0px", "1px"]
        })
      }],
      opacity: this.opacity
    }
  }
  getFireStyle() {
    return {
      transform: [{
        scale: this.fireScale
      }]
    }
  }
  render() {
    let {
      className: e,
      style: t
    } = this.props;
    return (0, l.jsxs)(c.default.div, {
      className: o(E.animation, e),
      style: {
        ...t,
        ...this.getWumpusStyle()
      },
      children: [(0, l.jsx)("div", {
        className: E.fireTopWrapper,
        children: (0, l.jsx)(c.default.div, {
          className: E.fire,
          style: this.getFireStyle()
        })
      }), (0, l.jsx)("div", {
        className: E.fireBottomWrapper,
        children: (0, l.jsx)(c.default.div, {
          className: E.fire,
          style: this.getFireStyle()
        })
      }), (0, l.jsx)("div", {
        className: E.wumpus
      })]
    })
  }
  constructor(...e) {
    super(...e), this.x = new c.default.Value(0), this.y = new c.default.Value(0), this.opacity = new c.default.Value(1), this.fireScale = new c.default.Value(1), this.currentAnimation = null, this.isUnmounted = !1
  }
}
I.Stages = a;
var S = I
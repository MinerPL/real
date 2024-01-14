"use strict";
s.r(t), s.d(t, {
  CategoryColumn: function() {
    return m
  },
  ResultsLoader: function() {
    return p
  }
}), s("222007"), s("808653");
var r = s("37983"),
  l = s("884691"),
  n = s("917351"),
  a = s.n(n),
  i = s("458960"),
  o = s("669491"),
  u = s("527671");
let c = [o.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, o.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"];
class h extends l.PureComponent {
  render() {
    let {
      props: {
        height: e
      },
      state: {
        backgroundColor: t
      }
    } = this;
    return (0, r.jsx)("div", {
      style: {
        height: e,
        backgroundColor: t
      },
      className: u.gif
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      backgroundColor: a.sample(c)
    }
  }
}
class d extends l.Component {
  componentDidMount() {
    this.animateSlide()
  }
  getAnimatedStyle() {
    let {
      props: {
        columns: e
      },
      state: {
        translateY: t
      }
    } = this;
    return {
      width: "".concat(100 / e, "%"),
      transform: [{
        translateY: t.interpolate({
          inputRange: [0, 1],
          outputRange: ["0px", "1px"]
        })
      }]
    }
  }
  render() {
    let {
      blocks: e
    } = this.state;
    return (0, r.jsxs)(i.default.div, {
      className: u.column,
      style: this.getAnimatedStyle(),
      children: [e.map((e, t) => (0, r.jsx)(h, {
        height: e
      }, t)), e.map((e, t) => (0, r.jsx)(h, {
        height: e
      }, "alt".concat(t)))]
    })
  }
  constructor(e) {
    super(e), this.animateSlide = () => {
      let {
        props: {
          direction: e
        },
        state: {
          translateY: t,
          height: s
        }
      } = this;
      t.setValue(e > 0 ? 0 : -s / 2 + 12), i.default.timing(t, {
        toValue: e > 0 ? -s / 2 + 12 : 0,
        duration: 800,
        easing: i.default.Easing.linear
      }).start(this.animateSlide)
    };
    let t = Array(10).fill(null).map(() => a.random(40, 150));
    this.state = {
      blocks: t,
      height: 2 * t.reduce((e, t) => e + t + 12, 12),
      translateY: new i.default.Value(0)
    }
  }
}
d.defaultProps = {
  direction: -1
};
let m = e => {
  let {
    columns: t
  } = e;
  return (0, r.jsx)("div", {
    className: u.column,
    style: {
      width: "".concat(100 / t, "%")
    },
    children: [, , , , ].fill(null).map((e, t) => (0, r.jsx)("div", {
      className: u.categoryLoader
    }, t))
  })
};
class p extends l.PureComponent {
  render() {
    let {
      columns: e,
      renderColumn: t
    } = this.props;
    return (0, r.jsx)("div", {
      className: u.container,
      children: Array(e).fill(null).map((s, r) => t(e, r))
    })
  }
}
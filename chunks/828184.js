"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("424973"), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("917351"),
  o = n.n(r),
  u = n("485328"),
  d = n("659500"),
  c = n("49111"),
  f = n("189542");
let h = {
    PRIMARY: () => !0,
    SECONDARY: () => !0
  },
  Symbol = () => (0, l.jsxs)("div", {
    className: f.symbol,
    children: [(0, l.jsx)("div", {
      className: f.symbolBackground
    }), (0, l.jsx)("img", {
      alt: "",
      src: n("287112")
    })]
  }, "symbol");
class C extends a.PureComponent {
  componentDidMount() {
    this.setState({
      animating: !0
    }), this._renderSecondaryTimeout = setTimeout(() => {
      this.setState({
        renderSecondary: !0
      })
    }, 120), this._doneTimeout = setTimeout(this.done, 1e3), h.PRIMARY()
  }
  componentDidUpdate(e, t) {
    this.state.renderSecondary && !t.renderSecondary && h.SECONDARY()
  }
  componentWillUnmount() {
    clearTimeout(this._renderSecondaryTimeout), clearTimeout(this._doneTimeout)
  }
  renderPrimary() {
    return (0, l.jsxs)("div", {
      className: f.primaryExplosion,
      children: [(0, l.jsx)("img", {
        alt: "",
        className: f.circleInner,
        src: n("672453"),
        width: 70,
        height: 69
      }), (0, l.jsx)("img", {
        alt: "",
        className: f.circleOuter,
        src: n("110209"),
        width: 96,
        height: 95
      }), (0, l.jsx)("img", {
        alt: "",
        className: f.linesSecondary,
        src: n("923699"),
        width: 183,
        height: 104
      }), (0, l.jsx)("img", {
        alt: "",
        className: f.linesMain,
        src: n("210318"),
        width: 69,
        height: 180
      })]
    }, "primary-explosion")
  }
  renderSecondary(e, t) {
    return (0, l.jsxs)("div", {
      className: f.secondaryExplosion,
      style: {
        top: t,
        left: e
      },
      children: [(0, l.jsx)("img", {
        alt: "",
        className: f.circleInner,
        src: n("856081"),
        width: 61,
        height: 58
      }, "circle-inner"), (0, l.jsx)("img", {
        alt: "",
        className: f.circleOuter,
        src: n("203450"),
        width: 85,
        height: 85
      }, "circle-outer"), (0, l.jsx)("img", {
        alt: "",
        className: f.linesSecondary,
        src: n("16759"),
        width: 162,
        height: 173
      }, "lines-secondary"), (0, l.jsx)("img", {
        alt: "",
        className: f.linesMain,
        src: n("842397"),
        width: 156,
        height: 306
      }, "lines-main")]
    }, "secondary-explosion")
  }
  render() {
    let {
      renderSecondary: e,
      offsetX: t,
      offsetY: n,
      animating: a,
      scale: s
    } = this.state, r = [this.renderPrimary()];
    return e && r.push(this.renderSecondary(t, n)), (0, l.jsx)("div", {
      className: i(f.container, {
        [f.animate]: a
      }),
      style: {
        top: this.props.top,
        left: this.props.left,
        transform: "scale(".concat(s, ")")
      },
      children: r
    })
  }
  constructor(...e) {
    super(...e), this._renderSecondaryTimeout = null, this._doneTimeout = null, this.state = {
      animating: !1,
      renderSecondary: !1,
      scale: o.random(.6, 1, !0),
      offsetX: o.random(0, 140, !1) - 70,
      offsetY: o.random(0, 140, !1) - 70
    }, this.done = () => {
      this.props.onAnimationComplete(this.props.componentId)
    }
  }
}
let p = 240;
class m extends a.PureComponent {
  componentDidMount() {
    this.setTimeout(() => {
      this.setState({
        visible: !0
      }), d.ComponentDispatch.dispatch(c.ComponentActions.SHAKE_APP, {
        duration: 2400
      })
    }, 1800), this.setTimeout(this.createExplosion, 1800)
  }
  componentWillUnmount() {
    for (let e of (u.default.enable(), this.children.length = 0, this._timeouts)) clearTimeout(e)
  }
  render() {
    return (0, l.jsx)("div", {
      className: i(f.ragingDemon, {
        [f.visible]: this.state.visible
      }),
      children: this.children
    })
  }
  constructor(...e) {
    super(...e), this._timeouts = [], this.children = [], this.state = {
      explosions: 0,
      visible: !1
    }, this.setTimeout = (e, t) => {
      let n = setTimeout(e, t);
      return this._timeouts.push(n), n
    }, this.removeExplosion = e => {
      let t = this.children,
        n = t.findIndex(t => {
          if (t.type !== C) return !1;
          let n = t.props;
          return null != n.componentId && n.componentId === e
        });
      n >= 0 && t.splice(n, 1), this.forceUpdate()
    }, this.createExplosion = () => {
      let e = this.children,
        t = window.innerWidth / 2 >> 0,
        n = window.innerHeight / 2 >> 0;
      if (this.state.explosions < 8) {
        let a = "expl-".concat(this.state.explosions);
        e.push((0, l.jsx)(C, {
          componentId: a,
          top: o.random(n - 100, n + 100, !1),
          left: o.random(t - 200, t + 200, !1),
          onAnimationComplete: this.removeExplosion
        }, a)), this.setTimeout(this.createExplosion, p), this.setState({
          explosions: this.state.explosions + 1
        })
      } else this.setTimeout(this.addSymbol, 750)
    }, this.addSymbol = () => {
      this.children = [(0, l.jsx)(Symbol, {}, "symbol")], this.forceUpdate(), this.setTimeout(this.delayedClose, 3e3)
    }, this.delayedClose = () => {
      this.props.onClose()
    }
  }
}
var E = m
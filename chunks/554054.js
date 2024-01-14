"use strict";
n.r(t), n.d(t, {
  Splash: function() {
    return h
  },
  default: function() {
    return E
  }
}), n("222007");
var s = n("37983"),
  i = n("884691"),
  r = n("414456"),
  a = n.n(r),
  o = n("769846"),
  d = n("313609"),
  u = n("159885"),
  l = n("725484"),
  f = n("331756"),
  _ = n("289382"),
  c = n("634984");
let g = (0, u.cssValueToNumber)(o.default.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE);

function m(e, t) {
  let {
    innerWidth: n,
    innerHeight: s
  } = window;
  if (0 === e || 0 === t) return null;
  let i = t / e,
    r = n,
    a = Math.round(n * i);
  return a < s && (a = s, r = Math.round(s * (i = e / t))), {
    naturalWidth: e,
    naturalHeight: t,
    width: r,
    height: a
  }
}

function h(e) {
  let {
    splash: t,
    children: n
  } = e, [{
    width: r,
    height: o
  }, u] = i.useState({
    width: 0,
    height: 0,
    naturalHeight: 0,
    naturalWidth: 0
  });
  return i.useEffect(() => {
    function e() {
      u(e => {
        let {
          naturalWidth: t,
          naturalHeight: n
        } = e, s = m(t, n);
        return null != s ? s : e
      })
    }
    return window.addEventListener("resize", e), () => window.removeEventListener("reslize", e)
  }, []), (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(d.default, {
      className: a(c.rightSplit),
      onLoad: function(e) {
        let {
          currentTarget: t
        } = e, {
          naturalWidth: n,
          naturalHeight: s
        } = t, i = m(n, s);
        null != i && u(i)
      },
      src: t,
      width: r,
      height: o
    }), (0, s.jsx)("div", {
      className: a(c.leftSplit, {
        [c.nonEmbeddedLeftSplit]: !0
      }),
      children: n
    })]
  })
}
class v extends i.PureComponent {
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }
  calculateShowWaveAnimation() {
    return window.innerWidth > g
  }
  renderSplashArt() {
    let {
      splash: e,
      embedded: t
    } = this.props, {
      width: n,
      height: i
    } = this.state;
    return null != e ? (0, s.jsx)(d.default, {
      className: a(c.rightSplit, {
        [c.embedded]: t
      }),
      src: e,
      width: n,
      height: i,
      onLoad: this.handleLoad
    }) : null
  }
  renderWave() {
    let {
      waveState: e,
      updateWaveState: t,
      embedded: n
    } = this.props, {
      showWaveAnimation: i,
      splashLoaded: r
    } = this.state;
    return i ? (0, s.jsx)(f.default, {
      embedded: n,
      waveState: e,
      updateWaveState: t,
      hideFallback: !r
    }) : (0, s.jsx)("div", {
      className: c.mobileWave
    })
  }
  renderContent() {
    let {
      children: e,
      waveState: t,
      showLogo: n,
      logoClassName: r,
      embedded: o
    } = this.props, {
      showWaveAnimation: d
    } = this.state;
    return (0, s.jsxs)(i.Fragment, {
      children: [this.renderWave(), (0, s.jsxs)("div", {
        className: a(c.leftSplit, {
          [c.nonEmbeddedLeftSplit]: o
        }),
        children: [n ? (0, s.jsx)(l.default, {
          show: !d || t === _.WaveStates.ENTERED && t !== _.WaveStates.FILLING,
          className: a(c.logo, r)
        }) : null, e]
      })]
    })
  }
  render() {
    let {
      className: e
    } = this.props;
    return (0, s.jsxs)("div", {
      className: a(e, c.wrapper),
      children: [this.renderSplashArt(), this.renderContent()]
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      naturalWidth: 0,
      naturalHeight: 0,
      width: 0,
      height: 0,
      showWaveAnimation: this.calculateShowWaveAnimation(),
      splashLoaded: !1
    }, this.handleResize = () => {
      let {
        naturalWidth: e,
        naturalHeight: t
      } = this.state, n = m(e, t), s = this.calculateShowWaveAnimation();
      null != n ? this.setState({
        ...n,
        showWaveAnimation: s
      }) : this.setState({
        showWaveAnimation: s
      })
    }, this.handleLoad = e => {
      let {
        currentTarget: t
      } = e, {
        naturalWidth: n,
        naturalHeight: s
      } = t, i = m(n, s);
      null != i && this.setState(i), this.setState({
        splashLoaded: !0
      }), window.removeEventListener("resize", this.handleResize), window.addEventListener("resize", this.handleResize)
    }
  }
}
v.defaultProps = {
  embedded: !1
};
var E = v
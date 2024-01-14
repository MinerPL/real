"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("424973");
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("458960"),
  o = n("446674"),
  u = n("266491"),
  d = n("77078"),
  c = n("54239"),
  E = n("454286"),
  f = n("485328"),
  _ = n("269936"),
  h = n("161778"),
  C = n("778588"),
  T = n("708169"),
  I = n("659500"),
  S = n("439932"),
  N = n("49111"),
  A = n("350828");
let p = (0, _.makeLazy)({
    createPromise: () => n.el("420610").then(n.bind(n, "420610")),
    webpackId: "420610",
    name: "UserSettings"
  }),
  m = (0, _.makeLazy)({
    createPromise: () => n.el("995865").then(n.bind(n, "995865")),
    webpackId: "995865",
    name: "ChannelSettings"
  }),
  g = (0, _.makeLazy)({
    createPromise: () => n.el("258556").then(n.bind(n, "258556")),
    webpackId: "258556",
    name: "CollectiblesShop"
  }),
  R = (0, _.makeLazy)({
    createPromise: () => n.el("725621").then(n.bind(n, "725621")),
    webpackId: "725621",
    name: "GuildSettings"
  }),
  O = {
    [N.Layers.USER_SETTINGS]: () => (0, a.jsx)(p, {}),
    [N.Layers.CHANNEL_SETTINGS]: () => (0, a.jsx)(m, {}),
    [N.Layers.GUILD_SETTINGS]: () => (0, a.jsx)(R, {}),
    [N.Layers.COLLECTIBLES_SHOP]: () => (0, a.jsx)(g, {})
  },
  L = "SHOWN",
  v = "HIDDEN",
  M = {
    friction: 10,
    tension: 100
  };

function P() {
  return s.useEffect(() => (f.default.enable(), f.default.enableTemp(E.SETTINGS_LAYERS_LAYOUT), () => f.default.disableTemp()), []), null
}
class D extends s.PureComponent {
  static getDerivedStateFromProps(e, t) {
    return e.mode !== t.mode ? {
      animating: !0,
      mode: e.mode
    } : null
  }
  componentDidUpdate(e) {
    let {
      mode: t
    } = this.props, {
      mode: n
    } = e;
    if (t !== n) {
      if (t === L && n === v) return this.animateIn();
      if (t === v && n === L) return this.animateUnder()
    }
  }
  componentWillEnter(e) {
    let {
      opacity: t,
      scale: n
    } = this.state;
    n.setValue(1.1), t.setValue(0), e(), this.setState({
      animating: !0
    }, () => this.animateIn())
  }
  componentWillLeave(e) {
    this.setState({
      animating: !0
    }, () => this.animateOut(e))
  }
  animateIn(e) {
    o.default.Emitter.pause(500);
    let {
      opacity: t,
      scale: n
    } = this.state;
    r.default.parallel([r.default.spring(t, {
      toValue: 1,
      ...M
    }), r.default.spring(n, {
      toValue: 1,
      ...M
    })]).start(() => this.animateComplete(e))
  }
  animateOut(e) {
    o.default.Emitter.pause(500);
    let {
      opacity: t,
      scale: n
    } = this.state;
    I.ComponentDispatch.dispatch(N.ComponentActions.LAYER_POP_START), r.default.parallel([r.default.spring(t, {
      toValue: 0,
      ...M
    }), r.default.spring(n, {
      toValue: 1.1,
      ...M
    })]).start(() => {
      e(), I.ComponentDispatch.dispatch(N.ComponentActions.LAYER_POP_COMPLETE)
    })
  }
  animateUnder() {
    o.default.Emitter.pause(500);
    let {
      opacity: e,
      scale: t
    } = this.state;
    r.default.parallel([r.default.spring(e, {
      toValue: 0,
      ...M
    }), r.default.spring(t, {
      toValue: .93,
      ...M
    })]).start(() => this.animateComplete())
  }
  animateComplete(e) {
    this.setState({
      animating: !1
    }, e)
  }
  render() {
    let {
      animating: e
    } = this.state, {
      mode: t,
      children: n,
      baseLayer: s,
      ...i
    } = this.props, o = e || t === v ? this.getAnimatedStyle() : null, u = (0, a.jsx)(r.default.div, {
      ref: e => this.containerRef.current = null != e ? e.refs.node : void 0,
      "aria-hidden": t === v,
      className: l(A.layer, {
        [A.baseLayer]: s,
        [A.animating]: e,
        "stop-animations": t === v
      }),
      style: o,
      ...i,
      children: n
    });
    return s ? u : (0, a.jsx)(d.FocusLock, {
      containerRef: this.containerRef,
      children: u
    })
  }
  getAnimatedStyle() {
    let {
      opacity: e,
      scale: t
    } = this.state, {
      reducedMotion: n
    } = this.context;
    return {
      opacity: e,
      transform: n.enabled ? void 0 : [{
        scale: t
      }, {
        translateZ: 0
      }]
    }
  }
  constructor(e) {
    super(e), this.containerRef = s.createRef();
    let t = 1,
      n = 1;
    e.mode === v && (t = .93, n = 0), this.state = {
      animating: !1,
      scale: new r.default.Value(t),
      opacity: new r.default.Value(n),
      mode: e.mode
    }
  }
}
D.defaultProps = {
  baseLayer: !1
}, D.contextType = d.AccessibilityPreferencesContext;
class y extends s.PureComponent {
  componentDidMount() {
    I.ComponentDispatch.subscribe(N.ComponentActions.LAYER_POP_ESCAPE_KEY, c.popLayer)
  }
  componentWillUnmount() {
    I.ComponentDispatch.unsubscribe(N.ComponentActions.LAYER_POP_ESCAPE_KEY, c.popLayer)
  }
  renderLayers() {
    let {
      children: e,
      layers: t,
      hasFullScreenLayer: n
    } = this.props, {
      length: s
    } = t, i = [];
    return i.push((0, a.jsx)(D, {
      mode: 0 !== s || n ? v : L,
      baseLayer: !0,
      children: e
    }, "layer-base")), t.forEach((e, t) => i.push(this.renderComponent(e, t, s))), i
  }
  renderComponent(e, t, n) {
    let s;
    return s = "string" == typeof e ? O[e]() : (0, a.jsx)(e, {}), (0, a.jsxs)(D, {
      mode: t === n - 1 ? L : v,
      children: [(0, a.jsx)(P, {}), s]
    }, "layer-".concat(t))
  }
  renderArtisanalHack() {
    return (0, a.jsx)("div", {
      className: l(A.bg, (0, S.getThemeClass)(this.props.sidebarTheme))
    })
  }
  render() {
    return (0, a.jsxs)(a.Fragment, {
      children: [this.renderArtisanalHack(), (0, a.jsx)(u.default, {
        component: "div",
        className: l(A.layers, this.props.className),
        children: this.renderLayers()
      })]
    })
  }
}

function x(e) {
  let t = (0, o.useStateFromStores)([h.default], () => h.default.darkSidebar) ? N.ThemeTypes.DARK : void 0,
    n = (0, o.useStateFromStores)([C.default], () => C.default.getLayers()),
    s = (0, T.useFullScreenLayerStore)(e => e.fullScreenLayers.length > 0);
  return (0, a.jsx)(y, {
    ...e,
    sidebarTheme: t,
    layers: n,
    hasFullScreenLayer: s
  })
}
"use strict";
n.r(t), n.d(t, {
  LayerClassName: function() {
    return h
  },
  LayerProvider: function() {
    return p
  },
  LayerContainer: function() {
    return _
  },
  getParentLayerContainer: function() {
    return S
  },
  Layer: function() {
    return m
  },
  createLayer: function() {
    return T
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("627445"),
  l = n.n(o),
  u = n("817736"),
  c = n.n(u),
  d = n("117362"),
  f = n("411093"),
  E = n("260921");
let h = E.layerContainer;
class p extends r.Component {
  componentWillUnmount() {
    this.state.layerContainerElement = null
  }
  render() {
    let {
      layerContext: e,
      children: t
    } = this.props, {
      layerContainerElement: n
    } = this.state;
    return (0, i.jsx)(e.Provider, {
      value: this.getContextValue(n),
      children: t
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      layerContainerElement: null
    }, this.setLayerContainerElement = e => {
      this.setState({
        layerContainerElement: e
      })
    }, this.getContextValue = (0, d.cachedFunction)(e => [e, this.setLayerContainerElement])
  }
}
let _ = e => {
  let {
    layerContext: t,
    className: n
  } = e, [, s] = r.useContext(t);
  return (0, i.jsx)("div", {
    className: a(h, n),
    ref: s
  })
};

function S(e) {
  let t = (0, f.default)(e, E.layerContainer);
  return l(null != t, "Unexpected missing parent container"), t
}
let m = e => {
  let {
    layerContext: t,
    children: n
  } = e;
  return (0, i.jsx)(t.Consumer, {
    children: e => (function(e, t) {
      let [n] = e;
      return null == n ? null : c.createPortal(r.Children.only(t), n)
    })(e, n)
  })
};

function T(e) {
  let t = r.createContext([null, () => {}]),
    n = {
      LayerProvider: e => (0, i.jsx)(p, {
        layerContext: t,
        ...e
      }),
      LayerContainer: e => (0, i.jsx)(_, {
        layerContext: t,
        ...e
      }),
      Layer: e => (0, i.jsx)(m, {
        layerContext: t,
        ...e
      }),
      layerContext: t
    };
  return n.LayerProvider.displayName = "".concat(e, "LayerProvider"), n.LayerContainer.displayName = "".concat(e, "LayerContainer"), n.Layer.displayName = "".concat(e, "Layer"), n
}
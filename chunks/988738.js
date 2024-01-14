"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var a = n("37983"),
  r = n("884691"),
  s = n("817736"),
  i = n("759843"),
  l = n("446674"),
  u = n("77078"),
  o = n("272030"),
  d = n("244201"),
  c = n("428958"),
  f = n("161778"),
  E = n("144747"),
  h = n("983782"),
  p = n("659500"),
  S = n("452453"),
  _ = n("49111");
let C = e => {
  let {
    children: t,
    close: n,
    onUnmount: l,
    rect: o,
    position: f,
    align: E,
    impressionName: p,
    impressionProperties: S
  } = e, C = r.useRef(null);
  r.useEffect(() => {
    var e, t;
    let a = (0, s.findDOMNode)(C.current);
    if (null == a) return;
    let r = e => {
      let t = e.target,
        a = (0, s.findDOMNode)(C.current);
      !(null != a && (0, u.referencePortalAwareContains)(a, t)) && (window.getSelection().removeAllRanges(), n())
    };
    return null === (e = a.ownerDocument) || void 0 === e || e.addEventListener("click", r, !0), null === (t = a.ownerDocument) || void 0 === t || t.addEventListener("contextmenu", r, !0), () => {
      var e, t;
      null === (e = a.ownerDocument) || void 0 === e || e.removeEventListener("click", r, !0), null === (t = a.ownerDocument) || void 0 === t || t.removeEventListener("contextmenu", r, !0)
    }
  }, [n]);
  let m = r.useRef(l);
  r.useEffect(() => void(m.current = l)), r.useEffect(() => () => {
    var e;
    return null === (e = m.current) || void 0 === e ? void 0 : e.call(m)
  }, []), r.useLayoutEffect(() => {
    var e;
    null === (e = C.current) || void 0 === e || e.updatePosition()
  }), (0, c.default)({
    type: i.ImpressionTypes.MENU,
    name: p,
    properties: S
  });
  let g = (0, d.useWindowDispatch)(),
    T = r.useCallback(() => {
      g.dispatch(_.ComponentActions.POPOUT_SHOW)
    }, [g]),
    I = r.useCallback(() => {
      g.dispatch(_.ComponentActions.POPOUT_HIDE)
    }, [g]);
  return (0, a.jsx)(h.AppReferencePositionLayer, {
    onMount: T,
    onUnmount: I,
    reference: () => o,
    position: null != f ? f : "right",
    align: null != E ? E : "top",
    autoInvert: !0,
    ref: C,
    nudgeAlignIntoViewport: !0,
    children: t
  })
};
class m extends r.PureComponent {
  componentDidMount() {
    let {
      renderLazy: e,
      renderWindow: t
    } = this.props;
    if (t.addEventListener("resize", this.closeResize, !0), p.ComponentDispatch.subscribe(_.ComponentActions.CONTEXT_MENU_CLOSE, this.props.closeContextMenu), null != e) {
      let t = setTimeout(() => {
        this.setState({
          render: () => (0, a.jsx)(u.MenuSpinner, {})
        })
      }, 300);
      e().then(e => {
        this.setState({
          render: e
        }), clearTimeout(t)
      })
    }
  }
  componentDidUpdate(e) {
    let {
      isOpen: t
    } = this.props;
    if (!t && e.isOpen) {
      var n, a;
      null === (a = e.config) || void 0 === a || null === (n = a.onClose) || void 0 === n || n.call(a)
    }
  }
  componentWillUnmount() {
    let {
      renderWindow: e
    } = this.props;
    e.removeEventListener("resize", this.closeResize, !0), p.ComponentDispatch.unsubscribe(_.ComponentActions.CONTEXT_MENU_CLOSE, this.props.closeContextMenu)
  }
  render() {
    var e;
    let {
      appContext: t,
      target: n,
      isOpen: r,
      theme: s,
      config: i,
      rect: l
    } = this.props, u = null !== (e = this.state.render) && void 0 !== e ? e : this.props.render;
    return r && null != l && null != i && null != n && null != u && i.context === t ? (0, a.jsx)(C, {
      rect: l,
      close: this.close,
      onUnmount: i.onClose,
      align: i.align,
      position: i.position,
      impressionName: i.impressionName,
      impressionProperties: i.impressionProperties,
      children: (e, a) => {
        let {
          position: r
        } = e;
        return u({
          className: S.ContextMenuClassName,
          position: r,
          theme: s,
          onHeightUpdate: a,
          config: i,
          target: n,
          context: t
        })
      }
    }) : null
  }
  constructor(...e) {
    super(...e), this.state = {
      render: void 0
    }, this.closeResize = e => {
      let {
        renderWindow: t
      } = this.props;
      e.target === t && this.close()
    }, this.close = () => {
      let {
        isOpen: e,
        closeContextMenu: t
      } = this.props;
      e && t()
    }
  }
}

function g() {
  let {
    contextMenu: e,
    version: t,
    isOpen: n
  } = (0, l.useStateFromStoresObject)([E.default], () => ({
    contextMenu: E.default.getContextMenu(),
    version: E.default.version,
    isOpen: E.default.isOpen()
  })), s = (0, l.useStateFromStores)([f.default], () => f.default.theme), {
    appContext: i,
    renderWindow: u
  } = r.useContext(d.default);
  return (0, a.jsx)(m, {
    appContext: i,
    renderWindow: u,
    ...e,
    isOpen: n,
    theme: s,
    closeContextMenu: o.closeContextMenu
  }, t)
}
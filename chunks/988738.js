"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var a = n("37983"),
  r = n("884691"),
  s = n("817736"),
  l = n("759843"),
  i = n("446674"),
  u = n("77078"),
  o = n("272030"),
  d = n("244201"),
  c = n("428958"),
  f = n("161778"),
  h = n("144747"),
  p = n("983782"),
  E = n("659500"),
  C = n("452453"),
  m = n("49111");
let S = e => {
  let {
    children: t,
    close: n,
    onUnmount: i,
    rect: o,
    position: f,
    align: h,
    impressionName: E,
    impressionProperties: C
  } = e, S = r.useRef(null);
  r.useEffect(() => {
    var e, t;
    let a = (0, s.findDOMNode)(S.current);
    if (null == a) return;
    let r = e => {
      let t = e.target,
        a = (0, s.findDOMNode)(S.current);
      !(null != a && (0, u.referencePortalAwareContains)(a, t)) && (window.getSelection().removeAllRanges(), n())
    };
    return null === (e = a.ownerDocument) || void 0 === e || e.addEventListener("click", r, !0), null === (t = a.ownerDocument) || void 0 === t || t.addEventListener("contextmenu", r, !0), () => {
      var e, t;
      null === (e = a.ownerDocument) || void 0 === e || e.removeEventListener("click", r, !0), null === (t = a.ownerDocument) || void 0 === t || t.removeEventListener("contextmenu", r, !0)
    }
  }, [n]);
  let g = r.useRef(i);
  r.useEffect(() => void(g.current = i)), r.useEffect(() => () => {
    var e;
    return null === (e = g.current) || void 0 === e ? void 0 : e.call(g)
  }, []), r.useLayoutEffect(() => {
    var e;
    null === (e = S.current) || void 0 === e || e.updatePosition()
  }), (0, c.default)({
    type: l.ImpressionTypes.MENU,
    name: E,
    properties: C
  });
  let _ = (0, d.useWindowDispatch)(),
    T = r.useCallback(() => {
      _.dispatch(m.ComponentActions.POPOUT_SHOW)
    }, [_]),
    v = r.useCallback(() => {
      _.dispatch(m.ComponentActions.POPOUT_HIDE)
    }, [_]);
  return (0, a.jsx)(p.AppReferencePositionLayer, {
    onMount: T,
    onUnmount: v,
    reference: () => o,
    position: null != f ? f : "right",
    align: null != h ? h : "top",
    autoInvert: !0,
    ref: S,
    nudgeAlignIntoViewport: !0,
    children: t
  })
};
class g extends r.PureComponent {
  componentDidMount() {
    let {
      renderLazy: e,
      renderWindow: t
    } = this.props;
    if (t.addEventListener("resize", this.closeResize, !0), E.ComponentDispatch.subscribe(m.ComponentActions.CONTEXT_MENU_CLOSE, this.props.closeContextMenu), null != e) {
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
    e.removeEventListener("resize", this.closeResize, !0), E.ComponentDispatch.unsubscribe(m.ComponentActions.CONTEXT_MENU_CLOSE, this.props.closeContextMenu)
  }
  render() {
    var e;
    let {
      appContext: t,
      target: n,
      isOpen: r,
      theme: s,
      config: l,
      rect: i
    } = this.props, u = null !== (e = this.state.render) && void 0 !== e ? e : this.props.render;
    return r && null != i && null != l && null != n && null != u && l.context === t ? (0, a.jsx)(S, {
      rect: i,
      close: this.close,
      onUnmount: l.onClose,
      align: l.align,
      position: l.position,
      impressionName: l.impressionName,
      impressionProperties: l.impressionProperties,
      children: (e, a) => {
        let {
          position: r
        } = e;
        return u({
          className: C.ContextMenuClassName,
          position: r,
          theme: s,
          onHeightUpdate: a,
          config: l,
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

function _() {
  let {
    contextMenu: e,
    version: t,
    isOpen: n
  } = (0, i.useStateFromStoresObject)([h.default], () => ({
    contextMenu: h.default.getContextMenu(),
    version: h.default.version,
    isOpen: h.default.isOpen()
  })), s = (0, i.useStateFromStores)([f.default], () => f.default.theme), {
    appContext: l,
    renderWindow: u
  } = r.useContext(d.default);
  return (0, a.jsx)(g, {
    appContext: l,
    renderWindow: u,
    ...e,
    isOpen: n,
    theme: s,
    closeContextMenu: o.closeContextMenu
  }, t)
}
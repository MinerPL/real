"use strict";
n.r(t), n.d(t, {
  BasePopout: function() {
    return I
  }
}), n("222007"), n("70102");
var i = n("37983"),
  r = n("884691"),
  s = n("995008"),
  a = n.n(s),
  o = n("817736"),
  l = n.n(o),
  u = n("118810"),
  c = n("862337"),
  d = n("860226"),
  f = n("228256"),
  E = n("222163"),
  h = n("551042"),
  p = n("452453"),
  _ = n("244201"),
  S = n("983782"),
  m = n("678904"),
  T = n("49111");
let g = new Set(["Spacebar", " ", "Enter"]);
class I extends r.Component {
  shouldShowPopout(e, t) {
    return null != e.shouldShow ? e.shouldShow : t.shouldShowPopout
  }
  componentDidMount() {
    this.shouldShowPopout(this.props, this.state) && this.setupShowPopout()
  }
  componentDidUpdate(e, t) {
    e.shouldShow, this.props.shouldShow;
    let n = this.shouldShowPopout(this.props, this.state);
    if ((this.shouldShowPopout(e, t) !== n || t.isLoading !== this.state.isLoading) && (n ? this.setupShowPopout() : this.unsubscribe()), this.props.closeOnScroll !== e.closeOnScroll) {
      var i, r;
      let e = this.getDomElement();
      this.props.closeOnScroll ? null === (i = e.ownerDocument) || void 0 === i || i.addEventListener("scroll", this.close, !0) : null === (r = e.ownerDocument) || void 0 === r || r.removeEventListener("scroll", this.close, !0)
    }
  }
  getDomElement() {
    let e = l.findDOMNode(this);
    if (!(0, u.isElement)(e)) throw Error("Popout cannot find DOM node");
    return e
  }
  setupShowPopout() {
    var e, t, n;
    let i = this.getDomElement();
    null === (e = i.ownerDocument) || void 0 === e || e.addEventListener("mousedown", this.handleDocumentMouseDown, !0), null === (t = i.ownerDocument) || void 0 === t || t.addEventListener("mouseup", this.handleDocumentMouseUp, !0), this.props.closeOnScroll && (null === (n = i.ownerDocument) || void 0 === n || n.addEventListener("scroll", this.close, !0)), this.context.windowDispatch.subscribe(T.ComponentActions.POPOUT_CLOSE, this.close), this.domElementRef.current = i, this.isValidClickStart = !1, this.forceUpdate()
  }
  unsubscribe() {
    var e, t, n, i;
    let r = this.domElementRef.current;
    null != r && (null === (t = r.ownerDocument) || void 0 === t || t.removeEventListener("mousedown", this.handleDocumentMouseDown, !0), null === (n = r.ownerDocument) || void 0 === n || n.removeEventListener("mouseup", this.handleDocumentMouseUp, !0), null === (i = r.ownerDocument) || void 0 === i || i.removeEventListener("scroll", this.close, !0)), this.context.windowDispatch.unsubscribe(T.ComponentActions.POPOUT_CLOSE, this.close), null === (e = this.resizeObserver) || void 0 === e || e.disconnect()
  }
  componentWillUnmount() {
    this.unsubscribe(), this.domElementRef.current = null, this.loadingTimeout.stop(), this.validClickTimeout.stop()
  }
  render() {
    let {
      children: e,
      useMouseEnter: t
    } = this.props, n = this.shouldShowPopout(this.props, this.state);
    return (0, i.jsxs)(r.Fragment, {
      children: [e({
        onMouseDown: this.handlePreload,
        ...t ? {
          onMouseEnter: this.handleMouseEnter
        } : {},
        onKeyDown: this.handleKeyboardPreload,
        onClick: this.handleClick,
        "aria-controls": n ? this.popoutId : void 0,
        "aria-expanded": n
      }, {
        isShown: n,
        position: this.state.renderedPosition
      }), (0, i.jsx)(d.HeadingLevel, {
        forceLevel: 2,
        children: this.renderLayer()
      })]
    })
  }
  renderLayer() {
    if (!this.shouldShowPopout(this.props, this.state) || null == this.domElementRef.current) return null;
    let {
      position: e,
      align: t,
      nudgeAlignIntoViewport: n,
      spacing: r,
      autoInvert: s,
      fixed: a,
      positionKey: o,
      disablePointerEvents: l,
      layerContext: u
    } = this.props, {
      resizeKey: c,
      isLoading: d,
      shouldShowLoadingState: h
    } = this.state;
    return d && !h ? null : (0, i.jsx)(f.Layer, {
      layerContext: null != u ? u : S.appLayerContext,
      children: (0, i.jsx)(E.ReferencePositionLayer, {
        ref: this.layerRef,
        onMount: this.handlePopoutShow,
        onUnmount: this.handlePopoutHide,
        id: this.popoutId,
        reference: this.domElementRef,
        position: e,
        align: t,
        nudgeAlignIntoViewport: n,
        spacing: r,
        autoInvert: s,
        fixed: a,
        positionKey: null != o ? o : String(c),
        disablePointerEvents: l,
        onPositionChange: this.handlePopoutPositionChange,
        children: this.renderPopout
      })
    })
  }
  toggleShow(e) {
    this.state.shouldShowPopout !== e && this.setState({
      shouldShowPopout: e
    })
  }
  constructor(...e) {
    super(...e), this.domElementRef = r.createRef(), this.layerRef = r.createRef(), this.popoutRef = r.createRef(), this.popoutId = "popout_".concat(a()), this.loadingTimeout = new c.Timeout, this.validClickTimeout = new c.Timeout, this.isValidClickStart = !1, this.state = {
      renderedPosition: this.props.position,
      shouldShowPopout: !1,
      shouldShowLoadingState: !1,
      isLoading: !1,
      resizeKey: 0
    }, this.handlePopoutShow = () => {
      this.context.windowDispatch.dispatch(T.ComponentActions.POPOUT_SHOW)
    }, this.handlePopoutHide = () => {
      this.context.windowDispatch.dispatch(T.ComponentActions.POPOUT_HIDE)
    }, this.handleSetPopoutRef = e => {
      var t;
      let n = null == e ? void 0 : e.ownerDocument.defaultView;
      null != e && null != n && (this.popoutRef.current = e, null === (t = this.resizeObserver) || void 0 === t || t.disconnect(), this.resizeObserver = new n.ResizeObserver(() => {
        l.flushSync(() => {
          this.setState({
            resizeKey: this.state.resizeKey + 1
          })
        })
      }), this.resizeObserver.observe(e))
    }, this.renderPopout = (e, t) => {
      let {
        renderPopout: n
      } = this.props;
      return this.state.isLoading ? this.props.loadingComponent : n({
        ...e,
        updatePosition: t,
        closePopout: this.close,
        setPopoutRef: this.handleSetPopoutRef
      })
    }, this.close = () => {
      let {
        onRequestClose: e,
        shouldShow: t
      } = this.props;
      null == e || e(), null == t && this.toggleShow(!1)
    }, this.handleClick = e => {
      let {
        onShiftClick: t,
        shouldShow: n,
        onRequestOpen: i,
        onRequestClose: r
      } = this.props;
      if (e.shiftKey && null != t) {
        t(e);
        return
      }
      let s = null != n,
        a = s ? n : this.state.shouldShowPopout;
      a ? null == r || r() : null == i || i(), !s && this.setState(e => {
        let {
          shouldShowPopout: t
        } = e;
        return {
          shouldShowPopout: !t
        }
      })
    }, this.handleMouseEnter = () => {
      let {
        onRequestOpen: e
      } = this.props;
      null == e || e(), this.setState({
        shouldShowPopout: !0
      })
    }, this.handlePreload = async () => {
      let {
        preload: e
      } = this.props;
      if (null != e) {
        this.setState({
          isLoading: !0
        }), this.loadingTimeout.start(250, () => this.setState({
          shouldShowLoadingState: !0
        }), !1);
        try {
          await e()
        } finally {
          this.setState({
            isLoading: !1
          })
        }
      }
    }, this.handleKeyboardPreload = e => {
      g.has(e.key) && this.handlePreload()
    }, this.handleDocumentMouseDown = e => {
      let {
        ignoreModalClicks: t
      } = this.props, n = e.target, i = this.domElementRef.current;
      if (null != i) {
        if ((0, E.referencePortalAwareContains)(i, n) || null != n.closest("." + p.ContextMenuClassName) || t && (0, h.hasAnyModalOpen)()) return;
        this.isValidClickStart = !0
      }
    }, this.handleDocumentMouseUp = () => {
      this.isValidClickStart && (this.isValidClickStart = !1, this.close())
    }, this.handlePopoutPositionChange = e => {
      this.setState({
        renderedPosition: e
      })
    }
  }
}
I.defaultProps = {
  autoInvert: !1,
  nudgeAlignIntoViewport: !1,
  spacing: 0,
  loadingComponent: (0, i.jsx)(m.LoadingPopout, {})
}, I.contextType = _.default
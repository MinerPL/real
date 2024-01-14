"use strict";
n.r(t), n.d(t, {
  TooltipColors: function() {
    return i
  },
  TooltipLayer: function() {
    return C
  },
  Tooltip: function() {
    return O
  },
  TooltipContainer: function() {
    return D
  }
}), n("70102"), n("222007");
var i, r, s = n("37983"),
  a = n("884691"),
  o = n("414456"),
  l = n.n(o),
  u = n("817736"),
  c = n.n(u),
  d = n("907002"),
  f = n("394846"),
  E = n("118810"),
  h = n("862337"),
  p = n("413197"),
  _ = n("120590"),
  S = n("206230"),
  m = n("983782"),
  T = n("29017");
(r = i || (i = {})).PRIMARY = "primary", r.BLACK = "black", r.GREY = "grey", r.BRAND = "brand", r.GREEN = "green", r.YELLOW = "yellow", r.RED = "red", r.CUSTOM = "custom", r.PREMIUM = "premium";
let g = Object.freeze({}),
  I = Object.freeze({
    top: T.tooltipTop,
    bottom: T.tooltipBottom,
    left: T.tooltipLeft,
    right: T.tooltipRight,
    center: T.tooltipCenter,
    window_center: T.tooltipCenter,
    primary: T.tooltipPrimary,
    black: T.tooltipBlack,
    grey: T.tooltipGrey,
    brand: T.tooltipBrand,
    green: T.tooltipGreen,
    yellow: T.tooltipYellow,
    red: T.tooltipRed,
    custom: null,
    premium: T.tooltipPremium
  }),
  C = e => {
    let {
      targetElementRef: t,
      align: n = "center",
      position: i,
      color: r,
      children: a,
      onNonAccessibleClick: o,
      tooltipClassName: u,
      tooltipContentClassName: c,
      spacing: f = 8,
      animationStyle: E,
      disableTooltipPointerEvents: h = !1,
      allowOverflow: p = !1
    } = e, _ = "".concat("string" == typeof a ? a : "", ":").concat(i);
    return (0, s.jsx)(m.AppReferencePositionLayer, {
      disablePointerEvents: h,
      reference: t,
      position: i,
      autoInvert: !0,
      align: n,
      positionKey: _,
      spacing: f,
      nudgeAlignIntoViewport: !0,
      children: e => {
        let {
          position: t,
          nudge: f
        } = e;
        return (0, s.jsxs)(d.animated.div, {
          onClick: o,
          className: l(T.tooltip, I[null != t ? t : i], I[r], {
            [T.tooltipDisablePointerEvents]: h
          }, u),
          style: E,
          children: [(0, s.jsx)("div", {
            className: T.tooltipPointer,
            style: function(e, t, n) {
              let i = "left" === e || "right" === e,
                r = "50%",
                s = n;
              return t === (i ? "top" : "left") ? (r = "0%", s += 16) : t === (i ? "bottom" : "right") && (r = "100%", s -= 20), {
                [i ? "top" : "left"]: "calc(".concat(r, " + ").concat(s, "px)")
              }
            }(null != t ? t : i, n, f)
          }), (0, s.jsx)("div", {
            className: l(T.tooltipContent, {
              [T.tooltipContentAllowOverflow]: p
            }, c),
            children: a
          })]
        })
      }
    })
  },
  v = {
    scale: .95,
    opacity: 0
  },
  A = {
    scale: 1,
    opacity: 0
  },
  R = {
    scale: 1,
    opacity: 1
  },
  N = e => {
    let {
      isVisible: t,
      onAnimationRest: n,
      targetElementRef: i,
      ...r
    } = e, {
      reducedMotion: o
    } = a.useContext(p.AccessibilityPreferencesContext), l = (0, d.useTransition)(t, {
      keys: e => e ? "tooltip" : "empty",
      config: _.TOOLTIP_SPRING_CONFIG,
      from: o.enabled ? A : v,
      enter: R,
      leave: o.enabled ? A : v,
      onRest: n
    });
    return l((e, t) => t ? (0, s.jsx)(C, {
      animationStyle: e,
      targetElementRef: i,
      ...r
    }) : null)
  };
class O extends a.Component {
  static getDerivedStateFromProps(e, t) {
    return t.shouldShowTooltip && null == e.text ? {
      shouldShowTooltip: !1
    } : null
  }
  componentDidMount() {
    this.shouldShowTooltip(this.props, this.state) && this.setDomElement()
  }
  componentDidUpdate(e, t) {
    let n = this.shouldShowTooltip(this.props, this.state);
    n !== this.shouldShowTooltip(e, t) && (n ? this.setDomElement() : this.hasDomElement = !1)
  }
  setDomElement() {
    let e = c.findDOMNode(this);
    if (!(0, E.isElement)(e)) throw Error("Tooltip cannot find DOM node");
    this.domElementRef.current = e, this.hasDomElement = !0, this.forceUpdate()
  }
  componentWillUnmount() {
    this.showTimeout.stop(), this.domElementRef.current = null
  }
  render() {
    let e;
    let {
      children: t,
      text: n,
      "aria-label": i
    } = this.props;
    if (null == n) return t(g);
    "string" == typeof i ? e = i : "string" == typeof n && !1 !== i && (e = n);
    let r = {
      onClick: this.handleClick,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      onContextMenu: this.handleContextMenu,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur
    };
    return null != e && (r["aria-label"] = e), (0, s.jsxs)(a.Fragment, {
      children: [t(r), this.renderTooltip()]
    })
  }
  shouldShowTooltip(e, t) {
    return e.shouldShow && (t.shouldShowTooltip || e.forceOpen)
  }
  renderTooltip() {
    let {
      text: e,
      align: t,
      position: n,
      color: i,
      spacing: r,
      tooltipClassName: a,
      tooltipContentClassName: o,
      disableTooltipPointerEvents: l,
      onAnimationRest: u,
      allowOverflow: c,
      clickableOnMobile: d,
      hideOnClick: E
    } = this.props, h = (f.isMobile || f.isTablet) && !0 === d && E, p = this.shouldShowTooltip(this.props, this.state) && this.hasDomElement, _ = null;
    return _ = e instanceof Function ? p ? e() : null : e, (0, s.jsx)(N, {
      disableTooltipPointerEvents: !1 !== l && !h || !0 === l,
      targetElementRef: this.domElementRef,
      tooltipClassName: a,
      tooltipContentClassName: o,
      align: t,
      position: n,
      color: i,
      spacing: r,
      isVisible: p,
      onAnimationRest: u,
      onNonAccessibleClick: h ? this.handleClick : void 0,
      allowOverflow: c,
      children: _
    })
  }
  show() {
    let {
      delay: e,
      overflowOnly: t
    } = this.props;
    if (t) {
      let e = c.findDOMNode(this);
      if (null == e || (0, E.isElement)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth) return
    }
    null != e ? this.showTimeout.start(e, () => this.toggleShow(!0), !1) : this.toggleShow(!0)
  }
  hide() {
    this.showTimeout.stop(), this.toggleShow(!1)
  }
  toggleShow(e) {
    if (this.state.shouldShowTooltip !== e) {
      if (e) {
        var t, n;
        null === (t = (n = this.props).onTooltipShow) || void 0 === t || t.call(n)
      }
      c.flushSync(() => {
        this.setState({
          shouldShowTooltip: e
        })
      })
    }
  }
  constructor(...e) {
    super(...e), this.showTimeout = new h.Timeout, this.domElementRef = a.createRef(), this.hasDomElement = !1, this.state = {
      shouldShowTooltip: !1
    }, this.handleMouseEnter = () => {
      !((f.isMobile || f.isTablet) && !0 === this.props.clickableOnMobile) && this.show()
    }, this.handleMouseLeave = () => {
      !((f.isMobile || f.isTablet) && !0 === this.props.clickableOnMobile) && this.hide()
    }, this.handleFocus = () => {
      S.default.keyboardModeEnabled && this.show()
    }, this.handleBlur = () => {
      this.hide()
    }, this.handleClick = () => {
      let e = this.hasDomElement;
      e && this.props.hideOnClick ? this.hide() : !e && (f.isMobile || f.isTablet) && !0 === this.props.clickableOnMobile && this.show()
    }, this.handleContextMenu = () => {
      this.hide()
    }
  }
}
O.Colors = i, O.defaultProps = {
  hideOnClick: !0,
  position: "top",
  color: "primary",
  forceOpen: !1,
  spacing: 8,
  shouldShow: !0,
  allowOverflow: !1,
  overflowOnly: !1
};
let D = e => {
  let {
    children: t,
    className: n,
    element: i = "div",
    ...r
  } = e;
  return (0, s.jsx)(O, {
    ...r,
    children: e => a.createElement(i, null != n ? {
      ...e,
      className: n
    } : e, t)
  })
}
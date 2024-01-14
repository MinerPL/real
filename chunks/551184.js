"use strict";
l.r(t), l.d(t, {
  default: function() {
    return u
  }
});
var s = l("37983"),
  a = l("884691"),
  n = l("414456"),
  r = l.n(n),
  i = l("77078"),
  c = l("258179");
let o = {
  SMALL: c.sizeSmall,
  MEDIUM: c.sizeMedium,
  LARGE: c.sizeLarge
};
class d extends a.PureComponent {
  calculateScroll() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._scroller;
    if (null == e) return;
    let {
      scrollTop: t
    } = e.getScrollerState(), {
      hideSeparator: l
    } = this.state;
    0 !== t || l ? t > 0 && l && this.setState({
      hideSeparator: !1
    }) : this.setState({
      hideSeparator: !0
    })
  }
  getScroller() {
    return this._scroller
  }
  renderChildren() {
    let {
      hideSeparator: e
    } = this.state;
    return a.Children.map(this.props.children, t => a.isValidElement(t) ? t.type === i.ModalContent || t.type === i.ModalListContent ? a.cloneElement(t, {
      scrollerRef: this.setRef,
      onScroll: this.handleScroll,
      onResize: this.handleScroll
    }) : t.type === i.ModalHeader && e ? a.cloneElement(t, {
      separator: !1
    }) : t : t)
  }
  render() {
    let {
      className: e,
      children: t,
      tag: l,
      size: a,
      fullscreenOnMobile: n,
      ...i
    } = this.props;
    return (0, s.jsx)(l, {
      className: r(c.modal, e, a, {
        [c.fullscreenOnMobile]: n
      }),
      ...i,
      children: this.renderChildren()
    })
  }
  constructor(e) {
    super(e), this._scroller = null, this.setRef = e => {
      this._scroller = e, null != e && this.calculateScroll()
    }, this.handleScroll = e => {
      this.calculateScroll();
      let {
        onScroll: t
      } = this.props;
      null == t || t(e)
    }, this.state = {
      hideSeparator: !1
    }
  }
}
d.Header = i.ModalHeader, d.Footer = i.ModalFooter, d.Content = i.ModalContent, d.ListContent = i.ModalListContent, d.CloseButton = i.ModalCloseButton, d.Sizes = o, d.defaultProps = {
  fullscreenOnMobile: !0,
  size: o.SMALL,
  tag: "div"
};
var u = d
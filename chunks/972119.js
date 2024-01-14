"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
}), s("222007");
var n = s("37983"),
  l = s("884691"),
  a = s("108402"),
  i = s("601680"),
  r = s("831137"),
  o = s("446674"),
  c = s("452804"),
  u = s("915639"),
  d = s("599110"),
  p = s("49111"),
  h = s("782340"),
  N = s("128403");
class m extends l.Component {
  shouldScrollToTop(e) {
    let {
      location: t
    } = e;
    return t.pathname.startsWith(p.Routes.APPLICATION_STORE_LISTING_SKU("")) || t.pathname.startsWith(p.Routes.APPLICATION_STORE_LISTING_APPLICATION(""))
  }
  render() {
    let {
      location: e,
      className: t,
      render: s,
      locale: o
    } = this.props;
    return (0, n.jsx)(r.default, {
      className: t,
      shouldScrollToTop: this.shouldScrollToTop,
      render: (t, r) => (0, n.jsxs)(l.Fragment, {
        children: [(0, n.jsx)(i.default, {
          avoidRouter: !0,
          locale: o,
          authRedirectTo: e.pathname,
          track: d.default.track,
          className: N.marketingHeader,
          onChangeLocale: this.handleHeaderLocaleChange,
          mobileClassName: N.marketingHeader,
          openNavAriaLabel: h.default.Messages.OPEN_NAVIGATION,
          hideNavAriaLabel: h.default.Messages.HIDE_NAVIGATION,
          skipToContentLabel: h.default.Messages.SKIP_TO_CONTENT
        }), s(t, r), (0, n.jsx)(a.default, {
          locale: o,
          authRedirectTo: e.pathname,
          avoidRouter: !0,
          track: d.default.track,
          className: N.marketingFooter
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), this.handleHeaderLocaleChange = e => {
      e !== this.props.locale && c.default.overrideLocale(e)
    }
  }
}
var g = o.default.connectStores([u.default], () => ({
  locale: u.default.locale
}))(m)
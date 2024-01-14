"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
});
var n, l = s("37983"),
  a = s("884691"),
  i = s("421898"),
  r = s.n(i),
  o = s("518066"),
  c = s("719562"),
  u = s("717443"),
  d = s("792788"),
  p = s("813653");
let h = null;
n = class extends a.PureComponent {
  render() {
    let {
      token: e,
      className: t,
      onChangeLocale: s,
      mainContentId: n,
      mobileClassName: i,
      avoidRouter: o,
      authRedirectTo: N,
      openNavAriaLabel: m,
      hideNavAriaLabel: g,
      skipToContentLabel: k
    } = this.props;
    return null == h ? null : (0, l.jsxs)(a.Fragment, {
      children: [(0, l.jsx)(c.default, {
        className: r(p.desktopHeader, t),
        TrackClick: h,
        token: e,
        avoidRouter: o,
        authRedirectTo: N,
        NavigationMessages: d.default.Messages.Navigation,
        onChangeLocale: s,
        mainContentId: n,
        skipToContentLabel: k
      }), (0, l.jsx)(u.default, {
        className: r(p.mobileHeader, i),
        token: e,
        avoidRouter: o,
        TrackClick: h,
        NavigationMessages: d.default.Messages.Navigation,
        onChangeLocale: s,
        openNavAriaLabel: m,
        hideNavAriaLabel: g
      })]
    })
  }
  constructor(e) {
    super(e), null != e.locale && d.default.setLocale(e.locale), h = t => (0, l.jsx)(o.default, {
      track: e.track,
      trackOutboundLink: e.trackOutboundLink,
      ...t
    })
  }
}
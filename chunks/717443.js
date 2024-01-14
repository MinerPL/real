"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
}), s("222007");
var n, l = s("37983"),
  a = s("884691"),
  i = s("421898"),
  r = s.n(i),
  o = s("773179"),
  c = s.n(o),
  u = s("353386"),
  d = s("146230"),
  p = s("904934"),
  h = s("156713"),
  N = s("843455"),
  m = s("352220"),
  g = s("321994");
let k = N.WebAnalyticsEvents.MAIN_NAVIGATION_MENU;
n = class extends a.PureComponent {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown)
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown)
  }
  render() {
    let {
      className: e,
      NavigationMessages: t,
      TrackClick: s,
      onChangeLocale: n,
      avoidRouter: a,
      openNavAriaLabel: i,
      hideNavAriaLabel: o
    } = this.props, {
      menuOpen: c
    } = this.state;
    return (0, l.jsx)("header", {
      className: r(g.header, e),
      children: (0, l.jsxs)("nav", {
        className: g.headerInner,
        children: [(0, l.jsx)(s, {
          tag: "div",
          eventName: k,
          className: g.headerLogo,
          data: {
            linkClicked: "logo"
          },
          children: (0, l.jsx)(d.default, {
            avoidRouter: a,
            className: g.logoWrapper,
            to: N.WebRoutes.INDEX,
            from: N.WebAnalyticsEvents.MAIN_NAVIGATION_MENU,
            children: (0, l.jsx)("img", {
              className: g.logo,
              src: m.Images.ASSET_LOGO_DISCORD_SVG,
              alt: "Discord",
              itemProp: "logo"
            })
          })
        }), (0, l.jsx)(s, {
          tag: "div",
          className: g.hamburgerButton,
          eventName: k,
          data: {
            linkClicked: "mobile-menu"
          },
          children: (0, l.jsx)(u.default, {
            open: c,
            "aria-haspopup": "true",
            "aria-label": c ? o : i,
            "aria-expanded": c,
            "aria-controls": this._mainNavId,
            onClick: this.toggleMenu
          })
        }), (0, l.jsxs)("ul", {
          className: c ? g.headerNavOpen : g.headerNav,
          children: [(0, l.jsx)(h.default, {
            avoidRouter: a,
            TrackClick: s,
            styles: g,
            isMobile: !0,
            isVisible: c,
            NavigationMessages: t
          }), (0, l.jsx)(p.default, {
            onChange: n
          })]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), this._mainNavId = c.uniqueId("mainNav"), this.state = {
      menuOpen: !1
    }, this.toggleMenu = () => {
      this.setState({
        menuOpen: !this.state.menuOpen
      })
    }, this.handleKeyDown = e => {
      let {
        menuOpen: t
      } = this.state;
      ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), t && this.toggleMenu())
    }
  }
}
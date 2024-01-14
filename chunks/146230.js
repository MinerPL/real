"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
}), s("70102"), s("222007");
var n = s("37983"),
  l = s("884691"),
  a = s("294094"),
  i = s("742868");
class r extends l.Component {
  render() {
    let {
      to: e,
      from: t,
      isNavLink: s,
      children: l,
      tabIndex: a = 0,
      role: r,
      className: o
    } = this.props;
    if (null == e) throw Error("Missing 'to' route prop in TrackLink component");
    let c = "string" == typeof e ? e : e.pathname,
      u = "string" == typeof e ? "" : e.hash,
      d = "string" == typeof e ? "" : e.search;
    return s ? (0, n.jsx)(i.NavLink, {
      className: o,
      tabIndex: a,
      onClick: this.handleOnClick,
      to: {
        pathname: c,
        hash: u,
        search: d,
        state: {
          previousLinkLocation: t
        }
      },
      role: r,
      children: l
    }) : (0, n.jsx)(i.Link, {
      className: o,
      tabIndex: a,
      onClick: this.handleOnClick,
      to: {
        pathname: c,
        hash: u,
        search: d,
        state: {
          previousLinkLocation: t
        }
      },
      role: r,
      children: l
    })
  }
  constructor(...e) {
    super(...e), this.handleOnClick = () => {
      let {
        to: e,
        avoidRouter: t,
        onClick: s,
        history: n
      } = this.props;
      if (null != s) s();
      else if (t) {
        let t = "string" == typeof e ? (0, a.createLocation)(e, null, void 0, n.location) : e,
          s = n.createHref(t);
        window.location = s
      }
    }
  }
}
var o = (0, i.withRouter)(r)
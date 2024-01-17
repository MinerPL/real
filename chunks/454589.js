"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var i = n("37983"),
  s = n("884691"),
  r = n("414456"),
  l = n.n(r),
  a = n("77078"),
  u = n("145131"),
  o = n("461380"),
  c = n("298619");
class d extends s.PureComponent {
  handleClick(e) {
    let {
      onBreadcrumbClick: t
    } = this.props;
    null != t && t(e)
  }
  render() {
    let {
      breadcrumbs: e,
      className: t
    } = this.props, n = e.map(this.renderBreadcrumb);
    return (0, i.jsx)(u.default, {
      justify: u.default.Justify.START,
      className: l(c.breadcrumbs, t),
      children: n
    })
  }
  constructor(...e) {
    super(...e), this.renderBreadcrumb = (e, t) => {
      let {
        activeId: n,
        onBreadcrumbClick: s,
        breadcrumbs: r,
        renderCustomBreadcrumb: u,
        separatorClassName: d
      } = this.props, f = e.id === n, p = t === r.length - 1, h = null != u ? u(e, f) : (0, i.jsx)("span", {
        className: l(c.breadcrumb, {
          [c.activeBreadcrumb]: f,
          [c.interactiveBreadcrumb]: null != s
        }),
        children: e.label
      });
      return (0, i.jsxs)("div", {
        className: l(c.breadcrumbWrapper, {
          [c.breadcrumbFinalWrapper]: p
        }),
        children: [null != s ? (0, i.jsx)(a.Clickable, {
          tag: "span",
          onClick: () => this.handleClick(e),
          className: c.breadcrumbClickWrapper,
          children: h
        }) : h, p ? null : (0, i.jsx)(o.default, {
          className: l(c.breadcrumbArrow, d),
          direction: o.default.Directions.RIGHT
        })]
      }, e.id)
    }
  }
}
var f = d
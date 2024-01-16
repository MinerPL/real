"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var r = n("37983"),
  u = n("884691"),
  i = n("414456"),
  l = n.n(i),
  a = n("77078"),
  o = n("145131"),
  s = n("461380"),
  c = n("298619");
class d extends u.PureComponent {
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
    return (0, r.jsx)(o.default, {
      justify: o.default.Justify.START,
      className: l(c.breadcrumbs, t),
      children: n
    })
  }
  constructor(...e) {
    super(...e), this.renderBreadcrumb = (e, t) => {
      let {
        activeId: n,
        onBreadcrumbClick: u,
        breadcrumbs: i,
        renderCustomBreadcrumb: o,
        separatorClassName: d
      } = this.props, _ = e.id === n, E = t === i.length - 1, f = null != o ? o(e, _) : (0, r.jsx)("span", {
        className: l(c.breadcrumb, {
          [c.activeBreadcrumb]: _,
          [c.interactiveBreadcrumb]: null != u
        }),
        children: e.label
      });
      return (0, r.jsxs)("div", {
        className: l(c.breadcrumbWrapper, {
          [c.breadcrumbFinalWrapper]: E
        }),
        children: [null != u ? (0, r.jsx)(a.Clickable, {
          tag: "span",
          onClick: () => this.handleClick(e),
          className: c.breadcrumbClickWrapper,
          children: f
        }) : f, E ? null : (0, r.jsx)(s.default, {
          className: l(c.breadcrumbArrow, d),
          direction: s.default.Directions.RIGHT
        })]
      }, e.id)
    }
  }
}
var _ = d
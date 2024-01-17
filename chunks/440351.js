"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var i = n("37983"),
  s = n("884691"),
  r = n("414456"),
  l = n.n(r),
  a = n("77078"),
  u = n("145131"),
  o = n("296165"),
  c = n("926622");
class d extends s.PureComponent {
  render() {
    let {
      title: e,
      description: t,
      agreement: n,
      disagreement: s,
      onAgree: r,
      onDisagree: d,
      imageClassName: f
    } = this.props;
    return (0, i.jsxs)(u.default, {
      className: o.gatedContent,
      justify: u.default.Justify.CENTER,
      align: u.default.Align.CENTER,
      direction: u.default.Direction.VERTICAL,
      children: [(0, i.jsx)("div", {
        className: l(o.image, f)
      }), (0, i.jsx)("div", {
        className: l(o.title, c.marginBottom8),
        children: e
      }), (0, i.jsx)("div", {
        className: l(o.description, c.marginBottom20),
        children: t
      }), (0, i.jsxs)(u.default, {
        justify: u.default.Justify.CENTER,
        align: u.default.Align.CENTER,
        grow: 0,
        children: [null != s ? (0, i.jsx)(a.Button, {
          className: o.action,
          size: a.ButtonSizes.LARGE,
          color: a.ButtonColors.PRIMARY,
          onClick: d,
          children: s
        }) : null, null != n ? (0, i.jsx)(a.Button, {
          className: o.action,
          color: a.Button.Colors.RED,
          size: a.ButtonSizes.LARGE,
          onClick: r,
          children: n
        }) : null]
      })]
    })
  }
}
var f = d
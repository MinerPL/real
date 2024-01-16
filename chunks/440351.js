"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  l = n.n(s),
  a = n("77078"),
  u = n("145131"),
  o = n("296165"),
  c = n("926622");
class d extends r.PureComponent {
  render() {
    let {
      title: e,
      description: t,
      agreement: n,
      disagreement: r,
      onAgree: s,
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
        children: [null != r ? (0, i.jsx)(a.Button, {
          className: o.action,
          size: a.ButtonSizes.LARGE,
          color: a.ButtonColors.PRIMARY,
          onClick: d,
          children: r
        }) : null, null != n ? (0, i.jsx)(a.Button, {
          className: o.action,
          color: a.Button.Colors.RED,
          size: a.ButtonSizes.LARGE,
          onClick: s,
          children: n
        }) : null]
      })]
    })
  }
}
var f = d
"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var i = s("37983"),
  n = s("884691"),
  a = s("414456"),
  l = s.n(a),
  o = s("77078"),
  r = s("145131"),
  u = s("296165"),
  d = s("926622");
class c extends n.PureComponent {
  render() {
    let {
      title: e,
      description: t,
      agreement: s,
      disagreement: n,
      onAgree: a,
      onDisagree: c,
      imageClassName: f
    } = this.props;
    return (0, i.jsxs)(r.default, {
      className: u.gatedContent,
      justify: r.default.Justify.CENTER,
      align: r.default.Align.CENTER,
      direction: r.default.Direction.VERTICAL,
      children: [(0, i.jsx)("div", {
        className: l(u.image, f)
      }), (0, i.jsx)("div", {
        className: l(u.title, d.marginBottom8),
        children: e
      }), (0, i.jsx)("div", {
        className: l(u.description, d.marginBottom20),
        children: t
      }), (0, i.jsxs)(r.default, {
        justify: r.default.Justify.CENTER,
        align: r.default.Align.CENTER,
        grow: 0,
        children: [null != n ? (0, i.jsx)(o.Button, {
          className: u.action,
          size: o.ButtonSizes.LARGE,
          color: o.ButtonColors.PRIMARY,
          onClick: c,
          children: n
        }) : null, null != s ? (0, i.jsx)(o.Button, {
          className: u.action,
          color: o.Button.Colors.RED,
          size: o.ButtonSizes.LARGE,
          onClick: a,
          children: s
        }) : null]
      })]
    })
  }
}
var f = c
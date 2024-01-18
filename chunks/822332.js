"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("77078"),
  o = n("782340"),
  u = n("440318");
let d = {
  BLOCK: u.block,
  INLINE: u.inline
};
class c extends l.PureComponent {
  render() {
    let {
      children: e,
      className: t,
      textClassName: n,
      type: l = d.BLOCK,
      style: s
    } = this.props;
    return (0, a.jsxs)("div", {
      className: i(t, l),
      style: s,
      children: [(0, a.jsxs)(r.Text, {
        variant: "text-sm/bold",
        tag: "div",
        color: "text-positive",
        className: u.pro,
        children: [o.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
      }), (0, a.jsx)(r.Text, {
        className: i(u.tip, n),
        variant: "text-sm/normal",
        children: e
      })]
    })
  }
}
c.Types = d;
var f = c
"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("37983"),
  n = s("884691"),
  r = s("895530"),
  l = s("782340"),
  i = s("473911");
class u extends n.PureComponent {
  render() {
    let {
      className: e,
      sku: t
    } = this.props;
    return null == t.legalNotice ? null : (0, a.jsxs)("div", {
      className: e,
      children: [(0, a.jsx)(r.default, {
        children: l.default.Messages.APPLICATION_STORE_SECTION_TITLE_COPYRIGHT
      }), (0, a.jsx)("div", {
        className: i.content,
        children: t.legalNotice
      })]
    })
  }
}
var o = u
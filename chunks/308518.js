"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("895530"),
  i = s("782340"),
  r = s("473911");
class u extends n.PureComponent {
  render() {
    let {
      className: e,
      sku: t
    } = this.props;
    return null == t.legalNotice ? null : (0, a.jsxs)("div", {
      className: e,
      children: [(0, a.jsx)(l.default, {
        children: i.default.Messages.APPLICATION_STORE_SECTION_TITLE_COPYRIGHT
      }), (0, a.jsx)("div", {
        className: r.content,
        children: t.legalNotice
      })]
    })
  }
}
var o = u
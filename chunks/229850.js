"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var n = a("37983");
a("884691");
var s = a("414456"),
  l = a.n(s),
  r = a("77078"),
  i = a("461380"),
  c = a("133251");

function o(e) {
  let {
    options: t,
    onClick: a,
    className: s,
    optionClassName: o,
    hideCaret: d
  } = e;
  return (0, n.jsx)("div", {
    className: l(c.root, s),
    children: t.map((e, t) => (0, n.jsxs)(r.Clickable, {
      onClick: () => a(e),
      className: l(c.option, o),
      children: [(0, n.jsx)(r.Text, {
        className: c.text,
        color: "none",
        variant: "text-md/normal",
        children: e.label
      }), !(null == d ? void 0 : d(e)) && (0, n.jsx)(i.default, {
        className: c.caret,
        direction: i.default.Directions.RIGHT
      })]
    }, t))
  })
}
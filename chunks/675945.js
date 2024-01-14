"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
});
var i = l("37983");
l("884691");
var a = l("414456"),
  n = l.n(a),
  s = l("77078"),
  r = l("519902");

function c(e) {
  let {
    supportedLanguages: t
  } = e;
  return (0, i.jsx)("ul", {
    className: r.outerContainer,
    children: t.map(e => (0, i.jsx)("li", {
      className: n(r.innerContainer, r.languageItem),
      children: (0, i.jsx)(s.Text, {
        variant: "text-md/normal",
        children: e
      })
    }, e))
  })
}
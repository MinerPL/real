"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  l = s.n(n),
  i = s("77078"),
  r = s("694187");

function o(e) {
  let {
    buttonCTA: t,
    onChange: s,
    "aria-label": n,
    multiple: o = !1,
    disabled: d = !1,
    submitting: u = !1,
    ...c
  } = e;
  return (0, a.jsx)(i.FocusRing, {
    within: !0,
    children: (0, a.jsxs)("div", {
      className: l((0, i.getButtonStyle)({
        ...c,
        submitting: u,
        disabled: d
      })),
      style: {
        width: "max-content"
      },
      "aria-disabled": d,
      children: [(0, a.jsx)("span", {
        "aria-hidden": !0,
        children: t
      }), (0, a.jsx)(r.default, {
        tabIndex: 0,
        onChange: s,
        multiple: o,
        "aria-label": null != n ? n : t,
        disabled: d
      })]
    })
  })
}
"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  l = s.n(n),
  i = s("77078"),
  r = s("797944"),
  o = s("893407");

function d(e) {
  let {
    title: t,
    description: s,
    action: n,
    highlightColor: d = r.HighlightColors.NONE,
    selected: u = !1,
    subsection: c = null,
    onClick: E,
    className: _,
    disabled: T
  } = e;
  return (0, a.jsxs)("div", {
    className: l(o.container, _),
    children: [(0, a.jsx)(i.Clickable, {
      className: l(o.clickableContainer, {
        [o.noAction]: null == E,
        [o.disabled]: T
      }, _),
      onClick: T ? void 0 : E,
      children: (0, a.jsxs)("div", {
        className: l(o.backgroundModifierContainer, o[d], {
          [o.selected]: u,
          [o.disabled]: T,
          [o.noAction]: null == E
        }),
        children: [(0, a.jsxs)("div", {
          className: o.settingsDescriptionContainer,
          children: [(0, a.jsx)(i.Text, {
            variant: "text-sm/medium",
            color: "interactive-active",
            children: t
          }), (0, a.jsx)(i.Text, {
            variant: "text-sm/normal",
            color: "interactive-normal",
            className: o.description,
            children: s
          })]
        }), (0, a.jsx)("div", {
          className: o.action,
          children: n
        })]
      })
    }), null != c && (0, a.jsx)("div", {
      className: o.subsectionContainer,
      children: c
    })]
  })
}
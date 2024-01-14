"use strict";
s.r(t), s.d(t, {
  WarningBlockButtonPosition: function() {
    return f
  },
  default: function() {
    return E
  }
});
var l = s("37983");
s("884691");
var n = s("414456"),
  r = s.n(n),
  o = s("819855"),
  a = s("77078"),
  i = s("841098"),
  u = s("223984"),
  c = s("417186"),
  d = s("946790");
let f = {
  RIGHT: d.horizontalStatusWarningBlock,
  BOTTOM: d.verticalStatusWarningBlock
};

function E(e) {
  let {
    className: t,
    color: s = u.MessageBlockColors.YELLOW,
    buttonPosition: n = f.BOTTOM,
    notice: E,
    ctaLabel: _,
    ctaLoading: I,
    ctaDisabled: C,
    ctaClassName: L,
    onClick: h
  } = e, N = (0, i.default)();
  return (0, l.jsx)(c.default, {
    className: r(d.statusWarningBlock, {
      [d.statusWarningBlockWithCta]: null != _
    }, t),
    color: (0, o.isThemeDark)(N) ? s : u.MessageBlockColors.BROWN,
    children: (0, l.jsxs)("div", {
      className: n,
      children: [(0, l.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "interactive-active",
        children: E
      }), null != _ && null != h && (0, l.jsx)("div", {
        className: d.ctaButtonContainer,
        children: (0, l.jsx)(a.Button, {
          className: r(d.ctaButton, (0, o.isThemeDark)(N) ? void 0 : d.ctaBlackButton, L),
          color: (0, o.isThemeDark)(N) ? a.Button.Colors.WHITE : a.Button.Colors.CUSTOM,
          size: a.ButtonSizes.MEDIUM,
          onClick: h,
          disabled: C,
          submitting: I,
          children: (0, l.jsx)(a.Text, {
            className: d.ctaButtonText,
            variant: "text-sm/medium",
            children: _
          })
        })
      })]
    })
  })
}
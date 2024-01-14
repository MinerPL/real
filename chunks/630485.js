"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var n = s("37983");
s("884691");
var a = s("77078"),
  l = s("449918"),
  i = s("119035"),
  r = s("65626"),
  o = s("782340"),
  u = s("936345");

function d(e) {
  let {
    channelId: t
  } = e, s = (0, r.default)(t), d = null != s && (s.value > 0 || (null == s ? void 0 : s.multiplier) > 1);
  if (!d) return null;
  let {
    multiplier: c
  } = s, {
    color: h
  } = (0, i.getComboStyles)(c);
  return (0, n.jsxs)("div", {
    className: u.container,
    children: [(0, n.jsx)(a.Text, {
      variant: "text-xs/normal",
      children: o.default.Messages.POGGERMODE_COMBO_BAR
    }), (0, n.jsx)(a.Progress, {
      foregroundColor: (0, l.getColor)(h),
      className: u.progress,
      size: a.Progress.Sizes.LARGE,
      percent: 100 * (0, i.getComboPercentage)(s),
      animate: !0
    })]
  })
}
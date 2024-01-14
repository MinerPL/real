"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("77078"),
  o = s("925993"),
  d = s("461380"),
  u = s("556081"),
  c = s("216947"),
  E = s("49111"),
  _ = s("782340"),
  T = s("642622");

function I(e) {
  let {
    guild: t
  } = e, l = t.verificationLevel, I = n.useMemo(() => (0, o.getVerificationLevelText)(l), [l]);
  return (0, a.jsxs)(r.Clickable, {
    onClick: () => (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await s.el("161069").then(s.bind(s, "161069"));
      return s => (0, a.jsx)(e, {
        ...s,
        guild: t,
        hideColors: !0
      })
    }),
    className: i(T.simpleItemWrapper, T.clickable),
    children: [(0, a.jsxs)("div", {
      className: T.itemContent,
      children: [(0, a.jsx)(r.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: _.default.Messages.FORM_LABEL_VERIFICATION_LEVEL
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: _.default.Messages.GUILD_SETTINGS_SAFETY_VERIFICATION_DESCRIPTION
      }), (0, a.jsx)("div", {
        className: T.pillRow,
        children: (0, a.jsxs)(r.Text, {
          variant: "text-xs/medium",
          color: "interactive-normal",
          className: T.valuePill,
          children: [l === E.VerificationLevels.VERY_HIGH ? (0, a.jsx)(c.default, {
            width: 16,
            height: 16
          }) : (0, a.jsx)(u.default, {
            width: 16,
            height: 16
          }), I]
        })
      })]
    }), (0, a.jsx)(d.default, {
      height: 24,
      width: 24,
      direction: d.default.Directions.RIGHT,
      className: T.caret
    })]
  })
}
"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  l = s.n(n),
  i = s("866227"),
  r = s.n(i),
  o = s("77078"),
  d = s("888400"),
  u = s("106413"),
  c = s("408792"),
  S = s("539830");

function E(e) {
  let {
    achievementId: t,
    dateUnlocked: s
  } = e, n = (0, u.getPoggermodeAchievementData)(t);
  if (null == n) return null;
  let i = null != s,
    {
      name: E,
      description: f,
      hideDescriptionUntilUnlock: T,
      onAction: m
    } = n,
    _ = T && !i,
    g = i ? "header-primary" : "text-muted",
    h = i ? "header-secondary" : "text-muted",
    I = r(s),
    N = null != m && i,
    p = N ? o.Clickable : "div";
  return (0, a.jsxs)(p, {
    className: l(S.container, N && S.actionable),
    onClick: () => {
      N && m()
    },
    children: [(0, a.jsx)("div", {
      className: S.iconContainer,
      children: (0, a.jsx)(c.default, {
        achievementId: t,
        size: c.default.Sizes.SIZE_40,
        unlocked: i
      })
    }), (0, a.jsxs)("div", {
      className: S.nameContainer,
      children: [null != s && (0, a.jsx)(o.Text, {
        variant: "text-xxs/semibold",
        color: "text-muted",
        className: S.unlocked,
        children: (0, d.calendarFormat)(I)
      }), (0, a.jsx)(o.Text, {
        variant: "text-md/medium",
        color: g,
        children: E()
      }), (0, a.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: h,
        children: _ ? "?????" : f()
      })]
    })]
  })
}
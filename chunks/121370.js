"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("222007");
var l = n("37983");
n("884691");
var r = n("414456"),
  i = n.n(r),
  s = n("969176"),
  a = n.n(s),
  o = n("669491"),
  u = n("77078"),
  c = n("462274"),
  d = n("217513"),
  f = n("528438"),
  h = n("719923"),
  E = n("409214"),
  p = n("570697"),
  C = n("782340"),
  _ = n("431416");

function m(e) {
  let {
    user: t,
    pendingAvatar: n,
    pendingColors: r,
    onThemeColorsChange: s,
    preventDisabled: m,
    guildId: v,
    className: I,
    showPremiumIcon: g = !0,
    showResetThemeButton: S = !1,
    forcedDivider: R
  } = e, N = (0, d.default)(t.id, v), [L, T] = (0, f.default)(t, N, {
    pendingThemeColors: r,
    isPreview: !0
  }), x = h.default.canUsePremiumProfileCustomization(t), A = null != n ? n : t.getAvatarURL(v, 80), M = (0, u.useToken)(o.default.unsafe_rawColors.PRIMARY_530).hex(), y = (0, c.useAvatarColors)(A, M, !1);
  if (null == L || null == T) return null;
  let P = e => {
    let t = a(e, null == N ? void 0 : N.themeColors);
    s(t ? void 0 : e)
  };
  return (0, l.jsx)(p.default, {
    title: C.default.Messages.USER_SETTINGS_PROFILE_THEME,
    disabled: !x && !m,
    className: i(_.profileThemesSection, I),
    showPremiumIcon: g,
    forcedDivider: R,
    children: (0, l.jsxs)("div", {
      className: _.sectionContainer,
      children: [(0, l.jsx)("div", {
        className: _.sparkleContainer,
        children: (0, l.jsx)(E.default, {
          onChange: e => P([e, T]),
          color: L,
          suggestedColors: y,
          showEyeDropper: !0,
          label: (0, l.jsx)(u.Text, {
            className: _.colorSwatchLabel,
            color: "header-secondary",
            variant: "text-xs/normal",
            "aria-hidden": !0,
            children: C.default.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY
          })
        })
      }), (0, l.jsx)("div", {
        className: _.sparkleContainer,
        children: (0, l.jsx)(E.default, {
          onChange: e => P([L, e]),
          color: T,
          suggestedColors: y,
          showEyeDropper: !0,
          label: (0, l.jsx)(u.Text, {
            className: _.colorSwatchLabel,
            color: "header-secondary",
            variant: "text-xs/normal",
            "aria-hidden": !0,
            children: C.default.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
          })
        })
      }), S && null != v && (0, l.jsx)(u.Button, {
        className: _.resetButton,
        color: u.Button.Colors.PRIMARY,
        look: u.Button.Looks.LINK,
        size: u.Button.Sizes.SMALL,
        onClick: () => P([null, null]),
        children: C.default.Messages.USER_SETTINGS_RESET_PROFILE_THEME
      })]
    })
  })
}
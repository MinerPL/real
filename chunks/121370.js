"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007");
var l = n("37983");
n("884691");
var i = n("414456"),
  r = n.n(i),
  s = n("969176"),
  a = n.n(s),
  o = n("669491"),
  u = n("77078"),
  c = n("462274"),
  d = n("217513"),
  f = n("528438"),
  h = n("719923"),
  E = n("409214"),
  C = n("570697"),
  p = n("782340"),
  _ = n("431416");

function v(e) {
  let {
    user: t,
    pendingAvatar: n,
    pendingColors: i,
    onThemeColorsChange: s,
    preventDisabled: v,
    guildId: m,
    className: R,
    showPremiumIcon: I = !0,
    showResetThemeButton: g = !1,
    forcedDivider: S
  } = e, N = (0, d.default)(t.id, m), [L, T] = (0, f.default)(t, N, {
    pendingThemeColors: i,
    isPreview: !0
  }), x = h.default.canUsePremiumProfileCustomization(t), A = null != n ? n : t.getAvatarURL(m, 80), M = (0, u.useToken)(o.default.unsafe_rawColors.PRIMARY_530).hex(), P = (0, c.useAvatarColors)(A, M, !1);
  if (null == L || null == T) return null;
  let b = e => {
    let t = a(e, null == N ? void 0 : N.themeColors);
    s(t ? void 0 : e)
  };
  return (0, l.jsx)(C.default, {
    title: p.default.Messages.USER_SETTINGS_PROFILE_THEME,
    disabled: !x && !v,
    className: r(_.profileThemesSection, R),
    showPremiumIcon: I,
    forcedDivider: S,
    children: (0, l.jsxs)("div", {
      className: _.sectionContainer,
      children: [(0, l.jsx)("div", {
        className: _.sparkleContainer,
        children: (0, l.jsx)(E.default, {
          onChange: e => b([e, T]),
          color: L,
          suggestedColors: P,
          showEyeDropper: !0,
          label: (0, l.jsx)(u.Text, {
            className: _.colorSwatchLabel,
            color: "header-secondary",
            variant: "text-xs/normal",
            "aria-hidden": !0,
            children: p.default.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY
          })
        })
      }), (0, l.jsx)("div", {
        className: _.sparkleContainer,
        children: (0, l.jsx)(E.default, {
          onChange: e => b([L, e]),
          color: T,
          suggestedColors: P,
          showEyeDropper: !0,
          label: (0, l.jsx)(u.Text, {
            className: _.colorSwatchLabel,
            color: "header-secondary",
            variant: "text-xs/normal",
            "aria-hidden": !0,
            children: p.default.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
          })
        })
      }), g && null != m && (0, l.jsx)(u.Button, {
        className: _.resetButton,
        color: u.Button.Colors.PRIMARY,
        look: u.Button.Looks.LINK,
        size: u.Button.Sizes.SMALL,
        onClick: () => b([null, null]),
        children: p.default.Messages.USER_SETTINGS_RESET_PROFILE_THEME
      })]
    })
  })
}
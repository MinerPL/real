"use strict";
l.r(r), l.d(r, {
  default: function() {
    return c
  }
}), l("222007");
var t = l("884691"),
  o = l("509043"),
  i = l("446674"),
  n = l("841098"),
  a = l("206230"),
  s = l("388491"),
  u = l("528438");
let f = ["--profile-gradient-primary-color", "--profile-gradient-secondary-color", "--profile-gradient-button-color", "--profile-gradient-overlay-color", "--profile-body-background-color", "--profile-body-divider-color", "--profile-avatar-border-color", "--profile-message-input-border-color", "--profile-note-background-color", "--profile-body-background-hover", "--account-profile-modal-list-item-hover", "--profile-role-pill-background-color", "--profile-role-pill-border-color"];

function d(e, r, l) {
  var t;
  null == e || null === (t = e.current) || void 0 === t || t.style.setProperty(r, null != l ? l : null)
}

function c(e, r) {
  let {
    themeElementRef: l,
    pendingThemeColors: c,
    isPreview: P,
    useDefaultClientTheme: E
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, [T, p] = (0, u.default)(e, r, {
    pendingThemeColors: c,
    isPreview: P
  }), [O, U, _] = (0, i.useStateFromStoresArray)([a.default], () => [a.default.desaturateUserColors, a.default.saturation, a.default.syncProfileThemeWithUserTheme]), h = (0, n.default)(), y = t.useCallback(() => _ || E ? h : (0, s.getProfileTheme)(T), [E, _, h, T]), [m, v] = t.useState(y()), S = (0, s.useProfileThemeValues)(m), I = (0, s.useDividerColor)(m, T), N = (0, s.useMessageInputBorderColor)(m, p), A = t.useCallback((e, r) => (0, o.int2hsl)(e, O, null, r), [O]);
  t.useEffect(() => {
    v(y())
  }, [T, _, h, E, y]);
  let L = (0, s.useAvatarBorderColor)(m, T, _),
    g = null != L ? (0, o.int2hsl)(L, !1, O ? U : null) : null,
    R = e => f.forEach(r => {
      e.style.removeProperty(r)
    });
  return t.useEffect(() => {
    if (null != T && null != p && null != m && null != L && null != I && null != N) {
      let e = _ && m !== h ? null == S ? void 0 : S.overlaySyncedWithUserTheme : null == S ? void 0 : S.overlay;
      d(l, "--profile-gradient-primary-color", A(T)), d(l, "--profile-gradient-secondary-color", A(p)), d(l, "--profile-gradient-button-color", A((0, s.calculateButtonColor)(T))), d(l, "--profile-gradient-overlay-color", e), d(l, "--profile-body-background-color", null == S ? void 0 : S.sectionBox), d(l, "--profile-body-background-hover", null == S ? void 0 : S.profileBodyBackgroundHover), d(l, "--profile-body-divider-color", A(I, null == S ? void 0 : S.dividerOpacity)), d(l, "--profile-avatar-border-color", A(L)), d(l, "--profile-message-input-border-color", A(N)), d(l, "--profile-note-background-color", null == S ? void 0 : S.noteBackgroundColor), d(l, "--profile-role-pill-background-color", null == S ? void 0 : S.rolePillBackgroundColor), d(l, "--profile-role-pill-border-color", null == S ? void 0 : S.rolePillBorderColor)
    } else(null == l ? void 0 : l.current) != null && R(null == l ? void 0 : l.current)
  }, [T, p, L, m, h, l, A, _, I, null == S ? void 0 : S.overlaySyncedWithUserTheme, null == S ? void 0 : S.overlay, null == S ? void 0 : S.sectionBox, null == S ? void 0 : S.profileBodyBackgroundHover, null == S ? void 0 : S.dividerOpacity, null == S ? void 0 : S.noteBackgroundColor, null == S ? void 0 : S.rolePillBackgroundColor, null == S ? void 0 : S.rolePillBorderColor, N]), {
    profileTheme: null != m ? m : h,
    primaryProfileColor: T,
    avatarBorderColor: g
  }
}
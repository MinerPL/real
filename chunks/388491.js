"use strict";
n.r(e), n.d(e, {
  useProfileThemeValues: function() {
    return s
  },
  getProfileTheme: function() {
    return S
  },
  getValueInColorGradientByPercentage: function() {
    return c
  },
  useAvatarBorderColor: function() {
    return N
  },
  calculateButtonColor: function() {
    return f
  },
  useMessageInputBorderColor: function() {
    return D
  },
  useDividerColor: function() {
    return G
  }
}), n("222007");
var r = n("884691"),
  o = n("917351"),
  u = n("509043"),
  I = n("65597"),
  i = n("669491"),
  T = n("819855"),
  l = n("206230"),
  E = n("449918"),
  _ = n("172182"),
  a = n("49111");

function s(t) {
  let e = (0, I.default)([l.default], () => l.default.saturation);
  return (0, r.useMemo)(() => null == t ? null : {
    overlaySyncedWithUserTheme: i.default.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME.resolve({
      theme: t,
      saturation: e
    }).hsl(),
    overlay: i.default.colors.PROFILE_GRADIENT_OVERLAY.resolve({
      theme: t,
      saturation: e
    }).hsl(),
    sectionBox: i.default.colors.PROFILE_GRADIENT_SECTION_BOX.resolve({
      theme: t,
      saturation: e
    }).hsl(),
    messageInputBorder: i.default.colors.PROFILE_GRADIENT_MESSAGE_INPUT_BORDER.resolve({
      theme: t,
      saturation: e
    }).hsl(),
    dividerOpacity: t === i.default.themes.DARK ? .24 : .12,
    noteBackgroundColor: i.default.colors.PROFILE_GRADIENT_NOTE_BACKGROUND.resolve({
      theme: t,
      saturation: e
    }).hsl(),
    profileBodyBackgroundHover: i.default.colors.PROFILE_GRADIENT_PROFILE_BODY_BACKGROUND_HOVER.resolve({
      theme: t,
      saturation: e
    }).hsl(),
    rolePillBackgroundColor: i.default.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND.resolve({
      theme: t,
      saturation: e
    }).hsl(),
    rolePillBorderColor: i.default.colors.PROFILE_GRADIENT_ROLE_PILL_BORDER.resolve({
      theme: t,
      saturation: e
    }).hsl(),
    icon: i.default.colors.INTERACTIVE_NORMAL.resolve({
      theme: t,
      saturation: e
    }).hsl()
  }, [t, e])
}

function S(t) {
  if (null == t) return null;
  let e = (0, u.getDarkness)(t);
  return e > .5 ? a.ThemeTypes.DARK : a.ThemeTypes.LIGHT
}

function c(t, e, n) {
  let r = n / 100,
    o = 1 - r;
  return [Math.round(t[0] * o + e[0] * r), Math.round(t[1] * o + e[1] * r), Math.round(t[2] * o + e[2] * r)]
}

function d(t, e) {
  let n = (0, u.int2rgbArray)(t);
  if (null == e) return 0;
  let r = _.default.parseString(e);
  if (null == r) return 0;
  let o = [r.red, r.green, r.blue],
    I = [n[0], n[1], n[2]],
    i = r.alpha,
    [T, l, E] = o.map((t, e) => Math.floor(i * t + (1 - i) * I[e]));
  return (0, u.rgb2int)("rgba(".concat(T, ", ").concat(l, ", ").concat(E, ")"))
}

function N(t, e, n) {
  let r = s(t);
  return null == r || null == e ? null : d(e, n ? r.overlaySyncedWithUserTheme : r.overlay)
}
let f = (0, o.memoize)(t => {
  let e = (0, T.getContrastingColor)(t, {
    base: "#ffffff",
    contrastRatio: T.WCAGContrastRatios.HighContrastText
  });
  return (0, u.hex2int)(e)
}, t => t);

function D(t, e) {
  let n = s(t);
  return null != n && null != e ? d(e, null == n ? void 0 : n.messageInputBorder) : null
}

function G(t, e) {
  let n = (0, E.useColorValue)(a.Color.WHITE_500).hex;
  return (0, T.isThemeDark)(t) ? (0, u.hex2int)(n) : null != e ? f(e) : null
}
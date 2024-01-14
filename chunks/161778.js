"use strict";
let i;
n.r(t), n.d(t, {
  default: function() {
    return O
  }
});
var r = n("446674"),
  s = n("151426"),
  a = n("669491"),
  o = n("819855"),
  l = n("913144"),
  u = n("206230"),
  c = n("253539");
n("21121"), n("831588");
var d = n("922932"),
  f = n("773336"),
  E = n("737292"),
  h = n("168973"),
  p = n("374363"),
  _ = n("116319"),
  S = n("49111"),
  m = n("941719");
let T = S.ThemeTypes.DARK,
  g = null,
  I = !1;

function C() {
  let e = function() {
    var e, t;
    if (__OVERLAY__) return S.ThemeTypes.DARK;
    if (u.default.syncForcedColors && "active" === u.default.systemForcedColors && null != i) return i;
    let n = h.default.useSystemTheme;
    if (n === _.SystemThemeState.ON && null != i) return i;
    let r = null === (e = E.default.getAppearanceSettings()) || void 0 === e ? void 0 : e.theme;
    if (null != r) return r;
    let a = null === (t = p.default.settings.appearance) || void 0 === t ? void 0 : t.theme;
    return a === s.Theme.LIGHT ? S.ThemeTypes.LIGHT : S.ThemeTypes.DARK
  }();
  return e
}

function v() {
  return R()
}

function A() {
  return R()
}

function R() {
  let e = C();
  return e !== T && (T = e, !0)
}
class N extends r.default.PersistedStore {
  initialize(e) {
    (null == e ? void 0 : e.theme) != null && (T = e.theme), this.waitFor(h.default, E.default, p.default, u.default)
  }
  getState() {
    return {
      theme: this.theme
    }
  }
  get darkSidebar() {
    return (0, o.isThemeLight)(this.theme) && h.default.darkSidebar && !I
  }
  get theme() {
    return C()
  }
  get systemTheme() {
    return g
  }
  get systemPrefersColorScheme() {
    return i
  }
  get isSystemThemeAvailable() {
    return null !== g
  }
}
N.displayName = "ThemeStore", N.persistKey = "ThemeStore", N.migrations = [e => {
  let t = e.theme;
  return "amoled" === t && (t = "midnight"), {
    ...e,
    theme: t
  }
}];
var O = new N(l.default, {
  CONNECTION_OPEN: v,
  LOGOUT: function(e) {
    return !e.isSwitchingAccount && T !== S.ThemeTypes.DARK && (T = S.ThemeTypes.DARK, function() {
      !__OVERLAY__ && f.isPlatformEmbedded && d.default.setApplicationBackgroundColor((0, o.isThemeDark)(C()) ? a.default.unsafe_rawColors.PRIMARY_700.resolve({
        saturation: u.default.saturation
      }).hsl() : a.default.unsafe_rawColors.WHITE_500.resolve({
        saturation: u.default.saturation
      }).hsl())
    }(), R())
  },
  OVERLAY_INITIALIZE: v,
  SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: A,
  UNSYNCED_USER_SETTINGS_UPDATE: A,
  USER_SETTINGS_PROTO_UPDATE: v,
  UPDATE_BACKGROUND_GRADIENT_PRESET: function(e) {
    var t, n;
    let {
      presetId: i
    } = e;
    T = null != i && null !== (n = null === (t = m.BACKGROUND_GRADIENT_PRESETS_MAP[i]) || void 0 === t ? void 0 : t.theme) && void 0 !== n ? n : C();
    let r = null != i;
    return I !== r ? (I = r, !0) : function() {
      let e = C();
      return !(0, c.areThemesEqualForGradientThemes)(T, e) && (T = e, !0)
    }()
  },
  RESET_PREVIEW_CLIENT_THEME: v,
  SYSTEM_THEME_CHANGE: function(e) {
    let {
      systemTheme: t
    } = e;
    return g = t, R()
  },
  ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: function(e) {
    return i = e.systemPrefersColorScheme, R()
  },
  ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: function() {
    return (0, o.isThemeLight)(C())
  }
})
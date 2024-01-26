"use strict";
let i;
n.r(t), n.d(t, {
  default: function() {
    return R
  }
});
var s = n("446674"),
  r = n("151426"),
  a = n("669491"),
  o = n("819855"),
  l = n("913144"),
  u = n("206230"),
  d = n("253539");
n("21121"), n("831588");
var c = n("922932"),
  f = n("773336"),
  _ = n("737292"),
  h = n("168973"),
  g = n("374363"),
  m = n("116319"),
  E = n("49111"),
  p = n("941719");
let v = E.ThemeTypes.DARK,
  S = null,
  T = !1;

function I() {
  let e = function() {
    var e, t;
    if (__OVERLAY__) return E.ThemeTypes.DARK;
    if (u.default.syncForcedColors && "active" === u.default.systemForcedColors && null != i) return i;
    let n = h.default.useSystemTheme;
    if (n === m.SystemThemeState.ON && null != i) return i;
    let s = null === (e = _.default.getAppearanceSettings()) || void 0 === e ? void 0 : e.theme;
    if (null != s) return s;
    let a = null === (t = g.default.settings.appearance) || void 0 === t ? void 0 : t.theme;
    return null == a ? v : a === r.Theme.LIGHT ? E.ThemeTypes.LIGHT : E.ThemeTypes.DARK
  }();
  return e
}

function C() {
  return y()
}

function A() {
  return y()
}

function y() {
  let e = I();
  return e !== v && (v = e, !0)
}
class N extends s.default.PersistedStore {
  initialize(e) {
    (null == e ? void 0 : e.theme) != null && (v = e.theme), this.waitFor(h.default, _.default, g.default, u.default)
  }
  getState() {
    return {
      theme: this.theme
    }
  }
  get darkSidebar() {
    return (0, o.isThemeLight)(this.theme) && h.default.darkSidebar && !T
  }
  get theme() {
    return I()
  }
  get systemTheme() {
    return S
  }
  get systemPrefersColorScheme() {
    return i
  }
  get isSystemThemeAvailable() {
    return null !== S
  }
}
N.displayName = "ThemeStore", N.persistKey = "ThemeStore", N.migrations = [e => {
  let t = e.theme;
  return "amoled" === t && (t = "midnight"), {
    ...e,
    theme: t
  }
}];
var R = new N(l.default, {
  CACHE_LOADED: C,
  CONNECTION_OPEN: C,
  LOGOUT: function(e) {
    return !e.isSwitchingAccount && v !== E.ThemeTypes.DARK && (v = E.ThemeTypes.DARK, function() {
      !__OVERLAY__ && f.isPlatformEmbedded && c.default.setApplicationBackgroundColor((0, o.isThemeDark)(I()) ? a.default.unsafe_rawColors.PRIMARY_700.resolve({
        saturation: u.default.saturation
      }).hsl() : a.default.unsafe_rawColors.WHITE_500.resolve({
        saturation: u.default.saturation
      }).hsl())
    }(), y())
  },
  OVERLAY_INITIALIZE: C,
  SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: A,
  UNSYNCED_USER_SETTINGS_UPDATE: A,
  USER_SETTINGS_PROTO_UPDATE: C,
  UPDATE_BACKGROUND_GRADIENT_PRESET: function(e) {
    var t, n;
    let {
      presetId: i
    } = e;
    v = null != i && null !== (n = null === (t = p.BACKGROUND_GRADIENT_PRESETS_MAP[i]) || void 0 === t ? void 0 : t.theme) && void 0 !== n ? n : I();
    let s = null != i;
    return T !== s ? (T = s, !0) : function() {
      let e = I();
      return !(0, d.areThemesEqualForGradientThemes)(v, e) && (v = e, !0)
    }()
  },
  RESET_PREVIEW_CLIENT_THEME: C,
  SYSTEM_THEME_CHANGE: function(e) {
    let {
      systemTheme: t
    } = e;
    return S = t, y()
  },
  ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: function(e) {
    return i = e.systemPrefersColorScheme, y()
  },
  ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: function() {
    return (0, o.isThemeLight)(I())
  }
})
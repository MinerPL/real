"use strict";
let i, r;
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007");
var s = n("35092"),
  a = n("151426"),
  o = n("913144"),
  l = n("10641"),
  u = n("737292"),
  c = n("161778"),
  d = n("233069"),
  f = n("42203"),
  E = n("697218"),
  h = n("719923"),
  p = n("158998"),
  _ = n("253539"),
  S = n("941719");
let m = !1,
  T = !0,
  g = !1;

function I() {
  m = !0
}

function C() {
  T && (i = void 0), g = !1, m = !1
}
let v = () => {
    T = !h.default.canUseClientThemes(E.default.getCurrentUser())
  },
  A = () => {
    var e, t;
    let n = null === (t = u.default.getAppearanceSettings()) || void 0 === t ? void 0 : null === (e = t.clientThemeSettings) || void 0 === e ? void 0 : e.backgroundGradientPresetId;
    null != n && (i = S.BACKGROUND_GRADIENT_PRESETS_MAP[n])
  };
class R extends s.default.PersistedStore {
  initialize(e) {
    null != e && (i = (null == e ? void 0 : e.gradientPresetId) != null ? S.BACKGROUND_GRADIENT_PRESETS_MAP[e.gradientPresetId] : void 0), this.waitFor(E.default, c.default, f.default, u.default), this.syncWith([E.default], v), this.syncWith([u.default], A)
  }
  getState() {
    return T ? {} : {
      gradientPresetId: null == i ? void 0 : i.id
    }
  }
  get gradientPreset() {
    return i
  }
  getLinearGradient() {
    return null == this.gradientPreset ? null : (0, _.getLinearGradientForBackgroundGradient)(this.gradientPreset)
  }
  get isEditorOpen() {
    return m
  }
  get isPreview() {
    return T
  }
  get isCoachmark() {
    return g
  }
  get mobilePendingThemeIndex() {
    return r
  }
  constructor(...e) {
    super(...e), this.migrations = [e => {
      var t;
      return {
        gradientPresetId: null == e ? void 0 : null === (t = e.gradientPreset) || void 0 === t ? void 0 : t.id
      }
    }]
  }
}
R.displayName = "ClientThemesBackgroundStore", R.persistKey = "ClientThemesBackgroundStore";
var N = new R(o.default, {
  UPDATE_BACKGROUND_GRADIENT_PRESET: e => {
    let {
      presetId: t
    } = e;
    if (null == t) {
      i = void 0;
      return
    }
    i = S.BACKGROUND_GRADIENT_PRESETS_MAP[t]
  },
  UPDATE_MOBILE_PENDING_THEME_INDEX: e => {
    let {
      mobileThemesIndex: t
    } = e;
    if (null == t) {
      r = void 0;
      return
    }
    r = t
  },
  CLIENT_THEMES_EDITOR_OPEN: e => {
    (function() {
      m = !0
    })()
  },
  CLIENT_THEMES_EDITOR_CLOSE: e => {
    C()
  },
  RESET_PREVIEW_CLIENT_THEME: e => {
    i = void 0
  },
  CHANNEL_SELECT: e => {
    let {
      channelId: t,
      guildId: n
    } = e, i = E.default.getCurrentUser();
    if (null == t || null == n || (0, l.isDismissibleContentDismissed)(a.DismissibleContent.CLIENT_THEMES_COACHMARK) || !(0, p.ageEligibleForPremiumUpsell)(i)) return;
    let r = f.default.getChannel(t);
    null != r && (0, d.isGuildTextChannelType)(r.type) && (g = !0, function() {
      m = !0
    }())
  },
  LOGOUT: e => {
    C()
  }
})
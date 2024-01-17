"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var a = n("316272"),
  s = n("737292"),
  i = n("161778"),
  l = n("845579"),
  r = n("374363"),
  o = n("32531"),
  u = n("253539"),
  d = n("941719");
class c extends a.default {
  _initialize() {
    r.default.addChangeListener(this._updateClientTheme), i.default.addChangeListener(this._updateClientTheme)
  }
  _terminate() {
    r.default.removeChangeListener(this._updateClientTheme), i.default.removeChangeListener(this._updateClientTheme)
  }
  constructor(...e) {
    super(...e), this._updateBackgroundGradientPresetId = e => {
      if (this._currentBackgroundGradientPresetId !== e) {
        if (null == e) {
          (0, o.resetBackgroundGradientPreset)(), this._currentBackgroundGradientPresetId = void 0;
          return
        }(0, o.updateBackgroundGradientPreset)(e), this._currentBackgroundGradientPresetId = e
      }
    }, this._updateClientTheme = () => {
      var e, t, n;
      let a = s.default.shouldSync("appearance") ? l.ClientThemeSettings.getSetting().backgroundGradientPresetId : null === (t = s.default.getAppearanceSettings()) || void 0 === t ? void 0 : null === (e = t.clientThemeSettings) || void 0 === e ? void 0 : e.backgroundGradientPresetId;
      if (null != a && (null === (n = d.BACKGROUND_GRADIENT_PRESETS_MAP[a]) || void 0 === n ? void 0 : n.theme) !== i.default.theme) {
        let e = d.BACKGROUND_GRADIENT_PRESETS_MAP[a];
        if (!(0, u.areThemesEqualForGradientThemes)(e.theme, i.default.theme)) {
          this._updateBackgroundGradientPresetId(void 0);
          return
        }
      }
      this._updateBackgroundGradientPresetId(a)
    }
  }
}
var f = new c
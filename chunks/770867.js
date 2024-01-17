"use strict";
E.r(_), E.d(_, {
  useResetClientThemePreview: function() {
    return A
  },
  useTrackClientThemePreviewEvent: function() {
    return R
  }
}), E("222007");
var t = E("884691"),
  o = E("446674"),
  n = E("151426"),
  r = E("505093"),
  i = E("168973"),
  a = E("374363"),
  I = E("599110"),
  s = E("32531"),
  T = E("714657"),
  S = E("49111"),
  N = E("646718"),
  O = E("116319");
let A = () => {
    let e = (0, o.useStateFromStores)([T.default], () => T.default.gradientPreset),
      _ = (0, o.useStateFromStores)([i.default], () => i.default.useSystemTheme === O.SystemThemeState.ON),
      [E, n] = (0, t.useState)(_);
    return (0, t.useEffect)(() => {
      null == e && n(_)
    }, [e, _]), (0, t.useCallback)(() => {
      if (null != e)(0, s.resetPreviewClientTheme)(), E && (0, r.setUseSystemTheme)(O.SystemThemeState.ON)
    }, [e, E])
  },
  R = () => {
    let {
      previewPaneVariant: e
    } = (0, o.useStateFromStoresObject)([T.default], () => ({
      previewPaneVariant: T.default.isPreview ? N.AnalyticsPremiumFeatureTiers.FREE : N.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
    })), _ = (0, o.useStateFromStores)([a.default], () => {
      var e;
      let _ = null === (e = a.default.settings.appearance) || void 0 === e ? void 0 : e.theme;
      return "default ".concat(_ === n.Theme.LIGHT ? S.ThemeTypes.LIGHT : S.ThemeTypes.DARK)
    });
    return (0, t.useCallback)(E => {
      I.default.track(E, {
        preview_pane_variant: e,
        original_theme: _
      })
    }, [e, _])
  }
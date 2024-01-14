"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("884691"),
  n = s("446674"),
  l = s("79112"),
  i = s("206230"),
  r = s("26092"),
  o = s("397336"),
  d = s("49111");
let u = Object.freeze({
  [o.UserSettingsScrollPositions.ProfileCustomizationScrollPositions.TRY_IT_OUT]: d.UserSettingsSections.PROFILE_CUSTOMIZATION,
  [o.UserSettingsScrollPositions.AccessibilityScrollPositions.REDUCED_MOTION]: d.UserSettingsSections.ACCESSIBILITY,
  [o.UserSettingsScrollPositions.AccessibilityScrollPositions.SYNC_PROFILE_THEME_WITH_USER_THEME]: d.UserSettingsSections.ACCESSIBILITY,
  [o.UserSettingsScrollPositions.AccessibilityScrollPositions.LEGACY_CHAT_INPUT]: d.UserSettingsSections.ACCESSIBILITY,
  [o.UserSettingsScrollPositions.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION]: d.UserSettingsSections.VOICE
});
var c = (e, t) => {
  let s = (0, n.useStateFromStores)([i.default], () => i.default.useReducedMotion),
    o = (0, n.useStateFromStores)([r.default], () => r.default.getScrollPosition());
  (0, a.useEffect)(() => {
    let a = e.current;
    if (null == a || t !== o) return;
    let n = requestAnimationFrame(() => {
      a.scrollIntoView({
        behavior: s ? "auto" : "smooth"
      }), l.default.clearScrollPosition(u[t])
    });
    return () => cancelAnimationFrame(n)
  }, [e, t, o, s])
}
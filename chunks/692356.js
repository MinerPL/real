"use strict";
t.r(u), t.d(u, {
  default: function() {
    return d
  }
});
var n = t("37983");
t("884691");
var a = t("77078"),
  l = t("829536"),
  s = t("305122"),
  r = t("78581"),
  o = t("782340");

function d() {
  let e = (0, r.getAmplitudinalSoundboardVolume)();
  return (0, n.jsx)(a.MenuControlItem, {
    id: "user-volume",
    "aria-haspopup": !0,
    label: o.default.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME,
    control: (u, t) => (0, n.jsx)(a.MenuSliderControl, {
      ...u,
      ref: t,
      value: (0, l.amplitudeToPerceptual)(e),
      maxValue: 100,
      onChange: e => (0, s.updateUserSoundboardVolume)((0, l.perceptualToAmplitude)(e)),
      "aria-label": o.default.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME
    })
  })
}
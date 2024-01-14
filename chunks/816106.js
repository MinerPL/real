"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var a = n("37983");
n("884691");
var l = n("446674"),
  u = n("77078"),
  d = n("629109"),
  o = n("42887"),
  r = n("697218"),
  s = n("829536"),
  i = n("773336"),
  c = n("353927"),
  f = n("782340");

function S(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.MediaEngineContextTypes.DEFAULT,
    S = (0, l.useStateFromStores)([o.default], () => o.default.getLocalVolume(e, n), [e, n]),
    M = e === (null === (t = r.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
    g = n === c.MediaEngineContextTypes.STREAM;
  return M ? null : (0, a.jsx)(u.MenuControlItem, {
    id: "user-volume",
    label: g ? f.default.Messages.STREAM_VOLUME : f.default.Messages.USER_VOLUME,
    control: (t, l) => (0, a.jsx)(u.MenuSliderControl, {
      ...t,
      ref: l,
      value: (0, s.amplitudeToPerceptual)(S),
      maxValue: i.isPlatformEmbedded ? 200 : 100,
      onChange: t => d.default.setLocalVolume(e, (0, s.perceptualToAmplitude)(t), n),
      "aria-label": g ? f.default.Messages.STREAM_VOLUME : f.default.Messages.USER_VOLUME
    })
  })
}
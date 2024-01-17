"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var l = n("37983");
n("884691");
var i = n("446674"),
  u = n("77078"),
  a = n("629109"),
  o = n("42887"),
  r = n("697218"),
  d = n("829536"),
  s = n("773336"),
  c = n("353927"),
  f = n("782340");

function E(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.MediaEngineContextTypes.DEFAULT,
    E = (0, i.useStateFromStores)([o.default], () => o.default.getLocalVolume(e, n), [e, n]),
    _ = e === (null === (t = r.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
    S = n === c.MediaEngineContextTypes.STREAM;
  return _ ? null : (0, l.jsx)(u.MenuControlItem, {
    id: "user-volume",
    label: S ? f.default.Messages.STREAM_VOLUME : f.default.Messages.USER_VOLUME,
    control: (t, i) => (0, l.jsx)(u.MenuSliderControl, {
      ...t,
      ref: i,
      value: (0, d.amplitudeToPerceptual)(E),
      maxValue: s.isPlatformEmbedded ? 200 : 100,
      onChange: t => a.default.setLocalVolume(e, (0, d.perceptualToAmplitude)(t), n),
      "aria-label": S ? f.default.Messages.STREAM_VOLUME : f.default.Messages.USER_VOLUME
    })
  })
}
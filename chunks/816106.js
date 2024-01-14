"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var s = n("37983");
n("884691");
var a = n("446674"),
  u = n("77078"),
  i = n("629109"),
  d = n("42887"),
  o = n("697218"),
  r = n("829536"),
  c = n("773336"),
  l = n("353927"),
  p = n("782340");

function f(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.MediaEngineContextTypes.DEFAULT,
    f = (0, a.useStateFromStores)([d.default], () => d.default.getLocalVolume(e, n), [e, n]),
    _ = e === (null === (t = o.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
    m = n === l.MediaEngineContextTypes.STREAM;
  return _ ? null : (0, s.jsx)(u.MenuControlItem, {
    id: "user-volume",
    label: m ? p.default.Messages.STREAM_VOLUME : p.default.Messages.USER_VOLUME,
    control: (t, a) => (0, s.jsx)(u.MenuSliderControl, {
      ...t,
      ref: a,
      value: (0, r.amplitudeToPerceptual)(f),
      maxValue: c.isPlatformEmbedded ? 200 : 100,
      onChange: t => i.default.setLocalVolume(e, (0, r.perceptualToAmplitude)(t), n),
      "aria-label": m ? p.default.Messages.STREAM_VOLUME : p.default.Messages.USER_VOLUME
    })
  })
}
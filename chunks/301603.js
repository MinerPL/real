"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("446674"),
  l = n("629109"),
  u = n("271938"),
  o = n("42887"),
  a = n("49111"),
  r = n("353927");

function d(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.MediaEngineContextTypes.DEFAULT,
    n = (0, i.useStateFromStores)([u.default], () => u.default.getId()),
    d = (0, i.useStateFromStores)([o.default], () => o.default.supports(r.Features.DISABLE_VIDEO) && o.default.isVideoEnabled()),
    s = (0, i.useStateFromStores)([o.default], () => o.default.isLocalVideoDisabled(n, t), [n, t]),
    c = null == e || e === n;
  return [c && (d || s), s, e => {
    let i = e ? a.VideoToggleState.DISABLED : a.VideoToggleState.MANUAL_ENABLED;
    l.default.setDisableLocalVideo(n, i, t)
  }]
}
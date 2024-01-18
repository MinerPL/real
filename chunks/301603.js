"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("446674"),
  i = n("629109"),
  a = n("271938"),
  u = n("42887"),
  o = n("49111"),
  d = n("353927");

function r(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.MediaEngineContextTypes.DEFAULT,
    n = (0, l.useStateFromStores)([a.default], () => a.default.getId()),
    r = (0, l.useStateFromStores)([u.default], () => u.default.supports(d.Features.DISABLE_VIDEO) && u.default.isVideoEnabled()),
    s = (0, l.useStateFromStores)([u.default], () => u.default.isLocalVideoDisabled(n, t), [n, t]),
    c = null == e || e === n;
  return [c && (r || s), s, e => {
    let l = e ? o.VideoToggleState.DISABLED : o.VideoToggleState.MANUAL_ENABLED;
    i.default.setDisableLocalVideo(n, l, t)
  }]
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("446674"),
  l = n("629109"),
  s = n("271938"),
  i = n("42887"),
  r = n("49111"),
  o = n("353927");

function u(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.MediaEngineContextTypes.DEFAULT,
    n = (0, a.useStateFromStores)([s.default], () => s.default.getId()),
    u = (0, a.useStateFromStores)([i.default], () => i.default.supports(o.Features.DISABLE_VIDEO) && i.default.isVideoEnabled()),
    d = (0, a.useStateFromStores)([i.default], () => i.default.isLocalVideoDisabled(n, t), [n, t]),
    c = null == e || e === n;
  return [c && (u || d), d, e => {
    let a = e ? r.VideoToggleState.DISABLED : r.VideoToggleState.MANUAL_ENABLED;
    l.default.setDisableLocalVideo(n, a, t)
  }]
}
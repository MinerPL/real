"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var a = n("917351"),
  l = n.n(a),
  s = n("446674"),
  i = n("42887"),
  r = n("353927");

function o() {
  let {
    enabled: e,
    cameraUnavailable: t
  } = (0, s.useStateFromStoresObject)([i.default], () => {
    var e, t;
    let n = null === (t = null === (e = l(i.default.getVideoDevices()).values().first()) || void 0 === e ? void 0 : e.disabled) || void 0 === t || t;
    return {
      enabled: i.default.isVideoEnabled(),
      cameraUnavailable: n || !i.default.supports(r.Features.VIDEO)
    }
  });
  return {
    enabled: e,
    cameraUnavailable: t
  }
}
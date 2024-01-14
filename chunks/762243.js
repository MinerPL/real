"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var i = n("37983"),
  a = n("884691"),
  l = n("627445"),
  s = n.n(l),
  o = n("65597"),
  r = n("780166"),
  d = n("242260"),
  u = n("154891"),
  c = n("697218"),
  f = n("928454");

function h(e) {
  let {
    streamerId: t,
    channelId: n
  } = e, l = a.useRef(null), r = (0, o.default)([c.default], () => c.default.getCurrentUser());
  return s(null != r, "user cannot be null"), (0, u.default)(l, r, t, n), (0, i.jsx)("canvas", {
    className: f.canvas,
    ref: l
  })
}

function p(e) {
  let {
    guildId: t,
    channelId: n,
    streamerId: a
  } = e, {
    isSharedCanvasEnabled: l
  } = r.default.useExperiment({
    guildId: t,
    location: "f0d1b1_1"
  }, {
    autoTrackExposure: !0
  }), s = (0, o.default)([d.default], () => d.default.visibleOverlayCanvas);
  return l && s ? (0, i.jsx)(h, {
    guildId: t,
    channelId: n,
    streamerId: a
  }) : null
}
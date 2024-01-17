"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("990766"),
  s = n("373469"),
  i = n("42203"),
  l = n("305961"),
  r = n("42887"),
  o = n("957255"),
  u = n("568307"),
  d = n("18494"),
  c = n("703370"),
  f = n("223913"),
  E = n("479788"),
  _ = n("375202");

function h() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  if (!(0, E.default)(r.default) || null != s.default.getCurrentUserActiveStream()) return !1;
  let t = (0, _.default)(u.default, c.default);
  if (null == t || t.isLauncher && !e) return !1;
  let n = d.default.getVoiceChannelId(),
    h = i.default.getChannel(n);
  if (null == h) return !1;
  let C = h.getGuildId();
  return !!(0, f.canStreamInChannel)(h, l.default, o.default, !1) && ((0, a.startStream)(C, h.id, {
    pid: t.pid
  }), !0)
}
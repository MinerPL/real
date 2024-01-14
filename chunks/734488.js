"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("446674"),
  l = n("271938"),
  s = n("855867"),
  i = n("205817"),
  r = n("12307"),
  o = n("944820"),
  u = n("49111");

function d(e) {
  let t = (0, r.getMaxQuality)(e),
    n = e.stream.guildId,
    d = e.stream.ownerId;
  return (0, a.useStateFromStores)([i.default, s.default, l.default], () => null != d ? (0, o.default)(i.default.getQuality(), i.default.getStatsHistory(n, d, d === l.default.getId()), d === l.default.getId() && null != s.default.getHookError(u.MediaEngineHookTypes.SOUND), t) : null, [t, n, d])
}
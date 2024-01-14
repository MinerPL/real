"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("446674"),
  l = n("582415"),
  s = n("824563"),
  i = n("387111"),
  r = n("782340");

function o(e, t, n) {
  let o = (0, a.useStateFromStores)([s.default], () => null != n ? (0, l.getStreamerApplication)(n, s.default) : null, [n]),
    u = i.default.getName(e.getGuildId(), e.id, t);
  return null == n ? u : (null == o ? void 0 : o.name) != null ? r.default.Messages.GO_LIVE_USER_PLAYING.format({
    applicationName: null == o ? void 0 : o.name,
    username: u
  }) : r.default.Messages.GO_LIVE_TILE_SCREEN.format({
    username: u
  })
}
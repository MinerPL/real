"use strict";
l.r(t), l.d(t, {
  default: function() {
    return r
  }
});
var n = l("65597"),
  a = l("42203"),
  s = l("26989"),
  i = l("535013");

function r(e, t) {
  let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    o = (0, n.default)([s.default], () => null != e ? s.default.getMember(e.id, t) : null, [e, t]),
    u = (0, n.default)([a.default], () => a.default.getChannel(l), [l]),
    d = (0, n.default)([a.default], () => a.default.getChannel(null == u ? void 0 : u.parent_id), [u]);
  return null == e || null == o ? null : (0, i.getVisibleConnectionsRole)({
    guild: e,
    guildMember: o,
    channel: null != u && u.isThread() && null != d ? d : u,
    onlyChannelConnectionRoles: r
  })
}
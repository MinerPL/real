"use strict";
n.r(t), n.d(t, {
  updateGuildSelfMember: function() {
    return r
  }
}), n("702976");
var a = n("872717"),
  l = n("913144"),
  i = n("479756"),
  d = n("38654"),
  s = n("49111");

function r(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  if (d.default.isFullServerPreview(e)) {
    (0, i.updateImpersonatedData)(e, {
      memberOptions: t
    });
    return
  }
  return l.default.dispatch({
    type: "GUILD_MEMBER_UPDATE_LOCAL",
    guildId: e,
    roles: t.roles,
    flags: t.flags
  }), a.default.patch({
    url: s.Endpoints.SET_GUILD_MEMBER(e),
    body: t,
    oldFormErrors: !!n || void 0
  })
}
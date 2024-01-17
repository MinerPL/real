"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var s = n("872717"),
  l = n("794818"),
  a = n("49111"),
  i = e => s.default.get({
    url: a.Endpoints.STICKER_GUILD_DATA(e),
    oldFormErrors: !0
  }).then(e => (null == e ? void 0 : e.body) != null ? (0, l.makeDiscoverableGuild)(e.body) : null).catch(() => null)
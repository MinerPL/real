"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var a = n("300322"),
  i = n("913491"),
  l = n("49111");

function s(e, t, n) {
  let s = t.isSystemDM(),
    u = !s && !(0, i.default)(e);
  return u && (n || t.isPrivate()) && (0, a.getIsActiveChannelOrUnarchivableThread)(t) && t.type !== l.ChannelTypes.GUILD_VOICE && t.type !== l.ChannelTypes.GUILD_STAGE_VOICE
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var u = n("300322"),
  a = n("913491"),
  r = n("49111");

function s(e, t, n) {
  let s = t.isSystemDM(),
    l = !s && !(0, a.default)(e);
  return l && (n || t.isPrivate()) && (0, u.getIsActiveChannelOrUnarchivableThread)(t) && t.type !== r.ChannelTypes.GUILD_VOICE && t.type !== r.ChannelTypes.GUILD_STAGE_VOICE
}
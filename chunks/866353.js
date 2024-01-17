"use strict";
n.r(t), n.d(t, {
  StickerSendability: function() {
    return i
  },
  getStickerSendability: function() {
    return u
  },
  isSendableSticker: function() {
    return c
  }
});
var r, i, l = n("991170"),
  o = n("719923"),
  s = n("24373"),
  a = n("49111");
(r = i || (i = {}))[r.SENDABLE = 0] = "SENDABLE", r[r.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", r[r.NONSENDABLE = 2] = "NONSENDABLE", r[r.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
let u = (e, t, n) => {
    if (null == t) return 2;
    let r = o.default.canUseCustomStickersEverywhere(t);
    if ((0, s.isStandardSticker)(e)) return 0;
    if ((0, s.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || l.default.can({
      permission: a.Permissions.USE_EXTERNAL_STICKERS,
      user: t,
      context: n
    }) ? r ? 0 : 1 : 2 : 3;
    return 2
  },
  c = (e, t, n) => 0 === u(e, t, n)
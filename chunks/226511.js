"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var a = n("446674"),
  s = n("95410"),
  i = n("913144"),
  l = n("525065"),
  r = n("305961"),
  o = n("957255"),
  u = n("69741"),
  d = n("49111");
let c = "publicUpsellChannelNoticeGuilds",
  f = new Set;
class E extends a.default.Store {
  initialize() {
    var e;
    this.waitFor(o.default, r.default, l.default), this.syncWith([o.default, r.default, l.default], d.NOOP), f = (e = new Set(s.default.get(c)), e)
  }
  isVisible(e) {
    if (null == e) return;
    let t = l.default.getMemberCount(e.id);
    return !f.has(e.id) && null != t && t >= u.COMMUNITY_UPSELL_MINIMUM_GUILD_SIZE && o.default.can(d.Permissions.ADMINISTRATOR, e) && !e.hasFeature(d.GuildFeatures.COMMUNITY)
  }
}
E.displayName = "EnablePublicGuildUpsellNoticeStore";
var _ = new E(i.default, {
  PUBLIC_UPSELL_NOTICE_DISMISS: function(e) {
    let t = e.guildId;
    if (!f.has(t)) return f.add(t), s.default.set(c, f), !0
  }
})
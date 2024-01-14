"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("446674"),
  s = n("95410"),
  i = n("913144");
let l = "hasSeenGuildTemplatePromotionTooltip",
  r = {},
  o = !0 === s.default.get(l);

function u(e) {
  let {
    guildId: t
  } = e;
  r = {
    ...r,
    [t]: !1
  }
}
class d extends a.default.Store {
  shouldShowGuildTemplateDirtyTooltip(e) {
    var t;
    return null !== (t = r[e]) && void 0 !== t && t
  }
  shouldShowGuildTemplatePromotionTooltip() {
    return !o
  }
}
d.displayName = "GuildTemplateTooltipStore";
var c = new d(i.default, {
  GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH: function(e) {
    let {
      guildTemplate: t
    } = e;
    r = {
      ...r,
      [t.source_guild_id]: t.is_dirty || !1
    }
  },
  GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE: function() {
    s.default.set(l, !0), o = !0
  },
  GUILD_TEMPLATE_SYNC_SUCCESS: function(e) {
    r = {
      ...r,
      [e.guildTemplate.source_guild_id]: !1
    }
  },
  GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE: u,
  GUILD_TEMPLATE_DELETE_SUCCESS: u
})
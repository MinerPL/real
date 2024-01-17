"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("446674"),
  r = n("913144"),
  l = n("233069"),
  u = n("42203");
let o = {},
  s = {};
class a extends i.default.Store {
  getTemplates(e) {
    return o[e]
  }
  getTemplateWithCategory(e, t) {
    var n;
    return null === (n = o[e]) || void 0 === n ? void 0 : n.find(e => e.category === t)
  }
  getChannel(e) {
    return s[e]
  }
}
a.displayName = "GuildRoleSubscriptionTierTemplatesStore";
var d = new a(r.default, {
  GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function(e) {
    let {
      selectedTemplate: t,
      guildId: n
    } = e, i = Object.values(u.default.getMutableGuildChannelsForGuild(n));
    t.listings.forEach(e => {
      e.channels.forEach(e => {
        let t = i.find(t => t.name === e.name);
        if (void 0 !== t) e.id = t.id;
        else if (!(e.id in s)) {
          let t = (0, l.createChannelRecord)(e);
          s[e.id] = t
        }
      })
    })
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function(e) {
    let {
      templates: t,
      guildId: n
    } = e;
    o[n] = t
  }
})
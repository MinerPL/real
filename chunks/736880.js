            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("446674"),
                i = n("913144"),
                r = n("233069"),
                s = n("42203");
            let a = {},
                o = {};
            class u extends l.default.Store {
                getTemplates(e) {
                    return a[e]
                }
                getTemplateWithCategory(e, t) {
                    var n;
                    return null === (n = a[e]) || void 0 === n ? void 0 : n.find(e => e.category === t)
                }
                getChannel(e) {
                    return o[e]
                }
            }
            u.displayName = "GuildRoleSubscriptionTierTemplatesStore";
            var d = new u(i.default, {
                GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function(e) {
                    let {
                        selectedTemplate: t,
                        guildId: n
                    } = e, l = Object.values(s.default.getMutableGuildChannelsForGuild(n));
                    t.listings.forEach(e => {
                        e.channels.forEach(e => {
                            let t = l.find(t => t.name === e.name);
                            if (void 0 !== t) e.id = t.id;
                            else if (!(e.id in o)) {
                                let t = (0, r.createChannelRecord)(e);
                                o[e.id] = t
                            }
                        })
                    })
                },
                GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function(e) {
                    let {
                        templates: t,
                        guildId: n
                    } = e;
                    a[n] = t
                }
            })
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("446674"),
                l = n("913144"),
                r = n("233069"),
                s = n("42203");
            let a = {},
                u = {};
            class o extends i.default.Store {
                getTemplates(e) {
                    return a[e]
                }
                getTemplateWithCategory(e, t) {
                    var n;
                    return null === (n = a[e]) || void 0 === n ? void 0 : n.find(e => e.category === t)
                }
                getChannel(e) {
                    return u[e]
                }
            }
            o.displayName = "GuildRoleSubscriptionTierTemplatesStore";
            var d = new o(l.default, {
                GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function(e) {
                    let {
                        selectedTemplate: t,
                        guildId: n
                    } = e, i = Object.values(s.default.getMutableGuildChannelsForGuild(n));
                    t.listings.forEach(e => {
                        e.channels.forEach(e => {
                            let t = i.find(t => t.name === e.name);
                            if (void 0 !== t) e.id = t.id;
                            else if (!(e.id in u)) {
                                let t = (0, r.createChannelRecord)(e);
                                u[e.id] = t
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
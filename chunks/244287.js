            "use strict";
            a.r(t), a.d(t, {
                stashTemplateChannels: function() {
                    return i
                },
                getTemplates: function() {
                    return r
                }
            });
            var s = a("872717"),
                l = a("913144"),
                n = a("49111");

            function i(e, t) {
                l.default.dispatch({
                    type: "GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS",
                    selectedTemplate: e,
                    guildId: t
                })
            }
            async function r(e) {
                let t = await s.default.get({
                        url: n.Endpoints.GUILD_ROLE_SUBSCRIPTION_LISTING_TEMPLATES(e)
                    }),
                    a = t.body;
                null != a.templates && l.default.dispatch({
                    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES",
                    templates: a.templates,
                    guildId: e
                })
            }
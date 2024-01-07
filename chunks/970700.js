            "use strict";
            n.r(t), n.d(t, {
                fetchGuildIntegrationsApplications: function() {
                    return u
                },
                fetchGuildIntegrationsCommands: function() {
                    return a
                }
            });
            var i = n("872717"),
                l = n("913144"),
                r = n("653047"),
                d = n("766274"),
                s = n("49111");

            function u(e) {
                i.default.get({
                    url: s.Endpoints.GUILD_INTEGRATIONS(e),
                    query: {
                        include_applications: !0,
                        include_role_connections_metadata: !0
                    },
                    oldFormErrors: !0
                }).then(t => {
                    let n = t.body.map(e => (null != e.user && (e.user = new d.default(e.user)), null != e.application && (e.application = r.default.createFromServer(e.application)), e));
                    l.default.dispatch({
                        type: "GUILD_SETTINGS_LOADED_INTEGRATIONS",
                        guildId: e,
                        integrations: n
                    })
                }).catch(() => {})
            }

            function a(e) {
                i.default.get({
                    url: s.Endpoints.GUILD_INTEGRATIONS(e),
                    query: {
                        has_commands: !0
                    },
                    oldFormErrors: !0
                }).then(t => {
                    let n = t.body.map(e => e.id);
                    l.default.dispatch({
                        type: "GUILD_SETTINGS_LOADED_INTEGRATIONS_WITH_COMMANDS",
                        guildId: e,
                        integrationIds: n
                    })
                }).catch(() => {})
            }
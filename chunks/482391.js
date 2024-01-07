            "use strict";
            n.r(t), n.d(t, {
                clearIntegrationPermissions: function() {
                    return l
                },
                editPermissions: function() {
                    return d
                },
                getApplicationCommands: function() {
                    return s
                },
                getApplicationCommandPermissions: function() {
                    return T
                },
                initIntegrationPermissions: function() {
                    return E
                },
                resetPermissions: function() {
                    return A
                },
                updateApplicationCommandPermissions: function() {
                    return _
                }
            });
            var r = n("872717"),
                o = n("913144"),
                i = n("507217"),
                u = n("389153"),
                a = n("49111");

            function l() {
                o.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR"
                })
            }

            function d(e, t, n) {
                o.default.dispatch({
                    applicationId: e,
                    commandId: t,
                    permissions: n,
                    type: "INTEGRATION_PERMISSION_SETTINGS_EDIT"
                })
            }

            function s(e, t) {
                r.default.get(a.Endpoints.GUILD_COMMANDS_FOR_APPLICATION(e, t)).then(n => {
                    o.default.dispatch({
                        type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
                        applicationId: t,
                        commands: n.body.application_commands,
                        guildId: e,
                        permissions: n.body.permissions
                    })
                }, () => {
                    o.default.dispatch({
                        type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE",
                        applicationId: t
                    })
                })
            }
            async function T(e, t, n) {
                let i = [];
                try {
                    let o = await r.default.get(a.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n));
                    o.ok && (i = o.body.permissions)
                } catch (r) {
                    if (404 !== r.status) {
                        o.default.dispatch({
                            type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
                            applicationId: e,
                            commandId: n,
                            guildId: t
                        });
                        return
                    }
                }
                o.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                    applicationId: e,
                    commandId: n,
                    guildId: t,
                    permissions: i
                })
            }

            function E(e) {
                o.default.dispatch({
                    applicationId: e,
                    type: "INTEGRATION_PERMISSION_SETTINGS_INIT"
                })
            }

            function A(e) {
                o.default.dispatch({
                    commandId: e,
                    type: "INTEGRATION_PERMISSION_SETTINGS_RESET"
                })
            }
            async function _(e) {
                let {
                    applicationId: t,
                    commandId: n,
                    defaultEveryoneValue: r,
                    defaultEverywhereValue: a,
                    guildId: l,
                    permissions: d
                } = e, s = n === t ? function(e, t, n, r) {
                    if (!n || !r) return t;
                    let o = {
                        [e]: n,
                        [(0, u.allChannelsSentinel)(e)]: r
                    };
                    return t.filter(e => {
                        let t = o[e.id];
                        return null == t || e.permission !== t
                    })
                }(l, d, r, a) : d, T = await i.updateApplicationGuildCommandPermissions(t, l, n, s);
                T.ok && o.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                    applicationId: t,
                    commandId: n,
                    guildId: l,
                    permissions: T.body.permissions
                })
            }
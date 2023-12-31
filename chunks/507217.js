            "use strict";
            n.r(t), n.d(t, {
                setActiveCommand: function() {
                    return f
                },
                setPreferredCommandId: function() {
                    return h
                },
                updateOptionStates: function() {
                    return E
                },
                updateOptionValidationStates: function() {
                    return g
                },
                updateApplicationGuildCommandPermissions: function() {
                    return A
                },
                querySearchManager: function() {
                    return m
                },
                performAutocomplete: function() {
                    return T
                },
                fetchCommand: function() {
                    return S
                },
                fetchCommands: function() {
                    return p
                },
                fetchCommandsForApplication: function() {
                    return M
                },
                updateRegistry: function() {
                    return v
                }
            }), n("222007");
            var i = n("627445"),
                a = n.n(i),
                l = n("872717"),
                s = n("913144"),
                r = n("798609"),
                u = n("271938"),
                d = n("299039"),
                o = n("246598"),
                c = n("524768"),
                _ = n("49111");

            function f(e) {
                let {
                    channelId: t,
                    command: n,
                    section: i,
                    location: l,
                    initialValues: r,
                    triggerSection: u,
                    queryLength: d
                } = e;
                null != n && a(n.inputType !== c.ApplicationCommandInputType.PLACEHOLDER, "command should not be placeholder"), s.default.dispatch({
                    type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
                    channelId: t,
                    command: n,
                    section: i,
                    initialValues: r,
                    location: l,
                    triggerSection: u,
                    queryLength: d
                })
            }

            function h(e, t) {
                s.default.dispatch({
                    type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND",
                    channelId: e,
                    commandId: t
                })
            }

            function E(e, t) {
                s.default.dispatch({
                    type: "APPLICATION_COMMAND_UPDATE_OPTIONS",
                    channelId: e,
                    changedOptionStates: t
                })
            }

            function g(e, t) {
                let n = Object.fromEntries(Object.entries(t).map(e => {
                    let [t, n] = e;
                    return [t, {
                        lastValidationResult: n
                    }]
                }));
                E(e, n)
            }

            function A(e, t, n, i) {
                return l.default.put({
                    body: {
                        permissions: i
                    },
                    url: _.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n)
                })
            }
            let m = (e, t, n, i, a) => {
                s.default.dispatch({
                    type: "APPLICATION_COMMAND_SEARCH_STORE_QUERY",
                    context: e,
                    query: t,
                    limit: n,
                    commandType: i,
                    applicationId: a
                })
            };

            function T(e, t, n) {
                var i;
                a(null != t.autocomplete, "Missing autocomplete context");
                let {
                    query: c,
                    name: f
                } = t.autocomplete, h = d.default.fromTimestamp(Date.now());
                s.default.dispatch({
                    type: "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST",
                    nonce: h,
                    channelId: t.channel.id,
                    query: c,
                    name: f
                }), null == o.default.getAutocompleteChoices(t.channel.id, f, c) && l.default.post({
                    url: _.Endpoints.INTERACTIONS,
                    body: {
                        type: r.InteractionTypes.APPLICATION_COMMAND_AUTOCOMPLETE,
                        application_id: e.applicationId,
                        guild_id: null === (i = t.guild) || void 0 === i ? void 0 : i.id,
                        channel_id: t.channel.id,
                        session_id: u.default.getSessionId(),
                        data: n,
                        nonce: h
                    },
                    timeout: 3e3
                }).catch(() => {
                    s.default.dispatch({
                        type: "INTERACTION_FAILURE",
                        nonce: h
                    })
                })
            }

            function S(e, t, n) {
                s.default.dispatch({
                    type: "APPLICATION_COMMAND_FETCH",
                    channelId: t,
                    commandId: n,
                    guildId: e
                })
            }

            function p(e, t, n) {
                s.default.dispatch({
                    type: "APPLICATION_COMMANDS_FETCH",
                    channelId: t,
                    commandIds: n,
                    guildId: e
                })
            }

            function M(e) {
                let {
                    guildId: t,
                    channelId: n,
                    applicationId: i
                } = e;
                s.default.dispatch({
                    type: "APPLICATION_COMMANDS_FETCH_FOR_APPLICATION",
                    channelId: n,
                    guildId: t,
                    applicationId: i
                })
            }

            function v(e, t, n) {
                s.default.dispatch({
                    type: "APPLICATION_COMMAND_REGISTRY_UPDATE",
                    applications: t,
                    commands: e,
                    channelId: n
                })
            }
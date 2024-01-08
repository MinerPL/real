            "use strict";
            n.r(t), n.d(t, {
                buildCommand: function() {
                    return g
                },
                buildApplicationCommands: function() {
                    return A
                },
                isSnowflake: function() {
                    return N
                },
                getMatchingGroupCommands: function() {
                    return O
                },
                getApplicationCommandOptionQueryOptions: function() {
                    return R
                },
                allChannelsSentinel: function() {
                    return y
                },
                canUseApplicationCommands: function() {
                    return v
                },
                DISABLED_BY_DEFAULT_PERMISSION_FLAG: function() {
                    return M
                },
                hasAccess: function() {
                    return D
                },
                getCommandAttachmentDraftType: function() {
                    return U
                },
                getCommandTriggerSection: function() {
                    return P
                },
                getApplicationCommandSection: function() {
                    return b
                },
                extractInteractionDataProps: function() {
                    return G
                },
                useIsInUserAppExperiment: function() {
                    return k
                },
                isInUserAppExperiment: function() {
                    return F
                },
                trackCommandSelected: function() {
                    return w
                }
            }), n("222007"), n("424973"), n("881410"), n("808653");
            var i = n("552442"),
                a = n.n(i),
                l = n("627445"),
                s = n.n(l),
                r = n("917351"),
                u = n.n(r),
                o = n("316693"),
                d = n("798609"),
                c = n("716241"),
                _ = n("892692"),
                E = n("233069"),
                f = n("474643"),
                h = n("14090"),
                p = n("524768"),
                T = n("970254"),
                C = n("696415"),
                m = n("317041"),
                S = n("49111"),
                I = n("843455");

            function g(e) {
                var t, n, i;
                let a, {
                    rootCommand: l,
                    command: s,
                    applicationId: r,
                    subCommandPath: u,
                    useKeyedPermissions: c
                } = e;
                null != l.permissions && l.permissions.length > 0 && (c ? a = (0, _.keyPermissions)(l.permissions) : (a = {}, l.permissions.forEach(e => {
                    a[e.id] = e
                })));
                let E = (null != u ? u : []).map(e => e.name),
                    f = (null != u ? u : []).map(e => e.displayName);
                return {
                    version: l.version,
                    guildId: l.guild_id,
                    id: [l.id, ...E].join(m.SUB_COMMAND_KEY_SEPARATOR),
                    name: [l.name, ...E].join(" "),
                    serverLocalizedName: s.name_localized,
                    applicationId: r,
                    type: null !== (t = l.type) && void 0 !== t ? t : d.ApplicationCommandType.CHAT,
                    inputType: p.ApplicationCommandInputType.BOT,
                    description: s.description,
                    options: function e(t) {
                        return null == t ? void 0 : t.map(t => {
                            var n, i;
                            let a = {
                                ...t,
                                choices: function(e) {
                                    return null == e ? void 0 : e.map(e => {
                                        var t;
                                        return {
                                            ...e,
                                            displayName: null !== (t = e.name_localized) && void 0 !== t ? t : e.name
                                        }
                                    })
                                }(t.choices),
                                options: e(t.options),
                                serverLocalizedName: t.name_localized,
                                displayName: null !== (n = t.name_localized) && void 0 !== n ? n : t.name,
                                displayDescription: null !== (i = t.description_localized) && void 0 !== i ? i : t.description
                            };
                            if (t.type === d.ApplicationCommandOptionType.CHANNEL && "channel_types" in t) return {
                                ...a,
                                channelTypes: t.channel_types
                            };
                            if ((t.type === d.ApplicationCommandOptionType.NUMBER || t.type === d.ApplicationCommandOptionType.INTEGER) && ("min_value" in t || "max_value" in t)) return {
                                ...a,
                                minValue: t.min_value,
                                maxValue: t.max_value
                            };
                            if (t.type === d.ApplicationCommandOptionType.STRING && ("min_length" in t || "max_length" in t)) return {
                                ...a,
                                minLength: t.min_length,
                                maxLength: t.max_length
                            };
                            return a
                        })
                    }(s.options),
                    rootCommand: l,
                    subCommandPath: u,
                    defaultMemberPermissions: null == l.default_member_permissions ? void 0 : o.default.deserialize(l.default_member_permissions),
                    dmPermission: l.dm_permission,
                    permissions: a,
                    displayName: [null !== (n = l.name_localized) && void 0 !== n ? n : l.name, ...f].join(" "),
                    displayDescription: null !== (i = s.description_localized) && void 0 !== i ? i : s.description,
                    nsfw: l.nsfw,
                    contexts: l.contexts,
                    integration_types: l.integration_types
                }
            }

            function A(e, t) {
                return u.flatMap(e, e => (s(null != e.id, "Missing command id"), function e(t) {
                    var n, i;
                    let {
                        rootCommand: a,
                        command: l,
                        applicationId: s,
                        subCommandPath: r,
                        useKeyedPermissions: u
                    } = t;
                    if (l.hasOwnProperty("id")) {
                        if (null == l.options || 0 === l.options.length) return [g({
                            rootCommand: a,
                            command: l,
                            applicationId: s,
                            subCommandPath: r,
                            useKeyedPermissions: u
                        })]
                    } else if (l.type !== d.ApplicationCommandOptionType.SUB_COMMAND && l.type !== d.ApplicationCommandOptionType.SUB_COMMAND_GROUP && (null == l.options || 0 === l.options.length)) return [g({
                        rootCommand: a,
                        command: l,
                        applicationId: s,
                        subCommandPath: r,
                        useKeyedPermissions: u
                    })];
                    let o = [];
                    if (null == l.options) return o;
                    let c = l.options.filter(e => e.type === d.ApplicationCommandOptionType.SUB_COMMAND_GROUP);
                    for (let t = 0; t < c.length; t++) o.push(...e({
                        rootCommand: a,
                        command: c[t],
                        applicationId: s,
                        subCommandPath: (null != r ? r : []).concat([{
                            name: c[t].name,
                            type: d.ApplicationCommandOptionType.SUB_COMMAND_GROUP,
                            displayName: null !== (n = c[t].name_localized) && void 0 !== n ? n : c[t].name
                        }]),
                        useKeyedPermissions: u
                    }));
                    let _ = l.options.filter(e => e.type === d.ApplicationCommandOptionType.SUB_COMMAND);
                    for (let e = 0; e < _.length; e++) o.push(g({
                        rootCommand: a,
                        command: _[e],
                        applicationId: s,
                        subCommandPath: (null != r ? r : []).concat([{
                            name: _[e].name,
                            type: d.ApplicationCommandOptionType.SUB_COMMAND,
                            displayName: null !== (i = _[e].name_localized) && void 0 !== i ? i : _[e].name
                        }]),
                        useKeyedPermissions: u
                    }));
                    return 0 === c.length && 0 === _.length && o.push(g({
                        rootCommand: a,
                        command: l,
                        applicationId: s,
                        subCommandPath: r,
                        useKeyedPermissions: u
                    })), o
                }({
                    rootCommand: e,
                    command: e,
                    applicationId: e.application_id,
                    subCommandPath: void 0,
                    useKeyedPermissions: t
                })))
            }

            function N(e) {
                return S.ID_REGEX.test(e.trim())
            }

            function O(e, t, n, i) {
                let a = [];
                return u(e).forEach(e => {
                    t.test(e.displayName) && (null == e.predicate || e.predicate(n)) && a.push(e)
                }), a.slice(0, i)
            }

            function R(e) {
                let t = e.type === d.ApplicationCommandOptionType.STRING,
                    n = e.type === d.ApplicationCommandOptionType.CHANNEL,
                    i = e.type === d.ApplicationCommandOptionType.USER || e.type === d.ApplicationCommandOptionType.MENTIONABLE,
                    a = e.type === d.ApplicationCommandOptionType.ROLE || e.type === d.ApplicationCommandOptionType.MENTIONABLE;
                return {
                    canMentionEveryone: t || a,
                    canMentionHere: t,
                    canMentionChannels: t || n,
                    canMentionUsers: t || i,
                    canMentionRoles: t || a,
                    canMentionAnyGuildUser: i,
                    canMentionNonMentionableRoles: a
                }
            }

            function y(e) {
                return a(e).subtract(1).toString()
            }

            function v(e, t, n, i) {
                if (n) return !1;
                if (i.isMultiUserDM()) return F(i.guild_id, {
                    location: "canUseApplicationCommands"
                }, {
                    autoTrackExposure: !1
                }) || t.getIntegrations(i.id).length > 0;
                if (i.isDM()) return !i.isSystemDM() && (null != i.rawRecipients.find(e => e.bot) || F(i.guild_id, {
                    location: "canUseApplicationCommands"
                }, {
                    autoTrackExposure: !1
                }) || t.getIntegrations(i.id).length > 0);
                return i.isArchivedLockedThread() ? e.can(o.default.combine(I.Permissions.USE_APPLICATION_COMMANDS, I.Permissions.MANAGE_THREADS), i) : !!(0, E.isReadableType)(i.type) && e.can(o.default.combine(I.Permissions.USE_APPLICATION_COMMANDS, I.Permissions.SEND_MESSAGES), i)
            }
            let M = o.default.deserialize(0);

            function D(e) {
                let {
                    PermissionStore: t,
                    guild: n,
                    selfMember: i,
                    applicationLevelPermissions: a,
                    commandLevelPermissions: l,
                    defaultMemberPermissions: s
                } = e;
                if (n.ownerId === i.userId || t.can(I.Permissions.ADMINISTRATOR, n)) return !0;
                let r = n.id;
                if (null != l) {
                    let e = L(i, r, l);
                    if ("boolean" == typeof e) return e
                }
                let u = L(i, r, a);
                return ("boolean" != typeof u || !!u) && (null == s || !o.default.equals(s, M) && t.can(s, n))
            }

            function L(e, t, n) {
                let i = n[(0, _.toPermissionKey)(e.userId, p.ApplicationCommandPermissionType.USER)];
                if (null != i) return i.permission;
                let a = !1;
                for (let t of e.roles) {
                    let e = n[(0, _.toPermissionKey)(t, p.ApplicationCommandPermissionType.ROLE)];
                    if (null != e && (a = !0, e.permission)) return !0
                }
                if (a) return !1;
                let l = n[(0, _.toPermissionKey)(t, p.ApplicationCommandPermissionType.ROLE)];
                return null != l ? l.permission : null
            }

            function U(e) {
                switch (e) {
                    case p.CommandOrigin.CHAT:
                        return f.DraftType.SlashCommand;
                    case p.CommandOrigin.APPLICATION_LAUNCHER:
                        return f.DraftType.ApplicationLauncherCommand
                }
            }

            function P(e) {
                if (null != e) {
                    if (e.id === m.BuiltInSectionId.BUILT_IN) return p.ApplicationCommandTriggerSections.BUILT_IN;
                    else if (e.id === m.BuiltInSectionId.FRECENCY) return p.ApplicationCommandTriggerSections.FRECENCY;
                    else return p.ApplicationCommandTriggerSections.APP
                }
            }

            function b(e) {
                var t, n;
                return {
                    type: p.ApplicationCommandSectionType.APPLICATION,
                    id: e.id,
                    name: null !== (n = null == e ? void 0 : null === (t = e.bot) || void 0 === t ? void 0 : t.username) && void 0 !== n ? n : e.name,
                    icon: e.icon,
                    application: e
                }
            }

            function G(e) {
                let t = e.id,
                    n = e.options,
                    i = null == n ? void 0 : n.find(e => e.type === d.ApplicationCommandOptionType.SUB_COMMAND_GROUP);
                null != i && (t += "".concat(m.SUB_COMMAND_KEY_SEPARATOR).concat(i.name), n = i.options);
                let a = null == n ? void 0 : n.find(e => e.type === d.ApplicationCommandOptionType.SUB_COMMAND);
                return null != a && (t += "".concat(m.SUB_COMMAND_KEY_SEPARATOR).concat(a.name), n = a.options), {
                    commandKey: t,
                    interactionOptions: n
                }
            }

            function k(e, t, n) {
                let i = T.default.useExperiment(t, n).userAppsTreatment === h.UserAppsTreatment.ALLOWED,
                    a = C.default.useExperiment({
                        guildId: null != e ? e : "",
                        ...t
                    }, n).userAppsTreatment === h.UserAppsTreatment.ALLOWED;
                return i && (null == e || a)
            }

            function F(e, t, n) {
                let i = T.default.getCurrentConfig(t, n).userAppsTreatment === h.UserAppsTreatment.ALLOWED,
                    a = C.default.getCurrentConfig({
                        guildId: null != e ? e : "",
                        ...t
                    }, n).userAppsTreatment === h.UserAppsTreatment.ALLOWED;
                return i && (a || null == e)
            }

            function w(e) {
                var t, n;
                let {
                    command: i,
                    location: a,
                    triggerSection: l,
                    queryLength: s
                } = e;
                (0, c.trackWithMetadata)(S.AnalyticEvents.APPLICATION_COMMAND_SELECTED, {
                    command_id: null !== (n = null === (t = i.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : i.id,
                    application_id: i.applicationId,
                    location: a,
                    section: l,
                    query_length: s,
                    command_text_length: i.displayName.length
                })
            }
            "use strict";
            n.r(t), n.d(t, {
                buildCommand: function() {
                    return C
                },
                buildApplicationCommands: function() {
                    return S
                },
                isSnowflake: function() {
                    return I
                },
                getMatchingGroupCommands: function() {
                    return A
                },
                getApplicationCommandOptionQueryOptions: function() {
                    return D
                },
                allChannelsSentinel: function() {
                    return N
                },
                canUseApplicationCommands: function() {
                    return O
                },
                DISABLED_BY_DEFAULT_PERMISSION_FLAG: function() {
                    return b
                },
                hasAccess: function() {
                    return P
                },
                getCommandAttachmentDraftType: function() {
                    return R
                },
                getCommandTriggerSection: function() {
                    return k
                },
                getApplicationCommandSection: function() {
                    return M
                },
                extractInteractionDataProps: function() {
                    return w
                },
                useIsInUserAppExperiment: function() {
                    return L
                },
                isInUserAppExperiment: function() {
                    return U
                },
                trackCommandSelected: function() {
                    return G
                }
            }), n("222007"), n("424973"), n("881410"), n("808653");
            var s = n("552442"),
                i = n.n(s),
                r = n("627445"),
                a = n.n(r),
                o = n("917351"),
                d = n.n(o),
                u = n("316693"),
                l = n("798609"),
                f = n("716241"),
                _ = n("892692"),
                c = n("233069"),
                g = n("474643"),
                m = n("14090"),
                h = n("524768"),
                v = n("970254"),
                E = n("696415"),
                p = n("317041"),
                y = n("49111"),
                T = n("843455");

            function C(e) {
                var t, n, s;
                let i, {
                    rootCommand: r,
                    command: a,
                    applicationId: o,
                    subCommandPath: d,
                    useKeyedPermissions: f
                } = e;
                null != r.permissions && r.permissions.length > 0 && (f ? i = (0, _.keyPermissions)(r.permissions) : (i = {}, r.permissions.forEach(e => {
                    i[e.id] = e
                })));
                let c = (null != d ? d : []).map(e => e.name),
                    g = (null != d ? d : []).map(e => e.displayName);
                return {
                    version: r.version,
                    guildId: r.guild_id,
                    id: [r.id, ...c].join(p.SUB_COMMAND_KEY_SEPARATOR),
                    name: [r.name, ...c].join(" "),
                    serverLocalizedName: a.name_localized,
                    applicationId: o,
                    type: null !== (t = r.type) && void 0 !== t ? t : l.ApplicationCommandType.CHAT,
                    inputType: h.ApplicationCommandInputType.BOT,
                    description: a.description,
                    options: function e(t) {
                        return null == t ? void 0 : t.map(t => {
                            var n, s;
                            let i = {
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
                                displayDescription: null !== (s = t.description_localized) && void 0 !== s ? s : t.description
                            };
                            if (t.type === l.ApplicationCommandOptionType.CHANNEL && "channel_types" in t) return {
                                ...i,
                                channelTypes: t.channel_types
                            };
                            if ((t.type === l.ApplicationCommandOptionType.NUMBER || t.type === l.ApplicationCommandOptionType.INTEGER) && ("min_value" in t || "max_value" in t)) return {
                                ...i,
                                minValue: t.min_value,
                                maxValue: t.max_value
                            };
                            if (t.type === l.ApplicationCommandOptionType.STRING && ("min_length" in t || "max_length" in t)) return {
                                ...i,
                                minLength: t.min_length,
                                maxLength: t.max_length
                            };
                            return i
                        })
                    }(a.options),
                    rootCommand: r,
                    subCommandPath: d,
                    defaultMemberPermissions: null == r.default_member_permissions ? void 0 : u.default.deserialize(r.default_member_permissions),
                    dmPermission: r.dm_permission,
                    permissions: i,
                    displayName: [null !== (n = r.name_localized) && void 0 !== n ? n : r.name, ...g].join(" "),
                    displayDescription: null !== (s = a.description_localized) && void 0 !== s ? s : a.description,
                    nsfw: r.nsfw,
                    contexts: r.contexts,
                    integration_types: r.integration_types
                }
            }

            function S(e, t) {
                return d.flatMap(e, e => (a(null != e.id, "Missing command id"), function e(t) {
                    var n, s;
                    let {
                        rootCommand: i,
                        command: r,
                        applicationId: a,
                        subCommandPath: o,
                        useKeyedPermissions: d
                    } = t;
                    if (r.hasOwnProperty("id")) {
                        if (null == r.options || 0 === r.options.length) return [C({
                            rootCommand: i,
                            command: r,
                            applicationId: a,
                            subCommandPath: o,
                            useKeyedPermissions: d
                        })]
                    } else if (r.type !== l.ApplicationCommandOptionType.SUB_COMMAND && r.type !== l.ApplicationCommandOptionType.SUB_COMMAND_GROUP && (null == r.options || 0 === r.options.length)) return [C({
                        rootCommand: i,
                        command: r,
                        applicationId: a,
                        subCommandPath: o,
                        useKeyedPermissions: d
                    })];
                    let u = [];
                    if (null == r.options) return u;
                    let f = r.options.filter(e => e.type === l.ApplicationCommandOptionType.SUB_COMMAND_GROUP);
                    for (let t = 0; t < f.length; t++) u.push(...e({
                        rootCommand: i,
                        command: f[t],
                        applicationId: a,
                        subCommandPath: (null != o ? o : []).concat([{
                            name: f[t].name,
                            type: l.ApplicationCommandOptionType.SUB_COMMAND_GROUP,
                            displayName: null !== (n = f[t].name_localized) && void 0 !== n ? n : f[t].name
                        }]),
                        useKeyedPermissions: d
                    }));
                    let _ = r.options.filter(e => e.type === l.ApplicationCommandOptionType.SUB_COMMAND);
                    for (let e = 0; e < _.length; e++) u.push(C({
                        rootCommand: i,
                        command: _[e],
                        applicationId: a,
                        subCommandPath: (null != o ? o : []).concat([{
                            name: _[e].name,
                            type: l.ApplicationCommandOptionType.SUB_COMMAND,
                            displayName: null !== (s = _[e].name_localized) && void 0 !== s ? s : _[e].name
                        }]),
                        useKeyedPermissions: d
                    }));
                    return 0 === f.length && 0 === _.length && u.push(C({
                        rootCommand: i,
                        command: r,
                        applicationId: a,
                        subCommandPath: o,
                        useKeyedPermissions: d
                    })), u
                }({
                    rootCommand: e,
                    command: e,
                    applicationId: e.application_id,
                    subCommandPath: void 0,
                    useKeyedPermissions: t
                })))
            }

            function I(e) {
                return y.ID_REGEX.test(e.trim())
            }

            function A(e, t, n, s) {
                let i = [];
                return d(e).forEach(e => {
                    t.test(e.displayName) && (null == e.predicate || e.predicate(n)) && i.push(e)
                }), i.slice(0, s)
            }

            function D(e) {
                let t = e.type === l.ApplicationCommandOptionType.STRING,
                    n = e.type === l.ApplicationCommandOptionType.CHANNEL,
                    s = e.type === l.ApplicationCommandOptionType.USER || e.type === l.ApplicationCommandOptionType.MENTIONABLE,
                    i = e.type === l.ApplicationCommandOptionType.ROLE || e.type === l.ApplicationCommandOptionType.MENTIONABLE;
                return {
                    canMentionEveryone: t || i,
                    canMentionHere: t,
                    canMentionChannels: t || n,
                    canMentionUsers: t || s,
                    canMentionRoles: t || i,
                    canMentionAnyGuildUser: s,
                    canMentionNonMentionableRoles: i
                }
            }

            function N(e) {
                return i(e).subtract(1).toString()
            }

            function O(e, t, n, s) {
                if (n) return !1;
                if (s.isMultiUserDM()) return U(s.guild_id, {
                    location: "canUseApplicationCommands"
                }, {
                    autoTrackExposure: !1
                }) || t.getIntegrations(s.id).length > 0;
                if (s.isDM()) return !s.isSystemDM() && (null != s.rawRecipients.find(e => e.bot) || U(s.guild_id, {
                    location: "canUseApplicationCommands"
                }, {
                    autoTrackExposure: !1
                }) || t.getIntegrations(s.id).length > 0);
                return s.isArchivedLockedThread() ? e.can(u.default.combine(T.Permissions.USE_APPLICATION_COMMANDS, T.Permissions.MANAGE_THREADS), s) : !!(0, c.isReadableType)(s.type) && e.can(u.default.combine(T.Permissions.USE_APPLICATION_COMMANDS, T.Permissions.SEND_MESSAGES), s)
            }
            let b = u.default.deserialize(0);

            function P(e) {
                let {
                    PermissionStore: t,
                    guild: n,
                    selfMember: s,
                    applicationLevelPermissions: i,
                    commandLevelPermissions: r,
                    defaultMemberPermissions: a
                } = e;
                if (n.ownerId === s.userId || t.can(T.Permissions.ADMINISTRATOR, n)) return !0;
                let o = n.id;
                if (null != r) {
                    let e = V(s, o, r);
                    if ("boolean" == typeof e) return e
                }
                let d = V(s, o, i);
                return ("boolean" != typeof d || !!d) && (null == a || !u.default.equals(a, b) && t.can(a, n))
            }

            function V(e, t, n) {
                let s = n[(0, _.toPermissionKey)(e.userId, h.ApplicationCommandPermissionType.USER)];
                if (null != s) return s.permission;
                let i = !1;
                for (let t of e.roles) {
                    let e = n[(0, _.toPermissionKey)(t, h.ApplicationCommandPermissionType.ROLE)];
                    if (null != e && (i = !0, e.permission)) return !0
                }
                if (i) return !1;
                let r = n[(0, _.toPermissionKey)(t, h.ApplicationCommandPermissionType.ROLE)];
                return null != r ? r.permission : null
            }

            function R(e) {
                switch (e) {
                    case h.CommandOrigin.CHAT:
                        return g.DraftType.SlashCommand;
                    case h.CommandOrigin.APPLICATION_LAUNCHER:
                        return g.DraftType.ApplicationLauncherCommand
                }
            }

            function k(e) {
                if (null != e) {
                    if (e.id === p.BuiltInSectionId.BUILT_IN) return h.ApplicationCommandTriggerSections.BUILT_IN;
                    else if (e.id === p.BuiltInSectionId.FRECENCY) return h.ApplicationCommandTriggerSections.FRECENCY;
                    else return h.ApplicationCommandTriggerSections.APP
                }
            }

            function M(e) {
                var t, n;
                return {
                    type: h.ApplicationCommandSectionType.APPLICATION,
                    id: e.id,
                    name: null !== (n = null == e ? void 0 : null === (t = e.bot) || void 0 === t ? void 0 : t.username) && void 0 !== n ? n : e.name,
                    icon: e.icon,
                    application: e
                }
            }

            function w(e) {
                let t = e.id,
                    n = e.options,
                    s = null == n ? void 0 : n.find(e => e.type === l.ApplicationCommandOptionType.SUB_COMMAND_GROUP);
                null != s && (t += "".concat(p.SUB_COMMAND_KEY_SEPARATOR).concat(s.name), n = s.options);
                let i = null == n ? void 0 : n.find(e => e.type === l.ApplicationCommandOptionType.SUB_COMMAND);
                return null != i && (t += "".concat(p.SUB_COMMAND_KEY_SEPARATOR).concat(i.name), n = i.options), {
                    commandKey: t,
                    interactionOptions: n
                }
            }

            function L(e, t, n) {
                let s = v.default.useExperiment(t, n).userAppsTreatment === m.UserAppsTreatment.ALLOWED,
                    i = E.default.useExperiment({
                        guildId: null != e ? e : "",
                        ...t
                    }, n).userAppsTreatment === m.UserAppsTreatment.ALLOWED;
                return s && (null == e || i)
            }

            function U(e, t, n) {
                let s = v.default.getCurrentConfig(t, n).userAppsTreatment === m.UserAppsTreatment.ALLOWED,
                    i = E.default.getCurrentConfig({
                        guildId: null != e ? e : "",
                        ...t
                    }, n).userAppsTreatment === m.UserAppsTreatment.ALLOWED;
                return s && (i || null == e)
            }

            function G(e) {
                var t, n;
                let {
                    command: s,
                    location: i,
                    triggerSection: r,
                    queryLength: a
                } = e;
                (0, f.trackWithMetadata)(y.AnalyticEvents.APPLICATION_COMMAND_SELECTED, {
                    command_id: null !== (n = null === (t = s.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : s.id,
                    application_id: s.applicationId,
                    location: i,
                    section: r,
                    query_length: a,
                    command_text_length: s.displayName.length
                })
            }
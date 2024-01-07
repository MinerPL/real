            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            }), n("222007");
            var a = n("917351"),
                s = n.n(a),
                i = n("970728"),
                l = n("987317"),
                r = n("393414"),
                o = n("233069"),
                u = n("42203"),
                d = n("305961"),
                c = n("957255"),
                E = n("18494"),
                f = n("800762"),
                _ = n("404008"),
                h = n("861309"),
                C = n("578287"),
                T = n("716724"),
                I = n("613652"),
                S = n("492249"),
                N = n("49111"),
                A = {
                    [N.RPCCommands.GET_CHANNEL]: {
                        scope: {
                            [S.RPC_SCOPE_CONFIG.ANY]: [N.OAuth2Scopes.RPC, N.OAuth2Scopes.GUILDS]
                        },
                        handler(e) {
                            let {
                                args: {
                                    channel_id: t
                                },
                                socket: n
                            } = e, a = u.default.getChannel(t);
                            if (null == a) throw new h.default(S.RPCErrors.INVALID_CHANNEL, "Invalid channel id: ".concat(t));
                            if (a.isPrivate()) {
                                let e = n.authorization.scopes;
                                if (!e.includes(N.OAuth2Scopes.RPC) && !e.includes(N.OAuth2Scopes.DM_CHANNELS_READ)) throw new h.default(S.RPCErrors.INVALID_PERMISSIONS, "Invalid scope")
                            }
                            return (0, C.transformChannel)(a, (0, C.hasMessageReadPermission)(a, n.application.id, n.authorization.scopes))
                        }
                    },
                    [N.RPCCommands.GET_CHANNELS]: {
                        scope: N.OAuth2Scopes.RPC,
                        handler(e) {
                            let {
                                args: {
                                    guild_id: t
                                }
                            } = e, n = s.values(u.default.loadAllGuildAndPrivateChannelsFromDisk());
                            if (t) {
                                let e = d.default.getGuild(t);
                                if (null == e) throw new h.default(S.RPCErrors.INVALID_GUILD, "Invalid guild id: ".concat(t));
                                n = n.filter(t => {
                                    let {
                                        guild_id: n
                                    } = t;
                                    return n === e.id
                                })
                            }
                            return {
                                channels: n.filter(e => c.default.can(N.Permissions.VIEW_CHANNEL, e)).map(e => {
                                    let {
                                        id: t,
                                        name: n,
                                        type: a
                                    } = e;
                                    return {
                                        id: t,
                                        name: n,
                                        type: a
                                    }
                                })
                            }
                        }
                    },
                    [N.RPCCommands.GET_CHANNEL_PERMISSIONS]: {
                        scope: N.OAuth2Scopes.GUILDS_MEMBERS_READ,
                        handler(e) {
                            let t = (0, I.default)();
                            if (null == t) throw new h.default(S.RPCErrors.INVALID_CHANNEL, "Invalid channel");
                            return {
                                permissions: c.default.computePermissions(t)
                            }
                        }
                    },
                    [N.RPCCommands.SELECT_VOICE_CHANNEL]: {
                        scope: N.OAuth2Scopes.RPC,
                        validation: e => (0, T.default)(e).required().keys({
                            channel_id: e.string().allow(null),
                            timeout: e.number().min(0).max(60),
                            force: e.boolean(),
                            navigate: e.boolean()
                        }),
                        handler(e) {
                            let {
                                server: t,
                                socket: n,
                                args: {
                                    channel_id: a,
                                    timeout: s = 0,
                                    force: i = !1,
                                    navigate: T = !1
                                }
                            } = e;
                            if (!a) return l.default.selectVoiceChannel(null), null;
                            let I = E.default.getVoiceChannelId();
                            if (null != I && I !== a && !1 === i) throw new h.default(S.RPCErrors.SELECT_VOICE_FORCE_REQUIRED, "User is already joined to a voice channel.");
                            return t.storeWait(n, () => u.default.getChannel(a), s).catch(() => {
                                throw new h.default(S.RPCErrors.SELECT_CHANNEL_TIMED_OUT, "Request to select voice channel timed out.")
                            }).then(e => {
                                if (null == e) throw new h.default(S.RPCErrors.INVALID_CHANNEL, "Invalid channel id: ".concat(a));
                                if (!(0, o.isVoiceChannel)(e.type)) throw new h.default(S.RPCErrors.INVALID_CHANNEL, "Channel is not a voice channel");
                                return Promise.all([Promise.resolve(e), (0, C.transformChannel)(e, (0, C.hasMessageReadPermission)(e, n.application.id, n.authorization.scopes))])
                            }).then(e => {
                                let [t, n] = e;
                                if (n.guild_id) {
                                    if ((0, _.isChannelFull)(t, f.default, d.default)) throw new h.default(S.RPCErrors.INVALID_CHANNEL, "Channel is full");
                                    if (!c.default.can(N.Permissions.CONNECT, t)) throw new h.default(S.RPCErrors.INVALID_PERMISSIONS, "Connect permission required to join channel")
                                }
                                return l.default.selectVoiceChannel(t.id), T && (0, r.replaceWith)(N.Routes.CHANNEL(t.guild_id, t.id)), n
                            })
                        }
                    },
                    [N.RPCCommands.GET_SELECTED_VOICE_CHANNEL]: {
                        scope: {
                            [S.RPC_SCOPE_CONFIG.ANY]: [N.OAuth2Scopes.RPC, N.OAuth2Scopes.RPC_VOICE_READ]
                        },
                        handler(e) {
                            let {
                                socket: t
                            } = e, n = E.default.getVoiceChannelId(), a = null != n ? u.default.getChannel(n) : null;
                            return null != a ? (0, C.transformChannel)(a, (0, C.hasMessageReadPermission)(a, t.application.id, t.authorization.scopes)) : null
                        }
                    },
                    [N.RPCCommands.SELECT_TEXT_CHANNEL]: {
                        scope: N.OAuth2Scopes.RPC,
                        validation: e => (0, T.default)(e).required().keys({
                            channel_id: e.string().allow(null),
                            timeout: e.number().min(0).max(60)
                        }),
                        handler(e) {
                            let {
                                server: t,
                                socket: n,
                                args: {
                                    channel_id: a,
                                    timeout: s = 0
                                }
                            } = e;
                            return a ? t.storeWait(n, () => u.default.getChannel(a), s).catch(() => {
                                throw new h.default(S.RPCErrors.SELECT_CHANNEL_TIMED_OUT, "Request to select text channel timed out.")
                            }).then(e => {
                                if (null == e) throw new h.default(S.RPCErrors.INVALID_CHANNEL, "Invalid channel id: ".concat(a));
                                if (!(0, o.isTextChannel)(e.type)) throw new h.default(S.RPCErrors.INVALID_CHANNEL, "Channel is not a text channel");
                                return Promise.all([Promise.resolve(e), (0, C.transformChannel)(e, (0, C.hasMessageReadPermission)(e, n.application.id, n.authorization.scopes))])
                            }).then(e => {
                                let [t, n] = e;
                                if (n.guild_id && !c.default.can(N.Permissions.VIEW_CHANNEL, t)) throw new h.default(S.RPCErrors.INVALID_CHANNEL, "No permission to see channel");
                                return n.guild_id ? (0, r.replaceWith)(N.Routes.CHANNEL(n.guild_id, t.id)) : l.default.selectPrivateChannel(t.id), n
                            }) : ((0, r.transitionTo)(N.Routes.ME), null)
                        }
                    },
                    [N.RPCCommands.CREATE_CHANNEL_INVITE]: {
                        scope: N.OAuth2Scopes.RPC,
                        handler(e) {
                            let {
                                args: {
                                    channel_id: t,
                                    ...n
                                }
                            } = e;
                            return i.default.createInvite(t, n, "RPC").catch(() => {
                                throw new h.default(S.RPCErrors.INVALID_PERMISSIONS, "Unable to generate an invite for ".concat(t, ". Does this user have permissions?"))
                            })
                        }
                    }
                }
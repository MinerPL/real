            "use strict";
            n.r(t), n.d(t, {
                GUILD_SELECTABLE_CHANNELS_KEY: function() {
                    return v
                },
                GUILD_VOCAL_CHANNELS_KEY: function() {
                    return A
                },
                default: function() {
                    return K
                }
            }), n("424973"), n("222007"), n("808653");
            var i = n("917351"),
                r = n.n(i),
                s = n("316693"),
                a = n("446674"),
                o = n("913144"),
                l = n("203288"),
                u = n("679653"),
                c = n("379881"),
                d = n("106682"),
                f = n("233069"),
                E = n("991170"),
                h = n("271938"),
                p = n("42203"),
                _ = n("26989"),
                S = n("305961"),
                m = n("957255"),
                T = n("27618"),
                g = n("697218"),
                I = n("49111"),
                C = n("782340");
            let v = "SELECTABLE",
                A = "VOCAL",
                R = null,
                N = {},
                O = {},
                D = {},
                y = null,
                P = {},
                L = {
                    comparator: -1,
                    channel: (0, f.createChannelRecord)({
                        id: "null",
                        type: I.ChannelTypes.GUILD_CATEGORY,
                        name: C.default.Messages.UNCATEGORIZED
                    })
                },
                b = G("null"),
                M = [],
                U = {};

            function G(e) {
                return {
                    id: e,
                    [v]: [],
                    [A]: [],
                    [I.ChannelTypes.GUILD_CATEGORY]: [L],
                    count: 0
                }
            }

            function w(e, t) {
                let {
                    comparator: n
                } = e, {
                    comparator: i
                } = t;
                return n - i
            }

            function k() {
                N = {}, P = {}, O = {}, D = {}, null != R && x(R)
            }

            function x(e) {
                var t;
                let n = G(e);
                return N[e] = n, P[e] = [], ! function(e) {
                        let {
                            id: t
                        } = e, n = function(e) {
                            if (e === I.FAVORITES) return function() {
                                let e = {},
                                    t = c.default.getFavoriteChannels();
                                for (let n in t) {
                                    let i = p.default.getChannel(n);
                                    if (null == i) continue;
                                    let r = t[n],
                                        s = (0, d.createFavoritesChannelRecord)(t, r, i);
                                    e[n] = {
                                        channel: s,
                                        comparator: s.position
                                    }
                                }
                                return e
                            }();
                            let t = {},
                                n = p.default.getMutableGuildChannelsForGuild(e);
                            for (let e in n) t[e] = {
                                channel: n[e],
                                comparator: n[e].position
                            };
                            return t
                        }(t);
                        r.forEach(n, n => {
                            var i;
                            let r = n.channel;
                            if (e.count += 1, f.GUILD_NON_CATEGORY_CHANNEL_TYPES.has(r.type) && !m.default.can(I.Permissions.VIEW_CHANNEL, r) && !l.default.isChannelGated(r.guild_id, r.id) && r.id !== y) return;
                            let s = (i = r.type, (0, f.isGuildSelectableChannelType)(i) ? v : (0, f.isGuildVocalChannelType)(i) ? A : i);
                            r.type === I.ChannelTypes.GUILD_DIRECTORY && (null == P[t] && (P[t] = []), P[t].push(n)), null != e[s] && e[s].push(n)
                        })
                    }(n), (t = n)[v].sort(w), t[A].sort(w), t[I.ChannelTypes.GUILD_CATEGORY].sort(w),
                    function(e) {
                        let t = O[e.id] = {},
                            n = {};
                        e[v].forEach(e => {
                            let {
                                channel: i
                            } = e, r = (0, u.computeChannelName)(i, g.default, T.default), s = Object.prototype.hasOwnProperty.call(n, r) ? n[r] : null;
                            null == s ? n[r] = 1 : (n[r] = s + 1, r += "~".concat(s)), t[i.id] = {
                                id: i.id,
                                name: r
                            }
                        })
                    }(n),
                    function(e) {
                        let t = g.default.getCurrentUser();
                        (function(e, t) {
                            let n = S.default.getGuild(t);
                            if (null != n && H(e, n)) return !0;
                            let i = N[t];
                            null == i && (i = x(t));
                            let {
                                [v]: r, [A]: s
                            } = i;
                            for (let {
                                    channel: t
                                }
                                of r)
                                if (H(e, t)) return !0;
                            for (let {
                                    channel: t
                                }
                                of s)
                                if (H(e, t)) return !0;
                            return !1
                        })(t, e) ? D[e] = !0: delete D[e]
                    }(e), n
            }

            function F(e) {
                let {
                    guild: {
                        id: t
                    }
                } = e;
                if (null == t) return !1;
                N[t] = void 0, R === t && x(t)
            }

            function V(e) {
                let {
                    channel: {
                        guild_id: t
                    }
                } = e;
                if (null == t) return !1;
                N[t] = void 0, t === R && x(t)
            }

            function B(e) {
                let {
                    guildId: t
                } = e;
                N[t] = void 0, t === R && x(t)
            }

            function H(e, t) {
                return s.default.hasAny(E.default.computePermissions({
                    user: e,
                    context: t,
                    checkElevated: !1
                }), I.ElevatedPermissions)
            }

            function j(e, t) {
                var n;
                y = t;
                let i = null !== (n = null == e ? void 0 : e.getGuildId()) && void 0 !== n ? n : null;
                if (null == i) return !1;
                N[i] = void 0, i === R && x(i)
            }

            function Y() {
                x(I.FAVORITES)
            }
            class W extends a.default.Store {
                initialize() {
                    this.waitFor(S.default, _.default, p.default, m.default, h.default, l.default, c.default), this.syncWith([c.default], Y)
                }
                getAllGuilds() {
                    return N
                }
                getChannels(e) {
                    var t;
                    let n;
                    return null != e ? (null == (n = N[t = e]) && (n = x(t)), n) : b
                }
                getFirstChannelOfType(e, t, n) {
                    let i = this.getChannels(e)[n],
                        r = i.find(t);
                    return null != r ? r.channel : null
                }
                getFirstChannel(e, t) {
                    var n;
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return null !== (n = this.getFirstChannelOfType(e, t, v)) && void 0 !== n ? n : i ? this.getFirstChannelOfType(e, t, A) : null
                }
                getDefaultChannel(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : I.Permissions.VIEW_CHANNEL;
                    return this.getFirstChannel(e, e => m.default.can(n, e.channel), t)
                }
                getSFWDefaultChannel(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : I.Permissions.VIEW_CHANNEL;
                    return this.getFirstChannel(e, e => m.default.can(n, e.channel) && !e.channel.nsfw, t)
                }
                getSelectableChannelIds(e) {
                    return this.getChannels(e)[v].map(e => {
                        let {
                            channel: t
                        } = e;
                        return t.id
                    })
                }
                getSelectableChannels(e) {
                    return this.getChannels(e)[v]
                }
                getVocalChannelIds(e) {
                    return this.getChannels(e)[A].map(e => {
                        let {
                            channel: t
                        } = e;
                        return t.id
                    })
                }
                getDirectoryChannelIds(e) {
                    var t, n;
                    return null !== (n = null === (t = P[e]) || void 0 === t ? void 0 : t.map(e => {
                        let {
                            channel: t
                        } = e;
                        return t.id
                    })) && void 0 !== n ? n : M
                }
                hasSelectableChannel(e, t) {
                    return this.getSelectableChannelIds(e).includes(t)
                }
                hasElevatedPermissions(e) {
                    return D[e] || !1
                }
                hasChannels(e) {
                    return this.getChannels(e).count > 0
                }
                hasCategories(e) {
                    return this.getChannels(e)[I.ChannelTypes.GUILD_CATEGORY].length > 1
                }
                getTextChannelNameDisambiguations(e) {
                    var t;
                    return null != e && null !== (t = O[e]) && void 0 !== t ? t : U
                }
            }
            W.displayName = "GuildChannelStore";
            var K = new W(o.default, {
                BACKGROUND_SYNC: k,
                CHANNEL_SELECT: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (R = null != t ? t : null, null == t || null != N[t]) return !1;
                    x(t)
                },
                CONNECTION_OPEN: k,
                OVERLAY_INITIALIZE: k,
                CACHE_LOADED_LAZY: k,
                GUILD_CREATE: F,
                GUILD_UPDATE: F,
                GUILD_DELETE: function(e) {
                    let {
                        guild: {
                            id: t
                        }
                    } = e;
                    return delete N[t], delete O[t], delete D[t], delete P[t], !0
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: t,
                        user: n
                    } = e;
                    if (h.default.getId() !== n.id) return !1;
                    N[t] = void 0, t === R && x(t)
                },
                CHANNEL_CREATE: V,
                CHANNEL_DELETE: V,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e, n = !1;
                    for (let e of t) {
                        let {
                            guild_id: t
                        } = e;
                        null != t && (N[t] = void 0, n = !0, R === t && x(t))
                    }
                    return n
                },
                GUILD_ROLE_CREATE: B,
                GUILD_ROLE_UPDATE: B,
                GUILD_ROLE_DELETE: B,
                IMPERSONATE_UPDATE: B,
                IMPERSONATE_STOP: B,
                VOICE_CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return null == t && null != y ? j(p.default.getChannel(y), null) : j(p.default.getChannel(t), t)
                },
                VOICE_CHANNEL_STATUS_UPDATE: function(e) {
                    let t = p.default.getBasicChannel(e.id);
                    null != t && null != t.guild_id && x(t.guild_id)
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return t.reduce((e, t) => {
                        let {
                            channelId: n,
                            sessionId: i
                        } = t;
                        return h.default.getSessionId() !== i ? e : j(p.default.getChannel(n), n) || e
                    }, !1)
                }
            })
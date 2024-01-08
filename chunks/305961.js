            "use strict";
            let i;
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("222007"), n("424973");
            var r = n("917351"),
                s = n.n(r),
                a = n("446674"),
                o = n("913144"),
                l = n("813006"),
                u = n("665618"),
                c = n("605136"),
                d = n("271938"),
                f = n("49111"),
                E = n("695838");
            let h = {},
                p = !1,
                _ = [];

            function S(e) {
                h = {}, i = 0, null != e.guilds && s.forEach(e.guilds, e => {
                    i++, h[e.id] = u.fromSerializedGuildRecord(e)
                })
            }

            function m(e) {
                let {
                    guildId: t,
                    role: n
                } = e, i = h[t];
                null != i && (h = {
                    ...h,
                    [i.id]: i.upsertRole(c.fromServerRole(n))
                })
            }
            class T extends a.default.Store {
                getGuild(e) {
                    if (null != e) return e === f.FAVORITES ? E.FAVORITES_GUILD_RECORD : h[e]
                }
                getGuilds() {
                    return h
                }
                getGuildIds() {
                    return Object.keys(h)
                }
                getGuildCount() {
                    return i
                }
                isLoaded() {
                    return p
                }
                getGeoRestrictedGuilds() {
                    return _
                }
            }
            T.displayName = "GuildStore";
            var g = new T(o.default, {
                BACKGROUND_SYNC: function(e) {
                    for (let t of e.guilds) {
                        let e = h[t.id];
                        if (null == e || "unavailable" === t.data_mode) return;
                        h[t.id] = u.fromBackgroundSync(t, e)
                    }
                    i = Object.keys(h).length
                },
                CONNECTION_OPEN: function(e) {
                    p = !0, h = {}, i = 0, e.guilds.forEach(e => {
                        i++, h[e.id] = u.fromServer(e)
                    }), _ = e.geoRestrictedGuilds
                },
                OVERLAY_INITIALIZE: function(e) {
                    var t;
                    h = {}, i = 0, null === (t = e.guilds) || void 0 === t || t.forEach(e => {
                        i++, h[e.id] = new l.default(e)
                    })
                },
                CACHE_LOADED: S,
                CACHE_LOADED_LAZY: S,
                GUILD_CREATE: function(e) {
                    let t = u.fromServer(e.guild, h[e.guild.id]);
                    null == h[t.id] && i++, h = {
                        ...h,
                        [t.id]: t
                    }
                },
                GUILD_UPDATE: function(e) {
                    let t = u.fromServerUpdate(e.guild, h[e.guild.id]);
                    null == h[t.id] && i++, h = {
                        ...h,
                        [t.id]: t
                    }
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    if (null == h[t.id] || t.unavailable) return !1;
                    h = {
                        ...h
                    }, delete h[t.id], i--
                },
                GUILD_ROLE_CREATE: m,
                GUILD_ROLE_UPDATE: m,
                GUILD_ROLE_DELETE: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, i = h[t];
                    null != i && (h = {
                        ...h,
                        [t]: i.deleteRole(n)
                    })
                },
                GUILD_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        joinedAt: n,
                        user: i
                    } = e, r = d.default.getId(), s = h[t];
                    if (r !== i.id || null == s) return !1;
                    let a = "string" == typeof n ? new Date(n) : n;
                    if (a === s.joinedAt || null == a) return !1;
                    h = {
                        ...h,
                        [t]: s.updateJoinedAt(a)
                    }
                },
                GUILD_SETTINGS_SUBMIT_SUCCESS: function() {
                    return !0
                },
                GUILD_GEO_RESTRICTED: function(e) {
                    _.push({
                        id: e.guildId,
                        name: e.name,
                        icon: e.icon,
                        unavailable: !0,
                        geo_restricted: !0
                    })
                }
            })
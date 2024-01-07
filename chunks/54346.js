            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007");
            var i = n("446674"),
                l = n("913144"),
                u = n("374363"),
                a = n("305961"),
                r = n("957255"),
                d = n("607620"),
                s = n("610174"),
                o = n("311161");
            let c = {},
                f = {};

            function _() {
                var e;
                let t = null !== (e = u.default.getGuildsProto()) && void 0 !== e ? e : {},
                    n = a.default.getGuilds(),
                    i = Object.keys(n);
                for (let e of (f = {}, i))(0, s.getGuildAlertModeEnabled)(e).showAlertMode && (f[e] = {
                    guildId: e,
                    guildName: n[e].name,
                    ...t[e]
                })
            }

            function A(e) {
                return null != e && Object.keys(e).length > 0 ? {
                    raidDetectedAt: e.raid_detected_at,
                    dmSpamDetectedAt: e.dm_spam_detected_at,
                    dmsDisabledUntil: e.dms_disabled_until,
                    invitesDisabledUntil: e.invites_disabled_until
                } : null
            }
            class D extends i.default.Store {
                initialize() {
                    this.waitFor(u.default, a.default, r.default, d.default), this.syncWith([u.default, a.default, r.default, d.default], _)
                }
                getGuildIncident(e) {
                    return c[e]
                }
                getIncidentsByGuild() {
                    return c
                }
                getGuildAlertSettings() {
                    return f
                }
            }
            D.displayName = "GuildIncidentsStore";
            var I = new D(l.default, {
                CONNECTION_OPEN: function(e) {
                    for (let t of (c = {}, e.guilds)) {
                        let e = A(t.properties.incidents_data);
                        null != e && ((0, o.hasDetectedActivity)(e) || (0, o.isUnderLockdown)(e)) && (c[t.id] = e)
                    }
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e, n = A(t.properties.incidents_data);
                    null != n && ((0, o.hasDetectedActivity)(n) || (0, o.isUnderLockdown)(n)) && (c[t.id] = n)
                },
                GUILD_UPDATE: function(e) {
                    let {
                        guild: t
                    } = e, n = A(t.incidents_data);
                    null != n && ((0, o.hasDetectedActivity)(n) || (0, o.isUnderLockdown)(n)) ? c[t.id] = n : delete c[t.id]
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete c[t.id]
                },
                LOGOUT: function(e) {
                    c = {}
                }
            })
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("424973");
            var a = n("446674"),
                s = n("913144"),
                i = n("680762"),
                l = n("305961");
            let r = {},
                o = () => {
                    r = {
                        guildAffinitiesByGuildId: {},
                        guildAffinities: [],
                        lastFetched: 0
                    }
                };
            o();
            class u extends a.default.PersistedStore {
                initialize(e) {
                    null != e && (r = e), this.waitFor(l.default)
                }
                getState() {
                    return r
                }
                getGuildAffinity(e) {
                    return r.guildAffinitiesByGuildId[e]
                }
                get affinities() {
                    return r.guildAffinities
                }
                get hasRequestResolved() {
                    return 0 !== r.lastFetched
                }
            }
            u.displayName = "GuildAffinitiesStore", u.persistKey = "GuildAffinitiesStore";
            var d = new u(s.default, {
                CONNECTION_OPEN: function() {
                    return Date.now() - r.lastFetched > 864e5 && (0, i.fetchGuildAffinities)(), !1
                },
                LOAD_GUILD_AFFINITIES_SUCCESS: function(e) {
                    let {
                        guildAffinities: t
                    } = e;
                    r.guildAffinities = [], r.guildAffinitiesByGuildId = {}, r.lastFetched = Date.now(), t.forEach((e, t) => {
                        let {
                            affinity: n,
                            guild_id: a
                        } = e, s = {
                            score: n,
                            guildId: a,
                            index: t
                        };
                        r.guildAffinitiesByGuildId[a] = s, r.guildAffinities.push(s)
                    })
                },
                LOGOUT: function() {
                    o()
                }
            })
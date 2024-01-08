            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var a = n("298386"),
                l = n("446674"),
                i = n("913144"),
                u = n("619443");
            let s = new Set,
                d = {};

            function r() {
                s.clear()
            }

            function o(e) {
                s.delete(e.guild.id)
            }
            class c extends l.default.Store {
                getChannelStatus(e) {
                    var t;
                    if (null != e && null != e.guild_id) {
                        if (e.type === a.ChannelTypes.GUILD_VOICE) return !s.has(e.guild_id) && (s.add(e.guild_id), u.default.getSocket().requestChannelStatuses(e.guild_id)), null === (t = d[e.guild_id]) || void 0 === t ? void 0 : t[e.id]
                    }
                }
            }
            c.displayName = "ChannelStatusStore";
            var f = new c(i.default, {
                GUILD_CREATE: o,
                GUILD_DELETE: o,
                CONNECTION_RESUMED: r,
                CONNECTION_OPEN: r,
                VOICE_CHANNEL_STATUS_UPDATE: function(e) {
                    null == d[e.guildId] && (d[e.guildId] = {}), d[e.guildId][e.id] = e.status
                },
                CHANNEL_STATUSES: function(e) {
                    for (let {
                            id: t,
                            status: n
                        }
                        of(d[e.guildId] = {}, e.channels)) d[e.guildId][t] = n
                }
            })
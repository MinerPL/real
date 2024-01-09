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
            let d = new Set,
                s = {};

            function r() {
                d.clear()
            }

            function o(e) {
                d.delete(e.guild.id)
            }
            class c extends l.default.Store {
                getChannelStatus(e) {
                    var t;
                    if (null != e && null != e.guild_id) {
                        if (e.type === a.ChannelTypes.GUILD_VOICE) return !d.has(e.guild_id) && (d.add(e.guild_id), u.default.getSocket().requestChannelStatuses(e.guild_id)), null === (t = s[e.guild_id]) || void 0 === t ? void 0 : t[e.id]
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
                    null == s[e.guildId] && (s[e.guildId] = {}), s[e.guildId][e.id] = e.status
                },
                CHANNEL_STATUSES: function(e) {
                    for (let {
                            id: t,
                            status: n
                        }
                        of(s[e.guildId] = {}, e.channels)) s[e.guildId][t] = n
                }
            })
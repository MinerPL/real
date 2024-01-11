            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var i = n("298386"),
                s = n("446674"),
                l = n("913144"),
                a = n("619443");
            let r = new Set,
                d = {};

            function h() {
                r.clear()
            }

            function o(e) {
                r.delete(e.guild.id)
            }
            class u extends s.default.Store {
                getChannelStatus(e) {
                    var t;
                    if (null != e && null != e.guild_id) {
                        if (e.type === i.ChannelTypes.GUILD_VOICE) return !r.has(e.guild_id) && (r.add(e.guild_id), a.default.getSocket().requestChannelStatuses(e.guild_id)), null === (t = d[e.guild_id]) || void 0 === t ? void 0 : t[e.id]
                    }
                }
            }
            u.displayName = "ChannelStatusStore";
            var c = new u(l.default, {
                GUILD_CREATE: o,
                GUILD_DELETE: o,
                CONNECTION_RESUMED: h,
                CONNECTION_OPEN: h,
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
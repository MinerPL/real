            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                a = n("95410"),
                l = n("913144");
            let s = "GuildNSFWAgreeStore",
                r = {};
            class u extends i.default.Store {
                initialize() {
                    var e;
                    r = null !== (e = a.default.get(s)) && void 0 !== e ? e : r
                }
                didAgree(e) {
                    return null != e && (r[e] || !1)
                }
            }
            u.displayName = "GuildNSFWAgreeStore";
            var o = new u(l.default, {
                GUILD_NSFW_AGREE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    r[t] = !0, a.default.set(s, r)
                }
            })
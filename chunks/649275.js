            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var a = n("271938"),
                l = n("957255"),
                s = n("316133"),
                i = n("991170"),
                r = n("398604"),
                u = n("270161");

            function o(e) {
                if (!e.isGuildVoice()) return !1;
                let t = r.default.getGuildScheduledEventsByIndex(r.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e.id));
                if (t.length < 1) return !1;
                let n = l.default.can(u.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS, e);
                if (!n) return !1;
                let o = new Set(s.default.getVoiceStatesForChannel(e).map(e => e.user.id)),
                    d = a.default.getId();
                for (let t of o)
                    if (t !== d && i.default.can({
                            permission: u.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS,
                            user: t,
                            context: e
                        })) return !1;
                return !0
            }
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("446674"),
                s = n("290886"),
                l = n("282109"),
                i = n("512395"),
                r = n("724210");

            function o(e) {
                var t;
                let n = (0, i.useOptInEnabledForGuild)((null == e ? void 0 : e.getGuildId()) != null ? e.guild_id : "null"),
                    o = (0, a.useStateFromStores)([l.default], () => null != e && l.default.isChannelRecordOrParentOptedIn(e)),
                    u = (0, s.useCanSeeOnboardingHome)(null !== (t = null == e ? void 0 : e.guild_id) && void 0 !== t ? t : "null");
                if (null == e) return !1;
                let d = u && e.hasFlag(r.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL);
                return n && !d && !o && !e.isThread()
            }
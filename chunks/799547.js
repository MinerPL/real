            "use strict";
            l.r(t), l.d(t, {
                getEventChannelsByType: function() {
                    return r
                },
                useGetEventChannelsByType: function() {
                    return i
                }
            }), l("222007"), l("424973");
            var n = l("446674"),
                a = l("817963");
            l("834052");
            var s = l("923959");

            function r(e, t) {
                let [l] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.default];
                if (null == t) return [];
                let n = l.getChannels(e)[s.GUILD_VOCAL_CHANNELS_KEY],
                    r = [];
                for (let {
                        channel: e
                    }
                    of n) {
                    let {
                        canCreateGuildEvent: l,
                        canManageAllEvents: n
                    } = (0, a.getManageResourcePermissions)(e), s = l || n;
                    e.type === t && (e.isGuildVoice() && s ? r.push(e) : e.isGuildStageVoice() && s && r.push(e))
                }
                return r
            }

            function i(e, t) {
                return (0, n.useStateFromStoresArray)([s.default], () => r(e, t, [s.default]), [e, t])
            }
            l("957255"), l("270161")
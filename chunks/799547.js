            "use strict";
            n.r(t), n.d(t, {
                getEventChannelsByType: function() {
                    return i
                },
                useGetEventChannelsByType: function() {
                    return r
                }
            }), n("222007"), n("424973");
            var l = n("446674"),
                a = n("817963");
            n("834052");
            var s = n("923959");

            function i(e, t) {
                let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.default];
                if (null == t) return [];
                let l = n.getChannels(e)[s.GUILD_VOCAL_CHANNELS_KEY],
                    i = [];
                for (let {
                        channel: e
                    }
                    of l) {
                    let {
                        canCreateGuildEvent: n,
                        canManageAllEvents: l
                    } = (0, a.getManageResourcePermissions)(e), s = n || l;
                    e.type === t && (e.isGuildVoice() && s ? i.push(e) : e.isGuildStageVoice() && s && i.push(e))
                }
                return i
            }

            function r(e, t) {
                return (0, l.useStateFromStoresArray)([s.default], () => i(e, t, [s.default]), [e, t])
            }
            n("957255"), n("270161")
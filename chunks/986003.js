            "use strict";
            a.r(t), a.d(t, {
                hasNotSetUpChannelOptIn: function() {
                    return c
                },
                toggleShowAllChannels: function() {
                    return f
                },
                optIntoAllChannelsForExistingMember: function() {
                    return E
                }
            }), a("702976"), a("222007"), a("424973"), a("151426");
            var l = a("921031");
            a("374363");
            var n = a("923959"),
                s = a("26989"),
                u = a("282109"),
                i = a("568734"),
                d = a("629220"),
                r = a("512395"),
                o = a("657944");

            function c(e) {
                var t, a;
                let l = (0, r.isOptInEnabledForGuild)(e),
                    n = null !== (a = null === (t = s.default.getSelfMember(e)) || void 0 === t ? void 0 : t.flags) && void 0 !== a ? a : 0,
                    d = (0, i.hasFlag)(n, o.GuildMemberFlags.COMPLETED_ONBOARDING),
                    c = u.default.getOptedInChannels(e).size > 0;
                return !l && !d && !c
            }

            function f(e) {
                if (c(e)) {
                    E(e);
                    return
                } {
                    let t = (0, r.isOptInEnabledForGuild)(e);
                    (0, d.setGuildOptIn)(e, !t)
                }
            }

            function E(e) {
                let {
                    include: t = new Set,
                    exclude: a = new Set
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s = n.default.getChannels(e), u = [...s[0, n.GUILD_SELECTABLE_CHANNELS_KEY], ...s[0, n.GUILD_VOCAL_CHANNELS_KEY]].filter(e => {
                    let {
                        channel: t
                    } = e;
                    return !t.isThread() && !a.has(t.id)
                }).map(e => {
                    let {
                        channel: t
                    } = e;
                    return t.id
                });
                t.forEach(e => u.push(e)), l.default.onboardExistingMember(e, new Set(u))
            }
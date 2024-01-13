            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("881410"), n("222007"), n("424973");
            var s = n("917351"),
                i = n.n(s),
                a = n("267363"),
                l = n("863636"),
                u = n("401690"),
                r = n("923959"),
                o = n("660478"),
                d = n("599110"),
                c = n("49111"),
                f = n("133335");

            function S(e, t, n) {
                let s = i.flatMap(e, e => {
                    let t = r.default.getSelectableChannelIds(e),
                        n = r.default.getVocalChannelIds(e),
                        s = [...t, ...n],
                        i = u.default.getActiveJoinedThreadsForGuild(e);
                    for (let e of t) {
                        var a;
                        let t = null !== (a = i[e]) && void 0 !== a ? a : {};
                        for (let e in t) s.push(e)
                    }
                    return s
                }).map(e => ({
                    channelId: e,
                    readStateType: f.ReadStateTypes.CHANNEL,
                    messageId: o.default.lastMessageId(e)
                }));
                return e.forEach(e => {
                    s.push({
                        channelId: e,
                        readStateType: f.ReadStateTypes.GUILD_EVENT,
                        messageId: o.default.lastMessageId(e, f.ReadStateTypes.GUILD_EVENT)
                    }), s.push({
                        channelId: e,
                        readStateType: f.ReadStateTypes.GUILD_ONBOARDING_QUESTION,
                        messageId: l.default.ackIdForGuild(e)
                    })
                }), d.default.track(c.AnalyticEvents.MARK_AS_READ, {
                    source: t,
                    type: "guild"
                }), (0, a.bulkAck)(s, n)
            }
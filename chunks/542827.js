            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("881410"), n("222007"), n("424973");
            var i = n("917351"),
                s = n.n(i),
                a = n("267363"),
                l = n("863636"),
                u = n("401690"),
                d = n("923959"),
                o = n("660478"),
                r = n("599110"),
                c = n("49111"),
                f = n("133335");

            function S(e, t, n) {
                let i = s.flatMap(e, e => {
                    let t = d.default.getSelectableChannelIds(e),
                        n = d.default.getVocalChannelIds(e),
                        i = [...t, ...n],
                        s = u.default.getActiveJoinedThreadsForGuild(e);
                    for (let e of t) {
                        var a;
                        let t = null !== (a = s[e]) && void 0 !== a ? a : {};
                        for (let e in t) i.push(e)
                    }
                    return i
                }).map(e => ({
                    channelId: e,
                    readStateType: f.ReadStateTypes.CHANNEL,
                    messageId: o.default.lastMessageId(e)
                }));
                return e.forEach(e => {
                    i.push({
                        channelId: e,
                        readStateType: f.ReadStateTypes.GUILD_EVENT,
                        messageId: o.default.lastMessageId(e, f.ReadStateTypes.GUILD_EVENT)
                    }), i.push({
                        channelId: e,
                        readStateType: f.ReadStateTypes.GUILD_ONBOARDING_QUESTION,
                        messageId: l.default.ackIdForGuild(e)
                    })
                }), r.default.track(c.AnalyticEvents.MARK_AS_READ, {
                    source: t,
                    type: "guild"
                }), (0, a.bulkAck)(i, n)
            }
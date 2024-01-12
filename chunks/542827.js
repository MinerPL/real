            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            }), n("881410"), n("222007"), n("424973");
            var i = n("917351"),
                o = n.n(i),
                l = n("267363"),
                a = n("863636"),
                d = n("401690"),
                u = n("923959"),
                s = n("660478"),
                E = n("599110"),
                r = n("49111"),
                _ = n("133335");

            function A(e, t, n) {
                let i = o.flatMap(e, e => {
                    let t = u.default.getSelectableChannelIds(e),
                        n = u.default.getVocalChannelIds(e),
                        i = [...t, ...n],
                        o = d.default.getActiveJoinedThreadsForGuild(e);
                    for (let e of t) {
                        var l;
                        let t = null !== (l = o[e]) && void 0 !== l ? l : {};
                        for (let e in t) i.push(e)
                    }
                    return i
                }).map(e => ({
                    channelId: e,
                    readStateType: _.ReadStateTypes.CHANNEL,
                    messageId: s.default.lastMessageId(e)
                }));
                return e.forEach(e => {
                    i.push({
                        channelId: e,
                        readStateType: _.ReadStateTypes.GUILD_EVENT,
                        messageId: s.default.lastMessageId(e, _.ReadStateTypes.GUILD_EVENT)
                    }), i.push({
                        channelId: e,
                        readStateType: _.ReadStateTypes.GUILD_ONBOARDING_QUESTION,
                        messageId: a.default.ackIdForGuild(e)
                    })
                }), E.default.track(r.AnalyticEvents.MARK_AS_READ, {
                    source: t,
                    type: "guild"
                }), (0, l.bulkAck)(i, n)
            }
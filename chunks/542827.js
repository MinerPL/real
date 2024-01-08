            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("881410"), n("222007"), n("424973");
            var a = n("917351"),
                r = n.n(a),
                i = n("267363"),
                l = n("863636"),
                u = n("401690"),
                o = n("923959"),
                s = n("660478"),
                d = n("599110"),
                c = n("49111"),
                p = n("133335");

            function f(e, t, n) {
                let a = r.flatMap(e, e => {
                    let t = o.default.getSelectableChannelIds(e),
                        n = o.default.getVocalChannelIds(e),
                        a = [...t, ...n],
                        r = u.default.getActiveJoinedThreadsForGuild(e);
                    for (let e of t) {
                        var i;
                        let t = null !== (i = r[e]) && void 0 !== i ? i : {};
                        for (let e in t) a.push(e)
                    }
                    return a
                }).map(e => ({
                    channelId: e,
                    readStateType: p.ReadStateTypes.CHANNEL,
                    messageId: s.default.lastMessageId(e)
                }));
                return e.forEach(e => {
                    a.push({
                        channelId: e,
                        readStateType: p.ReadStateTypes.GUILD_EVENT,
                        messageId: s.default.lastMessageId(e, p.ReadStateTypes.GUILD_EVENT)
                    }), a.push({
                        channelId: e,
                        readStateType: p.ReadStateTypes.GUILD_ONBOARDING_QUESTION,
                        messageId: l.default.ackIdForGuild(e)
                    })
                }), d.default.track(c.AnalyticEvents.MARK_AS_READ, {
                    source: t,
                    type: "guild"
                }), (0, i.bulkAck)(a, n)
            }
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("881410"), n("222007"), n("424973");
            var r = n("917351"),
                a = n.n(r),
                i = n("267363"),
                l = n("863636"),
                o = n("401690"),
                u = n("923959"),
                s = n("660478"),
                d = n("599110"),
                c = n("49111"),
                f = n("133335");

            function h(e, t, n) {
                let r = a.flatMap(e, e => {
                    let t = u.default.getSelectableChannelIds(e),
                        n = u.default.getVocalChannelIds(e),
                        r = [...t, ...n],
                        a = o.default.getActiveJoinedThreadsForGuild(e);
                    for (let e of t) {
                        var i;
                        let t = null !== (i = a[e]) && void 0 !== i ? i : {};
                        for (let e in t) r.push(e)
                    }
                    return r
                }).map(e => ({
                    channelId: e,
                    readStateType: f.ReadStateTypes.CHANNEL,
                    messageId: s.default.lastMessageId(e)
                }));
                return e.forEach(e => {
                    r.push({
                        channelId: e,
                        readStateType: f.ReadStateTypes.GUILD_EVENT,
                        messageId: s.default.lastMessageId(e, f.ReadStateTypes.GUILD_EVENT)
                    }), r.push({
                        channelId: e,
                        readStateType: f.ReadStateTypes.GUILD_ONBOARDING_QUESTION,
                        messageId: l.default.ackIdForGuild(e)
                    })
                }), d.default.track(c.AnalyticEvents.MARK_AS_READ, {
                    source: t,
                    type: "guild"
                }), (0, i.bulkAck)(r, n)
            }
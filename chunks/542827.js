            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("881410"), n("222007"), n("424973");
            var u = n("917351"),
                l = n.n(u),
                d = n("267363"),
                a = n("863636"),
                i = n("401690"),
                r = n("923959"),
                o = n("660478"),
                E = n("599110"),
                s = n("49111"),
                f = n("133335");

            function C(e, t, n) {
                let u = l.flatMap(e, e => {
                    let t = r.default.getSelectableChannelIds(e),
                        n = r.default.getVocalChannelIds(e),
                        u = [...t, ...n],
                        l = i.default.getActiveJoinedThreadsForGuild(e);
                    for (let e of t) {
                        var d;
                        let t = null !== (d = l[e]) && void 0 !== d ? d : {};
                        for (let e in t) u.push(e)
                    }
                    return u
                }).map(e => ({
                    channelId: e,
                    readStateType: f.ReadStateTypes.CHANNEL,
                    messageId: o.default.lastMessageId(e)
                }));
                return e.forEach(e => {
                    u.push({
                        channelId: e,
                        readStateType: f.ReadStateTypes.GUILD_EVENT,
                        messageId: o.default.lastMessageId(e, f.ReadStateTypes.GUILD_EVENT)
                    }), u.push({
                        channelId: e,
                        readStateType: f.ReadStateTypes.GUILD_ONBOARDING_QUESTION,
                        messageId: a.default.ackIdForGuild(e)
                    })
                }), E.default.track(s.AnalyticEvents.MARK_AS_READ, {
                    source: t,
                    type: "guild"
                }), (0, d.bulkAck)(u, n)
            }
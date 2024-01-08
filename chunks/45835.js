            "use strict";
            n.r(t), n.d(t, {
                getSavedMessageAndChannel: function() {
                    return d
                }
            });
            var l = n("298386"),
                a = n("233069"),
                s = n("719926"),
                i = n("766274"),
                r = n("42203"),
                o = n("377253"),
                u = n("697218");

            function d(e) {
                var t, n, d;
                let c = o.default.getMessage(e.channelId, e.messageId),
                    f = u.default.getUser(e.authorId),
                    E = r.default.getChannel(e.channelId),
                    h = null != f ? f : new i.default({
                        id: e.authorId,
                        username: e.authorSummary
                    }),
                    _ = new s.default({
                        id: e.messageId,
                        channel_id: e.channelId,
                        author: h,
                        content: e.messageSummary
                    }),
                    S = null == e.guildId ? new a.DMChannelRecord({
                        id: e.channelId,
                        type: l.ChannelTypes.DM,
                        name: null !== (t = e.channelSummary) && void 0 !== t ? t : "",
                        guild_id: "",
                        recipients: [null !== (n = e.authorId) && void 0 !== n ? n : ""]
                    }) : new a.GuildTextualChannelRecord({
                        id: e.channelId,
                        type: null == e.guildId ? l.ChannelTypes.DM : l.ChannelTypes.GUILD_TEXT,
                        name: null !== (d = e.channelSummary) && void 0 !== d ? d : "",
                        guild_id: e.guildId
                    });
                return {
                    channel: null != E ? E : S,
                    message: null != c ? c : _
                }
            }
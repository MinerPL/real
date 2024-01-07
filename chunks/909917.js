            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("627445"),
                l = n.n(s),
                i = n("246060"),
                r = n("730541"),
                o = n("407972"),
                u = n("981601"),
                d = n("42203"),
                c = n("25116");

            function f(e, t) {
                if ((0, r.isPublicSystemMessage)(t)) return (0, a.jsx)(o.default, {});
                if ((0, c.default)(t)) {
                    let {
                        guild_id: e,
                        channel_id: n,
                        message_id: s
                    } = t.messageReference;
                    if (null != e) return (0, a.jsx)(i.default, {
                        guildId: e,
                        channelId: n,
                        messageId: s
                    })
                }
                if (null != t.interaction && "SENDING" === t.state) return (0, a.jsx)(a.Fragment, {});
                let n = d.default.getChannel(t.channel_id);
                return l(null != n, "renderUserGuildPopout: channel should never be null"), (0, a.jsx)(u.default, {
                    ...e,
                    channelId: t.channel_id,
                    guildId: n.guild_id,
                    userId: t.author.id,
                    user: null != t.webhookId ? t.author : void 0
                })
            }
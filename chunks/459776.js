            "use strict";
            n.r(t), n.d(t, {
                isNewGroupItem: function() {
                    return r
                },
                default: function() {
                    return o
                }
            });
            var l = n("888400"),
                a = n("500858"),
                s = n("913491"),
                i = n("49111");

            function r(e, t, n) {
                return null == t || t.type === i.ChannelStreamTypes.MESSAGE && t.content.id === t.content.channel_id || t.type !== i.ChannelStreamTypes.MESSAGE && t.type !== i.ChannelStreamTypes.THREAD_STARTER_MESSAGE || o(e, t.content, n)
            }

            function o(e, t, n) {
                if (n.hasFlag(i.MessageFlags.HAS_THREAD) || n.isCommandType()) return !0;
                if (n.type > i.MessageTypes.DEFAULT) return !(0, s.default)(t) || n.type === i.MessageTypes.REPLY || !1;
                return !!((0, s.default)(t) || t.author.id !== n.author.id || t.hasFlag(i.MessageFlags.EPHEMERAL) !== n.hasFlag(i.MessageFlags.EPHEMERAL) || null != n.webhookId && t.author.username !== n.author.username || (null == e ? void 0 : e.isForumPost()) && t.id === e.id || !(0, l.isWithinInterval)(t.timestamp, n.timestamp, 42e4) || n.hasFlag(i.MessageFlags.SUPPRESS_NOTIFICATIONS) && !t.hasFlag(i.MessageFlags.SUPPRESS_NOTIFICATIONS) || t.hasFlag(i.MessageFlags.SUPPRESS_NOTIFICATIONS) && !n.hasFlag(i.MessageFlags.SUPPRESS_NOTIFICATIONS) && (n.mentions.length > 0 || n.mentionRoles.length > 0 || n.mentionEveryone) || (0, a.default)(n)) || !1
            }
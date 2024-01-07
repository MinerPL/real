            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                },
                getAllMessagesFromFeedItem: function() {
                    return l
                },
                getAllMessageIdsFromFeedItem: function() {
                    return u
                }
            }), n("222007"), n("834022");
            var d = n("611221"),
                i = n("449008");

            function r(e) {
                switch (e.type) {
                    case d.GuildFeedItemTypes.MESSAGE:
                    case d.GuildFeedItemTypes.FORUM_POST:
                        return e.message;
                    case d.GuildFeedItemTypes.MESSAGE_BUNDLE:
                        return e.messages[e.messages.length - 1].message;
                    case d.GuildFeedItemTypes.CONVERSATION:
                        return e.root.messages[e.root.messages.length - 1];
                    default:
                        (0, i.assertNever)(e)
                }
            }

            function l(e) {
                switch (e.type) {
                    case d.GuildFeedItemTypes.MESSAGE:
                    case d.GuildFeedItemTypes.FORUM_POST:
                        return new Set([e.message]);
                    case d.GuildFeedItemTypes.MESSAGE_BUNDLE:
                        return new Set(e.messages.map(e => e.message));
                    case d.GuildFeedItemTypes.CONVERSATION:
                        return new Set(function e(t) {
                            let n = t.children.map(t => e(t));
                            return [t.messages, ...n].flat()
                        }(e.root));
                    default:
                        (0, i.assertNever)(e)
                }
            }

            function u(e) {
                return new Set(Array.from(l(e)).map(e => e.id))
            }
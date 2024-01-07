            "use strict";
            n.r(t), n.d(t, {
                GUILD_FEED_MESSAGE_ITEM_ID_TEMPLATE: function() {
                    return l
                },
                default: function() {
                    return u
                },
                getGuildFeedItemIdFromFeatureableItem: function() {
                    return s
                },
                getFeedItemTypeFromId: function() {
                    return a
                }
            });
            var d = n("611221"),
                i = n("449008");
            let r = e => "".concat(d.GuildFeedItemTypes.FORUM_POST, "/").concat(e),
                l = e => "".concat(d.GuildFeedItemTypes.MESSAGE, "/").concat(e);

            function u(e) {
                switch (e.type) {
                    case d.GuildFeedItemTypes.FORUM_POST:
                        return r(e.message.id);
                    case d.GuildFeedItemTypes.MESSAGE:
                        return l(e.message.id);
                    case d.GuildFeedItemTypes.MESSAGE_BUNDLE:
                    case d.GuildFeedItemTypes.CONVERSATION:
                        return e.id;
                    default:
                        (0, i.assertNever)(e)
                }
            }

            function s(e) {
                switch (e.entityType) {
                    case d.GuildFeedItemTypes.FORUM_POST:
                        return r(e.entity.id);
                    case d.GuildFeedItemTypes.MESSAGE:
                        return l(e.entity.id);
                    default:
                        (0, i.assertNever)(e)
                }
            }

            function a(e) {
                return e.split("/")[0]
            }
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("49111"),
                a = n("782340");

            function s(e) {
                if (null == e) return null;
                switch (e.type) {
                    case l.ChannelTypes.GUILD_ANNOUNCEMENT:
                        return a.default.Messages.NEWS_CHANNEL;
                    case l.ChannelTypes.GUILD_STORE:
                        return a.default.Messages.STORE_CHANNEL;
                    case l.ChannelTypes.DM:
                    case l.ChannelTypes.GROUP_DM:
                        return a.default.Messages.DM;
                    case l.ChannelTypes.PRIVATE_THREAD:
                        return a.default.Messages.PRIVATE_THREAD;
                    case l.ChannelTypes.ANNOUNCEMENT_THREAD:
                    case l.ChannelTypes.PUBLIC_THREAD:
                        return a.default.Messages.THREAD;
                    case l.ChannelTypes.GUILD_TEXT:
                        return a.default.Messages.TEXT_CHANNEL;
                    case l.ChannelTypes.GUILD_FORUM:
                        let t = e.isMediaChannel();
                        return t ? a.default.Messages.MEDIA_CHANNEL : a.default.Messages.FORUM_CHANNEL;
                    case l.ChannelTypes.GUILD_MEDIA:
                        return a.default.Messages.MEDIA_CHANNEL;
                    case l.ChannelTypes.GUILD_STAGE_VOICE:
                        return a.default.Messages.STAGE_CHANNEL;
                    case l.ChannelTypes.GUILD_VOICE:
                        return a.default.Messages.VOICE_CHANNEL;
                    case l.ChannelTypes.GUILD_CATEGORY:
                    default:
                        return null
                }
            }
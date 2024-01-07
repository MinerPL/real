            "use strict";
            n.r(t), n.d(t, {
                LAST_HIDDEN_CHANNEL_NOTICE: function() {
                    return E
                },
                CHANNEL_NOTICES: function() {
                    return f
                },
                CHANNEL_NOTICE_STORES: function() {
                    return _
                }
            });
            var a = n("151426"),
                s = n("116460"),
                i = n("779671"),
                l = n("8452"),
                r = n("433973"),
                o = n("150057"),
                u = n("141162"),
                d = n("449008"),
                c = n("49111");
            let E = "lastHiddenChannelNotice",
                f = [{
                    type: c.ChannelNoticeTypes.GUILD_BOOSTING,
                    store: l.default,
                    dismissibleContentType: a.DismissibleContent.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION
                }, {
                    type: c.ChannelNoticeTypes.GUILD_BANNER,
                    store: i.default,
                    dismissibleContentType: a.DismissibleContent.CHANNEL_NOTICE_GUILD_BANNER
                }, {
                    type: c.ChannelNoticeTypes.INVITE,
                    store: u.default,
                    dismissibleContentType: a.DismissibleContent.CHANNEL_NOTICE_INVITE
                }, {
                    type: c.ChannelNoticeTypes.HUB_LINK,
                    store: o.default,
                    dismissibleContentType: a.DismissibleContent.CHANNEL_NOTICE_HUBLINK
                }, {
                    type: c.ChannelNoticeTypes.QUICKSWITCHER,
                    store: s.default,
                    dismissibleContentType: a.DismissibleContent.CHANNEL_NOTICE_QUICKSWITCHER
                }, {
                    type: c.ChannelNoticeTypes.GUILD_ONBOARDING_UPSELL,
                    store: r.default,
                    dismissibleContentType: a.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE
                }, {
                    type: c.ChannelNoticeTypes.LINKED_ROLES_ADMIN,
                    dismissibleContentType: a.DismissibleContent.LINKED_ROLE_ADMIN_GUILD
                }, {
                    type: c.ChannelNoticeTypes.CLYDE_ADMIN_NUX,
                    dismissibleContentType: a.DismissibleContent.CHANNEL_NOTICE_CLYDE_NUX
                }, {
                    type: c.ChannelNoticeTypes.CLYDE_USER_NUX,
                    dismissibleContentType: a.DismissibleContent.CHANNEL_NOTICE_CLYDE_NUX
                }],
                _ = f.map(e => e.store).filter(d.isNotNullish)
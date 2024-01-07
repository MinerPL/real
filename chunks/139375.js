            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("424973");
            var i = n("233069"),
                l = n("27618"),
                r = n("697218"),
                s = n("679653"),
                a = n("49111"),
                u = n("782340");

            function o(e) {
                let {
                    isSubscriptionGated: t,
                    needSubscriptionToAccess: n
                } = e;
                if (t) return n ? u.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_LOCKED : u.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_UNLOCKED
            }

            function d(e) {
                let t, {
                        channel: n,
                        unread: d = !1,
                        mentionCount: c = 0,
                        userCount: f,
                        embeddedActivitiesCount: E,
                        isSubscriptionGated: _,
                        needSubscriptionToAccess: p
                    } = e,
                    h = (0, s.computeChannelName)(n, r.default, l.default);
                switch (n.type) {
                    case a.ChannelTypes.DM:
                        t = d ? u.default.Messages.DIRECT_MESSAGE_A11Y_LABEL_WITH_UNREADS : u.default.Messages.DIRECT_MESSAGE_A11Y_LABEL;
                        break;
                    case a.ChannelTypes.GROUP_DM:
                        t = d ? u.default.Messages.GROUP_MESSAGE_A11Y_LABEL_WITH_UNREADS : u.default.Messages.GROUP_MESSAGE_A11Y_LABEL;
                        break;
                    case a.ChannelTypes.GUILD_STORE:
                        t = u.default.Messages.GUILD_SIDEBAR_STORE_CHANNEL_A11Y_LABEL;
                        break;
                    case a.ChannelTypes.GUILD_DIRECTORY:
                        t = u.default.Messages.GUILD_SIDEBAR_DIRECTORY_CHANNEL_A11Y_LABEL;
                        break;
                    case a.ChannelTypes.GUILD_ANNOUNCEMENT:
                        t = c > 0 ? u.default.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_MENTIONS : d ? u.default.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_UNREADS : u.default.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL;
                        break;
                    case a.ChannelTypes.GUILD_VOICE:
                        let S = [u.default.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL.format({
                            channelName: n.name
                        })];
                        if (c > 0 && S.push(u.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_MENTIONS.format({
                                mentionCount: c
                            })), d && S.push(u.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_UNREAD), null != f) {
                            let e = n.userLimit;
                            null != e && e > 0 ? S.push(u.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_LIMIT.format({
                                userCount: f,
                                limit: e
                            })) : S.push(u.default.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL_USERS.format({
                                userCount: f
                            }))
                        }
                        null != E && E > 0 && S.push(u.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_ACTIVITIES.format({
                            activitiesCount: E
                        }));
                        let m = o({
                            isSubscriptionGated: _,
                            needSubscriptionToAccess: p
                        });
                        return null != m && S.push(m), S.join(", ");
                    case a.ChannelTypes.GUILD_STAGE_VOICE:
                        t = u.default.Messages.GUILD_SIDEBAR_STAGE_CHANNEL_A11Y_LABEL;
                        break;
                    default:
                        t = i.THREAD_CHANNEL_TYPES.has(n.type) ? c > 0 ? u.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_MENTIONS : d ? u.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_UNREADS : u.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL : c > 0 ? u.default.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_MENTIONS : d ? u.default.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_UNREADS : u.default.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL
                }
                let M = [t.format({
                        channelName: h,
                        mentionCount: c
                    })],
                    L = o({
                        isSubscriptionGated: _,
                        needSubscriptionToAccess: p
                    });
                return null != L && M.push(L), M.join(", ")
            }
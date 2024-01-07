            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var i, a, l = n("599110"),
                s = n("253981"),
                r = n("340454"),
                u = n("361572"),
                o = n("49111");
            (a = i || (i = {})).MESSAGE = "Discord Message Link", a.CHANNEL = "Discord Channel Link", a.SERVER_INVITE = "Discord Server Invite", a.GIFT = "Discord Gift Link", a.UNKNOWN = "Unknown";
            let d = [e => r.default.isInvite(e) ? "Discord Server Invite" : null, e => {
                let t = s.default.safeParseWithQuery(e);
                if (null == t) return null;
                let n = (0, u.tryParseChannelPath)(t.path);
                return null == n ? null : c({
                    guildId: n.guildId,
                    channelId: n.channelId,
                    messageId: n.messageId
                })
            }];

            function c(e) {
                return null != e.guildId && null != e.channelId && null != e.messageId ? "Discord Message Link" : null != e.guildId && null != e.channelId ? "Discord Channel Link" : "Unknown"
            }
            var _ = {
                trackDiscordLinkClicked: function(e) {
                    l.default.track(o.AnalyticEvents.LINK_CLICKED, {
                        is_discord_link: !0,
                        discord_link_type: c(e)
                    })
                },
                trackLinkClicked: function(e, t) {
                    var n, i;
                    if (null == e && null == t) return;
                    let a = s.default.isDiscordUrl(e, !0) || null != t;
                    l.default.track(o.AnalyticEvents.LINK_CLICKED, {
                        is_discord_link: a,
                        discord_link_type: a ? (n = e, null == (i = t) && null == n ? "Unknown" : null == i ? function(e) {
                            for (let t of d) {
                                let n = t(e);
                                if (null != n) return n
                            }
                            return "Unknown"
                        }(n) : c(i)) : null
                    })
                },
                trackAnnouncementMessageLinkClicked: function(e) {
                    let {
                        messageId: t,
                        channelId: n,
                        guildId: i,
                        sourceChannelId: a,
                        sourceGuildId: s
                    } = e;
                    l.default.track(o.AnalyticEvents.ANNOUNCEMENT_MESSAGE_LINK_CLICKED, {
                        message_id: t,
                        channel_id: n,
                        guild_id: i,
                        source_channel_id: a,
                        source_guild_id: s
                    })
                }
            }
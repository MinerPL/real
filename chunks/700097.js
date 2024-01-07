            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var a = n("933805"),
                s = n("409129"),
                l = n("277683"),
                i = n("843257"),
                r = n("692038"),
                o = n("574073"),
                u = n("950576"),
                d = n("719926"),
                c = n("271938"),
                f = n("42203"),
                m = n("305961"),
                E = n("697218"),
                _ = n("387111"),
                h = n("299039"),
                p = n("49111"),
                I = n("782340");
            let T = {
                    "234395307759108106": "https://groovy.bot/commands",
                    "365975655608745985": "https://www.pokecord.com/getting-started",
                    "512412940897484800": "http://jameslantz.net/smilebot"
                },
                g = () => [I.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001_HOOK, I.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002_HOOK, I.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003_HOOK, I.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004_HOOK, I.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005_HOOK, I.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006_HOOK, I.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007_HOOK, I.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008_HOOK, I.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009_HOOK, I.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010_HOOK, I.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011_HOOK, I.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012_HOOK, I.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013_HOOK],
                C = () => [I.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001, I.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002, I.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003, I.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004, I.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005, I.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006, I.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007, I.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008, I.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009, I.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010, I.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011, I.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012, I.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013];

            function S(e) {
                let t = C(),
                    n = h.default.extractTimestamp(e) % t.length;
                return t[n]
            }

            function A(e) {
                return (0, a.astToString)(I.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
                    username: e,
                    usernameOnClick: p.NOOP
                }))
            }

            function N(e, t) {
                let n = f.default.getChannel(t);
                if (null == n) return A(e);
                let s = m.default.getGuild(n.getGuildId());
                return null == s ? A(e) : (0, a.astToString)(I.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
                    username: e,
                    usernameOnClick: p.NOOP
                }))
            }
            var M = {
                stringify: function(e, t) {
                    var n, h, T, g;
                    let C = null === (n = e.mentions) || void 0 === n ? void 0 : n[0],
                        M = null != C && "string" != typeof C ? E.default.getUser(C.id) : void 0,
                        v = e.channel_id,
                        x = _.default.getName(null, v, e.author);
                    switch (e.type) {
                        case p.MessageTypes.RECIPIENT_ADD:
                            if (null == M) return;
                            return (0, a.astToString)(I.default.Messages.SYSTEM_MESSAGE_RECIPIENT_ADD.astFormat({
                                username: x,
                                usernameOnClick: p.NOOP,
                                otherUsername: _.default.getName(null, v, M),
                                otherUsernameOnClick: p.NOOP
                            }));
                        case p.MessageTypes.RECIPIENT_REMOVE:
                            if (null == M) return;
                            let O = e.author;
                            if (null == O || O.id === M.id) return (0, a.astToString)(I.default.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_SELF.astFormat({
                                username: x,
                                usernameOnClick: p.NOOP
                            }));
                            return (0, a.astToString)(I.default.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE.astFormat({
                                username: x,
                                usernameOnClick: p.NOOP,
                                otherUsername: _.default.getName(null, v, M),
                                otherUsernameOnClick: p.NOOP
                            }));
                        case p.MessageTypes.CALL:
                            let {
                                call: L
                            } = e;
                            if (null != L && -1 === L.participants.indexOf(c.default.getId())) return (0, a.astToString)(I.default.Messages.SYSTEM_MESSAGE_CALL_STARTED.astFormat({
                                username: x,
                                usernameOnClick: p.NOOP
                            }));
                            return;
                        case p.MessageTypes.CHANNEL_NAME_CHANGE:
                            return (0, a.astToString)((t.isForumPost() ? I.default.Messages.SYSTEM_MESSAGE_FORUM_POST_TITLE_CHANGE : I.default.Messages.SYSTEM_MESSAGE_CHANNEL_NAME_CHANGE).astFormat({
                                username: x,
                                usernameOnClick: p.NOOP,
                                channelName: e.content
                            }));
                        case p.MessageTypes.CHANNEL_ICON_CHANGE:
                            return (0, a.astToString)(I.default.Messages.SYSTEM_MESSAGE_CHANNEL_ICON_CHANGE.astFormat({
                                username: x,
                                usernameOnClick: p.NOOP
                            }));
                        case p.MessageTypes.CHANNEL_PINNED_MESSAGE:
                            return (0, a.astToString)(I.default.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA.astFormat({
                                username: x,
                                usernameOnClick: p.NOOP
                            }));
                        case p.MessageTypes.USER_JOIN:
                            return (0, a.astToString)(S(e.id).astFormat({
                                username: x,
                                usernameOnClick: p.NOOP
                            }));
                        case p.MessageTypes.GUILD_BOOST:
                            return A(x);
                        case p.MessageTypes.GUILD_BOOST_TIER_1:
                        case p.MessageTypes.GUILD_BOOST_TIER_2:
                        case p.MessageTypes.GUILD_BOOST_TIER_3:
                            return N(x, v);
                        case p.MessageTypes.GUILD_INVITE_REMINDER:
                            return I.default.Messages.SYSTEM_MESSAGE_INVITE_NOTIFICATION;
                        case p.MessageTypes.THREAD_STARTER_MESSAGE:
                            return I.default.Messages.THREAD_STARTER_MESSAGE_NOTIFICATION.format({
                                username: x,
                                threadName: t.name
                            });
                        case p.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE:
                            if (e instanceof d.default) return null;
                            return (0, a.astToString)((0, i.getRoleSubscriptionPurchaseSystemMessageContentMobile)({
                                username: x,
                                guildId: t.guild_id,
                                roleSubscriptionData: e.role_subscription_data
                            }));
                        case p.MessageTypes.PURCHASE_NOTIFICATION:
                            if (e instanceof d.default || (null === (T = e.purchase_notification) || void 0 === T ? void 0 : null === (h = T.guild_product_purchase) || void 0 === h ? void 0 : h.product_name) == null) return null;
                            return (0, a.astToString)((0, l.getGuildProductPurchaseSystemMessageContentMobile)({
                                username: x,
                                productName: e.purchase_notification.guild_product_purchase.product_name
                            }));
                        case p.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                            if (e instanceof d.default) return null;
                            let R = (0, o.getMessageAuthor)((0, r.createMessageRecord)(e));
                            return (0, a.astToString)((0, s.getApplicationSubscriptionSystemMessageASTContent)({
                                application: e.application,
                                username: R.nick
                            }));
                        case p.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                            if (e instanceof d.default) return null;
                            return (0, a.astToString)((0, u.getPrivateChannelIntegrationAddedSystemMessageASTContent)({
                                application: e.application,
                                username: (0, o.getMessageAuthor)((0, r.createMessageRecord)(e)).nick
                            }));
                        case p.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                            if (e instanceof d.default) return null;
                            return (0, a.astToString)((0, u.getPrivateChannelIntegrationRemovedSystemMessageASTContent)({
                                application: e.application,
                                username: (0, o.getMessageAuthor)((0, r.createMessageRecord)(e)).nick
                            }));
                        case p.MessageTypes.AUTO_MODERATION_ACTION:
                            if (null === (g = e.embeds) || void 0 === g ? void 0 : g.some(e => {
                                    let {
                                        type: t
                                    } = e;
                                    return t === p.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
                                })) return function(e) {
                                let t = f.default.getChannel(e);
                                if (null == t) return null;
                                let n = m.default.getGuild(t.getGuildId());
                                return null == n ? null : (0, a.astToString)(I.default.Messages.GUILD_SERVER_RAID_ALERT_NOTIFICATION.astFormat({
                                    guildName: n.name
                                }))
                            }(v);
                            return e.content;
                        case p.MessageTypes.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                            return function(e, t, n) {
                                let s = f.default.getChannel(t);
                                if (null == s) return null;
                                let l = m.default.getGuild(s.getGuildId());
                                return null == l ? null : (0, a.astToString)(I.default.Messages.GUILD_SERVER_LOCKDOWN_ENABLED_NOTIFICATION.astFormat({
                                    username: e,
                                    guildName: l.name,
                                    time: "" !== n ? new Date(n).toLocaleString(I.default.getLocale(), {
                                        hour: "numeric",
                                        minute: "2-digit"
                                    }) : ""
                                }))
                            }(x, v, e.content);
                        case p.MessageTypes.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                            return function(e, t) {
                                let n = f.default.getChannel(t);
                                if (null == n) return null;
                                let s = m.default.getGuild(n.getGuildId());
                                return null == s ? null : (0, a.astToString)(I.default.Messages.GUILD_SERVER_LOCKDOWN_DISABLED_NOTIFICATION.astFormat({
                                    username: e,
                                    guildName: s.name
                                }))
                            }(x, v);
                        default:
                            return e.content
                    }
                },
                getSystemMessageUserJoin: function(e) {
                    let t = g(),
                        n = h.default.extractTimestamp(e) % t.length;
                    return t[n]
                },
                getSystemMessageUserJoinMobile: S,
                getSystemMessageBotJoin: function(e) {
                    return null == T[e] ? null : I.default.Messages.SYSTEM_MESSAGE_GUILD_BOT_JOIN.format({
                        learnOnClick: {
                            onClick: () => window.open(T[e])
                        }
                    })
                }
            }
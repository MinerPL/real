            "use strict";
            n.r(t), n.d(t, {
                useChannelNotificationRadioItems: function() {
                    return _
                },
                default: function() {
                    return E
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("77078"),
                l = n("519705"),
                u = n("721281"),
                r = n("282109"),
                d = n("34676"),
                o = n("49111"),
                c = n("782340");

            function f(e) {
                var t, n, a;
                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                switch (e.type) {
                    case o.ChannelTypes.GUILD_VOICE:
                        ;
                        return i ? (t = e, [{
                            setting: o.UserNotificationSettings.NULL,
                            label: null != t.parent_id ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: o.UserNotificationSettings.ALL_MESSAGES,
                            label: c.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY
                        }, {
                            setting: o.UserNotificationSettings.ONLY_MENTIONS,
                            label: c.default.Messages.FORM_LABEL_ONLY_TEXT_MENTIONS.format()
                        }, {
                            setting: o.UserNotificationSettings.NO_MESSAGES,
                            label: c.default.Messages.FORM_LABEL_NOTHING
                        }]) : null;
                    case o.ChannelTypes.GUILD_STAGE_VOICE:
                        ;
                        return n = e, [{
                            setting: o.UserNotificationSettings.NULL,
                            label: null != n.parent_id ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: o.UserNotificationSettings.ONLY_MENTIONS,
                            label: c.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY
                        }, {
                            setting: o.UserNotificationSettings.NO_MESSAGES,
                            label: c.default.Messages.FORM_LABEL_NOTHING
                        }];
                    default:
                        ;
                        return a = e, [{
                            setting: o.UserNotificationSettings.NULL,
                            label: null != a.parent_id ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: o.UserNotificationSettings.ALL_MESSAGES,
                            label: c.default.Messages.FORM_LABEL_ALL_MESSAGES
                        }, {
                            setting: o.UserNotificationSettings.ONLY_MENTIONS,
                            label: c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                        }, {
                            setting: o.UserNotificationSettings.NO_MESSAGES,
                            label: c.default.Messages.FORM_LABEL_NOTHING
                        }]
                }
            }

            function _(e) {
                let t = e.getGuildId(),
                    n = e.id,
                    _ = (0, i.useStateFromStores)([r.default], () => {
                        let n = o.UserNotificationSettings.NULL;
                        return null != e.parent_id && (n = r.default.getChannelMessageNotifications(t, e.parent_id)), n !== o.UserNotificationSettings.NULL ? n : r.default.getMessageNotifications(t)
                    }, [t, e.parent_id]),
                    E = (0, i.useStateFromStores)([r.default], () => r.default.getNewForumThreadsCreated(e)),
                    N = (0, i.useStateFromStores)([r.default], () => r.default.getChannelOverrides(t)[n], [t, n]),
                    g = null == N ? o.UserNotificationSettings.NULL : N.message_notifications,
                    M = (0, u.useVoiceActivityNotificationSettingsExperiment)(e),
                    S = f(e, M);
                return null == S ? null : (0, a.jsxs)(a.Fragment, {
                    children: [e.isForumLikeChannel() ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(s.MenuCheckboxItem, {
                            id: "new-forum-threads-created",
                            label: c.default.Messages.FORUM_NEW_POSTS_CREATED,
                            checked: E,
                            action: () => l.default.setForumThreadsCreated(e, !E)
                        }), (0, a.jsx)(s.MenuSeparator, {})]
                    }) : null, S.map(i => {
                        let {
                            setting: u,
                            label: r
                        } = i;
                        return (0, a.jsx)(s.MenuRadioItem, {
                            group: "channel-notifications",
                            id: "".concat(u),
                            label: r,
                            subtext: u === o.UserNotificationSettings.NULL ? function(e, t) {
                                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                switch (e) {
                                    case o.UserNotificationSettings.ALL_MESSAGES:
                                        return t.type === o.ChannelTypes.GUILD_VOICE && n ? c.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY : c.default.Messages.FORM_LABEL_ALL_MESSAGES;
                                    case o.UserNotificationSettings.ONLY_MENTIONS:
                                        return c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format();
                                    case o.UserNotificationSettings.NO_MESSAGES:
                                        return c.default.Messages.FORM_LABEL_NOTHING;
                                    case o.UserNotificationSettings.NULL:
                                    default:
                                        return
                                }
                            }(_, e, M) : void 0,
                            action: () => {
                                var e;
                                return e = u, void(null != t && l.default.updateChannelOverrideSettings(t, n, {
                                    message_notifications: e
                                }, d.NotificationLabel.notifications(e)))
                            },
                            checked: u === g
                        }, u)
                    })]
                })
            }

            function E(e) {
                var t, n;
                let l = _(e),
                    d = (0, i.useStateFromStores)([r.default], () => r.default.resolvedMessageNotifications(e), [e]),
                    E = (0, i.useStateFromStores)([r.default], () => r.default.getChannelOverrides(e.guild_id)[e.id], [e.guild_id, e.id]),
                    N = null == E ? o.UserNotificationSettings.NULL : E.message_notifications,
                    g = (0, u.useVoiceActivityNotificationSettingsExperiment)(e),
                    M = N === o.UserNotificationSettings.NULL && e.isGuildStageVoice() ? c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format() : null === (n = f(e, g)) || void 0 === n ? void 0 : null === (t = n.find(e => {
                        let {
                            setting: t
                        } = e;
                        return t === d
                    })) || void 0 === t ? void 0 : t.label;
                return null != l ? (0, a.jsx)(s.MenuItem, {
                    id: "channel-notifications",
                    label: c.default.Messages.NOTIFICATION_SETTINGS,
                    subtext: M,
                    children: l
                }) : null
            }
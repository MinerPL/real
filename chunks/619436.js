            "use strict";
            n.r(t), n.d(t, {
                useChannelNotificationRadioItems: function() {
                    return _
                },
                default: function() {
                    return p
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("77078"),
                u = n("519705"),
                l = n("721281"),
                o = n("282109"),
                r = n("34676"),
                d = n("49111"),
                c = n("782340");

            function f(e) {
                var t, n, a;
                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                switch (e.type) {
                    case d.ChannelTypes.GUILD_VOICE:
                        ;
                        return i ? (t = e, [{
                            setting: d.UserNotificationSettings.NULL,
                            label: null != t.parent_id ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: d.UserNotificationSettings.ALL_MESSAGES,
                            label: c.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY
                        }, {
                            setting: d.UserNotificationSettings.ONLY_MENTIONS,
                            label: c.default.Messages.FORM_LABEL_ONLY_TEXT_MENTIONS.format()
                        }, {
                            setting: d.UserNotificationSettings.NO_MESSAGES,
                            label: c.default.Messages.FORM_LABEL_NOTHING
                        }]) : null;
                    case d.ChannelTypes.GUILD_STAGE_VOICE:
                        ;
                        return n = e, [{
                            setting: d.UserNotificationSettings.NULL,
                            label: null != n.parent_id ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: d.UserNotificationSettings.ONLY_MENTIONS,
                            label: c.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY
                        }, {
                            setting: d.UserNotificationSettings.NO_MESSAGES,
                            label: c.default.Messages.FORM_LABEL_NOTHING
                        }];
                    default:
                        ;
                        return a = e, [{
                            setting: d.UserNotificationSettings.NULL,
                            label: null != a.parent_id ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: d.UserNotificationSettings.ALL_MESSAGES,
                            label: c.default.Messages.FORM_LABEL_ALL_MESSAGES
                        }, {
                            setting: d.UserNotificationSettings.ONLY_MENTIONS,
                            label: c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                        }, {
                            setting: d.UserNotificationSettings.NO_MESSAGES,
                            label: c.default.Messages.FORM_LABEL_NOTHING
                        }]
                }
            }

            function _(e) {
                let t = e.getGuildId(),
                    n = e.id,
                    _ = (0, i.useStateFromStores)([o.default], () => {
                        let n = d.UserNotificationSettings.NULL;
                        return null != e.parent_id && (n = o.default.getChannelMessageNotifications(t, e.parent_id)), n !== d.UserNotificationSettings.NULL ? n : o.default.getMessageNotifications(t)
                    }, [t, e.parent_id]),
                    p = (0, i.useStateFromStores)([o.default], () => o.default.getNewForumThreadsCreated(e)),
                    E = (0, i.useStateFromStores)([o.default], () => o.default.getChannelOverrides(t)[n], [t, n]),
                    S = null == E ? d.UserNotificationSettings.NULL : E.message_notifications,
                    m = (0, l.useVoiceActivityNotificationSettingsExperiment)(e),
                    g = f(e, m);
                return null == g ? null : (0, a.jsxs)(a.Fragment, {
                    children: [e.isForumLikeChannel() ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(s.MenuCheckboxItem, {
                            id: "new-forum-threads-created",
                            label: c.default.Messages.FORUM_NEW_POSTS_CREATED,
                            checked: p,
                            action: () => u.default.setForumThreadsCreated(e, !p)
                        }), (0, a.jsx)(s.MenuSeparator, {})]
                    }) : null, g.map(i => {
                        let {
                            setting: l,
                            label: o
                        } = i;
                        return (0, a.jsx)(s.MenuRadioItem, {
                            group: "channel-notifications",
                            id: "".concat(l),
                            label: o,
                            subtext: l === d.UserNotificationSettings.NULL ? function(e, t) {
                                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                switch (e) {
                                    case d.UserNotificationSettings.ALL_MESSAGES:
                                        return t.type === d.ChannelTypes.GUILD_VOICE && n ? c.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY : c.default.Messages.FORM_LABEL_ALL_MESSAGES;
                                    case d.UserNotificationSettings.ONLY_MENTIONS:
                                        return c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format();
                                    case d.UserNotificationSettings.NO_MESSAGES:
                                        return c.default.Messages.FORM_LABEL_NOTHING;
                                    case d.UserNotificationSettings.NULL:
                                    default:
                                        return
                                }
                            }(_, e, m) : void 0,
                            action: () => {
                                var e;
                                return e = l, void(null != t && u.default.updateChannelOverrideSettings(t, n, {
                                    message_notifications: e
                                }, r.NotificationLabel.notifications(e)))
                            },
                            checked: l === S
                        }, l)
                    })]
                })
            }

            function p(e) {
                var t, n;
                let u = _(e),
                    r = (0, i.useStateFromStores)([o.default], () => o.default.resolvedMessageNotifications(e), [e]),
                    p = (0, i.useStateFromStores)([o.default], () => o.default.getChannelOverrides(e.guild_id)[e.id], [e.guild_id, e.id]),
                    E = null == p ? d.UserNotificationSettings.NULL : p.message_notifications,
                    S = (0, l.useVoiceActivityNotificationSettingsExperiment)(e),
                    m = E === d.UserNotificationSettings.NULL && e.isGuildStageVoice() ? c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format() : null === (n = f(e, S)) || void 0 === n ? void 0 : null === (t = n.find(e => {
                        let {
                            setting: t
                        } = e;
                        return t === r
                    })) || void 0 === t ? void 0 : t.label;
                return null != u ? (0, a.jsx)(s.MenuItem, {
                    id: "channel-notifications",
                    label: c.default.Messages.NOTIFICATION_SETTINGS,
                    subtext: m,
                    children: u
                }) : null
            }
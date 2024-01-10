            "use strict";
            n.r(t), n.d(t, {
                useChannelNotificationRadioItems: function() {
                    return E
                },
                default: function() {
                    return _
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                i = n("519705"),
                r = n("721281"),
                o = n("282109"),
                u = n("34676"),
                d = n("49111"),
                c = n("782340");

            function f(e) {
                var t, n, l;
                let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                switch (e.type) {
                    case d.ChannelTypes.GUILD_VOICE:
                        ;
                        return a ? (t = e, [{
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
                        return l = e, [{
                            setting: d.UserNotificationSettings.NULL,
                            label: null != l.parent_id ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT
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

            function E(e) {
                let t = e.getGuildId(),
                    n = e.id,
                    E = (0, a.useStateFromStores)([o.default], () => {
                        let n = d.UserNotificationSettings.NULL;
                        return null != e.parent_id && (n = o.default.getChannelMessageNotifications(t, e.parent_id)), n !== d.UserNotificationSettings.NULL ? n : o.default.getMessageNotifications(t)
                    }, [t, e.parent_id]),
                    _ = (0, a.useStateFromStores)([o.default], () => o.default.getNewForumThreadsCreated(e)),
                    h = (0, a.useStateFromStores)([o.default], () => o.default.getChannelOverrides(t)[n], [t, n]),
                    S = null == h ? d.UserNotificationSettings.NULL : h.message_notifications,
                    T = (0, r.useVoiceActivityNotificationSettingsExperiment)(e),
                    p = f(e, T);
                return null == p ? null : (0, l.jsxs)(l.Fragment, {
                    children: [e.isForumLikeChannel() ? (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(s.MenuCheckboxItem, {
                            id: "new-forum-threads-created",
                            label: c.default.Messages.FORUM_NEW_POSTS_CREATED,
                            checked: _,
                            action: () => i.default.setForumThreadsCreated(e, !_)
                        }), (0, l.jsx)(s.MenuSeparator, {})]
                    }) : null, p.map(a => {
                        let {
                            setting: r,
                            label: o
                        } = a;
                        return (0, l.jsx)(s.MenuRadioItem, {
                            group: "channel-notifications",
                            id: "".concat(r),
                            label: o,
                            subtext: r === d.UserNotificationSettings.NULL ? function(e, t) {
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
                            }(E, e, T) : void 0,
                            action: () => {
                                var e;
                                return e = r, void(null != t && i.default.updateChannelOverrideSettings(t, n, {
                                    message_notifications: e
                                }, u.NotificationLabel.notifications(e)))
                            },
                            checked: r === S
                        }, r)
                    })]
                })
            }

            function _(e) {
                var t, n;
                let i = E(e),
                    u = (0, a.useStateFromStores)([o.default], () => o.default.resolvedMessageNotifications(e), [e]),
                    _ = (0, a.useStateFromStores)([o.default], () => o.default.getChannelOverrides(e.guild_id)[e.id], [e.guild_id, e.id]),
                    h = null == _ ? d.UserNotificationSettings.NULL : _.message_notifications,
                    S = (0, r.useVoiceActivityNotificationSettingsExperiment)(e),
                    T = h === d.UserNotificationSettings.NULL && e.isGuildStageVoice() ? c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format() : null === (n = f(e, S)) || void 0 === n ? void 0 : null === (t = n.find(e => {
                        let {
                            setting: t
                        } = e;
                        return t === u
                    })) || void 0 === t ? void 0 : t.label;
                return null != i ? (0, l.jsx)(s.MenuItem, {
                    id: "channel-notifications",
                    label: c.default.Messages.NOTIFICATION_SETTINGS,
                    subtext: T,
                    children: i
                }) : null
            }
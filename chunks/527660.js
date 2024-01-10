            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("446674"),
                a = n("77078"),
                l = n("519705"),
                u = n("503950"),
                o = n("282109"),
                d = n("34676"),
                r = n("49111"),
                c = n("782340");

            function S() {
                return [{
                    setting: r.UserNotificationSettings.ALL_MESSAGES,
                    label: c.default.Messages.FORM_LABEL_ALL_MESSAGES
                }, {
                    setting: r.UserNotificationSettings.ONLY_MENTIONS,
                    label: c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                }, {
                    setting: r.UserNotificationSettings.NO_MESSAGES,
                    label: c.default.Messages.FORM_LABEL_NOTHING
                }]
            }

            function f(e) {
                var t, f;
                let g = function(e) {
                        let {
                            suppressEveryone: t,
                            suppressRoles: n,
                            mobilePush: f,
                            messageNotifications: g,
                            notifyHighlights: E
                        } = (0, s.useStateFromStoresObject)([o.default], () => ({
                            suppressEveryone: o.default.isSuppressEveryoneEnabled(e.id),
                            suppressRoles: o.default.isSuppressRolesEnabled(e.id),
                            mobilePush: o.default.isMobilePushEnabled(e.id),
                            messageNotifications: o.default.getMessageNotifications(e.id),
                            notifyHighlights: o.default.getNotifyHighlights(e.id)
                        }), [e.id]), _ = E === r.HighlightSettings.DISABLED, N = (0, u.default)(e.id);

                        function M(t, n) {
                            l.default.updateGuildNotificationSettings(e.id, t, n)
                        }
                        return (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(a.MenuGroup, {
                                children: S().map(e => {
                                    let {
                                        setting: t,
                                        label: n
                                    } = e;
                                    return (0, i.jsx)(a.MenuRadioItem, {
                                        group: "guild-notifications",
                                        id: "".concat(t),
                                        label: n,
                                        action: () => M({
                                            message_notifications: t
                                        }, d.NotificationLabel.notifications(t)),
                                        checked: t === g
                                    }, t)
                                })
                            }), (0, i.jsxs)(a.MenuGroup, {
                                children: [(0, i.jsx)(a.MenuCheckboxItem, {
                                    id: "suppress-everyone",
                                    label: c.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                                    action: () => M({
                                        suppress_everyone: !t
                                    }, d.NotificationLabel.suppressEveryone(!t)),
                                    checked: t
                                }), (0, i.jsx)(a.MenuCheckboxItem, {
                                    id: "suppress-roles",
                                    label: c.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
                                    action: () => M({
                                        suppress_roles: !n
                                    }, d.NotificationLabel.suppressRoles(!n)),
                                    checked: n
                                }), (0, i.jsx)(a.MenuCheckboxItem, {
                                    id: "suppress-highlights",
                                    label: c.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                                    action: () => {
                                        M({
                                            notify_highlights: _ ? r.HighlightSettings.ENABLED : r.HighlightSettings.DISABLED
                                        }, d.NotificationLabel.highlights(_))
                                    },
                                    checked: _
                                }), N]
                            }), (0, i.jsx)(a.MenuGroup, {
                                children: (0, i.jsx)(a.MenuCheckboxItem, {
                                    id: "mobile-push",
                                    label: c.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
                                    action: () => M({
                                        mobile_push: !f
                                    }, d.NotificationLabel.mobilePush(!f)),
                                    checked: f
                                })
                            })]
                        })
                    }(e),
                    E = (0, s.useStateFromStores)([o.default], () => o.default.getMessageNotifications(e.id), [e.id]),
                    _ = null === (f = S()) || void 0 === f ? void 0 : null === (t = f.find(e => {
                        let {
                            setting: t
                        } = e;
                        return t === E
                    })) || void 0 === t ? void 0 : t.label;
                return null != g ? (0, i.jsx)(a.MenuItem, {
                    id: "guild-notifications",
                    label: c.default.Messages.NOTIFICATION_SETTINGS,
                    subtext: _,
                    action: () => (0, a.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("747593").then(n.bind(n, "747593"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            guildId: e.id
                        })
                    }),
                    children: g
                }) : null
            }
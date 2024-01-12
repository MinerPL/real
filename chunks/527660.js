            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("446674"),
                a = n("77078"),
                l = n("519705"),
                u = n("503950"),
                d = n("282109"),
                o = n("34676"),
                r = n("49111"),
                c = n("782340");

            function f() {
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

            function S(e) {
                var t, S;
                let g = function(e) {
                        let {
                            suppressEveryone: t,
                            suppressRoles: n,
                            mobilePush: S,
                            messageNotifications: g,
                            notifyHighlights: E
                        } = (0, s.useStateFromStoresObject)([d.default], () => ({
                            suppressEveryone: d.default.isSuppressEveryoneEnabled(e.id),
                            suppressRoles: d.default.isSuppressRolesEnabled(e.id),
                            mobilePush: d.default.isMobilePushEnabled(e.id),
                            messageNotifications: d.default.getMessageNotifications(e.id),
                            notifyHighlights: d.default.getNotifyHighlights(e.id)
                        }), [e.id]), _ = E === r.HighlightSettings.DISABLED, M = (0, u.default)(e.id);

                        function N(t, n) {
                            l.default.updateGuildNotificationSettings(e.id, t, n)
                        }
                        return (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(a.MenuGroup, {
                                children: f().map(e => {
                                    let {
                                        setting: t,
                                        label: n
                                    } = e;
                                    return (0, i.jsx)(a.MenuRadioItem, {
                                        group: "guild-notifications",
                                        id: "".concat(t),
                                        label: n,
                                        action: () => N({
                                            message_notifications: t
                                        }, o.NotificationLabel.notifications(t)),
                                        checked: t === g
                                    }, t)
                                })
                            }), (0, i.jsxs)(a.MenuGroup, {
                                children: [(0, i.jsx)(a.MenuCheckboxItem, {
                                    id: "suppress-everyone",
                                    label: c.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                                    action: () => N({
                                        suppress_everyone: !t
                                    }, o.NotificationLabel.suppressEveryone(!t)),
                                    checked: t
                                }), (0, i.jsx)(a.MenuCheckboxItem, {
                                    id: "suppress-roles",
                                    label: c.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
                                    action: () => N({
                                        suppress_roles: !n
                                    }, o.NotificationLabel.suppressRoles(!n)),
                                    checked: n
                                }), (0, i.jsx)(a.MenuCheckboxItem, {
                                    id: "suppress-highlights",
                                    label: c.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                                    action: () => {
                                        N({
                                            notify_highlights: _ ? r.HighlightSettings.ENABLED : r.HighlightSettings.DISABLED
                                        }, o.NotificationLabel.highlights(_))
                                    },
                                    checked: _
                                }), M]
                            }), (0, i.jsx)(a.MenuGroup, {
                                children: (0, i.jsx)(a.MenuCheckboxItem, {
                                    id: "mobile-push",
                                    label: c.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
                                    action: () => N({
                                        mobile_push: !S
                                    }, o.NotificationLabel.mobilePush(!S)),
                                    checked: S
                                })
                            })]
                        })
                    }(e),
                    E = (0, s.useStateFromStores)([d.default], () => d.default.getMessageNotifications(e.id), [e.id]),
                    _ = null === (S = f()) || void 0 === S ? void 0 : null === (t = S.find(e => {
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
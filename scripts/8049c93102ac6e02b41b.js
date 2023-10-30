(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["29212"], {
        213528: function(e, t, u) {
            "use strict";
            u.r(t), u.d(t, {
                default: function() {
                    return o
                }
            });
            var n = u("37983");
            u("884691");
            var a = u("77078"),
                s = u("272030"),
                r = u("901582"),
                d = u("904142"),
                c = u("503950"),
                l = u("49111"),
                i = u("782340");

            function o(e) {
                let {
                    guildId: t,
                    analyticsContext: u,
                    onSelect: o
                } = e, f = (0, d.default)(t), E = (0, c.default)(t);
                return (0, n.jsx)(r.default, {
                    context: u,
                    object: l.AnalyticsObjects.CONTEXT_MENU,
                    children: (0, n.jsxs)(a.Menu, {
                        navId: "user-context",
                        onClose: s.closeContextMenu,
                        "aria-label": i.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: o,
                        children: [(0, n.jsx)(a.MenuGroup, {
                            children: f
                        }), (0, n.jsx)(a.MenuGroup, {
                            children: E
                        })]
                    })
                })
            }
        },
        904142: function(e, t, u) {
            "use strict";
            u.r(t), u.d(t, {
                default: function() {
                    return i
                }
            });
            var n = u("37983");
            u("884691");
            var a = u("446674"),
                s = u("77078"),
                r = u("267363"),
                d = u("660478"),
                c = u("133335"),
                l = u("782340");

            function i(e) {
                let t = (0, a.useStateFromStores)([d.default], () => d.default.hasUnread(e, c.ReadStateTypes.GUILD_EVENT), [e]);
                return (0, n.jsx)(s.MenuItem, {
                    id: "mark-events-read",
                    label: l.default.Messages.MARK_AS_READ,
                    action: function() {
                        (0, r.ackGuildFeature)(e, c.ReadStateTypes.GUILD_EVENT)
                    },
                    disabled: !t
                })
            }
        },
        503950: function(e, t, u) {
            "use strict";
            u.r(t), u.d(t, {
                default: function() {
                    return l
                }
            });
            var n = u("37983");
            u("884691");
            var a = u("446674"),
                s = u("77078"),
                r = u("519705"),
                d = u("282109"),
                c = u("782340");

            function l(e) {
                let t = (0, a.useStateFromStores)([d.default], () => d.default.isMuteScheduledEventsEnabled(e), [e]);
                return (0, n.jsx)(s.MenuCheckboxItem, {
                    id: "mute-events",
                    label: c.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
                    action: () => {
                        var u;
                        return u = {
                            mute_scheduled_events: !t
                        }, void r.default.updateGuildNotificationSettings(e, u)
                    },
                    checked: t
                })
            }
        }
    }
]);
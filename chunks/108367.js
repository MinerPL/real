            "use strict";
            n.r(t), n.d(t, {
                FOR_YOU_ICONS: function() {
                    return g
                },
                getIcon: function() {
                    return R
                },
                getIconByName: function() {
                    return M
                },
                getMask: function() {
                    return O
                },
                getBackground: function() {
                    return L
                }
            });
            var l, a, s, i, r = n("669491"),
                o = n("360191"),
                u = n("777204"),
                d = n("505406"),
                c = n("92440"),
                f = n("608108"),
                E = n("804621"),
                h = n("578299"),
                _ = n("522420"),
                S = n("371031"),
                T = n("674517"),
                p = n("989306"),
                N = n("695449"),
                I = n("816428"),
                m = n("710672");
            (l = s || (s = {})).CHECKED = "CHECKED", l.FRIENDS = "FRIENDS", l.SHARE_SCREEN = "SHARE_SCREEN", l.NEW_MESSAGE = "NEW_MESSAGE";
            let A = {
                CHECKED: f,
                FRIENDS: h,
                SHARE_SCREEN: I,
                NEW_MESSAGE: p
            };
            (a = i || (i = {})).MISSED_MESSAGES = "MISSED_MESSAGES", a.FRIEND_REQUEST_REMINDER = "FRIEND_REQUEST_REMINDER", a.SCHEDULED_GUILD_EVENT = "SCHEDULED_GUILD_EVENT", a.TOP_MESSAGES = "TOP_MESSAGES", a.NOTIFICATION_CENTER = "NOTIFICATION_CENTER", a.UPDATE_PROFILE = "UPDATE_PROFILE", a.FIND_FRIENDS = "FIND_FRIENDS", a.ADD_FRIEND = "ADD_FRIEND", a.FIRST_MESSAGE = "FIRST_MESSAGE";
            let g = {
                    MISSED_MESSAGES: T,
                    FRIEND_REQUEST_REMINDER: _,
                    SCHEDULED_GUILD_EVENT: E,
                    TOP_MESSAGES: S,
                    NOTIFICATION_CENTER: c,
                    UPDATE_PROFILE: m,
                    FIND_FRIENDS: d,
                    ADD_FRIEND: d,
                    FIRST_MESSAGE: N
                },
                C = e => {
                    switch (e.item_enum) {
                        case o.ItemEnum.ADD_FRIEND:
                            return "ADD_FRIEND";
                        case o.ItemEnum.FIND_FRIENDS:
                            return "FIND_FRIENDS";
                        case o.ItemEnum.FIRST_MESSAGE:
                            return "FIRST_MESSAGE";
                        case o.ItemEnum.UPDATE_PROFILE:
                            return "UPDATE_PROFILE";
                        default:
                            return "NOTIFICATION_CENTER"
                    }
                },
                R = e => {
                    switch (e.type) {
                        case "lifecycle_item":
                            return C(e);
                        case "missed_messages":
                            return "MISSED_MESSAGES";
                        case "friend_request_reminder":
                            return "FRIEND_REQUEST_REMINDER";
                        case "scheduled_guild_event_started":
                            return "SCHEDULED_GUILD_EVENT";
                        case "top_messages":
                            return "TOP_MESSAGES";
                        default:
                            return "NOTIFICATION_CENTER"
                    }
                },
                M = e => {
                    if ("icHighlight" === e) return "TOP_MESSAGES";
                    return "NOTIFICATION_CENTER"
                },
                O = e => {
                    switch (e) {
                        case o.NotificationCenterItems.GO_LIVE_PUSH:
                            return {
                                icon: A.SHARE_SCREEN, color: r.default.colors.BACKGROUND_ACCENT
                            };
                        case o.NotificationCenterItems.FRIEND_REQUEST_ACCEPTED:
                            return {
                                icon: A.CHECKED, color: r.default.colors.STATUS_POSITIVE_BACKGROUND
                            };
                        case o.NotificationCenterItems.FRIEND_REQUEST_PENDING:
                        case o.NotificationCenterItems.FRIEND_SUGGESTION_CREATED:
                            return {
                                icon: A.FRIENDS, color: r.default.colors.BACKGROUND_ACCENT
                            };
                        case o.NotificationCenterItems.DM_FRIEND_NUDGE:
                            return {
                                icon: A.NEW_MESSAGE, color: r.default.colors.BACKGROUND_ACCENT
                            };
                        case o.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS:
                        case o.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED:
                            return {
                                icon: A.FRIENDS, color: r.default.colors.BACKGROUND_ACCENT
                            };
                        default:
                            return null
                    }
                },
                L = e => {
                    switch (e.item_enum) {
                        case o.ItemEnum.UPDATE_PROFILE:
                            return u.PROFILE_BACKGROUND;
                        case o.ItemEnum.ADD_FRIEND:
                        case o.ItemEnum.FIND_FRIENDS:
                            return u.FRIEND_BACKGROUND;
                        case o.ItemEnum.FIRST_MESSAGE:
                            return u.MESSAGE_BACKGROUND;
                        default:
                            return r.default.unsafe_rawColors.BRAND_500.css
                    }
                }
            "use strict";
            n.r(t), n.d(t, {
                getTimestampString: function() {
                    return E.default
                },
                trackThreadBrowserTab: function() {
                    return m
                },
                trackThreadBrowserOpened: function() {
                    return T
                },
                trackActiveThreadsPopoutOpened: function() {
                    return S
                },
                trackThreadNotificationSettingsUpdated: function() {
                    return p
                },
                useLastMessageTimestamp: function() {
                    return M
                }
            }), n("702976");
            var i = n("866227"),
                a = n.n(i),
                l = n("446674"),
                s = n("716241"),
                r = n("701916"),
                u = n("660478"),
                d = n("282109"),
                o = n("599110"),
                c = n("568734"),
                _ = n("34676"),
                f = n("299039"),
                h = n("755624"),
                E = n("319126"),
                g = n("648564"),
                A = n("49111");

            function m() {
                (0, s.trackWithMetadata)(A.AnalyticEvents.THREAD_BROWSER_TAB_CHANGED)
            }

            function T() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Modal";
                (0, s.trackWithMetadata)(A.AnalyticEvents.OPEN_MODAL, {
                    type: "Thread Browser",
                    location_section: e
                })
            }

            function S() {
                o.default.track(A.AnalyticEvents.OPEN_POPOUT, {
                    type: "Active Threads Popout"
                })
            }

            function p(e, t) {
                var n, i;
                let a = (0, r.collectThreadMetadata)(e);
                if (null == a) return;
                let l = e.getGuildId(),
                    s = e.parent_id,
                    u = (0, _.getCurrentChannelSettings)(l, s),
                    f = e => {
                        if ((0, c.hasFlag)(e, g.ThreadMemberFlags.ALL_MESSAGES)) return _.MessageNotificationSettings[A.UserNotificationSettings.ALL_MESSAGES];
                        if ((0, c.hasFlag)(e, g.ThreadMemberFlags.ONLY_MENTIONS)) return _.MessageNotificationSettings[A.UserNotificationSettings.ONLY_MENTIONS];
                        if ((0, c.hasFlag)(e, g.ThreadMemberFlags.NO_MESSAGES)) return _.MessageNotificationSettings[A.UserNotificationSettings.NO_MESSAGES];
                        return _.MessageNotificationSettings[A.UserNotificationSettings.NULL]
                    },
                    E = null !== (n = h.default.flags(e.id)) && void 0 !== n ? n : 0,
                    m = f(E),
                    T = h.default.isMuted(e.id),
                    S = (0, _.muteConfigToTimestamp)(h.default.getMuteConfig(e.id)),
                    {
                        can_send_message: p,
                        ...M
                    } = a,
                    v = {
                        ...M,
                        channel_id: e.id,
                        guild_id: l,
                        parent_id: s,
                        channel_type: e.type,
                        has_interacted_with_thread: (E & g.ThreadMemberFlags.HAS_INTERACTED) != 0,
                        parent_is_muted: d.default.isGuildOrCategoryOrChannelMuted(l, s),
                        old_thread_notification_setting: m,
                        new_thread_notification_setting: null != t.flags ? f(t.flags) : m,
                        parent_notification_setting: u.channel_message_notification_settings,
                        old_thread_is_muted: T,
                        new_thread_is_muted: null !== (i = t.muted) && void 0 !== i ? i : T,
                        old_thread_muted_until: S,
                        new_thread_muted_until: null != t.mute_config ? (0, _.muteConfigToTimestamp)(t.mute_config) : S
                    };
                o.default.track(A.AnalyticEvents.THREAD_NOTIFICATION_SETTINGS_UPDATED, v)
            }
            n("782340");
            let M = e => {
                var t, n;
                let i = (0, l.useStateFromStores)([u.default], () => u.default.lastMessageId(e.id)),
                    s = null != i ? f.default.extractTimestamp(i) : null,
                    r = null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp,
                    d = null != r ? a(r).valueOf() : null;
                return null !== (n = null != s ? s : d) && void 0 !== n ? n : f.default.extractTimestamp(e.id)
            }
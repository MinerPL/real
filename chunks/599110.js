            "use strict";
            n.r(t), n.d(t, {
                AnalyticsContext: function() {
                    return _
                },
                addExtraAnalyticsDecorator: function() {
                    return T
                },
                AnalyticEventConfigs: function() {
                    return g
                },
                expandLocation: function() {
                    return I
                },
                setUTMContext: function() {
                    return A
                },
                expandEventProperties: function() {
                    return R
                },
                debugLogEvent: function() {
                    return N
                },
                trackNetworkAction: function() {
                    return D
                },
                AnalyticsSchema: function() {
                    return c
                },
                default: function() {
                    return y
                }
            }), n("424973"), n("222007");
            var i = n("884691"),
                r = n("759843"),
                s = n("913144"),
                a = n("939011"),
                o = n("821316"),
                l = n("316217"),
                u = n("313915"),
                c = n("870623"),
                d = n("872507"),
                f = n("286235"),
                E = n("49111"),
                h = n("727538"),
                p = n("782340");
            let _ = i.createContext({
                    location: {}
                }),
                S = {},
                m = [];

            function T(e) {
                m.push(e)
            }
            let g = {
                [E.AnalyticEvents.APP_OPENED]: {
                    throttlePeriod: 3e5,
                    throttleKeys: () => []
                },
                [E.AnalyticEvents.APP_BACKGROUND]: {
                    throttlePeriod: 12e4,
                    throttleKeys: () => []
                },
                [E.AnalyticEvents.ACK_MESSAGES]: {
                    throttlePeriod: 9e5,
                    throttleKeys: e => [e.guild_id, e.channel_id, e.location_section]
                },
                [E.AnalyticEvents.GUILD_VIEWED]: {
                    throttlePeriod: 9e5,
                    throttleKeys: e => [e.guild_id, e.is_pending]
                },
                [E.AnalyticEvents.FRIENDS_LIST_VIEWED]: {
                    throttlePeriod: 9e5,
                    throttleKeys: e => [e.tab_opened]
                },
                [E.AnalyticEvents.NOW_PLAYING_CARD_HOVERED]: {
                    throttlePeriod: 9e5,
                    throttleKeys: e => [e.tab_opened]
                },
                [E.AnalyticEvents.START_SPEAKING]: {
                    throttlePeriod: 9e5,
                    throttleKeys: e => [e.server]
                },
                [E.AnalyticEvents.START_LISTENING]: {
                    throttlePeriod: 9e5,
                    throttleKeys: e => [e.server]
                },
                [E.AnalyticEvents.ACTIVITY_UPDATED]: {
                    throttlePeriod: 6e4,
                    throttleKeys: e => [e.application_id],
                    deduplicate: !0
                },
                [E.AnalyticEvents.CHANNEL_OPENED]: {
                    throttlePeriod: 9e5,
                    throttleKeys: e => null != e.channel_static_route ? [e.guild_id, e.channel_static_route, e.channel_view] : [e.channel_id, e.channel_view]
                },
                [E.AnalyticEvents.TEXT_IN_VOICE_OPENED]: {
                    throttlePeriod: 864e5,
                    throttleKeys: e => [e.channel_id]
                },
                [E.AnalyticEvents.NOTIFICATION_VIEWED]: {
                    throttlePeriod: 9e5,
                    throttleKeys: e => [e.notif_type]
                },
                [E.AnalyticEvents.MEMBER_LIST_VIEWED]: {
                    throttlePeriod: 9e5,
                    throttleKeys: e => [e.channel_id]
                },
                [E.AnalyticEvents.DM_LIST_VIEWED]: {
                    throttlePeriod: 9e5,
                    throttleKeys: e => [e.channel_id]
                },
                [E.AnalyticEvents.NAV_DRAWER_OPENED]: {
                    throttlePeriod: 9e5,
                    throttleKeys: () => []
                },
                [E.AnalyticEvents.KEYBOARD_SHORTCUT_USED]: {
                    throttlePeriod: 12e4,
                    throttleKeys: e => {
                        var t;
                        return [e.shortcut_name, e.location_object, ...null !== (t = e.source_class_list) && void 0 !== t ? t : []]
                    }
                },
                [E.AnalyticEvents.QUICKSWITCHER_OPENED]: {
                    throttlePeriod: 1e4,
                    throttleKeys: () => []
                },
                [E.AnalyticEvents.CHAT_INPUT_COMPONENT_VIEWED]: {
                    throttlePeriod: 9e5,
                    throttleKeys: e => [e.type]
                },
                [E.AnalyticEvents.ROLE_PAGE_VIEWED]: {
                    throttlePeriod: 12e4,
                    throttleKeys: e => [e.role_id, e.tab_opened]
                },
                [E.AnalyticEvents.VIDEO_INPUT_INITIALIZED]: {
                    throttlePeriod: 3e5,
                    throttleKeys: () => []
                },
                [E.AnalyticEvents.HUB_ONBOARDING_CAROUSEL_SCROLLED]: {
                    throttlePeriod: 9e5,
                    throttleKeys: () => []
                },
                [E.AnalyticEvents.HUB_STUDENT_PROMPT_CLICKED]: {
                    throttlePeriod: 9e5,
                    throttleKeys: () => []
                },
                [E.AnalyticEvents.RPC_SERVER_ERROR_CAUGHT]: {
                    throttlePeriod: 864e5,
                    throttleKeys: () => []
                },
                [E.AnalyticEvents.RPC_COMMAND_SENT]: {
                    throttlePeriod: 864e5,
                    throttleKeys: e => [e.application_id, e.command],
                    throttlePercent: .001
                },
                [E.AnalyticEvents.RPC_SUBSCRIPTION_REQUESTED]: {
                    throttlePeriod: 864e5,
                    throttleKeys: e => [e.application_id, e.event],
                    throttlePercent: .001
                },
                [E.AnalyticEvents.CHANNEL_BANNER_VIEWED]: {
                    throttlePeriod: 864e5,
                    throttleKeys: e => [e.banner_type, e.channel_id]
                },
                [E.AnalyticEvents.PREMIUM_UPSELL_VIEWED]: {
                    throttlePeriod: 6e4,
                    throttleKeys: e => [e.type]
                },
                [E.AnalyticEvents.CHANNEL_HIGHLIGHTS_VIEWED]: {
                    throttlePeriod: 36e5,
                    throttleKeys: e => [e.guild_id, e.channel_id]
                },
                [E.AnalyticEvents.GUILD_CHANNEL_HIGHLIGHTS_LOADED]: {
                    throttlePeriod: 36e5,
                    throttleKeys: e => [e.guild_id]
                },
                [E.AnalyticEvents.FORUM_CHANNEL_SEARCHED]: {
                    throttlePeriod: 6e4,
                    throttleKeys: e => [e.guild_id, e.channel_id]
                },
                [E.AnalyticEvents.FORUM_CHANNEL_SCROLLED]: {
                    throttlePeriod: 9e5,
                    throttleKeys: e => [e.guild_id, e.channel_id]
                },
                [E.AnalyticEvents.DM_PROFILE_VIEWED]: {
                    throttlePeriod: 36e5,
                    throttleKeys: e => [e.viewed_profile_user_id]
                },
                [E.AnalyticEvents.MEDIA_VIEWER_SESSION_COMPLETED]: {
                    throttlePercent: .01
                },
                [E.AnalyticEvents.SUMMARIES_UNREAD_BAR_VIEWED]: {
                    throttlePeriod: 3e5,
                    throttleKeys: e => [e.channel_id]
                },
                [E.AnalyticEvents.ACTIVITY_CARDS_VIEWED]: {
                    throttlePeriod: 9e5,
                    throttleKeys: e => [e.context, e.guild_id]
                },
                [E.AnalyticEvents.ACK_COMMUNITY_MESSAGES]: {
                    throttlePeriod: 9e5,
                    throttleKeys: e => [e.channel_id]
                },
                [E.AnalyticEvents.REDESIGN_NAV_BAR_CLICKED]: {
                    throttlePeriod: 9e5,
                    throttleKeys: e => [e.tab]
                },
                [E.AnalyticEvents.BROADCAST_START_BUTTON_HOVERED]: {
                    throttlePeriod: 6e4,
                    throttleKeys: () => []
                },
                [E.AnalyticEvents.BROADCAST_LIST_VISITED]: {
                    throttlePeriod: 3e5,
                    throttleKeys: () => []
                },
                [E.AnalyticEvents.CHANNEL_LIST_END_REACHED]: {
                    throttlePeriod: 9e5,
                    throttleKeys: e => [e.guild_id]
                },
                [E.AnalyticEvents.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED]: {
                    throttlePeriod: 6e4,
                    throttleKeys: e => [e.guild_id, e.channel_id]
                },
                [E.AnalyticEvents.LIVE_ACTIVITY_SETTINGS_UPDATED]: {
                    throttlePeriod: 36e5,
                    throttleKeys: () => []
                }
            };

            function I(e) {
                return "string" == typeof e ? {
                    location: e
                } : {
                    location: e.page,
                    location_page: e.page,
                    location_section: e.section,
                    location_object: e.object,
                    location_object_type: e.objectType
                }
            }
            let C = () => h.AccessibilityFeatureFlags.NONE,
                v = (0, r.trackMaker)({
                    analyticEventConfigs: g,
                    dispatcher: s.default,
                    TRACK_ACTION_NAME: "TRACK"
                });

            function A(e) {
                return S = e
            }

            function R(e) {
                var t, n, i, r, s;
                let a = e;
                if (!a && (a = {}), null != a.location) {
                    let {
                        location: e,
                        ...t
                    } = a;
                    a = {
                        ...t,
                        ...I(e)
                    }
                }
                if (null != a.source) {
                    ;
                    let {
                        source: e,
                        ...t
                    } = a;
                    a = {
                        ...t,
                        ..."string" == typeof(s = e) ? {
                            source: s
                        } : {
                            source_page: s.page,
                            source_section: s.section,
                            source_object: s.object,
                            source_object_type: s.objectType,
                            source_promotion_id: s.promotionId
                        }
                    }
                }
                a.client_performance_cpu = d.default.getCurrentCPUUsagePercent(), a.client_performance_memory = d.default.getCurrentMemoryUsageKB(), a.cpu_core_count = d.default.getCPUCoreCount(), a.accessibility_features = C(), a.rendered_locale = p.default.getLocale(), a.uptime_app = Math.floor(performance.now() / 1e3);
                let o = d.default.getProcessUptime();
                null != o && (a.uptime_process_renderer = Math.floor(o));
                let {
                    utmSource: l,
                    utmMedium: u,
                    utmCampaign: c,
                    utmContent: f
                } = S;
                return a.utm_source = null !== (t = a.utm_source) && void 0 !== t ? t : l, a.utm_medium = null !== (n = a.utm_medium) && void 0 !== n ? n : u, a.utm_campaign = null !== (i = a.utm_campaign) && void 0 !== i ? i : c, a.utm_content = null !== (r = a.utm_content) && void 0 !== r ? r : f, m.forEach(e => e(a)), a
            }

            function N(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                u.default.isLoggingAnalyticsEvents && console.info("AnalyticsUtils.track(...):", e, t), n ? o.report("Analytics", e, t) : o.report("Analytics", e)
            }
            let O = (0, r.trackMaker)({
                analyticEventConfigs: g,
                dispatcher: s.default,
                TRACK_ACTION_NAME: "TRACK"
            });

            function D(e, t) {
                let n = (0, a.getLocation)(),
                    i = R({
                        location: n,
                        ...t
                    });
                (0, a.setDebugTrackedData)(e, {
                    type: "action",
                    ...t
                }), N(e, i), O(e, i)
            }
            var y = {
                ...r.default,
                getCampaignParams: r.getCampaignParams,
                setSystemAccessibilityFeatures: function(e) {
                    C = e
                },
                expandEventProperties: R,
                track: function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (!l.IGNORE_ANALYTICS_BREADCRUMB_EVENTS.includes(e) && f.default.addBreadcrumb({
                            category: "analytics",
                            message: "".concat(e)
                        }), null != n.throttlePercent && Math.random() > n.throttlePercent) return Promise.resolve();
                    let i = R(t);
                    return N(e, i, n.logEventProperties), v(e, i, {
                        flush: n.flush,
                        fingerprint: n.fingerprint
                    })
                }
            }
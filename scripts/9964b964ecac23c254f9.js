(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["48357"], {
        775433: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchSubscriptionPlansForSKU: function() {
                    return c
                },
                fetchSubscriptionPlansBySKUs: function() {
                    return E
                },
                fetchPremiumSubscriptionPlans: function() {
                    return _
                },
                resetSubscriptionPlanData: function() {
                    return f
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("333805"),
                s = n("160299"),
                u = n("745279"),
                a = n("850068"),
                o = n("49111"),
                d = n("646718");
            async function c(e, t, n, d, c) {
                r.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH",
                    skuId: e
                });
                try {
                    let l = {
                            url: o.Endpoints.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                            oldFormErrors: !0
                        },
                        u = {};
                    null != t && (u.country_code = t), null != n && (u.payment_source_id = n), null != d && (u.include_unpublished = d), null != c && (u.revenue_surface = c), l.query = u, !s.default.ipCountryCodeLoaded && await (0, a.fetchIpCountryCode)();
                    let E = await i.default.get(l);
                    r.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                        skuId: e,
                        subscriptionPlans: E.body
                    })
                } catch (t) {
                    throw r.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                        skuId: e
                    }), (0, u.captureBillingException)(t), new l.default(t)
                }
            }

            function E(e, t) {
                return Promise.all(e.filter(e => e !== d.PremiumSubscriptionSKUs.NONE).map(e => c(e, t)))
            }

            function _(e, t, n) {
                return Promise.all(d.ACTIVE_PREMIUM_SKUS.filter(e => e !== d.PremiumSubscriptionSKUs.NONE).map(i => c(i, e, t, void 0, n)))
            }

            function f() {
                r.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("872717"),
                r = n("49111"),
                l = n("782340");
            class s extends i.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? l.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: r.Links.STATUS,
                        details: "".concat(t)
                    }) : l.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: r.Links.STATUS
                    }))
                }
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return l
                }
            });
            var i = n("884691"),
                r = n("599110");
            let l = () => i.useContext(r.AnalyticsContext)
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("884691");

            function r(e) {
                let [t, n] = (0, i.useState)(!1), r = (0, i.useRef)(e.current);
                return (0, i.useEffect)(() => {
                    r.current = e.current
                }, [e]), (0, i.useEffect)(() => {
                    let e = r.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        i = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i)
                    }
                }, [r]), t
            }
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("773336");
            async function r(e, t) {
                let {
                    default: r
                } = await n.el("572544").then(n.bind(n, "572544")), l = r(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != l) l(null);
                else if (i.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        212084: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("605250"),
                r = n("802493");
            let l = new i.default("GuildStickers");
            var s = new class e {
                getSync(e) {
                    let t = performance.now(),
                        n = r.default.stickers(e).getMapEntriesSyncUnsafe(),
                        i = performance.now();
                    return l.log("synchronously loaded in ".concat(i - t, "ms (guilds: ").concat(n.length, ")")), n
                }
                handleConnectionOpen(e, t) {
                    for (let n of e.guilds) this.handleOneGuildCreate(n, t)
                }
                handleGuildCreate(e, t) {
                    this.handleOneGuildCreate(e.guild, t)
                }
                handleGuildUpdate(e, t) {
                    this.replace(e.guild.id, e.guild.stickers, t)
                }
                handleGuildDelete(e, t) {
                    this.delete(e.guild.id, t)
                }
                handleGuildStickersUpdate(e, t) {
                    this.replace(e.guildId, e.stickers, t)
                }
                handleBackgroundSync(e, t) {
                    e.promisesForBackgroundSyncToWaitOn.push(Promise.all(e.stickers.map(e => {
                        if ("unavailable" === e.dataMode) return Promise.resolve();
                        "full" === e.dataMode ? (l.verbose("Replacing ".concat(e.entities.length, " stickers for ").concat(e.guildId)), this.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (l.verbose("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " stickers for ").concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t))
                    })))
                }
                handleOneGuildCreate(e, t) {
                    null != e.stickers && this.replace(e.id, e.stickers, t), null != e.stickerUpdates && this.update(e.id, e.stickerUpdates.writes, e.stickerUpdates.deletes, t)
                }
                handleClearGuildCache(e) {
                    this.clear(e)
                }
                handleReset() {}
                replace(e, t, n) {
                    r.default.stickersTransaction(n).replaceAll(e, t)
                }
                delete(e, t) {
                    r.default.stickersTransaction(t).delete(e)
                }
                clear(e) {
                    r.default.stickersTransaction(e).delete()
                }
                update(e, t, n, i) {
                    let l = r.default.stickersTransaction(i);
                    for (let i of (l.putAll(e, t), n)) l.delete(e, i)
                }
                constructor() {
                    this.actions = {
                        BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
                        CLEAR_GUILD_CACHE: (e, t) => this.handleClearGuildCache(t),
                        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                        GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
                        GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                        GUILD_STICKERS_UPDATE: (e, t) => this.handleGuildStickersUpdate(e, t),
                        GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
                    }
                }
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var i, r, l, s;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return i
                },
                BotTagTypes: function() {
                    return r
                }
            }), (l = i || (i = {}))[l.GAME = 1] = "GAME", l[l.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", l[l.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (s = r || (r = {}))[s.BOT = 0] = "BOT", s[s.SERVER = 1] = "SERVER", s[s.SYSTEM_DM = 2] = "SYSTEM_DM", s[s.OFFICIAL = 3] = "OFFICIAL", s[s.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", s[s.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", s[s.AI = 6] = "AI", s[s.REMIX = 7] = "REMIX"
        },
        246511: function(e, t, n) {
            "use strict";
            var i, r, l, s;
            n.r(t), n.d(t, {
                InspectedExpressionChangeSource: function() {
                    return i
                },
                PickerContextMenuDataTypes: function() {
                    return r
                }
            }), (l = i || (i = {}))[l.GRID_NAVIGATOR_EVENT = 0] = "GRID_NAVIGATOR_EVENT", l[l.MOUSE_EVENT = 1] = "MOUSE_EVENT", (s = r || (r = {})).EMOJI = "emoji", s.STICKER = "sticker", s.PACK_ICON = "pack-icon"
        },
        686298: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ApplicationStreamResolutions: function() {
                    return s
                },
                getApplicationResolution: function() {
                    return E
                },
                ApplicationStreamFPS: function() {
                    return u
                },
                ApplicationStreamPresets: function() {
                    return a
                },
                getApplicationFramerate: function() {
                    return _
                },
                ApplicationStreamPresetValues: function() {
                    return f
                },
                ApplicationStreamSettingRequirements: function() {
                    return S
                },
                ApplicationStreamResolutionButtons: function() {
                    return N
                },
                GoLiveDeviceResolutionButtons: function() {
                    return O
                },
                ApplicationStreamResolutionButtonsWithSuffixLabel: function() {
                    return m
                },
                ApplicationStreamFPSButtons: function() {
                    return p
                },
                ApplicationStreamFPSButtonsWithSuffixLabel: function() {
                    return g
                }
            });
            var i, r, l, s, u, a, o = n("49111"),
                d = n("646718"),
                c = n("782340");

            function E(e) {
                switch (e) {
                    case s.RESOLUTION_480:
                        return s.RESOLUTION_480;
                    case s.RESOLUTION_720:
                        return s.RESOLUTION_720;
                    case s.RESOLUTION_1080:
                        return s.RESOLUTION_1080;
                    case s.RESOLUTION_SOURCE:
                        return s.RESOLUTION_SOURCE;
                    default:
                        throw Error("Unknown resolution: ".concat(e))
                }
            }

            function _(e) {
                switch (e) {
                    case u.FPS_5:
                        return u.FPS_5;
                    case u.FPS_15:
                        return u.FPS_15;
                    case u.FPS_30:
                        return u.FPS_30;
                    case u.FPS_60:
                        return u.FPS_60;
                    default:
                        throw Error("Unknown frame rate: ".concat(e))
                }
            }(i = s || (s = {}))[i.RESOLUTION_480 = 480] = "RESOLUTION_480", i[i.RESOLUTION_720 = 720] = "RESOLUTION_720", i[i.RESOLUTION_1080 = 1080] = "RESOLUTION_1080", i[i.RESOLUTION_1440 = 1440] = "RESOLUTION_1440", i[i.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE", (r = u || (u = {}))[r.FPS_5 = 5] = "FPS_5", r[r.FPS_15 = 15] = "FPS_15", r[r.FPS_30 = 30] = "FPS_30", r[r.FPS_60 = 60] = "FPS_60", (l = a || (a = {}))[l.PRESET_VIDEO = 1] = "PRESET_VIDEO", l[l.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS", l[l.PRESET_CUSTOM = 3] = "PRESET_CUSTOM";
            let f = {
                    [a.PRESET_DOCUMENTS]: [{
                        resolution: s.RESOLUTION_SOURCE,
                        fps: u.FPS_15
                    }, {
                        resolution: s.RESOLUTION_SOURCE,
                        fps: u.FPS_5
                    }],
                    [a.PRESET_VIDEO]: [{
                        resolution: s.RESOLUTION_1440,
                        fps: u.FPS_60
                    }, {
                        resolution: s.RESOLUTION_1080,
                        fps: u.FPS_60
                    }, {
                        resolution: s.RESOLUTION_720,
                        fps: u.FPS_60
                    }, {
                        resolution: s.RESOLUTION_720,
                        fps: u.FPS_30
                    }],
                    [a.PRESET_CUSTOM]: []
                },
                S = [{
                    resolution: s.RESOLUTION_SOURCE,
                    fps: u.FPS_60,
                    quality: d.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: s.RESOLUTION_SOURCE,
                    fps: u.FPS_30,
                    quality: d.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: s.RESOLUTION_SOURCE,
                    fps: u.FPS_15,
                    quality: d.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: s.RESOLUTION_SOURCE,
                    fps: u.FPS_5,
                    preset: a.PRESET_DOCUMENTS
                }, {
                    resolution: s.RESOLUTION_1440,
                    fps: u.FPS_60,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: s.RESOLUTION_1440,
                    fps: u.FPS_30,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: s.RESOLUTION_1440,
                    fps: u.FPS_15,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: s.RESOLUTION_1080,
                    fps: u.FPS_60,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: s.RESOLUTION_1080,
                    fps: u.FPS_30,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: s.RESOLUTION_1080,
                    fps: u.FPS_15,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: s.RESOLUTION_720,
                    fps: u.FPS_60,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_1,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: s.RESOLUTION_720,
                    fps: u.FPS_30
                }, {
                    resolution: s.RESOLUTION_720,
                    fps: u.FPS_15
                }, {
                    resolution: s.RESOLUTION_720,
                    fps: u.FPS_5
                }, {
                    resolution: s.RESOLUTION_480,
                    fps: u.FPS_60,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_1,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: s.RESOLUTION_480,
                    fps: u.FPS_30
                }, {
                    resolution: s.RESOLUTION_480,
                    fps: u.FPS_15
                }, {
                    resolution: s.RESOLUTION_480,
                    fps: u.FPS_5
                }];

            function I(e, t) {
                return {
                    value: e,
                    get label() {
                        return null != t ? t() : e
                    }
                }
            }
            let N = [I(s.RESOLUTION_720), I(s.RESOLUTION_1080), I(s.RESOLUTION_1440), I(s.RESOLUTION_SOURCE, () => c.default.Messages.SCREENSHARE_SOURCE)],
                O = [I(s.RESOLUTION_720), I(s.RESOLUTION_1080), I(s.RESOLUTION_1440)],
                T = e => "".concat(e, "p"),
                m = [I(s.RESOLUTION_480, () => T(s.RESOLUTION_480)), I(s.RESOLUTION_720, () => T(s.RESOLUTION_720)), I(s.RESOLUTION_1080, () => T(s.RESOLUTION_1080)), I(s.RESOLUTION_1440, () => T(s.RESOLUTION_1440)), I(s.RESOLUTION_SOURCE, () => c.default.Messages.SCREENSHARE_SOURCE)],
                p = [I(u.FPS_15), I(u.FPS_30), I(u.FPS_60)],
                g = [I(u.FPS_15, () => c.default.Messages.STREAM_FPS_OPTION.format({
                    value: u.FPS_15
                })), I(u.FPS_30, () => c.default.Messages.STREAM_FPS_OPTION.format({
                    value: u.FPS_30
                })), I(u.FPS_60, () => c.default.Messages.STREAM_FPS_OPTION.format({
                    value: u.FPS_60
                }))]
        },
        270161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CREATE_GUILD_EVENT_CORE_PERMISSIONS: function() {
                    return s
                },
                CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function() {
                    return u
                },
                CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function() {
                    return a
                }
            });
            var i = n("316693"),
                r = n("923510"),
                l = n("49111");
            let s = l.Permissions.VIEW_CHANNEL,
                u = i.default.combine(s, l.Permissions.CONNECT),
                a = i.default.combine(s, r.MODERATE_STAGE_CHANNEL_PERMISSIONS)
        },
        533613: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                HotspotLocations: function() {
                    return i
                }
            }), (r = i || (i = {})).REPORT_PROBLEM_POST_STREAM = "REPORT_PROBLEM_POST_STREAM", r.VIDEO_BACKGROUND_FEEDBACK = "VIDEO_BACKGROUND_FEEDBACK", r.VOICE_CALL_FEEDBACK = "VOICE_CALL_FEEDBACK", r.GUILD_ANALYTICS_GUILD_SETTINGS_MENU = "GUILD_ANALYTICS_GUILD_SETTINGS_MENU", r.NOW_PLAYING_CONSENT_CARD = "NOW_PLAYING_CONSENT_CARD", r.IOS_GUILD_NAV_EDUCATION = "IOS_GUILD_NAV_EDUCATION", r.VOICE_PANEL_INTRODUCTION = "VOICE_PANEL_INTRODUCTION", r.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL = "GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL", r.FAVORITE_EMOJI_TOOLTIP = "FAVORITE_EMOJI_TOOLTIP", r.POST_ACTIVITY_FEEDBACK = "POST_ACTIVITY_FEEDBACK", r.GUILD_DELETE_FEEDBACK = "GUILD_DELETE_FEEDBACK", r.GUILD_LEAVE_FEEDBACK = "GUILD_LEAVE_FEEDBACK", r.APPLICATION_COMMAND_TOOLTIP = "APPLICATION_COMMAND_TOOLTIP", r.GUILD_CAP_INLINE_UPSELL = "GUILD_CAP_INLINE_UPSELL", r.STAGE_CHANNEL_UPSELL = "STAGE_CHANNEL_UPSELL", r.HUB_WAITLIST_UPSELL = "HUB_WAITLIST_UPSELL", r.HUB_NEW = "HUB_NEW", r.HUB_SECOND_EMAIL_CONNECTION_UPSELL = "HUB_SECOND_EMAIL_CONNECTION_UPSELL", r.LIVE_STAGE_NOTIFICATION_BADGE = "LIVE_STAGE_NOTIFICATION_BADGE", r.GUILD_EVENT_UPSELL = "GUILD_EVENT_UPSELL", r.HUB_LINK_CHANNEL_NOTICE = "HUB_LINK_CHANNEL_NOTICE", r.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP = "PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP", r.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP = "ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP", r.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL = "ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL", r.MULTI_ACCOUNT_TOOLTIP = "MULTI_ACCOUNT_TOOLTIP", r.HUB_STUDY_ROOM_NOTICE = "HUB_STUDY_ROOM_NOTICE", r.CHANNEL_BANNER_MEMBER_LIST_NOTICE = "CHANNEL_BANNER_MEMBER_LIST_NOTICE", r.CHANGE_LANGUAGE_MODAL = "CHANGE_LANGUAGE_MODAL", r.ACTIVITY_BEB_TUTORIAL = "ACTIVITY_BEB_TUTORIAL", r.APP_DIRECTORY_SETTINGS_NEW_PILL = "APP_DIRECTORY_SETTINGS_NEW_PILL", r.INVITE_SPLASH_GUILD_HEADER_TOOLTIP = "INVITE_SPLASH_GUILD_HEADER_TOOLTIP", r.ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW", r.ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW", r.ANIMATED_VIDEO_BG_HACKER_DEN_NEW = "ANIMATED_VIDEO_BG_HACKER_DEN_NEW", r.ANIMATED_VIDEO_BG_WUMPICE_NEW = "ANIMATED_VIDEO_BG_WUMPICE_NEW", r.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW = "ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW", r.ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW = "ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW", r.SOUNDBOARD_WHEEL_EDUCATION_MODAL = "SOUNDBOARD_WHEEL_EDUCATION_MODAL", r.IN_APP_REPORTS_FEEDBACK = "IN_APP_REPORTS_FEEDBACK", r.CLIPS_CHANNEL_ATTACH_REMINDER = "CLIPS_CHANNEL_ATTACH_REMINDER"
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return s
                },
                generateInviteKeyFromExtraData: function() {
                    return u
                },
                parseExtraDataFromInviteKey: function() {
                    return a
                },
                parseInviteCodeFromInviteKey: function() {
                    return o
                }
            });
            var i = n("522632"),
                r = n("833858");
            let l = "event";

            function s(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = i.parse(t);
                        return (0, r.getFirstQueryStringValue)(e[l])
                    } catch (e) {
                        return
                    }
                }(t);
                return u({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function u(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(l, "=").concat(n)
            }

            function a(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let s = i.parse(n),
                    u = (0, r.getFirstQueryStringValue)(s[l]);
                return {
                    baseCode: t,
                    guildScheduledEventId: u
                }
            }

            function o(e) {
                let [t] = e.split("?");
                return t
            }
        },
        252931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInventoryGuildPacksUserExperimentConfig: function() {
                    return d
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return c
                },
                useInventoryGuildSettingsExperiment: function() {
                    return _
                }
            });
            var i = n("65597"),
                r = n("862205"),
                l = n("697218"),
                s = n("719923"),
                u = n("782340");
            let a = (0, r.createExperiment)({
                    kind: "user",
                    id: "2023-05_inventory_guild_packs",
                    label: "Inventory Guild Packs Experiment",
                    defaultConfig: {
                        desktopViewAndUseAndCollectEnabled: !1,
                        mobileViewAndUseEnabled: !1,
                        mobileAndFreemiumCollectEnabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Desktop view/use/collect",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 2,
                        label: "Desktop view/use/collect and mobile view/use",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 3,
                        label: "Read-only pack emoji for logged out users",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !1,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 4,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0
                        }
                    }, {
                        id: 5,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal (second group)",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0
                        }
                    }]
                }),
                o = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: i,
                        mobileViewAndUseEnabled: r,
                        mobileAndFreemiumCollectEnabled: l
                    } = n, u = s.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: l,
                        collectEnabled: u ? i : l
                    }
                },
                d = e => {
                    let {
                        user: t,
                        autoTrackExposure: n = !0
                    } = e;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1
                    } : o({
                        user: t,
                        config: a.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: n
                        })
                    })
                },
                c = function() {
                    var e;
                    let {
                        expressionSourceGuild: t,
                        autoTrackExposure: n = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        expressionSourceGuild: void 0,
                        autoTrackExposure: !0
                    }, r = (0, i.default)([l.default], () => l.default.getCurrentUser()), s = a.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: u,
                        showTryPacksModalAndV2Copy: d,
                        collectEnabled: c
                    } = o({
                        user: r,
                        config: s
                    }), E = u && c && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: u,
                        collectEnabled: E,
                        showTryPacksModalAndV2Copy: d
                    }
                },
                E = (0, r.createExperiment)({
                    kind: "guild",
                    id: "2023-06_inventory_guild_setting",
                    label: "Inventory Guild Settings Experiment",
                    defaultConfig: {
                        showSettingsToggle: !1,
                        allowCollection: !1,
                        getNewSettingsDescription: () => null
                    },
                    treatments: [{
                        id: 1,
                        label: "Show settings toggle, but collection is not allowed.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !1,
                            getNewSettingsDescription: () => u.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => u.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => u.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }]
                }),
                _ = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = E.useExperiment({
                        guildId: null != e ? e : "",
                        location: "482926_3"
                    }, {
                        autoTrackExposure: void 0 === t || t
                    });
                    return {
                        showSettingsToggle: n.showSettingsToggle,
                        allowCollection: n.allowCollection,
                        getNewSettingsDescription: n.getNewSettingsDescription
                    }
                }
        },
        692171: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("446674"),
                r = n("872717"),
                l = n("913144"),
                s = n("49111");
            let u = Object.freeze({
                    burstCredits: 0,
                    wasReplenishedToday: !1,
                    nextReplenishAt: null,
                    isReactionPickerBurstToggled: null,
                    emojiReactionForCoachmark: null,
                    guildBurstPreviews: {}
                }),
                a = {
                    ...u
                };
            class o extends i.default.PersistedStore {
                initialize(e) {
                    a = null != e ? e : {
                        ...u
                    }
                }
                get remainingBurstCurrency() {
                    return a.burstCredits
                }
                get hasAvailableBurstCurrency() {
                    return this.remainingBurstCurrency > 0
                }
                get nextReplenishAt() {
                    return a.nextReplenishAt
                }
                get isReactionPickerBurstToggled() {
                    return null != a.isReactionPickerBurstToggled && a.isReactionPickerBurstToggled
                }
                get emojiReactionToTargetForCoachmark() {
                    return a.emojiReactionForCoachmark
                }
                getBurstedPreviewData(e) {
                    var t;
                    return null !== (t = a.guildBurstPreviews[e]) && void 0 !== t ? t : void 0
                }
                getState() {
                    return a
                }
            }
            o.displayName = "BurstReactionStore", o.persistKey = "BurstReactionStore33";
            var d = new o(l.default, {
                BURST_CREDITS_SET: e => {
                    let {
                        amount: t,
                        wasReplenishedToday: n,
                        nextReplenishAt: i
                    } = e;
                    a.burstCredits = t, a.wasReplenishedToday = n, a.nextReplenishAt = i
                },
                POST_CONNECTION_OPEN: () => {
                    r.default.get({
                        url: s.Endpoints.BURST_CREDIT_BALANCE
                    }).then(e => {
                        l.default.dispatch({
                            type: "BURST_CREDITS_SET",
                            amount: e.body.amount,
                            wasReplenishedToday: e.body.replenished_today,
                            nextReplenishAt: new Date(e.body.next_replenish_at)
                        })
                    }).catch(() => {})
                },
                BURST_REACTION_PICKER_TOGGLE: e => {
                    let {
                        value: t
                    } = e;
                    a.isReactionPickerBurstToggled = t
                },
                BURST_REACTION_SHOW_FREE_USER_SENT_POPOUT: e => {
                    let {
                        emoji: t
                    } = e;
                    a.emojiReactionForCoachmark = null != t ? t : null
                },
                BURST_GUILD_PREVIEW_SET: e => {
                    let {
                        guildId: t,
                        channelId: n,
                        messageId: i,
                        emoji: r
                    } = e;
                    a.guildBurstPreviews[t] = {
                        channelId: n,
                        messageId: i,
                        emoji: r
                    }
                },
                BURST_GUILD_PREVIEW_CLEAR: e => {
                    let {
                        guildId: t
                    } = e;
                    delete a.guildBurstPreviews[t]
                }
            })
        },
        817963: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useManageResourcePermissions: function() {
                    return S
                },
                getManageResourcePermissions: function() {
                    return I
                },
                useHasInventoryGuildSettingsPermission: function() {
                    return N
                }
            });
            var i = n("884691"),
                r = n("316693"),
                l = n("446674"),
                s = n("252931"),
                u = n("813006");
            n("923959");
            var a = n("957255"),
                o = n("697218");
            n("991170");
            var d = n("270161"),
                c = n("843455");
            let E = {
                    canCreateExpressions: !1,
                    canCreateGuildEvent: !1,
                    canManageAllExpressions: !1,
                    canManageAllEvents: !1,
                    canManageGuildExpression: () => !1,
                    canManageGuildEvent: () => !1
                },
                _ = (e, t, n, i) => {
                    if (null == e) return !1;
                    if (n) return !0;
                    if ("creator_id" in e) return i && null != t && e.creator_id === t.id;
                    if ("userId" in e) return i && null != t && e.userId === t.id;
                    if ("user" in e) {
                        var r;
                        return i && null != t && (null === (r = e.user) || void 0 === r ? void 0 : r.id) === t.id
                    }
                    return !1
                },
                f = e => {
                    if (null == e) return [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS];
                    let t = d.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
                    return e.isGuildStageVoice() ? t = d.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (t = d.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [r.default.combine(t, c.Permissions.CREATE_EVENTS), r.default.combine(t, c.Permissions.MANAGE_EVENTS)]
                },
                S = e => {
                    let [t, n] = e instanceof u.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : f(e), [r, s, d, S] = (0, l.useStateFromStoresArray)([a.default], () => [a.default.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e), a.default.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e), a.default.can(t, e), a.default.can(n, e)]), I = (0, l.useStateFromStores)([o.default], () => o.default.getCurrentUser()), N = i.useCallback(e => _(e, I, s, r), [r, s, I]), O = i.useCallback(e => _(e, I, S, d), [S, d, I]);
                    return null == e ? E : {
                        canCreateExpressions: r,
                        canCreateGuildEvent: d,
                        canManageAllExpressions: s,
                        canManageAllEvents: S,
                        canManageGuildExpression: N,
                        canManageGuildEvent: O
                    }
                },
                I = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.default,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.default,
                        [i, r] = e instanceof u.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : f(e),
                        l = t.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                        s = t.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                        d = t.can(i, e),
                        S = t.can(r, e),
                        I = n.getCurrentUser();
                    return null == e ? E : {
                        canCreateExpressions: l,
                        canCreateGuildEvent: d,
                        canManageAllExpressions: s,
                        canManageAllEvents: S,
                        canManageGuildExpression: e => _(e, I, s, l),
                        canManageGuildEvent: e => _(e, I, S, d)
                    }
                },
                N = e => {
                    let t = (0, l.useStateFromStores)([a.default], () => a.default.can(c.Permissions.MANAGE_GUILD, e)),
                        {
                            showSettingsToggle: n
                        } = (0, s.useInventoryGuildSettingsExperiment)({
                            guildId: null == e ? void 0 : e.id
                        });
                    return t && n
                }
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return f
                },
                maybeFetchPremiumLikelihood: function() {
                    return I
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return N
                }
            });
            var i = n("884691"),
                r = n("65597"),
                l = n("872717"),
                s = n("913144"),
                u = n("775433"),
                a = n("697218"),
                o = n("10514"),
                d = n("764364"),
                c = n("676572"),
                E = n("646718"),
                _ = n("49111");
            let f = "nonSubscriber";
            async function S() {
                try {
                    s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await l.default.get({
                        url: _.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [f]: e.non_subscriber,
                                [E.PremiumSubscriptionSKUs.TIER_0]: e[E.PremiumSubscriptionSKUs.TIER_0],
                                [E.PremiumSubscriptionSKUs.TIER_2]: e[E.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function I(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), i = c.default.shouldFetchPremiumLikelihood(), r = a.default.getCurrentUser();
                O(r, i, t, n)
            }

            function N(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), l = (0, r.default)([c.default], () => c.default.shouldFetchPremiumLikelihood()), s = (0, r.default)([a.default], () => a.default.getCurrentUser());
                i.useEffect(() => {
                    O(s, l, t, n)
                }, [s, l, t, n])
            }

            function O(e, t, n, i) {
                null != e && !(0, d.isPremium)(e) && n && (t && S(), i && (!o.default.isLoadedForSKU(E.PremiumSubscriptionSKUs.TIER_0) && !o.default.isFetchingForSKU(E.PremiumSubscriptionSKUs.TIER_0) && (0, u.fetchSubscriptionPlansForSKU)(E.PremiumSubscriptionSKUs.TIER_0), !o.default.isLoadedForSKU(E.PremiumSubscriptionSKUs.TIER_2) && !o.default.isFetchingForSKU(E.PremiumSubscriptionSKUs.TIER_2) && (0, u.fetchSubscriptionPlansForSKU)(E.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("446674"),
                r = n("913144");
            let l = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                s = l;
            class u extends i.default.Store {
                initialize() {
                    s = l
                }
                getState() {
                    return s
                }
                shouldFetchPremiumLikelihood() {
                    return !s.isFetching && !s.fetched
                }
            }
            u.displayName = "UserPremiumLikelihoodStore";
            var a = new u(r.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    s.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    s.premiumLikelihood = t, s.fetched = !0, s.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    s.isFetching = !1
                },
                LOGOUT: function() {
                    s.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            });
            var l = r
        },
        664113: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("77078"),
                s = n("460029"),
                u = n("129722"),
                a = n("723961"),
                o = n("782340"),
                d = n("341479"),
                c = r.memo(function(e) {
                    let {
                        sound: t,
                        volume: n,
                        disabled: r = !1,
                        onChange: c
                    } = e, {
                        file: E
                    } = (0, u.useAudioTrimmerStore)();
                    return (0, i.jsx)(l.FormSection, {
                        className: d.section,
                        title: o.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_PREVIEW,
                        children: (0, i.jsxs)("div", {
                            className: d.fakeInput,
                            children: [null != t && (0, i.jsx)(a.default, {
                                sound: t,
                                volume: n,
                                disabled: r
                            }), null == t && null != E && (0, i.jsx)(s.default, {
                                className: d.audioTrimmer,
                                volume: n,
                                disabled: r,
                                onChange: c
                            })]
                        })
                    })
                })
        },
        460029: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                u = n("77078"),
                a = n("132755"),
                o = n("78404"),
                d = n("812809"),
                c = n("129722"),
                E = n("278175"),
                _ = n("859971"),
                f = n("846325"),
                S = n("193326");
            let I = {
                startPositionMs: 0,
                endPositionMs: 2e4,
                playheadPositionMs: 0
            };
            var N = r.memo(function(e) {
                var t;
                let {
                    className: n,
                    volume: l,
                    disabled: N = !1,
                    onChange: O
                } = e, {
                    audio: T
                } = (0, c.useAudioTrimmerStore)(), [m, p] = r.useState(!1), [g, A] = r.useState(I), {
                    playheadPositionMs: h,
                    endPositionMs: R,
                    startPositionMs: L
                } = g, C = null != T, U = R - L, D = U > 1e3 * f.MAX_SOUND_LENGTH_SECONDS;
                r.useEffect(() => {
                    null != T && A({
                        playheadPositionMs: 0,
                        endPositionMs: 1e3 * T.duration,
                        startPositionMs: 0
                    })
                }, [T]);
                let P = r.useCallback(e => {
                        null != T && (T.pause(), null != e && (T.currentTime = e), p(!1))
                    }, [T]),
                    v = r.useCallback(() => {
                        if (null != T) {
                            if (m) {
                                P();
                                return
                            }
                            h >= R ? T.currentTime = (0, _.toSeconds)(L) : T.currentTime = (0, _.toSeconds)(h), T.volume = (0, d.default)(l), T.play(), p(!0)
                        }
                    }, [T, R, P, h, m, L, l]),
                    b = r.useCallback(e => {
                        A(e), null == O || O({
                            startMs: e.startPositionMs,
                            endMs: e.endPositionMs
                        })
                    }, [O]),
                    M = r.useCallback(e => {
                        null != T && (T.currentTime = e)
                    }, [T]);
                return (0, i.jsxs)("div", {
                    className: s(S.container, {
                        [S.initialized]: C,
                        [S.disabled]: !C || N
                    }, n),
                    children: [(0, i.jsxs)("div", {
                        className: S.playButtonContainer,
                        children: [(0, i.jsx)(u.Clickable, {
                            className: S.playButton,
                            onClick: C ? v : void 0,
                            children: m ? (0, i.jsx)(o.default, {
                                className: S.playButtonIcon
                            }) : (0, i.jsx)(a.default, {
                                className: S.playButtonIcon
                            })
                        }), (0, i.jsx)("div", {
                            className: S.durationContainer,
                            children: (0, i.jsx)(u.Text, {
                                className: S.duration,
                                variant: "text-xs/normal",
                                color: D ? "text-warning" : "text-positive",
                                children: (t = U, "".concat((0, _.toSeconds)(t).toFixed(2), "s"))
                            })
                        })]
                    }), (0, i.jsx)(E.default, {
                        playing: m,
                        onPlaybackChange: M,
                        onPausePlayback: P,
                        onChangePosition: b,
                        disabled: N
                    })]
                })
            })
        },
        89050: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                defaultWaveformConfig: function() {
                    return i
                },
                getWaveformId: function() {
                    return r
                },
                getAudioFileId: function() {
                    return l
                },
                SUPPORTED_AUDIO_FILE_TYPES: function() {
                    return s
                }
            });
            let i = {
                    waveformBlockWidth: 2,
                    waveformBarWidth: .5,
                    fineTuningDelay: 500,
                    fineTuningScale: 10,
                    loudnessThreshold: .3
                },
                r = (e, t) => {
                    let n = "".concat(e[0], "-").concat(e[e.length - 1], "-").concat(e.byteLength);
                    return "".concat(n, "-").concat(JSON.stringify(t))
                },
                l = e => "".concat(e.name, "-").concat(e.size, "-").concat(e.lastModified),
                s = new Set(["audio/mpeg", "audio/mp3", "audio/wav", "audio/x-wav", "audio/ogg", "video/mp4"])
        },
        129722: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAudioTrimmerStore: function() {
                    return u
                }
            });
            var i = n("308503"),
                r = n("16470"),
                l = n("859971");
            let s = (0, i.default)(e => ({
                audio: null,
                file: null,
                loading: !1,
                loadAudioFromFile: async t => {
                    if (e({
                            file: t,
                            audio: null,
                            loading: null != t
                        }), null == t) return;
                    let n = await (0, l.loadAudioFromFile)(t);
                    null != n && e({
                        audio: n,
                        loading: !1
                    })
                },
                maxVolume: 1,
                setMaxVolume: t => {
                    e({
                        maxVolume: t
                    })
                }
            }));

            function u() {
                return s(e => ({
                    audio: e.audio,
                    file: e.file,
                    loading: e.loading,
                    loadAudioFromFile: e.loadAudioFromFile,
                    maxVolume: e.maxVolume,
                    setMaxVolume: e.setMaxVolume
                }), r.default)
            }
        },
        278175: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var i, r, l = n("37983"),
                s = n("884691"),
                u = n("414456"),
                a = n.n(u),
                o = n("461380"),
                d = n("129722"),
                c = n("859971"),
                E = n("184692"),
                _ = n("89050"),
                f = n("721013");
            (i = r || (r = {}))[i.START = 0] = "START", i[i.PLAYHEAD = 1] = "PLAYHEAD", i[i.END = 2] = "END";
            var S = s.memo(function(e) {
                let {
                    playing: t,
                    onPausePlayback: n,
                    onPlaybackChange: i,
                    onChangePosition: u,
                    disabled: S = !1
                } = e, I = {
                    ..._.defaultWaveformConfig
                }, {
                    audio: N
                } = (0, d.useAudioTrimmerStore)(), O = null != N, T = s.useRef(null), m = s.useRef(null), p = s.useRef(null), [g, A] = s.useState(0), [h, R] = s.useState(0), [L, C] = s.useState(0), [U, D] = s.useState(!1), [P, v] = s.useState(!1), [b, M] = s.useState(!1), [y, w] = s.useState(0), [F, G] = s.useState(-1), k = s.useMemo(() => y / I.fineTuningScale, [I.fineTuningScale, y]);
                s.useEffect(() => {
                    if (null == N) return;
                    let e = 1e3 * N.duration;
                    A(0), R(0), C(e), w(e)
                }, [N]);
                let B = s.useCallback((e, t) => {
                        if (n(), 0 === e.button) switch (t) {
                            case r.START:
                                D(!0);
                                break;
                            case r.PLAYHEAD:
                                v(!0);
                                break;
                            case r.END:
                                M(!0)
                        }
                    }, [n]),
                    x = s.useCallback(e => {
                        switch (e) {
                            case r.START:
                                D(!1);
                                break;
                            case r.PLAYHEAD:
                                v(!1);
                                break;
                            case r.END:
                                M(!1)
                        }
                        G(-1)
                    }, []),
                    V = s.useCallback(e => {
                        if (null == N || !U) return;
                        let t = parseInt(e.target.value),
                            n = t > L ? L : t;
                        i((0, c.toSeconds)(n)), A(n), R(n)
                    }, [N, i, L, U]),
                    H = s.useCallback(e => {
                        if (null == N || !P) return;
                        let t = parseInt(e.target.value);
                        t < g ? (i((0, c.toSeconds)(g)), R(g)) : t > L ? (i((0, c.toSeconds)(L)), R(L)) : (i((0, c.toSeconds)(t)), R(t))
                    }, [N, i, L, P, g]),
                    j = s.useCallback(e => {
                        if (null == N || !b) return;
                        let t = parseInt(e.target.value),
                            n = t > g ? t : g;
                        i((0, c.toSeconds)(g)), R(g), C(n)
                    }, [N, i, b, g]);
                return s.useEffect(() => {
                    null != u && O && u({
                        startPositionMs: g,
                        endPositionMs: L,
                        playheadPositionMs: h
                    })
                }, [g, L, u, O, h]), s.useEffect(() => {
                    let e;
                    if (null != N) return t && (e = setInterval(() => {
                        N.currentTime < (0, c.toSeconds)(L) ? N.currentTime >= (0, c.toSeconds)(h) && R(1e3 * N.currentTime) : (n((0, c.toSeconds)(g)), R(g))
                    }, 16)), () => {
                        clearInterval(e)
                    }
                }, [N, L, n, h, t, g]), s.useEffect(() => {
                    if (I.fineTuningDelay <= 0) return;
                    let e = setTimeout(() => {
                        U && g == g && -1 === F ? G(g) : b && L == L && -1 === F ? G(L) : P && h == h && -1 === F && G(h)
                    }, I.fineTuningDelay);
                    return () => {
                        clearTimeout(e)
                    }
                }, [I.fineTuningDelay, b, L, F, P, h, U, g]), (0, l.jsxs)("div", {
                    className: a(f.timeline, {
                        [f.initialized]: O
                    }),
                    children: [(0, l.jsxs)("div", {
                        className: f.rangeHandleContainer,
                        children: [(0, l.jsxs)("div", {
                            className: f.rangeHandleFrame,
                            children: [(0, l.jsx)("input", {
                                ref: T,
                                className: a(f.rangeHandle, f.rangeHandleStart),
                                type: "range",
                                min: (0, c.getMinValue)(F, k, y),
                                max: (0, c.getMaxValue)(F, k, y),
                                value: g,
                                onChange: V,
                                onMouseDown: e => B(e, r.START),
                                onMouseUp: () => x(r.START),
                                disabled: !O || S
                            }), (0, l.jsx)("input", {
                                ref: p,
                                className: a(f.rangeHandle, f.rangeHandleEnd),
                                type: "range",
                                min: (0, c.getMinValue)(F, k, y),
                                max: (0, c.getMaxValue)(F, k, y),
                                value: L,
                                onChange: j,
                                onMouseDown: e => B(e, r.END),
                                onMouseUp: () => x(r.END),
                                disabled: !O || S
                            })]
                        }), (0, l.jsx)("div", {
                            className: f.handlePlayheadTrack,
                            children: (0, l.jsx)("input", {
                                ref: m,
                                className: a(f.rangeHandle, f.rangeHandlePlayhead),
                                type: "range",
                                min: (0, c.getMinValue)(F, k, y),
                                max: (0, c.getMaxValue)(F, k, y),
                                value: h,
                                onChange: H,
                                onMouseDown: e => B(e, r.PLAYHEAD),
                                onMouseUp: () => x(r.PLAYHEAD),
                                disabled: !O || S
                            })
                        })]
                    }), (0, l.jsxs)("div", {
                        className: f.handleContainer,
                        children: [(0, l.jsxs)("div", {
                            className: a(f.handleFrame, {
                                [f.startDragging]: U,
                                [f.endDragging]: b
                            }),
                            style: {
                                left: "".concat((0, c.getStartHandleValue)(g, F, k, y), "%"),
                                right: "".concat((0, c.getEndHandleValue)(L, F, k, y), "%")
                            },
                            children: [(0, l.jsx)("div", {
                                className: a(f.handleIconFrame, f.handleIconFrameStart),
                                children: (0, l.jsx)("div", {
                                    className: a(f.handleIconContainer, f.start),
                                    children: (0, l.jsx)(o.default, {
                                        direction: o.default.Directions.RIGHT,
                                        className: f.handleIcon,
                                        width: 16,
                                        height: 16
                                    })
                                })
                            }), (0, l.jsx)("div", {
                                className: a(f.handleIconFrame, f.handleIconFrameEnd),
                                children: (0, l.jsx)("div", {
                                    className: a(f.handleIconContainer, f.end),
                                    children: (0, l.jsx)(o.default, {
                                        direction: o.default.Directions.LEFT,
                                        className: f.handleIcon,
                                        width: 16,
                                        height: 16
                                    })
                                })
                            })]
                        }), (0, l.jsx)("div", {
                            className: f.playheadTrack,
                            children: (0, l.jsx)("div", {
                                className: a(f.playhead, {
                                    [f.dragging]: P || U || b || t
                                }),
                                style: {
                                    left: "".concat((0, c.getStartHandleValue)(h, F, k, y), "%")
                                }
                            })
                        })]
                    }), (0, l.jsx)("div", {
                        className: f.waveformContainer,
                        children: (0, l.jsx)(E.default, {
                            fineTuning: F,
                            fineTuningResolution: k,
                            duration: y
                        })
                    })]
                })
            })
        },
        859971: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMinValue: function() {
                    return l
                },
                toSeconds: function() {
                    return s
                },
                getMaxValue: function() {
                    return u
                },
                getStartHandleValue: function() {
                    return a
                },
                getEndHandleValue: function() {
                    return o
                },
                loadAudioFromFile: function() {
                    return d
                },
                loadAudioFileFromUrl: function() {
                    return c
                }
            });
            var i = n("89050"),
                r = n("782340");
            let l = (e, t, n) => -1 === e ? 0 : e - t * e / n;

            function s(e) {
                return e / 1e3
            }
            let u = (e, t, n) => -1 === e ? n : e + t * (n - e) / n,
                a = (e, t, n, i) => {
                    let r = 0;
                    return (r = t >= 0 && n > 0 ? (e - (t - n * t / i)) * 100 / n : 100 * e / i).toFixed(4)
                },
                o = (e, t, n, i) => {
                    let r = 0;
                    return (r = t >= 0 && n > 0 ? -((e - (t + n * (i - t) / i)) * 100) / n : -100 * e / i + 100).toFixed(4)
                };
            async function d(e) {
                var t;
                if (!(e.type.startsWith("audio") || e.type.startsWith("video")) || !i.SUPPORTED_AUDIO_FILE_TYPES.has(e.type)) throw Error(r.default.Messages.SOUNDBOARD_ERROR_INVALID_FILE_TYPE.format({
                    fileType: e.type
                }));
                let n = URL.createObjectURL(e),
                    l = new Audio(n);
                return await (t = l, new Promise(e => {
                    let n = () => {
                        e(), t.removeEventListener("canplaythrough", n)
                    };
                    t.addEventListener("canplaythrough", n), t.load()
                })), l
            }
            async function c(e, t) {
                let n = await fetch(e),
                    i = await n.blob();
                return new File([i], t, {
                    type: "audio/mp3"
                })
            }
        },
        102432: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getDataUrlFromFile: function() {
                    return o
                },
                uploadFileReadPromise: function() {
                    return d
                },
                trimAndEncodeAudio: function() {
                    return E
                }
            });
            var i = n("627445"),
                r = n.n(i),
                l = n("305122"),
                s = n("108391");
            let u = new AudioContext({
                sampleRate: Math.min(new AudioContext().sampleRate, 48e3)
            });
            async function a(e) {
                let t = await e.arrayBuffer(),
                    n = t instanceof ArrayBuffer;
                if (!n) throw Error("Unexpected file type");
                return u.decodeAudioData(t)
            }
            async function o(e) {
                var t;
                let n = await (t = t => {
                    t.readAsDataURL(e)
                }, new Promise((e, n) => {
                    let i = new FileReader,
                        r = () => {
                            i.removeEventListener("load", r), i.removeEventListener("error", n), e(i.result)
                        };
                    i.addEventListener("load", r), i.addEventListener("error", n), t(i)
                }));
                if ("string" != typeof n) throw Error("Unexpected file type");
                return n
            }
            async function d(e) {
                let {
                    readPromise: t,
                    guildId: n,
                    name: i,
                    volume: r,
                    emojiId: s,
                    emojiName: u
                } = e;
                return (0, l.uploadSound)({
                    guildId: n,
                    name: i,
                    sound: await t,
                    volume: r,
                    emojiId: s,
                    emojiName: u
                })
            }
            async function c(e) {
                let t = [],
                    n = function(e) {
                        let {
                            numberOfChannels: t
                        } = e, n = [];
                        for (let i = 0; i < t; i++) n.push(e.getChannelData(i));
                        return n
                    }(e),
                    i = function(e) {
                        if (1 === e.length) return e[0];
                        if (2 === e.length) {
                            let t = e[0],
                                n = e[1],
                                i = [];
                            for (let e = 0; e < t.length; e++) i.push(t[e]), i.push(n[e]);
                            let r = new Float32Array(i.length);
                            return r.set(i), r
                        }
                        throw Error("Only handles up to 2 channels")
                    }(n),
                    l = new AudioData({
                        format: "f32",
                        sampleRate: e.sampleRate,
                        numberOfFrames: e.length,
                        numberOfChannels: e.numberOfChannels,
                        timestamp: 1e6 * e.duration,
                        data: i
                    }),
                    u = new AudioEncoder({
                        output: function(n) {
                            r(null != n.duration, "Chunk duration must not be null");
                            let i = n.duration / 1e6 * e.sampleRate,
                                l = new Uint8Array(n.byteLength);
                            n.copyTo(l), t.push({
                                buffer: l,
                                numSamples: i
                            })
                        },
                        error: e => {
                            throw Error("Audio encoding error: ".concat(e.message))
                        }
                    });
                u.configure({
                    codec: "opus",
                    sampleRate: e.sampleRate,
                    numberOfChannels: e.numberOfChannels
                }), u.encode(l), await u.flush();
                let a = (0, s.default)(t, {
                    channelCount: e.numberOfChannels,
                    inputSampleRate: e.sampleRate,
                    outputGain: 0,
                    channelMappingFamily: 0
                });
                return new Blob([a], {
                    type: "audio/ogg"
                })
            }
            async function E(e, t) {
                let n = await a(e),
                    i = function(e, t) {
                        let {
                            startMs: n,
                            endMs: i
                        } = t, {
                            sampleRate: r,
                            numberOfChannels: l,
                            duration: s
                        } = e, a = 1e3 * s, o = Math.min(i, a);
                        if (0 === n && o === a) return e;
                        let d = Math.floor(n / a * e.length),
                            c = Math.floor(o / a * e.length),
                            E = u.createBuffer(l, c - d, r);
                        for (let t = 0; t < l; t++) {
                            let n = E.getChannelData(t),
                                i = e.getChannelData(t),
                                r = 0;
                            for (let e = d; e <= c; e++) n[r] = i[e], r++
                        }
                        return E
                    }(n, t),
                    r = await c(i);
                return new File([r], "sound.ogg", {
                    type: "audio/ogg"
                })
            }
        },
        184692: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("129722"),
                s = n("527246"),
                u = r.memo(function(e) {
                    let {
                        fineTuning: t,
                        fineTuningResolution: n,
                        duration: r
                    } = e, {
                        file: u,
                        audio: a
                    } = (0, l.useAudioTrimmerStore)();
                    return (0, i.jsx)(s.default, {
                        file: u,
                        audio: a,
                        waveformSettings: {
                            fineTuning: t,
                            fineTuningResolution: n,
                            duration: r
                        }
                    })
                })
        },
        527246: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                u = n("917351"),
                a = n("819855"),
                o = n("77078"),
                d = n("841098"),
                c = n("449918"),
                E = n("302185"),
                _ = n("89050"),
                f = n("843455"),
                S = n("353295"),
                I = r.memo(function(e) {
                    let {
                        file: t,
                        audio: n,
                        className: l,
                        waveformSettings: I
                    } = e, [N, O] = r.useState({
                        width: 0,
                        height: 0
                    }), T = r.useRef(null), m = r.useMemo(() => {
                        var e;
                        let t = null !== (e = null == n ? void 0 : n.duration) && void 0 !== e ? e : 1;
                        return {
                            fineTuning: -1,
                            fineTuningResolution: t / _.defaultWaveformConfig.fineTuningScale,
                            duration: t,
                            ...null != I ? I : {}
                        }
                    }, [n, I]), p = (0, E.useAudioBufferData)(t), g = (0, E.useAudioWaveformData)(p, T.current, m), A = (0, d.default)(), h = (0, c.useColorValue)((0, a.isThemeDark)(A) ? f.Color.PRIMARY_300 : f.Color.PRIMARY_700), R = null == p || null == g, L = 0 === N.width || 0 === N.height, C = (L || R) && null != t, U = r.useCallback(() => {
                        null != T.current && O({
                            width: T.current.offsetWidth,
                            height: T.current.offsetHeight
                        })
                    }, []);
                    return r.useEffect(() => {
                        if (null != T.current) {
                            let e = new ResizeObserver((0, u.debounce)(U, 50));
                            return e.observe(T.current), () => {
                                e.disconnect()
                            }
                        }
                    }, [U]), r.useEffect(() => {
                        if (null == T.current) return;
                        let e = T.current,
                            t = e.getContext("2d");
                        if (null == t) return;
                        let {
                            width: n,
                            height: i
                        } = e;
                        if (0 !== N.width && 0 !== N.height && null != g && g.length > 0) {
                            let e = n / g.length,
                                r = -(e * (_.defaultWaveformConfig.waveformBarWidth - 1));
                            t.clearRect(0, 0, n, i), t.fillStyle = h.hex;
                            for (let n = 0; n < g.length; n++) {
                                let l = g[n] * i,
                                    s = n * e + r,
                                    u = i / 2 - l / 2;
                                t.fillRect(s, u, e - r, l)
                            }
                        }
                    }, [h, N, A, g]), (0, i.jsxs)("div", {
                        className: s(S.container, l),
                        children: [(0, i.jsx)("canvas", {
                            className: S.waveformCanvas,
                            ref: T,
                            width: 4 * N.width,
                            height: 4 * N.height
                        }), C && (0, i.jsx)("div", {
                            className: S.loading,
                            children: (0, i.jsx)(o.Spinner, {
                                type: o.SpinnerTypes.SPINNING_CIRCLE
                            })
                        })]
                    })
                })
        },
        302185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAudioBufferData: function() {
                    return d
                },
                useAudioWaveformData: function() {
                    return E
                }
            });
            var i = n("884691"),
                r = n("748820"),
                l = n("129722"),
                s = n("89050");
            let u = new Worker(new URL(n.p + n.u("21401"), n.b)),
                a = new AudioContext;
            async function o(e) {
                let t = await e.arrayBuffer(),
                    n = await a.decodeAudioData(t);
                return n.getChannelData(0)
            }

            function d(e) {
                let [t, n] = i.useState(null), [r, l] = i.useState(null);
                return i.useEffect(() => {
                    if (null == e) return;
                    let t = (0, s.getAudioFileId)(e);
                    t !== r && (l(t), n(null), o(e).then(n))
                }, [r, e]), t
            }
            let c = {
                ...s.defaultWaveformConfig
            };

            function E(e, t, n) {
                let [a, o] = i.useState(null), [d, E] = i.useState(null), [_, f] = i.useState(1), {
                    setMaxVolume: S
                } = (0, l.useAudioTrimmerStore)(), I = i.useCallback((e, t) => {
                    var i, l, s, a, o;
                    E(null), (i = e, l = t.offsetWidth, s = n, a = c, o = f, new Promise(e => {
                        let t = (0, r.v4)(),
                            n = i => {
                                let {
                                    data: {
                                        waveform: r,
                                        id: l,
                                        normalizedVolumeMultipler: s
                                    }
                                } = i;
                                t === l && (e(r), o(s)), null == u || u.removeEventListener("message", n)
                            };
                        null == u || u.addEventListener("message", n), null == u || u.postMessage({
                            id: t,
                            options: s,
                            config: a,
                            width: l,
                            rawBufferData: i
                        })
                    })).then(E)
                }, [n]);
                return i.useEffect(() => {
                    if (null == e || null == t) return;
                    let i = (0, s.getWaveformId)(e, n);
                    a !== i && (o(i), I(e, t))
                }, [e, I, t, n, a]), i.useEffect(() => {
                    S(_)
                }, [_, S]), d
            }
        },
        723961: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("77078"),
                s = n("132755"),
                u = n("78404"),
                a = n("520497"),
                o = n("812809"),
                d = n("129722"),
                c = n("859971"),
                E = n("527246"),
                _ = n("782340"),
                f = n("803336"),
                S = r.memo(function(e) {
                    let {
                        sound: t,
                        volume: n,
                        disabled: S
                    } = e, [I, N] = r.useState(!1), O = r.useRef(null), {
                        file: T,
                        audio: m,
                        loadAudioFromFile: p
                    } = (0, d.useAudioTrimmerStore)(), g = r.useMemo(() => (0, a.default)(t.soundId), [t]);
                    return r.useEffect(() => {
                        null == O.current && (O.current = (0, c.loadAudioFileFromUrl)(g, t.name).then(p))
                    }, [g, p, t.name]), (0, i.jsxs)("div", {
                        className: f.previewContainer,
                        children: [(0, i.jsx)(l.Clickable, {
                            onClick: S ? void 0 : function() {
                                null != m && (m.paused ? (m.volume = (0, o.default)(n), m.currentTime = 0, m.play(), N(!0), m.addEventListener("ended", () => N(!1), {
                                    once: !0
                                })) : (m.pause(), N(!1)))
                            },
                            className: f.playButton,
                            "aria-label": I ? _.default.Messages.STOP : _.default.Messages.PLAY,
                            children: I ? (0, i.jsx)(u.default, {
                                className: f.playIcon
                            }) : (0, i.jsx)(s.default, {
                                className: f.playIcon
                            })
                        }), (0, i.jsx)("div", {
                            className: f.waveformContainer,
                            children: (0, i.jsx)(E.default, {
                                className: f.waveform,
                                file: T,
                                audio: m
                            })
                        })]
                    })
                })
        },
        108391: function(e, t, n) {
            "use strict";
            var i, r, l, s;
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            (l = i || (i = {}))[l.NONE = 0] = "NONE", l[l.CONTINUATION = 1] = "CONTINUATION", l[l.BEGINNING_OF_STREAM = 2] = "BEGINNING_OF_STREAM", l[l.END_OF_STREAM = 4] = "END_OF_STREAM";
            class u {
                appendBytes(e) {
                    if (this._offset + e.length > this._buffer.length) {
                        let t = this._offset + e.length,
                            n = Math.pow(2, Math.ceil(Math.log2(Math.max(2 * this._buffer.length, t)))),
                            i = new Uint8Array(n);
                        i.set(this._buffer.subarray(0, this._offset)), this._buffer = i
                    }
                    this._buffer.set(e, this._offset), this._offset += e.length
                }
                addPage(e) {
                    if (e.segments.length > 255) throw Error("Too many segments: ".concat(e.segments.length, " exceeds limit of ").concat(255));
                    for (let [t, n] of e.segments.entries())
                        if (n.length > 255) throw Error("Segment at index ".concat(t, " too large (length ").concat(n.length, " exceeds ").concat(255, ")"));
                    let t = e.segments.reduce((e, t) => e + t.length, 0),
                        n = 27 + e.segments.length + t;
                    if (n > 65307) throw Error("Page too large (size ".concat(n, " exceeds ").concat(65307, ")"));
                    let r = this._offset,
                        l = 0;
                    switch (e.pageType) {
                        case i.CONTINUATION:
                            l = 1;
                            break;
                        case i.BEGINNING_OF_STREAM:
                            l = 2;
                            break;
                        case i.END_OF_STREAM:
                            l = 4
                    }
                    this.appendBytes([79, 103, 103, 83, 0, l, 255 & e.granulePosition, e.granulePosition >> 8 & 255, e.granulePosition >> 16 & 255, e.granulePosition >> 24 & 255, 0, 0, 0, 0, 0, 0, 0, 1, 255 & this._pageSequenceNumber, this._pageSequenceNumber >> 8 & 255, this._pageSequenceNumber >> 16 & 255, this._pageSequenceNumber >> 24 & 255]);
                    let s = this._offset;
                    for (let t of (this.appendBytes([0, 0, 0, 0, e.segments.length]), this.appendBytes(e.segments.map(e => e.length)), e.segments)) this.appendBytes(t);
                    let u = function(e) {
                        return e.reduce((e, t) => e << 8 >>> 0 ^ o[e >>> 24 ^ t], 0) >>> 0
                    }(this._buffer.subarray(r, this._offset));
                    this._buffer.set([255 & u, u >> 8 & 255, u >> 16 & 255, u >> 24 & 255], s), this._pageSequenceNumber++
                }
                finalize(e) {
                    this.addPage({
                        pageType: i.END_OF_STREAM,
                        granulePosition: e,
                        segments: []
                    });
                    let t = this._buffer,
                        n = this._offset;
                    return this._buffer = new Uint8Array(4096), this._offset = 0, this._pageSequenceNumber = 0, t.subarray(0, n)
                }
                constructor() {
                    this._buffer = new Uint8Array(4096), this._pageSequenceNumber = 0, this._offset = 0
                }
            }

            function a(e, t) {
                let n = new Uint8Array([79, 112, 117, 115, 72, 101, 97, 100, 1, t.channelCount, 0, 15, 255 & t.inputSampleRate, t.inputSampleRate >> 8 & 255, t.inputSampleRate >> 16 & 255, t.inputSampleRate >> 24 & 255, 255 & t.outputGain, t.outputGain >> 8 & 255, t.channelMappingFamily]),
                    r = new Uint8Array([79, 112, 117, 115, 84, 97, 103, 115, 0, 0, 0, 0, 0, 0, 0, 0]),
                    l = new u;
                l.addPage({
                    pageType: i.BEGINNING_OF_STREAM,
                    granulePosition: 0,
                    segments: [n]
                });
                let s = 0;
                for (let t of (l.addPage({
                        pageType: i.NONE,
                        granulePosition: s,
                        segments: [r]
                    }), e)) {
                    let e = function(e) {
                        let t = Math.floor(e.length / 255),
                            n = [];
                        for (let i = 0; i <= t; i++) {
                            let r = 0 === i ? 0 : 255 * i,
                                l = i === t ? e.length : (i + 1) * 255;
                            n.push(e.slice(r, l))
                        }
                        return n
                    }(t.buffer);
                    s += t.numSamples, l.addPage({
                        pageType: i.NONE,
                        granulePosition: s,
                        segments: e
                    })
                }
                return l.finalize(s)
            }(s = r || (r = {}))[s.ZERO = 0] = "ZERO";
            let o = function() {
                let e = new Uint32Array(256);
                for (let t = 256; t > 0; t--) {
                    let n = t << 24;
                    for (let e = 8; e > 0; e--) n = 2147483648 & n ? 79764919 ^ n << 1 : n << 1;
                    e[t] = n
                }
                return e
            }()
        },
        823749: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var i, r, l = n("37983"),
                s = n("884691"),
                u = n("414456"),
                a = n.n(u),
                o = n("627445"),
                d = n.n(o),
                c = n("77078"),
                E = n("599417"),
                _ = n("208548"),
                f = n("104945"),
                S = n("599110"),
                I = n("305122"),
                N = n("664113"),
                O = n("129722"),
                T = n("102432"),
                m = n("876189"),
                p = n("846325"),
                g = n("49111"),
                A = n("782340"),
                h = n("921389");
            (i = r || (r = {})).READY = "ready", i.ENCODING_FAILED = "encoding-failed", i.ENCODING = "encoding", i.UPLOADING = "uploading";
            let R = [{
                name: "audio",
                extensions: ["mp3", "wav", "ogg", "x-wav", "mp4"]
            }];

            function L(e) {
                var t, n, i, u;
                let {
                    guildId: o,
                    sourceFile: L,
                    existingSound: C,
                    onClose: U,
                    transitionState: D,
                    showGuildPicker: P = !1
                } = e, [v, b] = s.useState(null !== (n = null !== (t = null == L ? void 0 : L.name) && void 0 !== t ? t : null == C ? void 0 : C.name) && void 0 !== n ? n : ""), [M, y] = s.useState(null !== (i = null == C ? void 0 : C.volume) && void 0 !== i ? i : 1), [w, F] = s.useState(null == C ? void 0 : C.emojiId), [G, k] = s.useState(null == C ? void 0 : C.emojiName), {
                    file: B,
                    loadAudioFromFile: x,
                    maxVolume: V,
                    setMaxVolume: H
                } = (0, O.useAudioTrimmerStore)(), [j, K] = s.useState(!1), [W, Y] = s.useState(null), [q, z] = s.useState(null), [Q, X] = s.useState(r.READY), [J, Z] = s.useState(o);
                async function $(e) {
                    try {
                        await x(null != e ? e : null), X(r.READY), Y(null)
                    } catch (e) {
                        ee(e)
                    }
                }

                function ee(e) {
                    if (e instanceof E.default) Y(e);
                    else if (e instanceof Error) {
                        let t = {
                            status: 500,
                            body: {
                                message: e.message
                            }
                        };
                        Y(new E.default(t))
                    } else Y(new E.default(e))
                }
                s.useEffect(() => {
                    async function e(e) {
                        try {
                            await x(e), X(r.READY), Y(null)
                        } catch (e) {
                            ee(e)
                        }
                    }(null == L ? void 0 : L.file) != null && e(L.file)
                }, [null == L ? void 0 : L.file, x]);
                let et = function(e) {
                        switch (e) {
                            case r.ENCODING:
                                return A.default.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING;
                            case r.ENCODING_FAILED:
                                return A.default.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING_FAILED;
                            case r.UPLOADING:
                                return A.default.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_UPLOADING
                        }
                        return null
                    }(Q),
                    en = Q === r.UPLOADING || Q === r.ENCODING,
                    ei = null != C,
                    er = v.length >= 2 && (ei || null != B) && null != J && function(e) {
                        if (null == e) return !0;
                        let t = (e.endMs - e.startMs) / 1e3;
                        return t > 0 && t <= p.MAX_SOUND_LENGTH_SECONDS
                    }(q),
                    el = s.useCallback(async (e, t) => {
                        X(r.ENCODING);
                        try {
                            let n = await (0, T.trimAndEncodeAudio)(e, t);
                            return X(r.READY), n
                        } catch (e) {
                            throw X(r.ENCODING_FAILED), e
                        }
                    }, []),
                    es = s.useCallback(async () => {
                        if (null == B) return;
                        d(null != J, "Cannot submit soundboard sound with no guildId");
                        let e = B;
                        if (null != q) {
                            let t = await el(B, q);
                            if (null == t) return;
                            e = t
                        }
                        let t = (0, T.getDataUrlFromFile)(e);
                        X(r.UPLOADING);
                        try {
                            await (0, T.uploadFileReadPromise)({
                                readPromise: t,
                                guildId: J,
                                name: v,
                                volume: M,
                                emojiId: w,
                                emojiName: G
                            }), X(r.READY)
                        } catch (e) {
                            throw new E.default(e)
                        }
                    }, [B, J, v, el, q, M, w, G]),
                    eu = s.useCallback(async () => {
                        d(null != J, "Cannot submit soundboard sound with no guildId"), K(!0), Y(null);
                        try {
                            ei ? await (0, I.updateSound)({
                                guildId: J,
                                soundId: C.soundId,
                                name: v,
                                volume: M,
                                emojiId: w,
                                emojiName: G
                            }) : await es(), U()
                        } catch (e) {
                            ee(e)
                        } finally {
                            X(r.READY), K(!1), y(1), H(1)
                        }
                    }, [ei, U, J, C, v, M, w, G, es, H]);
                s.useEffect(() => {
                    x(null), S.default.track(g.AnalyticEvents.OPEN_MODAL, {
                        type: "Soundboard Upload Sound",
                        guild_id: J
                    })
                }, []), s.useEffect(() => {
                    y(Math.min(M, V))
                }, [M, y, V]);
                let ea = (0, l.jsx)(_.default, {
                    guildId: J,
                    emojiId: w,
                    emojiName: G,
                    setEmojiId: F,
                    setEmojiName: k,
                    error: null == W ? void 0 : W.getFirstFieldErrorMessage("emoji"),
                    isRequiredField: !1
                });
                return (0, l.jsxs)(c.ModalRoot, {
                    transitionState: D,
                    children: [(0, l.jsx)(c.ModalCloseButton, {
                        onClick: U,
                        className: h.modalClose
                    }), (0, l.jsx)(c.ModalHeader, {
                        className: h.headerContainer,
                        separator: !1,
                        children: (0, l.jsx)(c.Heading, {
                            className: h.header,
                            variant: "heading-xl/extrabold",
                            children: ei ? A.default.Messages.SOUNDBOARD_SOUND_UPDATE_MODAL_HEADER : A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_HEADER
                        })
                    }), (0, l.jsxs)(c.ModalContent, {
                        className: h.content,
                        children: [null != W && !W.hasFieldErrors() && (0, l.jsx)(c.FormErrorBlock, {
                            className: h.section,
                            children: W.message
                        }), P ? (0, l.jsx)(c.FormItem, {
                            required: !0,
                            className: h.section,
                            title: A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT,
                            children: (0, l.jsx)(m.default, {
                                value: J,
                                onChange: Z
                            })
                        }) : null, (ei || null != B) && (0, l.jsx)(N.default, {
                            sound: C,
                            volume: M,
                            disabled: en,
                            onChange: z
                        }), ei || null != L ? null : (0, l.jsx)(c.FormItem, {
                            required: !0,
                            error: null == W ? void 0 : W.getFirstFieldErrorMessage("sound"),
                            className: h.section,
                            title: A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_FILE,
                            children: (0, l.jsx)(f.default, {
                                filename: null !== (u = null == B ? void 0 : B.name) && void 0 !== u ? u : "",
                                buttonText: A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_BROWSE,
                                placeholder: A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_INPUT_PLACEHOLDER,
                                onFileSelect: $,
                                filters: R
                            })
                        }), (0, l.jsxs)("div", {
                            className: h.multiInput,
                            children: [(0, l.jsx)(c.FormItem, {
                                required: !0,
                                error: null == W ? void 0 : W.getFirstFieldErrorMessage("name"),
                                className: a(h.section, h.halfInput),
                                title: A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
                                children: (0, l.jsx)(c.TextInput, {
                                    placeholder: A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
                                    value: v,
                                    onChange: b,
                                    maxLength: p.MAX_LENGTH_SOUND_NAME
                                })
                            }), ea]
                        }), (0, l.jsx)(c.FormItem, {
                            error: null == W ? void 0 : W.getFirstFieldErrorMessage("volume"),
                            className: h.section,
                            title: A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_VOLUME,
                            children: (0, l.jsx)(c.Slider, {
                                initialValue: M,
                                onValueChange: e => y(e),
                                minValue: 0,
                                maxValue: V
                            })
                        })]
                    }), (0, l.jsxs)(c.ModalFooter, {
                        children: [(0, l.jsx)(c.Button, {
                            disabled: !er,
                            submitting: j,
                            size: c.Button.Sizes.SMALL,
                            onClick: eu,
                            children: ei ? A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SAVE : A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_UPLOAD
                        }), (0, l.jsx)(c.Button, {
                            disabled: j,
                            onClick: U,
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            children: A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_CANCEL
                        }), null != et && (0, l.jsx)("div", {
                            className: h.soundStateHint,
                            children: (0, l.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: et
                            })
                        })]
                    })]
                })
            }
        },
        876189: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                u = n("446674"),
                a = n("77078"),
                o = n("817963"),
                d = n("305961"),
                c = n("957255"),
                E = n("677099"),
                _ = n("697218"),
                f = n("109024"),
                S = n("368121"),
                I = n("427459"),
                N = n("305122"),
                O = n("235004"),
                T = n("846325"),
                m = n("782340"),
                p = n("151355");

            function g(e) {
                let {
                    availableSlots: t,
                    className: n
                } = e;
                return (0, i.jsxs)(a.Text, {
                    className: s(p.suffixNode, n),
                    variant: "text-sm/medium",
                    color: "text-primary",
                    children: [(0, i.jsx)(S.default, {
                        className: p.speakerIcon
                    }), m.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_AVAILABLE_COUNT.format({
                        slots: t
                    })]
                })
            }

            function A(e) {
                let {
                    value: t,
                    className: n,
                    onChange: l
                } = e, S = (0, u.useStateFromStoresObject)([E.default, c.default, _.default, d.default], () => {
                    let e = {};
                    for (let t of E.default.getFlattenedGuildIds()) {
                        let n = d.default.getGuild(t);
                        if (null == n) continue;
                        let i = (0, o.getManageResourcePermissions)(n, c.default, _.default);
                        i.canCreateExpressions && (e[n.id] = n)
                    }
                    return e
                }), A = (0, u.useStateFromStoresObject)([O.default], () => {
                    let e = {};
                    for (let [n, i] of Object.entries(S)) {
                        var t;
                        let r = (0, I.getAvailableSoundboardSoundCount)(null !== (t = O.default.getSoundsForGuild(n)) && void 0 !== t ? t : T.EMPTY_SOUND_LIST, i.premiumTier);
                        e[n] = r
                    }
                    return e
                }, [S]);
                r.useEffect(() => {
                    (0, N.maybeFetchSoundboardSounds)()
                }, []);
                let h = r.useMemo(() => Object.values(S).map(e => {
                        let {
                            name: t,
                            id: n
                        } = e;
                        return {
                            label: t,
                            value: n,
                            disabled: A[n] <= 0
                        }
                    }), [S, A]),
                    R = r.useCallback(e => null == e || "" === e.value ? null : (0, i.jsx)(f.default, {
                        className: s(p.guildSelectOptionIcon, {
                            [p.disabledOption]: e.disabled
                        }),
                        guild: S[e.value],
                        size: f.default.Sizes.SMOL,
                        active: !0
                    }), [S]),
                    L = r.useCallback(e => {
                        let t = null == e ? void 0 : e.value;
                        return null == t || "" === t ? null : (0, i.jsx)(g, {
                            className: s({
                                [p.disabledOption]: null == e ? void 0 : e.disabled
                            }),
                            availableSlots: A[t]
                        })
                    }, [A]),
                    C = r.useCallback(e => (0, i.jsx)("div", {
                        className: s({
                            [p.disabledOption]: e.disabled
                        }),
                        children: e.label
                    }), []),
                    U = r.useCallback(e => {
                        !(A[e] <= 0) && l(e)
                    }, [A, l]),
                    D = (() => {
                        let e = A[null != t ? t : ""];
                        return null == e || e > 0 ? t : void 0
                    })();
                return (0, i.jsx)(a.SearchableSelect, {
                    className: n,
                    onChange: U,
                    value: D,
                    multi: !1,
                    options: h,
                    renderOptionPrefix: R,
                    renderOptionSuffix: L,
                    renderOptionLabel: C,
                    placeholder: 0 === h.length ? m.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_NONE_AVAILABLE : m.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_PLACEHOLDER
                })
            }
        },
        4233: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-03_free_discord_stickers",
                label: "Free Default Stickers",
                defaultConfig: {
                    freeStickersEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        freeStickersEnabled: !0
                    }
                }]
            });
            var l = r
        },
        866353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerSendability: function() {
                    return r
                },
                getStickerSendability: function() {
                    return d
                },
                isSendableSticker: function() {
                    return c
                }
            });
            var i, r, l = n("991170"),
                s = n("719923"),
                u = n("4233"),
                a = n("24373"),
                o = n("49111");
            (i = r || (r = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let d = (e, t, n) => {
                    if (null == t) return r.NONSENDABLE;
                    let i = s.default.canUseStickersEverywhere(t);
                    if ((0, a.isStandardSticker)(e)) {
                        let {
                            freeStickersEnabled: e
                        } = u.default.getCurrentConfig({
                            location: "c036ff_1"
                        }, {
                            autoTrackExposure: !1
                        });
                        return i || e ? r.SENDABLE : r.SENDABLE_WITH_PREMIUM
                    }
                    if ((0, a.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? r.SENDABLE : null == n.guild_id || l.default.can({
                        permission: o.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? i ? r.SENDABLE : r.SENDABLE_WITH_PREMIUM : r.NONSENDABLE : r.SENDABLE_WITH_BOOSTED_GUILD;
                    return r.NONSENDABLE
                },
                c = (e, t, n) => d(e, t, n) === r.SENDABLE
        },
        865372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var i = n("917351"),
                r = n.n(i),
                l = n("446674"),
                s = n("913144"),
                u = n("80507"),
                a = n("374363"),
                o = n("364685"),
                d = n("49111"),
                c = n("397336");
            let E = {
                pendingUsages: []
            };
            d.Durations.DAY;
            let _ = new u.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => o.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                f = () => {
                    o.default.isLoaded && _.compute()
                },
                S = () => {
                    f()
                };

            function I() {
                var e;
                let t = null === (e = a.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                _.overwriteHistory(r.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), E.pendingUsages)
            }
            class N extends l.default.PersistedStore {
                initialize(e) {
                    this.waitFor(o.default), null != e && (E = e), this.syncWith([o.default], S), this.syncWith([a.default], I)
                }
                getState() {
                    return E
                }
                hasPendingUsage() {
                    return E.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return _
                }
            }
            N.displayName = "StickersPersistedStore", N.persistKey = "StickersPersistedStoreV2";
            var O = new N(s.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        _.track(e), E.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), f()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== c.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    E.pendingUsages = []
                }
            })
        },
        364685: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            });
            var i, r, l = n("102053"),
                s = n("446674"),
                u = n("913144"),
                a = n("802493"),
                o = n("595525"),
                d = n("212084"),
                c = n("867805"),
                E = n("267567"),
                _ = n("813006"),
                f = n("778689"),
                S = n("305961"),
                I = n("161585"),
                N = n("24373"),
                O = n("49111");
            (i = r || (r = {}))[i.Unloaded = 0] = "Unloaded", i[i.MaybeLoaded = 1] = "MaybeLoaded", i[i.Loaded = 2] = "Loaded";
            let T = 2,
                m = new Map,
                p = new Map,
                g = null,
                A = [],
                h = null,
                R = !1,
                L = new Map,
                C = (e, t) => {
                    L = new Map(L.set(e, t))
                },
                U = 1e3 * O.Durations.HOUR,
                D = () => {
                    if (0 !== T) return;
                    let e = a.default.database();
                    if (null == e) return;
                    T = 2;
                    let t = (0, o.tryLoadOrResetCacheGateway)("StickerStore.loadSavedGuildStickers", () => l.default.time("\uD83D\uDCBE", "loadSavedGuildStickers", () => d.default.getSync(e)));
                    if (null != t) {
                        for (let [e, n] of t)
                            if (f.default.isMember(e) && !L.has(e)) {
                                for (let t of n) P(t, !0, S.default.getGuild(e));
                                C(e, n)
                            }
                    }
                },
                P = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    p.set(e.id, e), t && v(e, n)
                },
                v = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == g) return;
                    let {
                        tags: n
                    } = e, i = {
                        type: I.StickerMetadataTypes.STICKER_NAME,
                        value: e.name.trim().toLocaleLowerCase()
                    };
                    if ((0, N.isStandardSticker)(e)) {
                        let t = A.find(t => t.id === e.pack_id),
                            r = [i, ...(null != n ? n : "").split(",").map(e => ({
                                type: I.StickerMetadataTypes.TAG,
                                value: e.trim().toLocaleLowerCase()
                            }))];
                        null != t && r.push({
                            type: I.StickerMetadataTypes.PACK_NAME,
                            value: t.name
                        }), g.set(e.id, r)
                    } else if ((0, N.isGuildSticker)(e) && null != n) {
                        let r = c.default.getByName(n),
                            l = {
                                type: I.StickerMetadataTypes.TAG,
                                value: n.trim().toLocaleLowerCase()
                            },
                            s = [i, l];
                        if (null != t) {
                            let e = (t instanceof(0, _.default) ? t.name : t.properties.name).trim().toLocaleLowerCase();
                            null != e && "" !== e && s.push({
                                type: I.StickerMetadataTypes.GUILD_NAME,
                                value: e
                            })
                        }
                        if (null == r) {
                            g.set(e.id, s);
                            return
                        }
                        s.push({
                            type: I.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: r.surrogates
                        }), r.forEachDiversity(e => s.push({
                            type: I.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: e.surrogates
                        })), g.set(e.id, s)
                    }
                },
                b = (e, t, n) => {
                    m.set(e.id, e);
                    let i = [...A];
                    if (t) {
                        let t = i.findIndex(t => t.id === e.id); - 1 !== t ? i[t] = e : i.push(e), A = i
                    }(t || n) && e.stickers.forEach(e => P(e))
                },
                M = () => {
                    L.forEach((e, t) => {
                        let n = S.default.getGuild(t);
                        null != n && e.forEach(e => v(e, n))
                    }), A.forEach(e => {
                        e.stickers.forEach(e => v(e))
                    })
                };

            function y(e) {
                null != e.stickers && (e.stickers.forEach(t => P(t, !0, e)), C(e.id, e.stickers))
            }
            class w extends s.default.Store {
                initialize() {
                    this.waitFor(a.default, f.default, S.default)
                }
                get isLoaded() {
                    return 0 !== T
                }
                get stickerMetadata() {
                    return D(), null == g && (g = new Map, M()), g
                }
                get hasLoadedStickerPacks() {
                    return null != h && h + U > Date.now()
                }
                get isFetchingStickerPacks() {
                    return R
                }
                getStickerById(e) {
                    return !p.has(e) && D(), p.get(e)
                }
                getStickerPack(e) {
                    return m.get(e)
                }
                getPremiumPacks() {
                    return A
                }
                isPremiumPack(e) {
                    return A.some(t => t.id === e)
                }
                getRawStickersByGuild() {
                    return L
                }
                getAllStickersIterator() {
                    return D(), p.values()
                }
                getAllGuildStickers() {
                    return D(), L
                }
                getStickersByGuildId(e) {
                    return D(), L.get(e)
                }
            }
            w.displayName = "StickersStore";
            var F = new w(u.default, {
                BACKGROUND_SYNC: () => {
                    g = null, p = new Map, L = new Map, T = 0
                },
                CONNECTION_OPEN: e => {
                    let {
                        guilds: t
                    } = e;
                    g = null, p = new Map, L = new Map, t.forEach(y), T = t.every(e => null != e.stickers) ? 1 : 0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    !E.default.isLurking(t.id) && (y(t), 1 === T && null == t.stickers && null != t.stickerUpdates && (T = 0))
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, i = null !== (t = L.get(n.id)) && void 0 !== t ? t : [];
                    i.forEach(e => {
                        null != g && g.delete(e.id), p.delete(e.id)
                    }), L.delete(n.id), L = new Map(L)
                },
                LOGOUT: () => {
                    T = 0, A = [], p.clear(), m.clear(), g = null, L.clear(), L = new Map(L), R = !1, h = null
                },
                STICKER_PACKS_FETCH_START: () => {
                    R = !0
                },
                STICKER_PACKS_FETCH_SUCCESS: e => {
                    let {
                        packs: t
                    } = e;
                    t.forEach(e => b(e, !0)), h = Date.now(), R = !1
                },
                STICKER_PACK_FETCH_SUCCESS: e => {
                    let {
                        pack: t,
                        ingestStickers: n
                    } = e;
                    b(t, !1, n)
                },
                GUILD_STICKERS_FETCH_SUCCESS: e => {
                    let {
                        guildId: t,
                        stickers: n
                    } = e;
                    n.forEach(e => P(e)), C(t, n)
                },
                GUILD_STICKERS_CREATE_SUCCESS: e => {
                    var t, n;
                    let {
                        guildId: i,
                        sticker: r
                    } = e, l = null !== (t = L.get(i)) && void 0 !== t ? t : [];
                    C(i, [...null !== (n = l.filter(e => e.id !== r.id)) && void 0 !== n ? n : [], r]), P(r)
                },
                STICKER_FETCH_SUCCESS: e => {
                    let {
                        sticker: t
                    } = e;
                    P(t, !1)
                },
                GUILD_STICKERS_UPDATE: e => {
                    var t;
                    let {
                        guildId: n,
                        stickers: i
                    } = e, r = e => {
                        let t;
                        let n = p.get(e.id);
                        return null != n && (0, N.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                            ...e,
                            user: t
                        }
                    }, l = null !== (t = L.get(n)) && void 0 !== t ? t : [], s = l.filter(e => null == i.find(t => t.id === e.id));
                    s.forEach(e => {
                        p.delete(e.id), null != g && g.delete(e.id)
                    });
                    let u = i.map(e => r(e));
                    u.forEach(e => P(e)), C(n, u)
                }
            })
        },
        917219: function(e, t, n) {
            "use strict";
            var i, r, l, s;
            n.r(t), n.d(t, {
                VideoFilterType: function() {
                    return i
                },
                DefaultVideoBackground: function() {
                    return r
                },
                ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: function() {
                    return u
                },
                DEFAULT_VIDEO_BACKGROUND_SORT: function() {
                    return a
                },
                BLUR_BACKGROUND_OPTION: function() {
                    return o
                },
                BACKGROUND_REPLACEMENT_SIZE: function() {
                    return d
                },
                MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                    return c
                }
            }), (l = i || (i = {}))[l.BACKGROUND = 0] = "BACKGROUND", (s = r || (r = {}))[s.OPTION_1 = 0] = "OPTION_1", s[s.OPTION_2 = 1] = "OPTION_2", s[s.OPTION_3 = 2] = "OPTION_3", s[s.OPTION_4 = 3] = "OPTION_4", s[s.OPTION_7 = 7] = "OPTION_7", s[s.OPTION_8 = 8] = "OPTION_8", s[s.OPTION_9 = 9] = "OPTION_9", s[s.OPTION_10 = 10] = "OPTION_10";
            let u = [r.OPTION_7, r.OPTION_8, r.OPTION_9, r.OPTION_10],
                a = [r.OPTION_7, r.OPTION_8, r.OPTION_9, r.OPTION_10, r.OPTION_1, r.OPTION_2, r.OPTION_3, r.OPTION_4].reduce((e, t, n) => ({
                    ...e,
                    [t]: n
                }), {}),
                o = "blur",
                d = {
                    width: 1280,
                    height: 720
                },
                c = 10485760
        },
        450205: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("666038");
            class r extends i.default {
                toString() {
                    return this.name
                }
                constructor(e) {
                    super(), this.id = e.id, this.type = e.type, this.name = e.name, this.revoked = e.revoked || !1, this.integrations = e.integrations || [], this.visibility = e.visibility || 0, this.friendSync = e.friend_sync || !1, this.showActivity = e.show_activity || !1, this.verified = e.verified || !1, this.accessToken = e.access_token || null, this.twoWayLink = e.two_way_link || !1, this.metadata = e.metadata || null, this.metadataVisibility = e.metadata_visibility || 0
                }
            }
        },
        522308: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("666038");
            class r extends i.default {
                static createFromServer(e, t) {
                    return new r({
                        id: e.id,
                        subscriptionId: e.subscription_id,
                        premiumGuildSubscription: null != e.premium_guild_subscription ? {
                            id: e.premium_guild_subscription.id,
                            guildId: e.premium_guild_subscription.guild_id
                        } : null,
                        canceled: e.canceled,
                        cooldownEndsAt: e.cooldown_ends_at,
                        subscription: t
                    })
                }
                isOnCooldown() {
                    return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now()
                }
                isAvailable() {
                    return null == this.premiumGuildSubscription && !this.isOnCooldown()
                }
                constructor(e) {
                    super(), this.id = e.id, this.subscriptionId = e.subscriptionId, this.premiumGuildSubscription = e.premiumGuildSubscription, this.canceled = e.canceled, this.cooldownEndsAt = e.cooldownEndsAt, this.subscription = e.subscription
                }
            }
            var l = r
        },
        47319: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var i = n("446674"),
                r = n("913144"),
                l = n("619340"),
                s = n("376556"),
                u = n("450205"),
                a = n("813006"),
                o = n("49111");
            let d = new Set([o.PlatformTypes.CONTACTS]),
                c = !0,
                E = [],
                _ = [],
                f = {},
                S = {},
                I = e => {
                    E = e.filter(e => !d.has(e.type) && s.default.isSupported(e.type)), _ = e.filter(e => d.has(e.type)), c = !1
                };
            class N extends i.default.Store {
                isJoining(e) {
                    return f[e] || !1
                }
                isFetching() {
                    return c
                }
                getAccounts() {
                    return E
                }
                getLocalAccounts() {
                    return _
                }
                getAccount(e, t) {
                    return E.find(n => (null == e || n.id === e) && n.type === t)
                }
                getLocalAccount(e) {
                    return _.find(t => t.type === e)
                }
                isSuggestedAccountType(e) {
                    return S[e] || !1
                }
            }
            N.displayName = "ConnectedAccountsStore";
            var O = new N(r.default, {
                CONNECTION_OPEN: function(e) {
                    let t = e.connectedAccounts.map(e => new u.default(e));
                    I(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        let t = e.accounts.map(e => new u.default({
                            ...e,
                            integrations: e.integrations.map(e => ({
                                ...e,
                                guild: new a.default(e.guild)
                            }))
                        }));
                        I(t)
                    } else l.default.fetch()
                },
                USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
                    f[e.integrationId] = e.joining
                },
                USER_CONNECTION_UPDATE: function(e) {
                    let {
                        platformType: t,
                        id: n,
                        revoked: i,
                        accessToken: r
                    } = e, l = E.find(e => e.id === n && e.type === t);
                    if (null == l) return !1;
                    null != i && (l.revoked = i), null != r && (l.accessToken = r)
                }
            })
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("446674"),
                r = n("913144"),
                l = n("9294"),
                s = n("49111");
            let u = {},
                a = {},
                o = {};

            function d(e, t) {
                var n;
                e = null != e ? e : "";
                let i = (0, l.parseExtraDataFromInviteKey)(e),
                    r = u[e],
                    a = null != r ? {
                        state: s.InviteStates.RESOLVING,
                        ...r
                    } : {
                        state: s.InviteStates.RESOLVING,
                        code: i.baseCode
                    };
                t(a), u = {
                    ...u,
                    [e]: a
                }, (null === (n = a.guild) || void 0 === n ? void 0 : n.id) != null && (o = {
                    ...o,
                    [a.guild.id]: e
                })
            }

            function c(e) {
                return d(e.code, t => {
                    t.state = "banned" in e && e.banned ? s.InviteStates.BANNED : s.InviteStates.EXPIRED
                })
            }
            class E extends i.default.Store {
                getInvite(e) {
                    return u[e]
                }
                getInviteError(e) {
                    return a[e]
                }
                getInvites() {
                    return u
                }
                getInviteKeyForGuildId(e) {
                    return o[e]
                }
            }
            E.displayName = "InviteStore";
            var _ = new E(r.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, l.parseExtraDataFromInviteKey)(t);
                    u = {
                        ...u,
                        [t]: {
                            code: n.baseCode,
                            state: s.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return d(e.code, t => {
                        var n, i;
                        t.state = s.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: c,
                INSTANT_INVITE_REVOKE_SUCCESS: c,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        t.state = s.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => d(e.code, e => {
                        e.state = s.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        var n, i;
                        t.state = s.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return d(e.code, e => {
                        e.state = s.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return d(e.code, t => {
                        t.state = s.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return a[e.code] = e.error, d(e.code, e => {
                        e.state = s.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return d(e.code, e => {
                        e.state = s.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = s.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = s.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        778588: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("446674"),
                r = n("913144");
            let l = [];

            function s() {
                l = []
            }
            class u extends i.default.Store {
                hasLayers() {
                    return l.length > 0
                }
                getLayers() {
                    return l
                }
            }
            u.displayName = "LayerStore";
            var a = new u(r.default, {
                LAYER_PUSH: function(e) {
                    let {
                        component: t
                    } = e;
                    if (l.indexOf(t) >= 0) return !1;
                    l = [...l, t]
                },
                LAYER_POP: function() {
                    if (0 === l.length) return !1;
                    l = l.slice(0, -1)
                },
                LAYER_POP_ALL: s,
                LOGOUT: s,
                NOTIFICATION_CLICK: s
            })
        },
        471671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("627445"),
                r = n.n(i),
                l = n("446674"),
                s = n("913144"),
                u = n("816454");
            let a = new Map;

            function o(e) {
                let t = a.get(e);
                return null == t ? (console.warn("Window state not initialized", e), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : t
            }
            class d extends l.default.Store {
                isFocused() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.getMainWindowId)();
                    return o(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return a.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.getMainWindowId)();
                    return o(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.getMainWindowId)();
                    return o(e).windowSize
                }
            }
            d.displayName = "WindowStore";
            let c = new d(s.default, {
                WINDOW_INIT: function(e) {
                    r(!a.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: i,
                        focused: l
                    } = e;
                    return a.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: i,
                        focused: l
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(e) {
                    let t = o(e.windowId);
                    return t.isElementFullscreen !== e.isElementFullscreen && (a.set(e.windowId, {
                        ...t,
                        isElementFullscreen: e.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(e) {
                    let t = o(e.windowId);
                    return t.focused !== e.focused && (a.set(e.windowId, {
                        ...t,
                        focused: e.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(e) {
                    let t = o(e.windowId);
                    return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (a.set(e.windowId, {
                        ...t,
                        windowSize: {
                            width: e.width,
                            height: e.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(e) {
                    return a.delete(e.windowId), !0
                }
            });
            n.el("599110").then(n.bind(n, "599110")).then(e => {
                let {
                    addExtraAnalyticsDecorator: t
                } = e;
                t(e => {
                    e.client_app_state = c.isFocused() ? "focused" : "unfocused"
                })
            });
            var E = c
        },
        833858: function(e, t, n) {
            "use strict";

            function i(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return i
                }
            })
        },
        840707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("872717"),
                r = n("599110");

            function l(e, t, n) {
                let {
                    trackedActionData: i,
                    ...l
                } = t, s = {
                    url: l.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(l).then(e => {
                        let n = i.properties;
                        "function" == typeof i.properties && (n = i.properties(e)), (0, r.trackNetworkAction)(i.event, {
                            status_code: e.status,
                            ...s,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, l;
                        let u = i.properties;
                        "function" == typeof i.properties && (u = i.properties(e)), (0, r.trackNetworkAction)(i.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (l = e.body) || void 0 === l ? void 0 : l.message,
                            ...s,
                            ...u
                        }), n(e)
                    })
                })
            }
            var s = {
                get: function(e) {
                    return l(i.default.get, e, "get")
                },
                post: function(e) {
                    return l(i.default.post, e, "post")
                },
                put: function(e) {
                    return l(i.default.put, e, "put")
                },
                patch: function(e) {
                    return l(i.default.patch, e, "patch")
                },
                delete: function(e) {
                    return l(i.default.delete, e, "del")
                }
            }
        },
        563680: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getFullScreenNode: function() {
                    return r
                },
                requestFullScreen: function() {
                    return l
                },
                exitFullScreen: function() {
                    return s
                },
                isFullScreen: function() {
                    return u
                },
                FULLSCREEN_CHANGE_EVENT: function() {
                    return a
                },
                subscribeDocumentToFullScreenChange: function() {
                    return o
                }
            });
            var i = n("605250");

            function r() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return t.find(e => null != e && function(e) {
                    return null != e.requestFullscreen || null != e.webkitRequestFullscreen || e.webkitSupportsFullscreen || null != e.mozRequestFullScreen || null != e.msRequestFullscreen
                }(e))
            }

            function l(e) {
                "function" == typeof e.requestFullscreen ? e.requestFullscreen() : "function" == typeof e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : "function" == typeof e.webkitEnterFullscreen ? e.webkitEnterFullscreen() : "function" == typeof e.mozRequestFullScreen ? e.mozRequestFullScreen() : "function" == typeof e.msRequestFullscreen ? e.msRequestFullscreen() : new(0, i.default)("FullScreenUtils").warn("Fullscreen API is not supported.")
            }

            function s(e, t) {
                let n = null != t ? t : document;
                u(null, n) && ("function" == typeof n.exitFullscreen ? n.exitFullscreen() : "function" == typeof n.webkitExitFullscreen ? n.webkitExitFullscreen() : "function" == typeof e.webkitExitFullscreen ? e.webkitExitFullscreen() : "function" == typeof n.mozCancelFullScreen ? n.mozCancelFullScreen() : "function" == typeof n.msExitFullscreen ? n.msExitFullscreen() : new(0, i.default)("FullScreenUtils").warn("Fullscreen API is not supported."))
            }

            function u(e, t) {
                let n = null != t ? t : document;
                return !!(null != n.fullscreenElement || null != n.mozFullScreenElement || null != n.webkitFullscreenElement || null != n.msFullscreenElement || null != e && e.webkitDisplayingFullscreen)
            }
            let a = (() => {
                if ("undefined" != typeof document) {
                    let e = document.createElement("video");
                    if ("function" == typeof e.requestFullscreen);
                    else if ("function" == typeof e.webkitRequestFullscreen) return "webkitfullscreenchange";
                    else if ("function" == typeof e.webkitEnterFullscreen) return "webkitendfullscreen";
                    else if ("function" == typeof e.mozRequestFullScreen) return "mozfullscreenchange";
                    else if ("function" == typeof e.msRequestFullscreen) return "msfullscreenchange"
                } else console.warn("FullScreenUtils has been imported in a non-web environment");
                return "fullscreenchange"
            })();

            function o(e, t) {
                return e.addEventListener(a, t), e.addEventListener("webkitfullscreenchange", t), () => {
                    e.removeEventListener(a, t), e.removeEventListener("webkitfullscreenchange", t)
                }
            }
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return u
                }
            });
            var i = n("884691"),
                r = n("446674"),
                l = n("244201"),
                s = n("471671");

            function u() {
                let {
                    windowId: e
                } = i.useContext(l.default);
                return (0, r.useStateFromStores)([s.default], () => s.default.isFocused(e), [e])
            }
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("817736"),
                r = n("118810");
            let l = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            class s {
                isVisible(e) {
                    return null == this._observer || this._visibleComponents.has(e)
                }
                observe(e) {
                    let t = this._observer;
                    if (null == t) return;
                    this.unobserve(e);
                    let n = (0, i.findDOMNode)(e);
                    (0, r.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
                }
                unobserve(e) {
                    let t = this._observer;
                    if (null == t) return;
                    let n = this._components.get(e);
                    null != n && (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n))
                }
                constructor(e = l) {
                    this._nodes = new WeakMap, this._components = new WeakMap, this._visibleComponents = new WeakSet, this._handleEntries = e => {
                        e.forEach(e => {
                            let t;
                            if (null != e.isIntersecting) t = e.isIntersecting;
                            else {
                                let {
                                    threshold: n
                                } = this._options;
                                t = null == n ? e.intersectionRatio > 0 : Array.isArray(n) ? n.some(t => e.intersectionRatio > t) : e.intersectionRatio > n
                            }
                            let n = this._nodes.get(e.target);
                            if (null != n) {
                                let e = !1;
                                t ? !this._visibleComponents.has(n) && (this._visibleComponents.add(n), e = !0) : this._visibleComponents.has(n) && (this._visibleComponents.delete(n), e = !0), e && n.forceUpdate()
                            }
                        })
                    }, this._options = e, null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, e))
                }
            }
        },
        235855: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("884691"),
                r = n("748820"),
                l = n("157590");
            let s = (0, r.v4)(),
                u = new Map,
                a = new Map;
            class o extends i.Component {
                componentDidMount() {
                    if (this.props.active) {
                        let e = this.getVisibilityObserver();
                        e.observe(this), this.isVisible = e.isVisible(this), this.props.onChange(this.isVisible)
                    }
                }
                componentDidUpdate(e) {
                    let t = this.getVisibilityObserver(),
                        n = t.isVisible(this);
                    this.props.active && n !== this.isVisible && this.props.onChange(n), !e.active && this.props.active ? t.observe(this) : e.active && !this.props.active && t.unobserve(this), this.isVisible = n
                }
                componentWillUnmount() {
                    this.getVisibilityObserver().unobserve(this)
                }
                getVisibilityObserverId() {
                    let {
                        rootMargin: e,
                        threshold: t
                    } = this.props;
                    return "".concat(this.elementId, " ").concat(e, " ").concat(t)
                }
                getVisibilityObserver() {
                    let e = this.getVisibilityObserverId(),
                        t = a.get(e);
                    if (!t) throw Error("Visibility sensor with id ".concat(e, " not found."));
                    return t
                }
                render() {
                    return i.Children.only(this.props.children)
                }
                constructor(e) {
                    super(e), this.isVisible = !1;
                    let {
                        root: t,
                        rootMargin: n,
                        threshold: i
                    } = e;
                    t ? u.has(t) ? this.elementId = u.get(t) || "" : u.set(t, (0, r.v4)()) : this.elementId = s;
                    let o = this.getVisibilityObserverId();
                    !a.has(o) && a.set(o, new l.default({
                        root: t,
                        rootMargin: n,
                        threshold: i
                    }))
                }
            }
            o.defaultProps = {
                active: !0,
                children: i.createElement("span"),
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: [0, Number.MIN_VALUE]
            };
            var d = o
        },
        290381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VisibilityObserver: function() {
                    return i.default
                },
                VisibilitySensor: function() {
                    return r.default
                }
            }), n("6268");
            var i = n("157590"),
                r = n("235855")
        }
    }
]);
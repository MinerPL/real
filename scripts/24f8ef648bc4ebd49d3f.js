(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["94321"], {
        901582: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var n = i("37983"),
                l = i("884691"),
                a = i("748820"),
                _ = i("599110"),
                r = i("117362"),
                E = i("49111");
            class o extends l.Component {
                renderProvider(e) {
                    var t, i;
                    let {
                        section: l,
                        page: a,
                        object: r,
                        objectType: E,
                        children: o
                    } = this.props, u = this.mergeLocation(e.location, this.getLocation(a, l, r, E)), s = this.getContext(u, null !== (t = this._loadDate) && void 0 !== t ? t : e.loadDate, null !== (i = this._loadId) && void 0 !== i ? i : e.loadId);
                    return (0, n.jsx)(_.AnalyticsContext.Provider, {
                        value: s,
                        children: o
                    })
                }
                render() {
                    let {
                        context: e
                    } = this.props;
                    return null != e ? this.renderProvider(e) : (0, n.jsx)(_.AnalyticsContext.Consumer, {
                        children: e => this.renderProvider(e)
                    })
                }
                constructor(e) {
                    super(e), this._loadId = null, this._loadDate = this.props.root ? Date.now() : null, this.getLocation = (0, r.cachedFunction)((e, t, i, n) => {
                        let l = {};
                        return null != e && (l.page = e), null != t && (l.section = t), null != i && (l.object = i), null != n && (l.objectType = n), l
                    }), this.mergeLocation = (0, r.cachedFunction)((e, t) => ({
                        ...e,
                        ...t
                    })), this.getContext = (0, r.cachedFunction)((e, t, i) => ({
                        location: e,
                        loadDate: t,
                        loadId: i
                    })), null != e.loadId ? this._loadId = e.loadId : e.root && (this._loadId = (0, a.v4)())
                }
            }
            o.Pages = E.AnalyticsPages, o.Sections = E.AnalyticsSections, o.Objects = E.AnalyticsObjects, o.ObjectTypes = E.AnalyticsObjectTypes, o.defaultProps = {
                root: !1
            }
        },
        838446: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var n = i("37983");
            i("884691");
            var l = i("901582");

            function a(e, t) {
                return function(i) {
                    return (0, n.jsx)(l.default, {
                        page: t.page,
                        section: t.section,
                        object: t.object,
                        objectType: t.objectType,
                        children: (0, n.jsx)(e, {
                            ...i
                        })
                    })
                }
            }
        },
        158534: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var n = i("37983");
            i("884691");
            var l = i("685665");

            function a(e, t) {
                return function(i) {
                    let {
                        AnalyticsLocationProvider: a
                    } = (0, l.default)(t);
                    return (0, n.jsx)(a, {
                        children: (0, n.jsx)(e, {
                            ...i
                        })
                    })
                }
            }
        },
        812204: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            }), (n = l || (l = {})).POPOUT_WINDOW = "popout window", n.OVERLAY = "overlay", n.NOTICE = "notice", n.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", n.BADGE = "badge", n.USER_SETTINGS = "user settings", n.USER_SETTINGS_MENU = "user settings menu", n.ACCOUNT = "account", n.TEXT_AND_IMAGES = "text and images", n.GUILD_SETTINGS = "guild settings", n.OVERVIEW = "overview", n.STICKERS = "stickers", n.VANITY_URL = "vanity url", n.PREMIUM_MARKETING = "premium marketing", n.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", n.PREMIUM_PAYMENT_MODAL = "premium payment modal", n.PREMIUM_UPSELL_ALERT = "premium upsell alert", n.PREMIUM_UPSELL_MODAL = "premium upsell modal", n.PREMIUM_SETTINGS = "premium settings", n.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", n.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", n.CHANNEL_CALL = "channel call", n.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", n.RTC_PANEL = "rtc panel", n.SOUNDBOARD_BUTTON = "soundboard button", n.SOUNDBOARD_POPOUT = "soundboard popout", n.SOUNDBOARD_WHEEL = "soundboard wheel", n.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", n.GIFT_BUTTON = "gift button", n.EXPRESSION_SUGGESTIONS = "expression suggestions", n.EMOJI_PICKER = "emoji picker", n.STICKER_PICKER = "sticker picker", n.STICKER_POPOUT = "sticker popout", n.PREMIUM_UPSELL = "premium upsell", n.EMPTY_STATE = "empty state", n.SUBSCRIPTION_DETAILS = "subscription details", n.SUBSCRIPTION_HEADER = "subscription header", n.ACCOUNT_CREDIT_BANNER = "account credit banner", n.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", n.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", n.STREAM_QUALITY_INDICATOR = "stream quality indicator", n.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", n.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", n.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", n.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", n.RPC = "rpc", n.BILLING_STANDALONE = "billing standalone", n.GUILD_CHANNEL_LIST = "guild channel list", n.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", n.STICKER_MESSAGE = "sticker message", n.CHANNEL_TEXT_AREA = "channel text area", n.HEADER_BAR = "header bar", n.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", n.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", n.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", n.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", n.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", n.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", n.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", n.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", n.GUILD_HEADER = "guild header", n.GUILD_BANNER = "guild banner", n.GUILD_BANNER_NOTICE = "guild banner notice", n.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", n.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", n.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", n.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", n.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", n.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", n.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", n.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", n.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", n.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", n.GUILDS_LIST = "guilds list", n.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", n.ACTIVITY_DIRECTORY = "activity directory", n.ACTIVITY_TILE = "activity tile", n.ACTIVITY_UPSELL = "activity upsell", n.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", n.INSTANT_INVITE_MODAL = "instant invite modal", n.IMAGE_CROPPING_MODAL = "image cropping modal", n.GIF_PICKER = "gif picker", n.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", n.INVITE_MODAL = "invite modal", n.INVITE_EMBED = "invite embed", n.NEW_GUILD_BUTTON = "new guild button", n.CHARACTER_COUNT = "character count", n.DM_CHANNEL = "dm channel", n.GUILD_CHANNEL = "guild channel", n.FORUM_CHANNEL = "forum channel", n.FILE_UPLOAD_POPOUT = "file upload popout", n.EMOJI = "emoji", n.PROFILE = "profile", n.PROFILE_MODAL = "profile modal", n.PROFILE_POPOUT = "profile popout", n.GUILD_PROFILE = "guild profile", n.EDIT_AVATAR = "edit avatar", n.EDIT_BANNER = "edit banner", n.CHAT_INPUT = "chat input", n.CREATE_THREAD = "create thread", n.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", n.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", n.SELECT_IMAGE_MODAL = "select image modal", n.VIDEO_BACKGROUND_OPTIONS = "video background options", n.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", n.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", n.CAMERA_PREVIEW = "camera preview", n.HOME_PAGE_PREMIUM_TAB = "home page premium tab", n.HOME_PAGE_SHOP_TAB = "home page shop tab", n.PREMIUM_MARKETING_SURFACE = "premium marketing surface", n.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", n.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", n.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", n.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", n.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", n.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", n.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", n.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", n.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", n.PREMIUM_MARKETING_FEATURE = "premium marketing feature", n.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", n.PREMIUM_MARKETING_FOOTER = "premium marketing footer", n.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", n.CHANNEL_CALL_ACTION_BAR = "channel call action bar", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", n.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", n.VOICE_CONTROL_TRAY = "voice control tray", n.ACTIVE_NOW_COLUMN = "active now column", n.CONTEXT_MENU = "context menu", n.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", n.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", n.CHANNEL_CATEGORY_MENU = "channel category menu", n.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", n.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", n.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", n.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", n.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", n.CHANNEL_TITLE_MENU = "channel title menu", n.GROUP_DM_MENU = "group dm menu", n.AUDIT_LOG_USER_MENU = "audit log user menu", n.BANNED_USER_MENU = "banned user menu", n.DM_USER_MENU = "dm user menu", n.GROUP_DM_USER_MENU = "group dm user menu", n.GUILD_CHANNEL_USER_MENU = "guild channel user menu", n.GUILD_MODERATION_USER_MENU = "guild moderation user menu", n.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", n.GUILD_SETTINGS_USER_MENU = "guild settings user menu", n.GUILD_USER_MENU = "guild user menu", n.THREAD_USER_MENU = "thread user menu", n.USER_GENERIC_MENU = "user generic menu", n.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", n.VOICE_ACTION_SHEET = "voice action sheet", n.FOCUSED_VOICE_CONTROLS = "focused voice controls", n.MASKED_LINK = "masked link", n.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", n.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", n.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", n.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", n.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", n.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", n.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", n.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", n.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", n.ACCOUNT_PROFILE_POPOUT = "account profile popout", n.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", n.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", n.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", n.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", n.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", n.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", n.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", n.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", n.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", n.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", n.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", n.STAGE_VIDEO_LIMIT = "stage video limit", n.ACTIVITIES_MINI_SHELF = "activities mini shelf", n.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", n.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", n.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", n.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", n.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", n.APP_ICON_EDITOR = "app icon editor", n.CLIENT_THEMES_EDITOR = "client themes editor", n.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", n.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", n.SHARE_NITRO_EMBED = "share nitro embed", n.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", n.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", n.REFERRAL_TRIALS_POPOUT = "referral trials popout", n.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", n.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", n.ACTIVITY_BOOKMARK = "activity bookmark", n.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", n.ACTIVITY_DETAIL_PAGE = "activity detail page", n.ACTIVITIES_PAGE = "activities page", n.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", n.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", n.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", n.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", n.ACTIVITIES_HAPPENING_NOW = "activities happening now", n.MEDIA_VIEWER = "media viewer", n.MESSAGE_LONG_PRESS_MENU = "message long press menu", n.COLLECTIBLES_SHOP = "collectibles shop", n.COLLECTIBLES_SHOP_CARD = "collectibles shop card", n.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", n.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", n.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", n.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", n.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", n.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", n.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", n.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", n.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", n.PREMIUM_BILLING_INFO = "premium billing info", n.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", n.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", n.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", n.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", n.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", n.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", n.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", n.PREMIUM_PLAN_SELECT = "premium_plan_select", n.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", n.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", n.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", n.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", n.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", n.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", n.MEMBER_SAFETY_PAGE = "member safety page", n.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", n.GUILD_MEMBER_MOD_VIEW = "guild member mod view", n.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", n.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", n.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", n.GUILD_SHOP_PAGE = "guild shop page", n.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", n.MESSAGE_REMIX_TAG = "message remix tag", n.MESSAGE_REMIX_BUTTON = "message remix button", n.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", n.CLIPS_SETTINGS = "clips settings", n.CLIPS_GALLERY = "clips gallery", n.CLIPS_GALLERY_ITEM = "clips gallery item", n.CLIPS_EDITOR = "clips editor", n.CLIPS_SHARE_MODAL = "clips share modal", n.CHANNEL_ATTACH_BUTTON = "channel attach button", n.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", n.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", n.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", n.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", n.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", n.GUILD_EVENT_CARD = "guild event card", n.EVENT_SETTINGS = "event settings";
            var n, l, a = l
        },
        610174: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useGuildAlertModeEnabled: function() {
                    return s
                },
                getGuildAlertModeEnabled: function() {
                    return I
                }
            });
            var n = i("316693"),
                l = i("446674"),
                a = i("862205"),
                _ = i("305961"),
                r = i("957255"),
                E = i("421127");
            let o = (0, a.createExperiment)({
                    kind: "guild",
                    id: "2023-04_guild_alert_mode",
                    label: "Guild Alert Mode",
                    defaultConfig: {
                        showAlertMode: !1,
                        alsoShowMemberSafety: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show alert mode experience",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !1
                        }
                    }, {
                        id: 2,
                        label: "Show alert mode experience with member safety",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !0
                        }
                    }]
                }),
                u = (0, a.createExperiment)({
                    kind: "guild",
                    id: "2023-08_guild_alert_mode_friend_server",
                    label: "Guild Alert Mode (friend servers only)",
                    defaultConfig: {
                        showAlertMode: !1,
                        alsoShowMemberSafety: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show alert mode experience",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !1
                        }
                    }, {
                        id: 2,
                        label: "Show alert mode experience with member safety",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !1
                        }
                    }]
                });

            function s(e) {
                let t = (0, l.useStateFromStores)([_.default], () => _.default.getGuild(e)),
                    i = (0, l.useStateFromStores)([r.default], () => null != t && n.default.hasAny(r.default.computePermissions(t), E.IncidentAlertModeratorPermissions)),
                    a = o.useExperiment({
                        guildId: e,
                        location: "c3fae3_1"
                    }, {
                        disable: !i,
                        autoTrackExposure: !0
                    }),
                    s = u.useExperiment({
                        guildId: e,
                        location: "c3fae3_2"
                    }, {
                        disable: !i,
                        autoTrackExposure: !0
                    });
                return {
                    showAlertMode: a.showAlertMode || s.showAlertMode,
                    alsoShowMemberSafety: a.alsoShowMemberSafety || s.alsoShowMemberSafety
                }
            }

            function I(e) {
                let t = _.default.getGuild(e),
                    i = null != t && n.default.hasAny(r.default.computePermissions(t), E.IncidentAlertModeratorPermissions),
                    l = o.getCurrentConfig({
                        guildId: e,
                        location: "c3fae3_3"
                    }, {
                        disable: !i,
                        autoTrackExposure: !0
                    }),
                    a = u.getCurrentConfig({
                        guildId: e,
                        location: "c3fae3_4"
                    }, {
                        disable: !i,
                        autoTrackExposure: !0
                    });
                return {
                    showAlertMode: l.showAlertMode || a.showAlertMode,
                    alsoShowMemberSafety: l.alsoShowMemberSafety || a.alsoShowMemberSafety
                }
            }
        },
        311340: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                trackReportRaidViewed: function() {
                    return I
                },
                setGuildRaidAlerts: function() {
                    return d
                },
                setGuildIncidentActions: function() {
                    return c
                },
                handleResolveRaid: function() {
                    return A
                },
                handleReportRaid: function() {
                    return T
                }
            });
            var n = i("866227"),
                l = i.n(n),
                a = i("872717"),
                _ = i("716241"),
                r = i("592407"),
                E = i("305961"),
                o = i("599110"),
                u = i("610174"),
                s = i("49111");

            function I(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                0 !== t.length && o.default.track(s.AnalyticEvents.GUILD_RAID_REPORTED, {
                    ...(0, _.collectGuildAnalyticsMetadata)(e),
                    guild_id: e,
                    raid_types: t
                })
            }
            async function d(e, t) {
                let i = new Set(e.features);
                i.has(s.GuildFeatures.COMMUNITY) ? t ? i.delete(s.GuildFeatures.RAID_ALERTS_DISABLED) : i.add(s.GuildFeatures.RAID_ALERTS_DISABLED) : t ? i.add(s.GuildFeatures.NON_COMMUNITY_RAID_ALERTS) : i.delete(s.GuildFeatures.NON_COMMUNITY_RAID_ALERTS), await r.default.saveGuild(e.id, {
                    features: i
                }, {
                    throwErr: !0
                })
            }
            async function c(e, t, i, n) {
                let _ = l().add(n, "hours").toISOString(),
                    r = await a.default.put({
                        url: s.Endpoints.GUILD_INCIDENT_ACTIONS(e),
                        body: {
                            invites_disabled_until: t ? _ : null,
                            dms_disabled_until: i ? _ : null
                        }
                    });
                return r
            }
            async function A(e, t, i) {
                let {
                    showAlertMode: n
                } = (0, u.getGuildAlertModeEnabled)(e), l = E.default.getGuild(e), _ = null == l ? void 0 : l.getSafetyAlertsChannelId();
                if (!n || null == _) return null;
                let r = await a.default.post({
                    url: s.Endpoints.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
                    body: {
                        alert_message_id: t,
                        reason: i
                    }
                });
                return r
            }
            async function T(e) {
                let {
                    showAlertMode: t
                } = (0, u.getGuildAlertModeEnabled)(e), i = E.default.getGuild(e), n = null == i ? void 0 : i.getSafetyAlertsChannelId();
                if (!t || null == n) return null;
                let l = await a.default.post({
                    url: s.Endpoints.GUILD_INCIDENT_REPORT_RAID(e)
                });
                return l
            }
        },
        421127: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                NAGBAR_DISPLAY_MAX_HOURS: function() {
                    return _
                },
                DEFAULT_LOCKDOWN_DURATION: function() {
                    return r
                },
                getTimeframes: function() {
                    return E
                },
                IncidentAlertModeratorPermissions: function() {
                    return o
                }
            });
            var n = i("316693"),
                l = i("843455"),
                a = i("782340");
            let _ = 2,
                r = 2,
                E = () => [{
                    value: 1,
                    label: a.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_1_HOUR
                }, {
                    value: 2,
                    label: a.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_2_HOURS
                }, {
                    value: 4,
                    label: a.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_4_HOURS
                }, {
                    value: 6,
                    label: a.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_6_HOURS
                }, {
                    value: 12,
                    label: a.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_12_HOURS
                }, {
                    value: 24,
                    label: a.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_24_HOURS
                }],
                o = n.default.combine(l.Permissions.ADMINISTRATOR, l.Permissions.MANAGE_GUILD, l.Permissions.BAN_MEMBERS, l.Permissions.KICK_MEMBERS, l.Permissions.MODERATE_MEMBERS)
        },
        413266: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                openReportRaidModal: function() {
                    return a
                },
                openSafetyChannelSetupModal: function() {
                    return _
                }
            });
            var n = i("37983");
            i("884691");
            var l = i("77078");

            function a(e) {
                (0, l.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await i.el("423588").then(i.bind(i, "423588"));
                    return i => (0, n.jsx)(t, {
                        ...i,
                        guildId: e
                    })
                })
            }

            function _(e) {
                (0, l.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await i.el("982537").then(i.bind(i, "982537"));
                    return i => (0, n.jsx)(t, {
                        ...i,
                        guildId: e
                    })
                })
            }
        },
        712125: function(e, t, i) {
            "use strict";
            var n, l, a, _, r, E;
            i.r(t), i.d(t, {
                GuildIncidentActionSources: function() {
                    return n
                },
                GuildIncidentAlertTypes: function() {
                    return l
                },
                GuildIncidentActionTypes: function() {
                    return a
                }
            }), (_ = n || (n = {})).MESSAGE = "message", _.NAGBAR = "nagbar", _.GUILD_SETTINGS = "guild_settings", _.CONTEXT_MENU = "context_menu", _.GUILD_PROFILE = "guild_profile", _.MEMBER_SAFETY_PAGE = "member_safety_page", (r = l || (l = {})).JOIN_RAID = "join_raid", r.DM_RAID = "dm_raid", (E = a || (a = {})).INVITES_DISABLED = "invites_disabled", E.DMS_DISABLED = "dms_disabled"
        },
        311161: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                DATE_CONFIG: function() {
                    return E
                },
                hasDetectedActivity: function() {
                    return o
                },
                hasDetectedRaid: function() {
                    return u
                },
                hasDetectedDMRaid: function() {
                    return s
                },
                getIncidentAlertType: function() {
                    return I
                },
                getEnabledInterventions: function() {
                    return d
                },
                getDisabledInterventions: function() {
                    return c
                },
                isUnderLockdown: function() {
                    return A
                },
                hasDMsDisabled: function() {
                    return T
                },
                hasInvitesDisabled: function() {
                    return O
                },
                getSecurityActionDetailsString: function() {
                    return N
                }
            });
            var n = i("866227"),
                l = i.n(n),
                a = i("712125"),
                _ = i("421127"),
                r = i("782340");
            let E = {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
            };

            function o(e) {
                return null != e.dmSpamDetectedAt && l(e.dmSpamDetectedAt).add(_.NAGBAR_DISPLAY_MAX_HOURS, "hours") > l() || null != e.raidDetectedAt && l(e.raidDetectedAt).add(_.NAGBAR_DISPLAY_MAX_HOURS, "hours") > l()
            }

            function u(e) {
                return null != e.raidDetectedAt && l(e.raidDetectedAt).add(_.NAGBAR_DISPLAY_MAX_HOURS, "hours") > l()
            }

            function s(e) {
                return null != e.dmSpamDetectedAt && l(e.dmSpamDetectedAt).add(_.NAGBAR_DISPLAY_MAX_HOURS, "hours") > l()
            }

            function I(e) {
                return null == e ? void 0 : u(e) ? a.GuildIncidentAlertTypes.JOIN_RAID : a.GuildIncidentAlertTypes.DM_RAID
            }

            function d(e, t) {
                let i = [];
                return e && i.push(a.GuildIncidentActionTypes.INVITES_DISABLED), t && i.push(a.GuildIncidentActionTypes.DMS_DISABLED), i
            }

            function c(e, t) {
                let i = [];
                return !e && i.push(a.GuildIncidentActionTypes.INVITES_DISABLED), !t && i.push(a.GuildIncidentActionTypes.DMS_DISABLED), i
            }

            function A(e) {
                return null != e.dmsDisabledUntil && new Date(e.dmsDisabledUntil) > new Date || null != e.invitesDisabledUntil && new Date(e.invitesDisabledUntil) > new Date
            }

            function T(e) {
                return (null == e ? void 0 : e.dmsDisabledUntil) != null && new Date(e.dmsDisabledUntil) > new Date
            }

            function O(e) {
                return (null == e ? void 0 : e.invitesDisabledUntil) != null && new Date(e.invitesDisabledUntil) > new Date
            }

            function N(e, t) {
                var i;
                let n = null !== (i = e.dmsDisabledUntil) && void 0 !== i ? i : e.invitesDisabledUntil;
                if (null == n) return "";
                let l = null != e.dmsDisabledUntil,
                    a = null != e.invitesDisabledUntil;
                switch (!0) {
                    case l && a:
                        return r.default.Messages.GUILD_ANTIRAID_PAUSE_DMS_AND_JOINS_NAGBAR_MESSAGE_NEW.format({
                            guildName: t,
                            time: new Date(n).toLocaleString(r.default.getLocale(), E)
                        });
                    case l:
                        return r.default.Messages.GUILD_ANTIRAID_PAUSE_DMS_NAGBAR_MESSAGE_NEW.format({
                            guildName: t,
                            time: new Date(n).toLocaleString(r.default.getLocale(), E)
                        });
                    case a:
                        return r.default.Messages.GUILD_ANTIRAID_PAUSE_JOINS_NAGBAR_MESSAGE_NEW.format({
                            guildName: t,
                            time: new Date(n).toLocaleString(r.default.getLocale(), E)
                        });
                    default:
                        return ""
                }
            }
        },
        54346: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return T
                }
            });
            var n = i("446674"),
                l = i("913144"),
                a = i("374363"),
                _ = i("305961"),
                r = i("957255"),
                E = i("607620"),
                o = i("610174"),
                u = i("311161");
            let s = {},
                I = {};

            function d() {
                var e;
                let t = null !== (e = a.default.getGuildsProto()) && void 0 !== e ? e : {},
                    i = _.default.getGuilds(),
                    n = Object.keys(i);
                for (let e of (I = {}, n))(0, o.getGuildAlertModeEnabled)(e).showAlertMode && (I[e] = {
                    guildId: e,
                    guildName: i[e].name,
                    ...t[e]
                })
            }

            function c(e) {
                return null != e && Object.keys(e).length > 0 ? {
                    raidDetectedAt: e.raid_detected_at,
                    dmSpamDetectedAt: e.dm_spam_detected_at,
                    dmsDisabledUntil: e.dms_disabled_until,
                    invitesDisabledUntil: e.invites_disabled_until
                } : null
            }
            class A extends n.default.Store {
                initialize() {
                    this.waitFor(a.default, _.default, r.default, E.default), this.syncWith([a.default, _.default, r.default, E.default], d)
                }
                getGuildIncident(e) {
                    return s[e]
                }
                getIncidentsByGuild() {
                    return s
                }
                getGuildAlertSettings() {
                    return I
                }
            }
            A.displayName = "GuildIncidentsStore";
            var T = new A(l.default, {
                CONNECTION_OPEN: function(e) {
                    for (let t of (s = {}, e.guilds)) {
                        let e = c(t.properties.incidents_data);
                        null != e && ((0, u.hasDetectedActivity)(e) || (0, u.isUnderLockdown)(e)) && (s[t.id] = e)
                    }
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e, i = c(t.properties.incidents_data);
                    null != i && ((0, u.hasDetectedActivity)(i) || (0, u.isUnderLockdown)(i)) && (s[t.id] = i)
                },
                GUILD_UPDATE: function(e) {
                    let {
                        guild: t
                    } = e, i = c(t.incidents_data);
                    null != i && ((0, u.hasDetectedActivity)(i) || (0, u.isUnderLockdown)(i)) ? (Object.keys(s).forEach(e => {
                        let t = s[e];
                        !(0, u.hasDetectedActivity)(t) && delete s[e]
                    }), s[t.id] = i) : delete s[t.id]
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete s[t.id]
                },
                LOGOUT: function(e) {
                    s = {}
                }
            })
        },
        100835: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                InvitesDisabledExperiment: function() {
                    return o
                },
                useInvitesDisabledPermission: function() {
                    return u
                },
                useInvitesDisabledExperiment: function() {
                    return s
                },
                setInvitesDisabled: function() {
                    return I
                },
                useShouldShowInvitesDisabledNotif: function() {
                    return d
                }
            });
            var n = i("446674"),
                l = i("862205"),
                a = i("54346"),
                _ = i("957255"),
                r = i("592407"),
                E = i("49111");
            let o = (0, l.createExperiment)({
                kind: "guild",
                id: "2022-07_invites_disabled",
                label: "Report Raids",
                defaultConfig: {
                    enableInvitesDisabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Reporting Of Raids",
                    config: {
                        enableInvitesDisabled: !0
                    }
                }]
            });

            function u(e) {
                return (0, n.useStateFromStores)([_.default], () => null != e && _.default.can(E.Permissions.MANAGE_GUILD, e), [e])
            }

            function s(e) {
                return o.useExperiment({
                    guildId: e.id,
                    location: "108f83_1"
                }, {
                    autoTrackExposure: !1
                })
            }
            async function I(e, t) {
                if (e.hasFeature(E.GuildFeatures.INVITES_DISABLED) === t) return;
                let i = new Set(e.features);
                t ? i.add(E.GuildFeatures.INVITES_DISABLED) : i.delete(E.GuildFeatures.INVITES_DISABLED), await r.default.saveGuild(e.id, {
                    features: i
                }, {
                    throwErr: !0
                })
            }

            function d(e) {
                var t;
                let i = u(e),
                    l = (0, n.useStateFromStores)([a.default], () => null != e ? a.default.getGuildIncident(e.id) : null),
                    _ = (null == e ? void 0 : null === (t = e.hasFeature) || void 0 === t ? void 0 : t.call(e, E.GuildFeatures.INVITES_DISABLED)) || (null == l ? void 0 : l.invitesDisabledUntil) != null && new Date(l.invitesDisabledUntil) > new Date;
                return i && _
            }
        },
        701587: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return c
                }
            });
            var n = i("37983");
            i("884691");
            var l = i("77078"),
                a = i("272030"),
                _ = i("838446"),
                r = i("158534"),
                E = i("812204"),
                o = i("32573"),
                u = i("73924"),
                s = i("743370"),
                I = i("49111"),
                d = i("782340"),
                c = (0, r.default)((0, _.default)(function(e) {
                    let {
                        guildId: t,
                        context: i,
                        onSelect: _
                    } = e, r = (0, s.default)(t, i), E = (0, u.default)(t, i), I = (0, o.default)(t, i);
                    return (0, n.jsxs)(l.Menu, {
                        navId: "moderation-raid-context",
                        onClose: a.closeContextMenu,
                        "aria-label": d.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: _,
                        children: [(0, n.jsx)(l.MenuGroup, {
                            children: E
                        }), (0, n.jsxs)(l.MenuGroup, {
                            children: [I, r]
                        })]
                    })
                }, {
                    object: I.AnalyticsObjects.CONTEXT_MENU
                }), [E.default.CONTEXT_MENU, E.default.GUILD_MODERATION_RAID_MENU])
        },
        32573: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var n = i("37983");
            i("884691");
            var l = i("77078"),
                a = i("54239"),
                _ = i("592407"),
                r = i("49111"),
                E = i("782340");

            function o(e, t) {
                let i = t === r.AppContext.POPOUT;
                return i ? null : (0, n.jsx)(l.MenuItem, {
                    id: "nav-server-settings",
                    label: E.default.Messages.SERVER_SETTINGS,
                    action: () => {
                        (0, a.popLayer)(), _.default.open(e, r.GuildSettingsSections.MODERATION)
                    }
                })
            }
        },
        73924: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return O
                }
            });
            var n = i("37983"),
                l = i("884691"),
                a = i("446674"),
                _ = i("77078"),
                r = i("272030"),
                E = i("610174"),
                o = i("311340"),
                u = i("712125"),
                s = i("311161"),
                I = i("54346"),
                d = i("100835"),
                c = i("305961"),
                A = i("49111"),
                T = i("782340");

            function O(e, t) {
                let O = t === A.AppContext.POPOUT,
                    N = (0, a.useStateFromStores)([c.default], () => c.default.getGuild(e), [e]),
                    [R, L] = l.useState(!1),
                    {
                        showAlertMode: S
                    } = (0, E.useGuildAlertModeEnabled)(e),
                    m = (0, a.useStateFromStores)([I.default], () => null != N ? I.default.getGuildIncident(N.id) : null),
                    M = (null == N ? void 0 : N.hasFeature(A.GuildFeatures.INVITES_DISABLED)) || S && (null == m ? void 0 : m.invitesDisabledUntil) != null && new Date(m.invitesDisabledUntil) > new Date,
                    [D, C] = l.useState(M),
                    U = async t => {
                        if (!R && null != N) {
                            L(!0);
                            try {
                                if (C(t), S) {
                                    if (t) {
                                        let t = {
                                            source: u.GuildIncidentActionSources.MESSAGE,
                                            alertType: (0, s.getIncidentAlertType)(m)
                                        };
                                        (0, _.openModalLazy)(async () => {
                                            let {
                                                default: l
                                            } = await i.el("186638").then(i.bind(i, "186638"));
                                            return i => (0, n.jsx)(l, {
                                                ...i,
                                                guildId: e,
                                                analyticsData: t
                                            })
                                        })
                                    } else await (0, o.setGuildIncidentActions)(N.id, !1, !1)
                                } else await (0, d.setInvitesDisabled)(N, t)
                            } catch (e) {
                                C(!t)
                            } finally {
                                L(!1), (0, r.closeContextMenu)()
                            }
                        }
                    };
                return O ? null : (0, n.jsx)(_.MenuCheckboxItem, {
                    id: "pause-invites",
                    label: T.default.Messages.DISABLE_INVITES,
                    action: () => {
                        U(!D)
                    },
                    checked: D
                })
            }
        },
        743370: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var n = i("37983");
            i("884691");
            var l = i("77078"),
                a = i("54239"),
                _ = i("413266"),
                r = i("49111"),
                E = i("782340");

            function o(e, t) {
                let i = t === r.AppContext.POPOUT;
                return i ? null : (0, n.jsx)(l.MenuItem, {
                    id: "report-raid",
                    label: E.default.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,
                    action: () => {
                        (0, a.popLayer)(), (0, _.openReportRaidModal)(e)
                    }
                })
            }
        },
        607620: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return E
                }
            });
            var n = i("446674"),
                l = i("913144"),
                a = i("789563");

            function _() {
                return !0
            }
            class r extends n.default.Store {
                initialize() {
                    this.waitFor(a.default)
                }
                getExperimentAssignment(e, t) {
                    return a.default.getGuildExperimentDescriptor(t, e)
                }
            }
            r.displayName = "GuildExperimentStore";
            var E = new r(l.default, {
                LOGOUT: _,
                LOGIN_SUCCESS: _,
                CONNECTION_OPEN: _,
                EXPERIMENTS_FETCH_SUCCESS: _,
                OVERLAY_INITIALIZE: _,
                CACHE_LOADED: _,
                EXPERIMENTS_FETCH_FAILURE: _,
                EXPERIMENT_REGISTER_LEGACY: _,
                EXPERIMENT_OVERRIDE_BUCKET: _
            })
        }
    }
]);
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["44258"], {
        448105: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    i = e.length;
                if (i > n) return !1;
                if (i === n) return e === t;
                e: for (var l = 0, a = 0; l < i; l++) {
                    for (var r = e.charCodeAt(l); a < n;)
                        if (t.charCodeAt(a++) === r) continue e;
                    return !1
                }
                return !0
            }
        },
        152584: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                accountDetailsInit: function() {
                    return I
                },
                accountDetailsClose: function() {
                    return A
                },
                disableAccount: function() {
                    return S
                },
                saveAccountRequest: function() {
                    return N
                },
                saveAccountChanges: function() {
                    return O
                },
                getHarvestStatus: function() {
                    return R
                },
                requestHarvest: function() {
                    return C
                },
                setPendingAvatar: function() {
                    return f
                },
                setPendingGlobalNameName: function() {
                    return p
                },
                setPendingAvatarDecoration: function() {
                    return U
                },
                setPendingProfileEffectID: function() {
                    return L
                },
                clearErrors: function() {
                    return m
                },
                resetPendingAccountChanges: function() {
                    return g
                },
                resetAllPending: function() {
                    return M
                },
                resetAndCloseUserProfileForm: function() {
                    return P
                },
                setDisableSubmit: function() {
                    return D
                }
            });
            var i = n("872717"),
                l = n("95410"),
                a = n("819855"),
                r = n("913144"),
                u = n("393414"),
                o = n("599110"),
                E = n("315102"),
                _ = n("730622"),
                s = n("437822"),
                d = n("49111"),
                c = n("191349"),
                T = n("782340");

            function I() {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function A() {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function S(e, t) {
                let n = t ? T.default.Messages.DELETE_ACCOUNT : T.default.Messages.DISABLE_ACCOUNT,
                    l = t ? d.Endpoints.DELETE_ACCOUNT : d.Endpoints.DISABLE_ACCOUNT;
                return (0, _.default)(t => i.default.post({
                    url: l,
                    body: {
                        password: e,
                        ...t
                    },
                    oldFormErrors: !0
                }), {
                    modalProps: {
                        title: n
                    },
                    checkEnabled: !1
                }).then(() => {
                    s.default.logoutInternal(), (0, u.transitionTo)(d.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function N(e) {
                let t = await i.default.patch({
                        url: d.Endpoints.ME,
                        oldFormErrors: !0,
                        body: e
                    }),
                    n = t.body;
                if (n.token) {
                    let t = n.token;
                    delete n.token, r.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: t,
                        userId: n.id
                    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && r.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return r.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), t
            }

            function O(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: i,
                    emailToken: a,
                    password: u,
                    avatar: s,
                    avatarDecoration: I,
                    newPassword: A,
                    globalName: S
                } = e;
                return r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, _.default)(e => {
                    let r = {
                        username: t,
                        email: i,
                        email_token: a,
                        password: u,
                        avatar: s,
                        discriminator: n,
                        global_name: S,
                        new_password: A,
                        ...e
                    };
                    null === I && (r.avatar_decoration_id = null), null != I && (r.avatar_decoration_id = I.id, r.avatar_decoration_sku_id = I.skuId);
                    let o = l.default.get(d.DEVICE_TOKEN),
                        E = (0, c.getDevicePushProvider)();
                    null != E && null != o && (r.push_provider = E, r.push_token = o);
                    let _ = l.default.get(d.DEVICE_VOIP_TOKEN);
                    return null != c.DEVICE_PUSH_VOIP_PROVIDER && null != _ && (r.push_voip_provider = c.DEVICE_PUSH_VOIP_PROVIDER, r.push_voip_token = _), N(r)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: T.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => r.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body;
                    return o.default.track(d.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, E.isAnimatedIconHash)(t.avatar)
                    }), r.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function R() {
                return i.default.get({
                    url: d.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function C() {
                return i.default.post({
                    url: d.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function f(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? a.AccessibilityAnnouncer.announce(T.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : a.AccessibilityAnnouncer.announce(T.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function p(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function U(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function L(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: e
                })
            }

            function m() {
                r.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function g() {
                r.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function M() {
                r.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function P() {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function D(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return a
                }
            });
            var i = n("884691"),
                l = n("599110");
            let a = () => i.useContext(l.AnalyticsContext)
        },
        812204: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), (i = l || (l = {})).POPOUT_WINDOW = "popout window", i.OVERLAY = "overlay", i.NOTICE = "notice", i.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", i.BADGE = "badge", i.USER_SETTINGS = "user settings", i.USER_SETTINGS_MENU = "user settings menu", i.ACCOUNT = "account", i.TEXT_AND_IMAGES = "text and images", i.GUILD_SETTINGS = "guild settings", i.OVERVIEW = "overview", i.STICKERS = "stickers", i.VANITY_URL = "vanity url", i.PREMIUM_MARKETING = "premium marketing", i.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", i.PREMIUM_PAYMENT_MODAL = "premium payment modal", i.PREMIUM_UPSELL_ALERT = "premium upsell alert", i.PREMIUM_UPSELL_MODAL = "premium upsell modal", i.PREMIUM_SETTINGS = "premium settings", i.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", i.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", i.CHANNEL_CALL = "channel call", i.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", i.RTC_PANEL = "rtc panel", i.SOUNDBOARD_BUTTON = "soundboard button", i.SOUNDBOARD_POPOUT = "soundboard popout", i.SOUNDBOARD_WHEEL = "soundboard wheel", i.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", i.GIFT_BUTTON = "gift button", i.EXPRESSION_SUGGESTIONS = "expression suggestions", i.EMOJI_PICKER = "emoji picker", i.STICKER_PICKER = "sticker picker", i.STICKER_POPOUT = "sticker popout", i.PREMIUM_UPSELL = "premium upsell", i.EMPTY_STATE = "empty state", i.SUBSCRIPTION_DETAILS = "subscription details", i.SUBSCRIPTION_HEADER = "subscription header", i.ACCOUNT_CREDIT_BANNER = "account credit banner", i.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", i.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", i.STREAM_QUALITY_INDICATOR = "stream quality indicator", i.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", i.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", i.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", i.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", i.RPC = "rpc", i.BILLING_STANDALONE = "billing standalone", i.GUILD_CHANNEL_LIST = "guild channel list", i.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", i.STICKER_MESSAGE = "sticker message", i.CHANNEL_TEXT_AREA = "channel text area", i.HEADER_BAR = "header bar", i.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", i.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", i.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", i.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", i.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", i.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", i.GUILD_HEADER = "guild header", i.GUILD_BANNER = "guild banner", i.GUILD_BANNER_NOTICE = "guild banner notice", i.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", i.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", i.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", i.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", i.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", i.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", i.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", i.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", i.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", i.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", i.GUILDS_LIST = "guilds list", i.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", i.ACTIVITY_DIRECTORY = "activity directory", i.ACTIVITY_TILE = "activity tile", i.ACTIVITY_UPSELL = "activity upsell", i.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", i.INSTANT_INVITE_MODAL = "instant invite modal", i.IMAGE_CROPPING_MODAL = "image cropping modal", i.GIF_PICKER = "gif picker", i.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", i.INVITE_MODAL = "invite modal", i.INVITE_EMBED = "invite embed", i.NEW_GUILD_BUTTON = "new guild button", i.CHARACTER_COUNT = "character count", i.DM_CHANNEL = "dm channel", i.GUILD_CHANNEL = "guild channel", i.FORUM_CHANNEL = "forum channel", i.FILE_UPLOAD_POPOUT = "file upload popout", i.EMOJI = "emoji", i.PROFILE = "profile", i.PROFILE_MODAL = "profile modal", i.PROFILE_POPOUT = "profile popout", i.GUILD_PROFILE = "guild profile", i.EDIT_AVATAR = "edit avatar", i.EDIT_BANNER = "edit banner", i.CHAT_INPUT = "chat input", i.CREATE_THREAD = "create thread", i.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", i.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", i.SELECT_IMAGE_MODAL = "select image modal", i.VIDEO_BACKGROUND_OPTIONS = "video background options", i.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", i.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", i.CAMERA_PREVIEW = "camera preview", i.HOME_PAGE_PREMIUM_TAB = "home page premium tab", i.HOME_PAGE_SHOP_TAB = "home page shop tab", i.PREMIUM_MARKETING_SURFACE = "premium marketing surface", i.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", i.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", i.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", i.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", i.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", i.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", i.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", i.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", i.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", i.PREMIUM_MARKETING_FEATURE = "premium marketing feature", i.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", i.PREMIUM_MARKETING_FOOTER = "premium marketing footer", i.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", i.CHANNEL_CALL_ACTION_BAR = "channel call action bar", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", i.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", i.VOICE_CONTROL_TRAY = "voice control tray", i.ACTIVE_NOW_COLUMN = "active now column", i.CONTEXT_MENU = "context menu", i.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", i.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", i.CHANNEL_CATEGORY_MENU = "channel category menu", i.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", i.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", i.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", i.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", i.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", i.CHANNEL_TITLE_MENU = "channel title menu", i.GROUP_DM_MENU = "group dm menu", i.AUDIT_LOG_USER_MENU = "audit log user menu", i.BANNED_USER_MENU = "banned user menu", i.DM_USER_MENU = "dm user menu", i.GROUP_DM_USER_MENU = "group dm user menu", i.GUILD_CHANNEL_USER_MENU = "guild channel user menu", i.GUILD_MODERATION_USER_MENU = "guild moderation user menu", i.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", i.GUILD_SETTINGS_USER_MENU = "guild settings user menu", i.GUILD_USER_MENU = "guild user menu", i.THREAD_USER_MENU = "thread user menu", i.USER_GENERIC_MENU = "user generic menu", i.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", i.VOICE_ACTION_SHEET = "voice action sheet", i.FOCUSED_VOICE_CONTROLS = "focused voice controls", i.MASKED_LINK = "masked link", i.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", i.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", i.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", i.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", i.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", i.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", i.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", i.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", i.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", i.ACCOUNT_PROFILE_POPOUT = "account profile popout", i.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", i.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", i.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", i.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", i.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", i.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", i.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", i.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", i.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", i.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", i.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", i.STAGE_VIDEO_LIMIT = "stage video limit", i.ACTIVITIES_MINI_SHELF = "activities mini shelf", i.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", i.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", i.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", i.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", i.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", i.APP_ICON_EDITOR = "app icon editor", i.CLIENT_THEMES_EDITOR = "client themes editor", i.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", i.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", i.SHARE_NITRO_EMBED = "share nitro embed", i.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", i.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", i.REFERRAL_TRIALS_POPOUT = "referral trials popout", i.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", i.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", i.ACTIVITY_BOOKMARK = "activity bookmark", i.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", i.ACTIVITY_DETAIL_PAGE = "activity detail page", i.ACTIVITIES_PAGE = "activities page", i.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", i.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", i.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", i.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", i.ACTIVITIES_HAPPENING_NOW = "activities happening now", i.MEDIA_VIEWER = "media viewer", i.MESSAGE_LONG_PRESS_MENU = "message long press menu", i.COLLECTIBLES_SHOP = "collectibles shop", i.COLLECTIBLES_SHOP_CARD = "collectibles shop card", i.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", i.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", i.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", i.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", i.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", i.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", i.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", i.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", i.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", i.PREMIUM_BILLING_INFO = "premium billing info", i.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", i.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", i.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", i.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", i.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", i.PREMIUM_PLAN_SELECT = "premium_plan_select", i.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", i.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", i.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", i.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", i.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", i.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", i.MEMBER_SAFETY_PAGE = "member safety page", i.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", i.GUILD_MEMBER_MOD_VIEW = "guild member mod view", i.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", i.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", i.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", i.GUILD_SHOP_PAGE = "guild shop page", i.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", i.MESSAGE_REMIX_TAG = "message remix tag", i.MESSAGE_REMIX_BUTTON = "message remix button", i.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", i.CLIPS_SETTINGS = "clips settings", i.CLIPS_GALLERY = "clips gallery", i.CLIPS_GALLERY_ITEM = "clips gallery item", i.CLIPS_EDITOR = "clips editor", i.CLIPS_SHARE_MODAL = "clips share modal", i.CHANNEL_ATTACH_BUTTON = "channel attach button", i.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", i.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", i.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", i.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", i.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", i.GUILD_EVENT_CARD = "guild event card", i.EVENT_SETTINGS = "event settings";
            var i, l, a = l
        },
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078"),
                a = n("845579"),
                r = n("662255"),
                u = n("306160");

            function o(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: o,
                    shiftId: E,
                    showIconFirst: _
                } = e, s = a.DeveloperMode.useSetting();
                if (__OVERLAY__ || !s || !u.SUPPORTS_COPY) return null;
                let d = "devmode-copy-id-".concat(t);
                return (0, i.jsx)(l.MenuItem, {
                    id: d,
                    label: n,
                    action: function(e) {
                        let n = null != E && e.shiftKey ? E : t;
                        (0, u.copy)(n), null == o || o()
                    },
                    icon: r.default,
                    showIconFirst: _
                }, d)
            }
        },
        242757: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canViewInviteModal: function() {
                    return l
                }
            });
            var i = n("49111");

            function l(e, t, n, l) {
                let a = null != n ? n : t,
                    r = null != a && e.can(i.Permissions.CREATE_INSTANT_INVITE, a);
                return r || null != t && null != t.vanityURLCode || (null == l ? void 0 : l.invite_code) != null
            }
        },
        252931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInventoryGuildPacksUserExperimentConfig: function() {
                    return _
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return s
                },
                useInventoryGuildSettingsExperiment: function() {
                    return c
                }
            });
            var i = n("65597"),
                l = n("862205"),
                a = n("697218"),
                r = n("719923"),
                u = n("782340");
            let o = (0, l.createExperiment)({
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
                E = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: i,
                        mobileViewAndUseEnabled: l,
                        mobileAndFreemiumCollectEnabled: a
                    } = n, u = r.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: a,
                        collectEnabled: u ? i : a
                    }
                },
                _ = e => {
                    let {
                        user: t,
                        autoTrackExposure: n = !0
                    } = e;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1
                    } : E({
                        user: t,
                        config: o.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: n
                        })
                    })
                },
                s = function() {
                    var e;
                    let {
                        expressionSourceGuild: t,
                        autoTrackExposure: n = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        expressionSourceGuild: void 0,
                        autoTrackExposure: !0
                    }, l = (0, i.default)([a.default], () => a.default.getCurrentUser()), r = o.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: u,
                        showTryPacksModalAndV2Copy: _,
                        collectEnabled: s
                    } = E({
                        user: l,
                        config: r
                    }), d = u && s && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: u,
                        collectEnabled: d,
                        showTryPacksModalAndV2Copy: _
                    }
                },
                d = (0, l.createExperiment)({
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
                c = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = d.useExperiment({
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
        292687: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i.default
                }
            });
            var i = n("870346")
        },
        906932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAvatarsWithGuilds: function() {
                    return o
                },
                setNewPendingUserBio: function() {
                    return E
                },
                setNewPendingAvatar: function() {
                    return _
                },
                setNewPendingAvatarDecoration: function() {
                    return s
                },
                setNewPendingProfileEffectID: function() {
                    return d
                },
                getProfilePreviewField: function() {
                    return c
                },
                showRemoveAvatar: function() {
                    return T
                },
                showRemoveBanner: function() {
                    return I
                }
            });
            var i = n("884691"),
                l = n("152584"),
                a = n("234251"),
                r = n("783142"),
                u = n("26989");

            function o(e) {
                return i.useMemo(() => {
                    let t = u.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let l in t) {
                        var i;
                        let a = t[l],
                            r = null === (i = a[e]) || void 0 === i ? void 0 : i.avatar;
                        null != r && (null == n[r] && (n[r] = []), n[r].push(l))
                    }
                    return null != n ? Object.entries(n).map(e => e[1][0]) : []
                }, [e])
            }

            function E(e, t) {
                (0, r.setPendingBio)(e === t ? void 0 : e)
            }

            function _(e, t) {
                (0, l.setPendingAvatar)(e === t ? void 0 : e)
            }

            function s(e, t) {
                if ((0, a.isEqualAvatarDecoration)(e, null != t ? t : null)) {
                    (0, l.setPendingAvatarDecoration)(void 0);
                    return
                }(0, l.setPendingAvatarDecoration)(e)
            }

            function d(e, t) {
                if (e === t) {
                    (0, l.setPendingProfileEffectID)(void 0);
                    return
                }(0, l.setPendingProfileEffectID)(e)
            }

            function c(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (null != e) return "" === e ? {
                    value: i ? n : null,
                    isUsingGuildValue: !1
                } : {
                    value: e,
                    isUsingGuildValue: i
                };
                return null != t && "" !== t ? {
                    value: t,
                    isUsingGuildValue: !0
                } : {
                    value: n,
                    isUsingGuildValue: !1
                }
            }

            function T(e, t) {
                return void 0 === e ? null != t : null != e
            }

            function I(e, t) {
                return void 0 === e ? null != t : null != e
            }
        },
        520497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("49111");

            function l(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: n
                } = window.GLOBAL_ENV;
                return "development" !== n ? "".concat(location.protocol, "//").concat(t).concat(i.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(i.Endpoints.SOUNDBOARD_SOUND(e))
            }
        },
        812809: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("845579"),
                l = n("42887"),
                a = n("829536");

            function r(e) {
                let t = function() {
                        var e;
                        let t = i.SoundboardSettings.getSetting();
                        return (0, a.amplitudeToPerceptual)(null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 100) / 100
                    }(),
                    n = Math.min(l.default.getOutputVolume() / 100, 1);
                return Math.min(e * t * n, 1)
            }
        },
        244480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                toggleRequestToSpeak: function() {
                    return N
                },
                inviteUserToStage: function() {
                    return O
                },
                audienceAckRequestToSpeak: function() {
                    return R
                },
                moveSelfToAudience: function() {
                    return C
                },
                setUserSuppress: function() {
                    return f
                },
                moveUserToAudience: function() {
                    return p
                },
                setEveryoneRolePermissionAllowed: function() {
                    return U
                },
                startStage: function() {
                    return L
                },
                editStage: function() {
                    return m
                },
                endStage: function() {
                    return g
                }
            });
            var i = n("627445"),
                l = n.n(i),
                a = n("316693"),
                r = n("872717"),
                u = n("450911");
            n("851387");
            var o = n("798609"),
                E = n("716241"),
                _ = n("18494"),
                s = n("800762"),
                d = n("991170"),
                c = n("716214"),
                T = n("230324"),
                I = n("738983"),
                A = n("808422"),
                S = n("49111");

            function N(e, t) {
                let n = e.getGuildId();
                return l(null != n, "This channel cannot be guildless."), t && (0, E.trackWithMetadata)(S.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
                    ...(0, T.getStageChannelMetadata)(e)
                }), r.default.patch({
                    url: S.Endpoints.UPDATE_VOICE_STATE(n),
                    body: {
                        request_to_speak_timestamp: t ? new Date().toISOString() : null,
                        channel_id: e.id
                    }
                })
            }

            function O(e, t) {
                let n = e.getGuildId();
                return l(null != n, "This channel cannot be guildless."), r.default.patch({
                    url: S.Endpoints.UPDATE_VOICE_STATE(n, t),
                    body: {
                        suppress: !1,
                        request_to_speak_timestamp: new Date().toISOString(),
                        channel_id: e.id
                    }
                })
            }

            function R(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = null == e ? void 0 : e.getGuildId();
                l(null != i, "This channel cannot be guildless.");
                let a = s.default.getVoiceStateForChannel(e.id),
                    u = (0, A.getAudienceRequestToSpeakState)(a);
                return u === A.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, E.trackWithMetadata)(S.AnalyticEvents.PROMOTED_TO_SPEAKER, {
                    ...(0, T.getStageChannelMetadata)(e)
                }), r.default.patch({
                    url: S.Endpoints.UPDATE_VOICE_STATE(i),
                    body: {
                        suppress: t,
                        request_to_speak_timestamp: null,
                        channel_id: e.id,
                        ...n ? {
                            silent: n
                        } : {}
                    }
                })
            }

            function C(e) {
                let t = null == e ? void 0 : e.getGuildId();
                return l(null != t, "This channel cannot be guildless."), r.default.patch({
                    url: S.Endpoints.UPDATE_VOICE_STATE(t),
                    body: {
                        suppress: !0,
                        channel_id: e.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function f(e, t, n) {
                let i = e.getGuildId();
                return l(null != i, "This channel cannot be guildless."), r.default.patch({
                    url: S.Endpoints.UPDATE_VOICE_STATE(i, t),
                    body: {
                        suppress: n,
                        channel_id: e.id
                    }
                })
            }

            function p(e, t) {
                if (null == t || null == e) return;
                let n = t.getGuildId();
                return l(null != n, "This channel cannot be guildless."), f(t, e.id, !0), r.default.patch({
                    url: S.Endpoints.UPDATE_VOICE_STATE(n, e.id),
                    body: {
                        suppress: !0,
                        channel_id: t.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function U(e, t, n) {
                let i = e.getGuildId();
                l(null != i, "Channel cannot be guildless");
                let r = e.permissionOverwrites[i],
                    E = {
                        id: i,
                        type: o.PermissionOverwriteType.ROLE,
                        allow: d.default.NONE,
                        deny: d.default.NONE,
                        ...r
                    };
                n ? (E.allow = a.default.add(E.allow, t), E.deny = a.default.remove(E.deny, t)) : (E.allow = a.default.remove(E.allow, t), E.deny = a.default.add(E.deny, t)), u.default.updatePermissionOverwrite(e.id, E)
            }
            async function L(e, t, n, i) {
                if ("" === t) return;
                let l = _.default.getVoiceChannelId() === e.id;
                !l && (0, c.connectToStage)(e);
                let a = await (0, I.startStageInstance)(e.id, t, n, i);
                return R(e, !1, !0), a
            }
            async function m(e, t, n) {
                if ("" === t) return;
                let i = await (0, I.updateStageInstance)(e.id, t, n);
                return i
            }
            async function g(e) {
                await (0, I.endStageInstance)(e.id)
            }
        },
        230324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                summarizeUsernamesParticipating: function() {
                    return s
                },
                getRemoveModeratorTooltipHint: function() {
                    return d
                },
                getStageChannelMetadata: function() {
                    return c
                }
            }), n("917351");
            var i = n("945956"),
                l = n("387111"),
                a = n("991170"),
                r = n("834052"),
                u = n("837979"),
                o = n("49111"),
                E = n("606762"),
                _ = n("782340");

            function s(e, t, n, i) {
                let a = t[0],
                    r = l.default.getName(e, n, a),
                    u = null != i ? i : t.length;
                return 1 === u && null != a ? r : null == a ? _.default.Messages.SPEAKING_COUNT.format({
                    count: u
                }) : _.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                    name: r,
                    count: u - 1
                })
            }

            function d(e, t) {
                switch (e) {
                    case E.RowType.OWNER:
                        return _.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
                    case E.RowType.ADMINISTRATOR:
                        return _.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
                    case E.RowType.MEMBER:
                    case E.RowType.ROLE:
                        return t ? _.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : _.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
                    case E.RowType.EMPTY_STATE:
                }
                return null
            }

            function c(e) {
                let t = r.default.getStageInstanceByChannel(e.id);
                return {
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    topic: null == t ? void 0 : t.topic,
                    media_session_id: i.default.getMediaSessionId(),
                    request_to_speak_state: a.default.canEveryoneRole(o.Permissions.REQUEST_TO_SPEAK, e) ? u.RequestToSpeakPermissionStates.EVERYONE : u.RequestToSpeakPermissionStates.NO_ONE,
                    stage_instance_id: null == t ? void 0 : t.id
                }
            }
        },
        738983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startStageInstance: function() {
                    return a
                },
                updateStageInstance: function() {
                    return r
                },
                endStageInstance: function() {
                    return u
                }
            });
            var i = n("872717"),
                l = n("49111");
            async function a(e, t, n, a, r) {
                let u = await i.default.post({
                    url: l.Endpoints.STAGE_INSTANCES,
                    body: {
                        channel_id: e,
                        topic: t,
                        privacy_level: n,
                        guild_scheduled_event_id: r,
                        send_start_notification: a
                    }
                });
                return u.body
            }
            async function r(e, t, n) {
                let a = await i.default.patch({
                    url: l.Endpoints.STAGE_INSTANCE(e),
                    body: {
                        topic: t,
                        privacy_level: n
                    }
                });
                return a.body
            }

            function u(e) {
                return i.default.delete(l.Endpoints.STAGE_INSTANCE(e))
            }
        },
        77445: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("446674"),
                l = n("271938"),
                a = n("18494"),
                r = n("808422");

            function u() {
                let e = (0, i.useStateFromStores)([a.default], () => a.default.getVoiceChannelId()),
                    t = (0, i.useStateFromStores)([l.default], () => l.default.getId()),
                    n = (0, r.default)(t, e);
                return n === r.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
            }
        },
        130563: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("446674"),
                l = n("42203"),
                a = n("18494");

            function r() {
                return (0, i.useStateFromStores)([a.default, l.default], () => {
                    let e = a.default.getVoiceChannelId();
                    if (null != e) {
                        let t = l.default.getChannel(e);
                        if (null == t ? void 0 : t.isGuildStageVoice()) return t
                    }
                    return null
                })
            }
        },
        726750: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("446674"),
                a = n("77078"),
                r = n("305961"),
                u = n("697218"),
                o = n("800762"),
                E = n("244480"),
                _ = n("619395"),
                s = n("325861"),
                d = n("77445"),
                c = n("130563"),
                T = n("782340");

            function I(e) {
                var t;
                let n = (0, c.default)(),
                    I = null == n ? void 0 : n.id,
                    A = null == n ? void 0 : n.guild_id,
                    S = (0, l.useStateFromStores)([r.default], () => r.default.getGuild(A), [A]),
                    N = (0, l.useStateFromStores)([o.default], () => null != I ? o.default.getVoiceStateForChannel(I, e.id) : null, [I, e.id]),
                    O = (null === (t = u.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id,
                    R = (0, d.default)(),
                    C = (0, l.useStateFromStores)([s.default], () => s.default.getPermissionsForUser(e.id, I), [I, e.id]),
                    f = (0, _.useCanModerateRequestToSpeak)(I);
                if (null == n || null == S || null == N || C.speaker) return null;
                let p = () => {
                    O ? (0, E.audienceAckRequestToSpeak)(n, !1) : (0, E.inviteUserToStage)(n, e.id)
                };
                return f ? (0, i.jsx)(a.MenuItem, {
                    id: "invite-speaker",
                    label: O ? T.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : T.default.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
                    action: p
                }) : R && O ? (0, i.jsx)(a.MenuItem, {
                    id: "invite-speaker",
                    label: T.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                    action: p
                }) : null
            }
        },
        4233: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("862205");
            let l = (0, i.createExperiment)({
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
            var a = l
        },
        866353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerSendability: function() {
                    return l
                },
                getStickerSendability: function() {
                    return _
                },
                isSendableSticker: function() {
                    return s
                }
            });
            var i, l, a = n("991170"),
                r = n("719923"),
                u = n("4233"),
                o = n("24373"),
                E = n("49111");
            (i = l || (l = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let _ = (e, t, n) => {
                    if (null == t) return l.NONSENDABLE;
                    let i = r.default.canUseStickersEverywhere(t);
                    if ((0, o.isStandardSticker)(e)) {
                        let {
                            freeStickersEnabled: e
                        } = u.default.getCurrentConfig({
                            location: "c036ff_1"
                        }, {
                            autoTrackExposure: !1
                        });
                        return i || e ? l.SENDABLE : l.SENDABLE_WITH_PREMIUM
                    }
                    if ((0, o.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? l.SENDABLE : null == n.guild_id || a.default.can({
                        permission: E.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? i ? l.SENDABLE : l.SENDABLE_WITH_PREMIUM : l.NONSENDABLE : l.SENDABLE_WITH_BOOSTED_GUILD;
                    return l.NONSENDABLE
                },
                s = (e, t, n) => _(e, t, n) === l.SENDABLE
        },
        865372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var i = n("917351"),
                l = n.n(i),
                a = n("446674"),
                r = n("913144"),
                u = n("80507"),
                o = n("374363"),
                E = n("364685"),
                _ = n("49111"),
                s = n("397336");
            let d = {
                pendingUsages: []
            };
            _.Durations.DAY;
            let c = new u.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => E.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                T = () => {
                    E.default.isLoaded && c.compute()
                },
                I = () => {
                    T()
                };

            function A() {
                var e;
                let t = null === (e = o.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                c.overwriteHistory(l.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), d.pendingUsages)
            }
            class S extends a.default.PersistedStore {
                initialize(e) {
                    this.waitFor(E.default), null != e && (d = e), this.syncWith([E.default], I), this.syncWith([o.default], A)
                }
                getState() {
                    return d
                }
                hasPendingUsage() {
                    return d.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return c
                }
            }
            S.displayName = "StickersPersistedStore", S.persistKey = "StickersPersistedStoreV2";
            var N = new S(r.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        c.track(e), d.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), T()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== s.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    d.pendingUsages = []
                }
            })
        },
        406784: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078"),
                a = n("272030"),
                r = n("838446"),
                u = n("158534"),
                o = n("846883"),
                E = n("812204"),
                _ = n("861370"),
                s = n("726750"),
                d = n("170990"),
                c = n("304582"),
                T = n("72057"),
                I = n("489836"),
                A = n("406703"),
                S = n("314838"),
                N = n("421602"),
                O = n("692986"),
                R = n("806179"),
                C = n("816106"),
                f = n("623879"),
                p = n("49111"),
                U = n("782340"),
                L = (0, u.default)((0, r.default)(function(e) {
                    let {
                        user: t,
                        showMediaItems: n = !1,
                        mediaEngineContext: r,
                        onSelect: u
                    } = e, E = (0, R.default)(t.id), p = (0, N.default)(t.id), L = (0, A.default)(t), m = (0, T.default)({
                        user: t
                    }), g = (0, c.default)(t), M = (0, f.default)(t.id), P = (0, C.default)(t.id), D = (0, O.default)(t.id, r), G = (0, S.default)(t), h = (0, o.default)(null, t), v = (0, d.default)(t), b = (0, I.default)(t), y = (0, _.default)({
                        id: t.id,
                        label: U.default.Messages.COPY_ID_USER
                    }), V = (0, s.default)(t), B = t.isNonUserBot();
                    return (0, i.jsxs)(l.Menu, {
                        navId: "user-context",
                        onClose: a.closeContextMenu,
                        "aria-label": U.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: u,
                        children: [!B && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(l.MenuGroup, {
                                children: V
                            }), (0, i.jsxs)(l.MenuGroup, {
                                children: [E, p, L, m, g, M]
                            }), n && (0, i.jsx)(l.MenuGroup, {
                                children: P
                            }), (0, i.jsx)(l.MenuGroup, {
                                children: h
                            }), (0, i.jsxs)(l.MenuGroup, {
                                children: [n && D, G, v, b]
                            })]
                        }), (0, i.jsx)(l.MenuGroup, {
                            children: y
                        })]
                    })
                }, {
                    object: p.AnalyticsObjects.CONTEXT_MENU
                }), [E.default.CONTEXT_MENU, E.default.USER_GENERIC_MENU])
        },
        421602: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078"),
                a = n("450911"),
                r = n("54239"),
                u = n("271938"),
                o = n("49111"),
                E = n("782340");

            function _(e, t) {
                let n = u.default.getId(),
                    _ = t === o.AppContext.POPOUT;
                return n === e || _ ? null : (0, i.jsx)(l.MenuItem, {
                    id: "message-user",
                    label: E.default.Messages.USER_POPOUT_MESSAGE,
                    action: () => {
                        a.default.openPrivateChannel(e), (0, r.popLayer)()
                    }
                })
            }
        },
        816106: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("446674"),
                a = n("77078"),
                r = n("629109"),
                u = n("42887"),
                o = n("697218"),
                E = n("829536"),
                _ = n("773336"),
                s = n("353927"),
                d = n("782340");

            function c(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.MediaEngineContextTypes.DEFAULT,
                    c = (0, l.useStateFromStores)([u.default], () => u.default.getLocalVolume(e, n), [e, n]),
                    T = e === (null === (t = o.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
                    I = n === s.MediaEngineContextTypes.STREAM;
                return T ? null : (0, i.jsx)(a.MenuControlItem, {
                    id: "user-volume",
                    label: I ? d.default.Messages.STREAM_VOLUME : d.default.Messages.USER_VOLUME,
                    control: (t, l) => (0, i.jsx)(a.MenuSliderControl, {
                        ...t,
                        ref: l,
                        value: (0, E.amplitudeToPerceptual)(c),
                        maxValue: _.isPlatformEmbedded ? 200 : 100,
                        onChange: t => r.default.setLocalVolume(e, (0, E.perceptualToAmplitude)(t), n),
                        "aria-label": I ? d.default.Messages.STREAM_VOLUME : d.default.Messages.USER_VOLUME
                    })
                })
            }
        },
        783142: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveProfileChanges: function() {
                    return c
                },
                handleProfileAccessibilityTooltipViewed: function() {
                    return T
                },
                resetPendingProfileChanges: function() {
                    return I
                },
                setPendingBanner: function() {
                    return A
                },
                setPendingBio: function() {
                    return S
                },
                setPendingPronouns: function() {
                    return N
                },
                setPendingAccentColor: function() {
                    return O
                },
                setPendingThemeColors: function() {
                    return R
                },
                setTryItOutAvatar: function() {
                    return C
                },
                setTryItOutAvatarDecoration: function() {
                    return f
                },
                setTryItOutBanner: function() {
                    return p
                },
                setTryItOutThemeColors: function() {
                    return U
                }
            });
            var i = n("872717"),
                l = n("913144"),
                a = n("448993"),
                r = n("884351"),
                u = n("845579"),
                o = n("697218"),
                E = n("599110"),
                _ = n("49111"),
                s = n("646718");

            function d(e) {
                E.default.track(_.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: e,
                    feature_tier: s.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }
            async function c(e, t) {
                var n, E;
                let s = null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == s) return;
                let d = u.UseLegacyChatInput.getSetting();
                null != e.bio && d && (e.bio = r.default.parse(void 0, e.bio).content);
                try {
                    l.default.dispatch({
                        type: "USER_PROFILE_UPDATE_START",
                        userId: s
                    });
                    let n = await i.default.patch({
                        url: null != t ? _.Endpoints.GUILD_PROFILE(t, _.ME) : _.Endpoints.USER_PROFILE(_.ME),
                        body: e
                    });
                    if (n.ok) {
                        let e = null === (E = n.body.profile_effect) || void 0 === E ? void 0 : E.id;
                        l.default.dispatch({
                            type: "USER_PROFILE_UPDATE_SUCCESS",
                            userId: s,
                            profileEffectID: e,
                            ...n.body
                        })
                    } else {
                        let e = new a.APIError(n);
                        l.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: n.body,
                            apiError: e
                        })
                    }
                    return n
                } catch (t) {
                    let e = new a.APIError(t);
                    l.default.dispatch({
                        type: "USER_PROFILE_UPDATE_FAILURE",
                        errors: {},
                        apiError: e
                    })
                }
            }

            function T() {
                l.default.dispatch({
                    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
                })
            }

            function I() {
                l.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function A(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function S(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: e
                })
            }

            function N(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function O(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: e
                })
            }

            function R(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function C(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: e
                }), d(s.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function f(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: e
                }), d(s.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function p(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: e
                }), d(s.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function U(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: e
                }), d(s.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return r
                },
                copy: function() {
                    return u
                }
            });
            var i = n("281071"),
                l = n("773336"),
                a = n("50885");
            let r = (() => {
                if (l.isPlatformEmbedded) return null != a.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function u(e) {
                return !!r && (l.isPlatformEmbedded ? (a.default.copy(e), !0) : i.copy(e))
            }
        }
    }
]);
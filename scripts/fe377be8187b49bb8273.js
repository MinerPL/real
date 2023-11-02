(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["93074"], {
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
                    return f
                },
                setPendingAvatar: function() {
                    return C
                },
                setPendingGlobalNameName: function() {
                    return p
                },
                setPendingAvatarDecoration: function() {
                    return L
                },
                setPendingProfileEffectID: function() {
                    return m
                },
                clearErrors: function() {
                    return U
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
                o = n("913144"),
                r = n("393414"),
                u = n("599110"),
                E = n("315102"),
                _ = n("730622"),
                s = n("437822"),
                d = n("49111"),
                c = n("191349"),
                T = n("782340");

            function I() {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function A() {
                o.default.dispatch({
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
                    s.default.logoutInternal(), (0, r.transitionTo)(d.Routes.DEFAULT_LOGGED_OUT)
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
                    delete n.token, o.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: t,
                        userId: n.id
                    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && o.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return o.default.dispatch({
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
                    password: r,
                    avatar: s,
                    avatarDecoration: I,
                    newPassword: A,
                    globalName: S
                } = e;
                return o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, _.default)(e => {
                    let o = {
                        username: t,
                        email: i,
                        email_token: a,
                        password: r,
                        avatar: s,
                        discriminator: n,
                        global_name: S,
                        new_password: A,
                        ...e
                    };
                    null === I && (o.avatar_decoration_id = null), null != I && (o.avatar_decoration_id = I.id, o.avatar_decoration_sku_id = I.skuId);
                    let u = l.default.get(d.DEVICE_TOKEN),
                        E = (0, c.getDevicePushProvider)();
                    null != E && null != u && (o.push_provider = E, o.push_token = u);
                    let _ = l.default.get(d.DEVICE_VOIP_TOKEN);
                    return null != c.DEVICE_PUSH_VOIP_PROVIDER && null != _ && (o.push_voip_provider = c.DEVICE_PUSH_VOIP_PROVIDER, o.push_voip_token = _), N(o)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: T.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => o.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body;
                    return u.default.track(d.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, E.isAnimatedIconHash)(t.avatar)
                    }), o.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (o.default.dispatch({
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

            function f() {
                return i.default.post({
                    url: d.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function C(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? a.AccessibilityAnnouncer.announce(T.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : a.AccessibilityAnnouncer.announce(T.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function p(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function L(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function m(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: e
                })
            }

            function U() {
                o.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function g() {
                o.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function M() {
                o.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function P() {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function D(e) {
                o.default.dispatch({
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
        219352: function(e, t, n) {
            "use strict";
            var i, l;
            n.r(t), n.d(t, {
                SelfStreamAndVideoAlertType: function() {
                    return i
                }
            }), (l = i || (i = {}))[l.STREAM = 0] = "STREAM", l[l.VIDEO = 1] = "VIDEO"
        },
        301603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("446674"),
                l = n("629109"),
                a = n("271938"),
                o = n("42887"),
                r = n("49111"),
                u = n("353927");

            function E(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.MediaEngineContextTypes.DEFAULT,
                    n = (0, i.useStateFromStores)([a.default], () => a.default.getId()),
                    E = (0, i.useStateFromStores)([o.default], () => o.default.supports(u.Features.DISABLE_VIDEO) && o.default.isVideoEnabled()),
                    _ = (0, i.useStateFromStores)([o.default], () => o.default.isLocalVideoDisabled(n, t), [n, t]),
                    s = null == e || e === n;
                return [s && (E || _), _, e => {
                    let i = e ? r.VideoToggleState.DISABLED : r.VideoToggleState.MANUAL_ENABLED;
                    l.default.setDisableLocalVideo(n, i, t)
                }]
            }
        },
        632616: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("452804"),
                a = n("135230"),
                o = n("219352"),
                r = n("782340");

            function u(e) {
                let {
                    type: t,
                    onConfirm: n,
                    ...u
                } = e, E = t === o.SelfStreamAndVideoAlertType.STREAM ? r.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : r.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, _ = t === o.SelfStreamAndVideoAlertType.STREAM ? r.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : r.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
                return (0, i.jsx)(a.default, {
                    confirmText: r.default.Messages.CONFIRM,
                    secondaryConfirmText: r.default.Messages.DONT_ASK_AGAIN,
                    title: E,
                    cancelText: r.default.Messages.CANCEL,
                    onConfirm: n,
                    onConfirmSecondary: () => {
                        l.default.updatedUnsyncedSettings({
                            disableHideSelfStreamAndVideoConfirmationAlert: !0
                        }), n()
                    },
                    body: _,
                    ...u
                })
            }
        },
        243288: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("446674"),
                a = n("77078"),
                o = n("255397"),
                r = n("191145"),
                u = n("782340");

            function E(e) {
                let t = (0, l.useStateFromStores)([r.default], () => r.default.getVoiceParticipantsHidden(e));
                return (0, i.jsx)(a.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: u.default.Messages.STREAM_SHOW_NON_VIDEO,
                    checked: !t,
                    action: () => o.default.toggleVoiceParticipantsHidden(e, !t)
                })
            }
        },
        321135: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("446674"),
                a = n("77078"),
                o = n("168973"),
                r = n("301603"),
                u = n("632616"),
                E = n("219352"),
                _ = n("353927"),
                s = n("782340");

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.MediaEngineContextTypes.DEFAULT,
                    [n, d, c] = (0, r.default)(e, t),
                    T = (0, l.useStateFromStores)([o.default], () => o.default.disableHideSelfStreamAndVideoConfirmationAlert);
                return n ? (0, i.jsx)(a.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: s.default.Messages.SHOW_SELF_VIDEO,
                    checked: !d,
                    action: () => {
                        if (T || d) return c(!d);
                        (0, a.openModal)(e => (0, i.jsx)(u.default, {
                            ...e,
                            type: E.SelfStreamAndVideoAlertType.VIDEO,
                            onConfirm: () => c(!d)
                        }))
                    }
                }) : null
            }
        },
        873254: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("446674"),
                a = n("77078"),
                o = n("648911"),
                r = n("271938"),
                u = n("42887"),
                E = n("782340"),
                _ = n("431024");

            function s(e) {
                let t = (0, a.useModalContext)(),
                    s = (0, l.useStateFromStores)([u.default], () => u.default.isVideoEnabled()),
                    d = (0, l.useStateFromStores)([r.default], () => r.default.getId() === e),
                    c = (0, o.default)();
                return (!s || c) && d ? (0, i.jsx)(a.MenuItem, {
                    id: "change-video-background",
                    label: (0, i.jsx)("div", {
                        className: _.item,
                        children: s ? E.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : E.default.Messages.CAMERA_PREVIEW_MENU_ITEM
                    }),
                    action: function() {
                        (0, a.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("381736").then(n.bind(n, "381736"));
                            return t => (0, i.jsx)(e, {
                                ...t,
                                videoEnabled: s
                            })
                        }, {
                            modalKey: "camera-preview",
                            contextKey: t
                        })
                    }
                }) : null
            }
        },
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078"),
                a = n("845579"),
                o = n("662255"),
                r = n("306160");

            function u(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: u,
                    shiftId: E,
                    showIconFirst: _
                } = e, s = a.DeveloperMode.useSetting();
                if (__OVERLAY__ || !s || !r.SUPPORTS_COPY) return null;
                let d = "devmode-copy-id-".concat(t);
                return (0, i.jsx)(l.MenuItem, {
                    id: d,
                    label: n,
                    action: function(e) {
                        let n = null != E && e.shiftKey ? E : t;
                        (0, r.copy)(n), null == u || u()
                    },
                    icon: o.default,
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
                    o = null != a && e.can(i.Permissions.CREATE_INSTANT_INVITE, a);
                return o || null != t && null != t.vanityURLCode || (null == l ? void 0 : l.invite_code) != null
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
                o = n("719923"),
                r = n("782340");
            let u = (0, l.createExperiment)({
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
                    } = n, r = o.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: a,
                        collectEnabled: r ? i : a
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
                        config: u.getCurrentConfig({
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
                    }, l = (0, i.default)([a.default], () => a.default.getCurrentUser()), o = u.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: r,
                        showTryPacksModalAndV2Copy: _,
                        collectEnabled: s
                    } = E({
                        user: l,
                        config: o
                    }), d = r && s && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: r,
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
                            getNewSettingsDescription: () => r.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => r.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => r.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
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
        906932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAvatarsWithGuilds: function() {
                    return u
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
                o = n("783142"),
                r = n("26989");

            function u(e) {
                return i.useMemo(() => {
                    let t = r.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let l in t) {
                        var i;
                        let a = t[l],
                            o = null === (i = a[e]) || void 0 === i ? void 0 : i.avatar;
                        null != o && (null == n[o] && (n[o] = []), n[o].push(l))
                    }
                    return null != n ? Object.entries(n).map(e => e[1][0]) : []
                }, [e])
            }

            function E(e, t) {
                (0, o.setPendingBio)(e === t ? void 0 : e)
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
                    return f
                },
                setUserSuppress: function() {
                    return C
                },
                moveUserToAudience: function() {
                    return p
                },
                setEveryoneRolePermissionAllowed: function() {
                    return L
                },
                startStage: function() {
                    return m
                },
                editStage: function() {
                    return U
                },
                endStage: function() {
                    return g
                }
            });
            var i = n("627445"),
                l = n.n(i),
                a = n("316693"),
                o = n("872717"),
                r = n("450911");
            n("851387");
            var u = n("798609"),
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
                }), o.default.patch({
                    url: S.Endpoints.UPDATE_VOICE_STATE(n),
                    body: {
                        request_to_speak_timestamp: t ? new Date().toISOString() : null,
                        channel_id: e.id
                    }
                })
            }

            function O(e, t) {
                let n = e.getGuildId();
                return l(null != n, "This channel cannot be guildless."), o.default.patch({
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
                    r = (0, A.getAudienceRequestToSpeakState)(a);
                return r === A.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, E.trackWithMetadata)(S.AnalyticEvents.PROMOTED_TO_SPEAKER, {
                    ...(0, T.getStageChannelMetadata)(e)
                }), o.default.patch({
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

            function f(e) {
                let t = null == e ? void 0 : e.getGuildId();
                return l(null != t, "This channel cannot be guildless."), o.default.patch({
                    url: S.Endpoints.UPDATE_VOICE_STATE(t),
                    body: {
                        suppress: !0,
                        channel_id: e.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function C(e, t, n) {
                let i = e.getGuildId();
                return l(null != i, "This channel cannot be guildless."), o.default.patch({
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
                return l(null != n, "This channel cannot be guildless."), C(t, e.id, !0), o.default.patch({
                    url: S.Endpoints.UPDATE_VOICE_STATE(n, e.id),
                    body: {
                        suppress: !0,
                        channel_id: t.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function L(e, t, n) {
                let i = e.getGuildId();
                l(null != i, "Channel cannot be guildless");
                let o = e.permissionOverwrites[i],
                    E = {
                        id: i,
                        type: u.PermissionOverwriteType.ROLE,
                        allow: d.default.NONE,
                        deny: d.default.NONE,
                        ...o
                    };
                n ? (E.allow = a.default.add(E.allow, t), E.deny = a.default.remove(E.deny, t)) : (E.allow = a.default.remove(E.allow, t), E.deny = a.default.add(E.deny, t)), r.default.updatePermissionOverwrite(e.id, E)
            }
            async function m(e, t, n, i) {
                if ("" === t) return;
                let l = _.default.getVoiceChannelId() === e.id;
                !l && (0, c.connectToStage)(e);
                let a = await (0, I.startStageInstance)(e.id, t, n, i);
                return R(e, !1, !0), a
            }
            async function U(e, t, n) {
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
                o = n("834052"),
                r = n("837979"),
                u = n("49111"),
                E = n("606762"),
                _ = n("782340");

            function s(e, t, n, i) {
                let a = t[0],
                    o = l.default.getName(e, n, a),
                    r = null != i ? i : t.length;
                return 1 === r && null != a ? o : null == a ? _.default.Messages.SPEAKING_COUNT.format({
                    count: r
                }) : _.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                    name: o,
                    count: r - 1
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
                let t = o.default.getStageInstanceByChannel(e.id);
                return {
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    topic: null == t ? void 0 : t.topic,
                    media_session_id: i.default.getMediaSessionId(),
                    request_to_speak_state: a.default.canEveryoneRole(u.Permissions.REQUEST_TO_SPEAK, e) ? r.RequestToSpeakPermissionStates.EVERYONE : r.RequestToSpeakPermissionStates.NO_ONE,
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
                    return o
                },
                endStageInstance: function() {
                    return r
                }
            });
            var i = n("872717"),
                l = n("49111");
            async function a(e, t, n, a, o) {
                let r = await i.default.post({
                    url: l.Endpoints.STAGE_INSTANCES,
                    body: {
                        channel_id: e,
                        topic: t,
                        privacy_level: n,
                        guild_scheduled_event_id: o,
                        send_start_notification: a
                    }
                });
                return r.body
            }
            async function o(e, t, n) {
                let a = await i.default.patch({
                    url: l.Endpoints.STAGE_INSTANCE(e),
                    body: {
                        topic: t,
                        privacy_level: n
                    }
                });
                return a.body
            }

            function r(e) {
                return i.default.delete(l.Endpoints.STAGE_INSTANCE(e))
            }
        },
        77445: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("446674"),
                l = n("271938"),
                a = n("18494"),
                o = n("808422");

            function r() {
                let e = (0, i.useStateFromStores)([a.default], () => a.default.getVoiceChannelId()),
                    t = (0, i.useStateFromStores)([l.default], () => l.default.getId()),
                    n = (0, o.default)(t, e);
                return n === o.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
            }
        },
        130563: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                l = n("42203"),
                a = n("18494");

            function o() {
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
                o = n("305961"),
                r = n("697218"),
                u = n("800762"),
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
                    S = (0, l.useStateFromStores)([o.default], () => o.default.getGuild(A), [A]),
                    N = (0, l.useStateFromStores)([u.default], () => null != I ? u.default.getVoiceStateForChannel(I, e.id) : null, [I, e.id]),
                    O = (null === (t = r.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id,
                    R = (0, d.default)(),
                    f = (0, l.useStateFromStores)([s.default], () => s.default.getPermissionsForUser(e.id, I), [I, e.id]),
                    C = (0, _.useCanModerateRequestToSpeak)(I);
                if (null == n || null == S || null == N || f.speaker) return null;
                let p = () => {
                    O ? (0, E.audienceAckRequestToSpeak)(n, !1) : (0, E.inviteUserToStage)(n, e.id)
                };
                return C ? (0, i.jsx)(a.MenuItem, {
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
                o = n("719923"),
                r = n("4233"),
                u = n("24373"),
                E = n("49111");
            (i = l || (l = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let _ = (e, t, n) => {
                    if (null == t) return l.NONSENDABLE;
                    let i = o.default.canUseStickersEverywhere(t);
                    if ((0, u.isStandardSticker)(e)) {
                        let {
                            freeStickersEnabled: e
                        } = r.default.getCurrentConfig({
                            location: "c036ff_1"
                        }, {
                            autoTrackExposure: !1
                        });
                        return i || e ? l.SENDABLE : l.SENDABLE_WITH_PREMIUM
                    }
                    if ((0, u.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? l.SENDABLE : null == n.guild_id || a.default.can({
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
                o = n("913144"),
                r = n("80507"),
                u = n("374363"),
                E = n("364685"),
                _ = n("49111"),
                s = n("397336");
            let d = {
                pendingUsages: []
            };
            _.Durations.DAY;
            let c = new r.default({
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
                let t = null === (e = u.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                c.overwriteHistory(l.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), d.pendingUsages)
            }
            class S extends a.default.PersistedStore {
                initialize(e) {
                    this.waitFor(E.default), null != e && (d = e), this.syncWith([E.default], I), this.syncWith([u.default], A)
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
            var N = new S(o.default, {
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
        502533: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("446674"),
                a = n("77078"),
                o = n("255397"),
                r = n("191145"),
                u = n("800762"),
                E = n("49111"),
                _ = n("782340");

            function s(e, t) {
                let n = (0, l.useStateFromStores)([r.default], () => e === r.default.getSelectedParticipantId(t), [t, e]),
                    s = (0, l.useStateFromStores)([r.default, u.default], () => {
                        let n = u.default.isInChannel(t, e) && u.default.hasVideo(t),
                            i = r.default.getLayout(t),
                            l = i === E.ChannelLayouts.MINIMUM || i === E.ChannelLayouts.NORMAL;
                        return !n || l
                    }, [t, e]);
                return s ? null : (0, i.jsx)(a.MenuItem, {
                    id: "focus-video",
                    label: n ? _.default.Messages.UNFOCUS_PARTICIPANT : _.default.Messages.FOCUS_PARTICIPANT,
                    action: () => o.default.selectParticipant(t, n ? null : e)
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
                o = n("629109"),
                r = n("42887"),
                u = n("697218"),
                E = n("829536"),
                _ = n("773336"),
                s = n("353927"),
                d = n("782340");

            function c(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.MediaEngineContextTypes.DEFAULT,
                    c = (0, l.useStateFromStores)([r.default], () => r.default.getLocalVolume(e, n), [e, n]),
                    T = e === (null === (t = u.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
                    I = n === s.MediaEngineContextTypes.STREAM;
                return T ? null : (0, i.jsx)(a.MenuControlItem, {
                    id: "user-volume",
                    label: I ? d.default.Messages.STREAM_VOLUME : d.default.Messages.USER_VOLUME,
                    control: (t, l) => (0, i.jsx)(a.MenuSliderControl, {
                        ...t,
                        ref: l,
                        value: (0, E.amplitudeToPerceptual)(c),
                        maxValue: _.isPlatformEmbedded ? 200 : 100,
                        onChange: t => o.default.setLocalVolume(e, (0, E.perceptualToAmplitude)(t), n),
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
                    return f
                },
                setTryItOutAvatarDecoration: function() {
                    return C
                },
                setTryItOutBanner: function() {
                    return p
                },
                setTryItOutThemeColors: function() {
                    return L
                }
            });
            var i = n("872717"),
                l = n("913144"),
                a = n("448993"),
                o = n("884351"),
                r = n("845579"),
                u = n("697218"),
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
                let s = null === (n = u.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == s) return;
                let d = r.UseLegacyChatInput.getSetting();
                null != e.bio && d && (e.bio = o.default.parse(void 0, e.bio).content);
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

            function f(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: e
                }), d(s.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function C(e) {
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

            function L(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: e
                }), d(s.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        648911: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                l = n("42887"),
                a = n("512244");

            function o() {
                return (0, i.useStateFromStores)([l.default], () => (0, a.default)(l.default))
            }
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return o
                },
                copy: function() {
                    return r
                }
            });
            var i = n("281071"),
                l = n("773336"),
                a = n("50885");
            let o = (() => {
                if (l.isPlatformEmbedded) return null != a.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function r(e) {
                return !!o && (l.isPlatformEmbedded ? (a.default.copy(e), !0) : i.copy(e))
            }
        }
    }
]);
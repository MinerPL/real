(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["50767"], {
        75651: function(e, t, n) {
            "use strict";
            e.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 66 38' width='66' height='38'%3E%3Crect x='0' y='0' width='66' height='38' style='fill: rgb(0, 0, 0); stroke: rgb(0, 0, 0);'%3E%3C/rect%3E%3C/svg%3E"
        },
        753235: function(e, t, n) {
            "use strict";
            e.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='6.122 5.864 259 50' width='259' height='50'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M 68.122 11.864 L 192.122 11.864 C 193.779 11.864 195.122 13.207 195.122 14.864 L 195.122 28.864 C 195.122 30.521 193.779 31.864 192.122 31.864 L 68.122 31.864 C 66.465 31.864 65.122 30.521 65.122 28.864 L 65.122 14.864 C 65.122 13.207 66.465 11.864 68.122 11.864 Z M 68.122 35.864 L 262.122 35.864 C 263.779 35.864 265.122 37.207 265.122 38.864 L 265.122 48.864 C 265.122 50.521 263.779 51.864 262.122 51.864 L 68.122 51.864 C 66.465 51.864 65.122 50.521 65.122 48.864 L 65.122 38.864 C 65.122 37.207 66.465 35.864 68.122 35.864 Z M 25.352 5.864 L 36.892 5.864 C 43.579 5.864 46.004 6.56 48.448 7.867 C 50.893 9.175 52.811 11.093 54.118 13.537 C 55.428 15.984 56.122 18.407 56.122 25.094 L 56.122 36.634 C 56.122 43.321 55.426 45.746 54.119 48.19 C 52.811 50.635 50.893 52.553 48.449 53.86 C 46.002 55.17 43.579 55.864 36.892 55.864 L 25.352 55.864 C 18.665 55.864 16.24 55.168 13.796 53.861 C 11.351 52.553 9.433 50.635 8.126 48.191 C 6.816 45.744 6.122 43.321 6.122 36.634 L 6.122 25.094 C 6.122 18.407 6.818 15.982 8.125 13.538 C 9.432 11.094 11.352 9.174 13.795 7.868 C 16.242 6.558 18.665 5.864 25.352 5.864 Z'%3E%3C/path%3E%3C/svg%3E"
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return l
                },
                updateCardInfo: function() {
                    return a
                },
                clearCardInfo: function() {
                    return s
                },
                updateAddressInfo: function() {
                    return r
                },
                clearError: function() {
                    return E
                }
            });
            var i = n("913144");

            function l(e) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function a(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function s() {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function r(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function E() {
                i.default.wait(() => i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return l
                }
            });
            var i = n("913144");

            function l() {
                i.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
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
                    return C
                },
                saveAccountRequest: function() {
                    return N
                },
                saveAccountChanges: function() {
                    return L
                },
                getHarvestStatus: function() {
                    return p
                },
                requestHarvest: function() {
                    return S
                },
                setPendingAvatar: function() {
                    return O
                },
                setPendingGlobalNameName: function() {
                    return f
                },
                setPendingAvatarDecoration: function() {
                    return U
                },
                setPendingProfileEffectID: function() {
                    return m
                },
                clearErrors: function() {
                    return R
                },
                resetPendingAccountChanges: function() {
                    return M
                },
                resetAllPending: function() {
                    return g
                },
                resetAndCloseUserProfileForm: function() {
                    return h
                },
                setDisableSubmit: function() {
                    return D
                }
            });
            var i = n("872717"),
                l = n("95410"),
                a = n("819855"),
                s = n("913144"),
                r = n("393414"),
                E = n("599110"),
                _ = n("315102"),
                o = n("730622"),
                u = n("437822"),
                d = n("49111"),
                c = n("191349"),
                T = n("782340");

            function I() {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function A() {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function C(e, t) {
                let n = t ? T.default.Messages.DELETE_ACCOUNT : T.default.Messages.DISABLE_ACCOUNT,
                    l = t ? d.Endpoints.DELETE_ACCOUNT : d.Endpoints.DISABLE_ACCOUNT;
                return (0, o.default)(t => i.default.post({
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
                    u.default.logoutInternal(), (0, r.transitionTo)(d.Routes.DEFAULT_LOGGED_OUT)
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
                    delete n.token, s.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: t,
                        userId: n.id
                    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && s.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return s.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), t
            }

            function L(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: i,
                    emailToken: a,
                    password: r,
                    avatar: u,
                    avatarDecoration: I,
                    newPassword: A,
                    globalName: C
                } = e;
                return s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, o.default)(e => {
                    let s = {
                        username: t,
                        email: i,
                        email_token: a,
                        password: r,
                        avatar: u,
                        discriminator: n,
                        global_name: C,
                        new_password: A,
                        ...e
                    };
                    null === I && (s.avatar_decoration_id = null), null != I && (s.avatar_decoration_id = I.id, s.avatar_decoration_sku_id = I.skuId);
                    let E = l.default.get(d.DEVICE_TOKEN),
                        _ = (0, c.getDevicePushProvider)();
                    null != _ && null != E && (s.push_provider = _, s.push_token = E);
                    let o = l.default.get(d.DEVICE_VOIP_TOKEN);
                    return null != c.DEVICE_PUSH_VOIP_PROVIDER && null != o && (s.push_voip_provider = c.DEVICE_PUSH_VOIP_PROVIDER, s.push_voip_token = o), N(s)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: T.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => s.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body;
                    return E.default.track(d.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, _.isAnimatedIconHash)(t.avatar)
                    }), s.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function p() {
                return i.default.get({
                    url: d.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function S() {
                return i.default.post({
                    url: d.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function O(e) {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? a.AccessibilityAnnouncer.announce(T.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : a.AccessibilityAnnouncer.announce(T.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function f(e) {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function U(e) {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function m(e) {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: e
                })
            }

            function R() {
                s.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function M() {
                s.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function g() {
                s.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function h() {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function D(e) {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("884691");

            function l(e) {
                let [t, n] = (0, i.useState)(!1), l = (0, i.useRef)(e.current);
                return (0, i.useEffect)(() => {
                    l.current = e.current
                }, [e]), (0, i.useEffect)(() => {
                    let e = l.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        i = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i)
                    }
                }, [l]), t
            }
        },
        689988: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("704744");
            var i = n("913144");
            class l {
                initialize() {
                    this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        i.default.subscribe(t, "function" == typeof n ? n : n.callback)
                    }), this.stores.forEach((e, t) => {
                        t.addChangeListener(e), e()
                    }))
                }
                terminate(e) {
                    !(this.initializedCount <= 0) && (e ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        i.default.unsubscribe(t, "function" == typeof n ? n : n.callback)
                    })))
                }
                _initialize() {}
                _terminate() {}
                constructor() {
                    this.initializedCount = 0, this.actions = {}, this.stores = new Map
                }
            }
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
        843962: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getChannelIconURL: function() {
                    return r
                }
            });
            var i = n("697218"),
                l = n("315102"),
                a = n("449008"),
                s = n("49111");

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case s.ChannelTypes.DM:
                        let [r] = e.recipients.map(i.default.getUser).filter(a.isNotNullish);
                        if (null == r) return null;
                        return r.getAvatarURL(void 0, t, n);
                    case s.ChannelTypes.GROUP_DM:
                        return l.default.getChannelIconURL({
                            id: e.id,
                            icon: e.icon,
                            applicationId: e.getApplicationId(),
                            size: t
                        })
                }
            }
        },
        20606: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = n("171210").default
        },
        962199: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var i = n("917351"),
                l = n.n(i),
                a = n("446674"),
                s = n("913144"),
                r = n("398604"),
                E = n("813006"),
                _ = n("730647");
            let o = !1,
                u = {},
                d = {},
                c = {},
                T = e => (c[e.guild_scheduled_event.id] = new E.default(e.guild_scheduled_event.guild), d[e.guild_scheduled_event.id] = e.guild_scheduled_event, {
                    channelId: e.directory_channel_id,
                    scheduledEventId: e.entity_id,
                    type: _.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT,
                    authorId: e.author_id,
                    createdAt: e.created_at
                });
            class I extends a.default.Store {
                isFetching() {
                    return o
                }
                getEventDirectoryEntries(e) {
                    if (null != e) return u[e]
                }
                getCachedGuildByEventId(e) {
                    var t;
                    return null !== (t = c[e]) && void 0 !== t ? t : void 0
                }
                getCachedGuildScheduledEventById(e) {
                    var t;
                    return null !== (t = d[e]) && void 0 !== t ? t : void 0
                }
            }
            I.displayName = "EventDirectoryStore";
            var A = new I(s.default, {
                EVENT_DIRECTORY_FETCH_START: function() {
                    o = !0
                },
                EVENT_DIRECTORY_FETCH_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        entries: n
                    } = e;
                    o = !1;
                    let i = l.sortBy([...n], [function(e) {
                            return (0, r.scheduledEventSort)(e.guild_scheduled_event)
                        }]),
                        a = l.map(i, T);
                    u[t] = a
                },
                EVENT_DIRECTORY_FETCH_FAILURE: function() {
                    o = !1
                }
            })
        },
        730647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DirectoryEntryTypes: function() {
                    return r
                },
                CreateOrAddGuildSlideTypes: function() {
                    return E
                },
                HubGuildTemplateId: function() {
                    return _
                },
                DirectoryEntryCategories: function() {
                    return o
                },
                getHubCategories: function() {
                    return I
                },
                getHubGuildTemplatesMap: function() {
                    return A
                }
            });
            var i, l, a, s, r, E, _, o, u = n("316693"),
                d = n("991170"),
                c = n("49111"),
                T = n("782340");
            (i = r || (r = {}))[i.GUILD = 0] = "GUILD", i[i.GUILD_SCHEDULED_EVENT = 1] = "GUILD_SCHEDULED_EVENT", (l = E || (E = {})).GUILD_TEMPLATES = "guild-templates", l.CUSTOMIZE_NEW_GUILD = "customize-new-guild", l.CHOOSE_GUILD = "choose-guild", l.CUSTOMIZE_EXISTING_GUILD = "customize-existing-guild", l.CONFIRMATION = "confirmation", (a = _ || (_ = {})).CREATE = "CREATE", a.HUB_SCHOOL_CLUB = "HUB_SCHOOL_CLUB", a.HUB_STUDY = "HUB_STUDY", a.HUB_CLASS = "HUB_CLASS", a.HUB_SOCIAL = "HUB_SOCIAL", a.HUB_MAJOR = "HUB_MAJOR", a.HUB_DORM = "HUB_DORM", (s = o || (o = {}))[s.ALL = -1] = "ALL", s[s.UNCATEGORIZED = 0] = "UNCATEGORIZED", s[s.SCHOOL_CLUB = 1] = "SCHOOL_CLUB", s[s.CLASS = 2] = "CLASS", s[s.STUDY_SOCIAL = 3] = "STUDY_SOCIAL", s[s.MISC = 5] = "MISC";

            function I(e) {
                return "883060064561299456" === e ? [{
                    value: o.SCHOOL_CLUB,
                    label: T.default.Messages.DIRECTORY_CATEGORY_INTERNAL_1
                }, {
                    value: o.CLASS,
                    label: T.default.Messages.DIRECTORY_CATEGORY_INTERNAL_2
                }, {
                    value: o.STUDY_SOCIAL,
                    label: T.default.Messages.DIRECTORY_CATEGORY_INTERNAL_3
                }, {
                    value: o.MISC,
                    label: T.default.Messages.DIRECTORY_CATEGORY_INTERNAL_5
                }] : [{
                    value: o.SCHOOL_CLUB,
                    label: T.default.Messages.DIRECTORY_CATEGORY_SCHOOL_CLUB,
                    idealSize: 100
                }, {
                    value: o.CLASS,
                    label: T.default.Messages.DIRECTORY_CATEGORY_CLASS
                }, {
                    value: o.STUDY_SOCIAL,
                    label: T.default.Messages.DIRECTORY_CATEGORY_STUDY_SOCIAL,
                    idealSize: 50
                }, {
                    value: o.MISC,
                    label: T.default.Messages.DIRECTORY_CATEGORY_MISCELLANEOUS
                }]
            }

            function A() {
                return {
                    [_.CREATE]: {
                        id: _.CREATE,
                        code: "2TffvPucqHkN",
                        label: T.default.Messages.GUILD_TEMPLATE_HEADER_CREATE,
                        channels: [],
                        system_channel_id: null
                    },
                    [_.HUB_SCHOOL_CLUB]: {
                        id: _.HUB_SCHOOL_CLUB,
                        code: "UMUbvRpRZhS6",
                        label: T.default.Messages.GUILD_TEMPLATE_HEADER_SCHOOL_CLUB,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFORMATION,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_WELCOME_AND_RULES,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_ANNOUNCEMENTS,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "03",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_RESOURCES,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_TEXT,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: c.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_1,
                            type: c.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_2,
                            type: c.ChannelTypes.GUILD_VOICE
                        }],
                        roles: [{
                            id: "00",
                            name: "@everyone",
                            permissions: d.default.DEFAULT
                        }, {
                            id: "01",
                            name: "officers (example)",
                            mentionable: !0,
                            hoist: !0,
                            permissions: u.default.combine(d.default.DEFAULT, c.Permissions.MANAGE_ROLES, c.Permissions.MANAGE_CHANNELS, c.Permissions.KICK_MEMBERS, c.Permissions.BAN_MEMBERS, c.Permissions.MANAGE_NICKNAMES, c.Permissions.MANAGE_GUILD_EXPRESSIONS, c.Permissions.MANAGE_MESSAGES, c.Permissions.SEND_TTS_MESSAGES),
                            color: 3066993
                        }],
                        system_channel_id: "12"
                    },
                    [_.HUB_STUDY]: {
                        id: _.HUB_STUDY,
                        code: "2JBhzzca2vfT",
                        label: T.default.Messages.GUILD_TEMPLATE_HEADER_STUDY,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_NOTES_RESOURCES,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: c.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 1
                            }),
                            type: c.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "23",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 2
                            }),
                            type: c.ChannelTypes.GUILD_VOICE
                        }],
                        system_channel_id: "12"
                    },
                    [_.HUB_CLASS]: {
                        id: _.HUB_CLASS,
                        code: "r86WWBwTGspb",
                        label: T.default.Messages.GUILD_TEMPLATE_HEADER_CLASS,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_ASSIGNMENTS,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: c.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 1
                            }),
                            type: c.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "23",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 2
                            }),
                            type: c.ChannelTypes.GUILD_VOICE
                        }],
                        system_channel_id: "12"
                    },
                    [_.HUB_SOCIAL]: {
                        id: _.HUB_SOCIAL,
                        code: "AvvtXE3mfbCR",
                        label: T.default.Messages.GUILD_TEMPLATE_HEADER_SOCIAL,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "03",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "04",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_MEETUPS,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,
                            type: c.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,
                            type: c.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_UNNUMBERED_STUDY_ROOM,
                            type: c.ChannelTypes.GUILD_VOICE
                        }],
                        system_channel_id: "02"
                    },
                    [_.HUB_MAJOR]: {
                        id: _.HUB_MAJOR,
                        code: "FhmfDR6Arvsc",
                        label: T.default.Messages.GUILD_TEMPLATE_HEADER_MAJOR,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_RESOURCES,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: c.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 1
                            }),
                            type: c.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "23",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 2
                            }),
                            type: c.ChannelTypes.GUILD_VOICE
                        }],
                        system_channel_id: "12"
                    },
                    [_.HUB_DORM]: {
                        id: _.HUB_DORM,
                        code: "fkq8xHfrGE58",
                        label: T.default.Messages.GUILD_TEMPLATE_HEADER_DORM,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_DORM_NEWS,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: c.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,
                            type: c.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "23",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,
                            type: c.ChannelTypes.GUILD_VOICE
                        }],
                        system_channel_id: "12"
                    }
                }
            }
        },
        882550: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("884691"),
                l = n("446674"),
                a = n("851387"),
                s = n("697218");

            function r(e) {
                let t = (0, l.useStateFromStores)([s.default], () => s.default.getUser(null == e ? void 0 : e.creator_id), [e]);
                return i.useEffect(() => {
                    null == t && (null == e ? void 0 : e.creator_id) != null && a.default.requestMembersById(e.guild_id, e.creator_id)
                }, [e, t]), t
            }
        },
        914169: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                createEventLocationClickHandler: function() {
                    return v
                },
                default: function() {
                    return H
                }
            });
            var i = n("37983"),
                l = n("884691"),
                a = n("414456"),
                s = n.n(a),
                r = n("446674"),
                E = n("77078"),
                _ = n("970728"),
                o = n("987317"),
                u = n("716214"),
                d = n("813006"),
                c = n("42203"),
                T = n("305961"),
                I = n("580357"),
                A = n("174622"),
                C = n("660279"),
                N = n("36694"),
                L = n("374021"),
                p = n("398604"),
                S = n("322224"),
                O = n("1339"),
                f = n("882550"),
                U = n("93550"),
                m = n("255050"),
                R = n("400271"),
                M = n("931874"),
                g = n("745049"),
                h = n("782340"),
                D = n("336179");
            let G = (e, t) => n => {
                    n.stopPropagation(), o.default.selectVoiceChannel(e.channel_id, !1), null == t || t(n)
                },
                P = (e, t) => n => {
                    let i = c.default.getChannel(e.channel_id);
                    if (null != i) n.stopPropagation(), (0, u.connectAndOpen)(i), null == t || t(n)
                },
                v = (e, t) => {
                    switch (null == e ? void 0 : e.entity_type) {
                        case g.GuildScheduledEventEntityTypes.STAGE_INSTANCE:
                            return P(e, t);
                        case g.GuildScheduledEventEntityTypes.VOICE:
                            return G(e, t)
                    }
                    return () => {}
                },
                y = (e, t) => t && [g.GuildScheduledEventEntityTypes.STAGE_INSTANCE, g.GuildScheduledEventEntityTypes.VOICE].includes(null == e ? void 0 : e.entity_type),
                b = l.memo(function(e) {
                    var t;
                    let {
                        guild: n,
                        guildScheduledEvent: a,
                        channel: s,
                        isMember: o
                    } = e, u = (0, r.useStateFromStores)([T.default], () => {
                        var e;
                        return null == n ? null : null !== (e = T.default.getGuild(n.id)) && void 0 !== e ? e : new d.default(n)
                    }, [n]), c = (0, M.getLocationDataForEvent)(a, s), C = l.useCallback(e => {
                        o && null != a && (e.stopPropagation(), (0, _.transitionToGuildFromEventInvite)(a))
                    }, [o, a]), N = l.useCallback(e => {
                        v(a)(e)
                    }, [a]);
                    if (null == u) return null;
                    let L = null == c ? void 0 : c.IconComponent,
                        p = (0, i.jsxs)(i.Fragment, {
                            children: [null != L && (0, i.jsx)(L, {
                                width: 16,
                                height: 16,
                                className: D.channelIcon
                            }), (0, i.jsx)(E.Text, {
                                className: D.channelDescription,
                                variant: "text-xs/normal",
                                children: (0, O.guildEventDetailsParser)(null !== (t = null == c ? void 0 : c.locationName) && void 0 !== t ? t : "", !0)
                            })]
                        });
                    return (0, i.jsxs)("div", {
                        className: D.inviteDetailsContainer,
                        children: [(0, i.jsx)(A.default.Icon, {
                            guild: u,
                            onClick: C
                        }), (0, i.jsxs)("div", {
                            className: D.verticalContainer,
                            children: [(0, i.jsxs)("div", {
                                className: D.guildChannelInfoContainer,
                                children: [(0, i.jsx)(I.default, {
                                    guild: u,
                                    tooltipPosition: "top",
                                    tooltipColor: E.Tooltip.Colors.PRIMARY,
                                    size: 16,
                                    className: D.guildBadge
                                }), (0, i.jsx)(E.Clickable, {
                                    className: D.guildNameClickable,
                                    onClick: C,
                                    children: (0, i.jsx)(E.Heading, {
                                        className: o ? D.guildNameLinkable : D.guildName,
                                        variant: "text-sm/medium",
                                        children: u.name
                                    })
                                })]
                            }), (0, i.jsx)("div", {
                                className: D.channelInfoContainer,
                                children: y(a, o) ? (0, i.jsx)(E.Clickable, {
                                    className: D.channelLocationLink,
                                    onClick: N,
                                    children: p
                                }) : p
                            })]
                        })]
                    })
                }),
                V = l.memo(function(e) {
                    let {
                        guildId: t,
                        guildScheduledEventId: n,
                        isActive: l,
                        isEnded: a,
                        isMember: s,
                        isExternal: _,
                        onAcceptInstantInvite: o,
                        onTransitionToInviteChannel: u
                    } = e, d = (0, r.useStateFromStores)([p.default], () => p.default.hasRsvp(n, t), [t, n]), c = e => {
                        e.stopPropagation(), s ? l && u() : o()
                    };
                    return s ? l ? (0, i.jsx)(E.Button, {
                        className: D.button,
                        size: E.Button.Sizes.SMALL,
                        onClick: e => {
                            !_ && c(e)
                        },
                        color: _ ? E.Button.Colors.TRANSPARENT : E.Button.Colors.GREEN,
                        children: _ ? h.default.Messages.GUILD_SCHEDULED_EVENT_VIEW_DETAIL : h.default.Messages.JOIN_GUILD
                    }) : a ? (0, i.jsx)(E.Button, {
                        className: D.button,
                        size: E.Button.Sizes.SMALL,
                        disabled: !0,
                        color: E.Button.Colors.PRIMARY,
                        look: E.Button.Looks.OUTLINED,
                        children: h.default.Messages.GUILD_EVENT_INVITE_COMPLETED
                    }) : (0, i.jsxs)(E.Button, {
                        className: D.button,
                        innerClassName: D.innerButton,
                        size: E.Button.Sizes.SMALL,
                        color: E.Button.Colors.PRIMARY,
                        look: d ? E.Button.Looks.OUTLINED : E.Button.Looks.FILLED,
                        onClick: e => {
                            e.stopPropagation(), d ? S.default.deleteRsvpForGuildEvent(n, t) : S.default.createRsvpForGuildEvent(n, t)
                        },
                        children: [d ? (0, i.jsx)(N.default, {
                            width: 16,
                            height: 16,
                            className: D.buttonIcon
                        }) : (0, i.jsx)(C.default, {
                            width: 16,
                            height: 16,
                            className: D.buttonIcon
                        }), h.default.Messages.INDICATE_RSVP]
                    }) : (0, i.jsx)(E.Button, {
                        className: D.button,
                        size: E.Button.Sizes.SMALL,
                        onClick: c,
                        color: E.Button.Colors.GREEN,
                        children: h.default.Messages.JOIN_GUILD
                    })
                }),
                B = l.memo(function(e) {
                    var t;
                    let {
                        guildScheduledEvent: n,
                        guild: a,
                        channel: r,
                        isMember: _,
                        recurrenceId: o,
                        onAcceptInstantInvite: u,
                        onTransitionToInviteChannel: d
                    } = e, c = (0, f.default)(n), T = l.useCallback(() => {
                        _ && null != n && (0, L.openGuildEventDetails)({
                            eventId: n.id,
                            recurrenceId: o
                        })
                    }, [_, n, o]);
                    if (null == n) return null;
                    let I = (0, p.isGuildScheduledEventActive)(n),
                        C = (0, p.isGuildEventEnded)(n),
                        N = n.entity_type === g.GuildScheduledEventEntityTypes.EXTERNAL;
                    return (0, i.jsx)(A.default, {
                        className: s({
                            [D.clickable]: _
                        }),
                        children: (0, i.jsxs)(E.Clickable, {
                            onClick: T,
                            children: [null != n.image && (0, i.jsx)(m.default, {
                                source: (0, U.default)(n),
                                className: D.banner
                            }), (0, i.jsx)(R.default, {
                                name: n.name,
                                description: null !== (t = n.description) && void 0 !== t ? t : void 0,
                                descriptionClassName: D.eventDescription,
                                guildId: n.guild_id,
                                creator: c,
                                guildEventId: n.id,
                                eventPreview: n,
                                recurrenceId: o
                            }), (0, i.jsxs)("div", {
                                className: D.footerContainer,
                                children: [(0, i.jsx)(b, {
                                    guild: a,
                                    channel: r,
                                    guildScheduledEvent: n,
                                    isMember: _
                                }), (0, i.jsx)(V, {
                                    isActive: I,
                                    isEnded: C,
                                    isMember: _,
                                    guildId: n.guild_id,
                                    guildScheduledEventId: n.id,
                                    onAcceptInstantInvite: u,
                                    onTransitionToInviteChannel: d,
                                    isExternal: N
                                })]
                            })]
                        })
                    })
                });
            var H = B
        },
        833843: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return G
                }
            });
            var i = n("37983"),
                l = n("884691"),
                a = n("249654"),
                s = n("446674"),
                r = n("77078"),
                E = n("922770"),
                _ = n("267567"),
                o = n("42203"),
                u = n("476765"),
                d = n("599110"),
                c = n("686904"),
                T = n("933326"),
                I = n("398604"),
                A = n("152475"),
                C = n("598639"),
                N = n("613767"),
                L = n("93550"),
                p = n("707916"),
                S = n("255050"),
                O = n("644189"),
                f = n("965353"),
                U = n("360538"),
                m = n("403901"),
                R = n("369404"),
                M = n("745049"),
                g = n("49111"),
                h = n("175244");

            function D(e) {
                let {
                    guildEvent: t,
                    guild: n,
                    channel: l,
                    onActionTaken: a,
                    isHub: r,
                    isMember: E,
                    recurrenceId: o
                } = e, u = (0, I.isGuildScheduledEventActive)(t), d = (0, s.useStateFromStores)([I.default], () => I.default.hasRsvp(t.id, n.id), [n.id, t]), c = (0, A.default)(t), T = (0, s.useStateFromStores)([_.default], () => _.default.isLurking(n.id), [n.id]), C = (0, N.useIsChannelPublic)(null == l ? void 0 : l.id, t.id), L = (0, R.default)({
                    guild: n,
                    channel: l,
                    guildScheduledEvent: t,
                    isActive: u,
                    rsvped: d,
                    recurrenceId: o,
                    onActionTaken: a
                }), {
                    entity_type: S
                } = t;
                return r ? (0, i.jsx)(O.default, {
                    isActive: u,
                    isUserLurking: T,
                    rsvped: d,
                    isMember: E,
                    isDetailsView: !0,
                    guildName: null == n ? void 0 : n.name,
                    isChannelPublic: C,
                    canInvite: c,
                    ...L
                }) : (0, i.jsx)(p.default, {
                    isActive: u,
                    isUserLurking: T,
                    rsvped: d,
                    isChannelPublic: C,
                    canInvite: c,
                    entityType: S,
                    ...L
                })
            }
            var G = e => {
                var t;
                let {
                    guildScheduledEventId: n,
                    parentGuildId: _,
                    transitionState: A,
                    recurrenceId: N,
                    onClose: p
                } = e, O = (0, s.useStateFromStores)([I.default], () => I.default.getGuildScheduledEvent(n), [n]), R = null == O ? void 0 : O.id, G = null == O ? void 0 : O.guild_id, {
                    guild: P,
                    isMember: v
                } = (0, C.default)(G, R), y = (0, E.default)(_), b = null == O ? void 0 : O.channel_id, V = (0, s.useStateFromStores)([o.default], () => o.default.getChannel(b), [b]), B = (0, u.useUID)(), [H, k] = l.useState(M.EventDetailSections.EVENT_INFO), x = (0, s.useStateFromStoresArray)([I.default], () => Object.values(I.default.getUsersForGuildEvent(R)), [R]), [F, {
                    loading: w,
                    error: Y
                }] = (0, c.default)(() => T.default.getGuildEventUsers(null == O ? void 0 : O.id, G));
                l.useEffect(() => {
                    null == O ? p() : d.default.track(g.AnalyticEvents.OPEN_MODAL, {
                        type: M.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
                        guild_id: O.guild_id
                    })
                }, [O, p]);
                let j = l.useRef(null),
                    [W, K] = l.useState(0);
                if (l.useLayoutEffect(() => {
                        var e, t;
                        K(null !== (t = null == j ? void 0 : null === (e = j.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 0)
                    }, [j]), null == O || null == P || !v && !y) return null;
                let X = e => {
                        e !== H && (e === M.EventDetailSections.RSVP_LIST && F(), k(e))
                    },
                    z = null !== (t = null == O ? void 0 : O.user_count) && void 0 !== t ? t : 0,
                    J = null == N && null != O.recurrence_rule ? a.default.fromTimestamp(Math.floor(new Date(O.scheduled_start_time).getTime() / g.Durations.SECOND)) : N;
                return (0, i.jsxs)(r.ModalRoot, {
                    size: r.ModalSize.MEDIUM,
                    transitionState: A,
                    "aria-labelledby": B,
                    className: h.root,
                    children: [(null == O ? void 0 : O.image) != null && (0, i.jsx)(S.default, {
                        source: (0, L.default)(O),
                        className: h.banner
                    }), (0, i.jsx)(f.default, {
                        onClose: p,
                        selectedTab: H,
                        onTabSelected: X,
                        rsvpCount: z,
                        hasBanner: (null == O ? void 0 : O.image) != null,
                        isHub: y
                    }), (0, i.jsx)("div", {
                        className: h.container,
                        children: (0, i.jsx)(r.ModalContent, {
                            className: h.contentContainer,
                            style: {
                                height: W
                            },
                            children: (0, i.jsxs)(r.Slides, {
                                activeSlide: H,
                                width: 600,
                                centered: !1,
                                children: [(0, i.jsx)(r.Slide, {
                                    id: M.EventDetailSections.EVENT_INFO,
                                    children: (0, i.jsx)(U.default, {
                                        guildEvent: O,
                                        guild: P,
                                        channel: V,
                                        headerId: B,
                                        onClose: p,
                                        onClickInterestedCount: () => X(M.EventDetailSections.RSVP_LIST),
                                        isHub: y,
                                        containerRef: j,
                                        recurrenceId: J
                                    })
                                }), (0, i.jsx)(r.Slide, {
                                    id: M.EventDetailSections.RSVP_LIST,
                                    children: (0, i.jsx)(m.default, {
                                        guildEvent: O,
                                        rsvpUsers: x,
                                        loading: w,
                                        containerHeight: W,
                                        error: Y
                                    })
                                })]
                            })
                        })
                    }), (0, i.jsx)(r.ModalFooter, {
                        className: h.footer,
                        children: (0, i.jsx)(D, {
                            guildEvent: O,
                            isHub: y,
                            isMember: v,
                            guild: P,
                            channel: V,
                            onActionTaken: p,
                            recurrenceId: J
                        })
                    })]
                })
            }
        },
        965353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983"),
                l = n("884691"),
                a = n("414456"),
                s = n.n(a),
                r = n("77078"),
                E = n("945330"),
                _ = n("745049"),
                o = n("782340"),
                u = n("475267");

            function d(e) {
                let {
                    onClose: t,
                    selectedTab: n,
                    onTabSelected: a,
                    rsvpCount: d,
                    hasBanner: c,
                    isHub: T = !1
                } = e, I = l.useRef(null);
                l.useEffect(() => {
                    var e, t, n;
                    return null === (n = I.current) || void 0 === n ? void 0 : null === (t = n.ref) || void 0 === t ? void 0 : null === (e = t.blur) || void 0 === e ? void 0 : e.call(t)
                }, []);
                let A = o.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_TAB_TITLE.format({
                        userCount: d
                    }),
                    C = [(0, i.jsx)(r.TabBar.Item, {
                        className: u.tabBarItem,
                        id: _.EventDetailSections.EVENT_INFO,
                        children: o.default.Messages.GUILD_EVENT_DETAILS_INFO_TAB_TITLE
                    }, "event-details")];
                return !T && C.push((0, i.jsx)(r.TabBar.Item, {
                    className: u.tabBarItem,
                    id: _.EventDetailSections.RSVP_LIST,
                    children: A
                }, "is-hub")), (0, i.jsxs)("div", {
                    className: u.container,
                    children: [(0, i.jsx)(r.Clickable, {
                        ref: I,
                        onClick: t,
                        className: u.closeButton,
                        "aria-label": o.default.Messages.CLOSE,
                        children: (0, i.jsx)(E.default, {
                            className: s(u.closeIcon, c && u.closeIconBanner)
                        })
                    }), (0, i.jsx)(r.TabBar, {
                        className: u.tabBar,
                        "aria-label": o.default.Messages.OPTIONS,
                        selectedItem: n,
                        type: "top",
                        onItemSelect: a,
                        children: C
                    })]
                })
            }
        },
        360538: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("37983"),
                l = n("884691"),
                a = n("414456"),
                s = n.n(a),
                r = n("446674"),
                E = n("77078"),
                _ = n("970728"),
                o = n("401642"),
                u = n("26989"),
                d = n("305961"),
                c = n("580357"),
                T = n("109024"),
                I = n("155207"),
                A = n("158998"),
                C = n("933326"),
                N = n("882550"),
                L = n("466148"),
                p = n("909151"),
                S = n("393745"),
                O = n("586403"),
                f = n("49111"),
                U = n("782340"),
                m = n("171632");

            function R(e) {
                var t;
                let {
                    creator: n,
                    guildId: l
                } = e, a = (0, r.useStateFromStores)([u.default], () => u.default.getMember(l, n.id), [n, l]);
                return (0, i.jsxs)("div", {
                    className: m.row,
                    children: [(0, i.jsx)(E.Avatar, {
                        size: E.AvatarSizes.SIZE_20,
                        src: n.getAvatarURL(l, 20),
                        "aria-label": null !== (t = null == a ? void 0 : a.nick) && void 0 !== t ? t : A.default.getName(n),
                        className: m.icon
                    }), (0, i.jsx)(E.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: U.default.Messages.GUILD_EVENT_CREATED_BY_HOOK.format({
                            usernameHook: function() {
                                var e, t;
                                return (0, i.jsx)(E.Clickable, {
                                    onClick: () => (0, o.openUserProfileModal)({
                                        userId: n.id,
                                        guildId: l,
                                        analyticsLocation: {
                                            section: f.AnalyticsSections.SCHEDULED_GUILD_EVENT_INFORMATION_DIALOG
                                        }
                                    }),
                                    className: m.creator,
                                    tag: "span",
                                    role: "link",
                                    children: (0, i.jsx)(E.NameWithRole, {
                                        name: null !== (e = null == a ? void 0 : a.nick) && void 0 !== e ? e : A.default.getName(n),
                                        color: null !== (t = null == a ? void 0 : a.colorString) && void 0 !== t ? t : void 0
                                    })
                                }, "open-user-profile")
                            }
                        })
                    })]
                })
            }

            function M(e) {
                let {
                    guild: t,
                    onClick: n,
                    onClose: a
                } = e, r = l.useCallback(e => {
                    null == n || n(e), null != n && (null == a || a(e))
                }, [n, a]), _ = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(T.default, {
                        guild: t,
                        size: T.default.Sizes.MINI,
                        active: !0,
                        className: s(m.guildIcon, m.icon)
                    }), (0, i.jsx)(c.default, {
                        guild: t,
                        tooltipPosition: "top",
                        tooltipColor: E.Tooltip.Colors.PRIMARY,
                        size: 16,
                        className: m.guildBadge
                    }), (0, i.jsx)(E.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        className: m.linkText,
                        children: t.name
                    })]
                });
                return (0, i.jsx)("div", {
                    className: m.row,
                    children: null != n ? (0, i.jsx)(E.Clickable, {
                        onClick: r,
                        className: m.clickable,
                        role: "link",
                        children: _
                    }) : _
                })
            }

            function g(e) {
                let {
                    userCount: t,
                    onClick: n
                } = e;
                return (0, i.jsxs)("div", {
                    className: m.row,
                    children: [(0, i.jsx)(I.default, {
                        width: 20,
                        height: 20,
                        className: m.icon
                    }), (0, i.jsx)(E.Clickable, {
                        onClick: n,
                        className: m.interestedCount,
                        children: (0, i.jsx)(E.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: U.default.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
                                count: t
                            })
                        })
                    })]
                })
            }

            function h(e) {
                var t, n;
                let {
                    guildEvent: a,
                    guild: s,
                    channel: o,
                    headerId: u,
                    onClose: c,
                    onClickInterestedCount: T,
                    isHub: I = !1,
                    containerRef: A,
                    recurrenceId: f
                } = e, {
                    user_count: U,
                    description: h
                } = a, D = (0, r.useStateFromStores)([d.default], () => null != d.default.getGuild(s.id), [s.id]), {
                    startTime: G,
                    endTime: P
                } = (0, L.default)(a.id, f), v = l.useCallback(e => {
                    e.stopPropagation(), null != a && (0, _.transitionToGuildFromEventInvite)(a)
                }, [a]), y = (0, N.default)(a);
                return l.useEffect(() => {
                    C.default.getGuildEventUserCounts(s.id), C.default.getGuildEventsForCurrentUser(s.id)
                }, [s.id]), (0, i.jsxs)("div", {
                    ref: A,
                    children: [(0, i.jsxs)("div", {
                        className: m.header,
                        children: [(0, i.jsx)(S.GuildEventTimeStatus, {
                            startTime: null !== (t = null == G ? void 0 : G.toISOString()) && void 0 !== t ? t : a.scheduled_start_time,
                            endTime: null !== (n = null == P ? void 0 : P.toISOString()) && void 0 !== n ? n : a.scheduled_end_time,
                            status: a.status,
                            eventType: a.entity_type
                        }), (0, i.jsx)(E.Heading, {
                            id: u,
                            variant: "heading-lg/semibold",
                            color: "header-primary",
                            className: m.title,
                            children: a.name
                        })]
                    }), (0, i.jsxs)("div", {
                        className: m.body,
                        children: [(0, i.jsx)(M, {
                            guild: s,
                            onClick: D ? v : void 0,
                            onClose: c
                        }), (0, i.jsx)(O.default, {
                            guildScheduledEvent: a,
                            channel: o,
                            onClose: c
                        }), null != U && (0, i.jsx)(g, {
                            userCount: U,
                            onClick: T
                        }), !I && null != y && (0, i.jsx)(R, {
                            creator: y,
                            guildId: s.id
                        }, y.id), null != h && (0, i.jsx)("div", {
                            className: m.description,
                            children: (0, i.jsx)(p.default, {
                                description: h,
                                truncate: !1,
                                guildId: s.id
                            })
                        })]
                    })]
                })
            }
        },
        586403: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983"),
                l = n("884691"),
                a = n("77078"),
                s = n("1339"),
                r = n("914169"),
                E = n("931874"),
                _ = n("745049"),
                o = n("171632");

            function u(e) {
                let {
                    guildScheduledEvent: t,
                    channel: n,
                    onClose: u
                } = e, d = t.entity_type === _.GuildScheduledEventEntityTypes.EXTERNAL, c = l.useCallback(e => (0, r.createEventLocationClickHandler)(t, u)(e), [t, u]), T = (0, E.getLocationDataForEvent)(t, n);
                if (null == T) return null;
                let {
                    IconComponent: I,
                    locationName: A
                } = T, C = (0, i.jsxs)(i.Fragment, {
                    children: [null != I && (0, i.jsx)(I, {
                        width: 20,
                        height: 20,
                        className: o.channelIcon
                    }), (0, i.jsx)(a.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        className: o.locationText,
                        children: (0, s.guildEventDetailsParser)(A, !0)
                    })]
                });
                return (0, i.jsx)("div", {
                    className: o.row,
                    children: null != c ? (0, i.jsx)(a.Clickable, {
                        className: d ? o.externalLocation : o.channelLocation,
                        onClick: c,
                        children: C
                    }) : C
                })
            }
        },
        403901: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                a = n.n(l),
                s = n("446674"),
                r = n("77078"),
                E = n("272030"),
                _ = n("145079"),
                o = n("119184"),
                u = n("506885"),
                d = n("981601"),
                c = n("271938"),
                T = n("824563"),
                I = n("101125"),
                A = n("155207"),
                C = n("745049"),
                N = n("782340"),
                L = n("758024");

            function p(e) {
                let {
                    children: t
                } = e;
                return (0, i.jsxs)("div", {
                    className: L.emptyContainer,
                    children: [(0, i.jsx)(o.default, {
                        children: (0, i.jsx)("div", {
                            className: L.circle,
                            children: (0, i.jsx)(A.default, {
                                height: 40,
                                width: 40,
                                className: L.icon
                            })
                        })
                    }), t]
                })
            }

            function S() {
                return (0, i.jsx)(p, {
                    children: (0, i.jsx)(r.Heading, {
                        color: "header-primary",
                        variant: "heading-xl/semibold",
                        className: L.title,
                        children: N.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_EMPTY_TITLE
                    })
                })
            }

            function O() {
                return (0, i.jsx)(p, {
                    children: (0, i.jsx)(r.Heading, {
                        color: "header-secondary",
                        variant: "heading-md/semibold",
                        className: L.errorTitle,
                        children: N.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_FETCH_ERROR
                    })
                })
            }

            function f(e) {
                let {
                    count: t
                } = e;
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)("div", {
                        className: L.listRow,
                        children: [(0, i.jsx)("div", {
                            className: a(L.listRowCircle, L.listAvatar),
                            children: (0, i.jsx)(A.default, {
                                height: 14,
                                width: 14,
                                className: L.icon
                            })
                        }), (0, i.jsx)(r.Text, {
                            color: "text-normal",
                            variant: "text-md/normal",
                            children: N.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_REMAINING.format({
                                userRemainCount: t
                            })
                        })]
                    })
                })
            }

            function U(e) {
                var t;
                let {
                    rsvpUser: n,
                    onContextMenu: l
                } = e, {
                    user: E
                } = n, o = null === (t = n.guild_member) || void 0 === t ? void 0 : t.guildId, A = (0, s.useStateFromStores)([I.default, T.default, c.default], () => E.id === c.default.getId() ? I.default.getStatus() : T.default.getStatus(E.id, o), [E.id, o]);
                return (0, i.jsx)(r.Popout, {
                    preload: () => (0, u.default)(E.id, E.getAvatarURL(o, 80), {
                        guildId: o
                    }),
                    renderPopout: e => (0, i.jsx)(d.default, {
                        ...e,
                        userId: E.id,
                        guildId: o
                    }),
                    position: "left",
                    spacing: 16,
                    children: (e, t) => {
                        var s, o;
                        let {
                            isShown: u
                        } = t;
                        return (0, i.jsxs)(r.Clickable, {
                            className: a(L.listRow, L.interactiveRow, {
                                [L.selected]: u
                            }),
                            onContextMenu: e => l(e, E),
                            ...e,
                            children: [(0, i.jsx)(r.Avatar, {
                                src: E.getAvatarURL(null === (s = n.guild_member) || void 0 === s ? void 0 : s.guildId, 24),
                                "aria-label": E.username,
                                size: r.AvatarSizes.SIZE_24,
                                className: L.listAvatar,
                                status: A
                            }), (0, i.jsx)(_.default, {
                                user: E,
                                className: L.listName,
                                discriminatorClass: L.listDiscriminator,
                                nick: null === (o = n.guild_member) || void 0 === o ? void 0 : o.nick
                            })]
                        })
                    }
                })
            }

            function m(e) {
                let {
                    rsvpUsers: t,
                    usersNotShownCount: n = 0,
                    onContextMenu: l
                } = e;
                return (0, i.jsxs)(r.ScrollerThin, {
                    className: L.listScroller,
                    children: [t.map(e => (0, i.jsx)(U, {
                        rsvpUser: e,
                        onContextMenu: l
                    }, e.user.id)), n > 0 && (0, i.jsx)(f, {
                        count: n
                    })]
                })
            }

            function R(e) {
                let {
                    children: t,
                    style: n
                } = e;
                return (0, i.jsx)("div", {
                    className: L.container,
                    style: null != n ? n : {},
                    children: t
                })
            }

            function M(e) {
                let {
                    children: t,
                    height: n
                } = e;
                return (0, i.jsx)(R, {
                    style: {
                        height: n
                    },
                    children: t
                })
            }

            function g(e) {
                var t;
                let {
                    guildEvent: l,
                    rsvpUsers: a,
                    loading: s,
                    error: _,
                    containerHeight: o
                } = e;
                if (s && 0 === a.length) return (0, i.jsx)(M, {
                    height: o,
                    children: (0, i.jsx)(r.Spinner, {
                        type: r.Spinner.Type.SPINNING_CIRCLE,
                        className: L.spinner
                    })
                });
                if (null != _ && 0 === a.length) return (0, i.jsx)(M, {
                    height: o,
                    children: (0, i.jsx)(O, {})
                });
                let u = null !== (t = null == l ? void 0 : l.user_count) && void 0 !== t ? t : 0,
                    d = 0;
                return a.length >= C.MAX_RSVP_USER_DISPLAY_COUNT && u > C.MAX_RSVP_USER_DISPLAY_COUNT && (d = Math.max(u - a.length, 0)), 0 === a.length ? (0, i.jsx)(M, {
                    height: o,
                    children: (0, i.jsx)(S, {})
                }) : (0, i.jsx)(R, {
                    children: (0, i.jsx)(m, {
                        rsvpUsers: a,
                        onContextMenu: function(e, t) {
                            (0, E.openContextMenuLazy)(e, async () => {
                                let {
                                    default: e
                                } = await n.el("406784").then(n.bind(n, "406784"));
                                return n => (0, i.jsx)(e, {
                                    ...n,
                                    user: t
                                })
                            })
                        },
                        usersNotShownCount: d
                    })
                })
            }
        },
        931874: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getLocationDataForEvent: function() {
                    return s
                }
            });
            var i = n("419830"),
                l = n("718550"),
                a = n("841363");

            function s(e, t) {
                let n, s;
                if (null == e) return null;
                let r = (0, a.getLocationFromEvent)(e);
                if (null != r) n = l.default, s = r;
                else {
                    if (null == t) return null;
                    n = (0, i.getSimpleChannelIconComponent)(t.type), s = t.name
                }
                return {
                    IconComponent: n,
                    locationName: s
                }
            }
        },
        252931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInventoryGuildPacksUserExperimentConfig: function() {
                    return o
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return u
                },
                useInventoryGuildSettingsExperiment: function() {
                    return c
                }
            });
            var i = n("65597"),
                l = n("862205"),
                a = n("697218"),
                s = n("719923"),
                r = n("782340");
            let E = (0, l.createExperiment)({
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
                _ = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: i,
                        mobileViewAndUseEnabled: l,
                        mobileAndFreemiumCollectEnabled: a
                    } = n, r = s.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: a,
                        collectEnabled: r ? i : a
                    }
                },
                o = e => {
                    let {
                        user: t,
                        autoTrackExposure: n = !0
                    } = e;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1
                    } : _({
                        user: t,
                        config: E.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: n
                        })
                    })
                },
                u = function() {
                    var e;
                    let {
                        expressionSourceGuild: t,
                        autoTrackExposure: n = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        expressionSourceGuild: void 0,
                        autoTrackExposure: !0
                    }, l = (0, i.default)([a.default], () => a.default.getCurrentUser()), s = E.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: r,
                        showTryPacksModalAndV2Copy: o,
                        collectEnabled: u
                    } = _({
                        user: l,
                        config: s
                    }), d = r && u && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: r,
                        collectEnabled: d,
                        showTryPacksModalAndV2Copy: o
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
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("748820"),
                a = n("77078"),
                s = n("112679"),
                r = n("55689"),
                E = n("855133"),
                _ = n("599110"),
                o = n("659500"),
                u = n("49111"),
                d = n("646718");

            function c(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: c,
                    onClose: T,
                    onComplete: I,
                    onSubscriptionConfirmation: A,
                    analyticsLocations: C,
                    analyticsObject: N,
                    analyticsLocation: L,
                    analyticsSourceLocation: p,
                    isGift: S = !1,
                    giftMessage: O,
                    subscriptionTier: f,
                    trialId: U,
                    postSuccessGuild: m,
                    openInvoiceId: R,
                    applicationId: M,
                    referralTrialOfferId: g,
                    giftRecipient: h,
                    returnRef: D
                } = null != e ? e : {}, G = !1, P = (0, l.v4)();
                (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: l,
                            ...a
                        } = n;
                        return (0, i.jsx)(e, {
                            ...a,
                            loadId: P,
                            subscriptionTier: f,
                            skuId: f,
                            isGift: S,
                            giftMessage: O,
                            giftRecipient: h,
                            initialPlanId: t,
                            followupSKUInfo: c,
                            onClose: e => {
                                l(), null == T || T(e), e && (null == A || A())
                            },
                            onComplete: () => {
                                G = !0, null == I || I(), !S && ((0, E.setIsPersistentHelperHidden)(!0), (0, E.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: A,
                            analyticsLocations: C,
                            analyticsObject: N,
                            analyticsLocation: L,
                            analyticsSourceLocation: p,
                            trialId: U,
                            postSuccessGuild: m,
                            planGroup: d.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: R,
                            applicationId: M,
                            referralTrialOfferId: g,
                            returnRef: D
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !G && _.default.track(u.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: P,
                            payment_type: u.PurchaseTypeToAnalyticsPaymentType[u.PurchaseTypes.SUBSCRIPTION],
                            location: null != L ? L : N,
                            source: p,
                            subscription_type: u.SubscriptionTypes.PREMIUM,
                            is_gift: S,
                            eligible_for_trial: null != U,
                            application_id: M,
                            location_stack: C
                        }), (0, s.clearError)(), (0, r.clearPurchaseTokenAuthState)(), null == T || T(G), G && (!S && o.ComponentDispatch.dispatch(u.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == A || A())
                    },
                    onCloseRequest: u.NOOP
                })
            }
        },
        855133: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                togglePersistentHelper: function() {
                    return l
                },
                setHasCompletedStep: function() {
                    return a
                },
                resetPremiumTutorialStore: function() {
                    return s
                },
                setCanPlayWowMoment: function() {
                    return r
                },
                setIsPersistentHelperHidden: function() {
                    return E
                },
                setNavigatedFromHelper: function() {
                    return _
                }
            });
            var i = n("913144");
            let l = () => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                a = () => {
                    i.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                s = () => {
                    i.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                r = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                E = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                _ = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        906932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAvatarsWithGuilds: function() {
                    return E
                },
                setNewPendingUserBio: function() {
                    return _
                },
                setNewPendingAvatar: function() {
                    return o
                },
                setNewPendingAvatarDecoration: function() {
                    return u
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
                s = n("783142"),
                r = n("26989");

            function E(e) {
                return i.useMemo(() => {
                    let t = r.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let l in t) {
                        var i;
                        let a = t[l],
                            s = null === (i = a[e]) || void 0 === i ? void 0 : i.avatar;
                        null != s && (null == n[s] && (n[s] = []), n[s].push(l))
                    }
                    return null != n ? Object.entries(n).map(e => e[1][0]) : []
                }, [e])
            }

            function _(e, t) {
                (0, s.setPendingBio)(e === t ? void 0 : e)
            }

            function o(e, t) {
                (0, l.setPendingAvatar)(e === t ? void 0 : e)
            }

            function u(e, t) {
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
                    return o
                },
                isSendableSticker: function() {
                    return u
                }
            });
            var i, l, a = n("991170"),
                s = n("719923"),
                r = n("4233"),
                E = n("24373"),
                _ = n("49111");
            (i = l || (l = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let o = (e, t, n) => {
                    if (null == t) return l.NONSENDABLE;
                    let i = s.default.canUseStickersEverywhere(t);
                    if ((0, E.isStandardSticker)(e)) {
                        let {
                            freeStickersEnabled: e
                        } = r.default.getCurrentConfig({
                            location: "c036ff_1"
                        }, {
                            autoTrackExposure: !1
                        });
                        return i || e ? l.SENDABLE : l.SENDABLE_WITH_PREMIUM
                    }
                    if ((0, E.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? l.SENDABLE : null == n.guild_id || a.default.can({
                        permission: _.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? i ? l.SENDABLE : l.SENDABLE_WITH_PREMIUM : l.NONSENDABLE : l.SENDABLE_WITH_BOOSTED_GUILD;
                    return l.NONSENDABLE
                },
                u = (e, t, n) => o(e, t, n) === l.SENDABLE
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
                s = n("913144"),
                r = n("80507"),
                E = n("374363"),
                _ = n("364685"),
                o = n("49111"),
                u = n("397336");
            let d = {
                pendingUsages: []
            };
            o.Durations.DAY;
            let c = new r.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => _.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                T = () => {
                    _.default.isLoaded && c.compute()
                },
                I = () => {
                    T()
                };

            function A() {
                var e;
                let t = null === (e = E.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                c.overwriteHistory(l.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), d.pendingUsages)
            }
            class C extends a.default.PersistedStore {
                initialize(e) {
                    this.waitFor(_.default), null != e && (d = e), this.syncWith([_.default], I), this.syncWith([E.default], A)
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
            C.displayName = "StickersPersistedStore", C.persistKey = "StickersPersistedStoreV2";
            var N = new C(s.default, {
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
                    if (t !== u.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    d.pendingUsages = []
                }
            })
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
                    return C
                },
                setPendingPronouns: function() {
                    return N
                },
                setPendingAccentColor: function() {
                    return L
                },
                setPendingThemeColors: function() {
                    return p
                },
                setTryItOutAvatar: function() {
                    return S
                },
                setTryItOutAvatarDecoration: function() {
                    return O
                },
                setTryItOutBanner: function() {
                    return f
                },
                setTryItOutThemeColors: function() {
                    return U
                }
            });
            var i = n("872717"),
                l = n("913144"),
                a = n("448993"),
                s = n("884351"),
                r = n("845579"),
                E = n("697218"),
                _ = n("599110"),
                o = n("49111"),
                u = n("646718");

            function d(e) {
                _.default.track(o.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: e,
                    feature_tier: u.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }
            async function c(e, t) {
                var n, _;
                let u = null === (n = E.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == u) return;
                let d = r.UseLegacyChatInput.getSetting();
                null != e.bio && d && (e.bio = s.default.parse(void 0, e.bio).content);
                try {
                    l.default.dispatch({
                        type: "USER_PROFILE_UPDATE_START",
                        userId: u
                    });
                    let n = await i.default.patch({
                        url: null != t ? o.Endpoints.GUILD_PROFILE(t, o.ME) : o.Endpoints.USER_PROFILE(o.ME),
                        body: e
                    });
                    if (n.ok) {
                        let e = null === (_ = n.body.profile_effect) || void 0 === _ ? void 0 : _.id;
                        l.default.dispatch({
                            type: "USER_PROFILE_UPDATE_SUCCESS",
                            userId: u,
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

            function C(e) {
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

            function L(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: e
                })
            }

            function p(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function S(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: e
                }), d(u.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function O(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: e
                }), d(u.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function f(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: e
                }), d(u.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function U(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: e
                }), d(u.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        686904: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("884691"),
                l = n("448993");

            function a(e, t) {
                let [n, a] = i.useState(!1), [s, r] = i.useState(null), E = async () => {
                    a(!0), r(null);
                    try {
                        let t = await e();
                        return a(!1), r(null), t
                    } catch (n) {
                        let e = new l.APIError(n);
                        return null == t || t(e), r(e), a(!1), null
                    }
                };
                return [E, {
                    loading: n,
                    error: s
                }]
            }
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return r
                }
            });
            var i = n("884691"),
                l = n("446674"),
                a = n("244201"),
                s = n("471671");

            function r() {
                let {
                    windowId: e
                } = i.useContext(a.default);
                return (0, l.useStateFromStores)([s.default], () => s.default.isFocused(e), [e])
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
                l = n("118810");
            let a = {
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
                    (0, l.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
                }
                unobserve(e) {
                    let t = this._observer;
                    if (null == t) return;
                    let n = this._components.get(e);
                    null != n && (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n))
                }
                constructor(e = a) {
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
                    return o
                }
            });
            var i = n("884691"),
                l = n("748820"),
                a = n("157590");
            let s = (0, l.v4)(),
                r = new Map,
                E = new Map;
            class _ extends i.Component {
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
                        t = E.get(e);
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
                    t ? r.has(t) ? this.elementId = r.get(t) || "" : r.set(t, (0, l.v4)()) : this.elementId = s;
                    let _ = this.getVisibilityObserverId();
                    !E.has(_) && E.set(_, new a.default({
                        root: t,
                        rootMargin: n,
                        threshold: i
                    }))
                }
            }
            _.defaultProps = {
                active: !0,
                children: i.createElement("span"),
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: [0, Number.MIN_VALUE]
            };
            var o = _
        },
        290381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VisibilityObserver: function() {
                    return i.default
                },
                VisibilitySensor: function() {
                    return l.default
                }
            }), n("6268");
            var i = n("157590"),
                l = n("235855")
        }
    }
]);
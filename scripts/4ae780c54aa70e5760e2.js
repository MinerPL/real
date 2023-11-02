(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["15765"], {
        448105: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    i = e.length;
                if (i > n) return !1;
                if (i === n) return e === t;
                e: for (var r = 0, l = 0; r < i; r++) {
                    for (var u = e.charCodeAt(r); l < n;)
                        if (t.charCodeAt(l++) === u) continue e;
                    return !1
                }
                return !0
            }
        },
        666020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                subscribeMembers: function() {
                    return l
                },
                unsubscribeMembers: function() {
                    return u
                },
                subscribeChannel: function() {
                    return o
                },
                subscribeChannelDimensions: function() {
                    return a
                }
            });
            var i = n("913144"),
                r = n("696605");

            function l(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function u(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function o(e, t, n) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: e,
                    channelId: t,
                    ranges: n
                })
            }

            function a(e) {
                let {
                    guildId: t,
                    channelId: n,
                    y: i,
                    height: l,
                    rowHeight: u
                } = e;

                function a(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / u)) + t)
                }
                let E = [];

                function _(e) {
                    let t = e + (r.MINIMUM_RANGE - 1);
                    return E.push([e, t]), t + 1
                }
                let s = a(.5 * l),
                    c = a(i, -s),
                    d = a(i + l, s);
                for (c > 0 && (c = Math.max(_(0), c)), c = Math.floor(c / r.MINIMUM_RANGE) * r.MINIMUM_RANGE; c <= d;) c = _(c);
                o(t, n, E)
            }
        },
        152584: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                accountDetailsInit: function() {
                    return T
                },
                accountDetailsClose: function() {
                    return S
                },
                disableAccount: function() {
                    return N
                },
                saveAccountRequest: function() {
                    return A
                },
                saveAccountChanges: function() {
                    return f
                },
                getHarvestStatus: function() {
                    return O
                },
                requestHarvest: function() {
                    return C
                },
                setPendingAvatar: function() {
                    return R
                },
                setPendingGlobalNameName: function() {
                    return L
                },
                setPendingAvatarDecoration: function() {
                    return U
                },
                setPendingProfileEffectID: function() {
                    return p
                },
                clearErrors: function() {
                    return m
                },
                resetPendingAccountChanges: function() {
                    return M
                },
                resetAllPending: function() {
                    return D
                },
                resetAndCloseUserProfileForm: function() {
                    return P
                },
                setDisableSubmit: function() {
                    return g
                }
            });
            var i = n("872717"),
                r = n("95410"),
                l = n("819855"),
                u = n("913144"),
                o = n("393414"),
                a = n("599110"),
                E = n("315102"),
                _ = n("730622"),
                s = n("437822"),
                c = n("49111"),
                d = n("191349"),
                I = n("782340");

            function T() {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function S() {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function N(e, t) {
                let n = t ? I.default.Messages.DELETE_ACCOUNT : I.default.Messages.DISABLE_ACCOUNT,
                    r = t ? c.Endpoints.DELETE_ACCOUNT : c.Endpoints.DISABLE_ACCOUNT;
                return (0, _.default)(t => i.default.post({
                    url: r,
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
                    s.default.logoutInternal(), (0, o.transitionTo)(c.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function A(e) {
                let t = await i.default.patch({
                        url: c.Endpoints.ME,
                        oldFormErrors: !0,
                        body: e
                    }),
                    n = t.body;
                if (n.token) {
                    let t = n.token;
                    delete n.token, u.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: t,
                        userId: n.id
                    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && u.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return u.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), t
            }

            function f(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: i,
                    emailToken: l,
                    password: o,
                    avatar: s,
                    avatarDecoration: T,
                    newPassword: S,
                    globalName: N
                } = e;
                return u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, _.default)(e => {
                    let u = {
                        username: t,
                        email: i,
                        email_token: l,
                        password: o,
                        avatar: s,
                        discriminator: n,
                        global_name: N,
                        new_password: S,
                        ...e
                    };
                    null === T && (u.avatar_decoration_id = null), null != T && (u.avatar_decoration_id = T.id, u.avatar_decoration_sku_id = T.skuId);
                    let a = r.default.get(c.DEVICE_TOKEN),
                        E = (0, d.getDevicePushProvider)();
                    null != E && null != a && (u.push_provider = E, u.push_token = a);
                    let _ = r.default.get(c.DEVICE_VOIP_TOKEN);
                    return null != d.DEVICE_PUSH_VOIP_PROVIDER && null != _ && (u.push_voip_provider = d.DEVICE_PUSH_VOIP_PROVIDER, u.push_voip_token = _), A(u)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: I.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => u.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body;
                    return a.default.track(c.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, E.isAnimatedIconHash)(t.avatar)
                    }), u.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function O() {
                return i.default.get({
                    url: c.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function C() {
                return i.default.post({
                    url: c.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function R(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? l.AccessibilityAnnouncer.announce(I.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : l.AccessibilityAnnouncer.announce(I.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function L(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function U(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function p(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: e
                })
            }

            function m() {
                u.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function M() {
                u.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function D() {
                u.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function P() {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function g(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        901582: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("748820"),
                u = n("599110"),
                o = n("117362"),
                a = n("49111");
            class E extends r.Component {
                renderProvider(e) {
                    var t, n;
                    let {
                        section: r,
                        page: l,
                        object: o,
                        objectType: a,
                        children: E
                    } = this.props, _ = this.mergeLocation(e.location, this.getLocation(l, r, o, a)), s = this.getContext(_, null !== (t = this._loadDate) && void 0 !== t ? t : e.loadDate, null !== (n = this._loadId) && void 0 !== n ? n : e.loadId);
                    return (0, i.jsx)(u.AnalyticsContext.Provider, {
                        value: s,
                        children: E
                    })
                }
                render() {
                    let {
                        context: e
                    } = this.props;
                    return null != e ? this.renderProvider(e) : (0, i.jsx)(u.AnalyticsContext.Consumer, {
                        children: e => this.renderProvider(e)
                    })
                }
                constructor(e) {
                    super(e), this._loadId = null, this._loadDate = this.props.root ? Date.now() : null, this.getLocation = (0, o.cachedFunction)((e, t, n, i) => {
                        let r = {};
                        return null != e && (r.page = e), null != t && (r.section = t), null != n && (r.object = n), null != i && (r.objectType = i), r
                    }), this.mergeLocation = (0, o.cachedFunction)((e, t) => ({
                        ...e,
                        ...t
                    })), this.getContext = (0, o.cachedFunction)((e, t, n) => ({
                        location: e,
                        loadDate: t,
                        loadId: n
                    })), null != e.loadId ? this._loadId = e.loadId : e.root && (this._loadId = (0, l.v4)())
                }
            }
            E.Pages = a.AnalyticsPages, E.Sections = a.AnalyticsSections, E.Objects = a.AnalyticsObjects, E.ObjectTypes = a.AnalyticsObjectTypes, E.defaultProps = {
                root: !1
            }
        },
        838446: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("901582");

            function l(e, t) {
                return function(n) {
                    return (0, i.jsx)(r.default, {
                        page: t.page,
                        section: t.section,
                        object: t.object,
                        objectType: t.objectType,
                        children: (0, i.jsx)(e, {
                            ...n
                        })
                    })
                }
            }
        },
        158534: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("685665");

            function l(e, t) {
                return function(n) {
                    let {
                        AnalyticsLocationProvider: l
                    } = (0, r.default)(t);
                    return (0, i.jsx)(l, {
                        children: (0, i.jsx)(e, {
                            ...n
                        })
                    })
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
        750560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return o
                }
            }), n("37983");
            var i = n("884691"),
                r = n("917351"),
                l = n.n(r);
            n("233736");
            var u = n("666020");

            function o(e) {
                i.useEffect(() => (l.forEach(e, (e, t) => (0, u.subscribeMembers)(t, e)), () => {
                    l.forEach(e, (e, t) => (0, u.unsubscribeMembers)(t, e))
                }), [e])
            }
        },
        812204: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), (i = r || (r = {})).POPOUT_WINDOW = "popout window", i.OVERLAY = "overlay", i.NOTICE = "notice", i.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", i.BADGE = "badge", i.USER_SETTINGS = "user settings", i.USER_SETTINGS_MENU = "user settings menu", i.ACCOUNT = "account", i.TEXT_AND_IMAGES = "text and images", i.GUILD_SETTINGS = "guild settings", i.OVERVIEW = "overview", i.STICKERS = "stickers", i.VANITY_URL = "vanity url", i.PREMIUM_MARKETING = "premium marketing", i.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", i.PREMIUM_PAYMENT_MODAL = "premium payment modal", i.PREMIUM_UPSELL_ALERT = "premium upsell alert", i.PREMIUM_UPSELL_MODAL = "premium upsell modal", i.PREMIUM_SETTINGS = "premium settings", i.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", i.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", i.CHANNEL_CALL = "channel call", i.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", i.RTC_PANEL = "rtc panel", i.SOUNDBOARD_BUTTON = "soundboard button", i.SOUNDBOARD_POPOUT = "soundboard popout", i.SOUNDBOARD_WHEEL = "soundboard wheel", i.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", i.GIFT_BUTTON = "gift button", i.EXPRESSION_SUGGESTIONS = "expression suggestions", i.EMOJI_PICKER = "emoji picker", i.STICKER_PICKER = "sticker picker", i.STICKER_POPOUT = "sticker popout", i.PREMIUM_UPSELL = "premium upsell", i.EMPTY_STATE = "empty state", i.SUBSCRIPTION_DETAILS = "subscription details", i.SUBSCRIPTION_HEADER = "subscription header", i.ACCOUNT_CREDIT_BANNER = "account credit banner", i.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", i.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", i.STREAM_QUALITY_INDICATOR = "stream quality indicator", i.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", i.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", i.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", i.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", i.RPC = "rpc", i.BILLING_STANDALONE = "billing standalone", i.GUILD_CHANNEL_LIST = "guild channel list", i.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", i.STICKER_MESSAGE = "sticker message", i.CHANNEL_TEXT_AREA = "channel text area", i.HEADER_BAR = "header bar", i.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", i.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", i.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", i.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", i.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", i.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", i.GUILD_HEADER = "guild header", i.GUILD_BANNER = "guild banner", i.GUILD_BANNER_NOTICE = "guild banner notice", i.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", i.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", i.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", i.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", i.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", i.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", i.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", i.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", i.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", i.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", i.GUILDS_LIST = "guilds list", i.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", i.ACTIVITY_DIRECTORY = "activity directory", i.ACTIVITY_TILE = "activity tile", i.ACTIVITY_UPSELL = "activity upsell", i.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", i.INSTANT_INVITE_MODAL = "instant invite modal", i.IMAGE_CROPPING_MODAL = "image cropping modal", i.GIF_PICKER = "gif picker", i.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", i.INVITE_MODAL = "invite modal", i.INVITE_EMBED = "invite embed", i.NEW_GUILD_BUTTON = "new guild button", i.CHARACTER_COUNT = "character count", i.DM_CHANNEL = "dm channel", i.GUILD_CHANNEL = "guild channel", i.FORUM_CHANNEL = "forum channel", i.FILE_UPLOAD_POPOUT = "file upload popout", i.EMOJI = "emoji", i.PROFILE = "profile", i.PROFILE_MODAL = "profile modal", i.PROFILE_POPOUT = "profile popout", i.GUILD_PROFILE = "guild profile", i.EDIT_AVATAR = "edit avatar", i.EDIT_BANNER = "edit banner", i.CHAT_INPUT = "chat input", i.CREATE_THREAD = "create thread", i.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", i.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", i.SELECT_IMAGE_MODAL = "select image modal", i.VIDEO_BACKGROUND_OPTIONS = "video background options", i.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", i.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", i.CAMERA_PREVIEW = "camera preview", i.HOME_PAGE_PREMIUM_TAB = "home page premium tab", i.HOME_PAGE_SHOP_TAB = "home page shop tab", i.PREMIUM_MARKETING_SURFACE = "premium marketing surface", i.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", i.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", i.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", i.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", i.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", i.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", i.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", i.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", i.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", i.PREMIUM_MARKETING_FEATURE = "premium marketing feature", i.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", i.PREMIUM_MARKETING_FOOTER = "premium marketing footer", i.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", i.CHANNEL_CALL_ACTION_BAR = "channel call action bar", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", i.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", i.VOICE_CONTROL_TRAY = "voice control tray", i.ACTIVE_NOW_COLUMN = "active now column", i.CONTEXT_MENU = "context menu", i.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", i.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", i.CHANNEL_CATEGORY_MENU = "channel category menu", i.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", i.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", i.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", i.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", i.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", i.CHANNEL_TITLE_MENU = "channel title menu", i.GROUP_DM_MENU = "group dm menu", i.AUDIT_LOG_USER_MENU = "audit log user menu", i.BANNED_USER_MENU = "banned user menu", i.DM_USER_MENU = "dm user menu", i.GROUP_DM_USER_MENU = "group dm user menu", i.GUILD_CHANNEL_USER_MENU = "guild channel user menu", i.GUILD_MODERATION_USER_MENU = "guild moderation user menu", i.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", i.GUILD_SETTINGS_USER_MENU = "guild settings user menu", i.GUILD_USER_MENU = "guild user menu", i.THREAD_USER_MENU = "thread user menu", i.USER_GENERIC_MENU = "user generic menu", i.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", i.VOICE_ACTION_SHEET = "voice action sheet", i.FOCUSED_VOICE_CONTROLS = "focused voice controls", i.MASKED_LINK = "masked link", i.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", i.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", i.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", i.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", i.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", i.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", i.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", i.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", i.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", i.ACCOUNT_PROFILE_POPOUT = "account profile popout", i.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", i.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", i.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", i.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", i.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", i.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", i.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", i.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", i.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", i.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", i.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", i.STAGE_VIDEO_LIMIT = "stage video limit", i.ACTIVITIES_MINI_SHELF = "activities mini shelf", i.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", i.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", i.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", i.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", i.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", i.APP_ICON_EDITOR = "app icon editor", i.CLIENT_THEMES_EDITOR = "client themes editor", i.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", i.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", i.SHARE_NITRO_EMBED = "share nitro embed", i.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", i.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", i.REFERRAL_TRIALS_POPOUT = "referral trials popout", i.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", i.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", i.ACTIVITY_BOOKMARK = "activity bookmark", i.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", i.ACTIVITY_DETAIL_PAGE = "activity detail page", i.ACTIVITIES_PAGE = "activities page", i.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", i.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", i.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", i.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", i.ACTIVITIES_HAPPENING_NOW = "activities happening now", i.MEDIA_VIEWER = "media viewer", i.MESSAGE_LONG_PRESS_MENU = "message long press menu", i.COLLECTIBLES_SHOP = "collectibles shop", i.COLLECTIBLES_SHOP_CARD = "collectibles shop card", i.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", i.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", i.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", i.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", i.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", i.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", i.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", i.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", i.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", i.PREMIUM_BILLING_INFO = "premium billing info", i.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", i.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", i.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", i.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", i.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", i.PREMIUM_PLAN_SELECT = "premium_plan_select", i.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", i.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", i.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", i.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", i.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", i.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", i.MEMBER_SAFETY_PAGE = "member safety page", i.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", i.GUILD_MEMBER_MOD_VIEW = "guild member mod view", i.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", i.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", i.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", i.GUILD_SHOP_PAGE = "guild shop page", i.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", i.MESSAGE_REMIX_TAG = "message remix tag", i.MESSAGE_REMIX_BUTTON = "message remix button", i.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", i.CLIPS_SETTINGS = "clips settings", i.CLIPS_GALLERY = "clips gallery", i.CLIPS_GALLERY_ITEM = "clips gallery item", i.CLIPS_EDITOR = "clips editor", i.CLIPS_SHARE_MODAL = "clips share modal", i.CHANNEL_ATTACH_BUTTON = "channel attach button", i.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", i.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", i.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", i.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", i.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", i.GUILD_EVENT_CARD = "guild event card", i.EVENT_SETTINGS = "event settings";
            var i, r, l = r
        },
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("845579"),
                u = n("662255"),
                o = n("306160");

            function a(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: a,
                    shiftId: E,
                    showIconFirst: _
                } = e, s = l.DeveloperMode.useSetting();
                if (__OVERLAY__ || !s || !o.SUPPORTS_COPY) return null;
                let c = "devmode-copy-id-".concat(t);
                return (0, i.jsx)(r.MenuItem, {
                    id: c,
                    label: n,
                    action: function(e) {
                        let n = null != E && e.shiftKey ? E : t;
                        (0, o.copy)(n), null == a || a()
                    },
                    icon: u.default,
                    showIconFirst: _
                }, c)
            }
        },
        700179: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canToggleCommunicationDisableOnUser: function() {
                    return E
                },
                default: function() {
                    return _
                }
            });
            var i = n("446674"),
                r = n("305961"),
                l = n("957255"),
                u = n("697218"),
                o = n("991170"),
                a = n("49111");

            function E(e, t) {
                let [n, i, E] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [u.default, r.default, l.default], _ = i.getGuild(e), s = n.getUser(t);
                if (null == _ || null == s || s.isNonUserBot()) return !1;
                let c = _.isOwner(s) || o.default.can({
                    permission: a.Permissions.ADMINISTRATOR,
                    user: s,
                    context: _
                });
                return !c && E.canManageUser(a.Permissions.MODERATE_MEMBERS, s, _)
            }

            function _(e, t) {
                return (0, i.useStateFromStores)([u.default, r.default, l.default], () => E(e, t, [u.default, r.default, l.default]), [e, t])
            }
        },
        406043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCurrentUserCommunicationDisabled: function() {
                    return o
                },
                default: function() {
                    return _
                },
                userCommunicationDisabled: function() {
                    return s
                }
            });
            var i = n("446674"),
                r = n("26989"),
                l = n("697218"),
                u = n("509");

            function o(e) {
                let t = (0, i.useStateFromStores)([l.default], () => l.default.getCurrentUser());
                return _(null == t ? void 0 : t.id, e)
            }

            function a(e, t, n) {
                return null != t && null != e ? n.getMember(t, e) : null
            }

            function E(e) {
                var t;
                return [null !== (t = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== t ? t : null, (0, u.isMemberCommunicationDisabled)(e)]
            }

            function _(e, t) {
                let n = (0, i.useStateFromStores)([r.default], () => a(e, t, r.default), [t, e]);
                return E(n)
            }

            function s(e, t) {
                let n = a(e, t, r.default);
                return E(n)
            }
        },
        929423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveGuildIdentityChanges: function() {
                    return o
                },
                setCurrentGuild: function() {
                    return a
                },
                initGuildIdentitySettings: function() {
                    return E
                },
                closeGuildIdentitySettings: function() {
                    return _
                },
                resetAndCloseGuildIdentityForm: function() {
                    return s
                },
                setPendingAvatar: function() {
                    return c
                },
                setPendingBanner: function() {
                    return d
                },
                setPendingBio: function() {
                    return I
                },
                setPendingPronouns: function() {
                    return T
                },
                setPendingNickname: function() {
                    return S
                },
                setPendingThemeColors: function() {
                    return N
                },
                resetPendingMemberChanges: function() {
                    return A
                },
                resetPendingProfileChanges: function() {
                    return f
                },
                resetAllPending: function() {
                    return O
                },
                clearErrors: function() {
                    return C
                },
                setDisableSubmit: function() {
                    return R
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("54239"),
                u = n("49111");
            async function o(e, t) {
                let {
                    nick: n,
                    avatar: l
                } = t;
                if (null == e) throw Error("Need guildId");
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await i.default.patch({
                        url: u.Endpoints.SET_GUILD_MEMBER(e),
                        body: {
                            nick: n,
                            avatar: l
                        },
                        oldFormErrors: !0
                    });
                    return r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), r.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: t.body,
                        guildId: e
                    }), t
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: t.body
                    })
                }
            }

            function a(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function E(e, t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function _() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, l.popLayer)()
            }

            function s() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function c(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function d(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function I(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function T(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function S(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function N(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function A() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function f() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function O() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function C() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function R(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let i, r, l, u, o, a, E, _, s;
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var c = n("446674"),
                d = n("913144"),
                I = n("49111");
            let T = I.FormStates.CLOSED,
                S = {},
                N = !1;

            function A() {
                T = I.FormStates.CLOSED, S = {}, E = null, _ = void 0, s = []
            }

            function f() {
                O(), C(), S = {}, T = I.FormStates.OPEN
            }

            function O() {
                i = void 0, o = void 0
            }

            function C() {
                r = void 0, l = void 0, u = void 0, a = void 0
            }
            class R extends c.default.Store {
                getFormState() {
                    return T
                }
                getErrors() {
                    return S
                }
                showNotice() {
                    return void 0 !== i || void 0 !== r || void 0 !== l || void 0 !== u || void 0 !== o || void 0 !== a
                }
                getPendingAvatar() {
                    return i
                }
                getPendingBanner() {
                    return r
                }
                getPendingBio() {
                    return l
                }
                getPendingNickname() {
                    return o
                }
                getPendingPronouns() {
                    return u
                }
                getPendingAccentColor() {
                    return o
                }
                getPendingThemeColors() {
                    return a
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: r,
                        pendingBio: l,
                        pendingPronouns: u,
                        pendingNickname: o,
                        pendingThemeColors: a
                    }
                }
                getGuild() {
                    return E
                }
                getSource() {
                    return _
                }
                getAnalyticsLocations() {
                    return s
                }
                getIsDisableSubmit() {
                    return N
                }
            }
            R.displayName = "GuildIdentitySettingsStore";
            var L = new R(d.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    E = e.guild, T = I.FormStates.OPEN, S = {}, _ = e.source, s = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: A,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    f(), A()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    E = e.guild, S = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    T = I.FormStates.SUBMITTING, S = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (T !== I.FormStates.SUBMITTING) return !1;
                    T = I.FormStates.OPEN, S = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    T = I.FormStates.OPEN, S = e.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    i = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    r = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
                    let {
                        bio: t
                    } = e;
                    l = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    u = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
                    let {
                        nickname: t
                    } = e;
                    o = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    a = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: O,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: C,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: f,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: f,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    S = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    N = t
                }
            })
        },
        130037: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTrackMemberSearchUsed: function() {
                    return I
                },
                useTrackMemberFilterRolesUsed: function() {
                    return T
                },
                MemberSafetyFlagType: function() {
                    return l
                },
                useTrackMemberFilterSafetyFlagsUsed: function() {
                    return S
                },
                ModerationActionType: function() {
                    return u
                },
                useTrackModerationAction: function() {
                    return N
                }
            });
            var i, r, l, u, o = n("884691"),
                a = n("812204"),
                E = n("716241"),
                _ = n("271938"),
                s = n("599110"),
                c = n("49111");

            function d(e, t, n) {
                var i;
                let r = {
                    ...t,
                    ...(0, E.collectGuildAnalyticsMetadata)(null !== (i = t.guild_id) && void 0 !== i ? i : n)
                };
                s.default.track(e, r)
            }

            function I(e) {
                let t = o.useCallback(t => {
                    ! function(e) {
                        let t = {
                            guild_id: e,
                            location: a.default.MEMBER_SAFETY_PAGE
                        };
                        d(c.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, t)
                    }(e)
                }, [e]);
                return t
            }

            function T(e) {
                let t = o.useCallback(t => {
                    ! function(e, t) {
                        let n = {
                            selected_role_count: t.size,
                            guild_id: e,
                            location: a.default.MEMBER_SAFETY_PAGE
                        };
                        d(c.AnalyticEvents.MOD_DASH_FILTER_ROLES, n)
                    }(e, t)
                }, [e]);
                return t
            }(i = l || (l = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", i.COMMUNICATION_DISABLED = "communication_disabled";

            function S(e) {
                let t = o.useCallback(t => {
                    ! function(e, t) {
                        let n = {
                            flag_type: t,
                            guild_id: e,
                            location: a.default.MEMBER_SAFETY_PAGE
                        };
                        d(c.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, n)
                    }(e, t)
                }, [e]);
                return t
            }

            function N(e, t) {
                let {
                    location: n,
                    targetUserId: i,
                    targets: r
                } = t, l = o.useCallback(t => {
                    let l = {
                        action_type: t,
                        mod_user_id: _.default.getId(),
                        guild_id: e,
                        location: n,
                        target_user_id: null != i ? i : void 0,
                        targets: null != r ? r : void 0
                    };
                    d(c.AnalyticEvents.MODERATION_ACTION, l)
                }, [e, n, i, r]);
                return l
            }(r = u || (u = {})).BAN = "ban", r.KICK = "kick", r.MUTE = "mute", r.TIMEOUT = "timeout", r.ADD_ROLE = "add_role", r.REMOVE_ROLE = "remove_role", r.COPY_ID = "copy_id", r.CHANGE_NICKNAME = "change_nickname"
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
                    return d
                }
            });
            var i = n("65597"),
                r = n("862205"),
                l = n("697218"),
                u = n("719923"),
                o = n("782340");
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
                E = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: i,
                        mobileViewAndUseEnabled: r,
                        mobileAndFreemiumCollectEnabled: l
                    } = n, o = u.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: l,
                        collectEnabled: o ? i : l
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
                        config: a.getCurrentConfig({
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
                    }, r = (0, i.default)([l.default], () => l.default.getCurrentUser()), u = a.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: o,
                        showTryPacksModalAndV2Copy: _,
                        collectEnabled: s
                    } = E({
                        user: r,
                        config: u
                    }), c = o && s && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: o,
                        collectEnabled: c,
                        showTryPacksModalAndV2Copy: _
                    }
                },
                c = (0, r.createExperiment)({
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
                            getNewSettingsDescription: () => o.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => o.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => o.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }]
                }),
                d = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = c.useExperiment({
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
                    return a
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
                    return c
                },
                getProfilePreviewField: function() {
                    return d
                },
                showRemoveAvatar: function() {
                    return I
                },
                showRemoveBanner: function() {
                    return T
                }
            });
            var i = n("884691"),
                r = n("152584"),
                l = n("234251"),
                u = n("783142"),
                o = n("26989");

            function a(e) {
                return i.useMemo(() => {
                    let t = o.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let r in t) {
                        var i;
                        let l = t[r],
                            u = null === (i = l[e]) || void 0 === i ? void 0 : i.avatar;
                        null != u && (null == n[u] && (n[u] = []), n[u].push(r))
                    }
                    return null != n ? Object.entries(n).map(e => e[1][0]) : []
                }, [e])
            }

            function E(e, t) {
                (0, u.setPendingBio)(e === t ? void 0 : e)
            }

            function _(e, t) {
                (0, r.setPendingAvatar)(e === t ? void 0 : e)
            }

            function s(e, t) {
                if ((0, l.isEqualAvatarDecoration)(e, null != t ? t : null)) {
                    (0, r.setPendingAvatarDecoration)(void 0);
                    return
                }(0, r.setPendingAvatarDecoration)(e)
            }

            function c(e, t) {
                if (e === t) {
                    (0, r.setPendingProfileEffectID)(void 0);
                    return
                }(0, r.setPendingProfileEffectID)(e)
            }

            function d(e, t, n) {
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

            function I(e, t) {
                return void 0 === e ? null != t : null != e
            }

            function T(e, t) {
                return void 0 === e ? null != t : null != e
            }
        },
        38766: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("884691"),
                r = n("79112"),
                l = n("685665"),
                u = n("929423");
            n("424562");
            var o = n("49111"),
                a = n("397336");

            function E(e) {
                let {
                    guild: t,
                    scrollPosition: n,
                    analyticsLocation: E,
                    analyticsLocations: _,
                    openWithoutBackstack: s = !1
                } = e, {
                    analyticsLocations: c
                } = (0, l.default)(), d = (0, i.useCallback)(() => {
                    null != t && (0, u.initGuildIdentitySettings)(t, null != _ ? _ : c), r.default.open(o.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? a.ProfileCustomizationSubsection.GUILD : a.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: E,
                        analyticsLocations: _,
                        openWithoutBackstack: s
                    })
                }, [t, n, E, _, s, c]);
                return d
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
                    return _
                },
                isSendableSticker: function() {
                    return s
                }
            });
            var i, r, l = n("991170"),
                u = n("719923"),
                o = n("4233"),
                a = n("24373"),
                E = n("49111");
            (i = r || (r = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let _ = (e, t, n) => {
                    if (null == t) return r.NONSENDABLE;
                    let i = u.default.canUseStickersEverywhere(t);
                    if ((0, a.isStandardSticker)(e)) {
                        let {
                            freeStickersEnabled: e
                        } = o.default.getCurrentConfig({
                            location: "c036ff_1"
                        }, {
                            autoTrackExposure: !1
                        });
                        return i || e ? r.SENDABLE : r.SENDABLE_WITH_PREMIUM
                    }
                    if ((0, a.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? r.SENDABLE : null == n.guild_id || l.default.can({
                        permission: E.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? i ? r.SENDABLE : r.SENDABLE_WITH_PREMIUM : r.NONSENDABLE : r.SENDABLE_WITH_BOOSTED_GUILD;
                    return r.NONSENDABLE
                },
                s = (e, t, n) => _(e, t, n) === r.SENDABLE
        },
        865372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var i = n("917351"),
                r = n.n(i),
                l = n("446674"),
                u = n("913144"),
                o = n("80507"),
                a = n("374363"),
                E = n("364685"),
                _ = n("49111"),
                s = n("397336");
            let c = {
                pendingUsages: []
            };
            _.Durations.DAY;
            let d = new o.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => E.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                I = () => {
                    E.default.isLoaded && d.compute()
                },
                T = () => {
                    I()
                };

            function S() {
                var e;
                let t = null === (e = a.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                d.overwriteHistory(r.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), c.pendingUsages)
            }
            class N extends l.default.PersistedStore {
                initialize(e) {
                    this.waitFor(E.default), null != e && (c = e), this.syncWith([E.default], T), this.syncWith([a.default], S)
                }
                getState() {
                    return c
                }
                hasPendingUsage() {
                    return c.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return d
                }
            }
            N.displayName = "StickersPersistedStore", N.persistKey = "StickersPersistedStoreV2";
            var A = new N(u.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        d.track(e), c.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), I()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== s.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    c.pendingUsages = []
                }
            })
        },
        467940: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("446674"),
                u = n("77078"),
                o = n("272030"),
                a = n("838446"),
                E = n("158534"),
                _ = n("997289"),
                s = n("812204"),
                c = n("685665"),
                d = n("861370"),
                I = n("230947"),
                T = n("130037"),
                S = n("26989"),
                N = n("800762"),
                A = n("300925"),
                f = n("489836"),
                O = n("421602"),
                C = n("459870"),
                R = n("325882"),
                L = n("625187"),
                U = n("806179"),
                p = n("97508"),
                m = n("49111"),
                M = n("782340"),
                D = (0, E.default)((0, a.default)(function(e) {
                    var t;
                    let {
                        user: n,
                        guildId: a,
                        channelId: E,
                        context: m,
                        onSelect: D,
                        moderationAlertId: P,
                        analyticsLocation: g,
                        analyticsLocations: G,
                        onCloseContextMenu: h
                    } = e, {
                        analyticsLocations: v
                    } = (0, c.default)(s.default.CONTEXT_MENU), b = (0, _.useAnalyticsContext)(), y = null !== (t = null == G ? void 0 : G[0]) && void 0 !== t ? t : v[0], B = (0, T.useTrackModerationAction)(a, {
                        location: y,
                        targetUserId: n.id
                    }), F = (0, l.useStateFromStores)([N.default], () => {
                        var e;
                        return null !== (e = N.default.getUserVoiceChannelId(a, n.id)) && void 0 !== e ? e : void 0
                    }, [a, n.id]), V = r.useCallback(() => {
                        B(T.ModerationActionType.COPY_ID)
                    }, [B]), k = (0, l.useStateFromStores)([S.default], () => S.default.isMember(a, n.id), [a, n.id]), H = (0, U.default)(n.id, a), w = (0, O.default)(n.id, m), Y = (0, I.default)({
                        guildId: a,
                        userId: n.id,
                        analyticsLocation: null != g ? g : b.location,
                        analyticsLocations: [y],
                        context: m
                    }), x = (0, f.default)(n, y), K = (0, A.default)(n, a, null != E ? E : F, y), W = (0, R.default)(E, P), j = (0, L.default)(n, a), X = (0, p.default)(n.id, a, !1, y), q = (0, d.default)({
                        id: n.id,
                        label: M.default.Messages.COPY_ID_USER,
                        onSuccess: V
                    }), z = (0, C.default)(n, a), J = !!(null == n ? void 0 : n.isNonUserBot());
                    return (0, i.jsxs)(u.Menu, {
                        navId: "user-context",
                        onClose: () => {
                            (0, o.closeContextMenu)(), null == h || h()
                        },
                        "aria-label": M.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: D,
                        children: [!J && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)(u.MenuGroup, {
                                children: [H, w]
                            }), (0, i.jsxs)(u.MenuGroup, {
                                children: [Y, x]
                            }), k && (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(u.MenuGroup, {
                                    children: K
                                }), (0, i.jsxs)(u.MenuGroup, {
                                    children: [X, z]
                                })]
                            }), null != P ? W : null, null != j ? (0, i.jsx)(u.MenuGroup, {
                                children: j
                            }) : null]
                        }), (0, i.jsx)(u.MenuGroup, {
                            children: q
                        })]
                    })
                }, {
                    object: m.AnalyticsObjects.CONTEXT_MENU
                }), [s.default.CONTEXT_MENU, s.default.GUILD_MODERATION_USER_MENU])
        },
        489836: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("446674"),
                l = n("77078"),
                u = n("736964"),
                o = n("27618"),
                a = n("697218"),
                E = n("49111"),
                _ = n("782340");

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ContextMenu",
                    {
                        id: n
                    } = e,
                    s = (0, r.useStateFromStores)([a.default], () => {
                        var e;
                        return (null === (e = a.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === n
                    }, [n]),
                    c = (0, r.useStateFromStores)([o.default], () => o.default.isBlocked(n), [n]);
                if (s) return null;

                function d() {
                    u.default.addRelationship({
                        userId: n,
                        context: {
                            location: t
                        },
                        type: E.RelationshipTypes.BLOCKED
                    })
                }
                return (0, i.jsx)(l.MenuItem, {
                    id: "block",
                    label: c ? _.default.Messages.UNBLOCK : _.default.Messages.BLOCK,
                    action: () => c ? u.default.unblockUser(n, {
                        location: t
                    }) : (0, l.openModal)(t => (0, i.jsx)(l.ConfirmModal, {
                        header: _.default.Messages.CONFIRM_USER_BLOCK_TITLE.format({
                            name: e.username
                        }),
                        confirmText: _.default.Messages.BLOCK,
                        cancelText: _.default.Messages.CANCEL,
                        onConfirm: d,
                        ...t,
                        children: (0, i.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children: _.default.Messages.CONFIRM_USER_BLOCK_BODY.format({
                                name: e.username
                            })
                        })
                    }))
                })
            }
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
            var r = n("77078"),
                l = n("450911"),
                u = n("54239"),
                o = n("271938"),
                a = n("49111"),
                E = n("782340");

            function _(e, t) {
                let n = o.default.getId(),
                    _ = t === a.AppContext.POPOUT;
                return n === e || _ ? null : (0, i.jsx)(r.MenuItem, {
                    id: "message-user",
                    label: E.default.Messages.USER_POPOUT_MESSAGE,
                    action: () => {
                        l.default.openPrivateChannel(e), (0, u.popLayer)()
                    }
                })
            }
        },
        459870: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("446674"),
                l = n("77078"),
                u = n("851387"),
                o = n("987317"),
                a = n("679653"),
                E = n("271938"),
                _ = n("42203"),
                s = n("923959"),
                c = n("26989"),
                d = n("305961"),
                I = n("957255"),
                T = n("27618"),
                S = n("697218"),
                N = n("800762"),
                A = n("404008"),
                f = n("991170"),
                O = n("49111"),
                C = n("782340");

            function R(e, t) {
                let n = (0, r.useStateFromStores)([s.default], () => s.default.getChannels(t)[s.GUILD_VOCAL_CHANNELS_KEY], [t]),
                    R = (0, r.useStateFromStores)([N.default, _.default], () => {
                        let n = N.default.getUserVoiceChannelId(t, e.id);
                        return _.default.getChannel(n)
                    }, [t, e.id]),
                    L = (0, r.useStateFromStores)([c.default], () => c.default.isGuestOrLurker(t, e.id), [t, e.id]);
                if (L || null == R) return null;
                let U = e.id === E.default.getId();
                if (!U && !I.default.can(O.Permissions.MOVE_MEMBERS, R)) return null;
                let p = n.filter(t => {
                    let {
                        channel: n
                    } = t;
                    return n.id !== R.id && (U ? I.default.can(O.Permissions.CONNECT, n) && !(0, A.isChannelFull)(n, N.default, d.default) : I.default.can(O.Permissions.MOVE_MEMBERS, n) && (I.default.can(O.Permissions.CONNECT, n) || f.default.can({
                        permission: O.Permissions.CONNECT,
                        user: e,
                        context: n
                    })) && !(0, A.isChannelFull)(n, N.default, d.default))
                });
                return 0 === p.length ? null : (0, i.jsx)(l.MenuItem, {
                    id: "voice-move",
                    label: C.default.Messages.MOVE_TO,
                    children: p.map(n => {
                        let {
                            channel: r
                        } = n;
                        return (0, i.jsx)(l.MenuItem, {
                            id: r.id,
                            action: () => {
                                var n;
                                return n = r, void(e.id === E.default.getId() ? o.default.selectVoiceChannel(n.id) : u.default.setChannel(t, e.id, n.id))
                            },
                            label: (0, a.computeChannelName)(r, S.default, T.default)
                        }, r.id)
                    })
                })
            }
        },
        325882: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("446674"),
                l = n("77078"),
                u = n("228944"),
                o = n("201131"),
                a = n("702873"),
                E = n("42203"),
                _ = n("377253"),
                s = n("957255"),
                c = n("49111"),
                d = n("782340");

            function I(e, t) {
                let n = (0, r.useStateFromStores)([s.default], () => null != e && s.default.canWithPartialContext(c.Permissions.MANAGE_MESSAGES, {
                        channelId: e
                    }), [e]),
                    I = (0, r.useStateFromStores)([E.default], () => E.default.getChannel(e), [e]),
                    T = (0, r.useStateFromStores)([_.default], () => null != e && null != t ? _.default.getMessage(e, t) : null),
                    S = (0, o.useAutomodAlertActions)(null != T ? T : null);
                if (null == I || null == T) return null;
                let N = null != S && S.actions.hasOwnProperty(u.AutomodAlertActionType.SET_COMPLETED) ? u.AutomodAlertActionType.UNSET_COMPLETED : u.AutomodAlertActionType.SET_COMPLETED,
                    A = N === u.AutomodAlertActionType.SET_COMPLETED ? d.default.Messages.GUILD_AUTOMOD_ALERT_SET_COMPLETED : d.default.Messages.GUILD_AUTOMOD_ALERT_UNSET_COMPLETED;
                return n && null != t ? (0, i.jsx)(l.MenuItem, {
                    id: "mark-automod-alert-completed",
                    label: A,
                    action: () => {
                        (0, a.executeAlertAction)(t, I, N)
                    }
                }, "mark-automod-alert-completed") : null
            }
        },
        625187: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("446674"),
                l = n("77078"),
                u = n("305961"),
                o = n("697218"),
                a = n("782340");

            function E(e, t) {
                let E = (0, r.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
                    _ = (0, r.useStateFromStores)([u.default], () => u.default.getGuild(t));
                return null == _ || null == E || e.id === _.ownerId || e.bot || !_.isOwnerWithRequiredMfaLevel(E) ? null : (0, i.jsx)(l.MenuItem, {
                    id: "transfer-ownership",
                    color: "danger",
                    label: a.default.Messages.TRANSFER_OWNERSHIP,
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("878551").then(n.bind(n, "878551"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            guild: _,
                            fromUser: E,
                            toUser: e
                        })
                    })
                })
            }
        },
        806179: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("77078"),
                u = n("244201"),
                o = n("401642"),
                a = n("599110"),
                E = n("49111"),
                _ = n("782340");

            function s(e, t, n) {
                let s = r.useContext(a.AnalyticsContext),
                    c = (0, u.useWindowDispatch)();
                return (0, i.jsx)(l.MenuItem, {
                    id: "user-profile",
                    label: _.default.Messages.PROFILE,
                    action: () => {
                        (0, o.openUserProfileModal)({
                            userId: e,
                            guildId: null != t ? t : void 0,
                            channelId: null != n ? n : void 0,
                            analyticsLocation: s.location
                        }), c.dispatch(E.ComponentActions.POPOUT_CLOSE)
                    }
                })
            }
        },
        783142: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveProfileChanges: function() {
                    return d
                },
                handleProfileAccessibilityTooltipViewed: function() {
                    return I
                },
                resetPendingProfileChanges: function() {
                    return T
                },
                setPendingBanner: function() {
                    return S
                },
                setPendingBio: function() {
                    return N
                },
                setPendingPronouns: function() {
                    return A
                },
                setPendingAccentColor: function() {
                    return f
                },
                setPendingThemeColors: function() {
                    return O
                },
                setTryItOutAvatar: function() {
                    return C
                },
                setTryItOutAvatarDecoration: function() {
                    return R
                },
                setTryItOutBanner: function() {
                    return L
                },
                setTryItOutThemeColors: function() {
                    return U
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("448993"),
                u = n("884351"),
                o = n("845579"),
                a = n("697218"),
                E = n("599110"),
                _ = n("49111"),
                s = n("646718");

            function c(e) {
                E.default.track(_.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: e,
                    feature_tier: s.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }
            async function d(e, t) {
                var n, E;
                let s = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == s) return;
                let c = o.UseLegacyChatInput.getSetting();
                null != e.bio && c && (e.bio = u.default.parse(void 0, e.bio).content);
                try {
                    r.default.dispatch({
                        type: "USER_PROFILE_UPDATE_START",
                        userId: s
                    });
                    let n = await i.default.patch({
                        url: null != t ? _.Endpoints.GUILD_PROFILE(t, _.ME) : _.Endpoints.USER_PROFILE(_.ME),
                        body: e
                    });
                    if (n.ok) {
                        let e = null === (E = n.body.profile_effect) || void 0 === E ? void 0 : E.id;
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_SUCCESS",
                            userId: s,
                            profileEffectID: e,
                            ...n.body
                        })
                    } else {
                        let e = new l.APIError(n);
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: n.body,
                            apiError: e
                        })
                    }
                    return n
                } catch (t) {
                    let e = new l.APIError(t);
                    r.default.dispatch({
                        type: "USER_PROFILE_UPDATE_FAILURE",
                        errors: {},
                        apiError: e
                    })
                }
            }

            function I() {
                r.default.dispatch({
                    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
                })
            }

            function T() {
                r.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function S(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function N(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: e
                })
            }

            function A(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function f(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: e
                })
            }

            function O(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function C(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: e
                }), c(s.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function R(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: e
                }), c(s.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function L(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: e
                }), c(s.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function U(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: e
                }), c(s.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        401642: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openUserProfileModal: function() {
                    return a
                },
                closeUserProfileModal: function() {
                    return E
                }
            });
            var i = n("913144"),
                r = n("327037"),
                l = n("697218"),
                u = n("506885"),
                o = n("49111");

            function a(e) {
                let {
                    userId: t,
                    section: n,
                    guildId: a = o.ME,
                    channelId: E,
                    friendToken: _,
                    autoFocusNote: s,
                    analyticsLocation: c
                } = e, d = l.default.getUser(t), I = a !== o.ME ? a : void 0;
                if (null == d) return (0, r.fetchProfile)(t, {
                    friendToken: _,
                    guildId: I
                }).then(() => {
                    i.default.dispatch({
                        type: "USER_PROFILE_MODAL_OPEN",
                        userId: t,
                        section: n,
                        guildId: a,
                        channelId: E,
                        friendToken: _,
                        autoFocusNote: s,
                        analyticsLocation: c
                    })
                });
                (0, u.default)(t, d.getAvatarURL(void 0, 80), {
                    withMutualGuilds: !0,
                    friendToken: _,
                    guildId: I
                }), i.default.dispatch({
                    type: "USER_PROFILE_MODAL_OPEN",
                    userId: t,
                    section: n,
                    guildId: a,
                    channelId: E,
                    friendToken: _,
                    autoFocusNote: s,
                    analyticsLocation: c
                })
            }

            function E() {
                i.default.dispatch({
                    type: "USER_PROFILE_MODAL_CLOSE"
                })
            }
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return u
                },
                copy: function() {
                    return o
                }
            });
            var i = n("281071"),
                r = n("773336"),
                l = n("50885");
            let u = (() => {
                if (r.isPlatformEmbedded) return null != l.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function o(e) {
                return !!u && (r.isPlatformEmbedded ? (l.default.copy(e), !0) : i.copy(e))
            }
        }
    }
]);
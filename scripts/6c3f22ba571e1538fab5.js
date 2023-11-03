(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["15765"], {
        448105: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    i = e.length;
                if (i > n) return !1;
                if (i === n) return e === t;
                e: for (var l = 0, r = 0; l < i; l++) {
                    for (var o = e.charCodeAt(l); r < n;)
                        if (t.charCodeAt(r++) === o) continue e;
                    return !1
                }
                return !0
            }
        },
        666020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                subscribeMembers: function() {
                    return r
                },
                unsubscribeMembers: function() {
                    return o
                },
                subscribeChannel: function() {
                    return u
                },
                subscribeChannelDimensions: function() {
                    return a
                }
            });
            var i = n("913144"),
                l = n("696605");

            function r(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function o(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function u(e, t, n) {
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
                    height: r,
                    rowHeight: o
                } = e;

                function a(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / o)) + t)
                }
                let E = [];

                function _(e) {
                    let t = e + (l.MINIMUM_RANGE - 1);
                    return E.push([e, t]), t + 1
                }
                let s = a(.5 * r),
                    c = a(i, -s),
                    d = a(i + r, s);
                for (c > 0 && (c = Math.max(_(0), c)), c = Math.floor(c / l.MINIMUM_RANGE) * l.MINIMUM_RANGE; c <= d;) c = _(c);
                u(t, n, E)
            }
        },
        152584: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                accountDetailsInit: function() {
                    return I
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
                    return g
                },
                resetAndCloseUserProfileForm: function() {
                    return D
                },
                setDisableSubmit: function() {
                    return P
                }
            });
            var i = n("872717"),
                l = n("95410"),
                r = n("819855"),
                o = n("913144"),
                u = n("393414"),
                a = n("599110"),
                E = n("315102"),
                _ = n("730622"),
                s = n("437822"),
                c = n("49111"),
                d = n("191349"),
                T = n("782340");

            function I() {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function S() {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function N(e, t) {
                let n = t ? T.default.Messages.DELETE_ACCOUNT : T.default.Messages.DISABLE_ACCOUNT,
                    l = t ? c.Endpoints.DELETE_ACCOUNT : c.Endpoints.DISABLE_ACCOUNT;
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
                    s.default.logoutInternal(), (0, u.transitionTo)(c.Routes.DEFAULT_LOGGED_OUT)
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

            function f(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: i,
                    emailToken: r,
                    password: u,
                    avatar: s,
                    avatarDecoration: I,
                    newPassword: S,
                    globalName: N
                } = e;
                return o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, _.default)(e => {
                    let o = {
                        username: t,
                        email: i,
                        email_token: r,
                        password: u,
                        avatar: s,
                        discriminator: n,
                        global_name: N,
                        new_password: S,
                        ...e
                    };
                    null === I && (o.avatar_decoration_id = null), null != I && (o.avatar_decoration_id = I.id, o.avatar_decoration_sku_id = I.skuId);
                    let a = l.default.get(c.DEVICE_TOKEN),
                        E = (0, d.getDevicePushProvider)();
                    null != E && null != a && (o.push_provider = E, o.push_token = a);
                    let _ = l.default.get(c.DEVICE_VOIP_TOKEN);
                    return null != d.DEVICE_PUSH_VOIP_PROVIDER && null != _ && (o.push_voip_provider = d.DEVICE_PUSH_VOIP_PROVIDER, o.push_voip_token = _), A(o)
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
                    return a.default.track(c.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, E.isAnimatedIconHash)(t.avatar)
                    }), o.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (o.default.dispatch({
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
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? r.AccessibilityAnnouncer.announce(T.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : r.AccessibilityAnnouncer.announce(T.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function L(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function U(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function p(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: e
                })
            }

            function m() {
                o.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function M() {
                o.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function g() {
                o.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function D() {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function P(e) {
                o.default.dispatch({
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
                l = n("884691"),
                r = n("748820"),
                o = n("599110"),
                u = n("117362"),
                a = n("49111");
            class E extends l.Component {
                renderProvider(e) {
                    var t, n;
                    let {
                        section: l,
                        page: r,
                        object: u,
                        objectType: a,
                        children: E
                    } = this.props, _ = this.mergeLocation(e.location, this.getLocation(r, l, u, a)), s = this.getContext(_, null !== (t = this._loadDate) && void 0 !== t ? t : e.loadDate, null !== (n = this._loadId) && void 0 !== n ? n : e.loadId);
                    return (0, i.jsx)(o.AnalyticsContext.Provider, {
                        value: s,
                        children: E
                    })
                }
                render() {
                    let {
                        context: e
                    } = this.props;
                    return null != e ? this.renderProvider(e) : (0, i.jsx)(o.AnalyticsContext.Consumer, {
                        children: e => this.renderProvider(e)
                    })
                }
                constructor(e) {
                    super(e), this._loadId = null, this._loadDate = this.props.root ? Date.now() : null, this.getLocation = (0, u.cachedFunction)((e, t, n, i) => {
                        let l = {};
                        return null != e && (l.page = e), null != t && (l.section = t), null != n && (l.object = n), null != i && (l.objectType = i), l
                    }), this.mergeLocation = (0, u.cachedFunction)((e, t) => ({
                        ...e,
                        ...t
                    })), this.getContext = (0, u.cachedFunction)((e, t, n) => ({
                        location: e,
                        loadDate: t,
                        loadId: n
                    })), null != e.loadId ? this._loadId = e.loadId : e.root && (this._loadId = (0, r.v4)())
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
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("901582");

            function r(e, t) {
                return function(n) {
                    return (0, i.jsx)(l.default, {
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
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("685665");

            function r(e, t) {
                return function(n) {
                    let {
                        AnalyticsLocationProvider: r
                    } = (0, l.default)(t);
                    return (0, i.jsx)(r, {
                        children: (0, i.jsx)(e, {
                            ...n
                        })
                    })
                }
            }
        },
        35647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IdIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M15.298 14.48c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        className: u
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Z",
                        clipRule: "evenodd",
                        className: u
                    })]
                })
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return r
                }
            });
            var i = n("884691"),
                l = n("599110");
            let r = () => i.useContext(l.AnalyticsContext)
        },
        750560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return u
                }
            }), n("37983");
            var i = n("884691"),
                l = n("917351"),
                r = n.n(l);
            n("233736");
            var o = n("666020");

            function u(e) {
                i.useEffect(() => (r.forEach(e, (e, t) => (0, o.subscribeMembers)(t, e)), () => {
                    r.forEach(e, (e, t) => (0, o.unsubscribeMembers)(t, e))
                }), [e])
            }
        },
        812204: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), (i = l || (l = {})).POPOUT_WINDOW = "popout window", i.OVERLAY = "overlay", i.NOTICE = "notice", i.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", i.BADGE = "badge", i.USER_SETTINGS = "user settings", i.USER_SETTINGS_MENU = "user settings menu", i.ACCOUNT = "account", i.TEXT_AND_IMAGES = "text and images", i.GUILD_SETTINGS = "guild settings", i.OVERVIEW = "overview", i.STICKERS = "stickers", i.VANITY_URL = "vanity url", i.PREMIUM_MARKETING = "premium marketing", i.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", i.PREMIUM_PAYMENT_MODAL = "premium payment modal", i.PREMIUM_UPSELL_ALERT = "premium upsell alert", i.PREMIUM_UPSELL_MODAL = "premium upsell modal", i.PREMIUM_SETTINGS = "premium settings", i.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", i.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", i.CHANNEL_CALL = "channel call", i.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", i.RTC_PANEL = "rtc panel", i.SOUNDBOARD_BUTTON = "soundboard button", i.SOUNDBOARD_POPOUT = "soundboard popout", i.SOUNDBOARD_WHEEL = "soundboard wheel", i.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", i.GIFT_BUTTON = "gift button", i.EXPRESSION_SUGGESTIONS = "expression suggestions", i.EMOJI_PICKER = "emoji picker", i.STICKER_PICKER = "sticker picker", i.STICKER_POPOUT = "sticker popout", i.PREMIUM_UPSELL = "premium upsell", i.EMPTY_STATE = "empty state", i.SUBSCRIPTION_DETAILS = "subscription details", i.SUBSCRIPTION_HEADER = "subscription header", i.ACCOUNT_CREDIT_BANNER = "account credit banner", i.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", i.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", i.STREAM_QUALITY_INDICATOR = "stream quality indicator", i.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", i.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", i.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", i.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", i.RPC = "rpc", i.BILLING_STANDALONE = "billing standalone", i.GUILD_CHANNEL_LIST = "guild channel list", i.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", i.STICKER_MESSAGE = "sticker message", i.CHANNEL_TEXT_AREA = "channel text area", i.HEADER_BAR = "header bar", i.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", i.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", i.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", i.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", i.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", i.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", i.GUILD_HEADER = "guild header", i.GUILD_BANNER = "guild banner", i.GUILD_BANNER_NOTICE = "guild banner notice", i.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", i.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", i.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", i.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", i.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", i.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", i.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", i.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", i.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", i.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", i.GUILDS_LIST = "guilds list", i.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", i.ACTIVITY_DIRECTORY = "activity directory", i.ACTIVITY_TILE = "activity tile", i.ACTIVITY_UPSELL = "activity upsell", i.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", i.INSTANT_INVITE_MODAL = "instant invite modal", i.IMAGE_CROPPING_MODAL = "image cropping modal", i.GIF_PICKER = "gif picker", i.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", i.INVITE_MODAL = "invite modal", i.INVITE_EMBED = "invite embed", i.NEW_GUILD_BUTTON = "new guild button", i.CHARACTER_COUNT = "character count", i.DM_CHANNEL = "dm channel", i.GUILD_CHANNEL = "guild channel", i.FORUM_CHANNEL = "forum channel", i.FILE_UPLOAD_POPOUT = "file upload popout", i.EMOJI = "emoji", i.PROFILE = "profile", i.PROFILE_MODAL = "profile modal", i.PROFILE_POPOUT = "profile popout", i.GUILD_PROFILE = "guild profile", i.EDIT_AVATAR = "edit avatar", i.EDIT_BANNER = "edit banner", i.CHAT_INPUT = "chat input", i.CREATE_THREAD = "create thread", i.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", i.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", i.SELECT_IMAGE_MODAL = "select image modal", i.VIDEO_BACKGROUND_OPTIONS = "video background options", i.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", i.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", i.CAMERA_PREVIEW = "camera preview", i.HOME_PAGE_PREMIUM_TAB = "home page premium tab", i.HOME_PAGE_SHOP_TAB = "home page shop tab", i.PREMIUM_MARKETING_SURFACE = "premium marketing surface", i.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", i.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", i.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", i.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", i.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", i.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", i.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", i.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", i.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", i.PREMIUM_MARKETING_FEATURE = "premium marketing feature", i.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", i.PREMIUM_MARKETING_FOOTER = "premium marketing footer", i.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", i.CHANNEL_CALL_ACTION_BAR = "channel call action bar", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", i.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", i.VOICE_CONTROL_TRAY = "voice control tray", i.ACTIVE_NOW_COLUMN = "active now column", i.CONTEXT_MENU = "context menu", i.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", i.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", i.CHANNEL_CATEGORY_MENU = "channel category menu", i.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", i.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", i.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", i.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", i.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", i.CHANNEL_TITLE_MENU = "channel title menu", i.GROUP_DM_MENU = "group dm menu", i.AUDIT_LOG_USER_MENU = "audit log user menu", i.BANNED_USER_MENU = "banned user menu", i.DM_USER_MENU = "dm user menu", i.GROUP_DM_USER_MENU = "group dm user menu", i.GUILD_CHANNEL_USER_MENU = "guild channel user menu", i.GUILD_MODERATION_USER_MENU = "guild moderation user menu", i.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", i.GUILD_SETTINGS_USER_MENU = "guild settings user menu", i.GUILD_USER_MENU = "guild user menu", i.THREAD_USER_MENU = "thread user menu", i.USER_GENERIC_MENU = "user generic menu", i.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", i.VOICE_ACTION_SHEET = "voice action sheet", i.FOCUSED_VOICE_CONTROLS = "focused voice controls", i.MASKED_LINK = "masked link", i.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", i.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", i.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", i.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", i.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", i.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", i.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", i.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", i.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", i.ACCOUNT_PROFILE_POPOUT = "account profile popout", i.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", i.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", i.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", i.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", i.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", i.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", i.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", i.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", i.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", i.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", i.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", i.STAGE_VIDEO_LIMIT = "stage video limit", i.ACTIVITIES_MINI_SHELF = "activities mini shelf", i.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", i.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", i.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", i.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", i.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", i.APP_ICON_EDITOR = "app icon editor", i.CLIENT_THEMES_EDITOR = "client themes editor", i.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", i.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", i.SHARE_NITRO_EMBED = "share nitro embed", i.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", i.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", i.REFERRAL_TRIALS_POPOUT = "referral trials popout", i.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", i.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", i.ACTIVITY_BOOKMARK = "activity bookmark", i.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", i.ACTIVITY_DETAIL_PAGE = "activity detail page", i.ACTIVITIES_PAGE = "activities page", i.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", i.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", i.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", i.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", i.ACTIVITIES_HAPPENING_NOW = "activities happening now", i.MEDIA_VIEWER = "media viewer", i.MESSAGE_LONG_PRESS_MENU = "message long press menu", i.COLLECTIBLES_SHOP = "collectibles shop", i.COLLECTIBLES_SHOP_CARD = "collectibles shop card", i.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", i.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", i.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", i.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", i.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", i.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", i.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", i.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", i.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", i.PREMIUM_BILLING_INFO = "premium billing info", i.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", i.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", i.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", i.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", i.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", i.PREMIUM_PLAN_SELECT = "premium_plan_select", i.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", i.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", i.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", i.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", i.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", i.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", i.MEMBER_SAFETY_PAGE = "member safety page", i.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", i.GUILD_MEMBER_MOD_VIEW = "guild member mod view", i.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", i.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", i.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", i.GUILD_SHOP_PAGE = "guild shop page", i.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", i.MESSAGE_REMIX_TAG = "message remix tag", i.MESSAGE_REMIX_BUTTON = "message remix button", i.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", i.CLIPS_SETTINGS = "clips settings", i.CLIPS_GALLERY = "clips gallery", i.CLIPS_GALLERY_ITEM = "clips gallery item", i.CLIPS_EDITOR = "clips editor", i.CLIPS_SHARE_MODAL = "clips share modal", i.CHANNEL_ATTACH_BUTTON = "channel attach button", i.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", i.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", i.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", i.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", i.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", i.GUILD_EVENT_CARD = "guild event card", i.EVENT_SETTINGS = "event settings";
            var i, l, r = l
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
            var l = n("77078"),
                r = n("845579"),
                o = n("662255"),
                u = n("306160");

            function a(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: a,
                    shiftId: E,
                    showIconFirst: _
                } = e, s = r.DeveloperMode.useSetting();
                if (__OVERLAY__ || !s || !u.SUPPORTS_COPY) return null;
                let c = "devmode-copy-id-".concat(t);
                return (0, i.jsx)(l.MenuItem, {
                    id: c,
                    label: n,
                    action: function(e) {
                        let n = null != E && e.shiftKey ? E : t;
                        (0, u.copy)(n), null == a || a()
                    },
                    icon: o.default,
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
                l = n("305961"),
                r = n("957255"),
                o = n("697218"),
                u = n("991170"),
                a = n("49111");

            function E(e, t) {
                let [n, i, E] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.default, l.default, r.default], _ = i.getGuild(e), s = n.getUser(t);
                if (null == _ || null == s || s.isNonUserBot()) return !1;
                let c = _.isOwner(s) || u.default.can({
                    permission: a.Permissions.ADMINISTRATOR,
                    user: s,
                    context: _
                });
                return !c && E.canManageUser(a.Permissions.MODERATE_MEMBERS, s, _)
            }

            function _(e, t) {
                return (0, i.useStateFromStores)([o.default, l.default, r.default], () => E(e, t, [o.default, l.default, r.default]), [e, t])
            }
        },
        406043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCurrentUserCommunicationDisabled: function() {
                    return u
                },
                default: function() {
                    return _
                },
                userCommunicationDisabled: function() {
                    return s
                }
            });
            var i = n("446674"),
                l = n("26989"),
                r = n("697218"),
                o = n("509");

            function u(e) {
                let t = (0, i.useStateFromStores)([r.default], () => r.default.getCurrentUser());
                return _(null == t ? void 0 : t.id, e)
            }

            function a(e, t, n) {
                return null != t && null != e ? n.getMember(t, e) : null
            }

            function E(e) {
                var t;
                return [null !== (t = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== t ? t : null, (0, o.isMemberCommunicationDisabled)(e)]
            }

            function _(e, t) {
                let n = (0, i.useStateFromStores)([l.default], () => a(e, t, l.default), [t, e]);
                return E(n)
            }

            function s(e, t) {
                let n = a(e, t, l.default);
                return E(n)
            }
        },
        929423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveGuildIdentityChanges: function() {
                    return u
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
                    return T
                },
                setPendingPronouns: function() {
                    return I
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
                l = n("913144"),
                r = n("54239"),
                o = n("49111");
            async function u(e, t) {
                let {
                    nick: n,
                    avatar: r
                } = t;
                if (null == e) throw Error("Need guildId");
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await i.default.patch({
                        url: o.Endpoints.SET_GUILD_MEMBER(e),
                        body: {
                            nick: n,
                            avatar: r
                        },
                        oldFormErrors: !0
                    });
                    return l.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), l.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: t.body,
                        guildId: e
                    }), t
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), l.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: t.body
                    })
                }
            }

            function a(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function E(e, t) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function _() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, r.popLayer)()
            }

            function s() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function c(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function d(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function T(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function I(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function S(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function N(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function A() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function f() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function O() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function C() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function R(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let i, l, r, o, u, a, E, _, s;
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var c = n("446674"),
                d = n("913144"),
                T = n("49111");
            let I = T.FormStates.CLOSED,
                S = {},
                N = !1;

            function A() {
                I = T.FormStates.CLOSED, S = {}, E = null, _ = void 0, s = []
            }

            function f() {
                O(), C(), S = {}, I = T.FormStates.OPEN
            }

            function O() {
                i = void 0, u = void 0
            }

            function C() {
                l = void 0, r = void 0, o = void 0, a = void 0
            }
            class R extends c.default.Store {
                getFormState() {
                    return I
                }
                getErrors() {
                    return S
                }
                showNotice() {
                    return void 0 !== i || void 0 !== l || void 0 !== r || void 0 !== o || void 0 !== u || void 0 !== a
                }
                getPendingAvatar() {
                    return i
                }
                getPendingBanner() {
                    return l
                }
                getPendingBio() {
                    return r
                }
                getPendingNickname() {
                    return u
                }
                getPendingPronouns() {
                    return o
                }
                getPendingAccentColor() {
                    return u
                }
                getPendingThemeColors() {
                    return a
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: l,
                        pendingBio: r,
                        pendingPronouns: o,
                        pendingNickname: u,
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
                    E = e.guild, I = T.FormStates.OPEN, S = {}, _ = e.source, s = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: A,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    f(), A()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    E = e.guild, S = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    I = T.FormStates.SUBMITTING, S = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (I !== T.FormStates.SUBMITTING) return !1;
                    I = T.FormStates.OPEN, S = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    I = T.FormStates.OPEN, S = e.errors
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
                    l = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
                    let {
                        bio: t
                    } = e;
                    r = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    o = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
                    let {
                        nickname: t
                    } = e;
                    u = t
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
                    return T
                },
                useTrackMemberFilterRolesUsed: function() {
                    return I
                },
                MemberSafetyFlagType: function() {
                    return r
                },
                useTrackMemberFilterSafetyFlagsUsed: function() {
                    return S
                },
                ModerationActionType: function() {
                    return o
                },
                useTrackModerationAction: function() {
                    return N
                }
            });
            var i, l, r, o, u = n("884691"),
                a = n("812204"),
                E = n("716241"),
                _ = n("271938"),
                s = n("599110"),
                c = n("49111");

            function d(e, t, n) {
                var i;
                let l = {
                    ...t,
                    ...(0, E.collectGuildAnalyticsMetadata)(null !== (i = t.guild_id) && void 0 !== i ? i : n)
                };
                s.default.track(e, l)
            }

            function T(e) {
                let t = u.useCallback(t => {
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

            function I(e) {
                let t = u.useCallback(t => {
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
            }(i = r || (r = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", i.COMMUNICATION_DISABLED = "communication_disabled";

            function S(e) {
                let t = u.useCallback(t => {
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
                    targets: l
                } = t, r = u.useCallback(t => {
                    let r = {
                        action_type: t,
                        mod_user_id: _.default.getId(),
                        guild_id: e,
                        location: n,
                        target_user_id: null != i ? i : void 0,
                        targets: null != l ? l : void 0
                    };
                    d(c.AnalyticEvents.MODERATION_ACTION, r)
                }, [e, n, i, l]);
                return r
            }(l = o || (o = {})).BAN = "ban", l.KICK = "kick", l.MUTE = "mute", l.TIMEOUT = "timeout", l.ADD_ROLE = "add_role", l.REMOVE_ROLE = "remove_role", l.COPY_ID = "copy_id", l.CHANGE_NICKNAME = "change_nickname"
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
                l = n("862205"),
                r = n("697218"),
                o = n("719923"),
                u = n("782340");
            let a = (0, l.createExperiment)({
                    kind: "user",
                    id: "2023-05_inventory_guild_packs",
                    label: "Inventory Guild Packs Experiment",
                    defaultConfig: {
                        desktopViewAndUseAndCollectEnabled: !1,
                        mobileViewAndUseEnabled: !1,
                        mobileAndFreemiumCollectEnabled: !1,
                        autoUnfurlReactionTooltip: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Desktop view/use/collect",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1
                        }
                    }, {
                        id: 2,
                        label: "Desktop view/use/collect and mobile view/use",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1
                        }
                    }, {
                        id: 3,
                        label: "Read-only pack emoji for logged out users",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !1,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1
                        }
                    }, {
                        id: 4,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !1
                        }
                    }, {
                        id: 5,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal (second group)",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !1
                        }
                    }, {
                        id: 6,
                        label: "Non-nitro same as bucket 4 + auto-unfurl reactions",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !0
                        }
                    }, {
                        id: 7,
                        label: "Nitro same as bucket 4 + auto-unfurl reactions",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !0
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
                        mobileAndFreemiumCollectEnabled: r,
                        autoUnfurlReactionTooltip: u
                    } = n, a = o.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: r,
                        collectEnabled: a ? i : r,
                        autoUnfurlReactionTooltip: u
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
                        collectEnabled: !1,
                        autoUnfurlReactionTooltip: !1
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
                    }, l = (0, i.default)([r.default], () => r.default.getCurrentUser()), o = a.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: u,
                        showTryPacksModalAndV2Copy: _,
                        collectEnabled: s,
                        autoUnfurlReactionTooltip: c
                    } = E({
                        user: l,
                        config: o
                    }), d = u && s && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: u,
                        collectEnabled: d,
                        showTryPacksModalAndV2Copy: _,
                        autoUnfurlReactionTooltip: c
                    }
                },
                c = (0, l.createExperiment)({
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
                    return T
                },
                showRemoveBanner: function() {
                    return I
                }
            });
            var i = n("884691"),
                l = n("152584"),
                r = n("234251"),
                o = n("783142"),
                u = n("26989");

            function a(e) {
                return i.useMemo(() => {
                    let t = u.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let l in t) {
                        var i;
                        let r = t[l],
                            o = null === (i = r[e]) || void 0 === i ? void 0 : i.avatar;
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
                if ((0, r.isEqualAvatarDecoration)(e, null != t ? t : null)) {
                    (0, l.setPendingAvatarDecoration)(void 0);
                    return
                }(0, l.setPendingAvatarDecoration)(e)
            }

            function c(e, t) {
                if (e === t) {
                    (0, l.setPendingProfileEffectID)(void 0);
                    return
                }(0, l.setPendingProfileEffectID)(e)
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

            function T(e, t) {
                return void 0 === e ? null != t : null != e
            }

            function I(e, t) {
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
                l = n("79112"),
                r = n("685665"),
                o = n("929423");
            n("424562");
            var u = n("49111"),
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
                } = (0, r.default)(), d = (0, i.useCallback)(() => {
                    null != t && (0, o.initGuildIdentitySettings)(t, null != _ ? _ : c), l.default.open(u.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? a.ProfileCustomizationSubsection.GUILD : a.ProfileCustomizationSubsection.USER_PROFILE, {
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
                    return r
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
            var r = l
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
            var i, l, r = n("991170"),
                o = n("719923"),
                u = n("4233"),
                a = n("24373"),
                E = n("49111");
            (i = l || (l = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let _ = (e, t, n) => {
                    if (null == t) return l.NONSENDABLE;
                    let i = o.default.canUseStickersEverywhere(t);
                    if ((0, a.isStandardSticker)(e)) {
                        let {
                            freeStickersEnabled: e
                        } = u.default.getCurrentConfig({
                            location: "c036ff_1"
                        }, {
                            autoTrackExposure: !1
                        });
                        return i || e ? l.SENDABLE : l.SENDABLE_WITH_PREMIUM
                    }
                    if ((0, a.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? l.SENDABLE : null == n.guild_id || r.default.can({
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
                    return A
                }
            });
            var i = n("917351"),
                l = n.n(i),
                r = n("446674"),
                o = n("913144"),
                u = n("80507"),
                a = n("374363"),
                E = n("364685"),
                _ = n("49111"),
                s = n("397336");
            let c = {
                pendingUsages: []
            };
            _.Durations.DAY;
            let d = new u.default({
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
                    E.default.isLoaded && d.compute()
                },
                I = () => {
                    T()
                };

            function S() {
                var e;
                let t = null === (e = a.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                d.overwriteHistory(l.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), c.pendingUsages)
            }
            class N extends r.default.PersistedStore {
                initialize(e) {
                    this.waitFor(E.default), null != e && (c = e), this.syncWith([E.default], I), this.syncWith([a.default], S)
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
            var A = new N(o.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        d.track(e), c.pendingUsages.push({
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
                    c.pendingUsages = []
                }
            })
        },
        467940: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("446674"),
                o = n("77078"),
                u = n("272030"),
                a = n("838446"),
                E = n("158534"),
                _ = n("997289"),
                s = n("812204"),
                c = n("685665"),
                d = n("861370"),
                T = n("230947"),
                I = n("130037"),
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
                g = (0, E.default)((0, a.default)(function(e) {
                    var t;
                    let {
                        user: n,
                        guildId: a,
                        channelId: E,
                        context: m,
                        onSelect: g,
                        moderationAlertId: D,
                        analyticsLocation: P,
                        analyticsLocations: G,
                        onCloseContextMenu: h
                    } = e, {
                        analyticsLocations: v
                    } = (0, c.default)(s.default.CONTEXT_MENU), b = (0, _.useAnalyticsContext)(), y = null !== (t = null == G ? void 0 : G[0]) && void 0 !== t ? t : v[0], B = (0, I.useTrackModerationAction)(a, {
                        location: y,
                        targetUserId: n.id
                    }), F = (0, r.useStateFromStores)([N.default], () => {
                        var e;
                        return null !== (e = N.default.getUserVoiceChannelId(a, n.id)) && void 0 !== e ? e : void 0
                    }, [a, n.id]), V = l.useCallback(() => {
                        B(I.ModerationActionType.COPY_ID)
                    }, [B]), H = (0, r.useStateFromStores)([S.default], () => S.default.isMember(a, n.id), [a, n.id]), k = (0, U.default)(n.id, a), w = (0, O.default)(n.id, m), Y = (0, T.default)({
                        guildId: a,
                        userId: n.id,
                        analyticsLocation: null != P ? P : b.location,
                        analyticsLocations: [y],
                        context: m
                    }), x = (0, f.default)(n, y), K = (0, A.default)(n, a, null != E ? E : F, y), W = (0, R.default)(E, D), j = (0, L.default)(n, a), X = (0, p.default)(n.id, a, !1, y), Z = (0, d.default)({
                        id: n.id,
                        label: M.default.Messages.COPY_ID_USER,
                        onSuccess: V
                    }), q = (0, C.default)(n, a), z = !!(null == n ? void 0 : n.isNonUserBot());
                    return (0, i.jsxs)(o.Menu, {
                        navId: "user-context",
                        onClose: () => {
                            (0, u.closeContextMenu)(), null == h || h()
                        },
                        "aria-label": M.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: g,
                        children: [!z && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)(o.MenuGroup, {
                                children: [k, w]
                            }), (0, i.jsxs)(o.MenuGroup, {
                                children: [Y, x]
                            }), H && (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(o.MenuGroup, {
                                    children: K
                                }), (0, i.jsxs)(o.MenuGroup, {
                                    children: [X, q]
                                })]
                            }), null != D ? W : null, null != j ? (0, i.jsx)(o.MenuGroup, {
                                children: j
                            }) : null]
                        }), (0, i.jsx)(o.MenuGroup, {
                            children: Z
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
            var l = n("446674"),
                r = n("77078"),
                o = n("736964"),
                u = n("27618"),
                a = n("697218"),
                E = n("49111"),
                _ = n("782340");

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ContextMenu",
                    {
                        id: n
                    } = e,
                    s = (0, l.useStateFromStores)([a.default], () => {
                        var e;
                        return (null === (e = a.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === n
                    }, [n]),
                    c = (0, l.useStateFromStores)([u.default], () => u.default.isBlocked(n), [n]);
                if (s) return null;

                function d() {
                    o.default.addRelationship({
                        userId: n,
                        context: {
                            location: t
                        },
                        type: E.RelationshipTypes.BLOCKED
                    })
                }
                return (0, i.jsx)(r.MenuItem, {
                    id: "block",
                    label: c ? _.default.Messages.UNBLOCK : _.default.Messages.BLOCK,
                    action: () => c ? o.default.unblockUser(n, {
                        location: t
                    }) : (0, r.openModal)(t => (0, i.jsx)(r.ConfirmModal, {
                        header: _.default.Messages.CONFIRM_USER_BLOCK_TITLE.format({
                            name: e.username
                        }),
                        confirmText: _.default.Messages.BLOCK,
                        cancelText: _.default.Messages.CANCEL,
                        onConfirm: d,
                        ...t,
                        children: (0, i.jsx)(r.Text, {
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
            var l = n("77078"),
                r = n("450911"),
                o = n("54239"),
                u = n("271938"),
                a = n("49111"),
                E = n("782340");

            function _(e, t) {
                let n = u.default.getId(),
                    _ = t === a.AppContext.POPOUT;
                return n === e || _ ? null : (0, i.jsx)(l.MenuItem, {
                    id: "message-user",
                    label: E.default.Messages.USER_POPOUT_MESSAGE,
                    action: () => {
                        r.default.openPrivateChannel(e), (0, o.popLayer)()
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
            var l = n("446674"),
                r = n("77078"),
                o = n("851387"),
                u = n("987317"),
                a = n("679653"),
                E = n("271938"),
                _ = n("42203"),
                s = n("923959"),
                c = n("26989"),
                d = n("305961"),
                T = n("957255"),
                I = n("27618"),
                S = n("697218"),
                N = n("800762"),
                A = n("404008"),
                f = n("991170"),
                O = n("49111"),
                C = n("782340");

            function R(e, t) {
                let n = (0, l.useStateFromStores)([s.default], () => s.default.getChannels(t)[s.GUILD_VOCAL_CHANNELS_KEY], [t]),
                    R = (0, l.useStateFromStores)([N.default, _.default], () => {
                        let n = N.default.getUserVoiceChannelId(t, e.id);
                        return _.default.getChannel(n)
                    }, [t, e.id]),
                    L = (0, l.useStateFromStores)([c.default], () => c.default.isGuestOrLurker(t, e.id), [t, e.id]);
                if (L || null == R) return null;
                let U = e.id === E.default.getId();
                if (!U && !T.default.can(O.Permissions.MOVE_MEMBERS, R)) return null;
                let p = n.filter(t => {
                    let {
                        channel: n
                    } = t;
                    return n.id !== R.id && (U ? T.default.can(O.Permissions.CONNECT, n) && !(0, A.isChannelFull)(n, N.default, d.default) : T.default.can(O.Permissions.MOVE_MEMBERS, n) && (T.default.can(O.Permissions.CONNECT, n) || f.default.can({
                        permission: O.Permissions.CONNECT,
                        user: e,
                        context: n
                    })) && !(0, A.isChannelFull)(n, N.default, d.default))
                });
                return 0 === p.length ? null : (0, i.jsx)(r.MenuItem, {
                    id: "voice-move",
                    label: C.default.Messages.MOVE_TO,
                    children: p.map(n => {
                        let {
                            channel: l
                        } = n;
                        return (0, i.jsx)(r.MenuItem, {
                            id: l.id,
                            action: () => {
                                var n;
                                return n = l, void(e.id === E.default.getId() ? u.default.selectVoiceChannel(n.id) : o.default.setChannel(t, e.id, n.id))
                            },
                            label: (0, a.computeChannelName)(l, S.default, I.default)
                        }, l.id)
                    })
                })
            }
        },
        325882: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("446674"),
                r = n("77078"),
                o = n("228944"),
                u = n("201131"),
                a = n("702873"),
                E = n("42203"),
                _ = n("377253"),
                s = n("957255"),
                c = n("49111"),
                d = n("782340");

            function T(e, t) {
                let n = (0, l.useStateFromStores)([s.default], () => null != e && s.default.canWithPartialContext(c.Permissions.MANAGE_MESSAGES, {
                        channelId: e
                    }), [e]),
                    T = (0, l.useStateFromStores)([E.default], () => E.default.getChannel(e), [e]),
                    I = (0, l.useStateFromStores)([_.default], () => null != e && null != t ? _.default.getMessage(e, t) : null),
                    S = (0, u.useAutomodAlertActions)(null != I ? I : null);
                if (null == T || null == I) return null;
                let N = null != S && S.actions.hasOwnProperty(o.AutomodAlertActionType.SET_COMPLETED) ? o.AutomodAlertActionType.UNSET_COMPLETED : o.AutomodAlertActionType.SET_COMPLETED,
                    A = N === o.AutomodAlertActionType.SET_COMPLETED ? d.default.Messages.GUILD_AUTOMOD_ALERT_SET_COMPLETED : d.default.Messages.GUILD_AUTOMOD_ALERT_UNSET_COMPLETED;
                return n && null != t ? (0, i.jsx)(r.MenuItem, {
                    id: "mark-automod-alert-completed",
                    label: A,
                    action: () => {
                        (0, a.executeAlertAction)(t, T, N)
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
            var l = n("446674"),
                r = n("77078"),
                o = n("305961"),
                u = n("697218"),
                a = n("782340");

            function E(e, t) {
                let E = (0, l.useStateFromStores)([u.default], () => u.default.getCurrentUser()),
                    _ = (0, l.useStateFromStores)([o.default], () => o.default.getGuild(t));
                return null == _ || null == E || e.id === _.ownerId || e.bot || !_.isOwnerWithRequiredMfaLevel(E) ? null : (0, i.jsx)(r.MenuItem, {
                    id: "transfer-ownership",
                    color: "danger",
                    label: a.default.Messages.TRANSFER_OWNERSHIP,
                    action: () => (0, r.openModalLazy)(async () => {
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
                l = n("884691"),
                r = n("77078"),
                o = n("244201"),
                u = n("401642"),
                a = n("599110"),
                E = n("49111"),
                _ = n("782340");

            function s(e, t, n) {
                let s = l.useContext(a.AnalyticsContext),
                    c = (0, o.useWindowDispatch)();
                return (0, i.jsx)(r.MenuItem, {
                    id: "user-profile",
                    label: _.default.Messages.PROFILE,
                    action: () => {
                        (0, u.openUserProfileModal)({
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
                    return T
                },
                resetPendingProfileChanges: function() {
                    return I
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
                l = n("913144"),
                r = n("448993"),
                o = n("884351"),
                u = n("845579"),
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
                let c = u.UseLegacyChatInput.getSetting();
                null != e.bio && c && (e.bio = o.default.parse(void 0, e.bio).content);
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
                        let e = new r.APIError(n);
                        l.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: n.body,
                            apiError: e
                        })
                    }
                    return n
                } catch (t) {
                    let e = new r.APIError(t);
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

            function S(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function N(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: e
                })
            }

            function A(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function f(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: e
                })
            }

            function O(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function C(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: e
                }), c(s.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function R(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: e
                }), c(s.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function L(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: e
                }), c(s.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function U(e) {
                l.default.dispatch({
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
                l = n("327037"),
                r = n("697218"),
                o = n("506885"),
                u = n("49111");

            function a(e) {
                let {
                    userId: t,
                    section: n,
                    guildId: a = u.ME,
                    channelId: E,
                    friendToken: _,
                    autoFocusNote: s,
                    analyticsLocation: c
                } = e, d = r.default.getUser(t), T = a !== u.ME ? a : void 0;
                if (null == d) return (0, l.fetchProfile)(t, {
                    friendToken: _,
                    guildId: T
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
                (0, o.default)(t, d.getAvatarURL(void 0, 80), {
                    withMutualGuilds: !0,
                    friendToken: _,
                    guildId: T
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
        662255: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("35647"),
                o = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: r,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                        })
                    })
                }, r.IdIcon)
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return o
                },
                copy: function() {
                    return u
                }
            });
            var i = n("281071"),
                l = n("773336"),
                r = n("50885");
            let o = (() => {
                if (l.isPlatformEmbedded) return null != r.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function u(e) {
                return !!o && (l.isPlatformEmbedded ? (r.default.copy(e), !0) : i.copy(e))
            }
        },
        281071: function(e, t, n) {
            "use strict";

            function i(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    i = window.getSelection(),
                    l = document.createElement("textarea");
                l.value = e, l.contentEditable = "true", l.style.visibility = "none", t.appendChild(l), n.selectNodeContents(l), null == i || i.removeAllRanges(), null == i || i.addRange(n), l.focus(), l.setSelectionRange(0, e.length);
                let r = document.execCommand("copy");
                return t.removeChild(l), r
            }
            n.r(t), n.d(t, {
                copy: function() {
                    return i
                }
            })
        }
    }
]);
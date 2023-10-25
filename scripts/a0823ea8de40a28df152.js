(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["17876"], {
        861435: function(e, t, i) {
            "use strict";
            var _ = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                a = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                E = "function" == typeof Object.getOwnPropertySymbols;
            e.exports = function(e, t, i) {
                if ("string" != typeof t) {
                    var l = Object.getOwnPropertyNames(t);
                    E && (l = l.concat(Object.getOwnPropertySymbols(t)));
                    for (var n = 0; n < l.length; ++n)
                        if (!_[l[n]] && !a[l[n]] && (!i || !i[l[n]])) try {
                            e[l[n]] = t[l[n]]
                        } catch (e) {}
                }
                return e
            }
        },
        357450: function(e, t, i) {
            "use strict";
            e.exports = i.p + "222f914ec12acf16874f.svg"
        },
        348919: function(e, t, i) {
            "use strict";
            e.exports = i.p + "ec6798869dcd1915ecd8.svg"
        },
        583367: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                fetchAppliedGuildBoostsForGuild: function() {
                    return I
                },
                fetchGuildBoostSlots: function() {
                    return s
                },
                applyToGuild: function() {
                    return T
                },
                unapplyFromGuild: function() {
                    return u
                },
                cancelGuildBoostSlot: function() {
                    return c
                },
                uncancelGuildBoostSlot: function() {
                    return d
                }
            });
            var _ = i("990746"),
                a = i("913144"),
                E = i("448993"),
                l = i("783111"),
                n = i("522308"),
                r = i("521012"),
                o = i("49111");
            async function I(e) {
                let t = await _.default.get({
                        url: o.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
                        oldFormErrors: !0
                    }),
                    i = t.body.map(e => l.default.createFromServer(e));
                return a.default.dispatch({
                    type: "GUILD_APPLIED_BOOSTS_FETCH_SUCCESS",
                    guildId: e,
                    appliedBoosts: i
                }), i
            }
            async function s() {
                let e = await _.default.get({
                        url: o.Endpoints.USER_GUILD_BOOST_SLOTS,
                        oldFormErrors: !0
                    }),
                    t = e.body.map(e => n.default.createFromServer(e, r.default.getSubscriptionById(e.subscription_id)));
                return a.default.dispatch({
                    type: "GUILD_BOOST_SLOTS_FETCH_SUCCESS",
                    guildBoostSlots: t
                }), t
            }
            async function T(e, t) {
                a.default.dispatch({
                    type: "GUILD_APPLY_BOOST_START"
                });
                try {
                    let i = await _.default.put({
                            url: o.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
                            body: {
                                user_premium_guild_subscription_slot_ids: t
                            },
                            oldFormErrors: !0
                        }),
                        E = Array.isArray(i.body) ? i.body.map(l.default.createFromServer) : [l.default.createFromServer(i.body)];
                    return a.default.dispatch({
                        type: "GUILD_APPLY_BOOST_SUCCESS",
                        appliedGuildBoost: E
                    }), s(), E
                } catch (t) {
                    let e = new E.AppliedGuildBoostError(t);
                    throw a.default.dispatch({
                        type: "GUILD_APPLY_BOOST_FAIL",
                        error: e
                    }), e
                }
            }
            async function u(e, t) {
                a.default.dispatch({
                    type: "GUILD_UNAPPLY_BOOST_START"
                });
                try {
                    await _.default.delete({
                        url: o.Endpoints.APPLIED_GUILD_BOOST(e, t),
                        oldFormErrors: !0
                    }), s()
                } catch (t) {
                    let e = new E.AppliedGuildBoostError(t);
                    throw a.default.dispatch({
                        type: "GUILD_UNAPPLY_BOOST_FAIL",
                        error: e
                    }), e
                }
                a.default.dispatch({
                    type: "GUILD_UNAPPLY_BOOST_SUCCESS",
                    boostId: t
                })
            }
            async function c(e) {
                let t = await _.default.post({
                        url: o.Endpoints.USER_GUILD_BOOST_SLOT_CANCEL(e),
                        oldFormErrors: !0
                    }),
                    i = n.default.createFromServer(t.body, r.default.getSubscriptionById(t.body.subscription_id));
                return a.default.dispatch({
                    type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
                    guildBoostSlot: i
                }), i
            }
            async function d(e) {
                let t = await _.default.post({
                        url: o.Endpoints.USER_GUILD_BOOST_SLOT_UNCANCEL(e),
                        oldFormErrors: !0
                    }),
                    i = n.default.createFromServer(t.body, r.default.getSubscriptionById(t.body.subscription_id));
                return a.default.dispatch({
                    type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
                    guildBoostSlot: i
                }), i
            }
        },
        812204: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return E
                }
            }), (_ = a || (a = {})).POPOUT_WINDOW = "popout window", _.OVERLAY = "overlay", _.NOTICE = "notice", _.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", _.BADGE = "badge", _.USER_SETTINGS = "user settings", _.USER_SETTINGS_MENU = "user settings menu", _.ACCOUNT = "account", _.TEXT_AND_IMAGES = "text and images", _.GUILD_SETTINGS = "guild settings", _.OVERVIEW = "overview", _.STICKERS = "stickers", _.VANITY_URL = "vanity url", _.PREMIUM_MARKETING = "premium marketing", _.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", _.PREMIUM_PAYMENT_MODAL = "premium payment modal", _.PREMIUM_UPSELL_ALERT = "premium upsell alert", _.PREMIUM_UPSELL_MODAL = "premium upsell modal", _.PREMIUM_SETTINGS = "premium settings", _.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", _.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", _.CHANNEL_CALL = "channel call", _.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", _.RTC_PANEL = "rtc panel", _.SOUNDBOARD_BUTTON = "soundboard button", _.SOUNDBOARD_POPOUT = "soundboard popout", _.SOUNDBOARD_WHEEL = "soundboard wheel", _.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", _.GIFT_BUTTON = "gift button", _.EXPRESSION_SUGGESTIONS = "expression suggestions", _.EMOJI_PICKER = "emoji picker", _.STICKER_PICKER = "sticker picker", _.STICKER_POPOUT = "sticker popout", _.PREMIUM_UPSELL = "premium upsell", _.EMPTY_STATE = "empty state", _.SUBSCRIPTION_DETAILS = "subscription details", _.SUBSCRIPTION_HEADER = "subscription header", _.ACCOUNT_CREDIT_BANNER = "account credit banner", _.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", _.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", _.STREAM_QUALITY_INDICATOR = "stream quality indicator", _.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", _.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", _.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", _.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", _.RPC = "rpc", _.BILLING_STANDALONE = "billing standalone", _.GUILD_CHANNEL_LIST = "guild channel list", _.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", _.STICKER_MESSAGE = "sticker message", _.CHANNEL_TEXT_AREA = "channel text area", _.HEADER_BAR = "header bar", _.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", _.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", _.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", _.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", _.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", _.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", _.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", _.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", _.GUILD_HEADER = "guild header", _.GUILD_BANNER = "guild banner", _.GUILD_BANNER_NOTICE = "guild banner notice", _.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", _.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", _.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", _.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", _.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", _.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", _.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", _.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", _.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", _.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", _.GUILDS_LIST = "guilds list", _.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", _.ACTIVITY_DIRECTORY = "activity directory", _.ACTIVITY_TILE = "activity tile", _.ACTIVITY_UPSELL = "activity upsell", _.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", _.INSTANT_INVITE_MODAL = "instant invite modal", _.IMAGE_CROPPING_MODAL = "image cropping modal", _.GIF_PICKER = "gif picker", _.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", _.INVITE_MODAL = "invite modal", _.INVITE_EMBED = "invite embed", _.NEW_GUILD_BUTTON = "new guild button", _.CHARACTER_COUNT = "character count", _.DM_CHANNEL = "dm channel", _.GUILD_CHANNEL = "guild channel", _.FORUM_CHANNEL = "forum channel", _.FILE_UPLOAD_POPOUT = "file upload popout", _.EMOJI = "emoji", _.PROFILE = "profile", _.PROFILE_MODAL = "profile modal", _.PROFILE_POPOUT = "profile popout", _.GUILD_PROFILE = "guild profile", _.EDIT_AVATAR = "edit avatar", _.EDIT_BANNER = "edit banner", _.CHAT_INPUT = "chat input", _.CREATE_THREAD = "create thread", _.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", _.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", _.SELECT_IMAGE_MODAL = "select image modal", _.VIDEO_BACKGROUND_OPTIONS = "video background options", _.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", _.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", _.CAMERA_PREVIEW = "camera preview", _.HOME_PAGE_PREMIUM_TAB = "home page premium tab", _.HOME_PAGE_SHOP_TAB = "home page shop tab", _.PREMIUM_MARKETING_SURFACE = "premium marketing surface", _.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", _.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", _.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", _.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", _.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", _.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", _.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", _.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", _.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", _.PREMIUM_MARKETING_FEATURE = "premium marketing feature", _.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", _.PREMIUM_MARKETING_FOOTER = "premium marketing footer", _.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", _.CHANNEL_CALL_ACTION_BAR = "channel call action bar", _.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", _.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", _.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", _.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", _.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", _.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", _.VOICE_CONTROL_TRAY = "voice control tray", _.ACTIVE_NOW_COLUMN = "active now column", _.CONTEXT_MENU = "context menu", _.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", _.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", _.CHANNEL_CATEGORY_MENU = "channel category menu", _.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", _.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", _.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", _.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", _.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", _.CHANNEL_TITLE_MENU = "channel title menu", _.GROUP_DM_MENU = "group dm menu", _.AUDIT_LOG_USER_MENU = "audit log user menu", _.BANNED_USER_MENU = "banned user menu", _.DM_USER_MENU = "dm user menu", _.GROUP_DM_USER_MENU = "group dm user menu", _.GUILD_CHANNEL_USER_MENU = "guild channel user menu", _.GUILD_MODERATION_USER_MENU = "guild moderation user menu", _.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", _.GUILD_SETTINGS_USER_MENU = "guild settings user menu", _.GUILD_USER_MENU = "guild user menu", _.THREAD_USER_MENU = "thread user menu", _.USER_GENERIC_MENU = "user generic menu", _.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", _.VOICE_ACTION_SHEET = "voice action sheet", _.FOCUSED_VOICE_CONTROLS = "focused voice controls", _.MASKED_LINK = "masked link", _.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", _.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", _.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", _.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", _.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", _.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", _.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", _.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", _.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", _.ACCOUNT_PROFILE_POPOUT = "account profile popout", _.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", _.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", _.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", _.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", _.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", _.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", _.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", _.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", _.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", _.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", _.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", _.STAGE_VIDEO_LIMIT = "stage video limit", _.ACTIVITIES_MINI_SHELF = "activities mini shelf", _.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", _.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", _.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", _.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", _.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", _.APP_ICON_EDITOR = "app icon editor", _.CLIENT_THEMES_EDITOR = "client themes editor", _.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", _.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", _.SHARE_NITRO_EMBED = "share nitro embed", _.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", _.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", _.REFERRAL_TRIALS_POPOUT = "referral trials popout", _.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", _.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", _.ACTIVITY_BOOKMARK = "activity bookmark", _.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", _.ACTIVITY_DETAIL_PAGE = "activity detail page", _.ACTIVITIES_PAGE = "activities page", _.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", _.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", _.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", _.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", _.ACTIVITIES_HAPPENING_NOW = "activities happening now", _.MEDIA_VIEWER = "media viewer", _.MESSAGE_LONG_PRESS_MENU = "message long press menu", _.COLLECTIBLES_SHOP = "collectibles shop", _.COLLECTIBLES_SHOP_CARD = "collectibles shop card", _.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", _.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", _.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", _.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", _.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", _.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", _.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", _.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", _.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", _.PREMIUM_BILLING_INFO = "premium billing info", _.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", _.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", _.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", _.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", _.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", _.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", _.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", _.PREMIUM_PLAN_SELECT = "premium_plan_select", _.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", _.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", _.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", _.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", _.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", _.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", _.MEMBER_SAFETY_PAGE = "member safety page", _.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", _.GUILD_MEMBER_MOD_VIEW = "guild member mod view", _.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", _.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", _.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", _.GUILD_SHOP_PAGE = "guild shop page", _.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", _.MESSAGE_REMIX_TAG = "message remix tag", _.MESSAGE_REMIX_BUTTON = "message remix button", _.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", _.CLIPS_SETTINGS = "clips settings", _.CLIPS_GALLERY = "clips gallery", _.CLIPS_GALLERY_ITEM = "clips gallery item", _.CLIPS_EDITOR = "clips editor", _.CLIPS_SHARE_MODAL = "clips share modal", _.CHANNEL_ATTACH_BUTTON = "channel attach button", _.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", _.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", _.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", _.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", _.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", _.GUILD_EVENT_CARD = "guild event card", _.EVENT_SETTINGS = "event settings";
            var _, a, E = a
        },
        8731: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                cropGIF: function() {
                    return l
                },
                cropStaticImage: function() {
                    return n
                },
                getBoundedCoordinates: function() {
                    return r
                },
                adjustImageDimensionsForAspectRatio: function() {
                    return I
                },
                calculateDragBoundaries: function() {
                    return s
                },
                calculateOverlaySize: function() {
                    return T
                },
                downsizeImage: function() {
                    return u
                }
            });
            var _ = i("427964"),
                a = i("75015");

            function E(e, t, i, _) {
                let a = e.naturalWidth / e.width,
                    E = t.width / 2,
                    l = t.height / 2,
                    n = (e.width / 2 - E - i.x) * a,
                    r = (e.height / 2 - l - i.y) * a,
                    o = t.width * a,
                    I = t.height * a,
                    s = Math.min(o, _.width),
                    T = Math.min(I, _.height);
                return {
                    x: n,
                    y: r,
                    scaledCropWidth: o,
                    scaledCropHeight: I,
                    canvasWidth: s,
                    canvasHeight: T
                }
            }
            async function l(e, t, _, l, n) {
                let {
                    x: r,
                    y: o,
                    scaledCropWidth: I,
                    scaledCropHeight: s
                } = E(t, _, l, n), T = await e.arrayBuffer(), u = new Worker(new URL(i.p + i.u("84300"), i.b)), c = new Promise((e, t) => {
                    u.onmessage = i => {
                        let {
                            data: _
                        } = i;
                        if (_.type === a.MessageTypes.CROP_GIF_COMPLETE) {
                            var E;
                            e((E = new Blob([_.result]), new Promise(e => {
                                let t = new FileReader;
                                t.onload = t => {
                                    var i;
                                    let _ = null === (i = t.target) || void 0 === i ? void 0 : i.result;
                                    "string" == typeof _ ? e(_) : e("")
                                }, t.readAsDataURL(E)
                            }))), u.terminate()
                        } else _.type === a.MessageTypes.CROP_GIF_ERROR && (t(Error("Error cropping GIF")), u.terminate())
                    }
                });
                return u.postMessage({
                    type: a.MessageTypes.CROP_GIF_START,
                    gif: new Uint8Array(T),
                    x: 0 | r,
                    y: 0 | o,
                    width: 0 | I,
                    height: 0 | s
                }), {
                    result: c,
                    cancelFn: () => u.terminate()
                }
            }

            function n(e, t, i, _) {
                let {
                    x: a,
                    y: l,
                    scaledCropWidth: n,
                    scaledCropHeight: r,
                    canvasWidth: o,
                    canvasHeight: I
                } = E(e, t, i, _), s = document.createElement("canvas");
                s.width = o, s.height = I;
                let T = s.getContext("2d");
                return null != T && T.drawImage(e, a, l, n, r, 0, 0, s.width, s.height), s.toDataURL("image/png")
            }

            function r(e, t, i) {
                return {
                    x: (0, _.clamp)(e, i.left, i.right),
                    y: (0, _.clamp)(t, i.bottom, i.top)
                }
            }

            function o(e, t, i, _) {
                let E = i,
                    l = _;
                i > a.EDITING_CONTAINER_WIDTH && (E = a.EDITING_CONTAINER_WIDTH, l = _ * (a.EDITING_CONTAINER_WIDTH / i));
                if (i / _ < e) return {
                    width: E,
                    height: l
                };
                let n = t / l,
                    r = E * n;
                return {
                    width: r,
                    height: t
                }
            }

            function I(e, t, i) {
                switch (e) {
                    case a.UploadTypes.AVATAR:
                    case a.UploadTypes.AVATAR_DECORATION:
                        return {
                            width: t, height: i
                        };
                    case a.UploadTypes.BANNER:
                        return o(a.BANNER_ASPECT_RATIO, a.MAX_BANNER_OVERLAY_HEIGHT, t, i);
                    case a.UploadTypes.GUILD_BANNER:
                        return o(a.GUILD_BANNER_ASPECT_RATIO, a.MAX_GUILD_BANNER_OVERLAY_HEIGHT, t, i);
                    case a.UploadTypes.VIDEO_BACKGROUND:
                        return o(a.VIDEO_BACKGROUND_ASPECT_RATIO, a.MAX_VIDEO_OVERLAY_HEIGHT, t, i);
                    case a.UploadTypes.SCHEDULED_EVENT_IMAGE:
                        return o(a.SCHEDULED_EVENT_IMAGE_ASPECT_RATIO, a.MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT, t, i);
                    case a.UploadTypes.HOME_HEADER:
                        return o(a.HOME_HEADER_ASPECT_RATIO, a.MAX_HOME_HEADER_OVERLAY_HEIGHT, t, i)
                }
            }

            function s(e, t, i) {
                let _ = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    a = e - i.width,
                    E = t - i.height;
                return 0 !== a && (_.left = -Math.abs(a / 2), _.right = a / 2), 0 !== E && (_.bottom = -Math.abs(E / 2), _.top = E / 2), _
            }

            function T(e, t, i, _) {
                switch (e) {
                    case a.UploadTypes.AVATAR:
                    case a.UploadTypes.AVATAR_DECORATION:
                        let E = Math.min(t, i);
                        return {
                            width: E, height: E
                        };
                    case a.UploadTypes.BANNER:
                        let l = Math.min(t, a.EDITING_CONTAINER_WIDTH);
                        return {
                            width: l, height: l * (1 / a.BANNER_ASPECT_RATIO)
                        };
                    case a.UploadTypes.GUILD_BANNER:
                        let n = Math.min(t, a.EDITING_CONTAINER_WIDTH);
                        return {
                            width: n, height: Math.min(n * (9 / 16), _)
                        };
                    case a.UploadTypes.VIDEO_BACKGROUND:
                        let r = Math.min(t, a.EDITING_CONTAINER_WIDTH);
                        return {
                            width: r, height: r * (9 / 16)
                        };
                    case a.UploadTypes.SCHEDULED_EVENT_IMAGE:
                        let o = Math.min(t, a.EDITING_CONTAINER_WIDTH);
                        return {
                            width: o, height: .4 * o
                        };
                    case a.UploadTypes.HOME_HEADER:
                        let I = Math.min(t, a.EDITING_CONTAINER_WIDTH);
                        return {
                            width: I, height: I * (1 / a.HOME_HEADER_ASPECT_RATIO)
                        }
                }
            }

            function u(e, t, i) {
                let _ = e.naturalWidth / e.naturalHeight,
                    a = t,
                    E = i;
                e.naturalWidth > e.naturalHeight ? a /= _ : E *= _;
                let l = {
                    height: a,
                    width: E
                };
                return n(e, {
                    width: e.width,
                    height: e.height
                }, {
                    x: 0,
                    y: 0
                }, l)
            }
        },
        577412: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                LottieUploadExperiment: function() {
                    return a
                }
            });
            var _ = i("862205");
            let a = (0, _.createExperiment)({
                kind: "guild",
                id: "2021-07_stickers_lottie_upload",
                label: "Lottie Sticker Uploads",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Allow Lottie sticker uploads",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        54666: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return w
                }
            });
            var _ = i("920040"),
                a = i("773670"),
                E = i("575482"),
                l = i.n(E),
                n = i("462567"),
                r = i("498225"),
                o = i("819855"),
                I = i("77078"),
                s = i("385976"),
                T = i("208548"),
                u = i("866974"),
                c = i("8731"),
                d = i("161778"),
                A = i("697218"),
                L = i("145131"),
                O = i("68238"),
                R = i("599110"),
                N = i("993105"),
                m = i("701909"),
                S = i("103603"),
                C = i("467094"),
                p = i("577412"),
                U = i("161585"),
                M = i("24373"),
                D = i("41170"),
                g = i("560241"),
                P = i("49111"),
                f = i("782340"),
                h = i("123215"),
                G = i("357450"),
                v = i("348919");
            let B = new Set(["application/json", "image/png", "image/apng", "image/gif"]),
                b = [{
                    name: "Sticker file",
                    extensions: ["json", "png", "apng", "gif"]
                }];

            function y(e, t) {
                R.default.track(P.AnalyticEvents.STICKER_UPLOAD_COMPLETED, {
                    successful: e,
                    error: null != t ? t : ""
                })
            }
            let H = e => {
                    let {
                        stickerPreview: t
                    } = e;
                    return (0, _.jsxs)("div", {
                        className: h.preview,
                        children: [(0, _.jsx)("div", {
                            className: h.previewDark,
                            children: null != t ? t : (0, _.jsx)("img", {
                                src: G,
                                alt: f.default.Messages.GUILD_STICKER_PREVIEW_IMG_ALT_DARK
                            })
                        }), (0, _.jsx)("div", {
                            className: h.previewLight,
                            children: null != t ? t : (0, _.jsx)("img", {
                                src: v,
                                alt: f.default.Messages.GUILD_STICKER_PREVIEW_IMG_ALT_LIGHT
                            })
                        })]
                    })
                },
                F = e => {
                    let {
                        sticker: t,
                        previewData: i,
                        onStickerError: a
                    } = e;
                    if (null != t) return (0, _.jsx)(D.default, {
                        size: 160,
                        sticker: t
                    });
                    if (null == i) return null;
                    let {
                        id: E,
                        formatType: l,
                        content: n
                    } = i;
                    return (0, _.jsx)(D.default, {
                        assetData: n,
                        fileUri: n,
                        size: 160,
                        sticker: {
                            name: E,
                            description: "",
                            id: E,
                            pack_id: "",
                            format_type: l
                        },
                        onError: a
                    }, E)
                };
            async function V(e) {
                let t = await (0, S.readFileAsBase64)(e),
                    i = new Image;
                i.src = t, await i.decode();
                let _ = (0, c.downsizeImage)(i, 320, 320);
                return (0, S.dataUrlToFile)(_, e.name, e.type)
            }

            function w(e) {
                var t, i, E, c, D, G, v, w;
                let {
                    transitionState: K,
                    onClose: k,
                    guildId: x,
                    sticker: Y
                } = e, j = (0, r.useStateFromStores)([d.default], () => d.default.theme), W = (0, r.useStateFromStores)([s.default], () => (null == Y ? void 0 : Y.tags) != null ? s.default.getCustomEmojiById(Y.tags) : null), z = null !== (i = null === (t = A.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && void 0 !== i && i, X = z ? g.STAFF_MAX_STICKER_FILE_SIZE : g.MAX_STICKER_FILE_SIZE, [Z, J] = a.useState(null), [q, Q] = a.useState(null !== (E = null == Y ? void 0 : Y.name) && void 0 !== E ? E : ""), [$, ee] = a.useState({
                    file: null,
                    filename: null !== (c = (0, M.getFilenameForSticker)(Y)) && void 0 !== c ? c : ""
                }), [et, ei] = a.useState(null == W ? void 0 : W.id), [e_, ea] = a.useState(null !== (D = null == W ? void 0 : W.name) && void 0 !== D ? D : null == Y ? void 0 : Y.tags), [eE, el] = a.useState(null !== (G = null == Y ? void 0 : Y.description) && void 0 !== G ? G : ""), [en, er] = a.useState(!1), [eo, eI] = a.useState(null), es = null != Y, eT = es || (null == $ ? void 0 : $.file) != null, eu = 0 === eE.length || eE.length >= 2 && eE.length <= 100, ec = !en && (null == eo ? void 0 : eo.isBlocking) !== !0 && q.length >= 2 && (null != et || null != e_ || (null == Y ? void 0 : Y.tags) != null && (null == Y ? void 0 : Y.tags) !== "") && eT && eu, {
                    enabled: ed
                } = p.LottieUploadExperiment.getCurrentConfig({
                    guildId: x,
                    location: "d3a320_1"
                }), eA = async e => {
                    var t;
                    if (null == e) return;
                    let i = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                    if (!B.has(i)) {
                        eI({
                            message: f.default.Messages.GUILD_STICKER_UNKNOWN_MIME_TYPE,
                            isBlocking: !0
                        });
                        return
                    }
                    let _ = e;
                    if ("image/png" === i && e.size > X && !await (0, S.isPNGAnimated)(e)) {
                        _ = await V(e);
                        let t = _.size > X;
                        R.default.track(P.AnalyticEvents.STICKER_FILE_RESIZED, {
                            original_file_size_bytes: e.size,
                            resized_file_size_bytes: _.size,
                            resized_file_too_big: t
                        })
                    }
                    if (_.size > X) {
                        eI({
                            message: f.default.Messages.GUILD_STICKER_FILE_TOO_BIG.format({
                                maxSize: (0, N.formatKbSize)(X, {
                                    useKibibytes: !0
                                })
                            }),
                            isBlocking: null == $.file
                        }), R.default.track(P.AnalyticEvents.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                            size: _.size,
                            filetype: i
                        });
                        return
                    }
                    let a = (0, M.getStickerFormatTypeFromFileType)(_.type),
                        E = a === U.StickerFormat.LOTTIE;
                    if (E) {
                        if (!ed) {
                            eI({
                                message: f.default.Messages.GUILD_STICKER_UNSUPPORTED_MIME_TYPE.format({
                                    articleURL: m.default.getArticleURL(P.HelpdeskArticles.STICKERS_UPLOAD)
                                }),
                                isBlocking: !0
                            });
                            return
                        }
                        let e = new FileReader;
                        e.addEventListener("load", () => {
                            J({
                                id: (0, n.v4)(),
                                formatType: a,
                                content: e.result
                            }), eI(null)
                        }), e.readAsText(_)
                    } else {
                        let e = await (0, S.readFileAsBase64)(_);
                        J({
                            id: (0, n.v4)(),
                            formatType: a,
                            content: e
                        }), eI(null)
                    }
                    ee({
                        file: _,
                        filename: _.name
                    })
                }, eL = async e => {
                    var t, i, _, a, E, l;
                    e.preventDefault();
                    let n = null !== (i = null !== (t = null != et ? et : e_) && void 0 !== t ? t : null == Y ? void 0 : Y.tags) && void 0 !== i ? i : "";
                    try {
                        if (er(!0), es) await (0, C.updateGuildSticker)(x, null !== (_ = null == Y ? void 0 : Y.id) && void 0 !== _ ? _ : "", {
                            name: q,
                            tags: n,
                            description: eE
                        });
                        else {
                            ;
                            let e = new FormData;
                            e.append("name", q), e.append("tags", n), e.append("description", eE), (null == $ ? void 0 : $.file) != null && e.append("file", $.file), l = null !== (E = null === (a = $.file) || void 0 === a ? void 0 : a.type) && void 0 !== E ? E : "", R.default.track(P.AnalyticEvents.STICKER_UPLOAD_STARTED, {
                                filetype: l
                            }), await (0, C.createGuildSticker)(x, e), y(!0)
                        }
                        k()
                    } catch (e) {
                        eI({
                            message: e.body.message,
                            isBlocking: !1
                        }), y(!1, e.body.message)
                    } finally {
                        er(!1)
                    }
                }, eO = a.useCallback(() => {
                    eI({
                        message: f.default.Messages.GUILD_STICKER_INVALID_STICKER,
                        isBlocking: !0
                    })
                }, []), eR = F({
                    sticker: Y,
                    previewData: Z,
                    onStickerError: eO
                }), eN = ed ? f.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION : f.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_NO_LOTTIE;
                return (0, _.jsxs)(I.ModalRoot, {
                    transitionState: K,
                    "aria-labelledby": "STICKER_UPLOAD_MODAL",
                    className: h.modal,
                    children: [(0, _.jsx)(I.ModalCloseButton, {
                        onClick: k,
                        className: h.modalClose
                    }), (0, _.jsxs)("form", {
                        onSubmit: eL,
                        className: h.form,
                        children: [(0, _.jsxs)(I.ModalContent, {
                            className: h.modalContent,
                            children: [(0, _.jsxs)(I.ModalHeader, {
                                direction: L.default.Direction.VERTICAL,
                                separator: !1,
                                className: h.modalHeader,
                                children: [(0, _.jsx)(I.Heading, {
                                    variant: "heading-xl/semibold",
                                    className: h.modalHeaderTitle,
                                    children: f.default.Messages.GUILD_STICKER_UPLOAD_TITLE
                                }), (0, _.jsx)(I.Text, {
                                    variant: "text-md/normal",
                                    children: eN.format({
                                        fileSize: (0, N.formatKbSize)(g.MAX_STICKER_FILE_SIZE, {
                                            useKibibytes: !0
                                        })
                                    })
                                })]
                            }), (0, _.jsx)(I.FormSection, {
                                title: f.default.Messages.GUILD_STICKER_UPLOAD_PREVIEW_TITLE,
                                className: h.formItem,
                                children: (0, _.jsx)(H, {
                                    stickerPreview: eR
                                })
                            }), (0, _.jsxs)(I.FormSection, {
                                className: l(h.formItem, h.formItemRow),
                                children: [(0, _.jsx)(I.FormItem, {
                                    title: es ? f.default.Messages.GUILD_STICKER_UPLOAD_FILE_TITLE_BLOCKED : f.default.Messages.GUILD_STICKER_UPLOAD_FILE_TITLE,
                                    required: !0,
                                    className: h.formItemRowChild,
                                    children: es ? (0, _.jsx)(I.TextInput, {
                                        disabled: !0,
                                        value: null !== (v = null == $ ? void 0 : $.filename) && void 0 !== v ? v : ""
                                    }) : (0, _.jsx)(u.default, {
                                        buttonText: f.default.Messages.GUILD_STICKER_UPLOAD_FILE_BUTTON,
                                        filters: b,
                                        filename: null !== (w = null == $ ? void 0 : $.filename) && void 0 !== w ? w : "",
                                        placeholder: f.default.Messages.GUILD_STICKER_UPLOAD_FILE_PLACEHOLDER,
                                        onFileSelect: eA
                                    })
                                }), (0, _.jsx)(T.default, {
                                    className: h.formItemRowChild,
                                    guildId: x,
                                    emojiId: et,
                                    emojiName: e_,
                                    setEmojiId: ei,
                                    setEmojiName: ea,
                                    shouldUpdateBothEmojiFields: !0
                                })]
                            }), (0, _.jsx)(I.FormItem, {
                                title: f.default.Messages.GUILD_STICKER_UPLOAD_NAME_TITLE,
                                required: !0,
                                className: h.formItem,
                                children: (0, _.jsx)(I.TextInput, {
                                    value: q,
                                    onChange: Q,
                                    placeholder: f.default.Messages.GUILD_STICKER_UPLOAD_NAME_PLACEHOLDER,
                                    maxLength: 30
                                })
                            }), (0, _.jsxs)("div", {
                                className: h.formItem,
                                children: [(0, _.jsxs)(I.FormTitle, {
                                    children: [f.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_TITLE, (0, _.jsx)(I.Tooltip, {
                                        text: f.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_TOOLTIP,
                                        children: e => (0, _.jsx)(O.default, {
                                            className: h.infoIcon,
                                            ...e
                                        })
                                    })]
                                }), (0, _.jsx)(I.TextArea, {
                                    value: eE,
                                    onChange: el,
                                    placeholder: f.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_PLACEHOLDER,
                                    maxLength: 100
                                })]
                            }), null != eo && (0, _.jsx)(I.Text, {
                                className: h.formItem,
                                variant: "text-sm/normal",
                                color: "text-danger",
                                children: eo.message
                            })]
                        }), (0, _.jsxs)(I.ModalFooter, {
                            className: h.modalFooter,
                            children: [(0, _.jsx)(I.Button, {
                                type: "submit",
                                disabled: !ec,
                                children: es ? f.default.Messages.GUILD_STICKERS_UPDATE : f.default.Messages.UPLOAD
                            }), (0, _.jsx)(I.Button, {
                                look: I.Button.Looks.LINK,
                                color: (0, o.isThemeLight)(j) ? I.Button.Colors.PRIMARY : I.Button.Colors.WHITE,
                                onClick: k,
                                children: f.default.Messages.NEVERMIND
                            })]
                        })]
                    })]
                })
            }
        },
        783111: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return E
                }
            });
            var _ = i("666038");
            class a extends _.default {
                static createFromServer(e) {
                    return new a({
                        id: e.id,
                        guildId: e.guild_id,
                        userId: null != e.user ? e.user.id : e.user_id,
                        user: e.user,
                        ended: e.ended,
                        endsAt: null != e.ends_at && "" !== e.ends_at ? new Date(e.ends_at) : null
                    })
                }
                constructor(e) {
                    super(), this.id = e.id, this.guildId = e.guildId, this.userId = e.userId, this.user = e.user, this.ended = e.ended, this.endsAt = null != e.endsAt ? e.endsAt : null
                }
            }
            var E = a
        },
        476765: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                uid: function() {
                    return l
                },
                useUID: function() {
                    return n
                },
                UID: function() {
                    return r
                }
            });
            var _ = i("552473"),
                a = i.n(_),
                E = i("365444");
            let l = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return a(e)
                },
                n = () => (0, E.useLazyValue)(() => l()),
                r = e => {
                    let {
                        children: t
                    } = e;
                    return t(n())
                }
        },
        118503: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return E
                }
            });
            var _ = i("920040");
            i("773670");
            var a = i("75196");

            function E(e) {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: E = "currentColor",
                    foreground: l,
                    ...n
                } = e;
                return (0, _.jsxs)("svg", {
                    ...(0, a.default)(n),
                    width: t,
                    height: i,
                    viewBox: "0 0 8 12",
                    children: [(0, _.jsx)("path", {
                        d: "M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z",
                        fill: E,
                        className: l
                    }), (0, _.jsx)("path", {
                        d: "M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z",
                        fill: E,
                        className: l
                    })]
                })
            }
        }
    }
]);
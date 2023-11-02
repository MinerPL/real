(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["3050"], {
        689223: function(e, _, t) {
            "use strict";
            e.exports = t.p + "0678b217e47589207930.mp4"
        },
        429777: function(e, _, t) {
            "use strict";
            e.exports = t.p + "3d23b8d31086b7901261.png"
        },
        430857: function(e, _, t) {
            "use strict";
            e.exports = t.p + "d3456e390fa9fdbbc0c4.webm"
        },
        743506: function(e, _, t) {
            "use strict";
            t.r(_), t.d(_, {
                default: function() {
                    return R
                }
            });
            var E, i, a = t("37983"),
                l = t("884691"),
                I = t("77078"),
                n = t("851387"),
                o = t("130037"),
                T = t("772280"),
                r = t("58608"),
                s = t("387111"),
                A = t("49111"),
                u = t("782340"),
                O = t("676702");
            (E = i || (i = {}))[E.INITIAL = 0] = "INITIAL", E[E.OTHER_REASON = 1] = "OTHER_REASON";

            function c() {
                return [{
                    value: 0,
                    label: u.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE
                }, {
                    value: 1 * A.Durations.HOUR,
                    label: u.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR
                }, {
                    value: 6 * A.Durations.HOUR,
                    label: u.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR
                }, {
                    value: 12 * A.Durations.HOUR,
                    label: u.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR
                }, {
                    value: 1 * A.Durations.DAY,
                    label: u.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR
                }, {
                    value: 3 * A.Durations.DAY,
                    label: u.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D
                }, {
                    value: 7 * A.Durations.DAY,
                    label: u.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D
                }]
            }
            let N = c()[1].value;

            function R(e) {
                let {
                    guildId: _,
                    user: E,
                    location: R,
                    userIds: L,
                    onBanMultiple: M,
                    transitionState: C,
                    onClose: S,
                    canBulkBan: m = !1
                } = e, [d, U] = l.useState(N), [p, P] = l.useState(""), [g, D] = l.useState(i.INITIAL), [G, f] = l.useState(!1), h = (0, o.useTrackModerationAction)(_, {
                    location: R,
                    targetUserId: null == E ? void 0 : E.id,
                    targets: L
                }), B = l.useCallback(() => {
                    if (null != M) {
                        let e = null != L && (null == L ? void 0 : L.size) > 0 && m;
                        if (!e || G) return;
                        if ("" === p.trim() && !G) {
                            f(!0);
                            return
                        }
                        M(_, [...L], d, p)
                    } else {
                        if (null == E) return;
                        n.default.banUser(_, null == E ? void 0 : E.id, d, p)
                    }
                    h(o.ModerationActionType.BAN), S()
                }, [M, h, S, L, m, G, p, _, d, E]), H = l.useCallback(e => {
                    U(e)
                }, []), b = l.useCallback(e => {
                    let {
                        value: _
                    } = e;
                    P(_), f(!1)
                }, []), v = l.useCallback(e => {
                    P(e), G && f(!1)
                }, [G]), k = l.useCallback(() => {
                    P(""), D(i.OTHER_REASON)
                }, []), V = l.useCallback(() => {
                    D(i.INITIAL)
                }, []), F = [{
                    name: u.default.Messages.BAN_REASON_OPTION_SPAM_ACCOUNT,
                    value: u.default.Messages.BAN_REASON_OPTION_SPAM_ACCOUNT
                }, {
                    name: u.default.Messages.BAN_REASON_OPTION_HACKED_ACCOUNT,
                    value: u.default.Messages.BAN_REASON_OPTION_HACKED_ACCOUNT
                }, {
                    name: u.default.Messages.BAN_REASON_OPTION_BREAKING_RULES,
                    value: u.default.Messages.BAN_REASON_OPTION_BREAKING_RULES
                }], y = (() => {
                    if (null != M && null != L) return u.default.Messages.BAN_MULTIPLE_CONFIRM_TITLE.format({
                        count: null == L ? void 0 : L.size
                    });
                    return null == E ? "" : u.default.Messages.BAN_CONFIRM_TITLE.format({
                        username: "@".concat(s.default.getName(_, null, E))
                    })
                })();
                return (0, a.jsxs)(I.ModalRoot, {
                    transitionState: C,
                    children: [(0, a.jsx)(I.ModalHeader, {
                        separator: !1,
                        children: (0, a.jsx)(I.Heading, {
                            variant: "heading-md/semibold",
                            children: y
                        })
                    }), (0, a.jsxs)(I.ModalContent, {
                        className: O.modalContent,
                        children: [(0, a.jsxs)(r.default, {
                            autoPlay: !0,
                            loop: !0,
                            className: O.spacing,
                            width: 400,
                            children: [(0, a.jsx)("source", {
                                src: t("430857"),
                                type: "video/webm"
                            }), (0, a.jsx)("source", {
                                src: t("689223"),
                                type: "video/mp4"
                            }), (0, a.jsx)("img", {
                                alt: "",
                                src: t("429777")
                            })]
                        }), (0, a.jsxs)(I.FormItem, {
                            title: u.default.Messages.FORM_LABEL_REASON_BAN,
                            className: O.spacing,
                            children: [G && (0, a.jsx)(I.FormErrorBlock, {
                                className: O.error,
                                children: u.default.Messages.BAN_REASON_REQUIRED_ERROR
                            }), (0, a.jsx)(I.Sequencer, {
                                steps: [i.INITIAL, i.OTHER_REASON],
                                step: g,
                                children: (e => {
                                    switch (g) {
                                        case i.INITIAL:
                                            return (0, a.jsxs)(a.Fragment, {
                                                children: [(0, a.jsx)(I.RadioGroup, {
                                                    value: p,
                                                    options: e,
                                                    onChange: b,
                                                    radioItemClassName: O.radioItemStyles
                                                }), (0, a.jsxs)(I.Clickable, {
                                                    onClick: k,
                                                    className: O.banReasonOtherClickable,
                                                    children: [(0, a.jsx)(I.Text, {
                                                        variant: "text-md/medium",
                                                        color: "none",
                                                        children: u.default.Messages.OTHER
                                                    }), (0, a.jsx)(T.default, {
                                                        width: "16",
                                                        height: "16"
                                                    })]
                                                })]
                                            });
                                        case i.OTHER_REASON:
                                            return (0, a.jsx)(I.TextArea, {
                                                maxLength: A.MAX_REASON_LENGTH,
                                                onChange: v,
                                                value: p,
                                                rows: 5,
                                                autoFocus: !0
                                            })
                                    }
                                })(F)
                            })]
                        }), (0, a.jsx)(I.FormItem, {
                            title: u.default.Messages.FORM_LABEL_DELETE_MESSAGE_HISTORY,
                            className: O.spacing,
                            children: (0, a.jsx)(I.SingleSelect, {
                                options: c(),
                                value: d,
                                onChange: H
                            })
                        })]
                    }), (() => {
                        switch (g) {
                            case i.INITIAL:
                                return (0, a.jsxs)(I.ModalFooter, {
                                    className: O.footer,
                                    children: [(0, a.jsx)(I.Button, {
                                        type: "button",
                                        look: I.Button.Looks.LINK,
                                        color: I.Button.Colors.PRIMARY,
                                        onClick: S,
                                        children: u.default.Messages.CANCEL
                                    }), (0, a.jsx)(I.Button, {
                                        type: "submit",
                                        color: I.Button.Colors.RED,
                                        size: I.Button.Sizes.SMALL,
                                        onClick: B,
                                        children: u.default.Messages.BAN
                                    })]
                                });
                            case i.OTHER_REASON:
                                return (0, a.jsxs)(I.ModalFooter, {
                                    className: O.footerStepped,
                                    children: [(0, a.jsx)(I.Button, {
                                        className: O.cancel,
                                        innerClassName: O.cancel,
                                        type: "button",
                                        look: I.Button.Looks.LINK,
                                        color: I.Button.Colors.PRIMARY,
                                        size: I.Button.Sizes.SMALL,
                                        onClick: V,
                                        children: u.default.Messages.BACK
                                    }), (0, a.jsx)(I.Button, {
                                        type: "submit",
                                        color: I.Button.Colors.RED,
                                        size: I.Button.Sizes.SMALL,
                                        onClick: B,
                                        children: u.default.Messages.BAN
                                    })]
                                })
                        }
                    })()]
                })
            }
        },
        333805: function(e, _, t) {
            "use strict";
            t.r(_), t.d(_, {
                default: function() {
                    return l
                }
            });
            var E = t("872717"),
                i = t("49111"),
                a = t("782340");
            class l extends E.default.V6OrEarlierAPIError {
                constructor(e, _) {
                    super(e, _, null != _ ? a.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: i.Links.STATUS,
                        details: "".concat(_)
                    }) : a.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: i.Links.STATUS
                    }))
                }
            }
        },
        812204: function(e, _, t) {
            "use strict";
            t.r(_), t.d(_, {
                default: function() {
                    return a
                }
            }), (E = i || (i = {})).POPOUT_WINDOW = "popout window", E.OVERLAY = "overlay", E.NOTICE = "notice", E.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", E.BADGE = "badge", E.USER_SETTINGS = "user settings", E.USER_SETTINGS_MENU = "user settings menu", E.ACCOUNT = "account", E.TEXT_AND_IMAGES = "text and images", E.GUILD_SETTINGS = "guild settings", E.OVERVIEW = "overview", E.STICKERS = "stickers", E.VANITY_URL = "vanity url", E.PREMIUM_MARKETING = "premium marketing", E.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", E.PREMIUM_PAYMENT_MODAL = "premium payment modal", E.PREMIUM_UPSELL_ALERT = "premium upsell alert", E.PREMIUM_UPSELL_MODAL = "premium upsell modal", E.PREMIUM_SETTINGS = "premium settings", E.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", E.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", E.CHANNEL_CALL = "channel call", E.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", E.RTC_PANEL = "rtc panel", E.SOUNDBOARD_BUTTON = "soundboard button", E.SOUNDBOARD_POPOUT = "soundboard popout", E.SOUNDBOARD_WHEEL = "soundboard wheel", E.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", E.GIFT_BUTTON = "gift button", E.EXPRESSION_SUGGESTIONS = "expression suggestions", E.EMOJI_PICKER = "emoji picker", E.STICKER_PICKER = "sticker picker", E.STICKER_POPOUT = "sticker popout", E.PREMIUM_UPSELL = "premium upsell", E.EMPTY_STATE = "empty state", E.SUBSCRIPTION_DETAILS = "subscription details", E.SUBSCRIPTION_HEADER = "subscription header", E.ACCOUNT_CREDIT_BANNER = "account credit banner", E.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", E.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", E.STREAM_QUALITY_INDICATOR = "stream quality indicator", E.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", E.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", E.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", E.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", E.RPC = "rpc", E.BILLING_STANDALONE = "billing standalone", E.GUILD_CHANNEL_LIST = "guild channel list", E.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", E.STICKER_MESSAGE = "sticker message", E.CHANNEL_TEXT_AREA = "channel text area", E.HEADER_BAR = "header bar", E.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", E.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", E.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", E.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", E.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", E.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", E.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", E.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", E.GUILD_HEADER = "guild header", E.GUILD_BANNER = "guild banner", E.GUILD_BANNER_NOTICE = "guild banner notice", E.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", E.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", E.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", E.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", E.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", E.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", E.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", E.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", E.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", E.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", E.GUILDS_LIST = "guilds list", E.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", E.ACTIVITY_DIRECTORY = "activity directory", E.ACTIVITY_TILE = "activity tile", E.ACTIVITY_UPSELL = "activity upsell", E.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", E.INSTANT_INVITE_MODAL = "instant invite modal", E.IMAGE_CROPPING_MODAL = "image cropping modal", E.GIF_PICKER = "gif picker", E.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", E.INVITE_MODAL = "invite modal", E.INVITE_EMBED = "invite embed", E.NEW_GUILD_BUTTON = "new guild button", E.CHARACTER_COUNT = "character count", E.DM_CHANNEL = "dm channel", E.GUILD_CHANNEL = "guild channel", E.FORUM_CHANNEL = "forum channel", E.FILE_UPLOAD_POPOUT = "file upload popout", E.EMOJI = "emoji", E.PROFILE = "profile", E.PROFILE_MODAL = "profile modal", E.PROFILE_POPOUT = "profile popout", E.GUILD_PROFILE = "guild profile", E.EDIT_AVATAR = "edit avatar", E.EDIT_BANNER = "edit banner", E.CHAT_INPUT = "chat input", E.CREATE_THREAD = "create thread", E.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", E.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", E.SELECT_IMAGE_MODAL = "select image modal", E.VIDEO_BACKGROUND_OPTIONS = "video background options", E.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", E.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", E.CAMERA_PREVIEW = "camera preview", E.HOME_PAGE_PREMIUM_TAB = "home page premium tab", E.HOME_PAGE_SHOP_TAB = "home page shop tab", E.PREMIUM_MARKETING_SURFACE = "premium marketing surface", E.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", E.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", E.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", E.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", E.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", E.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", E.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", E.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", E.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", E.PREMIUM_MARKETING_FEATURE = "premium marketing feature", E.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", E.PREMIUM_MARKETING_FOOTER = "premium marketing footer", E.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", E.CHANNEL_CALL_ACTION_BAR = "channel call action bar", E.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", E.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", E.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", E.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", E.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", E.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", E.VOICE_CONTROL_TRAY = "voice control tray", E.ACTIVE_NOW_COLUMN = "active now column", E.CONTEXT_MENU = "context menu", E.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", E.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", E.CHANNEL_CATEGORY_MENU = "channel category menu", E.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", E.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", E.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", E.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", E.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", E.CHANNEL_TITLE_MENU = "channel title menu", E.GROUP_DM_MENU = "group dm menu", E.AUDIT_LOG_USER_MENU = "audit log user menu", E.BANNED_USER_MENU = "banned user menu", E.DM_USER_MENU = "dm user menu", E.GROUP_DM_USER_MENU = "group dm user menu", E.GUILD_CHANNEL_USER_MENU = "guild channel user menu", E.GUILD_MODERATION_USER_MENU = "guild moderation user menu", E.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", E.GUILD_SETTINGS_USER_MENU = "guild settings user menu", E.GUILD_USER_MENU = "guild user menu", E.THREAD_USER_MENU = "thread user menu", E.USER_GENERIC_MENU = "user generic menu", E.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", E.VOICE_ACTION_SHEET = "voice action sheet", E.FOCUSED_VOICE_CONTROLS = "focused voice controls", E.MASKED_LINK = "masked link", E.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", E.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", E.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", E.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", E.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", E.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", E.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", E.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", E.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", E.ACCOUNT_PROFILE_POPOUT = "account profile popout", E.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", E.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", E.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", E.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", E.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", E.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", E.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", E.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", E.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", E.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", E.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", E.STAGE_VIDEO_LIMIT = "stage video limit", E.ACTIVITIES_MINI_SHELF = "activities mini shelf", E.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", E.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", E.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", E.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", E.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", E.APP_ICON_EDITOR = "app icon editor", E.CLIENT_THEMES_EDITOR = "client themes editor", E.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", E.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", E.SHARE_NITRO_EMBED = "share nitro embed", E.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", E.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", E.REFERRAL_TRIALS_POPOUT = "referral trials popout", E.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", E.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", E.ACTIVITY_BOOKMARK = "activity bookmark", E.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", E.ACTIVITY_DETAIL_PAGE = "activity detail page", E.ACTIVITIES_PAGE = "activities page", E.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", E.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", E.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", E.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", E.ACTIVITIES_HAPPENING_NOW = "activities happening now", E.MEDIA_VIEWER = "media viewer", E.MESSAGE_LONG_PRESS_MENU = "message long press menu", E.COLLECTIBLES_SHOP = "collectibles shop", E.COLLECTIBLES_SHOP_CARD = "collectibles shop card", E.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", E.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", E.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", E.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", E.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", E.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", E.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", E.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", E.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", E.PREMIUM_BILLING_INFO = "premium billing info", E.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", E.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", E.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", E.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", E.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", E.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", E.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", E.PREMIUM_PLAN_SELECT = "premium_plan_select", E.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", E.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", E.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", E.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", E.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", E.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", E.MEMBER_SAFETY_PAGE = "member safety page", E.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", E.GUILD_MEMBER_MOD_VIEW = "guild member mod view", E.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", E.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", E.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", E.GUILD_SHOP_PAGE = "guild shop page", E.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", E.MESSAGE_REMIX_TAG = "message remix tag", E.MESSAGE_REMIX_BUTTON = "message remix button", E.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", E.CLIPS_SETTINGS = "clips settings", E.CLIPS_GALLERY = "clips gallery", E.CLIPS_GALLERY_ITEM = "clips gallery item", E.CLIPS_EDITOR = "clips editor", E.CLIPS_SHARE_MODAL = "clips share modal", E.CHANNEL_ATTACH_BUTTON = "channel attach button", E.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", E.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", E.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", E.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", E.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", E.GUILD_EVENT_CARD = "guild event card", E.EVENT_SETTINGS = "event settings";
            var E, i, a = i
        },
        130037: function(e, _, t) {
            "use strict";
            t.r(_), t.d(_, {
                useTrackMemberSearchUsed: function() {
                    return u
                },
                useTrackMemberFilterRolesUsed: function() {
                    return O
                },
                MemberSafetyFlagType: function() {
                    return a
                },
                useTrackMemberFilterSafetyFlagsUsed: function() {
                    return c
                },
                ModerationActionType: function() {
                    return l
                },
                useTrackModerationAction: function() {
                    return N
                }
            });
            var E, i, a, l, I = t("884691"),
                n = t("812204"),
                o = t("716241"),
                T = t("271938"),
                r = t("599110"),
                s = t("49111");

            function A(e, _, t) {
                var E;
                let i = {
                    ..._,
                    ...(0, o.collectGuildAnalyticsMetadata)(null !== (E = _.guild_id) && void 0 !== E ? E : t)
                };
                r.default.track(e, i)
            }

            function u(e) {
                let _ = I.useCallback(_ => {
                    ! function(e) {
                        let _ = {
                            guild_id: e,
                            location: n.default.MEMBER_SAFETY_PAGE
                        };
                        A(s.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, _)
                    }(e)
                }, [e]);
                return _
            }

            function O(e) {
                let _ = I.useCallback(_ => {
                    ! function(e, _) {
                        let t = {
                            selected_role_count: _.size,
                            guild_id: e,
                            location: n.default.MEMBER_SAFETY_PAGE
                        };
                        A(s.AnalyticEvents.MOD_DASH_FILTER_ROLES, t)
                    }(e, _)
                }, [e]);
                return _
            }(E = a || (a = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", E.COMMUNICATION_DISABLED = "communication_disabled";

            function c(e) {
                let _ = I.useCallback(_ => {
                    ! function(e, _) {
                        let t = {
                            flag_type: _,
                            guild_id: e,
                            location: n.default.MEMBER_SAFETY_PAGE
                        };
                        A(s.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, t)
                    }(e, _)
                }, [e]);
                return _
            }

            function N(e, _) {
                let {
                    location: t,
                    targetUserId: E,
                    targets: i
                } = _, a = I.useCallback(_ => {
                    let a = {
                        action_type: _,
                        mod_user_id: T.default.getId(),
                        guild_id: e,
                        location: t,
                        target_user_id: null != E ? E : void 0,
                        targets: null != i ? i : void 0
                    };
                    A(s.AnalyticEvents.MODERATION_ACTION, a)
                }, [e, t, E, i]);
                return a
            }(i = l || (l = {})).BAN = "ban", i.KICK = "kick", i.MUTE = "mute", i.TIMEOUT = "timeout", i.ADD_ROLE = "add_role", i.REMOVE_ROLE = "remove_role", i.COPY_ID = "copy_id", i.CHANGE_NICKNAME = "change_nickname"
        },
        387111: function(e, _, t) {
            "use strict";
            t.r(_), t.d(_, {
                getNickname: function() {
                    return o
                },
                default: function() {
                    return r
                }
            });
            var E = t("446674"),
                i = t("42203"),
                a = t("26989"),
                l = t("27618"),
                I = t("158998"),
                n = t("782340");

            function o(e, _, t) {
                if (null == t) return null;
                if (null != e) return a.default.getNick(e, t.id);
                if (null != _) {
                    let e = i.default.getChannel(_);
                    if (null == e ? void 0 : e.isPrivate()) return l.default.getNickname(t.id)
                }
                return null
            }

            function T(e, _, t) {
                var E;
                return null == t ? n.default.Messages.UNKNOWN_USER : null !== (E = o(e, _, t)) && void 0 !== E ? E : I.default.getName(t)
            }
            var r = {
                getNickname: o,
                getName: T,
                useName: function(e, _, t) {
                    return (0, E.useStateFromStores)([a.default, i.default, l.default], () => T(e, _, t))
                }
            }
        }
    }
]);
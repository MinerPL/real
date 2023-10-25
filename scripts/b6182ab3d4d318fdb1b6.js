(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["9311"], {
        689223: function(e, t, _) {
            "use strict";
            e.exports = _.p + "0678b217e47589207930.mp4"
        },
        429777: function(e, t, _) {
            "use strict";
            e.exports = _.p + "3d23b8d31086b7901261.png"
        },
        430857: function(e, t, _) {
            "use strict";
            e.exports = _.p + "d3456e390fa9fdbbc0c4.webm"
        },
        743506: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                default: function() {
                    return R
                }
            });
            var E, i, a = _("920040"),
                n = _("773670"),
                l = _("77078"),
                r = _("851387"),
                o = _("130037"),
                I = _("772280"),
                u = _("58608"),
                s = _("387111"),
                T = _("49111"),
                A = _("782340"),
                c = _("611522");
            (E = i || (i = {}))[E.INITIAL = 0] = "INITIAL", E[E.OTHER_REASON = 1] = "OTHER_REASON";

            function O() {
                return [{
                    value: 0,
                    label: A.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE
                }, {
                    value: 1 * T.Durations.HOUR,
                    label: A.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR
                }, {
                    value: 6 * T.Durations.HOUR,
                    label: A.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR
                }, {
                    value: 12 * T.Durations.HOUR,
                    label: A.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR
                }, {
                    value: 1 * T.Durations.DAY,
                    label: A.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR
                }, {
                    value: 3 * T.Durations.DAY,
                    label: A.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D
                }, {
                    value: 7 * T.Durations.DAY,
                    label: A.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D
                }]
            }
            let N = O()[1].value;

            function R(e) {
                let {
                    guildId: t,
                    user: E,
                    location: R,
                    userIds: L,
                    onBanMultiple: M,
                    transitionState: S,
                    onClose: d,
                    canBulkBan: C = !1
                } = e, [m, p] = n.useState(N), [U, P] = n.useState(""), [g, D] = n.useState(i.INITIAL), [f, G] = n.useState(!1), h = (0, o.useTrackModerationAction)(t, {
                    location: R,
                    targetUserId: null == E ? void 0 : E.id,
                    targets: L
                }), v = n.useCallback(() => {
                    if (null != M) {
                        let e = null != L && (null == L ? void 0 : L.size) > 0 && C;
                        if (!e || f) return;
                        if ("" === U.trim() && !f) {
                            G(!0);
                            return
                        }
                        M(t, [...L], m, U)
                    } else {
                        if (null == E) return;
                        r.default.banUser(t, null == E ? void 0 : E.id, m, U)
                    }
                    h(o.ModerationActionType.BAN), d()
                }, [M, h, d, L, C, f, U, t, m, E]), H = n.useCallback(e => {
                    p(e)
                }, []), b = n.useCallback(e => {
                    let {
                        value: t
                    } = e;
                    P(t), G(!1)
                }, []), B = n.useCallback(e => {
                    P(e), f && G(!1)
                }, [f]), k = n.useCallback(() => {
                    P(""), D(i.OTHER_REASON)
                }, []), V = n.useCallback(() => {
                    D(i.INITIAL)
                }, []), y = [{
                    name: A.default.Messages.BAN_REASON_OPTION_SPAM_ACCOUNT,
                    value: A.default.Messages.BAN_REASON_OPTION_SPAM_ACCOUNT
                }, {
                    name: A.default.Messages.BAN_REASON_OPTION_HACKED_ACCOUNT,
                    value: A.default.Messages.BAN_REASON_OPTION_HACKED_ACCOUNT
                }, {
                    name: A.default.Messages.BAN_REASON_OPTION_BREAKING_RULES,
                    value: A.default.Messages.BAN_REASON_OPTION_BREAKING_RULES
                }], F = (() => {
                    if (null != M && null != L) return A.default.Messages.BAN_MULTIPLE_CONFIRM_TITLE.format({
                        count: null == L ? void 0 : L.size
                    });
                    return null == E ? "" : A.default.Messages.BAN_CONFIRM_TITLE.format({
                        username: "@".concat(s.default.getName(t, null, E))
                    })
                })();
                return (0, a.jsxs)(l.ModalRoot, {
                    transitionState: S,
                    children: [(0, a.jsx)(l.ModalHeader, {
                        separator: !1,
                        children: (0, a.jsx)(l.Heading, {
                            variant: "heading-md/semibold",
                            children: F
                        })
                    }), (0, a.jsxs)(l.ModalContent, {
                        className: c.modalContent,
                        children: [(0, a.jsxs)(u.default, {
                            autoPlay: !0,
                            loop: !0,
                            className: c.spacing,
                            width: 400,
                            children: [(0, a.jsx)("source", {
                                src: _("430857"),
                                type: "video/webm"
                            }), (0, a.jsx)("source", {
                                src: _("689223"),
                                type: "video/mp4"
                            }), (0, a.jsx)("img", {
                                alt: "",
                                src: _("429777")
                            })]
                        }), (0, a.jsxs)(l.FormItem, {
                            title: A.default.Messages.FORM_LABEL_REASON_BAN,
                            className: c.spacing,
                            children: [f && (0, a.jsx)(l.FormErrorBlock, {
                                className: c.error,
                                children: A.default.Messages.BAN_REASON_REQUIRED_ERROR
                            }), (0, a.jsx)(l.Sequencer, {
                                steps: [i.INITIAL, i.OTHER_REASON],
                                step: g,
                                children: (e => {
                                    switch (g) {
                                        case i.INITIAL:
                                            return (0, a.jsxs)(a.Fragment, {
                                                children: [(0, a.jsx)(l.RadioGroup, {
                                                    value: U,
                                                    options: e,
                                                    onChange: b,
                                                    radioItemClassName: c.radioItemStyles
                                                }), (0, a.jsxs)(l.Clickable, {
                                                    onClick: k,
                                                    className: c.banReasonOtherClickable,
                                                    children: [(0, a.jsx)(l.Text, {
                                                        variant: "text-md/medium",
                                                        color: "none",
                                                        children: A.default.Messages.OTHER
                                                    }), (0, a.jsx)(I.default, {
                                                        width: "16",
                                                        height: "16"
                                                    })]
                                                })]
                                            });
                                        case i.OTHER_REASON:
                                            return (0, a.jsx)(l.TextArea, {
                                                maxLength: T.MAX_REASON_LENGTH,
                                                onChange: B,
                                                value: U,
                                                rows: 5,
                                                autoFocus: !0
                                            })
                                    }
                                })(y)
                            })]
                        }), (0, a.jsx)(l.FormItem, {
                            title: A.default.Messages.FORM_LABEL_DELETE_MESSAGE_HISTORY,
                            className: c.spacing,
                            children: (0, a.jsx)(l.SingleSelect, {
                                options: O(),
                                value: m,
                                onChange: H
                            })
                        })]
                    }), (() => {
                        switch (g) {
                            case i.INITIAL:
                                return (0, a.jsxs)(l.ModalFooter, {
                                    className: c.footer,
                                    children: [(0, a.jsx)(l.Button, {
                                        type: "button",
                                        look: l.Button.Looks.LINK,
                                        color: l.Button.Colors.PRIMARY,
                                        onClick: d,
                                        children: A.default.Messages.CANCEL
                                    }), (0, a.jsx)(l.Button, {
                                        type: "submit",
                                        color: l.Button.Colors.RED,
                                        size: l.Button.Sizes.SMALL,
                                        onClick: v,
                                        children: A.default.Messages.BAN
                                    })]
                                });
                            case i.OTHER_REASON:
                                return (0, a.jsxs)(l.ModalFooter, {
                                    className: c.footerStepped,
                                    children: [(0, a.jsx)(l.Button, {
                                        className: c.cancel,
                                        innerClassName: c.cancel,
                                        type: "button",
                                        look: l.Button.Looks.LINK,
                                        color: l.Button.Colors.PRIMARY,
                                        size: l.Button.Sizes.SMALL,
                                        onClick: V,
                                        children: A.default.Messages.BACK
                                    }), (0, a.jsx)(l.Button, {
                                        type: "submit",
                                        color: l.Button.Colors.RED,
                                        size: l.Button.Sizes.SMALL,
                                        onClick: v,
                                        children: A.default.Messages.BAN
                                    })]
                                })
                        }
                    })()]
                })
            }
        },
        333805: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                default: function() {
                    return n
                }
            });
            var E = _("990746"),
                i = _("49111"),
                a = _("782340");
            class n extends E.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? a.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: i.Links.STATUS,
                        details: "".concat(t)
                    }) : a.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: i.Links.STATUS
                    }))
                }
            }
        },
        812204: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                default: function() {
                    return a
                }
            }), (E = i || (i = {})).POPOUT_WINDOW = "popout window", E.OVERLAY = "overlay", E.NOTICE = "notice", E.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", E.BADGE = "badge", E.USER_SETTINGS = "user settings", E.USER_SETTINGS_MENU = "user settings menu", E.ACCOUNT = "account", E.TEXT_AND_IMAGES = "text and images", E.GUILD_SETTINGS = "guild settings", E.OVERVIEW = "overview", E.STICKERS = "stickers", E.VANITY_URL = "vanity url", E.PREMIUM_MARKETING = "premium marketing", E.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", E.PREMIUM_PAYMENT_MODAL = "premium payment modal", E.PREMIUM_UPSELL_ALERT = "premium upsell alert", E.PREMIUM_UPSELL_MODAL = "premium upsell modal", E.PREMIUM_SETTINGS = "premium settings", E.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", E.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", E.CHANNEL_CALL = "channel call", E.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", E.RTC_PANEL = "rtc panel", E.SOUNDBOARD_BUTTON = "soundboard button", E.SOUNDBOARD_POPOUT = "soundboard popout", E.SOUNDBOARD_WHEEL = "soundboard wheel", E.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", E.GIFT_BUTTON = "gift button", E.EXPRESSION_SUGGESTIONS = "expression suggestions", E.EMOJI_PICKER = "emoji picker", E.STICKER_PICKER = "sticker picker", E.STICKER_POPOUT = "sticker popout", E.PREMIUM_UPSELL = "premium upsell", E.EMPTY_STATE = "empty state", E.SUBSCRIPTION_DETAILS = "subscription details", E.SUBSCRIPTION_HEADER = "subscription header", E.ACCOUNT_CREDIT_BANNER = "account credit banner", E.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", E.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", E.STREAM_QUALITY_INDICATOR = "stream quality indicator", E.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", E.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", E.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", E.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", E.RPC = "rpc", E.BILLING_STANDALONE = "billing standalone", E.GUILD_CHANNEL_LIST = "guild channel list", E.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", E.STICKER_MESSAGE = "sticker message", E.CHANNEL_TEXT_AREA = "channel text area", E.HEADER_BAR = "header bar", E.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", E.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", E.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", E.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", E.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", E.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", E.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", E.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", E.GUILD_HEADER = "guild header", E.GUILD_BANNER = "guild banner", E.GUILD_BANNER_NOTICE = "guild banner notice", E.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", E.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", E.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", E.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", E.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", E.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", E.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", E.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", E.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", E.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", E.GUILDS_LIST = "guilds list", E.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", E.ACTIVITY_DIRECTORY = "activity directory", E.ACTIVITY_TILE = "activity tile", E.ACTIVITY_UPSELL = "activity upsell", E.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", E.INSTANT_INVITE_MODAL = "instant invite modal", E.IMAGE_CROPPING_MODAL = "image cropping modal", E.GIF_PICKER = "gif picker", E.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", E.INVITE_MODAL = "invite modal", E.INVITE_EMBED = "invite embed", E.NEW_GUILD_BUTTON = "new guild button", E.CHARACTER_COUNT = "character count", E.DM_CHANNEL = "dm channel", E.GUILD_CHANNEL = "guild channel", E.FORUM_CHANNEL = "forum channel", E.FILE_UPLOAD_POPOUT = "file upload popout", E.EMOJI = "emoji", E.PROFILE = "profile", E.PROFILE_MODAL = "profile modal", E.PROFILE_POPOUT = "profile popout", E.GUILD_PROFILE = "guild profile", E.EDIT_AVATAR = "edit avatar", E.EDIT_BANNER = "edit banner", E.CHAT_INPUT = "chat input", E.CREATE_THREAD = "create thread", E.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", E.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", E.SELECT_IMAGE_MODAL = "select image modal", E.VIDEO_BACKGROUND_OPTIONS = "video background options", E.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", E.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", E.CAMERA_PREVIEW = "camera preview", E.HOME_PAGE_PREMIUM_TAB = "home page premium tab", E.HOME_PAGE_SHOP_TAB = "home page shop tab", E.PREMIUM_MARKETING_SURFACE = "premium marketing surface", E.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", E.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", E.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", E.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", E.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", E.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", E.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", E.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", E.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", E.PREMIUM_MARKETING_FEATURE = "premium marketing feature", E.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", E.PREMIUM_MARKETING_FOOTER = "premium marketing footer", E.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", E.CHANNEL_CALL_ACTION_BAR = "channel call action bar", E.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", E.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", E.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", E.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", E.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", E.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", E.VOICE_CONTROL_TRAY = "voice control tray", E.ACTIVE_NOW_COLUMN = "active now column", E.CONTEXT_MENU = "context menu", E.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", E.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", E.CHANNEL_CATEGORY_MENU = "channel category menu", E.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", E.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", E.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", E.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", E.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", E.CHANNEL_TITLE_MENU = "channel title menu", E.GROUP_DM_MENU = "group dm menu", E.AUDIT_LOG_USER_MENU = "audit log user menu", E.BANNED_USER_MENU = "banned user menu", E.DM_USER_MENU = "dm user menu", E.GROUP_DM_USER_MENU = "group dm user menu", E.GUILD_CHANNEL_USER_MENU = "guild channel user menu", E.GUILD_MODERATION_USER_MENU = "guild moderation user menu", E.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", E.GUILD_SETTINGS_USER_MENU = "guild settings user menu", E.GUILD_USER_MENU = "guild user menu", E.THREAD_USER_MENU = "thread user menu", E.USER_GENERIC_MENU = "user generic menu", E.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", E.VOICE_ACTION_SHEET = "voice action sheet", E.FOCUSED_VOICE_CONTROLS = "focused voice controls", E.MASKED_LINK = "masked link", E.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", E.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", E.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", E.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", E.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", E.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", E.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", E.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", E.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", E.ACCOUNT_PROFILE_POPOUT = "account profile popout", E.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", E.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", E.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", E.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", E.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", E.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", E.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", E.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", E.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", E.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", E.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", E.STAGE_VIDEO_LIMIT = "stage video limit", E.ACTIVITIES_MINI_SHELF = "activities mini shelf", E.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", E.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", E.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", E.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", E.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", E.APP_ICON_EDITOR = "app icon editor", E.CLIENT_THEMES_EDITOR = "client themes editor", E.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", E.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", E.SHARE_NITRO_EMBED = "share nitro embed", E.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", E.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", E.REFERRAL_TRIALS_POPOUT = "referral trials popout", E.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", E.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", E.ACTIVITY_BOOKMARK = "activity bookmark", E.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", E.ACTIVITY_DETAIL_PAGE = "activity detail page", E.ACTIVITIES_PAGE = "activities page", E.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", E.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", E.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", E.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", E.ACTIVITIES_HAPPENING_NOW = "activities happening now", E.MEDIA_VIEWER = "media viewer", E.MESSAGE_LONG_PRESS_MENU = "message long press menu", E.COLLECTIBLES_SHOP = "collectibles shop", E.COLLECTIBLES_SHOP_CARD = "collectibles shop card", E.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", E.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", E.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", E.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", E.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", E.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", E.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", E.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", E.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", E.PREMIUM_BILLING_INFO = "premium billing info", E.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", E.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", E.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", E.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", E.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", E.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", E.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", E.PREMIUM_PLAN_SELECT = "premium_plan_select", E.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", E.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", E.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", E.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", E.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", E.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", E.MEMBER_SAFETY_PAGE = "member safety page", E.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", E.GUILD_MEMBER_MOD_VIEW = "guild member mod view", E.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", E.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", E.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", E.GUILD_SHOP_PAGE = "guild shop page", E.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", E.MESSAGE_REMIX_TAG = "message remix tag", E.MESSAGE_REMIX_BUTTON = "message remix button", E.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", E.CLIPS_SETTINGS = "clips settings", E.CLIPS_GALLERY = "clips gallery", E.CLIPS_GALLERY_ITEM = "clips gallery item", E.CLIPS_EDITOR = "clips editor", E.CLIPS_SHARE_MODAL = "clips share modal", E.CHANNEL_ATTACH_BUTTON = "channel attach button", E.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", E.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", E.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", E.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", E.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", E.GUILD_EVENT_CARD = "guild event card", E.EVENT_SETTINGS = "event settings";
            var E, i, a = i
        },
        130037: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                useTrackMemberSearchUsed: function() {
                    return A
                },
                useTrackMemberFilterRolesUsed: function() {
                    return c
                },
                MemberSafetyFlagType: function() {
                    return a
                },
                useTrackMemberFilterSafetyFlagsUsed: function() {
                    return O
                },
                ModerationActionType: function() {
                    return n
                },
                useTrackModerationAction: function() {
                    return N
                }
            });
            var E, i, a, n, l = _("773670"),
                r = _("812204"),
                o = _("716241"),
                I = _("271938"),
                u = _("599110"),
                s = _("49111");

            function T(e, t, _) {
                var E;
                let i = {
                    ...t,
                    ...(0, o.collectGuildAnalyticsMetadata)(null !== (E = t.guild_id) && void 0 !== E ? E : _)
                };
                u.default.track(e, i)
            }

            function A(e) {
                let t = l.useCallback(t => {
                    ! function(e) {
                        let t = {
                            guild_id: e,
                            location: r.default.MEMBER_SAFETY_PAGE
                        };
                        T(s.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, t)
                    }(e)
                }, [e]);
                return t
            }

            function c(e) {
                let t = l.useCallback(t => {
                    ! function(e, t) {
                        let _ = {
                            selected_role_count: t.size,
                            guild_id: e,
                            location: r.default.MEMBER_SAFETY_PAGE
                        };
                        T(s.AnalyticEvents.MOD_DASH_FILTER_ROLES, _)
                    }(e, t)
                }, [e]);
                return t
            }(E = a || (a = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", E.COMMUNICATION_DISABLED = "communication_disabled";

            function O(e) {
                let t = l.useCallback(t => {
                    ! function(e, t) {
                        let _ = {
                            flag_type: t,
                            guild_id: e,
                            location: r.default.MEMBER_SAFETY_PAGE
                        };
                        T(s.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, _)
                    }(e, t)
                }, [e]);
                return t
            }

            function N(e, t) {
                let {
                    location: _,
                    targetUserId: E,
                    targets: i
                } = t, a = l.useCallback(t => {
                    let a = {
                        action_type: t,
                        mod_user_id: I.default.getId(),
                        guild_id: e,
                        location: _,
                        target_user_id: null != E ? E : void 0,
                        targets: null != i ? i : void 0
                    };
                    T(s.AnalyticEvents.MODERATION_ACTION, a)
                }, [e, _, E, i]);
                return a
            }(i = n || (n = {})).BAN = "ban", i.KICK = "kick", i.MUTE = "mute", i.TIMEOUT = "timeout", i.ADD_ROLE = "add_role", i.REMOVE_ROLE = "remove_role", i.COPY_ID = "copy_id", i.CHANGE_NICKNAME = "change_nickname"
        },
        719347: function(e, t, _) {
            "use strict";
            var E, i;
            _.r(t), _.d(t, {
                MEDIA_MOSAIC_MAX_WIDTH: function() {
                    return a
                },
                MEDIA_MOSAIC_MAX_HEIGHT: function() {
                    return n
                },
                MINIMUM_MEDIA_MOSAIC_DIM: function() {
                    return l
                },
                MediaLayoutType: function() {
                    return E
                },
                SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE: function() {
                    return r
                }
            });
            let a = 550,
                n = 350,
                l = 40;
            (i = E || (E = {})).STATIC = "STATIC", i.RESPONSIVE = "RESPONSIVE", i.MOSAIC = "MOSAIC";
            let r = 20
        },
        58608: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                default: function() {
                    return I
                }
            });
            var E = _("920040"),
                i = _("773670"),
                a = _("117064"),
                n = _("498225"),
                l = _("206230"),
                r = _("719347");
            let o = e => {
                let {
                    externalRef: t,
                    autoPlay: _,
                    playOnHover: o,
                    responsive: I,
                    mediaLayoutType: u,
                    ...s
                } = e, T = (0, n.useStateFromStores)([l.default], () => l.default.useReducedMotion), A = i.useRef(null);

                function c() {
                    var e;
                    o && (null == A || null === (e = A.current) || void 0 === e || e.play())
                }

                function O() {
                    var e;
                    o && (null == A || null === (e = A.current) || void 0 === e || e.pause())
                }
                return i.useLayoutEffect(() => () => {
                    let {
                        current: e
                    } = A;
                    null != e && function(e) {
                        e.removeAttribute("src"), Array.from(e.children).forEach(e => {
                            (0, a.isElement)(e, HTMLSourceElement) && (e.removeAttribute("src"), e.removeAttribute("type")), (0, a.isElement)(e, HTMLImageElement) && e.removeAttribute("src")
                        });
                        try {
                            e.load()
                        } catch (e) {}
                    }(e)
                }, []), i.useLayoutEffect(() => ("function" == typeof t ? (t(null), t(A.current)) : null != t && (t.current = A.current), () => {
                    "function" == typeof t ? t(null) : null != t && (t.current = null)
                }), [t, A]), (0, E.jsx)("video", {
                    ref: A,
                    autoPlay: !T && !o && _,
                    onMouseEnter: c,
                    onMouseLeave: O,
                    onFocus: c,
                    onBlur: O,
                    style: u === r.MediaLayoutType.MOSAIC ? {
                        width: "100%",
                        height: "100%",
                        maxHeight: "inherit",
                        objectFit: "cover"
                    } : I ? function() {
                        return {
                            maxWidth: s.width,
                            maxHeight: s.height,
                            width: "100%",
                            height: "100%"
                        }
                    }() : {},
                    ...s
                })
            };
            var I = i.forwardRef((e, t) => (0, E.jsx)(o, {
                ...e,
                externalRef: t
            }))
        },
        387111: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                default: function() {
                    return u
                }
            });
            var E = _("498225"),
                i = _("42203"),
                a = _("26989"),
                n = _("27618"),
                l = _("158998"),
                r = _("782340");

            function o(e, t, _) {
                if (null == _) return null;
                if (null != e) return a.default.getNick(e, _.id);
                if (null != t) {
                    let e = i.default.getChannel(t);
                    if (null == e ? void 0 : e.isPrivate()) return n.default.getNickname(_.id)
                }
                return null
            }

            function I(e, t, _) {
                var E;
                return null == _ ? r.default.Messages.UNKNOWN_USER : null !== (E = o(e, t, _)) && void 0 !== E ? E : l.default.getName(_)
            }
            var u = {
                getNickname: o,
                getName: I,
                useName: function(e, t, _) {
                    return (0, E.useStateFromStores)([a.default, i.default, n.default], () => I(e, t, _))
                }
            }
        },
        840707: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                default: function() {
                    return n
                }
            });
            var E = _("990746"),
                i = _("599110");

            function a(e, t, _) {
                let {
                    trackedActionData: E,
                    ...a
                } = t, n = {
                    url: a.url,
                    request_method: _
                };
                return new Promise((t, _) => {
                    e(a).then(e => {
                        let _ = E.properties;
                        "function" == typeof E.properties && (_ = E.properties(e)), (0, i.trackNetworkAction)(E.event, {
                            status_code: e.status,
                            ...n,
                            ..._
                        }), t(e)
                    }).catch(e => {
                        var t, a;
                        let l = E.properties;
                        "function" == typeof E.properties && (l = E.properties(e)), (0, i.trackNetworkAction)(E.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (a = e.body) || void 0 === a ? void 0 : a.message,
                            ...n,
                            ...l
                        }), _(e)
                    })
                })
            }
            var n = {
                get: function(e) {
                    return a(E.default.get, e, "get")
                },
                post: function(e) {
                    return a(E.default.post, e, "post")
                },
                put: function(e) {
                    return a(E.default.put, e, "put")
                },
                patch: function(e) {
                    return a(E.default.patch, e, "patch")
                },
                delete: function(e) {
                    return a(E.default.delete, e, "del")
                }
            }
        }
    }
]);
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["27405"], {
        133457: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                fetchEULA: function() {
                    return l
                }
            });
            var E = _("872717"),
                i = _("913144"),
                n = _("49111");
            async function l(e) {
                let t = await E.default.get({
                    url: n.Endpoints.STORE_EULA(e),
                    oldFormErrors: !0
                });
                i.default.dispatch({
                    type: "EULA_FETCH_SUCCESS",
                    eula: t.body
                })
            }
        },
        523360: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                default: function() {
                    return u
                }
            });
            var E = _("37983"),
                i = _("884691"),
                n = _("446674"),
                l = _("77078"),
                a = _("133457"),
                r = _("784736"),
                o = _("145131"),
                I = _("9074"),
                T = _("782340"),
                c = _("639420");

            function u(e) {
                var t;
                let {
                    eulaId: _,
                    transitionState: u,
                    onClose: s
                } = e, A = (0, n.useStateFromStores)([r.default], () => r.default.getEULA(_));
                i.useEffect(() => {
                    (0, a.fetchEULA)(_)
                }, [_]);
                let O = null !== (t = null == A ? void 0 : A.name) && void 0 !== t ? t : T.default.Messages.LOADING,
                    L = null != A ? (0, E.jsx)(I.default, {
                        children: A.content,
                        className: c.markdown
                    }) : (0, E.jsx)(l.Spinner, {
                        className: c.spinner
                    });
                return (0, E.jsxs)(l.ModalRoot, {
                    transitionState: u,
                    size: l.ModalSize.SMALL,
                    "aria-label": O,
                    children: [(0, E.jsxs)(l.ModalHeader, {
                        justify: o.default.Justify.BETWEEN,
                        children: [(0, E.jsx)(l.Heading, {
                            variant: "heading-lg/semibold",
                            children: O
                        }), (0, E.jsx)(l.ModalCloseButton, {
                            onClick: s
                        })]
                    }), (0, E.jsx)(l.ModalContent, {
                        children: L
                    })]
                })
            }
        },
        753809: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                LinkIcon: function() {
                    return l
                }
            });
            var E = _("37983");
            _("884691");
            var i = _("669491"),
                n = _("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: _ = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...r
                } = e;
                return (0, E.jsx)("svg", {
                    ...(0, n.default)(r),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: _,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, E.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M16.293 14.707a1 1 0 0 1 0-1.414l2.5-2.5a3.95 3.95 0 1 0-5.586-5.586l-2.5 2.5a1 1 0 1 1-1.414-1.414l2.5-2.5a5.95 5.95 0 0 1 8.414 8.414l-2.5 2.5a1 1 0 0 1-1.414 0ZM7.707 9.293a1 1 0 0 1 0 1.414l-2.5 2.5a3.95 3.95 0 0 0 5.586 5.586l2.5-2.5a1 1 0 0 1 1.414 1.414l-2.5 2.5a5.95 5.95 0 1 1-8.414-8.414l2.5-2.5a1 1 0 0 1 1.414 0Zm7 1.414a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 1.414 1.414l4-4Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        812204: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                default: function() {
                    return n
                }
            }), (E = i || (i = {})).POPOUT_WINDOW = "popout window", E.OVERLAY = "overlay", E.NOTICE = "notice", E.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", E.BADGE = "badge", E.USER_SETTINGS = "user settings", E.USER_SETTINGS_MENU = "user settings menu", E.ACCOUNT = "account", E.TEXT_AND_IMAGES = "text and images", E.GUILD_SETTINGS = "guild settings", E.OVERVIEW = "overview", E.STICKERS = "stickers", E.VANITY_URL = "vanity url", E.PREMIUM_MARKETING = "premium marketing", E.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", E.PREMIUM_PAYMENT_MODAL = "premium payment modal", E.PREMIUM_UPSELL_ALERT = "premium upsell alert", E.PREMIUM_UPSELL_MODAL = "premium upsell modal", E.PREMIUM_SETTINGS = "premium settings", E.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", E.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", E.CHANNEL_CALL = "channel call", E.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", E.RTC_PANEL = "rtc panel", E.SOUNDBOARD_BUTTON = "soundboard button", E.SOUNDBOARD_POPOUT = "soundboard popout", E.SOUNDBOARD_WHEEL = "soundboard wheel", E.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", E.GIFT_BUTTON = "gift button", E.EXPRESSION_SUGGESTIONS = "expression suggestions", E.EMOJI_PICKER = "emoji picker", E.STICKER_PICKER = "sticker picker", E.STICKER_POPOUT = "sticker popout", E.PREMIUM_UPSELL = "premium upsell", E.EMPTY_STATE = "empty state", E.SUBSCRIPTION_DETAILS = "subscription details", E.SUBSCRIPTION_HEADER = "subscription header", E.ACCOUNT_CREDIT_BANNER = "account credit banner", E.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", E.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", E.STREAM_QUALITY_INDICATOR = "stream quality indicator", E.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", E.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", E.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", E.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", E.RPC = "rpc", E.BILLING_STANDALONE = "billing standalone", E.GUILD_CHANNEL_LIST = "guild channel list", E.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", E.STICKER_MESSAGE = "sticker message", E.CHANNEL_TEXT_AREA = "channel text area", E.HEADER_BAR = "header bar", E.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", E.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", E.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", E.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", E.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", E.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", E.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", E.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", E.GUILD_HEADER = "guild header", E.GUILD_BANNER = "guild banner", E.GUILD_BANNER_NOTICE = "guild banner notice", E.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", E.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", E.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", E.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", E.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", E.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", E.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", E.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", E.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", E.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", E.GUILDS_LIST = "guilds list", E.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", E.ACTIVITY_DIRECTORY = "activity directory", E.ACTIVITY_TILE = "activity tile", E.ACTIVITY_UPSELL = "activity upsell", E.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", E.INSTANT_INVITE_MODAL = "instant invite modal", E.IMAGE_CROPPING_MODAL = "image cropping modal", E.GIF_PICKER = "gif picker", E.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", E.INVITE_MODAL = "invite modal", E.INVITE_EMBED = "invite embed", E.NEW_GUILD_BUTTON = "new guild button", E.CHARACTER_COUNT = "character count", E.DM_CHANNEL = "dm channel", E.GUILD_CHANNEL = "guild channel", E.FORUM_CHANNEL = "forum channel", E.FILE_UPLOAD_POPOUT = "file upload popout", E.EMOJI = "emoji", E.PROFILE = "profile", E.PROFILE_MODAL = "profile modal", E.PROFILE_POPOUT = "profile popout", E.GUILD_PROFILE = "guild profile", E.EDIT_AVATAR = "edit avatar", E.EDIT_BANNER = "edit banner", E.CHAT_INPUT = "chat input", E.CREATE_THREAD = "create thread", E.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", E.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", E.SELECT_IMAGE_MODAL = "select image modal", E.VIDEO_BACKGROUND_OPTIONS = "video background options", E.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", E.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", E.CAMERA_PREVIEW = "camera preview", E.HOME_PAGE_PREMIUM_TAB = "home page premium tab", E.HOME_PAGE_SHOP_TAB = "home page shop tab", E.PREMIUM_MARKETING_SURFACE = "premium marketing surface", E.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", E.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", E.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", E.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", E.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", E.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", E.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", E.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", E.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", E.PREMIUM_MARKETING_FEATURE = "premium marketing feature", E.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", E.PREMIUM_MARKETING_FOOTER = "premium marketing footer", E.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", E.CHANNEL_CALL_ACTION_BAR = "channel call action bar", E.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", E.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", E.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", E.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", E.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", E.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", E.VOICE_CONTROL_TRAY = "voice control tray", E.ACTIVE_NOW_COLUMN = "active now column", E.CONTEXT_MENU = "context menu", E.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", E.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", E.CHANNEL_CATEGORY_MENU = "channel category menu", E.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", E.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", E.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", E.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", E.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", E.CHANNEL_TITLE_MENU = "channel title menu", E.GROUP_DM_MENU = "group dm menu", E.AUDIT_LOG_USER_MENU = "audit log user menu", E.BANNED_USER_MENU = "banned user menu", E.DM_USER_MENU = "dm user menu", E.GROUP_DM_USER_MENU = "group dm user menu", E.GUILD_CHANNEL_USER_MENU = "guild channel user menu", E.GUILD_MODERATION_USER_MENU = "guild moderation user menu", E.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", E.GUILD_SETTINGS_USER_MENU = "guild settings user menu", E.GUILD_USER_MENU = "guild user menu", E.THREAD_USER_MENU = "thread user menu", E.USER_GENERIC_MENU = "user generic menu", E.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", E.VOICE_ACTION_SHEET = "voice action sheet", E.FOCUSED_VOICE_CONTROLS = "focused voice controls", E.MASKED_LINK = "masked link", E.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", E.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", E.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", E.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", E.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", E.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", E.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", E.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", E.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", E.ACCOUNT_PROFILE_POPOUT = "account profile popout", E.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", E.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", E.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", E.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", E.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", E.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", E.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", E.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", E.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", E.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", E.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", E.STAGE_VIDEO_LIMIT = "stage video limit", E.ACTIVITIES_MINI_SHELF = "activities mini shelf", E.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", E.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", E.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", E.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", E.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", E.APP_ICON_EDITOR = "app icon editor", E.CLIENT_THEMES_EDITOR = "client themes editor", E.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", E.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", E.SHARE_NITRO_EMBED = "share nitro embed", E.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", E.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", E.REFERRAL_TRIALS_POPOUT = "referral trials popout", E.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", E.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", E.ACTIVITY_BOOKMARK = "activity bookmark", E.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", E.ACTIVITY_DETAIL_PAGE = "activity detail page", E.ACTIVITIES_PAGE = "activities page", E.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", E.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", E.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", E.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", E.ACTIVITIES_HAPPENING_NOW = "activities happening now", E.MEDIA_VIEWER = "media viewer", E.MESSAGE_LONG_PRESS_MENU = "message long press menu", E.COLLECTIBLES_SHOP = "collectibles shop", E.COLLECTIBLES_SHOP_CARD = "collectibles shop card", E.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", E.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", E.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", E.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", E.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", E.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", E.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", E.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", E.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", E.PREMIUM_BILLING_INFO = "premium billing info", E.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", E.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", E.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", E.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", E.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", E.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", E.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", E.PREMIUM_PLAN_SELECT = "premium_plan_select", E.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", E.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", E.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", E.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", E.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", E.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", E.MEMBER_SAFETY_PAGE = "member safety page", E.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", E.GUILD_MEMBER_MOD_VIEW = "guild member mod view", E.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", E.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", E.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", E.GUILD_SHOP_PAGE = "guild shop page", E.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", E.MESSAGE_REMIX_TAG = "message remix tag", E.MESSAGE_REMIX_BUTTON = "message remix button", E.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", E.CLIPS_SETTINGS = "clips settings", E.CLIPS_GALLERY = "clips gallery", E.CLIPS_GALLERY_ITEM = "clips gallery item", E.CLIPS_EDITOR = "clips editor", E.CLIPS_SHARE_MODAL = "clips share modal", E.CHANNEL_ATTACH_BUTTON = "channel attach button", E.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", E.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", E.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", E.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", E.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", E.GUILD_EVENT_CARD = "guild event card", E.EVENT_SETTINGS = "event settings";
            var E, i, n = i
        },
        784736: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                default: function() {
                    return a
                }
            });
            var E = _("446674"),
                i = _("913144");
            let n = {};
            class l extends E.default.Store {
                getEULA(e) {
                    return n[e]
                }
            }
            l.displayName = "EULAStore";
            var a = new l(i.default, {
                EULA_FETCH_SUCCESS: function(e) {
                    let {
                        eula: t
                    } = e;
                    n[t.id] = t
                }
            })
        },
        895530: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                default: function() {
                    return a
                }
            });
            var E = _("37983");
            _("884691");
            var i = _("414456"),
                n = _.n(i),
                l = _("813986");

            function a(e) {
                let {
                    children: t,
                    tag: _,
                    className: i
                } = e;
                return _ = null != _ ? _ : "h3", (0, E.jsx)(_, {
                    className: n(l.title, i),
                    children: t
                })
            }
        },
        9074: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                default: function() {
                    return C
                }
            });
            var E, i = _("37983"),
                n = _("884691"),
                l = _("414456"),
                a = _.n(l),
                r = _("132710"),
                o = _.n(r),
                I = _("269936"),
                T = _("647374"),
                c = _("47677"),
                u = _("895530"),
                s = _("238165"),
                A = _("862839");
            let O = new RegExp("https?://".concat(null !== (E = window.GLOBAL_ENV.CDN_HOST) && void 0 !== E ? E : ""));

            function L(e) {
                return "string" == typeof e.content ? e.content : d(e.content)
            }
            let N = {
                    ...o.defaultRules,
                    heading: {
                        ...o.defaultRules.heading,
                        react(e, t, _) {
                            let E = "h".concat(e.level);
                            return (0, i.jsx)(u.default, {
                                tag: E,
                                children: t(e.content, _)
                            }, _.key)
                        }
                    },
                    paragraph: {
                        ...o.defaultRules.paragraph,
                        react: (e, t, _) => (0, i.jsx)("div", {
                            className: s.paragraph,
                            children: t(e.content, _)
                        }, _.key)
                    },
                    strong: {
                        ...o.defaultRules.strong,
                        order: 6
                    },
                    em: {
                        ...o.defaultRules.em,
                        order: 6
                    },
                    u: {
                        ...o.defaultRules.u,
                        order: 5
                    },
                    del: {
                        ...o.defaultRules.del,
                        order: 6
                    },
                    link: {
                        ...T.default,
                        ...(0, c.default)({
                            enableBuildOverrides: !1
                        }),
                        order: 6
                    },
                    blockQuote: {
                        ...o.defaultRules.blockQuote,
                        react: (e, t, _) => (0, i.jsx)("blockquote", {
                            className: s.blockquote,
                            children: L(e)
                        }, _.key)
                    },
                    image: {
                        ...o.defaultRules.image,
                        order: 6,
                        match(e, t, _) {
                            let E = o.defaultRules.image;
                            if (null == E || null == E.match) return !1;
                            let i = E.match(e, t, _);
                            if (null != i && Array.isArray(i) && i.length >= 3) {
                                let e = i[2];
                                if ("string" == typeof e) return null != e.match(O) ? i : null
                            }
                            return !1
                        }
                    },
                    inlineCode: {
                        ...o.defaultRules.inlineCode,
                        order: 6,
                        react: (e, t, _) => (0, i.jsx)("code", {
                            className: s.codeInline,
                            children: L(e)
                        }, _.key)
                    },
                    codeBlock: {
                        ...o.defaultRules.codeBlock,
                        react(e, t, E) {
                            let n = () => (0, i.jsx)("pre", {
                                children: (0, i.jsx)("code", {
                                    className: a(A.scrollbarGhostHairline, "hljs"),
                                    children: L(e)
                                })
                            }, E.key);
                            return (0, i.jsx)(I.LazyLibrary, {
                                createPromise: () => _.el("86256").then(_.bind(_, "86256")),
                                webpackId: "86256",
                                renderFallback: n,
                                render: t => {
                                    if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return n();
                                    {
                                        let _ = t.highlight(e.lang, e.content, !0);
                                        return null == _ ? n() : (0, i.jsx)("pre", {
                                            children: (0, i.jsx)("code", {
                                                className: a(A.scrollbarGhostHairline, "hljs", _.language),
                                                dangerouslySetInnerHTML: {
                                                    __html: _.value
                                                }
                                            })
                                        }, E.key)
                                    }
                                }
                            }, E.key)
                        }
                    }
                },
                R = o.parserFor(N),
                d = o.reactFor(o.ruleOutput(N, "react"));
            class m extends n.PureComponent {
                render() {
                    let {
                        className: e,
                        children: t,
                        state: _,
                        parser: E,
                        output: n
                    } = this.props, l = "".concat(t, "\n\n"), r = E(l, {
                        inline: !1,
                        ..._
                    }), o = n(r);
                    return (0, i.jsx)("div", {
                        className: a(s.markdown, e),
                        children: o
                    })
                }
            }
            m.rules = N, m.defaultProps = {
                parser: R,
                output: d
            };
            var C = m
        },
        83900: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                default: function() {
                    return a
                }
            });
            var E = _("37983");
            _("884691");
            var i = _("469563"),
                n = _("753809"),
                l = _("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: _ = 24,
                        color: i = "currentColor",
                        foreground: n,
                        ...a
                    } = e;
                    return (0, E.jsx)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: _,
                        viewBox: "0 0 24 24",
                        children: (0, E.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, E.jsx)("path", {
                                className: n,
                                fill: i,
                                d: "M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z"
                            }), (0, E.jsx)("rect", {
                                width: "24",
                                height: "24"
                            })]
                        })
                    })
                }, n.LinkIcon)
        },
        306160: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                SUPPORTS_COPY: function() {
                    return l
                },
                copy: function() {
                    return a
                }
            });
            var E = _("281071"),
                i = _("773336"),
                n = _("50885");
            let l = (() => {
                if (i.isPlatformEmbedded) return null != n.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function a(e) {
                return !!l && (i.isPlatformEmbedded ? (n.default.copy(e), !0) : E.copy(e))
            }
        },
        281071: function(e, t, _) {
            "use strict";

            function E(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let _ = document.createRange(),
                    E = window.getSelection(),
                    i = document.createElement("textarea");
                i.value = e, i.contentEditable = "true", i.style.visibility = "none", t.appendChild(i), _.selectNodeContents(i), null == E || E.removeAllRanges(), null == E || E.addRange(_), i.focus(), i.setSelectionRange(0, e.length);
                let n = document.execCommand("copy");
                return t.removeChild(i), n
            }
            _.r(t), _.d(t, {
                copy: function() {
                    return E
                }
            })
        }
    }
]);
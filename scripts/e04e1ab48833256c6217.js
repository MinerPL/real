(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["85042"], {
        133457: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                fetchEULA: function() {
                    return r
                }
            });
            var n = i("990746"),
                _ = i("913144"),
                E = i("49111");
            async function r(e) {
                let t = await n.default.get({
                    url: E.Endpoints.STORE_EULA(e),
                    oldFormErrors: !0
                });
                _.default.dispatch({
                    type: "EULA_FETCH_SUCCESS",
                    eula: t.body
                })
            }
        },
        523360: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return T
                }
            });
            var n = i("920040"),
                _ = i("773670"),
                E = i("498225"),
                r = i("77078"),
                l = i("133457"),
                a = i("784736"),
                o = i("145131"),
                I = i("9074"),
                c = i("782340"),
                u = i("978719");

            function T(e) {
                var t;
                let {
                    eulaId: i,
                    transitionState: T,
                    onClose: s
                } = e, A = (0, E.useStateFromStores)([a.default], () => a.default.getEULA(i));
                _.useEffect(() => {
                    (0, l.fetchEULA)(i)
                }, [i]);
                let O = null !== (t = null == A ? void 0 : A.name) && void 0 !== t ? t : c.default.Messages.LOADING,
                    L = null != A ? (0, n.jsx)(I.default, {
                        children: A.content,
                        className: u.markdown
                    }) : (0, n.jsx)(r.Spinner, {
                        className: u.spinner
                    });
                return (0, n.jsxs)(r.ModalRoot, {
                    transitionState: T,
                    size: r.ModalSize.SMALL,
                    "aria-label": O,
                    children: [(0, n.jsxs)(r.ModalHeader, {
                        justify: o.default.Justify.BETWEEN,
                        children: [(0, n.jsx)(r.Heading, {
                            variant: "heading-lg/semibold",
                            children: O
                        }), (0, n.jsx)(r.ModalCloseButton, {
                            onClick: s
                        })]
                    }), (0, n.jsx)(r.ModalContent, {
                        children: L
                    })]
                })
            }
        },
        753809: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                LinkIcon: function() {
                    return r
                }
            });
            var n = i("920040");
            i("773670");
            var _ = i("912557"),
                E = i("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: r = _.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...a
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, E.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M16.293 14.707a1 1 0 0 1 0-1.414l2.5-2.5a3.95 3.95 0 1 0-5.586-5.586l-2.5 2.5a1 1 0 1 1-1.414-1.414l2.5-2.5a5.95 5.95 0 0 1 8.414 8.414l-2.5 2.5a1 1 0 0 1-1.414 0ZM7.707 9.293a1 1 0 0 1 0 1.414l-2.5 2.5a3.95 3.95 0 0 0 5.586 5.586l2.5-2.5a1 1 0 0 1 1.414 1.414l-2.5 2.5a5.95 5.95 0 1 1-8.414-8.414l2.5-2.5a1 1 0 0 1 1.414 0Zm7 1.414a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 1.414 1.414l4-4Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        812204: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return E
                }
            }), (n = _ || (_ = {})).POPOUT_WINDOW = "popout window", n.OVERLAY = "overlay", n.NOTICE = "notice", n.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", n.BADGE = "badge", n.USER_SETTINGS = "user settings", n.USER_SETTINGS_MENU = "user settings menu", n.ACCOUNT = "account", n.TEXT_AND_IMAGES = "text and images", n.GUILD_SETTINGS = "guild settings", n.OVERVIEW = "overview", n.STICKERS = "stickers", n.VANITY_URL = "vanity url", n.PREMIUM_MARKETING = "premium marketing", n.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", n.PREMIUM_PAYMENT_MODAL = "premium payment modal", n.PREMIUM_UPSELL_ALERT = "premium upsell alert", n.PREMIUM_UPSELL_MODAL = "premium upsell modal", n.PREMIUM_SETTINGS = "premium settings", n.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", n.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", n.CHANNEL_CALL = "channel call", n.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", n.RTC_PANEL = "rtc panel", n.SOUNDBOARD_BUTTON = "soundboard button", n.SOUNDBOARD_POPOUT = "soundboard popout", n.SOUNDBOARD_WHEEL = "soundboard wheel", n.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", n.GIFT_BUTTON = "gift button", n.EXPRESSION_SUGGESTIONS = "expression suggestions", n.EMOJI_PICKER = "emoji picker", n.STICKER_PICKER = "sticker picker", n.STICKER_POPOUT = "sticker popout", n.PREMIUM_UPSELL = "premium upsell", n.EMPTY_STATE = "empty state", n.SUBSCRIPTION_DETAILS = "subscription details", n.SUBSCRIPTION_HEADER = "subscription header", n.ACCOUNT_CREDIT_BANNER = "account credit banner", n.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", n.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", n.STREAM_QUALITY_INDICATOR = "stream quality indicator", n.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", n.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", n.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", n.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", n.RPC = "rpc", n.BILLING_STANDALONE = "billing standalone", n.GUILD_CHANNEL_LIST = "guild channel list", n.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", n.STICKER_MESSAGE = "sticker message", n.CHANNEL_TEXT_AREA = "channel text area", n.HEADER_BAR = "header bar", n.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", n.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", n.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", n.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", n.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", n.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", n.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", n.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", n.GUILD_HEADER = "guild header", n.GUILD_BANNER = "guild banner", n.GUILD_BANNER_NOTICE = "guild banner notice", n.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", n.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", n.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", n.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", n.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", n.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", n.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", n.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", n.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", n.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", n.GUILDS_LIST = "guilds list", n.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", n.ACTIVITY_DIRECTORY = "activity directory", n.ACTIVITY_TILE = "activity tile", n.ACTIVITY_UPSELL = "activity upsell", n.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", n.INSTANT_INVITE_MODAL = "instant invite modal", n.IMAGE_CROPPING_MODAL = "image cropping modal", n.GIF_PICKER = "gif picker", n.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", n.INVITE_MODAL = "invite modal", n.INVITE_EMBED = "invite embed", n.NEW_GUILD_BUTTON = "new guild button", n.CHARACTER_COUNT = "character count", n.DM_CHANNEL = "dm channel", n.GUILD_CHANNEL = "guild channel", n.FORUM_CHANNEL = "forum channel", n.FILE_UPLOAD_POPOUT = "file upload popout", n.EMOJI = "emoji", n.PROFILE = "profile", n.PROFILE_MODAL = "profile modal", n.PROFILE_POPOUT = "profile popout", n.GUILD_PROFILE = "guild profile", n.EDIT_AVATAR = "edit avatar", n.EDIT_BANNER = "edit banner", n.CHAT_INPUT = "chat input", n.CREATE_THREAD = "create thread", n.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", n.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", n.SELECT_IMAGE_MODAL = "select image modal", n.VIDEO_BACKGROUND_OPTIONS = "video background options", n.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", n.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", n.CAMERA_PREVIEW = "camera preview", n.HOME_PAGE_PREMIUM_TAB = "home page premium tab", n.HOME_PAGE_SHOP_TAB = "home page shop tab", n.PREMIUM_MARKETING_SURFACE = "premium marketing surface", n.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", n.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", n.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", n.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", n.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", n.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", n.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", n.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", n.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", n.PREMIUM_MARKETING_FEATURE = "premium marketing feature", n.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", n.PREMIUM_MARKETING_FOOTER = "premium marketing footer", n.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", n.CHANNEL_CALL_ACTION_BAR = "channel call action bar", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", n.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", n.VOICE_CONTROL_TRAY = "voice control tray", n.ACTIVE_NOW_COLUMN = "active now column", n.CONTEXT_MENU = "context menu", n.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", n.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", n.CHANNEL_CATEGORY_MENU = "channel category menu", n.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", n.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", n.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", n.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", n.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", n.CHANNEL_TITLE_MENU = "channel title menu", n.GROUP_DM_MENU = "group dm menu", n.AUDIT_LOG_USER_MENU = "audit log user menu", n.BANNED_USER_MENU = "banned user menu", n.DM_USER_MENU = "dm user menu", n.GROUP_DM_USER_MENU = "group dm user menu", n.GUILD_CHANNEL_USER_MENU = "guild channel user menu", n.GUILD_MODERATION_USER_MENU = "guild moderation user menu", n.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", n.GUILD_SETTINGS_USER_MENU = "guild settings user menu", n.GUILD_USER_MENU = "guild user menu", n.THREAD_USER_MENU = "thread user menu", n.USER_GENERIC_MENU = "user generic menu", n.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", n.VOICE_ACTION_SHEET = "voice action sheet", n.FOCUSED_VOICE_CONTROLS = "focused voice controls", n.MASKED_LINK = "masked link", n.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", n.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", n.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", n.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", n.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", n.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", n.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", n.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", n.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", n.ACCOUNT_PROFILE_POPOUT = "account profile popout", n.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", n.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", n.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", n.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", n.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", n.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", n.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", n.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", n.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", n.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", n.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", n.STAGE_VIDEO_LIMIT = "stage video limit", n.ACTIVITIES_MINI_SHELF = "activities mini shelf", n.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", n.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", n.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", n.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", n.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", n.APP_ICON_EDITOR = "app icon editor", n.CLIENT_THEMES_EDITOR = "client themes editor", n.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", n.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", n.SHARE_NITRO_EMBED = "share nitro embed", n.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", n.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", n.REFERRAL_TRIALS_POPOUT = "referral trials popout", n.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", n.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", n.ACTIVITY_BOOKMARK = "activity bookmark", n.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", n.ACTIVITY_DETAIL_PAGE = "activity detail page", n.ACTIVITIES_PAGE = "activities page", n.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", n.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", n.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", n.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", n.ACTIVITIES_HAPPENING_NOW = "activities happening now", n.MEDIA_VIEWER = "media viewer", n.MESSAGE_LONG_PRESS_MENU = "message long press menu", n.COLLECTIBLES_SHOP = "collectibles shop", n.COLLECTIBLES_SHOP_CARD = "collectibles shop card", n.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", n.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", n.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", n.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", n.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", n.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", n.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", n.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", n.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", n.PREMIUM_BILLING_INFO = "premium billing info", n.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", n.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", n.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", n.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", n.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", n.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", n.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", n.PREMIUM_PLAN_SELECT = "premium_plan_select", n.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", n.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", n.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", n.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", n.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", n.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", n.MEMBER_SAFETY_PAGE = "member safety page", n.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", n.GUILD_MEMBER_MOD_VIEW = "guild member mod view", n.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", n.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", n.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", n.GUILD_SHOP_PAGE = "guild shop page", n.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", n.MESSAGE_REMIX_TAG = "message remix tag", n.MESSAGE_REMIX_BUTTON = "message remix button", n.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", n.CLIPS_SETTINGS = "clips settings", n.CLIPS_GALLERY = "clips gallery", n.CLIPS_GALLERY_ITEM = "clips gallery item", n.CLIPS_EDITOR = "clips editor", n.CLIPS_SHARE_MODAL = "clips share modal", n.CHANNEL_ATTACH_BUTTON = "channel attach button", n.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", n.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", n.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", n.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", n.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", n.GUILD_EVENT_CARD = "guild event card", n.EVENT_SETTINGS = "event settings";
            var n, _, E = _
        },
        895393: function(e, t, i) {
            "use strict";

            function n(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let i = document.createRange(),
                    n = window.getSelection(),
                    _ = document.createElement("textarea");
                _.value = e, _.contentEditable = "true", _.style.visibility = "none", t.appendChild(_), i.selectNodeContents(_), null == n || n.removeAllRanges(), null == n || n.addRange(i), _.focus(), _.setSelectionRange(0, e.length);
                let E = document.execCommand("copy");
                return t.removeChild(_), E
            }
            i.r(t), i.d(t, {
                copy: function() {
                    return n
                }
            })
        },
        487623: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                astToString: function() {
                    return _
                },
                flattenAst: function() {
                    return function e(t) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        if (Array.isArray(t)) {
                            let n = t.length,
                                _ = [];
                            for (let E = 0; E < n; E++) ! function(e, t) {
                                if (Array.isArray(t)) {
                                    let {
                                        length: i
                                    } = t;
                                    for (let n = 0; n < i; n++) e.push(t[n]);
                                    return
                                }
                                e.push(t)
                            }(_, e(t[E], i));
                            return _
                        }
                        return (null != t.content && (t.content = e(t.content, t)), null != i && t.type === i.type) ? t.content : t
                    }
                },
                constrainAst: function() {
                    return function e(t) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            limit: 200
                        };
                        if (Array.isArray(t)) {
                            let _ = t.length;
                            for (let E = 0; E < _; E++) {
                                let _ = e(t[E], i);
                                if (_ === n) {
                                    t.length = E;
                                    break
                                }
                                t[E] = _
                            }
                        } else if ("text" !== t.type) {
                            if (i.limit -= 1, i.limit <= 0) return n;
                            Array.isArray(t.content) && (t.content = e(t.content, i))
                        }
                        return t
                    }
                }
            });
            let n = {};

            function _(e) {
                return (function e(t) {
                    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    return Array.isArray(t) ? t.forEach(t => e(t, i)) : "string" == typeof t.content ? i.push(t.content) : null != t.content && e(t.content, i), i
                })(e).join("")
            }
        },
        353183: function(e, t, i) {
            "use strict";
            let n;
            i.r(t), i.d(t, {
                reactParserFor: function() {
                    return E
                },
                astParserFor: function() {
                    return r
                }
            });
            var _ = i("487623");
            i.es(_, t), n = i("268525").default;
            let E = n.reactParserFor,
                r = n.astParserFor
        },
        268525: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("870647"),
                _ = i.n(n),
                E = i("487623");

            function r(e, t, i, n, _) {
                let r;
                return !i && (t += "\n\n"), r = e(t, {
                    inline: i,
                    ...n
                }), r = (0, E.flattenAst)(r), r = (0, E.constrainAst)(r), null != _ && (r = _(r, i)), r
            }
            var l = {
                reactParserFor(e) {
                    let t = _.parserFor(e),
                        i = _.reactFor(_.ruleOutput(e, "react"));
                    return function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            _ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            E = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        return i(r(t, e, n, _, E), _)
                    }
                },
                astParserFor(e) {
                    let t = _.parserFor(e);
                    return function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            _ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        return r(t, e, i, n, _)
                    }
                }
            }
        },
        784736: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("498225"),
                _ = i("913144");
            let E = {};
            class r extends n.default.Store {
                getEULA(e) {
                    return E[e]
                }
            }
            r.displayName = "EULAStore";
            var l = new r(_.default, {
                EULA_FETCH_SUCCESS: function(e) {
                    let {
                        eula: t
                    } = e;
                    E[t.id] = t
                }
            })
        },
        895530: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("920040");
            i("773670");
            var _ = i("575482"),
                E = i.n(_),
                r = i("702357");

            function l(e) {
                let {
                    children: t,
                    tag: i,
                    className: _
                } = e;
                return i = null != i ? i : "h3", (0, n.jsx)(i, {
                    className: E(r.title, _),
                    children: t
                })
            }
        },
        9074: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return C
                }
            });
            var n, _ = i("920040"),
                E = i("773670"),
                r = i("575482"),
                l = i.n(r),
                a = i("870647"),
                o = i.n(a),
                I = i("269936"),
                c = i("647374"),
                u = i("47677"),
                T = i("895530"),
                s = i("9925"),
                A = i("470039");
            let O = new RegExp("https?://".concat(null !== (n = window.GLOBAL_ENV.CDN_HOST) && void 0 !== n ? n : ""));

            function L(e) {
                return "string" == typeof e.content ? e.content : d(e.content)
            }
            let N = {
                    ...o.defaultRules,
                    heading: {
                        ...o.defaultRules.heading,
                        react(e, t, i) {
                            let n = "h".concat(e.level);
                            return (0, _.jsx)(T.default, {
                                tag: n,
                                children: t(e.content, i)
                            }, i.key)
                        }
                    },
                    paragraph: {
                        ...o.defaultRules.paragraph,
                        react: (e, t, i) => (0, _.jsx)("div", {
                            className: s.paragraph,
                            children: t(e.content, i)
                        }, i.key)
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
                        ...c.default,
                        ...(0, u.default)({
                            enableBuildOverrides: !1
                        }),
                        order: 6
                    },
                    blockQuote: {
                        ...o.defaultRules.blockQuote,
                        react: (e, t, i) => (0, _.jsx)("blockquote", {
                            className: s.blockquote,
                            children: L(e)
                        }, i.key)
                    },
                    image: {
                        ...o.defaultRules.image,
                        order: 6,
                        match(e, t, i) {
                            let n = o.defaultRules.image;
                            if (null == n || null == n.match) return !1;
                            let _ = n.match(e, t, i);
                            if (null != _ && Array.isArray(_) && _.length >= 3) {
                                let e = _[2];
                                if ("string" == typeof e) return null != e.match(O) ? _ : null
                            }
                            return !1
                        }
                    },
                    inlineCode: {
                        ...o.defaultRules.inlineCode,
                        order: 6,
                        react: (e, t, i) => (0, _.jsx)("code", {
                            className: s.codeInline,
                            children: L(e)
                        }, i.key)
                    },
                    codeBlock: {
                        ...o.defaultRules.codeBlock,
                        react(e, t, n) {
                            let E = () => (0, _.jsx)("pre", {
                                children: (0, _.jsx)("code", {
                                    className: l(A.scrollbarGhostHairline, "hljs"),
                                    children: L(e)
                                })
                            }, n.key);
                            return (0, _.jsx)(I.LazyLibrary, {
                                createPromise: () => i.el("86256").then(i.bind(i, "86256")),
                                webpackId: "86256",
                                renderFallback: E,
                                render: t => {
                                    if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return E();
                                    {
                                        let i = t.highlight(e.lang, e.content, !0);
                                        return null == i ? E() : (0, _.jsx)("pre", {
                                            children: (0, _.jsx)("code", {
                                                className: l(A.scrollbarGhostHairline, "hljs", i.language),
                                                dangerouslySetInnerHTML: {
                                                    __html: i.value
                                                }
                                            })
                                        }, n.key)
                                    }
                                }
                            }, n.key)
                        }
                    }
                },
                R = o.parserFor(N),
                d = o.reactFor(o.ruleOutput(N, "react"));
            class m extends E.PureComponent {
                render() {
                    let {
                        className: e,
                        children: t,
                        state: i,
                        parser: n,
                        output: E
                    } = this.props, r = "".concat(t, "\n\n"), a = n(r, {
                        inline: !1,
                        ...i
                    }), o = E(a);
                    return (0, _.jsx)("div", {
                        className: l(s.markdown, e),
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
        83900: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("920040");
            i("773670");
            var _ = i("469563"),
                E = i("753809"),
                r = i("75196"),
                l = (0, _.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: i = 24,
                        color: _ = "currentColor",
                        foreground: E,
                        ...l
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, r.default)(l),
                        width: t,
                        height: i,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, n.jsx)("path", {
                                className: E,
                                fill: _,
                                d: "M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z"
                            }), (0, n.jsx)("rect", {
                                width: "24",
                                height: "24"
                            })]
                        })
                    })
                }, E.LinkIcon)
        },
        306160: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                SUPPORTS_COPY: function() {
                    return r
                },
                copy: function() {
                    return l
                }
            });
            var n = i("895393"),
                _ = i("773336"),
                E = i("50885");
            let r = (() => {
                if (_.isPlatformEmbedded) return null != E.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function l(e) {
                return !!r && (_.isPlatformEmbedded ? (E.default.copy(e), !0) : n.copy(e))
            }
        }
    }
]);
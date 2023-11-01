(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["81391"], {
        185782: function(e, t, i) {
            "use strict";
            e.exports = i.p + "140ec8f5d02da1e5195c.svg"
        },
        54239: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                pushLayer: function() {
                    return r
                },
                popLayer: function() {
                    return l
                },
                popAllLayers: function() {
                    return o
                }
            });
            var n = i("913144");

            function r(e) {
                n.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function l() {
                n.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function o() {
                n.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        112679: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                updateStripePaymentRequest: function() {
                    return r
                },
                updateCardInfo: function() {
                    return l
                },
                clearCardInfo: function() {
                    return o
                },
                updateAddressInfo: function() {
                    return a
                },
                clearError: function() {
                    return s
                }
            });
            var n = i("913144");

            function r(e) {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function l(e, t) {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function o() {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function a(e, t) {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function s() {
                n.default.wait(() => n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return r
                }
            });
            var n = i("913144");

            function r() {
                n.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        775433: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                fetchSubscriptionPlansForSKU: function() {
                    return E
                },
                fetchSubscriptionPlansBySKUs: function() {
                    return c
                },
                fetchPremiumSubscriptionPlans: function() {
                    return I
                },
                resetSubscriptionPlanData: function() {
                    return d
                }
            });
            var n = i("872717"),
                r = i("913144"),
                l = i("333805"),
                o = i("160299"),
                a = i("745279"),
                s = i("850068"),
                _ = i("49111"),
                u = i("646718");
            async function E(e, t, i, u, E) {
                r.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH",
                    skuId: e
                });
                try {
                    let l = {
                            url: _.Endpoints.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                            oldFormErrors: !0
                        },
                        a = {};
                    null != t && (a.country_code = t), null != i && (a.payment_source_id = i), null != u && (a.include_unpublished = u), null != E && (a.revenue_surface = E), l.query = a, !o.default.ipCountryCodeLoaded && await (0, s.fetchIpCountryCode)();
                    let c = await n.default.get(l);
                    r.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                        skuId: e,
                        subscriptionPlans: c.body
                    })
                } catch (t) {
                    throw r.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                        skuId: e
                    }), (0, a.captureBillingException)(t), new l.default(t)
                }
            }

            function c(e, t) {
                return Promise.all(e.filter(e => e !== u.PremiumSubscriptionSKUs.NONE).map(e => E(e, t)))
            }

            function I(e, t, i) {
                return Promise.all(u.ACTIVE_PREMIUM_SKUS.filter(e => e !== u.PremiumSubscriptionSKUs.NONE).map(n => E(n, e, t, void 0, i)))
            }

            function d() {
                r.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        304580: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return T
                }
            });
            var n, r, l = i("37983");
            i("884691");
            var o = i("414456"),
                a = i.n(o),
                s = i("394846"),
                _ = i("77078"),
                u = i("945330"),
                E = i("381546"),
                c = i("782340"),
                I = i("955892");
            (n = r || (r = {})).DEFAULT = "", n.BOLD = "Bold", n.SOLID = "Solid";
            let d = e => {
                let {
                    closeAction: t,
                    variant: i,
                    keybind: n,
                    className: o
                } = e;
                return (0, l.jsxs)("div", {
                    className: a(I.container, o),
                    children: [(0, l.jsx)(_.Clickable, {
                        className: a(I.closeButton, {
                            [I.closeButtonBold]: i === r.BOLD,
                            [I.closeButtonSolid]: i === r.SOLID
                        }),
                        onClick: t,
                        "aria-label": c.default.Messages.CLOSE,
                        children: i === r.SOLID ? (0, l.jsx)(E.default, {
                            width: 24,
                            height: 24,
                            "aria-hidden": !0
                        }) : (0, l.jsx)(u.default, {
                            width: 18,
                            height: 18,
                            "aria-hidden": !0
                        })
                    }), s.isMobile ? null : (0, l.jsx)("div", {
                        className: a(I.keybind),
                        "aria-hidden": !0,
                        children: n
                    })]
                })
            };
            d.defaultProps = {
                variant: r.DEFAULT
            }, d.Variants = r;
            var T = d
        },
        80300: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                backgroundImagePreloader: function() {
                    return u
                }
            });
            var n = i("37983"),
                r = i("884691"),
                l = i("310013"),
                o = i.n(l),
                a = i("407063");
            let s = /url\(['"](.*)['"]\)/,
                _ = e => {
                    if (null == e || "" === e || "none" === e) return null;
                    let t = e.match(s);
                    return null != t ? t[1] : e
                };

            function u(e) {
                class t extends r.Component {
                    componentDidUpdate(e, t) {
                        if (t === this.state) return;
                        let {
                            cached: i,
                            loaded: n
                        } = this.state, {
                            style: r
                        } = this.props, l = null != r ? _(r.backgroundImage) : null;
                        null == l && l !== i ? this.setState({
                            loaded: !0,
                            cached: l
                        }) : this.cachedURLs.indexOf(l) >= 0 ? this.setState({
                            loaded: !0,
                            cached: l
                        }) : null != l && l !== i && !0 === n && this.setState({
                            loaded: !1
                        }, () => this.preloadURL(l))
                    }
                    preloadURL(e) {
                        this.canceller && this.canceller(), this.canceller = (0, a.loadImage)(e, t => {
                            this.canceller && (this.canceller = null), !t && (this.cachedURLs.push(e), this.setState({
                                cached: e,
                                loaded: !0
                            }));
                            let {
                                onBackgroundImageLoad: i
                            } = this.props;
                            i && i(t, e)
                        })
                    }
                    componentWillUnmount() {
                        this.canceller && this.canceller(), this.cachedURLs.length = 0
                    }
                    render() {
                        let {
                            style: t,
                            onBackgroundImageLoad: i,
                            ...r
                        } = this.props, {
                            loaded: l,
                            cached: o
                        } = this.state;
                        if (!l && null != t) {
                            var a;
                            t = {
                                ...t,
                                backgroundImage: null == (a = o) || "" === a || "none" === a ? "none" : "url(".concat(a, ")")
                            }
                        }
                        return (0, n.jsx)(e, {
                            style: t,
                            ...r
                        })
                    }
                    constructor(e) {
                        super(e), this.cachedURLs = [], this.canceller = null;
                        let {
                            style: t
                        } = e, i = null != t ? _(t.backgroundImage) : null;
                        this.cachedURLs = [i], this.state = {
                            cached: i,
                            loaded: !0
                        }
                    }
                }
                return o(t, e), t
            }
        },
        252744: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return r
                }
            });
            var n = i("884691");

            function r(e) {
                let [t, i] = (0, n.useState)(!1), r = (0, n.useRef)(e.current);
                return (0, n.useEffect)(() => {
                    r.current = e.current
                }, [e]), (0, n.useEffect)(() => {
                    let e = r.current;
                    if (null == e) return;
                    let t = () => i(!0),
                        n = () => i(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", n), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", n)
                    }
                }, [r]), t
            }
        },
        812204: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            }), (n = r || (r = {})).POPOUT_WINDOW = "popout window", n.OVERLAY = "overlay", n.NOTICE = "notice", n.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", n.BADGE = "badge", n.USER_SETTINGS = "user settings", n.USER_SETTINGS_MENU = "user settings menu", n.ACCOUNT = "account", n.TEXT_AND_IMAGES = "text and images", n.GUILD_SETTINGS = "guild settings", n.OVERVIEW = "overview", n.STICKERS = "stickers", n.VANITY_URL = "vanity url", n.PREMIUM_MARKETING = "premium marketing", n.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", n.PREMIUM_PAYMENT_MODAL = "premium payment modal", n.PREMIUM_UPSELL_ALERT = "premium upsell alert", n.PREMIUM_UPSELL_MODAL = "premium upsell modal", n.PREMIUM_SETTINGS = "premium settings", n.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", n.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", n.CHANNEL_CALL = "channel call", n.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", n.RTC_PANEL = "rtc panel", n.SOUNDBOARD_BUTTON = "soundboard button", n.SOUNDBOARD_POPOUT = "soundboard popout", n.SOUNDBOARD_WHEEL = "soundboard wheel", n.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", n.GIFT_BUTTON = "gift button", n.EXPRESSION_SUGGESTIONS = "expression suggestions", n.EMOJI_PICKER = "emoji picker", n.STICKER_PICKER = "sticker picker", n.STICKER_POPOUT = "sticker popout", n.PREMIUM_UPSELL = "premium upsell", n.EMPTY_STATE = "empty state", n.SUBSCRIPTION_DETAILS = "subscription details", n.SUBSCRIPTION_HEADER = "subscription header", n.ACCOUNT_CREDIT_BANNER = "account credit banner", n.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", n.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", n.STREAM_QUALITY_INDICATOR = "stream quality indicator", n.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", n.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", n.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", n.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", n.RPC = "rpc", n.BILLING_STANDALONE = "billing standalone", n.GUILD_CHANNEL_LIST = "guild channel list", n.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", n.STICKER_MESSAGE = "sticker message", n.CHANNEL_TEXT_AREA = "channel text area", n.HEADER_BAR = "header bar", n.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", n.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", n.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", n.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", n.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", n.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", n.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", n.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", n.GUILD_HEADER = "guild header", n.GUILD_BANNER = "guild banner", n.GUILD_BANNER_NOTICE = "guild banner notice", n.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", n.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", n.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", n.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", n.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", n.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", n.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", n.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", n.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", n.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", n.GUILDS_LIST = "guilds list", n.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", n.ACTIVITY_DIRECTORY = "activity directory", n.ACTIVITY_TILE = "activity tile", n.ACTIVITY_UPSELL = "activity upsell", n.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", n.INSTANT_INVITE_MODAL = "instant invite modal", n.IMAGE_CROPPING_MODAL = "image cropping modal", n.GIF_PICKER = "gif picker", n.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", n.INVITE_MODAL = "invite modal", n.INVITE_EMBED = "invite embed", n.NEW_GUILD_BUTTON = "new guild button", n.CHARACTER_COUNT = "character count", n.DM_CHANNEL = "dm channel", n.GUILD_CHANNEL = "guild channel", n.FORUM_CHANNEL = "forum channel", n.FILE_UPLOAD_POPOUT = "file upload popout", n.EMOJI = "emoji", n.PROFILE = "profile", n.PROFILE_MODAL = "profile modal", n.PROFILE_POPOUT = "profile popout", n.GUILD_PROFILE = "guild profile", n.EDIT_AVATAR = "edit avatar", n.EDIT_BANNER = "edit banner", n.CHAT_INPUT = "chat input", n.CREATE_THREAD = "create thread", n.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", n.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", n.SELECT_IMAGE_MODAL = "select image modal", n.VIDEO_BACKGROUND_OPTIONS = "video background options", n.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", n.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", n.CAMERA_PREVIEW = "camera preview", n.HOME_PAGE_PREMIUM_TAB = "home page premium tab", n.HOME_PAGE_SHOP_TAB = "home page shop tab", n.PREMIUM_MARKETING_SURFACE = "premium marketing surface", n.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", n.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", n.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", n.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", n.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", n.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", n.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", n.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", n.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", n.PREMIUM_MARKETING_FEATURE = "premium marketing feature", n.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", n.PREMIUM_MARKETING_FOOTER = "premium marketing footer", n.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", n.CHANNEL_CALL_ACTION_BAR = "channel call action bar", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", n.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", n.VOICE_CONTROL_TRAY = "voice control tray", n.ACTIVE_NOW_COLUMN = "active now column", n.CONTEXT_MENU = "context menu", n.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", n.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", n.CHANNEL_CATEGORY_MENU = "channel category menu", n.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", n.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", n.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", n.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", n.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", n.CHANNEL_TITLE_MENU = "channel title menu", n.GROUP_DM_MENU = "group dm menu", n.AUDIT_LOG_USER_MENU = "audit log user menu", n.BANNED_USER_MENU = "banned user menu", n.DM_USER_MENU = "dm user menu", n.GROUP_DM_USER_MENU = "group dm user menu", n.GUILD_CHANNEL_USER_MENU = "guild channel user menu", n.GUILD_MODERATION_USER_MENU = "guild moderation user menu", n.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", n.GUILD_SETTINGS_USER_MENU = "guild settings user menu", n.GUILD_USER_MENU = "guild user menu", n.THREAD_USER_MENU = "thread user menu", n.USER_GENERIC_MENU = "user generic menu", n.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", n.VOICE_ACTION_SHEET = "voice action sheet", n.FOCUSED_VOICE_CONTROLS = "focused voice controls", n.MASKED_LINK = "masked link", n.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", n.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", n.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", n.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", n.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", n.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", n.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", n.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", n.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", n.ACCOUNT_PROFILE_POPOUT = "account profile popout", n.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", n.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", n.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", n.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", n.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", n.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", n.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", n.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", n.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", n.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", n.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", n.STAGE_VIDEO_LIMIT = "stage video limit", n.ACTIVITIES_MINI_SHELF = "activities mini shelf", n.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", n.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", n.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", n.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", n.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", n.APP_ICON_EDITOR = "app icon editor", n.CLIENT_THEMES_EDITOR = "client themes editor", n.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", n.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", n.SHARE_NITRO_EMBED = "share nitro embed", n.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", n.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", n.REFERRAL_TRIALS_POPOUT = "referral trials popout", n.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", n.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", n.ACTIVITY_BOOKMARK = "activity bookmark", n.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", n.ACTIVITY_DETAIL_PAGE = "activity detail page", n.ACTIVITIES_PAGE = "activities page", n.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", n.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", n.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", n.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", n.ACTIVITIES_HAPPENING_NOW = "activities happening now", n.MEDIA_VIEWER = "media viewer", n.MESSAGE_LONG_PRESS_MENU = "message long press menu", n.COLLECTIBLES_SHOP = "collectibles shop", n.COLLECTIBLES_SHOP_CARD = "collectibles shop card", n.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", n.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", n.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", n.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", n.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", n.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", n.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", n.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", n.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", n.PREMIUM_BILLING_INFO = "premium billing info", n.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", n.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", n.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", n.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", n.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", n.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", n.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", n.PREMIUM_PLAN_SELECT = "premium_plan_select", n.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", n.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", n.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", n.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", n.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", n.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", n.MEMBER_SAFETY_PAGE = "member safety page", n.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", n.GUILD_MEMBER_MOD_VIEW = "guild member mod view", n.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", n.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", n.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", n.GUILD_SHOP_PAGE = "guild shop page", n.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", n.MESSAGE_REMIX_TAG = "message remix tag", n.MESSAGE_REMIX_BUTTON = "message remix button", n.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", n.CLIPS_SETTINGS = "clips settings", n.CLIPS_GALLERY = "clips gallery", n.CLIPS_GALLERY_ITEM = "clips gallery item", n.CLIPS_EDITOR = "clips editor", n.CLIPS_SHARE_MODAL = "clips share modal", n.CHANNEL_ATTACH_BUTTON = "channel attach button", n.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", n.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", n.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", n.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", n.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", n.GUILD_EVENT_CARD = "guild event card", n.EVENT_SETTINGS = "event settings";
            var n, r, l = r
        },
        20606: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return n
                }
            });
            var n = i("171210").default
        },
        526887: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                ConfettiCannonContext: function() {
                    return u
                },
                ConfettiCannonContextProvider: function() {
                    return E
                }
            });
            var n = i("37983"),
                r = i("884691"),
                l = i("516555"),
                o = i("65597"),
                a = i("206230"),
                s = i("49111");
            let _ = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: () => void 0,
                    createConfettiAt: () => void 0,
                    createMultipleConfetti: () => [],
                    createMultipleConfettiAt: () => [],
                    addClickListener: () => s.NOOP,
                    removeClickListener: s.NOOP
                },
                u = r.createContext(_);

            function E(e) {
                let {
                    children: t,
                    confettiCanvas: i,
                    spriteCanvas: s,
                    baseConfig: E,
                    addClickListener: c,
                    removeClickListener: I
                } = e, d = (0, l.useConfettiCannon)(i, s), T = (0, o.default)([a.default], () => a.default.useReducedMotion), m = r.useMemo(() => T ? _ : {
                    confettiCanvas: i,
                    cannon: d,
                    createConfetti: (e, t) => d.createConfetti({
                        ...E,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, i, n) => d.createConfetti({
                        ...E,
                        position: {
                            type: "static",
                            value: {
                                x: e,
                                y: t
                            }
                        },
                        ...i
                    }, n),
                    createMultipleConfetti: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                            i = arguments.length > 2 ? arguments[2] : void 0;
                        return d.createMultipleConfetti({
                            ...E,
                            ...e
                        }, t, i)
                    },
                    createMultipleConfettiAt: function(e, t, i) {
                        let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            r = arguments.length > 4 ? arguments[4] : void 0;
                        return d.createMultipleConfetti({
                            ...E,
                            position: {
                                type: "static",
                                value: {
                                    x: e,
                                    y: t
                                }
                            },
                            ...i
                        }, n, r)
                    },
                    addClickListener: c,
                    removeClickListener: I
                }, [c, E, d, i, T, I]);
                return (0, n.jsx)(u.Provider, {
                    value: m,
                    children: t
                })
            }
        },
        649844: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return I
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("748820"),
                l = i("77078"),
                o = i("112679"),
                a = i("55689"),
                s = i("855133"),
                _ = i("599110"),
                u = i("659500"),
                E = i("49111"),
                c = i("646718");

            function I(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: I,
                    onClose: d,
                    onComplete: T,
                    onSubscriptionConfirmation: m,
                    analyticsLocations: A,
                    analyticsObject: p,
                    analyticsLocation: O,
                    analyticsSourceLocation: S,
                    isGift: L = !1,
                    giftMessage: C,
                    subscriptionTier: R,
                    trialId: N,
                    postSuccessGuild: M,
                    openInvoiceId: P,
                    applicationId: U,
                    referralTrialOfferId: f,
                    giftRecipient: h,
                    returnRef: g
                } = null != e ? e : {}, D = !1, v = (0, r.v4)();
                (0, l.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await i.el("646139").then(i.bind(i, "646139"));
                    return i => {
                        let {
                            onClose: r,
                            ...l
                        } = i;
                        return (0, n.jsx)(e, {
                            ...l,
                            loadId: v,
                            subscriptionTier: R,
                            skuId: R,
                            isGift: L,
                            giftMessage: C,
                            giftRecipient: h,
                            initialPlanId: t,
                            followupSKUInfo: I,
                            onClose: e => {
                                r(), null == d || d(e), e && (null == m || m())
                            },
                            onComplete: () => {
                                D = !0, null == T || T(), !L && ((0, s.setIsPersistentHelperHidden)(!0), (0, s.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: m,
                            analyticsLocations: A,
                            analyticsObject: p,
                            analyticsLocation: O,
                            analyticsSourceLocation: S,
                            trialId: N,
                            postSuccessGuild: M,
                            planGroup: c.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: P,
                            applicationId: U,
                            referralTrialOfferId: f,
                            returnRef: g
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !D && _.default.track(E.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: v,
                            payment_type: E.PurchaseTypeToAnalyticsPaymentType[E.PurchaseTypes.SUBSCRIPTION],
                            location: null != O ? O : p,
                            source: S,
                            subscription_type: E.SubscriptionTypes.PREMIUM,
                            is_gift: L,
                            eligible_for_trial: null != N,
                            application_id: U,
                            location_stack: A
                        }), (0, o.clearError)(), (0, a.clearPurchaseTokenAuthState)(), null == d || d(D), D && (!L && u.ComponentDispatch.dispatch(E.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == m || m())
                    },
                    onCloseRequest: E.NOOP
                })
            }
        },
        855133: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                togglePersistentHelper: function() {
                    return r
                },
                setHasCompletedStep: function() {
                    return l
                },
                resetPremiumTutorialStore: function() {
                    return o
                },
                setCanPlayWowMoment: function() {
                    return a
                },
                setIsPersistentHelperHidden: function() {
                    return s
                },
                setNavigatedFromHelper: function() {
                    return _
                }
            });
            var n = i("913144");
            let r = () => {
                    n.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                l = () => {
                    n.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                o = () => {
                    n.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                a = e => {
                    n.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                s = e => {
                    n.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                _ = e => {
                    n.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        824986: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                PremiumTutorialTooltips: function() {
                    return l
                },
                default: function() {
                    return T
                }
            });
            var n, r, l, o = i("446674"),
                a = i("913144"),
                s = i("521012"),
                _ = i("565785"),
                u = i("646718");
            (n = l || (l = {})).FILE_UPLOAD = "file_upload", n.STICKER_PICKER = "sticker_picker", n.EMOJI_PICKER = "emoji_picker", n.BOOSTING_FLOW = "boosting_flow";
            let E = {
                isPersistentCoachmarkCollapsed: !1,
                hasFlowStartEventBeenEmitted: {},
                canPlayWowMoment: !1,
                isPersistentHelperHidden: !0,
                isFetchingWowMomentMedia: !1,
                wowMomentWumpusMediaUrl: null,
                wowMomentHelperMediaUrl: null,
                navigatedFromHelper: !1,
                tutorialExpirationTime: null
            };

            function c() {
                E = {
                    isPersistentCoachmarkCollapsed: !1,
                    hasFlowStartEventBeenEmitted: {},
                    canPlayWowMoment: !1,
                    isPersistentHelperHidden: !0,
                    isFetchingWowMomentMedia: !1,
                    wowMomentWumpusMediaUrl: null,
                    wowMomentHelperMediaUrl: null,
                    navigatedFromHelper: !1,
                    tutorialExpirationTime: null
                }
            }

            function I() {
                let e = new Date;
                e.setDate(e.getDate() + 14), E.tutorialExpirationTime = e.getTime()
            }
            class d extends o.default.PersistedStore {
                initialize(e) {
                    null != e && (E = e), E.isPersistentHelperHidden = !1, E.canPlayWowMoment = !1, E.isFetchingWowMomentMedia = !1, E.wowMomentWumpusMediaUrl = null, E.wowMomentHelperMediaUrl = null
                }
                getState() {
                    return E
                }
                get isPersistentCoachmarkCollapsed() {
                    return E.isPersistentCoachmarkCollapsed
                }
                hasFlowStartEventBeenEmitted(e) {
                    return null == E.hasFlowStartEventBeenEmitted[e] && (E.hasFlowStartEventBeenEmitted[e] = !1), E.hasFlowStartEventBeenEmitted[e]
                }
                get canPlayWowMoment() {
                    return E.canPlayWowMoment
                }
                get isPersistentHelperHidden() {
                    return E.isPersistentHelperHidden
                }
                get isFetchingWowMomentMedia() {
                    return E.isFetchingWowMomentMedia
                }
                get wowMomentWumpusMedia() {
                    return E.wowMomentWumpusMediaUrl
                }
                get wowMomentHelperMedia() {
                    return E.wowMomentHelperMediaUrl
                }
                get navigatedFromHelper() {
                    return E.navigatedFromHelper
                }
                get tutorialExpirationTime() {
                    return E.tutorialExpirationTime
                }
            }
            d.displayName = "PremiumTutorialStore", d.persistKey = "PremiumTutorialStore", d.migrations = [e => ({
                ...e,
                hasFlowStartEventBeenEmitted: null !== (r = e.hasFlowStartEventBeenEmitted) && void 0 !== r ? r : {}
            })];
            var T = new d(a.default, {
                PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE: function() {
                    E.isPersistentCoachmarkCollapsed = !E.isPersistentCoachmarkCollapsed
                },
                UPDATE_HAS_FLOW_START_EVENT_BEEN_EMITTED: function(e) {
                    let {
                        event: t,
                        value: i
                    } = e;
                    E.hasFlowStartEventBeenEmitted[t] = i
                },
                LOGOUT: function() {
                    c()
                },
                RESET_PREMIUM_TUTORIAL_STORE: c,
                PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT: function(e) {
                    let {
                        value: t
                    } = e;
                    E.canPlayWowMoment = t
                },
                PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN: function(e) {
                    let {
                        value: t
                    } = e;
                    E.isPersistentHelperHidden = t
                },
                PREMIUM_TUTORIAL_IS_FETCHING_WOW_MOMENT_MEDIA: function(e) {
                    let {
                        value: t
                    } = e;
                    E.isFetchingWowMomentMedia = t
                },
                PREMIUM_TUTORIAL_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function(e) {
                    let {
                        wumpusMedia: t,
                        helperMedia: i
                    } = e;
                    E.wowMomentWumpusMediaUrl = t, E.wowMomentHelperMediaUrl = i, E.isFetchingWowMomentMedia = !1
                },
                PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER: function(e) {
                    let {
                        value: t
                    } = e;
                    E.navigatedFromHelper = t
                },
                PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function(e) {
                    let {
                        subscription: t
                    } = e, {
                        enabled: i
                    } = _.default.getCurrentConfig({
                        location: "5f2710_1"
                    }, {
                        autoTrackExposure: !1
                    });
                    i && null != t.items.find(e => u.PREMIUM_TIER_2_PLANS.has(e.plan_id)) && I()
                },
                GIFT_CODE_REDEEM_SUCCESS: function(e) {
                    let {
                        entitlement: t
                    } = e, {
                        enabled: i
                    } = _.default.getCurrentConfig({
                        location: "5f2710_2"
                    }, {
                        autoTrackExposure: !1
                    });
                    i && (null == t ? void 0 : t.sku_id) === u.PremiumSubscriptionSKUs.TIER_2 && null == s.default.getPremiumSubscription(!1) && null == E.tutorialExpirationTime && I()
                }
            })
        },
        694768: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("862205");
            let r = (0, n.createExperiment)({
                kind: "user",
                id: "2023-02_nitroduction_experience",
                label: "Nitroduction Experience",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "One month trial users recieve the Nitroduction experience",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var l = r
        },
        565785: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("862205");
            let r = (0, n.createExperiment)({
                kind: "user",
                id: "2023-08_premium_tutorial_for_all",
                label: "Premium Tutorial Experience For All",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "All net new users (exclude trial) receive premium tutorial experience",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var l = r
        },
        921228: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useIsPremiumTutorialEnabled: function() {
                    return O
                },
                isPremiumTutorialEnabled: function() {
                    return C
                },
                useAllDismissedPremiumTutorialSteps: function() {
                    return M
                }
            });
            var n = i("884691"),
                r = i("446674"),
                l = i("151426"),
                o = i("850068"),
                a = i("10641"),
                s = i("374363"),
                _ = i("697218"),
                u = i("521012"),
                E = i("719923"),
                c = i("324878"),
                I = i("824986"),
                d = i("694768"),
                T = i("565785"),
                m = i("646718");
            let A = () => {
                    let e = (0, r.useStateFromStores)([u.default], () => u.default.getPremiumTypeSubscription()),
                        t = (0, a.useIsDismissibleContentDismissed)(l.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, c.isEligibleTrialSub)(e) && !t
                },
                p = () => {
                    let e = (0, c.useHasActiveTrial)(),
                        t = (0, a.useIsDismissibleContentDismissed)(l.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE),
                        i = (0, r.useStateFromStores)([_.default], () => _.default.getCurrentUser()),
                        s = (0, E.isPremiumExactly)(i, m.PremiumTypes.TIER_2),
                        I = (0, r.useStateFromStores)([u.default], () => u.default.hasFetchedPreviousPremiumTypeSubscription()),
                        d = (0, r.useStateFromStores)([u.default], () => u.default.getPreviousPremiumTypeSubscription()),
                        T = !e && s;
                    n.useEffect(() => {
                        T && !I && !t && (0, o.fetchMostRecentSubscription)()
                    }, [T, I, t]);
                    let A = T && I && null == d;
                    return A && !t
                };

            function O(e) {
                var t;
                let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = A() && i,
                    {
                        enabled: l
                    } = d.default.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: n,
                        disable: !n
                    }),
                    o = (0, r.useStateFromStores)([I.default], () => I.default.tutorialExpirationTime),
                    a = new Date().getTime(),
                    s = (0, r.useStateFromStores)([u.default], () => {
                        var e, i;
                        return null !== (t = null === (i = u.default.getPremiumSubscription()) || void 0 === i ? void 0 : null === (e = i.createdAt) || void 0 === e ? void 0 : e.getTime()) && void 0 !== t ? t : 0
                    }),
                    _ = p() && i,
                    E = T.default.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: _ && a - s < 18e5,
                        disable: !_
                    }).enabled && null != o && o > a;
                return l || E
            }
            let S = () => {
                    let e = u.default.getPremiumTypeSubscription(),
                        t = (0, a.isDismissibleContentDismissed)(l.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, c.isEligibleTrialSub)(e) && !t
                },
                L = () => {
                    let e = (0, c.hasActiveTrial)(),
                        t = (0, a.isDismissibleContentDismissed)(l.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE),
                        i = _.default.getCurrentUser(),
                        n = (0, E.isPremiumExactly)(i, m.PremiumTypes.TIER_2),
                        r = u.default.hasFetchedPreviousPremiumTypeSubscription(),
                        s = u.default.getPreviousPremiumTypeSubscription();
                    return !r && n && !t && (0, o.fetchMostRecentSubscription)(), !t && !e && n && r && null == s
                },
                C = function(e) {
                    var t, i, n;
                    let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        l = S() && r,
                        {
                            enabled: o
                        } = d.default.getCurrentConfig({
                            location: e
                        }, {
                            disable: !l,
                            autoTrackExposure: l
                        }),
                        a = new Date().getTime(),
                        s = I.default.tutorialExpirationTime,
                        _ = null !== (n = null === (i = u.default.getPremiumSubscription()) || void 0 === i ? void 0 : null === (t = i.createdAt) || void 0 === t ? void 0 : t.getTime()) && void 0 !== n ? n : 0,
                        E = L() && r,
                        c = T.default.getCurrentConfig({
                            location: e
                        }, {
                            disable: !E,
                            autoTrackExposure: E && a - _ < 18e5
                        }).enabled && null != s && s > a;
                    return o || c
                },
                R = [];

            function N() {
                return m.PremiumTutorialStepOrder.filter(e => (0, a.isDismissibleContentDismissed)(e))
            }

            function M() {
                return function(e, t) {
                    let i = O("useMemoizedValueSyncedWithDismissibleContents"),
                        l = (0, r.useStateFromStores)([s.default], () => {
                            var e;
                            return null === (e = s.default.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
                        });
                    return n.useMemo(() => i ? e() : t, [i, t, e, l])
                }(N, R)
            }
        },
        374278: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return p
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("77078"),
                l = i("95039"),
                o = i("305961"),
                a = i("957255"),
                s = i("145131"),
                _ = i("181114"),
                u = i("599110"),
                E = i("488464"),
                c = i("998716"),
                I = i("923510"),
                d = i("49111"),
                T = i("646718"),
                m = i("782340"),
                A = i("400237");

            function p(e) {
                var t;
                let i, {
                        channel: p,
                        transitionState: O,
                        onClose: S
                    } = e,
                    L = o.default.getGuild(p.guild_id),
                    C = null !== (t = null == L ? void 0 : L.maxStageVideoChannelUsers) && void 0 !== t ? t : 0,
                    R = !!(null == L ? void 0 : L.isCommunity()),
                    N = m.default.Messages.STAGE_FULL_TITLE,
                    M = R ? C < d.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED : (null == L ? void 0 : L.premiumTier) !== d.BoostedGuildTiers.TIER_3 && C <= d.MAX_STAGE_VIDEO_USER_LIMIT_TIER2,
                    P = a.default.can(I.MODERATE_STAGE_CHANNEL_PERMISSIONS, p);
                i = R && (null == L ? void 0 : L.premiumTier) === d.BoostedGuildTiers.TIER_3 ? C <= d.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED ? m.default.Messages.STAGE_FULL_BOOST_MORE_BODY : m.default.Messages.STAGE_FULL_MAX_BODY : M ? m.default.Messages.STAGE_FULL_BODY : m.default.Messages.STAGE_FULL_MAX_BODY;
                let U = () => {
                        S(), u.default.track(d.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
                            guild_id: p.guild_id,
                            type: T.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
                            is_moderator: P,
                            action: T.BoostingUpsellAction.DISMISS
                        })
                    },
                    f = E.default.getMutableParticipants(p.id, c.StageChannelParticipantNamedIndex.SPEAKER),
                    h = f.filter(e => e.type === c.StageChannelParticipantTypes.VOICE),
                    g = h.length,
                    D = E.default.getParticipantCount(p.id, c.StageChannelParticipantNamedIndex.AUDIENCE);
                return u.default.track(d.AnalyticEvents.BOOSTING_UPSELL_VIEWED, {
                    guild_id: p.guild_id,
                    type: T.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
                    is_moderator: P,
                    listener_count: g + D
                }), (0, n.jsxs)(r.ModalRoot, {
                    size: r.ModalSize.SMALL,
                    transitionState: O,
                    "aria-label": N,
                    children: [(0, n.jsxs)(r.ModalHeader, {
                        justify: s.default.Justify.END,
                        separator: !1,
                        className: A.header,
                        children: [(0, n.jsx)("div", {
                            className: A.fullArt
                        }), (0, n.jsx)(r.ModalCloseButton, {
                            onClick: S
                        })]
                    }), (0, n.jsxs)(r.ModalContent, {
                        className: A.content,
                        children: [(0, n.jsx)(r.Heading, {
                            variant: "heading-xl/bold",
                            children: N
                        }), (0, n.jsx)(r.Text, {
                            variant: "text-md/medium",
                            children: i
                        })]
                    }), (0, n.jsx)(r.ModalFooter, {
                        className: A.footer,
                        children: M ? (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(r.Button, {
                                look: r.ButtonLooks.LINK,
                                className: A.noThanksButton,
                                color: r.ButtonColors.CUSTOM,
                                size: r.ButtonSizes.SMALL,
                                onClick: U,
                                children: m.default.Messages.NO_THANKS
                            }), (0, n.jsx)(_.default, {
                                onClick: () => {
                                    S(), (0, l.openGuildBoostingMarketingModal)({
                                        guildId: p.guild_id,
                                        location: {
                                            section: d.AnalyticsSections.STAGE_VIDEO_LIMIT
                                        }
                                    }), u.default.track(d.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
                                        guild_id: p.guild_id,
                                        type: T.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
                                        is_moderator: P,
                                        action: T.BoostingUpsellAction.BOOST
                                    })
                                },
                                size: r.ButtonSizes.SMALL,
                                className: A.boostButton,
                                children: m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
                            })]
                        }) : (0, n.jsx)(r.Button, {
                            onClick: U,
                            size: r.ButtonSizes.SMALL,
                            color: r.ButtonColors.CUSTOM,
                            className: A.boostButton,
                            children: m.default.Messages.GOT_IT
                        })
                    })]
                })
            }
        },
        522308: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("666038");
            class r extends n.default {
                static createFromServer(e, t) {
                    return new r({
                        id: e.id,
                        subscriptionId: e.subscription_id,
                        premiumGuildSubscription: null != e.premium_guild_subscription ? {
                            id: e.premium_guild_subscription.id,
                            guildId: e.premium_guild_subscription.guild_id
                        } : null,
                        canceled: e.canceled,
                        cooldownEndsAt: e.cooldown_ends_at,
                        subscription: t
                    })
                }
                isOnCooldown() {
                    return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now()
                }
                isAvailable() {
                    return null == this.premiumGuildSubscription && !this.isOnCooldown()
                }
                constructor(e) {
                    super(), this.id = e.id, this.subscriptionId = e.subscriptionId, this.premiumGuildSubscription = e.premiumGuildSubscription, this.canceled = e.canceled, this.cooldownEndsAt = e.cooldownEndsAt, this.subscription = e.subscription
                }
            }
            var l = r
        },
        778588: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return s
                }
            });
            var n = i("446674"),
                r = i("913144");
            let l = [];

            function o() {
                l = []
            }
            class a extends n.default.Store {
                hasLayers() {
                    return l.length > 0
                }
                getLayers() {
                    return l
                }
            }
            a.displayName = "LayerStore";
            var s = new a(r.default, {
                LAYER_PUSH: function(e) {
                    let {
                        component: t
                    } = e;
                    if (l.indexOf(t) >= 0) return !1;
                    l = [...l, t]
                },
                LAYER_POP: function() {
                    if (0 === l.length) return !1;
                    l = l.slice(0, -1)
                },
                LAYER_POP_ALL: o,
                LOGOUT: o,
                NOTIFICATION_CLICK: o
            })
        },
        474293: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getClass: function() {
                    return r
                }
            });
            var n = i("159885");

            function r(e, t) {
                for (var i = arguments.length, r = Array(i > 2 ? i - 2 : 0), l = 2; l < i; l++) r[l - 2] = arguments[l];
                let o = r.reduce((e, t) => e + (0, n.upperCaseFirstChar)(t), ""),
                    a = "".concat(t).concat(o),
                    s = e[a];
                if (null != s) return s
            }
        },
        157590: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var n = i("817736"),
                r = i("118810");
            let l = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            class o {
                isVisible(e) {
                    return null == this._observer || this._visibleComponents.has(e)
                }
                observe(e) {
                    let t = this._observer;
                    if (null == t) return;
                    this.unobserve(e);
                    let i = (0, n.findDOMNode)(e);
                    (0, r.isElement)(i, HTMLElement) && (this._nodes.set(i, e), this._components.set(e, i), t.observe(i))
                }
                unobserve(e) {
                    let t = this._observer;
                    if (null == t) return;
                    let i = this._components.get(e);
                    null != i && (this._nodes.delete(i), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(i))
                }
                constructor(e = l) {
                    this._nodes = new WeakMap, this._components = new WeakMap, this._visibleComponents = new WeakSet, this._handleEntries = e => {
                        e.forEach(e => {
                            let t;
                            if (null != e.isIntersecting) t = e.isIntersecting;
                            else {
                                let {
                                    threshold: i
                                } = this._options;
                                t = null == i ? e.intersectionRatio > 0 : Array.isArray(i) ? i.some(t => e.intersectionRatio > t) : e.intersectionRatio > i
                            }
                            let i = this._nodes.get(e.target);
                            if (null != i) {
                                let e = !1;
                                t ? !this._visibleComponents.has(i) && (this._visibleComponents.add(i), e = !0) : this._visibleComponents.has(i) && (this._visibleComponents.delete(i), e = !0), e && i.forceUpdate()
                            }
                        })
                    }, this._options = e, null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, e))
                }
            }
        },
        235855: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return u
                }
            });
            var n = i("884691"),
                r = i("748820"),
                l = i("157590");
            let o = (0, r.v4)(),
                a = new Map,
                s = new Map;
            class _ extends n.Component {
                componentDidMount() {
                    if (this.props.active) {
                        let e = this.getVisibilityObserver();
                        e.observe(this), this.isVisible = e.isVisible(this), this.props.onChange(this.isVisible)
                    }
                }
                componentDidUpdate(e) {
                    let t = this.getVisibilityObserver(),
                        i = t.isVisible(this);
                    this.props.active && i !== this.isVisible && this.props.onChange(i), !e.active && this.props.active ? t.observe(this) : e.active && !this.props.active && t.unobserve(this), this.isVisible = i
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
                        t = s.get(e);
                    if (!t) throw Error("Visibility sensor with id ".concat(e, " not found."));
                    return t
                }
                render() {
                    return n.Children.only(this.props.children)
                }
                constructor(e) {
                    super(e), this.isVisible = !1;
                    let {
                        root: t,
                        rootMargin: i,
                        threshold: n
                    } = e;
                    t ? a.has(t) ? this.elementId = a.get(t) || "" : a.set(t, (0, r.v4)()) : this.elementId = o;
                    let _ = this.getVisibilityObserverId();
                    !s.has(_) && s.set(_, new l.default({
                        root: t,
                        rootMargin: i,
                        threshold: n
                    }))
                }
            }
            _.defaultProps = {
                active: !0,
                children: n.createElement("span"),
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: [0, Number.MIN_VALUE]
            };
            var u = _
        },
        290381: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                VisibilityObserver: function() {
                    return n.default
                },
                VisibilitySensor: function() {
                    return r.default
                }
            }), i("6268");
            var n = i("157590"),
                r = i("235855")
        }
    }
]);
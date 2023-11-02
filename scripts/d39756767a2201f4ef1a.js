(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["90717"], {
        817295: function(e, t, n) {
            "use strict";

            function i() {
                return n.el("225629").then(n.bind(n, "225629"))
            }
            async function l(e, t, n, l, r) {
                let a = await i();
                return a.crop_gif(e, t, n, l, r)
            }
            n.r(t), n.d(t, {
                default: function() {
                    return i
                },
                wasmCropGIF: function() {
                    return l
                }
            })
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return l
                },
                popLayer: function() {
                    return r
                },
                popAllLayers: function() {
                    return a
                }
            });
            var i = n("913144");

            function l(e) {
                i.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function r() {
                i.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function a() {
                i.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return l
                },
                updateCardInfo: function() {
                    return r
                },
                clearCardInfo: function() {
                    return a
                },
                updateAddressInfo: function() {
                    return o
                },
                clearError: function() {
                    return s
                }
            });
            var i = n("913144");

            function l(e) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function r(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function a() {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function o(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function s() {
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
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                a = n.n(r),
                o = n("77078"),
                s = n("782340"),
                u = n("347129");
            class E extends l.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: r,
                        error: E,
                        isLoading: _,
                        maxLength: c,
                        transitionState: d,
                        helpMessage: I,
                        retryPrompt: T,
                        retrySuccessMessage: A
                    } = this.props, {
                        code: R,
                        errorMessage: N,
                        retrySuccess: O
                    } = this.state, p = l.Children.count(r) > 0 ? (0, i.jsx)(o.Card, {
                        type: o.Card.Types.WARNING,
                        className: u.card,
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: r
                        })
                    }) : null, m = null != T ? (0, i.jsxs)(o.Text, {
                        className: a(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, i.jsx)("br", {}), (0, i.jsx)(o.Clickable, {
                            className: a(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, i.jsx)(o.Anchor, {
                                children: T
                            })
                        })]
                    }) : null, C = O ? (0, i.jsx)(o.Card, {
                        type: o.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: A
                        })
                    }) : null;
                    return (0, i.jsx)(o.ModalRoot, {
                        transitionState: d,
                        children: (0, i.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, i.jsx)(o.ModalHeader, {
                                separator: !1,
                                children: (0, i.jsx)(o.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, i.jsxs)(o.ModalContent, {
                                children: [null != I ? (0, i.jsx)(o.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u.spacing,
                                    children: I
                                }) : null, p, C, (0, i.jsxs)(o.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, i.jsx)(o.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != c ? c : 10,
                                        value: R,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, i.jsx)(o.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != E ? E : N
                                    }) : null, m]
                                })]
                            }), (0, i.jsxs)(o.ModalFooter, {
                                children: [(0, i.jsx)(o.Button, {
                                    type: "submit",
                                    disabled: _ || 0 === R.length,
                                    children: null != n ? n : s.default.Messages.CONFIRM
                                }), (0, i.jsx)(o.Button, {
                                    onClick: this.handleCancel,
                                    disabled: _,
                                    look: o.Button.Looks.LINK,
                                    color: o.Button.Colors.PRIMARY,
                                    children: s.default.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    }, this.setRef = e => {
                        this._input = e
                    }, this.getLabelText = () => {
                        var e;
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? s.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : s.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? s.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : s.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
                        var e;
                        return this.props.forceNoPlaceholder ? null : null !== (e = this.props.placeholder) && void 0 !== e ? e : this.getSupportedCodeTypes()
                    }, this.errorPresent = () => null != this.props.error && "" !== this.props.error || null != this.state.errorMessage && "" !== this.state.errorMessage, this.handleRetry = () => {
                        let {
                            onRetry: e
                        } = this.props;
                        null == e || e().then(() => this.setState({
                            retrySuccess: !0
                        }))
                    }, this.handleSubmit = e => {
                        e.preventDefault();
                        let {
                            handleSubmit: t,
                            onError: n
                        } = this.props;
                        t(this.state.code).catch(e => {
                            null != e.body && (null == n || n(e.body), e.body.message && this.setState({
                                errorMessage: e.body.message
                            }))
                        })
                    }, this.handleCancel = () => {
                        let {
                            onClose: e,
                            handleEarlyClose: t
                        } = this.props;
                        e(), null == t || t()
                    }, this.handleCodeChange = e => {
                        this.setState({
                            code: e
                        })
                    }
                }
            }
            E.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var _ = E
        },
        599417: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("872717"),
                l = n("49111"),
                r = n("782340");
            class a extends i.default.V8APIError {
                constructor(e, t) {
                    super(e, t, null != t ? r.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: l.Links.STATUS,
                        details: "".concat(t)
                    }) : r.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: l.Links.STATUS
                    }))
                }
            }
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("872717"),
                l = n("49111"),
                r = n("782340");
            class a extends i.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? r.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: l.Links.STATUS,
                        details: "".concat(t)
                    }) : r.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: l.Links.STATUS
                    }))
                }
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
        812204: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), (i = l || (l = {})).POPOUT_WINDOW = "popout window", i.OVERLAY = "overlay", i.NOTICE = "notice", i.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", i.BADGE = "badge", i.USER_SETTINGS = "user settings", i.USER_SETTINGS_MENU = "user settings menu", i.ACCOUNT = "account", i.TEXT_AND_IMAGES = "text and images", i.GUILD_SETTINGS = "guild settings", i.OVERVIEW = "overview", i.STICKERS = "stickers", i.VANITY_URL = "vanity url", i.PREMIUM_MARKETING = "premium marketing", i.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", i.PREMIUM_PAYMENT_MODAL = "premium payment modal", i.PREMIUM_UPSELL_ALERT = "premium upsell alert", i.PREMIUM_UPSELL_MODAL = "premium upsell modal", i.PREMIUM_SETTINGS = "premium settings", i.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", i.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", i.CHANNEL_CALL = "channel call", i.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", i.RTC_PANEL = "rtc panel", i.SOUNDBOARD_BUTTON = "soundboard button", i.SOUNDBOARD_POPOUT = "soundboard popout", i.SOUNDBOARD_WHEEL = "soundboard wheel", i.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", i.GIFT_BUTTON = "gift button", i.EXPRESSION_SUGGESTIONS = "expression suggestions", i.EMOJI_PICKER = "emoji picker", i.STICKER_PICKER = "sticker picker", i.STICKER_POPOUT = "sticker popout", i.PREMIUM_UPSELL = "premium upsell", i.EMPTY_STATE = "empty state", i.SUBSCRIPTION_DETAILS = "subscription details", i.SUBSCRIPTION_HEADER = "subscription header", i.ACCOUNT_CREDIT_BANNER = "account credit banner", i.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", i.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", i.STREAM_QUALITY_INDICATOR = "stream quality indicator", i.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", i.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", i.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", i.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", i.RPC = "rpc", i.BILLING_STANDALONE = "billing standalone", i.GUILD_CHANNEL_LIST = "guild channel list", i.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", i.STICKER_MESSAGE = "sticker message", i.CHANNEL_TEXT_AREA = "channel text area", i.HEADER_BAR = "header bar", i.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", i.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", i.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", i.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", i.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", i.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", i.GUILD_HEADER = "guild header", i.GUILD_BANNER = "guild banner", i.GUILD_BANNER_NOTICE = "guild banner notice", i.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", i.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", i.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", i.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", i.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", i.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", i.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", i.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", i.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", i.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", i.GUILDS_LIST = "guilds list", i.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", i.ACTIVITY_DIRECTORY = "activity directory", i.ACTIVITY_TILE = "activity tile", i.ACTIVITY_UPSELL = "activity upsell", i.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", i.INSTANT_INVITE_MODAL = "instant invite modal", i.IMAGE_CROPPING_MODAL = "image cropping modal", i.GIF_PICKER = "gif picker", i.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", i.INVITE_MODAL = "invite modal", i.INVITE_EMBED = "invite embed", i.NEW_GUILD_BUTTON = "new guild button", i.CHARACTER_COUNT = "character count", i.DM_CHANNEL = "dm channel", i.GUILD_CHANNEL = "guild channel", i.FORUM_CHANNEL = "forum channel", i.FILE_UPLOAD_POPOUT = "file upload popout", i.EMOJI = "emoji", i.PROFILE = "profile", i.PROFILE_MODAL = "profile modal", i.PROFILE_POPOUT = "profile popout", i.GUILD_PROFILE = "guild profile", i.EDIT_AVATAR = "edit avatar", i.EDIT_BANNER = "edit banner", i.CHAT_INPUT = "chat input", i.CREATE_THREAD = "create thread", i.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", i.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", i.SELECT_IMAGE_MODAL = "select image modal", i.VIDEO_BACKGROUND_OPTIONS = "video background options", i.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", i.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", i.CAMERA_PREVIEW = "camera preview", i.HOME_PAGE_PREMIUM_TAB = "home page premium tab", i.HOME_PAGE_SHOP_TAB = "home page shop tab", i.PREMIUM_MARKETING_SURFACE = "premium marketing surface", i.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", i.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", i.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", i.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", i.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", i.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", i.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", i.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", i.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", i.PREMIUM_MARKETING_FEATURE = "premium marketing feature", i.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", i.PREMIUM_MARKETING_FOOTER = "premium marketing footer", i.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", i.CHANNEL_CALL_ACTION_BAR = "channel call action bar", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", i.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", i.VOICE_CONTROL_TRAY = "voice control tray", i.ACTIVE_NOW_COLUMN = "active now column", i.CONTEXT_MENU = "context menu", i.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", i.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", i.CHANNEL_CATEGORY_MENU = "channel category menu", i.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", i.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", i.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", i.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", i.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", i.CHANNEL_TITLE_MENU = "channel title menu", i.GROUP_DM_MENU = "group dm menu", i.AUDIT_LOG_USER_MENU = "audit log user menu", i.BANNED_USER_MENU = "banned user menu", i.DM_USER_MENU = "dm user menu", i.GROUP_DM_USER_MENU = "group dm user menu", i.GUILD_CHANNEL_USER_MENU = "guild channel user menu", i.GUILD_MODERATION_USER_MENU = "guild moderation user menu", i.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", i.GUILD_SETTINGS_USER_MENU = "guild settings user menu", i.GUILD_USER_MENU = "guild user menu", i.THREAD_USER_MENU = "thread user menu", i.USER_GENERIC_MENU = "user generic menu", i.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", i.VOICE_ACTION_SHEET = "voice action sheet", i.FOCUSED_VOICE_CONTROLS = "focused voice controls", i.MASKED_LINK = "masked link", i.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", i.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", i.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", i.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", i.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", i.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", i.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", i.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", i.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", i.ACCOUNT_PROFILE_POPOUT = "account profile popout", i.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", i.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", i.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", i.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", i.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", i.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", i.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", i.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", i.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", i.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", i.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", i.STAGE_VIDEO_LIMIT = "stage video limit", i.ACTIVITIES_MINI_SHELF = "activities mini shelf", i.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", i.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", i.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", i.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", i.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", i.APP_ICON_EDITOR = "app icon editor", i.CLIENT_THEMES_EDITOR = "client themes editor", i.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", i.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", i.SHARE_NITRO_EMBED = "share nitro embed", i.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", i.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", i.REFERRAL_TRIALS_POPOUT = "referral trials popout", i.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", i.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", i.ACTIVITY_BOOKMARK = "activity bookmark", i.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", i.ACTIVITY_DETAIL_PAGE = "activity detail page", i.ACTIVITIES_PAGE = "activities page", i.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", i.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", i.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", i.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", i.ACTIVITIES_HAPPENING_NOW = "activities happening now", i.MEDIA_VIEWER = "media viewer", i.MESSAGE_LONG_PRESS_MENU = "message long press menu", i.COLLECTIBLES_SHOP = "collectibles shop", i.COLLECTIBLES_SHOP_CARD = "collectibles shop card", i.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", i.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", i.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", i.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", i.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", i.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", i.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", i.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", i.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", i.PREMIUM_BILLING_INFO = "premium billing info", i.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", i.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", i.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", i.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", i.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", i.PREMIUM_PLAN_SELECT = "premium_plan_select", i.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", i.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", i.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", i.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", i.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", i.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", i.MEMBER_SAFETY_PAGE = "member safety page", i.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", i.GUILD_MEMBER_MOD_VIEW = "guild member mod view", i.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", i.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", i.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", i.GUILD_SHOP_PAGE = "guild shop page", i.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", i.MESSAGE_REMIX_TAG = "message remix tag", i.MESSAGE_REMIX_BUTTON = "message remix button", i.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", i.CLIPS_SETTINGS = "clips settings", i.CLIPS_GALLERY = "clips gallery", i.CLIPS_GALLERY_ITEM = "clips gallery item", i.CLIPS_EDITOR = "clips editor", i.CLIPS_SHARE_MODAL = "clips share modal", i.CHANNEL_ATTACH_BUTTON = "channel attach button", i.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", i.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", i.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", i.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", i.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", i.GUILD_EVENT_CARD = "guild event card", i.EVENT_SETTINGS = "event settings";
            var i, l, r = l
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
        75015: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UploadTypes: function() {
                    return r
                },
                EDITING_CONTAINER_WIDTH: function() {
                    return s
                },
                USER_BANNER_MAX_WIDTH: function() {
                    return u
                },
                USER_BANNER_MAX_HEIGHT: function() {
                    return E
                },
                GUILD_BANNER_MAX_WIDTH: function() {
                    return _
                },
                GUILD_BANNER_MAX_HEIGHT: function() {
                    return c
                },
                SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
                    return d
                },
                SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
                    return I
                },
                HOME_HEADER_MAX_WIDTH: function() {
                    return T
                },
                HOME_HEADER_MAX_HEIGHT: function() {
                    return A
                },
                BANNER_ASPECT_RATIO: function() {
                    return R
                },
                GUILD_BANNER_ASPECT_RATIO: function() {
                    return N
                },
                SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
                    return O
                },
                HOME_HEADER_ASPECT_RATIO: function() {
                    return p
                },
                MAX_BANNER_OVERLAY_HEIGHT: function() {
                    return m
                },
                MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
                    return C
                },
                MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
                    return L
                },
                MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
                    return M
                },
                VIDEO_BACKGROUND_ASPECT_RATIO: function() {
                    return S
                },
                MAX_VIDEO_OVERLAY_HEIGHT: function() {
                    return h
                },
                MessageTypes: function() {
                    return a
                }
            });
            var i, l, r, a, o = n("917219");
            (i = r || (r = {}))[i.AVATAR = 0] = "AVATAR", i[i.BANNER = 1] = "BANNER", i[i.GUILD_BANNER = 2] = "GUILD_BANNER", i[i.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", i[i.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", i[i.HOME_HEADER = 5] = "HOME_HEADER", i[i.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
            let s = 568,
                u = 2400,
                E = 848,
                _ = 2400,
                c = 1350,
                d = 2400,
                I = 960,
                T = 2400,
                A = 600,
                R = 17 / 6,
                N = 16 / 9,
                O = 2.5,
                p = 4,
                m = s / R,
                C = s / N,
                L = s / O,
                M = s / p,
                S = o.BACKGROUND_REPLACEMENT_SIZE.width / o.BACKGROUND_REPLACEMENT_SIZE.height,
                h = s / S;
            (l = a || (a = {}))[l.CROP_GIF_START = 0] = "CROP_GIF_START", l[l.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", l[l.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
        },
        57015: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("917351"),
                a = n("77078"),
                o = n("812204"),
                s = n("685665"),
                u = n("652914"),
                E = n("95689"),
                _ = n("599110"),
                c = n("8731"),
                d = n("817295"),
                I = n("75015"),
                T = n("49111"),
                A = n("917219"),
                R = n("782340"),
                N = n("879777"),
                O = e => {
                    let {
                        file: t,
                        imgURI: n,
                        transitionState: O,
                        allowSkip: p = !1,
                        onCrop: m,
                        onClose: C,
                        uploadType: L = I.UploadTypes.AVATAR,
                        showUpsellHeader: M = !1,
                        analyticsPage: S
                    } = e, [h, g] = l.useState({
                        width: 0,
                        height: 0
                    }), [f, U] = l.useState({
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    }), [P, D] = l.useState(!1), [G, b] = l.useState(1), [w, H] = l.useState({
                        x: 0,
                        y: 0
                    }), [v, y] = l.useState(null), [B, V] = l.useState(!1), {
                        AnalyticsLocationProvider: x
                    } = (0, s.default)(o.default.IMAGE_CROPPING_MODAL), F = l.useRef({
                        x: 0,
                        y: 0
                    }), k = l.useRef(null), W = l.useRef(null), Y = "image/gif" === t.type;
                    l.useEffect(() => {
                        (0, d.default)()
                    }, []), l.useEffect(() => {
                        Y && M && _.default.track(T.AnalyticEvents.OPEN_MODAL, {
                            type: T.AnalyticsSections.CROP_GIF_MODAL,
                            location: {
                                page: S
                            }
                        })
                    }, [M, S, Y]);
                    let K = () => {
                            switch (L) {
                                case I.UploadTypes.BANNER:
                                    return {
                                        height: I.USER_BANNER_MAX_HEIGHT, width: I.USER_BANNER_MAX_WIDTH
                                    };
                                case I.UploadTypes.VIDEO_BACKGROUND:
                                    return A.BACKGROUND_REPLACEMENT_SIZE;
                                case I.UploadTypes.AVATAR:
                                case I.UploadTypes.AVATAR_DECORATION:
                                    return {
                                        height: T.AVATAR_MAX_SIZE, width: T.AVATAR_MAX_SIZE
                                    };
                                case I.UploadTypes.GUILD_BANNER:
                                    return {
                                        height: I.GUILD_BANNER_MAX_HEIGHT, width: I.GUILD_BANNER_MAX_WIDTH
                                    };
                                case I.UploadTypes.SCHEDULED_EVENT_IMAGE:
                                    return {
                                        height: I.SCHEDULED_EVENT_IMAGE_MAX_HEIGHT, width: I.SCHEDULED_EVENT_IMAGE_MAX_WIDTH
                                    };
                                case I.UploadTypes.HOME_HEADER:
                                    return {
                                        height: I.HOME_HEADER_MAX_HEIGHT, width: I.HOME_HEADER_MAX_WIDTH
                                    }
                            }
                        },
                        j = l.useCallback((e, t, n) => {
                            F.current = (0, c.getBoundedCoordinates)(e, t, n), null != k.current && (k.current.style.transform = "translate3d(".concat(F.current.x, "px, ").concat(F.current.y, "px, 0)"))
                        }, [k]),
                        X = l.useCallback(() => {
                            if (null == k.current || G > 1) return;
                            let {
                                width: e,
                                height: t
                            } = k.current.getBoundingClientRect(), {
                                width: n,
                                height: i
                            } = (0, c.adjustImageDimensionsForAspectRatio)(L, e, t), l = (0, c.calculateOverlaySize)(L, n, i, t);
                            y({
                                width: n,
                                height: i
                            }), g(l), U((0, c.calculateDragBoundaries)(n, i, l))
                        }, [L, G]),
                        z = l.useCallback(e => {
                            let {
                                x: t,
                                y: n
                            } = F.current;
                            if (!P || e.clientX === t && e.clientY === n) return;
                            let i = e.clientX - w.x,
                                l = e.clientY - w.y;
                            j(i, l, f)
                        }, [f, P, w, j]),
                        Z = () => {
                            D(!1)
                        },
                        J = () => {
                            let e = K();
                            return e.width !== e.height
                        },
                        q = async () => {
                            let e;
                            if (null == k.current) return;
                            V(!0);
                            let n = k.current,
                                i = K();
                            if (Y) try {
                                let {
                                    result: l,
                                    cancelFn: r
                                } = await (0, c.cropGIF)(t, n, h, F.current, i);
                                W.current = r, e = await l, W.current = null
                            } catch (e) {
                                var l;
                                throw null === (l = W.current) || void 0 === l || l.call(W), W.current = null, Error("Error cropping GIF")
                            } else e = (0, c.cropStaticImage)(n, h, F.current, i);
                            await m(e, t), V(!1), C()
                        };
                    return l.useEffect(() => (window.addEventListener("mouseup", Z), window.addEventListener("resize", X), () => {
                        window.removeEventListener("mouseup", Z), window.removeEventListener("resize", X)
                    }), [X]), l.useEffect(() => () => {
                        null != W.current && W.current()
                    }, []), l.useEffect(() => {
                        if (P) return window.addEventListener("mousemove", z), () => window.removeEventListener("mousemove", z)
                    }, [z, P]), (0, i.jsx)(x, {
                        children: (0, i.jsxs)(a.ModalRoot, {
                            onAnimationEnd: X,
                            transitionState: O,
                            size: a.ModalSize.MEDIUM,
                            children: [M && (0, i.jsx)(u.default, {
                                type: L,
                                analyticsPage: S,
                                analyticsSection: T.AnalyticsSections.CROP_GIF_MODAL,
                                isGIF: Y,
                                banner: n
                            }), (0, i.jsx)(a.ModalHeader, {
                                separator: !1,
                                children: (0, i.jsx)(a.FormTitle, {
                                    className: N.titleCase,
                                    tag: a.FormTitleTags.H1,
                                    children: R.default.Messages.AVATAR_UPLOAD_EDIT_MEDIA
                                })
                            }), (0, i.jsxs)(a.ModalContent, {
                                className: N.modalContent,
                                children: [(0, i.jsxs)("div", {
                                    className: N.editingContainer,
                                    children: [(0, i.jsx)("img", {
                                        style: {
                                            opacity: null == v ? 0 : 1,
                                            transform: "translate3d(".concat(F.current.x, "px, ").concat(F.current.y, "px, 0px)"),
                                            ...(() => {
                                                if (null == v) return {};
                                                let e = v.width / v.height,
                                                    t = J() && e > I.BANNER_ASPECT_RATIO ? h.height / v.height : 1;
                                                return {
                                                    width: v.width * G * t,
                                                    minWidth: v.width * G * t,
                                                    height: v.height * G * t
                                                }
                                            })()
                                        },
                                        className: B ? N.imageDisabled : N.imageEnabled,
                                        src: n,
                                        alt: "avatar",
                                        ref: k,
                                        onMouseDown: e => {
                                            let t = e.clientX - F.current.x,
                                                n = e.clientY - F.current.y;
                                            H({
                                                x: t,
                                                y: n
                                            }), D(!0)
                                        },
                                        draggable: !1
                                    }), (0, i.jsx)("div", {
                                        className: L === I.UploadTypes.AVATAR ? N.overlayAvatar : N.overlayBanner,
                                        style: {
                                            opacity: null == v ? 0 : 1,
                                            width: h.width,
                                            height: h.height
                                        }
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: N.sliderContainer,
                                    children: [(0, i.jsx)(E.default, {
                                        className: N.icon,
                                        width: 24,
                                        height: 24
                                    }), (0, i.jsx)(a.Slider, {
                                        initialValue: 1,
                                        minValue: 1,
                                        maxValue: 2,
                                        keyboardStep: .025,
                                        asValueChanges: e => {
                                            if (null == v) return;
                                            let {
                                                width: t,
                                                height: n
                                            } = v, i = (0, c.calculateDragBoundaries)(t * e, n * e, h), {
                                                x: l,
                                                y: a
                                            } = F.current;
                                            (!(0, r.inRange)(l, i.right, i.left) || !(0, r.inRange)(a, i.top, i.bottom)) && j(l, a, i), b(e), U(i)
                                        },
                                        disabled: B,
                                        equidistant: !0,
                                        hideBubble: !0,
                                        "aria-label": R.default.Messages.FORM_LABEL_AVATAR_SIZE
                                    }), (0, i.jsx)(E.default, {
                                        className: N.icon,
                                        width: 48,
                                        height: 48
                                    })]
                                })]
                            }), (0, i.jsxs)(a.ModalFooter, {
                                className: N.modalFooter,
                                children: [p ? (0, i.jsx)(a.Button, {
                                    className: N.cancelButton,
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.PRIMARY,
                                    size: a.ButtonSizes.SMALL,
                                    onClick: () => {
                                        p && (m(n, t), C())
                                    },
                                    children: R.default.Messages.AVATAR_UPLOAD_SKIP
                                }) : null, (0, i.jsxs)("div", {
                                    className: N.buttonsRight,
                                    children: [(0, i.jsx)(a.Button, {
                                        className: N.cancelButton,
                                        look: a.Button.Looks.LINK,
                                        color: a.Button.Colors.PRIMARY,
                                        size: a.ButtonSizes.SMALL,
                                        onClick: () => {
                                            if (null != W.current) {
                                                W.current(), W.current = null, V(!1);
                                                return
                                            }
                                            C()
                                        },
                                        children: R.default.Messages.AVATAR_UPLOAD_CANCEL
                                    }), (0, i.jsx)(a.Button, {
                                        submitting: B,
                                        size: a.ButtonSizes.SMALL,
                                        onClick: q,
                                        children: R.default.Messages.AVATAR_UPLOAD_APPLY
                                    })]
                                })]
                            })]
                        })
                    })
                }
        },
        8731: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                cropGIF: function() {
                    return a
                },
                cropStaticImage: function() {
                    return o
                },
                getBoundedCoordinates: function() {
                    return s
                },
                adjustImageDimensionsForAspectRatio: function() {
                    return E
                },
                calculateDragBoundaries: function() {
                    return _
                },
                calculateOverlaySize: function() {
                    return c
                },
                downsizeImage: function() {
                    return d
                }
            });
            var i = n("917351"),
                l = n("75015");

            function r(e, t, n, i) {
                let l = e.naturalWidth / e.width,
                    r = t.width / 2,
                    a = t.height / 2,
                    o = (e.width / 2 - r - n.x) * l,
                    s = (e.height / 2 - a - n.y) * l,
                    u = t.width * l,
                    E = t.height * l,
                    _ = Math.min(u, i.width),
                    c = Math.min(E, i.height);
                return {
                    x: o,
                    y: s,
                    scaledCropWidth: u,
                    scaledCropHeight: E,
                    canvasWidth: _,
                    canvasHeight: c
                }
            }
            async function a(e, t, i, a, o) {
                let {
                    x: s,
                    y: u,
                    scaledCropWidth: E,
                    scaledCropHeight: _
                } = r(t, i, a, o), c = await e.arrayBuffer(), d = new Worker(new URL(n.p + n.u("84300"), n.b)), I = new Promise((e, t) => {
                    d.onmessage = n => {
                        let {
                            data: i
                        } = n;
                        if (i.type === l.MessageTypes.CROP_GIF_COMPLETE) {
                            var r;
                            e((r = new Blob([i.result]), new Promise(e => {
                                let t = new FileReader;
                                t.onload = t => {
                                    var n;
                                    let i = null === (n = t.target) || void 0 === n ? void 0 : n.result;
                                    "string" == typeof i ? e(i) : e("")
                                }, t.readAsDataURL(r)
                            }))), d.terminate()
                        } else i.type === l.MessageTypes.CROP_GIF_ERROR && (t(Error("Error cropping GIF")), d.terminate())
                    }
                });
                return d.postMessage({
                    type: l.MessageTypes.CROP_GIF_START,
                    gif: new Uint8Array(c),
                    x: 0 | s,
                    y: 0 | u,
                    width: 0 | E,
                    height: 0 | _
                }), {
                    result: I,
                    cancelFn: () => d.terminate()
                }
            }

            function o(e, t, n, i) {
                let {
                    x: l,
                    y: a,
                    scaledCropWidth: o,
                    scaledCropHeight: s,
                    canvasWidth: u,
                    canvasHeight: E
                } = r(e, t, n, i), _ = document.createElement("canvas");
                _.width = u, _.height = E;
                let c = _.getContext("2d");
                return null != c && c.drawImage(e, l, a, o, s, 0, 0, _.width, _.height), _.toDataURL("image/png")
            }

            function s(e, t, n) {
                return {
                    x: (0, i.clamp)(e, n.left, n.right),
                    y: (0, i.clamp)(t, n.bottom, n.top)
                }
            }

            function u(e, t, n, i) {
                let r = n,
                    a = i;
                n > l.EDITING_CONTAINER_WIDTH && (r = l.EDITING_CONTAINER_WIDTH, a = i * (l.EDITING_CONTAINER_WIDTH / n));
                if (n / i < e) return {
                    width: r,
                    height: a
                };
                let o = t / a,
                    s = r * o;
                return {
                    width: s,
                    height: t
                }
            }

            function E(e, t, n) {
                switch (e) {
                    case l.UploadTypes.AVATAR:
                    case l.UploadTypes.AVATAR_DECORATION:
                        return {
                            width: t, height: n
                        };
                    case l.UploadTypes.BANNER:
                        return u(l.BANNER_ASPECT_RATIO, l.MAX_BANNER_OVERLAY_HEIGHT, t, n);
                    case l.UploadTypes.GUILD_BANNER:
                        return u(l.GUILD_BANNER_ASPECT_RATIO, l.MAX_GUILD_BANNER_OVERLAY_HEIGHT, t, n);
                    case l.UploadTypes.VIDEO_BACKGROUND:
                        return u(l.VIDEO_BACKGROUND_ASPECT_RATIO, l.MAX_VIDEO_OVERLAY_HEIGHT, t, n);
                    case l.UploadTypes.SCHEDULED_EVENT_IMAGE:
                        return u(l.SCHEDULED_EVENT_IMAGE_ASPECT_RATIO, l.MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT, t, n);
                    case l.UploadTypes.HOME_HEADER:
                        return u(l.HOME_HEADER_ASPECT_RATIO, l.MAX_HOME_HEADER_OVERLAY_HEIGHT, t, n)
                }
            }

            function _(e, t, n) {
                let i = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    l = e - n.width,
                    r = t - n.height;
                return 0 !== l && (i.left = -Math.abs(l / 2), i.right = l / 2), 0 !== r && (i.bottom = -Math.abs(r / 2), i.top = r / 2), i
            }

            function c(e, t, n, i) {
                switch (e) {
                    case l.UploadTypes.AVATAR:
                    case l.UploadTypes.AVATAR_DECORATION:
                        let r = Math.min(t, n);
                        return {
                            width: r, height: r
                        };
                    case l.UploadTypes.BANNER:
                        let a = Math.min(t, l.EDITING_CONTAINER_WIDTH);
                        return {
                            width: a, height: a * (1 / l.BANNER_ASPECT_RATIO)
                        };
                    case l.UploadTypes.GUILD_BANNER:
                        let o = Math.min(t, l.EDITING_CONTAINER_WIDTH);
                        return {
                            width: o, height: Math.min(o * (9 / 16), i)
                        };
                    case l.UploadTypes.VIDEO_BACKGROUND:
                        let s = Math.min(t, l.EDITING_CONTAINER_WIDTH);
                        return {
                            width: s, height: s * (9 / 16)
                        };
                    case l.UploadTypes.SCHEDULED_EVENT_IMAGE:
                        let u = Math.min(t, l.EDITING_CONTAINER_WIDTH);
                        return {
                            width: u, height: .4 * u
                        };
                    case l.UploadTypes.HOME_HEADER:
                        let E = Math.min(t, l.EDITING_CONTAINER_WIDTH);
                        return {
                            width: E, height: E * (1 / l.HOME_HEADER_ASPECT_RATIO)
                        }
                }
            }

            function d(e, t, n) {
                let i = e.naturalWidth / e.naturalHeight,
                    l = t,
                    r = n;
                e.naturalWidth > e.naturalHeight ? l /= i : r *= i;
                let a = {
                    height: l,
                    width: r
                };
                return o(e, {
                    width: e.width,
                    height: e.height
                }, {
                    x: 0,
                    y: 0
                }, a)
            }
        },
        252931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInventoryGuildPacksUserExperimentConfig: function() {
                    return E
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return _
                },
                useInventoryGuildSettingsExperiment: function() {
                    return d
                }
            });
            var i = n("65597"),
                l = n("862205"),
                r = n("697218"),
                a = n("719923"),
                o = n("782340");
            let s = (0, l.createExperiment)({
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
                u = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: i,
                        mobileViewAndUseEnabled: l,
                        mobileAndFreemiumCollectEnabled: r
                    } = n, o = a.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: r,
                        collectEnabled: o ? i : r
                    }
                },
                E = e => {
                    let {
                        user: t,
                        autoTrackExposure: n = !0
                    } = e;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1
                    } : u({
                        user: t,
                        config: s.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: n
                        })
                    })
                },
                _ = function() {
                    var e;
                    let {
                        expressionSourceGuild: t,
                        autoTrackExposure: n = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        expressionSourceGuild: void 0,
                        autoTrackExposure: !0
                    }, l = (0, i.default)([r.default], () => r.default.getCurrentUser()), a = s.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: o,
                        showTryPacksModalAndV2Copy: E,
                        collectEnabled: _
                    } = u({
                        user: l,
                        config: a
                    }), c = o && _ && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: o,
                        collectEnabled: c,
                        showTryPacksModalAndV2Copy: E
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
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("748820"),
                r = n("77078"),
                a = n("112679"),
                o = n("55689"),
                s = n("855133"),
                u = n("599110"),
                E = n("659500"),
                _ = n("49111"),
                c = n("646718");

            function d(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: d,
                    onClose: I,
                    onComplete: T,
                    onSubscriptionConfirmation: A,
                    analyticsLocations: R,
                    analyticsObject: N,
                    analyticsLocation: O,
                    analyticsSourceLocation: p,
                    isGift: m = !1,
                    giftMessage: C,
                    subscriptionTier: L,
                    trialId: M,
                    postSuccessGuild: S,
                    openInvoiceId: h,
                    applicationId: g,
                    referralTrialOfferId: f,
                    giftRecipient: U,
                    returnRef: P
                } = null != e ? e : {}, D = !1, G = (0, l.v4)();
                (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: l,
                            ...r
                        } = n;
                        return (0, i.jsx)(e, {
                            ...r,
                            loadId: G,
                            subscriptionTier: L,
                            skuId: L,
                            isGift: m,
                            giftMessage: C,
                            giftRecipient: U,
                            initialPlanId: t,
                            followupSKUInfo: d,
                            onClose: e => {
                                l(), null == I || I(e), e && (null == A || A())
                            },
                            onComplete: () => {
                                D = !0, null == T || T(), !m && ((0, s.setIsPersistentHelperHidden)(!0), (0, s.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: A,
                            analyticsLocations: R,
                            analyticsObject: N,
                            analyticsLocation: O,
                            analyticsSourceLocation: p,
                            trialId: M,
                            postSuccessGuild: S,
                            planGroup: c.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: h,
                            applicationId: g,
                            referralTrialOfferId: f,
                            returnRef: P
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !D && u.default.track(_.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: G,
                            payment_type: _.PurchaseTypeToAnalyticsPaymentType[_.PurchaseTypes.SUBSCRIPTION],
                            location: null != O ? O : N,
                            source: p,
                            subscription_type: _.SubscriptionTypes.PREMIUM,
                            is_gift: m,
                            eligible_for_trial: null != M,
                            application_id: g,
                            location_stack: R
                        }), (0, a.clearError)(), (0, o.clearPurchaseTokenAuthState)(), null == I || I(D), D && (!m && E.ComponentDispatch.dispatch(_.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == A || A())
                    },
                    onCloseRequest: _.NOOP
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
                    return r
                },
                resetPremiumTutorialStore: function() {
                    return a
                },
                setCanPlayWowMoment: function() {
                    return o
                },
                setIsPersistentHelperHidden: function() {
                    return s
                },
                setNavigatedFromHelper: function() {
                    return u
                }
            });
            var i = n("913144");
            let l = () => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                r = () => {
                    i.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                a = () => {
                    i.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                o = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                s = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                u = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        635956: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                r = n.n(l),
                a = n("446674"),
                o = n("77078"),
                s = n("79112"),
                u = n("685665"),
                E = n("788506"),
                _ = n("649844"),
                c = n("393414"),
                d = n("797647"),
                I = n("697218"),
                T = n("521012"),
                A = n("471671"),
                R = n("181114"),
                N = n("978679"),
                O = n("216422"),
                p = n("719923"),
                m = n("646718"),
                C = n("49111"),
                L = n("782340"),
                M = n("683437"),
                S = function(e) {
                    let {
                        isGift: t,
                        subscriptionTier: l,
                        onClick: S,
                        size: h,
                        className: g,
                        trialId: f,
                        isTrialCTA: U,
                        buttonText: P,
                        buttonTextClassName: D,
                        postSuccessGuild: G,
                        onSubscribeModalClose: b,
                        premiumModalAnalyticsLocation: w,
                        showIcon: H = !0,
                        disableShine: v,
                        applicationId: y,
                        giftMessage: B,
                        overrideDisabledButtonText: V,
                        shinyButtonClassName: x,
                        ...F
                    } = e, k = (0, a.useStateFromStores)([I.default], () => I.default.getCurrentUser()), W = (0, a.useStateFromStores)([A.default], () => A.default.isFocused()), Y = (0, a.useStateFromStores)([T.default], () => T.default.getPremiumTypeSubscription()), {
                        analyticsLocations: K
                    } = (0, u.default)(), j = e => {
                        if (e.preventDefault(), null == k) {
                            (0, c.transitionTo)(C.Routes.LOGIN);
                            return
                        }
                        if (null == S || S(e), (null == Y ? void 0 : Y.status) === C.SubscriptionStatusTypes.ACCOUNT_HOLD) {
                            (0, E.trackPremiumSettingsPaneOpened)(), s.default.open(C.UserSettingsSections.PREMIUM), null == b || b(!1);
                            return
                        }! function(e) {
                            let {
                                isClaimed: t,
                                isVerified: l,
                                isGift: r,
                                subscriptionTier: a,
                                trialId: s,
                                postSuccessGuild: u,
                                onSubscribeModalClose: E,
                                analyticsLocations: c,
                                premiumModalAnalyticsLocation: d,
                                applicationId: I,
                                giftMessage: T
                            } = e;
                            if (!t) {
                                (0, o.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("984599").then(n.bind(n, "984599"));
                                    return t => {
                                        let {
                                            onClose: n,
                                            ...l
                                        } = t;
                                        return (0, i.jsx)(e, {
                                            ...l,
                                            onClose: n
                                        })
                                    }
                                });
                                return
                            }
                            if (!l) {
                                (0, o.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("899917").then(n.bind(n, "899917"));
                                    return t => {
                                        let {
                                            onClose: n,
                                            ...l
                                        } = t;
                                        return (0, i.jsx)(e, {
                                            ...l,
                                            onClose: n
                                        })
                                    }
                                });
                                return
                            }
                            let A = C.AnalyticsObjectTypes.BUY;
                            null != s ? A = C.AnalyticsObjectTypes.TRIAL : r && (A = C.AnalyticsObjectTypes.GIFT), (0, _.default)({
                                isGift: r,
                                initialPlanId: null,
                                subscriptionTier: a,
                                analyticsLocations: c,
                                analyticsObject: {
                                    object: C.AnalyticsObjects.BUTTON_CTA,
                                    objectType: A,
                                    ...d
                                },
                                trialId: s,
                                postSuccessGuild: u,
                                onClose: E,
                                applicationId: I,
                                giftMessage: T
                            })
                        }({
                            isClaimed: k.isClaimed(),
                            isVerified: k.verified,
                            isGift: t,
                            subscriptionTier: l,
                            trialId: f,
                            postSuccessGuild: G,
                            onSubscribeModalClose: b,
                            analyticsLocations: K,
                            premiumModalAnalyticsLocation: w,
                            applicationId: y,
                            giftMessage: B
                        })
                    };
                    if (U) return (0, i.jsxs)(o.Button, {
                        size: h,
                        className: g,
                        innerClassName: M.premiumSubscribeButton,
                        look: o.Button.Looks.INVERTED,
                        onClick: j,
                        ...F,
                        children: [H && (0, i.jsx)(O.default, {
                            className: M.premiumIcon
                        }), (0, i.jsx)("span", {
                            className: r(M.buttonText, D),
                            children: null != P ? P : L.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                        })]
                    });
                    if (t) return (0, i.jsxs)(o.Button, {
                        size: h,
                        className: g,
                        innerClassName: M.giftButton,
                        color: o.Button.Colors.PRIMARY,
                        onClick: j,
                        ...F,
                        children: [(0, i.jsx)(N.default, {
                            className: M.giftIcon
                        }), (0, i.jsx)("span", {
                            className: r(M.buttonText, D),
                            children: null != P ? P : L.default.Messages.PREMIUM_GIFTING_BUTTON
                        })]
                    });
                    let X = L.default.Messages.APPLICATION_STORE_GET_PREMIUM,
                        z = null != Y ? (0, p.getPremiumPlanItem)(Y) : null,
                        Z = null != z ? p.default.getPremiumType(z.planId) : null == k ? void 0 : k.premiumType,
                        J = l === m.PremiumSubscriptionSKUs.TIER_2 && null != Z && [m.PremiumTypes.TIER_0, m.PremiumTypes.TIER_1].includes(Z);
                    J && (X = L.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
                    let q = null != Y && Y.status !== C.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, d.isNoneSubscription)(Y.planId) && !J,
                        Q = q ? null != V ? V : function(e) {
                            let {
                                ctaSubscriptionSkuId: t,
                                currentPremiumType: n
                            } = e, i = null, l = null;
                            if (null != t && t !== m.PremiumSubscriptionSKUs.LEGACY && t !== m.PremiumSubscriptionSKUs.TIER_0 && t !== m.PremiumSubscriptionSKUs.TIER_1 && t !== m.PremiumSubscriptionSKUs.TIER_2) return {
                                disabledButtonText: i,
                                disabledButtonTooltipText: l
                            };
                            let r = null != t ? m.PremiumSubscriptionSKUToPremiumType[t] : null,
                                a = null != r ? m.PremiumTypeOrder[r] : null,
                                o = null != n ? m.PremiumTypeOrder[n] : null;
                            return null != o && null != a && a < o ? (i = L.default.Messages.APPLICATION_STORE_GET_PREMIUM, l = L.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != r && null != n && r === n ? (i = L.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, l = L.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == r && null != n && n === m.PremiumTypes.TIER_2 && (l = L.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
                                disabledButtonText: i,
                                disabledButtonTooltipText: l
                            }
                        }({
                            ctaSubscriptionSkuId: l,
                            currentPremiumType: Z
                        }) : null;

                    function $(e) {
                        var t, n;
                        return (0, i.jsxs)(R.default, {
                            disabled: q,
                            onClick: j,
                            innerClassName: M.premiumSubscribeButton,
                            color: l === m.PremiumSubscriptionSKUs.TIER_1 ? o.Button.Colors.PRIMARY : o.Button.Colors.GREEN,
                            size: h,
                            className: x,
                            wrapperClassName: g,
                            pauseAnimation: !W || v,
                            ...F,
                            ...e,
                            children: [H && (0, i.jsx)(O.default, {
                                className: M.premiumIcon
                            }), (0, i.jsx)("span", {
                                className: r(M.buttonText, D),
                                children: null !== (n = null !== (t = null == Q ? void 0 : Q.disabledButtonText) && void 0 !== t ? t : P) && void 0 !== n ? n : X
                            })]
                        })
                    }
                    return (null == Q ? void 0 : Q.disabledButtonTooltipText) != null ? (0, i.jsx)(o.Tooltip, {
                        text: Q.disabledButtonTooltipText,
                        children: $
                    }) : $()
                }
        },
        471671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("627445"),
                l = n.n(i),
                r = n("446674"),
                a = n("913144"),
                o = n("816454");
            let s = new Map;

            function u(e) {
                let t = s.get(e);
                return null == t ? (console.warn("Window state not initialized", e), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : t
            }
            class E extends r.default.Store {
                isFocused() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.getMainWindowId)();
                    return u(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return s.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.getMainWindowId)();
                    return u(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.getMainWindowId)();
                    return u(e).windowSize
                }
            }
            E.displayName = "WindowStore";
            let _ = new E(a.default, {
                WINDOW_INIT: function(e) {
                    l(!s.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: i,
                        focused: r
                    } = e;
                    return s.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: i,
                        focused: r
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(e) {
                    let t = u(e.windowId);
                    return t.isElementFullscreen !== e.isElementFullscreen && (s.set(e.windowId, {
                        ...t,
                        isElementFullscreen: e.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(e) {
                    let t = u(e.windowId);
                    return t.focused !== e.focused && (s.set(e.windowId, {
                        ...t,
                        focused: e.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(e) {
                    let t = u(e.windowId);
                    return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (s.set(e.windowId, {
                        ...t,
                        windowSize: {
                            width: e.width,
                            height: e.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(e) {
                    return s.delete(e.windowId), !0
                }
            });
            n.el("599110").then(n.bind(n, "599110")).then(e => {
                let {
                    addExtraAnalyticsDecorator: t
                } = e;
                t(e => {
                    e.client_app_state = _.isFocused() ? "focused" : "unfocused"
                })
            });
            var c = _
        },
        103603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fit: function() {
                    return u
                },
                zoomFit: function() {
                    return E
                },
                getRatio: function() {
                    return _
                },
                getCoverRatio: function() {
                    return c
                },
                makeCssUrlString: function() {
                    return d
                },
                getPalette: function() {
                    return T
                },
                getPaletteForAvatar: function() {
                    return A
                },
                readFileAsBase64: function() {
                    return N
                },
                dataUriFileSize: function() {
                    return O
                },
                dataUrlToFile: function() {
                    return p
                },
                isPNGAnimated: function() {
                    return m
                }
            });
            var i = n("627445"),
                l = n.n(i),
                r = n("917351"),
                a = n.n(r),
                o = n("48648"),
                s = n.n(o);

            function u(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: l,
                    minWidth: r = 0,
                    minHeight: a = 0
                } = e;
                if (t !== i || n !== l) {
                    let e = t > i ? i / t : 1;
                    t = Math.max(Math.round(t * e), r), n = Math.max(Math.round(n * e), a);
                    let o = n > l ? l / n : 1;
                    t = Math.max(Math.round(t * o), r), n = Math.max(Math.round(n * o), a)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function E(e, t) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    i = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return u({
                    width: e,
                    height: t,
                    maxWidth: i,
                    maxHeight: n
                })
            }

            function _(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: l
                } = e, r = 1;
                t > i && (r = i / t), t = Math.round(t * r);
                let a = 1;
                return (n = Math.round(n * r)) > l && (a = l / n), Math.min(r * a, 1)
            }

            function c(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: l
                } = e;
                return t === n ? 1 : Math.min(Math.max(i / t, l / n), 1)
            }

            function d(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            let I = [
                [0, 0, 0]
            ];

            function T(e, t, n) {
                let i = document.createElement("canvas"),
                    l = i.getContext("2d");
                if (null == l) return I;
                let r = i.width = 0 === e.width ? 128 : e.width,
                    a = i.height = 0 === e.height ? 128 : e.height;
                l.drawImage(e, 0, 0, r, a);
                let o = l.getImageData(0, 0, r, a).data,
                    u = function(e, t, n) {
                        let i = [];
                        for (let l = 0, r, a, o, s, u; l < t; l += n) a = e[(r = 4 * l) + 0], o = e[r + 1], s = e[r + 2], (void 0 === (u = e[r + 3]) || u >= 125) && !(a > 250 && o > 250 && s > 250) && i.push([a, o, s]);
                        return i
                    }(o, r * a, n),
                    E = s(u, t);
                return "boolean" == typeof E ? I : E.palette()
            }
            let A = e => R(e),
                R = a.memoize(e => new Promise((t, n) => {
                    let i = new Image;
                    i.crossOrigin = "Anonymous", i.onerror = e => {
                        n(e), i.onerror = i.onload = null, i = null
                    }, i.onload = () => {
                        t(T(i, 5, 10)), i.onerror = i.onload = null, i = null
                    }, i.src = e
                }));

            function N(e) {
                return new Promise((t, n) => {
                    let i = new FileReader;
                    i.readAsDataURL(e), i.onload = () => {
                        l("string" == typeof i.result, "Result must be a string"), t(i.result)
                    }, i.onerror = e => n(e)
                })
            }

            function O(e) {
                let t = e.split(";base64,");
                return l(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
            }
            async function p(e, t, n) {
                let i = function(e) {
                        let t;
                        t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                        let n = e.split(",")[0].split(":")[1].split(";")[0],
                            i = new Uint8Array(t.length);
                        for (var l = 0; l < t.length; l++) i[l] = t.charCodeAt(l);
                        return new Blob([i], {
                            type: n
                        })
                    }(e),
                    l = await i.arrayBuffer();
                return new File([l], t, {
                    type: n
                })
            }
            async function m(e) {
                var t;
                let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let i = await e.text(),
                    l = i.indexOf("IDAT");
                return !!(l > 0) && -1 !== i.substring(0, l).indexOf("acTL") || !1
            }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return r
                }
            });
            var i = n("917351"),
                l = n.n(i);
            let r = e => "function" == typeof e ? e() : e;
            l.curry((e, t, n) => r(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let i, l;
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var r = n("697218"),
                a = n("615931");
            let o = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                i = e.showModal, o = e.updateModalProps, l = n("551042").closeModal
            }

            function s(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: r,
                    modalProps: a = {},
                    hooks: {
                        onEarlyClose: s
                    } = {}
                } = e;
                if (null == i) {
                    null == s || s();
                    return
                }
                let E = i(I, _, a);

                function _() {
                    null == s || s()
                }

                function c(e) {
                    l(E), n(e)
                }

                function d(e) {
                    l(E), r(e)
                }

                function I(e) {
                    return o(E, I, _, {
                        ...a,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: c,
                        reject: d,
                        code: e,
                        mfaCodeHandler: T,
                        isModalOpen: !0
                    })
                }

                function T(e) {
                    let {
                        res: t
                    } = e;
                    o(E, I, _, {
                        ...a,
                        error: t.body.message
                    })
                }
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: i,
                    code: l,
                    mfaCodeHandler: r = s,
                    isModalOpen: a = !1,
                    ...o
                } = e;
                return t(null != l ? {
                    code: l
                } : {}).then(n, e => {
                    var l, s;
                    if (l = e, s = a, l.body && 60008 === l.body.code || s && 429 === l.status) return r({
                        promiseFn: t,
                        resolve: n,
                        reject: i,
                        res: e,
                        ...o
                    });
                    i(e)
                })
            }

            function E(e, t) {
                var n, i;
                let {
                    checkEnabled: l = null !== (i = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i,
                    ...o
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, a.resolveThunk)(l) ? s : u)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...o
                    })
                })
            }
        },
        655518: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = {
                escape: e => e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return o
                },
                updateModalProps: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("551042"),
                r = n("920636");
            let a = (e, t, n) => function(l) {
                return (0, i.jsx)(r.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...l
                })
            };

            function o(e, t, n) {
                return (0, l.openModal)(a(e, t, n), {
                    onCloseCallback: t
                })
            }

            function s(e, t, n, i) {
                return (0, l.updateModal)(e, a(t, n, i))
            }
        }
    }
]);
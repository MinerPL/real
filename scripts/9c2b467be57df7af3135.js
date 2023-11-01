(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["55580"], {
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return l
                },
                popLayer: function() {
                    return a
                },
                popAllLayers: function() {
                    return r
                }
            });
            var i = n("913144");

            function l(e) {
                i.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function a() {
                i.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function r() {
                i.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        901582: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983"),
                l = n("884691"),
                a = n("748820"),
                r = n("599110"),
                o = n("117362"),
                s = n("49111");
            class u extends l.Component {
                renderProvider(e) {
                    var t, n;
                    let {
                        section: l,
                        page: a,
                        object: o,
                        objectType: s,
                        children: u
                    } = this.props, _ = this.mergeLocation(e.location, this.getLocation(a, l, o, s)), d = this.getContext(_, null !== (t = this._loadDate) && void 0 !== t ? t : e.loadDate, null !== (n = this._loadId) && void 0 !== n ? n : e.loadId);
                    return (0, i.jsx)(r.AnalyticsContext.Provider, {
                        value: d,
                        children: u
                    })
                }
                render() {
                    let {
                        context: e
                    } = this.props;
                    return null != e ? this.renderProvider(e) : (0, i.jsx)(r.AnalyticsContext.Consumer, {
                        children: e => this.renderProvider(e)
                    })
                }
                constructor(e) {
                    super(e), this._loadId = null, this._loadDate = this.props.root ? Date.now() : null, this.getLocation = (0, o.cachedFunction)((e, t, n, i) => {
                        let l = {};
                        return null != e && (l.page = e), null != t && (l.section = t), null != n && (l.object = n), null != i && (l.objectType = i), l
                    }), this.mergeLocation = (0, o.cachedFunction)((e, t) => ({
                        ...e,
                        ...t
                    })), this.getContext = (0, o.cachedFunction)((e, t, n) => ({
                        location: e,
                        loadDate: t,
                        loadId: n
                    })), null != e.loadId ? this._loadId = e.loadId : e.root && (this._loadId = (0, a.v4)())
                }
            }
            u.Pages = s.AnalyticsPages, u.Sections = s.AnalyticsSections, u.Objects = s.AnalyticsObjects, u.ObjectTypes = s.AnalyticsObjectTypes, u.defaultProps = {
                root: !1
            }
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983"),
                l = n("884691"),
                a = n("414456"),
                r = n.n(a),
                o = n("77078"),
                s = n("782340"),
                u = n("347129");
            class _ extends l.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: a,
                        error: _,
                        isLoading: d,
                        maxLength: E,
                        transitionState: c,
                        helpMessage: I,
                        retryPrompt: A,
                        retrySuccessMessage: T
                    } = this.props, {
                        code: N,
                        errorMessage: O,
                        retrySuccess: R
                    } = this.state, L = l.Children.count(a) > 0 ? (0, i.jsx)(o.Card, {
                        type: o.Card.Types.WARNING,
                        className: u.card,
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: a
                        })
                    }) : null, S = null != A ? (0, i.jsxs)(o.Text, {
                        className: r(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, i.jsx)("br", {}), (0, i.jsx)(o.Clickable, {
                            className: r(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, i.jsx)(o.Anchor, {
                                children: A
                            })
                        })]
                    }) : null, p = R ? (0, i.jsx)(o.Card, {
                        type: o.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: T
                        })
                    }) : null;
                    return (0, i.jsx)(o.ModalRoot, {
                        transitionState: c,
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
                                }) : null, L, p, (0, i.jsxs)(o.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, i.jsx)(o.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != E ? E : 10,
                                        value: N,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, i.jsx)(o.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != _ ? _ : O
                                    }) : null, S]
                                })]
                            }), (0, i.jsxs)(o.ModalFooter, {
                                children: [(0, i.jsx)(o.Button, {
                                    type: "submit",
                                    disabled: d || 0 === N.length,
                                    children: null != n ? n : s.default.Messages.CONFIRM
                                }), (0, i.jsx)(o.Button, {
                                    onClick: this.handleCancel,
                                    disabled: d,
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
            _.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var d = _
        },
        838446: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("901582");

            function a(e, t) {
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
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("685665");

            function a(e, t) {
                return function(n) {
                    let {
                        AnalyticsLocationProvider: a
                    } = (0, l.default)(t);
                    return (0, i.jsx)(a, {
                        children: (0, i.jsx)(e, {
                            ...n
                        })
                    })
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
        610174: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildAlertModeEnabled: function() {
                    return d
                },
                getGuildAlertModeEnabled: function() {
                    return E
                }
            });
            var i = n("316693"),
                l = n("446674"),
                a = n("862205"),
                r = n("305961"),
                o = n("957255"),
                s = n("421127");
            let u = (0, a.createExperiment)({
                    kind: "guild",
                    id: "2023-04_guild_alert_mode",
                    label: "Guild Alert Mode",
                    defaultConfig: {
                        showAlertMode: !1,
                        alsoShowMemberSafety: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show alert mode experience",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !1
                        }
                    }, {
                        id: 2,
                        label: "Show alert mode experience with member safety",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !0
                        }
                    }]
                }),
                _ = (0, a.createExperiment)({
                    kind: "guild",
                    id: "2023-08_guild_alert_mode_friend_server",
                    label: "Guild Alert Mode (friend servers only)",
                    defaultConfig: {
                        showAlertMode: !1,
                        alsoShowMemberSafety: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show alert mode experience",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !1
                        }
                    }, {
                        id: 2,
                        label: "Show alert mode experience with member safety",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !1
                        }
                    }]
                });

            function d(e) {
                let t = (0, l.useStateFromStores)([r.default], () => r.default.getGuild(e)),
                    n = (0, l.useStateFromStores)([o.default], () => null != t && i.default.hasAny(o.default.computePermissions(t), s.IncidentAlertModeratorPermissions)),
                    a = u.useExperiment({
                        guildId: e,
                        location: "c3fae3_1"
                    }, {
                        disable: !n,
                        autoTrackExposure: !0
                    }),
                    d = _.useExperiment({
                        guildId: e,
                        location: "c3fae3_2"
                    }, {
                        disable: !n,
                        autoTrackExposure: !0
                    });
                return {
                    showAlertMode: a.showAlertMode || d.showAlertMode,
                    alsoShowMemberSafety: a.alsoShowMemberSafety || d.alsoShowMemberSafety
                }
            }

            function E(e) {
                let t = r.default.getGuild(e),
                    n = null != t && i.default.hasAny(o.default.computePermissions(t), s.IncidentAlertModeratorPermissions),
                    l = u.getCurrentConfig({
                        guildId: e,
                        location: "c3fae3_3"
                    }, {
                        disable: !n,
                        autoTrackExposure: !0
                    }),
                    a = _.getCurrentConfig({
                        guildId: e,
                        location: "c3fae3_4"
                    }, {
                        disable: !n,
                        autoTrackExposure: !0
                    });
                return {
                    showAlertMode: l.showAlertMode || a.showAlertMode,
                    alsoShowMemberSafety: l.alsoShowMemberSafety || a.alsoShowMemberSafety
                }
            }
        },
        311340: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackReportRaidViewed: function() {
                    return E
                },
                setGuildRaidAlerts: function() {
                    return c
                },
                setGuildIncidentActions: function() {
                    return I
                },
                handleResolveRaid: function() {
                    return A
                },
                handleReportRaid: function() {
                    return T
                }
            });
            var i = n("866227"),
                l = n.n(i),
                a = n("872717"),
                r = n("716241"),
                o = n("592407"),
                s = n("305961"),
                u = n("599110"),
                _ = n("610174"),
                d = n("49111");

            function E(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                0 !== t.length && u.default.track(d.AnalyticEvents.GUILD_RAID_REPORTED, {
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    guild_id: e,
                    raid_types: t
                })
            }
            async function c(e, t) {
                let n = new Set(e.features);
                n.has(d.GuildFeatures.COMMUNITY) ? t ? n.delete(d.GuildFeatures.RAID_ALERTS_DISABLED) : n.add(d.GuildFeatures.RAID_ALERTS_DISABLED) : t ? n.add(d.GuildFeatures.NON_COMMUNITY_RAID_ALERTS) : n.delete(d.GuildFeatures.NON_COMMUNITY_RAID_ALERTS), await o.default.saveGuild(e.id, {
                    features: n
                }, {
                    throwErr: !0
                })
            }
            async function I(e, t, n, i) {
                let r = l().add(i, "hours").toISOString(),
                    o = await a.default.put({
                        url: d.Endpoints.GUILD_INCIDENT_ACTIONS(e),
                        body: {
                            invites_disabled_until: t ? r : null,
                            dms_disabled_until: n ? r : null
                        }
                    });
                return o
            }
            async function A(e, t, n) {
                let {
                    showAlertMode: i
                } = (0, _.getGuildAlertModeEnabled)(e), l = s.default.getGuild(e), r = null == l ? void 0 : l.getSafetyAlertsChannelId();
                if (!i || null == r) return null;
                let o = await a.default.post({
                    url: d.Endpoints.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
                    body: {
                        alert_message_id: t,
                        reason: n
                    }
                });
                return o
            }
            async function T(e) {
                let {
                    showAlertMode: t
                } = (0, _.getGuildAlertModeEnabled)(e), n = s.default.getGuild(e), i = null == n ? void 0 : n.getSafetyAlertsChannelId();
                if (!t || null == i) return null;
                let l = await a.default.post({
                    url: d.Endpoints.GUILD_INCIDENT_REPORT_RAID(e)
                });
                return l
            }
        },
        421127: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NAGBAR_DISPLAY_MAX_HOURS: function() {
                    return r
                },
                DEFAULT_LOCKDOWN_DURATION: function() {
                    return o
                },
                getTimeframes: function() {
                    return s
                },
                IncidentAlertModeratorPermissions: function() {
                    return u
                }
            });
            var i = n("316693"),
                l = n("843455"),
                a = n("782340");
            let r = 2,
                o = 2,
                s = () => [{
                    value: 1,
                    label: a.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_1_HOUR
                }, {
                    value: 2,
                    label: a.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_2_HOURS
                }, {
                    value: 4,
                    label: a.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_4_HOURS
                }, {
                    value: 6,
                    label: a.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_6_HOURS
                }, {
                    value: 12,
                    label: a.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_12_HOURS
                }, {
                    value: 24,
                    label: a.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_24_HOURS
                }],
                u = i.default.combine(l.Permissions.ADMINISTRATOR, l.Permissions.MANAGE_GUILD, l.Permissions.BAN_MEMBERS, l.Permissions.KICK_MEMBERS, l.Permissions.MODERATE_MEMBERS)
        },
        413266: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openReportRaidModal: function() {
                    return a
                },
                openSafetyChannelSetupModal: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078");

            function a(e) {
                (0, l.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("423588").then(n.bind(n, "423588"));
                    return n => (0, i.jsx)(t, {
                        ...n,
                        guildId: e
                    })
                })
            }

            function r(e) {
                (0, l.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("982537").then(n.bind(n, "982537"));
                    return n => (0, i.jsx)(t, {
                        ...n,
                        guildId: e
                    })
                })
            }
        },
        712125: function(e, t, n) {
            "use strict";
            var i, l, a, r, o, s;
            n.r(t), n.d(t, {
                GuildIncidentActionSources: function() {
                    return i
                },
                GuildIncidentAlertTypes: function() {
                    return l
                },
                GuildIncidentActionTypes: function() {
                    return a
                }
            }), (r = i || (i = {})).MESSAGE = "message", r.NAGBAR = "nagbar", r.GUILD_SETTINGS = "guild_settings", r.CONTEXT_MENU = "context_menu", r.GUILD_PROFILE = "guild_profile", r.MEMBER_SAFETY_PAGE = "member_safety_page", (o = l || (l = {})).JOIN_RAID = "join_raid", o.DM_RAID = "dm_raid", (s = a || (a = {})).INVITES_DISABLED = "invites_disabled", s.DMS_DISABLED = "dms_disabled"
        },
        311161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DATE_CONFIG: function() {
                    return s
                },
                hasDetectedActivity: function() {
                    return u
                },
                hasDetectedRaid: function() {
                    return _
                },
                hasDetectedDMRaid: function() {
                    return d
                },
                getIncidentAlertType: function() {
                    return E
                },
                getEnabledInterventions: function() {
                    return c
                },
                getDisabledInterventions: function() {
                    return I
                },
                isUnderLockdown: function() {
                    return A
                },
                hasDMsDisabled: function() {
                    return T
                },
                hasInvitesDisabled: function() {
                    return N
                },
                getSecurityActionDetailsString: function() {
                    return O
                }
            });
            var i = n("866227"),
                l = n.n(i),
                a = n("712125"),
                r = n("421127"),
                o = n("782340");
            let s = {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
            };

            function u(e) {
                return null != e.dmSpamDetectedAt && l(e.dmSpamDetectedAt).add(r.NAGBAR_DISPLAY_MAX_HOURS, "hours") > l() || null != e.raidDetectedAt && l(e.raidDetectedAt).add(r.NAGBAR_DISPLAY_MAX_HOURS, "hours") > l()
            }

            function _(e) {
                return null != e.raidDetectedAt && l(e.raidDetectedAt).add(r.NAGBAR_DISPLAY_MAX_HOURS, "hours") > l()
            }

            function d(e) {
                return null != e.dmSpamDetectedAt && l(e.dmSpamDetectedAt).add(r.NAGBAR_DISPLAY_MAX_HOURS, "hours") > l()
            }

            function E(e) {
                return null == e ? void 0 : _(e) ? a.GuildIncidentAlertTypes.JOIN_RAID : a.GuildIncidentAlertTypes.DM_RAID
            }

            function c(e, t) {
                let n = [];
                return e && n.push(a.GuildIncidentActionTypes.INVITES_DISABLED), t && n.push(a.GuildIncidentActionTypes.DMS_DISABLED), n
            }

            function I(e, t) {
                let n = [];
                return !e && n.push(a.GuildIncidentActionTypes.INVITES_DISABLED), !t && n.push(a.GuildIncidentActionTypes.DMS_DISABLED), n
            }

            function A(e) {
                return null != e.dmsDisabledUntil && new Date(e.dmsDisabledUntil) > new Date || null != e.invitesDisabledUntil && new Date(e.invitesDisabledUntil) > new Date
            }

            function T(e) {
                return (null == e ? void 0 : e.dmsDisabledUntil) != null && new Date(e.dmsDisabledUntil) > new Date
            }

            function N(e) {
                return (null == e ? void 0 : e.invitesDisabledUntil) != null && new Date(e.invitesDisabledUntil) > new Date
            }

            function O(e, t) {
                var n;
                let i = null !== (n = e.dmsDisabledUntil) && void 0 !== n ? n : e.invitesDisabledUntil;
                if (null == i) return "";
                let l = null != e.dmsDisabledUntil,
                    a = null != e.invitesDisabledUntil;
                switch (!0) {
                    case l && a:
                        return o.default.Messages.GUILD_ANTIRAID_PAUSE_DMS_AND_JOINS_NAGBAR_MESSAGE_NEW.format({
                            guildName: t,
                            time: new Date(i).toLocaleString(o.default.getLocale(), s)
                        });
                    case l:
                        return o.default.Messages.GUILD_ANTIRAID_PAUSE_DMS_NAGBAR_MESSAGE_NEW.format({
                            guildName: t,
                            time: new Date(i).toLocaleString(o.default.getLocale(), s)
                        });
                    case a:
                        return o.default.Messages.GUILD_ANTIRAID_PAUSE_JOINS_NAGBAR_MESSAGE_NEW.format({
                            guildName: t,
                            time: new Date(i).toLocaleString(o.default.getLocale(), s)
                        });
                    default:
                        return ""
                }
            }
        },
        54346: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var i = n("446674"),
                l = n("913144"),
                a = n("374363"),
                r = n("305961"),
                o = n("957255"),
                s = n("607620"),
                u = n("610174"),
                _ = n("311161");
            let d = {},
                E = {};

            function c() {
                var e;
                let t = null !== (e = a.default.getGuildsProto()) && void 0 !== e ? e : {},
                    n = r.default.getGuilds(),
                    i = Object.keys(n);
                for (let e of (E = {}, i))(0, u.getGuildAlertModeEnabled)(e).showAlertMode && (E[e] = {
                    guildId: e,
                    guildName: n[e].name,
                    ...t[e]
                })
            }

            function I(e) {
                return null != e && Object.keys(e).length > 0 ? {
                    raidDetectedAt: e.raid_detected_at,
                    dmSpamDetectedAt: e.dm_spam_detected_at,
                    dmsDisabledUntil: e.dms_disabled_until,
                    invitesDisabledUntil: e.invites_disabled_until
                } : null
            }
            class A extends i.default.Store {
                initialize() {
                    this.waitFor(a.default, r.default, o.default, s.default), this.syncWith([a.default, r.default, o.default, s.default], c)
                }
                getGuildIncident(e) {
                    return d[e]
                }
                getIncidentsByGuild() {
                    return d
                }
                getGuildAlertSettings() {
                    return E
                }
            }
            A.displayName = "GuildIncidentsStore";
            var T = new A(l.default, {
                CONNECTION_OPEN: function(e) {
                    for (let t of (d = {}, e.guilds)) {
                        let e = I(t.properties.incidents_data);
                        null != e && ((0, _.hasDetectedActivity)(e) || (0, _.isUnderLockdown)(e)) && (d[t.id] = e)
                    }
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e, n = I(t.properties.incidents_data);
                    null != n && ((0, _.hasDetectedActivity)(n) || (0, _.isUnderLockdown)(n)) && (d[t.id] = n)
                },
                GUILD_UPDATE: function(e) {
                    let {
                        guild: t
                    } = e, n = I(t.incidents_data);
                    null != n && ((0, _.hasDetectedActivity)(n) || (0, _.isUnderLockdown)(n)) ? (Object.keys(d).forEach(e => {
                        let t = d[e];
                        !(0, _.hasDetectedActivity)(t) && delete d[e]
                    }), d[t.id] = n) : delete d[t.id]
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete d[t.id]
                },
                LOGOUT: function(e) {
                    d = {}
                }
            })
        },
        100835: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                InvitesDisabledExperiment: function() {
                    return u
                },
                useInvitesDisabledPermission: function() {
                    return _
                },
                useInvitesDisabledExperiment: function() {
                    return d
                },
                setInvitesDisabled: function() {
                    return E
                },
                useShouldShowInvitesDisabledNotif: function() {
                    return c
                }
            });
            var i = n("446674"),
                l = n("862205"),
                a = n("54346"),
                r = n("957255"),
                o = n("592407"),
                s = n("49111");
            let u = (0, l.createExperiment)({
                kind: "guild",
                id: "2022-07_invites_disabled",
                label: "Report Raids",
                defaultConfig: {
                    enableInvitesDisabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Reporting Of Raids",
                    config: {
                        enableInvitesDisabled: !0
                    }
                }]
            });

            function _(e) {
                return (0, i.useStateFromStores)([r.default], () => null != e && r.default.can(s.Permissions.MANAGE_GUILD, e), [e])
            }

            function d(e) {
                return u.useExperiment({
                    guildId: e.id,
                    location: "108f83_1"
                }, {
                    autoTrackExposure: !1
                })
            }
            async function E(e, t) {
                if (e.hasFeature(s.GuildFeatures.INVITES_DISABLED) === t) return;
                let n = new Set(e.features);
                t ? n.add(s.GuildFeatures.INVITES_DISABLED) : n.delete(s.GuildFeatures.INVITES_DISABLED), await o.default.saveGuild(e.id, {
                    features: n
                }, {
                    throwErr: !0
                })
            }

            function c(e) {
                var t;
                let n = _(e),
                    l = (0, i.useStateFromStores)([a.default], () => null != e ? a.default.getGuildIncident(e.id) : null),
                    r = (null == e ? void 0 : null === (t = e.hasFeature) || void 0 === t ? void 0 : t.call(e, s.GuildFeatures.INVITES_DISABLED)) || (null == l ? void 0 : l.invitesDisabledUntil) != null && new Date(l.invitesDisabledUntil) > new Date;
                return n && r
            }
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return O
                },
                updateImpersonating: function() {
                    return R
                },
                stopImpersonating: function() {
                    return L
                },
                updateImpersonatedChannels: function() {
                    return p
                },
                updateImpersonatedRoles: function() {
                    return m
                },
                updateImpersonatedData: function() {
                    return M
                }
            });
            var i = n("913144"),
                l = n("716241"),
                a = n("393414"),
                r = n("42203"),
                o = n("923959"),
                s = n("26989"),
                u = n("305961"),
                _ = n("957255"),
                d = n("18494"),
                E = n("282109"),
                c = n("599110"),
                I = n("38654"),
                A = n("507950"),
                T = n("49111"),
                N = n("724210");

            function O(e, t) {
                c.default.track(T.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, l.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === A.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), S(e)
            }

            function R(e, t) {
                let n = I.default.getData(e);
                null != n && n.type === t.type && (c.default.track(T.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, l.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === A.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), S(e))
            }

            function L(e) {
                i.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function S(e) {
                let t = d.default.getChannelId(e),
                    n = r.default.getChannel(t),
                    i = null != t && (0, N.isStaticChannelRoute)(t);
                if (!i && !_.default.can(T.Permissions.VIEW_CHANNEL, n)) {
                    let t = o.default.getDefaultChannel(e);
                    null != t && (0, a.transitionTo)(T.Routes.CHANNEL(e, t.id))
                }
            }

            function p(e, t, n) {
                let i = new Set(E.default.getOptedInChannels(e));
                t.forEach(e => i.add(e)), n.forEach(e => i.delete(e)), R(e, {
                    type: A.ImpersonateType.NEW_MEMBER,
                    optInChannels: i
                })
            }

            function m(e, t) {
                let n = u.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                        i = Array.from(t);
                    o.default.addConditionalChangeListener(() => {
                        let t = s.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (i.some(e => !t.roles.includes(e))) return !0;
                        let l = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                            a = l.filter(e => !n.includes(e));
                        return a.length > 0 && p(e, a, []), !1
                    })
                }(e, t);
                let i = {};
                t.forEach(e => i[e] = n.roles[e]), R(e, {
                    type: A.ImpersonateType.NEW_MEMBER,
                    roles: i
                })
            }

            function M(e, t) {
                R(e, {
                    type: A.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        701587: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078"),
                a = n("272030"),
                r = n("838446"),
                o = n("158534"),
                s = n("812204"),
                u = n("32573"),
                _ = n("73924"),
                d = n("743370"),
                E = n("49111"),
                c = n("782340"),
                I = (0, o.default)((0, r.default)(function(e) {
                    let {
                        guildId: t,
                        context: n,
                        onSelect: r
                    } = e, o = (0, d.default)(t, n), s = (0, _.default)(t, n), E = (0, u.default)(t, n);
                    return (0, i.jsxs)(l.Menu, {
                        navId: "moderation-raid-context",
                        onClose: a.closeContextMenu,
                        "aria-label": c.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: r,
                        children: [(0, i.jsx)(l.MenuGroup, {
                            children: s
                        }), (0, i.jsxs)(l.MenuGroup, {
                            children: [E, o]
                        })]
                    })
                }, {
                    object: E.AnalyticsObjects.CONTEXT_MENU
                }), [s.default.CONTEXT_MENU, s.default.GUILD_MODERATION_RAID_MENU])
        },
        32573: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078"),
                a = n("54239"),
                r = n("592407"),
                o = n("49111"),
                s = n("782340");

            function u(e, t) {
                let n = t === o.AppContext.POPOUT;
                return n ? null : (0, i.jsx)(l.MenuItem, {
                    id: "nav-server-settings",
                    label: s.default.Messages.SERVER_SETTINGS,
                    action: () => {
                        (0, a.popLayer)(), r.default.open(e, o.GuildSettingsSections.MODERATION)
                    }
                })
            }
        },
        73924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var i = n("37983"),
                l = n("884691"),
                a = n("446674"),
                r = n("77078"),
                o = n("272030"),
                s = n("610174"),
                u = n("311340"),
                _ = n("712125"),
                d = n("311161"),
                E = n("54346"),
                c = n("100835"),
                I = n("305961"),
                A = n("49111"),
                T = n("782340");

            function N(e, t) {
                let N = t === A.AppContext.POPOUT,
                    O = (0, a.useStateFromStores)([I.default], () => I.default.getGuild(e), [e]),
                    [R, L] = l.useState(!1),
                    {
                        showAlertMode: S
                    } = (0, s.useGuildAlertModeEnabled)(e),
                    p = (0, a.useStateFromStores)([E.default], () => null != O ? E.default.getGuildIncident(O.id) : null),
                    m = (null == O ? void 0 : O.hasFeature(A.GuildFeatures.INVITES_DISABLED)) || S && (null == p ? void 0 : p.invitesDisabledUntil) != null && new Date(p.invitesDisabledUntil) > new Date,
                    [M, C] = l.useState(m),
                    f = async t => {
                        if (!R && null != O) {
                            L(!0);
                            try {
                                if (C(t), S) {
                                    if (t) {
                                        let t = {
                                            source: _.GuildIncidentActionSources.MESSAGE,
                                            alertType: (0, d.getIncidentAlertType)(p)
                                        };
                                        (0, r.openModalLazy)(async () => {
                                            let {
                                                default: l
                                            } = await n.el("186638").then(n.bind(n, "186638"));
                                            return n => (0, i.jsx)(l, {
                                                ...n,
                                                guildId: e,
                                                analyticsData: t
                                            })
                                        })
                                    } else await (0, u.setGuildIncidentActions)(O.id, !1, !1)
                                } else await (0, c.setInvitesDisabled)(O, t)
                            } catch (e) {
                                C(!t)
                            } finally {
                                L(!1), (0, o.closeContextMenu)()
                            }
                        }
                    };
                return N ? null : (0, i.jsx)(r.MenuCheckboxItem, {
                    id: "pause-invites",
                    label: T.default.Messages.DISABLE_INVITES,
                    action: () => {
                        f(!M)
                    },
                    checked: M
                })
            }
        },
        743370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078"),
                a = n("54239"),
                r = n("413266"),
                o = n("49111"),
                s = n("782340");

            function u(e, t) {
                let n = t === o.AppContext.POPOUT;
                return n ? null : (0, i.jsx)(l.MenuItem, {
                    id: "report-raid",
                    label: s.default.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,
                    action: () => {
                        (0, a.popLayer)(), (0, r.openReportRaidModal)(e)
                    }
                })
            }
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("866227"),
                l = n.n(i),
                a = n("666038");
            class r extends a.default {
                static createFromServer(e) {
                    var t;
                    return new r({
                        ...e,
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: l(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = l(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = l(this.createdAt);
                        return e.add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.code = e.code || "", this.temporary = e.temporary || !1, this.revoked = e.revoked || !1, this.uses = e.uses || 0, this.maxUses = e.maxUses || 0, this.maxAge = e.maxAge || 0, this.createdAt = e.createdAt || new Date, this.channel = e.channel, this.guild = e.guild, this.inviter = e.inviter || null, this.targetType = e.targetType || null, this.targetUser = e.targetUser || null, this.targetApplication = e.targetApplication || null, this.type = e.type || null, this.flags = e.flags || 0
                }
            }
        },
        607620: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("446674"),
                l = n("913144"),
                a = n("996777");

            function r() {
                return !0
            }
            class o extends i.default.Store {
                initialize() {
                    this.waitFor(a.default)
                }
                getExperimentAssignment(e, t) {
                    return a.default.getGuildExperimentDescriptor(t, e)
                }
            }
            o.displayName = "GuildExperimentStore";
            var s = new o(l.default, {
                LOGOUT: r,
                LOGIN_SUCCESS: r,
                CONNECTION_OPEN: r,
                EXPERIMENTS_FETCH_SUCCESS: r,
                OVERLAY_INITIALIZE: r,
                CACHE_LOADED: r,
                EXPERIMENTS_FETCH_FAILURE: r,
                EXPERIMENT_REGISTER_LEGACY: r,
                EXPERIMENT_OVERRIDE_BUCKET: r
            })
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return a
                }
            });
            var i = n("917351"),
                l = n.n(i);
            let a = e => "function" == typeof e ? e() : e;
            l.curry((e, t, n) => a(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let i, l;
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("697218"),
                r = n("615931");
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
                    reject: a,
                    modalProps: r = {},
                    hooks: {
                        onEarlyClose: s
                    } = {}
                } = e;
                if (null == i) {
                    null == s || s();
                    return
                }
                let _ = i(I, d, r);

                function d() {
                    null == s || s()
                }

                function E(e) {
                    l(_), n(e)
                }

                function c(e) {
                    l(_), a(e)
                }

                function I(e) {
                    return o(_, I, d, {
                        ...r,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: E,
                        reject: c,
                        code: e,
                        mfaCodeHandler: A,
                        isModalOpen: !0
                    })
                }

                function A(e) {
                    let {
                        res: t
                    } = e;
                    o(_, I, d, {
                        ...r,
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
                    mfaCodeHandler: a = s,
                    isModalOpen: r = !1,
                    ...o
                } = e;
                return t(null != l ? {
                    code: l
                } : {}).then(n, e => {
                    var l, s;
                    if (l = e, s = r, l.body && 60008 === l.body.code || s && 429 === l.status) return a({
                        promiseFn: t,
                        resolve: n,
                        reject: i,
                        res: e,
                        ...o
                    });
                    i(e)
                })
            }

            function _(e, t) {
                var n, i;
                let {
                    checkEnabled: l = null !== (i = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i,
                    ...o
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, r.resolveThunk)(l) ? s : u)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...o
                    })
                })
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
                a = n("920636");
            let r = (e, t, n) => function(l) {
                return (0, i.jsx)(a.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...l
                })
            };

            function o(e, t, n) {
                return (0, l.openModal)(r(e, t, n), {
                    onCloseCallback: t
                })
            }

            function s(e, t, n, i) {
                return (0, l.updateModal)(e, r(t, n, i))
            }
        }
    }
]);
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["28597"], {
        54239: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
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
            var n = i("913144");

            function l(e) {
                n.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function a() {
                n.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function r() {
                n.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        901582: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return E
                }
            });
            var n = i("920040"),
                l = i("773670"),
                a = i("462567"),
                r = i("599110"),
                o = i("117362"),
                _ = i("49111");
            class E extends l.Component {
                renderProvider(e) {
                    var t, i;
                    let {
                        section: l,
                        page: a,
                        object: o,
                        objectType: _,
                        children: E
                    } = this.props, s = this.mergeLocation(e.location, this.getLocation(a, l, o, _)), u = this.getContext(s, null !== (t = this._loadDate) && void 0 !== t ? t : e.loadDate, null !== (i = this._loadId) && void 0 !== i ? i : e.loadId);
                    return (0, n.jsx)(r.AnalyticsContext.Provider, {
                        value: u,
                        children: E
                    })
                }
                render() {
                    let {
                        context: e
                    } = this.props;
                    return null != e ? this.renderProvider(e) : (0, n.jsx)(r.AnalyticsContext.Consumer, {
                        children: e => this.renderProvider(e)
                    })
                }
                constructor(e) {
                    super(e), this._loadId = null, this._loadDate = this.props.root ? Date.now() : null, this.getLocation = (0, o.cachedFunction)((e, t, i, n) => {
                        let l = {};
                        return null != e && (l.page = e), null != t && (l.section = t), null != i && (l.object = i), null != n && (l.objectType = n), l
                    }), this.mergeLocation = (0, o.cachedFunction)((e, t) => ({
                        ...e,
                        ...t
                    })), this.getContext = (0, o.cachedFunction)((e, t, i) => ({
                        location: e,
                        loadDate: t,
                        loadId: i
                    })), null != e.loadId ? this._loadId = e.loadId : e.root && (this._loadId = (0, a.v4)())
                }
            }
            E.Pages = _.AnalyticsPages, E.Sections = _.AnalyticsSections, E.Objects = _.AnalyticsObjects, E.ObjectTypes = _.AnalyticsObjectTypes, E.defaultProps = {
                root: !1
            }
        },
        920636: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return u
                }
            });
            var n = i("920040"),
                l = i("773670"),
                a = i("575482"),
                r = i.n(a),
                o = i("77078"),
                _ = i("782340"),
                E = i("430230");
            class s extends l.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: i,
                        children: a,
                        error: s,
                        isLoading: u,
                        maxLength: c,
                        transitionState: I,
                        helpMessage: d,
                        retryPrompt: T,
                        retrySuccessMessage: A
                    } = this.props, {
                        code: O,
                        errorMessage: N,
                        retrySuccess: L
                    } = this.state, R = l.Children.count(a) > 0 ? (0, n.jsx)(o.Card, {
                        type: o.Card.Types.WARNING,
                        className: E.card,
                        children: (0, n.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: a
                        })
                    }) : null, p = null != T ? (0, n.jsxs)(o.Text, {
                        className: r(E.submitText, E.spacing),
                        variant: "text-sm/normal",
                        children: [(0, n.jsx)("br", {}), (0, n.jsx)(o.Clickable, {
                            className: r(E.spacing, E.link),
                            onClick: this.handleRetry,
                            children: (0, n.jsx)(o.Anchor, {
                                children: T
                            })
                        })]
                    }) : null, m = L ? (0, n.jsx)(o.Card, {
                        type: o.Card.Types.SUCCESS,
                        className: E.card,
                        children: (0, n.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: A
                        })
                    }) : null;
                    return (0, n.jsx)(o.ModalRoot, {
                        transitionState: I,
                        children: (0, n.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, n.jsx)(o.ModalHeader, {
                                separator: !1,
                                children: (0, n.jsx)(o.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, n.jsxs)(o.ModalContent, {
                                children: [null != d ? (0, n.jsx)(o.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: E.spacing,
                                    children: d
                                }) : null, R, m, (0, n.jsxs)(o.FormItem, {
                                    title: this.getLabelText(),
                                    className: E.spacing,
                                    children: [(0, n.jsx)(o.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != c ? c : 10,
                                        value: O,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, n.jsx)(o.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: E.error,
                                        children: null != s ? s : N
                                    }) : null, p]
                                })]
                            }), (0, n.jsxs)(o.ModalFooter, {
                                children: [(0, n.jsx)(o.Button, {
                                    type: "submit",
                                    disabled: u || 0 === O.length,
                                    children: null != i ? i : _.default.Messages.CONFIRM
                                }), (0, n.jsx)(o.Button, {
                                    onClick: this.handleCancel,
                                    disabled: u,
                                    look: o.Button.Looks.LINK,
                                    color: o.Button.Colors.PRIMARY,
                                    children: _.default.Messages.CANCEL
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
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? _.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : _.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? _.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : _.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
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
                            onError: i
                        } = this.props;
                        t(this.state.code).catch(e => {
                            null != e.body && (null == i || i(e.body), e.body.message && this.setState({
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
            s.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var u = s
        },
        838446: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var n = i("920040");
            i("773670");
            var l = i("901582");

            function a(e, t) {
                return function(i) {
                    return (0, n.jsx)(l.default, {
                        page: t.page,
                        section: t.section,
                        object: t.object,
                        objectType: t.objectType,
                        children: (0, n.jsx)(e, {
                            ...i
                        })
                    })
                }
            }
        },
        158534: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var n = i("920040");
            i("773670");
            var l = i("685665");

            function a(e, t) {
                return function(i) {
                    let {
                        AnalyticsLocationProvider: a
                    } = (0, l.default)(t);
                    return (0, n.jsx)(a, {
                        children: (0, n.jsx)(e, {
                            ...i
                        })
                    })
                }
            }
        },
        812204: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            }), (n = l || (l = {})).POPOUT_WINDOW = "popout window", n.OVERLAY = "overlay", n.NOTICE = "notice", n.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", n.BADGE = "badge", n.USER_SETTINGS = "user settings", n.USER_SETTINGS_MENU = "user settings menu", n.ACCOUNT = "account", n.TEXT_AND_IMAGES = "text and images", n.GUILD_SETTINGS = "guild settings", n.OVERVIEW = "overview", n.STICKERS = "stickers", n.VANITY_URL = "vanity url", n.PREMIUM_MARKETING = "premium marketing", n.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", n.PREMIUM_PAYMENT_MODAL = "premium payment modal", n.PREMIUM_UPSELL_ALERT = "premium upsell alert", n.PREMIUM_UPSELL_MODAL = "premium upsell modal", n.PREMIUM_SETTINGS = "premium settings", n.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", n.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", n.CHANNEL_CALL = "channel call", n.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", n.RTC_PANEL = "rtc panel", n.SOUNDBOARD_BUTTON = "soundboard button", n.SOUNDBOARD_POPOUT = "soundboard popout", n.SOUNDBOARD_WHEEL = "soundboard wheel", n.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", n.GIFT_BUTTON = "gift button", n.EXPRESSION_SUGGESTIONS = "expression suggestions", n.EMOJI_PICKER = "emoji picker", n.STICKER_PICKER = "sticker picker", n.STICKER_POPOUT = "sticker popout", n.PREMIUM_UPSELL = "premium upsell", n.EMPTY_STATE = "empty state", n.SUBSCRIPTION_DETAILS = "subscription details", n.SUBSCRIPTION_HEADER = "subscription header", n.ACCOUNT_CREDIT_BANNER = "account credit banner", n.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", n.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", n.STREAM_QUALITY_INDICATOR = "stream quality indicator", n.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", n.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", n.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", n.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", n.RPC = "rpc", n.BILLING_STANDALONE = "billing standalone", n.GUILD_CHANNEL_LIST = "guild channel list", n.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", n.STICKER_MESSAGE = "sticker message", n.CHANNEL_TEXT_AREA = "channel text area", n.HEADER_BAR = "header bar", n.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", n.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", n.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", n.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", n.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", n.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", n.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", n.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", n.GUILD_HEADER = "guild header", n.GUILD_BANNER = "guild banner", n.GUILD_BANNER_NOTICE = "guild banner notice", n.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", n.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", n.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", n.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", n.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", n.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", n.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", n.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", n.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", n.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", n.GUILDS_LIST = "guilds list", n.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", n.ACTIVITY_DIRECTORY = "activity directory", n.ACTIVITY_TILE = "activity tile", n.ACTIVITY_UPSELL = "activity upsell", n.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", n.INSTANT_INVITE_MODAL = "instant invite modal", n.IMAGE_CROPPING_MODAL = "image cropping modal", n.GIF_PICKER = "gif picker", n.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", n.INVITE_MODAL = "invite modal", n.INVITE_EMBED = "invite embed", n.NEW_GUILD_BUTTON = "new guild button", n.CHARACTER_COUNT = "character count", n.DM_CHANNEL = "dm channel", n.GUILD_CHANNEL = "guild channel", n.FORUM_CHANNEL = "forum channel", n.FILE_UPLOAD_POPOUT = "file upload popout", n.EMOJI = "emoji", n.PROFILE = "profile", n.PROFILE_MODAL = "profile modal", n.PROFILE_POPOUT = "profile popout", n.GUILD_PROFILE = "guild profile", n.EDIT_AVATAR = "edit avatar", n.EDIT_BANNER = "edit banner", n.CHAT_INPUT = "chat input", n.CREATE_THREAD = "create thread", n.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", n.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", n.SELECT_IMAGE_MODAL = "select image modal", n.VIDEO_BACKGROUND_OPTIONS = "video background options", n.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", n.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", n.CAMERA_PREVIEW = "camera preview", n.HOME_PAGE_PREMIUM_TAB = "home page premium tab", n.HOME_PAGE_SHOP_TAB = "home page shop tab", n.PREMIUM_MARKETING_SURFACE = "premium marketing surface", n.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", n.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", n.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", n.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", n.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", n.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", n.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", n.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", n.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", n.PREMIUM_MARKETING_FEATURE = "premium marketing feature", n.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", n.PREMIUM_MARKETING_FOOTER = "premium marketing footer", n.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", n.CHANNEL_CALL_ACTION_BAR = "channel call action bar", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", n.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", n.VOICE_CONTROL_TRAY = "voice control tray", n.ACTIVE_NOW_COLUMN = "active now column", n.CONTEXT_MENU = "context menu", n.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", n.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", n.CHANNEL_CATEGORY_MENU = "channel category menu", n.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", n.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", n.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", n.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", n.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", n.CHANNEL_TITLE_MENU = "channel title menu", n.GROUP_DM_MENU = "group dm menu", n.AUDIT_LOG_USER_MENU = "audit log user menu", n.BANNED_USER_MENU = "banned user menu", n.DM_USER_MENU = "dm user menu", n.GROUP_DM_USER_MENU = "group dm user menu", n.GUILD_CHANNEL_USER_MENU = "guild channel user menu", n.GUILD_MODERATION_USER_MENU = "guild moderation user menu", n.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", n.GUILD_SETTINGS_USER_MENU = "guild settings user menu", n.GUILD_USER_MENU = "guild user menu", n.THREAD_USER_MENU = "thread user menu", n.USER_GENERIC_MENU = "user generic menu", n.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", n.VOICE_ACTION_SHEET = "voice action sheet", n.FOCUSED_VOICE_CONTROLS = "focused voice controls", n.MASKED_LINK = "masked link", n.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", n.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", n.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", n.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", n.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", n.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", n.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", n.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", n.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", n.ACCOUNT_PROFILE_POPOUT = "account profile popout", n.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", n.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", n.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", n.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", n.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", n.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", n.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", n.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", n.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", n.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", n.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", n.STAGE_VIDEO_LIMIT = "stage video limit", n.ACTIVITIES_MINI_SHELF = "activities mini shelf", n.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", n.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", n.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", n.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", n.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", n.APP_ICON_EDITOR = "app icon editor", n.CLIENT_THEMES_EDITOR = "client themes editor", n.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", n.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", n.SHARE_NITRO_EMBED = "share nitro embed", n.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", n.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", n.REFERRAL_TRIALS_POPOUT = "referral trials popout", n.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", n.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", n.ACTIVITY_BOOKMARK = "activity bookmark", n.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", n.ACTIVITY_DETAIL_PAGE = "activity detail page", n.ACTIVITIES_PAGE = "activities page", n.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", n.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", n.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", n.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", n.ACTIVITIES_HAPPENING_NOW = "activities happening now", n.MEDIA_VIEWER = "media viewer", n.MESSAGE_LONG_PRESS_MENU = "message long press menu", n.COLLECTIBLES_SHOP = "collectibles shop", n.COLLECTIBLES_SHOP_CARD = "collectibles shop card", n.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", n.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", n.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", n.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", n.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", n.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", n.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", n.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", n.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", n.PREMIUM_BILLING_INFO = "premium billing info", n.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", n.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", n.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", n.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", n.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", n.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", n.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", n.PREMIUM_PLAN_SELECT = "premium_plan_select", n.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", n.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", n.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", n.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", n.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", n.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", n.MEMBER_SAFETY_PAGE = "member safety page", n.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", n.GUILD_MEMBER_MOD_VIEW = "guild member mod view", n.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", n.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", n.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", n.GUILD_SHOP_PAGE = "guild shop page", n.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", n.MESSAGE_REMIX_TAG = "message remix tag", n.MESSAGE_REMIX_BUTTON = "message remix button", n.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", n.CLIPS_SETTINGS = "clips settings", n.CLIPS_GALLERY = "clips gallery", n.CLIPS_GALLERY_ITEM = "clips gallery item", n.CLIPS_EDITOR = "clips editor", n.CLIPS_SHARE_MODAL = "clips share modal", n.CHANNEL_ATTACH_BUTTON = "channel attach button", n.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", n.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", n.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", n.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", n.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", n.GUILD_EVENT_CARD = "guild event card", n.EVENT_SETTINGS = "event settings";
            var n, l, a = l
        },
        130037: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useTrackMemberSearchUsed: function() {
                    return d
                },
                useTrackMemberFilterRolesUsed: function() {
                    return T
                },
                MemberSafetyFlagType: function() {
                    return a
                },
                useTrackMemberFilterSafetyFlagsUsed: function() {
                    return A
                },
                ModerationActionType: function() {
                    return r
                },
                useTrackModerationAction: function() {
                    return O
                }
            });
            var n, l, a, r, o = i("773670"),
                _ = i("812204"),
                E = i("716241"),
                s = i("271938"),
                u = i("599110"),
                c = i("49111");

            function I(e, t, i) {
                var n;
                let l = {
                    ...t,
                    ...(0, E.collectGuildAnalyticsMetadata)(null !== (n = t.guild_id) && void 0 !== n ? n : i)
                };
                u.default.track(e, l)
            }

            function d(e) {
                let t = o.useCallback(t => {
                    ! function(e) {
                        let t = {
                            guild_id: e,
                            location: _.default.MEMBER_SAFETY_PAGE
                        };
                        I(c.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, t)
                    }(e)
                }, [e]);
                return t
            }

            function T(e) {
                let t = o.useCallback(t => {
                    ! function(e, t) {
                        let i = {
                            selected_role_count: t.size,
                            guild_id: e,
                            location: _.default.MEMBER_SAFETY_PAGE
                        };
                        I(c.AnalyticEvents.MOD_DASH_FILTER_ROLES, i)
                    }(e, t)
                }, [e]);
                return t
            }(n = a || (a = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", n.COMMUNICATION_DISABLED = "communication_disabled";

            function A(e) {
                let t = o.useCallback(t => {
                    ! function(e, t) {
                        let i = {
                            flag_type: t,
                            guild_id: e,
                            location: _.default.MEMBER_SAFETY_PAGE
                        };
                        I(c.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, i)
                    }(e, t)
                }, [e]);
                return t
            }

            function O(e, t) {
                let {
                    location: i,
                    targetUserId: n,
                    targets: l
                } = t, a = o.useCallback(t => {
                    let a = {
                        action_type: t,
                        mod_user_id: s.default.getId(),
                        guild_id: e,
                        location: i,
                        target_user_id: null != n ? n : void 0,
                        targets: null != l ? l : void 0
                    };
                    I(c.AnalyticEvents.MODERATION_ACTION, a)
                }, [e, i, n, l]);
                return a
            }(l = r || (r = {})).BAN = "ban", l.KICK = "kick", l.MUTE = "mute", l.TIMEOUT = "timeout", l.ADD_ROLE = "add_role", l.REMOVE_ROLE = "remove_role", l.COPY_ID = "copy_id", l.CHANGE_NICKNAME = "change_nickname"
        },
        479756: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                startImpersonating: function() {
                    return N
                },
                updateImpersonating: function() {
                    return L
                },
                stopImpersonating: function() {
                    return R
                },
                updateImpersonatedChannels: function() {
                    return m
                },
                updateImpersonatedRoles: function() {
                    return C
                },
                updateImpersonatedData: function() {
                    return M
                }
            });
            var n = i("913144"),
                l = i("716241"),
                a = i("393414"),
                r = i("42203"),
                o = i("923959"),
                _ = i("26989"),
                E = i("305961"),
                s = i("957255"),
                u = i("18494"),
                c = i("282109"),
                I = i("599110"),
                d = i("38654"),
                T = i("507950"),
                A = i("49111"),
                O = i("724210");

            function N(e, t) {
                I.default.track(A.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, l.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === T.ImpersonateType.NEW_MEMBER
                }), n.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), p(e)
            }

            function L(e, t) {
                let i = d.default.getData(e);
                null != i && i.type === t.type && (I.default.track(A.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(i.roles).length,
                    ...(0, l.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: i.type === T.ImpersonateType.NEW_MEMBER
                }), n.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...i,
                        ...t
                    }
                }), p(e))
            }

            function R(e) {
                n.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function p(e) {
                let t = u.default.getChannelId(e),
                    i = r.default.getChannel(t),
                    n = null != t && (0, O.isStaticChannelRoute)(t);
                if (!n && !s.default.can(A.Permissions.VIEW_CHANNEL, i)) {
                    let t = o.default.getDefaultChannel(e);
                    null != t && (0, a.transitionTo)(A.Routes.CHANNEL(e, t.id))
                }
            }

            function m(e, t, i) {
                let n = new Set(c.default.getOptedInChannels(e));
                t.forEach(e => n.add(e)), i.forEach(e => n.delete(e)), L(e, {
                    type: T.ImpersonateType.NEW_MEMBER,
                    optInChannels: n
                })
            }

            function C(e, t) {
                let i = E.default.getGuild(e);
                if (null == i) return;
                ! function(e, t) {
                    let i = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                        n = Array.from(t);
                    o.default.addConditionalChangeListener(() => {
                        let t = _.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (n.some(e => !t.roles.includes(e))) return !0;
                        let l = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                            a = l.filter(e => !i.includes(e));
                        return a.length > 0 && m(e, a, []), !1
                    })
                }(e, t);
                let n = {};
                t.forEach(e => n[e] = i.roles[e]), L(e, {
                    type: T.ImpersonateType.NEW_MEMBER,
                    roles: n
                })
            }

            function M(e, t) {
                L(e, {
                    type: T.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        522651: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return I
                }
            });
            var n = i("920040");
            i("773670");
            var l = i("77078"),
                a = i("272030"),
                r = i("838446"),
                o = i("158534"),
                _ = i("812204"),
                E = i("685665"),
                s = i("97508"),
                u = i("49111"),
                c = i("782340"),
                I = (0, o.default)((0, r.default)(function(e) {
                    var t;
                    let {
                        user: i,
                        guildId: r,
                        onSelect: o,
                        analyticsLocations: u,
                        onCloseContextMenu: I
                    } = e, {
                        analyticsLocations: d
                    } = (0, E.default)(_.default.CONTEXT_MENU), T = null !== (t = null == u ? void 0 : u[0]) && void 0 !== t ? t : d[0], A = (0, s.default)(i.id, r, !0, T);
                    return (0, n.jsx)(l.Menu, {
                        navId: "guild-moderation-roles",
                        onClose: () => {
                            (0, a.closeContextMenu)(), null == I || I()
                        },
                        "aria-label": c.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: o,
                        children: (0, n.jsx)(l.MenuGroup, {
                            children: A
                        })
                    })
                }, {
                    object: u.AnalyticsObjects.CONTEXT_MENU
                }), [_.default.CONTEXT_MENU, _.default.GUILD_MODERATION_USER_MENU])
        },
        97508: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return N
                }
            });
            var n = i("920040");
            i("773670");
            var l = i("253824"),
                a = i("498225"),
                r = i("77078"),
                o = i("206230"),
                _ = i("130037"),
                E = i("592407"),
                s = i("26989"),
                u = i("305961"),
                c = i("957255"),
                I = i("449008"),
                d = i("49111"),
                T = i("782340"),
                A = i("181806");

            function O(e, t) {
                var i, a;
                return (0, n.jsxs)("div", {
                    className: A.roleRow,
                    children: ["dot" === t ? (0, n.jsx)(r.RoleDot, {
                        className: A.roleDot,
                        color: null !== (i = e.colorString) && void 0 !== i ? i : (0, l.int2hex)(d.DEFAULT_ROLE_COLOR),
                        background: !1,
                        tooltip: !1
                    }) : (0, n.jsx)(r.RoleCircle, {
                        className: A.roleDot,
                        color: null !== (a = e.colorString) && void 0 !== a ? a : (0, l.int2hex)(d.DEFAULT_ROLE_COLOR)
                    }), (0, n.jsx)("div", {
                        children: e.name
                    })]
                })
            }

            function N(e, t) {
                let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    A = (0, a.useStateFromStores)([u.default], () => u.default.getGuild(t), [t]),
                    N = (0, a.useStateFromStores)([o.default], () => o.default.roleStyle),
                    L = (0, _.useTrackModerationAction)(t, {
                        location: l,
                        targetUserId: e
                    }),
                    {
                        userRoles: R,
                        isGuildMember: p,
                        canManageRoles: m
                    } = (0, a.useStateFromStoresObject)([s.default, c.default], () => {
                        let i = s.default.getMember(t, e);
                        return {
                            userRoles: null != i ? i.roles : [],
                            isGuildMember: null != i,
                            canManageRoles: null != A && c.default.can(d.Permissions.MANAGE_ROLES, A)
                        }
                    }, [e, t, A]);
                if (__OVERLAY__ || null == R || null == A || !p) return null;
                let C = c.default.getHighestRole(A),
                    M = Object.values(A.roles).filter(e => e.id !== A.id),
                    S = m ? M.map(i => {
                        let l = i.managed || !c.default.isRoleHigher(A, C, i),
                            a = -1 !== R.indexOf(i.id);
                        return l && !a ? null : (0, n.jsx)(r.MenuCheckboxItem, {
                            id: i.id,
                            label: () => O(i, N),
                            disabled: l,
                            action: () => {
                                var n;
                                return n = i, void(R.includes(n.id) ? (E.default.updateMemberRoles(t, e, R.filter(e => e !== n.id), [], [n.id]), L(_.ModerationActionType.REMOVE_ROLE)) : (E.default.updateMemberRoles(t, e, R.concat([n.id]), [n.id], []), L(_.ModerationActionType.ADD_ROLE)))
                            },
                            checked: a
                        }, i.id)
                    }) : M.filter(e => -1 !== R.indexOf(e.id)).map(e => e.id === A.id ? null : (0, n.jsx)(r.MenuItem, {
                        id: e.id,
                        label: () => O(e, N)
                    }, e.id));
                return 0 === S.filter(I.isNotNullish).length ? null : i ? S : (0, n.jsx)(r.MenuItem, {
                    id: "roles",
                    label: T.default.Messages.ROLES_LIST.format({
                        numRoles: S.length
                    }),
                    children: S
                })
            }
        },
        517763: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return r
                }
            });
            var n = i("377849"),
                l = i.n(n),
                a = i("666038");
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
        615931: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                resolveThunk: function() {
                    return a
                }
            });
            var n = i("427964"),
                l = i.n(n);
            let a = e => "function" == typeof e ? e() : e;
            l.curry((e, t, i) => a(t) ? e(i) : i({}))
        },
        730622: function(e, t, i) {
            "use strict";
            let n, l;
            i.r(t), i.d(t, {
                default: function() {
                    return s
                }
            });
            var a = i("697218"),
                r = i("615931");
            let o = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = i("670924");
                n = e.showModal, o = e.updateModalProps, l = i("551042").closeModal
            }

            function _(e) {
                let {
                    promiseFn: t,
                    resolve: i,
                    reject: a,
                    modalProps: r = {},
                    hooks: {
                        onEarlyClose: _
                    } = {}
                } = e;
                if (null == n) {
                    null == _ || _();
                    return
                }
                let s = n(d, u, r);

                function u() {
                    null == _ || _()
                }

                function c(e) {
                    l(s), i(e)
                }

                function I(e) {
                    l(s), a(e)
                }

                function d(e) {
                    return o(s, d, u, {
                        ...r,
                        isLoading: !0
                    }), E({
                        promiseFn: t,
                        resolve: c,
                        reject: I,
                        code: e,
                        mfaCodeHandler: T,
                        isModalOpen: !0
                    })
                }

                function T(e) {
                    let {
                        res: t
                    } = e;
                    o(s, d, u, {
                        ...r,
                        error: t.body.message
                    })
                }
            }

            function E(e) {
                let {
                    promiseFn: t,
                    resolve: i,
                    reject: n,
                    code: l,
                    mfaCodeHandler: a = _,
                    isModalOpen: r = !1,
                    ...o
                } = e;
                return t(null != l ? {
                    code: l
                } : {}).then(i, e => {
                    var l, _;
                    if (l = e, _ = r, l.body && 60008 === l.body.code || _ && 429 === l.status) return a({
                        promiseFn: t,
                        resolve: i,
                        reject: n,
                        res: e,
                        ...o
                    });
                    n(e)
                })
            }

            function s(e, t) {
                var i, n;
                let {
                    checkEnabled: l = null !== (n = null === (i = a.default.getCurrentUser()) || void 0 === i ? void 0 : i.mfaEnabled) && void 0 !== n && n,
                    ...o
                } = null != t ? t : {};
                return new Promise((t, i) => {
                    ((0, r.resolveThunk)(l) ? _ : E)({
                        promiseFn: e,
                        resolve: t,
                        reject: i,
                        ...o
                    })
                })
            }
        },
        670924: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                showModal: function() {
                    return o
                },
                updateModalProps: function() {
                    return _
                }
            });
            var n = i("920040");
            i("773670");
            var l = i("551042"),
                a = i("920636");
            let r = (e, t, i) => function(l) {
                return (0, n.jsx)(a.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...i,
                    ...l
                })
            };

            function o(e, t, i) {
                return (0, l.openModal)(r(e, t, i), {
                    onCloseCallback: t
                })
            }

            function _(e, t, i, n) {
                return (0, l.updateModal)(e, r(t, i, n))
            }
        }
    }
]);
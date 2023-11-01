(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["10821"], {
        56585: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ffd15f0afc010d71a931.svg"
        },
        149361: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6d4cb1bdf1775bb8cacd.png"
        },
        685073: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                loadInviteSuggestions: function() {
                    return r
                },
                searchInviteSuggestions: function() {
                    return a
                }
            });
            var i = n("913144"),
                l = n("777273");

            function r(e) {
                let {
                    omitUserIds: t,
                    guild: n,
                    channel: r,
                    applicationId: a,
                    inviteTargetType: s
                } = e;
                return (0, l.fetchUserAffinities)().then(() => {
                    i.default.dispatch({
                        type: "LOAD_INVITE_SUGGESTIONS",
                        omitUserIds: null != t ? t : new Set,
                        guild: n,
                        channel: r,
                        applicationId: a,
                        inviteTargetType: s
                    })
                })
            }

            function a(e) {
                i.default.dispatch({
                    type: "INVITE_SUGGESTIONS_SEARCH",
                    query: e
                })
            }
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
        775433: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchSubscriptionPlansForSKU: function() {
                    return E
                },
                fetchSubscriptionPlansBySKUs: function() {
                    return _
                },
                fetchPremiumSubscriptionPlans: function() {
                    return c
                },
                resetSubscriptionPlanData: function() {
                    return I
                }
            });
            var i = n("872717"),
                l = n("913144"),
                r = n("333805"),
                a = n("160299"),
                s = n("745279"),
                o = n("850068"),
                u = n("49111"),
                d = n("646718");
            async function E(e, t, n, d, E) {
                l.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH",
                    skuId: e
                });
                try {
                    let r = {
                            url: u.Endpoints.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                            oldFormErrors: !0
                        },
                        s = {};
                    null != t && (s.country_code = t), null != n && (s.payment_source_id = n), null != d && (s.include_unpublished = d), null != E && (s.revenue_surface = E), r.query = s, !a.default.ipCountryCodeLoaded && await (0, o.fetchIpCountryCode)();
                    let _ = await i.default.get(r);
                    l.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                        skuId: e,
                        subscriptionPlans: _.body
                    })
                } catch (t) {
                    throw l.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                        skuId: e
                    }), (0, s.captureBillingException)(t), new r.default(t)
                }
            }

            function _(e, t) {
                return Promise.all(e.filter(e => e !== d.PremiumSubscriptionSKUs.NONE).map(e => E(e, t)))
            }

            function c(e, t, n) {
                return Promise.all(d.ACTIVE_PREMIUM_SKUS.filter(e => e !== d.PremiumSubscriptionSKUs.NONE).map(i => E(i, e, t, void 0, n)))
            }

            function I() {
                l.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        777273: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchUserAffinities: function() {
                    return s
                }
            });
            var i = n("872717"),
                l = n("913144"),
                r = n("843823"),
                a = n("49111");

            function s() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return r.default.needsRefresh() ? (l.default.dispatch({
                    type: "LOAD_USER_AFFINITIES"
                }), i.default.get({
                    url: a.Endpoints.USER_AFFINITIES,
                    retries: e ? 3 : 0,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: t
                    } = e;
                    l.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_SUCCESS",
                        affinities: t
                    })
                }, () => {
                    l.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_FAILURE"
                    })
                })) : Promise.resolve()
            }
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                a = n.n(r),
                s = n("77078"),
                o = n("782340"),
                u = n("347129");
            class d extends l.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: r,
                        error: d,
                        isLoading: E,
                        maxLength: _,
                        transitionState: c,
                        helpMessage: I,
                        retryPrompt: T,
                        retrySuccessMessage: S
                    } = this.props, {
                        code: f,
                        errorMessage: N,
                        retrySuccess: O
                    } = this.state, A = l.Children.count(r) > 0 ? (0, i.jsx)(s.Card, {
                        type: s.Card.Types.WARNING,
                        className: u.card,
                        children: (0, i.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: r
                        })
                    }) : null, p = null != T ? (0, i.jsxs)(s.Text, {
                        className: a(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, i.jsx)("br", {}), (0, i.jsx)(s.Clickable, {
                            className: a(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, i.jsx)(s.Anchor, {
                                children: T
                            })
                        })]
                    }) : null, g = O ? (0, i.jsx)(s.Card, {
                        type: s.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, i.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: S
                        })
                    }) : null;
                    return (0, i.jsx)(s.ModalRoot, {
                        transitionState: c,
                        children: (0, i.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, i.jsx)(s.ModalHeader, {
                                separator: !1,
                                children: (0, i.jsx)(s.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, i.jsxs)(s.ModalContent, {
                                children: [null != I ? (0, i.jsx)(s.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u.spacing,
                                    children: I
                                }) : null, A, g, (0, i.jsxs)(s.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, i.jsx)(s.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != _ ? _ : 10,
                                        value: f,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, i.jsx)(s.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != d ? d : N
                                    }) : null, p]
                                })]
                            }), (0, i.jsxs)(s.ModalFooter, {
                                children: [(0, i.jsx)(s.Button, {
                                    type: "submit",
                                    disabled: E || 0 === f.length,
                                    children: null != n ? n : o.default.Messages.CONFIRM
                                }), (0, i.jsx)(s.Button, {
                                    onClick: this.handleCancel,
                                    disabled: E,
                                    look: s.Button.Looks.LINK,
                                    color: s.Button.Colors.PRIMARY,
                                    children: o.default.Messages.CANCEL
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
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? o.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : o.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? o.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : o.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
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
            d.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var E = d
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
        789394: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChannelEmojisExperiment: function() {
                    return l
                }
            });
            var i = n("862205");
            let l = (0, i.createExperiment)({
                kind: "user",
                id: "2023-03_channel_name_emojis",
                label: "Channel Emojis",
                defaultConfig: {
                    enabled: !1,
                    left: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable channel name emojis",
                    config: {
                        enabled: !0,
                        left: !1
                    }
                }, {
                    id: 2,
                    label: "Emojis to left of channel icon",
                    config: {
                        enabled: !0,
                        left: !0
                    }
                }]
            })
        },
        148387: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                InvitePropertiesType: function() {
                    return l
                },
                default: function() {
                    return E
                }
            });
            var i, l, r = n("450911"),
                a = n("819689"),
                s = n("605250"),
                o = n("42203"),
                u = n("231987");
            (i = l || (l = {}))[i.GROUP_DM = 0] = "GROUP_DM", i[i.USER = 1] = "USER", i[i.CHANNEL = 2] = "CHANNEL";
            class d extends u.default {
                _sendInvite(e, t, n, i, l) {
                    a.default.sendInvite(e.id, t, n, i).then(() => l(null, !0), () => l(null, !1))
                }
                drain(e, t) {
                    let {
                        location: n,
                        suggested: i
                    } = e;
                    switch (e.type) {
                        case l.GROUP_DM:
                        case l.CHANNEL:
                            this._sendInvite(e.channel, e.inviteKey, n, i, t);
                            break;
                        case l.USER:
                            r.default.ensurePrivateChannel(e.user.id).then(l => {
                                let r = o.default.getChannel(l);
                                null != r && this._sendInvite(r, e.inviteKey, n, i, t)
                            }, () => t(null, !1))
                    }
                }
                constructor() {
                    super(new s.default("InviteQueue"), 1010)
                }
            }
            var E = new d
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("773336");
            async function l(e, t) {
                let {
                    default: l
                } = await n.el("572544").then(n.bind(n, "572544")), r = l(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != r) r(null);
                else if (i.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
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
        212084: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("605250"),
                l = n("802493");
            let r = new i.default("GuildStickers");
            var a = new class e {
                getSync(e) {
                    let t = performance.now(),
                        n = l.default.stickers(e).getMapEntriesSyncUnsafe(),
                        i = performance.now();
                    return r.log("synchronously loaded in ".concat(i - t, "ms (guilds: ").concat(n.length, ")")), n
                }
                handleConnectionOpen(e, t) {
                    for (let n of e.guilds) this.handleOneGuildCreate(n, t)
                }
                handleGuildCreate(e, t) {
                    this.handleOneGuildCreate(e.guild, t)
                }
                handleGuildUpdate(e, t) {
                    this.replace(e.guild.id, e.guild.stickers, t)
                }
                handleGuildDelete(e, t) {
                    this.delete(e.guild.id, t)
                }
                handleGuildStickersUpdate(e, t) {
                    this.replace(e.guildId, e.stickers, t)
                }
                handleBackgroundSync(e, t) {
                    e.promisesForBackgroundSyncToWaitOn.push(Promise.all(e.stickers.map(e => {
                        if ("unavailable" === e.dataMode) return Promise.resolve();
                        "full" === e.dataMode ? (r.verbose("Replacing ".concat(e.entities.length, " stickers for ").concat(e.guildId)), this.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (r.verbose("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " stickers for ").concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t))
                    })))
                }
                handleOneGuildCreate(e, t) {
                    null != e.stickers && this.replace(e.id, e.stickers, t), null != e.stickerUpdates && this.update(e.id, e.stickerUpdates.writes, e.stickerUpdates.deletes, t)
                }
                handleClearGuildCache(e) {
                    this.clear(e)
                }
                handleReset() {}
                replace(e, t, n) {
                    l.default.stickersTransaction(n).replaceAll(e, t)
                }
                delete(e, t) {
                    l.default.stickersTransaction(t).delete(e)
                }
                clear(e) {
                    l.default.stickersTransaction(e).delete()
                }
                update(e, t, n, i) {
                    let r = l.default.stickersTransaction(i);
                    for (let i of (r.putAll(e, t), n)) r.delete(e, i)
                }
                constructor() {
                    this.actions = {
                        BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
                        CLEAR_GUILD_CACHE: (e, t) => this.handleClearGuildCache(t),
                        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                        GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
                        GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                        GUILD_STICKERS_UPDATE: (e, t) => this.handleGuildStickersUpdate(e, t),
                        GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
                    }
                }
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var i, l, r, a;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return i
                },
                BotTagTypes: function() {
                    return l
                }
            }), (r = i || (i = {}))[r.GAME = 1] = "GAME", r[r.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", r[r.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (a = l || (l = {}))[a.BOT = 0] = "BOT", a[a.SERVER = 1] = "SERVER", a[a.SYSTEM_DM = 2] = "SYSTEM_DM", a[a.OFFICIAL = 3] = "OFFICIAL", a[a.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", a[a.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", a[a.AI = 6] = "AI", a[a.REMIX = 7] = "REMIX"
        },
        442939: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("884691"),
                l = n("446674"),
                r = n("233736"),
                a = n("823411"),
                s = n("546463");

            function o(e, t) {
                return e.length === t.length && !e.some((e, n) => !(0, r.default)(t[n], e))
            }

            function u(e) {
                i.useEffect(() => {
                    a.default.fetchApplications(e, !1)
                }, [e]);
                let t = (0, l.useStateFromStores)([s.default], () => e.map(e => ({
                        id: e,
                        application: s.default.getGame(e),
                        fetching: s.default.isFetching(e),
                        failed: s.default.didFetchingFail(e)
                    })), [e], o),
                    n = i.useMemo(() => t.map(e => {
                        let {
                            application: t
                        } = e;
                        return t
                    }), [t]);
                return n
            }
        },
        843962: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getChannelIconURL: function() {
                    return s
                }
            });
            var i = n("697218"),
                l = n("315102"),
                r = n("449008"),
                a = n("49111");

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case a.ChannelTypes.DM:
                        let [s] = e.recipients.map(i.default.getUser).filter(r.isNotNullish);
                        if (null == s) return null;
                        return s.getAvatarURL(void 0, t, n);
                    case a.ChannelTypes.GROUP_DM:
                        return l.default.getChannelIconURL({
                            id: e.id,
                            icon: e.icon,
                            applicationId: e.getApplicationId(),
                            size: t
                        })
                }
            }
        },
        659404: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CommunityEndlessInvitesExperiment: function() {
                    return l
                }
            });
            var i = n("862205");
            let l = (0, i.createExperiment)({
                kind: "guild",
                id: "2023-04_community_endless_invites",
                label: "Community Endless Invites",
                defaultConfig: {
                    defaultInvitesToNeverExpire: !1
                },
                treatments: [{
                    id: 1,
                    label: "Causes invites to never expire (by default) in the Guild",
                    config: {
                        defaultInvitesToNeverExpire: !0
                    }
                }]
            })
        },
        262362: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("65597"),
                l = n("305961"),
                r = n("354023"),
                a = n("659404"),
                s = n("49111");

            function o(e) {
                let {
                    guildId: t
                } = e, n = a.CommunityEndlessInvitesExperiment.useExperiment({
                    guildId: null != t ? t : "",
                    location: "6798be_2"
                }), o = (0, i.default)([l.default], () => l.default.getGuild(t));
                return null != t && function(e) {
                    var t;
                    let {
                        guild: n,
                        experimentConfig: i
                    } = e, {
                        defaultInvitesToNeverExpire: l
                    } = null != i ? i : a.CommunityEndlessInvitesExperiment.getCurrentConfig({
                        guildId: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : "",
                        location: "6798be_1"
                    });
                    if ((null == n ? void 0 : n.hasFeature(s.GuildFeatures.HUB)) === !0 || (null == n ? void 0 : n.hasFeature(s.GuildFeatures.COMMUNITY)) === !0 && l) return r.default.INVITE_OPTIONS_FOREVER.value
                }({
                    guild: o,
                    experimentConfig: n
                })
            }
        },
        115279: function(e, t, n) {
            "use strict";
            var i, l, r, a, s, o, u, d, E, _, c;
            n.r(t), n.d(t, {
                EmojiCategoryTypes: function() {
                    return i
                },
                GRID_NAVIGATOR_ID: function() {
                    return I
                },
                EmojiCategories: function() {
                    return l
                },
                EmojiSubCategory: function() {
                    return r
                },
                INACTIVE_CATEGORY_INDEX: function() {
                    return T
                },
                EmojiSize: function() {
                    return s
                },
                EMOJI_PICKER_TAB_PANEL_ID: function() {
                    return S
                },
                EMOJI_PICKER_TAB_ID: function() {
                    return f
                },
                SOUNDBOARD_PICKER_TAB_PANEL_ID: function() {
                    return N
                },
                SOUNDBOARD_PICKER_TAB_ID: function() {
                    return O
                },
                REACTION_PICKER_TAB_PANEL_ID: function() {
                    return A
                },
                REACTION_PICKER_TAB_ID: function() {
                    return p
                },
                SUPER_REACTION_PICKER_TAB_ID: function() {
                    return g
                },
                SuperReactionBalanceLocations: function() {
                    return o
                },
                GIF_PICKER_TAB_PANEL_ID: function() {
                    return m
                },
                GIF_PICKER_TAB_ID: function() {
                    return h
                },
                EMOJI_SIZE_MAP: function() {
                    return C
                },
                EMOJI_ROW_SIZE: function() {
                    return L
                }
            }), (u = i || (i = {})).GUILD = "GUILD", u.PACK = "PACK", u.UNICODE = "UNICODE", u.RECENT = "RECENT", u.CUSTOM = "CUSTOM", u.SEARCH_RESULTS = "SEARCH_RESULTS", u.FAVORITES = "FAVORITES", u.TOP_GUILD_EMOJI = "TOP_GUILD_EMOJI", u.PREMIUM_UPSELL = "PREMIUM_UPSELL";
            let I = "emoji-picker-grid";
            (d = l || (l = {})).RECENT = "recent", d.FAVORITES = "favorites", d.TOP_GUILD_EMOJI = "top guild emoji", d.CUSTOM = "custom", d.PEOPLE = "people", d.NATURE = "nature", d.FOOD = "food", d.ACTIVITY = "activity", d.TRAVEL = "travel", d.OBJECTS = "objects", d.SYMBOLS = "symbols", d.FLAGS = "flags", d.PREMIUM_UPSELL = "premium emoji", (E = r || (r = {})).NONE = "", E.TOP_GUILD_EMOJI = "top_server", E.NEWLY_ADDED_EMOJI = "newly_added", (_ = a || (a = {}))[_.EMOJI = 0] = "EMOJI", _[_.NSFW = 1] = "NSFW";
            let T = -1;
            (c = s || (s = {}))[c.MEDIUM = 40] = "MEDIUM", c[c.LARGE = 48] = "LARGE";
            let S = "emoji-picker-tab-panel",
                f = "emoji-picker-tab",
                N = "soundboard-picker-tab-panel",
                O = "soundboard-picker-tab",
                A = "reaction-picker-tab-panel",
                p = "reaction-picker-tab",
                g = "super-reaction-picker-tab";
            (o || (o = {})).TOOLTIP = "tooltip";
            let m = "gif-picker-tab-panel",
                h = "gif-picker-tab",
                C = {
                    reaction: 32,
                    default: 44,
                    jumbo: 96
                },
                L = 9
        },
        686298: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ApplicationStreamResolutions: function() {
                    return a
                },
                getApplicationResolution: function() {
                    return _
                },
                ApplicationStreamFPS: function() {
                    return s
                },
                ApplicationStreamPresets: function() {
                    return o
                },
                getApplicationFramerate: function() {
                    return c
                },
                ApplicationStreamPresetValues: function() {
                    return I
                },
                ApplicationStreamSettingRequirements: function() {
                    return T
                },
                ApplicationStreamResolutionButtons: function() {
                    return f
                },
                GoLiveDeviceResolutionButtons: function() {
                    return N
                },
                ApplicationStreamResolutionButtonsWithSuffixLabel: function() {
                    return A
                },
                ApplicationStreamFPSButtons: function() {
                    return p
                },
                ApplicationStreamFPSButtonsWithSuffixLabel: function() {
                    return g
                }
            });
            var i, l, r, a, s, o, u = n("49111"),
                d = n("646718"),
                E = n("782340");

            function _(e) {
                switch (e) {
                    case a.RESOLUTION_480:
                        return a.RESOLUTION_480;
                    case a.RESOLUTION_720:
                        return a.RESOLUTION_720;
                    case a.RESOLUTION_1080:
                        return a.RESOLUTION_1080;
                    case a.RESOLUTION_SOURCE:
                        return a.RESOLUTION_SOURCE;
                    default:
                        throw Error("Unknown resolution: ".concat(e))
                }
            }

            function c(e) {
                switch (e) {
                    case s.FPS_5:
                        return s.FPS_5;
                    case s.FPS_15:
                        return s.FPS_15;
                    case s.FPS_30:
                        return s.FPS_30;
                    case s.FPS_60:
                        return s.FPS_60;
                    default:
                        throw Error("Unknown frame rate: ".concat(e))
                }
            }(i = a || (a = {}))[i.RESOLUTION_480 = 480] = "RESOLUTION_480", i[i.RESOLUTION_720 = 720] = "RESOLUTION_720", i[i.RESOLUTION_1080 = 1080] = "RESOLUTION_1080", i[i.RESOLUTION_1440 = 1440] = "RESOLUTION_1440", i[i.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE", (l = s || (s = {}))[l.FPS_5 = 5] = "FPS_5", l[l.FPS_15 = 15] = "FPS_15", l[l.FPS_30 = 30] = "FPS_30", l[l.FPS_60 = 60] = "FPS_60", (r = o || (o = {}))[r.PRESET_VIDEO = 1] = "PRESET_VIDEO", r[r.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS", r[r.PRESET_CUSTOM = 3] = "PRESET_CUSTOM";
            let I = {
                    [o.PRESET_DOCUMENTS]: [{
                        resolution: a.RESOLUTION_SOURCE,
                        fps: s.FPS_15
                    }, {
                        resolution: a.RESOLUTION_SOURCE,
                        fps: s.FPS_5
                    }],
                    [o.PRESET_VIDEO]: [{
                        resolution: a.RESOLUTION_1440,
                        fps: s.FPS_60
                    }, {
                        resolution: a.RESOLUTION_1080,
                        fps: s.FPS_60
                    }, {
                        resolution: a.RESOLUTION_720,
                        fps: s.FPS_60
                    }, {
                        resolution: a.RESOLUTION_720,
                        fps: s.FPS_30
                    }],
                    [o.PRESET_CUSTOM]: []
                },
                T = [{
                    resolution: a.RESOLUTION_SOURCE,
                    fps: s.FPS_60,
                    quality: d.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_SOURCE,
                    fps: s.FPS_30,
                    quality: d.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_SOURCE,
                    fps: s.FPS_15,
                    quality: d.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_SOURCE,
                    fps: s.FPS_5,
                    preset: o.PRESET_DOCUMENTS
                }, {
                    resolution: a.RESOLUTION_1440,
                    fps: s.FPS_60,
                    guildPremiumTier: u.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_1440,
                    fps: s.FPS_30,
                    guildPremiumTier: u.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_1440,
                    fps: s.FPS_15,
                    guildPremiumTier: u.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_1080,
                    fps: s.FPS_60,
                    guildPremiumTier: u.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_1080,
                    fps: s.FPS_30,
                    guildPremiumTier: u.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_1080,
                    fps: s.FPS_15,
                    guildPremiumTier: u.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_720,
                    fps: s.FPS_60,
                    guildPremiumTier: u.BoostedGuildTiers.TIER_1,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_720,
                    fps: s.FPS_30
                }, {
                    resolution: a.RESOLUTION_720,
                    fps: s.FPS_15
                }, {
                    resolution: a.RESOLUTION_720,
                    fps: s.FPS_5
                }, {
                    resolution: a.RESOLUTION_480,
                    fps: s.FPS_60,
                    guildPremiumTier: u.BoostedGuildTiers.TIER_1,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_480,
                    fps: s.FPS_30
                }, {
                    resolution: a.RESOLUTION_480,
                    fps: s.FPS_15
                }, {
                    resolution: a.RESOLUTION_480,
                    fps: s.FPS_5
                }];

            function S(e, t) {
                return {
                    value: e,
                    get label() {
                        return null != t ? t() : e
                    }
                }
            }
            let f = [S(a.RESOLUTION_720), S(a.RESOLUTION_1080), S(a.RESOLUTION_1440), S(a.RESOLUTION_SOURCE, () => E.default.Messages.SCREENSHARE_SOURCE)],
                N = [S(a.RESOLUTION_720), S(a.RESOLUTION_1080), S(a.RESOLUTION_1440)],
                O = e => "".concat(e, "p"),
                A = [S(a.RESOLUTION_480, () => O(a.RESOLUTION_480)), S(a.RESOLUTION_720, () => O(a.RESOLUTION_720)), S(a.RESOLUTION_1080, () => O(a.RESOLUTION_1080)), S(a.RESOLUTION_1440, () => O(a.RESOLUTION_1440)), S(a.RESOLUTION_SOURCE, () => E.default.Messages.SCREENSHARE_SOURCE)],
                p = [S(s.FPS_15), S(s.FPS_30), S(s.FPS_60)],
                g = [S(s.FPS_15, () => E.default.Messages.STREAM_FPS_OPTION.format({
                    value: s.FPS_15
                })), S(s.FPS_30, () => E.default.Messages.STREAM_FPS_OPTION.format({
                    value: s.FPS_30
                })), S(s.FPS_60, () => E.default.Messages.STREAM_FPS_OPTION.format({
                    value: s.FPS_60
                }))]
        },
        385042: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("884691"),
                l = n("69927"),
                r = n("773336"),
                a = n("782340");

            function s() {
                return i.useEffect(() => {
                    !r.isPlatformEmbedded && (0, l.flashPageTitle)({
                        messages: [a.default.Messages.GO_LIVE_HEY, a.default.Messages.GO_LIVE_LOOK, a.default.Messages.GO_LIVE_LISTEN],
                        interval: 600,
                        count: 20,
                        onlyWhenBlurred: !0
                    })
                }, []), null
            }
        },
        708730: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsInGrowingFriendGuildCommunityUpsellExperiment: function() {
                    return l
                }
            });
            var i = n("122807");
            let l = function(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    {
                        enabled: n
                    } = i.GrowingFriendGuildCommunityUpsellExperiment.useExperiment({
                        guildId: e,
                        location: "7ae634_1"
                    }, {
                        autoTrackExposure: t
                    });
                return n
            }
        },
        122807: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GrowingFriendGuildCommunityUpsellExperiment: function() {
                    return l
                }
            });
            var i = n("862205");
            let l = (0, i.createExperiment)({
                kind: "guild",
                id: "2023-04_growing_friend_guild_community_upsell",
                label: "Growing Friend Guild Community Upsell",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Community Upsell to Growing Friend Guilds",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        272091: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                },
                useIsNewCommunity: function() {
                    return d
                }
            });
            var i = n("65597"),
                l = n("305961"),
                r = n("957255"),
                a = n("697218"),
                s = n("708730"),
                o = n("49111");

            function u(e, t) {
                var n;
                let u = (0, i.default)([a.default], () => {
                        var e;
                        return null !== (n = null === (e = a.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) && void 0 !== n ? n : ""
                    }),
                    d = (0, s.useIsInGrowingFriendGuildCommunityUpsellExperiment)(null != e ? e : ""),
                    E = (0, i.default)([l.default], () => l.default.getGuild(e), [e]),
                    _ = null == E ? void 0 : E.hasFeature(o.GuildFeatures.COMMUNITY),
                    c = (0, i.default)([r.default], () => r.default.can(o.Permissions.ADMINISTRATOR, E), [E]),
                    I = (null == E ? void 0 : E.isOwner(u)) || c;
                return !!d && !_ && !!I && !!t || !1
            }

            function d(e, t) {
                let n = (0, s.useIsInGrowingFriendGuildCommunityUpsellExperiment)(null != e ? e : ""),
                    r = (0, i.default)([l.default], () => l.default.getGuild(e), [e]),
                    a = null == r ? void 0 : r.hasFeature(o.GuildFeatures.COMMUNITY);
                return !!n && !!a && !!t || !1
            }
        },
        577617: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                renderOption: function() {
                    return _
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                r = n.n(l),
                a = n("77078"),
                s = n("886074"),
                o = n("45029"),
                u = n("782340"),
                d = n("41604");

            function E(e) {
                let {
                    text: t,
                    isLocked: n,
                    shouldSparkle: l
                } = e;
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)("div", {
                        className: r(d.container),
                        children: [l ? (0, i.jsx)(s.default, {
                            className: d.sparkles
                        }) : null, (0, i.jsx)(a.Text, {
                            variant: "text-md/medium",
                            color: "text-normal",
                            children: t
                        }), n ? (0, i.jsxs)("div", {
                            className: d.pill,
                            children: [(0, i.jsx)(o.default, {
                                height: 14,
                                width: 14,
                                className: d.icon
                            }), (0, i.jsx)(a.Text, {
                                variant: "text-xs/medium",
                                color: "header-primary",
                                className: d.pillText,
                                children: u.default.Messages.COMMUNITIES
                            })]
                        }) : null]
                    })
                })
            }

            function _(e, t, n) {
                return (0, i.jsx)(E, {
                    text: e.label,
                    isLocked: t,
                    shouldSparkle: n
                })
            }
        },
        255070: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("759843"),
                r = n("77078"),
                a = n("716241"),
                s = n("428958"),
                o = n("592407"),
                u = n("45395"),
                d = n("272091"),
                E = n("49111"),
                _ = n("782340"),
                c = n("191455"),
                I = n("149361");

            function T(e) {
                let {
                    permanentInviteSelected: t,
                    guildId: n,
                    onClick: T
                } = e, S = (0, d.default)(null != n ? n : "", t);
                return ((0, s.default)({
                    type: l.ImpressionTypes.MODAL,
                    name: l.ImpressionNames.GUILD_PERMANENT_LINKS_UPSELL
                }), S) ? (0, i.jsxs)("div", {
                    className: c.container,
                    children: [(0, i.jsx)("div", {
                        className: c.imageContainer,
                        children: (0, i.jsx)("img", {
                            src: I,
                            className: c.image,
                            alt: _.default.Messages.GROWING_FRIEND_GUILD_PERMANENT_INVITE_LINKS_ALT_TEXT
                        })
                    }), (0, i.jsxs)("div", {
                        className: c.textContainer,
                        children: [(0, i.jsx)(r.Heading, {
                            variant: "heading-lg/semibold",
                            className: c.header,
                            children: _.default.Messages.GROWING_FRIEND_GUILD_PERMANENT_INVITE_LINKS_UPSELL_HEADER
                        }), (0, i.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            className: c.description,
                            children: _.default.Messages.GROWING_FRIEND_GUILD_PERMANENT_INVITE_LINKS_UPSELL_DESCRIPTION
                        }), (0, i.jsx)(r.Button, {
                            size: r.ButtonSizes.SMALL,
                            color: r.Button.Colors.BRAND,
                            className: c.button,
                            onClick: () => {
                                a.default.trackWithMetadata(E.AnalyticEvents.PERMANENT_INVITE_COMMUNITY_UPSELL_CLICKED, {}), o.default.init(null != n ? n : ""), u.default.open(), T()
                            },
                            children: _.default.Messages.GET_STARTED
                        })]
                    })]
                }) : null
            }
        },
        87241: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuestVoiceInvitesExperiment: function() {
                    return l
                }
            });
            var i = n("862205");
            let l = (0, i.createExperiment)({
                kind: "guild",
                id: "2023-02_guest_voice_invites",
                label: "Guest Voice Invites",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Allow creation of guest voice invites",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        155996: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("884691"),
                l = n("298386"),
                r = n("65597"),
                a = n("656038"),
                s = n("42203"),
                o = n("923959"),
                u = n("449008");

            function d(e) {
                let t = (0, r.useStateFromStoresArray)([o.default], () => o.default.getVocalChannelIds(e)),
                    n = (0, r.useStateFromStoresArray)([s.default], () => t.map(e => s.default.getChannel(e)).filter(u.isNotNullish), [t]),
                    d = i.useMemo(() => n.filter(e => !(0, a.default)(e) && e.type === l.ChannelTypes.GUILD_VOICE), [n]);
                return d
            }
        },
        677315: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildHomeExperiment: function() {
                    return E
                },
                canSeeGuildHome: function() {
                    return _
                },
                GuildFeedRenderSelectorExperiment: function() {
                    return c
                },
                GuildFeedRefreshButtonExperiment: function() {
                    return I
                },
                GuildHomeBadgeExperiment: function() {
                    return T
                },
                GuildHomeFeedbackExperiment: function() {
                    return S
                },
                GuildHomeDeprecationExperiment: function() {
                    return f
                }
            });
            var i = n("446674"),
                l = n("203288"),
                r = n("862205"),
                a = n("21121"),
                s = n("923959"),
                o = n("305961"),
                u = n("49111");

            function d(e, t, n) {
                let i = t.getChannels(e)[s.GUILD_SELECTABLE_CHANNELS_KEY].filter(t => {
                    let {
                        channel: i
                    } = t;
                    return !n.isChannelGated(e, i.id)
                });
                return i.length > 5
            }

            function E(e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                let t = (0, i.useStateFromStores)([s.default, l.default], () => null != e && d(e.id, s.default, l.default));
                return !__OVERLAY__ && !!t && null != e && e.hasFeature(u.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
            }

            function _(e) {
                if (__OVERLAY__ || e === u.ME || e === u.FAVORITES || (0, a.isInMainTabsExperiment)()) return !1;
                let t = o.default.getGuild(e);
                return !!(null != t && d(e, s.default, l.default)) && t.hasFeature(u.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
            }
            let c = (0, r.createExperiment)({
                    kind: "user",
                    id: "2022-01_home_feed_toggle",
                    label: "Show Guild Feed Sorting Selector",
                    defaultConfig: {
                        showSelector: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes Selector",
                        config: {
                            showSelector: !0
                        }
                    }]
                }),
                I = (0, r.createExperiment)({
                    kind: "user",
                    id: "2022-06_home_refresh_button",
                    label: "Show refresh button",
                    defaultConfig: {
                        showRefreshButton: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes button",
                        config: {
                            showRefreshButton: !0
                        }
                    }]
                }),
                T = (0, r.createExperiment)({
                    kind: "user",
                    id: "2022-08_home_badge",
                    label: "Show badge on home channel",
                    defaultConfig: {
                        showBadge: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "show badge",
                        config: {
                            showBadge: !0
                        }
                    }]
                });
            (0, r.createExperiment)({
                kind: "user",
                id: "2022-08_home_drawer_autoclose",
                label: "Auto close home drawer",
                defaultConfig: {
                    autoCloseDrawer: !1,
                    animation: !1,
                    delay: null
                },
                treatments: [{
                    id: 1,
                    label: "normal animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: null
                    }
                }, {
                    id: 2,
                    label: "no animate",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !1,
                        delay: null
                    }
                }, {
                    id: 3,
                    label: "150 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 150
                    }
                }, {
                    id: 4,
                    label: "250 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 250
                    }
                }, {
                    id: 5,
                    label: "500 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 500
                    }
                }]
            }), (0, r.createExperiment)({
                kind: "user",
                id: "2022-09_welcome_header",
                label: "Show welcome header for home",
                defaultConfig: {
                    showWelcomeHeader: !1
                },
                treatments: [{
                    id: 1,
                    label: "show welcome header",
                    config: {
                        showWelcomeHeader: !0
                    }
                }]
            });
            let S = (0, r.createExperiment)({
                    kind: "user",
                    id: "2022-12_home_feedback_ux",
                    label: "Show post feedback for home",
                    defaultConfig: {
                        showFeedback: !1
                    },
                    treatments: [{
                        id: 100,
                        label: "show feedback",
                        config: {
                            showFeedback: !0
                        }
                    }]
                }),
                f = (0, r.createExperiment)({
                    kind: "guild",
                    id: "2023-03_home_deprecation",
                    label: "Home Deprecation",
                    defaultConfig: {
                        showDeprecationNotice: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show notice",
                        config: {
                            showDeprecationNotice: !0
                        }
                    }]
                })
        },
        533613: function(e, t, n) {
            "use strict";
            var i, l;
            n.r(t), n.d(t, {
                HotspotLocations: function() {
                    return i
                }
            }), (l = i || (i = {})).REPORT_PROBLEM_POST_STREAM = "REPORT_PROBLEM_POST_STREAM", l.VIDEO_BACKGROUND_FEEDBACK = "VIDEO_BACKGROUND_FEEDBACK", l.VOICE_CALL_FEEDBACK = "VOICE_CALL_FEEDBACK", l.GUILD_ANALYTICS_GUILD_SETTINGS_MENU = "GUILD_ANALYTICS_GUILD_SETTINGS_MENU", l.NOW_PLAYING_CONSENT_CARD = "NOW_PLAYING_CONSENT_CARD", l.IOS_GUILD_NAV_EDUCATION = "IOS_GUILD_NAV_EDUCATION", l.VOICE_PANEL_INTRODUCTION = "VOICE_PANEL_INTRODUCTION", l.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL = "GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL", l.FAVORITE_EMOJI_TOOLTIP = "FAVORITE_EMOJI_TOOLTIP", l.POST_ACTIVITY_FEEDBACK = "POST_ACTIVITY_FEEDBACK", l.GUILD_DELETE_FEEDBACK = "GUILD_DELETE_FEEDBACK", l.GUILD_LEAVE_FEEDBACK = "GUILD_LEAVE_FEEDBACK", l.APPLICATION_COMMAND_TOOLTIP = "APPLICATION_COMMAND_TOOLTIP", l.GUILD_CAP_INLINE_UPSELL = "GUILD_CAP_INLINE_UPSELL", l.STAGE_CHANNEL_UPSELL = "STAGE_CHANNEL_UPSELL", l.HUB_WAITLIST_UPSELL = "HUB_WAITLIST_UPSELL", l.HUB_NEW = "HUB_NEW", l.HUB_SECOND_EMAIL_CONNECTION_UPSELL = "HUB_SECOND_EMAIL_CONNECTION_UPSELL", l.LIVE_STAGE_NOTIFICATION_BADGE = "LIVE_STAGE_NOTIFICATION_BADGE", l.GUILD_EVENT_UPSELL = "GUILD_EVENT_UPSELL", l.HUB_LINK_CHANNEL_NOTICE = "HUB_LINK_CHANNEL_NOTICE", l.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP = "PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP", l.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP = "ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP", l.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL = "ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL", l.MULTI_ACCOUNT_TOOLTIP = "MULTI_ACCOUNT_TOOLTIP", l.HUB_STUDY_ROOM_NOTICE = "HUB_STUDY_ROOM_NOTICE", l.CHANNEL_BANNER_MEMBER_LIST_NOTICE = "CHANNEL_BANNER_MEMBER_LIST_NOTICE", l.CHANGE_LANGUAGE_MODAL = "CHANGE_LANGUAGE_MODAL", l.ACTIVITY_BEB_TUTORIAL = "ACTIVITY_BEB_TUTORIAL", l.APP_DIRECTORY_SETTINGS_NEW_PILL = "APP_DIRECTORY_SETTINGS_NEW_PILL", l.INVITE_SPLASH_GUILD_HEADER_TOOLTIP = "INVITE_SPLASH_GUILD_HEADER_TOOLTIP", l.ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW", l.ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW", l.ANIMATED_VIDEO_BG_HACKER_DEN_NEW = "ANIMATED_VIDEO_BG_HACKER_DEN_NEW", l.ANIMATED_VIDEO_BG_WUMPICE_NEW = "ANIMATED_VIDEO_BG_WUMPICE_NEW", l.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW = "ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW", l.ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW = "ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW", l.SOUNDBOARD_WHEEL_EDUCATION_MODAL = "SOUNDBOARD_WHEEL_EDUCATION_MODAL", l.IN_APP_REPORTS_FEEDBACK = "IN_APP_REPORTS_FEEDBACK", l.CLIPS_CHANNEL_ATTACH_REMINDER = "CLIPS_CHANNEL_ATTACH_REMINDER"
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return N
                },
                updateImpersonating: function() {
                    return O
                },
                stopImpersonating: function() {
                    return A
                },
                updateImpersonatedChannels: function() {
                    return g
                },
                updateImpersonatedRoles: function() {
                    return m
                },
                updateImpersonatedData: function() {
                    return h
                }
            });
            var i = n("913144"),
                l = n("716241"),
                r = n("393414"),
                a = n("42203"),
                s = n("923959"),
                o = n("26989"),
                u = n("305961"),
                d = n("957255"),
                E = n("18494"),
                _ = n("282109"),
                c = n("599110"),
                I = n("38654"),
                T = n("507950"),
                S = n("49111"),
                f = n("724210");

            function N(e, t) {
                c.default.track(S.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, l.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === T.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), p(e)
            }

            function O(e, t) {
                let n = I.default.getData(e);
                null != n && n.type === t.type && (c.default.track(S.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, l.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === T.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), p(e))
            }

            function A(e) {
                i.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function p(e) {
                let t = E.default.getChannelId(e),
                    n = a.default.getChannel(t),
                    i = null != t && (0, f.isStaticChannelRoute)(t);
                if (!i && !d.default.can(S.Permissions.VIEW_CHANNEL, n)) {
                    let t = s.default.getDefaultChannel(e);
                    null != t && (0, r.transitionTo)(S.Routes.CHANNEL(e, t.id))
                }
            }

            function g(e, t, n) {
                let i = new Set(_.default.getOptedInChannels(e));
                t.forEach(e => i.add(e)), n.forEach(e => i.delete(e)), O(e, {
                    type: T.ImpersonateType.NEW_MEMBER,
                    optInChannels: i
                })
            }

            function m(e, t) {
                let n = u.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...s.default.getSelectableChannelIds(e), ...s.default.getVocalChannelIds(e)],
                        i = Array.from(t);
                    s.default.addConditionalChangeListener(() => {
                        let t = o.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (i.some(e => !t.roles.includes(e))) return !0;
                        let l = [...s.default.getSelectableChannelIds(e), ...s.default.getVocalChannelIds(e)],
                            r = l.filter(e => !n.includes(e));
                        return r.length > 0 && g(e, r, []), !1
                    })
                }(e, t);
                let i = {};
                t.forEach(e => i[e] = n.roles[e]), O(e, {
                    type: T.ImpersonateType.NEW_MEMBER,
                    roles: i
                })
            }

            function h(e, t) {
                O(e, {
                    type: T.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return a
                },
                generateInviteKeyFromExtraData: function() {
                    return s
                },
                parseExtraDataFromInviteKey: function() {
                    return o
                },
                parseInviteCodeFromInviteKey: function() {
                    return u
                }
            });
            var i = n("522632"),
                l = n("833858");
            let r = "event";

            function a(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = i.parse(t);
                        return (0, l.getFirstQueryStringValue)(e[r])
                    } catch (e) {
                        return
                    }
                }(t);
                return s({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function s(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(r, "=").concat(n)
            }

            function o(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let a = i.parse(n),
                    s = (0, l.getFirstQueryStringValue)(a[r]);
                return {
                    baseCode: t,
                    guildScheduledEventId: s
                }
            }

            function u(e) {
                let [t] = e.split("?");
                return t
            }
        },
        234919: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = (0, n("862205").createExperiment)({
                kind: "guild",
                id: "2022-05_vanity_url_target",
                label: "Vanity URL Targeting",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        310688: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return eT
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                a = n.n(r),
                s = n("627445"),
                o = n.n(s),
                u = n("917351"),
                d = n.n(u),
                E = n("759843"),
                _ = n("498574"),
                c = n("446674"),
                I = n("669491"),
                T = n("77078"),
                S = n("970728"),
                f = n("685073"),
                N = n("84339"),
                O = n("812204"),
                A = n("685665"),
                p = n("442939"),
                g = n("656038"),
                m = n("419830"),
                h = n("262362"),
                C = n("582415"),
                L = n("385042"),
                R = n("87241"),
                U = n("155996"),
                M = n("834052"),
                v = n("373469"),
                D = n("19766"),
                P = n("42203"),
                G = n("923959"),
                y = n("330154"),
                F = n("705955"),
                w = n("957255"),
                b = n("824563"),
                x = n("18494"),
                B = n("697218"),
                V = n("316133"),
                k = n("941886"),
                H = n("145131"),
                j = n("810567"),
                K = n("474571"),
                W = n("423487"),
                Y = n("599110"),
                z = n("568734"),
                Q = n("354023"),
                X = n("9294"),
                J = n("512027"),
                q = n("234919"),
                Z = n("52393"),
                $ = n("216463"),
                ee = n("474592"),
                et = n("652453"),
                en = n("470259"),
                ei = n("91366"),
                el = n("49111"),
                er = n("724210"),
                ea = n("782340"),
                es = n("435808"),
                eo = n("926622"),
                eu = n("486425"),
                ed = n("56585");
            let {
                INVITE_OPTIONS_FOREVER: eE,
                INVITE_OPTIONS_7_DAYS: e_,
                INVITE_OPTIONS_UNLIMITED: ec
            } = Q.default;
            class eI extends l.PureComponent {
                componentDidMount() {
                    let {
                        inviteChannel: e,
                        code: t,
                        guild: n,
                        source: i,
                        canCreateInvites: l,
                        analyticsLocation: r,
                        streamUserId: a,
                        targetType: s,
                        targetUserId: o,
                        application: u,
                        initialCounts: d,
                        rows: E,
                        showFriends: _,
                        modalState: c,
                        setModalState: I
                    } = this.props, {
                        maxAge: T,
                        maxUses: f,
                        temporary: N
                    } = c;
                    if (l) {
                        let n = null == e ? void 0 : e.id;
                        if (null == n) return;
                        I({
                            networkError: void 0
                        }), S.default.createInvite(n, {
                            validate: null != t ? t : null,
                            max_age: T,
                            max_uses: f,
                            target_user_id: o,
                            target_type: s,
                            target_application_id: null == u ? void 0 : u.id,
                            temporary: N
                        }, i).catch(e => I({
                            networkError: e
                        }))
                    }
                    if (_ && Y.default.track(el.AnalyticEvents.INVITE_SUGGESTION_OPENED, {
                            location: i,
                            num_suggestions: E.length,
                            num_friends: d.numFriends,
                            num_dms: d.numDms,
                            num_group_dms: d.numGroupDms,
                            guild_id: n.id
                        }), q.default.trackExposure({
                            guildId: null == n ? void 0 : n.id,
                            location: "acc417_1"
                        }), null != a) {
                        let e = v.default.getStreamForUser(a, n.id),
                            t = (0, C.getStreamerApplication)(e, b.default);
                        Y.default.track(el.AnalyticEvents.OPEN_MODAL, {
                            type: "Send Stream Invite",
                            source: i,
                            location: r,
                            other_user_id: a,
                            application_id: null != t ? t.id : null,
                            application_name: null != t ? t.name : null,
                            game_id: null != t ? t.id : null
                        })
                    } else(null == u ? void 0 : u.id) != null || Y.default.track(el.AnalyticEvents.OPEN_MODAL, {
                        type: "Instant Invite Modal",
                        source: i,
                        location: r
                    })
                }
                componentWillUnmount() {
                    let {
                        inviteChannel: e,
                        inviteFlags: t,
                        setInviteFlags: n
                    } = this.props;
                    (0, z.hasFlag)(t, _.GuildInviteFlags.IS_GUEST_INVITE) && null != e && (n((0, z.removeFlag)(t, _.GuildInviteFlags.IS_GUEST_INVITE)), S.default.clearInviteFromStore(e.id))
                }
                getInviteKey() {
                    let {
                        code: e,
                        vanityURLCode: t,
                        guildScheduledEvent: n,
                        modalState: i
                    } = this.props, {
                        showVanityURL: l
                    } = i, r = l ? t : null != e ? e : t;
                    return null == r ? r : (0, X.generateInviteKeyFromExtraData)({
                        baseCode: r,
                        guildScheduledEventId: null == n ? void 0 : n.id
                    })
                }
                renderChannelWarning() {
                    let {
                        inviteChannel: e
                    } = this.props;
                    return (0, g.default)(e) ? (0, i.jsxs)("div", {
                        className: es.warningContainer,
                        children: [(0, i.jsx)(W.default, {
                            className: es.warningIcon,
                            color: I.default.unsafe_rawColors.YELLOW_300.css,
                            width: 12
                        }), (0, i.jsx)(T.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: ea.default.Messages.INVITE_PRIVATE_CHANNEL_WARNING
                        })]
                    }) : null
                }
                renderHeader() {
                    let e;
                    let {
                        guild: t,
                        showFriends: n,
                        guildScheduledEvent: l,
                        streamUserId: r,
                        application: s,
                        welcomeToServer: o,
                        inviteChannel: u,
                        modalState: d,
                        handleDone: E
                    } = this.props, {
                        query: _
                    } = d, c = null, I = null;
                    if (e = o ? null : null != r ? ea.default.Messages.INVITE_STREAM_HEADER : null != s ? ea.default.Messages.EMBEDDED_ACTIVITIES_INVITE_FRIENDS_TO_ACTIVITY_NAME.format({
                            applicationName: s.name
                        }) : null != l ? ea.default.Messages.GUILD_EVENT_INVITE_MODAL_TITLE : (null == u ? void 0 : u.isGuildStageVoice()) ? ea.default.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_HEADER : ea.default.Messages.INVITE_TO_SERVER_NAME.format({
                            name: t.toString()
                        }), null != u) {
                        let e = (0, m.getChannelIconComponent)(u, t);
                        null != e && (I = (0, i.jsxs)("div", {
                            className: es.headerChannelContainer,
                            children: [(0, i.jsx)(e, {
                                className: es.channelIcon
                            }), (0, i.jsx)(T.Text, {
                                color: "interactive-normal",
                                variant: "text-md/normal",
                                children: u.name
                            })]
                        }))
                    }
                    return c = t.hasFeature(el.GuildFeatures.HUB) ? (0, i.jsxs)("div", {
                        className: es.hubHeader,
                        children: [(0, i.jsx)(T.Heading, {
                            className: a(es.hubInviteTitle, es.headerCloseButtonSpacing),
                            id: this._headerId,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            children: ea.default.Messages.HUB_INVITE_HEADER
                        }), (0, i.jsx)(T.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            children: ea.default.Messages.HUB_INVITE_SUBHEADER
                        }), n && (0, i.jsx)(j.default, {
                            query: _,
                            className: es.hubFriendSearch,
                            onChange: this.handleQueryChange,
                            placeholder: ea.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
                            "aria-label": ea.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
                            autoFocus: !0,
                            onClear: this.handleClearSearch
                        })]
                    }) : n ? (0, i.jsxs)("div", {
                        className: es.header,
                        children: [(0, i.jsx)("div", {
                            className: es.headerTopRow,
                            children: (0, i.jsx)(T.FormTitle, {
                                id: this._headerId,
                                tag: "h2",
                                className: a(eo.marginBottom4, es.headerCloseButtonSpacing, es.headerText),
                                children: e
                            })
                        }), I, (0, i.jsx)(j.default, {
                            query: _,
                            className: es.searchBar,
                            onChange: this.handleQueryChange,
                            placeholder: ea.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
                            autoFocus: !0,
                            onClear: this.handleClearSearch
                        }), (0, i.jsx)("div", {
                            className: eo.marginTop8,
                            children: this.renderChannelWarning()
                        })]
                    }) : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(T.FormTitle, {
                            id: this._headerId,
                            tag: "h2",
                            className: a(eo.marginReset, es.headerCloseButtonSpacing, es.headerText),
                            children: e
                        }), I, this.renderChannelWarning()]
                    }), (0, i.jsxs)(T.ModalHeader, {
                        separator: n,
                        children: [(0, i.jsx)(T.ModalCloseButton, {
                            className: es.closeButton,
                            onClick: E
                        }), (0, i.jsxs)("div", {
                            className: es.headerContainer,
                            children: [o && (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("img", {
                                    className: es.welcomeImage,
                                    src: ed,
                                    alt: ""
                                }), (0, i.jsx)(T.H, {
                                    className: es.welcomeHeading,
                                    children: ea.default.Messages.INVITE_WELCOME_HEADING
                                }), (0, i.jsx)("p", {
                                    className: es.welcomeSubheading,
                                    children: ea.default.Messages.INVITE_WELCOME_SUBHEADING
                                })]
                            }), null != r ? (0, i.jsx)(L.default, {}) : null, c]
                        })]
                    })
                }
                renderFriendsBody() {
                    let {
                        rows: e
                    } = this.props, t = this.getInviteKey();
                    return 0 === e.length ? (0, i.jsx)(T.ModalContent, {
                        className: a(es.inviteRowEmptyState),
                        children: (0, i.jsx)(k.EmptyStateText, {
                            children: ea.default.Messages.INVITE_FRIEND_MODAL_NO_RESULTS
                        })
                    }) : null == t ? (0, i.jsx)(T.ModalContent, {
                        className: a(es.inviteRowEmptyState),
                        children: (0, i.jsx)(k.EmptyStateText, {
                            children: ea.default.Messages.INVITE_FRIEND_MODAL_LOADING
                        })
                    }) : (0, i.jsx)(T.ModalListContent, {
                        className: es.scroller,
                        sections: [e.length],
                        renderSection: this.renderSection,
                        sectionHeight: 0,
                        renderRow: this.renderRow,
                        rowHeight: this.getRowHeight,
                        paddingBottom: 16
                    })
                }
                renderSection() {
                    return null
                }
                renderBody() {
                    var e;
                    let {
                        guild: t,
                        showFriends: n,
                        streamUserId: l,
                        application: r
                    } = this.props;
                    if (n) return this.renderFriendsBody();
                    let a = (0, Z.default)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : ""),
                        s = B.default.getCurrentUser();
                    o(null != s, "InstantInviteModal: user cannot be undefined");
                    let u = t.isOwner(s),
                        d = u ? ea.default.Messages.INVITE_SHARE_LINK_OWN_SERVER : ea.default.Messages.SHARE_INVITE_LINK_FOR_ACCESS;
                    return null != l ? d = ea.default.Messages.INVITE_SHARE_LINK_TO_STREAM : null != r && (d = ea.default.Messages.EMBEDDED_ACTIVITIES_SHARE_LINK_TO_ACTIVITY), (0, i.jsx)(T.ModalContent, {
                        className: es.noScroll,
                        children: (0, i.jsxs)(H.default, {
                            direction: H.default.Direction.VERTICAL,
                            className: eo.marginBottom20,
                            children: [(0, i.jsx)(T.Text, {
                                className: es.subText,
                                variant: "text-sm/normal",
                                children: d
                            }), (0, i.jsx)(et.InviteCopyInput, {
                                ...this.props,
                                copyValue: a
                            })]
                        })
                    })
                }
                renderFooter() {
                    var e;
                    let {
                        noInvitesAvailable: t,
                        showFriends: n,
                        guildScheduledEvent: l,
                        streamUserId: r,
                        application: s,
                        inviteChannel: o,
                        modalState: u
                    } = this.props, {
                        maxAge: d
                    } = u, E = null, _ = (0, Z.default)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : "");
                    if (n) {
                        let e = ea.default.Messages.INVITE_FOOTER_LINK_HEADER;
                        null != r ? e = ea.default.Messages.INVITE_STREAM_FOOTER_LINK_HEADER : null != s ? e = ea.default.Messages.EMBEDDED_ACTIVITIES_INVITE_ACTIVITY_FOOTER_LINK_HEADER : null != l ? e = ea.default.Messages.GUILD_EVENT_INVITE_MODAL_FOOTER : (null == o ? void 0 : o.isGuildStageVoice()) && (e = ea.default.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_FOOTER), E = (0, i.jsxs)(H.default, {
                            direction: H.default.Direction.VERTICAL,
                            className: es.content,
                            children: [(0, i.jsx)(T.FormTitle, {
                                tag: "h5",
                                className: eo.marginBottom8,
                                children: e
                            }), (0, i.jsx)(et.InviteCopyInput, {
                                ...this.props,
                                copyValue: _
                            })]
                        })
                    } else !t && (E = (0, i.jsxs)(H.default, {
                        justify: H.default.Justify.BETWEEN,
                        className: eo.marginTop20,
                        children: [(0, i.jsx)(T.Checkbox, {
                            size: 18,
                            type: T.Checkbox.Types.INVERTED,
                            value: d === eE.value,
                            onChange: this.handleToggleMaxAge,
                            children: (0, i.jsx)(T.Text, {
                                className: es.checkBoxLabel,
                                variant: "text-sm/normal",
                                children: ea.default.Messages.SET_INVITE_LINK_NEVER_EXPIRE
                            })
                        }), (0, i.jsx)(T.Tooltip, {
                            text: ea.default.Messages.LINK_SETTINGS,
                            children: e => {
                                let {
                                    onMouseEnter: t,
                                    onMouseLeave: n
                                } = e;
                                return (0, i.jsx)(T.Clickable, {
                                    onClick: this.openSettings,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    className: eu.cursorPointer,
                                    children: (0, i.jsx)(K.default, {
                                        width: 18,
                                        height: 18,
                                        color: I.default.unsafe_rawColors.PRIMARY_400.css
                                    })
                                })
                            }
                        })]
                    }));
                    return null != E ? (0, i.jsx)(T.ModalFooter, {
                        className: a({
                            [es.noPadding]: !n,
                            [es.footer]: n
                        }),
                        children: E
                    }) : null
                }
                getModalContent() {
                    let {
                        modalState: e,
                        handleDone: t
                    } = this.props, {
                        currentPage: n
                    } = e;
                    switch (n) {
                        case ei.InstantInviteModalPages.MAIN:
                            return (0, i.jsxs)(i.Fragment, {
                                children: [this.renderHeader(), this.renderBody(), this.renderFooter()]
                            });
                        case ei.InstantInviteModalPages.SETTINGS:
                            return (0, i.jsx)(ee.InstantInviteSettingsPage, {
                                ...this.props,
                                headerId: this._headerId,
                                onSelectMaxAge: this.handleSelectMaxAge,
                                onSelectMaxUses: this.handleSelectMaxUses,
                                onToggleTemporary: this.handleToggleTemporary,
                                handleDone: t
                            });
                        case ei.InstantInviteModalPages.GUEST:
                            var l;
                            let r = (0, Z.default)(null !== (l = this.getInviteKey()) && void 0 !== l ? l : "");
                            return (0, i.jsx)($.InstantInviteGuestPage, {
                                ...this.props,
                                headerId: this._headerId,
                                handleDone: t,
                                copyValue: r
                            });
                        default:
                            return null
                    }
                }
                render() {
                    let {
                        transitionState: e,
                        inviteChannel: t,
                        guild: n
                    } = this.props;
                    return (0, i.jsx)("div", {
                        className: this.props.showFriends ? es.wrapper : void 0,
                        children: (0, i.jsx)(T.ModalRoot, {
                            impression: {
                                impressionName: E.ImpressionNames.GUILD_INVITE,
                                impressionProperties: {
                                    invite_channel_id: null == t ? void 0 : t.id,
                                    invite_guild_id: n.id
                                }
                            },
                            "aria-labelledby": this._headerId,
                            transitionState: e,
                            className: es.modal,
                            children: this.getModalContent()
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._scroller = null, this._headerId = d.uniqueId(), this.openSettings = () => {
                        let {
                            changePage: e
                        } = this.props;
                        e(ei.InstantInviteModalPages.SETTINGS)
                    }, this.handleSelectMaxAge = e => {
                        let {
                            modalState: t,
                            setModalState: n
                        } = this.props;
                        n({
                            maxAge: e,
                            savedMaxAge: t.maxAge
                        })
                    }, this.handleSelectMaxUses = e => {
                        let {
                            setModalState: t
                        } = this.props;
                        t({
                            maxUses: e
                        })
                    }, this.handleToggleTemporary = e => {
                        let {
                            setModalState: t
                        } = this.props;
                        t({
                            temporary: e
                        })
                    }, this.handleToggleGuest = e => {
                        let {
                            inviteFlags: t,
                            setInviteFlags: n
                        } = this.props;
                        n((0, z.setFlag)(t, _.GuildInviteFlags.IS_GUEST_INVITE, e))
                    }, this.handleQueryChange = e => {
                        var t;
                        let {
                            setModalState: n
                        } = this.props;
                        null === (t = this._scroller) || void 0 === t || t.scrollTo({
                            to: 0
                        }), (0, f.searchInviteSuggestions)(e), n({
                            query: e
                        })
                    }, this.handleClearSearch = () => {
                        this.handleQueryChange("")
                    }, this.handleToggleMaxAge = () => {
                        let {
                            modalState: e,
                            setModalState: t
                        } = this.props, {
                            maxAge: n,
                            savedMaxAge: i
                        } = e;
                        t({
                            maxAge: i,
                            savedMaxAge: n
                        })
                    }, this.getRowHeight = (e, t) => {
                        if (e > 0) return 0;
                        let n = this.props.rows[t];
                        switch (n.type) {
                            case Q.RowTypes.CHANNEL:
                            case Q.RowTypes.GROUP_DM:
                            case Q.RowTypes.DM:
                            case Q.RowTypes.FRIEND:
                                return en.INVITE_ROW_HEIGHT;
                            default:
                                return 0
                        }
                    }, this.renderRow = e => {
                        let {
                            section: t,
                            row: n
                        } = e;
                        if (t > 0) return null;
                        let {
                            analyticsLocation: l
                        } = this.props, r = this.getInviteKey(), a = this.props.rows[n], s = "".concat(a.type, "-").concat(a.item.id);
                        switch (a.type) {
                            case Q.RowTypes.GROUP_DM:
                            case Q.RowTypes.CHANNEL:
                                return (0, i.jsx)(en.InviteRow, {
                                    row: a,
                                    channel: a.item,
                                    inviteKey: r,
                                    location: l
                                }, s);
                            case Q.RowTypes.DM:
                            case Q.RowTypes.FRIEND:
                                return (0, i.jsx)(en.InviteRow, {
                                    row: a,
                                    user: a.item,
                                    inviteKey: r,
                                    location: l
                                }, s);
                            default:
                                return null
                        }
                    }
                }
            }
            eI.defaultProps = {
                analyticsLocation: el.AnalyticsLocations.GUILD_CREATE_INVITE_SUGGESTION,
                defaultMaxAge: e_.value
            };
            var eT = l.forwardRef(function(e, t) {
                var n, r, a, s;
                let {
                    channel: o,
                    guild: u,
                    source: d,
                    guildScheduledEvent: E,
                    streamUserId: I,
                    applicationId: T,
                    transitionState: m,
                    onClose: C,
                    welcomeToServer: L,
                    page: v,
                    analyticsLocation: b
                } = e, [B, k] = l.useState(v === ei.InstantInviteModalPages.GUEST ? _.GuildInviteFlags.IS_GUEST_INVITE : 0), {
                    AnalyticsLocationProvider: H,
                    analyticsLocations: j
                } = (0, A.default)(O.default.INSTANT_INVITE_MODAL), K = (0, c.useStateFromStores)([P.default, x.default], () => {
                    let e = x.default.getVoiceChannelId();
                    if (null == e) return null;
                    let t = P.default.getChannel(e);
                    return (null == t ? void 0 : t.guild_id) === u.id ? t : null
                }), W = null != K && !(0, g.default)(K) && [el.InstantInviteSources.GUILD_CONTEXT_MENU, el.InstantInviteSources.GUILD_HEADER].includes(d), Y = (0, U.default)(u.id), Q = (0, c.useStateFromStores)([x.default, P.default, G.default], () => {
                    var e;
                    if (W && ((0, z.hasFlag)(B, _.GuildInviteFlags.IS_GUEST_INVITE) || v === ei.InstantInviteModalPages.GUEST)) return K;
                    if (v === ei.InstantInviteModalPages.GUEST) return 1 === Y.length ? Y[0] : void 0;
                    if (null != o) return o;
                    let t = x.default.getChannelId(),
                        n = null == t || (0, er.isStaticChannelRoute)(t) ? void 0 : P.default.getChannel(t);
                    return (null === (e = n) || void 0 === e ? void 0 : e.isThread()) && (n = P.default.getChannel(n.parent_id)), null != n ? n : G.default.getDefaultChannel(u.id)
                }, [W, B, v, o, u.id, K, Y]), [X, q] = l.useState(null), Z = null != X ? X : Q, $ = null;
                null != I ? $ = ei.InviteTargetTypes.STREAM : null != T && ($ = ei.InviteTargetTypes.EMBEDDED_APPLICATION);
                let ee = null != o ? o.getGuildId() : null != u ? u.id : null,
                    et = (0, c.useStateFromStores)([y.default], () => {
                        let e = null != Z ? Z.id : null;
                        return null == e ? null : y.default.getInvite(e, {
                            targetType: $,
                            targetUserId: I,
                            targetApplicationId: T
                        })
                    }, [Z, $, I, T]),
                    [en, ea, es, eo, eu] = (0, c.useStateFromStoresArray)([F.default, V.default, D.default], () => {
                        let e = null != Z ? Z.id : null;
                        return [F.default.getInviteSuggestionRows(), F.default.getTotalSuggestionsCount() >= 1, F.default.getInitialCounts(), null != o && null != Z ? V.default.getVoiceStatesForChannel(Z) : null, null != ee ? D.default.getProps(ee, e) : null]
                    }, [Z, o, ee]),
                    ed = (0, c.useStateFromStores)([w.default], () => null != Z && w.default.can(el.Permissions.CREATE_INSTANT_INVITE, Z), [Z]),
                    eT = null === et || !ed,
                    [eS] = l.useState(() => {
                        let e = new Set;
                        return null != I && null != eo ? eo.forEach(t => {
                            let {
                                user: n
                            } = t;
                            e.add(n.id)
                        }) : null != ee && null != eu && $ !== ei.InviteTargetTypes.EMBEDDED_APPLICATION && eu.rows.forEach(t => {
                            t.type === D.MemberListRowTypes.MEMBER && e.add(t.userId)
                        }), e
                    }),
                    ef = null == o ? void 0 : o.id,
                    eN = (0, c.useStateFromStores)([M.default], () => M.default.getStageInstanceByChannel(ef), [ef]);
                l.useEffect(() => {
                    (0, f.loadInviteSuggestions)({
                        omitUserIds: eS,
                        guild: u,
                        channel: o,
                        applicationId: T,
                        inviteTargetType: $
                    }).catch(el.NOOP_NULL)
                }, [eS, o, u, T, $]);
                let [eO] = (0, p.default)(null != T ? [T] : []), eA = (0, h.default)({
                    guildId: ee
                }), ep = null != et ? et.code : void 0, eg = null == et ? void 0 : et.maxAge, em = null == et ? void 0 : et.maxUses, eh = null == et ? void 0 : et.temporary, eC = u.vanityURLCode, eL = null != eC && eC.length > 0, {
                    enabled: eR
                } = J.default.useExperiment({
                    guildId: null !== (a = null !== (r = null !== (n = u.id) && void 0 !== n ? n : null == et ? void 0 : et.guild.id) && void 0 !== r ? r : ee) && void 0 !== a ? a : "",
                    location: "acc417_2"
                }, {
                    autoTrackExposure: eL
                }), eU = eR && !(null == Z ? void 0 : Z.isGuildVocal()) && eL, eM = (null == Z ? void 0 : Z.type) === el.ChannelTypes.GUILD_VOICE, ev = (0, g.default)(Z);
                !ed && (null == eN ? void 0 : eN.invite_code) != null && (ep = eN.invite_code);
                let [eD, eP] = l.useState({
                    query: "",
                    maxAge: null !== (s = null != eg ? eg : eA) && void 0 !== s ? s : e_.value,
                    savedMaxAge: eg === eE.value ? null != eA ? eA : e_.value : eE.value,
                    maxUses: null != em && 0 !== em ? em : ec.value,
                    temporary: null != eh && eh,
                    networkError: void 0,
                    showVanityURL: eU,
                    currentPage: null != v ? v : ei.InstantInviteModalPages.MAIN,
                    lastPage: void 0
                }), eG = l.useCallback(e => {
                    eP(t => ({
                        ...t,
                        ...e
                    }))
                }, []), ey = l.useCallback(e => {
                    eG({
                        currentPage: e,
                        lastPage: eD.currentPage
                    })
                }, [eD.currentPage, eG]), eF = (eM || W) && v !== ei.InstantInviteModalPages.GUEST && !eU && !eT && !ev, {
                    enabled: ew
                } = R.GuestVoiceInvitesExperiment.useExperiment({
                    guildId: null == u ? void 0 : u.id,
                    location: "acc417_3"
                }, {
                    autoTrackExposure: eF
                }), {
                    maxAge: eb,
                    maxUses: ex,
                    temporary: eB,
                    savedMaxAge: eV
                } = eD, ek = l.useCallback(() => {
                    let {
                        currentPage: e,
                        lastPage: t
                    } = eD;
                    e === ei.InstantInviteModalPages.SETTINGS && null != t ? ey(t) : C()
                }, [ey, eD, C]), eH = l.useCallback(() => {
                    let e = null == Z ? void 0 : Z.id;
                    0 === ex && 0 === eb && !eB && eU ? eG({
                        networkError: void 0,
                        showVanityURL: !0
                    }) : null != e && (eG({
                        networkError: void 0,
                        showVanityURL: !1
                    }), S.default.createInvite(e, {
                        max_age: eb,
                        max_uses: ex,
                        target_type: $,
                        target_user_id: I,
                        target_application_id: null == eO ? void 0 : eO.id,
                        temporary: eB,
                        flags: B
                    }, d).catch(e => eG({
                        networkError: e,
                        showVanityURL: eU
                    }))), eb !== eE.value && eV !== eE.value && eG({
                        savedMaxAge: eE.value
                    })
                }, [eU, Z, d, null == eO ? void 0 : eO.id, $, I, eb, ex, eB, B, eG, eV]), ej = (0, N.default)(Z), eK = (0, N.default)(B), eW = ej !== Z, eY = eK !== B;
                return l.useEffect(() => {
                    (eW || eY) && eH()
                }, [eH, eW, eY]), (0, i.jsx)(H, {
                    children: (0, i.jsx)(eI, {
                        ref: t,
                        canCreateInvites: ed,
                        noInvitesAvailable: eT,
                        inviteChannel: Z,
                        guild: u,
                        guildScheduledEvent: E,
                        streamUserId: I,
                        vanityURLCode: eC,
                        targetType: $,
                        targetUserId: I,
                        application: eO,
                        rows: en,
                        showFriends: ea,
                        initialCounts: es,
                        code: ep,
                        source: d,
                        welcomeToServer: L,
                        analyticsLocations: j,
                        analyticsLocation: b,
                        transitionState: m,
                        onClose: C,
                        canShowVanityURL: eU,
                        isGuestInviteCreationToggleEnabled: ew && eF,
                        shouldHideTemporaryInviteToggle: ew && eF || v === ei.InstantInviteModalPages.GUEST,
                        modalState: eD,
                        setModalState: eG,
                        changePage: ey,
                        onGenerateNewLink: eH,
                        inviteFlags: B,
                        setInviteFlags: k,
                        showGuestInviteToggleForCurrentVoiceChannel: W,
                        setInviteChannel: q,
                        handleDone: ek
                    })
                })
            })
        },
        216463: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                InstantInviteGuestPage: function() {
                    return T
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                a = n.n(r),
                s = n("77078"),
                o = n("155996"),
                u = n("41594"),
                d = n("652453"),
                E = n("782340"),
                _ = n("435808"),
                c = n("926622");
            let I = e => {
                    let {
                        guild: t,
                        inviteChannel: n,
                        setInviteChannel: r
                    } = e, a = (0, o.default)(t.id), d = l.useMemo(() => a.reduce((e, t) => ({
                        ...e,
                        [t.id]: t
                    }), {}), [a]), _ = l.useMemo(() => Object.values(d).map(e => ({
                        value: e.id,
                        label: e.name
                    })), [d]);
                    return (0, i.jsx)(s.SearchableSelect, {
                        options: _,
                        value: null == n ? void 0 : n.id,
                        onChange: e => {
                            r(d[e])
                        },
                        placeholder: E.default.Messages.INVITE_A_GUEST_SELECT_VOICE_CHANNEL,
                        renderOptionPrefix: e => {
                            if (null == e) return null;
                            let n = e.value,
                                l = d[n];
                            return null == l ? null : (0, i.jsx)(u.ChannelItemIcon, {
                                channel: l,
                                guild: t
                            })
                        }
                    })
                },
                T = e => {
                    let {
                        handleDone: t,
                        headerId: n,
                        inviteChannel: l,
                        copyValue: r
                    } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)(s.ModalHeader, {
                            children: [(0, i.jsx)(s.ModalCloseButton, {
                                className: _.closeButton,
                                onClick: t
                            }), (0, i.jsx)("div", {
                                className: _.headerContainer,
                                children: (0, i.jsx)(s.FormTitle, {
                                    id: n,
                                    tag: "h2",
                                    className: a(c.marginReset, _.headerCloseButtonSpacing, _.headerText),
                                    children: E.default.Messages.INVITE_A_GUEST_VOICE_ONLY
                                })
                            })]
                        }), (0, i.jsx)(s.ModalContent, {
                            className: _.noScroll,
                            children: (0, i.jsxs)("div", {
                                className: _.guestBody,
                                children: [(0, i.jsx)(s.Text, {
                                    tag: "div",
                                    variant: "heading-sm/normal",
                                    color: "header-secondary",
                                    children: E.default.Messages.INVITE_A_GUEST_EXPLANATION
                                }), (0, i.jsx)(s.FormTitle, {
                                    tag: "h5",
                                    className: _.guestSelectChannelHeader,
                                    children: E.default.Messages.INVITE_A_GUEST_STEP_1
                                }), (0, i.jsx)(I, {
                                    ...e
                                }), (0, i.jsx)(s.FormTitle, {
                                    tag: "h5",
                                    className: _.guestSendInviteLinkHeader,
                                    children: E.default.Messages.INVITE_A_GUEST_STEP_2
                                }), (0, i.jsx)(d.InviteCopyInput, {
                                    ...e,
                                    copyValue: null == l ? "" : r,
                                    disabled: null == l
                                })]
                            })
                        })]
                    })
                }
        },
        825691: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                a = n.n(r),
                s = n("77078"),
                o = n("272091"),
                u = n("577617"),
                d = n("255070"),
                E = n("354023"),
                _ = n("849366"),
                c = n("782340"),
                I = n("911011"),
                T = n("926622");
            let S = E.default.getMaxAgeOptions;

            function f(e) {
                let {
                    temporary: t,
                    shouldHide: n,
                    onToggleTemporary: l
                } = e;
                return n ? (0, i.jsx)("div", {
                    className: T.marginTop20
                }) : (0, i.jsx)(s.FormItem, {
                    className: a(T.marginTop20, I.switch),
                    children: (0, i.jsx)(s.FormSwitch, {
                        value: t,
                        onChange: e => l(e),
                        note: c.default.Messages.TEMPORARY_MEMBERSHIP_EXPLANATION,
                        hideBorder: !0,
                        children: (0, i.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            children: c.default.Messages.GRANT_TEMPORARY_MEMBERSHIP
                        })
                    })
                })
            }
            let N = E.default.getMaxUsesOptions;

            function O(e) {
                var t;
                let {
                    guildId: n,
                    shouldHideTemporaryInviteToggle: r,
                    maxAge: E,
                    maxUses: O,
                    temporary: A,
                    onGenerateNewLink: p,
                    onToggleTemporary: g,
                    onSelectMaxAge: m,
                    onSelectMaxUses: h
                } = e, C = (0, o.default)(n, 0 === E), L = (0, o.default)(n, !0), R = (0, _.default)(n), U = R.find(e => e.value === E), M = N.find(e => e.value === O), [v, D] = l.useState(!1), P = (0, o.useIsNewCommunity)(n, v);
                return (0, i.jsx)("div", {
                    className: I.settingsContent,
                    children: (0, i.jsxs)("form", {
                        onSubmit: p,
                        children: [(0, i.jsx)(s.FormItem, {
                            title: c.default.Messages.EXPIRE_AFTER,
                            className: T.marginTop20,
                            children: (0, i.jsx)(s.SingleSelect, {
                                value: null !== (t = null == U ? void 0 : U.value) && void 0 !== t ? t : S[0].value,
                                options: R,
                                renderOptionLabel: e => {
                                    let t = 0 === e.value;
                                    return (0, u.renderOption)(e, t && L, t && P)
                                },
                                renderOptionValue: e => {
                                    let [t] = e, n = 0 === t.value;
                                    return (0, u.renderOption)(t, n && L, n && P)
                                },
                                onChange: m,
                                optionClassName: I.option,
                                className: I.option,
                                maxVisibleItems: 8
                            })
                        }), C ? (0, i.jsx)(d.default, {
                            guildId: n,
                            permanentInviteSelected: 0 === E,
                            onClick: () => D(!0)
                        }) : (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(s.FormItem, {
                                title: c.default.Messages.MAX_NUMBER_OF_USES,
                                className: a(T.marginTop20, T.marginBottom4),
                                children: (0, i.jsx)(s.SingleSelect, {
                                    value: null == M ? void 0 : M.value,
                                    options: N,
                                    onChange: h
                                })
                            }), (0, i.jsx)(f, {
                                temporary: A,
                                shouldHide: C || r,
                                onToggleTemporary: g
                            })]
                        })]
                    })
                })
            }
        },
        339485: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("819855"),
                a = n("77078"),
                s = n("272091"),
                o = n("782340");

            function u(e) {
                let {
                    guildId: t,
                    maxAge: n,
                    onConfirm: u,
                    onDismiss: d,
                    theme: E
                } = e, _ = (0, s.default)(t, 0 === n);
                return (0, i.jsxs)(l.Fragment, {
                    children: [(0, i.jsx)(a.Button, {
                        onClick: u,
                        disabled: _,
                        children: o.default.Messages.GENERATE_A_NEW_LINK
                    }), (0, i.jsx)(a.Button, {
                        look: a.Button.Looks.LINK,
                        color: (0, r.isThemeLight)(E) ? a.Button.Colors.PRIMARY : a.Button.Colors.WHITE,
                        onClick: d,
                        children: o.default.Messages.CANCEL
                    })]
                })
            }
        },
        474592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                InstantInviteSettingsPage: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                r = n.n(l),
                a = n("77078"),
                s = n("841098"),
                o = n("825691"),
                u = n("339485"),
                d = n("782340"),
                E = n("435808"),
                _ = n("926622");
            let c = e => {
                let {
                    handleDone: t,
                    headerId: n,
                    modalState: l,
                    shouldHideTemporaryInviteToggle: c,
                    onGenerateNewLink: I,
                    onToggleTemporary: T,
                    onSelectMaxAge: S,
                    onSelectMaxUses: f,
                    guild: N
                } = e, O = (0, s.default)(), {
                    maxAge: A,
                    maxUses: p,
                    temporary: g
                } = l;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(a.ModalHeader, {
                        children: [(0, i.jsx)(a.ModalCloseButton, {
                            className: E.closeButton,
                            onClick: t
                        }), (0, i.jsx)("div", {
                            className: E.headerContainer,
                            children: (0, i.jsx)(a.FormTitle, {
                                id: n,
                                tag: "h2",
                                className: r(_.marginReset, E.headerCloseButtonSpacing, E.headerText),
                                children: d.default.Messages.INVITE_SETTINGS_TITLE
                            })
                        })]
                    }), (0, i.jsx)(o.default, {
                        guildId: N.id,
                        shouldHideTemporaryInviteToggle: c,
                        maxAge: A,
                        maxUses: p,
                        temporary: g,
                        onToggleTemporary: T,
                        onSelectMaxAge: S,
                        onSelectMaxUses: f,
                        onGenerateNewLink: I
                    }), (0, i.jsx)(a.ModalFooter, {
                        className: E.settingsFooter,
                        children: (0, i.jsx)(u.default, {
                            guildId: null == N ? void 0 : N.id,
                            maxAge: A,
                            theme: O,
                            onConfirm: () => {
                                I(), t()
                            },
                            onDismiss: t
                        })
                    })]
                })
            }
        },
        470259: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                INVITE_ROW_HEIGHT: function() {
                    return A
                },
                InviteRow: function() {
                    return p
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("819855"),
                a = n("77078"),
                s = n("148387"),
                o = n("843962"),
                u = n("679653"),
                d = n("161778"),
                E = n("305961"),
                _ = n("705955"),
                c = n("27618"),
                I = n("697218"),
                T = n("315102"),
                S = n("159885"),
                f = n("158998"),
                N = n("782340"),
                O = n("435808");
            let A = 44;
            class p extends l.Component {
                shouldComponentUpdate(e, t) {
                    return this.state.sending !== t.sending || this.state.invited !== t.invited || this.state.hovered !== t.hovered || this.props.user !== e.user || this.props.channel !== e.channel
                }
                renderUserOrChannel() {
                    let e, t, n;
                    let {
                        user: l,
                        channel: r
                    } = this.props;
                    if (null != l) t = l.getAvatarURL(null == r ? void 0 : r.guild_id, 32), n = f.default.getName(l);
                    else if (null != r && (t = (0, o.getChannelIconURL)(r), n = (0, u.computeChannelName)(r, I.default, c.default), null == t && null != r.guild_id)) {
                        let n = E.default.getGuild(r.guild_id);
                        null != n && (null != n.icon ? t = T.default.getGuildIconURL({
                            id: r.guild_id,
                            icon: n.icon,
                            size: 32
                        }) : e = (0, S.getAcronym)(n.name))
                    }
                    if (null == t || null == n) return null != e ? (0, i.jsx)("div", {
                        className: O.acronym,
                        "aria-hidden": !0,
                        children: e
                    }) : null;
                    return (0, i.jsx)(a.Avatar, {
                        src: t,
                        "aria-label": n,
                        size: a.AvatarSizes.SIZE_32,
                        className: O.inviteRowAvatar
                    })
                }
                render() {
                    let e;
                    let {
                        user: t,
                        channel: n
                    } = this.props, {
                        sending: l,
                        invited: s,
                        hovered: o
                    } = this.state;
                    return e = s ? (0, i.jsx)(a.Button, {
                        look: a.Button.Looks.LINK,
                        size: a.Button.Sizes.SMALL,
                        disabled: !0,
                        color: (0, r.isThemeDark)(d.default.theme) ? a.Button.Colors.WHITE : a.Button.Colors.BLACK,
                        children: N.default.Messages.INVITE_FRIEND_MODAL_SENT
                    }) : (0, i.jsx)(a.Button, {
                        color: a.Button.Colors.GREEN,
                        look: o ? a.Button.Looks.FILLED : a.Button.Looks.OUTLINED,
                        className: O.inviteRowButton,
                        size: a.Button.Sizes.SMALL,
                        submitting: l,
                        onClick: this.handleClickInvite,
                        children: N.default.Messages.INVITE_FRIEND_MODAL_INVITE
                    }), (0, i.jsxs)("div", {
                        className: O.inviteRow,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: [(0, i.jsxs)("div", {
                            className: O.inviteRowInfo,
                            children: [this.renderUserOrChannel(), (0, i.jsxs)("div", {
                                className: O.inviteRowName,
                                children: [f.default.getName(t), null != n ? (0, u.computeChannelName)(n, I.default, c.default, !0) : null]
                            })]
                        }), e]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        sending: !1,
                        invited: !1,
                        hovered: !1
                    }, this.handleMouseEnter = () => {
                        this.setState({
                            hovered: !0
                        })
                    }, this.handleMouseLeave = () => {
                        this.setState({
                            hovered: !1
                        })
                    }, this.getSuggestedProps = () => {
                        var e;
                        let {
                            row: t
                        } = this.props;
                        return null !== (e = null != t ? _.default.getSelectedInviteMetadata(t) : null) && void 0 !== e ? e : null
                    }, this.handleClickInvite = () => {
                        let {
                            user: e,
                            channel: t,
                            inviteKey: n,
                            location: i
                        } = this.props;
                        null != n && (null != t ? (this.setState({
                            sending: !0
                        }), s.default.enqueue({
                            type: s.InvitePropertiesType.GROUP_DM,
                            channel: t,
                            inviteKey: n,
                            location: i,
                            suggested: this.getSuggestedProps()
                        }, e => {
                            this.setState({
                                sending: !1,
                                invited: e
                            })
                        })) : null != e && (this.setState({
                            sending: !0
                        }), s.default.enqueue({
                            type: s.InvitePropertiesType.USER,
                            user: e,
                            inviteKey: n,
                            location: i,
                            suggested: this.getSuggestedProps()
                        }, e => {
                            this.setState({
                                sending: !1,
                                invited: e
                            })
                        })))
                    }
                }
            }
        },
        849366: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("65597"),
                l = n("708730"),
                r = n("305961"),
                a = n("354023"),
                s = n("49111");

            function o(e) {
                let t = (0, i.default)([r.default], () => r.default.getGuild(e), [e]),
                    n = (0, l.useIsInGrowingFriendGuildCommunityUpsellExperiment)(e),
                    o = a.default.getMaxAgeOptions;
                return !n || (null == t ? void 0 : t.hasFeature(s.GuildFeatures.COMMUNITY)) ? o.filter(e => (null == e ? void 0 : e.value) !== a.default.INVITE_OPTIONS_30_DAYS.value) : o
            }
        },
        252931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInventoryGuildPacksUserExperimentConfig: function() {
                    return d
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return E
                },
                useInventoryGuildSettingsExperiment: function() {
                    return c
                }
            });
            var i = n("65597"),
                l = n("862205"),
                r = n("697218"),
                a = n("719923"),
                s = n("782340");
            let o = (0, l.createExperiment)({
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
                    } = n, s = a.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: r,
                        collectEnabled: s ? i : r
                    }
                },
                d = e => {
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
                        config: o.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: n
                        })
                    })
                },
                E = function() {
                    var e;
                    let {
                        expressionSourceGuild: t,
                        autoTrackExposure: n = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        expressionSourceGuild: void 0,
                        autoTrackExposure: !0
                    }, l = (0, i.default)([r.default], () => r.default.getCurrentUser()), a = o.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: s,
                        showTryPacksModalAndV2Copy: d,
                        collectEnabled: E
                    } = u({
                        user: l,
                        config: a
                    }), _ = s && E && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: s,
                        collectEnabled: _,
                        showTryPacksModalAndV2Copy: d
                    }
                },
                _ = (0, l.createExperiment)({
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
                            getNewSettingsDescription: () => s.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => s.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => s.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }]
                }),
                c = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = _.useExperiment({
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
        45395: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078"),
                r = {
                    open() {
                        (0, l.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("79536").then(n.bind(n, "79536"));
                            return t => (0, i.jsx)(e, {
                                ...t
                            })
                        })
                    }
                }
        },
        846325: function(e, t, n) {
            "use strict";
            var i, l;
            n.r(t), n.d(t, {
                MAX_LENGTH_SOUND_NAME: function() {
                    return r
                },
                MAX_SOUND_LENGTH_SECONDS: function() {
                    return a
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return s
                },
                SoundboardWheelSize: function() {
                    return o
                },
                DEFAULT_KEYBIND: function() {
                    return u
                },
                EMPTY_SOUND_LIST: function() {
                    return d
                },
                CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: function() {
                    return E
                }
            });
            let r = 32,
                a = 5,
                s = "DEFAULT";
            (l = i || (i = {}))[l.SUCCESS = 0] = "SUCCESS", l[l.INTERRUPTED = 1] = "INTERRUPTED", i.SUCCESS, i.INTERRUPTED;
            let o = {
                    width: 424,
                    height: 424,
                    padding: 100
                },
                u = "ctrl+`",
                d = [],
                E = "0"
        },
        235004: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var i, l, r = n("917351"),
                a = n.n(r),
                s = n("446674"),
                o = n("913144"),
                u = n("845579"),
                d = n("374363"),
                E = n("697218"),
                _ = n("599110"),
                c = n("829536"),
                I = n("846325"),
                T = n("49111"),
                S = n("397336");
            (i = l || (l = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
            let f = new Map,
                N = new Map,
                O = new Set,
                A = l.NOT_FETCHED,
                p = l.NOT_FETCHED,
                g = new Set,
                m = new Map,
                h = !1;

            function C(e) {
                let {
                    sound: t
                } = e, n = f.get(t.guildId), i = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != i && -1 !== i ? (n[i] = t, f.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), f.set(t.guildId, [...n]))
            }
            let L = a.debounce(e => {
                _.default.track(T.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, c.amplitudeToPerceptual)(e))
                }), u.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function R(e) {
                var t, n;
                let i = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(i)) t.soundboardMuted ? O.add(e) : O.delete(e);
                for (let e of O.keys()) null == i[e] && O.delete(e)
            }
            class U extends s.default.Store {
                initialize() {
                    this.waitFor(d.default), R(d.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(f),
                        favoritedSoundIds: Array.from(g),
                        localSoundboardMutes: Array.from(O)
                    }
                }
                getSounds() {
                    return f
                }
                getSoundsForGuild(e) {
                    return f.get(e)
                }
                getSound(e, t) {
                    var n;
                    let i = null !== (n = f.get(e)) && void 0 !== n ? n : [];
                    return i.find(e => e.soundId === t)
                }
                getSoundById(e) {
                    let t = Array.from(f.values()).flat();
                    return t.find(t => t.soundId === e)
                }
                isFetchingSounds() {
                    return p === l.FETCHING
                }
                isFetchingDefaultSounds() {
                    return A === l.FETCHING
                }
                isFetching() {
                    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
                }
                shouldFetchDefaultSounds() {
                    return A === l.NOT_FETCHED
                }
                hasFetchedDefaultSounds() {
                    return A === l.FETCHED
                }
                isUserPlayingSounds(e) {
                    let t = m.get(e);
                    return null != t && t > 0
                }
                isPlayingSound(e) {
                    return null != N.get(e)
                }
                isFavoriteSound(e) {
                    return g.has(e)
                }
                getFavorites() {
                    return g
                }
                isLocalSoundboardMuted(e) {
                    return O.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return h
                }
                hasFetchedAllSounds() {
                    return p === l.FETCHED && A === l.FETCHED
                }
            }
            U.displayName = "SoundboardStore";
            var M = new U(o.default, {
                LOGOUT: function() {
                    f.clear(), N.clear(), m.clear(), h = !1, p = l.NOT_FETCHED, A = l.NOT_FETCHED
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    p = l.FETCHING
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: C,
                GUILD_SOUNDBOARD_SOUND_UPDATE: C,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    let {
                        soundId: t,
                        guildId: n
                    } = e;
                    f.delete(t);
                    let i = f.get(n),
                        l = null == i ? void 0 : i.findIndex(e => e.soundId === t);
                    null != i && null != l && !(l < 0) && (i.splice(l, 1), f.set(n, [...i]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, i;
                    let {
                        soundId: l,
                        userId: r
                    } = e, a = (null !== (n = N.get(l)) && void 0 !== n ? n : 0) + 1, s = (null !== (i = m.get(r)) && void 0 !== i ? i : 0) + 1;
                    N.set(l, a), m.set(r, s), r !== (null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (h = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: i,
                        userId: l
                    } = e, r = (null !== (t = N.get(i)) && void 0 !== t ? t : 0) - 1, a = (null !== (n = m.get(l)) && void 0 !== n ? n : 0) - 1;
                    r <= 0 ? N.delete(i) : N.set(i, r), a <= 0 ? m.delete(l) : m.set(l, a)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    L(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    N.clear(), m.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e, {
                        type: n,
                        proto: i
                    } = t;
                    if (n === S.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var l, r;
                        g = new Set(null !== (r = null == i ? void 0 : null === (l = i.favoriteSoundboardSounds) || void 0 === l ? void 0 : l.soundIds) && void 0 !== r ? r : [])
                    } else n === S.UserSettingsTypes.PRELOADED_USER_SETTINGS && R(i)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    A = l.FETCHING
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    f.set(I.DEFAULT_SOUND_GUILD_ID, t), A = l.FETCHED
                },
                SOUNDBOARD_SOUNDS_RECEIVED: function(e) {
                    let {
                        updates: t
                    } = e;
                    t.forEach(e => {
                        let {
                            guildId: t,
                            sounds: n
                        } = e;
                        f.set(t, n)
                    }), p = l.FETCHED
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    f.delete(t.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
                    let {
                        userId: t
                    } = e;
                    O.has(t) ? O.delete(t) : O.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        soundboardStoreState: t
                    } = e;
                    f = new Map(Object.entries(t.soundboardSounds)), g = new Set(t.favoritedSoundIds), O = new Set(t.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        soundboardSounds: n
                    } = e;
                    f.set(t, n)
                }
            })
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
                    return d
                },
                isSendableSticker: function() {
                    return E
                }
            });
            var i, l, r = n("991170"),
                a = n("719923"),
                s = n("4233"),
                o = n("24373"),
                u = n("49111");
            (i = l || (l = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let d = (e, t, n) => {
                    if (null == t) return l.NONSENDABLE;
                    let i = a.default.canUseStickersEverywhere(t);
                    if ((0, o.isStandardSticker)(e)) {
                        let {
                            freeStickersEnabled: e
                        } = s.default.getCurrentConfig({
                            location: "c036ff_1"
                        }, {
                            autoTrackExposure: !1
                        });
                        return i || e ? l.SENDABLE : l.SENDABLE_WITH_PREMIUM
                    }
                    if ((0, o.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? l.SENDABLE : null == n.guild_id || r.default.can({
                        permission: u.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? i ? l.SENDABLE : l.SENDABLE_WITH_PREMIUM : l.NONSENDABLE : l.SENDABLE_WITH_BOOSTED_GUILD;
                    return l.NONSENDABLE
                },
                E = (e, t, n) => d(e, t, n) === l.SENDABLE
        },
        865372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var i = n("917351"),
                l = n.n(i),
                r = n("446674"),
                a = n("913144"),
                s = n("80507"),
                o = n("374363"),
                u = n("364685"),
                d = n("49111"),
                E = n("397336");
            let _ = {
                pendingUsages: []
            };
            d.Durations.DAY;
            let c = new s.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => u.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                I = () => {
                    u.default.isLoaded && c.compute()
                },
                T = () => {
                    I()
                };

            function S() {
                var e;
                let t = null === (e = o.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                c.overwriteHistory(l.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), _.pendingUsages)
            }
            class f extends r.default.PersistedStore {
                initialize(e) {
                    this.waitFor(u.default), null != e && (_ = e), this.syncWith([u.default], T), this.syncWith([o.default], S)
                }
                getState() {
                    return _
                }
                hasPendingUsage() {
                    return _.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return c
                }
            }
            f.displayName = "StickersPersistedStore", f.persistKey = "StickersPersistedStoreV2";
            var N = new f(a.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        c.track(e), _.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), I()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== E.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    _.pendingUsages = []
                }
            })
        },
        364685: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            });
            var i, l, r = n("102053"),
                a = n("446674"),
                s = n("913144"),
                o = n("802493"),
                u = n("595525"),
                d = n("212084"),
                E = n("867805"),
                _ = n("267567"),
                c = n("813006"),
                I = n("778689"),
                T = n("305961"),
                S = n("161585"),
                f = n("24373"),
                N = n("49111");
            (i = l || (l = {}))[i.Unloaded = 0] = "Unloaded", i[i.MaybeLoaded = 1] = "MaybeLoaded", i[i.Loaded = 2] = "Loaded";
            let O = 2,
                A = new Map,
                p = new Map,
                g = null,
                m = [],
                h = null,
                C = !1,
                L = new Map,
                R = (e, t) => {
                    L = new Map(L.set(e, t))
                },
                U = 1e3 * N.Durations.HOUR,
                M = () => {
                    if (0 !== O) return;
                    let e = o.default.database();
                    if (null == e) return;
                    O = 2;
                    let t = (0, u.tryLoadOrResetCacheGateway)("StickerStore.loadSavedGuildStickers", () => r.default.time("\uD83D\uDCBE", "loadSavedGuildStickers", () => d.default.getSync(e)));
                    if (null != t) {
                        for (let [e, n] of t)
                            if (I.default.isMember(e) && !L.has(e)) {
                                for (let t of n) v(t, !0, T.default.getGuild(e));
                                R(e, n)
                            }
                    }
                },
                v = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    p.set(e.id, e), t && D(e, n)
                },
                D = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == g) return;
                    let {
                        tags: n
                    } = e, i = {
                        type: S.StickerMetadataTypes.STICKER_NAME,
                        value: e.name.trim().toLocaleLowerCase()
                    };
                    if ((0, f.isStandardSticker)(e)) {
                        let t = m.find(t => t.id === e.pack_id),
                            l = [i, ...(null != n ? n : "").split(",").map(e => ({
                                type: S.StickerMetadataTypes.TAG,
                                value: e.trim().toLocaleLowerCase()
                            }))];
                        null != t && l.push({
                            type: S.StickerMetadataTypes.PACK_NAME,
                            value: t.name
                        }), g.set(e.id, l)
                    } else if ((0, f.isGuildSticker)(e) && null != n) {
                        let l = E.default.getByName(n),
                            r = {
                                type: S.StickerMetadataTypes.TAG,
                                value: n.trim().toLocaleLowerCase()
                            },
                            a = [i, r];
                        if (null != t) {
                            let e = (t instanceof(0, c.default) ? t.name : t.properties.name).trim().toLocaleLowerCase();
                            null != e && "" !== e && a.push({
                                type: S.StickerMetadataTypes.GUILD_NAME,
                                value: e
                            })
                        }
                        if (null == l) {
                            g.set(e.id, a);
                            return
                        }
                        a.push({
                            type: S.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: l.surrogates
                        }), l.forEachDiversity(e => a.push({
                            type: S.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: e.surrogates
                        })), g.set(e.id, a)
                    }
                },
                P = (e, t, n) => {
                    A.set(e.id, e);
                    let i = [...m];
                    if (t) {
                        let t = i.findIndex(t => t.id === e.id); - 1 !== t ? i[t] = e : i.push(e), m = i
                    }(t || n) && e.stickers.forEach(e => v(e))
                },
                G = () => {
                    L.forEach((e, t) => {
                        let n = T.default.getGuild(t);
                        null != n && e.forEach(e => D(e, n))
                    }), m.forEach(e => {
                        e.stickers.forEach(e => D(e))
                    })
                };

            function y(e) {
                null != e.stickers && (e.stickers.forEach(t => v(t, !0, e)), R(e.id, e.stickers))
            }
            class F extends a.default.Store {
                initialize() {
                    this.waitFor(o.default, I.default, T.default)
                }
                get isLoaded() {
                    return 0 !== O
                }
                get stickerMetadata() {
                    return M(), null == g && (g = new Map, G()), g
                }
                get hasLoadedStickerPacks() {
                    return null != h && h + U > Date.now()
                }
                get isFetchingStickerPacks() {
                    return C
                }
                getStickerById(e) {
                    return !p.has(e) && M(), p.get(e)
                }
                getStickerPack(e) {
                    return A.get(e)
                }
                getPremiumPacks() {
                    return m
                }
                isPremiumPack(e) {
                    return m.some(t => t.id === e)
                }
                getRawStickersByGuild() {
                    return L
                }
                getAllStickersIterator() {
                    return M(), p.values()
                }
                getAllGuildStickers() {
                    return M(), L
                }
                getStickersByGuildId(e) {
                    return M(), L.get(e)
                }
            }
            F.displayName = "StickersStore";
            var w = new F(s.default, {
                BACKGROUND_SYNC: () => {
                    g = null, p = new Map, L = new Map, O = 0
                },
                CONNECTION_OPEN: e => {
                    let {
                        guilds: t
                    } = e;
                    g = null, p = new Map, L = new Map, t.forEach(y), O = t.every(e => null != e.stickers) ? 1 : 0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    !_.default.isLurking(t.id) && (y(t), 1 === O && null == t.stickers && null != t.stickerUpdates && (O = 0))
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, i = null !== (t = L.get(n.id)) && void 0 !== t ? t : [];
                    i.forEach(e => {
                        null != g && g.delete(e.id), p.delete(e.id)
                    }), L.delete(n.id), L = new Map(L)
                },
                LOGOUT: () => {
                    O = 0, m = [], p.clear(), A.clear(), g = null, L.clear(), L = new Map(L), C = !1, h = null
                },
                STICKER_PACKS_FETCH_START: () => {
                    C = !0
                },
                STICKER_PACKS_FETCH_SUCCESS: e => {
                    let {
                        packs: t
                    } = e;
                    t.forEach(e => P(e, !0)), h = Date.now(), C = !1
                },
                STICKER_PACK_FETCH_SUCCESS: e => {
                    let {
                        pack: t,
                        ingestStickers: n
                    } = e;
                    P(t, !1, n)
                },
                GUILD_STICKERS_FETCH_SUCCESS: e => {
                    let {
                        guildId: t,
                        stickers: n
                    } = e;
                    n.forEach(e => v(e)), R(t, n)
                },
                GUILD_STICKERS_CREATE_SUCCESS: e => {
                    var t, n;
                    let {
                        guildId: i,
                        sticker: l
                    } = e, r = null !== (t = L.get(i)) && void 0 !== t ? t : [];
                    R(i, [...null !== (n = r.filter(e => e.id !== l.id)) && void 0 !== n ? n : [], l]), v(l)
                },
                STICKER_FETCH_SUCCESS: e => {
                    let {
                        sticker: t
                    } = e;
                    v(t, !1)
                },
                GUILD_STICKERS_UPDATE: e => {
                    var t;
                    let {
                        guildId: n,
                        stickers: i
                    } = e, l = e => {
                        let t;
                        let n = p.get(e.id);
                        return null != n && (0, f.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                            ...e,
                            user: t
                        }
                    }, r = null !== (t = L.get(n)) && void 0 !== t ? t : [], a = r.filter(e => null == i.find(t => t.id === e.id));
                    a.forEach(e => {
                        p.delete(e.id), null != g && g.delete(e.id)
                    });
                    let s = i.map(e => l(e));
                    s.forEach(e => v(e)), R(n, s)
                }
            })
        },
        917219: function(e, t, n) {
            "use strict";
            var i, l, r, a;
            n.r(t), n.d(t, {
                VideoFilterType: function() {
                    return i
                },
                DefaultVideoBackground: function() {
                    return l
                },
                ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: function() {
                    return s
                },
                DEFAULT_VIDEO_BACKGROUND_SORT: function() {
                    return o
                },
                BLUR_BACKGROUND_OPTION: function() {
                    return u
                },
                BACKGROUND_REPLACEMENT_SIZE: function() {
                    return d
                },
                MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                    return E
                }
            }), (r = i || (i = {}))[r.BACKGROUND = 0] = "BACKGROUND", (a = l || (l = {}))[a.OPTION_1 = 0] = "OPTION_1", a[a.OPTION_2 = 1] = "OPTION_2", a[a.OPTION_3 = 2] = "OPTION_3", a[a.OPTION_4 = 3] = "OPTION_4", a[a.OPTION_7 = 7] = "OPTION_7", a[a.OPTION_8 = 8] = "OPTION_8", a[a.OPTION_9 = 9] = "OPTION_9", a[a.OPTION_10 = 10] = "OPTION_10";
            let s = [l.OPTION_7, l.OPTION_8, l.OPTION_9, l.OPTION_10],
                o = [l.OPTION_7, l.OPTION_8, l.OPTION_9, l.OPTION_10, l.OPTION_1, l.OPTION_2, l.OPTION_3, l.OPTION_4].reduce((e, t, n) => ({
                    ...e,
                    [t]: n
                }), {}),
                u = "blur",
                d = {
                    width: 1280,
                    height: 720
                },
                E = 10485760
        },
        450205: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("666038");
            class l extends i.default {
                toString() {
                    return this.name
                }
                constructor(e) {
                    super(), this.id = e.id, this.type = e.type, this.name = e.name, this.revoked = e.revoked || !1, this.integrations = e.integrations || [], this.visibility = e.visibility || 0, this.friendSync = e.friend_sync || !1, this.showActivity = e.show_activity || !1, this.verified = e.verified || !1, this.accessToken = e.access_token || null, this.twoWayLink = e.two_way_link || !1, this.metadata = e.metadata || null, this.metadataVisibility = e.metadata_visibility || 0
                }
            }
        },
        522308: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("666038");
            class l extends i.default {
                static createFromServer(e, t) {
                    return new l({
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
            var r = l
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("866227"),
                l = n.n(i),
                r = n("666038");
            class a extends r.default {
                static createFromServer(e) {
                    var t;
                    return new a({
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
        47319: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var i = n("446674"),
                l = n("913144"),
                r = n("619340"),
                a = n("376556"),
                s = n("450205"),
                o = n("813006"),
                u = n("49111");
            let d = new Set([u.PlatformTypes.CONTACTS]),
                E = !0,
                _ = [],
                c = [],
                I = {},
                T = {},
                S = e => {
                    _ = e.filter(e => !d.has(e.type) && a.default.isSupported(e.type)), c = e.filter(e => d.has(e.type)), E = !1
                };
            class f extends i.default.Store {
                isJoining(e) {
                    return I[e] || !1
                }
                isFetching() {
                    return E
                }
                getAccounts() {
                    return _
                }
                getLocalAccounts() {
                    return c
                }
                getAccount(e, t) {
                    return _.find(n => (null == e || n.id === e) && n.type === t)
                }
                getLocalAccount(e) {
                    return c.find(t => t.type === e)
                }
                isSuggestedAccountType(e) {
                    return T[e] || !1
                }
            }
            f.displayName = "ConnectedAccountsStore";
            var N = new f(l.default, {
                CONNECTION_OPEN: function(e) {
                    let t = e.connectedAccounts.map(e => new s.default(e));
                    S(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        let t = e.accounts.map(e => new s.default({
                            ...e,
                            integrations: e.integrations.map(e => ({
                                ...e,
                                guild: new o.default(e.guild)
                            }))
                        }));
                        S(t)
                    } else r.default.fetch()
                },
                USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
                    I[e.integrationId] = e.joining
                },
                USER_CONNECTION_UPDATE: function(e) {
                    let {
                        platformType: t,
                        id: n,
                        revoked: i,
                        accessToken: l
                    } = e, r = _.find(e => e.id === n && e.type === t);
                    if (null == r) return !1;
                    null != i && (r.revoked = i), null != l && (r.accessToken = l)
                }
            })
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("446674"),
                l = n("913144"),
                r = n("9294"),
                a = n("49111");
            let s = {},
                o = {},
                u = {};

            function d(e, t) {
                var n;
                e = null != e ? e : "";
                let i = (0, r.parseExtraDataFromInviteKey)(e),
                    l = s[e],
                    o = null != l ? {
                        state: a.InviteStates.RESOLVING,
                        ...l
                    } : {
                        state: a.InviteStates.RESOLVING,
                        code: i.baseCode
                    };
                t(o), s = {
                    ...s,
                    [e]: o
                }, (null === (n = o.guild) || void 0 === n ? void 0 : n.id) != null && (u = {
                    ...u,
                    [o.guild.id]: e
                })
            }

            function E(e) {
                return d(e.code, t => {
                    t.state = "banned" in e && e.banned ? a.InviteStates.BANNED : a.InviteStates.EXPIRED
                })
            }
            class _ extends i.default.Store {
                getInvite(e) {
                    return s[e]
                }
                getInviteError(e) {
                    return o[e]
                }
                getInvites() {
                    return s
                }
                getInviteKeyForGuildId(e) {
                    return u[e]
                }
            }
            _.displayName = "InviteStore";
            var c = new _(l.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, r.parseExtraDataFromInviteKey)(t);
                    s = {
                        ...s,
                        [t]: {
                            code: n.baseCode,
                            state: a.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return d(e.code, t => {
                        var n, i;
                        t.state = a.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: E,
                INSTANT_INVITE_REVOKE_SUCCESS: E,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        t.state = a.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => d(e.code, e => {
                        e.state = a.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        var n, i;
                        t.state = a.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return d(e.code, e => {
                        e.state = a.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return d(e.code, t => {
                        t.state = a.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return o[e.code] = e.error, d(e.code, e => {
                        e.state = a.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return d(e.code, e => {
                        e.state = a.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = a.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = a.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        705955: function(e, t, n) {
            "use strict";
            let i, l, r, a, s, o, u;
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var d = n("446674"),
                E = n("913144"),
                _ = n("116460"),
                c = n("449008"),
                I = n("354023"),
                T = n("42203"),
                S = n("27618"),
                f = n("843823"),
                N = n("49111"),
                O = n("91366");
            let A = new Set,
                p = [],
                g = new Map;

            function m(e) {
                let t = new Set,
                    n = null == a || u === O.InviteTargetTypes.EMBEDDED_APPLICATION ? void 0 : a.id,
                    i = (0, I.getMostRecentDMedUser)(A, n);
                for (let e of (null != i && !S.default.isBlocked(i.id) && t.add(i.id), f.default.getUserAffinitiesUserIds())) t.add(e);
                let l = new Set;
                if (u === O.InviteTargetTypes.EMBEDDED_APPLICATION) {
                    let e = _.default.getChannelHistory();
                    e.map(e => T.default.getChannel(e)).filter(c.isNotNullish).filter(e => e.type === N.ChannelTypes.GUILD_TEXT).slice(0, 3).forEach(e => l.add(e.id))
                }
                return (0, I.generateRowsForQuery)({
                    query: e,
                    omitUserIds: A,
                    suggestedUserIds: t,
                    maxRowsWithoutQuery: 100,
                    omitGuildId: n,
                    suggestedChannelIds: l,
                    inviteTargetType: u
                })
            }

            function h(e) {
                p = e, g = new Map, e.forEach((e, t) => {
                    g.set(e, {
                        index: t
                    })
                })
            }
            class C extends d.default.Store {
                initialize() {
                    this.waitFor(S.default, f.default)
                }
                getInviteSuggestionRows() {
                    return p
                }
                getTotalSuggestionsCount() {
                    return l
                }
                getInitialCounts() {
                    return i
                }
                getSelectedInviteMetadata(e) {
                    let t = g.get(e),
                        n = f.default.getUserAffinitiesUserIds();
                    return null != t ? {
                        rowNum: t.index,
                        isAffinitySuggestion: e.isSuggested,
                        numTotal: p.length,
                        numAffinityConnections: n.size,
                        isFiltered: r
                    } : null
                }
            }
            C.displayName = "InviteSuggestionsStore";
            var L = new C(E.default, {
                LOAD_INVITE_SUGGESTIONS: function(e) {
                    let {
                        omitUserIds: t,
                        guild: n,
                        channel: d,
                        applicationId: E,
                        inviteTargetType: _
                    } = e;
                    a = null != d ? n : null, s = d, o = E, u = _;
                    let c = S.default.getRelationships(),
                        T = Object.keys(c).filter(e => c[e] === N.RelationshipTypes.BLOCKED),
                        f = (0, I.getUsersAlreadyJoined)({
                            channel: s,
                            applicationId: o,
                            inviteTargetType: _
                        });
                    A = new Set([...t, ...T, ...f]), r = !1;
                    let {
                        rows: O,
                        counts: g
                    } = m("");
                    h(O), i = g, l = p.length
                },
                INVITE_SUGGESTIONS_SEARCH: function(e) {
                    let {
                        query: t
                    } = e;
                    r = "" !== t;
                    let {
                        rows: n
                    } = m(t);
                    h(n)
                }
            })
        },
        778588: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                l = n("913144");
            let r = [];

            function a() {
                r = []
            }
            class s extends i.default.Store {
                hasLayers() {
                    return r.length > 0
                }
                getLayers() {
                    return r
                }
            }
            s.displayName = "LayerStore";
            var o = new s(l.default, {
                LAYER_PUSH: function(e) {
                    let {
                        component: t
                    } = e;
                    if (r.indexOf(t) >= 0) return !1;
                    r = [...r, t]
                },
                LAYER_POP: function() {
                    if (0 === r.length) return !1;
                    r = r.slice(0, -1)
                },
                LAYER_POP_ALL: a,
                LOGOUT: a,
                NOTIFICATION_CLICK: a
            })
        },
        191542: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var l = n("446674"),
                r = n("872717"),
                a = n("913144"),
                s = n("271938"),
                o = n("401848"),
                u = n("49111"),
                d = n("724210");
            let E = {},
                _ = Object.freeze({});

            function c(e) {
                var t;
                return null !== (t = E[e]) && void 0 !== t ? t : _
            }

            function I(e) {
                var t, n;
                let {
                    channelId: i,
                    userId: l
                } = e, r = {
                    ...c(i)
                };
                clearTimeout(r[l]), r[l] = (t = i, n = l, setTimeout(() => {
                    a.default.dispatch({
                        type: "TYPING_STOP",
                        channelId: t,
                        userId: n
                    })
                }, 1e4)), E[i] = r
            }

            function T(e) {
                let {
                    channelId: t,
                    userId: n
                } = e, i = E[t];
                if (null == i || null == i[n]) return !1;
                let l = {
                    ...i
                };
                clearTimeout(l[n]), delete l[n], E[t] = l
            }

            function S() {
                E = {}
            }
            class f extends l.default.Store {
                getTypingUsers(e) {
                    return c(e)
                }
                isTyping(e, t) {
                    return null != c(e)[t]
                }
            }
            f.displayName = "TypingStore";
            var N = new f(a.default, {
                TYPING_START: I,
                TYPING_STOP: T,
                TYPING_START_LOCAL: function(e) {
                    let {
                        channelId: t
                    } = e, n = s.default.getId();
                    if (null == n || t === d.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
                    null != i && i.channelId !== t && (null != i.timeout && clearTimeout(i.timeout), i = null);
                    let l = Date.now(),
                        E = 8e3;
                    if (null != i && (null != i.timeout || i.prevSend + E > l)) return !1;
                    let T = null == i || i.prevSend > l - 2 * E ? 1500 : 0,
                        S = setTimeout(() => {
                            if (null != i && i.channelId === t && n === s.default.getId() && null != i.timeout) i.timeout = null, !(function(e) {
                                let t = c(e);
                                return t === _ ? 0 : Object.keys(t).length
                            }(t) > 5) && r.default.post({
                                url: u.Endpoints.TYPING(t),
                                oldFormErrors: !0
                            }).then(e => {
                                if (200 === e.status) {
                                    var n, i;
                                    let l = null !== (n = e.body.message_send_cooldown_ms) && void 0 !== n ? n : 0,
                                        r = null !== (i = e.body.thread_create_cooldown_ms) && void 0 !== i ? i : 0;
                                    l > 0 && a.default.dispatch({
                                        type: "SLOWMODE_SET_COOLDOWN",
                                        channelId: t,
                                        slowmodeType: o.SlowmodeType.SendMessage,
                                        cooldownMs: l
                                    }), r > 0 && a.default.dispatch({
                                        type: "SLOWMODE_SET_COOLDOWN",
                                        channelId: t,
                                        slowmodeType: o.SlowmodeType.CreateThread,
                                        cooldownMs: r
                                    })
                                }
                            })
                        }, T);
                    return i = {
                        channelId: t,
                        timeout: S,
                        prevSend: l
                    }, I({
                        channelId: t,
                        userId: n
                    })
                },
                TYPING_STOP_LOCAL: function(e) {
                    let {
                        channelId: t
                    } = e, n = s.default.getId();
                    return null != n && null != i && i.channelId === t && null != i.timeout && (clearTimeout(i.timeout), i = null, T({
                        channelId: t,
                        userId: n
                    }))
                },
                CONNECTION_OPEN: S,
                OVERLAY_INITIALIZE: S,
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: {
                            author: n
                        },
                        optimistic: l
                    } = e;
                    return l && ! function(e) {
                        if (null == i || i.channelId !== e) return;
                        null != i.timeout && clearTimeout(i.timeout), i = null
                    }(t), null != n && T({
                        channelId: t,
                        userId: n.id
                    })
                }
            })
        },
        843823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("446674"),
                l = n("913144"),
                r = n("27618");
            let a = !1,
                s = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                o = {
                    ...s
                };

            function u() {
                o.affinityUserIds = new Set(o.userAffinities.map(e => e.user_id).filter(e => !r.default.isBlocked(e)))
            }
            class d extends i.default.PersistedStore {
                initialize(e) {
                    this.waitFor(r.default), null != e && (o.userAffinities = e.userAffinities, o.affinityUserIds = new Set(e.affinityUserIds), o.lastFetched = e.lastFetched), this.syncWith([r.default], u)
                }
                needsRefresh() {
                    return Date.now() - o.lastFetched > 864e5
                }
                getFetching() {
                    return a
                }
                getState() {
                    return o
                }
                getUserAffinities() {
                    return o.userAffinities
                }
                getUserAffinitiesUserIds() {
                    return o.affinityUserIds
                }
            }
            d.displayName = "UserAffinitiesStore", d.persistKey = "UserAffinitiesStore", d.migrations = [e => null];
            var E = new d(l.default, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t;
                    let {
                        affinities: n
                    } = e;
                    o.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [], o.lastFetched = Date.now(), u(), a = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    a = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    a = !1
                },
                LOGOUT: function() {
                    o = {
                        ...s
                    }
                }
            })
        },
        471671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("627445"),
                l = n.n(i),
                r = n("446674"),
                a = n("913144"),
                s = n("816454");
            let o = new Map;

            function u(e) {
                let t = o.get(e);
                return null == t ? (console.warn("Window state not initialized", e), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : t
            }
            class d extends r.default.Store {
                isFocused() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.getMainWindowId)();
                    return u(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return o.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.getMainWindowId)();
                    return u(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.getMainWindowId)();
                    return u(e).windowSize
                }
            }
            d.displayName = "WindowStore";
            let E = new d(a.default, {
                WINDOW_INIT: function(e) {
                    l(!o.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: i,
                        focused: r
                    } = e;
                    return o.set(e.windowId, {
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
                    return t.isElementFullscreen !== e.isElementFullscreen && (o.set(e.windowId, {
                        ...t,
                        isElementFullscreen: e.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(e) {
                    let t = u(e.windowId);
                    return t.focused !== e.focused && (o.set(e.windowId, {
                        ...t,
                        focused: e.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(e) {
                    let t = u(e.windowId);
                    return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (o.set(e.windowId, {
                        ...t,
                        windowSize: {
                            width: e.width,
                            height: e.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(e) {
                    return o.delete(e.windowId), !0
                }
            });
            n.el("599110").then(n.bind(n, "599110")).then(e => {
                let {
                    addExtraAnalyticsDecorator: t
                } = e;
                t(e => {
                    e.client_app_state = E.isFocused() ? "focused" : "unfocused"
                })
            });
            var _ = E
        },
        103603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fit: function() {
                    return u
                },
                zoomFit: function() {
                    return d
                },
                getRatio: function() {
                    return E
                },
                getCoverRatio: function() {
                    return _
                },
                makeCssUrlString: function() {
                    return c
                },
                getPalette: function() {
                    return T
                },
                getPaletteForAvatar: function() {
                    return S
                },
                readFileAsBase64: function() {
                    return N
                },
                dataUriFileSize: function() {
                    return O
                },
                dataUrlToFile: function() {
                    return A
                },
                isPNGAnimated: function() {
                    return p
                }
            });
            var i = n("627445"),
                l = n.n(i),
                r = n("917351"),
                a = n.n(r),
                s = n("48648"),
                o = n.n(s);

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
                    let s = n > l ? l / n : 1;
                    t = Math.max(Math.round(t * s), r), n = Math.max(Math.round(n * s), a)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function d(e, t) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    i = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return u({
                    width: e,
                    height: t,
                    maxWidth: i,
                    maxHeight: n
                })
            }

            function E(e) {
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

            function _(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: l
                } = e;
                return t === n ? 1 : Math.min(Math.max(i / t, l / n), 1)
            }

            function c(e) {
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
                let s = l.getImageData(0, 0, r, a).data,
                    u = function(e, t, n) {
                        let i = [];
                        for (let l = 0, r, a, s, o, u; l < t; l += n) a = e[(r = 4 * l) + 0], s = e[r + 1], o = e[r + 2], (void 0 === (u = e[r + 3]) || u >= 125) && !(a > 250 && s > 250 && o > 250) && i.push([a, s, o]);
                        return i
                    }(s, r * a, n),
                    d = o(u, t);
                return "boolean" == typeof d ? I : d.palette()
            }
            let S = e => f(e),
                f = a.memoize(e => new Promise((t, n) => {
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
            async function A(e, t, n) {
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
            async function p(e) {
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
                    return d
                }
            });
            var r = n("697218"),
                a = n("615931");
            let s = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                i = e.showModal, s = e.updateModalProps, l = n("551042").closeModal
            }

            function o(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: r,
                    modalProps: a = {},
                    hooks: {
                        onEarlyClose: o
                    } = {}
                } = e;
                if (null == i) {
                    null == o || o();
                    return
                }
                let d = i(I, E, a);

                function E() {
                    null == o || o()
                }

                function _(e) {
                    l(d), n(e)
                }

                function c(e) {
                    l(d), r(e)
                }

                function I(e) {
                    return s(d, I, E, {
                        ...a,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: _,
                        reject: c,
                        code: e,
                        mfaCodeHandler: T,
                        isModalOpen: !0
                    })
                }

                function T(e) {
                    let {
                        res: t
                    } = e;
                    s(d, I, E, {
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
                    mfaCodeHandler: r = o,
                    isModalOpen: a = !1,
                    ...s
                } = e;
                return t(null != l ? {
                    code: l
                } : {}).then(n, e => {
                    var l, o;
                    if (l = e, o = a, l.body && 60008 === l.body.code || o && 429 === l.status) return r({
                        promiseFn: t,
                        resolve: n,
                        reject: i,
                        res: e,
                        ...s
                    });
                    i(e)
                })
            }

            function d(e, t) {
                var n, i;
                let {
                    checkEnabled: l = null !== (i = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i,
                    ...s
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, a.resolveThunk)(l) ? o : u)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...s
                    })
                })
            }
        },
        829536: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                perceptualToAmplitude: function() {
                    return i
                },
                amplitudeToPerceptual: function() {
                    return l
                }
            });

            function i(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                return 0 === e ? 0 : (t = e > n ? (e - n) / n * 6 : e / n * 50 - 50, n * Math.pow(10, t / 20))
            }

            function l(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                if (0 === e) return 0;
                let i = 20 * Math.log10(e / n);
                return n * (t = i > 0 ? i / 6 + 1 : (50 + i) / 50)
            }
        },
        833858: function(e, t, n) {
            "use strict";

            function i(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return i
                }
            })
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
        840707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("872717"),
                l = n("599110");

            function r(e, t, n) {
                let {
                    trackedActionData: i,
                    ...r
                } = t, a = {
                    url: r.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(r).then(e => {
                        let n = i.properties;
                        "function" == typeof i.properties && (n = i.properties(e)), (0, l.trackNetworkAction)(i.event, {
                            status_code: e.status,
                            ...a,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, r;
                        let s = i.properties;
                        "function" == typeof i.properties && (s = i.properties(e)), (0, l.trackNetworkAction)(i.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (r = e.body) || void 0 === r ? void 0 : r.message,
                            ...a,
                            ...s
                        }), n(e)
                    })
                })
            }
            var a = {
                get: function(e) {
                    return r(i.default.get, e, "get")
                },
                post: function(e) {
                    return r(i.default.post, e, "post")
                },
                put: function(e) {
                    return r(i.default.put, e, "put")
                },
                patch: function(e) {
                    return r(i.default.patch, e, "patch")
                },
                delete: function(e) {
                    return r(i.default.delete, e, "del")
                }
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return s
                },
                updateModalProps: function() {
                    return o
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

            function s(e, t, n) {
                return (0, l.openModal)(a(e, t, n), {
                    onCloseCallback: t
                })
            }

            function o(e, t, n, i) {
                return (0, l.updateModal)(e, a(t, n, i))
            }
        }
    }
]);
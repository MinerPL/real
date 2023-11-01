(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["47406"], {
        653240: function(e, t, n) {
            "use strict";
            e.exports = n.p + "baa5b6db50bb89d55668.svg"
        },
        540758: function(e, t, n) {
            "use strict";
            e.exports = n.p + "abb37025036befe38e64.svg"
        },
        190389: function(e, t, n) {
            "use strict";
            e.exports = n.p + "10edc9054f6bb1a7de74.svg"
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
                    return s
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

            function s() {
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
                    return s
                },
                updateAddressInfo: function() {
                    return a
                },
                clearError: function() {
                    return o
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

            function s() {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function a(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function o() {
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
        79112: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("872717"),
                l = n("95410"),
                r = n("913144"),
                s = n("211895"),
                a = n("26092"),
                o = n("599110"),
                u = n("315102"),
                _ = n("730622"),
                E = n("49111"),
                c = n("191349"),
                T = n("782340"),
                I = {
                    open() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                openWithoutBackstack: !1
                            };
                        (0, s.default)(e, t, n)
                    },
                    init: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_INIT",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    close() {
                        let e = a.default.onClose;
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), null != e && e()
                    },
                    setSection(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SET_SECTION",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    clearSubsection(e) {
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                            forSection: e
                        })
                    },
                    clearScrollPosition(e) {
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                            forSection: e
                        })
                    },
                    updateAccount(e) {
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                            settings: e
                        })
                    },
                    submitComplete() {
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                        })
                    },
                    reset() {
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_RESET"
                        })
                    },
                    saveAccountChanges(e, t) {
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT"
                        });
                        let {
                            username: n,
                            email: s,
                            emailToken: a,
                            password: I,
                            avatar: d,
                            newPassword: S,
                            discriminator: R
                        } = e, {
                            close: A
                        } = t;
                        return (0, _.default)(e => {
                            let t = {
                                    username: n,
                                    email: s,
                                    email_token: a,
                                    password: I,
                                    avatar: d,
                                    new_password: S,
                                    ...e,
                                    discriminator: null != R && "" !== R ? R : void 0
                                },
                                r = l.default.get(E.DEVICE_TOKEN),
                                o = (0, c.getDevicePushProvider)();
                            null != o && null != r && (t.push_provider = o, t.push_token = r);
                            let u = l.default.get(E.DEVICE_VOIP_TOKEN);
                            return null != c.DEVICE_PUSH_VOIP_PROVIDER && null != u && (t.push_voip_provider = c.DEVICE_PUSH_VOIP_PROVIDER, t.push_voip_token = u), i.default.patch({
                                url: E.Endpoints.ME,
                                oldFormErrors: !0,
                                body: t
                            })
                        }, {
                            checkEnabled: !1,
                            modalProps: {
                                title: T.default.Messages.TWO_FA_CHANGE_ACCOUNT
                            },
                            hooks: {
                                onEarlyClose: () => r.default.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }).then(e => {
                            let t = e.body,
                                n = t.token;
                            return o.default.track(E.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, u.isAnimatedIconHash)(t.avatar)
                            }), delete t.token, r.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: t.id
                            }), r.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: t
                            }), null != S && r.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: S
                            }), null != I && null != S && r.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id
                            }), A ? this.close() : this.submitComplete(), e
                        }, e => (r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: e.body
                        }), e))
                    }
                }
        },
        812952: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var i, l, r, s, a = n("37983"),
                o = n("884691"),
                u = n("414456"),
                _ = n.n(u),
                E = n("145131"),
                c = n("298754");
            (i = r || (r = {})).PRIMARY = "primary", i.SECONDARY = "secondary", i.WARNING = "warning", i.ERROR = "error", (l = s || (s = {})).SMALL = "small", l.LARGE = "large", l.NONE = "none";
            let T = {
                    [r.PRIMARY]: c.colorPrimary,
                    [r.SECONDARY]: c.colorSecondary,
                    [r.WARNING]: c.colorWarning,
                    [r.ERROR]: c.colorError
                },
                I = {
                    [s.SMALL]: c.small,
                    [s.LARGE]: c.large,
                    [s.NONE]: null
                };
            class d extends o.PureComponent {
                render() {
                    let {
                        icon: e,
                        color: t,
                        children: n,
                        iconSize: i,
                        className: l,
                        iconClassName: r
                    } = this.props;
                    return (0, a.jsxs)(E.default, {
                        className: _(c.note, T[t], l),
                        align: E.default.Align.CENTER,
                        children: [(0, a.jsx)(e, {
                            className: _(c.icon, I[i], r)
                        }), (0, a.jsx)("div", {
                            children: n
                        })]
                    })
                }
            }
            d.Colors = r, d.Sizes = s;
            var S = d
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
                s = n.n(r),
                a = n("77078"),
                o = n("782340"),
                u = n("347129");
            class _ extends l.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: r,
                        error: _,
                        isLoading: E,
                        maxLength: c,
                        transitionState: T,
                        helpMessage: I,
                        retryPrompt: d,
                        retrySuccessMessage: S
                    } = this.props, {
                        code: R,
                        errorMessage: A,
                        retrySuccess: p
                    } = this.state, N = l.Children.count(r) > 0 ? (0, i.jsx)(a.Card, {
                        type: a.Card.Types.WARNING,
                        className: u.card,
                        children: (0, i.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: r
                        })
                    }) : null, m = null != d ? (0, i.jsxs)(a.Text, {
                        className: s(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, i.jsx)("br", {}), (0, i.jsx)(a.Clickable, {
                            className: s(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, i.jsx)(a.Anchor, {
                                children: d
                            })
                        })]
                    }) : null, O = p ? (0, i.jsx)(a.Card, {
                        type: a.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, i.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: S
                        })
                    }) : null;
                    return (0, i.jsx)(a.ModalRoot, {
                        transitionState: T,
                        children: (0, i.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, i.jsx)(a.ModalHeader, {
                                separator: !1,
                                children: (0, i.jsx)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, i.jsxs)(a.ModalContent, {
                                children: [null != I ? (0, i.jsx)(a.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u.spacing,
                                    children: I
                                }) : null, N, O, (0, i.jsxs)(a.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, i.jsx)(a.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != c ? c : 10,
                                        value: R,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, i.jsx)(a.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != _ ? _ : A
                                    }) : null, m]
                                })]
                            }), (0, i.jsxs)(a.ModalFooter, {
                                children: [(0, i.jsx)(a.Button, {
                                    type: "submit",
                                    disabled: E || 0 === R.length,
                                    children: null != n ? n : o.default.Messages.CONFIRM
                                }), (0, i.jsx)(a.Button, {
                                    onClick: this.handleCancel,
                                    disabled: E,
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.PRIMARY,
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
            _.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var E = _
        },
        689988: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("704744");
            var i = n("913144");
            class l {
                initialize() {
                    this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        i.default.subscribe(t, "function" == typeof n ? n : n.callback)
                    }), this.stores.forEach((e, t) => {
                        t.addChangeListener(e), e()
                    }))
                }
                terminate(e) {
                    !(this.initializedCount <= 0) && (e ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        i.default.unsubscribe(t, "function" == typeof n ? n : n.callback)
                    })))
                }
                _initialize() {}
                _terminate() {}
                constructor() {
                    this.initializedCount = 0, this.actions = {}, this.stores = new Map
                }
            }
        },
        862013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MESSAGE_NICKNAME_PAUSE_LABEL_SEGMENT_ID: function() {
                    return r
                },
                MESSAGE_PRE_TIMESTAMP_PAUSE_LABEL_SEGMENT_ID: function() {
                    return s
                },
                MESSAGE_REACTIONS_LABEL_SEGMENT_ID: function() {
                    return a
                },
                IMAGE_OPEN_DIALOG_DESCRIPTION: function() {
                    return o
                },
                insertAccessibilityLabelElements: function() {
                    return u
                }
            });
            var i = n("476765"),
                l = n("782340");
            let r = (0, i.uid)(),
                s = (0, i.uid)(),
                a = (0, i.uid)(),
                o = (0, i.uid)();

            function u() {
                [{
                    id: r,
                    text: ","
                }, {
                    id: s,
                    text: ","
                }, {
                    id: a,
                    text: l.default.Messages.REACTIONS
                }, {
                    id: o,
                    text: l.default.Messages.OPEN_ORIGIANL_IMAGE_BUTTON_A11Y_DESCRIPTION
                }].forEach(e => {
                    let {
                        id: t,
                        text: n
                    } = e, i = document.getElementById(t);
                    null == i && ((i = document.createElement("div")).setAttribute("id", t), i.innerText = n, i.style.display = "none", document.body.appendChild(i))
                })
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
        441413: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StretchedSparkleStar: function() {
                    return E
                },
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                r = n.n(l),
                s = n("75196"),
                a = n("956089"),
                o = n("125835"),
                u = n("782340"),
                _ = n("159163");

            function E(e) {
                return (0, i.jsx)("svg", {
                    ...(0, s.default)({
                        ...e
                    }),
                    width: "25",
                    height: "48",
                    viewBox: "0 0 25 48",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                        d: "M22.6014 22.1003C20.4432 20.6855 18.6067 18.8326 17.2112 16.6618C15.8157 14.4911 14.8925 12.0511 14.5014 9.50028L13.2014 0.700277C13.1553 0.497624 13.0404 0.317179 12.8764 0.189581C12.7123 0.0619821 12.5092 -0.00490199 12.3014 0.000279992C12.1055 -0.00125605 11.9158 0.0691675 11.7683 0.198194C11.6209 0.327221 11.5259 0.505874 11.5014 0.700277L10.1014 9.50028C9.74796 12.0629 8.8402 14.5177 7.44131 16.6938C6.04242 18.8698 4.18605 20.7148 2.00143 22.1003L0.901394 22.8003C0.770775 22.8872 0.665162 23.0067 0.594998 23.1471C0.524833 23.2874 0.49259 23.4436 0.501431 23.6003C0.49259 23.7569 0.524833 23.9132 0.594998 24.0535C0.665162 24.1938 0.770775 24.3134 0.901394 24.4003L2.00143 25.1003C4.18605 26.4857 6.04242 28.3307 7.44131 30.5068C8.8402 32.6828 9.74796 35.1376 10.1014 37.7003L11.5014 46.4003C11.5014 46.6125 11.5857 46.8159 11.7357 46.966C11.8858 47.116 12.0892 47.2003 12.3014 47.2003C12.5238 47.2017 12.7388 47.1207 12.9049 46.973C13.0711 46.8252 13.1767 46.6212 13.2014 46.4003L14.5014 37.7003C14.8925 35.1495 15.8157 32.7095 17.2112 30.5387C18.6067 28.368 20.4432 26.5151 22.6014 25.1003L23.8014 24.4003C24.0329 24.1951 24.1761 23.9085 24.2014 23.6003C24.1761 23.292 24.0329 23.0054 23.8014 22.8003L22.6014 22.1003Z",
                        fill: "currentColor"
                    })
                })
            }

            function c(e) {
                let {
                    className: t,
                    forceUseColorForSparkles: n = !1,
                    shouldInheritTextColor: l = !1,
                    shouldInheritBackgroundColor: s = !1
                } = e;
                return (0, i.jsx)(o.default, {
                    className: t,
                    forceUseColor: n,
                    children: (0, i.jsx)(a.TextBadge, {
                        disableColor: !0,
                        className: r(_.tag, {
                            [_.inheritTextColor]: l,
                            [_.inheritBackgroundColor]: s
                        }),
                        text: u.default.Messages.NEW
                    })
                })
            }
        },
        125835: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                r = n.n(l),
                s = n("642032"),
                a = n("767964");

            function o(e) {
                let {
                    className: t,
                    children: n,
                    forceUseColor: l = !1,
                    hideStars: o
                } = e;
                return (0, i.jsxs)("span", {
                    className: r(a.container, t, {
                        [a.containerColored]: l
                    }),
                    children: [n, o ? null : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(s.default, {
                            foreground: a.sparkleStarTopRight
                        }), (0, i.jsx)(s.default, {
                            foreground: a.sparkleStarRight
                        }), (0, i.jsx)(s.default, {
                            foreground: a.sparkleStarBottomLeft
                        })]
                    })]
                })
            }
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("748820"),
                r = n("77078"),
                s = n("112679"),
                a = n("55689"),
                o = n("855133"),
                u = n("599110"),
                _ = n("659500"),
                E = n("49111"),
                c = n("646718");

            function T(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: T,
                    onClose: I,
                    onComplete: d,
                    onSubscriptionConfirmation: S,
                    analyticsLocations: R,
                    analyticsObject: A,
                    analyticsLocation: p,
                    analyticsSourceLocation: N,
                    isGift: m = !1,
                    giftMessage: O,
                    subscriptionTier: C,
                    trialId: L,
                    postSuccessGuild: M,
                    openInvoiceId: P,
                    applicationId: f,
                    referralTrialOfferId: U,
                    giftRecipient: h,
                    returnRef: g
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
                            subscriptionTier: C,
                            skuId: C,
                            isGift: m,
                            giftMessage: O,
                            giftRecipient: h,
                            initialPlanId: t,
                            followupSKUInfo: T,
                            onClose: e => {
                                l(), null == I || I(e), e && (null == S || S())
                            },
                            onComplete: () => {
                                D = !0, null == d || d(), !m && ((0, o.setIsPersistentHelperHidden)(!0), (0, o.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: S,
                            analyticsLocations: R,
                            analyticsObject: A,
                            analyticsLocation: p,
                            analyticsSourceLocation: N,
                            trialId: L,
                            postSuccessGuild: M,
                            planGroup: c.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: P,
                            applicationId: f,
                            referralTrialOfferId: U,
                            returnRef: g
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !D && u.default.track(E.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: G,
                            payment_type: E.PurchaseTypeToAnalyticsPaymentType[E.PurchaseTypes.SUBSCRIPTION],
                            location: null != p ? p : A,
                            source: N,
                            subscription_type: E.SubscriptionTypes.PREMIUM,
                            is_gift: m,
                            eligible_for_trial: null != L,
                            application_id: f,
                            location_stack: R
                        }), (0, s.clearError)(), (0, a.clearPurchaseTokenAuthState)(), null == I || I(D), D && (!m && _.ComponentDispatch.dispatch(E.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == S || S())
                    },
                    onCloseRequest: E.NOOP
                })
            }
        },
        626301: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                navigateToPremiumMarketingPage: function() {
                    return r
                }
            });
            var i = n("79112"),
                l = n("49111");
            let r = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                i.default.open(l.UserSettingsSections.PREMIUM, null, {
                    openWithoutBackstack: e
                })
            }
        },
        324878: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useHasActiveTrial: function() {
                    return a
                },
                hasActiveTrial: function() {
                    return o
                },
                isEligibleTrialSub: function() {
                    return u
                },
                useCurrentPremiumTrialTier: function() {
                    return _
                }
            });
            var i = n("446674"),
                l = n("697218"),
                r = n("521012"),
                s = n("646718");
            let a = () => {
                    let e = (0, i.useStateFromStores)([r.default], () => r.default.getPremiumTypeSubscription());
                    return (null == e ? void 0 : e.trialId) != null
                },
                o = () => {
                    var e;
                    return (null === (e = r.default.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.trialId) != null
                },
                u = e => (null == e ? void 0 : e.trialId) != null && (e.trialId === s.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID || e.trialId === s.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID || e.trialId === s.PREMIUM_TIER_2_3P_ONE_MONTH_TRIAL_ID || e.trialId === s.PREMIUM_TIER_2_REFERRAL_TRIAL_ID);

            function _() {
                let e = (0, i.useStateFromStores)([r.default], () => r.default.getPremiumTypeSubscription()),
                    t = (0, i.useStateFromStores)([l.default], () => l.default.getCurrentUser());
                return (null == e ? void 0 : e.trialId) != null ? null == t ? void 0 : t.premiumType : null
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
                    return s
                },
                setCanPlayWowMoment: function() {
                    return a
                },
                setIsPersistentHelperHidden: function() {
                    return o
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
                s = () => {
                    i.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                a = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                o = e => {
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
        942377: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getHigherExpectedValue: function() {
                    return r
                },
                getHighestLikelihood: function() {
                    return s
                }
            });
            var i = n("716849"),
                l = n("646718");

            function r(e, t, n) {
                return null == e ? l.PremiumTypes.TIER_2 : e[l.PremiumSubscriptionSKUs.TIER_0] * t > e[l.PremiumSubscriptionSKUs.TIER_2] * n ? l.PremiumTypes.TIER_0 : l.PremiumTypes.TIER_2
            }

            function s(e) {
                if (null == e) return l.PremiumTypes.TIER_0;
                let t = e[i.NON_SUBSCRIBER_SENTINEL],
                    n = e[l.PremiumSubscriptionSKUs.TIER_0],
                    r = e[l.PremiumSubscriptionSKUs.TIER_2];
                return r > n && r > t ? l.PremiumTypes.TIER_2 : l.PremiumTypes.TIER_0
            }
        },
        843647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("446674"),
                l = n("697218"),
                r = n("10514"),
                s = n("719923"),
                a = n("716849"),
                o = n("676572"),
                u = n("942377"),
                _ = n("917247"),
                E = n("646718");

            function c(e) {
                let {
                    autoTrackExposure: t,
                    experiment: n,
                    location: c
                } = e, T = (0, i.useStateFromStores)([l.default], () => l.default.getCurrentUser()), I = (0, _.usePremiumTrialOffer)(), d = null != I, S = null != T && (0, s.isPremium)(T);
                (0, a.useMaybeFetchPremiumLikelihood)(n);
                let {
                    enabled: R,
                    useExpectedValue: A,
                    useLikelihood: p
                } = n.useExperiment({
                    location: null != c ? c : "1"
                }, {
                    autoTrackExposure: !S && !d && t
                }), {
                    premiumLikelihood: N,
                    fetched: m
                } = (0, i.useStateFromStoresObject)([o.default], () => {
                    let e = o.default.getState();
                    return {
                        fetched: e.fetched,
                        premiumLikelihood: e.premiumLikelihood
                    }
                }), O = (0, i.useStateFromStores)([r.default], () => r.default.isLoadedForSKUs([E.PremiumSubscriptionSKUs.TIER_0, E.PremiumSubscriptionSKUs.TIER_2])), C = !S && R && !d && (A ? !m || !O : !m), L = E.PremiumTypes.TIER_2;
                if (d) {
                    let e = I.subscription_trial;
                    (null == e ? void 0 : e.sku_id) === E.PremiumSubscriptionSKUs.TIER_0 ? L = E.PremiumTypes.TIER_0 : (null == e ? void 0 : e.sku_id) === E.PremiumSubscriptionSKUs.TIER_2 && (L = E.PremiumTypes.TIER_2)
                } else if (!S && !C && R) {
                    if (A) {
                        let {
                            amount: e
                        } = (0, s.getPrice)(E.SubscriptionPlans.PREMIUM_MONTH_TIER_0), {
                            amount: t
                        } = (0, s.getPrice)(E.SubscriptionPlans.PREMIUM_MONTH_TIER_2);
                        L = (0, u.getHigherExpectedValue)(N, e, t)
                    } else p && (L = (0, u.getHighestLikelihood)(N))
                }
                return {
                    isLoading: C,
                    suggestedPremiumType: L
                }
            }
        },
        154889: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                discountOfferHasTier: function() {
                    return E
                },
                usePremiumDiscountOffer: function() {
                    return c
                }
            });
            var i = n("884691"),
                l = n("446674"),
                r = n("862337"),
                s = n("697218"),
                a = n("340412"),
                o = n("719923"),
                u = n("646718");

            function _(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function E(e, t) {
                var n;
                if (null == e) return !1;
                let i = new Set(null === (n = e.discount) || void 0 === n ? void 0 : n.plan_ids.map(e => u.SubscriptionPlanInfo[e].skuId));
                return i.has(t)
            }

            function c() {
                let e = (0, l.useStateFromStores)([a.default], () => a.default.getUserDiscount(u.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID)),
                    [t, n] = i.useState(_(e)),
                    E = (0, l.useStateFromStores)([s.default], () => (0, o.isPremium)(s.default.getCurrentUser()));
                return i.useEffect(() => {
                    if (null == e || null == e.expires_at) return;
                    let i = new r.Timeout,
                        l = () => {
                            let r = null != e.expires_at ? Date.parse(e.expires_at) - Date.now() : 0;
                            null == i || i.start(r, () => {
                                !t && _(e) ? n(!0) : l()
                            })
                        };
                    return l(), () => i.stop()
                }, [t, e]), t || E ? null : e
            }
        },
        635956: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                r = n.n(l),
                s = n("446674"),
                a = n("77078"),
                o = n("79112"),
                u = n("685665"),
                _ = n("788506"),
                E = n("649844"),
                c = n("393414"),
                T = n("797647"),
                I = n("697218"),
                d = n("521012"),
                S = n("471671"),
                R = n("181114"),
                A = n("978679"),
                p = n("216422"),
                N = n("719923"),
                m = n("646718"),
                O = n("49111"),
                C = n("782340"),
                L = n("683437"),
                M = function(e) {
                    let {
                        isGift: t,
                        subscriptionTier: l,
                        onClick: M,
                        size: P,
                        className: f,
                        trialId: U,
                        isTrialCTA: h,
                        buttonText: g,
                        buttonTextClassName: D,
                        postSuccessGuild: G,
                        onSubscribeModalClose: b,
                        premiumModalAnalyticsLocation: v,
                        showIcon: y = !0,
                        disableShine: B,
                        applicationId: x,
                        giftMessage: H,
                        overrideDisabledButtonText: k,
                        shinyButtonClassName: F,
                        ...V
                    } = e, j = (0, s.useStateFromStores)([I.default], () => I.default.getCurrentUser()), K = (0, s.useStateFromStores)([S.default], () => S.default.isFocused()), w = (0, s.useStateFromStores)([d.default], () => d.default.getPremiumTypeSubscription()), {
                        analyticsLocations: Y
                    } = (0, u.default)(), W = e => {
                        if (e.preventDefault(), null == j) {
                            (0, c.transitionTo)(O.Routes.LOGIN);
                            return
                        }
                        if (null == M || M(e), (null == w ? void 0 : w.status) === O.SubscriptionStatusTypes.ACCOUNT_HOLD) {
                            (0, _.trackPremiumSettingsPaneOpened)(), o.default.open(O.UserSettingsSections.PREMIUM), null == b || b(!1);
                            return
                        }! function(e) {
                            let {
                                isClaimed: t,
                                isVerified: l,
                                isGift: r,
                                subscriptionTier: s,
                                trialId: o,
                                postSuccessGuild: u,
                                onSubscribeModalClose: _,
                                analyticsLocations: c,
                                premiumModalAnalyticsLocation: T,
                                applicationId: I,
                                giftMessage: d
                            } = e;
                            if (!t) {
                                (0, a.openModalLazy)(async () => {
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
                                (0, a.openModalLazy)(async () => {
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
                            let S = O.AnalyticsObjectTypes.BUY;
                            null != o ? S = O.AnalyticsObjectTypes.TRIAL : r && (S = O.AnalyticsObjectTypes.GIFT), (0, E.default)({
                                isGift: r,
                                initialPlanId: null,
                                subscriptionTier: s,
                                analyticsLocations: c,
                                analyticsObject: {
                                    object: O.AnalyticsObjects.BUTTON_CTA,
                                    objectType: S,
                                    ...T
                                },
                                trialId: o,
                                postSuccessGuild: u,
                                onClose: _,
                                applicationId: I,
                                giftMessage: d
                            })
                        }({
                            isClaimed: j.isClaimed(),
                            isVerified: j.verified,
                            isGift: t,
                            subscriptionTier: l,
                            trialId: U,
                            postSuccessGuild: G,
                            onSubscribeModalClose: b,
                            analyticsLocations: Y,
                            premiumModalAnalyticsLocation: v,
                            applicationId: x,
                            giftMessage: H
                        })
                    };
                    if (h) return (0, i.jsxs)(a.Button, {
                        size: P,
                        className: f,
                        innerClassName: L.premiumSubscribeButton,
                        look: a.Button.Looks.INVERTED,
                        onClick: W,
                        ...V,
                        children: [y && (0, i.jsx)(p.default, {
                            className: L.premiumIcon
                        }), (0, i.jsx)("span", {
                            className: r(L.buttonText, D),
                            children: null != g ? g : C.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                        })]
                    });
                    if (t) return (0, i.jsxs)(a.Button, {
                        size: P,
                        className: f,
                        innerClassName: L.giftButton,
                        color: a.Button.Colors.PRIMARY,
                        onClick: W,
                        ...V,
                        children: [(0, i.jsx)(A.default, {
                            className: L.giftIcon
                        }), (0, i.jsx)("span", {
                            className: r(L.buttonText, D),
                            children: null != g ? g : C.default.Messages.PREMIUM_GIFTING_BUTTON
                        })]
                    });
                    let z = C.default.Messages.APPLICATION_STORE_GET_PREMIUM,
                        X = null != w ? (0, N.getPremiumPlanItem)(w) : null,
                        q = null != X ? N.default.getPremiumType(X.planId) : null == j ? void 0 : j.premiumType,
                        J = l === m.PremiumSubscriptionSKUs.TIER_2 && null != q && [m.PremiumTypes.TIER_0, m.PremiumTypes.TIER_1].includes(q);
                    J && (z = C.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
                    let Q = null != w && w.status !== O.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, T.isNoneSubscription)(w.planId) && !J,
                        Z = Q ? null != k ? k : function(e) {
                            let {
                                ctaSubscriptionSkuId: t,
                                currentPremiumType: n
                            } = e, i = null, l = null;
                            if (null != t && t !== m.PremiumSubscriptionSKUs.LEGACY && t !== m.PremiumSubscriptionSKUs.TIER_0 && t !== m.PremiumSubscriptionSKUs.TIER_1 && t !== m.PremiumSubscriptionSKUs.TIER_2) return {
                                disabledButtonText: i,
                                disabledButtonTooltipText: l
                            };
                            let r = null != t ? m.PremiumSubscriptionSKUToPremiumType[t] : null,
                                s = null != r ? m.PremiumTypeOrder[r] : null,
                                a = null != n ? m.PremiumTypeOrder[n] : null;
                            return null != a && null != s && s < a ? (i = C.default.Messages.APPLICATION_STORE_GET_PREMIUM, l = C.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != r && null != n && r === n ? (i = C.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, l = C.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == r && null != n && n === m.PremiumTypes.TIER_2 && (l = C.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
                                disabledButtonText: i,
                                disabledButtonTooltipText: l
                            }
                        }({
                            ctaSubscriptionSkuId: l,
                            currentPremiumType: q
                        }) : null;

                    function $(e) {
                        var t, n;
                        return (0, i.jsxs)(R.default, {
                            disabled: Q,
                            onClick: W,
                            innerClassName: L.premiumSubscribeButton,
                            color: l === m.PremiumSubscriptionSKUs.TIER_1 ? a.Button.Colors.PRIMARY : a.Button.Colors.GREEN,
                            size: P,
                            className: F,
                            wrapperClassName: f,
                            pauseAnimation: !K || B,
                            ...V,
                            ...e,
                            children: [y && (0, i.jsx)(p.default, {
                                className: L.premiumIcon
                            }), (0, i.jsx)("span", {
                                className: r(L.buttonText, D),
                                children: null !== (n = null !== (t = null == Z ? void 0 : Z.disabledButtonText) && void 0 !== t ? t : g) && void 0 !== n ? n : z
                            })]
                        })
                    }
                    return (null == Z ? void 0 : Z.disabledButtonTooltipText) != null ? (0, i.jsx)(a.Tooltip, {
                        text: Z.disabledButtonTooltipText,
                        children: $
                    }) : $()
                }
        },
        273619: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("685635"),
                s = n("414456"),
                a = n.n(s),
                o = n("862337"),
                u = n("77078"),
                _ = n("812952"),
                E = n("448993"),
                c = n("736978"),
                T = n("642906"),
                I = n("85336");
            n("153727"), n("650484");
            var d = n("454589"),
                S = n("978679"),
                R = n("745279"),
                A = n("49111"),
                p = n("782340"),
                N = n("129429");
            let m = new Set([I.Step.SKU_SELECT, I.Step.AWAITING_AUTHENTICATION, I.Step.AWAITING_PURCHASE_TOKEN_AUTH, I.Step.CONFIRM]);

            function O(e) {
                let {
                    steps: t,
                    currentStep: n,
                    body: s,
                    paymentError: O,
                    header: C,
                    footer: L,
                    isGift: M = !1,
                    giftMessage: P = p.default.Messages.PREMIUM_PAYMENT_IS_GIFT,
                    isSeasonalGift: f = !1,
                    hideBreadcrumbs: U = !1,
                    isLoading: h = !1,
                    purchaseError: g,
                    purchaseErrorBlockRef: D,
                    planError: G,
                    onScroll: b,
                    scrollerClassName: v,
                    hasCurrencies: y = !1
                } = e, B = null;
                null != O && null == (0, I.errorToStep)(O) ? B = O : null != g ? B = g : null != G && (B = G);
                let x = null != B ? B.message : "";
                null != B && B instanceof E.BillingError && (B.code === c.ErrorCodes.CARD_DECLINED && y && (x += " ".concat(p.default.Messages.BILLING_ERROR_TRY_ANOTHER)), B.code === c.ErrorCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (x = p.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), B.code === A.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (x = p.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
                let {
                    stripe: H
                } = (0, T.usePaymentContext)();
                h = h || null == H;
                let k = l.useRef(new o.Timeout);
                l.useEffect(() => {
                    let e = k.current;
                    return null != H || e.isStarted() ? null != H && e.stop() : e.start(1e4, () => {
                        let e = Error("Stripe took too long to load");
                        (0, R.captureBillingException)(e)
                    }), () => {
                        e.stop()
                    }
                }, [H]);
                let F = t.includes(I.Step.PAYMENT_TYPE) ? I.Step.PAYMENT_TYPE : I.Step.ADD_PAYMENT_STEPS;
                return (0, i.jsxs)(r.Elements, {
                    options: A.StripeElementsOptions,
                    stripe: H,
                    children: [C, (0, i.jsxs)("div", {
                        className: a("paymentModalContent", N.content),
                        children: [M && !f && n !== I.Step.CONFIRM ? (0, i.jsx)(_.default, {
                            className: N.paymentNote,
                            iconSize: _.default.Sizes.SMALL,
                            icon: S.default,
                            color: null == P ? _.default.Colors.PRIMARY : _.default.Colors.SECONDARY,
                            children: P
                        }) : null, U ? null : (0, i.jsx)("div", {
                            className: N.breadcrumbsWrapper,
                            children: (0, i.jsx)(d.default, {
                                activeId: I.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(n) ? F : n,
                                breadcrumbs: t.filter(e => !I.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(e) && !m.has(e)).map(e => ({
                                    id: e,
                                    label: (0, I.getLabelForStep)(e)
                                }))
                            })
                        }), (0, i.jsxs)("div", {
                            className: N.bodyWrapper,
                            children: [null == B ? null : (0, i.jsx)("div", {
                                className: N.errorBlockWrapper,
                                children: (0, i.jsx)(u.FormErrorBlock, {
                                    ref: D,
                                    children: x
                                })
                            }), h ? (0, i.jsx)(u.Spinner, {
                                className: N.loadingBlock
                            }) : (0, i.jsx)(u.Sequencer, {
                                className: N.sequencer,
                                staticClassName: N.sequencerStatic,
                                animatedNodeClassName: N.sequencerAnimatedNode,
                                fillParent: !0,
                                step: n,
                                steps: t,
                                sideMargin: 20,
                                children: (0, i.jsx)(u.AdvancedScrollerThin, {
                                    onScroll: b,
                                    className: a(N.scroller, v),
                                    children: s
                                })
                            })]
                        })]
                    }), L]
                })
            }
        },
        674158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                r = n.n(l),
                s = n("288264");

            function a(e) {
                let {
                    icon: t,
                    iconClassName: n,
                    description: l,
                    color: a
                } = e;
                return (0, i.jsxs)("div", {
                    className: s.perkRow,
                    children: [(0, i.jsx)("div", {
                        className: s.perkIconContainer,
                        children: (0, i.jsx)(t, {
                            color: a,
                            className: r(s.perkIcon, n)
                        })
                    }), (0, i.jsx)("div", {
                        className: s.perkDescription,
                        children: l
                    })]
                })
            }
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return s
                },
                getDevicePushProvider: function() {
                    return a
                }
            });
            var i, l, r = n("773336");
            let s = null;

            function a() {
                return (0, r.isAndroid)(), null
            }(i = l || (l = {})).REMINDER = "reminder", i.TOP_MESSAGE_PUSH = "top_messages_push", i.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        122846: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return H
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                s = n.n(r),
                a = n("446674"),
                o = n("77078"),
                u = n("913144"),
                _ = n("850068"),
                E = n("775433"),
                c = n("308592"),
                T = n("642906"),
                I = n("85336"),
                d = n("552917"),
                S = n("843647"),
                R = n("154889"),
                A = n("917247"),
                p = n("956597"),
                N = n("635956"),
                m = n("273619"),
                O = n("674158"),
                C = n("915639"),
                L = n("357957"),
                M = n("326880"),
                P = n("46829"),
                f = n("595086"),
                U = n("719923"),
                h = n("153160"),
                g = n("49111"),
                D = n("646718"),
                G = n("782340"),
                b = n("643076");
            let v = e => {
                let {
                    locale: t
                } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(O.default, {
                        icon: f.default,
                        iconClassName: b.iconColorPurple,
                        description: G.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
                    }), (0, i.jsx)(O.default, {
                        icon: M.default,
                        iconClassName: b.iconColorPink,
                        description: G.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_GUILD_SUBSCRIPTION.format({
                            numGuildSubscriptions: D.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
                            discountPercent: (0, h.formatPercent)(t, D.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
                        })
                    }), (0, i.jsx)(O.default, {
                        icon: P.default,
                        iconClassName: b.iconColorYellow,
                        description: G.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_PREMIUM_SUBSCRIPTION
                    })]
                })
            };

            function y() {
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(O.default, {
                        icon: f.default,
                        iconClassName: b.iconColorPurple,
                        description: G.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
                    }), (0, i.jsx)(O.default, {
                        icon: P.default,
                        iconClassName: b.iconColorYellow,
                        description: G.default.Messages.STICKER_PREMIUM_TIER_0_UPSELL_PERK_PREMIUM_SUBSCRIPTION
                    })]
                })
            }
            let B = e => {
                    let {
                        trialOffer: t,
                        discountOffer: l,
                        isTier0Upsell: r,
                        isLoading: u,
                        price: _,
                        onClose: E
                    } = e, c = (0, a.useStateFromStores)([C.default], () => C.default.locale), T = null != t || null != l;
                    return (0, i.jsxs)("div", {
                        className: b.wrapper,
                        children: [(0, i.jsx)(o.ModalCloseButton, {
                            onClick: E,
                            className: b.closeButton
                        }), T && (0, i.jsx)(p.PremiumTrialGradientBadge, {
                            className: b.premiumTrialBadge
                        }), (0, i.jsx)("img", {
                            className: s(b.heroImage, {
                                [b.heroImageWithTrialOffer]: T
                            }),
                            src: n("190389"),
                            alt: ""
                        }), u ? (0, i.jsx)(o.Spinner, {}) : (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(o.Text, {
                                variant: "text-md/normal",
                                className: b.heading,
                                children: null == _ ? (0, i.jsx)(o.Spinner, {
                                    type: o.Spinner.Type.PULSING_ELLIPSIS
                                }) : r ? G.default.Messages.STICKER_PREMIUM_SUBSCRIPTION_UPSELL_ALERT_TITLE.format({
                                    planName: (0, U.getTierDisplayName)(D.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
                                    monthlyPrice: (0, h.formatPrice)(_.amount, _.currency)
                                }) : G.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_ALERT_TITLE.format({
                                    monthlyPrice: (0, h.formatPrice)(_.amount, _.currency)
                                })
                            }), (0, i.jsx)("div", {
                                className: b.perks,
                                children: r ? (0, i.jsx)(y, {}) : (0, i.jsx)(v, {
                                    locale: c
                                })
                            })]
                        })]
                    })
                },
                x = e => {
                    let {
                        trialOffer: t,
                        discountOffer: n,
                        isTier0Upsell: l,
                        onClose: r
                    } = e, s = {
                        section: g.AnalyticsSections.STICKER_PREMIUM_TIER_2_UPSELL_MODAL
                    };
                    return (0, i.jsxs)(o.ModalFooter, {
                        className: b.footer,
                        children: [(0, i.jsx)(o.Button, {
                            onClick: r,
                            size: o.Button.Sizes.SMALL,
                            color: o.Button.Colors.PRIMARY,
                            look: o.Button.Looks.LINK,
                            children: G.default.Messages.CLOSE
                        }), (0, i.jsx)(N.default, {
                            buttonText: null != t || null != n ? l ? G.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : G.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0,
                            premiumModalAnalyticsLocation: s,
                            subscriptionTier: l ? D.PremiumSubscriptionSKUs.TIER_0 : D.PremiumSubscriptionSKUs.TIER_2,
                            size: o.Button.Sizes.SMALL,
                            color: o.Button.Colors.GREEN,
                            onClick: () => {
                                r()
                            }
                        })]
                    })
                };

            function H(e) {
                let {
                    onClose: t,
                    ...n
                } = e, r = (0, c.useSubscriptionPlansLoaded)(), s = (0, a.useStateFromStores)([L.default], () => L.default.hasFetchedPaymentSources), p = r && s, N = (0, A.usePremiumTrialOffer)(), O = (0, R.usePremiumDiscountOffer)(), {
                    isLoading: C,
                    suggestedPremiumType: M
                } = (0, S.default)({
                    autoTrackExposure: p,
                    experiment: d.default,
                    location: "stickers_upsell"
                });
                l.useEffect(() => {
                    u.default.wait(() => {
                        (0, _.fetchPaymentSources)(), (0, E.fetchPremiumSubscriptionPlans)(null, null, g.RevenueSurfaces.DISCOVERY)
                    })
                }, []);
                let P = M === D.PremiumTypes.TIER_0 && null == O,
                    f = p ? U.default.getDefaultPrice(P ? D.SubscriptionPlans.PREMIUM_MONTH_TIER_0 : D.SubscriptionPlans.PREMIUM_MONTH_TIER_2) : null;
                return (0, i.jsx)(T.PaymentContextProvider, {
                    activeSubscription: null,
                    stepConfigs: [],
                    skuIDs: [],
                    children: (0, i.jsx)(o.ModalRoot, {
                        ...n,
                        "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
                        children: (0, i.jsx)(m.default, {
                            hideBreadcrumbs: !0,
                            body: (0, i.jsx)(B, {
                                trialOffer: N,
                                discountOffer: O,
                                isTier0Upsell: P,
                                isLoading: !p || C,
                                price: f,
                                onClose: t
                            }),
                            footer: (0, i.jsx)(x, {
                                trialOffer: N,
                                discountOffer: O,
                                isTier0Upsell: P,
                                onClose: t
                            }),
                            steps: [I.Step.PREMIUM_UPSELL],
                            currentStep: I.Step.PREMIUM_UPSELL
                        })
                    })
                })
            }
        },
        729912: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SilentMessagesExperiment: function() {
                    return l
                }
            });
            var i = n("862205");
            let l = (0, i.createExperiment)({
                kind: "user",
                id: "2023-01_silent_messages",
                label: "Silent Messages",
                defaultConfig: {
                    allowSending: !1
                },
                treatments: [{
                    id: 1,
                    label: "Allow sending @silent messages",
                    config: {
                        allowSending: !0
                    }
                }]
            })
        },
        804888: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SILENT_RE: function() {
                    return r
                },
                canSuppressNotifications: function() {
                    return s
                },
                default: function() {
                    return a
                }
            });
            var i = n("729912");
            let l = "@silent",
                r = new RegExp("^".concat(l, "(\\s|$)"));

            function s() {
                let e = i.SilentMessagesExperiment.getCurrentConfig({
                    location: "456bd9_1"
                }, {
                    autoTrackExposure: !1
                });
                return e.allowSending
            }

            function a(e) {
                return s() && null != e.match(r) ? [!0, e.substring(l.length).trim()] : [!1, e]
            }
        },
        504439: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                thumbHashToRGBA: function() {
                    return l
                }
            });
            var i = n("723251");

            function l(e) {
                let {
                    detail: t = 1,
                    pop: n = 1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                    PI: l,
                    min: r,
                    max: s,
                    cos: a,
                    round: o
                } = Math, u = e[0] | e[1] << 8 | e[2] << 16, _ = e[3] | e[4] << 8, E = (63 & u) / 63, c = (u >> 6 & 63) / 31.5 - 1, T = (u >> 12 & 63) / 31.5 - 1, I = u >> 23, d = (_ >> 3 & 63) / 63, S = (_ >> 9 & 63) / 63, R = _ >> 15, A = s(3, R ? I ? 5 : 7 : 7 & _), p = s(3, R ? 7 & _ : I ? 5 : 7), N = I ? (15 & e[5]) / 15 : 1, m = (e[5] >> 4) / 15, O = I ? 6 : 5, C = 0, L = (t, n, i) => {
                    let l = [];
                    for (let r = 0; r < n; r++)
                        for (let s = r ? 0 : 1; s * n < t * (n - r); s++) l.push(((e[O + (C >> 1)] >> ((1 & C++) << 2) & 15) / 7.5 - 1) * i);
                    return l
                }, M = L(A, p, (u >> 18 & 31) / 31 / 2), P = L(3, 3, d * n), f = L(3, 3, S * n), U = I ? L(5, 5, m) : [], h = (0, i.thumbHashToApproximateAspectRatio)(e), g = o(h > 1 ? 32 : 32 * h), D = o(h > 1 ? 32 / h : 32), G = new Uint8Array(g * D * 4), b = [], v = [];
                for (let e = 0, n = 0; e < D; e++)
                    for (let i = 0; i < g; i++, n += 4) {
                        let o = E,
                            u = c,
                            _ = T,
                            d = N;
                        for (let e = 0, t = s(A, I ? 5 : 3); e < t; e++) b[e] = a(l / g * (i + .5) * e);
                        for (let t = 0, n = s(p, I ? 5 : 3); t < n; t++) v[t] = a(l / D * (e + .5) * t);
                        for (let e = 0, n = 0; e < p; e++)
                            for (let i = e ? 0 : 1, l = 2 * v[e]; i * p < A * (p - e); i++, n++) !(i > t) && !(e > t) && (o += M[n] * b[i] * l);
                        for (let e = 0, t = 0; e < 3; e++)
                            for (let n = e ? 0 : 1, i = 2 * v[e]; n < 3 - e; n++, t++) {
                                let e = b[n] * i;
                                u += P[t] * e, _ += f[t] * e
                            }
                        if (I)
                            for (let e = 0, t = 0; e < 5; e++)
                                for (let n = e ? 0 : 1, i = 2 * v[e]; n < 5 - e; n++, t++) d += U[t] * b[n] * i;
                        let S = o - 2 / 3 * u,
                            R = (3 * o - S + _) / 2,
                            m = R - _;
                        G[n] = s(0, 255 * r(1, R)), G[n + 1] = s(0, 255 * r(1, m)), G[n + 2] = s(0, 255 * r(1, S)), G[n + 3] = s(0, 255 * r(1, d))
                    }
                return {
                    w: g,
                    h: D,
                    rgba: G
                }
            }
        },
        211895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("913144"),
                l = n("54239"),
                r = n("49111");

            function s() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        openWithoutBackstack: !1
                    };
                i.default.dispatch({
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: e,
                    subsection: t,
                    ...n
                }), (0, l.pushLayer)(r.Layers.USER_SETTINGS)
            }
        },
        26092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("917351"),
                l = n.n(i),
                r = n("446674"),
                s = n("913144"),
                a = n("697218"),
                o = n("49111");
            let u = o.FormStates.CLOSED,
                _ = null,
                E = null,
                c = {},
                T = {},
                I = {},
                d = null,
                S = null,
                R = !1,
                A = !1,
                p = null,
                N = null,
                m = null,
                O = [],
                C = null,
                L = null;

            function M(e) {
                var t, n, i, l, r, s;
                let _ = a.default.getCurrentUser();
                if (null == _) return P();
                E = null !== (t = e.section) && void 0 !== t ? t : E, C = null !== (n = e.section) && void 0 !== n ? n : E, null != e.subsection && null != E && (c[E] = e.subsection), null != e.scrollPosition && null != E && (T[E] = e.scrollPosition), A = !!e.openWithoutBackstack, u = o.FormStates.OPEN, I = {}, S = {
                    ...d = {
                        [o.UserSettingsSections.ACCOUNT]: {
                            userId: _.id,
                            username: _.username,
                            discriminator: _.discriminator,
                            email: _.email,
                            avatar: _.avatar,
                            password: "",
                            newPassword: null,
                            claimed: _.isClaimed()
                        }
                    }
                }, N = null !== (i = e.onClose) && void 0 !== i ? i : null, m = null !== (l = e.analyticsLocation) && void 0 !== l ? l : null, O = null !== (r = e.analyticsLocations) && void 0 !== r ? r : [], L = null !== (s = e.impressionSource) && void 0 !== s ? s : null
            }

            function P() {
                u = o.FormStates.CLOSED, R = !1, d = null, C = null, S = null, _ = null, E = null, c = {}, T = {}, N = null, m = null, O = [], L = null
            }

            function f() {
                u = o.FormStates.OPEN, I = {}
            }
            class U extends r.default.Store {
                initialize() {
                    this.waitFor(a.default)
                }
                hasChanges() {
                    return null != S && null != d && (!!this.isOpen() || p === o.DrawerTabTypes.USER_SETTINGS) && !l.isEqual(S, d)
                }
                isOpen() {
                    return R
                }
                getPreviousSection() {
                    return _
                }
                getSection() {
                    return E
                }
                getSubsection() {
                    return null != E ? c[E] : null
                }
                getScrollPosition() {
                    return null != E ? T[E] : null
                }
                shouldOpenWithoutBackstack() {
                    return A
                }
                getProps() {
                    return {
                        submitting: u === o.FormStates.SUBMITTING,
                        section: E,
                        subsection: null != E ? c[E] : null,
                        scrollPosition: null != E ? T[E] : null,
                        settings: S,
                        errors: I,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: A,
                        analyticsLocation: m,
                        analyticsLocations: O,
                        initialSection: C,
                        impressionSource: L
                    }
                }
                get onClose() {
                    return N
                }
            }
            U.displayName = "UserSettingsModalStore";
            var h = new U(s.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    R = !0, M(e)
                },
                USER_SETTINGS_MODAL_INIT: M,
                USER_SETTINGS_MODAL_CLOSE: P,
                LOGOUT: P,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    u = o.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (u !== o.FormStates.SUBMITTING) return !1;
                    u = o.FormStates.OPEN, E = o.UserSettingsSections.ACCOUNT, I = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    var t;
                    _ = E, E = e.section, m = null, O = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (c[E] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete c[t] : null != E && delete c[E]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete T[t] : null != E && delete T[E]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    let {
                        settings: t
                    } = e;
                    null == S && (S = {});
                    let n = S[o.UserSettingsSections.ACCOUNT];
                    S[o.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: f,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = a.default.getCurrentUser();
                    f(), null != e && (S = {
                        ...d = {
                            [o.UserSettingsSections.ACCOUNT]: {
                                userId: e.id,
                                username: e.username,
                                discriminator: e.discriminator,
                                email: e.email,
                                avatar: e.avatar,
                                password: "",
                                newPassword: null,
                                claimed: e.isClaimed()
                            }
                        }
                    })
                },
                DRAWER_SELECT_TAB: function(e) {
                    return p = e.tab, null == E && p === o.DrawerTabTypes.USER_SETTINGS && M({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
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
                    return _
                }
            });
            var r = n("697218"),
                s = n("615931");
            let a = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                i = e.showModal, a = e.updateModalProps, l = n("551042").closeModal
            }

            function o(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: r,
                    modalProps: s = {},
                    hooks: {
                        onEarlyClose: o
                    } = {}
                } = e;
                if (null == i) {
                    null == o || o();
                    return
                }
                let _ = i(I, E, s);

                function E() {
                    null == o || o()
                }

                function c(e) {
                    l(_), n(e)
                }

                function T(e) {
                    l(_), r(e)
                }

                function I(e) {
                    return a(_, I, E, {
                        ...s,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: c,
                        reject: T,
                        code: e,
                        mfaCodeHandler: d,
                        isModalOpen: !0
                    })
                }

                function d(e) {
                    let {
                        res: t
                    } = e;
                    a(_, I, E, {
                        ...s,
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
                    isModalOpen: s = !1,
                    ...a
                } = e;
                return t(null != l ? {
                    code: l
                } : {}).then(n, e => {
                    var l, o;
                    if (l = e, o = s, l.body && 60008 === l.body.code || o && 429 === l.status) return r({
                        promiseFn: t,
                        resolve: n,
                        reject: i,
                        res: e,
                        ...a
                    });
                    i(e)
                })
            }

            function _(e, t) {
                var n, i;
                let {
                    checkEnabled: l = null !== (i = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i,
                    ...a
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, s.resolveThunk)(l) ? o : u)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...a
                    })
                })
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return a
                },
                updateModalProps: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("551042"),
                r = n("920636");
            let s = (e, t, n) => function(l) {
                return (0, i.jsx)(r.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...l
                })
            };

            function a(e, t, n) {
                return (0, l.openModal)(s(e, t, n), {
                    onCloseCallback: t
                })
            }

            function o(e, t, n, i) {
                return (0, l.updateModal)(e, s(t, n, i))
            }
        }
    }
]);
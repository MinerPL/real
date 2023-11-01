(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["3988"], {
        310013: function(e, t, n) {
            "use strict";
            var l = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                a = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                i = "function" == typeof Object.getOwnPropertySymbols;
            e.exports = function(e, t, n) {
                if ("string" != typeof t) {
                    var r = Object.getOwnPropertyNames(t);
                    i && (r = r.concat(Object.getOwnPropertySymbols(t)));
                    for (var s = 0; s < r.length; ++s)
                        if (!l[r[s]] && !a[r[s]] && (!n || !n[r[s]])) try {
                            e[r[s]] = t[r[s]]
                        } catch (e) {}
                }
                return e
            }
        },
        48174: function(e, t, n) {
            "use strict";

            function l(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            })
        },
        775560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return l.default
                },
                useStableMemo: function() {
                    return a.default
                },
                useLazyValue: function() {
                    return i.default
                }
            });
            var l = n("14716"),
                a = n("745510"),
                i = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("884691");

            function a() {
                let [, e] = (0, l.useState)({});
                return (0, l.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("884691");
            let a = {};

            function i(e) {
                let t = (0, l.useRef)(a);
                return t.current === a && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("884691"),
                a = n("48174");
            let i = [];

            function r(e, t) {
                let n = (0, l.useRef)(),
                    r = (0, l.useRef)(i);
                return r.current === i ? (n.current = e(), r.current = t) : !(0, a.default)(t, r.current) && (n.current = e(), r.current = t), n.current
            }
        },
        284434: function(e, t, n) {
            "use strict";
            e.exports = n.p + "51063f34b3960c1d5da8.svg"
        },
        315956: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f92a8b5812e2da52a179.svg"
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return a
                },
                popLayer: function() {
                    return i
                },
                popAllLayers: function() {
                    return r
                }
            });
            var l = n("913144");

            function a(e) {
                l.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function i() {
                l.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function r() {
                l.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        79112: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var l = n("872717"),
                a = n("95410"),
                i = n("913144"),
                r = n("211895"),
                s = n("26092"),
                u = n("599110"),
                o = n("315102"),
                c = n("730622"),
                d = n("49111"),
                E = n("191349"),
                _ = n("782340"),
                T = {
                    open() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                openWithoutBackstack: !1
                            };
                        (0, r.default)(e, t, n)
                    },
                    init: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_INIT",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    close() {
                        let e = s.default.onClose;
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), null != e && e()
                    },
                    setSection(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SET_SECTION",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    clearSubsection(e) {
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                            forSection: e
                        })
                    },
                    clearScrollPosition(e) {
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                            forSection: e
                        })
                    },
                    updateAccount(e) {
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                            settings: e
                        })
                    },
                    submitComplete() {
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                        })
                    },
                    reset() {
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_RESET"
                        })
                    },
                    saveAccountChanges(e, t) {
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT"
                        });
                        let {
                            username: n,
                            email: r,
                            emailToken: s,
                            password: T,
                            avatar: I,
                            newPassword: S,
                            discriminator: N
                        } = e, {
                            close: A
                        } = t;
                        return (0, c.default)(e => {
                            let t = {
                                    username: n,
                                    email: r,
                                    email_token: s,
                                    password: T,
                                    avatar: I,
                                    new_password: S,
                                    ...e,
                                    discriminator: null != N && "" !== N ? N : void 0
                                },
                                i = a.default.get(d.DEVICE_TOKEN),
                                u = (0, E.getDevicePushProvider)();
                            null != u && null != i && (t.push_provider = u, t.push_token = i);
                            let o = a.default.get(d.DEVICE_VOIP_TOKEN);
                            return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != o && (t.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, t.push_voip_token = o), l.default.patch({
                                url: d.Endpoints.ME,
                                oldFormErrors: !0,
                                body: t
                            })
                        }, {
                            checkEnabled: !1,
                            modalProps: {
                                title: _.default.Messages.TWO_FA_CHANGE_ACCOUNT
                            },
                            hooks: {
                                onEarlyClose: () => i.default.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }).then(e => {
                            let t = e.body,
                                n = t.token;
                            return u.default.track(d.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, o.isAnimatedIconHash)(t.avatar)
                            }), delete t.token, i.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: t.id
                            }), i.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: t
                            }), null != S && i.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: S
                            }), null != T && null != S && i.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id
                            }), A ? this.close() : this.submitComplete(), e
                        }, e => (i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: e.body
                        }), e))
                    }
                }
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983"),
                a = n("884691"),
                i = n("414456"),
                r = n.n(i),
                s = n("77078"),
                u = n("782340"),
                o = n("347129");
            class c extends a.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: i,
                        error: c,
                        isLoading: d,
                        maxLength: E,
                        transitionState: _,
                        helpMessage: T,
                        retryPrompt: I,
                        retrySuccessMessage: S
                    } = this.props, {
                        code: N,
                        errorMessage: A,
                        retrySuccess: R
                    } = this.state, m = a.Children.count(i) > 0 ? (0, l.jsx)(s.Card, {
                        type: s.Card.Types.WARNING,
                        className: o.card,
                        children: (0, l.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: i
                        })
                    }) : null, C = null != I ? (0, l.jsxs)(s.Text, {
                        className: r(o.submitText, o.spacing),
                        variant: "text-sm/normal",
                        children: [(0, l.jsx)("br", {}), (0, l.jsx)(s.Clickable, {
                            className: r(o.spacing, o.link),
                            onClick: this.handleRetry,
                            children: (0, l.jsx)(s.Anchor, {
                                children: I
                            })
                        })]
                    }) : null, f = R ? (0, l.jsx)(s.Card, {
                        type: s.Card.Types.SUCCESS,
                        className: o.card,
                        children: (0, l.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: S
                        })
                    }) : null;
                    return (0, l.jsx)(s.ModalRoot, {
                        transitionState: _,
                        children: (0, l.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, l.jsx)(s.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(s.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, l.jsxs)(s.ModalContent, {
                                children: [null != T ? (0, l.jsx)(s.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: o.spacing,
                                    children: T
                                }) : null, m, f, (0, l.jsxs)(s.FormItem, {
                                    title: this.getLabelText(),
                                    className: o.spacing,
                                    children: [(0, l.jsx)(s.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != E ? E : 10,
                                        value: N,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, l.jsx)(s.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: o.error,
                                        children: null != c ? c : A
                                    }) : null, C]
                                })]
                            }), (0, l.jsxs)(s.ModalFooter, {
                                children: [(0, l.jsx)(s.Button, {
                                    type: "submit",
                                    disabled: d || 0 === N.length,
                                    children: null != n ? n : u.default.Messages.CONFIRM
                                }), (0, l.jsx)(s.Button, {
                                    onClick: this.handleCancel,
                                    disabled: d,
                                    look: s.Button.Looks.LINK,
                                    color: s.Button.Colors.PRIMARY,
                                    children: u.default.Messages.CANCEL
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
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? u.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : u.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? u.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : u.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
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
            c.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var d = c
        },
        80300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                backgroundImagePreloader: function() {
                    return c
                }
            });
            var l = n("37983"),
                a = n("884691"),
                i = n("310013"),
                r = n.n(i),
                s = n("407063");
            let u = /url\(['"](.*)['"]\)/,
                o = e => {
                    if (null == e || "" === e || "none" === e) return null;
                    let t = e.match(u);
                    return null != t ? t[1] : e
                };

            function c(e) {
                class t extends a.Component {
                    componentDidUpdate(e, t) {
                        if (t === this.state) return;
                        let {
                            cached: n,
                            loaded: l
                        } = this.state, {
                            style: a
                        } = this.props, i = null != a ? o(a.backgroundImage) : null;
                        null == i && i !== n ? this.setState({
                            loaded: !0,
                            cached: i
                        }) : this.cachedURLs.indexOf(i) >= 0 ? this.setState({
                            loaded: !0,
                            cached: i
                        }) : null != i && i !== n && !0 === l && this.setState({
                            loaded: !1
                        }, () => this.preloadURL(i))
                    }
                    preloadURL(e) {
                        this.canceller && this.canceller(), this.canceller = (0, s.loadImage)(e, t => {
                            this.canceller && (this.canceller = null), !t && (this.cachedURLs.push(e), this.setState({
                                cached: e,
                                loaded: !0
                            }));
                            let {
                                onBackgroundImageLoad: n
                            } = this.props;
                            n && n(t, e)
                        })
                    }
                    componentWillUnmount() {
                        this.canceller && this.canceller(), this.cachedURLs.length = 0
                    }
                    render() {
                        let {
                            style: t,
                            onBackgroundImageLoad: n,
                            ...a
                        } = this.props, {
                            loaded: i,
                            cached: r
                        } = this.state;
                        if (!i && null != t) {
                            var s;
                            t = {
                                ...t,
                                backgroundImage: null == (s = r) || "" === s || "none" === s ? "none" : "url(".concat(s, ")")
                            }
                        }
                        return (0, l.jsx)(e, {
                            style: t,
                            ...a
                        })
                    }
                    constructor(e) {
                        super(e), this.cachedURLs = [], this.canceller = null;
                        let {
                            style: t
                        } = e, n = null != t ? o(t.backgroundImage) : null;
                        this.cachedURLs = [n], this.state = {
                            cached: n,
                            loaded: !0
                        }
                    }
                }
                return r(t, e), t
            }
        },
        812204: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), (l = a || (a = {})).POPOUT_WINDOW = "popout window", l.OVERLAY = "overlay", l.NOTICE = "notice", l.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", l.BADGE = "badge", l.USER_SETTINGS = "user settings", l.USER_SETTINGS_MENU = "user settings menu", l.ACCOUNT = "account", l.TEXT_AND_IMAGES = "text and images", l.GUILD_SETTINGS = "guild settings", l.OVERVIEW = "overview", l.STICKERS = "stickers", l.VANITY_URL = "vanity url", l.PREMIUM_MARKETING = "premium marketing", l.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", l.PREMIUM_PAYMENT_MODAL = "premium payment modal", l.PREMIUM_UPSELL_ALERT = "premium upsell alert", l.PREMIUM_UPSELL_MODAL = "premium upsell modal", l.PREMIUM_SETTINGS = "premium settings", l.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", l.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", l.CHANNEL_CALL = "channel call", l.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", l.RTC_PANEL = "rtc panel", l.SOUNDBOARD_BUTTON = "soundboard button", l.SOUNDBOARD_POPOUT = "soundboard popout", l.SOUNDBOARD_WHEEL = "soundboard wheel", l.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", l.GIFT_BUTTON = "gift button", l.EXPRESSION_SUGGESTIONS = "expression suggestions", l.EMOJI_PICKER = "emoji picker", l.STICKER_PICKER = "sticker picker", l.STICKER_POPOUT = "sticker popout", l.PREMIUM_UPSELL = "premium upsell", l.EMPTY_STATE = "empty state", l.SUBSCRIPTION_DETAILS = "subscription details", l.SUBSCRIPTION_HEADER = "subscription header", l.ACCOUNT_CREDIT_BANNER = "account credit banner", l.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", l.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", l.STREAM_QUALITY_INDICATOR = "stream quality indicator", l.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", l.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", l.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", l.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", l.RPC = "rpc", l.BILLING_STANDALONE = "billing standalone", l.GUILD_CHANNEL_LIST = "guild channel list", l.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", l.STICKER_MESSAGE = "sticker message", l.CHANNEL_TEXT_AREA = "channel text area", l.HEADER_BAR = "header bar", l.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", l.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", l.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", l.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", l.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", l.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", l.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", l.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", l.GUILD_HEADER = "guild header", l.GUILD_BANNER = "guild banner", l.GUILD_BANNER_NOTICE = "guild banner notice", l.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", l.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", l.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", l.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", l.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", l.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", l.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", l.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", l.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", l.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", l.GUILDS_LIST = "guilds list", l.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", l.ACTIVITY_DIRECTORY = "activity directory", l.ACTIVITY_TILE = "activity tile", l.ACTIVITY_UPSELL = "activity upsell", l.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", l.INSTANT_INVITE_MODAL = "instant invite modal", l.IMAGE_CROPPING_MODAL = "image cropping modal", l.GIF_PICKER = "gif picker", l.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", l.INVITE_MODAL = "invite modal", l.INVITE_EMBED = "invite embed", l.NEW_GUILD_BUTTON = "new guild button", l.CHARACTER_COUNT = "character count", l.DM_CHANNEL = "dm channel", l.GUILD_CHANNEL = "guild channel", l.FORUM_CHANNEL = "forum channel", l.FILE_UPLOAD_POPOUT = "file upload popout", l.EMOJI = "emoji", l.PROFILE = "profile", l.PROFILE_MODAL = "profile modal", l.PROFILE_POPOUT = "profile popout", l.GUILD_PROFILE = "guild profile", l.EDIT_AVATAR = "edit avatar", l.EDIT_BANNER = "edit banner", l.CHAT_INPUT = "chat input", l.CREATE_THREAD = "create thread", l.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", l.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", l.SELECT_IMAGE_MODAL = "select image modal", l.VIDEO_BACKGROUND_OPTIONS = "video background options", l.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", l.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", l.CAMERA_PREVIEW = "camera preview", l.HOME_PAGE_PREMIUM_TAB = "home page premium tab", l.HOME_PAGE_SHOP_TAB = "home page shop tab", l.PREMIUM_MARKETING_SURFACE = "premium marketing surface", l.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", l.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", l.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", l.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", l.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", l.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", l.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", l.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", l.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", l.PREMIUM_MARKETING_FEATURE = "premium marketing feature", l.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", l.PREMIUM_MARKETING_FOOTER = "premium marketing footer", l.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", l.CHANNEL_CALL_ACTION_BAR = "channel call action bar", l.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", l.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", l.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", l.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", l.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", l.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", l.VOICE_CONTROL_TRAY = "voice control tray", l.ACTIVE_NOW_COLUMN = "active now column", l.CONTEXT_MENU = "context menu", l.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", l.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", l.CHANNEL_CATEGORY_MENU = "channel category menu", l.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", l.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", l.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", l.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", l.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", l.CHANNEL_TITLE_MENU = "channel title menu", l.GROUP_DM_MENU = "group dm menu", l.AUDIT_LOG_USER_MENU = "audit log user menu", l.BANNED_USER_MENU = "banned user menu", l.DM_USER_MENU = "dm user menu", l.GROUP_DM_USER_MENU = "group dm user menu", l.GUILD_CHANNEL_USER_MENU = "guild channel user menu", l.GUILD_MODERATION_USER_MENU = "guild moderation user menu", l.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", l.GUILD_SETTINGS_USER_MENU = "guild settings user menu", l.GUILD_USER_MENU = "guild user menu", l.THREAD_USER_MENU = "thread user menu", l.USER_GENERIC_MENU = "user generic menu", l.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", l.VOICE_ACTION_SHEET = "voice action sheet", l.FOCUSED_VOICE_CONTROLS = "focused voice controls", l.MASKED_LINK = "masked link", l.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", l.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", l.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", l.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", l.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", l.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", l.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", l.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", l.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", l.ACCOUNT_PROFILE_POPOUT = "account profile popout", l.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", l.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", l.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", l.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", l.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", l.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", l.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", l.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", l.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", l.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", l.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", l.STAGE_VIDEO_LIMIT = "stage video limit", l.ACTIVITIES_MINI_SHELF = "activities mini shelf", l.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", l.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", l.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", l.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", l.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", l.APP_ICON_EDITOR = "app icon editor", l.CLIENT_THEMES_EDITOR = "client themes editor", l.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", l.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", l.SHARE_NITRO_EMBED = "share nitro embed", l.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", l.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", l.REFERRAL_TRIALS_POPOUT = "referral trials popout", l.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", l.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", l.ACTIVITY_BOOKMARK = "activity bookmark", l.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", l.ACTIVITY_DETAIL_PAGE = "activity detail page", l.ACTIVITIES_PAGE = "activities page", l.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", l.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", l.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", l.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", l.ACTIVITIES_HAPPENING_NOW = "activities happening now", l.MEDIA_VIEWER = "media viewer", l.MESSAGE_LONG_PRESS_MENU = "message long press menu", l.COLLECTIBLES_SHOP = "collectibles shop", l.COLLECTIBLES_SHOP_CARD = "collectibles shop card", l.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", l.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", l.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", l.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", l.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", l.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", l.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", l.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", l.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", l.PREMIUM_BILLING_INFO = "premium billing info", l.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", l.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", l.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", l.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", l.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", l.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", l.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", l.PREMIUM_PLAN_SELECT = "premium_plan_select", l.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", l.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", l.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", l.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", l.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", l.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", l.MEMBER_SAFETY_PAGE = "member safety page", l.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", l.GUILD_MEMBER_MOD_VIEW = "guild member mod view", l.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", l.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", l.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", l.GUILD_SHOP_PAGE = "guild shop page", l.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", l.MESSAGE_REMIX_TAG = "message remix tag", l.MESSAGE_REMIX_BUTTON = "message remix button", l.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", l.CLIPS_SETTINGS = "clips settings", l.CLIPS_GALLERY = "clips gallery", l.CLIPS_GALLERY_ITEM = "clips gallery item", l.CLIPS_EDITOR = "clips editor", l.CLIPS_SHARE_MODAL = "clips share modal", l.CHANNEL_ATTACH_BUTTON = "channel attach button", l.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", l.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", l.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", l.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", l.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", l.GUILD_EVENT_CARD = "guild event card", l.EVENT_SETTINGS = "event settings";
            var l, a, i = a
        },
        757767: function(e, t, n) {
            "use strict";
            var l, a;
            n.r(t), n.d(t, {
                RecurrenceOptions: function() {
                    return l
                }
            }), (a = l || (l = {}))[a.NONE = 0] = "NONE", a[a.WEEKLY = 1] = "WEEKLY", a[a.MONTHLY = 2] = "MONTHLY", a[a.YEARLY = 3] = "YEARLY", a[a.WEEKDAY_ONLY = 4] = "WEEKDAY_ONLY"
        },
        651072: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("862205");
            let a = (0, l.createExperiment)({
                kind: "guild",
                id: "2023-09_recurring_events",
                label: "Allows guild to create recurring events",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Recurring Events are enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var i = a
        },
        776863: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useChannelsUserCanStartStageIn: function() {
                    return s
                }
            });
            var l = n("446674"),
                a = n("923510"),
                i = n("923959"),
                r = n("957255");

            function s(e) {
                var t;
                let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null;
                return (0, l.useStateFromStoresArray)([i.default, r.default], () => {
                    let e = i.default.getChannels(n)[i.GUILD_VOCAL_CHANNELS_KEY];
                    return e.reduce((e, t) => {
                        let n = t.channel;
                        return n.isGuildStageVoice() ? (function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.default;
                            return !!e.isGuildStageVoice() && t.can(a.MODERATE_STAGE_CHANNEL_PERMISSIONS, e)
                        }(t.channel, r.default) && e.push(n), e) : e
                    }, [])
                }, [n])
            }
        },
        822516: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MAX_DAYS_AHEAD_AN_EVENT_CAN_START: function() {
                    return u
                },
                MAX_DAYS_AHEAD_AN_EVENT_CAN_END: function() {
                    return o
                },
                MAX_YEARS_AHEAD_RECURRING_EVENT: function() {
                    return c
                },
                getInitialEventStartDate: function() {
                    return T
                },
                getEventTimeData: function() {
                    return N
                },
                getScheduleFromEventData: function() {
                    return R
                },
                getScheduleFromEvent: function() {
                    return m
                },
                getRRule: function() {
                    return C
                },
                generateNextRecurrences: function() {
                    return f
                },
                recurrenceOptionToRecurrenceRule: function() {
                    return O
                },
                recurrenceRuleToOption: function() {
                    return h
                }
            });
            var l = n("917351"),
                a = n("866227"),
                i = n.n(a),
                r = n("614137"),
                s = n("757767");
            n("745049");
            let u = 365,
                o = u + 1,
                c = 4,
                d = [r.RRule.MO.weekday, r.RRule.TU.weekday, r.RRule.WE.weekday, r.RRule.TH.weekday, r.RRule.FR.weekday],
                E = [r.RRule.SU.weekday, r.RRule.MO.weekday, r.RRule.TU.weekday, r.RRule.WE.weekday, r.RRule.TH.weekday],
                _ = [r.RRule.TU.weekday, r.RRule.WE.weekday, r.RRule.TH.weekday, r.RRule.FR.weekday, r.RRule.SA.weekday],
                T = () => {
                    let e = i().add(1, "hour"),
                        t = e.hour();
                    return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0)
                },
                I = (e, t) => e.format(e.get("years") === t.get("years") ? "ddd MMM Do \xb7 LT" : "ddd MMM Do, YYYY \xb7 LT"),
                S = (e, t) => {
                    let n = e.diff(t, "days");
                    return n > 1 ? I(e, t) : e.calendar(t)
                };

            function N(e, t, n) {
                null == n && (n = i());
                let l = i(e),
                    a = null != t && "" !== t ? i(t) : void 0,
                    r = null != t && l.isSame(a, "day");
                return {
                    startDateTimeString: S(l, n),
                    endDateTimeString: null != a ? r ? a.format("LT") : I(a, n) : void 0,
                    currentOrPastEvent: l <= n,
                    upcomingEvent: l <= i().add(1, "hour"),
                    withinStartWindow: l <= i().add(15, "minute"),
                    diffMinutes: l.diff(n, "minutes")
                }
            }

            function A(e, t) {
                let n;
                return null != e && (n = {
                    startDate: i(e),
                    endDate: void 0
                }, null != t && (n.endDate = i(t))), n
            }

            function R(e) {
                return A(e.scheduledStartTime, e.scheduledEndTime)
            }

            function m(e) {
                return A(e.scheduled_start_time, e.scheduled_end_time)
            }

            function C(e) {
                return new r.RRule({
                    dtstart: new Date(e.start),
                    until: null != e.end ? new Date(e.end) : null,
                    freq: e.frequency,
                    interval: e.interval,
                    byweekday: null != e.byWeekday ? [...e.byWeekday] : null,
                    bymonth: null != e.byMonth ? [...e.byMonth] : null,
                    bymonthday: null != e.byMonthDay ? [...e.byMonthDay] : null,
                    byyearday: null != e.byYearDay ? [...e.byYearDay] : null,
                    count: e.count
                })
            }

            function f(e, t, n) {
                let l = [],
                    a = null == n,
                    i = null != n ? n : new Date,
                    r = new Date;
                r.setFullYear(r.getFullYear() + c);
                let s = a ? e + 1 : e;
                for (let e = 0; e < s && i < r; e++) {
                    let n = t.after(i);
                    if (null == n) break;
                    i = new Date(n), n.setMilliseconds(0), (!a || e > 0) && l.push(n)
                }
                return l
            }

            function L(e) {
                let t = new r.Weekday(e.toDate().getDay()),
                    n = new r.Weekday(e.toDate().getUTCDay());
                return n.weekday - t.weekday > 0 ? _ : n.weekday - t.weekday < 0 ? E : d
            }

            function O(e, t) {
                let n = function(e, t) {
                    let n = L(t),
                        l = t.toDate();
                    switch (l.setMilliseconds(0), e) {
                        case s.RecurrenceOptions.NONE:
                            return null;
                        case s.RecurrenceOptions.WEEKLY:
                            return new r.RRule({
                                dtstart: l,
                                freq: r.RRule.WEEKLY
                            });
                        case s.RecurrenceOptions.YEARLY:
                            return new r.RRule({
                                dtstart: l,
                                freq: r.RRule.YEARLY
                            });
                        case s.RecurrenceOptions.WEEKDAY_ONLY:
                            return new r.RRule({
                                dtstart: l,
                                freq: r.RRule.DAILY,
                                byweekday: n
                            })
                    }
                }(e, t);
                if (null == n) return null;
                let {
                    dtstart: l,
                    until: a,
                    freq: i,
                    interval: u,
                    byweekday: o,
                    bymonth: c,
                    bymonthday: d,
                    byyearday: E,
                    count: _
                } = n.options;
                return {
                    start: l.toISOString(),
                    end: null == a ? void 0 : a.toISOString(),
                    frequency: i,
                    interval: u,
                    byWeekday: null != o ? new Set(o) : null,
                    byMonth: null != c ? new Set(c) : null,
                    byMonthDay: null != d ? new Set(d) : null,
                    byYearDay: null != E ? new Set(E) : null,
                    count: _
                }
            }

            function h(e, t) {
                if (null == t) return s.RecurrenceOptions.NONE;
                let n = C(t);
                switch (n.options.freq) {
                    case r.RRule.WEEKLY:
                        return s.RecurrenceOptions.WEEKLY;
                    case r.RRule.YEARLY:
                        return s.RecurrenceOptions.YEARLY;
                    case r.RRule.DAILY:
                        if (!(0, l.isEqual)(n.options.byweekday, L(e))) return s.RecurrenceOptions.NONE;
                        return s.RecurrenceOptions.WEEKDAY_ONLY;
                    default:
                        return s.RecurrenceOptions.NONE
                }
            }
        },
        124163: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                i = n("782340"),
                r = n("93086");

            function s(e) {
                let {
                    sendStartNotification: t,
                    setSendStartNotification: n
                } = e, s = t ? i.default.Messages.GUILD_NOTIFY_MEMBERS_ENABLED_NEW : i.default.Messages.GUILD_NOTIFY_MEMBERS_DISABLED_NEW;
                return (0, l.jsx)("div", {
                    className: r.notificationToggle,
                    children: (0, l.jsx)(a.Checkbox, {
                        type: a.Checkbox.Types.INVERTED,
                        size: 14,
                        className: r.checkbox,
                        value: t,
                        onChange: function() {
                            n(!t)
                        },
                        children: (0, l.jsx)(a.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: (0, l.jsx)(a.Tooltip, {
                                position: "bottom",
                                tooltipClassName: r.tooltip,
                                text: i.default.Messages.GUILD_NOTIFY_MEMBERS_TOOLTIP_NEW,
                                "aria-label": i.default.Messages.GUILD_NOTIFY_MEMBERS_TOOLTIP_NEW,
                                children: e => (0, l.jsx)("span", {
                                    ...e,
                                    children: s
                                })
                            })
                        })
                    })
                })
            }
        },
        844808: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983"),
                a = n("884691"),
                i = n("77078"),
                r = n("822516"),
                s = n("757767"),
                u = n("782340");

            function o(e) {
                let {
                    startDate: t,
                    recurrenceRule: n,
                    onRecurrenceChange: o
                } = e, c = a.useMemo(() => (0, r.recurrenceRuleToOption)(t, n), [n, t]), d = function(e) {
                    let t = e.toDate(),
                        n = t.toLocaleString(u.default.getLocale(), {
                            weekday: "long"
                        });
                    return [{
                        value: s.RecurrenceOptions.NONE,
                        label: u.default.Messages.CREATE_EVENT_RECUR_NONE
                    }, {
                        value: s.RecurrenceOptions.WEEKLY,
                        label: u.default.Messages.CREATE_EVENT_RECUR_WEEKLY.format({
                            weekday: n
                        })
                    }, {
                        value: s.RecurrenceOptions.YEARLY,
                        label: u.default.Messages.CREATE_EVENT_RECUR_YEARLY.format({
                            date: t.toLocaleString(u.default.getLocale(), {
                                month: "short",
                                day: "2-digit"
                            })
                        })
                    }, {
                        value: s.RecurrenceOptions.WEEKDAY_ONLY,
                        label: u.default.Messages.CREATE_EVENT_RECUR_WEEKDAYS
                    }]
                }(t), E = e => e.toString();
                return (0, l.jsx)(i.FormItem, {
                    title: u.default.Messages.CREATE_EVENT_RECUR_LABEL,
                    required: !0,
                    children: (0, l.jsx)(i.Select, {
                        placeholder: "gaming",
                        options: d,
                        select: o,
                        serialize: E,
                        isSelected: e => null != c && E(e) === E(c)
                    })
                })
            }
        },
        953143: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("866227"),
                i = n.n(a),
                r = n("77078"),
                s = n("812204"),
                u = n("685665"),
                o = n("381546"),
                c = n("351825"),
                d = n("651072"),
                E = n("822516"),
                _ = n("844808"),
                T = n("782340"),
                I = n("234865");

            function S(e) {
                let {
                    className: t,
                    guildId: n,
                    onScheduleChange: a,
                    onRecurrenceChange: S,
                    onTimeChange: N,
                    timeSelected: A = !0,
                    schedule: R,
                    recurrenceRule: m,
                    showEndDate: C = !1,
                    requireEndDate: f = !1,
                    disableStartDateTime: L = !1
                } = e, {
                    analyticsLocations: O
                } = (0, u.default)(s.default.EVENT_SETTINGS), {
                    enabled: h
                } = d.default.useExperiment({
                    guildId: null != n ? n : "",
                    location: O[0]
                }, {
                    autoTrackExposure: !1
                });
                if (null == R) return null;
                let p = null,
                    g = R.startDate,
                    M = i(),
                    D = i().add(E.MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"),
                    U = i().add(E.MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days"),
                    v = e => {
                        a({
                            ...R,
                            endDate: e
                        })
                    };
                return null != g && d.default.trackExposure({
                    guildId: null != n ? n : "",
                    location: O[0]
                }), C && (p = null != R.endDate || f ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)("div", {
                        className: I.doubleInput,
                        children: [(0, l.jsx)(r.FormItem, {
                            title: T.default.Messages.CREATE_EVENT_END_DATE_LABEL,
                            required: f,
                            children: (0, l.jsx)(r.DateInput, {
                                value: R.endDate,
                                onSelect: v,
                                minDate: R.startDate,
                                maxDate: U
                            })
                        }), (0, l.jsx)(r.FormItem, {
                            title: T.default.Messages.CREATE_EVENT_END_TIME_LABEL,
                            required: f,
                            children: (0, l.jsx)(r.TimeInput, {
                                value: R.endDate,
                                onChange: v
                            })
                        })]
                    }), f ? null : (0, l.jsx)(r.Button, {
                        onClick: () => {
                            v(void 0)
                        },
                        look: r.Button.Looks.BLANK,
                        size: r.Button.Sizes.MIN,
                        children: (0, l.jsxs)("div", {
                            className: I.link,
                            children: [(0, l.jsx)(o.default, {
                                width: 17,
                                height: 17,
                                className: I.removeIcon
                            }), (0, l.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                children: T.default.Messages.CREATE_EVENT_REMOVE_END_TIME_LABEL
                            })]
                        })
                    })]
                }) : (0, l.jsx)(r.Button, {
                    look: r.Button.Looks.BLANK,
                    size: r.Button.Sizes.MIN,
                    onClick: () => {
                        v(i(R.startDate).add(1, "hour"))
                    },
                    children: (0, l.jsxs)("div", {
                        className: I.link,
                        children: [(0, l.jsx)(c.default, {
                            width: 20,
                            height: 20,
                            className: I.addIcon
                        }), (0, l.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            children: T.default.Messages.CREATE_EVENT_ADD_END_TIME_LABEL
                        })]
                    })
                })), (0, l.jsxs)("div", {
                    className: t,
                    children: [(0, l.jsxs)("div", {
                        className: I.doubleInput,
                        children: [(0, l.jsx)(r.FormItem, {
                            title: T.default.Messages.CREATE_EVENT_START_DATE_LABEL,
                            required: !0,
                            children: (0, l.jsx)(r.DateInput, {
                                value: R.startDate,
                                onSelect: e => {
                                    a({
                                        ...R,
                                        startDate: e
                                    })
                                },
                                minDate: M,
                                maxDate: D,
                                disabled: L
                            })
                        }), (0, l.jsx)(r.FormItem, {
                            title: T.default.Messages.CREATE_EVENT_START_TIME_LABEL,
                            required: !0,
                            children: (0, l.jsx)(r.TimeInput, {
                                value: R.startDate,
                                onChange: e => {
                                    e.isValid() && (null == N || N(!0), a({
                                        ...R,
                                        startDate: e
                                    }))
                                },
                                hideValue: !A,
                                disabled: L
                            })
                        })]
                    }), p, h && null != g && null != S && (0, l.jsx)(_.default, {
                        onRecurrenceChange: S,
                        startDate: g,
                        recurrenceRule: m
                    })]
                })
            }
        },
        29913: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                i = n.n(a),
                r = n("77078"),
                s = n("849467"),
                u = n("782340"),
                o = n("130221");

            function c(e) {
                let {
                    guild: t,
                    speakers: n,
                    speakerCount: a,
                    className: c
                } = e, d = n.slice(0, 5), E = d.map(e => {
                    var n, a;
                    return (0, l.jsxs)("div", {
                        className: o.speakerContainer,
                        children: [(0, l.jsx)(r.Avatar, {
                            src: null == e ? void 0 : null === (n = e.user) || void 0 === n ? void 0 : n.getAvatarURL(t.id, 20),
                            size: r.AvatarSizes.SIZE_20,
                            className: o.avatar,
                            "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar")
                        }), (0, l.jsx)("div", {
                            className: o.textInGridContainer,
                            children: (0, l.jsx)(r.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                className: o.textInGrid,
                                children: null == e ? void 0 : e.userNick
                            })
                        })]
                    }, null == e ? void 0 : null === (a = e.user) || void 0 === a ? void 0 : a.id)
                }), _ = a - d.length;
                return (0, l.jsxs)("div", {
                    className: i(o.grid, c),
                    children: [E, _ > 0 && (0, l.jsxs)("div", {
                        className: o.speakerContainer,
                        children: [(0, l.jsx)("div", {
                            className: o.iconMicrophone,
                            children: (0, l.jsx)(s.default, {
                                height: 12
                            })
                        }), (0, l.jsx)(r.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: o.textInGrid,
                            children: u.default.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({
                                count: _
                            })
                        })]
                    })]
                })
            }
        },
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return r
                },
                setHotspotOverride: function() {
                    return s
                },
                clearHotspotOverride: function() {
                    return u
                }
            });
            var l = n("913144"),
                a = n("599110"),
                i = n("49111");

            function r(e) {
                a.default.track(i.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), l.default.wait(() => {
                    l.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function s(e, t) {
                l.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function u(e) {
                l.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("446674"),
                a = n("913144"),
                i = n("197881"),
                r = n("492397");
            let s = new Set,
                u = {};
            class o extends l.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (s = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (u = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && u[e];
                    return !(r.CONFERENCE_MODE_ENABLED || i.ProcessArgs.isDisallowPopupsSet()) && (n || !s.has(e))
                }
                hasHiddenHotspot(e) {
                    return s.has(e)
                }
                getHotspotOverride(e) {
                    return u[e]
                }
                getState() {
                    return {
                        hiddenHotspots: s,
                        hotspotOverrides: u
                    }
                }
            }
            o.displayName = "HotspotStore", o.persistKey = "hotspots", o.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var c = new o(a.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    s = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (s.has(t)) return !1;
                    s.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: n
                    } = e;
                    u[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == u[t]) return !1;
                    delete u[t]
                }
            })
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return r
                },
                getDevicePushProvider: function() {
                    return s
                }
            });
            var l, a, i = n("773336");
            let r = null;

            function s() {
                return (0, i.isAndroid)(), null
            }(l = a || (a = {})).REMINDER = "reminder", l.TOP_MESSAGE_PUSH = "top_messages_push", l.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        887143: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCanSendStageStartNotification: function() {
                    return s
                },
                useDefaultSendStartStageNotificationToggle: function() {
                    return u
                }
            });
            var l = n("446674"),
                a = n("525065"),
                i = n("957255"),
                r = n("843455");

            function s(e) {
                let t = (0, l.useStateFromStores)([i.default], () => null != e && i.default.can(r.Permissions.MENTION_EVERYONE, e), [e]);
                return t
            }

            function u(e) {
                let t = null == e ? void 0 : e.guild_id,
                    n = (0, l.useStateFromStores)([a.default], () => a.default.getMemberCount(t), [t]);
                return null == e || null != n && !(n > 5e4) && !0
            }
        },
        567469: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useStageParticipants: function() {
                    return s
                },
                useStageParticipantsCount: function() {
                    return u
                },
                useSortedRequestToSpeakParticipants: function() {
                    return o
                },
                useActualStageSpeakerCount: function() {
                    return c
                }
            });
            var l = n("446674"),
                a = n("334572"),
                i = n("488464"),
                r = n("998716");

            function s(e, t) {
                let [n] = (0, l.useStateFromStores)([i.default], () => [i.default.getMutableParticipants(e, t), i.default.getParticipantsVersion(e)], [e, t], a.isVersionEqual);
                return n
            }

            function u(e, t) {
                return (0, l.useStateFromStores)([i.default], () => i.default.getParticipantCount(e, t), [e, t])
            }

            function o(e) {
                let [t] = (0, l.useStateFromStores)([i.default], () => {
                    let t = i.default.getMutableRequestToSpeakParticipants(e);
                    return [t, i.default.getRequestToSpeakParticipantsVersion(e)]
                }, [e], a.isVersionEqual);
                return t
            }

            function c(e) {
                return (0, l.useStateFromStores)([i.default], () => {
                    let t = i.default.getMutableParticipants(e, r.StageChannelParticipantNamedIndex.SPEAKER),
                        n = t.filter(e => e.type === r.StageChannelParticipantTypes.VOICE);
                    return n.length
                }, [e])
            }
        },
        193038: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                i = n.n(a),
                r = n("77078"),
                s = n("272339"),
                u = n("333352"),
                o = function(e) {
                    let {
                        count: t,
                        className: n
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: i(u.container, n),
                        children: [(0, l.jsx)(s.default, {
                            width: 12,
                            height: 12,
                            className: u.icon
                        }), (0, l.jsx)(r.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: null != t ? t : 0
                        })]
                    })
                }
        },
        29846: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BlockedUsersNotice: function() {
                    return N
                },
                BlockedUser: function() {
                    return A
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                i = n("669491"),
                r = n("77078"),
                s = n("272030"),
                u = n("328275"),
                o = n("849467"),
                c = n("258078"),
                d = n("823050"),
                E = n("158998"),
                _ = n("325861"),
                T = n("151642"),
                I = n("782340"),
                S = n("960236");
            let N = e => {
                    let {
                        channelId: t
                    } = e, n = (0, T.useStageBlockedUsersCount)(t);
                    return 0 === n ? null : (0, l.jsxs)("div", {
                        className: S.blockedNotice,
                        children: [(0, l.jsx)(u.default, {
                            className: S.blockedIcon,
                            color: i.default.unsafe_rawColors.RED_400.css
                        }), (0, l.jsx)(r.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: I.default.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format({
                                number: n
                            })
                        }), (0, l.jsx)(r.Clickable, {
                            className: S.blockedButton,
                            onClick: e => {
                                (0, s.openContextMenu)(e, e => (0, l.jsx)(R, {
                                    ...e,
                                    channelId: t
                                }), {
                                    position: "left",
                                    align: "bottom"
                                })
                            },
                            children: I.default.Messages.VIEW_ALL
                        })]
                    })
                },
                A = e => {
                    let {
                        user: t,
                        showStatus: n,
                        speaker: i,
                        channelId: s
                    } = e, u = (0, a.useStateFromStores)([_.default], () => _.default.isModerator(t.id, s)), T = null;
                    return n && (T = i ? I.default.Messages.STAGE_SPEAKER : u ? I.default.Messages.STAGE_MODERATOR_TOOLTIP : I.default.Messages.STAGE_AUDIENCE), (0, l.jsxs)("div", {
                        className: S.user,
                        children: [(0, l.jsx)(d.default, {
                            src: t.getAvatarURL(null, 32),
                            size: r.AvatarSizes.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: i ? () => (0, l.jsx)(o.default, {
                                className: S.icon
                            }) : null
                        }, t.id), (0, l.jsxs)("div", {
                            className: S.userInfo,
                            children: [(0, l.jsxs)("div", {
                                className: S.username,
                                children: [(0, l.jsx)(c.default, {
                                    size: n ? c.default.Sizes.SIZE_16 : c.default.Sizes.SIZE_14,
                                    children: E.default.getName(t)
                                }), (0, l.jsx)(c.default, {
                                    size: n ? c.default.Sizes.SIZE_16 : c.default.Sizes.SIZE_14,
                                    color: c.default.Colors.HEADER_SECONDARY,
                                    children: "#".concat(t.discriminator)
                                })]
                            }), (0, l.jsxs)("div", {
                                className: S.username,
                                children: [(0, l.jsx)(r.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-danger",
                                    children: I.default.Messages.BLOCKED
                                }), (0, l.jsxs)(r.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [" ", "| ", T]
                                })]
                            })]
                        })]
                    })
                },
                R = e => {
                    let {
                        channelId: t
                    } = e, n = (0, T.useStageBlockedUsers)(t);
                    return (0, l.jsx)(r.Scroller, {
                        className: S.container,
                        children: n.map(e => {
                            let {
                                user: n
                            } = e;
                            return (0, l.jsx)(A, {
                                user: n,
                                channelId: t
                            }, n.id)
                        })
                    })
                }
        },
        119184: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                i = n.n(a),
                r = n("782340"),
                s = n("53061"),
                u = n("284434"),
                o = n("315956");

            function c(e) {
                let {
                    className: t,
                    children: n
                } = e;
                return (0, l.jsxs)("div", {
                    className: i(s.container, t),
                    children: [(0, l.jsx)("img", {
                        alt: r.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: o,
                        className: i(s.sparkleIcon, s.sparkleBottom)
                    }), n, (0, l.jsx)("img", {
                        alt: r.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: u,
                        className: i(s.sparkleIcon, s.sparkleTop)
                    })]
                })
            }
        },
        911457: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageDiscoveryRecommendationSource: function() {
                    return a
                },
                default: function() {
                    return S
                }
            });
            var l, a, i = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                u = n("77078"),
                o = n("687521"),
                c = n("29913"),
                d = n("580357"),
                E = n("109024"),
                _ = n("228427"),
                T = n("193038"),
                I = n("366091");

            function S(e) {
                let {
                    guild: t,
                    stageInstance: n,
                    showGuildPopout: l,
                    setShowGuildPopout: r,
                    handleGuildNameClick: S,
                    source: N,
                    speakers: A,
                    speakerCount: R,
                    audienceCount: m,
                    channelName: C
                } = e, f = t.id;
                return (0, i.jsx)("div", {
                    className: I.contentContainer,
                    children: (0, i.jsxs)("div", {
                        className: I.headerContainer,
                        children: [(0, i.jsxs)("div", {
                            className: I.guildInfoContainer,
                            children: [(0, i.jsx)(o.default, {
                                guildId: f,
                                shouldShow: l,
                                onRequestClose: () => r(!1),
                                children: () => (0, i.jsxs)(u.Clickable, {
                                    className: I.flexContainerRow,
                                    onClick: S,
                                    children: [(0, i.jsx)(E.default, {
                                        guild: t,
                                        size: E.default.Sizes.MINI,
                                        className: I.guildIcon
                                    }), (0, i.jsxs)("div", {
                                        className: I.flexContainerRow,
                                        children: [(0, i.jsx)(u.Text, {
                                            color: "header-secondary",
                                            variant: "text-sm/normal",
                                            className: s(I.guildName, {
                                                [I.disabled]: null == S
                                            }),
                                            children: t.name
                                        }), (0, i.jsx)(d.default, {
                                            guild: t
                                        })]
                                    })]
                                })
                            }), (0, i.jsxs)("div", {
                                className: I.rightJustifiedContent,
                                children: [N === a.FEATURED && (0, i.jsx)("div", {
                                    className: I.featuredTag,
                                    children: (0, i.jsx)(u.Text, {
                                        variant: "text-sm/normal",
                                        className: I.featuredTagText,
                                        children: "Featured"
                                    })
                                }), (0, i.jsx)(T.default, {
                                    count: m,
                                    className: I.audienceCount
                                })]
                            })]
                        }), (0, i.jsx)(u.Text, {
                            color: "header-primary",
                            variant: "text-lg/semibold",
                            className: I.topicText,
                            children: n.topic
                        }), (0, i.jsx)(u.Text, {
                            color: "header-secondary",
                            className: I.description,
                            variant: "text-sm/normal",
                            children: n.description
                        }), (0, i.jsx)(c.default, {
                            guild: t,
                            speakers: A,
                            speakerCount: R,
                            className: I.speakers
                        }), null != C && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("hr", {
                                className: I.divider
                            }), (0, i.jsxs)("div", {
                                className: I.footer,
                                children: [(0, i.jsx)(_.default, {
                                    width: 20,
                                    height: 20,
                                    className: I.icon
                                }), (0, i.jsx)(u.Text, {
                                    color: "header-secondary",
                                    className: I.label,
                                    variant: "text-sm/normal",
                                    children: C
                                })]
                            })]
                        })]
                    })
                })
            }(l = a || (a = {}))[l.UNSPECIFIED = 0] = "UNSPECIFIED", l[l.TRENDING = 1] = "TRENDING", l[l.PERSONALIZED = 2] = "PERSONALIZED", l[l.USER_GUILDS = 3] = "USER_GUILDS", l[l.FRIENDS_GUILDS = 4] = "FRIENDS_GUILDS", l[l.INTRO_CARD = 5] = "INTRO_CARD", l[l.FEATURED = 6] = "FEATURED"
        },
        444594: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                i = n("77078"),
                r = n("697218"),
                s = n("627490"),
                u = n("987772"),
                o = n("564875"),
                c = n("625687"),
                d = n("701909"),
                E = n("387111"),
                _ = n("567469"),
                T = n("998716"),
                I = n("911457"),
                S = n("49111"),
                N = n("745049"),
                A = n("782340"),
                R = n("600329");

            function m(e) {
                let {
                    icon: t
                } = e;
                return (0, l.jsx)("div", {
                    className: R.iconContainer,
                    children: (0, l.jsx)(t, {
                        width: 24,
                        height: 24
                    })
                })
            }

            function C(e) {
                let {
                    icon: t,
                    text: n
                } = e;
                return (0, l.jsxs)("div", {
                    className: R.listItemContainer,
                    children: [(0, l.jsx)("div", {
                        className: R.listItemIconContainer,
                        children: t
                    }), (0, l.jsx)(i.Text, {
                        className: R.listItemText,
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: n
                    })]
                })
            }

            function f(e) {
                var t;
                let {
                    guild: n,
                    channel: i,
                    stageData: s
                } = e, u = (0, a.useStateFromStores)([r.default], () => r.default.getCurrentUser(), []), o = {
                    id: "1337",
                    guild_id: n.id,
                    channel_id: i.id,
                    topic: s.topic,
                    description: s.description,
                    privacy_level: null !== (t = s.privacyLevel) && void 0 !== t ? t : N.GuildScheduledEventPrivacyLevel.PUBLIC
                }, c = (0, _.useStageParticipants)(i.id, T.StageChannelParticipantNamedIndex.SPEAKER), d = (0, _.useStageParticipantsCount)(i.id, T.StageChannelParticipantNamedIndex.AUDIENCE), S = c.slice(0, 5);
                return null == S.find(e => {
                    var t;
                    return (null === (t = e.user) || void 0 === t ? void 0 : t.id) === (null == u ? void 0 : u.id)
                }) && S.push({
                    user: u,
                    userNick: E.default.getName(n.id, i.id, u)
                }), (0, l.jsx)("div", {
                    className: R.previewCardContainer,
                    children: (0, l.jsx)("div", {
                        className: R.previewCard,
                        children: (0, l.jsx)(I.default, {
                            guild: n,
                            stageInstance: o,
                            showGuildPopout: !1,
                            setShowGuildPopout: () => {},
                            source: I.StageDiscoveryRecommendationSource.UNSPECIFIED,
                            speakers: S,
                            speakerCount: c.length,
                            audienceCount: Math.max(1337, d),
                            channelName: i.name
                        })
                    })
                })
            }

            function L(e) {
                let {
                    guild: t,
                    channel: n,
                    stageData: a,
                    headerId: r,
                    loading: E,
                    onNext: _,
                    onCancel: T,
                    onBack: I
                } = e;
                return null == t || null == n || null == a ? null : (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(f, {
                        guild: t,
                        channel: n,
                        stageData: a
                    }), (0, l.jsxs)(i.ModalContent, {
                        className: R.container,
                        children: [(0, l.jsxs)("div", {
                            className: R.header,
                            children: [(0, l.jsx)(i.Heading, {
                                id: r,
                                className: R.title,
                                variant: "heading-xl/semibold",
                                children: A.default.Messages.START_STAGE_PUBLIC_PREVIEW_TITLE
                            }), (0, l.jsx)(i.Text, {
                                className: R.subtitle,
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: A.default.Messages.START_STAGE_PUBLIC_PREVIEW_SUBTITLE
                            })]
                        }), (0, l.jsxs)("div", {
                            className: R.list,
                            children: [(0, l.jsx)(C, {
                                icon: (0, l.jsx)(m, {
                                    icon: s.default
                                }),
                                text: A.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_ONE
                            }), (0, l.jsx)(C, {
                                icon: (0, l.jsx)(m, {
                                    icon: o.default
                                }),
                                text: A.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_TWO
                            }), (0, l.jsx)(C, {
                                icon: (0, l.jsx)(m, {
                                    icon: u.default
                                }),
                                text: A.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_THREE
                            }), (0, l.jsx)(C, {
                                icon: (0, l.jsx)(c.default, {
                                    className: R.badgeIconBackground,
                                    foreground: R.badgeIconForeground,
                                    width: 40,
                                    height: 40
                                }),
                                text: A.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_FOUR.format({
                                    articleURL: d.default.getArticleURL(S.HelpdeskArticles.STAGE_CHANNEL_GUIDELINES)
                                })
                            })]
                        })]
                    }), (0, l.jsxs)(i.ModalFooter, {
                        children: [(0, l.jsx)(i.Button, {
                            color: i.Button.Colors.GREEN,
                            onClick: _,
                            submitting: E,
                            children: A.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
                        }), (0, l.jsx)(i.Button, {
                            color: i.Button.Colors.PRIMARY,
                            className: R.cancelButton,
                            onClick: T,
                            children: A.default.Messages.CANCEL
                        }), (0, l.jsx)(i.Button, {
                            look: i.Button.Looks.LINK,
                            color: i.Button.Colors.LINK,
                            className: R.backButton,
                            onClick: I,
                            size: i.Button.Sizes.MIN,
                            children: A.default.Messages.BACK
                        })]
                    })]
                })
            }
        },
        813934: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            });
            var l = n("37983"),
                a = n("884691"),
                i = n("866227"),
                r = n.n(i),
                s = n("446674"),
                u = n("77078"),
                o = n("679653"),
                c = n("776863"),
                d = n("822516"),
                E = n("124163"),
                _ = n("953143"),
                T = n("269596"),
                I = n("27618"),
                S = n("697218"),
                N = n("228427"),
                A = n("599110"),
                R = n("887143"),
                m = n("834052"),
                C = n("151642"),
                f = n("29846"),
                L = n("837979"),
                O = n("49111"),
                h = n("745049"),
                p = n("533613"),
                g = n("782340"),
                M = n("529555");

            function D(e) {
                let {
                    stageChannelsInGuild: t,
                    channel: n,
                    onSelectChannel: a
                } = e;
                return null == a ? null : (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(u.FormItem, {
                        title: g.default.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL + " asdf",
                        className: M.channelSelectionFormItem,
                        required: !0,
                        children: (0, l.jsx)(u.SearchableSelect, {
                            value: n.id,
                            options: t.map(e => ({
                                value: e.id,
                                label: (0, o.computeChannelName)(e, S.default, I.default, !0)
                            })),
                            onChange: e => {
                                let n = t.find(t => t.id === e);
                                null != n && a(n)
                            },
                            renderOptionPrefix: () => (0, l.jsx)(N.default, {
                                height: 24
                            })
                        })
                    })
                })
            }

            function U(e) {
                var t, n, i, I, S, N;
                let {
                    channel: U,
                    guild: v,
                    header: P,
                    error: G,
                    loading: x,
                    onSave: y,
                    onEventSave: b,
                    onClose: B,
                    onSelectChannel: k,
                    isEvent: j = !1,
                    defaultOptions: H,
                    isSlideReady: V = !0
                } = e, w = a.useMemo(() => m.default.getStageInstanceByChannel(U.id), [U.id]), [F, Y] = a.useState(null !== (n = null !== (t = null == H ? void 0 : H.topic) && void 0 !== t ? t : null == w ? void 0 : w.topic) && void 0 !== n ? n : ""), [W, K] = a.useState(null !== (i = null == H ? void 0 : H.description) && void 0 !== i ? i : ""), [z] = a.useState(j), [q, X] = a.useState(null !== (I = null == H ? void 0 : H.schedule) && void 0 !== I ? I : {
                    startDate: (0, d.getInitialEventStartDate)()
                }), [Z, J] = a.useState(z && (null == H ? void 0 : H.schedule) != null), Q = (0, R.useCanSendStageStartNotification)(U), $ = (0, R.useDefaultSendStartStageNotificationToggle)(U), ee = null == w && Q && !z, [et, en] = a.useState(ee && $), el = (0, s.useStateFromStores)([T.default], () => T.default.hasHotspot(p.HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE)), ea = h.GuildScheduledEventPrivacyLevel.GUILD_ONLY, [ei] = a.useState(null !== (N = null !== (S = null == H ? void 0 : H.privacyLevel) && void 0 !== S ? S : null == w ? void 0 : w.privacy_level) && void 0 !== N ? N : ea), [er, es] = a.useState(null == H ? void 0 : H.recurrenceRule), eu = (0, C.useStageBlockedUsersCount)(U.id), [eo, ec] = a.useState(!1), ed = (0, o.default)(U), eE = (0, c.useChannelsUserCanStartStageIn)(v), e_ = null != k, eT = eE.length > 1;
                a.useEffect(() => {
                    A.default.track(O.AnalyticEvents.START_STAGE_OPENED, {
                        stage_instance_id: null == w ? void 0 : w.id,
                        can_start_public_stage: !1,
                        guild_id: U.guild_id
                    })
                }, []);
                let eI = e => {
                        if (e.preventDefault(), ei === h.GuildScheduledEventPrivacyLevel.PUBLIC && F.length < 20 && !eo) {
                            ec(!0);
                            return
                        }
                        let t = {
                            topic: F,
                            privacyLevel: ei,
                            sendStartNotification: et
                        };
                        if (z) {
                            if (!Z) return;
                            null == b || b({
                                ...t,
                                schedule: q,
                                description: W,
                                entityType: h.GuildScheduledEventEntityTypes.STAGE_INSTANCE
                            });
                            return
                        }
                        null == y || y(t)
                    },
                    {
                        color: eS,
                        text: eN
                    } = function(e, t, n) {
                        if (n) return {
                            color: u.Button.Colors.BRAND,
                            text: g.default.Messages.SCHEDULE_EVENT
                        };
                        if (t === h.GuildScheduledEventPrivacyLevel.PUBLIC) {
                            if ((null == e ? void 0 : e.privacy_level) !== h.GuildScheduledEventPrivacyLevel.PUBLIC) return {
                                color: u.Button.Colors.BRAND,
                                text: g.default.Messages.CONTINUE
                            }
                        }
                        return null == e ? {
                            color: u.Button.Colors.GREEN,
                            text: g.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
                        } : {
                            color: u.Button.Colors.BRAND,
                            text: g.default.Messages.SAVE_CHANGES
                        }
                    }(w, ei, z),
                    eA = a.useRef(null);
                a.useEffect(() => {
                    var e;
                    V && (null === (e = eA.current) || void 0 === e || e.focus())
                }, [V]);
                let eR = Z && null != q.startDate && q.startDate >= r();
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)(u.ModalContent, {
                        className: M.modalContent,
                        children: [P, (0, l.jsx)("div", {
                            className: M.blockedUsersContainer,
                            children: null == w && eu > 0 && (0, l.jsx)(f.BlockedUsersNotice, {
                                channelId: U.id
                            })
                        }), (0, l.jsxs)("form", {
                            onSubmit: eI,
                            className: M.form,
                            children: [(0, l.jsxs)(u.FormItem, {
                                title: j ? g.default.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL : g.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_LABEL,
                                className: M.topicFormItem,
                                required: !0,
                                children: [(0, l.jsx)(u.TextInput, {
                                    className: M.textInput,
                                    onChange: e => Y(e),
                                    placeholder: g.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_PLACEHOLDER,
                                    maxLength: L.MAX_STAGE_TOPIC_LENGTH,
                                    value: F,
                                    autoComplete: "off",
                                    inputRef: eA
                                }), eo && (0, l.jsx)(u.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-warning",
                                    className: M.warning,
                                    children: g.default.Messages.START_STAGE_PUBLIC_SHORT_TOPIC_WARNING
                                }), null != G ? (0, l.jsx)(u.Text, {
                                    color: "text-danger",
                                    variant: "text-xs/normal",
                                    className: M.warning,
                                    children: G.getAnyErrorMessage()
                                }) : null]
                            }), e_ && eT ? (0, l.jsx)(D, {
                                stageChannelsInGuild: eE,
                                channel: U,
                                onSelectChannel: k
                            }) : null, z && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(_.default, {
                                    className: M.formItem,
                                    onScheduleChange: X,
                                    onRecurrenceChange: e => {
                                        let t = q.startDate;
                                        if (null == t) return;
                                        let n = (0, d.recurrenceOptionToRecurrenceRule)(e, t);
                                        es(n)
                                    },
                                    schedule: q,
                                    recurrenceRule: er,
                                    timeSelected: Z,
                                    onTimeChange: J
                                }), null != q.startDate && q.startDate < r() ? (0, l.jsx)(u.Text, {
                                    color: "text-danger",
                                    variant: "text-xs/normal",
                                    className: M.warning,
                                    children: g.default.Messages.GUILD_EVENT_PAST_START_DATE
                                }) : null]
                            }), j && (0, l.jsx)(u.FormItem, {
                                title: g.default.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
                                className: M.formItem,
                                children: (0, l.jsx)(u.TextArea, {
                                    placeholder: g.default.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
                                    value: W,
                                    onChange: e => K(e),
                                    maxLength: h.GUILD_EVENT_MAX_DESCRIPTION_LENGTH
                                })
                            }), ee ? (0, l.jsx)(E.default, {
                                sendStartNotification: et,
                                setSendStartNotification: en,
                                showNotificationNewBadge: el
                            }) : null, e_ && !eT ? (0, l.jsx)(u.Text, {
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                className: M.channelSelection,
                                children: g.default.Messages.START_STAGE_MODAL_SET_TOPIC_HELP_TEXT.format({
                                    stageName: ed,
                                    stageHook: (e, t) => (0, l.jsx)("span", {
                                        className: M.channelName,
                                        children: U.name
                                    }, t)
                                })
                            }) : null]
                        })]
                    }), (0, l.jsxs)(u.ModalFooter, {
                        children: [(0, l.jsx)(u.Button, {
                            color: eS,
                            onClick: eI,
                            disabled: "" === F || null == ei || j && !eR,
                            submitting: x,
                            children: eN
                        }), (0, l.jsx)(u.Button, {
                            color: u.Button.Colors.PRIMARY,
                            className: M.cancelButton,
                            onClick: B,
                            children: g.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        435768: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983"),
                a = n("884691"),
                i = n("446674"),
                r = n("77078"),
                s = n("305961"),
                u = n("476765"),
                o = n("228427"),
                c = n("834052"),
                d = n("119184"),
                E = n("444594"),
                _ = n("813934"),
                T = n("767680"),
                I = n("249873"),
                S = n("837979"),
                N = n("782340"),
                A = n("636843");

            function R(e) {
                let {
                    guild: t,
                    channel: n,
                    stageInstance: a,
                    headerId: i,
                    onClose: s,
                    loading: u,
                    error: c,
                    onSave: E,
                    defaultOptions: T,
                    isSlideReady: I
                } = e;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)("div", {
                        className: A.content,
                        children: [(0, l.jsx)(d.default, {
                            children: (0, l.jsx)("div", {
                                className: A.stageIconBackground,
                                children: (0, l.jsx)(o.default, {
                                    width: 32,
                                    height: 32,
                                    className: A.stageIcon
                                })
                            })
                        }), (0, l.jsx)(r.Heading, {
                            id: i,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: A.headerTitle,
                            children: null == a ? N.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TITLE : N.default.Messages.EDIT_STAGE_CHANNEL_TITLE
                        }), (0, l.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: A.headerSubtitle,
                            children: null == a ? N.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_SUBTITLE : N.default.Messages.EDIT_STAGE_SUBTITLE
                        })]
                    }), (0, l.jsx)(_.default, {
                        guild: t,
                        channel: n,
                        onSave: E,
                        error: c,
                        loading: u,
                        onClose: s,
                        defaultOptions: T,
                        isSlideReady: I
                    })]
                })
            }

            function m(e) {
                let {
                    channel: t,
                    onClose: n,
                    transitionState: o,
                    ...d
                } = e, _ = (0, u.useUID)(), N = (0, i.useStateFromStores)([s.default], () => s.default.getGuild(t.guild_id)), m = a.useMemo(() => c.default.getStageInstanceByChannel(t.id), [t.id]), {
                    loading: C,
                    error: f,
                    onSave: L
                } = (0, T.default)(t, n), {
                    modalStep: O,
                    setModalStep: h,
                    readySlide: p,
                    handleSlideReady: g,
                    savedOptions: M,
                    handleSettingsSave: D,
                    handleDelayedSave: U
                } = (0, I.default)({
                    stageInstance: m,
                    defaultStep: S.StartStageSteps.STAGE_CHANNEL_SETTINGS,
                    error: f,
                    onSave: L
                });
                return (a.useEffect(() => {
                    null == N && n()
                }, [N, n]), null == N) ? null : (0, l.jsx)(r.ModalRoot, {
                    transitionState: o,
                    "aria-labelledby": _,
                    ...d,
                    size: r.ModalSize.SMALL,
                    children: (0, l.jsxs)(r.Slides, {
                        activeSlide: O,
                        width: 440,
                        onSlideReady: g,
                        children: [(0, l.jsx)(r.Slide, {
                            id: S.StartStageSteps.STAGE_CHANNEL_SETTINGS,
                            children: (0, l.jsx)("div", {
                                className: A.slideContainer,
                                children: (0, l.jsx)(R, {
                                    guild: N,
                                    channel: t,
                                    stageInstance: m,
                                    headerId: _,
                                    onClose: n,
                                    loading: C,
                                    error: f,
                                    onSave: D,
                                    defaultOptions: M,
                                    isSlideReady: p === S.StartStageSteps.STAGE_CHANNEL_SETTINGS
                                })
                            })
                        }), (0, l.jsx)(r.Slide, {
                            id: S.StartStageSteps.PUBLIC_STAGE_PREVIEW,
                            children: (0, l.jsx)("div", {
                                className: A.slideContainer,
                                children: (0, l.jsx)(E.default, {
                                    headerId: _,
                                    guild: N,
                                    channel: t,
                                    stageData: M,
                                    loading: C,
                                    onNext: U,
                                    onCancel: n,
                                    onBack: () => h(S.StartStageSteps.STAGE_CHANNEL_SETTINGS)
                                })
                            })
                        })]
                    })
                })
            }
        },
        767680: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("884691"),
                a = n("851387"),
                i = n("987317"),
                r = n("448993"),
                s = n("597517"),
                u = n("887143"),
                o = n("244480"),
                c = n("834052"),
                d = n("533613");

            function E(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    [E, _] = l.useState(!1),
                    [T, I] = l.useState(null),
                    S = l.useMemo(() => c.default.getStageInstanceByChannel(null == e ? void 0 : e.id), [null == e ? void 0 : e.id]),
                    N = (0, u.useCanSendStageStartNotification)(e),
                    A = async l => {
                        let {
                            topic: u,
                            privacyLevel: c,
                            sendStartNotification: E
                        } = l;
                        if (null != e && "" !== u && null != c) {
                            _(!0), I(null), null != n && (a.default.selectGuild(n), i.default.selectVoiceChannel(e.id));
                            try {
                                let n;
                                null != S ? n = await o.editStage(e, u, c) : (n = await o.startStage(e, u, c, null != E && E), N && s.hideHotspot(d.HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE)), t(n)
                            } catch (t) {
                                let e = new r.APIError(t);
                                I(e), _(!1)
                            }
                        }
                    };
                return {
                    loading: E,
                    error: T,
                    onSave: A
                }
            }
        },
        249873: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("884691"),
                a = n("627445"),
                i = n.n(a),
                r = n("837979"),
                s = n("745049");

            function u(e) {
                let {
                    stageInstance: t,
                    defaultStep: n,
                    error: a,
                    onSave: u
                } = e, [o, c] = l.useState(n), [d, E] = l.useState(), [_, T] = l.useState(null);
                return l.useEffect(() => {
                    null != a && c(r.StartStageSteps.STAGE_CHANNEL_SETTINGS)
                }, [a]), {
                    modalStep: o,
                    setModalStep: c,
                    readySlide: _,
                    handleSlideReady: function(e) {
                        return T(e)
                    },
                    savedOptions: d,
                    handleSettingsSave: function(e) {
                        if (E(e), e.privacyLevel === s.GuildScheduledEventPrivacyLevel.PUBLIC) {
                            if ((null == t ? void 0 : t.privacy_level) !== s.GuildScheduledEventPrivacyLevel.PUBLIC) {
                                c(r.StartStageSteps.PUBLIC_STAGE_PREVIEW);
                                return
                            }
                        }
                        u(e)
                    },
                    handleDelayedSave: function() {
                        i(null != d, "Must have some saved options."), u(d)
                    }
                }
            }
        },
        211895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("913144"),
                a = n("54239"),
                i = n("49111");

            function r() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        openWithoutBackstack: !1
                    };
                l.default.dispatch({
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: e,
                    subsection: t,
                    ...n
                }), (0, a.pushLayer)(i.Layers.USER_SETTINGS)
            }
        },
        26092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            });
            var l = n("917351"),
                a = n.n(l),
                i = n("446674"),
                r = n("913144"),
                s = n("697218"),
                u = n("49111");
            let o = u.FormStates.CLOSED,
                c = null,
                d = null,
                E = {},
                _ = {},
                T = {},
                I = null,
                S = null,
                N = !1,
                A = !1,
                R = null,
                m = null,
                C = null,
                f = [],
                L = null,
                O = null;

            function h(e) {
                var t, n, l, a, i, r;
                let c = s.default.getCurrentUser();
                if (null == c) return p();
                d = null !== (t = e.section) && void 0 !== t ? t : d, L = null !== (n = e.section) && void 0 !== n ? n : d, null != e.subsection && null != d && (E[d] = e.subsection), null != e.scrollPosition && null != d && (_[d] = e.scrollPosition), A = !!e.openWithoutBackstack, o = u.FormStates.OPEN, T = {}, S = {
                    ...I = {
                        [u.UserSettingsSections.ACCOUNT]: {
                            userId: c.id,
                            username: c.username,
                            discriminator: c.discriminator,
                            email: c.email,
                            avatar: c.avatar,
                            password: "",
                            newPassword: null,
                            claimed: c.isClaimed()
                        }
                    }
                }, m = null !== (l = e.onClose) && void 0 !== l ? l : null, C = null !== (a = e.analyticsLocation) && void 0 !== a ? a : null, f = null !== (i = e.analyticsLocations) && void 0 !== i ? i : [], O = null !== (r = e.impressionSource) && void 0 !== r ? r : null
            }

            function p() {
                o = u.FormStates.CLOSED, N = !1, I = null, L = null, S = null, c = null, d = null, E = {}, _ = {}, m = null, C = null, f = [], O = null
            }

            function g() {
                o = u.FormStates.OPEN, T = {}
            }
            class M extends i.default.Store {
                initialize() {
                    this.waitFor(s.default)
                }
                hasChanges() {
                    return null != S && null != I && (!!this.isOpen() || R === u.DrawerTabTypes.USER_SETTINGS) && !a.isEqual(S, I)
                }
                isOpen() {
                    return N
                }
                getPreviousSection() {
                    return c
                }
                getSection() {
                    return d
                }
                getSubsection() {
                    return null != d ? E[d] : null
                }
                getScrollPosition() {
                    return null != d ? _[d] : null
                }
                shouldOpenWithoutBackstack() {
                    return A
                }
                getProps() {
                    return {
                        submitting: o === u.FormStates.SUBMITTING,
                        section: d,
                        subsection: null != d ? E[d] : null,
                        scrollPosition: null != d ? _[d] : null,
                        settings: S,
                        errors: T,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: A,
                        analyticsLocation: C,
                        analyticsLocations: f,
                        initialSection: L,
                        impressionSource: O
                    }
                }
                get onClose() {
                    return m
                }
            }
            M.displayName = "UserSettingsModalStore";
            var D = new M(r.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    N = !0, h(e)
                },
                USER_SETTINGS_MODAL_INIT: h,
                USER_SETTINGS_MODAL_CLOSE: p,
                LOGOUT: p,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    o = u.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (o !== u.FormStates.SUBMITTING) return !1;
                    o = u.FormStates.OPEN, d = u.UserSettingsSections.ACCOUNT, T = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    var t;
                    c = d, d = e.section, C = null, f = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (E[d] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete E[t] : null != d && delete E[d]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete _[t] : null != d && delete _[d]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    let {
                        settings: t
                    } = e;
                    null == S && (S = {});
                    let n = S[u.UserSettingsSections.ACCOUNT];
                    S[u.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: g,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = s.default.getCurrentUser();
                    g(), null != e && (S = {
                        ...I = {
                            [u.UserSettingsSections.ACCOUNT]: {
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
                    return R = e.tab, null == d && R === u.DrawerTabTypes.USER_SETTINGS && h({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        794818: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnalyticsContexts: function() {
                    return a
                },
                MINIMUM_MEMBER_COUNT: function() {
                    return I
                },
                startLurking: function() {
                    return S
                },
                viewGuild: function() {
                    return N
                },
                makeDiscoverableGuild: function() {
                    return A
                },
                trackDiscoveryViewed: function() {
                    return R
                },
                trackDiscoveryExited: function() {
                    return m
                },
                trackSearchClosed: function() {
                    return C
                },
                trackSearchStarted: function() {
                    return f
                },
                trackTagSearchStarted: function() {
                    return L
                },
                trackSearchResultsViewed: function() {
                    return O
                },
                trackGuildJoinClicked: function() {
                    return h
                },
                getDiscoverableGuild: function() {
                    return p
                }
            });
            var l, a, i = n("522632"),
                r = n("872717"),
                s = n("851387"),
                u = n("267567"),
                o = n("393414"),
                c = n("239380"),
                d = n("525065"),
                E = n("305961"),
                _ = n("599110"),
                T = n("49111");
            (l = a || (a = {})).SEARCH = "Search", l.RECOMMENDED = "Recommended", l.POPULAR = "Popular", l.RECOMMENDED_E3 = "Recommended - E3", l.HEADER = "Header";
            let I = ">200";
            async function S(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        channelId: l,
                        onSuccess: a,
                        joinSource: i,
                        loadId: r,
                        setsHistorySnapshot: d = !0
                    } = n,
                    _ = (0, o.getHistory)();
                d && u.default.setHistorySnapshot({
                    ..._
                });
                let T = E.default.getGuild(e),
                    I = {
                        state: {
                            analyticsSource: t
                        }
                    };
                null != T && null != T.joinedAt ? (0, c.transitionToGuild)(e, I) : (await s.default.joinGuild(e, {
                    lurker: !0,
                    source: i,
                    loadId: r,
                    lurkLocation: null == t ? void 0 : t.page
                }), await s.default.transitionToGuildSync(e, {
                    ...I,
                    welcomeModalChannelId: l,
                    search: _.location.search
                }, l)), null == a || a()
            }
            async function N(e) {
                let t, {
                    loadId: n,
                    guildId: l,
                    index: i,
                    analyticsContext: r,
                    categoryId: s
                } = e;
                "string" == typeof r && r in a && (t = r);
                let u = {
                    page: T.AnalyticsPages.GUILD_DISCOVERY,
                    object: T.AnalyticsObjects.CARD,
                    section: t
                };
                await S(l, u, {
                        loadId: n
                    }),
                    function(e) {
                        let {
                            loadId: t,
                            guildId: n,
                            index: l,
                            analyticsContext: a,
                            categoryId: i
                        } = e, r = {
                            page: T.AnalyticsPages.GUILD_DISCOVERY,
                            section: a
                        };
                        "string" != typeof a && null != a.location && (r = a.location), _.default.track(T.AnalyticEvents.GUILD_DISCOVERY_GUILD_SELECTED, {
                            location: r,
                            guild_id: n,
                            load_id: t,
                            card_index: l,
                            location_object: T.AnalyticsObjects.CARD,
                            category_id: i
                        })
                    }({
                        loadId: n,
                        guildId: l,
                        index: i,
                        analyticsContext: r,
                        categoryId: s
                    })
            }

            function A(e) {
                return {
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    splash: e.splash,
                    banner: e.banner,
                    icon: e.icon,
                    features: new Set(e.features),
                    presenceCount: e.approximate_presence_count,
                    memberCount: e.approximate_member_count,
                    premiumSubscriptionCount: e.premium_subscription_count,
                    preferredLocale: e.preferred_locale,
                    discoverySplash: e.discovery_splash,
                    emojis: e.emojis,
                    emojiCount: e.emoji_count,
                    stickers: e.stickers,
                    stickerCount: e.sticker_count,
                    keywords: e.keywords
                }
            }

            function R(e) {
                let {
                    loadId: t,
                    gamesYouPlayGuilds: n,
                    allGuilds: l,
                    categoryId: a,
                    recommendationsSource: i = null
                } = e, r = n.length, s = l.length;
                _.default.track(T.AnalyticEvents.GUILD_DISCOVERY_VIEWED, {
                    load_id: t,
                    num_guilds: r + s,
                    num_guilds_recommended: r,
                    num_guilds_popular: s,
                    recommended_guild_ids: n.map(e => e.id),
                    category_id: a,
                    recommendations_source: i
                })
            }

            function m(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                _.default.track(T.AnalyticEvents.GUILD_DISCOVERY_EXITED, {
                    load_id: e,
                    guild_ids_viewed: t,
                    recommendations_source: n
                })
            }

            function C(e) {
                _.default.track(T.AnalyticEvents.SEARCH_CLOSED, {
                    load_id: e
                })
            }

            function f(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                _.default.track(T.AnalyticEvents.SEARCH_STARTED, {
                    search_type: T.SearchTypes.GUILD_DISCOVERY,
                    load_id: e,
                    location: n.location,
                    category_id: t
                })
            }

            function L(e, t, n, l) {
                _.default.track(T.AnalyticEvents.SEARCH_STARTED, {
                    search_type: T.SearchTypes.GUILD_DISCOVERY_TAG,
                    load_id: e,
                    location: {
                        page: T.AnalyticsPages.GUILD_DISCOVERY,
                        section: n
                    },
                    category_id: t,
                    guild_id: l
                })
            }

            function O(e) {
                let {
                    loadId: t,
                    searchId: n,
                    query: l,
                    guildResults: a,
                    analyticsContext: i,
                    categoryId: r,
                    isTagSearch: s
                } = e;
                _.default.track(T.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                    search_type: s ? T.SearchTypes.GUILD_DISCOVERY_TAG : T.SearchTypes.GUILD_DISCOVERY,
                    load_id: t,
                    search_id: n,
                    total_results: void 0 !== a ? a.length : null,
                    guild_ids: void 0 !== a ? a.map(e => e.id) : null,
                    query: l,
                    location: i.location,
                    category_id: r
                })
            }

            function h(e) {
                let t = u.default.getLoadId(e);
                _.default.track(T.AnalyticEvents.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
                    guild_id: e,
                    load_id: t,
                    guild_size: d.default.getMemberCount(e)
                })
            }
            async function p(e) {
                try {
                    var t, n;
                    let l = await r.default.get({
                            url: T.Endpoints.GUILD_DISCOVERY,
                            query: i.stringify({
                                guild_ids: e
                            }),
                            oldFormErrors: !0
                        }),
                        a = null === (n = l.body) || void 0 === n ? void 0 : null === (t = n.guilds) || void 0 === t ? void 0 : t[0];
                    if (null == a) return a;
                    return A(a)
                } catch (e) {
                    return null
                }
            }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return i
                }
            });
            var l = n("917351"),
                a = n.n(l);
            let i = e => "function" == typeof e ? e() : e;
            a.curry((e, t, n) => i(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let l, a;
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("697218"),
                r = n("615931");
            let s = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                l = e.showModal, s = e.updateModalProps, a = n("551042").closeModal
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: i,
                    modalProps: r = {},
                    hooks: {
                        onEarlyClose: u
                    } = {}
                } = e;
                if (null == l) {
                    null == u || u();
                    return
                }
                let c = l(T, d, r);

                function d() {
                    null == u || u()
                }

                function E(e) {
                    a(c), n(e)
                }

                function _(e) {
                    a(c), i(e)
                }

                function T(e) {
                    return s(c, T, d, {
                        ...r,
                        isLoading: !0
                    }), o({
                        promiseFn: t,
                        resolve: E,
                        reject: _,
                        code: e,
                        mfaCodeHandler: I,
                        isModalOpen: !0
                    })
                }

                function I(e) {
                    let {
                        res: t
                    } = e;
                    s(c, T, d, {
                        ...r,
                        error: t.body.message
                    })
                }
            }

            function o(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: l,
                    code: a,
                    mfaCodeHandler: i = u,
                    isModalOpen: r = !1,
                    ...s
                } = e;
                return t(null != a ? {
                    code: a
                } : {}).then(n, e => {
                    var a, u;
                    if (a = e, u = r, a.body && 60008 === a.body.code || u && 429 === a.status) return i({
                        promiseFn: t,
                        resolve: n,
                        reject: l,
                        res: e,
                        ...s
                    });
                    l(e)
                })
            }

            function c(e, t) {
                var n, l;
                let {
                    checkEnabled: a = null !== (l = null === (n = i.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== l && l,
                    ...s
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, r.resolveThunk)(a) ? u : o)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...s
                    })
                })
            }
        },
        334572: function(e, t, n) {
            "use strict";

            function l(e, t) {
                let [, n] = e, [, l] = t;
                return n === l
            }
            n.r(t), n.d(t, {
                isVersionEqual: function() {
                    return l
                }
            })
        },
        474293: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getClass: function() {
                    return a
                }
            });
            var l = n("159885");

            function a(e, t) {
                for (var n = arguments.length, a = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) a[i - 2] = arguments[i];
                let r = a.reduce((e, t) => e + (0, l.upperCaseFirstChar)(t), ""),
                    s = "".concat(t).concat(r),
                    u = e[s];
                if (null != u) return u
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return s
                },
                updateModalProps: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("551042"),
                i = n("920636");
            let r = (e, t, n) => function(a) {
                return (0, l.jsx)(i.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...a
                })
            };

            function s(e, t, n) {
                return (0, a.openModal)(r(e, t, n), {
                    onCloseCallback: t
                })
            }

            function u(e, t, n, l) {
                return (0, a.updateModal)(e, r(t, n, l))
            }
        }
    }
]);
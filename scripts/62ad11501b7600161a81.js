(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["2501"], {
        856670: function(e, t, n) {
            "use strict";
            e.exports = n.p + "018197f71e03e53562e7.svg"
        },
        693029: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7e5dd7f59f96cc264184.svg"
        },
        666020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                subscribeMembers: function() {
                    return o
                },
                unsubscribeMembers: function() {
                    return l
                },
                subscribeChannel: function() {
                    return a
                },
                subscribeChannelDimensions: function() {
                    return u
                }
            });
            var i = n("913144"),
                r = n("696605");

            function o(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function l(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function a(e, t, n) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: e,
                    channelId: t,
                    ranges: n
                })
            }

            function u(e) {
                let {
                    guildId: t,
                    channelId: n,
                    y: i,
                    height: o,
                    rowHeight: l
                } = e;

                function u(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / l)) + t)
                }
                let s = [];

                function E(e) {
                    let t = e + (r.MINIMUM_RANGE - 1);
                    return s.push([e, t]), t + 1
                }
                let _ = u(.5 * o),
                    d = u(i, -_),
                    c = u(i + o, _);
                for (d > 0 && (d = Math.max(E(0), d)), d = Math.floor(d / r.MINIMUM_RANGE) * r.MINIMUM_RANGE; d <= c;) d = E(d);
                a(t, n, s)
            }
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return r
                },
                popLayer: function() {
                    return o
                },
                popAllLayers: function() {
                    return l
                }
            });
            var i = n("913144");

            function r(e) {
                i.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function o() {
                i.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function l() {
                i.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return r
                },
                updateCardInfo: function() {
                    return o
                },
                clearCardInfo: function() {
                    return l
                },
                updateAddressInfo: function() {
                    return a
                },
                clearError: function() {
                    return u
                }
            });
            var i = n("913144");

            function r(e) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function o(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function l() {
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

            function u() {
                i.default.wait(() => i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return r
                }
            });
            var i = n("913144");

            function r() {
                i.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        152584: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                accountDetailsInit: function() {
                    return T
                },
                accountDetailsClose: function() {
                    return S
                },
                disableAccount: function() {
                    return N
                },
                saveAccountRequest: function() {
                    return f
                },
                saveAccountChanges: function() {
                    return A
                },
                getHarvestStatus: function() {
                    return O
                },
                requestHarvest: function() {
                    return C
                },
                setPendingAvatar: function() {
                    return p
                },
                setPendingGlobalNameName: function() {
                    return m
                },
                setPendingAvatarDecoration: function() {
                    return R
                },
                setPendingProfileEffectID: function() {
                    return L
                },
                clearErrors: function() {
                    return U
                },
                resetPendingAccountChanges: function() {
                    return M
                },
                resetAllPending: function() {
                    return D
                },
                resetAndCloseUserProfileForm: function() {
                    return P
                },
                setDisableSubmit: function() {
                    return h
                }
            });
            var i = n("872717"),
                r = n("95410"),
                o = n("819855"),
                l = n("913144"),
                a = n("393414"),
                u = n("599110"),
                s = n("315102"),
                E = n("730622"),
                _ = n("437822"),
                d = n("49111"),
                c = n("191349"),
                I = n("782340");

            function T() {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function S() {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function N(e, t) {
                let n = t ? I.default.Messages.DELETE_ACCOUNT : I.default.Messages.DISABLE_ACCOUNT,
                    r = t ? d.Endpoints.DELETE_ACCOUNT : d.Endpoints.DISABLE_ACCOUNT;
                return (0, E.default)(t => i.default.post({
                    url: r,
                    body: {
                        password: e,
                        ...t
                    },
                    oldFormErrors: !0
                }), {
                    modalProps: {
                        title: n
                    },
                    checkEnabled: !1
                }).then(() => {
                    _.default.logoutInternal(), (0, a.transitionTo)(d.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function f(e) {
                let t = await i.default.patch({
                        url: d.Endpoints.ME,
                        oldFormErrors: !0,
                        body: e
                    }),
                    n = t.body;
                if (n.token) {
                    let t = n.token;
                    delete n.token, l.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: t,
                        userId: n.id
                    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && l.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return l.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), t
            }

            function A(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: i,
                    emailToken: o,
                    password: a,
                    avatar: _,
                    avatarDecoration: T,
                    newPassword: S,
                    globalName: N
                } = e;
                return l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, E.default)(e => {
                    let l = {
                        username: t,
                        email: i,
                        email_token: o,
                        password: a,
                        avatar: _,
                        discriminator: n,
                        global_name: N,
                        new_password: S,
                        ...e
                    };
                    null === T && (l.avatar_decoration_id = null), null != T && (l.avatar_decoration_id = T.id, l.avatar_decoration_sku_id = T.skuId);
                    let u = r.default.get(d.DEVICE_TOKEN),
                        s = (0, c.getDevicePushProvider)();
                    null != s && null != u && (l.push_provider = s, l.push_token = u);
                    let E = r.default.get(d.DEVICE_VOIP_TOKEN);
                    return null != c.DEVICE_PUSH_VOIP_PROVIDER && null != E && (l.push_voip_provider = c.DEVICE_PUSH_VOIP_PROVIDER, l.push_voip_token = E), f(l)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: I.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => l.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body;
                    return u.default.track(d.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, s.isAnimatedIconHash)(t.avatar)
                    }), l.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function O() {
                return i.default.get({
                    url: d.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function C() {
                return i.default.post({
                    url: d.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function p(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? o.AccessibilityAnnouncer.announce(I.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : o.AccessibilityAnnouncer.announce(I.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function m(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function R(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function L(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: e
                })
            }

            function U() {
                l.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function M() {
                l.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function D() {
                l.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function P() {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function h(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        133403: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                o = n.n(r),
                l = n("77078"),
                a = n("782340"),
                u = n("239636");
            let s = Object.freeze({
                DEFAULT: u.default,
                FILLED: u.filled
            });

            function E(e) {
                let {
                    className: t,
                    onClick: n,
                    "aria-label": r,
                    look: E = s.DEFAULT
                } = e;
                return (0, i.jsx)(l.Clickable, {
                    "aria-label": null != r ? r : a.default.Messages.REMOVE,
                    className: o(u.button, E, t),
                    onClick: n
                })
            }
            E.Looks = s
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("37983"),
                r = n("884691"),
                o = n("414456"),
                l = n.n(o),
                a = n("77078"),
                u = n("782340"),
                s = n("347129");
            class E extends r.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: o,
                        error: E,
                        isLoading: _,
                        maxLength: d,
                        transitionState: c,
                        helpMessage: I,
                        retryPrompt: T,
                        retrySuccessMessage: S
                    } = this.props, {
                        code: N,
                        errorMessage: f,
                        retrySuccess: A
                    } = this.state, O = r.Children.count(o) > 0 ? (0, i.jsx)(a.Card, {
                        type: a.Card.Types.WARNING,
                        className: s.card,
                        children: (0, i.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: o
                        })
                    }) : null, C = null != T ? (0, i.jsxs)(a.Text, {
                        className: l(s.submitText, s.spacing),
                        variant: "text-sm/normal",
                        children: [(0, i.jsx)("br", {}), (0, i.jsx)(a.Clickable, {
                            className: l(s.spacing, s.link),
                            onClick: this.handleRetry,
                            children: (0, i.jsx)(a.Anchor, {
                                children: T
                            })
                        })]
                    }) : null, p = A ? (0, i.jsx)(a.Card, {
                        type: a.Card.Types.SUCCESS,
                        className: s.card,
                        children: (0, i.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: S
                        })
                    }) : null;
                    return (0, i.jsx)(a.ModalRoot, {
                        transitionState: c,
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
                                    className: s.spacing,
                                    children: I
                                }) : null, O, p, (0, i.jsxs)(a.FormItem, {
                                    title: this.getLabelText(),
                                    className: s.spacing,
                                    children: [(0, i.jsx)(a.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != d ? d : 10,
                                        value: N,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, i.jsx)(a.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: s.error,
                                        children: null != E ? E : f
                                    }) : null, C]
                                })]
                            }), (0, i.jsxs)(a.ModalFooter, {
                                children: [(0, i.jsx)(a.Button, {
                                    type: "submit",
                                    disabled: _ || 0 === N.length,
                                    children: null != n ? n : u.default.Messages.CONFIRM
                                }), (0, i.jsx)(a.Button, {
                                    onClick: this.handleCancel,
                                    disabled: _,
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.PRIMARY,
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
                    return l
                }
            });
            var i = n("872717"),
                r = n("49111"),
                o = n("782340");
            class l extends i.default.V8APIError {
                constructor(e, t) {
                    super(e, t, null != t ? o.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: r.Links.STATUS,
                        details: "".concat(t)
                    }) : o.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: r.Links.STATUS
                    }))
                }
            }
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("872717"),
                r = n("49111"),
                o = n("782340");
            class l extends i.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? o.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: r.Links.STATUS,
                        details: "".concat(t)
                    }) : o.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: r.Links.STATUS
                    }))
                }
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return o
                }
            });
            var i = n("884691"),
                r = n("599110");
            let o = () => i.useContext(r.AnalyticsContext)
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("884691");

            function r(e) {
                let [t, n] = (0, i.useState)(!1), r = (0, i.useRef)(e.current);
                return (0, i.useEffect)(() => {
                    r.current = e.current
                }, [e]), (0, i.useEffect)(() => {
                    let e = r.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        i = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i)
                    }
                }, [r]), t
            }
        },
        206625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("884691");

            function r(e, t) {
                let n = i.useRef(e);
                return i.useEffect(() => {
                    function e(e) {
                        null != n.current && !n.current.contains(e.target) && t()
                    }
                    return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, [n, t]), n
            }
        },
        689988: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("704744");
            var i = n("913144");
            class r {
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
        750560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return a
                }
            }), n("37983");
            var i = n("884691"),
                r = n("917351"),
                o = n.n(r);
            n("233736");
            var l = n("666020");

            function a(e) {
                i.useEffect(() => (o.forEach(e, (e, t) => (0, l.subscribeMembers)(t, e)), () => {
                    o.forEach(e, (e, t) => (0, l.unsubscribeMembers)(t, e))
                }), [e])
            }
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("773336");
            async function r(e, t) {
                let {
                    default: r
                } = await n.el("572544").then(n.bind(n, "572544")), o = r(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != o) o(null);
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
                    return o
                }
            }), (i = r || (r = {})).POPOUT_WINDOW = "popout window", i.OVERLAY = "overlay", i.NOTICE = "notice", i.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", i.BADGE = "badge", i.USER_SETTINGS = "user settings", i.USER_SETTINGS_MENU = "user settings menu", i.ACCOUNT = "account", i.TEXT_AND_IMAGES = "text and images", i.GUILD_SETTINGS = "guild settings", i.OVERVIEW = "overview", i.STICKERS = "stickers", i.VANITY_URL = "vanity url", i.PREMIUM_MARKETING = "premium marketing", i.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", i.PREMIUM_PAYMENT_MODAL = "premium payment modal", i.PREMIUM_UPSELL_ALERT = "premium upsell alert", i.PREMIUM_UPSELL_MODAL = "premium upsell modal", i.PREMIUM_SETTINGS = "premium settings", i.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", i.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", i.CHANNEL_CALL = "channel call", i.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", i.RTC_PANEL = "rtc panel", i.SOUNDBOARD_BUTTON = "soundboard button", i.SOUNDBOARD_POPOUT = "soundboard popout", i.SOUNDBOARD_WHEEL = "soundboard wheel", i.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", i.GIFT_BUTTON = "gift button", i.EXPRESSION_SUGGESTIONS = "expression suggestions", i.EMOJI_PICKER = "emoji picker", i.STICKER_PICKER = "sticker picker", i.STICKER_POPOUT = "sticker popout", i.PREMIUM_UPSELL = "premium upsell", i.EMPTY_STATE = "empty state", i.SUBSCRIPTION_DETAILS = "subscription details", i.SUBSCRIPTION_HEADER = "subscription header", i.ACCOUNT_CREDIT_BANNER = "account credit banner", i.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", i.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", i.STREAM_QUALITY_INDICATOR = "stream quality indicator", i.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", i.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", i.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", i.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", i.RPC = "rpc", i.BILLING_STANDALONE = "billing standalone", i.GUILD_CHANNEL_LIST = "guild channel list", i.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", i.STICKER_MESSAGE = "sticker message", i.CHANNEL_TEXT_AREA = "channel text area", i.HEADER_BAR = "header bar", i.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", i.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", i.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", i.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", i.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", i.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", i.GUILD_HEADER = "guild header", i.GUILD_BANNER = "guild banner", i.GUILD_BANNER_NOTICE = "guild banner notice", i.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", i.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", i.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", i.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", i.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", i.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", i.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", i.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", i.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", i.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", i.GUILDS_LIST = "guilds list", i.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", i.ACTIVITY_DIRECTORY = "activity directory", i.ACTIVITY_TILE = "activity tile", i.ACTIVITY_UPSELL = "activity upsell", i.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", i.INSTANT_INVITE_MODAL = "instant invite modal", i.IMAGE_CROPPING_MODAL = "image cropping modal", i.GIF_PICKER = "gif picker", i.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", i.INVITE_MODAL = "invite modal", i.INVITE_EMBED = "invite embed", i.NEW_GUILD_BUTTON = "new guild button", i.CHARACTER_COUNT = "character count", i.DM_CHANNEL = "dm channel", i.GUILD_CHANNEL = "guild channel", i.FORUM_CHANNEL = "forum channel", i.FILE_UPLOAD_POPOUT = "file upload popout", i.EMOJI = "emoji", i.PROFILE = "profile", i.PROFILE_MODAL = "profile modal", i.PROFILE_POPOUT = "profile popout", i.GUILD_PROFILE = "guild profile", i.EDIT_AVATAR = "edit avatar", i.EDIT_BANNER = "edit banner", i.CHAT_INPUT = "chat input", i.CREATE_THREAD = "create thread", i.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", i.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", i.SELECT_IMAGE_MODAL = "select image modal", i.VIDEO_BACKGROUND_OPTIONS = "video background options", i.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", i.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", i.CAMERA_PREVIEW = "camera preview", i.HOME_PAGE_PREMIUM_TAB = "home page premium tab", i.HOME_PAGE_SHOP_TAB = "home page shop tab", i.PREMIUM_MARKETING_SURFACE = "premium marketing surface", i.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", i.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", i.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", i.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", i.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", i.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", i.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", i.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", i.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", i.PREMIUM_MARKETING_FEATURE = "premium marketing feature", i.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", i.PREMIUM_MARKETING_FOOTER = "premium marketing footer", i.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", i.CHANNEL_CALL_ACTION_BAR = "channel call action bar", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", i.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", i.VOICE_CONTROL_TRAY = "voice control tray", i.ACTIVE_NOW_COLUMN = "active now column", i.CONTEXT_MENU = "context menu", i.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", i.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", i.CHANNEL_CATEGORY_MENU = "channel category menu", i.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", i.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", i.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", i.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", i.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", i.CHANNEL_TITLE_MENU = "channel title menu", i.GROUP_DM_MENU = "group dm menu", i.AUDIT_LOG_USER_MENU = "audit log user menu", i.BANNED_USER_MENU = "banned user menu", i.DM_USER_MENU = "dm user menu", i.GROUP_DM_USER_MENU = "group dm user menu", i.GUILD_CHANNEL_USER_MENU = "guild channel user menu", i.GUILD_MODERATION_USER_MENU = "guild moderation user menu", i.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", i.GUILD_SETTINGS_USER_MENU = "guild settings user menu", i.GUILD_USER_MENU = "guild user menu", i.THREAD_USER_MENU = "thread user menu", i.USER_GENERIC_MENU = "user generic menu", i.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", i.VOICE_ACTION_SHEET = "voice action sheet", i.FOCUSED_VOICE_CONTROLS = "focused voice controls", i.MASKED_LINK = "masked link", i.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", i.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", i.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", i.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", i.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", i.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", i.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", i.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", i.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", i.ACCOUNT_PROFILE_POPOUT = "account profile popout", i.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", i.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", i.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", i.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", i.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", i.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", i.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", i.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", i.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", i.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", i.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", i.STAGE_VIDEO_LIMIT = "stage video limit", i.ACTIVITIES_MINI_SHELF = "activities mini shelf", i.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", i.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", i.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", i.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", i.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", i.APP_ICON_EDITOR = "app icon editor", i.CLIENT_THEMES_EDITOR = "client themes editor", i.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", i.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", i.SHARE_NITRO_EMBED = "share nitro embed", i.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", i.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", i.REFERRAL_TRIALS_POPOUT = "referral trials popout", i.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", i.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", i.ACTIVITY_BOOKMARK = "activity bookmark", i.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", i.ACTIVITY_DETAIL_PAGE = "activity detail page", i.ACTIVITIES_PAGE = "activities page", i.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", i.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", i.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", i.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", i.ACTIVITIES_HAPPENING_NOW = "activities happening now", i.MEDIA_VIEWER = "media viewer", i.MESSAGE_LONG_PRESS_MENU = "message long press menu", i.COLLECTIBLES_SHOP = "collectibles shop", i.COLLECTIBLES_SHOP_CARD = "collectibles shop card", i.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", i.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", i.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", i.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", i.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", i.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", i.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", i.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", i.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", i.PREMIUM_BILLING_INFO = "premium billing info", i.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", i.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", i.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", i.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", i.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", i.PREMIUM_PLAN_SELECT = "premium_plan_select", i.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", i.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", i.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", i.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", i.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", i.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", i.MEMBER_SAFETY_PAGE = "member safety page", i.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", i.GUILD_MEMBER_MOD_VIEW = "guild member mod view", i.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", i.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", i.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", i.GUILD_SHOP_PAGE = "guild shop page", i.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", i.MESSAGE_REMIX_TAG = "message remix tag", i.MESSAGE_REMIX_BUTTON = "message remix button", i.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", i.CLIPS_SETTINGS = "clips settings", i.CLIPS_GALLERY = "clips gallery", i.CLIPS_GALLERY_ITEM = "clips gallery item", i.CLIPS_EDITOR = "clips editor", i.CLIPS_SHARE_MODAL = "clips share modal", i.CHANNEL_ATTACH_BUTTON = "channel attach button", i.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", i.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", i.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", i.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", i.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", i.GUILD_EVENT_CARD = "guild event card", i.EVENT_SETTINGS = "event settings";
            var i, r, o = r
        },
        988268: function(e, t, n) {
            "use strict";
            var i, r, o, l;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return i
                },
                BotTagTypes: function() {
                    return r
                }
            }), (o = i || (i = {}))[o.GAME = 1] = "GAME", o[o.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", o[o.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (l = r || (r = {}))[l.BOT = 0] = "BOT", l[l.SERVER = 1] = "SERVER", l[l.SYSTEM_DM = 2] = "SYSTEM_DM", l[l.OFFICIAL = 3] = "OFFICIAL", l[l.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", l[l.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", l[l.AI = 6] = "AI", l[l.REMIX = 7] = "REMIX"
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
        526887: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConfettiCannonContext: function() {
                    return E
                },
                ConfettiCannonContextProvider: function() {
                    return _
                }
            });
            var i = n("37983"),
                r = n("884691"),
                o = n("516555"),
                l = n("65597"),
                a = n("206230"),
                u = n("49111");
            let s = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: () => void 0,
                    createConfettiAt: () => void 0,
                    createMultipleConfetti: () => [],
                    createMultipleConfettiAt: () => [],
                    addClickListener: () => u.NOOP,
                    removeClickListener: u.NOOP
                },
                E = r.createContext(s);

            function _(e) {
                let {
                    children: t,
                    confettiCanvas: n,
                    spriteCanvas: u,
                    baseConfig: _,
                    addClickListener: d,
                    removeClickListener: c
                } = e, I = (0, o.useConfettiCannon)(n, u), T = (0, l.default)([a.default], () => a.default.useReducedMotion), S = r.useMemo(() => T ? s : {
                    confettiCanvas: n,
                    cannon: I,
                    createConfetti: (e, t) => I.createConfetti({
                        ..._,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, n, i) => I.createConfetti({
                        ..._,
                        position: {
                            type: "static",
                            value: {
                                x: e,
                                y: t
                            }
                        },
                        ...n
                    }, i),
                    createMultipleConfetti: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return I.createMultipleConfetti({
                            ..._,
                            ...e
                        }, t, n)
                    },
                    createMultipleConfettiAt: function(e, t, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            r = arguments.length > 4 ? arguments[4] : void 0;
                        return I.createMultipleConfetti({
                            ..._,
                            position: {
                                type: "static",
                                value: {
                                    x: e,
                                    y: t
                                }
                            },
                            ...n
                        }, i, r)
                    },
                    addClickListener: d,
                    removeClickListener: c
                }, [d, _, I, n, T, c]);
                return (0, i.jsx)(E.Provider, {
                    value: S,
                    children: t
                })
            }
        },
        145106: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983"),
                r = n("884691"),
                o = n("133403"),
                l = n("49622");

            function a(e) {
                let {
                    hasSetEmoji: t,
                    onClick: n,
                    children: a
                } = e, [u, s] = r.useState(!1);
                return (0, i.jsxs)("div", {
                    className: l.container,
                    onMouseEnter: () => {
                        if (t) {
                            s(!0);
                            return
                        }
                        s(!1)
                    },
                    onMouseLeave: () => {
                        s(!1)
                    },
                    children: [a, t && u && (0, i.jsx)(o.default, {
                        onClick: n,
                        className: l.removeButton
                    })]
                })
            }
        },
        246511: function(e, t, n) {
            "use strict";
            var i, r, o, l;
            n.r(t), n.d(t, {
                InspectedExpressionChangeSource: function() {
                    return i
                },
                PickerContextMenuDataTypes: function() {
                    return r
                }
            }), (o = i || (i = {}))[o.GRID_NAVIGATOR_EVENT = 0] = "GRID_NAVIGATOR_EVENT", o[o.MOUSE_EVENT = 1] = "MOUSE_EVENT", (l = r || (r = {})).EMOJI = "emoji", l.STICKER = "sticker", l.PACK_ICON = "pack-icon"
        },
        390236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("884691");
            let r = i.createContext(void 0);
            var o = r
        },
        689226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRoleIconData: function() {
                    return _
                },
                replaceRoleIconSourceSize: function() {
                    return d
                },
                isRoleIconAssetUrl: function() {
                    return I
                },
                canGuildUseRoleIcons: function() {
                    return T
                }
            });
            var i = n("867805"),
                r = n("407063"),
                o = n("315102"),
                l = n("773336"),
                a = n("49111");
            let u = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                s = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                E = (0, l.isAndroid)(),
                _ = (e, t) => {
                    if (null == e) return null;
                    let n = null != e.unicodeEmoji ? i.default.getByName(i.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: c(e, t),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                d = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()))),
                c = (e, t) => {
                    let {
                        id: n,
                        icon: i
                    } = e;
                    if (null == i) return;
                    if (i.startsWith("data:")) return i;
                    let l = o.SUPPORTS_WEBP ? "webp" : "png",
                        _ = "",
                        d = "quality=lossless";
                    return (null != t && (_ = "size=" + (0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()), d = E ? "" : "&" + d), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(u, "/").concat(n, "/").concat(i, ".").concat(l, "?").concat(_).concat(d) : "".concat(s).concat(a.Endpoints.ROLE_ICON(n, i), "?").concat(_)
                },
                I = e => e.startsWith(u) || e.startsWith("".concat(s, "/roles")) && e.includes("/icons/"),
                T = (e, t) => {
                    var n;
                    let i = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return i || e.features.has(a.GuildFeatures.ROLE_ICONS)
                }
        },
        929423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveGuildIdentityChanges: function() {
                    return a
                },
                setCurrentGuild: function() {
                    return u
                },
                initGuildIdentitySettings: function() {
                    return s
                },
                closeGuildIdentitySettings: function() {
                    return E
                },
                resetAndCloseGuildIdentityForm: function() {
                    return _
                },
                setPendingAvatar: function() {
                    return d
                },
                setPendingBanner: function() {
                    return c
                },
                setPendingBio: function() {
                    return I
                },
                setPendingPronouns: function() {
                    return T
                },
                setPendingNickname: function() {
                    return S
                },
                setPendingThemeColors: function() {
                    return N
                },
                resetPendingMemberChanges: function() {
                    return f
                },
                resetPendingProfileChanges: function() {
                    return A
                },
                resetAllPending: function() {
                    return O
                },
                clearErrors: function() {
                    return C
                },
                setDisableSubmit: function() {
                    return p
                }
            });
            var i = n("872717"),
                r = n("913144"),
                o = n("54239"),
                l = n("49111");
            async function a(e, t) {
                let {
                    nick: n,
                    avatar: o
                } = t;
                if (null == e) throw Error("Need guildId");
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await i.default.patch({
                        url: l.Endpoints.SET_GUILD_MEMBER(e),
                        body: {
                            nick: n,
                            avatar: o
                        },
                        oldFormErrors: !0
                    });
                    return r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), r.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: t.body,
                        guildId: e
                    }), t
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: t.body
                    })
                }
            }

            function u(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function s(e, t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function E() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, o.popLayer)()
            }

            function _() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function d(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function c(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function I(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function T(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function S(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function N(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function f() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function A() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function O() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function C() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function p(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let i, r, o, l, a, u, s, E, _;
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var d = n("446674"),
                c = n("913144"),
                I = n("49111");
            let T = I.FormStates.CLOSED,
                S = {},
                N = !1;

            function f() {
                T = I.FormStates.CLOSED, S = {}, s = null, E = void 0, _ = []
            }

            function A() {
                O(), C(), S = {}, T = I.FormStates.OPEN
            }

            function O() {
                i = void 0, a = void 0
            }

            function C() {
                r = void 0, o = void 0, l = void 0, u = void 0
            }
            class p extends d.default.Store {
                getFormState() {
                    return T
                }
                getErrors() {
                    return S
                }
                showNotice() {
                    return void 0 !== i || void 0 !== r || void 0 !== o || void 0 !== l || void 0 !== a || void 0 !== u
                }
                getPendingAvatar() {
                    return i
                }
                getPendingBanner() {
                    return r
                }
                getPendingBio() {
                    return o
                }
                getPendingNickname() {
                    return a
                }
                getPendingPronouns() {
                    return l
                }
                getPendingAccentColor() {
                    return a
                }
                getPendingThemeColors() {
                    return u
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: r,
                        pendingBio: o,
                        pendingPronouns: l,
                        pendingNickname: a,
                        pendingThemeColors: u
                    }
                }
                getGuild() {
                    return s
                }
                getSource() {
                    return E
                }
                getAnalyticsLocations() {
                    return _
                }
                getIsDisableSubmit() {
                    return N
                }
            }
            p.displayName = "GuildIdentitySettingsStore";
            var m = new p(c.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    s = e.guild, T = I.FormStates.OPEN, S = {}, E = e.source, _ = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: f,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    A(), f()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    s = e.guild, S = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    T = I.FormStates.SUBMITTING, S = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (T !== I.FormStates.SUBMITTING) return !1;
                    T = I.FormStates.OPEN, S = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    T = I.FormStates.OPEN, S = e.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    i = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    r = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
                    let {
                        bio: t
                    } = e;
                    o = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    l = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
                    let {
                        nickname: t
                    } = e;
                    a = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    u = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: O,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: C,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: A,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: A,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    S = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    N = t
                }
            })
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var i = n("872717"),
                r = n("913144"),
                o = n("479756"),
                l = n("38654"),
                a = n("9294"),
                u = n("26989"),
                s = n("337543"),
                E = n("697218"),
                _ = n("49111");
            let d = async (e, t) => {
                let n = null != t ? t : s.default.getInviteKeyForGuildId(e),
                    o = E.default.getCurrentUser(),
                    l = !u.default.isMember(e, null == o ? void 0 : o.id);
                try {
                    let t = await i.default.get({
                        url: _.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: l,
                            invite_code: null != n ? (0, a.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: o
                    } = t;
                    return r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: o.version,
                            description: o.description,
                            formFields: o.form_fields,
                            guild: o.guild
                        }
                    }), o
                } catch (t) {
                    r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, c = async (e, t) => {
                let n = await i.default.patch({
                        url: _.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: o
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: o.version,
                        description: o.description,
                        formFields: o.form_fields
                    }
                })
            }, I = async (e, t) => {
                let n = await i.default.patch({
                        url: _.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: o
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: o.version,
                        description: o.description,
                        formFields: o.form_fields
                    }
                })
            }, T = async (e, t) => {
                await i.default.patch({
                    url: _.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, S = async (e, t) => {
                if (l.default.isFullServerPreview(e)) {
                    (0, o.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await i.default.put({
                            url: _.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: o
                        } = n;
                    return r.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: o
                    }), o
                } catch (e) {
                    throw e
                }
            };
            var N = {
                fetchVerificationForm: d,
                updateVerificationForm: c,
                updateVerificationFormDescription: I,
                enableVerificationForm: T,
                submitVerificationForm: S
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return o
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return l
                },
                MAX_FORM_ELEMENTS: function() {
                    return a
                },
                MAX_NUM_RULES: function() {
                    return u
                },
                MAX_RULE_LENGTH: function() {
                    return s
                },
                MAX_QUESTION_LENGTH: function() {
                    return E
                },
                MAX_NUM_CHOICES: function() {
                    return _
                },
                MAX_CHOICE_LENGTH: function() {
                    return d
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return c
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return I
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return T
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return S
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return N
                }
            });
            var i, r = n("567054");
            r.VerificationFormFieldTypes.VERIFICATION;
            let o = new Set([r.VerificationFormFieldTypes.TERMS]),
                l = new Set([r.VerificationFormFieldTypes.MULTIPLE_CHOICE, r.VerificationFormFieldTypes.TEXT_INPUT, r.VerificationFormFieldTypes.PARAGRAPH]),
                a = 5,
                u = 16,
                s = 300,
                E = 300,
                _ = 8,
                d = 150,
                c = 150,
                I = 1e3,
                T = 300,
                S = "Membership Gating",
                N = "in-app-member-verification";
            (i || (i = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return r
                }
            }), i = n("453265").default;
            let r = i.openMemberVerificationModal;
            i.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return a
                },
                setHasUnsubmittedChanges: function() {
                    return u
                },
                setShowWarning: function() {
                    return s
                }
            });
            var i = n("308503"),
                r = n("659500"),
                o = n("49111");
            let l = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                a = (0, i.default)(e => l),
                u = e => {
                    a.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                s = e => {
                    a.setState({
                        shouldShowWarning: e
                    }), e && r.ComponentDispatch.dispatch(o.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                o = n("599110"),
                l = n("50926"),
                a = n("347977"),
                u = n("394294"),
                s = n("49111");
            let E = () => {
                    o.default.track(s.AnalyticEvents.MODAL_DISMISSED, {
                        type: u.MEMBER_VERIFICATION_TYPE
                    })
                },
                _ = e => {
                    o.default.track(s.AnalyticEvents.OPEN_MODAL, {
                        type: u.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var d = {
                openMemberVerificationModal(e, t) {
                    _(e);
                    let o = async t => {
                        await l.default.submitVerificationForm(e, t)
                    };
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: o,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (a.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, a.setShowWarning)(!0);
                                        return
                                    }
                                    E()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: u.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            E(), a.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, a.setShowWarning)(!0) : (0, r.closeModal)(u.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && E(), (0, r.closeModal)(u.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        270161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CREATE_GUILD_EVENT_CORE_PERMISSIONS: function() {
                    return l
                },
                CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function() {
                    return a
                },
                CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function() {
                    return u
                }
            });
            var i = n("316693"),
                r = n("923510"),
                o = n("49111");
            let l = o.Permissions.VIEW_CHANNEL,
                a = i.default.combine(l, o.Permissions.CONNECT),
                u = i.default.combine(l, r.MODERATE_STAGE_CHANNEL_PERMISSIONS)
        },
        533613: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                HotspotLocations: function() {
                    return i
                }
            }), (r = i || (i = {})).REPORT_PROBLEM_POST_STREAM = "REPORT_PROBLEM_POST_STREAM", r.VIDEO_BACKGROUND_FEEDBACK = "VIDEO_BACKGROUND_FEEDBACK", r.VOICE_CALL_FEEDBACK = "VOICE_CALL_FEEDBACK", r.GUILD_ANALYTICS_GUILD_SETTINGS_MENU = "GUILD_ANALYTICS_GUILD_SETTINGS_MENU", r.NOW_PLAYING_CONSENT_CARD = "NOW_PLAYING_CONSENT_CARD", r.IOS_GUILD_NAV_EDUCATION = "IOS_GUILD_NAV_EDUCATION", r.VOICE_PANEL_INTRODUCTION = "VOICE_PANEL_INTRODUCTION", r.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL = "GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL", r.FAVORITE_EMOJI_TOOLTIP = "FAVORITE_EMOJI_TOOLTIP", r.POST_ACTIVITY_FEEDBACK = "POST_ACTIVITY_FEEDBACK", r.GUILD_DELETE_FEEDBACK = "GUILD_DELETE_FEEDBACK", r.GUILD_LEAVE_FEEDBACK = "GUILD_LEAVE_FEEDBACK", r.APPLICATION_COMMAND_TOOLTIP = "APPLICATION_COMMAND_TOOLTIP", r.GUILD_CAP_INLINE_UPSELL = "GUILD_CAP_INLINE_UPSELL", r.STAGE_CHANNEL_UPSELL = "STAGE_CHANNEL_UPSELL", r.HUB_WAITLIST_UPSELL = "HUB_WAITLIST_UPSELL", r.HUB_NEW = "HUB_NEW", r.HUB_SECOND_EMAIL_CONNECTION_UPSELL = "HUB_SECOND_EMAIL_CONNECTION_UPSELL", r.LIVE_STAGE_NOTIFICATION_BADGE = "LIVE_STAGE_NOTIFICATION_BADGE", r.GUILD_EVENT_UPSELL = "GUILD_EVENT_UPSELL", r.HUB_LINK_CHANNEL_NOTICE = "HUB_LINK_CHANNEL_NOTICE", r.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP = "PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP", r.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP = "ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP", r.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL = "ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL", r.MULTI_ACCOUNT_TOOLTIP = "MULTI_ACCOUNT_TOOLTIP", r.HUB_STUDY_ROOM_NOTICE = "HUB_STUDY_ROOM_NOTICE", r.CHANNEL_BANNER_MEMBER_LIST_NOTICE = "CHANNEL_BANNER_MEMBER_LIST_NOTICE", r.CHANGE_LANGUAGE_MODAL = "CHANGE_LANGUAGE_MODAL", r.ACTIVITY_BEB_TUTORIAL = "ACTIVITY_BEB_TUTORIAL", r.APP_DIRECTORY_SETTINGS_NEW_PILL = "APP_DIRECTORY_SETTINGS_NEW_PILL", r.INVITE_SPLASH_GUILD_HEADER_TOOLTIP = "INVITE_SPLASH_GUILD_HEADER_TOOLTIP", r.ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW", r.ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW", r.ANIMATED_VIDEO_BG_HACKER_DEN_NEW = "ANIMATED_VIDEO_BG_HACKER_DEN_NEW", r.ANIMATED_VIDEO_BG_WUMPICE_NEW = "ANIMATED_VIDEO_BG_WUMPICE_NEW", r.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW = "ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW", r.ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW = "ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW", r.SOUNDBOARD_WHEEL_EDUCATION_MODAL = "SOUNDBOARD_WHEEL_EDUCATION_MODAL", r.IN_APP_REPORTS_FEEDBACK = "IN_APP_REPORTS_FEEDBACK", r.CLIPS_CHANNEL_ATTACH_REMINDER = "CLIPS_CHANNEL_ATTACH_REMINDER"
        },
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return l
                },
                setHotspotOverride: function() {
                    return a
                },
                clearHotspotOverride: function() {
                    return u
                }
            });
            var i = n("913144"),
                r = n("599110"),
                o = n("49111");

            function l(e) {
                r.default.track(o.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), i.default.wait(() => {
                    i.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function a(e, t) {
                i.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function u(e) {
                i.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("446674"),
                r = n("913144"),
                o = n("197881"),
                l = n("492397");
            let a = new Set,
                u = {};
            class s extends i.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (a = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (u = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && u[e];
                    return !(l.CONFERENCE_MODE_ENABLED || o.ProcessArgs.isDisallowPopupsSet()) && (n || !a.has(e))
                }
                hasHiddenHotspot(e) {
                    return a.has(e)
                }
                getHotspotOverride(e) {
                    return u[e]
                }
                getState() {
                    return {
                        hiddenHotspots: a,
                        hotspotOverrides: u
                    }
                }
            }
            s.displayName = "HotspotStore", s.persistKey = "hotspots", s.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var E = new s(r.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    a = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (a.has(t)) return !1;
                    a.add(t)
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
        139321: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HotspotStore: function() {
                    return o.default
                }
            });
            var i = n("533613");
            n.es(i, t);
            var r = n("597517");
            n.es(r, t);
            var o = n("269596")
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return f
                },
                updateImpersonating: function() {
                    return A
                },
                stopImpersonating: function() {
                    return O
                },
                updateImpersonatedChannels: function() {
                    return p
                },
                updateImpersonatedRoles: function() {
                    return m
                },
                updateImpersonatedData: function() {
                    return R
                }
            });
            var i = n("913144"),
                r = n("716241"),
                o = n("393414"),
                l = n("42203"),
                a = n("923959"),
                u = n("26989"),
                s = n("305961"),
                E = n("957255"),
                _ = n("18494"),
                d = n("282109"),
                c = n("599110"),
                I = n("38654"),
                T = n("507950"),
                S = n("49111"),
                N = n("724210");

            function f(e, t) {
                c.default.track(S.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === T.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), C(e)
            }

            function A(e, t) {
                let n = I.default.getData(e);
                null != n && n.type === t.type && (c.default.track(S.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === T.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), C(e))
            }

            function O(e) {
                i.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function C(e) {
                let t = _.default.getChannelId(e),
                    n = l.default.getChannel(t),
                    i = null != t && (0, N.isStaticChannelRoute)(t);
                if (!i && !E.default.can(S.Permissions.VIEW_CHANNEL, n)) {
                    let t = a.default.getDefaultChannel(e);
                    null != t && (0, o.transitionTo)(S.Routes.CHANNEL(e, t.id))
                }
            }

            function p(e, t, n) {
                let i = new Set(d.default.getOptedInChannels(e));
                t.forEach(e => i.add(e)), n.forEach(e => i.delete(e)), A(e, {
                    type: T.ImpersonateType.NEW_MEMBER,
                    optInChannels: i
                })
            }

            function m(e, t) {
                let n = s.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...a.default.getSelectableChannelIds(e), ...a.default.getVocalChannelIds(e)],
                        i = Array.from(t);
                    a.default.addConditionalChangeListener(() => {
                        let t = u.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (i.some(e => !t.roles.includes(e))) return !0;
                        let r = [...a.default.getSelectableChannelIds(e), ...a.default.getVocalChannelIds(e)],
                            o = r.filter(e => !n.includes(e));
                        return o.length > 0 && p(e, o, []), !1
                    })
                }(e, t);
                let i = {};
                t.forEach(e => i[e] = n.roles[e]), A(e, {
                    type: T.ImpersonateType.NEW_MEMBER,
                    roles: i
                })
            }

            function R(e, t) {
                A(e, {
                    type: T.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return l
                },
                generateInviteKeyFromExtraData: function() {
                    return a
                },
                parseExtraDataFromInviteKey: function() {
                    return u
                },
                parseInviteCodeFromInviteKey: function() {
                    return s
                }
            });
            var i = n("522632"),
                r = n("833858");
            let o = "event";

            function l(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = i.parse(t);
                        return (0, r.getFirstQueryStringValue)(e[o])
                    } catch (e) {
                        return
                    }
                }(t);
                return a({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function a(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(o, "=").concat(n)
            }

            function u(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let l = i.parse(n),
                    a = (0, r.getFirstQueryStringValue)(l[o]);
                return {
                    baseCode: t,
                    guildScheduledEventId: a
                }
            }

            function s(e) {
                let [t] = e.split("?");
                return t
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
                    return c
                }
            });
            var i = n("65597"),
                r = n("862205"),
                o = n("697218"),
                l = n("719923"),
                a = n("782340");
            let u = (0, r.createExperiment)({
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
                s = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: i,
                        mobileViewAndUseEnabled: r,
                        mobileAndFreemiumCollectEnabled: o
                    } = n, a = l.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: o,
                        collectEnabled: a ? i : o
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
                    } : s({
                        user: t,
                        config: u.getCurrentConfig({
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
                    }, r = (0, i.default)([o.default], () => o.default.getCurrentUser()), l = u.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: a,
                        showTryPacksModalAndV2Copy: E,
                        collectEnabled: _
                    } = s({
                        user: r,
                        config: l
                    }), d = a && _ && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: a,
                        collectEnabled: d,
                        showTryPacksModalAndV2Copy: E
                    }
                },
                d = (0, r.createExperiment)({
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
                            getNewSettingsDescription: () => a.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => a.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => a.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
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
                    }, n = d.useExperiment({
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
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("748820"),
                o = n("77078"),
                l = n("112679"),
                a = n("55689"),
                u = n("855133"),
                s = n("599110"),
                E = n("659500"),
                _ = n("49111"),
                d = n("646718");

            function c(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: c,
                    onClose: I,
                    onComplete: T,
                    onSubscriptionConfirmation: S,
                    analyticsLocations: N,
                    analyticsObject: f,
                    analyticsLocation: A,
                    analyticsSourceLocation: O,
                    isGift: C = !1,
                    giftMessage: p,
                    subscriptionTier: m,
                    trialId: R,
                    postSuccessGuild: L,
                    openInvoiceId: U,
                    applicationId: M,
                    referralTrialOfferId: D,
                    giftRecipient: P,
                    returnRef: h
                } = null != e ? e : {}, g = !1, v = (0, r.v4)();
                (0, o.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: r,
                            ...o
                        } = n;
                        return (0, i.jsx)(e, {
                            ...o,
                            loadId: v,
                            subscriptionTier: m,
                            skuId: m,
                            isGift: C,
                            giftMessage: p,
                            giftRecipient: P,
                            initialPlanId: t,
                            followupSKUInfo: c,
                            onClose: e => {
                                r(), null == I || I(e), e && (null == S || S())
                            },
                            onComplete: () => {
                                g = !0, null == T || T(), !C && ((0, u.setIsPersistentHelperHidden)(!0), (0, u.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: S,
                            analyticsLocations: N,
                            analyticsObject: f,
                            analyticsLocation: A,
                            analyticsSourceLocation: O,
                            trialId: R,
                            postSuccessGuild: L,
                            planGroup: d.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: U,
                            applicationId: M,
                            referralTrialOfferId: D,
                            returnRef: h
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !g && s.default.track(_.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: v,
                            payment_type: _.PurchaseTypeToAnalyticsPaymentType[_.PurchaseTypes.SUBSCRIPTION],
                            location: null != A ? A : f,
                            source: O,
                            subscription_type: _.SubscriptionTypes.PREMIUM,
                            is_gift: C,
                            eligible_for_trial: null != R,
                            application_id: M,
                            location_stack: N
                        }), (0, l.clearError)(), (0, a.clearPurchaseTokenAuthState)(), null == I || I(g), g && (!C && E.ComponentDispatch.dispatch(_.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == S || S())
                    },
                    onCloseRequest: _.NOOP
                })
            }
        },
        817963: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useManageResourcePermissions: function() {
                    return T
                },
                getManageResourcePermissions: function() {
                    return S
                },
                useHasInventoryGuildSettingsPermission: function() {
                    return N
                }
            });
            var i = n("884691"),
                r = n("316693"),
                o = n("446674"),
                l = n("252931"),
                a = n("813006");
            n("923959");
            var u = n("957255"),
                s = n("697218");
            n("991170");
            var E = n("270161"),
                _ = n("843455");
            let d = {
                    canCreateExpressions: !1,
                    canCreateGuildEvent: !1,
                    canManageAllExpressions: !1,
                    canManageAllEvents: !1,
                    canManageGuildExpression: () => !1,
                    canManageGuildEvent: () => !1
                },
                c = (e, t, n, i) => {
                    if (null == e) return !1;
                    if (n) return !0;
                    if ("creator_id" in e) return i && null != t && e.creator_id === t.id;
                    if ("userId" in e) return i && null != t && e.userId === t.id;
                    if ("user" in e) {
                        var r;
                        return i && null != t && (null === (r = e.user) || void 0 === r ? void 0 : r.id) === t.id
                    }
                    return !1
                },
                I = e => {
                    if (null == e) return [_.Permissions.CREATE_EVENTS, _.Permissions.MANAGE_EVENTS];
                    let t = E.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
                    return e.isGuildStageVoice() ? t = E.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (t = E.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [r.default.combine(t, _.Permissions.CREATE_EVENTS), r.default.combine(t, _.Permissions.MANAGE_EVENTS)]
                },
                T = e => {
                    let [t, n] = e instanceof a.default ? [_.Permissions.CREATE_EVENTS, _.Permissions.MANAGE_EVENTS] : I(e), [r, l, E, T] = (0, o.useStateFromStoresArray)([u.default], () => [u.default.can(_.Permissions.CREATE_GUILD_EXPRESSIONS, e), u.default.can(_.Permissions.MANAGE_GUILD_EXPRESSIONS, e), u.default.can(t, e), u.default.can(n, e)]), S = (0, o.useStateFromStores)([s.default], () => s.default.getCurrentUser()), N = i.useCallback(e => c(e, S, l, r), [r, l, S]), f = i.useCallback(e => c(e, S, T, E), [T, E, S]);
                    return null == e ? d : {
                        canCreateExpressions: r,
                        canCreateGuildEvent: E,
                        canManageAllExpressions: l,
                        canManageAllEvents: T,
                        canManageGuildExpression: N,
                        canManageGuildEvent: f
                    }
                },
                S = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.default,
                        [i, r] = e instanceof a.default ? [_.Permissions.CREATE_EVENTS, _.Permissions.MANAGE_EVENTS] : I(e),
                        o = t.can(_.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                        l = t.can(_.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                        E = t.can(i, e),
                        T = t.can(r, e),
                        S = n.getCurrentUser();
                    return null == e ? d : {
                        canCreateExpressions: o,
                        canCreateGuildEvent: E,
                        canManageAllExpressions: l,
                        canManageAllEvents: T,
                        canManageGuildExpression: e => c(e, S, l, o),
                        canManageGuildEvent: e => c(e, S, T, E)
                    }
                },
                N = e => {
                    let t = (0, o.useStateFromStores)([u.default], () => u.default.can(_.Permissions.MANAGE_GUILD, e)),
                        {
                            showSettingsToggle: n
                        } = (0, l.useInventoryGuildSettingsExperiment)({
                            guildId: null == e ? void 0 : e.id
                        });
                    return t && n
                }
        },
        855133: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                togglePersistentHelper: function() {
                    return r
                },
                setHasCompletedStep: function() {
                    return o
                },
                resetPremiumTutorialStore: function() {
                    return l
                },
                setCanPlayWowMoment: function() {
                    return a
                },
                setIsPersistentHelperHidden: function() {
                    return u
                },
                setNavigatedFromHelper: function() {
                    return s
                }
            });
            var i = n("913144");
            let r = () => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                o = () => {
                    i.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                l = () => {
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
                u = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                s = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        824986: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumTutorialTooltips: function() {
                    return o
                },
                default: function() {
                    return T
                }
            });
            var i, r, o, l = n("446674"),
                a = n("913144"),
                u = n("521012"),
                s = n("565785"),
                E = n("646718");
            (i = o || (o = {})).FILE_UPLOAD = "file_upload", i.STICKER_PICKER = "sticker_picker", i.EMOJI_PICKER = "emoji_picker", i.BOOSTING_FLOW = "boosting_flow";
            let _ = {
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

            function d() {
                _ = {
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

            function c() {
                let e = new Date;
                e.setDate(e.getDate() + 14), _.tutorialExpirationTime = e.getTime()
            }
            class I extends l.default.PersistedStore {
                initialize(e) {
                    null != e && (_ = e), _.isPersistentHelperHidden = !1, _.canPlayWowMoment = !1, _.isFetchingWowMomentMedia = !1, _.wowMomentWumpusMediaUrl = null, _.wowMomentHelperMediaUrl = null
                }
                getState() {
                    return _
                }
                get isPersistentCoachmarkCollapsed() {
                    return _.isPersistentCoachmarkCollapsed
                }
                hasFlowStartEventBeenEmitted(e) {
                    return null == _.hasFlowStartEventBeenEmitted[e] && (_.hasFlowStartEventBeenEmitted[e] = !1), _.hasFlowStartEventBeenEmitted[e]
                }
                get canPlayWowMoment() {
                    return _.canPlayWowMoment
                }
                get isPersistentHelperHidden() {
                    return _.isPersistentHelperHidden
                }
                get isFetchingWowMomentMedia() {
                    return _.isFetchingWowMomentMedia
                }
                get wowMomentWumpusMedia() {
                    return _.wowMomentWumpusMediaUrl
                }
                get wowMomentHelperMedia() {
                    return _.wowMomentHelperMediaUrl
                }
                get navigatedFromHelper() {
                    return _.navigatedFromHelper
                }
                get tutorialExpirationTime() {
                    return _.tutorialExpirationTime
                }
            }
            I.displayName = "PremiumTutorialStore", I.persistKey = "PremiumTutorialStore", I.migrations = [e => ({
                ...e,
                hasFlowStartEventBeenEmitted: null !== (r = e.hasFlowStartEventBeenEmitted) && void 0 !== r ? r : {}
            })];
            var T = new I(a.default, {
                PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE: function() {
                    _.isPersistentCoachmarkCollapsed = !_.isPersistentCoachmarkCollapsed
                },
                UPDATE_HAS_FLOW_START_EVENT_BEEN_EMITTED: function(e) {
                    let {
                        event: t,
                        value: n
                    } = e;
                    _.hasFlowStartEventBeenEmitted[t] = n
                },
                LOGOUT: function() {
                    d()
                },
                RESET_PREMIUM_TUTORIAL_STORE: d,
                PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT: function(e) {
                    let {
                        value: t
                    } = e;
                    _.canPlayWowMoment = t
                },
                PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN: function(e) {
                    let {
                        value: t
                    } = e;
                    _.isPersistentHelperHidden = t
                },
                PREMIUM_TUTORIAL_IS_FETCHING_WOW_MOMENT_MEDIA: function(e) {
                    let {
                        value: t
                    } = e;
                    _.isFetchingWowMomentMedia = t
                },
                PREMIUM_TUTORIAL_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function(e) {
                    let {
                        wumpusMedia: t,
                        helperMedia: n
                    } = e;
                    _.wowMomentWumpusMediaUrl = t, _.wowMomentHelperMediaUrl = n, _.isFetchingWowMomentMedia = !1
                },
                PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER: function(e) {
                    let {
                        value: t
                    } = e;
                    _.navigatedFromHelper = t
                },
                PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function(e) {
                    let {
                        subscription: t
                    } = e, {
                        enabled: n
                    } = s.default.getCurrentConfig({
                        location: "5f2710_1"
                    }, {
                        autoTrackExposure: !1
                    });
                    n && null != t.items.find(e => E.PREMIUM_TIER_2_PLANS.has(e.plan_id)) && c()
                },
                GIFT_CODE_REDEEM_SUCCESS: function(e) {
                    let {
                        entitlement: t
                    } = e, {
                        enabled: n
                    } = s.default.getCurrentConfig({
                        location: "5f2710_2"
                    }, {
                        autoTrackExposure: !1
                    });
                    n && (null == t ? void 0 : t.sku_id) === E.PremiumSubscriptionSKUs.TIER_2 && null == u.default.getPremiumSubscription(!1) && null == _.tutorialExpirationTime && c()
                }
            })
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return I
                },
                maybeFetchPremiumLikelihood: function() {
                    return S
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return N
                }
            });
            var i = n("884691"),
                r = n("65597"),
                o = n("872717"),
                l = n("913144"),
                a = n("775433"),
                u = n("697218"),
                s = n("10514"),
                E = n("764364"),
                _ = n("676572"),
                d = n("646718"),
                c = n("49111");
            let I = "nonSubscriber";
            async function T() {
                try {
                    l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await o.default.get({
                        url: c.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [I]: e.non_subscriber,
                                [d.PremiumSubscriptionSKUs.TIER_0]: e[d.PremiumSubscriptionSKUs.TIER_0],
                                [d.PremiumSubscriptionSKUs.TIER_2]: e[d.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function S(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), i = _.default.shouldFetchPremiumLikelihood(), r = u.default.getCurrentUser();
                f(r, i, t, n)
            }

            function N(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), o = (0, r.default)([_.default], () => _.default.shouldFetchPremiumLikelihood()), l = (0, r.default)([u.default], () => u.default.getCurrentUser());
                i.useEffect(() => {
                    f(l, o, t, n)
                }, [l, o, t, n])
            }

            function f(e, t, n, i) {
                null != e && !(0, E.isPremium)(e) && n && (t && T(), i && (!s.default.isLoadedForSKU(d.PremiumSubscriptionSKUs.TIER_0) && !s.default.isFetchingForSKU(d.PremiumSubscriptionSKUs.TIER_0) && (0, a.fetchSubscriptionPlansForSKU)(d.PremiumSubscriptionSKUs.TIER_0), !s.default.isLoadedForSKU(d.PremiumSubscriptionSKUs.TIER_2) && !s.default.isFetchingForSKU(d.PremiumSubscriptionSKUs.TIER_2) && (0, a.fetchSubscriptionPlansForSKU)(d.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("446674"),
                r = n("913144");
            let o = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                l = o;
            class a extends i.default.Store {
                initialize() {
                    l = o
                }
                getState() {
                    return l
                }
                shouldFetchPremiumLikelihood() {
                    return !l.isFetching && !l.fetched
                }
            }
            a.displayName = "UserPremiumLikelihoodStore";
            var u = new a(r.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    l.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    l.premiumLikelihood = t, l.fetched = !0, l.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    l.isFetching = !1
                },
                LOGOUT: function() {
                    l.premiumLikelihood = void 0
                }
            })
        },
        694768: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
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
            var o = r
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            });
            var o = r
        },
        565785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
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
            var o = r
        },
        921228: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsPremiumTutorialEnabled: function() {
                    return A
                },
                isPremiumTutorialEnabled: function() {
                    return p
                },
                useAllDismissedPremiumTutorialSteps: function() {
                    return L
                }
            });
            var i = n("884691"),
                r = n("446674"),
                o = n("151426"),
                l = n("850068"),
                a = n("10641"),
                u = n("374363"),
                s = n("697218"),
                E = n("521012"),
                _ = n("719923"),
                d = n("324878"),
                c = n("824986"),
                I = n("694768"),
                T = n("565785"),
                S = n("646718");
            let N = () => {
                    let e = (0, r.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()),
                        t = (0, a.useIsDismissibleContentDismissed)(o.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, d.isEligibleTrialSub)(e) && !t
                },
                f = () => {
                    let e = (0, d.useHasActiveTrial)(),
                        t = (0, a.useIsDismissibleContentDismissed)(o.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE),
                        n = (0, r.useStateFromStores)([s.default], () => s.default.getCurrentUser()),
                        u = (0, _.isPremiumExactly)(n, S.PremiumTypes.TIER_2),
                        c = (0, r.useStateFromStores)([E.default], () => E.default.hasFetchedPreviousPremiumTypeSubscription()),
                        I = (0, r.useStateFromStores)([E.default], () => E.default.getPreviousPremiumTypeSubscription()),
                        T = !e && u;
                    i.useEffect(() => {
                        T && !c && !t && (0, l.fetchMostRecentSubscription)()
                    }, [T, c, t]);
                    let N = T && c && null == I;
                    return N && !t
                };

            function A(e) {
                var t;
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    i = N() && n,
                    {
                        enabled: o
                    } = I.default.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: i,
                        disable: !i
                    }),
                    l = (0, r.useStateFromStores)([c.default], () => c.default.tutorialExpirationTime),
                    a = new Date().getTime(),
                    u = (0, r.useStateFromStores)([E.default], () => {
                        var e, n;
                        return null !== (t = null === (n = E.default.getPremiumSubscription()) || void 0 === n ? void 0 : null === (e = n.createdAt) || void 0 === e ? void 0 : e.getTime()) && void 0 !== t ? t : 0
                    }),
                    s = f() && n,
                    _ = T.default.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: s && a - u < 18e5,
                        disable: !s
                    }).enabled && null != l && l > a;
                return o || _
            }
            let O = () => {
                    let e = E.default.getPremiumTypeSubscription(),
                        t = (0, a.isDismissibleContentDismissed)(o.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, d.isEligibleTrialSub)(e) && !t
                },
                C = () => {
                    let e = (0, d.hasActiveTrial)(),
                        t = (0, a.isDismissibleContentDismissed)(o.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE),
                        n = s.default.getCurrentUser(),
                        i = (0, _.isPremiumExactly)(n, S.PremiumTypes.TIER_2),
                        r = E.default.hasFetchedPreviousPremiumTypeSubscription(),
                        u = E.default.getPreviousPremiumTypeSubscription();
                    return !r && i && !t && (0, l.fetchMostRecentSubscription)(), !t && !e && i && r && null == u
                },
                p = function(e) {
                    var t, n, i;
                    let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        o = O() && r,
                        {
                            enabled: l
                        } = I.default.getCurrentConfig({
                            location: e
                        }, {
                            disable: !o,
                            autoTrackExposure: o
                        }),
                        a = new Date().getTime(),
                        u = c.default.tutorialExpirationTime,
                        s = null !== (i = null === (n = E.default.getPremiumSubscription()) || void 0 === n ? void 0 : null === (t = n.createdAt) || void 0 === t ? void 0 : t.getTime()) && void 0 !== i ? i : 0,
                        _ = C() && r,
                        d = T.default.getCurrentConfig({
                            location: e
                        }, {
                            disable: !_,
                            autoTrackExposure: _ && a - s < 18e5
                        }).enabled && null != u && u > a;
                    return l || d
                },
                m = [];

            function R() {
                return S.PremiumTutorialStepOrder.filter(e => (0, a.isDismissibleContentDismissed)(e))
            }

            function L() {
                return function(e, t) {
                    let n = A("useMemoizedValueSyncedWithDismissibleContents"),
                        o = (0, r.useStateFromStores)([u.default], () => {
                            var e;
                            return null === (e = u.default.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
                        });
                    return i.useMemo(() => n ? e() : t, [n, t, e, o])
                }(R, m)
            }
        },
        906932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAvatarsWithGuilds: function() {
                    return u
                },
                setNewPendingUserBio: function() {
                    return s
                },
                setNewPendingAvatar: function() {
                    return E
                },
                setNewPendingAvatarDecoration: function() {
                    return _
                },
                setNewPendingProfileEffectID: function() {
                    return d
                },
                getProfilePreviewField: function() {
                    return c
                },
                showRemoveAvatar: function() {
                    return I
                },
                showRemoveBanner: function() {
                    return T
                }
            });
            var i = n("884691"),
                r = n("152584"),
                o = n("234251"),
                l = n("783142"),
                a = n("26989");

            function u(e) {
                return i.useMemo(() => {
                    let t = a.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let r in t) {
                        var i;
                        let o = t[r],
                            l = null === (i = o[e]) || void 0 === i ? void 0 : i.avatar;
                        null != l && (null == n[l] && (n[l] = []), n[l].push(r))
                    }
                    return null != n ? Object.entries(n).map(e => e[1][0]) : []
                }, [e])
            }

            function s(e, t) {
                (0, l.setPendingBio)(e === t ? void 0 : e)
            }

            function E(e, t) {
                (0, r.setPendingAvatar)(e === t ? void 0 : e)
            }

            function _(e, t) {
                if ((0, o.isEqualAvatarDecoration)(e, null != t ? t : null)) {
                    (0, r.setPendingAvatarDecoration)(void 0);
                    return
                }(0, r.setPendingAvatarDecoration)(e)
            }

            function d(e, t) {
                if (e === t) {
                    (0, r.setPendingProfileEffectID)(void 0);
                    return
                }(0, r.setPendingProfileEffectID)(e)
            }

            function c(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (null != e) return "" === e ? {
                    value: i ? n : null,
                    isUsingGuildValue: !1
                } : {
                    value: e,
                    isUsingGuildValue: i
                };
                return null != t && "" !== t ? {
                    value: t,
                    isUsingGuildValue: !0
                } : {
                    value: n,
                    isUsingGuildValue: !1
                }
            }

            function I(e, t) {
                return void 0 === e ? null != t : null != e
            }

            function T(e, t) {
                return void 0 === e ? null != t : null != e
            }
        },
        38766: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("884691"),
                r = n("79112"),
                o = n("685665"),
                l = n("929423");
            n("424562");
            var a = n("49111"),
                u = n("397336");

            function s(e) {
                let {
                    guild: t,
                    scrollPosition: n,
                    analyticsLocation: s,
                    analyticsLocations: E,
                    openWithoutBackstack: _ = !1
                } = e, {
                    analyticsLocations: d
                } = (0, o.default)(), c = (0, i.useCallback)(() => {
                    null != t && (0, l.initGuildIdentitySettings)(t, null != E ? E : d), r.default.open(a.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? u.ProfileCustomizationSubsection.GUILD : u.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: s,
                        analyticsLocations: E,
                        openWithoutBackstack: _
                    })
                }, [t, n, s, E, _, d]);
                return c
            }
        },
        846325: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                MAX_LENGTH_SOUND_NAME: function() {
                    return o
                },
                MAX_SOUND_LENGTH_SECONDS: function() {
                    return l
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return a
                },
                SoundboardWheelSize: function() {
                    return u
                },
                DEFAULT_KEYBIND: function() {
                    return s
                },
                EMPTY_SOUND_LIST: function() {
                    return E
                },
                CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: function() {
                    return _
                }
            });
            let o = 32,
                l = 5,
                a = "DEFAULT";
            (r = i || (i = {}))[r.SUCCESS = 0] = "SUCCESS", r[r.INTERRUPTED = 1] = "INTERRUPTED", i.SUCCESS, i.INTERRUPTED;
            let u = {
                    width: 424,
                    height: 424,
                    padding: 100
                },
                s = "ctrl+`",
                E = [],
                _ = "0"
        },
        235004: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            });
            var i, r, o = n("917351"),
                l = n.n(o),
                a = n("446674"),
                u = n("913144"),
                s = n("845579"),
                E = n("374363"),
                _ = n("697218"),
                d = n("599110"),
                c = n("829536"),
                I = n("846325"),
                T = n("49111"),
                S = n("397336");
            (i = r || (r = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
            let N = new Map,
                f = new Map,
                A = new Set,
                O = r.NOT_FETCHED,
                C = r.NOT_FETCHED,
                p = new Set,
                m = new Map,
                R = !1;

            function L(e) {
                let {
                    sound: t
                } = e, n = N.get(t.guildId), i = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != i && -1 !== i ? (n[i] = t, N.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), N.set(t.guildId, [...n]))
            }
            let U = l.debounce(e => {
                d.default.track(T.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, c.amplitudeToPerceptual)(e))
                }), s.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function M(e) {
                var t, n;
                let i = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(i)) t.soundboardMuted ? A.add(e) : A.delete(e);
                for (let e of A.keys()) null == i[e] && A.delete(e)
            }
            class D extends a.default.Store {
                initialize() {
                    this.waitFor(E.default), M(E.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(N),
                        favoritedSoundIds: Array.from(p),
                        localSoundboardMutes: Array.from(A)
                    }
                }
                getSounds() {
                    return N
                }
                getSoundsForGuild(e) {
                    return N.get(e)
                }
                getSound(e, t) {
                    var n;
                    let i = null !== (n = N.get(e)) && void 0 !== n ? n : [];
                    return i.find(e => e.soundId === t)
                }
                getSoundById(e) {
                    let t = Array.from(N.values()).flat();
                    return t.find(t => t.soundId === e)
                }
                isFetchingSounds() {
                    return C === r.FETCHING
                }
                isFetchingDefaultSounds() {
                    return O === r.FETCHING
                }
                isFetching() {
                    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
                }
                shouldFetchDefaultSounds() {
                    return O === r.NOT_FETCHED
                }
                hasFetchedDefaultSounds() {
                    return O === r.FETCHED
                }
                isUserPlayingSounds(e) {
                    let t = m.get(e);
                    return null != t && t > 0
                }
                isPlayingSound(e) {
                    return null != f.get(e)
                }
                isFavoriteSound(e) {
                    return p.has(e)
                }
                getFavorites() {
                    return p
                }
                isLocalSoundboardMuted(e) {
                    return A.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return R
                }
                hasFetchedAllSounds() {
                    return C === r.FETCHED && O === r.FETCHED
                }
            }
            D.displayName = "SoundboardStore";
            var P = new D(u.default, {
                LOGOUT: function() {
                    N.clear(), f.clear(), m.clear(), R = !1, C = r.NOT_FETCHED, O = r.NOT_FETCHED
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    C = r.FETCHING
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: L,
                GUILD_SOUNDBOARD_SOUND_UPDATE: L,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    let {
                        soundId: t,
                        guildId: n
                    } = e;
                    N.delete(t);
                    let i = N.get(n),
                        r = null == i ? void 0 : i.findIndex(e => e.soundId === t);
                    null != i && null != r && !(r < 0) && (i.splice(r, 1), N.set(n, [...i]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, i;
                    let {
                        soundId: r,
                        userId: o
                    } = e, l = (null !== (n = f.get(r)) && void 0 !== n ? n : 0) + 1, a = (null !== (i = m.get(o)) && void 0 !== i ? i : 0) + 1;
                    f.set(r, l), m.set(o, a), o !== (null === (t = _.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (R = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: i,
                        userId: r
                    } = e, o = (null !== (t = f.get(i)) && void 0 !== t ? t : 0) - 1, l = (null !== (n = m.get(r)) && void 0 !== n ? n : 0) - 1;
                    o <= 0 ? f.delete(i) : f.set(i, o), l <= 0 ? m.delete(r) : m.set(r, l)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    U(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    f.clear(), m.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e, {
                        type: n,
                        proto: i
                    } = t;
                    if (n === S.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var r, o;
                        p = new Set(null !== (o = null == i ? void 0 : null === (r = i.favoriteSoundboardSounds) || void 0 === r ? void 0 : r.soundIds) && void 0 !== o ? o : [])
                    } else n === S.UserSettingsTypes.PRELOADED_USER_SETTINGS && M(i)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    O = r.FETCHING
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    N.set(I.DEFAULT_SOUND_GUILD_ID, t), O = r.FETCHED
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
                        N.set(t, n)
                    }), C = r.FETCHED
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    N.delete(t.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
                    let {
                        userId: t
                    } = e;
                    A.has(t) ? A.delete(t) : A.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        soundboardStoreState: t
                    } = e;
                    N = new Map(Object.entries(t.soundboardSounds)), p = new Set(t.favoritedSoundIds), A = new Set(t.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        soundboardSounds: n
                    } = e;
                    N.set(t, n)
                }
            })
        },
        520497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("49111");

            function r(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: n
                } = window.GLOBAL_ENV;
                return "development" !== n ? "".concat(location.protocol, "//").concat(t).concat(i.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(i.Endpoints.SOUNDBOARD_SOUND(e))
            }
        },
        4233: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
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
            var o = r
        },
        866353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerSendability: function() {
                    return r
                },
                getStickerSendability: function() {
                    return E
                },
                isSendableSticker: function() {
                    return _
                }
            });
            var i, r, o = n("991170"),
                l = n("719923"),
                a = n("4233"),
                u = n("24373"),
                s = n("49111");
            (i = r || (r = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let E = (e, t, n) => {
                    if (null == t) return r.NONSENDABLE;
                    let i = l.default.canUseStickersEverywhere(t);
                    if ((0, u.isStandardSticker)(e)) {
                        let {
                            freeStickersEnabled: e
                        } = a.default.getCurrentConfig({
                            location: "c036ff_1"
                        }, {
                            autoTrackExposure: !1
                        });
                        return i || e ? r.SENDABLE : r.SENDABLE_WITH_PREMIUM
                    }
                    if ((0, u.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? r.SENDABLE : null == n.guild_id || o.default.can({
                        permission: s.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? i ? r.SENDABLE : r.SENDABLE_WITH_PREMIUM : r.NONSENDABLE : r.SENDABLE_WITH_BOOSTED_GUILD;
                    return r.NONSENDABLE
                },
                _ = (e, t, n) => E(e, t, n) === r.SENDABLE
        },
        865372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("917351"),
                r = n.n(i),
                o = n("446674"),
                l = n("913144"),
                a = n("80507"),
                u = n("374363"),
                s = n("364685"),
                E = n("49111"),
                _ = n("397336");
            let d = {
                pendingUsages: []
            };
            E.Durations.DAY;
            let c = new a.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => s.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                I = () => {
                    s.default.isLoaded && c.compute()
                },
                T = () => {
                    I()
                };

            function S() {
                var e;
                let t = null === (e = u.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                c.overwriteHistory(r.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), d.pendingUsages)
            }
            class N extends o.default.PersistedStore {
                initialize(e) {
                    this.waitFor(s.default), null != e && (d = e), this.syncWith([s.default], T), this.syncWith([u.default], S)
                }
                getState() {
                    return d
                }
                hasPendingUsage() {
                    return d.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return c
                }
            }
            N.displayName = "StickersPersistedStore", N.persistKey = "StickersPersistedStoreV2";
            var f = new N(l.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        c.track(e), d.pendingUsages.push({
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
                    if (t !== _.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    d.pendingUsages = []
                }
            })
        },
        783142: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveProfileChanges: function() {
                    return c
                },
                handleProfileAccessibilityTooltipViewed: function() {
                    return I
                },
                resetPendingProfileChanges: function() {
                    return T
                },
                setPendingBanner: function() {
                    return S
                },
                setPendingBio: function() {
                    return N
                },
                setPendingPronouns: function() {
                    return f
                },
                setPendingAccentColor: function() {
                    return A
                },
                setPendingThemeColors: function() {
                    return O
                },
                setTryItOutAvatar: function() {
                    return C
                },
                setTryItOutAvatarDecoration: function() {
                    return p
                },
                setTryItOutBanner: function() {
                    return m
                },
                setTryItOutThemeColors: function() {
                    return R
                }
            });
            var i = n("872717"),
                r = n("913144"),
                o = n("448993"),
                l = n("884351"),
                a = n("845579"),
                u = n("697218"),
                s = n("599110"),
                E = n("49111"),
                _ = n("646718");

            function d(e) {
                s.default.track(E.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: e,
                    feature_tier: _.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }
            async function c(e, t) {
                var n, s;
                let _ = null === (n = u.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == _) return;
                let d = a.UseLegacyChatInput.getSetting();
                null != e.bio && d && (e.bio = l.default.parse(void 0, e.bio).content);
                try {
                    r.default.dispatch({
                        type: "USER_PROFILE_UPDATE_START",
                        userId: _
                    });
                    let n = await i.default.patch({
                        url: null != t ? E.Endpoints.GUILD_PROFILE(t, E.ME) : E.Endpoints.USER_PROFILE(E.ME),
                        body: e
                    });
                    if (n.ok) {
                        let e = null === (s = n.body.profile_effect) || void 0 === s ? void 0 : s.id;
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_SUCCESS",
                            userId: _,
                            profileEffectID: e,
                            ...n.body
                        })
                    } else {
                        let e = new o.APIError(n);
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: n.body,
                            apiError: e
                        })
                    }
                    return n
                } catch (t) {
                    let e = new o.APIError(t);
                    r.default.dispatch({
                        type: "USER_PROFILE_UPDATE_FAILURE",
                        errors: {},
                        apiError: e
                    })
                }
            }

            function I() {
                r.default.dispatch({
                    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
                })
            }

            function T() {
                r.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function S(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function N(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: e
                })
            }

            function f(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function A(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: e
                })
            }

            function O(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function C(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: e
                }), d(_.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function p(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: e
                }), d(_.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function m(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: e
                }), d(_.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function R(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: e
                }), d(_.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        805828: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                WELCOME_SCREEN_TYPE: function() {
                    return i
                },
                WELCOME_EMOJI_TOOLTIP_STORAGE_KEY: function() {
                    return r
                }
            });
            let i = "Guild Welcome Screen",
                r = "hasClickedWelcomeEmojiPicker"
        },
        277432: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var i = n("37983"),
                r = n("884691"),
                o = n("446674"),
                l = n("95410"),
                a = n("77078"),
                u = n("430568"),
                s = n("901582"),
                E = n("679653"),
                _ = n("419830"),
                d = n("86678"),
                c = n("145106"),
                I = n("385976"),
                T = n("42203"),
                S = n("923959"),
                N = n("27618"),
                f = n("697218"),
                A = n("882641"),
                O = n("145131"),
                C = n("476765"),
                p = n("593195"),
                m = n("991170"),
                R = n("59811"),
                L = n("310457"),
                U = n("805828"),
                M = n("49111"),
                D = n("958706"),
                P = n("782340"),
                h = n("306978"),
                g = e => {
                    var t, n;
                    let {
                        guildId: g,
                        welcomeChannel: v,
                        transitionState: G,
                        onSave: b,
                        onClose: y
                    } = e, F = (0, C.useUID)(), [B, H] = r.useState(null != v ? v.channel_id : null), [w, V] = r.useState(null != v ? v.description : ""), [x, k] = r.useState(null != v ? {
                        id: v.emoji_id,
                        name: v.emoji_name
                    } : null), [W, Y] = r.useState(!1), K = (0, o.useStateFromStores)([I.default], () => (null == x ? void 0 : x.id) != null ? I.default.getUsableCustomEmojiById(x.id) : null), j = (0, o.useStateFromStores)([S.default], () => S.default.getChannels(g)[S.GUILD_SELECTABLE_CHANNELS_KEY], [g]), z = (0, o.useStateFromStores)([R.default], () => R.default.get(g)), X = null !== (n = null == z ? void 0 : null === (t = z.welcome_channels) || void 0 === t ? void 0 : t.map(e => e.channel_id)) && void 0 !== n ? n : [], [J, q] = r.useState(!1);
                    r.useEffect(() => {
                        !l.default.get(U.WELCOME_EMOJI_TOOLTIP_STORAGE_KEY) && setTimeout(() => q(!0), 300)
                    }, []);
                    let Q = [];
                    j.forEach(e => {
                        let {
                            channel: t
                        } = e;
                        m.default.canEveryoneRole(M.Permissions.VIEW_CHANNEL, t) && ((null == v ? void 0 : v.channel_id) === t.id || !X.includes(t.id)) && Q.push({
                            value: t.id,
                            label: (0, E.computeChannelName)(t, f.default, N.default)
                        })
                    });
                    let Z = () => {
                            q(!1), y()
                        },
                        $ = r.useCallback(e => V(e), []),
                        ee = e => {
                            var t, n, i;
                            if (null == e) {
                                k(null);
                                return
                            }
                            k(null != e.id ? {
                                id: null !== (t = e.id) && void 0 !== t ? t : null,
                                name: null !== (n = e.name) && void 0 !== n ? n : null
                            } : {
                                id: null,
                                name: null !== (i = e.optionallyDiverseSequence) && void 0 !== i ? i : null
                            })
                        },
                        et = r.useCallback(() => {
                            l.default.set(U.WELCOME_EMOJI_TOOLTIP_STORAGE_KEY, !0), q(!1)
                        }, []);
                    return (0, i.jsx)(s.default, {
                        page: M.AnalyticsPages.CHANNEL_WELCOME_CREATE_MODAL,
                        children: (0, i.jsxs)(a.ModalRoot, {
                            transitionState: G,
                            "aria-labelledby": F,
                            children: [(0, i.jsxs)("div", {
                                className: h.modalContents,
                                children: [(0, i.jsx)(a.ModalCloseButton, {
                                    onClick: Z,
                                    className: h.closeButton
                                }), (0, i.jsx)(a.Heading, {
                                    variant: "heading-md/semibold",
                                    className: h.headerText,
                                    id: F,
                                    children: P.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SELECT_A_CHANNEL
                                }), (0, i.jsxs)(a.FormSection, {
                                    className: h.formGroup,
                                    children: [(0, i.jsx)(a.SearchableSelect, {
                                        options: Q,
                                        onChange: e => H(e),
                                        value: B,
                                        renderOptionPrefix: e => {
                                            var t;
                                            if (null === e) return null;
                                            let n = e.value,
                                                r = T.default.getChannel(n),
                                                o = null !== (t = (0, _.getChannelIconComponent)(r)) && void 0 !== t ? t : p.default;
                                            return (0, i.jsx)(o, {
                                                className: h.channelTitleIcon,
                                                width: 16,
                                                height: 16
                                            })
                                        }
                                    }), (0, i.jsx)(a.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        className: h.formDescription,
                                        children: P.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ONLY_VIEWABLE_CHANNELS
                                    })]
                                }), (0, i.jsx)(a.FormDivider, {}), (0, i.jsx)(a.Heading, {
                                    variant: "heading-md/semibold",
                                    className: h.headerText,
                                    children: P.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SET_DESCRIPTION
                                }), (0, i.jsx)(a.FormSection, {
                                    className: h.formGroup,
                                    children: (0, i.jsx)(a.TextInput, {
                                        maxLength: 42,
                                        value: w,
                                        inputClassName: h.input,
                                        placeholder: P.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_DESCRIPTION_PLACEHOLDER,
                                        onChange: $
                                    })
                                }), (0, i.jsx)(a.FormDivider, {}), (0, i.jsx)(a.FormSection, {
                                    className: h.formGroup,
                                    children: (0, i.jsxs)("div", {
                                        className: h.emojiSectionContainer,
                                        children: [(0, i.jsxs)("div", {
                                            className: h.emojiTitleContainer,
                                            children: [(0, i.jsx)(a.Heading, {
                                                variant: "heading-md/semibold",
                                                children: P.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI
                                            }), (0, i.jsx)(a.Text, {
                                                variant: "text-xs/normal",
                                                color: "text-muted",
                                                children: P.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI_UPSELL
                                            })]
                                        }), (0, i.jsx)(c.default, {
                                            hasSetEmoji: null != x,
                                            onClick: ee,
                                            children: (0, i.jsx)(a.Popout, {
                                                renderPopout: e => {
                                                    let {
                                                        closePopout: t
                                                    } = e, n = S.default.getDefaultChannel(g);
                                                    return (0, i.jsx)(d.default, {
                                                        guildId: g,
                                                        closePopout: t,
                                                        onSelectEmoji: (e, n) => {
                                                            ee(e), n && (t(), null == e && Z())
                                                        },
                                                        pickerIntention: D.EmojiIntention.COMMUNITY_CONTENT,
                                                        onNavigateAway: Z,
                                                        channel: n
                                                    })
                                                },
                                                position: "left",
                                                animation: a.Popout.Animation.NONE,
                                                align: "bottom",
                                                children: (e, t) => {
                                                    let {
                                                        isShown: n
                                                    } = t;
                                                    return (0, i.jsx)(a.TooltipContainer, {
                                                        color: a.TooltipColors.BRAND,
                                                        tooltipClassName: h.tooltip,
                                                        position: "left",
                                                        text: J ? P.default.Messages.WELCOME_CHANNEL_EMOJI_PICKER_TOOLTIP : null,
                                                        forceOpen: J,
                                                        children: (0, i.jsx)(A.default, {
                                                            ...e,
                                                            onClick: t => {
                                                                var n;
                                                                et(), null === (n = e.onClick) || void 0 === n || n.call(e, t)
                                                            },
                                                            active: n,
                                                            className: h.emojiButton,
                                                            tabIndex: 0,
                                                            renderButtonContents: null != x && (null != x.id || null != x.name) ? () => (0, i.jsx)(u.default, {
                                                                className: h.emoji,
                                                                emojiId: x.id,
                                                                emojiName: x.name,
                                                                animated: !!(null == K ? void 0 : K.animated)
                                                            }) : null
                                                        })
                                                    })
                                                }
                                            })
                                        })]
                                    })
                                })]
                            }), (0, i.jsxs)(a.ModalFooter, {
                                className: h.footer,
                                justify: O.default.Justify.BETWEEN,
                                children: [(0, i.jsxs)(O.default, {
                                    grow: 0,
                                    align: O.default.Align.CENTER,
                                    children: [(0, i.jsx)(a.Button, {
                                        onClick: Z,
                                        size: a.Button.Sizes.SMALL,
                                        look: a.Button.Looks.LINK,
                                        color: a.Button.Colors.PRIMARY,
                                        children: P.default.Messages.CANCEL
                                    }), (0, i.jsx)(a.Button, {
                                        onClick: () => {
                                            if (null != B && w.length > 0) b({
                                                channel_id: B,
                                                description: w,
                                                emoji_id: null == x ? void 0 : x.id,
                                                emoji_name: null == x ? void 0 : x.name
                                            });
                                            Z()
                                        },
                                        disabled: null == B || 0 === w.length,
                                        children: P.default.Messages.SAVE
                                    })]
                                }), null != v && (0, i.jsx)(a.Button, {
                                    onClick: () => {
                                        Y(!0)
                                    },
                                    size: a.Button.Sizes.MIN,
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.RED,
                                    children: P.default.Messages.REMOVE
                                })]
                            }), W && (0, i.jsx)(L.default, {
                                onConfirm: () => {
                                    b(), Z()
                                },
                                onCancel: () => Y(!1),
                                channelId: B
                            })]
                        })
                    })
                }
        },
        310457: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("446674"),
                o = n("77078"),
                l = n("679653"),
                a = n("42203"),
                u = n("782340");

            function s(e) {
                let {
                    onConfirm: t,
                    onCancel: n,
                    channelId: s
                } = e, E = (0, r.useStateFromStores)([a.default], () => null != s ? a.default.getChannel(s) : null), _ = (0, l.default)(E, !0);
                return (0, i.jsx)(o.DeclarativeConfirmModal, {
                    dismissable: !0,
                    header: u.default.Messages.WELCOME_CHANNEL_DELETE_CONFIRM_TITLE,
                    confirmText: u.default.Messages.REMOVE,
                    cancelText: u.default.Messages.CANCEL,
                    onConfirm: t,
                    onCancel: n,
                    children: (0, i.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        children: null != E ? u.default.Messages.WELCOME_CHANNEL_DELETE_CONFIRM_BODY.format({
                            channelName: _
                        }) : u.default.Messages.WELCOME_CHANNEL_DELETE_CONFIRM_BODY_GENERIC
                    })
                })
            }
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("866227"),
                r = n.n(i),
                o = n("666038");
            class l extends o.default {
                static createFromServer(e) {
                    var t;
                    return new l({
                        ...e,
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: r(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = r(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = r(this.createdAt);
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
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("446674"),
                r = n("913144"),
                o = n("9294"),
                l = n("49111");
            let a = {},
                u = {},
                s = {};

            function E(e, t) {
                var n;
                e = null != e ? e : "";
                let i = (0, o.parseExtraDataFromInviteKey)(e),
                    r = a[e],
                    u = null != r ? {
                        state: l.InviteStates.RESOLVING,
                        ...r
                    } : {
                        state: l.InviteStates.RESOLVING,
                        code: i.baseCode
                    };
                t(u), a = {
                    ...a,
                    [e]: u
                }, (null === (n = u.guild) || void 0 === n ? void 0 : n.id) != null && (s = {
                    ...s,
                    [u.guild.id]: e
                })
            }

            function _(e) {
                return E(e.code, t => {
                    t.state = "banned" in e && e.banned ? l.InviteStates.BANNED : l.InviteStates.EXPIRED
                })
            }
            class d extends i.default.Store {
                getInvite(e) {
                    return a[e]
                }
                getInviteError(e) {
                    return u[e]
                }
                getInvites() {
                    return a
                }
                getInviteKeyForGuildId(e) {
                    return s[e]
                }
            }
            d.displayName = "InviteStore";
            var c = new d(r.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, o.parseExtraDataFromInviteKey)(t);
                    a = {
                        ...a,
                        [t]: {
                            code: n.baseCode,
                            state: l.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return E(e.code, t => {
                        var n, i;
                        t.state = l.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: _,
                INSTANT_INVITE_REVOKE_SUCCESS: _,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return E(e.invite.code, t => {
                        t.state = l.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => E(e.code, e => {
                        e.state = l.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return E(e.invite.code, t => {
                        var n, i;
                        t.state = l.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return E(e.code, e => {
                        e.state = l.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return E(e.code, t => {
                        t.state = l.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return u[e.code] = e.error, E(e.code, e => {
                        e.state = l.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return E(e.code, e => {
                        e.state = l.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return E(e.code, e => {
                        e.state = l.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return E(e.code, e => {
                        e.state = l.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        471671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("627445"),
                r = n.n(i),
                o = n("446674"),
                l = n("913144"),
                a = n("816454");
            let u = new Map;

            function s(e) {
                let t = u.get(e);
                return null == t ? (console.warn("Window state not initialized", e), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : t
            }
            class E extends o.default.Store {
                isFocused() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return s(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return u.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return s(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return s(e).windowSize
                }
            }
            E.displayName = "WindowStore";
            let _ = new E(l.default, {
                WINDOW_INIT: function(e) {
                    r(!u.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: i,
                        focused: o
                    } = e;
                    return u.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: i,
                        focused: o
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(e) {
                    let t = s(e.windowId);
                    return t.isElementFullscreen !== e.isElementFullscreen && (u.set(e.windowId, {
                        ...t,
                        isElementFullscreen: e.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(e) {
                    let t = s(e.windowId);
                    return t.focused !== e.focused && (u.set(e.windowId, {
                        ...t,
                        focused: e.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(e) {
                    let t = s(e.windowId);
                    return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (u.set(e.windowId, {
                        ...t,
                        windowSize: {
                            width: e.width,
                            height: e.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(e) {
                    return u.delete(e.windowId), !0
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
            var d = _
        },
        103603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fit: function() {
                    return s
                },
                zoomFit: function() {
                    return E
                },
                getRatio: function() {
                    return _
                },
                getCoverRatio: function() {
                    return d
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
                    return f
                },
                dataUriFileSize: function() {
                    return A
                },
                dataUrlToFile: function() {
                    return O
                },
                isPNGAnimated: function() {
                    return C
                }
            });
            var i = n("627445"),
                r = n.n(i),
                o = n("917351"),
                l = n.n(o),
                a = n("48648"),
                u = n.n(a);

            function s(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r,
                    minWidth: o = 0,
                    minHeight: l = 0
                } = e;
                if (t !== i || n !== r) {
                    let e = t > i ? i / t : 1;
                    t = Math.max(Math.round(t * e), o), n = Math.max(Math.round(n * e), l);
                    let a = n > r ? r / n : 1;
                    t = Math.max(Math.round(t * a), o), n = Math.max(Math.round(n * a), l)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function E(e, t) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    i = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return s({
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
                    maxHeight: r
                } = e, o = 1;
                t > i && (o = i / t), t = Math.round(t * o);
                let l = 1;
                return (n = Math.round(n * o)) > r && (l = r / n), Math.min(o * l, 1)
            }

            function d(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r
                } = e;
                return t === n ? 1 : Math.min(Math.max(i / t, r / n), 1)
            }

            function c(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            let I = [
                [0, 0, 0]
            ];

            function T(e, t, n) {
                let i = document.createElement("canvas"),
                    r = i.getContext("2d");
                if (null == r) return I;
                let o = i.width = 0 === e.width ? 128 : e.width,
                    l = i.height = 0 === e.height ? 128 : e.height;
                r.drawImage(e, 0, 0, o, l);
                let a = r.getImageData(0, 0, o, l).data,
                    s = function(e, t, n) {
                        let i = [];
                        for (let r = 0, o, l, a, u, s; r < t; r += n) l = e[(o = 4 * r) + 0], a = e[o + 1], u = e[o + 2], (void 0 === (s = e[o + 3]) || s >= 125) && !(l > 250 && a > 250 && u > 250) && i.push([l, a, u]);
                        return i
                    }(a, o * l, n),
                    E = u(s, t);
                return "boolean" == typeof E ? I : E.palette()
            }
            let S = e => N(e),
                N = l.memoize(e => new Promise((t, n) => {
                    let i = new Image;
                    i.crossOrigin = "Anonymous", i.onerror = e => {
                        n(e), i.onerror = i.onload = null, i = null
                    }, i.onload = () => {
                        t(T(i, 5, 10)), i.onerror = i.onload = null, i = null
                    }, i.src = e
                }));

            function f(e) {
                return new Promise((t, n) => {
                    let i = new FileReader;
                    i.readAsDataURL(e), i.onload = () => {
                        r("string" == typeof i.result, "Result must be a string"), t(i.result)
                    }, i.onerror = e => n(e)
                })
            }

            function A(e) {
                let t = e.split(";base64,");
                return r(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
            }
            async function O(e, t, n) {
                let i = function(e) {
                        let t;
                        t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                        let n = e.split(",")[0].split(":")[1].split(";")[0],
                            i = new Uint8Array(t.length);
                        for (var r = 0; r < t.length; r++) i[r] = t.charCodeAt(r);
                        return new Blob([i], {
                            type: n
                        })
                    }(e),
                    r = await i.arrayBuffer();
                return new File([r], t, {
                    type: n
                })
            }
            async function C(e) {
                var t;
                let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let i = await e.text(),
                    r = i.indexOf("IDAT");
                return !!(r > 0) && -1 !== i.substring(0, r).indexOf("acTL") || !1
            }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return o
                }
            });
            var i = n("917351"),
                r = n.n(i);
            let o = e => "function" == typeof e ? e() : e;
            r.curry((e, t, n) => o(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let i, r;
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var o = n("697218"),
                l = n("615931");
            let a = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                i = e.showModal, a = e.updateModalProps, r = n("551042").closeModal
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: o,
                    modalProps: l = {},
                    hooks: {
                        onEarlyClose: u
                    } = {}
                } = e;
                if (null == i) {
                    null == u || u();
                    return
                }
                let E = i(I, _, l);

                function _() {
                    null == u || u()
                }

                function d(e) {
                    r(E), n(e)
                }

                function c(e) {
                    r(E), o(e)
                }

                function I(e) {
                    return a(E, I, _, {
                        ...l,
                        isLoading: !0
                    }), s({
                        promiseFn: t,
                        resolve: d,
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
                    a(E, I, _, {
                        ...l,
                        error: t.body.message
                    })
                }
            }

            function s(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: i,
                    code: r,
                    mfaCodeHandler: o = u,
                    isModalOpen: l = !1,
                    ...a
                } = e;
                return t(null != r ? {
                    code: r
                } : {}).then(n, e => {
                    var r, u;
                    if (r = e, u = l, r.body && 60008 === r.body.code || u && 429 === r.status) return o({
                        promiseFn: t,
                        resolve: n,
                        reject: i,
                        res: e,
                        ...a
                    });
                    i(e)
                })
            }

            function E(e, t) {
                var n, i;
                let {
                    checkEnabled: r = null !== (i = null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i,
                    ...a
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, l.resolveThunk)(r) ? u : s)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...a
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
                    return r
                }
            });

            function i(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                return 0 === e ? 0 : (t = e > n ? (e - n) / n * 6 : e / n * 50 - 50, n * Math.pow(10, t / 20))
            }

            function r(e) {
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
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return a
                },
                updateModalProps: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                o = n("920636");
            let l = (e, t, n) => function(r) {
                return (0, i.jsx)(o.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...r
                })
            };

            function a(e, t, n) {
                return (0, r.openModal)(l(e, t, n), {
                    onCloseCallback: t
                })
            }

            function u(e, t, n, i) {
                return (0, r.updateModal)(e, l(t, n, i))
            }
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return a
                }
            });
            var i = n("884691"),
                r = n("446674"),
                o = n("244201"),
                l = n("471671");

            function a() {
                let {
                    windowId: e
                } = i.useContext(o.default);
                return (0, r.useStateFromStores)([l.default], () => l.default.isFocused(e), [e])
            }
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("817736"),
                r = n("118810");
            let o = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            class l {
                isVisible(e) {
                    return null == this._observer || this._visibleComponents.has(e)
                }
                observe(e) {
                    let t = this._observer;
                    if (null == t) return;
                    this.unobserve(e);
                    let n = (0, i.findDOMNode)(e);
                    (0, r.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
                }
                unobserve(e) {
                    let t = this._observer;
                    if (null == t) return;
                    let n = this._components.get(e);
                    null != n && (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n))
                }
                constructor(e = o) {
                    this._nodes = new WeakMap, this._components = new WeakMap, this._visibleComponents = new WeakSet, this._handleEntries = e => {
                        e.forEach(e => {
                            let t;
                            if (null != e.isIntersecting) t = e.isIntersecting;
                            else {
                                let {
                                    threshold: n
                                } = this._options;
                                t = null == n ? e.intersectionRatio > 0 : Array.isArray(n) ? n.some(t => e.intersectionRatio > t) : e.intersectionRatio > n
                            }
                            let n = this._nodes.get(e.target);
                            if (null != n) {
                                let e = !1;
                                t ? !this._visibleComponents.has(n) && (this._visibleComponents.add(n), e = !0) : this._visibleComponents.has(n) && (this._visibleComponents.delete(n), e = !0), e && n.forceUpdate()
                            }
                        })
                    }, this._options = e, null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, e))
                }
            }
        },
        235855: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("884691"),
                r = n("748820"),
                o = n("157590");
            let l = (0, r.v4)(),
                a = new Map,
                u = new Map;
            class s extends i.Component {
                componentDidMount() {
                    if (this.props.active) {
                        let e = this.getVisibilityObserver();
                        e.observe(this), this.isVisible = e.isVisible(this), this.props.onChange(this.isVisible)
                    }
                }
                componentDidUpdate(e) {
                    let t = this.getVisibilityObserver(),
                        n = t.isVisible(this);
                    this.props.active && n !== this.isVisible && this.props.onChange(n), !e.active && this.props.active ? t.observe(this) : e.active && !this.props.active && t.unobserve(this), this.isVisible = n
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
                        t = u.get(e);
                    if (!t) throw Error("Visibility sensor with id ".concat(e, " not found."));
                    return t
                }
                render() {
                    return i.Children.only(this.props.children)
                }
                constructor(e) {
                    super(e), this.isVisible = !1;
                    let {
                        root: t,
                        rootMargin: n,
                        threshold: i
                    } = e;
                    t ? a.has(t) ? this.elementId = a.get(t) || "" : a.set(t, (0, r.v4)()) : this.elementId = l;
                    let s = this.getVisibilityObserverId();
                    !u.has(s) && u.set(s, new o.default({
                        root: t,
                        rootMargin: n,
                        threshold: i
                    }))
                }
            }
            s.defaultProps = {
                active: !0,
                children: i.createElement("span"),
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: [0, Number.MIN_VALUE]
            };
            var E = s
        },
        290381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VisibilityObserver: function() {
                    return i.default
                },
                VisibilitySensor: function() {
                    return r.default
                }
            }), n("6268");
            var i = n("157590"),
                r = n("235855")
        }
    }
]);
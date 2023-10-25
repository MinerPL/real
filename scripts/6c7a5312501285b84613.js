(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["62262"], {
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
                    return s
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

            function a() {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function s(e, t) {
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
                    return T
                }
            });
            var i = n("990746"),
                l = n("173333"),
                r = n("913144"),
                a = n("211895"),
                s = n("26092"),
                o = n("599110"),
                u = n("315102"),
                c = n("730622"),
                _ = n("49111"),
                E = n("191349"),
                d = n("782340"),
                T = {
                    open() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                openWithoutBackstack: !1
                            };
                        (0, a.default)(e, t, n)
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
                        let e = s.default.onClose;
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
                            email: a,
                            emailToken: s,
                            password: T,
                            avatar: I,
                            newPassword: S,
                            discriminator: C
                        } = e, {
                            close: R
                        } = t;
                        return (0, c.default)(e => {
                            let t = {
                                    username: n,
                                    email: a,
                                    email_token: s,
                                    password: T,
                                    avatar: I,
                                    new_password: S,
                                    ...e,
                                    discriminator: null != C && "" !== C ? C : void 0
                                },
                                r = l.default.get(_.DEVICE_TOKEN),
                                o = (0, E.getDevicePushProvider)();
                            null != o && null != r && (t.push_provider = o, t.push_token = r);
                            let u = l.default.get(_.DEVICE_VOIP_TOKEN);
                            return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != u && (t.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, t.push_voip_token = u), i.default.patch({
                                url: _.Endpoints.ME,
                                oldFormErrors: !0,
                                body: t
                            })
                        }, {
                            checkEnabled: !1,
                            modalProps: {
                                title: d.default.Messages.TWO_FA_CHANGE_ACCOUNT
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
                            return o.default.track(_.AnalyticEvents.USER_AVATAR_UPDATED, {
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
                            }), null != T && null != S && r.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id
                            }), R ? this.close() : this.submitComplete(), e
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
            var i, l, r, a, s = n("920040"),
                o = n("773670"),
                u = n("575482"),
                c = n.n(u),
                _ = n("145131"),
                E = n("213439");
            (i = r || (r = {})).PRIMARY = "primary", i.SECONDARY = "secondary", i.WARNING = "warning", i.ERROR = "error", (l = a || (a = {})).SMALL = "small", l.LARGE = "large", l.NONE = "none";
            let d = {
                    [r.PRIMARY]: E.colorPrimary,
                    [r.SECONDARY]: E.colorSecondary,
                    [r.WARNING]: E.colorWarning,
                    [r.ERROR]: E.colorError
                },
                T = {
                    [a.SMALL]: E.small,
                    [a.LARGE]: E.large,
                    [a.NONE]: null
                };
            class I extends o.PureComponent {
                render() {
                    let {
                        icon: e,
                        color: t,
                        children: n,
                        iconSize: i,
                        className: l,
                        iconClassName: r
                    } = this.props;
                    return (0, s.jsxs)(_.default, {
                        className: c(E.note, d[t], l),
                        align: _.default.Align.CENTER,
                        children: [(0, s.jsx)(e, {
                            className: c(E.icon, T[i], r)
                        }), (0, s.jsx)("div", {
                            children: n
                        })]
                    })
                }
            }
            I.Colors = r, I.Sizes = a;
            var S = I
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("920040"),
                l = n("773670"),
                r = n("575482"),
                a = n.n(r),
                s = n("77078"),
                o = n("782340"),
                u = n("430230");
            class c extends l.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: r,
                        error: c,
                        isLoading: _,
                        maxLength: E,
                        transitionState: d,
                        helpMessage: T,
                        retryPrompt: I,
                        retrySuccessMessage: S
                    } = this.props, {
                        code: C,
                        errorMessage: R,
                        retrySuccess: p
                    } = this.state, m = l.Children.count(r) > 0 ? (0, i.jsx)(s.Card, {
                        type: s.Card.Types.WARNING,
                        className: u.card,
                        children: (0, i.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: r
                        })
                    }) : null, A = null != I ? (0, i.jsxs)(s.Text, {
                        className: a(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, i.jsx)("br", {}), (0, i.jsx)(s.Clickable, {
                            className: a(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, i.jsx)(s.Anchor, {
                                children: I
                            })
                        })]
                    }) : null, N = p ? (0, i.jsx)(s.Card, {
                        type: s.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, i.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: S
                        })
                    }) : null;
                    return (0, i.jsx)(s.ModalRoot, {
                        transitionState: d,
                        children: (0, i.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, i.jsx)(s.ModalHeader, {
                                separator: !1,
                                children: (0, i.jsx)(s.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, i.jsxs)(s.ModalContent, {
                                children: [null != T ? (0, i.jsx)(s.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u.spacing,
                                    children: T
                                }) : null, m, N, (0, i.jsxs)(s.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, i.jsx)(s.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != E ? E : 10,
                                        value: C,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, i.jsx)(s.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != c ? c : R
                                    }) : null, A]
                                })]
                            }), (0, i.jsxs)(s.ModalFooter, {
                                children: [(0, i.jsx)(s.Button, {
                                    type: "submit",
                                    disabled: _ || 0 === C.length,
                                    children: null != n ? n : o.default.Messages.CONFIRM
                                }), (0, i.jsx)(s.Button, {
                                    onClick: this.handleCancel,
                                    disabled: _,
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
            c.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var _ = c
        },
        404061: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SmileIcon: function() {
                    return a
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("912557"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.799 1.169a1 1 0 0 1 1.388.275A3.496 3.496 0 0 0 11.999 16a3.495 3.495 0 0 0 2.912-1.556 1 1 0 0 1 1.662 1.112A5.496 5.496 0 0 1 12 18a5.496 5.496 0 0 1-4.573-2.444A1 1 0 0 1 7.7 14.17Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        65969: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerIcon: function() {
                    return a
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("912557"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M6 2h12a4 4 0 0 1 4 4v7.5a.5.5 0 0 1-.5.5H19a5 5 0 0 0-5 5v2.5a.5.5 0 0 1-.5.5H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm15.66 14c.033 0 .055.034.04.064a3 3 0 0 1-.579.815L16.88 21.12a3 3 0 0 1-.815.58.045.045 0 0 1-.064-.042V19a3 3 0 0 1 3-3H21.659ZM6.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-9.911 2.944a1 1 0 0 0-1.662 1.112A5.496 5.496 0 0 0 12 15a5.496 5.496 0 0 0 4.573-2.444 1 1 0 0 0-1.662-1.112A3.496 3.496 0 0 1 12 13a3.496 3.496 0 0 1-2.911-1.556Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        596256: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UploadIcon: function() {
                    return a
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("912557"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M13 16V5.414l3.293 3.293a1 1 0 1 0 1.414-1.414l-5-5-.007-.007a.997.997 0 0 0-1.4 0l-.008.008-5 4.999a1 1 0 0 0 1.415 1.414L11 5.414V16a1 1 0 1 0 2 0ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        689988: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("287727");
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
        812204: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), (i = l || (l = {})).POPOUT_WINDOW = "popout window", i.OVERLAY = "overlay", i.NOTICE = "notice", i.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", i.BADGE = "badge", i.USER_SETTINGS = "user settings", i.USER_SETTINGS_MENU = "user settings menu", i.ACCOUNT = "account", i.TEXT_AND_IMAGES = "text and images", i.GUILD_SETTINGS = "guild settings", i.OVERVIEW = "overview", i.STICKERS = "stickers", i.VANITY_URL = "vanity url", i.PREMIUM_MARKETING = "premium marketing", i.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", i.PREMIUM_PAYMENT_MODAL = "premium payment modal", i.PREMIUM_UPSELL_ALERT = "premium upsell alert", i.PREMIUM_UPSELL_MODAL = "premium upsell modal", i.PREMIUM_SETTINGS = "premium settings", i.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", i.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", i.CHANNEL_CALL = "channel call", i.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", i.RTC_PANEL = "rtc panel", i.SOUNDBOARD_BUTTON = "soundboard button", i.SOUNDBOARD_POPOUT = "soundboard popout", i.SOUNDBOARD_WHEEL = "soundboard wheel", i.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", i.GIFT_BUTTON = "gift button", i.EXPRESSION_SUGGESTIONS = "expression suggestions", i.EMOJI_PICKER = "emoji picker", i.STICKER_PICKER = "sticker picker", i.STICKER_POPOUT = "sticker popout", i.PREMIUM_UPSELL = "premium upsell", i.EMPTY_STATE = "empty state", i.SUBSCRIPTION_DETAILS = "subscription details", i.SUBSCRIPTION_HEADER = "subscription header", i.ACCOUNT_CREDIT_BANNER = "account credit banner", i.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", i.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", i.STREAM_QUALITY_INDICATOR = "stream quality indicator", i.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", i.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", i.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", i.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", i.RPC = "rpc", i.BILLING_STANDALONE = "billing standalone", i.GUILD_CHANNEL_LIST = "guild channel list", i.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", i.STICKER_MESSAGE = "sticker message", i.CHANNEL_TEXT_AREA = "channel text area", i.HEADER_BAR = "header bar", i.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", i.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", i.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", i.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", i.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", i.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", i.GUILD_HEADER = "guild header", i.GUILD_BANNER = "guild banner", i.GUILD_BANNER_NOTICE = "guild banner notice", i.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", i.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", i.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", i.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", i.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", i.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", i.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", i.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", i.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", i.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", i.GUILDS_LIST = "guilds list", i.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", i.ACTIVITY_DIRECTORY = "activity directory", i.ACTIVITY_TILE = "activity tile", i.ACTIVITY_UPSELL = "activity upsell", i.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", i.INSTANT_INVITE_MODAL = "instant invite modal", i.IMAGE_CROPPING_MODAL = "image cropping modal", i.GIF_PICKER = "gif picker", i.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", i.INVITE_MODAL = "invite modal", i.INVITE_EMBED = "invite embed", i.NEW_GUILD_BUTTON = "new guild button", i.CHARACTER_COUNT = "character count", i.DM_CHANNEL = "dm channel", i.GUILD_CHANNEL = "guild channel", i.FORUM_CHANNEL = "forum channel", i.FILE_UPLOAD_POPOUT = "file upload popout", i.EMOJI = "emoji", i.PROFILE = "profile", i.PROFILE_MODAL = "profile modal", i.PROFILE_POPOUT = "profile popout", i.GUILD_PROFILE = "guild profile", i.EDIT_AVATAR = "edit avatar", i.EDIT_BANNER = "edit banner", i.CHAT_INPUT = "chat input", i.CREATE_THREAD = "create thread", i.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", i.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", i.SELECT_IMAGE_MODAL = "select image modal", i.VIDEO_BACKGROUND_OPTIONS = "video background options", i.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", i.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", i.CAMERA_PREVIEW = "camera preview", i.HOME_PAGE_PREMIUM_TAB = "home page premium tab", i.HOME_PAGE_SHOP_TAB = "home page shop tab", i.PREMIUM_MARKETING_SURFACE = "premium marketing surface", i.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", i.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", i.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", i.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", i.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", i.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", i.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", i.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", i.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", i.PREMIUM_MARKETING_FEATURE = "premium marketing feature", i.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", i.PREMIUM_MARKETING_FOOTER = "premium marketing footer", i.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", i.CHANNEL_CALL_ACTION_BAR = "channel call action bar", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", i.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", i.VOICE_CONTROL_TRAY = "voice control tray", i.ACTIVE_NOW_COLUMN = "active now column", i.CONTEXT_MENU = "context menu", i.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", i.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", i.CHANNEL_CATEGORY_MENU = "channel category menu", i.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", i.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", i.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", i.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", i.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", i.CHANNEL_TITLE_MENU = "channel title menu", i.GROUP_DM_MENU = "group dm menu", i.AUDIT_LOG_USER_MENU = "audit log user menu", i.BANNED_USER_MENU = "banned user menu", i.DM_USER_MENU = "dm user menu", i.GROUP_DM_USER_MENU = "group dm user menu", i.GUILD_CHANNEL_USER_MENU = "guild channel user menu", i.GUILD_MODERATION_USER_MENU = "guild moderation user menu", i.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", i.GUILD_SETTINGS_USER_MENU = "guild settings user menu", i.GUILD_USER_MENU = "guild user menu", i.THREAD_USER_MENU = "thread user menu", i.USER_GENERIC_MENU = "user generic menu", i.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", i.VOICE_ACTION_SHEET = "voice action sheet", i.FOCUSED_VOICE_CONTROLS = "focused voice controls", i.MASKED_LINK = "masked link", i.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", i.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", i.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", i.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", i.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", i.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", i.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", i.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", i.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", i.ACCOUNT_PROFILE_POPOUT = "account profile popout", i.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", i.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", i.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", i.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", i.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", i.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", i.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", i.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", i.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", i.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", i.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", i.STAGE_VIDEO_LIMIT = "stage video limit", i.ACTIVITIES_MINI_SHELF = "activities mini shelf", i.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", i.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", i.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", i.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", i.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", i.APP_ICON_EDITOR = "app icon editor", i.CLIENT_THEMES_EDITOR = "client themes editor", i.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", i.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", i.SHARE_NITRO_EMBED = "share nitro embed", i.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", i.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", i.REFERRAL_TRIALS_POPOUT = "referral trials popout", i.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", i.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", i.ACTIVITY_BOOKMARK = "activity bookmark", i.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", i.ACTIVITY_DETAIL_PAGE = "activity detail page", i.ACTIVITIES_PAGE = "activities page", i.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", i.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", i.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", i.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", i.ACTIVITIES_HAPPENING_NOW = "activities happening now", i.MEDIA_VIEWER = "media viewer", i.MESSAGE_LONG_PRESS_MENU = "message long press menu", i.COLLECTIBLES_SHOP = "collectibles shop", i.COLLECTIBLES_SHOP_CARD = "collectibles shop card", i.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", i.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", i.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", i.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", i.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", i.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", i.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", i.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", i.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", i.PREMIUM_BILLING_INFO = "premium billing info", i.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", i.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", i.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", i.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", i.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", i.PREMIUM_PLAN_SELECT = "premium_plan_select", i.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", i.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", i.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", i.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", i.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", i.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", i.MEMBER_SAFETY_PAGE = "member safety page", i.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", i.GUILD_MEMBER_MOD_VIEW = "guild member mod view", i.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", i.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", i.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", i.GUILD_SHOP_PAGE = "guild shop page", i.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", i.MESSAGE_REMIX_TAG = "message remix tag", i.MESSAGE_REMIX_BUTTON = "message remix button", i.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", i.CLIPS_SETTINGS = "clips settings", i.CLIPS_GALLERY = "clips gallery", i.CLIPS_GALLERY_ITEM = "clips gallery item", i.CLIPS_EDITOR = "clips editor", i.CLIPS_SHARE_MODAL = "clips share modal", i.CHANNEL_ATTACH_BUTTON = "channel attach button", i.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", i.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", i.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", i.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", i.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", i.GUILD_EVENT_CARD = "guild event card", i.EVENT_SETTINGS = "event settings";
            var i, l, r = l
        },
        772051: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ClydeExperimentState: function() {
                    return l
                },
                default: function() {
                    return s
                }
            });
            var i, l, r = n("862205");
            (i = l || (l = {}))[i.None = 0] = "None", i[i.DefaultOn = 1] = "DefaultOn", i[i.DefaultOff = 2] = "DefaultOff", i[i.ComingSoon = 3] = "ComingSoon", i[i.ClydeProfiles = 4] = "ClydeProfiles";
            let a = (0, r.createExperiment)({
                kind: "guild",
                id: "2023-03_clyde_ai",
                label: "ClydeAI",
                defaultConfig: {
                    experimentState: l.None
                },
                treatments: [{
                    id: 1,
                    label: "Enabled (Default Off)",
                    config: {
                        experimentState: l.DefaultOff
                    }
                }, {
                    id: 3,
                    label: "Enabled (Default On)",
                    config: {
                        experimentState: l.DefaultOn
                    }
                }, {
                    id: 4,
                    label: "Coming Soon",
                    config: {
                        experimentState: l.ComingSoon
                    }
                }, {
                    id: 5,
                    label: "Clyde Profiles",
                    config: {
                        experimentState: l.ClydeProfiles
                    }
                }]
            });
            var s = a
        },
        254927: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isClydeEnabledinGdms: function() {
                    return r
                }
            });
            var i = n("862205");
            let l = (0, i.createExperiment)({
                kind: "user",
                id: "2023-06_clyde_ai_gdm",
                label: "Clyde in DMs/GDMs",
                defaultConfig: {
                    isClydeEnabledinGdms: !1
                },
                treatments: [{
                    id: 1,
                    label: "enable clyde in gdms",
                    config: {
                        isClydeEnabledinGdms: !0
                    }
                }]
            });

            function r() {
                let {
                    isClydeEnabledinGdms: e
                } = l.getCurrentConfig({
                    location: "38acdb_1"
                }, {
                    autoTrackExposure: !1
                });
                return e
            }
        },
        980215: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useClydeExperiment: function() {
                    return u
                },
                useClydeProfilesEnabled: function() {
                    return c
                },
                useClydeEnabled: function() {
                    return _
                },
                getClydeEnabled: function() {
                    return d
                },
                getClydeExperimentEnabled: function() {
                    return T
                },
                canUseCustomClydeProfiles: function() {
                    return I
                }
            }), n("773670"), n("498225");
            var i = n("305961"),
                l = n("957255"),
                r = n("772051"),
                a = n("254927"),
                s = n("49111"),
                o = n("724210");

            function u(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
                    l = r.default.useExperiment({
                        guildId: i,
                        location: "1e9ccc_1"
                    }, {
                        autoTrackExposure: n
                    }).experimentState;
                return l
            }

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = u(e, t);
                return n === r.ClydeExperimentState.ClydeProfiles
            }

            function _(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = u(e, n);
                return E(i, e, t)
            }

            function E(e, t, n) {
                if (null == t) {
                    if (null != n && n.isPrivate()) {
                        if (n.hasFlag(o.ChannelFlags.CLYDE_AI)) return !0;
                        let e = (0, a.isClydeEnabledinGdms)();
                        if (!e) return !1;
                        let t = i.default.getGuildIds().some(e => T(i.default.getGuild(e)));
                        return t
                    }
                    return !1
                }
                return null != e && e !== r.ClydeExperimentState.None && l.default.can(s.Permissions.USE_CLYDE_AI, n)
            }

            function d(e, t) {
                var n;
                let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : "",
                    a = r.default.getCurrentConfig({
                        guildId: l,
                        location: "1e9ccc_2"
                    }, {
                        autoTrackExposure: i
                    }).experimentState;
                return E(a, e, t)
            }

            function T(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = S(e, t);
                return n !== r.ClydeExperimentState.None
            }

            function I(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return S(e, t) === r.ClydeExperimentState.ClydeProfiles
            }

            function S(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (null == e) return !1;
                let n = e.id;
                return r.default.getCurrentConfig({
                    guildId: n,
                    location: "1e9ccc_4"
                }, {
                    autoTrackExposure: t
                }).experimentState
            }
        },
        20606: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = n("710984").default
        },
        441413: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StretchedSparkleStar: function() {
                    return _
                },
                default: function() {
                    return E
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("575482"),
                r = n.n(l),
                a = n("75196"),
                s = n("956089"),
                o = n("125835"),
                u = n("782340"),
                c = n("936676");

            function _(e) {
                return (0, i.jsx)("svg", {
                    ...(0, a.default)({
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

            function E(e) {
                let {
                    className: t,
                    forceUseColorForSparkles: n = !1,
                    shouldInheritTextColor: l = !1,
                    shouldInheritBackgroundColor: a = !1
                } = e;
                return (0, i.jsx)(o.default, {
                    className: t,
                    forceUseColor: n,
                    children: (0, i.jsx)(s.TextBadge, {
                        disableColor: !0,
                        className: r(c.tag, {
                            [c.inheritTextColor]: l,
                            [c.inheritBackgroundColor]: a
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
            var i = n("920040");
            n("773670");
            var l = n("575482"),
                r = n.n(l),
                a = n("642032"),
                s = n("529028");

            function o(e) {
                let {
                    className: t,
                    children: n,
                    forceUseColor: l = !1,
                    hideStars: o
                } = e;
                return (0, i.jsxs)("span", {
                    className: r(s.container, t, {
                        [s.containerColored]: l
                    }),
                    children: [n, o ? null : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(a.default, {
                            foreground: s.sparkleStarTopRight
                        }), (0, i.jsx)(a.default, {
                            foreground: s.sparkleStarRight
                        }), (0, i.jsx)(a.default, {
                            foreground: s.sparkleStarBottomLeft
                        })]
                    })]
                })
            }
        },
        153727: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("575482"),
                r = n.n(l),
                a = n("454589"),
                s = n("659632"),
                o = n("642906"),
                u = n("85336"),
                c = n("244101");

            function _(e) {
                let {
                    className: t,
                    isEligibleForTrial: n = !1
                } = e, {
                    step: l,
                    breadcrumbs: _,
                    startedPaymentFlowWithPaymentSourcesRef: E,
                    giftRecipient: d
                } = (0, o.usePaymentContext)();
                if (null == _ || 0 === _.length || (0, s.isCustomGiftEnabled)(d)) return null;
                let T = _.flatMap(e => {
                    let t = e.useBreadcrumbLabel();
                    return null != t ? {
                        id: e.id,
                        label: t
                    } : []
                });
                return 0 === T.length ? null : (T = T.filter(e => {
                    let t = e.id !== u.Step.ADD_PAYMENT_STEPS,
                        i = e.id === u.Step.ADD_PAYMENT_STEPS && !E.current;
                    return !n || n && (t || i)
                }), (0, i.jsx)("div", {
                    className: r("breadcrumb", c.wrapper, t),
                    children: (0, i.jsx)(a.default, {
                        activeId: l,
                        breadcrumbs: T
                    })
                }))
            }
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("462567"),
                r = n("77078"),
                a = n("112679"),
                s = n("55689"),
                o = n("855133"),
                u = n("599110"),
                c = n("659500"),
                _ = n("49111"),
                E = n("646718");

            function d(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: d,
                    onClose: T,
                    onComplete: I,
                    onSubscriptionConfirmation: S,
                    analyticsLocations: C,
                    analyticsObject: R,
                    analyticsLocation: p,
                    analyticsSourceLocation: m,
                    isGift: A = !1,
                    giftMessage: N,
                    subscriptionTier: L,
                    trialId: f,
                    postSuccessGuild: O,
                    openInvoiceId: M,
                    applicationId: P,
                    referralTrialOfferId: h,
                    giftRecipient: U,
                    returnRef: g
                } = null != e ? e : {}, D = !1, v = (0, l.v4)();
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
                            loadId: v,
                            subscriptionTier: L,
                            skuId: L,
                            isGift: A,
                            giftMessage: N,
                            giftRecipient: U,
                            initialPlanId: t,
                            followupSKUInfo: d,
                            onClose: e => {
                                l(), null == T || T(e), e && (null == S || S())
                            },
                            onComplete: () => {
                                D = !0, null == I || I(), !A && ((0, o.setIsPersistentHelperHidden)(!0), (0, o.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: S,
                            analyticsLocations: C,
                            analyticsObject: R,
                            analyticsLocation: p,
                            analyticsSourceLocation: m,
                            trialId: f,
                            postSuccessGuild: O,
                            planGroup: E.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: M,
                            applicationId: P,
                            referralTrialOfferId: h,
                            returnRef: g
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !D && u.default.track(_.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: v,
                            payment_type: _.PurchaseTypeToAnalyticsPaymentType[_.PurchaseTypes.SUBSCRIPTION],
                            location: null != p ? p : R,
                            source: m,
                            subscription_type: _.SubscriptionTypes.PREMIUM,
                            is_gift: A,
                            eligible_for_trial: null != f,
                            application_id: P,
                            location_stack: C
                        }), (0, a.clearError)(), (0, s.clearPurchaseTokenAuthState)(), null == T || T(D), D && (!A && c.ComponentDispatch.dispatch(_.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == S || S())
                    },
                    onCloseRequest: _.NOOP
                })
            }
        },
        324878: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useHasActiveTrial: function() {
                    return s
                },
                hasActiveTrial: function() {
                    return o
                },
                isEligibleTrialSub: function() {
                    return u
                },
                useCurrentPremiumTrialTier: function() {
                    return c
                }
            });
            var i = n("498225"),
                l = n("697218"),
                r = n("521012"),
                a = n("646718");
            let s = () => {
                    let e = (0, i.useStateFromStores)([r.default], () => r.default.getPremiumTypeSubscription());
                    return (null == e ? void 0 : e.trialId) != null
                },
                o = () => {
                    var e;
                    return (null === (e = r.default.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.trialId) != null
                },
                u = e => (null == e ? void 0 : e.trialId) != null && (e.trialId === a.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID || e.trialId === a.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID || e.trialId === a.PREMIUM_TIER_2_3P_ONE_MONTH_TRIAL_ID || e.trialId === a.PREMIUM_TIER_2_REFERRAL_TRIAL_ID);

            function c() {
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
                    return a
                },
                setCanPlayWowMoment: function() {
                    return s
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
                a = () => {
                    i.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                s = e => {
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
                    return a
                }
            });
            var i = n("716849"),
                l = n("646718");

            function r(e, t, n) {
                return null == e ? l.PremiumTypes.TIER_2 : e[l.PremiumSubscriptionSKUs.TIER_0] * t > e[l.PremiumSubscriptionSKUs.TIER_2] * n ? l.PremiumTypes.TIER_0 : l.PremiumTypes.TIER_2
            }

            function a(e) {
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
                    return E
                }
            });
            var i = n("498225"),
                l = n("697218"),
                r = n("10514"),
                a = n("719923"),
                s = n("716849"),
                o = n("676572"),
                u = n("942377"),
                c = n("917247"),
                _ = n("646718");

            function E(e) {
                let {
                    autoTrackExposure: t,
                    experiment: n,
                    location: E
                } = e, d = (0, i.useStateFromStores)([l.default], () => l.default.getCurrentUser()), T = (0, c.usePremiumTrialOffer)(), I = null != T, S = null != d && (0, a.isPremium)(d);
                (0, s.useMaybeFetchPremiumLikelihood)(n);
                let {
                    enabled: C,
                    useExpectedValue: R,
                    useLikelihood: p
                } = n.useExperiment({
                    location: null != E ? E : "1"
                }, {
                    autoTrackExposure: !S && !I && t
                }), {
                    premiumLikelihood: m,
                    fetched: A
                } = (0, i.useStateFromStoresObject)([o.default], () => {
                    let e = o.default.getState();
                    return {
                        fetched: e.fetched,
                        premiumLikelihood: e.premiumLikelihood
                    }
                }), N = (0, i.useStateFromStores)([r.default], () => r.default.isLoadedForSKUs([_.PremiumSubscriptionSKUs.TIER_0, _.PremiumSubscriptionSKUs.TIER_2])), L = !S && C && !I && (R ? !A || !N : !A), f = _.PremiumTypes.TIER_2;
                if (I) {
                    let e = T.subscription_trial;
                    (null == e ? void 0 : e.sku_id) === _.PremiumSubscriptionSKUs.TIER_0 ? f = _.PremiumTypes.TIER_0 : (null == e ? void 0 : e.sku_id) === _.PremiumSubscriptionSKUs.TIER_2 && (f = _.PremiumTypes.TIER_2)
                } else if (!S && !L && C) {
                    if (R) {
                        let {
                            amount: e
                        } = (0, a.getPrice)(_.SubscriptionPlans.PREMIUM_MONTH_TIER_0), {
                            amount: t
                        } = (0, a.getPrice)(_.SubscriptionPlans.PREMIUM_MONTH_TIER_2);
                        f = (0, u.getHigherExpectedValue)(m, e, t)
                    } else p && (f = (0, u.getHighestLikelihood)(m))
                }
                return {
                    isLoading: L,
                    suggestedPremiumType: f
                }
            }
        },
        273619: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var i = n("920040"),
                l = n("773670"),
                r = n("75777"),
                a = n("575482"),
                s = n.n(a),
                o = n("638800"),
                u = n("77078"),
                c = n("812952"),
                _ = n("448993"),
                E = n("736978"),
                d = n("642906"),
                T = n("85336");
            n("153727"), n("650484");
            var I = n("454589"),
                S = n("978679"),
                C = n("745279"),
                R = n("49111"),
                p = n("782340"),
                m = n("211155");
            let A = new Set([T.Step.SKU_SELECT, T.Step.AWAITING_AUTHENTICATION, T.Step.AWAITING_PURCHASE_TOKEN_AUTH, T.Step.CONFIRM]);

            function N(e) {
                let {
                    steps: t,
                    currentStep: n,
                    body: a,
                    paymentError: N,
                    header: L,
                    footer: f,
                    isGift: O = !1,
                    giftMessage: M = p.default.Messages.PREMIUM_PAYMENT_IS_GIFT,
                    isSeasonalGift: P = !1,
                    hideBreadcrumbs: h = !1,
                    isLoading: U = !1,
                    purchaseError: g,
                    purchaseErrorBlockRef: D,
                    planError: v,
                    onScroll: b,
                    scrollerClassName: G,
                    hasCurrencies: y = !1
                } = e, x = null;
                null != N && null == (0, T.errorToStep)(N) ? x = N : null != g ? x = g : null != v && (x = v);
                let B = null != x ? x.message : "";
                null != x && x instanceof _.BillingError && (x.code === E.ErrorCodes.CARD_DECLINED && y && (B += " ".concat(p.default.Messages.BILLING_ERROR_TRY_ANOTHER)), x.code === E.ErrorCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (B = p.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), x.code === R.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (B = p.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
                let {
                    stripe: H
                } = (0, d.usePaymentContext)();
                U = U || null == H;
                let k = l.useRef(new o.Timeout);
                l.useEffect(() => {
                    let e = k.current;
                    return null != H || e.isStarted() ? null != H && e.stop() : e.start(1e4, () => {
                        let e = Error("Stripe took too long to load");
                        (0, C.captureBillingException)(e)
                    }), () => {
                        e.stop()
                    }
                }, [H]);
                let V = t.includes(T.Step.PAYMENT_TYPE) ? T.Step.PAYMENT_TYPE : T.Step.ADD_PAYMENT_STEPS;
                return (0, i.jsxs)(r.Elements, {
                    options: R.StripeElementsOptions,
                    stripe: H,
                    children: [L, (0, i.jsxs)("div", {
                        className: s("paymentModalContent", m.content),
                        children: [O && !P && n !== T.Step.CONFIRM ? (0, i.jsx)(c.default, {
                            className: m.paymentNote,
                            iconSize: c.default.Sizes.SMALL,
                            icon: S.default,
                            color: null == M ? c.default.Colors.PRIMARY : c.default.Colors.SECONDARY,
                            children: M
                        }) : null, h ? null : (0, i.jsx)("div", {
                            className: m.breadcrumbsWrapper,
                            children: (0, i.jsx)(I.default, {
                                activeId: T.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(n) ? V : n,
                                breadcrumbs: t.filter(e => !T.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(e) && !A.has(e)).map(e => ({
                                    id: e,
                                    label: (0, T.getLabelForStep)(e)
                                }))
                            })
                        }), (0, i.jsxs)("div", {
                            className: m.bodyWrapper,
                            children: [null == x ? null : (0, i.jsx)("div", {
                                className: m.errorBlockWrapper,
                                children: (0, i.jsx)(u.FormErrorBlock, {
                                    ref: D,
                                    children: B
                                })
                            }), U ? (0, i.jsx)(u.Spinner, {
                                className: m.loadingBlock
                            }) : (0, i.jsx)(u.Sequencer, {
                                className: m.sequencer,
                                staticClassName: m.sequencerStatic,
                                animatedNodeClassName: m.sequencerAnimatedNode,
                                fillParent: !0,
                                step: n,
                                steps: t,
                                sideMargin: 20,
                                children: (0, i.jsx)(u.AdvancedScrollerThin, {
                                    onScroll: b,
                                    className: s(m.scroller, G),
                                    children: a
                                })
                            })]
                        })]
                    }), f]
                })
            }
        },
        674158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("575482"),
                r = n.n(l),
                a = n("537537");

            function s(e) {
                let {
                    icon: t,
                    iconClassName: n,
                    description: l,
                    color: s
                } = e;
                return (0, i.jsxs)("div", {
                    className: a.perkRow,
                    children: [(0, i.jsx)("div", {
                        className: a.perkIconContainer,
                        children: (0, i.jsx)(t, {
                            color: s,
                            className: r(a.perkIcon, n)
                        })
                    }), (0, i.jsx)("div", {
                        className: a.perkDescription,
                        children: l
                    })]
                })
            }
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return a
                },
                getDevicePushProvider: function() {
                    return s
                }
            });
            var i, l, r = n("773336");
            let a = null;

            function s() {
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
            var i = n("920040"),
                l = n("773670"),
                r = n("575482"),
                a = n.n(r),
                s = n("498225"),
                o = n("77078"),
                u = n("913144"),
                c = n("850068"),
                _ = n("775433"),
                E = n("308592"),
                d = n("642906"),
                T = n("85336"),
                I = n("552917"),
                S = n("843647"),
                C = n("154889"),
                R = n("917247"),
                p = n("956597"),
                m = n("635956"),
                A = n("273619"),
                N = n("674158"),
                L = n("915639"),
                f = n("357957"),
                O = n("326880"),
                M = n("46829"),
                P = n("595086"),
                h = n("719923"),
                U = n("153160"),
                g = n("49111"),
                D = n("646718"),
                v = n("782340"),
                b = n("761442");
            let G = e => {
                let {
                    locale: t
                } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(N.default, {
                        icon: P.default,
                        iconClassName: b.iconColorPurple,
                        description: v.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
                    }), (0, i.jsx)(N.default, {
                        icon: O.default,
                        iconClassName: b.iconColorPink,
                        description: v.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_GUILD_SUBSCRIPTION.format({
                            numGuildSubscriptions: D.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
                            discountPercent: (0, U.formatPercent)(t, D.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
                        })
                    }), (0, i.jsx)(N.default, {
                        icon: M.default,
                        iconClassName: b.iconColorYellow,
                        description: v.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_PREMIUM_SUBSCRIPTION
                    })]
                })
            };

            function y() {
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(N.default, {
                        icon: P.default,
                        iconClassName: b.iconColorPurple,
                        description: v.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
                    }), (0, i.jsx)(N.default, {
                        icon: M.default,
                        iconClassName: b.iconColorYellow,
                        description: v.default.Messages.STICKER_PREMIUM_TIER_0_UPSELL_PERK_PREMIUM_SUBSCRIPTION
                    })]
                })
            }
            let x = e => {
                    let {
                        trialOffer: t,
                        discountOffer: l,
                        isTier0Upsell: r,
                        isLoading: u,
                        price: c,
                        onClose: _
                    } = e, E = (0, s.useStateFromStores)([L.default], () => L.default.locale), d = null != t || null != l;
                    return (0, i.jsxs)("div", {
                        className: b.wrapper,
                        children: [(0, i.jsx)(o.ModalCloseButton, {
                            onClick: _,
                            className: b.closeButton
                        }), d && (0, i.jsx)(p.PremiumTrialGradientBadge, {
                            className: b.premiumTrialBadge
                        }), (0, i.jsx)("img", {
                            className: a(b.heroImage, {
                                [b.heroImageWithTrialOffer]: d
                            }),
                            src: n("190389"),
                            alt: ""
                        }), u ? (0, i.jsx)(o.Spinner, {}) : (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(o.Text, {
                                variant: "text-md/normal",
                                className: b.heading,
                                children: null == c ? (0, i.jsx)(o.Spinner, {
                                    type: o.Spinner.Type.PULSING_ELLIPSIS
                                }) : r ? v.default.Messages.STICKER_PREMIUM_SUBSCRIPTION_UPSELL_ALERT_TITLE.format({
                                    planName: (0, h.getTierDisplayName)(D.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
                                    monthlyPrice: (0, U.formatPrice)(c.amount, c.currency)
                                }) : v.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_ALERT_TITLE.format({
                                    monthlyPrice: (0, U.formatPrice)(c.amount, c.currency)
                                })
                            }), (0, i.jsx)("div", {
                                className: b.perks,
                                children: r ? (0, i.jsx)(y, {}) : (0, i.jsx)(G, {
                                    locale: E
                                })
                            })]
                        })]
                    })
                },
                B = e => {
                    let {
                        trialOffer: t,
                        discountOffer: n,
                        isTier0Upsell: l,
                        onClose: r
                    } = e, a = {
                        section: g.AnalyticsSections.STICKER_PREMIUM_TIER_2_UPSELL_MODAL
                    };
                    return (0, i.jsxs)(o.ModalFooter, {
                        className: b.footer,
                        children: [(0, i.jsx)(o.Button, {
                            onClick: r,
                            size: o.Button.Sizes.SMALL,
                            color: o.Button.Colors.PRIMARY,
                            look: o.Button.Looks.LINK,
                            children: v.default.Messages.CLOSE
                        }), (0, i.jsx)(m.default, {
                            buttonText: null != t || null != n ? l ? v.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : v.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0,
                            premiumModalAnalyticsLocation: a,
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
                } = e, r = (0, E.useSubscriptionPlansLoaded)(), a = (0, s.useStateFromStores)([f.default], () => f.default.hasFetchedPaymentSources), p = r && a, m = (0, R.usePremiumTrialOffer)(), N = (0, C.usePremiumDiscountOffer)(), {
                    isLoading: L,
                    suggestedPremiumType: O
                } = (0, S.default)({
                    autoTrackExposure: p,
                    experiment: I.default,
                    location: "stickers_upsell"
                });
                l.useEffect(() => {
                    u.default.wait(() => {
                        (0, c.fetchPaymentSources)(), (0, _.fetchPremiumSubscriptionPlans)(null, null, g.RevenueSurfaces.DISCOVERY)
                    })
                }, []);
                let M = O === D.PremiumTypes.TIER_0 && null == N,
                    P = p ? h.default.getDefaultPrice(M ? D.SubscriptionPlans.PREMIUM_MONTH_TIER_0 : D.SubscriptionPlans.PREMIUM_MONTH_TIER_2) : null;
                return (0, i.jsx)(d.PaymentContextProvider, {
                    activeSubscription: null,
                    stepConfigs: [],
                    skuIDs: [],
                    children: (0, i.jsx)(o.ModalRoot, {
                        ...n,
                        "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
                        children: (0, i.jsx)(A.default, {
                            hideBreadcrumbs: !0,
                            body: (0, i.jsx)(x, {
                                trialOffer: m,
                                discountOffer: N,
                                isTier0Upsell: M,
                                isLoading: !p || L,
                                price: P,
                                onClose: t
                            }),
                            footer: (0, i.jsx)(B, {
                                trialOffer: m,
                                discountOffer: N,
                                isTier0Upsell: M,
                                onClose: t
                            }),
                            steps: [T.Step.PREMIUM_UPSELL],
                            currentStep: T.Step.PREMIUM_UPSELL
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
                    return a
                },
                default: function() {
                    return s
                }
            });
            var i = n("729912");
            let l = "@silent",
                r = new RegExp("^".concat(l, "(\\s|$)"));

            function a() {
                let e = i.SilentMessagesExperiment.getCurrentConfig({
                    location: "456bd9_1"
                }, {
                    autoTrackExposure: !1
                });
                return e.allowSending
            }

            function s(e) {
                return a() && null != e.match(r) ? [!0, e.substring(l.length).trim()] : [!1, e]
            }
        },
        211895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("913144"),
                l = n("54239"),
                r = n("49111");

            function a() {
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
                    return U
                }
            });
            var i = n("427964"),
                l = n.n(i),
                r = n("498225"),
                a = n("913144"),
                s = n("697218"),
                o = n("49111");
            let u = o.FormStates.CLOSED,
                c = null,
                _ = null,
                E = {},
                d = {},
                T = {},
                I = null,
                S = null,
                C = !1,
                R = !1,
                p = null,
                m = null,
                A = null,
                N = [],
                L = null,
                f = null;

            function O(e) {
                var t, n, i, l, r, a;
                let c = s.default.getCurrentUser();
                if (null == c) return M();
                _ = null !== (t = e.section) && void 0 !== t ? t : _, L = null !== (n = e.section) && void 0 !== n ? n : _, null != e.subsection && null != _ && (E[_] = e.subsection), null != e.scrollPosition && null != _ && (d[_] = e.scrollPosition), R = !!e.openWithoutBackstack, u = o.FormStates.OPEN, T = {}, S = {
                    ...I = {
                        [o.UserSettingsSections.ACCOUNT]: {
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
                }, m = null !== (i = e.onClose) && void 0 !== i ? i : null, A = null !== (l = e.analyticsLocation) && void 0 !== l ? l : null, N = null !== (r = e.analyticsLocations) && void 0 !== r ? r : [], f = null !== (a = e.impressionSource) && void 0 !== a ? a : null
            }

            function M() {
                u = o.FormStates.CLOSED, C = !1, I = null, L = null, S = null, c = null, _ = null, E = {}, d = {}, m = null, A = null, N = [], f = null
            }

            function P() {
                u = o.FormStates.OPEN, T = {}
            }
            class h extends r.default.Store {
                initialize() {
                    this.waitFor(s.default)
                }
                hasChanges() {
                    return null != S && null != I && (!!this.isOpen() || p === o.DrawerTabTypes.USER_SETTINGS) && !l.isEqual(S, I)
                }
                isOpen() {
                    return C
                }
                getPreviousSection() {
                    return c
                }
                getSection() {
                    return _
                }
                getSubsection() {
                    return null != _ ? E[_] : null
                }
                getScrollPosition() {
                    return null != _ ? d[_] : null
                }
                shouldOpenWithoutBackstack() {
                    return R
                }
                getProps() {
                    return {
                        submitting: u === o.FormStates.SUBMITTING,
                        section: _,
                        subsection: null != _ ? E[_] : null,
                        scrollPosition: null != _ ? d[_] : null,
                        settings: S,
                        errors: T,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: R,
                        analyticsLocation: A,
                        analyticsLocations: N,
                        initialSection: L,
                        impressionSource: f
                    }
                }
                get onClose() {
                    return m
                }
            }
            h.displayName = "UserSettingsModalStore";
            var U = new h(a.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    C = !0, O(e)
                },
                USER_SETTINGS_MODAL_INIT: O,
                USER_SETTINGS_MODAL_CLOSE: M,
                LOGOUT: M,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    u = o.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (u !== o.FormStates.SUBMITTING) return !1;
                    u = o.FormStates.OPEN, _ = o.UserSettingsSections.ACCOUNT, T = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    var t;
                    c = _, _ = e.section, A = null, N = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (E[_] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete E[t] : null != _ && delete E[_]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete d[t] : null != _ && delete d[_]
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
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: P,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = s.default.getCurrentUser();
                    P(), null != e && (S = {
                        ...I = {
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
                    return p = e.tab, null == _ && p === o.DrawerTabTypes.USER_SETTINGS && O({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        454589: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("920040"),
                l = n("773670"),
                r = n("575482"),
                a = n.n(r),
                s = n("77078"),
                o = n("145131"),
                u = n("461380"),
                c = n("146500");
            class _ extends l.PureComponent {
                handleClick(e) {
                    let {
                        onBreadcrumbClick: t
                    } = this.props;
                    null != t && t(e)
                }
                render() {
                    let {
                        breadcrumbs: e,
                        className: t
                    } = this.props, n = e.map(this.renderBreadcrumb);
                    return (0, i.jsx)(o.default, {
                        justify: o.default.Justify.START,
                        className: a(c.breadcrumbs, t),
                        children: n
                    })
                }
                constructor(...e) {
                    super(...e), this.renderBreadcrumb = (e, t) => {
                        let {
                            activeId: n,
                            onBreadcrumbClick: l,
                            breadcrumbs: r,
                            renderCustomBreadcrumb: o,
                            separatorClassName: _
                        } = this.props, E = e.id === n, d = t === r.length - 1, T = null != o ? o(e, E) : (0, i.jsx)("span", {
                            className: a(c.breadcrumb, {
                                [c.activeBreadcrumb]: E,
                                [c.interactiveBreadcrumb]: null != l
                            }),
                            children: e.label
                        });
                        return (0, i.jsxs)("div", {
                            className: a(c.breadcrumbWrapper, {
                                [c.breadcrumbFinalWrapper]: d
                            }),
                            children: [null != l ? (0, i.jsx)(s.Clickable, {
                                tag: "span",
                                onClick: () => this.handleClick(e),
                                className: c.breadcrumbClickWrapper,
                                children: T
                            }) : T, d ? null : (0, i.jsx)(u.default, {
                                className: a(c.breadcrumbArrow, _),
                                direction: u.default.Directions.RIGHT
                            })]
                        }, e.id)
                    }
                }
            }
            var E = _
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return a
                },
                useUID: function() {
                    return s
                },
                UID: function() {
                    return o
                }
            });
            var i = n("552473"),
                l = n.n(i),
                r = n("365444");
            let a = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return l(e)
                },
                s = () => (0, r.useLazyValue)(() => a()),
                o = e => {
                    let {
                        children: t
                    } = e;
                    return t(s())
                }
        },
        326880: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("75196");

            function r(e) {
                let {
                    width: t = 6,
                    height: n = 11,
                    color: r = "currentColor",
                    foreground: a,
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 6 11",
                    children: (0, i.jsxs)("g", {
                        fill: r,
                        fillRule: "evenodd",
                        className: a,
                        children: [(0, i.jsx)("path", {
                            d: "M2 4.42007V6.79007L3 7.79007L4 6.79007V4.42007L3.01 3.42007L2 4.42007Z"
                        }), (0, i.jsx)("path", {
                            d: "M3 0.590088L0 3.59009V7.59009L3 10.5901L6 7.59009V3.59009L3 0.590088ZM5 7.21009L3 9.21009L1 7.21009V4.00009L3 2.00009L5 4.00009V7.21009Z"
                        })]
                    })
                })
            }
        },
        46829: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("469563"),
                r = n("404061"),
                a = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: l,
                            className: r,
                            d: "M12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 6.477 17.523 2 12 2ZM8 6C9.104 6 10 6.896 10 8C10 9.105 9.104 10 8 10C6.896 10 6 9.105 6 8C6 6.896 6.896 6 8 6ZM18 14C18 16.617 15.14 19 12 19C8.86 19 6 16.617 6 14V13H18V14ZM16 10C14.896 10 14 9.105 14 8C14 6.896 14.896 6 16 6C17.104 6 18 6.896 18 8C18 9.105 17.104 10 16 10Z"
                        })
                    })
                }, r.SmileIcon)
        },
        118503: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("75196");

            function r(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = "currentColor",
                    foreground: a,
                    ...s
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 8 12",
                    children: [(0, i.jsx)("path", {
                        d: "M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z",
                        fill: r,
                        className: a
                    }), (0, i.jsx)("path", {
                        d: "M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z",
                        fill: r,
                        className: a
                    })]
                })
            }
        },
        642032: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("75196");

            function r(e) {
                let {
                    width: t = 14,
                    height: n = 13,
                    color: r = "currentColor",
                    foreground: a,
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)({
                        ...s
                    }),
                    width: t,
                    height: n,
                    viewBox: "0 0 ".concat(t, " ").concat(n),
                    className: a,
                    fill: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                        d: "M9.30705 8.36284L13.5731 6.46363C13.5889 6.45487 13.6022 6.44203 13.6114 6.42644C13.6206 6.41086 13.6255 6.39309 13.6255 6.375C13.6255 6.35691 13.6206 6.33914 13.6114 6.32356C13.6022 6.30797 13.5889 6.29513 13.5731 6.28637L9.30705 4.38716C9.29358 4.38716 9.28066 4.38183 9.27114 4.37233C9.26162 4.36283 9.25627 4.34995 9.25627 4.33652L7.3518 0.0569762C7.30102 -0.0189921 7.19944 -0.0189921 7.17405 0.0569762L5.26958 4.33652C5.24419 4.36184 5.24419 4.38716 5.2188 4.38716L0.927401 6.28637C0.911525 6.29513 0.898291 6.30797 0.889077 6.32356C0.879862 6.33914 0.875 6.35691 0.875 6.375C0.875 6.39309 0.879862 6.41086 0.889077 6.42644C0.898291 6.44203 0.911525 6.45487 0.927401 6.46363L5.2188 8.36284C5.24419 8.36284 5.24419 8.38816 5.26958 8.41348L7.17405 12.693C7.19944 12.769 7.30102 12.769 7.3518 12.693L9.25627 8.41348C9.25627 8.40005 9.26162 8.38717 9.27114 8.37767C9.28066 8.36817 9.29358 8.36284 9.30705 8.36284Z",
                        fill: "currentColor"
                    })
                })
            }
        },
        595086: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("575482"),
                r = n.n(l),
                a = n("469563"),
                s = n("65969"),
                o = n("75196"),
                u = n("318494"),
                c = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        winking: a = !1,
                        foreground: s,
                        ...c
                    } = e;
                    return (0, i.jsxs)("svg", {
                        width: t,
                        height: n,
                        ...(0, o.default)(c),
                        viewBox: "0 0 20 20",
                        children: [(0, i.jsx)("path", {
                            fill: l,
                            className: r(s, {
                                [u.hidden]: a
                            }),
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12.0002 0.662583V5.40204C12.0002 6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 12.0002 0.0676718 12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 0.0583083 0 0.955595 0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 18.0041V10.0282H14.5759ZM11.9998 12.2201C11.9998 13.3245 11.1046 14.2198 10.0002 14.2198C8.8958 14.2198 8.00052 13.3245 8.00052 12.2201H6.66742C6.66742 14.0607 8.15955 15.5529 10.0002 15.5529C11.8408 15.5529 13.3329 14.0607 13.3329 12.2201H11.9998ZM4.44559 13.331C4.44559 13.9446 3.94821 14.442 3.33467 14.442C2.72112 14.442 2.22375 13.9446 2.22375 13.331C2.22375 12.7175 2.72112 12.2201 3.33467 12.2201C3.94821 12.2201 4.44559 12.7175 4.44559 13.331ZM16.6657 14.442C17.2793 14.442 17.7766 13.9446 17.7766 13.331C17.7766 12.7175 17.2793 12.2201 16.6657 12.2201C16.0522 12.2201 15.5548 12.7175 15.5548 13.331C15.5548 13.9446 16.0522 14.442 16.6657 14.442Z"
                        }), (0, i.jsx)("path", {
                            fill: l,
                            className: r(s, {
                                [u.hidden]: !a
                            }),
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12.0002 0.662583V5.40204C12.0002 6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 12.0002 0.0676718 12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 0.0583083 0 0.955595 0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 18.0041V10.0282H14.5759ZM12 13H11.2H8.8H8C8 14.1046 8.89543 15 10 15C11.1046 15 12 14.1046 12 13ZM17.7766 13.331C17.7766 13.9446 17.2793 14.442 16.6657 14.442C16.0522 14.442 15.5548 13.9446 15.5548 13.331C15.5548 12.7175 16.0522 12.2201 16.6657 12.2201C17.2793 12.2201 17.7766 12.7175 17.7766 13.331ZM2 12.2361L2.53532 11L5.62492 12.7835C5.79161 12.8797 5.79161 13.1203 5.62492 13.2165L2.53532 15L2 13.7639L3.32339 13L2 12.2361Z"
                        })]
                    })
                }, s.StickerIcon, {
                    winking: "remove"
                })
        },
        719347: function(e, t, n) {
            "use strict";
            var i, l;
            n.r(t), n.d(t, {
                MEDIA_MOSAIC_MAX_WIDTH: function() {
                    return r
                },
                MEDIA_MOSAIC_MAX_HEIGHT: function() {
                    return a
                },
                MINIMUM_MEDIA_MOSAIC_DIM: function() {
                    return s
                },
                MediaLayoutType: function() {
                    return i
                },
                SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE: function() {
                    return o
                }
            });
            let r = 550,
                a = 350,
                s = 40;
            (l = i || (i = {})).STATIC = "STATIC", l.RESPONSIVE = "RESPONSIVE", l.MOSAIC = "MOSAIC";
            let o = 20
        },
        956089: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BadgeShapes: function() {
                    return o
                },
                getBadgeWidthForValue: function() {
                    return u
                },
                getBadgeCountString: function() {
                    return c
                },
                NumberBadge: function() {
                    return _
                },
                TextBadge: function() {
                    return E
                },
                PremiumBadge: function() {
                    return d
                },
                IconBadge: function() {
                    return T
                },
                CircleBadge: function() {
                    return I
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("575482"),
                r = n.n(l);
            n("77078");
            var a = n("20606");
            n("782340");
            var s = n("460671");
            let o = {
                ROUND: s.baseShapeRound,
                ROUND_LEFT: s.baseShapeRoundLeft,
                ROUND_RIGHT: s.baseShapeRoundRight,
                SQUARE: ""
            };

            function u(e) {
                return e < 10 ? 16 : e < 100 ? 22 : 30
            }

            function c(e) {
                return e < 1e3 ? "".concat(e) : "".concat(Math.min(Math.floor(e / 1e3), 9), "k+")
            }
            let _ = e => {
                    let {
                        count: t,
                        color: n = a.default.STATUS_DANGER,
                        disableColor: l = !1,
                        shape: _ = o.ROUND,
                        className: E,
                        style: d,
                        ...T
                    } = e;
                    return (0, i.jsx)("div", {
                        className: r(E, s.numberBadge, _),
                        style: {
                            backgroundColor: l ? void 0 : n,
                            width: u(t),
                            paddingRight: function(e) {
                                switch (e) {
                                    case 1:
                                    case 4:
                                    case 6:
                                        return 1;
                                    default:
                                        return
                                }
                            }(t),
                            ...d
                        },
                        ...T,
                        children: c(t)
                    })
                },
                E = e => {
                    let {
                        text: t,
                        className: n,
                        color: l = a.default.STATUS_DANGER,
                        shape: u = o.ROUND,
                        disableColor: c = !1,
                        style: _,
                        ...E
                    } = e;
                    return (0, i.jsx)("div", {
                        className: r(n, s.textBadge, u),
                        style: {
                            backgroundColor: c ? void 0 : l,
                            ..._
                        },
                        ...E,
                        children: t
                    })
                },
                d = e => {
                    let {
                        text: t,
                        className: n,
                        ...l
                    } = e;
                    return (0, i.jsx)(E, {
                        className: r(s.premiumBadge, n),
                        text: t,
                        ...l
                    })
                },
                T = e => {
                    let {
                        icon: t,
                        className: n,
                        color: l = a.default.STATUS_DANGER,
                        shape: u = o.ROUND,
                        disableColor: c = !1,
                        style: _
                    } = e;
                    return (0, i.jsx)("div", {
                        className: r(n, s.iconBadge, u),
                        style: {
                            backgroundColor: c ? void 0 : l,
                            ..._
                        },
                        children: (0, i.jsx)(t, {
                            className: s.icon
                        })
                    })
                },
                I = e => {
                    let {
                        className: t,
                        color: n = a.default.INTERACTIVE_ACTIVE,
                        shape: l = o.ROUND,
                        disableColor: u = !1,
                        style: c,
                        ..._
                    } = e;
                    return (0, i.jsx)("div", {
                        className: r(t, s.circleBadge, l),
                        style: {
                            backgroundColor: u ? void 0 : n,
                            ...c
                        },
                        ..._
                    })
                }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return r
                }
            });
            var i = n("427964"),
                l = n.n(i);
            let r = e => "function" == typeof e ? e() : e;
            l.curry((e, t, n) => r(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let i, l;
            n.r(t), n.d(t, {
                default: function() {
                    return c
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
                let c = i(T, _, a);

                function _() {
                    null == o || o()
                }

                function E(e) {
                    l(c), n(e)
                }

                function d(e) {
                    l(c), r(e)
                }

                function T(e) {
                    return s(c, T, _, {
                        ...a,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: E,
                        reject: d,
                        code: e,
                        mfaCodeHandler: I,
                        isModalOpen: !0
                    })
                }

                function I(e) {
                    let {
                        res: t
                    } = e;
                    s(c, T, _, {
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

            function c(e, t) {
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
            var i = n("920040");
            n("773670");
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
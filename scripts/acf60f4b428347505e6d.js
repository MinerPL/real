(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["28306"], {
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
                    return u
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
        775433: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchSubscriptionPlansForSKU: function() {
                    return _
                },
                fetchSubscriptionPlansBySKUs: function() {
                    return c
                },
                fetchPremiumSubscriptionPlans: function() {
                    return d
                },
                resetSubscriptionPlanData: function() {
                    return I
                }
            });
            var i = n("872717"),
                l = n("913144"),
                r = n("333805"),
                a = n("160299"),
                o = n("745279"),
                u = n("850068"),
                s = n("49111"),
                E = n("646718");
            async function _(e, t, n, E, _) {
                l.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH",
                    skuId: e
                });
                try {
                    let r = {
                            url: s.Endpoints.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                            oldFormErrors: !0
                        },
                        o = {};
                    null != t && (o.country_code = t), null != n && (o.payment_source_id = n), null != E && (o.include_unpublished = E), null != _ && (o.revenue_surface = _), r.query = o, !a.default.ipCountryCodeLoaded && await (0, u.fetchIpCountryCode)();
                    let c = await i.default.get(r);
                    l.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                        skuId: e,
                        subscriptionPlans: c.body
                    })
                } catch (t) {
                    throw l.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                        skuId: e
                    }), (0, o.captureBillingException)(t), new r.default(t)
                }
            }

            function c(e, t) {
                return Promise.all(e.filter(e => e !== E.PremiumSubscriptionSKUs.NONE).map(e => _(e, t)))
            }

            function d(e, t, n) {
                return Promise.all(E.ACTIVE_PREMIUM_SKUS.filter(e => e !== E.PremiumSubscriptionSKUs.NONE).map(i => _(i, e, t, void 0, n)))
            }

            function I() {
                l.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
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
                a = n("211895"),
                o = n("26092"),
                u = n("599110"),
                s = n("315102"),
                E = n("730622"),
                _ = n("49111"),
                c = n("191349"),
                d = n("782340"),
                I = {
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
                        let e = o.default.onClose;
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
                            emailToken: o,
                            password: I,
                            avatar: T,
                            newPassword: A,
                            discriminator: O
                        } = e, {
                            close: N
                        } = t;
                        return (0, E.default)(e => {
                            let t = {
                                    username: n,
                                    email: a,
                                    email_token: o,
                                    password: I,
                                    avatar: T,
                                    new_password: A,
                                    ...e,
                                    discriminator: null != O && "" !== O ? O : void 0
                                },
                                r = l.default.get(_.DEVICE_TOKEN),
                                u = (0, c.getDevicePushProvider)();
                            null != u && null != r && (t.push_provider = u, t.push_token = r);
                            let s = l.default.get(_.DEVICE_VOIP_TOKEN);
                            return null != c.DEVICE_PUSH_VOIP_PROVIDER && null != s && (t.push_voip_provider = c.DEVICE_PUSH_VOIP_PROVIDER, t.push_voip_token = s), i.default.patch({
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
                            return u.default.track(_.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, s.isAnimatedIconHash)(t.avatar)
                            }), delete t.token, r.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: t.id
                            }), r.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: t
                            }), null != A && r.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: A
                            }), null != I && null != A && r.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id
                            }), N ? this.close() : this.submitComplete(), e
                        }, e => (r.default.dispatch({
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
                    return _
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                a = n.n(r),
                o = n("77078"),
                u = n("782340"),
                s = n("347129");
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
                        code: O,
                        errorMessage: N,
                        retrySuccess: R
                    } = this.state, p = l.Children.count(r) > 0 ? (0, i.jsx)(o.Card, {
                        type: o.Card.Types.WARNING,
                        className: s.card,
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: r
                        })
                    }) : null, S = null != T ? (0, i.jsxs)(o.Text, {
                        className: a(s.submitText, s.spacing),
                        variant: "text-sm/normal",
                        children: [(0, i.jsx)("br", {}), (0, i.jsx)(o.Clickable, {
                            className: a(s.spacing, s.link),
                            onClick: this.handleRetry,
                            children: (0, i.jsx)(o.Anchor, {
                                children: T
                            })
                        })]
                    }) : null, C = R ? (0, i.jsx)(o.Card, {
                        type: o.Card.Types.SUCCESS,
                        className: s.card,
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
                                    className: s.spacing,
                                    children: I
                                }) : null, p, C, (0, i.jsxs)(o.FormItem, {
                                    title: this.getLabelText(),
                                    className: s.spacing,
                                    children: [(0, i.jsx)(o.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != c ? c : 10,
                                        value: O,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, i.jsx)(o.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: s.error,
                                        children: null != E ? E : N
                                    }) : null, S]
                                })]
                            }), (0, i.jsxs)(o.ModalFooter, {
                                children: [(0, i.jsx)(o.Button, {
                                    type: "submit",
                                    disabled: _ || 0 === O.length,
                                    children: null != n ? n : u.default.Messages.CONFIRM
                                }), (0, i.jsx)(o.Button, {
                                    onClick: this.handleCancel,
                                    disabled: _,
                                    look: o.Button.Looks.LINK,
                                    color: o.Button.Colors.PRIMARY,
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
        666031: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GifIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87c-.625 0-1.178-.162-1.66-.485-.482-.324-.855-.777-1.121-1.359C4.133 13.437 4 12.762 4 12c0-.755.14-1.423.42-2.005.288-.583.701-1.039 1.24-1.37.546-.33 1.197-.495 1.951-.495.64 0 1.211.136 1.714.41.51.272.895.657 1.154 1.153l-1.218.873c-.367-.676-.913-1.013-1.639-1.013-.661 0-1.168.215-1.52.646-.352.425-.528 1.025-.528 1.8 0 .784.176 1.388.528 1.812.352.424.859.636 1.52.636.295 0 .564-.054.809-.162.251-.115.445-.27.582-.463v-.927H7.299v-1.402h3.245v4.226H9.272l-.205-.712c-.424.575-1.053.863-1.887.863Zm6.34-.151h-1.574V8.28h1.574v7.438Zm1.51 0h1.574v-2.824h2.76v-1.423h-2.76V9.704H20V8.28h-4.97v7.438Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        998460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.089A4.089 4.089 0 0 1 12 4.898 4.089 4.089 0 0 1 15.912 2H16a4 4 0 0 1 3.465 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10a2 2 0 0 1 2-2h.535A3.982 3.982 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.088c-.959 0-1.794.652-2.027 1.582L13.281 8H16Zm-5.885-2.418L10.719 8H8a2 2 0 1 1 0-4h.089c.958 0 1.793.652 2.026 1.582ZM3 20a2 2 0 0 0 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20Zm10.5 2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        578478: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ImageIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm13.35 8.133 3.5 4.667a.75.75 0 0 1-.6 1.2H5.81a.75.75 0 0 1-.585-1.218l1.854-2.318a1.5 1.5 0 0 1 2.342 0l.506.633 2.223-2.964a2 2 0 0 1 3.2 0Zm-5.146-7.156c.229-.91-.88-1.55-1.555-.898a.934.934 0 0 1-1.298 0c-.675-.653-1.784-.013-1.556.898a.934.934 0 0 1-.649 1.125c-.903.258-.903 1.538 0 1.796a.934.934 0 0 1 .65 1.125c-.229.91.88 1.55 1.555.898a.934.934 0 0 1 1.298 0c.675.653 1.784.013 1.556-.898a.934.934 0 0 1 .649-1.125c.903-.258.903-1.538 0-1.796a.934.934 0 0 1-.65-1.125Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        202909: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NitroWheelIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.252A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
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
        115279: function(e, t, n) {
            "use strict";
            var i, l, r, a, o, u, s, E, _, c, d;
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
                    return o
                },
                EMOJI_PICKER_TAB_PANEL_ID: function() {
                    return A
                },
                EMOJI_PICKER_TAB_ID: function() {
                    return O
                },
                SOUNDBOARD_PICKER_TAB_PANEL_ID: function() {
                    return N
                },
                SOUNDBOARD_PICKER_TAB_ID: function() {
                    return R
                },
                REACTION_PICKER_TAB_PANEL_ID: function() {
                    return p
                },
                REACTION_PICKER_TAB_ID: function() {
                    return S
                },
                SUPER_REACTION_PICKER_TAB_ID: function() {
                    return C
                },
                SuperReactionBalanceLocations: function() {
                    return u
                },
                GIF_PICKER_TAB_PANEL_ID: function() {
                    return m
                },
                GIF_PICKER_TAB_ID: function() {
                    return L
                },
                EMOJI_SIZE_MAP: function() {
                    return f
                },
                EMOJI_ROW_SIZE: function() {
                    return h
                }
            }), (s = i || (i = {})).GUILD = "GUILD", s.PACK = "PACK", s.UNICODE = "UNICODE", s.RECENT = "RECENT", s.CUSTOM = "CUSTOM", s.SEARCH_RESULTS = "SEARCH_RESULTS", s.FAVORITES = "FAVORITES", s.TOP_GUILD_EMOJI = "TOP_GUILD_EMOJI", s.PREMIUM_UPSELL = "PREMIUM_UPSELL";
            let I = "emoji-picker-grid";
            (E = l || (l = {})).RECENT = "recent", E.FAVORITES = "favorites", E.TOP_GUILD_EMOJI = "top guild emoji", E.CUSTOM = "custom", E.PEOPLE = "people", E.NATURE = "nature", E.FOOD = "food", E.ACTIVITY = "activity", E.TRAVEL = "travel", E.OBJECTS = "objects", E.SYMBOLS = "symbols", E.FLAGS = "flags", E.PREMIUM_UPSELL = "premium emoji", (_ = r || (r = {})).NONE = "", _.TOP_GUILD_EMOJI = "top_server", _.NEWLY_ADDED_EMOJI = "newly_added", (c = a || (a = {}))[c.EMOJI = 0] = "EMOJI", c[c.NSFW = 1] = "NSFW";
            let T = -1;
            (d = o || (o = {}))[d.MEDIUM = 40] = "MEDIUM", d[d.LARGE = 48] = "LARGE";
            let A = "emoji-picker-tab-panel",
                O = "emoji-picker-tab",
                N = "soundboard-picker-tab-panel",
                R = "soundboard-picker-tab",
                p = "reaction-picker-tab-panel",
                S = "reaction-picker-tab",
                C = "super-reaction-picker-tab";
            (u || (u = {})).TOOLTIP = "tooltip";
            let m = "gif-picker-tab-panel",
                L = "gif-picker-tab",
                f = {
                    reaction: 32,
                    default: 44,
                    jumbo: 96
                },
                h = 9
        },
        75015: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UploadTypes: function() {
                    return r
                },
                EDITING_CONTAINER_WIDTH: function() {
                    return u
                },
                USER_BANNER_MAX_WIDTH: function() {
                    return s
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
                    return O
                },
                GUILD_BANNER_ASPECT_RATIO: function() {
                    return N
                },
                SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
                    return R
                },
                HOME_HEADER_ASPECT_RATIO: function() {
                    return p
                },
                MAX_BANNER_OVERLAY_HEIGHT: function() {
                    return S
                },
                MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
                    return C
                },
                MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
                    return m
                },
                MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
                    return L
                },
                VIDEO_BACKGROUND_ASPECT_RATIO: function() {
                    return f
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
            let u = 568,
                s = 2400,
                E = 848,
                _ = 2400,
                c = 1350,
                d = 2400,
                I = 960,
                T = 2400,
                A = 600,
                O = 17 / 6,
                N = 16 / 9,
                R = 2.5,
                p = 4,
                S = u / O,
                C = u / N,
                m = u / R,
                L = u / p,
                f = o.BACKGROUND_REPLACEMENT_SIZE.width / o.BACKGROUND_REPLACEMENT_SIZE.height,
                h = u / f;
            (l = a || (a = {}))[l.CROP_GIF_START = 0] = "CROP_GIF_START", l[l.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", l[l.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
        },
        57015: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("917351"),
                a = n("77078"),
                o = n("812204"),
                u = n("685665"),
                s = n("652914"),
                E = n("95689"),
                _ = n("599110"),
                c = n("8731"),
                d = n("817295"),
                I = n("75015"),
                T = n("49111"),
                A = n("917219"),
                O = n("782340"),
                N = n("879777"),
                R = e => {
                    let {
                        file: t,
                        imgURI: n,
                        transitionState: R,
                        allowSkip: p = !1,
                        onCrop: S,
                        onClose: C,
                        uploadType: m = I.UploadTypes.AVATAR,
                        showUpsellHeader: L = !1,
                        analyticsPage: f
                    } = e, [h, M] = l.useState({
                        width: 0,
                        height: 0
                    }), [U, P] = l.useState({
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    }), [g, D] = l.useState(!1), [G, v] = l.useState(1), [b, w] = l.useState({
                        x: 0,
                        y: 0
                    }), [y, H] = l.useState(null), [B, V] = l.useState(!1), {
                        AnalyticsLocationProvider: F
                    } = (0, u.default)(o.default.IMAGE_CROPPING_MODAL), x = l.useRef({
                        x: 0,
                        y: 0
                    }), k = l.useRef(null), W = l.useRef(null), K = "image/gif" === t.type;
                    l.useEffect(() => {
                        (0, d.default)()
                    }, []), l.useEffect(() => {
                        K && L && _.default.track(T.AnalyticEvents.OPEN_MODAL, {
                            type: T.AnalyticsSections.CROP_GIF_MODAL,
                            location: {
                                page: f
                            }
                        })
                    }, [L, f, K]);
                    let j = () => {
                            switch (m) {
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
                        Y = l.useCallback((e, t, n) => {
                            x.current = (0, c.getBoundedCoordinates)(e, t, n), null != k.current && (k.current.style.transform = "translate3d(".concat(x.current.x, "px, ").concat(x.current.y, "px, 0)"))
                        }, [k]),
                        X = l.useCallback(() => {
                            if (null == k.current || G > 1) return;
                            let {
                                width: e,
                                height: t
                            } = k.current.getBoundingClientRect(), {
                                width: n,
                                height: i
                            } = (0, c.adjustImageDimensionsForAspectRatio)(m, e, t), l = (0, c.calculateOverlaySize)(m, n, i, t);
                            H({
                                width: n,
                                height: i
                            }), M(l), P((0, c.calculateDragBoundaries)(n, i, l))
                        }, [m, G]),
                        Z = l.useCallback(e => {
                            let {
                                x: t,
                                y: n
                            } = x.current;
                            if (!g || e.clientX === t && e.clientY === n) return;
                            let i = e.clientX - b.x,
                                l = e.clientY - b.y;
                            Y(i, l, U)
                        }, [U, g, b, Y]),
                        z = () => {
                            D(!1)
                        },
                        J = () => {
                            let e = j();
                            return e.width !== e.height
                        },
                        q = async () => {
                            let e;
                            if (null == k.current) return;
                            V(!0);
                            let n = k.current,
                                i = j();
                            if (K) try {
                                let {
                                    result: l,
                                    cancelFn: r
                                } = await (0, c.cropGIF)(t, n, h, x.current, i);
                                W.current = r, e = await l, W.current = null
                            } catch (e) {
                                var l;
                                throw null === (l = W.current) || void 0 === l || l.call(W), W.current = null, Error("Error cropping GIF")
                            } else e = (0, c.cropStaticImage)(n, h, x.current, i);
                            await S(e, t), V(!1), C()
                        };
                    return l.useEffect(() => (window.addEventListener("mouseup", z), window.addEventListener("resize", X), () => {
                        window.removeEventListener("mouseup", z), window.removeEventListener("resize", X)
                    }), [X]), l.useEffect(() => () => {
                        null != W.current && W.current()
                    }, []), l.useEffect(() => {
                        if (g) return window.addEventListener("mousemove", Z), () => window.removeEventListener("mousemove", Z)
                    }, [Z, g]), (0, i.jsx)(F, {
                        children: (0, i.jsxs)(a.ModalRoot, {
                            onAnimationEnd: X,
                            transitionState: R,
                            size: a.ModalSize.MEDIUM,
                            children: [L && (0, i.jsx)(s.default, {
                                type: m,
                                analyticsPage: f,
                                analyticsSection: T.AnalyticsSections.CROP_GIF_MODAL,
                                isGIF: K,
                                banner: n
                            }), (0, i.jsx)(a.ModalHeader, {
                                separator: !1,
                                children: (0, i.jsx)(a.FormTitle, {
                                    className: N.titleCase,
                                    tag: a.FormTitleTags.H1,
                                    children: O.default.Messages.AVATAR_UPLOAD_EDIT_MEDIA
                                })
                            }), (0, i.jsxs)(a.ModalContent, {
                                className: N.modalContent,
                                children: [(0, i.jsxs)("div", {
                                    className: N.editingContainer,
                                    children: [(0, i.jsx)("img", {
                                        style: {
                                            opacity: null == y ? 0 : 1,
                                            transform: "translate3d(".concat(x.current.x, "px, ").concat(x.current.y, "px, 0px)"),
                                            ...(() => {
                                                if (null == y) return {};
                                                let e = y.width / y.height,
                                                    t = J() && e > I.BANNER_ASPECT_RATIO ? h.height / y.height : 1;
                                                return {
                                                    width: y.width * G * t,
                                                    minWidth: y.width * G * t,
                                                    height: y.height * G * t
                                                }
                                            })()
                                        },
                                        className: B ? N.imageDisabled : N.imageEnabled,
                                        src: n,
                                        alt: "avatar",
                                        ref: k,
                                        onMouseDown: e => {
                                            let t = e.clientX - x.current.x,
                                                n = e.clientY - x.current.y;
                                            w({
                                                x: t,
                                                y: n
                                            }), D(!0)
                                        },
                                        draggable: !1
                                    }), (0, i.jsx)("div", {
                                        className: m === I.UploadTypes.AVATAR ? N.overlayAvatar : N.overlayBanner,
                                        style: {
                                            opacity: null == y ? 0 : 1,
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
                                            if (null == y) return;
                                            let {
                                                width: t,
                                                height: n
                                            } = y, i = (0, c.calculateDragBoundaries)(t * e, n * e, h), {
                                                x: l,
                                                y: a
                                            } = x.current;
                                            (!(0, r.inRange)(l, i.right, i.left) || !(0, r.inRange)(a, i.top, i.bottom)) && Y(l, a, i), v(e), P(i)
                                        },
                                        disabled: B,
                                        equidistant: !0,
                                        hideBubble: !0,
                                        "aria-label": O.default.Messages.FORM_LABEL_AVATAR_SIZE
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
                                        p && (S(n, t), C())
                                    },
                                    children: O.default.Messages.AVATAR_UPLOAD_SKIP
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
                                        children: O.default.Messages.AVATAR_UPLOAD_CANCEL
                                    }), (0, i.jsx)(a.Button, {
                                        submitting: B,
                                        size: a.ButtonSizes.SMALL,
                                        onClick: q,
                                        children: O.default.Messages.AVATAR_UPLOAD_APPLY
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
                    return u
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
                    u = (e.height / 2 - a - n.y) * l,
                    s = t.width * l,
                    E = t.height * l,
                    _ = Math.min(s, i.width),
                    c = Math.min(E, i.height);
                return {
                    x: o,
                    y: u,
                    scaledCropWidth: s,
                    scaledCropHeight: E,
                    canvasWidth: _,
                    canvasHeight: c
                }
            }
            async function a(e, t, i, a, o) {
                let {
                    x: u,
                    y: s,
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
                    x: 0 | u,
                    y: 0 | s,
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
                    scaledCropHeight: u,
                    canvasWidth: s,
                    canvasHeight: E
                } = r(e, t, n, i), _ = document.createElement("canvas");
                _.width = s, _.height = E;
                let c = _.getContext("2d");
                return null != c && c.drawImage(e, l, a, o, u, 0, 0, _.width, _.height), _.toDataURL("image/png")
            }

            function u(e, t, n) {
                return {
                    x: (0, i.clamp)(e, n.left, n.right),
                    y: (0, i.clamp)(t, n.bottom, n.top)
                }
            }

            function s(e, t, n, i) {
                let r = n,
                    a = i;
                n > l.EDITING_CONTAINER_WIDTH && (r = l.EDITING_CONTAINER_WIDTH, a = i * (l.EDITING_CONTAINER_WIDTH / n));
                if (n / i < e) return {
                    width: r,
                    height: a
                };
                let o = t / a,
                    u = r * o;
                return {
                    width: u,
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
                        return s(l.BANNER_ASPECT_RATIO, l.MAX_BANNER_OVERLAY_HEIGHT, t, n);
                    case l.UploadTypes.GUILD_BANNER:
                        return s(l.GUILD_BANNER_ASPECT_RATIO, l.MAX_GUILD_BANNER_OVERLAY_HEIGHT, t, n);
                    case l.UploadTypes.VIDEO_BACKGROUND:
                        return s(l.VIDEO_BACKGROUND_ASPECT_RATIO, l.MAX_VIDEO_OVERLAY_HEIGHT, t, n);
                    case l.UploadTypes.SCHEDULED_EVENT_IMAGE:
                        return s(l.SCHEDULED_EVENT_IMAGE_ASPECT_RATIO, l.MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT, t, n);
                    case l.UploadTypes.HOME_HEADER:
                        return s(l.HOME_HEADER_ASPECT_RATIO, l.MAX_HOME_HEADER_OVERLAY_HEIGHT, t, n)
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
                        let u = Math.min(t, l.EDITING_CONTAINER_WIDTH);
                        return {
                            width: u, height: u * (9 / 16)
                        };
                    case l.UploadTypes.SCHEDULED_EVENT_IMAGE:
                        let s = Math.min(t, l.EDITING_CONTAINER_WIDTH);
                        return {
                            width: s, height: .4 * s
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
            let u = (0, l.createExperiment)({
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
                    }, l = (0, i.default)([r.default], () => r.default.getCurrentUser()), a = u.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: o,
                        showTryPacksModalAndV2Copy: E,
                        collectEnabled: _
                    } = s({
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
                u = n("855133"),
                s = n("599110"),
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
                    analyticsLocations: O,
                    analyticsObject: N,
                    analyticsLocation: R,
                    analyticsSourceLocation: p,
                    isGift: S = !1,
                    giftMessage: C,
                    subscriptionTier: m,
                    trialId: L,
                    postSuccessGuild: f,
                    openInvoiceId: h,
                    applicationId: M,
                    referralTrialOfferId: U,
                    giftRecipient: P,
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
                            subscriptionTier: m,
                            skuId: m,
                            isGift: S,
                            giftMessage: C,
                            giftRecipient: P,
                            initialPlanId: t,
                            followupSKUInfo: d,
                            onClose: e => {
                                l(), null == I || I(e), e && (null == A || A())
                            },
                            onComplete: () => {
                                D = !0, null == T || T(), !S && ((0, u.setIsPersistentHelperHidden)(!0), (0, u.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: A,
                            analyticsLocations: O,
                            analyticsObject: N,
                            analyticsLocation: R,
                            analyticsSourceLocation: p,
                            trialId: L,
                            postSuccessGuild: f,
                            planGroup: c.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: h,
                            applicationId: M,
                            referralTrialOfferId: U,
                            returnRef: g
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !D && s.default.track(_.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: G,
                            payment_type: _.PurchaseTypeToAnalyticsPaymentType[_.PurchaseTypes.SUBSCRIPTION],
                            location: null != R ? R : N,
                            source: p,
                            subscription_type: _.SubscriptionTypes.PREMIUM,
                            is_gift: S,
                            eligible_for_trial: null != L,
                            application_id: M,
                            location_stack: O
                        }), (0, a.clearError)(), (0, o.clearPurchaseTokenAuthState)(), null == I || I(D), D && (!S && E.ComponentDispatch.dispatch(_.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == A || A())
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
                    return u
                },
                setNavigatedFromHelper: function() {
                    return s
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
        635956: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                r = n.n(l),
                a = n("446674"),
                o = n("77078"),
                u = n("79112"),
                s = n("685665"),
                E = n("788506"),
                _ = n("649844"),
                c = n("393414"),
                d = n("797647"),
                I = n("697218"),
                T = n("521012"),
                A = n("471671"),
                O = n("181114"),
                N = n("978679"),
                R = n("216422"),
                p = n("719923"),
                S = n("646718"),
                C = n("49111"),
                m = n("782340"),
                L = n("683437"),
                f = function(e) {
                    let {
                        isGift: t,
                        subscriptionTier: l,
                        onClick: f,
                        size: h,
                        className: M,
                        trialId: U,
                        isTrialCTA: P,
                        buttonText: g,
                        buttonTextClassName: D,
                        postSuccessGuild: G,
                        onSubscribeModalClose: v,
                        premiumModalAnalyticsLocation: b,
                        showIcon: w = !0,
                        disableShine: y,
                        applicationId: H,
                        giftMessage: B,
                        overrideDisabledButtonText: V,
                        shinyButtonClassName: F,
                        ...x
                    } = e, k = (0, a.useStateFromStores)([I.default], () => I.default.getCurrentUser()), W = (0, a.useStateFromStores)([A.default], () => A.default.isFocused()), K = (0, a.useStateFromStores)([T.default], () => T.default.getPremiumTypeSubscription()), {
                        analyticsLocations: j
                    } = (0, s.default)(), Y = e => {
                        if (e.preventDefault(), null == k) {
                            (0, c.transitionTo)(C.Routes.LOGIN);
                            return
                        }
                        if (null == f || f(e), (null == K ? void 0 : K.status) === C.SubscriptionStatusTypes.ACCOUNT_HOLD) {
                            (0, E.trackPremiumSettingsPaneOpened)(), u.default.open(C.UserSettingsSections.PREMIUM), null == v || v(!1);
                            return
                        }! function(e) {
                            let {
                                isClaimed: t,
                                isVerified: l,
                                isGift: r,
                                subscriptionTier: a,
                                trialId: u,
                                postSuccessGuild: s,
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
                            null != u ? A = C.AnalyticsObjectTypes.TRIAL : r && (A = C.AnalyticsObjectTypes.GIFT), (0, _.default)({
                                isGift: r,
                                initialPlanId: null,
                                subscriptionTier: a,
                                analyticsLocations: c,
                                analyticsObject: {
                                    object: C.AnalyticsObjects.BUTTON_CTA,
                                    objectType: A,
                                    ...d
                                },
                                trialId: u,
                                postSuccessGuild: s,
                                onClose: E,
                                applicationId: I,
                                giftMessage: T
                            })
                        }({
                            isClaimed: k.isClaimed(),
                            isVerified: k.verified,
                            isGift: t,
                            subscriptionTier: l,
                            trialId: U,
                            postSuccessGuild: G,
                            onSubscribeModalClose: v,
                            analyticsLocations: j,
                            premiumModalAnalyticsLocation: b,
                            applicationId: H,
                            giftMessage: B
                        })
                    };
                    if (P) return (0, i.jsxs)(o.Button, {
                        size: h,
                        className: M,
                        innerClassName: L.premiumSubscribeButton,
                        look: o.Button.Looks.INVERTED,
                        onClick: Y,
                        ...x,
                        children: [w && (0, i.jsx)(R.default, {
                            className: L.premiumIcon
                        }), (0, i.jsx)("span", {
                            className: r(L.buttonText, D),
                            children: null != g ? g : m.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                        })]
                    });
                    if (t) return (0, i.jsxs)(o.Button, {
                        size: h,
                        className: M,
                        innerClassName: L.giftButton,
                        color: o.Button.Colors.PRIMARY,
                        onClick: Y,
                        ...x,
                        children: [(0, i.jsx)(N.default, {
                            className: L.giftIcon
                        }), (0, i.jsx)("span", {
                            className: r(L.buttonText, D),
                            children: null != g ? g : m.default.Messages.PREMIUM_GIFTING_BUTTON
                        })]
                    });
                    let X = m.default.Messages.APPLICATION_STORE_GET_PREMIUM,
                        Z = null != K ? (0, p.getPremiumPlanItem)(K) : null,
                        z = null != Z ? p.default.getPremiumType(Z.planId) : null == k ? void 0 : k.premiumType,
                        J = l === S.PremiumSubscriptionSKUs.TIER_2 && null != z && [S.PremiumTypes.TIER_0, S.PremiumTypes.TIER_1].includes(z);
                    J && (X = m.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
                    let q = null != K && K.status !== C.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, d.isNoneSubscription)(K.planId) && !J,
                        Q = q ? null != V ? V : function(e) {
                            let {
                                ctaSubscriptionSkuId: t,
                                currentPremiumType: n
                            } = e, i = null, l = null;
                            if (null != t && t !== S.PremiumSubscriptionSKUs.LEGACY && t !== S.PremiumSubscriptionSKUs.TIER_0 && t !== S.PremiumSubscriptionSKUs.TIER_1 && t !== S.PremiumSubscriptionSKUs.TIER_2) return {
                                disabledButtonText: i,
                                disabledButtonTooltipText: l
                            };
                            let r = null != t ? S.PremiumSubscriptionSKUToPremiumType[t] : null,
                                a = null != r ? S.PremiumTypeOrder[r] : null,
                                o = null != n ? S.PremiumTypeOrder[n] : null;
                            return null != o && null != a && a < o ? (i = m.default.Messages.APPLICATION_STORE_GET_PREMIUM, l = m.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != r && null != n && r === n ? (i = m.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, l = m.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == r && null != n && n === S.PremiumTypes.TIER_2 && (l = m.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
                                disabledButtonText: i,
                                disabledButtonTooltipText: l
                            }
                        }({
                            ctaSubscriptionSkuId: l,
                            currentPremiumType: z
                        }) : null;

                    function $(e) {
                        var t, n;
                        return (0, i.jsxs)(O.default, {
                            disabled: q,
                            onClick: Y,
                            innerClassName: L.premiumSubscribeButton,
                            color: l === S.PremiumSubscriptionSKUs.TIER_1 ? o.Button.Colors.PRIMARY : o.Button.Colors.GREEN,
                            size: h,
                            className: F,
                            wrapperClassName: M,
                            pauseAnimation: !W || y,
                            ...x,
                            ...e,
                            children: [w && (0, i.jsx)(R.default, {
                                className: L.premiumIcon
                            }), (0, i.jsx)("span", {
                                className: r(L.buttonText, D),
                                children: null !== (n = null !== (t = null == Q ? void 0 : Q.disabledButtonText) && void 0 !== t ? t : g) && void 0 !== n ? n : X
                            })]
                        })
                    }
                    return (null == Q ? void 0 : Q.disabledButtonTooltipText) != null ? (0, i.jsx)(o.Tooltip, {
                        text: Q.disabledButtonTooltipText,
                        children: $
                    }) : $()
                }
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return a
                },
                getDevicePushProvider: function() {
                    return o
                }
            });
            var i, l, r = n("773336");
            let a = null;

            function o() {
                return (0, r.isAndroid)(), null
            }(i = l || (l = {})).REMINDER = "reminder", i.TOP_MESSAGE_PUSH = "top_messages_push", i.TRENDING_CONTENT_PUSH = "trending_content_push"
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
                    return o
                },
                DEFAULT_VIDEO_BACKGROUND_SORT: function() {
                    return u
                },
                BLUR_BACKGROUND_OPTION: function() {
                    return s
                },
                BACKGROUND_REPLACEMENT_SIZE: function() {
                    return E
                },
                MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                    return _
                }
            }), (r = i || (i = {}))[r.BACKGROUND = 0] = "BACKGROUND", (a = l || (l = {}))[a.OPTION_1 = 0] = "OPTION_1", a[a.OPTION_2 = 1] = "OPTION_2", a[a.OPTION_3 = 2] = "OPTION_3", a[a.OPTION_4 = 3] = "OPTION_4", a[a.OPTION_7 = 7] = "OPTION_7", a[a.OPTION_8 = 8] = "OPTION_8", a[a.OPTION_9 = 9] = "OPTION_9", a[a.OPTION_10 = 10] = "OPTION_10";
            let o = [l.OPTION_7, l.OPTION_8, l.OPTION_9, l.OPTION_10],
                u = [l.OPTION_7, l.OPTION_8, l.OPTION_9, l.OPTION_10, l.OPTION_1, l.OPTION_2, l.OPTION_3, l.OPTION_4].reduce((e, t, n) => ({
                    ...e,
                    [t]: n
                }), {}),
                s = "blur",
                E = {
                    width: 1280,
                    height: 720
                },
                _ = 10485760
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
        778588: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("446674"),
                l = n("913144");
            let r = [];

            function a() {
                r = []
            }
            class o extends i.default.Store {
                hasLayers() {
                    return r.length > 0
                }
                getLayers() {
                    return r
                }
            }
            o.displayName = "LayerStore";
            var u = new o(l.default, {
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
        26092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            });
            var i = n("917351"),
                l = n.n(i),
                r = n("446674"),
                a = n("913144"),
                o = n("697218"),
                u = n("49111");
            let s = u.FormStates.CLOSED,
                E = null,
                _ = null,
                c = {},
                d = {},
                I = {},
                T = null,
                A = null,
                O = !1,
                N = !1,
                R = null,
                p = null,
                S = null,
                C = [],
                m = null,
                L = null;

            function f(e) {
                var t, n, i, l, r, a;
                let E = o.default.getCurrentUser();
                if (null == E) return h();
                _ = null !== (t = e.section) && void 0 !== t ? t : _, m = null !== (n = e.section) && void 0 !== n ? n : _, null != e.subsection && null != _ && (c[_] = e.subsection), null != e.scrollPosition && null != _ && (d[_] = e.scrollPosition), N = !!e.openWithoutBackstack, s = u.FormStates.OPEN, I = {}, A = {
                    ...T = {
                        [u.UserSettingsSections.ACCOUNT]: {
                            userId: E.id,
                            username: E.username,
                            discriminator: E.discriminator,
                            email: E.email,
                            avatar: E.avatar,
                            password: "",
                            newPassword: null,
                            claimed: E.isClaimed()
                        }
                    }
                }, p = null !== (i = e.onClose) && void 0 !== i ? i : null, S = null !== (l = e.analyticsLocation) && void 0 !== l ? l : null, C = null !== (r = e.analyticsLocations) && void 0 !== r ? r : [], L = null !== (a = e.impressionSource) && void 0 !== a ? a : null
            }

            function h() {
                s = u.FormStates.CLOSED, O = !1, T = null, m = null, A = null, E = null, _ = null, c = {}, d = {}, p = null, S = null, C = [], L = null
            }

            function M() {
                s = u.FormStates.OPEN, I = {}
            }
            class U extends r.default.Store {
                initialize() {
                    this.waitFor(o.default)
                }
                hasChanges() {
                    return null != A && null != T && (!!this.isOpen() || R === u.DrawerTabTypes.USER_SETTINGS) && !l.isEqual(A, T)
                }
                isOpen() {
                    return O
                }
                getPreviousSection() {
                    return E
                }
                getSection() {
                    return _
                }
                getSubsection() {
                    return null != _ ? c[_] : null
                }
                getScrollPosition() {
                    return null != _ ? d[_] : null
                }
                shouldOpenWithoutBackstack() {
                    return N
                }
                getProps() {
                    return {
                        submitting: s === u.FormStates.SUBMITTING,
                        section: _,
                        subsection: null != _ ? c[_] : null,
                        scrollPosition: null != _ ? d[_] : null,
                        settings: A,
                        errors: I,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: N,
                        analyticsLocation: S,
                        analyticsLocations: C,
                        initialSection: m,
                        impressionSource: L
                    }
                }
                get onClose() {
                    return p
                }
            }
            U.displayName = "UserSettingsModalStore";
            var P = new U(a.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    O = !0, f(e)
                },
                USER_SETTINGS_MODAL_INIT: f,
                USER_SETTINGS_MODAL_CLOSE: h,
                LOGOUT: h,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    s = u.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (s !== u.FormStates.SUBMITTING) return !1;
                    s = u.FormStates.OPEN, _ = u.UserSettingsSections.ACCOUNT, I = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    var t;
                    E = _, _ = e.section, S = null, C = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (c[_] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete c[t] : null != _ && delete c[_]
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
                    null == A && (A = {});
                    let n = A[u.UserSettingsSections.ACCOUNT];
                    A[u.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: M,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = o.default.getCurrentUser();
                    M(), null != e && (A = {
                        ...T = {
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
                    return R = e.tab, null == _ && R === u.DrawerTabTypes.USER_SETTINGS && f({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
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
            class E extends r.default.Store {
                isFocused() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.getMainWindowId)();
                    return s(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return u.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.getMainWindowId)();
                    return s(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.getMainWindowId)();
                    return s(e).windowSize
                }
            }
            E.displayName = "WindowStore";
            let _ = new E(a.default, {
                WINDOW_INIT: function(e) {
                    l(!u.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: i,
                        focused: r
                    } = e;
                    return u.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: i,
                        focused: r
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
            var c = _
        },
        181114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Shine: function() {
                    return A
                },
                default: function() {
                    return N
                }
            });
            var i, l, r = n("37983"),
                a = n("884691"),
                o = n("414456"),
                u = n.n(o),
                s = n("458960"),
                E = n("77078"),
                _ = n("252744"),
                c = n("145131"),
                d = n("396792");
            (i = l || (l = {})).DEFAULT = "default", i.SMALL = "small";
            let I = {
                    [l.DEFAULT]: d.shineDefault,
                    [l.SMALL]: d.shineSmall
                },
                T = {
                    [l.DEFAULT]: d.shineInnerDefault,
                    [l.SMALL]: d.shineInnerSmall
                };
            class A extends a.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...i
                    } = this.props;
                    return (0, r.jsx)(s.default.div, {
                        ...i,
                        className: u(d.shineContainer, e, {
                            [d.shinePaused]: n
                        }),
                        children: (0, r.jsx)(c.default, {
                            align: c.default.Align.CENTER,
                            justify: c.default.Justify.CENTER,
                            className: I[t],
                            children: (0, r.jsx)("div", {
                                className: T[t]
                            })
                        })
                    })
                }
            }
            A.defaultProps = {
                shineSize: l.DEFAULT
            };
            let O = e => {
                let {
                    children: t,
                    className: n,
                    disabled: i,
                    submitting: o,
                    pauseAnimation: s,
                    shineSize: c = l.DEFAULT,
                    shinePaused: I,
                    buttonShineClassName: T,
                    onlyShineOnHover: O,
                    ...N
                } = e, R = a.createRef(), p = (0, _.default)(R), S = !i && !o && !0 !== s && (!O || p);
                return (0, r.jsxs)(E.Button, {
                    buttonRef: R,
                    ...N,
                    className: u(d.shinyButton, n),
                    disabled: i,
                    submitting: o,
                    children: [t, S ? (0, r.jsx)(A, {
                        shinePaused: I,
                        className: u(d.buttonShine, O ? d.onlyShineOnHover : void 0, T),
                        shineSize: c
                    }) : null]
                })
            };
            O.ShineSizes = l;
            var N = O
        },
        978679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("998460"),
                a = n("75196"),
                o = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, a.default)(o),
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: l,
                            className: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, r.GiftIcon)
        },
        95689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("578478"),
                a = n("75196"),
                o = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: r,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: l
                        })
                    })
                }, r.ImageIcon)
        },
        216422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("202909"),
                a = n("75196"),
                o = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        viewBox: r = "0 0 24 24",
                        foreground: o,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(u),
                        width: t,
                        height: n,
                        viewBox: r,
                        children: (0, i.jsx)("path", {
                            className: o,
                            fill: l,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    })
                }, r.NitroWheelIcon)
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
                    return R
                },
                dataUrlToFile: function() {
                    return p
                },
                isPNGAnimated: function() {
                    return S
                }
            });
            var i = n("627445"),
                l = n.n(i),
                r = n("917351"),
                a = n.n(r),
                o = n("48648"),
                u = n.n(o);

            function s(e) {
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
                    s = function(e, t, n) {
                        let i = [];
                        for (let l = 0, r, a, o, u, s; l < t; l += n) a = e[(r = 4 * l) + 0], o = e[r + 1], u = e[r + 2], (void 0 === (s = e[r + 3]) || s >= 125) && !(a > 250 && o > 250 && u > 250) && i.push([a, o, u]);
                        return i
                    }(o, r * a, n),
                    E = u(s, t);
                return "boolean" == typeof E ? I : E.palette()
            }
            let A = e => O(e),
                O = a.memoize(e => new Promise((t, n) => {
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

            function R(e) {
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
            async function S(e) {
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

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: r,
                    modalProps: a = {},
                    hooks: {
                        onEarlyClose: u
                    } = {}
                } = e;
                if (null == i) {
                    null == u || u();
                    return
                }
                let E = i(I, _, a);

                function _() {
                    null == u || u()
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
                    }), s({
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

            function s(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: i,
                    code: l,
                    mfaCodeHandler: r = u,
                    isModalOpen: a = !1,
                    ...o
                } = e;
                return t(null != l ? {
                    code: l
                } : {}).then(n, e => {
                    var l, u;
                    if (l = e, u = a, l.body && 60008 === l.body.code || u && 429 === l.status) return r({
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
                    ((0, a.resolveThunk)(l) ? u : s)({
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
                    return u
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

            function u(e, t, n, i) {
                return (0, l.updateModal)(e, a(t, n, i))
            }
        }
    }
]);
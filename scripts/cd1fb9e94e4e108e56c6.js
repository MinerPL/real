(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["11519"], {
        668973: function(e, t, n) {
            "use strict";
            e.exports = n.p + "18517b33da6ed36b855b.svg"
        },
        124036: function(e, t, n) {
            "use strict";
            e.exports = n.p + "2304725db3c96705e901.svg"
        },
        721569: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b21a7b48a6e973958489.svg"
        },
        644286: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5ff8ffaa3831478d2a28.svg"
        },
        597346: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4ba6811c2bcb626963c6.svg"
        },
        380499: function(e, t, n) {
            "use strict";
            e.exports = n.p + "20c942338703af7dccd1.svg"
        },
        50617: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d18655651bd838408129.svg"
        },
        972094: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5f5e1a58ecf11d0d8d15.svg"
        },
        92729: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f5710b460ce933c9abe8.svg"
        },
        335e3: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f5c7b6adf73fe335fa05.svg"
        },
        302872: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4fd94b2e62b94b0454d3.svg"
        },
        425914: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5b74fc90eac76055a5ad.svg"
        },
        272477: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d994d2093d7d1924be78.svg"
        },
        164059: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e9b67e80d0033605e8f4.svg"
        },
        6916: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a13348dd889e2a36b788.gif"
        },
        12412: function(e, t, n) {
            "use strict";
            e.exports = n.p + "91d3c1acae2f11c57634.png"
        },
        54400: function(e, t, n) {
            "use strict";
            e.exports = n.p + "04c2807fcf052140a12f.gif"
        },
        122574: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7548ee8ba4e2f2600b69.png"
        },
        463095: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f597cc1d129f34c8f135.gif"
        },
        733105: function(e, t, n) {
            "use strict";
            e.exports = n.p + "35d07cb23db04126d51b.png"
        },
        749003: function(e, t, n) {
            "use strict";
            e.exports = n.p + "dbfa9f354f49f4a6a61e.gif"
        },
        918927: function(e, t, n) {
            "use strict";
            e.exports = n.p + "9b5c79ffc65b32de7d01.png"
        },
        251472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchUserEntitlementsForApplication: function() {
                    return s
                },
                fetchUserEntitlements: function() {
                    return o
                },
                fetchGiftableEntitlements: function() {
                    return u
                }
            });
            var i = n("872717"),
                l = n("913144"),
                r = n("271560"),
                a = n("49111");

            function s(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return l.default.wait(() => {
                    l.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_START",
                        applicationId: e
                    })
                }), i.default.get({
                    url: a.Endpoints.ENTITLEMENTS_FOR_APPLICATION(e),
                    oldFormErrors: !0,
                    query: {
                        exclude_consumed: t
                    }
                }).then(t => (l.default.dispatch({
                    type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
                    applicationId: e,
                    entitlements: t.body
                }), t.body)).catch(() => {
                    l.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_FAIL",
                        applicationId: e
                    })
                })
            }
            async function o(e) {
                let {
                    withSku: t = !1,
                    withApplication: n = !1,
                    entitlementType: r
                } = e;
                l.default.dispatch({
                    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
                });
                try {
                    let e = await i.default.get({
                        url: a.Endpoints.ENTITLEMENTS_FOR_USER,
                        query: {
                            with_sku: t,
                            with_application: n,
                            entitlement_type: r
                        }
                    });
                    l.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
                        entitlements: e.body
                    })
                } catch (e) {
                    l.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL"
                    })
                }
            }
            async function u() {
                l.default.dispatch({
                    type: "ENTITLEMENTS_GIFTABLE_FETCH"
                });
                try {
                    let e = await (0, r.httpGetWithCountryCodeQuery)({
                        url: a.Endpoints.ENTITLEMENTS_GIFTABLE
                    });
                    l.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS",
                        entitlements: e.body
                    })
                } catch (e) {
                    l.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL"
                    })
                }
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
                    return _
                }
            });
            var i = n("872717"),
                l = n("95410"),
                r = n("913144"),
                a = n("211895"),
                s = n("26092"),
                o = n("599110"),
                u = n("315102"),
                d = n("730622"),
                c = n("49111"),
                E = n("191349"),
                f = n("782340"),
                _ = {
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
                            password: _,
                            avatar: S,
                            newPassword: p,
                            discriminator: T
                        } = e, {
                            close: h
                        } = t;
                        return (0, d.default)(e => {
                            let t = {
                                    username: n,
                                    email: a,
                                    email_token: s,
                                    password: _,
                                    avatar: S,
                                    new_password: p,
                                    ...e,
                                    discriminator: null != T && "" !== T ? T : void 0
                                },
                                r = l.default.get(c.DEVICE_TOKEN),
                                o = (0, E.getDevicePushProvider)();
                            null != o && null != r && (t.push_provider = o, t.push_token = r);
                            let u = l.default.get(c.DEVICE_VOIP_TOKEN);
                            return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != u && (t.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, t.push_voip_token = u), i.default.patch({
                                url: c.Endpoints.ME,
                                oldFormErrors: !0,
                                body: t
                            })
                        }, {
                            checkEnabled: !1,
                            modalProps: {
                                title: f.default.Messages.TWO_FA_CHANGE_ACCOUNT
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
                            return o.default.track(c.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, u.isAnimatedIconHash)(t.avatar)
                            }), delete t.token, r.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: t.id
                            }), r.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: t
                            }), null != p && r.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: p
                            }), null != _ && null != p && r.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id
                            }), h ? this.close() : this.submitComplete(), e
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
                    return c
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
                        isLoading: c,
                        maxLength: E,
                        transitionState: f,
                        helpMessage: _,
                        retryPrompt: S,
                        retrySuccessMessage: p
                    } = this.props, {
                        code: T,
                        errorMessage: h,
                        retrySuccess: I
                    } = this.state, g = l.Children.count(r) > 0 ? (0, i.jsx)(s.Card, {
                        type: s.Card.Types.WARNING,
                        className: u.card,
                        children: (0, i.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: r
                        })
                    }) : null, C = null != S ? (0, i.jsxs)(s.Text, {
                        className: a(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, i.jsx)("br", {}), (0, i.jsx)(s.Clickable, {
                            className: a(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, i.jsx)(s.Anchor, {
                                children: S
                            })
                        })]
                    }) : null, v = I ? (0, i.jsx)(s.Card, {
                        type: s.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, i.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: p
                        })
                    }) : null;
                    return (0, i.jsx)(s.ModalRoot, {
                        transitionState: f,
                        children: (0, i.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, i.jsx)(s.ModalHeader, {
                                separator: !1,
                                children: (0, i.jsx)(s.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, i.jsxs)(s.ModalContent, {
                                children: [null != _ ? (0, i.jsx)(s.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u.spacing,
                                    children: _
                                }) : null, g, v, (0, i.jsxs)(s.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, i.jsx)(s.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != E ? E : 10,
                                        value: T,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, i.jsx)(s.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != d ? d : h
                                    }) : null, C]
                                })]
                            }), (0, i.jsxs)(s.ModalFooter, {
                                children: [(0, i.jsx)(s.Button, {
                                    type: "submit",
                                    disabled: c || 0 === T.length,
                                    children: null != n ? n : o.default.Messages.CONFIRM
                                }), (0, i.jsx)(s.Button, {
                                    onClick: this.handleCancel,
                                    disabled: c,
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
            var c = d
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
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87c-.625 0-1.178-.162-1.66-.485-.482-.324-.855-.777-1.121-1.359C4.133 13.437 4 12.762 4 12c0-.755.14-1.423.42-2.005.288-.583.701-1.039 1.24-1.37.546-.33 1.197-.495 1.951-.495.64 0 1.211.136 1.714.41.51.272.895.657 1.154 1.153l-1.218.873c-.367-.676-.913-1.013-1.639-1.013-.661 0-1.168.215-1.52.646-.352.425-.528 1.025-.528 1.8 0 .784.176 1.388.528 1.812.352.424.859.636 1.52.636.295 0 .564-.054.809-.162.251-.115.445-.27.582-.463v-.927H7.299v-1.402h3.245v4.226H9.272l-.205-.712c-.424.575-1.053.863-1.887.863Zm6.34-.151h-1.574V8.28h1.574v7.438Zm1.51 0h1.574v-2.824h2.76v-1.423h-2.76V9.704H20V8.28h-4.97v7.438Z",
                        clipRule: "evenodd",
                        className: s
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
                        d: "M4 6a4 4 0 0 1 4-4h.089A4.089 4.089 0 0 1 12 4.898 4.089 4.089 0 0 1 15.912 2H16a4 4 0 0 1 3.465 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10a2 2 0 0 1 2-2h.535A3.982 3.982 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.088c-.959 0-1.794.652-2.027 1.582L13.281 8H16Zm-5.885-2.418L10.719 8H8a2 2 0 1 1 0-4h.089c.958 0 1.793.652 2.026 1.582ZM3 20a2 2 0 0 0 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20Zm10.5 2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        851298: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ImagePlusIcon: function() {
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
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8.667c0 .123-.335.174-.39.063C21.11 12.708 20.203 12 19 12a3 3 0 0 0-2.701 1.693c-.09.185-.356.23-.48.066l-.469-.626a2 2 0 0 0-3.2 0l-2.223 2.964-.506-.633a1.5 1.5 0 0 0-2.342 0l-1.854 2.318A.75.75 0 0 0 5.81 19h5.69c.276 0 .495.226.542.498.167.956.812 1.683 1.688 2.113.111.054.06.389-.063.389H5a3 3 0 0 1-3-3V5Zm8.204.977c.229-.91-.88-1.55-1.555-.898a.934.934 0 0 1-1.298 0c-.675-.653-1.784-.013-1.556.898a.934.934 0 0 1-.649 1.125c-.903.258-.903 1.538 0 1.796a.934.934 0 0 1 .65 1.125c-.229.91.88 1.55 1.555.898a.934.934 0 0 1 1.298 0c.675.653 1.784.013 1.556-.898a.934.934 0 0 1 .649-1.125c.903-.258.903-1.538 0-1.796a.934.934 0 0 1-.65-1.125ZM19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
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
        619935: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useBlockedPaymentsConfig: function() {
                    return s
                },
                default: function() {
                    return o
                }
            });
            var i = n("862205"),
                l = n("15733");
            let r = (0, i.createExperiment)({
                    kind: "user",
                    id: "2022-03_block_russian_purchases",
                    label: "Block purchases based on country",
                    defaultConfig: {
                        paymentsBlocked: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Payments Blocked",
                        config: {
                            paymentsBlocked: !0
                        }
                    }]
                }),
                a = (0, i.createExperiment)({
                    kind: "user",
                    id: "2022-03_block_russian_purchases_desktop",
                    label: "Block purchases based on country (desktop specific flags)",
                    defaultConfig: {
                        checkPaymentSource: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Check Payment Source",
                        config: {
                            checkPaymentSource: !0
                        }
                    }]
                });

            function s() {
                let {
                    paymentsBlocked: e
                } = r.useExperiment({
                    location: "c519a9_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    checkPaymentSource: t
                } = a.useExperiment({
                    location: "c519a9_2"
                }, {
                    autoTrackExposure: !1
                }), {
                    defaultBillingCountryCode: n
                } = (0, l.default)();
                return e || t && "RU" === n
            }
            var o = r
        },
        473591: function(e, t, n) {
            "use strict";
            let i, l, r, a, s, o;
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var u = n("446674"),
                d = n("913144");
            let c = !1,
                E = !1,
                f = null,
                _ = {},
                S = {},
                p = {},
                T = {};

            function h() {
                i = void 0, l = void 0, r = void 0, a = void 0, s = void 0, f = null
            }
            class I extends u.default.Store {
                getSettings(e) {
                    if (null != e) return p[e]
                }
                getProfile(e) {
                    return null == e ? null : _[e]
                }
                getGeneratedPersonality() {
                    return o
                }
                getPendingPersonality() {
                    return i
                }
                getPendingNick() {
                    return l
                }
                getErrors() {
                    return f
                }
                hasPendingChanges() {
                    return void 0 !== i || void 0 !== l || void 0 !== r || void 0 !== a || void 0 !== s
                }
                getPendingUpdates() {
                    return {
                        pendingAvatar: r,
                        pendingNick: l,
                        pendingPersonality: i,
                        pendingBanner: a,
                        pendingThemeColors: s
                    }
                }
                isSavingSettings() {
                    return c
                }
                isFetchingSettings(e) {
                    var t;
                    return null === (t = T[e]) || void 0 === t ? void 0 : t.isFetching
                }
                shouldFetchSettings(e) {
                    var t, n;
                    let i = null !== (t = T[e]) && void 0 !== t ? t : {
                            isFetching: !1
                        },
                        l = Date.now(),
                        r = l - (null !== (n = i.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 36e5;
                    return !(null == i ? void 0 : i.isFetching) && r
                }
                isFetchingProfile(e) {
                    var t;
                    return null === (t = S[e]) || void 0 === t ? void 0 : t.isFetching
                }
                isEditingClydeProfile() {
                    return E
                }
            }
            I.displayName = "ClydeStore";
            var g = new I(d.default, {
                CLYDE_GUILD_SETTINGS_FETCH_START: function(e) {
                    let {
                        guildId: t
                    } = e, n = T[t];
                    T[t] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_GUILD_SETTINGS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        settings: n
                    } = e;
                    T[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    }, p[t] = n
                },
                CLYDE_GUILD_SETTINGS_FETCH_FAIL: function(e) {
                    let {
                        guildId: t
                    } = e, n = T[t];
                    T[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_SET_PENDING_PERSONALITY: function(e) {
                    let {
                        personality: t,
                        isGenerated: n
                    } = e;
                    i = t, n && (o = t)
                },
                CLYDE_SET_PENDING_NICK: function(e) {
                    let {
                        nick: t
                    } = e;
                    l = t
                },
                CLYDE_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    r = t
                },
                CLYDE_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    a = t
                },
                CLYDE_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    s = t
                },
                CLYDE_GUILD_SETTINGS_SAVE_START: function() {
                    f = null, c = !0
                },
                CLYDE_GUILD_SETTINGS_SAVE_SUCCESS: function(e) {
                    let {
                        settings: t
                    } = e;
                    c = !1, p[t.guild_id] = t, h()
                },
                CLYDE_GUILD_SETTINGS_SAVE_FAIL: function(e) {
                    c = !1, f = e.errors
                },
                CLYDE_RESET_PENDING_CHANGES: h,
                CLYDE_PROFILE_FETCH_START: function(e) {
                    let {
                        clydeProfileId: t
                    } = e, n = S[t];
                    S[t] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_PROFILE_FETCH_SUCCESS: function(e) {
                    let {
                        profile: t
                    } = e;
                    S[t.clyde_profile_id] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    }, _[t.clyde_profile_id] = t
                },
                CLYDE_PROFILE_FETCH_FAIL: function(e) {
                    let {
                        clydeProfileId: t
                    } = e, n = S[t];
                    S[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_PROFILE_CREATE_SUCCESS: function(e) {
                    let {
                        profile: t
                    } = e;
                    _[t.clyde_profile_id] = t
                },
                CLYDE_PROFILE_EDITING_START: function() {
                    E = !0
                },
                CLYDE_PROFILE_EDITING_END: function() {
                    E = !1
                }
            })
        },
        115279: function(e, t, n) {
            "use strict";
            var i, l, r, a, s, o, u, d, c, E, f;
            n.r(t), n.d(t, {
                EmojiCategoryTypes: function() {
                    return i
                },
                GRID_NAVIGATOR_ID: function() {
                    return _
                },
                EmojiCategories: function() {
                    return l
                },
                EmojiSubCategory: function() {
                    return r
                },
                INACTIVE_CATEGORY_INDEX: function() {
                    return S
                },
                EmojiSize: function() {
                    return s
                },
                EMOJI_PICKER_TAB_PANEL_ID: function() {
                    return p
                },
                EMOJI_PICKER_TAB_ID: function() {
                    return T
                },
                SOUNDBOARD_PICKER_TAB_PANEL_ID: function() {
                    return h
                },
                SOUNDBOARD_PICKER_TAB_ID: function() {
                    return I
                },
                REACTION_PICKER_TAB_PANEL_ID: function() {
                    return g
                },
                REACTION_PICKER_TAB_ID: function() {
                    return C
                },
                SUPER_REACTION_PICKER_TAB_ID: function() {
                    return v
                },
                SuperReactionBalanceLocations: function() {
                    return o
                },
                GIF_PICKER_TAB_PANEL_ID: function() {
                    return m
                },
                GIF_PICKER_TAB_ID: function() {
                    return N
                },
                EMOJI_SIZE_MAP: function() {
                    return A
                },
                EMOJI_ROW_SIZE: function() {
                    return O
                }
            }), (u = i || (i = {})).GUILD = "GUILD", u.PACK = "PACK", u.UNICODE = "UNICODE", u.RECENT = "RECENT", u.CUSTOM = "CUSTOM", u.SEARCH_RESULTS = "SEARCH_RESULTS", u.FAVORITES = "FAVORITES", u.TOP_GUILD_EMOJI = "TOP_GUILD_EMOJI", u.PREMIUM_UPSELL = "PREMIUM_UPSELL";
            let _ = "emoji-picker-grid";
            (d = l || (l = {})).RECENT = "recent", d.FAVORITES = "favorites", d.TOP_GUILD_EMOJI = "top guild emoji", d.CUSTOM = "custom", d.PEOPLE = "people", d.NATURE = "nature", d.FOOD = "food", d.ACTIVITY = "activity", d.TRAVEL = "travel", d.OBJECTS = "objects", d.SYMBOLS = "symbols", d.FLAGS = "flags", d.PREMIUM_UPSELL = "premium emoji", (c = r || (r = {})).NONE = "", c.TOP_GUILD_EMOJI = "top_server", c.NEWLY_ADDED_EMOJI = "newly_added", (E = a || (a = {}))[E.EMOJI = 0] = "EMOJI", E[E.NSFW = 1] = "NSFW";
            let S = -1;
            (f = s || (s = {}))[f.MEDIUM = 40] = "MEDIUM", f[f.LARGE = 48] = "LARGE";
            let p = "emoji-picker-tab-panel",
                T = "emoji-picker-tab",
                h = "soundboard-picker-tab-panel",
                I = "soundboard-picker-tab",
                g = "reaction-picker-tab-panel",
                C = "reaction-picker-tab",
                v = "super-reaction-picker-tab";
            (o || (o = {})).TOOLTIP = "tooltip";
            let m = "gif-picker-tab-panel",
                N = "gif-picker-tab",
                A = {
                    reaction: 32,
                    default: 44,
                    jumbo: 96
                },
                O = 9
        },
        634544: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                r = n.n(l),
                a = n("77078"),
                s = n("118503"),
                o = n("427459"),
                u = n("782340"),
                d = n("884737"),
                c = e => {
                    let t, n, l, {
                            guildFeature: c,
                            guild: E,
                            className: f,
                            hideTooltip: _ = !1,
                            tooltipPosition: S = "left",
                            onClick: p
                        } = e,
                        T = E.hasFeature(c),
                        h = (0, o.minimumRequiredTierForGuildFeature)(c);
                    return (T ? (null != h && (l = u.default.Messages.PREMIUM_GUILD_INCLUDED), t = (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(s.default, {
                            className: d.unlockedIcon
                        }), (0, i.jsx)(a.Heading, {
                            variant: "eyebrow",
                            className: d.description,
                            children: u.default.Messages.PREMIUM_GUILD_TIER_UNLOCKED
                        })]
                    })) : (null != h && (l = u.default.Messages.CLICK_TO_LEARN_MORE), t = (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(s.default, {
                            className: d.icon
                        }), (0, i.jsx)(a.Heading, {
                            variant: "eyebrow",
                            className: d.description,
                            children: null != h && (0, o.getShortenedTierName)(h)
                        })]
                    })), n = _ || null == l ? (0, i.jsx)("div", {
                        className: r(d.availabilityIndicator, f),
                        children: t
                    }) : (0, i.jsx)(a.Tooltip, {
                        position: S,
                        text: l,
                        children: e => (0, i.jsx)("div", {
                            ...e,
                            className: r(d.availabilityIndicator, f),
                            children: t
                        })
                    }), null == p || T) ? n : (0, i.jsx)(a.Clickable, {
                        onClick: p,
                        className: d.clickable,
                        children: n
                    })
                }
        },
        354460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getGuildFeatureFromUploadType: function() {
                    return r
                },
                shouldShowPremiumIconForGIFPickerOption: function() {
                    return a
                }
            });
            var i = n("49111"),
                l = n("75015");

            function r(e, t) {
                let {
                    isGIF: n
                } = t;
                if (e === l.UploadTypes.GUILD_BANNER) return n ? i.GuildFeatures.ANIMATED_BANNER : i.GuildFeatures.BANNER
            }

            function a(e) {
                return e === l.UploadTypes.AVATAR || e === l.UploadTypes.BANNER
            }
        },
        420333: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("446674"),
                a = n("77078"),
                s = n("812204"),
                o = n("685665"),
                u = n("473591"),
                d = n("634544"),
                c = n("694187"),
                E = n("305961"),
                f = n("162771"),
                _ = n("697218"),
                S = n("471671"),
                p = n("887718"),
                T = n("818643"),
                h = n("216422"),
                I = n("599110"),
                g = n("719923"),
                C = n("354460"),
                v = n("424960"),
                m = n("49111"),
                N = n("75015"),
                A = n("991207"),
                O = n("782340"),
                L = n("461300");
            let D = [{
                gif: n("6916"),
                png: n("12412")
            }, {
                gif: n("463095"),
                png: n("733105")
            }, {
                gif: n("749003"),
                png: n("918927")
            }, {
                gif: n("54400"),
                png: n("122574")
            }];

            function R(e) {
                let {
                    shouldAnimate: t = !0
                } = e, [n, r] = l.useState(!1);
                return (0, i.jsx)("div", {
                    className: L.gifGrid,
                    onMouseMove: () => r(!0),
                    onMouseLeave: () => r(!1),
                    children: D.map(e => (0, i.jsx)("div", {
                        className: L.gif,
                        style: {
                            backgroundImage: "url(".concat(t || n ? e.gif : e.png, ")")
                        }
                    }, e.gif))
                })
            }

            function U(e) {
                let {
                    guildFeature: t,
                    guild: n
                } = e;
                return null == t || null == n ? null : (0, i.jsx)("div", {
                    className: L.pillWrapper,
                    children: (0, i.jsx)(d.default, {
                        guildFeature: t,
                        guild: n,
                        hideTooltip: !0
                    })
                })
            }

            function y(e) {
                let {
                    uploadType: t,
                    guild: n,
                    showNitroWheel: l
                } = e;
                return (0, i.jsxs)("div", {
                    className: L.optionBoxText,
                    children: [(0, i.jsx)(U, {
                        guild: n,
                        guildFeature: (0, C.getGuildFeatureFromUploadType)(t, {
                            isGIF: !0
                        })
                    }), (0, i.jsxs)("div", {
                        className: L.optionBoxDescription,
                        children: [(0, C.shouldShowPremiumIconForGIFPickerOption)(t) && (0, i.jsx)(a.TooltipContainer, {
                            className: L.nitroWheelFlairContainer,
                            text: O.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                            children: l && (0, i.jsx)(h.default, {
                                className: L.nitroWheelFlair
                            })
                        }), O.default.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF]
                    })]
                })
            }

            function P(e) {
                let {
                    title: t,
                    uploadType: n,
                    guild: l
                } = e;
                return (0, i.jsxs)("div", {
                    className: L.optionBoxText,
                    children: [(0, i.jsx)(U, {
                        guildFeature: (0, C.getGuildFeatureFromUploadType)(n, {
                            isGIF: !1
                        }),
                        guild: l
                    }), (0, i.jsx)("div", {
                        className: L.optionBoxDescription,
                        children: t
                    })]
                })
            }

            function M(e) {
                let {
                    transitionState: t,
                    onClose: d,
                    onComplete: h,
                    uploadType: C,
                    maxFileSizeBytes: D,
                    showUpsellHeader: U,
                    filters: M,
                    analyticsLocation: F,
                    analyticsLocations: w = [],
                    modalSubTitle: b,
                    imageSpecifications: x,
                    modalTitle: G = O.default.Messages.SELECT_IMAGE_MODAL_TITLE,
                    uploadOptionTitle: k = O.default.Messages.UPLOAD_IMAGE
                } = e, H = (0, r.useStateFromStores)([S.default], () => S.default.isFocused()), B = (0, r.useStateFromStores)([_.default], () => _.default.getCurrentUser()), V = (0, r.useStateFromStores)([f.default], () => f.default.getGuildId()), j = (0, r.useStateFromStores)([E.default], () => E.default.getGuild(V)), W = (0, r.useStateFromStores)([u.default], () => u.default.isEditingClydeProfile()), {
                    reducedMotion: K
                } = l.useContext(a.AccessibilityPreferencesContext), Y = (0, a.useModalContext)(), z = !g.default.canUseAnimatedAvatar(B) && C === N.UploadTypes.AVATAR && !W, {
                    analyticsLocations: Z
                } = (0, o.default)(w, s.default.SELECT_IMAGE_MODAL);

                function J(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    d(), h(e, t, n)
                }
                return l.useEffect(() => {
                    z && I.default.track(m.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: m.AnalyticsSections.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                        location_stack: Z
                    }), I.default.track(m.AnalyticEvents.OPEN_MODAL, {
                        type: m.AnalyticsSections.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                        location: F
                    })
                }, [z, F, Z]), (0, i.jsxs)(a.ModalRoot, {
                    transitionState: t,
                    size: a.ModalSize.SMALL,
                    children: [(0, i.jsxs)(a.ModalHeader, {
                        className: L.modalHeader,
                        separator: !1,
                        children: [(0, i.jsxs)("div", {
                            children: [(0, i.jsx)(a.FormTitle, {
                                tag: a.FormTitleTags.H1,
                                className: L.modalTitle,
                                children: G
                            }), null != b ? (0, i.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: b
                            }) : null]
                        }), (0, i.jsx)(a.ModalCloseButton, {
                            onClick: d,
                            className: L.modalCloseButton
                        })]
                    }), (0, i.jsxs)(a.ModalContent, {
                        className: L.modalContent,
                        children: [(0, i.jsxs)("div", {
                            className: L.imagePickerContainer,
                            children: [(0, i.jsxs)(a.Clickable, {
                                className: L.optionBox,
                                children: [(0, i.jsx)("div", {
                                    className: L.contentCircle,
                                    children: (0, i.jsx)(T.default, {
                                        className: L.uploadIcon
                                    })
                                }), (0, i.jsx)(a.Text, {
                                    variant: "text-sm/semibold",
                                    color: "interactive-normal",
                                    children: (0, i.jsx)(P, {
                                        title: k,
                                        uploadType: C,
                                        guild: j
                                    })
                                }), (0, i.jsx)(c.default, {
                                    onChange: function(e, t) {
                                        if (t.type === A.FileTypes.MP4) return J(e, t);
                                        (0, a.openModalLazy)(async () => {
                                            let {
                                                default: l
                                            } = await n.el("57015").then(n.bind(n, "57015"));
                                            return n => (0, i.jsx)(l, {
                                                imgURI: e,
                                                file: t,
                                                onCrop: J,
                                                uploadType: C,
                                                showUpsellHeader: U,
                                                allowSkip: !0,
                                                analyticsPage: null == F ? void 0 : F.page,
                                                ...n
                                            })
                                        }, {
                                            contextKey: Y
                                        })
                                    },
                                    maxFileSizeBytes: D,
                                    onFileSizeError: function() {
                                        d(), (0, v.default)(D)
                                    },
                                    filters: M
                                })]
                            }), (0, i.jsxs)(a.Clickable, {
                                className: L.optionBox,
                                onClick: function() {
                                    (0, a.openModalLazy)(async () => {
                                        let {
                                            default: e
                                        } = await n.el("646077").then(n.bind(n, "646077"));
                                        return t => (0, i.jsx)(e, {
                                            uploadType: C,
                                            onComplete: (e, t) => J(e, t, !0),
                                            showUpsellHeader: U,
                                            analyticsPage: null == F ? void 0 : F.page,
                                            ...t
                                        })
                                    }, {
                                        contextKey: Y
                                    })
                                },
                                children: [(0, i.jsxs)("div", {
                                    className: L.contentCircle,
                                    children: [(0, i.jsx)(R, {
                                        shouldAnimate: H && !K.enabled
                                    }), (0, i.jsx)("div", {
                                        className: L.gifIconContainer,
                                        children: (0, i.jsx)(p.default, {
                                            className: L.gifIcon
                                        })
                                    })]
                                }), (0, i.jsx)(a.Text, {
                                    variant: "text-sm/semibold",
                                    color: "interactive-normal",
                                    children: (0, i.jsx)(y, {
                                        uploadType: C,
                                        guild: j,
                                        showNitroWheel: !W
                                    })
                                })]
                            })]
                        }), null != x ? (0, i.jsx)(a.Text, {
                            className: L.imageSpecifications,
                            variant: "text-sm/normal",
                            children: x
                        }) : null]
                    })]
                })
            }
        },
        424960: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("336522"),
                l = n("254490"),
                r = n("782340");

            function a(e) {
                (0, i.openUploadError)({
                    title: r.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    help: r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                        maxSize: (0, l.sizeString)(e)
                    })
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
        252931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInventoryGuildPacksUserExperimentConfig: function() {
                    return d
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return c
                },
                useInventoryGuildSettingsExperiment: function() {
                    return f
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
                c = function() {
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
                        collectEnabled: c
                    } = u({
                        user: l,
                        config: a
                    }), E = s && c && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: s,
                        collectEnabled: E,
                        showTryPacksModalAndV2Copy: d
                    }
                },
                E = (0, l.createExperiment)({
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
                f = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = E.useExperiment({
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
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("748820"),
                r = n("77078"),
                a = n("112679"),
                s = n("55689"),
                o = n("855133"),
                u = n("599110"),
                d = n("659500"),
                c = n("49111"),
                E = n("646718");

            function f(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: f,
                    onClose: _,
                    onComplete: S,
                    onSubscriptionConfirmation: p,
                    analyticsLocations: T,
                    analyticsObject: h,
                    analyticsLocation: I,
                    analyticsSourceLocation: g,
                    isGift: C = !1,
                    giftMessage: v,
                    subscriptionTier: m,
                    trialId: N,
                    postSuccessGuild: A,
                    openInvoiceId: O,
                    applicationId: L,
                    referralTrialOfferId: D,
                    giftRecipient: R,
                    returnRef: U
                } = null != e ? e : {}, y = !1, P = (0, l.v4)();
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
                            loadId: P,
                            subscriptionTier: m,
                            skuId: m,
                            isGift: C,
                            giftMessage: v,
                            giftRecipient: R,
                            initialPlanId: t,
                            followupSKUInfo: f,
                            onClose: e => {
                                l(), null == _ || _(e), e && (null == p || p())
                            },
                            onComplete: () => {
                                y = !0, null == S || S(), !C && ((0, o.setIsPersistentHelperHidden)(!0), (0, o.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: p,
                            analyticsLocations: T,
                            analyticsObject: h,
                            analyticsLocation: I,
                            analyticsSourceLocation: g,
                            trialId: N,
                            postSuccessGuild: A,
                            planGroup: E.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: O,
                            applicationId: L,
                            referralTrialOfferId: D,
                            returnRef: U
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !y && u.default.track(c.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: P,
                            payment_type: c.PurchaseTypeToAnalyticsPaymentType[c.PurchaseTypes.SUBSCRIPTION],
                            location: null != I ? I : h,
                            source: g,
                            subscription_type: c.SubscriptionTypes.PREMIUM,
                            is_gift: C,
                            eligible_for_trial: null != N,
                            application_id: L,
                            location_stack: T
                        }), (0, a.clearError)(), (0, s.clearPurchaseTokenAuthState)(), null == _ || _(y), y && (!C && d.ComponentDispatch.dispatch(c.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == p || p())
                    },
                    onCloseRequest: c.NOOP
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
        78345: function(e, t, n) {
            "use strict";
            var i, l, r, a;
            n.r(t), n.d(t, {
                PremiumHeaderThemes: function() {
                    return i
                },
                PremiumGiftStyles: function() {
                    return l
                },
                PromotionFlags: function() {
                    return s
                }
            }), (r = i || (i = {}))[r.DEFAULT = 0] = "DEFAULT", r[r.WINTER = 1] = "WINTER", (a = l || (l = {}))[a.SNOWGLOBE = 1] = "SNOWGLOBE", a[a.BOX = 2] = "BOX", a[a.CUP = 3] = "CUP", a[a.STANDARD_BOX = 4] = "STANDARD_BOX", a[a.CAKE = 5] = "CAKE", a[a.CHEST = 6] = "CHEST", a[a.COFFEE = 7] = "COFFEE";
            let s = Object.freeze({
                IS_BLOCKED_IOS: 32,
                IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS: 64,
                SUPPRESS_NOTIFICATION: 128
            })
        },
        15733: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("884691"),
                l = n("446674"),
                r = n("913144"),
                a = n("850068"),
                s = n("271938"),
                o = n("160299"),
                u = n("357957");

            function d() {
                let e = (0, l.useStateFromStores)([u.default], () => u.default.getDefaultBillingCountryCode()),
                    t = (0, l.useStateFromStores)([o.default], () => o.default.ipCountryCode),
                    n = (0, l.useStateFromStores)([s.default], () => s.default.isAuthenticated());
                return i.useEffect(() => {
                    r.default.wait(() => {
                        n && !o.default.isPaymentSourceFetching && !u.default.hasFetchedPaymentSources && a.fetchPaymentSources()
                    })
                }, [n]), i.useEffect(() => {
                    n && !o.default.ipCountryCodeLoaded && a.fetchIpCountryCode()
                }, [t, n]), {
                    defaultBillingCountryCode: e,
                    ipCountryCode: t
                }
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
                    return c
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
                c = "0"
        },
        235004: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var i, l, r = n("917351"),
                a = n.n(r),
                s = n("446674"),
                o = n("913144"),
                u = n("845579"),
                d = n("374363"),
                c = n("697218"),
                E = n("599110"),
                f = n("829536"),
                _ = n("846325"),
                S = n("49111"),
                p = n("397336");
            (i = l || (l = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
            let T = new Map,
                h = new Map,
                I = new Set,
                g = l.NOT_FETCHED,
                C = l.NOT_FETCHED,
                v = new Set,
                m = new Map,
                N = !1;

            function A(e) {
                let {
                    sound: t
                } = e, n = T.get(t.guildId), i = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != i && -1 !== i ? (n[i] = t, T.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), T.set(t.guildId, [...n]))
            }
            let O = a.debounce(e => {
                E.default.track(S.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, f.amplitudeToPerceptual)(e))
                }), u.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function L(e) {
                var t, n;
                let i = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(i)) t.soundboardMuted ? I.add(e) : I.delete(e);
                for (let e of I.keys()) null == i[e] && I.delete(e)
            }
            class D extends s.default.Store {
                initialize() {
                    this.waitFor(d.default), L(d.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(T),
                        favoritedSoundIds: Array.from(v),
                        localSoundboardMutes: Array.from(I)
                    }
                }
                getSounds() {
                    return T
                }
                getSoundsForGuild(e) {
                    return T.get(e)
                }
                getDefaultSounds() {
                    return this.getSoundsForGuild(_.DEFAULT_SOUND_GUILD_ID)
                }
                getSound(e, t) {
                    var n;
                    let i = null !== (n = T.get(e)) && void 0 !== n ? n : [];
                    return i.find(e => e.soundId === t)
                }
                getSoundById(e) {
                    let t = Array.from(T.values()).flat();
                    return t.find(t => t.soundId === e)
                }
                isFetchingSounds() {
                    return C === l.FETCHING
                }
                isFetchingDefaultSounds() {
                    return g === l.FETCHING
                }
                isFetching() {
                    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
                }
                shouldFetchDefaultSounds() {
                    return g === l.NOT_FETCHED
                }
                hasFetchedDefaultSounds() {
                    return g === l.FETCHED
                }
                isUserPlayingSounds(e) {
                    let t = m.get(e);
                    return null != t && t > 0
                }
                isPlayingSound(e) {
                    return null != h.get(e)
                }
                isFavoriteSound(e) {
                    return v.has(e)
                }
                getFavorites() {
                    return v
                }
                isLocalSoundboardMuted(e) {
                    return I.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return N
                }
                hasFetchedAllSounds() {
                    return C === l.FETCHED && g === l.FETCHED
                }
            }
            D.displayName = "SoundboardStore";
            var R = new D(o.default, {
                LOGOUT: function() {
                    T.clear(), h.clear(), m.clear(), N = !1, C = l.NOT_FETCHED, g = l.NOT_FETCHED
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    C = l.FETCHING
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: A,
                GUILD_SOUNDBOARD_SOUND_UPDATE: A,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    let {
                        soundId: t,
                        guildId: n
                    } = e;
                    T.delete(t);
                    let i = T.get(n),
                        l = null == i ? void 0 : i.findIndex(e => e.soundId === t);
                    null != i && null != l && !(l < 0) && (i.splice(l, 1), T.set(n, [...i]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, i;
                    let {
                        soundId: l,
                        userId: r
                    } = e, a = (null !== (n = h.get(l)) && void 0 !== n ? n : 0) + 1, s = (null !== (i = m.get(r)) && void 0 !== i ? i : 0) + 1;
                    h.set(l, a), m.set(r, s), r !== (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (N = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: i,
                        userId: l
                    } = e, r = (null !== (t = h.get(i)) && void 0 !== t ? t : 0) - 1, a = (null !== (n = m.get(l)) && void 0 !== n ? n : 0) - 1;
                    r <= 0 ? h.delete(i) : h.set(i, r), a <= 0 ? m.delete(l) : m.set(l, a)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    O(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    h.clear(), m.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e, {
                        type: n,
                        proto: i
                    } = t;
                    if (n === p.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var l, r;
                        v = new Set(null !== (r = null == i ? void 0 : null === (l = i.favoriteSoundboardSounds) || void 0 === l ? void 0 : l.soundIds) && void 0 !== r ? r : [])
                    } else n === p.UserSettingsTypes.PRELOADED_USER_SETTINGS && L(i)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    g = l.FETCHING
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    T.set(_.DEFAULT_SOUND_GUILD_ID, t), g = l.FETCHED
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
                        T.set(t, n)
                    }), C = l.FETCHED
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    T.delete(t.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
                    let {
                        userId: t
                    } = e;
                    I.has(t) ? I.delete(t) : I.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        soundboardStoreState: t
                    } = e;
                    T = new Map(Object.entries(t.soundboardSounds)), v = new Set(t.favoritedSoundIds), I = new Set(t.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        soundboardSounds: n
                    } = e;
                    T.set(t, n)
                }
            })
        },
        364685: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            });
            var i, l, r = n("102053"),
                a = n("446674"),
                s = n("913144"),
                o = n("802493"),
                u = n("595525"),
                d = n("212084"),
                c = n("867805"),
                E = n("267567"),
                f = n("813006"),
                _ = n("778689"),
                S = n("305961"),
                p = n("161585"),
                T = n("24373"),
                h = n("49111");
            (i = l || (l = {}))[i.Unloaded = 0] = "Unloaded", i[i.MaybeLoaded = 1] = "MaybeLoaded", i[i.Loaded = 2] = "Loaded";
            let I = 2,
                g = new Map,
                C = new Map,
                v = null,
                m = [],
                N = null,
                A = !1,
                O = new Map,
                L = (e, t) => {
                    O = new Map(O.set(e, t))
                },
                D = 1e3 * h.Durations.HOUR,
                R = () => {
                    if (0 !== I) return;
                    let e = o.default.database();
                    if (null == e) return;
                    I = 2;
                    let t = (0, u.tryLoadOrResetCacheGateway)("StickerStore.loadSavedGuildStickers", () => r.default.time("\uD83D\uDCBE", "loadSavedGuildStickers", () => d.default.getSync(e)));
                    if (null != t) {
                        for (let [e, n] of t)
                            if (_.default.isMember(e) && !O.has(e)) {
                                for (let t of n) U(t, !0, S.default.getGuild(e));
                                L(e, n)
                            }
                    }
                },
                U = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    C.set(e.id, e), t && y(e, n)
                },
                y = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == v) return;
                    let {
                        tags: n
                    } = e, i = {
                        type: p.StickerMetadataTypes.STICKER_NAME,
                        value: e.name.trim().toLocaleLowerCase()
                    };
                    if ((0, T.isStandardSticker)(e)) {
                        let t = m.find(t => t.id === e.pack_id),
                            l = [i, ...(null != n ? n : "").split(",").map(e => ({
                                type: p.StickerMetadataTypes.TAG,
                                value: e.trim().toLocaleLowerCase()
                            }))];
                        null != t && l.push({
                            type: p.StickerMetadataTypes.PACK_NAME,
                            value: t.name
                        }), v.set(e.id, l)
                    } else if ((0, T.isGuildSticker)(e) && null != n) {
                        let l = c.default.getByName(n),
                            r = {
                                type: p.StickerMetadataTypes.TAG,
                                value: n.trim().toLocaleLowerCase()
                            },
                            a = [i, r];
                        if (null != t) {
                            let e = (t instanceof(0, f.default) ? t.name : t.properties.name).trim().toLocaleLowerCase();
                            null != e && "" !== e && a.push({
                                type: p.StickerMetadataTypes.GUILD_NAME,
                                value: e
                            })
                        }
                        if (null == l) {
                            v.set(e.id, a);
                            return
                        }
                        a.push({
                            type: p.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: l.surrogates
                        }), l.forEachDiversity(e => a.push({
                            type: p.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: e.surrogates
                        })), v.set(e.id, a)
                    }
                },
                P = (e, t, n) => {
                    g.set(e.id, e);
                    let i = [...m];
                    if (t) {
                        let t = i.findIndex(t => t.id === e.id); - 1 !== t ? i[t] = e : i.push(e), m = i
                    }(t || n) && e.stickers.forEach(e => U(e))
                },
                M = () => {
                    O.forEach((e, t) => {
                        let n = S.default.getGuild(t);
                        null != n && e.forEach(e => y(e, n))
                    }), m.forEach(e => {
                        e.stickers.forEach(e => y(e))
                    })
                };

            function F(e) {
                null != e.stickers && (e.stickers.forEach(t => U(t, !0, e)), L(e.id, e.stickers))
            }
            class w extends a.default.Store {
                initialize() {
                    this.waitFor(o.default, _.default, S.default)
                }
                get isLoaded() {
                    return 0 !== I
                }
                get stickerMetadata() {
                    return R(), null == v && (v = new Map, M()), v
                }
                get hasLoadedStickerPacks() {
                    return null != N && N + D > Date.now()
                }
                get isFetchingStickerPacks() {
                    return A
                }
                getStickerById(e) {
                    return !C.has(e) && R(), C.get(e)
                }
                getStickerPack(e) {
                    return g.get(e)
                }
                getPremiumPacks() {
                    return m
                }
                isPremiumPack(e) {
                    return m.some(t => t.id === e)
                }
                getRawStickersByGuild() {
                    return O
                }
                getAllStickersIterator() {
                    return R(), C.values()
                }
                getAllGuildStickers() {
                    return R(), O
                }
                getStickersByGuildId(e) {
                    return R(), O.get(e)
                }
            }
            w.displayName = "StickersStore";
            var b = new w(s.default, {
                BACKGROUND_SYNC: () => {
                    v = null, C = new Map, O = new Map, I = 0
                },
                CONNECTION_OPEN: e => {
                    let {
                        guilds: t
                    } = e;
                    v = null, C = new Map, O = new Map, t.forEach(F), I = t.every(e => null != e.stickers) ? 1 : 0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    !E.default.isLurking(t.id) && (F(t), 1 === I && null == t.stickers && null != t.stickerUpdates && (I = 0))
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, i = null !== (t = O.get(n.id)) && void 0 !== t ? t : [];
                    i.forEach(e => {
                        null != v && v.delete(e.id), C.delete(e.id)
                    }), O.delete(n.id), O = new Map(O)
                },
                LOGOUT: () => {
                    I = 0, m = [], C.clear(), g.clear(), v = null, O.clear(), O = new Map(O), A = !1, N = null
                },
                STICKER_PACKS_FETCH_START: () => {
                    A = !0
                },
                STICKER_PACKS_FETCH_SUCCESS: e => {
                    let {
                        packs: t
                    } = e;
                    t.forEach(e => P(e, !0)), N = Date.now(), A = !1
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
                    n.forEach(e => U(e)), L(t, n)
                },
                GUILD_STICKERS_CREATE_SUCCESS: e => {
                    var t, n;
                    let {
                        guildId: i,
                        sticker: l
                    } = e, r = null !== (t = O.get(i)) && void 0 !== t ? t : [];
                    L(i, [...null !== (n = r.filter(e => e.id !== l.id)) && void 0 !== n ? n : [], l]), U(l)
                },
                STICKER_FETCH_SUCCESS: e => {
                    let {
                        sticker: t
                    } = e;
                    U(t, !1)
                },
                GUILD_STICKERS_UPDATE: e => {
                    var t;
                    let {
                        guildId: n,
                        stickers: i
                    } = e, l = e => {
                        let t;
                        let n = C.get(e.id);
                        return null != n && (0, T.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                            ...e,
                            user: t
                        }
                    }, r = null !== (t = O.get(n)) && void 0 !== t ? t : [], a = r.filter(e => null == i.find(t => t.id === e.id));
                    a.forEach(e => {
                        C.delete(e.id), null != v && v.delete(e.id)
                    });
                    let s = i.map(e => l(e));
                    s.forEach(e => U(e)), L(n, s)
                }
            })
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
        47319: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
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
                c = !0,
                E = [],
                f = [],
                _ = {},
                S = {},
                p = e => {
                    E = e.filter(e => !d.has(e.type) && a.default.isSupported(e.type)), f = e.filter(e => d.has(e.type)), c = !1
                };
            class T extends i.default.Store {
                isJoining(e) {
                    return _[e] || !1
                }
                isFetching() {
                    return c
                }
                getAccounts() {
                    return E
                }
                getLocalAccounts() {
                    return f
                }
                getAccount(e, t) {
                    return E.find(n => (null == e || n.id === e) && n.type === t)
                }
                getLocalAccount(e) {
                    return f.find(t => t.type === e)
                }
                isSuggestedAccountType(e) {
                    return S[e] || !1
                }
            }
            T.displayName = "ConnectedAccountsStore";
            var h = new T(l.default, {
                CONNECTION_OPEN: function(e) {
                    let t = e.connectedAccounts.map(e => new s.default(e));
                    p(t)
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
                        p(t)
                    } else r.default.fetch()
                },
                USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
                    _[e.integrationId] = e.joining
                },
                USER_CONNECTION_UPDATE: function(e) {
                    let {
                        platformType: t,
                        id: n,
                        revoked: i,
                        accessToken: l
                    } = e, r = E.find(e => e.id === n && e.type === t);
                    if (null == r) return !1;
                    null != i && (r.revoked = i), null != l && (r.accessToken = l)
                }
            })
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
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

            function c(e) {
                return d(e.code, t => {
                    t.state = "banned" in e && e.banned ? a.InviteStates.BANNED : a.InviteStates.EXPIRED
                })
            }
            class E extends i.default.Store {
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
            E.displayName = "InviteStore";
            var f = new E(l.default, {
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
                INVITE_RESOLVE_FAILURE: c,
                INSTANT_INVITE_REVOKE_SUCCESS: c,
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
        26092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var i = n("917351"),
                l = n.n(i),
                r = n("446674"),
                a = n("913144"),
                s = n("697218"),
                o = n("49111");
            let u = o.FormStates.CLOSED,
                d = null,
                c = null,
                E = {},
                f = {},
                _ = {},
                S = null,
                p = null,
                T = !1,
                h = !1,
                I = null,
                g = null,
                C = null,
                v = [],
                m = null,
                N = null;

            function A(e) {
                var t, n, i, l, r, a;
                let d = s.default.getCurrentUser();
                if (null == d) return O();
                c = null !== (t = e.section) && void 0 !== t ? t : c, m = null !== (n = e.section) && void 0 !== n ? n : c, null != e.subsection && null != c && (E[c] = e.subsection), null != e.scrollPosition && null != c && (f[c] = e.scrollPosition), h = !!e.openWithoutBackstack, u = o.FormStates.OPEN, _ = {}, p = {
                    ...S = {
                        [o.UserSettingsSections.ACCOUNT]: {
                            userId: d.id,
                            username: d.username,
                            discriminator: d.discriminator,
                            email: d.email,
                            avatar: d.avatar,
                            password: "",
                            newPassword: null,
                            claimed: d.isClaimed()
                        }
                    }
                }, g = null !== (i = e.onClose) && void 0 !== i ? i : null, C = null !== (l = e.analyticsLocation) && void 0 !== l ? l : null, v = null !== (r = e.analyticsLocations) && void 0 !== r ? r : [], N = null !== (a = e.impressionSource) && void 0 !== a ? a : null
            }

            function O() {
                u = o.FormStates.CLOSED, T = !1, S = null, m = null, p = null, d = null, c = null, E = {}, f = {}, g = null, C = null, v = [], N = null
            }

            function L() {
                u = o.FormStates.OPEN, _ = {}
            }
            class D extends r.default.Store {
                initialize() {
                    this.waitFor(s.default)
                }
                hasChanges() {
                    return null != p && null != S && (!!this.isOpen() || I === o.DrawerTabTypes.USER_SETTINGS) && !l.isEqual(p, S)
                }
                isOpen() {
                    return T
                }
                getPreviousSection() {
                    return d
                }
                getSection() {
                    return c
                }
                getSubsection() {
                    return null != c ? E[c] : null
                }
                getScrollPosition() {
                    return null != c ? f[c] : null
                }
                shouldOpenWithoutBackstack() {
                    return h
                }
                getProps() {
                    return {
                        submitting: u === o.FormStates.SUBMITTING,
                        section: c,
                        subsection: null != c ? E[c] : null,
                        scrollPosition: null != c ? f[c] : null,
                        settings: p,
                        errors: _,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: h,
                        analyticsLocation: C,
                        analyticsLocations: v,
                        initialSection: m,
                        impressionSource: N
                    }
                }
                get onClose() {
                    return g
                }
            }
            D.displayName = "UserSettingsModalStore";
            var R = new D(a.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    T = !0, A(e)
                },
                USER_SETTINGS_MODAL_INIT: A,
                USER_SETTINGS_MODAL_CLOSE: O,
                LOGOUT: O,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    u = o.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (u !== o.FormStates.SUBMITTING) return !1;
                    u = o.FormStates.OPEN, c = o.UserSettingsSections.ACCOUNT, _ = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    var t;
                    d = c, c = e.section, C = null, v = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (E[c] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete E[t] : null != c && delete E[c]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete f[t] : null != c && delete f[c]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    let {
                        settings: t
                    } = e;
                    null == p && (p = {});
                    let n = p[o.UserSettingsSections.ACCOUNT];
                    p[o.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: L,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = s.default.getCurrentUser();
                    L(), null != e && (p = {
                        ...S = {
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
                    return I = e.tab, null == c && I === o.DrawerTabTypes.USER_SETTINGS && A({
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
                    return E
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
            let c = new d(a.default, {
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
                    e.client_app_state = c.isFocused() ? "focused" : "unfocused"
                })
            });
            var E = c
        },
        181114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Shine: function() {
                    return p
                },
                default: function() {
                    return h
                }
            });
            var i, l, r = n("37983"),
                a = n("884691"),
                s = n("414456"),
                o = n.n(s),
                u = n("458960"),
                d = n("77078"),
                c = n("252744"),
                E = n("145131"),
                f = n("396792");
            (i = l || (l = {})).DEFAULT = "default", i.SMALL = "small";
            let _ = {
                    [l.DEFAULT]: f.shineDefault,
                    [l.SMALL]: f.shineSmall
                },
                S = {
                    [l.DEFAULT]: f.shineInnerDefault,
                    [l.SMALL]: f.shineInnerSmall
                };
            class p extends a.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...i
                    } = this.props;
                    return (0, r.jsx)(u.default.div, {
                        ...i,
                        className: o(f.shineContainer, e, {
                            [f.shinePaused]: n
                        }),
                        children: (0, r.jsx)(E.default, {
                            align: E.default.Align.CENTER,
                            justify: E.default.Justify.CENTER,
                            className: _[t],
                            children: (0, r.jsx)("div", {
                                className: S[t]
                            })
                        })
                    })
                }
            }
            p.defaultProps = {
                shineSize: l.DEFAULT
            };
            let T = e => {
                let {
                    children: t,
                    className: n,
                    disabled: i,
                    submitting: s,
                    pauseAnimation: u,
                    shineSize: E = l.DEFAULT,
                    shinePaused: _,
                    buttonShineClassName: S,
                    onlyShineOnHover: T,
                    ...h
                } = e, I = a.createRef(), g = (0, c.default)(I), C = !i && !s && !0 !== u && (!T || g);
                return (0, r.jsxs)(d.Button, {
                    buttonRef: I,
                    ...h,
                    className: o(f.shinyButton, n),
                    disabled: i,
                    submitting: s,
                    children: [t, C ? (0, r.jsx)(p, {
                        shinePaused: _,
                        className: o(f.buttonShine, T ? f.onlyShineOnHover : void 0, S),
                        shineSize: E
                    }) : null]
                })
            };
            T.ShineSizes = l;
            var h = T
        },
        887718: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("666031"),
                a = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 29,
                        height: n = 22,
                        color: l = "currentColor",
                        backgroundColor: r,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 29 22",
                        children: (0, i.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, i.jsx)("rect", {
                                width: t,
                                height: n,
                                fill: r,
                                fillOpacity: ".8",
                                rx: "3"
                            }), (0, i.jsx)("path", {
                                d: "M8.01725 16.7054C7.17625 16.7054 6.43191 16.4879 5.78425 16.0529C5.13658 15.6179 4.63391 15.0089 4.27625 14.2259C3.91858 13.4333 3.73975 12.5246 3.73975 11.4999C3.73975 10.4849 3.92825 9.58593 4.30525 8.80293C4.69191 8.01993 5.24775 7.4061 5.97275 6.96143C6.70741 6.51677 7.58225 6.29443 8.59725 6.29443C9.45758 6.29443 10.2261 6.4781 10.9027 6.84543C11.5891 7.21277 12.1062 7.72993 12.4542 8.39693L10.8157 9.57143C10.3227 8.66277 9.58808 8.20843 8.61175 8.20843C7.72241 8.20843 7.04091 8.49843 6.56725 9.07843C6.09358 9.64877 5.85675 10.4559 5.85675 11.4999C5.85675 12.5536 6.09358 13.3656 6.56725 13.9359C7.04091 14.5063 7.72241 14.7914 8.61175 14.7914C9.00808 14.7914 9.37058 14.7189 9.69925 14.5739C10.0376 14.4193 10.2986 14.2114 10.4822 13.9504V12.7034H8.17675V10.8184H12.5412V16.5024H10.8302L10.5547 15.5454C9.98441 16.3188 9.13858 16.7054 8.01725 16.7054Z",
                                fill: l
                            }), (0, i.jsx)("path", {
                                d: "M16.5444 16.5024H14.4274V6.49743H16.5444V16.5024Z",
                                fill: l
                            }), (0, i.jsx)("path", {
                                d: "M20.6933 16.5024H18.5763V6.49743H25.2608V8.41143H20.6933V10.7894H24.4053V12.7034H20.6933V16.5024Z",
                                fill: l
                            })]
                        })
                    })
                }, r.GifIcon)
        },
        978679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("998460"),
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
                        width: t,
                        height: n,
                        ...(0, a.default)(s),
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
        818643: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("851298"),
                a = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        ...r
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, a.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6 9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z",
                            fill: l
                        }), (0, i.jsx)("path", {
                            d: "M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z",
                            fill: l
                        })]
                    })
                }, r.ImagePlusIcon)
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
                    return c
                },
                getCoverRatio: function() {
                    return E
                },
                makeCssUrlString: function() {
                    return f
                },
                getPalette: function() {
                    return S
                },
                getPaletteForAvatar: function() {
                    return p
                },
                readFileAsBase64: function() {
                    return h
                },
                dataUriFileSize: function() {
                    return I
                },
                dataUrlToFile: function() {
                    return g
                },
                isPNGAnimated: function() {
                    return C
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

            function c(e) {
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

            function E(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: l
                } = e;
                return t === n ? 1 : Math.min(Math.max(i / t, l / n), 1)
            }

            function f(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            let _ = [
                [0, 0, 0]
            ];

            function S(e, t, n) {
                let i = document.createElement("canvas"),
                    l = i.getContext("2d");
                if (null == l) return _;
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
                return "boolean" == typeof d ? _ : d.palette()
            }
            let p = e => T(e),
                T = a.memoize(e => new Promise((t, n) => {
                    let i = new Image;
                    i.crossOrigin = "Anonymous", i.onerror = e => {
                        n(e), i.onerror = i.onload = null, i = null
                    }, i.onload = () => {
                        t(S(i, 5, 10)), i.onerror = i.onload = null, i = null
                    }, i.src = e
                }));

            function h(e) {
                return new Promise((t, n) => {
                    let i = new FileReader;
                    i.readAsDataURL(e), i.onload = () => {
                        l("string" == typeof i.result, "Result must be a string"), t(i.result)
                    }, i.onerror = e => n(e)
                })
            }

            function I(e) {
                let t = e.split(";base64,");
                return l(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
            }
            async function g(e, t, n) {
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
            async function C(e) {
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
                let d = i(_, c, a);

                function c() {
                    null == o || o()
                }

                function E(e) {
                    l(d), n(e)
                }

                function f(e) {
                    l(d), r(e)
                }

                function _(e) {
                    return s(d, _, c, {
                        ...a,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: E,
                        reject: f,
                        code: e,
                        mfaCodeHandler: S,
                        isModalOpen: !0
                    })
                }

                function S(e) {
                    let {
                        res: t
                    } = e;
                    s(d, _, c, {
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
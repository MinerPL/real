(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["74928"], {
        817295: function(e, t, n) {
            "use strict";

            function l() {
                return n.el("225629").then(n.bind(n, "225629"))
            }
            async function i(e, t, n, i, r) {
                let a = await l();
                return a.crop_gif(e, t, n, i, r)
            }
            n.r(t), n.d(t, {
                default: function() {
                    return l
                },
                wasmCropGIF: function() {
                    return i
                }
            })
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return i
                },
                popLayer: function() {
                    return r
                },
                popAllLayers: function() {
                    return a
                }
            });
            var l = n("913144");

            function i(e) {
                l.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function r() {
                l.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function a() {
                l.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return i
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
            var l = n("913144");

            function i(e) {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function r(e, t) {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function a() {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function s(e, t) {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function o() {
                l.default.wait(() => l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return i
                }
            });
            var l = n("913144");

            function i() {
                l.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                a = n.n(r),
                s = n("77078"),
                o = n("782340"),
                u = n("347129");
            class d extends i.PureComponent {
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
                        helpMessage: h,
                        retryPrompt: _,
                        retrySuccessMessage: p
                    } = this.props, {
                        code: A,
                        errorMessage: T,
                        retrySuccess: I
                    } = this.state, m = i.Children.count(r) > 0 ? (0, l.jsx)(s.Card, {
                        type: s.Card.Types.WARNING,
                        className: u.card,
                        children: (0, l.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: r
                        })
                    }) : null, R = null != _ ? (0, l.jsxs)(s.Text, {
                        className: a(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, l.jsx)("br", {}), (0, l.jsx)(s.Clickable, {
                            className: a(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, l.jsx)(s.Anchor, {
                                children: _
                            })
                        })]
                    }) : null, g = I ? (0, l.jsx)(s.Card, {
                        type: s.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, l.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: p
                        })
                    }) : null;
                    return (0, l.jsx)(s.ModalRoot, {
                        transitionState: f,
                        children: (0, l.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, l.jsx)(s.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(s.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, l.jsxs)(s.ModalContent, {
                                children: [null != h ? (0, l.jsx)(s.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u.spacing,
                                    children: h
                                }) : null, m, g, (0, l.jsxs)(s.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, l.jsx)(s.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != E ? E : 10,
                                        value: A,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, l.jsx)(s.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != d ? d : T
                                    }) : null, R]
                                })]
                            }), (0, l.jsxs)(s.ModalFooter, {
                                children: [(0, l.jsx)(s.Button, {
                                    type: "submit",
                                    disabled: c || 0 === A.length,
                                    children: null != n ? n : o.default.Messages.CONFIRM
                                }), (0, l.jsx)(s.Button, {
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
        276825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CheckmarkSmallIcon: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M18.707 7.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 14.586l7.293-7.293a1 1 0 0 1 1.414 0Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        666031: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GifIcon: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
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
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.089A4.089 4.089 0 0 1 12 4.898 4.089 4.089 0 0 1 15.912 2H16a4 4 0 0 1 3.465 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10a2 2 0 0 1 2-2h.535A3.982 3.982 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.088c-.959 0-1.794.652-2.027 1.582L13.281 8H16Zm-5.885-2.418L10.719 8H8a2 2 0 1 1 0-4h.089c.958 0 1.793.652 2.026 1.582Z",
                        clipRule: "evenodd",
                        className: s
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M3 20a2 2 0 0 0 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20ZM13.5 22a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        className: s
                    })]
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
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm13.35 8.133 3.5 4.667a.75.75 0 0 1-.6 1.2H5.81a.75.75 0 0 1-.585-1.218l1.854-2.318a1.5 1.5 0 0 1 2.342 0l.506.633 2.223-2.964a2 2 0 0 1 3.2 0Zm-5.146-7.156c.229-.91-.88-1.55-1.555-.898a.934.934 0 0 1-1.298 0c-.675-.653-1.784-.013-1.556.898a.934.934 0 0 1-.649 1.125c-.903.258-.903 1.538 0 1.796a.934.934 0 0 1 .65 1.125c-.229.91.88 1.55 1.555.898a.934.934 0 0 1 1.298 0c.675.653 1.784.013 1.556-.898a.934.934 0 0 1 .649-1.125c.903-.258.903-1.538 0-1.796a.934.934 0 0 1-.65-1.125Z",
                        clipRule: "evenodd",
                        className: s
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
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        className: s
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.252A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        clipRule: "evenodd",
                        className: s
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                        className: s
                    })]
                })
            }
        },
        125094: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ScreenArrowIcon: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.293-.707l-3-3a1 1 0 1 0-1.414 1.414L14.586 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.586l-1.293 1.293a1 1 0 0 0 1.414 1.414l3-3A1 1 0 0 0 18 8Z",
                        clipRule: "evenodd",
                        className: s
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M13 19.5a.5.5 0 0 0 .5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2Z",
                        className: s
                    })]
                })
            }
        },
        599417: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var l, i = n("872717"),
                r = n("49111"),
                a = n("782340");
            l = class extends i.default.V8APIError {
                constructor(e, t) {
                    super(e, t, null != t ? a.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: r.Links.STATUS,
                        details: "".concat(t)
                    }) : a.default.Messages.FORM_ERROR_GENERIC.format({
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
            var l, i = n("872717"),
                r = n("49111"),
                a = n("782340");
            l = class extends i.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? a.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: r.Links.STATUS,
                        details: "".concat(t)
                    }) : a.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: r.Links.STATUS
                    }))
                }
            }
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007");
            var l = n("884691");

            function i(e) {
                let [t, n] = (0, l.useState)(!1), i = (0, l.useRef)(e.current);
                return (0, l.useEffect)(() => {
                    i.current = e.current
                }, [e]), (0, l.useEffect)(() => {
                    let e = i.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        l = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", l), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", l)
                    }
                }, [i]), t
            }
        },
        75015: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UploadTypes: function() {
                    return r
                },
                EDITING_CONTAINER_WIDTH: function() {
                    return o
                },
                USER_BANNER_MAX_WIDTH: function() {
                    return u
                },
                USER_BANNER_MAX_HEIGHT: function() {
                    return d
                },
                GUILD_BANNER_MAX_WIDTH: function() {
                    return c
                },
                GUILD_BANNER_MAX_HEIGHT: function() {
                    return E
                },
                SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
                    return f
                },
                SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
                    return h
                },
                HOME_HEADER_MAX_WIDTH: function() {
                    return _
                },
                HOME_HEADER_MAX_HEIGHT: function() {
                    return p
                },
                BANNER_ASPECT_RATIO: function() {
                    return A
                },
                GUILD_BANNER_ASPECT_RATIO: function() {
                    return T
                },
                SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
                    return I
                },
                HOME_HEADER_ASPECT_RATIO: function() {
                    return m
                },
                MAX_BANNER_OVERLAY_HEIGHT: function() {
                    return R
                },
                MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
                    return g
                },
                MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
                    return C
                },
                MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
                    return N
                },
                VIDEO_BACKGROUND_ASPECT_RATIO: function() {
                    return M
                },
                MAX_VIDEO_OVERLAY_HEIGHT: function() {
                    return w
                },
                MessageTypes: function() {
                    return a
                }
            });
            var l, i, r, a, s = n("917219");
            (l = r || (r = {}))[l.AVATAR = 0] = "AVATAR", l[l.BANNER = 1] = "BANNER", l[l.GUILD_BANNER = 2] = "GUILD_BANNER", l[l.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", l[l.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", l[l.HOME_HEADER = 5] = "HOME_HEADER", l[l.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
            let o = 568,
                u = 2400,
                d = 848,
                c = 2400,
                E = 1350,
                f = 2400,
                h = 960,
                _ = 2400,
                p = 600,
                A = 17 / 6,
                T = 16 / 9,
                I = 2.5,
                m = 4,
                R = o / A,
                g = o / T,
                C = o / I,
                N = o / m,
                M = s.BACKGROUND_REPLACEMENT_SIZE.width / s.BACKGROUND_REPLACEMENT_SIZE.height,
                w = o / M;
            (i = a || (a = {}))[i.CROP_GIF_START = 0] = "CROP_GIF_START", i[i.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", i[i.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
        },
        57015: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007"), n("70102");
            var l = n("37983"),
                i = n("884691"),
                r = n("917351"),
                a = n("77078"),
                s = n("812204"),
                o = n("685665"),
                u = n("652914"),
                d = n("95689"),
                c = n("599110"),
                E = n("8731"),
                f = n("817295"),
                h = n("75015"),
                _ = n("49111"),
                p = n("917219"),
                A = n("782340"),
                T = n("879777"),
                I = e => {
                    let {
                        file: t,
                        imgURI: n,
                        transitionState: I,
                        allowSkip: m = !1,
                        onCrop: R,
                        onClose: g,
                        uploadType: C = h.UploadTypes.AVATAR,
                        showUpsellHeader: N = !1,
                        analyticsPage: M
                    } = e, [w, S] = i.useState({
                        width: 0,
                        height: 0
                    }), [v, O] = i.useState({
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    }), [L, y] = i.useState(!1), [U, P] = i.useState(1), [D, b] = i.useState({
                        x: 0,
                        y: 0
                    }), [x, H] = i.useState(null), [G, B] = i.useState(!1), {
                        AnalyticsLocationProvider: V
                    } = (0, o.default)(s.default.IMAGE_CROPPING_MODAL), j = i.useRef({
                        x: 0,
                        y: 0
                    }), k = i.useRef(null), F = i.useRef(null), W = "image/gif" === t.type;
                    i.useEffect(() => {
                        (0, f.default)()
                    }, []), i.useEffect(() => {
                        W && N && c.default.track(_.AnalyticEvents.OPEN_MODAL, {
                            type: _.AnalyticsSections.CROP_GIF_MODAL,
                            location: {
                                page: M
                            }
                        })
                    }, [N, M, W]);
                    let Z = () => {
                            switch (C) {
                                case h.UploadTypes.BANNER:
                                    return {
                                        height: h.USER_BANNER_MAX_HEIGHT, width: h.USER_BANNER_MAX_WIDTH
                                    };
                                case h.UploadTypes.VIDEO_BACKGROUND:
                                    return p.BACKGROUND_REPLACEMENT_SIZE;
                                case h.UploadTypes.AVATAR:
                                case h.UploadTypes.AVATAR_DECORATION:
                                    return {
                                        height: _.AVATAR_MAX_SIZE, width: _.AVATAR_MAX_SIZE
                                    };
                                case h.UploadTypes.GUILD_BANNER:
                                    return {
                                        height: h.GUILD_BANNER_MAX_HEIGHT, width: h.GUILD_BANNER_MAX_WIDTH
                                    };
                                case h.UploadTypes.SCHEDULED_EVENT_IMAGE:
                                    return {
                                        height: h.SCHEDULED_EVENT_IMAGE_MAX_HEIGHT, width: h.SCHEDULED_EVENT_IMAGE_MAX_WIDTH
                                    };
                                case h.UploadTypes.HOME_HEADER:
                                    return {
                                        height: h.HOME_HEADER_MAX_HEIGHT, width: h.HOME_HEADER_MAX_WIDTH
                                    }
                            }
                        },
                        z = i.useCallback((e, t, n) => {
                            j.current = (0, E.getBoundedCoordinates)(e, t, n), null != k.current && (k.current.style.transform = "translate3d(".concat(j.current.x, "px, ").concat(j.current.y, "px, 0)"))
                        }, [k]),
                        Y = i.useCallback(() => {
                            if (null == k.current || U > 1) return;
                            let {
                                width: e,
                                height: t
                            } = k.current.getBoundingClientRect(), {
                                width: n,
                                height: l
                            } = (0, E.adjustImageDimensionsForAspectRatio)(C, e, t), i = (0, E.calculateOverlaySize)(C, n, l, t);
                            H({
                                width: n,
                                height: l
                            }), S(i), O((0, E.calculateDragBoundaries)(n, l, i))
                        }, [C, U]),
                        X = i.useCallback(e => {
                            let {
                                x: t,
                                y: n
                            } = j.current;
                            if (!L || e.clientX === t && e.clientY === n) return;
                            let l = e.clientX - D.x,
                                i = e.clientY - D.y;
                            z(l, i, v)
                        }, [v, L, D, z]),
                        K = () => {
                            y(!1)
                        },
                        q = () => {
                            let e = Z();
                            return e.width !== e.height
                        },
                        $ = async () => {
                            let e;
                            if (null == k.current) return;
                            B(!0);
                            let n = k.current,
                                l = Z();
                            if (W) try {
                                let {
                                    result: i,
                                    cancelFn: r
                                } = await (0, E.cropGIF)(t, n, w, j.current, l);
                                F.current = r, e = await i, F.current = null
                            } catch (e) {
                                var i;
                                throw null === (i = F.current) || void 0 === i || i.call(F), F.current = null, Error("Error cropping GIF")
                            } else e = (0, E.cropStaticImage)(n, w, j.current, l);
                            await R(e, t), B(!1), g()
                        };
                    return i.useEffect(() => (window.addEventListener("mouseup", K), window.addEventListener("resize", Y), () => {
                        window.removeEventListener("mouseup", K), window.removeEventListener("resize", Y)
                    }), [Y]), i.useEffect(() => () => {
                        null != F.current && F.current()
                    }, []), i.useEffect(() => {
                        if (L) return window.addEventListener("mousemove", X), () => window.removeEventListener("mousemove", X)
                    }, [X, L]), (0, l.jsx)(V, {
                        children: (0, l.jsxs)(a.ModalRoot, {
                            onAnimationEnd: Y,
                            transitionState: I,
                            size: a.ModalSize.MEDIUM,
                            children: [N && (0, l.jsx)(u.default, {
                                type: C,
                                analyticsPage: M,
                                analyticsSection: _.AnalyticsSections.CROP_GIF_MODAL,
                                isGIF: W,
                                banner: n
                            }), (0, l.jsx)(a.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(a.FormTitle, {
                                    className: T.titleCase,
                                    tag: a.FormTitleTags.H1,
                                    children: A.default.Messages.AVATAR_UPLOAD_EDIT_MEDIA
                                })
                            }), (0, l.jsxs)(a.ModalContent, {
                                className: T.modalContent,
                                children: [(0, l.jsxs)("div", {
                                    className: T.editingContainer,
                                    children: [(0, l.jsx)("img", {
                                        style: {
                                            opacity: null == x ? 0 : 1,
                                            transform: "translate3d(".concat(j.current.x, "px, ").concat(j.current.y, "px, 0px)"),
                                            ...(() => {
                                                if (null == x) return {};
                                                let e = x.width / x.height,
                                                    t = q() && e > h.BANNER_ASPECT_RATIO ? w.height / x.height : 1;
                                                return {
                                                    width: x.width * U * t,
                                                    minWidth: x.width * U * t,
                                                    height: x.height * U * t
                                                }
                                            })()
                                        },
                                        className: G ? T.imageDisabled : T.imageEnabled,
                                        src: n,
                                        alt: "avatar",
                                        ref: k,
                                        onMouseDown: e => {
                                            let t = e.clientX - j.current.x,
                                                n = e.clientY - j.current.y;
                                            b({
                                                x: t,
                                                y: n
                                            }), y(!0)
                                        },
                                        draggable: !1
                                    }), (0, l.jsx)("div", {
                                        className: C === h.UploadTypes.AVATAR ? T.overlayAvatar : T.overlayBanner,
                                        style: {
                                            opacity: null == x ? 0 : 1,
                                            width: w.width,
                                            height: w.height
                                        }
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: T.sliderContainer,
                                    children: [(0, l.jsx)(d.default, {
                                        className: T.icon,
                                        width: 24,
                                        height: 24
                                    }), (0, l.jsx)(a.Slider, {
                                        initialValue: 1,
                                        minValue: 1,
                                        maxValue: 2,
                                        keyboardStep: .025,
                                        asValueChanges: e => {
                                            if (null == x) return;
                                            let {
                                                width: t,
                                                height: n
                                            } = x, l = (0, E.calculateDragBoundaries)(t * e, n * e, w), {
                                                x: i,
                                                y: a
                                            } = j.current;
                                            (!(0, r.inRange)(i, l.right, l.left) || !(0, r.inRange)(a, l.top, l.bottom)) && z(i, a, l), P(e), O(l)
                                        },
                                        disabled: G,
                                        equidistant: !0,
                                        hideBubble: !0,
                                        "aria-label": A.default.Messages.FORM_LABEL_AVATAR_SIZE
                                    }), (0, l.jsx)(d.default, {
                                        className: T.icon,
                                        width: 48,
                                        height: 48
                                    })]
                                })]
                            }), (0, l.jsxs)(a.ModalFooter, {
                                className: T.modalFooter,
                                children: [m ? (0, l.jsx)(a.Button, {
                                    className: T.cancelButton,
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.PRIMARY,
                                    size: a.ButtonSizes.SMALL,
                                    onClick: () => {
                                        m && (R(n, t), g())
                                    },
                                    children: A.default.Messages.AVATAR_UPLOAD_SKIP
                                }) : null, (0, l.jsxs)("div", {
                                    className: T.buttonsRight,
                                    children: [(0, l.jsx)(a.Button, {
                                        className: T.cancelButton,
                                        look: a.Button.Looks.LINK,
                                        color: a.Button.Colors.PRIMARY,
                                        size: a.ButtonSizes.SMALL,
                                        onClick: () => {
                                            if (null != F.current) {
                                                F.current(), F.current = null, B(!1);
                                                return
                                            }
                                            g()
                                        },
                                        children: A.default.Messages.AVATAR_UPLOAD_CANCEL
                                    }), (0, l.jsx)(a.Button, {
                                        submitting: G,
                                        size: a.ButtonSizes.SMALL,
                                        onClick: $,
                                        children: A.default.Messages.AVATAR_UPLOAD_APPLY
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
                    return s
                },
                getBoundedCoordinates: function() {
                    return o
                },
                adjustImageDimensionsForAspectRatio: function() {
                    return d
                },
                calculateDragBoundaries: function() {
                    return c
                },
                calculateOverlaySize: function() {
                    return E
                },
                downsizeImage: function() {
                    return f
                }
            }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007"), n("70102"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
            var l = n("917351"),
                i = n("75015");

            function r(e, t, n, l) {
                let i = e.naturalWidth / e.width,
                    r = t.width / 2,
                    a = t.height / 2,
                    s = (e.width / 2 - r - n.x) * i,
                    o = (e.height / 2 - a - n.y) * i,
                    u = t.width * i,
                    d = t.height * i,
                    c = Math.min(u, l.width),
                    E = Math.min(d, l.height);
                return {
                    x: s,
                    y: o,
                    scaledCropWidth: u,
                    scaledCropHeight: d,
                    canvasWidth: c,
                    canvasHeight: E
                }
            }
            async function a(e, t, l, a, s) {
                let {
                    x: o,
                    y: u,
                    scaledCropWidth: d,
                    scaledCropHeight: c
                } = r(t, l, a, s), E = await e.arrayBuffer(), f = new Worker(new URL(n.p + n.u("39703"), n.b)), h = new Promise((e, t) => {
                    f.onmessage = n => {
                        let {
                            data: l
                        } = n;
                        if (l.type === i.MessageTypes.CROP_GIF_COMPLETE) {
                            var r;
                            e((r = new Blob([l.result]), new Promise(e => {
                                let t = new FileReader;
                                t.onload = t => {
                                    var n;
                                    let l = null === (n = t.target) || void 0 === n ? void 0 : n.result;
                                    "string" == typeof l ? e(l) : e("")
                                }, t.readAsDataURL(r)
                            }))), f.terminate()
                        } else l.type === i.MessageTypes.CROP_GIF_ERROR && (t(Error("Error cropping GIF")), f.terminate())
                    }
                });
                return f.postMessage({
                    type: i.MessageTypes.CROP_GIF_START,
                    gif: new Uint8Array(E),
                    x: 0 | o,
                    y: 0 | u,
                    width: 0 | d,
                    height: 0 | c
                }), {
                    result: h,
                    cancelFn: () => f.terminate()
                }
            }

            function s(e, t, n, l) {
                let {
                    x: i,
                    y: a,
                    scaledCropWidth: s,
                    scaledCropHeight: o,
                    canvasWidth: u,
                    canvasHeight: d
                } = r(e, t, n, l), c = document.createElement("canvas");
                c.width = u, c.height = d;
                let E = c.getContext("2d");
                return null != E && E.drawImage(e, i, a, s, o, 0, 0, c.width, c.height), c.toDataURL("image/png")
            }

            function o(e, t, n) {
                return {
                    x: (0, l.clamp)(e, n.left, n.right),
                    y: (0, l.clamp)(t, n.bottom, n.top)
                }
            }

            function u(e, t, n, l) {
                let r = n,
                    a = l;
                n > i.EDITING_CONTAINER_WIDTH && (r = i.EDITING_CONTAINER_WIDTH, a = l * (i.EDITING_CONTAINER_WIDTH / n));
                if (n / l < e) return {
                    width: r,
                    height: a
                };
                let s = t / a,
                    o = r * s;
                return {
                    width: o,
                    height: t
                }
            }

            function d(e, t, n) {
                switch (e) {
                    case i.UploadTypes.AVATAR:
                    case i.UploadTypes.AVATAR_DECORATION:
                        return {
                            width: t, height: n
                        };
                    case i.UploadTypes.BANNER:
                        return u(i.BANNER_ASPECT_RATIO, i.MAX_BANNER_OVERLAY_HEIGHT, t, n);
                    case i.UploadTypes.GUILD_BANNER:
                        return u(i.GUILD_BANNER_ASPECT_RATIO, i.MAX_GUILD_BANNER_OVERLAY_HEIGHT, t, n);
                    case i.UploadTypes.VIDEO_BACKGROUND:
                        return u(i.VIDEO_BACKGROUND_ASPECT_RATIO, i.MAX_VIDEO_OVERLAY_HEIGHT, t, n);
                    case i.UploadTypes.SCHEDULED_EVENT_IMAGE:
                        return u(i.SCHEDULED_EVENT_IMAGE_ASPECT_RATIO, i.MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT, t, n);
                    case i.UploadTypes.HOME_HEADER:
                        return u(i.HOME_HEADER_ASPECT_RATIO, i.MAX_HOME_HEADER_OVERLAY_HEIGHT, t, n)
                }
            }

            function c(e, t, n) {
                let l = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    i = e - n.width,
                    r = t - n.height;
                return 0 !== i && (l.left = -Math.abs(i / 2), l.right = i / 2), 0 !== r && (l.bottom = -Math.abs(r / 2), l.top = r / 2), l
            }

            function E(e, t, n, l) {
                switch (e) {
                    case i.UploadTypes.AVATAR:
                    case i.UploadTypes.AVATAR_DECORATION:
                        let r = Math.min(t, n);
                        return {
                            width: r, height: r
                        };
                    case i.UploadTypes.BANNER:
                        let a = Math.min(t, i.EDITING_CONTAINER_WIDTH);
                        return {
                            width: a, height: a * (1 / i.BANNER_ASPECT_RATIO)
                        };
                    case i.UploadTypes.GUILD_BANNER:
                        let s = Math.min(t, i.EDITING_CONTAINER_WIDTH);
                        return {
                            width: s, height: Math.min(s * (9 / 16), l)
                        };
                    case i.UploadTypes.VIDEO_BACKGROUND:
                        let o = Math.min(t, i.EDITING_CONTAINER_WIDTH);
                        return {
                            width: o, height: o * (9 / 16)
                        };
                    case i.UploadTypes.SCHEDULED_EVENT_IMAGE:
                        let u = Math.min(t, i.EDITING_CONTAINER_WIDTH);
                        return {
                            width: u, height: .4 * u
                        };
                    case i.UploadTypes.HOME_HEADER:
                        let d = Math.min(t, i.EDITING_CONTAINER_WIDTH);
                        return {
                            width: d, height: d * (1 / i.HOME_HEADER_ASPECT_RATIO)
                        }
                }
            }

            function f(e, t, n) {
                let l = e.naturalWidth / e.naturalHeight,
                    i = t,
                    r = n;
                e.naturalWidth > e.naturalHeight ? i /= l : r *= l;
                let a = {
                    height: i,
                    width: r
                };
                return s(e, {
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
                    return d
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return c
                },
                useInventoryGuildSettingsExperiment: function() {
                    return f
                }
            });
            var l = n("65597"),
                i = n("862205"),
                r = n("697218"),
                a = n("719923"),
                s = n("782340");
            let o = (0, i.createExperiment)({
                    kind: "user",
                    id: "2023-05_inventory_guild_packs",
                    label: "Inventory Guild Packs Experiment",
                    defaultConfig: {
                        desktopViewAndUseAndCollectEnabled: !1,
                        mobileViewAndUseEnabled: !1,
                        mobileAndFreemiumCollectEnabled: !1,
                        autoUnfurlReactionTooltip: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Desktop view/use/collect",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1
                        }
                    }, {
                        id: 2,
                        label: "Desktop view/use/collect and mobile view/use",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1
                        }
                    }, {
                        id: 3,
                        label: "Read-only pack emoji for logged out users",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !1,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1
                        }
                    }, {
                        id: 4,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !1
                        }
                    }, {
                        id: 5,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal (second group)",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !1
                        }
                    }, {
                        id: 6,
                        label: "Non-nitro same as bucket 4 + auto-unfurl reactions",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !0
                        }
                    }, {
                        id: 7,
                        label: "Nitro same as bucket 4 + auto-unfurl reactions",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !0
                        }
                    }]
                }),
                u = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: l,
                        mobileViewAndUseEnabled: i,
                        mobileAndFreemiumCollectEnabled: r,
                        autoUnfurlReactionTooltip: s
                    } = n, o = a.default.isPremium(t);
                    return {
                        viewAndUseEnabled: l,
                        showTryPacksModalAndV2Copy: r,
                        collectEnabled: o ? l : r,
                        autoUnfurlReactionTooltip: s
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
                        collectEnabled: !1,
                        autoUnfurlReactionTooltip: !1
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
                    }, i = (0, l.default)([r.default], () => r.default.getCurrentUser()), a = o.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: s,
                        showTryPacksModalAndV2Copy: d,
                        collectEnabled: c,
                        autoUnfurlReactionTooltip: E
                    } = u({
                        user: i,
                        config: a
                    }), f = s && c && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: s,
                        collectEnabled: f,
                        showTryPacksModalAndV2Copy: d,
                        autoUnfurlReactionTooltip: E
                    }
                },
                E = (0, i.createExperiment)({
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
                            getNewSettingsDescription: () => s.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON_V2
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => s.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON_V2
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => s.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON_V2
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
            var l = n("37983");
            n("884691");
            var i = n("748820"),
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
                    onClose: h,
                    onComplete: _,
                    onSubscriptionConfirmation: p,
                    analyticsLocations: A,
                    analyticsObject: T,
                    analyticsLocation: I,
                    analyticsSourceLocation: m,
                    isGift: R = !1,
                    giftMessage: g,
                    subscriptionTier: C,
                    trialId: N,
                    postSuccessGuild: M,
                    openInvoiceId: w,
                    applicationId: S,
                    referralTrialOfferId: v,
                    giftRecipient: O,
                    returnRef: L
                } = null != e ? e : {}, y = !1, U = (0, i.v4)();
                (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: i,
                            ...r
                        } = n;
                        return (0, l.jsx)(e, {
                            ...r,
                            loadId: U,
                            subscriptionTier: C,
                            skuId: C,
                            isGift: R,
                            giftMessage: g,
                            giftRecipient: O,
                            initialPlanId: t,
                            followupSKUInfo: f,
                            onClose: e => {
                                i(), null == h || h(e), e && (null == p || p())
                            },
                            onComplete: () => {
                                y = !0, null == _ || _(), !R && ((0, o.setIsPersistentHelperHidden)(!0), (0, o.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: p,
                            analyticsLocations: A,
                            analyticsObject: T,
                            analyticsLocation: I,
                            analyticsSourceLocation: m,
                            trialId: N,
                            postSuccessGuild: M,
                            planGroup: E.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: w,
                            applicationId: S,
                            referralTrialOfferId: v,
                            returnRef: L
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !y && u.default.track(c.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: U,
                            payment_type: c.PurchaseTypeToAnalyticsPaymentType[c.PurchaseTypes.SUBSCRIPTION],
                            location: null != I ? I : T,
                            source: m,
                            subscription_type: c.SubscriptionTypes.PREMIUM,
                            is_gift: R,
                            eligible_for_trial: null != N,
                            application_id: S,
                            location_stack: A
                        }), (0, a.clearError)(), (0, s.clearPurchaseTokenAuthState)(), null == h || h(y), y && (!R && d.ComponentDispatch.dispatch(c.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == p || p())
                    },
                    onCloseRequest: c.NOOP
                })
            }
        },
        855133: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                togglePersistentHelper: function() {
                    return i
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
            var l = n("913144");
            let i = () => {
                    l.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                r = () => {
                    l.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                a = () => {
                    l.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                s = e => {
                    l.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                o = e => {
                    l.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                u = e => {
                    l.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        635956: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                a = n("446674"),
                s = n("77078"),
                o = n("79112"),
                u = n("685665"),
                d = n("788506"),
                c = n("649844"),
                E = n("393414"),
                f = n("797647"),
                h = n("697218"),
                _ = n("521012"),
                p = n("471671"),
                A = n("181114"),
                T = n("978679"),
                I = n("216422"),
                m = n("719923"),
                R = n("646718"),
                g = n("49111"),
                C = n("782340"),
                N = n("683437"),
                M = function(e) {
                    let {
                        isGift: t,
                        subscriptionTier: i,
                        onClick: M,
                        size: w,
                        className: S,
                        trialId: v,
                        isTrialCTA: O,
                        buttonText: L,
                        buttonTextClassName: y,
                        postSuccessGuild: U,
                        onSubscribeModalClose: P,
                        premiumModalAnalyticsLocation: D,
                        showIcon: b = !0,
                        disableShine: x,
                        applicationId: H,
                        giftMessage: G,
                        overrideDisabledButtonText: B,
                        shinyButtonClassName: V,
                        ...j
                    } = e, k = (0, a.useStateFromStores)([h.default], () => h.default.getCurrentUser()), F = (0, a.useStateFromStores)([p.default], () => p.default.isFocused()), W = (0, a.useStateFromStores)([_.default], () => _.default.getPremiumTypeSubscription()), {
                        analyticsLocations: Z
                    } = (0, u.default)(), z = e => {
                        if (e.preventDefault(), null == k) {
                            (0, E.transitionTo)(g.Routes.LOGIN);
                            return
                        }
                        if (null == M || M(e), (null == W ? void 0 : W.status) === g.SubscriptionStatusTypes.ACCOUNT_HOLD) {
                            (0, d.trackPremiumSettingsPaneOpened)(), o.default.open(g.UserSettingsSections.PREMIUM), null == P || P(!1);
                            return
                        }! function(e) {
                            let {
                                isClaimed: t,
                                isVerified: i,
                                isGift: r,
                                subscriptionTier: a,
                                trialId: o,
                                postSuccessGuild: u,
                                onSubscribeModalClose: d,
                                analyticsLocations: E,
                                premiumModalAnalyticsLocation: f,
                                applicationId: h,
                                giftMessage: _
                            } = e;
                            if (!t) {
                                (0, s.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("984599").then(n.bind(n, "984599"));
                                    return t => {
                                        let {
                                            onClose: n,
                                            ...i
                                        } = t;
                                        return (0, l.jsx)(e, {
                                            ...i,
                                            onClose: n
                                        })
                                    }
                                });
                                return
                            }
                            if (!i) {
                                (0, s.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("899917").then(n.bind(n, "899917"));
                                    return t => {
                                        let {
                                            onClose: n,
                                            ...i
                                        } = t;
                                        return (0, l.jsx)(e, {
                                            ...i,
                                            onClose: n
                                        })
                                    }
                                });
                                return
                            }
                            let p = g.AnalyticsObjectTypes.BUY;
                            null != o ? p = g.AnalyticsObjectTypes.TRIAL : r && (p = g.AnalyticsObjectTypes.GIFT), (0, c.default)({
                                isGift: r,
                                initialPlanId: null,
                                subscriptionTier: a,
                                analyticsLocations: E,
                                analyticsObject: {
                                    object: g.AnalyticsObjects.BUTTON_CTA,
                                    objectType: p,
                                    ...f
                                },
                                trialId: o,
                                postSuccessGuild: u,
                                onClose: d,
                                applicationId: h,
                                giftMessage: _
                            })
                        }({
                            isClaimed: k.isClaimed(),
                            isVerified: k.verified,
                            isGift: t,
                            subscriptionTier: i,
                            trialId: v,
                            postSuccessGuild: U,
                            onSubscribeModalClose: P,
                            analyticsLocations: Z,
                            premiumModalAnalyticsLocation: D,
                            applicationId: H,
                            giftMessage: G
                        })
                    };
                    if (O) return (0, l.jsxs)(s.Button, {
                        size: w,
                        className: S,
                        innerClassName: N.premiumSubscribeButton,
                        look: s.Button.Looks.INVERTED,
                        onClick: z,
                        ...j,
                        children: [b && (0, l.jsx)(I.default, {
                            className: N.premiumIcon
                        }), (0, l.jsx)("span", {
                            className: r(N.buttonText, y),
                            children: null != L ? L : C.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                        })]
                    });
                    if (t) return (0, l.jsxs)(s.Button, {
                        size: w,
                        className: S,
                        innerClassName: N.giftButton,
                        color: s.Button.Colors.PRIMARY,
                        onClick: z,
                        ...j,
                        children: [(0, l.jsx)(T.default, {
                            className: N.giftIcon
                        }), (0, l.jsx)("span", {
                            className: r(N.buttonText, y),
                            children: null != L ? L : C.default.Messages.PREMIUM_GIFTING_BUTTON
                        })]
                    });
                    let Y = C.default.Messages.APPLICATION_STORE_GET_PREMIUM,
                        X = null != W ? (0, m.getPremiumPlanItem)(W) : null,
                        K = null != X ? m.default.getPremiumType(X.planId) : null == k ? void 0 : k.premiumType,
                        q = i === R.PremiumSubscriptionSKUs.TIER_2 && null != K && [R.PremiumTypes.TIER_0, R.PremiumTypes.TIER_1].includes(K);
                    q && (Y = C.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
                    let $ = null != W && W.status !== g.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, f.isNoneSubscription)(W.planId) && !q,
                        J = $ ? null != B ? B : function(e) {
                            let {
                                ctaSubscriptionSkuId: t,
                                currentPremiumType: n
                            } = e, l = null, i = null;
                            if (null != t && t !== R.PremiumSubscriptionSKUs.LEGACY && t !== R.PremiumSubscriptionSKUs.TIER_0 && t !== R.PremiumSubscriptionSKUs.TIER_1 && t !== R.PremiumSubscriptionSKUs.TIER_2) return {
                                disabledButtonText: l,
                                disabledButtonTooltipText: i
                            };
                            let r = null != t ? R.PremiumSubscriptionSKUToPremiumType[t] : null,
                                a = null != r ? R.PremiumTypeOrder[r] : null,
                                s = null != n ? R.PremiumTypeOrder[n] : null;
                            return null != s && null != a && a < s ? (l = C.default.Messages.APPLICATION_STORE_GET_PREMIUM, i = C.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != r && null != n && r === n ? (l = C.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, i = C.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == r && null != n && n === R.PremiumTypes.TIER_2 && (i = C.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
                                disabledButtonText: l,
                                disabledButtonTooltipText: i
                            }
                        }({
                            ctaSubscriptionSkuId: i,
                            currentPremiumType: K
                        }) : null;

                    function Q(e) {
                        var t, n;
                        return (0, l.jsxs)(A.default, {
                            disabled: $,
                            onClick: z,
                            innerClassName: N.premiumSubscribeButton,
                            color: i === R.PremiumSubscriptionSKUs.TIER_1 ? s.Button.Colors.PRIMARY : s.Button.Colors.GREEN,
                            size: w,
                            className: V,
                            wrapperClassName: S,
                            pauseAnimation: !F || x,
                            ...j,
                            ...e,
                            children: [b && (0, l.jsx)(I.default, {
                                className: N.premiumIcon
                            }), (0, l.jsx)("span", {
                                className: r(N.buttonText, y),
                                children: null !== (n = null !== (t = null == J ? void 0 : J.disabledButtonText) && void 0 !== t ? t : L) && void 0 !== n ? n : Y
                            })]
                        })
                    }
                    return (null == J ? void 0 : J.disabledButtonTooltipText) != null ? (0, l.jsx)(s.Tooltip, {
                        text: J.disabledButtonTooltipText,
                        children: Q
                    }) : Q()
                }
        },
        471671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var l = n("627445"),
                i = n.n(l),
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
                    i(!o.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: l,
                        focused: r
                    } = e;
                    return o.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: l,
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
                    return T
                }
            });
            var l, i, r = n("37983"),
                a = n("884691"),
                s = n("414456"),
                o = n.n(s),
                u = n("458960"),
                d = n("77078"),
                c = n("252744"),
                E = n("145131"),
                f = n("396792");
            (l = i || (i = {})).DEFAULT = "default", l.SMALL = "small";
            let h = {
                    default: f.shineDefault,
                    small: f.shineSmall
                },
                _ = {
                    default: f.shineInnerDefault,
                    small: f.shineInnerSmall
                };
            class p extends a.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...l
                    } = this.props;
                    return (0, r.jsx)(u.default.div, {
                        ...l,
                        className: o(f.shineContainer, e, {
                            [f.shinePaused]: n
                        }),
                        children: (0, r.jsx)(E.default, {
                            align: E.default.Align.CENTER,
                            justify: E.default.Justify.CENTER,
                            className: h[t],
                            children: (0, r.jsx)("div", {
                                className: _[t]
                            })
                        })
                    })
                }
            }
            p.defaultProps = {
                shineSize: "default"
            };
            let A = e => {
                let {
                    children: t,
                    className: n,
                    disabled: l,
                    submitting: i,
                    pauseAnimation: s,
                    shineSize: u = "default",
                    shinePaused: E,
                    buttonShineClassName: h,
                    onlyShineOnHover: _,
                    ...A
                } = e, T = a.createRef(), I = (0, c.default)(T), m = !l && !i && !0 !== s && (!_ || I);
                return (0, r.jsxs)(d.Button, {
                    buttonRef: T,
                    ...A,
                    className: o(f.shinyButton, n),
                    disabled: l,
                    submitting: i,
                    children: [t, m ? (0, r.jsx)(p, {
                        shinePaused: E,
                        className: o(f.buttonShine, _ ? f.onlyShineOnHover : void 0, h),
                        shineSize: u
                    }) : null]
                })
            };
            A.ShineSizes = i;
            var T = A
        },
        978679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("998460"),
                a = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, a.default)(s),
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: i,
                            className: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, r.GiftIcon, void 0, {
                    size: 24
                })
        },
        95689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("578478"),
                a = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: r,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: i
                        })
                    })
                }, r.ImageIcon, void 0, {
                    size: 24
                })
        },
        216422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("202909"),
                a = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        viewBox: r = "0 0 24 24",
                        foreground: s,
                        ...o
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(o),
                        width: t,
                        height: n,
                        viewBox: r,
                        children: (0, l.jsx)("path", {
                            className: s,
                            fill: i,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    })
                }, r.NitroWheelIcon, void 0, {
                    size: 24
                })
        },
        486952: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("276825"),
                a = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, l.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: i
                        })
                    })
                }, r.CheckmarkSmallIcon, void 0, {
                    size: 16
                })
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
                    return _
                },
                getPaletteForAvatar: function() {
                    return p
                },
                readFileAsBase64: function() {
                    return T
                },
                dataUriFileSize: function() {
                    return I
                },
                dataUrlToFile: function() {
                    return m
                },
                isPNGAnimated: function() {
                    return R
                }
            }), n("424973"), n("101997"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102");
            var l = n("627445"),
                i = n.n(l),
                r = n("917351"),
                a = n.n(r),
                s = n("48648"),
                o = n.n(s);

            function u(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: l,
                    maxHeight: i,
                    minWidth: r = 0,
                    minHeight: a = 0
                } = e;
                if (t !== l || n !== i) {
                    let e = t > l ? l / t : 1;
                    t = Math.max(Math.round(t * e), r), n = Math.max(Math.round(n * e), a);
                    let s = n > i ? i / n : 1;
                    t = Math.max(Math.round(t * s), r), n = Math.max(Math.round(n * s), a)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function d(e, t) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    l = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return u({
                    width: e,
                    height: t,
                    maxWidth: l,
                    maxHeight: n
                })
            }

            function c(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: l,
                    maxHeight: i
                } = e, r = 1;
                t > l && (r = l / t), t = Math.round(t * r);
                let a = 1;
                return (n = Math.round(n * r)) > i && (a = i / n), Math.min(r * a, 1)
            }

            function E(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: l,
                    maxHeight: i
                } = e;
                return t === n ? 1 : Math.min(Math.max(l / t, i / n), 1)
            }

            function f(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            let h = [
                [0, 0, 0]
            ];

            function _(e, t, n) {
                let l = document.createElement("canvas"),
                    i = l.getContext("2d");
                if (null == i) return h;
                let r = l.width = 0 === e.width ? 128 : e.width,
                    a = l.height = 0 === e.height ? 128 : e.height;
                i.drawImage(e, 0, 0, r, a);
                let s = i.getImageData(0, 0, r, a).data,
                    u = function(e, t, n) {
                        let l = [];
                        for (let i = 0, r, a, s, o, u; i < t; i += n) a = e[(r = 4 * i) + 0], s = e[r + 1], o = e[r + 2], (void 0 === (u = e[r + 3]) || u >= 125) && !(a > 250 && s > 250 && o > 250) && l.push([a, s, o]);
                        return l
                    }(s, r * a, n),
                    d = o(u, t);
                return "boolean" == typeof d ? h : d.palette()
            }
            let p = e => A(e),
                A = a.memoize(e => new Promise((t, n) => {
                    let l = new Image;
                    l.crossOrigin = "Anonymous", l.onerror = e => {
                        n(e), l.onerror = l.onload = null, l = null
                    }, l.onload = () => {
                        t(_(l, 5, 10)), l.onerror = l.onload = null, l = null
                    }, l.src = e
                }));

            function T(e) {
                return new Promise((t, n) => {
                    let l = new FileReader;
                    l.readAsDataURL(e), l.onload = () => {
                        i("string" == typeof l.result, "Result must be a string"), t(l.result)
                    }, l.onerror = e => n(e)
                })
            }

            function I(e) {
                let t = e.split(";base64,");
                return i(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
            }
            async function m(e, t, n) {
                let l = function(e) {
                        let t;
                        t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                        let n = e.split(",")[0].split(":")[1].split(";")[0],
                            l = new Uint8Array(t.length);
                        for (var i = 0; i < t.length; i++) l[i] = t.charCodeAt(i);
                        return new Blob([l], {
                            type: n
                        })
                    }(e),
                    i = await l.arrayBuffer();
                return new File([i], t, {
                    type: n
                })
            }
            async function R(e) {
                var t;
                let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let l = await e.text(),
                    i = l.indexOf("IDAT");
                return !!(i > 0) && -1 !== l.substring(0, i).indexOf("acTL") || !1
            }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return r
                }
            });
            var l = n("917351"),
                i = n.n(l);
            let r = e => "function" == typeof e ? e() : e;
            i.curry((e, t, n) => r(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let l, i;
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("70102");
            var r = n("697218"),
                a = n("615931");
            let s = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                l = e.showModal, s = e.updateModalProps, i = n("551042").closeModal
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
                if (null == l) {
                    null == o || o();
                    return
                }
                let d = l(h, c, a);

                function c() {
                    null == o || o()
                }

                function E(e) {
                    i(d), n(e)
                }

                function f(e) {
                    i(d), r(e)
                }

                function h(e) {
                    return s(d, h, c, {
                        ...a,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: E,
                        reject: f,
                        code: e,
                        mfaCodeHandler: _,
                        isModalOpen: !0
                    })
                }

                function _(e) {
                    let {
                        res: t
                    } = e;
                    s(d, h, c, {
                        ...a,
                        error: t.body.message
                    })
                }
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: l,
                    code: i,
                    mfaCodeHandler: r = o,
                    isModalOpen: a = !1,
                    ...s
                } = e;
                return t(null != i ? {
                    code: i
                } : {}).then(n, e => {
                    var i, o;
                    if (i = e, o = a, i.body && 60008 === i.body.code || o && 429 === i.status) return r({
                        promiseFn: t,
                        resolve: n,
                        reject: l,
                        res: e,
                        ...s
                    });
                    l(e)
                })
            }

            function d(e, t) {
                var n, l;
                let {
                    checkEnabled: i = null !== (l = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== l && l,
                    ...s
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, a.resolveThunk)(i) ? o : u)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...s
                    })
                })
            }
        },
        655518: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("781738");
            var l = {
                escape: e => e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
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
            var l = n("37983");
            n("884691");
            var i = n("551042"),
                r = n("920636");
            let a = (e, t, n) => function(i) {
                return (0, l.jsx)(r.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...i
                })
            };

            function s(e, t, n) {
                return (0, i.openModal)(a(e, t, n), {
                    onCloseCallback: t
                })
            }

            function o(e, t, n, l) {
                return (0, i.updateModal)(e, a(t, n, l))
            }
        }
    }
]);
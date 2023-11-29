(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["43426"], {
        583227: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            }), s("222007"), s("506083");
            var i = s("37983"),
                n = s("884691"),
                a = s("77078"),
                l = s("782340"),
                o = s("579993");
            class r extends n.PureComponent {
                render() {
                    let {
                        title: e,
                        actionText: t,
                        children: s,
                        transitionState: r
                    } = this.props, {
                        error: d,
                        isLoading: u,
                        value: E
                    } = this.state, h = n.Children.count(s) > 0 ? (0, i.jsx)(a.Card, {
                        type: a.Card.Types.WARNING,
                        className: o.card,
                        children: (0, i.jsx)(a.Text, {
                            className: o.warning,
                            variant: "text-md/normal",
                            children: s
                        })
                    }) : null;
                    return (0, i.jsx)(a.ModalRoot, {
                        transitionState: r,
                        children: (0, i.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, i.jsx)(a.ModalHeader, {
                                separator: !1,
                                children: (0, i.jsx)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: e
                                })
                            }), (0, i.jsxs)(a.ModalContent, {
                                children: [h, (0, i.jsxs)(a.FormItem, {
                                    title: l.default.Messages.FORM_LABEL_PASSWORD,
                                    className: o.spacing,
                                    children: [(0, i.jsx)(a.TextInput, {
                                        type: "password",
                                        autoComplete: "off",
                                        autoFocus: !0,
                                        value: E,
                                        onChange: this.handlePasswordChange
                                    }), null != d && "" !== d ? (0, i.jsxs)(a.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-danger",
                                        className: o.error,
                                        children: [" ", d, " "]
                                    }) : null]
                                })]
                            }), (0, i.jsxs)(a.ModalFooter, {
                                children: [(0, i.jsx)(a.Button, {
                                    type: "submit",
                                    disabled: u || 0 === E.length,
                                    children: null != t ? t : l.default.Messages.CONFIRM
                                }), (0, i.jsx)(a.Button, {
                                    onClick: this.handleCancel,
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.PRIMARY,
                                    children: l.default.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        value: "",
                        error: null,
                        isLoading: !1
                    }, this.handleSubmit = e => {
                        e.preventDefault();
                        let {
                            value: t
                        } = this.state, {
                            handleSubmit: s,
                            onClose: i,
                            onError: n
                        } = this.props;
                        this.setState({
                            isLoading: !0
                        }), s(t).then(e => i(null != e ? e : void 0), e => {
                            if (null != e.body) null == n || n(e.body), !this.shouldSkipErrorMsgRender(e.body) && (e.body.password ? this.setState({
                                error: e.body.password,
                                isLoading: !1
                            }) : e.body.message && this.setState({
                                error: e.body.message,
                                isLoading: !1
                            }))
                        }).finally(() => this.setState({
                            isLoading: !1
                        }))
                    }, this.shouldSkipErrorMsgRender = e => {
                        let {
                            skipErrorMsgAbortCode: t
                        } = this.props;
                        return null != t && (null == e ? void 0 : e.code) === t
                    }, this.handleCancel = () => {
                        let {
                            onClose: e
                        } = this.props;
                        e()
                    }, this.handlePasswordChange = e => {
                        let {
                            onPasswordChange: t
                        } = this.props;
                        null == t || t(e), this.setState({
                            value: e
                        })
                    }
                }
            }
            r.key = () => "password-confirm-modal";
            var d = r
        },
        892313: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            });
            var i = s("917351"),
                n = s.n(i),
                a = s("49111"),
                l = s("782340");
            let {
                CAPTCHA: o,
                EMAIL: r,
                PHONE: d,
                REVERIFY_EMAIL: u,
                REVERIFY_PHONE: E
            } = a.VerificationTypes, h = {
                [a.UserRequiredActions.REQUIRE_VERIFIED_EMAIL]: [r],
                [a.UserRequiredActions.REQUIRE_VERIFIED_PHONE]: [d],
                [a.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL]: [u],
                [a.UserRequiredActions.REQUIRE_REVERIFIED_PHONE]: [E],
                [a.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [r, d],
                [a.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [d, u],
                [a.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [r, E],
                [a.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [u, E],
                [a.UserRequiredActions.REQUIRE_CAPTCHA]: [o],
                [a.UserRequiredActions.AGREEMENTS]: []
            };
            var c = {
                isPhoneReverification: (e, t) => void 0 !== e && e.isPhoneVerified() && (t === a.UserRequiredActions.REQUIRE_REVERIFIED_PHONE || t === a.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === a.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
                isEmailReverification: e => e === a.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL || e === a.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === a.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
                getVerificationTypes: e => null == e || "symbol" == typeof e ? [] : h[e],
                getButtonTitle(e) {
                    switch (e) {
                        case a.VerificationTypes.EMAIL:
                            return l.default.Messages.VERIFY_BY_EMAIL;
                        case a.VerificationTypes.PHONE:
                            return l.default.Messages.START_PHONE_VERIFICATION_BUTTON;
                        case a.VerificationTypes.REVERIFY_EMAIL:
                            return l.default.Messages.START_EMAIL_REVERIFICATION_BUTTON;
                        case a.VerificationTypes.REVERIFY_PHONE:
                            return l.default.Messages.START_PHONE_REVERIFICATION_BUTTON;
                        default:
                            return l.default.Messages.START_VERIFICATION_BUTTON
                    }
                },
                areVerificationTypesEqual: (e, t) => n.isEqual(e, t)
            }
        },
        601745: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return R
                }
            }), s("222007");
            var i = s("37983"),
                n = s("884691"),
                a = s("446674"),
                l = s("583227"),
                o = s("599417"),
                r = s("878720"),
                d = s("330387"),
                u = s("697218"),
                E = s("419522"),
                h = s("892313"),
                c = s("782340"),
                R = n.forwardRef(function(e, t) {
                    let {
                        onAddedPhone: s,
                        onClose: R,
                        transitionState: I,
                        reason: f
                    } = e, _ = (0, a.useStateFromStores)([u.default], () => u.default.getCurrentUser()), p = (0, a.useStateFromStores)([d.default], () => d.default.getAction()), [m, N] = n.useState(null), [g, A] = n.useState(null), [C, P] = n.useState(null), [T, S] = n.useState(!1), O = n.useCallback(async e => {
                        S(!0);
                        try {
                            h.default.isPhoneReverification(_, p) ? await r.default.beginReverifyPhone(e, f) : await r.default.beginAddPhone(e, f), P(null), N(e)
                        } catch (e) {
                            P(new o.default(e))
                        }
                        S(!1)
                    }, [_, f, p]), M = n.useCallback(async e => {
                        if (null != m && null != _) {
                            S(!0);
                            try {
                                let {
                                    token: t
                                } = await r.default.verifyPhone(m, e);
                                P(null), A(t)
                            } catch (e) {
                                P(new o.default(e))
                            }
                            S(!1)
                        }
                    }, [_, m]), y = n.useCallback(async e => {
                        null != g && (h.default.isPhoneReverification(_, p) ? await r.default.reverifyPhone(g, e, f) : await r.default.addPhone(g, e, f), null == s || s(), R())
                    }, [s, R, g, f, _, p]);
                    return null != g ? (0, i.jsx)(l.default, {
                        onClose: R,
                        transitionState: I,
                        title: c.default.Messages.USER_SETTINGS_EDIT_ACCOUNT_PASSWORD_LABEL,
                        handleSubmit: y
                    }) : (0, i.jsx)(E.default, {
                        onClose: R,
                        transitionState: I,
                        error: null == C ? void 0 : C.getAnyErrorMessage(),
                        working: T,
                        validPhone: null != m,
                        onAddPhone: O,
                        onVerifyPhone: M
                    })
                })
        },
        794851: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            }), s("222007");
            var i = s("37983"),
                n = s("884691"),
                a = s("414456"),
                l = s.n(a),
                o = s("592861"),
                r = s("77078"),
                d = s("189613"),
                u = s("145131"),
                E = s("461380"),
                h = s("782340"),
                c = s("323299"),
                R = s("212029"),
                I = s("926622");
            class f extends n.PureComponent {
                render() {
                    let {
                        countryCode: e,
                        phone: t,
                        open: s
                    } = this.state, {
                        className: n,
                        submitting: a
                    } = this.props, [, o] = e.split("+");
                    return (0, i.jsxs)(u.default, {
                        className: l(c.phoneField, R.elevationLow, n),
                        align: u.default.Align.CENTER,
                        grow: 0,
                        children: [(0, i.jsxs)(r.Button, {
                            size: r.ButtonSizes.SMALL,
                            className: c.countryButton,
                            color: r.ButtonColors.PRIMARY,
                            innerClassName: c.countryButtonInner,
                            onClick: this.handleTogglePopout,
                            children: [(0, i.jsxs)(u.default, {
                                className: l(c.countryCodeContainer, I.marginReset),
                                justify: u.default.Justify.CENTER,
                                children: [(0, i.jsx)("div", {
                                    className: c.plusSign,
                                    children: "+"
                                }), (0, i.jsx)("div", {
                                    className: c.countryCode,
                                    children: o
                                })]
                            }), (0, i.jsx)(E.default, {
                                foreground: c.phoneFieldExpand,
                                expanded: s,
                                width: 16,
                                height: 16
                            })]
                        }), (0, i.jsx)("input", {
                            "aria-label": h.default.Messages.PHONE_VERIFICATION_PHONE_LABEL,
                            className: c.inputField,
                            value: t,
                            onChange: this.handleChange,
                            onKeyPress: this.handleKeyPress,
                            autoFocus: !0
                        }), (0, i.jsx)(r.Button, {
                            className: c.sendButton,
                            size: r.ButtonSizes.SMALL,
                            submitting: a,
                            onClick: this.handleSubmit,
                            children: h.default.Messages.SEND
                        }), s ? (0, i.jsx)(d.default, {
                            onClick: this.handleClick
                        }) : null]
                    })
                }
                closePopout() {
                    this.state.open && this.setState({
                        open: !1
                    })
                }
                constructor(e) {
                    super(e), this.handleChange = e => {
                        this.closePopout(), this.setState({
                            phone: e.currentTarget.value
                        })
                    }, this.handleKeyPress = e => {
                        this.closePopout(), 13 === e.which && (e.preventDefault(), this.handleSubmit())
                    }, this.handleSubmit = () => {
                        let {
                            onSubmit: e,
                            submitting: t
                        } = this.props, {
                            countryCode: s,
                            phone: i
                        } = this.state;
                        !t && (null == e || e("".concat(s).concat(i)))
                    }, this.handleTogglePopout = () => {
                        this.setState({
                            open: !this.state.open
                        })
                    }, this.handleClick = e => {
                        let [t, s] = e.code.split(" ");
                        this.setState({
                            open: !1,
                            countryCode: t,
                            phone: null != s ? s : ""
                        })
                    };
                    let t = o.default.find(e => "United States" === e.name),
                        [s, i] = t.phoneCountryCode.split(" ");
                    this.state = {
                        countryCode: s,
                        phone: null != i ? i : "",
                        open: !1
                    }
                }
            }
            var _ = f
        },
        419522: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return p
                }
            }), s("222007");
            var i = s("37983"),
                n = s("884691"),
                a = s("414456"),
                l = s.n(a),
                o = s("748820"),
                r = s("759843"),
                d = s("77078"),
                u = s("794538"),
                E = s("145131"),
                h = s("794851"),
                c = s("782340"),
                R = s("922833"),
                I = s("173791"),
                f = s("926622");
            class _ extends n.PureComponent {
                async componentDidMount() {
                    let [e, {
                        default: t
                    }] = await Promise.all([s.el("432201").then(s.t.bind(s, "432201", 19)), s.el("230265").then(s.t.bind(s, "230265", 23))]);
                    this._animItem = t.loadAnimation({
                        container: this._lottieRef,
                        renderer: "svg",
                        loop: !0,
                        autoplay: !1,
                        animationData: e
                    })
                }
                componentWillUnmount() {
                    null != this._animItem && (this._animItem.destroy(), this._animItem = void 0)
                }
                render() {
                    let e, t, s;
                    let {
                        error: n,
                        working: a,
                        transitionState: o,
                        validPhone: _
                    } = this.props;
                    return e = null != n && "" !== n ? (0, i.jsx)("div", {
                        className: l(R.description, R.error, f.marginBottom20),
                        children: n
                    }) : _ ? (0, i.jsx)("div", {
                        className: l(R.description, f.marginBottom20),
                        children: c.default.Messages.VERIFICATION_PHONE_DESCRIPTION
                    }) : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            className: l(R.description, f.marginBottom20),
                            children: c.default.Messages.ENTER_PHONE_DESCRIPTION
                        }), (0, i.jsx)("div", {
                            className: l(R.description, f.marginBottom20),
                            children: c.default.Messages.ENTER_PHONE_DESCRIPTION_NOTE.format()
                        })]
                    }), t = _ ? (0, i.jsxs)(E.default, {
                        className: R.field,
                        direction: E.default.Direction.VERTICAL,
                        align: E.default.Align.CENTER,
                        children: [(0, i.jsx)(u.default, {
                            onSubmit: this.handleVerifyPhone
                        }), (0, i.jsx)(d.Button, {
                            className: f.marginTop8,
                            size: d.ButtonSizes.SMALL,
                            look: d.ButtonLooks.LINK,
                            color: d.ButtonColors.PRIMARY,
                            onClick: this.handleResendCode,
                            children: c.default.Messages.RESEND_CODE
                        })]
                    }) : (0, i.jsx)(h.default, {
                        className: R.field,
                        onSubmit: this.handleAddPhone,
                        submitting: a
                    }), s = _ ? c.default.Messages.VERIFICATION_PHONE_TITLE : c.default.Messages.ENTER_PHONE_TITLE, (0, i.jsxs)(d.ModalRoot, {
                        impression: {
                            impressionName: r.ImpressionNames.USER_VERIFY_PHONE
                        },
                        transitionState: o,
                        className: l(R.phoneVerificationModal, I.vertical, I.alignCenter, I.justifyCenter, f.marginTop60),
                        "aria-labelledby": this.headerId,
                        children: [(0, i.jsx)("div", {
                            className: R.animationContainer,
                            ref: this.setLottieRef
                        }), (0, i.jsx)("div", {
                            className: l(R.title, f.marginBottom8),
                            id: this.headerId,
                            children: s
                        }), e, t]
                    })
                }
                constructor(e) {
                    super(e), this._animItem = null, this.headerId = (0, o.v4)(), this.setLottieRef = e => {
                        this._lottieRef = e
                    }, this.handleAddPhone = e => {
                        this.state.animated || null == this._animItem ? this.setState({
                            phone: e
                        }) : (this._animItem.play(), this.setState({
                            animated: !0,
                            phone: e
                        }));
                        let {
                            onAddPhone: t
                        } = this.props;
                        null == t || t(e)
                    }, this.handleVerifyPhone = e => {
                        let {
                            onVerifyPhone: t
                        } = this.props;
                        null == t || t(e)
                    }, this.handleResendCode = () => {
                        let {
                            onAddPhone: e
                        } = this.props;
                        null == e || e(this.state.phone)
                    }, this.state = {
                        animated: !1,
                        phone: ""
                    }
                }
            }
            var p = _
        }
    }
]);
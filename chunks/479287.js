            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return x
                }
            }), s("781738");
            var a = s("37983"),
                n = s("884691"),
                r = s("414456"),
                o = s.n(r),
                l = s("446674"),
                i = s("77078"),
                u = s("437822"),
                d = s("152434"),
                c = s("21572"),
                h = s("24287"),
                f = s("878720"),
                m = s("25033"),
                p = s("589252"),
                C = s("161778"),
                S = s("271938"),
                g = s("476108"),
                T = s("124969"),
                A = s("659500"),
                N = s("439932"),
                E = s("49111"),
                _ = s("782340"),
                M = s("698995"),
                O = s("926622");
            class I extends n.PureComponent {
                componentDidMount() {
                    window.addEventListener("keydown", this.handleTabOrEnter)
                }
                componentDidUpdate(e) {
                    let {
                        authenticated: t,
                        transitionTo: s
                    } = this.props;
                    if (t && !e.authenticated && s(E.Routes.APP), e.errors !== this.props.errors) {
                        var a, n, r;
                        this.hasError("password") ? null === (a = this.passwordRef) || void 0 === a || a.focus() : this.hasError("email") || this.hasError("login") ? null === (n = this.loginRef) || void 0 === n || n.focus() : this.hasError("code") && (null === (r = this.codeRef) || void 0 === r || r.focus())
                    }
                }
                componentWillUnmount() {
                    window.removeEventListener("keydown", this.handleTabOrEnter)
                }
                hasError(e) {
                    return null != this.props.errors[e]
                }
                renderDefaultForm() {
                    var e;
                    let {
                        country: t
                    } = this.props, s = !this.hasError("email") && this.hasError("password"), r = (0, a.jsxs)(n.Fragment, {
                        children: [(0, a.jsx)(T.Title, {
                            className: o(O.marginBottom8, M.title),
                            children: _.default.Messages.MULTI_ACCOUNT_LOGIN_TITLE
                        }, "title"), (0, a.jsx)(i.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            className: M.subtitle,
                            children: _.default.Messages.MULTI_ACCOUNT_LOGIN_SUBTITLE
                        })]
                    });
                    return (0, a.jsxs)("div", {
                        className: M.mainLoginContainer,
                        children: [r, (0, a.jsxs)(T.Block, {
                            className: M.loginForm,
                            children: [(0, a.jsx)(p.default, {
                                alpha2: t.alpha2,
                                countryCode: t.code.split(" ")[0],
                                className: O.marginBottom20,
                                label: _.default.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
                                error: null !== (e = this.renderError("login")) && void 0 !== e ? e : this.renderError("email"),
                                onChange: (e, t) => this.setState({
                                    login: e,
                                    loginPrefix: t
                                }),
                                setRef: this.setLoginRef,
                                autoCapitalize: "none",
                                autoComplete: "off",
                                autoCorrect: "off",
                                spellCheck: "false",
                                value: this.state.login,
                                autoFocus: !s,
                                required: !0
                            }), (0, a.jsx)(T.Input, {
                                label: _.default.Messages.FORM_LABEL_PASSWORD,
                                error: this.renderError("password"),
                                onChange: e => this.setState({
                                    password: e
                                }),
                                name: "password",
                                type: "password",
                                setRef: this.setPasswordRef,
                                autoComplete: "off",
                                spellCheck: "false",
                                autoFocus: s,
                                value: this.state.password,
                                required: !0
                            }), (0, a.jsx)(T.Button, {
                                onClick: this.handleForgotPassword,
                                look: i.Button.Looks.LINK,
                                color: i.Button.Colors.LINK,
                                className: o(O.marginTop4),
                                children: _.default.Messages.FORGOT_PASSWORD
                            })]
                        })]
                    })
                }
                renderDefault() {
                    let {
                        authBoxClassName: e,
                        loginStatus: t,
                        closeLogin: s,
                        theme: n
                    } = this.props;
                    return (0, a.jsxs)("div", {
                        className: M.pageContainer,
                        children: [(0, a.jsx)(T.default, {
                            tag: "form",
                            className: e,
                            expanded: !0,
                            theme: n,
                            children: this.renderDefaultForm()
                        }), (0, a.jsxs)("div", {
                            "data-theme": n,
                            className: o((0, N.getThemeClass)(n), M.navRow),
                            children: [(0, a.jsx)(i.Button, {
                                type: "button",
                                look: i.Button.Looks.LINK,
                                "aria-label": "back",
                                onClick: s,
                                size: i.Button.Sizes.SMALL,
                                className: o((0, N.getThemeClass)(n), M.backButton),
                                children: _.default.Messages.BACK
                            }), (0, a.jsx)(i.Button, {
                                "aria-label": "continue",
                                submitting: t === E.LoginStates.LOGGING_IN,
                                color: i.Button.Colors.BRAND,
                                onClick: this.handleLogin,
                                className: M.continueButton,
                                children: _.default.Messages.CONTINUE
                            })]
                        })]
                    })
                }
                renderMFA() {
                    let e = {
                        ticket: this.props.mfaTicket,
                        methods: this.props.mfaMethods
                    };
                    return (0, a.jsx)(T.default, {
                        style: {
                            padding: 0
                        },
                        theme: this.props.theme,
                        children: (0, a.jsx)(h.MFASlides, {
                            mfaFinish: this.handleTokenSubmitMFA,
                            request: e,
                            onEarlyClose: () => {
                                this.handleReset()
                            },
                            width: 480
                        })
                    })
                }
                renderDisabledAccount() {
                    let {
                        authBoxClassName: e,
                        theme: t
                    } = this.props, s = this.props.loginStatus === E.LoginStates.ACCOUNT_DISABLED, n = s ? _.default.Messages.ACCOUNT_DISABLED_TITLE : _.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_TITLE, r = s ? _.default.Messages.ACCOUNT_DISABLED_DESCRIPTION : _.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_DESCRIPTION;
                    return (0, a.jsxs)(T.default, {
                        tag: "form",
                        onSubmit: this.handleReset,
                        className: e,
                        theme: t,
                        children: [(0, a.jsx)(T.Title, {
                            className: O.marginBottom8,
                            children: n
                        }), (0, a.jsx)(T.SubTitle, {
                            className: O.marginBottom20,
                            children: r
                        }), (0, a.jsxs)(T.Block, {
                            children: [(0, a.jsx)(i.Button, {
                                color: i.Button.Colors.BRAND,
                                type: "submit",
                                fullWidth: !0,
                                children: _.default.Messages._RETURN_TO_LOGIN
                            }), (0, a.jsx)("div", {
                                className: o(O.marginTop8, M.needAccount),
                                children: _.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_CANCEL.format({
                                    onClick: this.handleCancelAccountDeletion
                                })
                            })]
                        })]
                    })
                }
                renderResetPhonePassword() {
                    let {
                        resetPasswordPhoneToken: e
                    } = this.state;
                    return (0, a.jsx)(d.default, {
                        resetToken: e,
                        onLoginSuccess: e => {
                            u.default.switchAccountToken(e)
                        },
                        ...this.props
                    })
                }
                renderPhonePasswordRecovery() {
                    let {
                        authBoxClassName: e
                    } = this.props, {
                        phoneVerifyError: t
                    } = this.state;
                    return (0, a.jsx)(T.default, {
                        tag: "form",
                        className: e,
                        children: (0, a.jsx)("div", {
                            className: O.marginTop20,
                            children: (0, a.jsx)(c.default, {
                                title: _.default.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_TITLE,
                                subtitle: _.default.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_SUBTITLE_RESEND.format({
                                    onResendClick: this.handleResendCode
                                }),
                                error: t,
                                onSubmit: this.handlePasswordReset,
                                onCancel: void 0
                            })
                        })
                    })
                }
                render() {
                    let {
                        loginStatus: e
                    } = this.props;
                    if (null != this.state.resetPasswordPhoneToken) return this.renderResetPhonePassword();
                    switch (e) {
                        case E.LoginStates.LOGGING_IN_MFA_SMS:
                        case E.LoginStates.MFA_SMS_STEP:
                        case E.LoginStates.LOGGING_IN_MFA:
                        case E.LoginStates.MFA_STEP:
                            return this.renderMFA();
                        case E.LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION:
                        case E.LoginStates.ACCOUNT_DISABLED:
                            return this.renderDisabledAccount();
                        case E.LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                            return this.renderPhonePasswordRecovery();
                        case E.LoginStates.LOGGING_IN:
                        case E.LoginStates.NONE:
                        default:
                            return this.renderDefault()
                    }
                }
                constructor(e) {
                    super(e), this.handleAuthToken = async e => {
                        await u.default.loginToken(e, !1)
                    }, this.handleTabOrEnter = e => {
                        if ("Tab" === e.key && !e.shiftKey && e.target === this.loginRef) {
                            var t;
                            null === (t = this.passwordRef) || void 0 === t || t.focus(), e.stopPropagation(), e.preventDefault()
                        }
                        "Enter" === e.key && (e.target === this.loginRef || e.target === this.passwordRef) && (this.handleLogin(), e.stopPropagation(), e.preventDefault())
                    }, this.setLoginRef = e => {
                        this.loginRef = e
                    }, this.setPasswordRef = e => {
                        this.passwordRef = e
                    }, this.setCodeRef = e => {
                        this.codeRef = e
                    }, this.getFullLogin = () => {
                        let {
                            loginPrefix: e,
                            login: t
                        } = this.state;
                        return e + t
                    }, this.renderError = e => {
                        let {
                            errors: t
                        } = this.props;
                        if (this.hasError(e)) {
                            let s = t[e];
                            return Array.isArray(s) ? s[0] : s
                        }
                        return null
                    }, this.handleForgotPassword = async e => {
                        var t;
                        null == e || e.preventDefault(), null === (t = this.loginRef) || void 0 === t || t.focus();
                        let s = this.getFullLogin();
                        try {
                            A.ComponentDispatch.dispatch(E.ComponentActions.WAVE_EMPHASIZE), await u.default.forgotPassword(s), (0, i.openModal)(e => (0, a.jsx)(i.ConfirmModal, {
                                header: _.default.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_HEADER,
                                confirmText: _.default.Messages.OKAY,
                                confirmButtonColor: i.Button.Colors.BRAND,
                                ...e,
                                children: (0, a.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    children: _.default.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_BODY.format({
                                        email: s
                                    })
                                })
                            }))
                        } catch {}
                    }, this.handleLogin = e => {
                        let {
                            password: t,
                            undelete: s
                        } = this.state;
                        null != e && e.preventDefault(), u.default.login({
                            login: this.getFullLogin(),
                            password: t,
                            undelete: s,
                            isMultiAccount: !0
                        })
                    }, this.handlePasswordReset = async e => {
                        this.setState({
                            phoneVerifyError: null
                        });
                        try {
                            let {
                                token: t
                            } = await f.default.verifyPhone(this.getFullLogin(), e, !1, !0);
                            this.setState({
                                resetPasswordPhoneToken: t
                            })
                        } catch (e) {
                            null != e.body && null != e.body.message && this.setState({
                                phoneVerifyError: e.body.message
                            })
                        }
                    }, this.handleTokenSubmitMFA = e => {
                        let {
                            mfaType: t,
                            data: s,
                            ticket: a
                        } = e;
                        return u.default.loginMFAv2({
                            code: s,
                            ticket: a,
                            mfaType: t,
                            isMultiAccount: !0
                        })
                    }, this.handleResendCode = () => {
                        f.default.resendCode(this.getFullLogin())
                    }, this.handleReset = e => {
                        null != e && e.preventDefault(), u.default.loginReset(!0), this.setState({
                            password: "",
                            loginPrefix: "",
                            login: "",
                            code: "",
                            smsCode: "",
                            undelete: !1,
                            resetPasswordPhoneToken: null
                        })
                    }, this.handleCancelAccountDeletion = () => {
                        this.setState({
                            undelete: !0
                        }, this.handleLogin)
                    }, this.state = {
                        loginPrefix: "",
                        login: "",
                        password: "",
                        code: "",
                        smsCode: "",
                        phoneVerifyError: null,
                        resetPasswordPhoneToken: null,
                        undelete: !1
                    }
                }
            }
            I.defaultProps = {
                transitionTo: e => s.g.location.assign(e),
                replaceWith: e => s.g.location.replace(e)
            };
            var x = function(e) {
                let t = (0, l.useStateFromStoresObject)([g.default, S.default, m.default, C.default], () => ({
                    authenticated: S.default.isAuthenticated(),
                    loginStatus: S.default.getLoginStatus(),
                    mfaTicket: S.default.getMFATicket(),
                    mfaSMS: S.default.getMFASMS(),
                    maskedPhone: S.default.getMaskedPhone(),
                    mfaMethods: S.default.getMFAMethods(),
                    errors: S.default.getErrors(),
                    defaultRoute: g.default.defaultRoute,
                    country: m.default.getCountryCode(),
                    theme: C.default.theme
                }));
                return (0, a.jsx)(I, {
                    ...e,
                    ...t
                })
            }
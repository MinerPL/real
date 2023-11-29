(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["80683"], {
        245288: function(e, t, s) {
            "use strict";
            e.exports = s.p + "41d28dc5d2c29dc4b122.svg"
        },
        314837: function(e, t, s) {
            "use strict";
            e.exports = s.p + "c54752c825291a698843.svg"
        },
        152434: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            }), s("781738");
            var a = s("37983"),
                n = s("884691"),
                r = s("414456"),
                o = s.n(r),
                l = s("730290"),
                i = s("394846"),
                u = s("446674"),
                d = s("913144"),
                c = s("437822"),
                h = s("457108"),
                f = s("724038"),
                m = s("24287"),
                p = s("970366"),
                C = s("271938"),
                S = s("124969"),
                g = s("659500"),
                T = s("49111"),
                A = s("782340"),
                N = s("926622");
            u.default.initialize();
            class E extends n.PureComponent {
                componentDidMount() {
                    (0, p.trackAppUIViewed)("reset_password")
                }
                renderPasswordReset() {
                    let {
                        password: e,
                        error: t,
                        hasCancel: n
                    } = this.state, r = this.isSubmitting(), o = null != t ? t : this.renderError("password");
                    return (0, a.jsxs)(S.default, {
                        onSubmit: this.handleSubmit,
                        tag: "form",
                        children: [(0, a.jsx)("img", {
                            alt: "",
                            src: null == o ? s("245288") : s("314837"),
                            className: N.marginBottom20
                        }), (0, a.jsx)(S.Title, {
                            children: A.default.Messages.RESET_PASSWORD_TITLE
                        }), (0, a.jsxs)(S.Block, {
                            className: N.marginTop20,
                            children: [(0, a.jsx)(S.Input, {
                                label: A.default.Messages.FORM_LABEL_NEW_PASSWORD,
                                className: N.marginBottom20,
                                name: "password",
                                value: e,
                                onChange: e => this.setState({
                                    password: e
                                }),
                                error: o,
                                type: "password"
                            }), (0, a.jsx)(S.Button, {
                                type: "submit",
                                submitting: r,
                                children: A.default.Messages.CHANGE_PASSWORD
                            }), n ? (0, a.jsx)(S.Button, {
                                className: N.marginTop8,
                                onClick: this.handleGoToLogin,
                                submitting: r,
                                color: S.Button.Colors.PRIMARY,
                                children: A.default.Messages.CANCEL
                            }) : null]
                        })]
                    })
                }
                renderMFA() {
                    let e = {
                        ticket: this.props.mfaTicket,
                        methods: this.props.mfaMethods
                    };
                    return (0, a.jsx)(S.default, {
                        style: {
                            padding: 0
                        },
                        children: (0, a.jsx)(m.MFASlides, {
                            mfaFinish: e => {
                                let {
                                    mfaType: t,
                                    data: s
                                } = e;
                                return this.handleTokenSubmitMFAv2(t, s)
                            },
                            request: e,
                            onEarlyClose: () => {
                                d.default.dispatch({
                                    type: "LOGIN_RESET"
                                })
                            },
                            width: 480
                        })
                    })
                }
                renderSucceeded() {
                    return (0, a.jsxs)(S.default, {
                        children: [(0, a.jsx)("img", {
                            alt: "",
                            src: s("245288"),
                            className: o(N.marginBottom20, i.isMobile ? N.marginTop20 : "")
                        }), (0, a.jsx)(S.Title, {
                            className: N.marginBottom40,
                            children: A.default.Messages.RESET_PASSWORD_SUCCESS_TITLE
                        }), (0, a.jsx)(S.Button, {
                            onClick: this.handleOpenApp,
                            children: A.default.Messages.VERIFICATION_OPEN_DISCORD
                        })]
                    })
                }
                render() {
                    return this.state.success ? this.renderSucceeded() : null != this.props.mfaTicket && "" !== this.props.mfaTicket ? this.renderMFA() : this.renderPasswordReset()
                }
                constructor(e) {
                    var t;
                    super(e), this.handleSubmit = async e => {
                        let {
                            location: t,
                            onLoginSuccess: s,
                            source: a,
                            resetToken: n
                        } = this.props, {
                            password: r,
                            error: o
                        } = this.state;
                        if (null != e && e.preventDefault(), 0 === r.length) {
                            this.setState({
                                error: A.default.Messages.PASSWORD_REQUIRED
                            }), g.ComponentDispatch.dispatch(T.ComponentActions.WAVE_EMPHASIZE);
                            return
                        }
                        null != o && this.setState({
                            error: null
                        });
                        let l = n;
                        if (null != t && (l = (0, h.default)(t)), null != l) {
                            this.setState({
                                working: !0
                            });
                            try {
                                let {
                                    result: e,
                                    sms: t,
                                    webauthn: n,
                                    ticket: o,
                                    token: i,
                                    totp: u,
                                    backup: h
                                } = await c.default.resetPassword(l, r, a);
                                e === c.PasswordResetResult.MFA ? d.default.dispatch({
                                    type: "LOGIN_MFA_STEP",
                                    ticket: o,
                                    sms: t,
                                    webauthn: n,
                                    totp: u,
                                    backup: h
                                }) : null != s ? s(i) : (d.default.dispatch({
                                    type: "LOGIN_SUCCESS",
                                    token: i
                                }), this.handlePasswordChangeSuccess())
                            } catch (e) {}
                            this.setState({
                                working: !1
                            })
                        }
                    }, this.handleTokenSubmitMFAv2 = (e, t) => {
                        let {
                            location: s,
                            mfaTicket: a,
                            onLoginSuccess: n,
                            resetToken: r,
                            source: o
                        } = this.props, {
                            password: l
                        } = this.state;
                        if (0 === l.length) return d.default.dispatch({
                            type: "LOGIN_RESET"
                        }), Promise.reject();
                        let i = r;
                        return (null != s && (i = (0, h.default)(s)), null == i) ? (d.default.dispatch({
                            type: "LOGIN_RESET"
                        }), Promise.reject()) : c.default.resetPasswordMFAv2({
                            method: e,
                            code: t,
                            ticket: a,
                            password: l,
                            token: i,
                            source: o
                        }).then(e => {
                            null != n ? n(e) : (d.default.dispatch({
                                type: "LOGIN_SUCCESS",
                                token: e
                            }), this.handlePasswordChangeSuccess())
                        })
                    }, this.handlePasswordChangeSuccess = () => {
                        let {
                            replaceWith: e
                        } = this.props;
                        if (i.isTablet || i.isMobile) {
                            this.setState({
                                success: !0
                            });
                            return
                        }
                        e(T.Routes.APP)
                    }, this.handleGoToLogin = () => {
                        let {
                            transitionTo: e
                        } = this.props;
                        c.default.loginReset(), e(T.Routes.LOGIN)
                    }, this.isSubmitting = () => {
                        let {
                            loginStatus: e
                        } = this.props, {
                            working: t
                        } = this.state;
                        return t || e === T.LoginStates.LOGGING_IN_MFA
                    }, this.handleOpenApp = () => {
                        (0, f.default)("password_reset")
                    }, this.hasError = e => null != this.props.errors[e] || null != this.state.error, this.renderError = e => {
                        let {
                            errors: t
                        } = this.props;
                        if (this.hasError(e)) {
                            let s = t[e];
                            return Array.isArray(s) ? s[0] : s
                        }
                        return null
                    };
                    let s = (null === (t = this.props.location) || void 0 === t ? void 0 : t.search) != null && "" !== this.props.location.search ? (0, l.parse)(this.props.location.search) : null;
                    this.state = {
                        method: "",
                        password: "",
                        code: "",
                        error: null,
                        hasCancel: null != s && null != s.from_login,
                        working: !1,
                        success: !1
                    }
                }
            }
            E.defaultProps = {
                transitionTo: e => s.g.location.assign(e),
                replaceWith: e => s.g.location.replace(e)
            };
            var _ = function(e) {
                let t = (0, u.useStateFromStoresObject)([C.default], () => ({
                    loginStatus: C.default.getLoginStatus(),
                    mfaTicket: C.default.getMFATicket(),
                    errors: C.default.getErrors(),
                    mfaMethods: C.default.getMFAMethods()
                }));
                return (0, a.jsx)(E, {
                    ...e,
                    ...t
                })
            }
        },
        457108: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            });
            var a = s("730290");

            function n(e) {
                let t = null != e.hash && "" !== e.hash ? (0, a.parse)(e.hash) : null;
                if ((null == t ? void 0 : t.token) != null) return t.token;
                let s = null != e.search && "" !== e.search ? (0, a.parse)(e.search) : null;
                return (null == s ? void 0 : s.token) != null ? s.token : null
            }
        },
        21572: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("77078"),
                r = s("794538"),
                o = s("145131"),
                l = s("124969"),
                i = s("782340"),
                u = s("265445"),
                d = s("926622");

            function c(e) {
                let {
                    title: t,
                    subtitle: s,
                    error: c,
                    onSubmit: h,
                    onCancel: f
                } = e;
                return (0, a.jsxs)(o.default, {
                    direction: o.default.Direction.VERTICAL,
                    children: [(0, a.jsx)(l.Title, {
                        className: d.marginBottom8,
                        children: t
                    }), (0, a.jsx)(l.SubTitle, {
                        className: u.subTitle,
                        children: s
                    }), (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(r.default, {
                            inputClassName: u.codeInput,
                            onSubmit: h
                        }), null != c ? (0, a.jsx)(n.Text, {
                            className: u.error,
                            variant: "text-sm/normal",
                            children: c
                        }) : null]
                    }), null != f && (0, a.jsx)(n.Button, {
                        className: u.button,
                        onClick: f,
                        color: n.Button.Colors.PRIMARY,
                        children: i.default.Messages.CANCEL
                    })]
                })
            }
        },
        479287: function(e, t, s) {
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
                        case E.LoginStates.MFA_WEBAUTHN_STEP:
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
        },
        350218: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("393414"),
                r = s("479287"),
                o = s("545358"),
                l = e => {
                    let {
                        onClose: t
                    } = e;
                    return (0, a.jsx)(r.default, {
                        transitionTo: e => {
                            (0, n.transitionTo)(e)
                        },
                        replaceWith: e => {
                            (0, n.replaceWith)(e)
                        },
                        authBoxClassName: o.card,
                        closeLogin: t
                    })
                }
        },
        851460: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                MultiAccountActionType: function() {
                    return a
                },
                default: function() {
                    return x
                }
            }), s("506083");
            var a, n, r = s("37983"),
                o = s("884691"),
                l = s("414456"),
                i = s.n(l),
                u = s("446674"),
                d = s("77078"),
                c = s("437822"),
                h = s("272030"),
                f = s("766274"),
                m = s("271938"),
                p = s("102985"),
                C = s("697218"),
                S = s("433487"),
                g = s("599110"),
                T = s("158998"),
                A = s("694787"),
                N = s("770032"),
                E = s("927101"),
                _ = s("49111"),
                M = s("782340"),
                O = s("31295");

            function I(e) {
                let {
                    actionText: t,
                    user: s,
                    onAction: a
                } = e, {
                    currentUser: n,
                    hidePrivateData: o,
                    isAuthenticated: l
                } = (0, u.useStateFromStoresObject)([C.default, p.default, m.default], () => ({
                    currentUser: C.default.getCurrentUser(),
                    hidePrivateData: p.default.hidePersonalInformation,
                    isAuthenticated: m.default.isAuthenticated()
                })), E = new f.default(s), I = l && (null == n ? void 0 : n.id) === E.id, x = s.tokenStatus === N.MultiAccountTokenStatus.INVALID, R = o || E.isPomelo() ? null : "#".concat(E.discriminator), L = null;
                return I ? L = (0, r.jsx)(d.Text, {
                    variant: "text-sm/semibold",
                    className: O.hintText,
                    color: "text-positive",
                    children: M.default.Messages.SWITCH_ACCOUNTS_ACTIVE_ACCOUNT
                }) : x && (L = (0, r.jsx)(d.Text, {
                    variant: "text-sm/semibold",
                    className: O.hintText,
                    color: "text-danger",
                    children: M.default.Messages.SWITCH_ACCOUNTS_INVALID_TOKEN
                })), (0, r.jsx)("div", {
                    className: O.accountCard,
                    children: (0, r.jsxs)("div", {
                        className: O.userDetails,
                        children: [(0, r.jsx)(d.Avatar, {
                            src: E.getAvatarURL(void 0, 40),
                            size: d.AvatarSizes.SIZE_40,
                            "aria-label": s.username
                        }), (0, r.jsxs)("div", {
                            className: i(O.usernameSection, {
                                [O.hasActionMaxWidth]: !I
                            }),
                            children: [(0, r.jsxs)("div", {
                                className: O.username,
                                children: [(0, r.jsx)(d.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    className: O.textOverflow,
                                    children: T.default.getUserTag(E, {
                                        mode: "username",
                                        identifiable: o ? "never" : "always"
                                    })
                                }), (0, r.jsx)(d.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: R
                                })]
                            }), L]
                        }), (0, r.jsxs)("div", {
                            className: O.userActions,
                            children: [!I && (0, r.jsx)(d.Button, {
                                onClick: function() {
                                    if (x) {
                                        a(0, s.id);
                                        return
                                    }
                                    g.default.track(_.AnalyticEvents.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                        location: {
                                            section: _.AnalyticsSections.MANAGE_ACCOUNTS_MODAL
                                        }
                                    }), A.switchAccount(s.id), a(1, s.id)
                                },
                                color: d.Button.Colors.PRIMARY,
                                children: x ? M.default.Messages.SWITCH_ACCOUNTS_ACTION_LOG_IN : t
                            }), (0, r.jsx)(d.Button, {
                                className: O.userActionMenu,
                                onClick: function(e) {
                                    (0, h.openContextMenu)(e, e => {
                                        let {
                                            onSelect: t
                                        } = e;
                                        return (0, r.jsx)(d.Menu, {
                                            "aria-label": M.default.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNT,
                                            navId: "manage-multi-account",
                                            onClose: h.closeContextMenu,
                                            onSelect: t,
                                            children: (0, r.jsx)(d.MenuItem, {
                                                id: "remove-account",
                                                label: M.default.Messages.SWITCH_ACCOUNTS_REMOVE_ACCOUNT,
                                                action: () => {
                                                    ! function() {
                                                        c.default.logout(null, s.id).finally(() => {
                                                            A.removeAccount(s.id)
                                                        });
                                                        let e = {};
                                                        null != n ? e.section = _.AnalyticsSections.MANAGE_ACCOUNTS_MODAL : e.page = _.PageAnalyticsLocations.LOGIN, g.default.track(_.AnalyticEvents.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
                                                            location: e
                                                        }), a(2, s.id)
                                                    }(), null != t && t()
                                                },
                                                color: "danger"
                                            })
                                        })
                                    })
                                },
                                size: d.Button.Sizes.ICON,
                                look: d.Button.Looks.BLANK,
                                color: d.Button.Colors.WHITE,
                                "aria-label": M.default.Messages.MORE_OPTIONS,
                                children: (0, r.jsx)(S.default, {
                                    className: O.overflowMenuIcon
                                })
                            })]
                        })]
                    })
                })
            }

            function x(e) {
                let {
                    actionText: t,
                    onAction: s
                } = e, {
                    isLoading: a,
                    multiAccountUsers: n
                } = (0, E.useMultiAccountUsers)();
                return (0, r.jsx)("div", {
                    className: O.list,
                    children: a ? (0, r.jsx)(d.Spinner, {}) : n.map((e, a) => (0, r.jsxs)(o.Fragment, {
                        children: [(0, r.jsx)(I, {
                            user: e,
                            actionText: t,
                            onAction: s
                        }, e.id), n.length - 1 !== a && (0, r.jsx)("div", {
                            role: "separator",
                            className: O.separator
                        })]
                    }, e.id))
                })
            }(n = a || (a = {}))[n.LOGIN_REQUIRED = 0] = "LOGIN_REQUIRED", n[n.SWITCHED = 1] = "SWITCHED", n[n.REMOVED = 2] = "REMOVED"
        },
        685807: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return N
                }
            }), s("222007");
            var a, n, r = s("37983"),
                o = s("884691"),
                l = s("759843"),
                i = s("446674"),
                u = s("77078"),
                d = s("913144"),
                c = s("428958"),
                h = s("697218"),
                f = s("555158"),
                m = s("770032"),
                p = s("350218"),
                C = s("851460"),
                S = s("583374"),
                g = s("782340"),
                T = s("635937");
            (n = a || (a = {}))[n.MANAGE_ACCOUNTS = 0] = "MANAGE_ACCOUNTS", n[n.LOGIN = 1] = "LOGIN";
            let A = {
                0: u.ModalSize.SMALL,
                1: u.ModalSize.DYNAMIC
            };

            function N(e) {
                let {
                    transitionState: t,
                    onClose: s
                } = e, [a, n] = o.useState(0), {
                    currentUser: N,
                    multiAccountUsers: E
                } = (0, i.useStateFromStoresObject)([h.default, m.default], () => ({
                    currentUser: h.default.getCurrentUser(),
                    multiAccountUsers: m.default.getUsers()
                })), [_, M] = o.useState(!1), [O, I] = o.useState(""), [x, R] = o.useState(null);
                o.useEffect(() => {
                    if (_) R((0, r.jsx)(f.default, {
                        messageType: f.HelpMessageTypes.ERROR,
                        className: T.infoMessage,
                        children: g.default.Messages.MULTI_ACCOUNT_MAX_ACCOUNTS_ERROR.format({
                            maxNumAccounts: S.MAX_ACCOUNTS
                        })
                    })), I("");
                    else if (null != O) {
                        let e = h.default.getUser(O);
                        null != e && R((0, r.jsx)(f.default, {
                            messageType: f.HelpMessageTypes.POSITIVE,
                            className: T.infoMessage,
                            children: g.default.Messages.MULTI_ACCOUNT_LOGGED_OUT.format({
                                username: e.username
                            })
                        })), M(!1)
                    }
                }, [O, _]), o.useEffect(() => {
                    E.length < S.MAX_ACCOUNTS && M(!1)
                }, [E]), (0, c.default)({
                    type: l.ImpressionTypes.MODAL,
                    name: 0 === a ? l.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING : l.ImpressionNames.USER_LOGIN
                });
                let L = null;
                return 0 === a ? L = (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(u.ModalHeader, {
                        separator: !1,
                        children: (0, r.jsxs)("div", {
                            className: T.header,
                            children: [(0, r.jsx)(u.Heading, {
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: g.default.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS
                            }), (0, r.jsx)(u.Text, {
                                className: T.subheaderText,
                                color: "header-secondary",
                                variant: "text-md/normal",
                                children: g.default.Messages.SWITCH_ACCOUNTS_MODAL_SUBHEADER
                            })]
                        })
                    }), (0, r.jsxs)(u.ModalContent, {
                        children: [x, (0, r.jsx)(C.default, {
                            actionText: g.default.Messages.SWITCH_ACCOUNTS_ACTION_SWITCH,
                            onAction: (e, t) => {
                                switch (e) {
                                    case C.MultiAccountActionType.LOGIN_REQUIRED:
                                        n(1);
                                        break;
                                    case C.MultiAccountActionType.SWITCHED:
                                        s();
                                        break;
                                    case C.MultiAccountActionType.REMOVED:
                                        t === (null == N ? void 0 : N.id) && s(), I(t)
                                }
                            }
                        }), (0, r.jsx)("div", {
                            className: T.actions,
                            children: (0, r.jsx)(u.Button, {
                                look: u.Button.Looks.LINK,
                                color: u.Button.Colors.PRIMARY,
                                onClick: () => {
                                    if (E.length >= S.MAX_ACCOUNTS) {
                                        M(!0);
                                        return
                                    }
                                    n(1)
                                },
                                size: u.Button.Sizes.MEDIUM,
                                children: (0, r.jsx)(u.Text, {
                                    variant: "text-sm/semibold",
                                    children: g.default.Messages.SWITCH_ACCOUNTS_ADD_AN_ACCOUNT_BUTTON
                                })
                            })
                        })]
                    })]
                }) : 1 === a && (L = (0, r.jsx)(p.default, {
                    onClose: () => {
                        d.default.dispatch({
                            type: "CLEAR_AUTHENTICATION_ERRORS"
                        }), n(0)
                    }
                })), (0, r.jsx)(u.ModalRoot, {
                    className: T.modal,
                    transitionState: t,
                    size: A[a],
                    "aria-label": g.default.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS,
                    children: (0, r.jsx)(u.Sequencer, {
                        step: a,
                        steps: [0, 1],
                        children: L
                    })
                })
            }
        },
        345327: function(e, t, s) {
            "use strict";
            var a, n;
            s.r(t), s.d(t, {
                PhoneOrEmailSelectorForceMode: function() {
                    return a
                },
                shouldShowCountryCodeSelector: function() {
                    return l
                }
            }), (n = a || (a = {})).PHONE = "phone", n.EMAIL = "email";
            let r = /^[-() \d]+$/,
                o = e => e.startsWith("+");

            function l(e, t) {
                return "phone" === e ? !o(t) : "email" !== e && !(t.length < 3) && r.test(t)
            }
        },
        467413: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return m
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                r = s("414456"),
                o = s.n(r),
                l = s("301165"),
                i = s("446674"),
                u = s("77078"),
                d = s("206230"),
                c = s("878720"),
                h = s("189613"),
                f = s("393004");

            function m(e) {
                let {
                    show: t,
                    alpha2: s,
                    countryCode: r
                } = e, m = (0, i.useStateFromStores)([d.default], () => d.default.useReducedMotion), p = n.useRef(null), [C, S] = n.useState(0), [g, T] = n.useState(!1);
                n.useEffect(() => {
                    function e() {
                        var e, s;
                        S(t && null !== (s = null === (e = p.current) || void 0 === e ? void 0 : e.getBoundingClientRect().width) && void 0 !== s ? s : 0)
                    }
                    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                }, [t, s, r]);
                let A = (0, l.useSpring)({
                        width: "".concat(C, "px"),
                        immediate: m,
                        onStart: () => {
                            T(!0)
                        },
                        onRest: () => {
                            T(!1)
                        }
                    }),
                    N = e => {
                        c.default.setCountryCode(e)
                    };
                return (0, a.jsx)(u.Popout, {
                    position: "top",
                    renderPopout: e => (0, a.jsx)(h.default, {
                        className: f.popout,
                        onClick: t => {
                            N(t), e.closePopout()
                        }
                    }),
                    children: e => (0, a.jsx)("div", {
                        className: o(f.outerContainer, {
                            [f.hidden]: !(t || g)
                        }),
                        children: (0, a.jsx)(l.animated.div, {
                            className: f.container,
                            style: A,
                            children: (0, a.jsxs)("div", {
                                className: f.innerContainer,
                                ref: p,
                                children: [(0, a.jsxs)(u.Clickable, {
                                    ...e,
                                    className: f.countryCode,
                                    children: [s, " ", r]
                                }), (0, a.jsx)("div", {
                                    className: f.separator
                                })]
                            })
                        })
                    })
                })
            }
        },
        589252: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return f
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                r = s("414456"),
                o = s.n(r),
                l = s("77078"),
                i = s("476765"),
                u = s("345327"),
                d = s("467413"),
                c = s("713186"),
                h = s("905518");

            function f(e) {
                let {
                    alpha2: t,
                    countryCode: s,
                    forceMode: r,
                    label: f,
                    error: m,
                    className: p,
                    required: C,
                    value: S,
                    setRef: g,
                    placeholder: T,
                    autoFocus: A,
                    maxLength: N,
                    spellCheck: E,
                    autoComplete: _,
                    autoCapitalize: M,
                    autoCorrect: O,
                    onChange: I,
                    inputClassName: x
                } = e, R = (0, i.useUID)(), [L, v] = n.useState(!1), j = (0, u.shouldShowCountryCodeSelector)(r, S);
                return (0, a.jsx)(l.FormItem, {
                    title: f,
                    error: m,
                    className: p,
                    required: C,
                    tag: "label",
                    htmlFor: R,
                    children: (0, a.jsxs)("div", {
                        className: o(h.input, c.input, x, {
                            [h.error]: null != m,
                            [h.focused]: L
                        }),
                        children: [(0, a.jsx)(d.default, {
                            show: j,
                            alpha2: t,
                            countryCode: s
                        }), (0, a.jsx)(l.TextInput, {
                            id: R,
                            name: "email",
                            type: r === u.PhoneOrEmailSelectorForceMode.EMAIL ? "email" : "text",
                            value: S,
                            inputRef: g,
                            placeholder: T,
                            "aria-label": f,
                            required: C,
                            onChange: function(e) {
                                let t = (0, u.shouldShowCountryCodeSelector)(r, e) ? s : "";
                                I(e, t)
                            },
                            autoComplete: _,
                            autoCapitalize: M,
                            autoCorrect: O,
                            autoFocus: A,
                            maxLength: N,
                            spellCheck: E,
                            className: c.inputWrapper,
                            inputClassName: c.inputField,
                            onFocus: () => v(!0),
                            onBlur: () => v(!1)
                        })]
                    })
                })
            }
        }
    }
]);
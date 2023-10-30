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
                    return M
                }
            });
            var a = s("37983"),
                n = s("884691"),
                o = s("414456"),
                r = s.n(o),
                l = s("730290"),
                i = s("394846"),
                u = s("446674"),
                d = s("913144"),
                h = s("437822"),
                c = s("457108"),
                f = s("724038"),
                m = s("648498"),
                g = s("24287"),
                p = s("970366"),
                S = s("271938"),
                T = s("124969"),
                N = s("659500"),
                A = s("49111"),
                _ = s("782340"),
                C = s("926622");
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
                    } = this.state, o = this.isSubmitting(), r = null != t ? t : this.renderError("password");
                    return (0, a.jsxs)(T.default, {
                        onSubmit: this.handleSubmit,
                        tag: "form",
                        children: [(0, a.jsx)("img", {
                            alt: "",
                            src: null == r ? s("245288") : s("314837"),
                            className: C.marginBottom20
                        }), (0, a.jsx)(T.Title, {
                            children: _.default.Messages.RESET_PASSWORD_TITLE
                        }), (0, a.jsxs)(T.Block, {
                            className: C.marginTop20,
                            children: [(0, a.jsx)(T.Input, {
                                label: _.default.Messages.FORM_LABEL_NEW_PASSWORD,
                                className: C.marginBottom20,
                                name: "password",
                                value: e,
                                onChange: e => this.setState({
                                    password: e
                                }),
                                error: r,
                                type: "password"
                            }), (0, a.jsx)(T.Button, {
                                type: "submit",
                                submitting: o,
                                children: _.default.Messages.CHANGE_PASSWORD
                            }), n ? (0, a.jsx)(T.Button, {
                                className: C.marginTop8,
                                onClick: this.handleGoToLogin,
                                submitting: o,
                                color: T.Button.Colors.PRIMARY,
                                children: _.default.Messages.CANCEL
                            }) : null]
                        })]
                    })
                }
                renderMFA() {
                    if (this.props.hasLoginExperiment) return this.renderMFAv2();
                    let {
                        error: e
                    } = this.state, t = null != e ? e : this.renderError("code");
                    return (0, a.jsxs)(T.default, {
                        onSubmit: this.handleTokenSubmit,
                        tag: "form",
                        children: [(0, a.jsx)("img", {
                            alt: "",
                            src: null == t ? s("245288") : s("314837"),
                            className: r(C.marginBottom20, i.isMobile ? C.marginTop20 : "")
                        }), (0, a.jsx)(T.Title, {
                            className: C.marginBottom8,
                            children: _.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                        }), (0, a.jsx)(T.SubTitle, {
                            children: _.default.Messages.TWO_FA_ENTER_TOKEN_BODY
                        }), (0, a.jsxs)(T.Block, {
                            className: C.marginTop20,
                            children: [(0, a.jsx)(T.Input, {
                                className: C.marginBottom8,
                                error: t,
                                onChange: e => this.setState({
                                    code: e
                                }),
                                autoComplete: "off",
                                placeholder: _.default.Messages.TWO_FA_AUTH_CODE,
                                spellCheck: "false",
                                maxLength: 10,
                                autoFocus: !0,
                                value: this.state.code
                            }), (0, a.jsx)(T.Button, {
                                type: "submit",
                                submitting: this.isSubmitting(),
                                children: _.default.Messages._LOGIN
                            })]
                        })]
                    })
                }
                renderMFAv2() {
                    let e = {
                        ticket: this.props.mfaTicket,
                        methods: this.props.mfaMethods
                    };
                    return (0, a.jsx)(T.default, {
                        style: {
                            padding: 0
                        },
                        children: (0, a.jsx)(g.MFASlides, {
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
                    return (0, a.jsxs)(T.default, {
                        children: [(0, a.jsx)("img", {
                            alt: "",
                            src: s("245288"),
                            className: r(C.marginBottom20, i.isMobile ? C.marginTop20 : "")
                        }), (0, a.jsx)(T.Title, {
                            className: C.marginBottom40,
                            children: _.default.Messages.RESET_PASSWORD_SUCCESS_TITLE
                        }), (0, a.jsx)(T.Button, {
                            onClick: this.handleOpenApp,
                            children: _.default.Messages.VERIFICATION_OPEN_DISCORD
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
                            password: o,
                            error: r
                        } = this.state;
                        if (null != e && e.preventDefault(), 0 === o.length) {
                            this.setState({
                                error: _.default.Messages.PASSWORD_REQUIRED
                            }), N.ComponentDispatch.dispatch(A.ComponentActions.WAVE_EMPHASIZE);
                            return
                        }
                        null != r && this.setState({
                            error: null
                        });
                        let l = n;
                        if (null != t && (l = (0, c.default)(t)), null != l) {
                            this.setState({
                                working: !0
                            });
                            try {
                                let {
                                    result: e,
                                    sms: t,
                                    webauthn: n,
                                    ticket: r,
                                    token: i,
                                    totp: u,
                                    backup: c
                                } = await h.default.resetPassword(l, o, a);
                                e === h.PasswordResetResult.MFA ? d.default.dispatch({
                                    type: "LOGIN_MFA_STEP",
                                    ticket: r,
                                    sms: t,
                                    webauthn: n,
                                    totp: u,
                                    backup: c
                                }) : null != s ? s(i) : (d.default.dispatch({
                                    type: "LOGIN_SUCCESS",
                                    token: i
                                }), this.handlePasswordChangeSuccess())
                            } catch (e) {}
                            this.setState({
                                working: !1
                            })
                        }
                    }, this.handleTokenSubmit = async e => {
                        let {
                            location: t,
                            mfaTicket: s,
                            onLoginSuccess: a,
                            resetToken: n,
                            source: o
                        } = this.props, {
                            code: r,
                            password: l,
                            error: i
                        } = this.state;
                        if (null != e && e.preventDefault(), 0 === l.length) {
                            this.setState({
                                error: _.default.Messages.PASSWORD_REQUIRED
                            }), N.ComponentDispatch.dispatch(A.ComponentActions.WAVE_EMPHASIZE);
                            return
                        }
                        null != i && this.setState({
                            error: null
                        });
                        let u = n;
                        if (null != t && (u = (0, c.default)(t)), null != u) {
                            this.setState({
                                working: !0
                            });
                            try {
                                let e = await h.default.resetPasswordMFA(r, s, l, u, o);
                                null != a ? a(e) : (d.default.dispatch({
                                    type: "LOGIN_SUCCESS",
                                    token: e
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
                            resetToken: o,
                            source: r
                        } = this.props, {
                            password: l
                        } = this.state;
                        if (0 === l.length) return d.default.dispatch({
                            type: "LOGIN_RESET"
                        }), Promise.reject();
                        let i = o;
                        return (null != s && (i = (0, c.default)(s)), null == i) ? (d.default.dispatch({
                            type: "LOGIN_RESET"
                        }), Promise.reject()) : h.default.resetPasswordMFAv2({
                            method: e,
                            code: t,
                            ticket: a,
                            password: l,
                            token: i,
                            source: r
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
                        e(A.Routes.APP)
                    }, this.handleGoToLogin = () => {
                        let {
                            transitionTo: e
                        } = this.props;
                        h.default.loginReset(), e(A.Routes.LOGIN)
                    }, this.isSubmitting = () => {
                        let {
                            loginStatus: e
                        } = this.props, {
                            working: t
                        } = this.state;
                        return t || e === A.LoginStates.LOGGING_IN_MFA
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
            var M = function(e) {
                let t = (0, u.useStateFromStoresObject)([S.default], () => ({
                        loginStatus: S.default.getLoginStatus(),
                        mfaTicket: S.default.getMFATicket(),
                        errors: S.default.getErrors(),
                        mfaMethods: S.default.getMFAMethods()
                    })),
                    s = m.default.useExperiment({
                        location: "webConnectedReset"
                    }).enabled;
                return (0, a.jsx)(E, {
                    ...e,
                    ...t,
                    hasLoginExperiment: s
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
        479287: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return x
                }
            });
            var a = s("37983"),
                n = s("884691"),
                o = s("414456"),
                r = s.n(o),
                l = s("446674"),
                i = s("77078"),
                u = s("437822"),
                d = s("291850"),
                h = s("152434"),
                c = s("21572"),
                f = s("648498"),
                m = s("24287"),
                g = s("878720"),
                p = s("25033"),
                S = s("589252"),
                T = s("161778"),
                N = s("271938"),
                A = s("476108"),
                _ = s("124969"),
                C = s("659500"),
                E = s("439932"),
                M = s("49111"),
                O = s("782340"),
                L = s("698995"),
                R = s("926622");
            class I extends n.PureComponent {
                componentDidMount() {
                    window.addEventListener("keydown", this.handleTabOrEnter)
                }
                componentDidUpdate(e) {
                    let {
                        authenticated: t,
                        transitionTo: s
                    } = this.props;
                    if (t && !e.authenticated && s(M.Routes.APP), e.errors !== this.props.errors) {
                        var a, n, o;
                        this.hasError("password") ? null === (a = this.passwordRef) || void 0 === a || a.focus() : this.hasError("email") || this.hasError("login") ? null === (n = this.loginRef) || void 0 === n || n.focus() : this.hasError("code") && (null === (o = this.codeRef) || void 0 === o || o.focus())
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
                    } = this.props, s = !this.hasError("email") && this.hasError("password"), o = (0, a.jsxs)(n.Fragment, {
                        children: [(0, a.jsx)(_.Title, {
                            className: r(R.marginBottom8, L.title),
                            children: O.default.Messages.MULTI_ACCOUNT_LOGIN_TITLE
                        }, "title"), (0, a.jsx)(i.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            className: L.subtitle,
                            children: O.default.Messages.MULTI_ACCOUNT_LOGIN_SUBTITLE
                        })]
                    });
                    return (0, a.jsxs)("div", {
                        className: L.mainLoginContainer,
                        children: [o, (0, a.jsxs)(_.Block, {
                            className: L.loginForm,
                            children: [(0, a.jsx)(S.default, {
                                alpha2: t.alpha2,
                                countryCode: t.code.split(" ")[0],
                                className: R.marginBottom20,
                                label: O.default.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
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
                            }), (0, a.jsx)(_.Input, {
                                label: O.default.Messages.FORM_LABEL_PASSWORD,
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
                            }), (0, a.jsx)(_.Button, {
                                onClick: this.handleForgotPassword,
                                look: i.Button.Looks.LINK,
                                color: i.Button.Colors.LINK,
                                className: r(R.marginTop4),
                                children: O.default.Messages.FORGOT_PASSWORD
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
                        className: L.pageContainer,
                        children: [(0, a.jsx)(_.default, {
                            tag: "form",
                            className: e,
                            expanded: !0,
                            theme: n,
                            children: this.renderDefaultForm()
                        }), (0, a.jsxs)("div", {
                            "data-theme": n,
                            className: r((0, E.getThemeClass)(n), L.navRow),
                            children: [(0, a.jsx)(i.Button, {
                                type: "button",
                                look: i.Button.Looks.LINK,
                                "aria-label": "back",
                                onClick: s,
                                size: i.Button.Sizes.SMALL,
                                className: r((0, E.getThemeClass)(n), L.backButton),
                                children: O.default.Messages.BACK
                            }), (0, a.jsx)(i.Button, {
                                "aria-label": "continue",
                                submitting: t === M.LoginStates.LOGGING_IN,
                                color: i.Button.Colors.BRAND,
                                onClick: this.handleLogin,
                                className: L.continueButton,
                                children: O.default.Messages.CONTINUE
                            })]
                        })]
                    })
                }
                renderMFAv2() {
                    let e = {
                        ticket: this.props.mfaTicket,
                        methods: this.props.mfaMethods
                    };
                    return (0, a.jsx)(_.default, {
                        style: {
                            padding: 0
                        },
                        theme: this.props.theme,
                        children: (0, a.jsx)(m.MFASlides, {
                            mfaFinish: this.handleTokenSubmitMFAv2,
                            request: e,
                            onEarlyClose: () => {
                                this.handleReset()
                            },
                            width: 480
                        })
                    })
                }
                renderMFA() {
                    if (this.props.hasLoginExperiment) return this.renderMFAv2();
                    let {
                        loginStatus: e,
                        mfaSMS: t,
                        authBoxClassName: n,
                        theme: o
                    } = this.props;
                    return (0, a.jsxs)(_.default, {
                        onSubmit: this.handleTokenSubmit,
                        tag: "form",
                        className: n,
                        theme: o,
                        children: [(0, a.jsx)("img", {
                            alt: "",
                            src: s("367598"),
                            className: R.marginBottom20
                        }), (0, a.jsx)(_.Title, {
                            className: R.marginBottom8,
                            children: O.default.Messages.TWO_FA
                        }), (0, a.jsx)(_.SubTitle, {
                            children: O.default.Messages.TWO_FA_ENTER_TOKEN_BODY
                        }), (0, a.jsxs)(_.Block, {
                            className: R.marginTop40,
                            children: [(0, a.jsx)(_.Input, {
                                className: R.marginBottom20,
                                error: this.renderError("code"),
                                setRef: this.setCodeRef,
                                onChange: e => this.setState({
                                    code: e
                                }),
                                autoComplete: "off",
                                placeholder: O.default.Messages.TWO_FA_AUTH_CODE,
                                spellCheck: "false",
                                maxLength: 10,
                                autoFocus: !0,
                                label: O.default.Messages.TWO_FA_ENTER_TOKEN_LABEL,
                                value: this.state.code,
                                required: !0
                            }, "totpCode"), (0, a.jsx)(i.Button, {
                                type: "submit",
                                submitting: e === M.LoginStates.LOGGING_IN_MFA,
                                fullWidth: !0,
                                children: O.default.Messages._LOGIN
                            }), t ? (0, a.jsx)(i.Button, {
                                onClick: this.handleToggleSMSLogin,
                                submitting: e === M.LoginStates.LOGGING_IN_MFA_SMS,
                                className: r(L.paddingResetLeft, R.marginTop8),
                                look: i.Button.Looks.LINK,
                                color: i.Button.Colors.LINK,
                                size: i.Button.Sizes.TINY,
                                children: O.default.Messages.MFA_SMS_RECEIVE_CODE
                            }) : null, (0, a.jsx)(i.Button, {
                                look: i.Button.Looks.LINK,
                                color: i.Button.Colors.LINK,
                                className: r(L.paddingResetLeft, {
                                    [R.marginReset]: t,
                                    [R.marginTop8]: !t
                                }),
                                onClick: this.handleReset,
                                size: i.Button.Sizes.TINY,
                                children: O.default.Messages._TWO_FA_LOGIN_FOOTER
                            })]
                        })]
                    })
                }
                renderMFAWebAuthn() {
                    return this.props.hasLoginExperiment ? this.renderMFAv2() : (0, a.jsx)(d.WebAuthnLogin, {
                        loginStatus: M.LoginStates.MFA_STEP,
                        handleReset: this.handleReset,
                        authBoxClassName: void 0
                    })
                }
                renderDisabledAccount() {
                    let {
                        authBoxClassName: e,
                        theme: t
                    } = this.props, s = this.props.loginStatus === M.LoginStates.ACCOUNT_DISABLED, n = s ? O.default.Messages.ACCOUNT_DISABLED_TITLE : O.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_TITLE, o = s ? O.default.Messages.ACCOUNT_DISABLED_DESCRIPTION : O.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_DESCRIPTION;
                    return (0, a.jsxs)(_.default, {
                        tag: "form",
                        onSubmit: this.handleReset,
                        className: e,
                        theme: t,
                        children: [(0, a.jsx)(_.Title, {
                            className: R.marginBottom8,
                            children: n
                        }), (0, a.jsx)(_.SubTitle, {
                            className: R.marginBottom20,
                            children: o
                        }), (0, a.jsxs)(_.Block, {
                            children: [(0, a.jsx)(i.Button, {
                                color: i.Button.Colors.BRAND,
                                type: "submit",
                                fullWidth: !0,
                                children: O.default.Messages._RETURN_TO_LOGIN
                            }), (0, a.jsx)("div", {
                                className: r(R.marginTop8, L.needAccount),
                                children: O.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_CANCEL.format({
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
                    return (0, a.jsx)(h.default, {
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
                    return (0, a.jsx)(_.default, {
                        tag: "form",
                        className: e,
                        children: (0, a.jsx)("div", {
                            className: R.marginTop20,
                            children: (0, a.jsx)(c.default, {
                                title: O.default.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_TITLE,
                                subtitle: O.default.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_SUBTITLE_RESEND.format({
                                    onResendClick: this.handleResendCode
                                }),
                                error: t,
                                onSubmit: this.handlePasswordReset,
                                onCancel: void 0
                            })
                        })
                    })
                }
                renderMFASMS() {
                    if (this.props.hasLoginExperiment) return this.renderMFAv2();
                    let {
                        loginStatus: e,
                        maskedPhone: t,
                        authBoxClassName: n,
                        theme: o
                    } = this.props, l = e === M.LoginStates.LOGGING_IN_MFA_SMS || "" === t;
                    return (0, a.jsxs)(_.default, {
                        onSubmit: this.handleSMSTokenSubmit,
                        tag: "form",
                        className: n,
                        theme: o,
                        children: [(0, a.jsx)("img", {
                            alt: "",
                            src: s("367598"),
                            className: R.marginBottom20
                        }), (0, a.jsx)(_.Title, {
                            className: R.marginBottom8,
                            children: O.default.Messages.TWO_FA
                        }), (0, a.jsx)(_.SubTitle, {
                            className: R.marginBottom8,
                            children: l ? O.default.Messages.TWO_FA_ENTER_SMS_TOKEN_SENDING : O.default.Messages.TWO_FA_ENTER_SMS_TOKEN_SENT.format({
                                phoneNumber: t
                            })
                        }), (0, a.jsxs)(_.Block, {
                            className: R.marginTop40,
                            children: [(0, a.jsx)(_.Input, {
                                className: R.marginBottom20,
                                error: this.renderError("code"),
                                setRef: this.setCodeRef,
                                onChange: e => this.setState({
                                    smsCode: e
                                }),
                                autoComplete: "off",
                                placeholder: O.default.Messages.TWO_FA_AUTH_CODE,
                                spellCheck: "false",
                                maxLength: 10,
                                autoFocus: !0,
                                label: O.default.Messages.TWO_FA_ENTER_SMS_TOKEN_LABEL,
                                value: this.state.smsCode,
                                required: !0
                            }, "smsCode"), (0, a.jsx)(i.Button, {
                                type: "submit",
                                submitting: l,
                                fullWidth: !0,
                                color: l ? i.Button.Colors.TRANSPARENT : i.Button.Colors.BRAND,
                                children: O.default.Messages._LOGIN
                            }), l ? null : (0, a.jsx)(i.Button, {
                                onClick: this.handleToggleSMSLogin,
                                look: i.Button.Looks.LINK,
                                color: i.Button.Colors.LINK,
                                size: i.Button.Sizes.TINY,
                                className: r(L.paddingResetLeft, R.marginTop8),
                                children: O.default.Messages.MFA_SMS_RESEND
                            }), (0, a.jsx)(i.Button, {
                                look: i.Button.Looks.LINK,
                                color: i.Button.Colors.LINK,
                                onClick: this.handleReset,
                                size: i.Button.Sizes.TINY,
                                className: r(L.paddingResetLeft, {
                                    [R.marginReset]: !l,
                                    [R.marginTop8]: l
                                }),
                                children: O.default.Messages._TWO_FA_LOGIN_FOOTER
                            })]
                        })]
                    })
                }
                render() {
                    let {
                        loginStatus: e
                    } = this.props;
                    if (null != this.state.resetPasswordPhoneToken) return this.renderResetPhonePassword();
                    switch (e) {
                        case M.LoginStates.LOGGING_IN_MFA_SMS:
                        case M.LoginStates.MFA_SMS_STEP:
                            return this.renderMFASMS();
                        case M.LoginStates.LOGGING_IN_MFA:
                        case M.LoginStates.MFA_STEP:
                            return this.renderMFA();
                        case M.LoginStates.MFA_WEBAUTHN_STEP:
                            return this.renderMFAWebAuthn();
                        case M.LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION:
                        case M.LoginStates.ACCOUNT_DISABLED:
                            return this.renderDisabledAccount();
                        case M.LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                            return this.renderPhonePasswordRecovery();
                        case M.LoginStates.LOGGING_IN:
                        case M.LoginStates.NONE:
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
                            C.ComponentDispatch.dispatch(M.ComponentActions.WAVE_EMPHASIZE), await u.default.forgotPassword(s), (0, i.openModal)(e => (0, a.jsx)(i.ConfirmModal, {
                                header: O.default.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_HEADER,
                                confirmText: O.default.Messages.OKAY,
                                confirmButtonColor: i.Button.Colors.BRAND,
                                ...e,
                                children: (0, a.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    children: O.default.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_BODY.format({
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
                            } = await g.default.verifyPhone(this.getFullLogin(), e, !1, !0);
                            this.setState({
                                resetPasswordPhoneToken: t
                            })
                        } catch (e) {
                            null != e.body && null != e.body.message && this.setState({
                                phoneVerifyError: e.body.message
                            })
                        }
                    }, this.handleTokenSubmit = e => {
                        let {
                            code: t
                        } = this.state, {
                            mfaTicket: s
                        } = this.props;
                        null != e && e.preventDefault(), u.default.loginMFA({
                            code: t.replace(/ /g, ""),
                            ticket: s
                        })
                    }, this.handleTokenSubmitMFAv2 = e => {
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
                    }, this.handleSMSTokenSubmit = e => {
                        let {
                            smsCode: t
                        } = this.state, {
                            mfaTicket: s
                        } = this.props;
                        null != e && e.preventDefault(), u.default.loginSMS({
                            code: t.replace(/ /g, ""),
                            ticket: s
                        })
                    }, this.handleToggleSMSLogin = e => {
                        let {
                            mfaTicket: t
                        } = this.props;
                        null != e && e.preventDefault(), u.default.requestSMSToken(t)
                    }, this.handleResendCode = () => {
                        g.default.resendCode(this.getFullLogin())
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
                let t = (0, l.useStateFromStoresObject)([A.default, N.default, p.default, T.default], () => ({
                        authenticated: N.default.isAuthenticated(),
                        loginStatus: N.default.getLoginStatus(),
                        mfaTicket: N.default.getMFATicket(),
                        mfaSMS: N.default.getMFASMS(),
                        maskedPhone: N.default.getMaskedPhone(),
                        mfaMethods: N.default.getMFAMethods(),
                        errors: N.default.getErrors(),
                        defaultRoute: A.default.defaultRoute,
                        country: p.default.getCountryCode(),
                        theme: T.default.theme
                    })),
                    s = f.default.useExperiment({
                        location: "multiAccount"
                    }).enabled;
                return (0, a.jsx)(I, {
                    ...e,
                    ...t,
                    hasLoginExperiment: s
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
                o = s("479287"),
                r = s("545358"),
                l = e => {
                    let {
                        onClose: t
                    } = e;
                    return (0, a.jsx)(o.default, {
                        transitionTo: e => {
                            (0, n.transitionTo)(e)
                        },
                        replaceWith: e => {
                            (0, n.replaceWith)(e)
                        },
                        authBoxClassName: r.card,
                        closeLogin: t
                    })
                }
        },
        685807: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return C
                }
            });
            var a, n, o = s("37983"),
                r = s("884691"),
                l = s("759843"),
                i = s("446674"),
                u = s("77078"),
                d = s("913144"),
                h = s("428958"),
                c = s("648498"),
                f = s("697218"),
                m = s("555158"),
                g = s("770032"),
                p = s("350218"),
                S = s("851460"),
                T = s("583374"),
                N = s("782340"),
                A = s("635937");
            (a = n || (n = {}))[a.MANAGE_ACCOUNTS = 0] = "MANAGE_ACCOUNTS", a[a.LOGIN = 1] = "LOGIN";
            let _ = {
                [n.MANAGE_ACCOUNTS]: u.ModalSize.SMALL,
                [n.LOGIN]: u.ModalSize.DYNAMIC
            };

            function C(e) {
                let {
                    transitionState: t,
                    onClose: s
                } = e, [a, C] = r.useState(n.MANAGE_ACCOUNTS), {
                    currentUser: E,
                    multiAccountUsers: M
                } = (0, i.useStateFromStoresObject)([f.default, g.default], () => ({
                    currentUser: f.default.getCurrentUser(),
                    multiAccountUsers: g.default.getUsers()
                })), [O, L] = r.useState(!1), [R, I] = r.useState(""), [x, k] = r.useState(null);
                r.useEffect(() => {
                    if (O) k((0, o.jsx)(m.default, {
                        messageType: m.HelpMessageTypes.ERROR,
                        className: A.infoMessage,
                        children: N.default.Messages.MULTI_ACCOUNT_MAX_ACCOUNTS_ERROR.format({
                            maxNumAccounts: T.MAX_ACCOUNTS
                        })
                    })), I("");
                    else if (null != R) {
                        let e = f.default.getUser(R);
                        null != e && k((0, o.jsx)(m.default, {
                            messageType: m.HelpMessageTypes.POSITIVE,
                            className: A.infoMessage,
                            children: N.default.Messages.MULTI_ACCOUNT_LOGGED_OUT.format({
                                username: e.username
                            })
                        })), L(!1)
                    }
                }, [R, O]), r.useEffect(() => {
                    M.length < T.MAX_ACCOUNTS && L(!1)
                }, [M]), (0, h.default)({
                    type: l.ImpressionTypes.MODAL,
                    name: a === n.MANAGE_ACCOUNTS ? l.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING : l.ImpressionNames.USER_LOGIN
                });
                let B = null;
                a === n.MANAGE_ACCOUNTS ? B = (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(u.ModalHeader, {
                        separator: !1,
                        children: (0, o.jsxs)("div", {
                            className: A.header,
                            children: [(0, o.jsx)(u.Heading, {
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: N.default.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS
                            }), (0, o.jsx)(u.Text, {
                                className: A.subheaderText,
                                color: "header-secondary",
                                variant: "text-md/normal",
                                children: N.default.Messages.SWITCH_ACCOUNTS_MODAL_SUBHEADER
                            })]
                        })
                    }), (0, o.jsxs)(u.ModalContent, {
                        children: [x, (0, o.jsx)(S.default, {
                            actionText: N.default.Messages.SWITCH_ACCOUNTS_ACTION_SWITCH,
                            onAction: (e, t) => {
                                switch (e) {
                                    case S.MultiAccountActionType.LOGIN_REQUIRED:
                                        C(n.LOGIN);
                                        break;
                                    case S.MultiAccountActionType.SWITCHED:
                                        s();
                                        break;
                                    case S.MultiAccountActionType.REMOVED:
                                        t === (null == E ? void 0 : E.id) && s(), I(t)
                                }
                            }
                        }), (0, o.jsx)("div", {
                            className: A.actions,
                            children: (0, o.jsx)(u.Button, {
                                look: u.Button.Looks.LINK,
                                color: u.Button.Colors.PRIMARY,
                                onClick: () => {
                                    if (M.length >= T.MAX_ACCOUNTS) {
                                        L(!0);
                                        return
                                    }
                                    C(n.LOGIN)
                                },
                                size: u.Button.Sizes.MEDIUM,
                                children: (0, o.jsx)(u.Text, {
                                    variant: "text-sm/semibold",
                                    children: N.default.Messages.SWITCH_ACCOUNTS_ADD_AN_ACCOUNT_BUTTON
                                })
                            })
                        })]
                    })]
                }) : a === n.LOGIN && (B = (0, o.jsx)(p.default, {
                    onClose: () => {
                        d.default.dispatch({
                            type: "CLEAR_AUTHENTICATION_ERRORS"
                        }), C(n.MANAGE_ACCOUNTS)
                    }
                }));
                let F = !c.default.useExperiment({
                    location: "accountSwitcherModal"
                }).enabled;
                return (0, o.jsx)(u.ModalRoot, {
                    className: A.modal,
                    transitionState: t,
                    size: _[a],
                    "aria-label": N.default.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS,
                    children: (0, o.jsxs)(u.Sequencer, {
                        step: a,
                        steps: [n.MANAGE_ACCOUNTS, n.LOGIN],
                        children: [F && (0, o.jsx)(u.ModalCloseButton, {
                            onClick: s,
                            className: A.modalCloseButton
                        }), B]
                    })
                })
            }
        }
    }
]);
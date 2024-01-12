            "use strict";
            let s;
            n.r(t), n.d(t, {
                PasswordResetResult: function() {
                    return o
                },
                default: function() {
                    return y
                }
            }), n("70102"), n("860677"), n("506083");
            var o, l, a = n("759843"),
                i = n("171718"),
                r = n("872717"),
                d = n("95410"),
                u = n("913144"),
                c = n("448993"),
                E = n("307439"),
                _ = n("605250"),
                p = n("21121"),
                f = n("776502"),
                h = n("393414"),
                S = n("271938"),
                A = n("350522"),
                O = n("840707"),
                I = n("772017"),
                N = n("49111"),
                C = n("191349");
            let m = new _.default("AuthenticationActionCreators"),
                T = null;

            function R(e) {
                let t = {
                    type: "LOGOUT",
                    ...e
                };
                u.default.dispatch(t).catch(e => {
                    var t;
                    throw m.error("Error while dispatching LOGOUT", e), null === (t = window.DiscordErrors) || void 0 === t || t.softCrash(e), e
                })
            }

            function v() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N.Routes.DEFAULT_LOGGED_OUT;
                R();
                let t = (0, p.getRootNavigationRefIfInExperiment)();
                null != e && (null != t ? (I.default.popAll(), t.navigate("auth")) : (0, h.transitionTo)(e))
            }(l = o || (o = {})).MFA = "MFA", l.SUCCESS = "SUCCESS";
            var y = {
                startSession(e) {
                    u.default.wait(() => {
                        u.default.dispatch({
                            type: "START_SESSION",
                            token: e
                        })
                    })
                },
                setLoginCredentials(e, t) {
                    u.default.dispatch({
                        type: "SET_LOGIN_CREDENTIALS",
                        login: e,
                        password: t
                    })
                },
                login(e) {
                    var t;
                    let {
                        login: n,
                        password: s,
                        loginCode: o,
                        undelete: l,
                        source: i,
                        giftCodeSKUId: r,
                        invite: d,
                        isMultiAccount: E
                    } = e;
                    u.default.dispatch({
                        type: "LOGIN",
                        login: n,
                        loginMethod: null != o && "" !== o ? N.LoginMethods.LOGIN_CODE : N.LoginMethods.PASSWORD
                    }), this.setLoginCredentials(n, null !== (t = null != s ? s : o) && void 0 !== t ? t : void 0), O.default.post({
                        url: N.Endpoints.LOGIN,
                        body: {
                            login: n,
                            password: s,
                            undelete: l,
                            login_code: o,
                            login_source: i,
                            gift_code_sku_id: r
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: a.NetworkActionNames.USER_LOGIN,
                            properties: {
                                invite_code: null == d ? void 0 : d.code,
                                is_multi_account: E
                            }
                        },
                        ...E ? {
                            headers: {
                                authorization: ""
                            }
                        } : {}
                    }).then(e => {
                        let {
                            body: {
                                mfa: t,
                                sms: n,
                                webauthn: s,
                                ticket: o,
                                token: l,
                                backup: a,
                                user_id: i,
                                required_actions: r,
                                totp: d
                            }
                        } = e;
                        u.default.dispatch({
                            type: "LOGIN_ATTEMPTED",
                            user_id: i,
                            required_actions: r
                        }), t ? u.default.dispatch({
                            type: "LOGIN_MFA_STEP",
                            ticket: o,
                            sms: n,
                            webauthn: s,
                            totp: d,
                            backup: a
                        }) : E ? this.switchAccountToken(l) : u.default.dispatch({
                            type: "LOGIN_SUCCESS",
                            token: l
                        })
                    }, e => {
                        var t;
                        let o = null === (t = e.body) || void 0 === t ? void 0 : t.code;
                        o === N.AbortCodes.ACCOUNT_SCHEDULED_FOR_DELETION && null != s && "" !== s ? u.default.dispatch({
                            type: "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION",
                            credentials: {
                                login: n,
                                password: s
                            }
                        }) : o === N.AbortCodes.ACCOUNT_DISABLED && null != s && "" !== s ? u.default.dispatch({
                            type: "LOGIN_ACCOUNT_DISABLED",
                            credentials: {
                                login: n,
                                password: s
                            }
                        }) : o === N.AbortCodes.PHONE_VERIFICATION_REQUIRED ? u.default.dispatch({
                            type: "LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED"
                        }) : u.default.dispatch({
                            type: "LOGIN_FAILURE",
                            error: new c.V6OrEarlierAPIError(e)
                        })
                    })
                },
                loginMFAv2(e) {
                    let t, {
                        code: n,
                        ticket: s,
                        source: o,
                        giftCodeSKUId: l,
                        isMultiAccount: i,
                        mfaType: r
                    } = e;
                    return t = "webauthn" === r ? N.Endpoints.LOGIN_WEBAUTHN : "sms" === r ? N.Endpoints.LOGIN_SMS : N.Endpoints.LOGIN_MFA, O.default.post({
                        url: t,
                        body: {
                            code: n,
                            ticket: s,
                            login_source: o,
                            gift_code_sku_id: l
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: a.NetworkActionNames.USER_LOGIN_MFA
                        }
                    }).then(e => {
                        i ? this.switchAccountToken(e.body.token) : u.default.dispatch({
                            type: "LOGIN_SUCCESS",
                            token: e.body.token
                        })
                    }).catch(e => {
                        var t;
                        if ((null === (t = e.body) || void 0 === t ? void 0 : t.code) === N.AbortCodes.MFA_INVALID_CODE) throw Error((0, f.mapError)(r));
                        throw e
                    })
                },
                loginToken(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return u.default.dispatch({
                        type: "LOGIN"
                    }), new Promise(n => {
                        setImmediate(() => {
                            u.default.dispatch({
                                type: "LOGIN_SUCCESS",
                                token: e
                            }), t && this.startSession(e), n()
                        })
                    })
                },
                loginReset(e) {
                    u.default.dispatch({
                        type: "LOGIN_RESET",
                        isMultiAccount: e
                    })
                },
                loginStatusReset() {
                    u.default.dispatch({
                        type: "LOGIN_STATUS_RESET"
                    })
                },
                logoutInternal(e) {
                    R(e)
                },
                logout() {
                    var e;
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N.Routes.DEFAULT_LOGGED_OUT,
                        n = arguments.length > 1 ? arguments[1] : void 0;
                    return O.default.post({
                        url: N.Endpoints.LOGOUT,
                        body: {
                            provider: (0, C.getDevicePushProvider)(),
                            token: d.default.get(N.DEVICE_TOKEN),
                            voip_provider: C.DEVICE_PUSH_VOIP_PROVIDER,
                            voip_token: d.default.get(N.DEVICE_VOIP_TOKEN)
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: a.NetworkActionNames.USER_LOGOUT
                        },
                        ...null != n && {
                            headers: {
                                authorization: null !== (e = i.default.getToken(n)) && void 0 !== e ? e : ""
                            }
                        }
                    }).finally(() => {
                        (null == n || n === S.default.getId()) && v(t)
                    })
                },
                switchAccountToken(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = S.default.getToken();
                    m.log("Switching accounts", {
                        wasLoggedIn: null != n,
                        tokenHasChanged: e !== n
                    }), R({
                        isSwitchingAccount: !0
                    });
                    let s = this.loginToken(e, !0).then(() => {
                        let t = S.default.getToken();
                        m.log("Switched accounts finished", {
                            isCorrectToken: e === t
                        })
                    });
                    return t && (0, h.transitionTo)(N.Routes.ME), s
                },
                verifySSOToken() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N.Routes.DEFAULT_LOGGED_OUT;
                    return r.default.get({
                        url: N.Endpoints.ME,
                        oldFormErrors: !0
                    }).catch(() => v(e))
                },
                verify(e) {
                    null != e ? O.default.post({
                        url: N.Endpoints.VERIFY,
                        body: {
                            token: e
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: a.NetworkActionNames.USER_VERIFY
                        }
                    }).then(e => {
                        u.default.dispatch({
                            type: "LOGIN_SUCCESS",
                            token: e.body.token
                        }), u.default.dispatch({
                            type: "VERIFY_SUCCESS",
                            verifyingUserId: e.body.user_id
                        })
                    }, e => u.default.dispatch({
                        type: "VERIFY_FAILURE",
                        errors: e.body
                    })) : u.default.dispatch({
                        type: "VERIFY_FAILURE",
                        errors: {}
                    })
                },
                async authorizePayment(e) {
                    try {
                        await O.default.post({
                            url: N.Endpoints.AUTHORIZE_PAYMENT,
                            body: {
                                token: e
                            },
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: a.NetworkActionNames.AUTHORIZE_PAYMENT
                            }
                        }), u.default.dispatch({
                            type: "VERIFY_SUCCESS"
                        })
                    } catch (e) {
                        u.default.dispatch({
                            type: "VERIFY_FAILURE",
                            errors: {}
                        })
                    }
                },
                async authorizeIPAddress(e) {
                    if (null == e) {
                        u.default.dispatch({
                            type: "VERIFY_FAILURE",
                            errors: {}
                        });
                        return
                    }
                    try {
                        await O.default.post({
                            url: N.Endpoints.AUTHORIZE_IP,
                            body: {
                                token: e
                            },
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: a.NetworkActionNames.AUTHORIZE_IP
                            }
                        }), u.default.dispatch({
                            type: "VERIFY_SUCCESS"
                        })
                    } catch (e) {
                        u.default.dispatch({
                            type: "VERIFY_FAILURE",
                            errors: {}
                        })
                    }
                },
                verifyResend: () => O.default.post({
                    url: N.Endpoints.VERIFY_RESEND,
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: a.NetworkActionNames.USER_VERIFY_RESEND
                    }
                }),
                async resetPassword(e, t, n) {
                    u.default.dispatch({
                        type: "LOGIN"
                    });
                    let s = {
                            token: e,
                            password: t,
                            source: n
                        },
                        o = d.default.get(N.DEVICE_TOKEN),
                        l = (0, C.getDevicePushProvider)();
                    null != l && null != o && (s.push_provider = l, s.push_token = o);
                    let i = d.default.get(N.DEVICE_VOIP_TOKEN);
                    null != C.DEVICE_PUSH_VOIP_PROVIDER && null != i && (s.push_voip_provider = C.DEVICE_PUSH_VOIP_PROVIDER, s.push_voip_token = i);
                    try {
                        let {
                            body: {
                                mfa: e,
                                sms: t,
                                webauthn: n,
                                ticket: o,
                                token: l,
                                backup: i,
                                totp: r
                            }
                        } = await O.default.post({
                            url: N.Endpoints.RESET_PASSWORD,
                            body: s,
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: a.NetworkActionNames.USER_RESET_PASSWORD
                            }
                        });
                        return {
                            result: e ? "MFA" : "SUCCESS",
                            sms: t,
                            webauthn: n,
                            ticket: o,
                            token: l,
                            backup: i,
                            totp: r
                        }
                    } catch (e) {
                        throw u.default.dispatch({
                            type: "LOGIN_FAILURE",
                            error: new c.V6OrEarlierAPIError(e)
                        }), e
                    }
                },
                async resetPasswordMFAv2(e) {
                    let {
                        method: t,
                        code: n,
                        ticket: s,
                        password: o,
                        token: l,
                        source: i
                    } = e;
                    u.default.dispatch({
                        type: "LOGIN_MFA"
                    });
                    let r = await O.default.post({
                        url: N.Endpoints.RESET_PASSWORD,
                        body: {
                            code: n,
                            ticket: s,
                            password: o,
                            token: l,
                            source: i,
                            method: t
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: a.NetworkActionNames.USER_RESET_PASSWORD,
                            properties: {
                                mfa: !0
                            }
                        }
                    });
                    return r.body.token
                },
                async forgotPassword(e) {
                    this.setLoginCredentials(e), u.default.dispatch({
                        type: "FORGOT_PASSWORD_REQUEST"
                    });
                    try {
                        await O.default.post({
                            url: N.Endpoints.FORGOT_PASSWORD,
                            body: {
                                login: e
                            },
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: a.NetworkActionNames.FORGOT_PASSWORD
                            }
                        }), u.default.dispatch({
                            type: "FORGOT_PASSWORD_SENT"
                        })
                    } catch (n) {
                        let e = new c.V6OrEarlierAPIError(n),
                            t = e.code;
                        throw t === N.AbortCodes.PHONE_VERIFICATION_REQUIRED ? u.default.dispatch({
                            type: "LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION"
                        }) : u.default.dispatch({
                            type: "LOGIN_FAILURE",
                            error: e
                        }), n
                    }
                },
                setFingerprint(e) {
                    u.default.dispatch({
                        type: "FINGERPRINT",
                        fingerprint: e
                    })
                },
                getExperiments(e) {
                    u.default.dispatch({
                        type: "EXPERIMENTS_FETCH",
                        withGuildExperiments: e
                    })
                },
                getLocationMetadata: () => null != T ? T : (clearTimeout(s), s = setTimeout(() => {
                    u.default.dispatch({
                        type: "SET_CONSENT_REQUIRED",
                        consentRequired: !0
                    })
                }, 5e3), T = r.default.get({
                    url: N.Endpoints.AUTH_LOCATION_METADATA,
                    retries: 2,
                    oldFormErrors: !0
                }).then(e => {
                    var t, n, o, l, a;
                    if (clearTimeout(s), null == A.default.getAuthenticationConsentRequired()) {
                        let t = null === (l = null == e ? void 0 : null === (o = e.body) || void 0 === o ? void 0 : o.consent_required) || void 0 === l || l;
                        u.default.dispatch({
                            type: "SET_CONSENT_REQUIRED",
                            consentRequired: t
                        })
                    }
                    if (u.default.dispatch({
                            type: "SET_LOCATION_METADATA",
                            countryCode: null !== (a = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.country_code) && void 0 !== a ? a : void 0
                        }), T = null, (null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.promotional_email_opt_in) != null) {
                        let t = e.body.promotional_email_opt_in;
                        (0, E.setPromoEmailConsentState)({
                            required: t.required,
                            checked: t.pre_checked,
                            preChecked: t.pre_checked
                        })
                    }
                }, () => {
                    clearTimeout(s), u.default.dispatch({
                        type: "SET_CONSENT_REQUIRED",
                        consentRequired: !0
                    }), T = null
                }))
            }
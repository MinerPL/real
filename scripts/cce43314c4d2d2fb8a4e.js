(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["28405"], {
        803452: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b77d7b48860bbefdeeb2.svg"
        },
        378913: function(e, t, n) {
            "use strict";
            e.exports = n.p + "906a38cbd45d6780304c.svg"
        },
        356002: function(e, t, n) {
            "use strict";
            e.exports = n.p + "682f1b679b5bdb117165.webm"
        },
        197492: function(e, t, n) {
            "use strict";
            e.exports = n.p + "87590a81cf78665e23ea.webm"
        },
        250790: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("483366"),
                r = n.n(l),
                i = n("458960"),
                o = n("394846"),
                u = n("769846"),
                d = n("77078"),
                c = n("159885"),
                E = n("99130");
            let f = (0, c.cssValueToNumber)(u.default.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
                h = {
                    START: 0,
                    END: 1
                },
                _ = {
                    friction: 10,
                    tension: 130
                };
            var m = function(e) {
                return class extends a.Component {
                    componentDidMount() {
                        !o.isMobile && (window.addEventListener("resize", this.handleResizeDebounced), this.handleResize())
                    }
                    componentWillUnmount() {
                        clearTimeout(this.timeout), window.removeEventListener("resize", this.handleResizeDebounced)
                    }
                    componentWillAppear(e) {
                        this.state.shouldAnimate ? this.animateTo(h.END, e) : e()
                    }
                    componentWillEnter(e) {
                        this.state.shouldAnimate ? (clearTimeout(this.timeout), this.timeout = setTimeout(() => this.animateTo(h.END, e), 40)) : e()
                    }
                    componentWillLeave(e) {
                        this.state.shouldAnimate ? this.animateTo(h.START, e) : e()
                    }
                    animateTo(e, t) {
                        i.default.spring(this.anim, {
                            toValue: e,
                            ..._
                        }).start(t)
                    }
                    getAnimatedStyle(e) {
                        return this.state.shouldAnimate ? {
                            opacity: this.anim,
                            transform: e ? void 0 : [{
                                scale: this.anim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1.05, 1]
                                })
                            }, {
                                translateY: this.anim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["-70px", "0px"]
                                })
                            }, {
                                translateZ: 0
                            }]
                        } : null
                    }
                    render() {
                        return (0, s.jsx)("div", {
                            className: E.wrapper,
                            children: (0, s.jsx)(d.AccessibilityPreferencesContext.Consumer, {
                                children: t => {
                                    let {
                                        reducedMotion: n
                                    } = t;
                                    return (0, s.jsx)(i.default.div, {
                                        style: this.getAnimatedStyle(n.enabled),
                                        children: (0, s.jsx)(e, {
                                            ...this.props
                                        })
                                    })
                                }
                            })
                        })
                    }
                    constructor(...e) {
                        super(...e), this.anim = new i.default.Value(h.START), this.state = {
                            shouldAnimate: !o.isMobile
                        }, this.handleResize = () => {
                            let e = window.innerWidth > f;
                            !this.state.shouldAnimate && e && this.anim.setValue(h.END), this.setState({
                                shouldAnimate: e
                            })
                        }, this.handleResizeDebounced = r(this.handleResize, 60)
                    }
                }
            }
        },
        746040: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                r = n.n(l),
                i = n("394846"),
                o = n("77078"),
                u = n("2021"),
                d = n("393414"),
                c = n("725484"),
                E = n("554054"),
                f = n("159885"),
                h = n("528502"),
                _ = n("49111"),
                m = n("71041");
            let p = (0, f.cssValueToNumber)(m.responsiveWidthMobile),
                g = [_.Routes.LOGIN, _.Routes.LOGIN_HANDOFF, _.Routes.REGISTER, _.Routes.INVITE(""), _.Routes.GIFT_CODE(""), _.Routes.GUILD_TEMPLATE_LOGIN(""), _.Routes.GUILD_TEMPLATE(""), _.Routes.DISABLE_EMAIL_NOTIFICATIONS, _.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, _.Routes.BILLING_PREMIUM_SUBSCRIBE, _.Routes.BILLING_PAYMENT_SOURCES_CREATE, _.Routes.BILLING_PAYMENTS, _.Routes.BILLING_PREMIUM_SWITCH_PLAN, _.Routes.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, _.Routes.VERIFY, _.Routes.VERIFY_HUB_EMAIL, _.Routes.REJECT_IP, _.Routes.REJECT_MFA, _.Routes.AUTHORIZE_IP, _.Routes.AUTHORIZE_PAYMENT, _.Routes.RESET, _.Routes.HANDOFF, _.Routes.REPORT];

            function R(e) {
                return g.some(t => e.startsWith(t))
            }
            class A extends a.Component {
                componentDidMount() {
                    window.addEventListener("resize", this.handleResize)
                }
                componentWillUnmount() {
                    window.removeEventListener("resize", this.handleResize)
                }
                mobileTransitionTo(e, t) {
                    if (R(e))(0, d.transitionTo)(e, t);
                    else {
                        let n = null != t && null != t.search ? t.search : null;
                        window.location = null == n ? e : "".concat(e, "?").concat(n)
                    }
                }
                mobileReplaceWith(e) {
                    R(e) ? (0, d.replaceWith)(e) : window.location = e
                }
                renderDefault() {
                    let {
                        splash: e
                    } = this.props, t = (0, s.jsx)(u.default, {
                        component: a.Fragment,
                        children: a.Children.map(this.props.children, e => a.cloneElement(e, {
                            transitionTo: d.transitionTo,
                            replaceWith: d.replaceWith
                        }))
                    });
                    return (0, s.jsx)("div", {
                        className: m.characterBackground,
                        children: (0, s.jsx)(o.HeadingLevel, {
                            forceLevel: 1,
                            children: null != e ? (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(c.default, {
                                    show: !0,
                                    className: r(m.logo)
                                }), (0, s.jsx)(E.Splash, {
                                    splash: e,
                                    children: t
                                })]
                            }) : (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(h.default, {
                                    className: m.artwork,
                                    preserveAspectRatio: "xMinYMin slice"
                                }), t]
                            })
                        })
                    })
                }
                renderMobile() {
                    return (0, s.jsx)(u.default, {
                        component: a.Fragment,
                        children: a.Children.map(this.props.children, e => a.cloneElement(e, {
                            transitionTo: this.mobileTransitionTo,
                            replaceWith: this.mobileReplaceWith
                        }))
                    })
                }
                render() {
                    let {
                        isMobileWidth: e
                    } = this.state, t = navigator.userAgent.includes("GameLauncher");
                    return e || i.isMobile || i.isTablet || t ? this.renderMobile() : this.renderDefault()
                }
                constructor(e) {
                    super(e), this.handleResize = () => {
                        this.setState({
                            isMobileWidth: window.innerWidth <= p
                        })
                    }, this.state = {
                        isMobileWidth: window.innerWidth <= p
                    }
                }
            }
            var T = A
        },
        275744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("730290"),
                r = n("803182"),
                i = n("446674"),
                o = n("437822"),
                u = n("697796"),
                d = n("524824"),
                c = n("393414"),
                E = n("271938"),
                f = n("291850"),
                h = n("49111"),
                _ = n("724210");

            function m(e) {
                let t = a.useCallback(t => {
                        if (function(e) {
                                var t;
                                let n = (0, r.matchPath)(e, {
                                    path: h.Routes.CHANNEL(":guildId", ":channelId")
                                });
                                return (null == n ? void 0 : null === (t = n.params) || void 0 === t ? void 0 : t.channelId) === _.StaticChannelRoute.ROLE_SUBSCRIPTIONS || !1
                            }(t)) c.replaceWith(t);
                        else {
                            var n;
                            (null !== (n = e.transitionTo) && void 0 !== n ? n : c.transitionTo)(t)
                        }
                    }, [e.transitionTo]),
                    {
                        isAuthenticated: n,
                        loginStatus: m
                    } = (0, i.useStateFromStoresObject)([E.default], () => ({
                        isAuthenticated: E.default.isAuthenticated(),
                        loginStatus: E.default.getLoginStatus()
                    })),
                    {
                        location: p,
                        redirectTo: g
                    } = e,
                    [R, A] = a.useState(n);

                function T(e) {
                    let {
                        handoffKey: t,
                        handoffToken: n,
                        handoffSource: s
                    } = e;
                    (0, u.handoffFromApp)({
                        handoffKey: t,
                        handoffToken: n,
                        handoffSource: s
                    }), A(!1)
                }
                return (a.useEffect(() => {
                    if (null != p) {
                        let {
                            handoff_key: e,
                            handoff_token: t
                        } = (0, l.parse)(p.search);
                        if (null != e && null != t) {
                            let n = null != g ? (0, d.getLoginHandoffSourceFromRedirectTo)(g) : void 0;
                            R ? o.default.logout(null).finally(() => {
                                T({
                                    handoffKey: e,
                                    handoffToken: t,
                                    handoffSource: n
                                })
                            }) : T({
                                handoffKey: e,
                                handoffToken: t,
                                handoffSource: n
                            })
                        }
                    }
                }, []), R || m === h.LoginStates.LOGGING_IN) ? (0, s.jsx)(f.LoginSpinner, {}) : (0, s.jsx)(f.default, {
                    ...e,
                    transitionTo: t
                })
            }
        },
        860959: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return er
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                r = n.n(l),
                i = n("730290"),
                o = n("506838"),
                u = n("759843"),
                d = n("446674"),
                c = n("862337"),
                E = n("77078"),
                f = n("437822"),
                h = n("678916"),
                _ = n("816540"),
                m = n("208266"),
                p = n("428958"),
                g = n("307439"),
                R = n("765825"),
                A = n("715570"),
                T = n("486252"),
                N = n("378020"),
                I = n("980976"),
                S = n("534438"),
                v = n("946859"),
                O = n("791160"),
                C = n("434824"),
                b = n("770032"),
                L = n("165926"),
                M = n("25033"),
                x = n("255403"),
                y = n("2581"),
                G = n("644417"),
                D = n("697543"),
                U = n("79345"),
                P = n("447997"),
                w = n("970366"),
                F = n("271938"),
                k = n("350522"),
                j = n("476108"),
                B = n("124969"),
                H = n("980428"),
                V = n("599110"),
                Y = n("659500"),
                W = n("159885"),
                z = n("404432"),
                q = n("719451"),
                K = n("598489"),
                X = n("49111"),
                Q = n("771848"),
                Z = n("492397"),
                J = n("56235"),
                $ = n("935583"),
                ee = n("782340"),
                et = n("266100"),
                en = n("926622");
            d.default.initialize();
            let es = /\.$/,
                ea = e => Array.isArray(e) ? e.map(e => e.replace(es, "")).join(". ").trim() : e;
            class el extends a.PureComponent {
                get registrationSource() {
                    let {
                        giftCode: e,
                        guildTemplate: t,
                        invite: n
                    } = this.props;
                    if (null != e) return "gift";
                    if (null != t) return "guild_template";
                    if (null != n) {
                        if (null != n.guild) return "guild_invite";
                        if (null != n.channel) return "dm_invite";
                        else if (null != n.inviter) return "friend_invite"
                    }
                    return null
                }
                hasConsent() {
                    let {
                        consentRequired: e
                    } = this.props, {
                        consent: t
                    } = this.state;
                    return null != e && t
                }
                componentDidMount() {
                    this.redirectIfAuthenticated(), R.default.trackExposure({
                        location: "0ba758_1"
                    });
                    let {
                        giftCodeSKU: e,
                        invite: t
                    } = this.props;
                    V.default.track(X.AnalyticEvents.REGISTER_VIEWED, {
                        location: null != t ? "Invite Register Page" : "Non-Invite Register Page",
                        registration_source: this.registrationSource,
                        ...null != e ? (0, O.default)(e, !1, !1) : {}
                    }, {
                        flush: !0
                    }), null == this.props.consentRequired && f.default.getLocationMetadata(), (0, w.trackAppUIViewed)("register")
                }
                componentWillUnmount() {
                    this._retryTimer.stop()
                }
                static getDerivedStateFromProps(e, t) {
                    let {
                        consentRequired: n
                    } = e, {
                        consentRequiredProp: s
                    } = t;
                    return null == s && null != n ? {
                        consent: !n,
                        consentRequiredProp: n
                    } : {
                        consentRequiredProp: n
                    }
                }
                componentDidUpdate(e, t) {
                    let {
                        apiErrors: n,
                        authenticated: s,
                        isUnderage: a,
                        invite: l,
                        onChangeStep: r
                    } = this.props, {
                        parsedDateOfBirth: i
                    } = this.state;
                    (e.apiErrors !== n || t.parsedDateOfBirth !== i) && (this.hasError("email") || this.hasError("phone") ? null != this.emailRef && this.emailRef.focus() : this.hasError("username") ? null != this.usernameRef && this.usernameRef.focus() : this.hasError("global_name") ? null != this.globalNameRef && this.globalNameRef.focus() : this.hasError("password") ? null != this.passwordRef && this.passwordRef.focus() : null == this.state.parsedDateOfBirth ? null != this.dateOfBirthRef.current && this.dateOfBirthRef.current.focus() : this.hasError("retry_after") && "number" == typeof this.props.apiErrors.retry_after && (this.setState({
                        isRateLimited: !0
                    }), this._retryTimer.start(1e3 * this.props.apiErrors.retry_after, () => {
                        this.setState({
                            isRateLimited: !1
                        })
                    }))), s && !e.authenticated && ((0, L.setNewUser)(J.NewUserTypes.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
                    let o = Q.RegistrationSteps.FULL;
                    a || this.hasError("date_of_birth") ? o = Q.RegistrationSteps.AGE_GATE : null != l && (null != l.guild || null != l.channel) && (o = Q.RegistrationSteps.INVITE), r(o)
                }
                redirectIfAuthenticated() {
                    let {
                        authenticated: e,
                        transitionTo: t,
                        redirectTo: n
                    } = this.props;
                    e && t(null != n ? n : j.default.defaultRoute)
                }
                async handleRegister() {
                    let {
                        email: e,
                        username: t,
                        globalName: n,
                        password: s,
                        consent: a,
                        parsedDateOfBirth: l
                    } = this.state, {
                        invite: r,
                        guildTemplate: i,
                        giftCode: o,
                        onRegister: u,
                        usernameSuggestion: d,
                        isMobileWebInviteRegistration: c
                    } = this.props, E = null != r ? r.code : null, f = null != o ? o.skuId : null, h = g.usePromoEmailConsentStore.getState(), _ = (0, W.isNullOrEmpty)(d) ? null : t === d, m = Z.CONFERENCE_MODE_ENABLED ? await (0, v.formatUsername)(t) : t;
                    Y.ComponentDispatch.dispatch(X.ComponentActions.WAVE_EMPHASIZE);
                    try {
                        c || null == r ? await (0, A.registerFull)({
                            email: e,
                            username: m,
                            globalName: n,
                            consent: a,
                            password: s,
                            invite: E,
                            usedUsernameSuggestion: _,
                            guildTemplateCode: null == i ? void 0 : i.code,
                            giftCodeSKUId: f,
                            birthday: l,
                            promoEmailConsent: h.required ? h : null
                        }) : await (0, A.default)({
                            consent: a,
                            invite: E,
                            giftCodeSKUId: f,
                            usedUsernameSuggestion: _,
                            globalName: n
                        }), null == u || u()
                    } catch (e) {}
                }
                hasError(e) {
                    return null != this.props.apiErrors[e]
                }
                renderConsentComponents() {
                    let {
                        consent: e
                    } = this.state, {
                        consentRequired: t,
                        registrationCopyExperimentConfig: {
                            enableNewCopy: n,
                            hasProminentCopy: a
                        }
                    } = this.props, l = null, r = null;
                    return t ? r = (0, s.jsx)(T.default, {
                        value: e,
                        onChange: e => this.setState({
                            consent: e
                        }),
                        subText: ee.default.Messages.TERMS_PRIVACY_OPT_IN.format({
                            termsURL: X.MarketingURLs.TERMS,
                            privacyURL: X.MarketingURLs.PRIVACY
                        })
                    }) : l = (0, s.jsx)(B.SubText, {
                        isProminent: !!a,
                        className: en.marginTop8,
                        children: n ? ee.default.Messages.TERMS_PRIVACY_ON_REGISTER.format({
                            buttonText: ee.default.Messages.CONTINUE,
                            termsURL: X.MarketingURLs.TERMS,
                            privacyURL: X.MarketingURLs.PRIVACY
                        }) : ee.default.Messages.TERMS_PRIVACY.format({
                            termsURL: X.MarketingURLs.TERMS,
                            privacyURL: X.MarketingURLs.PRIVACY
                        })
                    }), {
                        subText: l,
                        consentText: r
                    }
                }
                renderInviteResolving() {
                    let {
                        authBoxClassName: e
                    } = this.props, t = e => {
                        this.setState({
                            globalName: e
                        })
                    }, n = this.state.globalName;
                    return (0, s.jsxs)(B.default, {
                        className: e,
                        children: [(0, s.jsx)(q.InviteResolvingHeader, {}), (0, s.jsxs)(B.Block, {
                            className: en.marginTop40,
                            children: [(0, s.jsx)(E.FormTitle, {
                                children: ee.default.Messages.FORM_LABEL_USERNAME
                            }), (0, s.jsx)(E.Tooltip, {
                                text: ee.default.Messages.AUTH_USERNAME_TOOLTIP,
                                position: "right",
                                color: E.Tooltip.Colors.BRAND,
                                children: e => {
                                    let {
                                        onMouseEnter: a,
                                        onMouseLeave: l
                                    } = e;
                                    return (0, s.jsx)(B.Input, {
                                        autoFocus: !0,
                                        className: en.marginBottom8,
                                        name: "username",
                                        value: n,
                                        placeholder: ee.default.Messages.FORM_PLACEHOLDER_USERNAME,
                                        onChange: t,
                                        onMouseEnter: a,
                                        onMouseLeave: l
                                    })
                                }
                            }), (0, s.jsx)(B.Button, {
                                className: en.marginTop20,
                                disabled: !0,
                                children: ee.default.Messages.CONTINUE
                            }), (0, s.jsx)(B.SubText, {
                                disabled: !0,
                                className: en.marginTop8,
                                children: ee.default.Messages.TERMS_PRIVACY.format({
                                    termsURL: X.MarketingURLs.TERMS,
                                    privacyURL: X.MarketingURLs.PRIVACY
                                })
                            }), Z.CONFERENCE_MODE_ENABLED ? null : (0, s.jsx)(B.Button, {
                                look: B.Button.Looks.LINK,
                                color: B.Button.Colors.LINK,
                                disabled: !0,
                                className: en.marginTop20,
                                children: ee.default.Messages.ALREADY_HAVE_ACCOUNT
                            })]
                        })]
                    })
                }
                renderInviteHeader() {
                    let {
                        invite: e
                    } = this.props;
                    return (null == e ? void 0 : e.stage_instance) != null && null != e.guild ? (0, s.jsx)(S.default, {
                        stageInstance: e.stage_instance,
                        guild: e.guild
                    }) : (null == e ? void 0 : e.guild_scheduled_event) != null ? (0, s.jsx)(N.GuildScheduledEventInviteHeader, {
                        channel: e.channel,
                        guildScheduledEvent: e.guild_scheduled_event
                    }) : (0, s.jsx)(q.default, {
                        invite: e
                    })
                }
                renderInviteButton() {
                    let {
                        invite: e,
                        registering: t,
                        consentRequired: n
                    } = this.props, {
                        consent: a
                    } = this.state, l = B.Button.Colors.BRAND, r = ee.default.Messages.CONTINUE;
                    return (null == e ? void 0 : e.stage_instance) != null && (l = B.Button.Colors.GREEN, r = ee.default.Messages.INSTANT_INVITE_ACCEPT_STAGE), (0, s.jsx)(E.Tooltip, {
                        text: !a && n ? ee.default.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP : null,
                        children: e => (0, s.jsx)("div", {
                            className: en.marginTop20,
                            ...e,
                            children: (0, s.jsx)(B.Button, {
                                type: "submit",
                                submitting: t,
                                disabled: !this.hasConsent(),
                                color: l,
                                children: r
                            })
                        })
                    })
                }
                renderInvite() {
                    let {
                        invite: e,
                        authBoxClassName: t,
                        apiErrors: {
                            username: n,
                            global_name: a
                        }
                    } = this.props, {
                        subText: l,
                        consentText: r
                    } = this.renderConsentComponents(), i = (null == e ? void 0 : e.stage_instance) != null || (null == e ? void 0 : e.guild_scheduled_event) != null, o = e => {
                        this.setState({
                            globalName: e
                        })
                    }, u = this.state.globalName;
                    return (0, s.jsxs)("div", {
                        children: [(0, s.jsxs)(B.default, {
                            onSubmit: this.handleSubmit,
                            tag: "form",
                            className: t,
                            children: [this.renderInviteHeader(), i ? (0, s.jsx)("div", {
                                className: et.divider
                            }) : null, (0, s.jsxs)(B.Block, {
                                className: i ? void 0 : en.marginTop40,
                                children: [(0, s.jsx)(E.FormTitle, {
                                    error: ea(null != a ? a : n),
                                    children: ee.default.Messages.DISPLAY_NAME
                                }), (0, s.jsx)(E.Tooltip, {
                                    text: ee.default.Messages.AUTH_USERNAME_TOOLTIP,
                                    position: "right",
                                    color: E.Tooltip.Colors.BRAND,
                                    children: e => {
                                        let {
                                            onMouseEnter: t,
                                            onMouseLeave: l
                                        } = e;
                                        return (0, s.jsx)(B.Input, {
                                            autoFocus: !0,
                                            className: en.marginBottom8,
                                            name: "global_name",
                                            value: u,
                                            placeholder: ee.default.Messages.FORM_PLACEHOLDER_USERNAME,
                                            onChange: o,
                                            error: null != n || null != a ? "" : null,
                                            onMouseEnter: t,
                                            onMouseLeave: l
                                        })
                                    }
                                }), (0, s.jsx)(E.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: ee.default.Messages.UU_REGISTER_DISPLAY_NAME_HINT_2
                                }), this.renderInviteButton(), l, r, Z.CONFERENCE_MODE_ENABLED ? null : (0, s.jsx)(B.Button, {
                                    look: B.Button.Looks.LINK,
                                    color: B.Button.Colors.LINK,
                                    onClick: this.handleGotoLogin,
                                    className: en.marginTop20,
                                    children: ee.default.Messages.ALREADY_HAVE_ACCOUNT
                                })]
                            })]
                        }), null != e && i ? (0, s.jsx)(B.default, {
                            className: en.marginTop20,
                            children: (0, s.jsx)(S.StageInviteFooter, {
                                guild: e.guild,
                                onlineCount: e.approximate_presence_count
                            })
                        }) : null]
                    })
                }
                renderErrorMessage() {
                    let {
                        apiErrors: {
                            message: e
                        }
                    } = this.props;
                    return "string" != typeof e ? null : (0, s.jsx)(B.SubText, {
                        className: r(en.marginTop20, et.errorMessage),
                        children: e
                    })
                }
                renderFull(e, t) {
                    let {
                        email: n,
                        username: l,
                        globalName: i,
                        password: o,
                        consent: u,
                        parsedDateOfBirth: d,
                        globalNameFocused: c,
                        emailClientError: f,
                        usernameClientError: h,
                        passwordClientError: _,
                        dateOfBirthClientError: p
                    } = this.state, {
                        registering: g,
                        consentRequired: R,
                        isMobileWebInviteRegistration: A,
                        uniqueUsernameRegistrationConfig: {
                            suggestions: T
                        },
                        authBoxClassName: N,
                        apiErrors: {
                            email: S,
                            username: v,
                            global_name: O,
                            password: C,
                            date_of_birth: b
                        } = {},
                        hasLoggedInAccounts: L,
                        registrationCopyExperimentConfig: {
                            hasCopyAboveButton: M
                        }
                    } = this.props, {
                        subText: G,
                        consentText: D
                    } = this.renderConsentComponents(), U = this.renderErrorMessage(), w = (0, s.jsx)(E.Tooltip, {
                        text: !u && R ? ee.default.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP : null,
                        children: e => (0, s.jsx)("div", {
                            className: en.marginTop20,
                            ...e,
                            children: (0, s.jsx)(B.Button, {
                                type: "submit",
                                submitting: g,
                                disabled: !this.hasConsent() || this.state.isRateLimited,
                                children: ee.default.Messages.CONTINUE
                            })
                        })
                    }), F = async () => {
                        this.setState({
                            usernameFocused: !0
                        }), T && i.length > 0 && !y.default.wasRegistrationSuggestionFetched(i) && await x.default.fetchSuggestionsRegistration(i)
                    }, k = null != e ? (0, s.jsx)(a.Fragment, {
                        children: e()
                    }, "custom-header") : (0, s.jsx)(B.Title, {
                        children: ee.default.Messages.REGISTER_TITLE
                    }, "title"), j = (0, s.jsxs)(B.Block, {
                        className: en.marginTop20,
                        children: [(0, s.jsx)(B.Input, {
                            autoFocus: !0,
                            className: en.marginBottom20,
                            label: ee.default.Messages.FORM_LABEL_EMAIL,
                            name: "email",
                            value: n,
                            onChange: e => this.setState({
                                email: e,
                                emailClientError: 0 === e.length ? ee.default.Messages.REQUIRED : null
                            }),
                            error: null != f ? f : ea(S),
                            type: "email",
                            setRef: e => {
                                this.emailRef = e
                            },
                            required: !0
                        }), (0, s.jsx)(B.Input, {
                            label: ee.default.Messages.DISPLAY_NAME,
                            className: en.marginBottom20,
                            name: "global_name",
                            value: i,
                            onChange: e => this.setState({
                                globalName: e
                            }),
                            error: ea(O),
                            maxLength: $.MAX_DISPLAY_NAME_LENGTH,
                            setRef: e => {
                                this.globalNameRef = e
                            },
                            onFocus: () => this.setState({
                                globalNameFocused: !0
                            }),
                            onBlur: () => this.setState({
                                globalNameFocused: !1
                            })
                        }), (0, s.jsx)(P.default, {
                            show: c,
                            top: -12,
                            bottom: 20,
                            children: (0, s.jsx)(E.Text, {
                                variant: "text-sm/normal",
                                color: "text-normal",
                                children: ee.default.Messages.UU_REGISTER_DISPLAY_NAME_HINT_2
                            })
                        }), (0, s.jsxs)("div", {
                            onBlur: () => this.setState({
                                usernameFocused: !1
                            }),
                            onFocus: F,
                            tabIndex: -1,
                            children: [(0, s.jsx)(B.Input, {
                                label: ee.default.Messages.FORM_LABEL_USERNAME,
                                className: en.marginBottom20,
                                name: "username",
                                value: l,
                                onChange: e => {
                                    this.setState({
                                        username: e.toLocaleLowerCase(),
                                        usernameClientError: 0 === e.length ? ee.default.Messages.REQUIRED : null
                                    })
                                },
                                error: null != h ? h : ea(v),
                                setRef: e => {
                                    this.usernameRef = e
                                },
                                required: !0
                            }), this.renderUsernameValidation()]
                        }), (0, s.jsx)(B.Input, {
                            label: ee.default.Messages.FORM_LABEL_PASSWORD,
                            name: "password",
                            value: o,
                            onChange: e => this.setState({
                                password: e,
                                passwordClientError: 0 === e.length ? ee.default.Messages.REQUIRED : null
                            }),
                            error: null != _ ? _ : ea(C),
                            type: "password",
                            setRef: e => {
                                this.passwordRef = e
                            },
                            required: !0
                        }), (0, s.jsx)(m.default, {
                            label: ee.default.Messages.AGE_GATE_YOUR_BIRTHDAY,
                            wrapperClassName: en.marginTop20,
                            name: "date_of_birth",
                            onChange: this.handleBirthdayChange,
                            ref: this.dateOfBirthRef,
                            error: null != p ? p : ea(b),
                            value: d,
                            required: !0
                        }), M && G, (0, s.jsx)(I.default, {}), w, U, D, !M && G, Z.CONFERENCE_MODE_ENABLED ? null : (0, s.jsx)(B.Button, {
                            look: A ? B.Button.Looks.FILLED : B.Button.Looks.LINK,
                            color: A ? B.Button.Colors.PRIMARY : B.Button.Colors.LINK,
                            onClick: this.handleGotoLogin,
                            className: en.marginTop20,
                            children: ee.default.Messages.ALREADY_HAVE_ACCOUNT
                        })]
                    });
                    return t ? (0, s.jsx)(K.default, {
                        onSubmit: this.handleSubmit,
                        tag: "form",
                        className: r(N, et.horizontalAuthBox),
                        children: () => [k, (0, s.jsxs)("div", {
                            className: et.flex,
                            children: [(0, s.jsx)(B.Title, {
                                className: et.createAccountTemplateHeader,
                                children: ee.default.Messages.REGISTER_TITLE
                            }), j]
                        }, "register-title")]
                    }) : (0, s.jsxs)(B.default, {
                        onSubmit: this.handleSubmit,
                        tag: "form",
                        className: N,
                        children: [L && !A ? (0, s.jsx)(B.Button, {
                            onClick: this.handleGotoLogin,
                            look: B.Button.Looks.LINK,
                            color: B.Button.Colors.PRIMARY,
                            className: et.goBackButton,
                            children: (0, s.jsxs)("div", {
                                className: et.content,
                                children: [(0, s.jsx)(H.default, {
                                    width: 16,
                                    height: 16,
                                    className: et.caret
                                }), (0, s.jsx)(E.Text, {
                                    variant: "text-md/normal",
                                    children: ee.default.Messages.AGE_GATE_GO_BACK
                                })]
                            })
                        }) : null, k, j]
                    })
                }
                render() {
                    let {
                        isUnderage: e,
                        isMobileWebInviteRegistration: t
                    } = this.props;
                    if (e || this.hasError("date_of_birth")) return (0, s.jsx)(_.default, {});
                    let {
                        invite: n,
                        giftCode: a,
                        guildTemplate: l
                    } = this.props, r = null != n && null == n.guild && null == n.channel && null != n.inviter;
                    return null == n || r || t ? null != l ? this.renderFull(() => (0, s.jsx)(C.default, {
                        guildTemplate: l
                    }), !0) : null != a ? this.renderFull(() => (0, s.jsx)(z.default, {
                        giftCode: a
                    })) : null != n && r && n.state === X.InviteStates.RESOLVED && !t ? this.renderFull(() => (0, s.jsx)(q.default, {
                        invite: n,
                        isRegister: !0
                    })) : this.renderFull() : n.state === X.InviteStates.RESOLVING ? this.renderInviteResolving() : this.renderInvite()
                }
                constructor(e) {
                    var t;
                    super(e), this.dateOfBirthRef = a.createRef(), this._retryTimer = new c.Timeout, this.handleGotoLogin = e => {
                        let t;
                        let {
                            email: n
                        } = this.state, {
                            giftCode: s,
                            guildTemplate: a,
                            invite: l,
                            location: r,
                            onLoginStart: o,
                            redirectTo: u,
                            transitionTo: d,
                            isMobileWebInviteRegistration: c
                        } = this.props;
                        if (c) {
                            null == o || o(e);
                            return
                        }
                        let E = null != r ? (0, i.parse)(r.search) : {};
                        null != l ? t = X.Routes.INVITE_LOGIN(l.code) : null != s ? t = X.Routes.GIFT_CODE_LOGIN(s.code) : null != a ? t = X.Routes.GUILD_TEMPLATE_LOGIN(a.code) : null != u ? (t = X.Routes.LOGIN, E.redirect_to = u) : (t = X.Routes.LOGIN, "" !== n && (E = {
                            email: n
                        })), f.default.loginReset(), d(t, {
                            search: (0, i.stringify)(E)
                        }), null == o || o(e), Y.ComponentDispatch.dispatch(X.ComponentActions.WAVE_EMPHASIZE)
                    }, this.handleSubmit = e => {
                        null == e || e.preventDefault();
                        let {
                            email: t,
                            username: n,
                            password: s,
                            parsedDateOfBirth: a
                        } = this.state, {
                            invite: l,
                            consentRequired: r
                        } = this.props;
                        if (null !== r) {
                            if (null == l) {
                                let e = !1;
                                if (0 === t.length && (this.setState({
                                        emailClientError: ee.default.Messages.REQUIRED
                                    }), e = !0), 0 === n.length && (this.setState({
                                        usernameClientError: ee.default.Messages.REQUIRED
                                    }), e = !0), 0 === s.length && (this.setState({
                                        passwordClientError: ee.default.Messages.REQUIRED
                                    }), e = !0), null == a && (this.setState({
                                        dateOfBirthClientError: ee.default.Messages.REQUIRED
                                    }), e = !0), e) return
                            }
                            this.handleRegister()
                        }
                    }, this.handleBirthdayChange = e => {
                        this.setState({
                            parsedDateOfBirth: e
                        }), null != e && this.setState({
                            dateOfBirthClientError: null
                        })
                    }, this.renderUsernameValidation = () => {
                        let {
                            username: e,
                            globalName: t,
                            usernameFocused: n
                        } = this.state, {
                            usernameSuggestion: a,
                            uniqueUsernameRegistrationConfig: {
                                livecheckEnabled: l
                            }
                        } = this.props;
                        return (0, s.jsx)(ei, {
                            username: e,
                            suggestion: a,
                            livecheckEnabled: l,
                            globalName: t,
                            isUsernameFocused: n,
                            onClickSuggestion: () => {
                                null != this.usernameRef && this.usernameRef.focus(), null != a && a.length > 0 && this.setState({
                                    username: a
                                })
                            }
                        })
                    };
                    let n = null != e.location ? (0, i.parse)(e.location.search) : {};
                    this.state = {
                        email: null !== (t = n.email) && void 0 !== t ? t : "",
                        username: "",
                        globalName: "",
                        password: "",
                        parsedDateOfBirth: null,
                        emailClientError: null,
                        usernameClientError: null,
                        passwordClientError: null,
                        dateOfBirthClientError: null,
                        consent: !e.consentRequired,
                        consentRequiredProp: e.consentRequired,
                        isRateLimited: !1,
                        globalNameFocused: !1,
                        usernameFocused: !1
                    }
                }
            }

            function er(e) {
                let t = (0, d.useStateFromStoresObject)([k.default, F.default, h.default, M.default, b.default], () => ({
                        consentRequired: k.default.getAuthenticationConsentRequired(),
                        registering: F.default.getRegisterStatus() === X.RegistrationStates.REGISTERING,
                        apiErrors: F.default.getErrors(),
                        authenticated: F.default.isAuthenticated(),
                        isUnderage: h.default.isUnderageAnonymous(),
                        country: M.default.getCountryCode(),
                        hasLoggedInAccounts: b.default.getHasLoggedInAccounts()
                    })),
                    n = (0, D.useUURegistrationExperiment)(),
                    l = (0, d.useStateFromStores)([y.default], () => y.default.registrationUsernameSuggestion()),
                    [r, i] = a.useState(Q.RegistrationSteps.FULL);
                return (0, p.default)({
                    type: u.ImpressionTypes.VIEW,
                    name: u.ImpressionNames.USER_REGISTRATION,
                    properties: {
                        impression_group: u.ImpressionGroups.USER_REGISTRATION_FLOW,
                        step: r
                    }
                }, {}, [r]), (0, s.jsx)(el, {
                    onChangeStep: e => i(e),
                    registrationCopyExperimentConfig: R.default.getCurrentConfig({
                        location: "0ba758_2"
                    }, {
                        autoTrackExposure: !1
                    }),
                    uniqueUsernameRegistrationConfig: n,
                    usernameSuggestion: l,
                    ...e,
                    ...t
                })
            }

            function ei(e) {
                let t, {
                        username: n,
                        suggestion: a,
                        globalName: l,
                        livecheckEnabled: r,
                        isUsernameFocused: i,
                        onClickSuggestion: u
                    } = e,
                    d = (0, U.useUsernameStatus)(n, r, !0),
                    c = r && n.length > 0;
                return t = c ? (0, o.match)(d).with({
                    type: G.NameValidationState.ERROR,
                    message: o.P.select()
                }, e => (0, s.jsx)(E.Text, {
                    className: et.messageNegative,
                    variant: "text-sm/normal",
                    children: e
                })).with({
                    type: G.NameValidationState.AVAILABLE,
                    message: o.P.select()
                }, e => (0, s.jsx)(E.Text, {
                    className: et.messagePositive,
                    variant: "text-sm/normal",
                    children: e
                })).otherwise(() => (0, s.jsx)(E.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal",
                    children: ee.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
                })) : null != a && a.length > 0 && l.length > 0 ? (0, s.jsx)(E.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal",
                    children: ee.default.Messages.UU_REGISTER_SUGGESTION.format({
                        suggestion: a,
                        nameOnClick: u
                    })
                }) : (0, s.jsx)(E.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal",
                    children: ee.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
                }), (0, s.jsx)(P.default, {
                    show: c && (null == d ? void 0 : d.type) === G.NameValidationState.ERROR || i,
                    top: -12,
                    bottom: 20,
                    children: t
                })
            }
            el.defaultProps = {
                giftCodeResolved: !1,
                transitionTo: e => n.g.location.assign(e)
            }
        },
        532760: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("862205");
            let a = (0, s.createExperiment)({
                kind: "user",
                id: "2023-02_mfa_remove_phone",
                label: "Safety Experience MFA Remove Phone",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var l = a
        },
        26772: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var s = n("872717"),
                a = n("913144"),
                l = n("437822"),
                r = n("697796"),
                i = n("524824"),
                o = n("72177"),
                u = n("599110"),
                d = n("316272"),
                c = n("49111");

            function E(e, t) {
                u.default.track(c.AnalyticEvents.BROWSER_HANDOFF_SUCCEEDED, {
                    authenticated: e,
                    handoff_source: t
                })
            }
            class f extends d.default {
                _initialize() {
                    a.default.subscribe("BROWSER_HANDOFF_END", this.handleEnd), a.default.subscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff)
                }
                _terminate() {
                    a.default.unsubscribe("BROWSER_HANDOFF_END", this.handleEnd), a.default.unsubscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff)
                }
                handleHandoff(e) {
                    let {
                        handoffKey: t,
                        handoffToken: n,
                        fingerprint: a,
                        handoffSource: o
                    } = e;
                    null != n ? s.default.post({
                        url: c.Endpoints.HANDOFF_EXCHANGE,
                        body: {
                            key: t,
                            handoff_token: n
                        }
                    }).then(e => {
                        let {
                            body: t
                        } = e;
                        (0, r.handoffSetUser)(t.user), l.default.loginToken(t.token, !1), E(!0, o)
                    }, e => {
                        if (null != a && E(!1, o), l.default.setFingerprint(a), (0, r.handoffEnd)(), o === i.LoginHandoffSource.ROLE_SUBSCRIPTION) {
                            var t;
                            u.default.track(c.AnalyticEvents.MOBILE_WEB_HANDOFF_FAILURE, {
                                reason: null !== (t = e.message) && void 0 !== t ? t : e.text,
                                handoff_source: o
                            })
                        }
                    }) : null != a ? (l.default.setFingerprint(a), E(!1, o), (0, r.handoffEnd)()) : (l.default.setFingerprint(a), (0, r.handoffUnavailable)())
                }
                constructor(...e) {
                    super(...e), this.handleEnd = e => {
                        let {
                            handoffToken: t,
                            fingerprint: n
                        } = e, s = o.default.key;
                        null != s && o.default.isHandoffAvailable() ? this.handleHandoff({
                            handoffKey: s,
                            handoffToken: t,
                            fingerprint: n,
                            handoffSource: void 0
                        }) : (l.default.setFingerprint(null), (0, r.handoffUnavailable)())
                    }
                }
            }
            var h = new f
        },
        2021: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("90915"),
                r = n("266491");
            class i extends a.Component {
                render() {
                    let {
                        children: e,
                        location: t,
                        history: n,
                        staticContext: i,
                        match: o,
                        ...u
                    } = this.props, d = null, c = null;
                    return a.Children.forEach(e, e => {
                        if (null == d && a.isValidElement(e)) {
                            let {
                                component: s,
                                render: r,
                                ...o
                            } = e.props, u = o.path || o.from;
                            null != (d = null != u ? (0, l.matchPath)(t.pathname, {
                                ...o,
                                path: u
                            }) : null) && (o = {
                                ...o,
                                key: u,
                                location: t,
                                match: d,
                                history: n,
                                staticContext: i
                            }, null != s ? c = a.createElement(s, o) : null != r && (c = r(o)))
                        }
                    }), (0, s.jsx)(r.default, {
                        ...u,
                        children: c
                    })
                }
            }
            var o = (0, l.withRouter)(i)
        },
        731109: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                submitDateOfBirth: function() {
                    return u
                },
                preventUnderageRegistration: function() {
                    return d
                },
                logoutUnderageNewUser: function() {
                    return c
                }
            });
            var s = n("872717"),
                a = n("913144"),
                l = n("395724"),
                r = n("599110"),
                i = n("586391"),
                o = n("49111");

            function u(e, t) {
                return (0, l.default)(e, t), r.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
                    source: t,
                    action: i.AgeGateAnalyticAction.AGE_GATE_SUBMITTED
                }), s.default.patch({
                    url: o.Endpoints.ME,
                    oldFormErrors: !0,
                    body: {
                        date_of_birth: e.format("YYYY-MM-DD")
                    }
                }).then(e => {
                    let n = e.body;
                    a.default.dispatch({
                        type: "CURRENT_USER_UPDATE",
                        user: n
                    }), r.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
                        source: t,
                        action: i.AgeGateAnalyticAction.AGE_GATE_SUCCESS
                    })
                })
            }

            function d(e) {
                a.default.dispatch({
                    type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION"
                }), r.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
                    source: e,
                    action: i.AgeGateAnalyticAction.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION
                })
            }

            function c(e) {
                a.default.dispatch({
                    type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER"
                }), r.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
                    source: e,
                    action: i.AgeGateAnalyticAction.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER
                })
            }
        },
        678916: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("160679"),
                a = n("446674"),
                l = n("913144"),
                r = n("773336"),
                i = n("586391");
            let o = null,
                u = "underage";
            class d extends a.default.Store {
                isUnderageAnonymous() {
                    if (r.isPlatformEmbedded) {
                        if (null != o && o + i.AGE_GATE_REGISTER_TIMEOUT_MS > Date.now()) return !0
                    } else {
                        let e = s.parse(document.cookie)[u];
                        return null != e
                    }
                    return !1
                }
            }
            d.displayName = "AgeGateStore";
            var c = new d(l.default, {
                AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function() {
                    o = Date.now(), document.cookie = "".concat(u, "=1;path=/")
                },
                LOGIN_SUCCESS: function() {
                    o = null, document.cookie = "".concat(u, "=1;path=/;max-age=0")
                }
            })
        },
        816540: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("393414"),
                r = n("124969"),
                i = n("701909"),
                o = n("49111"),
                u = n("782340"),
                d = n("177977");
            let c = () => (0, l.transitionTo)(o.Routes.LOGIN);
            var E = e => {
                let {
                    authBoxClassName: t,
                    underageMessage: l
                } = e;
                return (0, s.jsxs)(r.default, {
                    className: t,
                    children: [(0, s.jsx)("img", {
                        alt: "",
                        src: n("803452"),
                        className: d.img
                    }), (0, s.jsx)(r.Title, {
                        className: d.title,
                        children: u.default.Messages.AGE_GATE_UNDERAGE_HEADER
                    }), (0, s.jsx)(r.SubTitle, {
                        className: d.subtitle,
                        children: u.default.Messages.AGE_GATE_UNDERAGE_BODY.format({
                            underageMessage: null != l ? l : u.default.Messages.AGE_GATE_UNDERAGE_BODY_DEFAULT_REG_MESSAGE,
                            helpURL: i.default.getArticleURL(o.HelpdeskArticles.AGE_GATE)
                        })
                    }), (0, s.jsx)(a.Button, {
                        fullWidth: !0,
                        onClick: c,
                        children: u.default.Messages.AGE_GATE_UNDERAGE_BACK_TO_LOGIN
                    })]
                })
            }
        },
        208266: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                r = n.n(l),
                i = n("866227"),
                o = n.n(i),
                u = n("77078"),
                d = n("954419"),
                c = n("782340"),
                E = n("512427");
            let f = o().localeData().months(),
                h = Array.from(Array(31).keys()).map(e => ({
                    value: e + 1,
                    label: "".concat(e + 1)
                })),
                _ = Array.from(Array(12).keys()).map(e => ({
                    value: e + 1,
                    label: f[e]
                })),
                m = /[a-zA-Z0-9]/;

            function p(e) {
                let {
                    options: t,
                    selectOption: n,
                    children: l
                } = e, [r, i] = a.useState("");
                a.useEffect(() => {
                    if ("" !== r) {
                        let e = setTimeout(() => i(""), 1e3);
                        return () => clearTimeout(e)
                    }
                }, [r, i]);
                let o = a.useCallback(e => {
                    if (m.test(e.key)) {
                        let s = "".concat(r).concat(e.key.toLowerCase()),
                            a = t.find(e => e.label.toLowerCase().startsWith(s));
                        null != a && n(a.value), i(s)
                    }
                }, [n, i, r, t]);
                return (0, s.jsx)("div", {
                    onKeyDown: o,
                    children: l
                })
            }

            function g() {
                let e = o().localeData().longDateFormat("L"),
                    t = e.indexOf("D"),
                    n = e.indexOf("M"),
                    s = e.indexOf("Y");
                return (-1 === t || -1 === n || -1 === s) && (t = 0, n = 1, s = 2), [{
                    index: t,
                    type: "day"
                }, {
                    index: n,
                    type: "month"
                }, {
                    index: s,
                    type: "year"
                }].sort((e, t) => e.index < t.index ? -1 : 1)
            }
            let R = a.forwardRef(function(e, t) {
                let {
                    value: n,
                    wrapperClassName: l,
                    onChange: i,
                    onPopulated: f,
                    error: m,
                    autoFocus: R,
                    required: A
                } = e, {
                    day: T,
                    setDay: N,
                    month: I,
                    setMonth: S,
                    year: v,
                    setYear: O
                } = function(e) {
                    let t = null,
                        n = null,
                        s = null;
                    null != e && (t = e.date(), n = e.month() + 1, s = e.year());
                    let [l, r] = a.useState(t), [i, o] = a.useState(n), [u, d] = a.useState(s);
                    return {
                        day: l,
                        setDay: r,
                        month: i,
                        setMonth: o,
                        year: u,
                        setYear: d
                    }
                }(n), C = a.useMemo(() => null != T && null != I && null != v ? o("".concat(T, "/").concat(I, "/").concat(v), "DD/MM/YYYY") : null, [T, I, v]);
                a.useEffect(() => {
                    i((null == C ? void 0 : C.isValid()) ? C : null)
                }, [C, i]);
                let b = m;
                null != C && !C.isValid() && (b = c.default.Messages.AGE_GATE_INVALID_BIRTHDAY);
                let L = function() {
                        let e = new Date().getFullYear(),
                            t = a.useRef(Array.from(Array(150).keys()).map(t => ({
                                value: e - t - 3,
                                label: "".concat(e - t - 3)
                            })));
                        return a.useEffect(() => {
                            t.current = Array.from(Array(150).keys()).map(t => ({
                                value: e - t - 3,
                                label: "".concat(e - t - 3)
                            }))
                        }, [e]), t.current
                    }(),
                    [M, x] = a.useState(R ? 0 : -1),
                    y = a.useRef(null),
                    G = a.useRef(null),
                    D = a.useRef(null),
                    U = a.useMemo(g, []),
                    P = a.useCallback(() => {
                        var e, t, n, s;
                        switch (null === (e = U[M]) || void 0 === e ? void 0 : e.type) {
                            case "day":
                                null === (t = y.current) || void 0 === t || t.focus();
                                break;
                            case "month":
                                null === (n = G.current) || void 0 === n || n.focus();
                                break;
                            case "year":
                                null === (s = D.current) || void 0 === s || s.focus()
                        }
                    }, [M, y, G, D, U]);
                a.useEffect(() => {
                    setTimeout(P, 500)
                }, []), a.useEffect(() => {
                    if (M >= U.length) {
                        null == f || f();
                        return
                    }
                    P()
                }, [M, P]);
                let w = [];
                for (let e = 0; e < 3; e++) {
                    let {
                        type: t
                    } = U[e];
                    switch (t) {
                        case "day":
                            w.push({
                                key: "day",
                                input: (0, s.jsx)(p, {
                                    options: h,
                                    selectOption: N,
                                    children: (0, s.jsx)(d.default, {
                                        ref: y,
                                        className: E.inputDay,
                                        "aria-label": c.default.Messages.AGE_GATE_DOB_DAY,
                                        menuPlacement: d.default.MenuPlacements.TOP,
                                        placeholder: (0, s.jsx)("span", {
                                            "aria-hidden": !0,
                                            children: c.default.Messages.AGE_GATE_DOB_DAY
                                        }),
                                        options: h,
                                        value: T,
                                        onChange: t => {
                                            let {
                                                value: n
                                            } = t;
                                            N(n), x(e + 1)
                                        },
                                        maxMenuHeight: 215
                                    })
                                })
                            });
                            break;
                        case "month":
                            w.push({
                                key: "month",
                                input: (0, s.jsx)(p, {
                                    options: _,
                                    selectOption: S,
                                    children: (0, s.jsx)(d.default, {
                                        ref: G,
                                        className: E.inputMonth,
                                        "aria-label": c.default.Messages.AGE_GATE_DOB_MONTH,
                                        menuPlacement: d.default.MenuPlacements.TOP,
                                        placeholder: (0, s.jsx)("span", {
                                            "aria-hidden": !0,
                                            children: c.default.Messages.AGE_GATE_DOB_MONTH
                                        }),
                                        options: _,
                                        value: I,
                                        onChange: t => {
                                            let {
                                                value: n
                                            } = t;
                                            S(n), x(e + 1)
                                        },
                                        maxMenuHeight: 215
                                    })
                                })
                            });
                            break;
                        case "year":
                            w.push({
                                key: "year",
                                input: (0, s.jsx)(p, {
                                    options: L,
                                    selectOption: O,
                                    children: (0, s.jsx)(d.default, {
                                        ref: D,
                                        className: E.inputYear,
                                        "aria-label": c.default.Messages.AGE_GATE_DOB_YEAR,
                                        menuPlacement: d.default.MenuPlacements.TOP,
                                        placeholder: (0, s.jsx)("span", {
                                            "aria-hidden": !0,
                                            children: c.default.Messages.AGE_GATE_DOB_YEAR
                                        }),
                                        options: L,
                                        value: v,
                                        onChange: t => {
                                            let {
                                                value: n
                                            } = t;
                                            O(n), x(e + 1)
                                        },
                                        maxMenuHeight: 215
                                    })
                                })
                            })
                    }
                }
                return (0, s.jsxs)("fieldset", {
                    className: r(E.container, l),
                    children: [(0, s.jsx)(u.FormTitle, {
                        tag: "legend",
                        required: A,
                        error: b,
                        children: c.default.Messages.AGE_GATE_DATE_OF_BIRTH
                    }), (0, s.jsx)("div", {
                        className: E.inputs,
                        children: w.map((e, t) => {
                            let {
                                key: n,
                                input: a
                            } = e;
                            return (0, s.jsx)("div", {
                                tabIndex: t + 1,
                                className: E[n],
                                children: a
                            }, n)
                        })
                    })]
                })
            });
            var A = R
        },
        771848: function(e, t, n) {
            "use strict";
            var s, a, l, r;
            n.r(t), n.d(t, {
                RegistrationSteps: function() {
                    return a
                }
            }), (l = s || (s = {})).VIEWED = "viewed", l.SUBMITTED = "submitted", l.RESEND_CODE = "resend_code", l.INPUT_ERROR = "input_error", l.RESPONSE_ERROR = "response_error", l.SUCCESS = "success", (r = a || (a = {})).IDENTITY = "identity", r.DISPLAY_NAME = "display_name", r.ACCOUNT_INFORMATION = "account_information", r.FULL = "full", r.AGE_GATE = "age_gate", r.INVITE = "invite", r.SMS_VERIFY = "sms_verify"
        },
        765825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var s = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2022-04_registration_copy_updates",
                label: "Registration Copy Updates",
                defaultConfig: {
                    enableNewCopy: !1,
                    hasCopyAboveButton: !1,
                    hasProminentCopy: !1
                },
                treatments: [{
                    id: 1,
                    label: "Continue / Copy Above Button / High Prominence Copy",
                    config: {
                        enableNewCopy: !0,
                        hasCopyAboveButton: !0,
                        hasProminentCopy: !0
                    }
                }, {
                    id: 2,
                    label: "Continue / Copy Below Button / High Prominence Copy",
                    config: {
                        enableNewCopy: !0,
                        hasCopyAboveButton: !1,
                        hasProminentCopy: !0
                    }
                }, {
                    id: 3,
                    label: "Continue / Copy Above Button / Normal Prominence Copy",
                    config: {
                        enableNewCopy: !0,
                        hasCopyAboveButton: !0,
                        hasProminentCopy: !1
                    }
                }]
            })
        },
        395724: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var s = n("866227"),
                a = n.n(s),
                l = n("599110"),
                r = n("49111");

            function i(e, t) {
                l.default.track(r.AnalyticEvents.AGE_GATE_SUBMITTED, {
                    dob: 18 > a().diff(e, "years") ? e.format("YYYY-MM-DD") : null,
                    dob_day: e.date(),
                    dob_month: e.month() + 1,
                    dob_year: e.year(),
                    source: {
                        section: t
                    }
                })
            }
        },
        715570: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                },
                registerFull: function() {
                    return m
                }
            });
            var s = n("866227"),
                a = n.n(s),
                l = n("759843"),
                r = n("913144"),
                i = n("599417"),
                o = n("731109"),
                u = n("271938"),
                d = n("599110"),
                c = n("840707"),
                E = n("395724"),
                f = n("49111"),
                h = n("586391");

            function _(e) {
                let {
                    invite: t = null,
                    giftCodeSKUId: n = null,
                    ...s
                } = e;
                return m({
                    ...s,
                    invite: t,
                    giftCodeSKUId: n
                })
            }

            function m(e) {
                let {
                    email: t,
                    phoneToken: n,
                    username: s,
                    globalName: _,
                    consent: m,
                    password: p,
                    guildTemplateCode: g,
                    birthday: R,
                    invite: A = null,
                    giftCodeSKUId: T = null,
                    multiStep: N = !1,
                    promoEmailConsent: I = null,
                    usedUsernameSuggestion: S = null
                } = e;
                return r.default.dispatch({
                    type: "REGISTER",
                    birthday: N ? R : null
                }), null != R && ((0, E.default)(R, f.AnalyticsSections.REGISTER), d.default.track(f.AnalyticEvents.AGE_GATE_ACTION, {
                    source: h.AgeGateSource.REGISTER,
                    action: h.AgeGateAnalyticAction.AGE_GATE_SUBMITTED
                }), ! function(e) {
                    let t;
                    let n = a().diff(e, "years");
                    !(n < 13) && (t = n >= 13 && n <= 17 ? "13-17" : n >= 18 && n <= 22 ? "18-22" : "23+", d.default.track(f.AnalyticEvents.USER_AGE_SUBMITTED, {
                        age_bucket: t
                    }))
                }(R)), c.default.post({
                    url: f.Endpoints.REGISTER,
                    body: {
                        fingerprint: u.default.getFingerprint(),
                        email: t,
                        username: s,
                        global_name: _,
                        password: p,
                        invite: A,
                        consent: m,
                        phone_token: n,
                        date_of_birth: null == R ? void 0 : R.format("YYYY-MM-DD"),
                        gift_code_sku_id: T,
                        guild_template_code: g,
                        promotional_email_opt_in: null == I ? void 0 : I.checked
                    },
                    trackedActionData: {
                        event: l.NetworkActionNames.USER_REGISTER,
                        properties: {
                            invite_code: A,
                            used_username_suggestion: S,
                            promotional_email_opt_in: null == I ? void 0 : I.checked,
                            promotional_email_pre_checked: null == I ? void 0 : I.preChecked,
                            was_unique_username: !0
                        }
                    }
                }).then(e => {
                    r.default.dispatch({
                        type: "REGISTER_SUCCESS",
                        token: e.body.token
                    }), d.default.track(f.AnalyticEvents.AGE_GATE_ACTION, {
                        source: h.AgeGateSource.REGISTER,
                        action: h.AgeGateAnalyticAction.AGE_GATE_SUCCESS
                    })
                }, e => {
                    let t = new i.default(e);
                    throw r.default.dispatch({
                        type: "REGISTER_FAILURE",
                        error: t
                    }), null != t.getFieldErrors("date_of_birth") && o.preventUnderageRegistration(h.AgeGateSource.REGISTER), d.default.track(f.AnalyticEvents.REGISTER_SUBMIT_ERRORED, {
                        is_unique_username_registration: !0,
                        email_error_reason: t.getFirstFieldErrorMessage("email"),
                        phone_error_reason: t.getFirstFieldErrorMessage("phone"),
                        password_error_reason: t.getFirstFieldErrorMessage("password"),
                        username_error_reason: t.getFirstFieldErrorMessage("username"),
                        global_name_error_reason: t.getFirstFieldErrorMessage("global_name"),
                        date_of_birth_error_reason: t.getFirstFieldErrorMessage("date_of_birth")
                    }), e
                })
            }
        },
        486252: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("414456"),
                l = n.n(a),
                r = n("77078"),
                i = n("145131"),
                o = n("124969"),
                u = n("662617"),
                d = n("926622");

            function c(e) {
                let {
                    value: t,
                    onChange: n,
                    subText: a,
                    muted: c,
                    marginTopStyle: E
                } = e;
                return (0, s.jsx)(i.default, {
                    className: null != E ? E : d.marginTop20,
                    align: i.default.Align.CENTER,
                    children: (0, s.jsx)(r.Checkbox, {
                        value: t,
                        type: r.Checkbox.Types.INVERTED,
                        onChange: (e, t) => n(t),
                        className: u.checkbox,
                        children: (0, s.jsx)(o.SubText, {
                            className: l({
                                [u.subText]: !c
                            }),
                            children: a
                        })
                    })
                })
            }
        },
        378020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildScheduledEventInviteHeader: function() {
                    return u
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("419830"),
                r = n("400271"),
                i = n("839427");

            function o(e) {
                let {
                    channel: t
                } = e, n = (0, l.getSimpleChannelIconComponent)(t.type);
                return (0, s.jsxs)("div", {
                    className: i.channelInfoContainer,
                    children: [null != n ? (0, s.jsx)(n, {
                        width: 20,
                        height: 20
                    }) : null, (0, s.jsx)(a.Text, {
                        className: i.channelInfoText,
                        color: "none",
                        variant: "text-sm/semibold",
                        children: t.name
                    })]
                })
            }

            function u(e) {
                let {
                    channel: t,
                    guildScheduledEvent: n
                } = e;
                return (0, s.jsxs)("div", {
                    className: i.container,
                    children: [(0, s.jsx)(r.GuildEventStatus, {
                        className: i.statusContainer,
                        guildId: n.guild_id,
                        guildEventId: n.id,
                        eventPreview: n
                    }), (0, s.jsx)(r.GuildEventDetails, {
                        name: n.name,
                        description: n.description,
                        guildId: n.guild_id
                    }), null != t && n.channel_id === t.id ? (0, s.jsx)(o, {
                        channel: t
                    }) : null]
                })
            }
        },
        980976: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("307439"),
                l = n("486252"),
                r = n("782340"),
                i = n("926622");

            function o() {
                let {
                    required: e,
                    checked: t
                } = (0, a.usePromoEmailConsentStore)();
                return e ? (0, s.jsx)(l.default, {
                    value: t,
                    subText: r.default.Messages.PROMOTIONAL_EMAIL_OPT_IN_CONSENT,
                    onChange: a.setPromoEmailConsentChecked,
                    marginTopStyle: i.marginTop8,
                    muted: !0
                }) : null
            }
        },
        724038: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var s = n("597755"),
                a = n.n(s),
                l = n("742270"),
                r = n("815157"),
                i = n("391679"),
                o = n("327037"),
                u = n("393414"),
                d = n("271938"),
                c = n("476108"),
                E = n("599110"),
                f = n("65300"),
                h = n("49111");
            async function _(e) {
                var t, n;
                let s = null === (t = a.os) || void 0 === t ? void 0 : t.family;
                if ("Android" === s || "iOS" === s) {
                    let t = null !== (n = d.default.getFingerprint()) && void 0 !== n ? n : d.default.getId(),
                        s = (0, r.generateAttemptId)();
                    if (null == t && d.default.isAuthenticated()) try {
                        await (0, o.fetchCurrentUser)(), t = d.default.getId()
                    } catch {}
                    return (0, r.default)((0, l.getDefaultDynamicLinkTemplate)(), {
                        utmSource: e,
                        fingerprint: t,
                        attemptId: s
                    })
                }
                return "discord://"
            }
            async function m(e) {
                let t = await _(e),
                    n = (0, r.parseDynamicLink)(t);
                null != n && E.default.track(h.AnalyticEvents.DEEP_LINK_CLICKED, {
                    fingerprint: (0, i.maybeExtractId)(n.fingerprint),
                    attempt_id: n.attemptId,
                    source: n.utmSource
                }), f.default.launch(t, e => {
                    !e && (0, u.replaceWith)(c.default.fallbackRoute)
                })
            }
        },
        946859: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                formatUsername: function() {
                    return a
                }
            });
            var s = n("50885");
            async function a(e) {
                try {
                    return await s.default.getSetting("USERNAME_PREFIX", "") + e
                } catch (e) {}
                return e
            }
        },
        11291: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useHalloween2023Enabled: function() {
                    return l
                },
                isHalloween2023Enabled: function() {
                    return r
                },
                subscribeToHalloweenExperiment: function() {
                    return i
                }
            });
            var s = n("862205");
            let a = (0, s.createExperiment)({
                    kind: "user",
                    id: "2023-10_halloween_2023",
                    label: "Halloween assets 2023",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Halloween assets enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                l = () => {
                    let {
                        enabled: e
                    } = a.useExperiment({
                        location: "1"
                    }, {
                        autoTrackExposure: !1
                    });
                    return e
                },
                r = () => {
                    let {
                        enabled: e
                    } = a.getCurrentConfig({
                        location: "1"
                    }, {
                        autoTrackExposure: !1
                    });
                    return e
                },
                i = e => a.subscribe({
                    location: "subscribe"
                }, e)
        },
        684581: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("11291"),
                a = n("782340"),
                l = n("356002"),
                r = n("197492");
            let i = {
                ringtone: {
                    name: "call_ringing_halloween",
                    filename: "call_ringing_halloween.mp3"
                },
                soundSettingsLabel: () => a.default.Messages.SOUND_INCOMING_RING_HALLOWEEN + " \uD83C\uDF83",
                subscribeToEligibility: s.subscribeToHalloweenExperiment,
                isEligible: s.isHalloween2023Enabled,
                useIsEligible: s.useHalloween2023Enabled,
                getAppSpinnerSources: () => {
                    let e = Date.now();
                    if (!(e < 16976484e5) && !(e > 16990308e5)) return {
                        webmDark: l,
                        webmLight: r
                    }
                },
                getLoadingTips: () => {
                    let e = Date.now();
                    if (!(e < 16976484e5) && !(e > 16990308e5)) return [a.default.Messages.HALLOWEEN_LOADING_TEXT_1, a.default.Messages.HALLOWEEN_LOADING_TEXT_2, a.default.Messages.HALLOWEEN_LOADING_TEXT_3, a.default.Messages.HALLOWEEN_LOADING_TEXT_4, a.default.Messages.HALLOWEEN_LOADING_TEXT_5, a.default.Messages.HALLOWEEN_LOADING_TEXT_6, a.default.Messages.HALLOWEEN_LOADING_TEXT_7, a.default.Messages.HALLOWEEN_LOADING_TEXT_8, a.default.Messages.HALLOWEEN_LOADING_TEXT_9]
                }
            };
            var o = i
        },
        878720: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChangePhoneReason: function() {
                    return a
                },
                default: function() {
                    return _
                }
            });
            var s, a, l = n("759843"),
                r = n("872717"),
                i = n("913144"),
                o = n("532760"),
                u = n("271938"),
                d = n("730622"),
                c = n("840707"),
                E = n("482931"),
                f = n("49111"),
                h = n("782340");
            (s = a || (a = {})).USER_ACTION_REQUIRED = "user_action_required", s.USER_SETTINGS_UPDATE = "user_settings_update", s.GUILD_PHONE_REQUIRED = "guild_phone_required", s.MFA_PHONE_UPDATE = "mfa_phone_update", s.CONTACT_SYNC = "contact_sync";
            var _ = {
                setCountryCode(e) {
                    i.default.dispatch({
                        type: "PHONE_SET_COUNTRY_CODE",
                        countryCode: e
                    })
                },
                removePhone: (e, t) => o.default.getCurrentConfig({
                    location: "81427d_1"
                }, {
                    autoTrackExposure: !1
                }).enabled ? (0, d.default)(n => r.default.delete({
                    url: f.Endpoints.PHONE,
                    body: {
                        password: e,
                        change_phone_reason: t,
                        ...n
                    },
                    oldFormErrors: !0
                }), {
                    modalProps: {
                        title: h.default.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_NUMBER_BUTTON,
                        actionText: h.default.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_NUMBER_BUTTON
                    },
                    checkEnabled: !1
                }) : r.default.delete({
                    url: f.Endpoints.PHONE,
                    body: {
                        password: e,
                        change_phone_reason: t
                    },
                    oldFormErrors: !0
                }),
                resendCode(e) {
                    let t = {},
                        n = u.default.getFingerprint();
                    return null != n && "" !== n && (t["X-Fingerprint"] = n), r.default.post({
                        url: f.Endpoints.RESEND_PHONE,
                        headers: t,
                        body: {
                            phone: e
                        }
                    })
                },
                beginAddPhone: (e, t) => r.default.post({
                    url: f.Endpoints.PHONE,
                    body: {
                        phone: e,
                        change_phone_reason: t
                    }
                }),
                addPhone: (e, t, n) => r.default.post({
                    url: f.Endpoints.PHONE,
                    body: {
                        phone_token: e,
                        password: t,
                        change_phone_reason: n
                    },
                    oldFormErrors: !0
                }),
                addPhoneWithoutPassword: e => r.default.post({
                    url: f.Endpoints.PHONE_VERIFY_NO_PASSWORD,
                    body: {
                        code: e
                    }
                }),
                beginReverifyPhone: (e, t) => r.default.post({
                    url: f.Endpoints.PHONE_REVERIFY,
                    body: {
                        phone: e,
                        change_phone_reason: t
                    }
                }),
                reverifyPhone: (e, t, n) => r.default.post({
                    url: f.Endpoints.PHONE_REVERIFY,
                    body: {
                        phone_token: e,
                        password: t,
                        change_phone_reason: n
                    },
                    oldFormErrors: !0
                }),
                validatePhoneForSupport: e => r.default.post({
                    url: f.Endpoints.VERIFY_PHONE_FOR_TICKET,
                    body: {
                        token: e
                    },
                    oldFormErrors: !0
                }),
                async verifyPhone(e, t) {
                    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        a = {},
                        r = u.default.getFingerprint();
                    null != r && "" !== r && (a["X-Fingerprint"] = r), s && (a.authorization = "");
                    let o = await c.default.post({
                        url: f.Endpoints.VERIFY_PHONE,
                        headers: a,
                        body: {
                            phone: e,
                            code: t
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: l.NetworkActionNames.USER_VERIFY_PHONE
                        }
                    });
                    return n && i.default.dispatch({
                        type: "MODAL_POP",
                        key: E.PHONE_VERIFICATION_MODAL_KEY
                    }), o.body
                }
            }
        },
        482931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PHONE_VERIFICATION_MODAL_KEY: function() {
                    return s
                },
                PHONE_VERIFICATION_CODE_NUM_DIGITS: function() {
                    return a
                }
            });
            let s = "PHONE_VERIFICATION_MODAL_KEY",
                a = 6
        },
        970366: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackAppUIViewed: function() {
                    return o
                }
            });
            var s = n("748820"),
                a = n("49671"),
                l = n("599110"),
                r = n("49111");
            let i = new class e {
                trackEvent(e, t) {
                    let n = Date.now();
                    requestIdleCallback(() => {
                        l.default.track(e, {
                            ... function() {
                                var e, t, n, s;
                                let l = "--campaign-id=",
                                    r = null !== (s = null === (n = a.default) || void 0 === n ? void 0 : null === (t = n.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t)) && void 0 !== s ? s : [];
                                for (let e of r)
                                    if (e.startsWith(l)) return {
                                        referrer: e.substr(l.length)
                                    };
                                return {}
                            }(),
                            ... function() {
                                let e = !1,
                                    t = {
                                        total_compressed_byte_size: 0,
                                        total_uncompressed_byte_size: 0,
                                        total_transfer_byte_size: 0,
                                        js_compressed_byte_size: 0,
                                        js_uncompressed_byte_size: 0,
                                        js_transfer_byte_size: 0,
                                        css_compressed_byte_size: 0,
                                        css_uncompressed_byte_size: 0,
                                        css_transfer_byte_size: 0
                                    };
                                return null != window.performance && null != window.performance.getEntries && window.performance.getEntries().forEach(n => {
                                    let s = null != n.encodedBodySize ? n.encodedBodySize : n.decodedBodySize,
                                        a = null != n.decodedBodySize ? n.decodedBodySize : n.encodedBodySize,
                                        l = n.transferSize;
                                    null != a && null != s && (e = !0, t.total_compressed_byte_size += s, t.total_uncompressed_byte_size += a, null != l && (t.total_uncompressed_byte_size += l), "resource" === n.entryType && ("script" === n.initiatorType && null != n.name && null != n.name.match(/\.js/) && (t.js_compressed_byte_size += s, t.js_uncompressed_byte_size += a, null != l && (t.js_uncompressed_byte_size += l)), "link" === n.initiatorType && null != n.name && null != n.name.match(/\.css/) && (t.css_compressed_byte_size += s, t.css_uncompressed_byte_size += a, null != l && (t.css_uncompressed_byte_size += l))))
                                }), e ? t : {}
                            }(),
                            load_id: this.loadId,
                            screen_name: t,
                            duration_ms_since_app_opened: n - window.GLOBAL_ENV.HTML_TIMESTAMP
                        })
                    })
                }
                trackAppUIViewed(e) {
                    !this.appUIViewed && (this.trackEvent(r.AnalyticEvents.APP_UI_VIEWED, e), this.appUIViewed = !0)
                }
                constructor() {
                    this.loadId = (0, s.v4)(), this.appUIViewed = !1
                }
            };

            function o(e) {
                i.trackAppUIViewed(e)
            }
        },
        476108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("446674"),
                a = n("95410"),
                l = n("913144"),
                r = n("49111");
            let i = {
                    lastViewedPath: null,
                    lastViewedNonVoicePath: null
                },
                o = i,
                u = "LAST_VIEWED_PATH";
            class d extends s.default.PersistedStore {
                initialize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i;
                    o = null != e ? e : i
                }
                get defaultRoute() {
                    return r.Routes.ME
                }
                get lastNonVoiceRoute() {
                    var e;
                    return null !== (e = o.lastViewedNonVoicePath) && void 0 !== e ? e : r.Routes.ME
                }
                get fallbackRoute() {
                    return r.Routes.ME
                }
                getState() {
                    return o
                }
            }
            d.displayName = "DefaultRouteStore", d.persistKey = "DefaultRouteStore", d.migrations = [() => {
                let e = a.default.get(u, null);
                return a.default.remove(u), {
                    lastViewedPath: e
                }
            }];
            var c = new d(l.default, {
                SAVE_LAST_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return o.lastViewedPath = t, !0
                },
                SAVE_LAST_NON_VOICE_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return o.lastViewedNonVoicePath = t, !0
                }
            })
        },
        98013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                makeDesktopDownloadURL: function() {
                    return u
                },
                getPlatformReadableName: function() {
                    return c
                },
                getCurrentPlatformDownloadURL: function() {
                    return E
                },
                getMobileDownloadLink: function() {
                    return f
                }
            });
            var s = n("597755"),
                a = n.n(s),
                l = n("815157"),
                r = n("271938"),
                i = n("49111");
            let o = "linux";

            function u(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    s = null != n ? "&format=".concat(n) : "";
                return "".concat(i.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(s)
            }

            function d() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = a.os) || void 0 === e ? void 0 : e.family;
                return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? o : -1 !== t.indexOf("OS X") ? "osx" : "win"
            }

            function c(e) {
                return ({
                    win: "Windows",
                    osx: "Mac",
                    [o]: "Linux"
                })[d(e)]
            }

            function E() {
                let e = d(),
                    t = e === o ? "tar.gz" : null;
                return u(e, !1, t)
            }

            function f(e, t, n) {
                let s = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, l.default)(null != s ? s : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: r.default.getFingerprint(),
                            attemptId: (0, l.generateAttemptId)()
                        });
                    case "Android":
                        return (0, l.default)(null != s ? s : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: r.default.getFingerprint(),
                            attemptId: (0, l.generateAttemptId)()
                        });
                    default:
                        return null != s ? s : "https://www.discord.com"
                }
            }
        }
    }
]);
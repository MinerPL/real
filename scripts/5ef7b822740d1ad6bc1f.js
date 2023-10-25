(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["1597"], {
        250790: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("920040"),
                s = n("773670"),
                r = n("858434"),
                l = n.n(r),
                i = n("28926"),
                o = n("807403"),
                u = n("769846"),
                d = n("77078"),
                c = n("159885"),
                h = n("92985");
            let E = (0, c.cssValueToNumber)(u.default.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
                f = {
                    START: 0,
                    END: 1
                },
                m = {
                    friction: 10,
                    tension: 130
                };
            var _ = function(e) {
                return class extends s.Component {
                    componentDidMount() {
                        !o.isMobile && (window.addEventListener("resize", this.handleResizeDebounced), this.handleResize())
                    }
                    componentWillUnmount() {
                        clearTimeout(this.timeout), window.removeEventListener("resize", this.handleResizeDebounced)
                    }
                    componentWillAppear(e) {
                        this.state.shouldAnimate ? this.animateTo(f.END, e) : e()
                    }
                    componentWillEnter(e) {
                        this.state.shouldAnimate ? (clearTimeout(this.timeout), this.timeout = setTimeout(() => this.animateTo(f.END, e), 40)) : e()
                    }
                    componentWillLeave(e) {
                        this.state.shouldAnimate ? this.animateTo(f.START, e) : e()
                    }
                    animateTo(e, t) {
                        i.default.spring(this.anim, {
                            toValue: e,
                            ...m
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
                        return (0, a.jsx)("div", {
                            className: h.wrapper,
                            children: (0, a.jsx)(d.AccessibilityPreferencesContext.Consumer, {
                                children: t => {
                                    let {
                                        reducedMotion: n
                                    } = t;
                                    return (0, a.jsx)(i.default.div, {
                                        style: this.getAnimatedStyle(n.enabled),
                                        children: (0, a.jsx)(e, {
                                            ...this.props
                                        })
                                    })
                                }
                            })
                        })
                    }
                    constructor(...e) {
                        super(...e), this.anim = new i.default.Value(f.START), this.state = {
                            shouldAnimate: !o.isMobile
                        }, this.handleResize = () => {
                            let e = window.innerWidth > E;
                            !this.state.shouldAnimate && e && this.anim.setValue(f.END), this.setState({
                                shouldAnimate: e
                            })
                        }, this.handleResizeDebounced = l(this.handleResize, 60)
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
            var a = n("920040"),
                s = n("773670"),
                r = n("575482"),
                l = n.n(r),
                i = n("807403"),
                o = n("77078"),
                u = n("2021"),
                d = n("393414"),
                c = n("725484"),
                h = n("554054"),
                E = n("159885"),
                f = n("528502"),
                m = n("49111"),
                _ = n("874766");
            let p = (0, E.cssValueToNumber)(_.responsiveWidthMobile),
                g = [m.Routes.LOGIN, m.Routes.LOGIN_HANDOFF, m.Routes.REGISTER, m.Routes.INVITE(""), m.Routes.GIFT_CODE(""), m.Routes.GUILD_TEMPLATE_LOGIN(""), m.Routes.GUILD_TEMPLATE(""), m.Routes.DISABLE_EMAIL_NOTIFICATIONS, m.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, m.Routes.BILLING_PREMIUM_SUBSCRIBE, m.Routes.BILLING_PAYMENT_SOURCES_CREATE, m.Routes.BILLING_PAYMENTS, m.Routes.BILLING_PREMIUM_SWITCH_PLAN, m.Routes.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, m.Routes.VERIFY, m.Routes.VERIFY_HUB_EMAIL, m.Routes.REJECT_IP, m.Routes.REJECT_MFA, m.Routes.AUTHORIZE_IP, m.Routes.AUTHORIZE_PAYMENT, m.Routes.RESET, m.Routes.HANDOFF, m.Routes.REPORT];

            function R(e) {
                return g.some(t => e.startsWith(t))
            }
            class A extends s.Component {
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
                    } = this.props, t = (0, a.jsx)(u.default, {
                        component: s.Fragment,
                        children: s.Children.map(this.props.children, e => s.cloneElement(e, {
                            transitionTo: d.transitionTo,
                            replaceWith: d.replaceWith
                        }))
                    });
                    return (0, a.jsx)("div", {
                        className: _.characterBackground,
                        children: (0, a.jsx)(o.HeadingLevel, {
                            forceLevel: 1,
                            children: null != e ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(c.default, {
                                    show: !0,
                                    className: l(_.logo)
                                }), (0, a.jsx)(h.Splash, {
                                    splash: e,
                                    children: t
                                })]
                            }) : (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(f.default, {
                                    className: _.artwork,
                                    preserveAspectRatio: "xMinYMin slice"
                                }), t]
                            })
                        })
                    })
                }
                renderMobile() {
                    return (0, a.jsx)(u.default, {
                        component: s.Fragment,
                        children: s.Children.map(this.props.children, e => s.cloneElement(e, {
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
                    return _
                }
            });
            var a = n("920040"),
                s = n("773670"),
                r = n("287377"),
                l = n("830841"),
                i = n("498225"),
                o = n("437822"),
                u = n("697796"),
                d = n("524824"),
                c = n("393414"),
                h = n("271938"),
                E = n("291850"),
                f = n("49111"),
                m = n("724210");

            function _(e) {
                let t = s.useCallback(t => {
                        if (function(e) {
                                var t;
                                let n = (0, l.matchPath)(e, {
                                    path: f.Routes.CHANNEL(":guildId", ":channelId")
                                });
                                return (null == n ? void 0 : null === (t = n.params) || void 0 === t ? void 0 : t.channelId) === m.StaticChannelRoute.ROLE_SUBSCRIPTIONS || !1
                            }(t)) c.replaceWith(t);
                        else {
                            var n;
                            (null !== (n = e.transitionTo) && void 0 !== n ? n : c.transitionTo)(t)
                        }
                    }, [e.transitionTo]),
                    {
                        isAuthenticated: n,
                        loginStatus: _
                    } = (0, i.useStateFromStoresObject)([h.default], () => ({
                        isAuthenticated: h.default.isAuthenticated(),
                        loginStatus: h.default.getLoginStatus()
                    })),
                    {
                        location: p,
                        redirectTo: g
                    } = e,
                    [R, A] = s.useState(n);

                function T(e) {
                    let {
                        handoffKey: t,
                        handoffToken: n,
                        handoffSource: a
                    } = e;
                    (0, u.handoffFromApp)({
                        handoffKey: t,
                        handoffToken: n,
                        handoffSource: a
                    }), A(!1)
                }
                return (s.useEffect(() => {
                    if (null != p) {
                        let {
                            handoff_key: e,
                            handoff_token: t
                        } = (0, r.parse)(p.search);
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
                }, []), R || _ === f.LoginStates.LOGGING_IN) ? (0, a.jsx)(E.LoginSpinner, {}) : (0, a.jsx)(E.default, {
                    ...e,
                    transitionTo: t
                })
            }
        },
        860959: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return el
                }
            });
            var a = n("920040"),
                s = n("773670"),
                r = n("575482"),
                l = n.n(r),
                i = n("287377"),
                o = n("505143"),
                u = n("64379"),
                d = n("498225"),
                c = n("638800"),
                h = n("77078"),
                E = n("437822"),
                f = n("678916"),
                m = n("816540"),
                _ = n("208266"),
                p = n("428958"),
                g = n("307439"),
                R = n("765825"),
                A = n("715570"),
                T = n("486252"),
                N = n("378020"),
                I = n("980976"),
                S = n("534438"),
                v = n("946859"),
                C = n("791160"),
                O = n("434824"),
                x = n("770032"),
                M = n("165926"),
                b = n("25033"),
                L = n("255403"),
                y = n("2581"),
                G = n("644417"),
                D = n("697543"),
                U = n("79345"),
                P = n("447997"),
                F = n("970366"),
                j = n("271938"),
                B = n("350522"),
                k = n("476108"),
                w = n("124969"),
                H = n("980428"),
                Y = n("599110"),
                V = n("659500"),
                W = n("159885"),
                q = n("404432"),
                z = n("719451"),
                K = n("598489"),
                X = n("49111"),
                Z = n("771848"),
                J = n("492397"),
                Q = n("56235"),
                $ = n("935583"),
                ee = n("782340"),
                et = n("899387"),
                en = n("84811");
            d.default.initialize();
            let ea = /\.$/,
                es = e => Array.isArray(e) ? e.map(e => e.replace(ea, "")).join(". ").trim() : e;
            class er extends s.PureComponent {
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
                    Y.default.track(X.AnalyticEvents.REGISTER_VIEWED, {
                        location: null != t ? "Invite Register Page" : "Non-Invite Register Page",
                        registration_source: this.registrationSource,
                        ...null != e ? (0, C.default)(e, !1, !1) : {}
                    }, {
                        flush: !0
                    }), null == this.props.consentRequired && E.default.getLocationMetadata(), (0, F.trackAppUIViewed)("register")
                }
                componentWillUnmount() {
                    this._retryTimer.stop()
                }
                static getDerivedStateFromProps(e, t) {
                    let {
                        consentRequired: n
                    } = e, {
                        consentRequiredProp: a
                    } = t;
                    return null == a && null != n ? {
                        consent: !n,
                        consentRequiredProp: n
                    } : {
                        consentRequiredProp: n
                    }
                }
                componentDidUpdate(e, t) {
                    let {
                        apiErrors: n,
                        authenticated: a,
                        isUnderage: s,
                        invite: r,
                        onChangeStep: l
                    } = this.props, {
                        parsedDateOfBirth: i
                    } = this.state;
                    (e.apiErrors !== n || t.parsedDateOfBirth !== i) && (this.hasError("email") || this.hasError("phone") ? null != this.emailRef && this.emailRef.focus() : this.hasError("username") ? null != this.usernameRef && this.usernameRef.focus() : this.hasError("global_name") ? null != this.globalNameRef && this.globalNameRef.focus() : this.hasError("password") ? null != this.passwordRef && this.passwordRef.focus() : null == this.state.parsedDateOfBirth ? null != this.dateOfBirthRef.current && this.dateOfBirthRef.current.focus() : this.hasError("retry_after") && "number" == typeof this.props.apiErrors.retry_after && (this.setState({
                        isRateLimited: !0
                    }), this._retryTimer.start(1e3 * this.props.apiErrors.retry_after, () => {
                        this.setState({
                            isRateLimited: !1
                        })
                    }))), a && !e.authenticated && ((0, M.setNewUser)(Q.NewUserTypes.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
                    let o = Z.RegistrationSteps.FULL;
                    s || this.hasError("date_of_birth") ? o = Z.RegistrationSteps.AGE_GATE : null != r && (null != r.guild || null != r.channel) && (o = Z.RegistrationSteps.INVITE), l(o)
                }
                redirectIfAuthenticated() {
                    let {
                        authenticated: e,
                        transitionTo: t,
                        redirectTo: n
                    } = this.props;
                    e && t(null != n ? n : k.default.defaultRoute)
                }
                async handleRegister() {
                    let {
                        email: e,
                        username: t,
                        globalName: n,
                        password: a,
                        consent: s,
                        parsedDateOfBirth: r
                    } = this.state, {
                        invite: l,
                        guildTemplate: i,
                        giftCode: o,
                        onRegister: u,
                        usernameSuggestion: d,
                        isMobileWebInviteRegistration: c
                    } = this.props, h = null != l ? l.code : null, E = null != o ? o.skuId : null, f = g.usePromoEmailConsentStore.getState(), m = (0, W.isNullOrEmpty)(d) ? null : t === d, _ = J.CONFERENCE_MODE_ENABLED ? await (0, v.formatUsername)(t) : t;
                    V.ComponentDispatch.dispatch(X.ComponentActions.WAVE_EMPHASIZE);
                    try {
                        c || null == l ? await (0, A.registerFull)({
                            email: e,
                            username: _,
                            globalName: n,
                            consent: s,
                            password: a,
                            invite: h,
                            usedUsernameSuggestion: m,
                            guildTemplateCode: null == i ? void 0 : i.code,
                            giftCodeSKUId: E,
                            birthday: r,
                            promoEmailConsent: f.required ? f : null
                        }) : await (0, A.default)({
                            consent: s,
                            invite: h,
                            giftCodeSKUId: E,
                            usedUsernameSuggestion: m,
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
                            hasProminentCopy: s
                        }
                    } = this.props, r = null, l = null;
                    return t ? l = (0, a.jsx)(T.default, {
                        value: e,
                        onChange: e => this.setState({
                            consent: e
                        }),
                        subText: ee.default.Messages.TERMS_PRIVACY_OPT_IN.format({
                            termsURL: X.MarketingURLs.TERMS,
                            privacyURL: X.MarketingURLs.PRIVACY
                        })
                    }) : r = (0, a.jsx)(w.SubText, {
                        isProminent: !!s,
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
                        subText: r,
                        consentText: l
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
                    return (0, a.jsxs)(w.default, {
                        className: e,
                        children: [(0, a.jsx)(z.InviteResolvingHeader, {}), (0, a.jsxs)(w.Block, {
                            className: en.marginTop40,
                            children: [(0, a.jsx)(h.FormTitle, {
                                children: ee.default.Messages.FORM_LABEL_USERNAME
                            }), (0, a.jsx)(h.Tooltip, {
                                text: ee.default.Messages.AUTH_USERNAME_TOOLTIP,
                                position: "right",
                                color: h.Tooltip.Colors.BRAND,
                                children: e => {
                                    let {
                                        onMouseEnter: s,
                                        onMouseLeave: r
                                    } = e;
                                    return (0, a.jsx)(w.Input, {
                                        autoFocus: !0,
                                        className: en.marginBottom8,
                                        name: "username",
                                        value: n,
                                        placeholder: ee.default.Messages.FORM_PLACEHOLDER_USERNAME,
                                        onChange: t,
                                        onMouseEnter: s,
                                        onMouseLeave: r
                                    })
                                }
                            }), (0, a.jsx)(w.Button, {
                                className: en.marginTop20,
                                disabled: !0,
                                children: ee.default.Messages.CONTINUE
                            }), (0, a.jsx)(w.SubText, {
                                disabled: !0,
                                className: en.marginTop8,
                                children: ee.default.Messages.TERMS_PRIVACY.format({
                                    termsURL: X.MarketingURLs.TERMS,
                                    privacyURL: X.MarketingURLs.PRIVACY
                                })
                            }), J.CONFERENCE_MODE_ENABLED ? null : (0, a.jsx)(w.Button, {
                                look: w.Button.Looks.LINK,
                                color: w.Button.Colors.LINK,
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
                    return (null == e ? void 0 : e.stage_instance) != null && null != e.guild ? (0, a.jsx)(S.default, {
                        stageInstance: e.stage_instance,
                        guild: e.guild
                    }) : (null == e ? void 0 : e.guild_scheduled_event) != null ? (0, a.jsx)(N.GuildScheduledEventInviteHeader, {
                        channel: e.channel,
                        guildScheduledEvent: e.guild_scheduled_event
                    }) : (0, a.jsx)(z.default, {
                        invite: e
                    })
                }
                renderInviteButton() {
                    let {
                        invite: e,
                        registering: t,
                        consentRequired: n
                    } = this.props, {
                        consent: s
                    } = this.state, r = w.Button.Colors.BRAND, l = ee.default.Messages.CONTINUE;
                    return (null == e ? void 0 : e.stage_instance) != null && (r = w.Button.Colors.GREEN, l = ee.default.Messages.INSTANT_INVITE_ACCEPT_STAGE), (0, a.jsx)(h.Tooltip, {
                        text: !s && n ? ee.default.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP : null,
                        children: e => (0, a.jsx)("div", {
                            className: en.marginTop20,
                            ...e,
                            children: (0, a.jsx)(w.Button, {
                                type: "submit",
                                submitting: t,
                                disabled: !this.hasConsent(),
                                color: r,
                                children: l
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
                            global_name: s
                        }
                    } = this.props, {
                        subText: r,
                        consentText: l
                    } = this.renderConsentComponents(), i = (null == e ? void 0 : e.stage_instance) != null || (null == e ? void 0 : e.guild_scheduled_event) != null, o = e => {
                        this.setState({
                            globalName: e
                        })
                    }, u = this.state.globalName;
                    return (0, a.jsxs)("div", {
                        children: [(0, a.jsxs)(w.default, {
                            onSubmit: this.handleSubmit,
                            tag: "form",
                            className: t,
                            children: [this.renderInviteHeader(), i ? (0, a.jsx)("div", {
                                className: et.divider
                            }) : null, (0, a.jsxs)(w.Block, {
                                className: i ? void 0 : en.marginTop40,
                                children: [(0, a.jsx)(h.FormTitle, {
                                    error: es(null != s ? s : n),
                                    children: ee.default.Messages.DISPLAY_NAME
                                }), (0, a.jsx)(h.Tooltip, {
                                    text: ee.default.Messages.AUTH_USERNAME_TOOLTIP,
                                    position: "right",
                                    color: h.Tooltip.Colors.BRAND,
                                    children: e => {
                                        let {
                                            onMouseEnter: t,
                                            onMouseLeave: r
                                        } = e;
                                        return (0, a.jsx)(w.Input, {
                                            autoFocus: !0,
                                            className: en.marginBottom8,
                                            name: "global_name",
                                            value: u,
                                            placeholder: ee.default.Messages.FORM_PLACEHOLDER_USERNAME,
                                            onChange: o,
                                            error: null != n || null != s ? "" : null,
                                            onMouseEnter: t,
                                            onMouseLeave: r
                                        })
                                    }
                                }), (0, a.jsx)(h.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: ee.default.Messages.UU_REGISTER_DISPLAY_NAME_HINT_2
                                }), this.renderInviteButton(), r, l, J.CONFERENCE_MODE_ENABLED ? null : (0, a.jsx)(w.Button, {
                                    look: w.Button.Looks.LINK,
                                    color: w.Button.Colors.LINK,
                                    onClick: this.handleGotoLogin,
                                    className: en.marginTop20,
                                    children: ee.default.Messages.ALREADY_HAVE_ACCOUNT
                                })]
                            })]
                        }), null != e && i ? (0, a.jsx)(w.default, {
                            className: en.marginTop20,
                            children: (0, a.jsx)(S.StageInviteFooter, {
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
                    return "string" != typeof e ? null : (0, a.jsx)(w.SubText, {
                        className: l(en.marginTop20, et.errorMessage),
                        children: e
                    })
                }
                renderFull(e, t) {
                    let {
                        email: n,
                        username: r,
                        globalName: i,
                        password: o,
                        consent: u,
                        parsedDateOfBirth: d,
                        globalNameFocused: c
                    } = this.state, {
                        registering: E,
                        consentRequired: f,
                        isMobileWebInviteRegistration: m,
                        uniqueUsernameRegistrationConfig: {
                            suggestions: p
                        },
                        authBoxClassName: g,
                        apiErrors: {
                            email: R,
                            username: A,
                            global_name: T,
                            password: N,
                            date_of_birth: S
                        } = {},
                        hasLoggedInAccounts: v,
                        registrationCopyExperimentConfig: {
                            hasCopyAboveButton: C
                        }
                    } = this.props, {
                        subText: O,
                        consentText: x
                    } = this.renderConsentComponents(), M = this.renderErrorMessage(), b = (0, a.jsx)(h.Tooltip, {
                        text: !u && f ? ee.default.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP : null,
                        children: e => (0, a.jsx)("div", {
                            className: en.marginTop20,
                            ...e,
                            children: (0, a.jsx)(w.Button, {
                                type: "submit",
                                submitting: E,
                                disabled: !this.hasConsent() || this.state.isRateLimited,
                                children: ee.default.Messages.CONTINUE
                            })
                        })
                    }), G = async () => {
                        this.setState({
                            usernameFocused: !0
                        }), p && i.length > 0 && !y.default.wasRegistrationSuggestionFetched(i) && await L.default.fetchSuggestionsRegistration(i)
                    }, D = null != e ? (0, a.jsx)(s.Fragment, {
                        children: e()
                    }, "custom-header") : (0, a.jsx)(w.Title, {
                        children: ee.default.Messages.REGISTER_TITLE
                    }, "title"), U = (0, a.jsxs)(w.Block, {
                        className: en.marginTop20,
                        children: [(0, a.jsx)(w.Input, {
                            autoFocus: !0,
                            className: en.marginBottom20,
                            label: ee.default.Messages.FORM_LABEL_EMAIL,
                            name: "email",
                            value: n,
                            onChange: e => this.setState({
                                email: e
                            }),
                            error: es(R),
                            type: "email",
                            setRef: e => {
                                this.emailRef = e
                            },
                            required: !0
                        }), (0, a.jsx)(w.Input, {
                            label: ee.default.Messages.DISPLAY_NAME,
                            className: en.marginBottom20,
                            name: "global_name",
                            value: i,
                            onChange: e => this.setState({
                                globalName: e
                            }),
                            error: es(T),
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
                        }), (0, a.jsx)(P.default, {
                            show: c,
                            top: -12,
                            bottom: 20,
                            children: (0, a.jsx)(h.Text, {
                                variant: "text-sm/normal",
                                color: "text-normal",
                                children: ee.default.Messages.UU_REGISTER_DISPLAY_NAME_HINT_2
                            })
                        }), (0, a.jsxs)("div", {
                            onBlur: () => this.setState({
                                usernameFocused: !1
                            }),
                            onFocus: G,
                            tabIndex: -1,
                            children: [(0, a.jsx)(w.Input, {
                                label: ee.default.Messages.FORM_LABEL_USERNAME,
                                className: en.marginBottom20,
                                name: "username",
                                value: r,
                                onChange: e => {
                                    this.setState({
                                        username: e.toLocaleLowerCase()
                                    })
                                },
                                error: es(A),
                                setRef: e => {
                                    this.usernameRef = e
                                },
                                required: !0
                            }), this.renderUsernameValidation()]
                        }), (0, a.jsx)(w.Input, {
                            label: ee.default.Messages.FORM_LABEL_PASSWORD,
                            name: "password",
                            value: o,
                            onChange: e => this.setState({
                                password: e
                            }),
                            error: es(N),
                            type: "password",
                            setRef: e => {
                                this.passwordRef = e
                            },
                            required: !0
                        }), (0, a.jsx)(_.default, {
                            label: ee.default.Messages.AGE_GATE_YOUR_BIRTHDAY,
                            wrapperClassName: en.marginTop20,
                            name: "date_of_birth",
                            onChange: this.handleBirthdayChange,
                            ref: this.dateOfBirthRef,
                            error: es(S),
                            value: d,
                            required: !0
                        }), C && O, (0, a.jsx)(I.default, {}), b, M, x, !C && O, J.CONFERENCE_MODE_ENABLED ? null : (0, a.jsx)(w.Button, {
                            look: m ? w.Button.Looks.FILLED : w.Button.Looks.LINK,
                            color: m ? w.Button.Colors.PRIMARY : w.Button.Colors.LINK,
                            onClick: this.handleGotoLogin,
                            className: en.marginTop20,
                            children: ee.default.Messages.ALREADY_HAVE_ACCOUNT
                        })]
                    });
                    return t ? (0, a.jsx)(K.default, {
                        onSubmit: this.handleSubmit,
                        tag: "form",
                        className: l(g, et.horizontalAuthBox),
                        children: () => [D, (0, a.jsxs)("div", {
                            className: et.flex,
                            children: [(0, a.jsx)(w.Title, {
                                className: et.createAccountTemplateHeader,
                                children: ee.default.Messages.REGISTER_TITLE
                            }), U]
                        }, "register-title")]
                    }) : (0, a.jsxs)(w.default, {
                        onSubmit: this.handleSubmit,
                        tag: "form",
                        className: g,
                        children: [v && !m ? (0, a.jsx)(w.Button, {
                            onClick: this.handleGotoLogin,
                            look: w.Button.Looks.LINK,
                            color: w.Button.Colors.PRIMARY,
                            className: et.goBackButton,
                            children: (0, a.jsxs)("div", {
                                className: et.content,
                                children: [(0, a.jsx)(H.default, {
                                    width: 16,
                                    height: 16,
                                    className: et.caret
                                }), (0, a.jsx)(h.Text, {
                                    variant: "text-md/normal",
                                    children: ee.default.Messages.AGE_GATE_GO_BACK
                                })]
                            })
                        }) : null, D, U]
                    })
                }
                render() {
                    let {
                        isUnderage: e,
                        isMobileWebInviteRegistration: t
                    } = this.props;
                    if (e || this.hasError("date_of_birth")) return (0, a.jsx)(m.default, {});
                    let {
                        invite: n,
                        giftCode: s,
                        guildTemplate: r
                    } = this.props, l = null != n && null == n.guild && null == n.channel && null != n.inviter;
                    return null == n || l || t ? null != r ? this.renderFull(() => (0, a.jsx)(O.default, {
                        guildTemplate: r
                    }), !0) : null != s ? this.renderFull(() => (0, a.jsx)(q.default, {
                        giftCode: s
                    })) : null != n && l && n.state === X.InviteStates.RESOLVED && !t ? this.renderFull(() => (0, a.jsx)(z.default, {
                        invite: n,
                        isRegister: !0
                    })) : this.renderFull() : n.state === X.InviteStates.RESOLVING ? this.renderInviteResolving() : this.renderInvite()
                }
                constructor(e) {
                    var t;
                    super(e), this.dateOfBirthRef = s.createRef(), this._retryTimer = new c.Timeout, this.handleGotoLogin = e => {
                        let t;
                        let {
                            email: n
                        } = this.state, {
                            giftCode: a,
                            guildTemplate: s,
                            invite: r,
                            location: l,
                            onLoginStart: o,
                            redirectTo: u,
                            transitionTo: d,
                            isMobileWebInviteRegistration: c
                        } = this.props;
                        if (c) {
                            null == o || o(e);
                            return
                        }
                        let h = null != l ? (0, i.parse)(l.search) : {};
                        null != r ? t = X.Routes.INVITE_LOGIN(r.code) : null != a ? t = X.Routes.GIFT_CODE_LOGIN(a.code) : null != s ? t = X.Routes.GUILD_TEMPLATE_LOGIN(s.code) : null != u ? (t = X.Routes.LOGIN, h.redirect_to = u) : (t = X.Routes.LOGIN, "" !== n && (h = {
                            email: n
                        })), E.default.loginReset(), d(t, {
                            search: (0, i.stringify)(h)
                        }), null == o || o(e), V.ComponentDispatch.dispatch(X.ComponentActions.WAVE_EMPHASIZE)
                    }, this.handleSubmit = e => {
                        null == e || e.preventDefault();
                        let {
                            parsedDateOfBirth: t
                        } = this.state, {
                            invite: n,
                            consentRequired: a
                        } = this.props;
                        if (null !== a)(null != n || null != t) && this.handleRegister()
                    }, this.handleBirthdayChange = e => {
                        this.setState({
                            parsedDateOfBirth: e
                        })
                    }, this.renderUsernameValidation = () => {
                        let {
                            username: e,
                            globalName: t,
                            usernameFocused: n
                        } = this.state, {
                            usernameSuggestion: s,
                            uniqueUsernameRegistrationConfig: {
                                livecheckEnabled: r
                            }
                        } = this.props;
                        return (0, a.jsx)(ei, {
                            username: e,
                            suggestion: s,
                            livecheckEnabled: r,
                            globalName: t,
                            isUsernameFocused: n,
                            onClickSuggestion: () => {
                                null != this.usernameRef && this.usernameRef.focus(), null != s && s.length > 0 && this.setState({
                                    username: s
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
                        consent: !e.consentRequired,
                        consentRequiredProp: e.consentRequired,
                        isRateLimited: !1,
                        globalNameFocused: !1,
                        usernameFocused: !1
                    }
                }
            }

            function el(e) {
                let t = (0, d.useStateFromStoresObject)([B.default, j.default, f.default, b.default, x.default], () => ({
                        consentRequired: B.default.getAuthenticationConsentRequired(),
                        registering: j.default.getRegisterStatus() === X.RegistrationStates.REGISTERING,
                        apiErrors: j.default.getErrors(),
                        authenticated: j.default.isAuthenticated(),
                        isUnderage: f.default.isUnderageAnonymous(),
                        country: b.default.getCountryCode(),
                        hasLoggedInAccounts: x.default.getHasLoggedInAccounts()
                    })),
                    n = (0, D.useUURegistrationExperiment)(),
                    r = (0, d.useStateFromStores)([y.default], () => y.default.registrationUsernameSuggestion()),
                    [l, i] = s.useState(Z.RegistrationSteps.FULL);
                return (0, p.default)({
                    type: u.ImpressionTypes.VIEW,
                    name: u.ImpressionNames.USER_REGISTRATION,
                    properties: {
                        impression_group: u.ImpressionGroups.USER_REGISTRATION_FLOW,
                        step: l
                    }
                }, {}, [l]), (0, a.jsx)(er, {
                    onChangeStep: e => i(e),
                    registrationCopyExperimentConfig: R.default.getCurrentConfig({
                        location: "0ba758_2"
                    }, {
                        autoTrackExposure: !1
                    }),
                    uniqueUsernameRegistrationConfig: n,
                    usernameSuggestion: r,
                    ...e,
                    ...t
                })
            }

            function ei(e) {
                let t, {
                        username: n,
                        suggestion: s,
                        globalName: r,
                        livecheckEnabled: l,
                        isUsernameFocused: i,
                        onClickSuggestion: u
                    } = e,
                    d = (0, U.useUsernameStatus)(n, l, !0),
                    c = l && n.length > 0;
                return t = c ? (0, o.match)(d).with({
                    type: G.NameValidationState.ERROR,
                    message: o.P.select()
                }, e => (0, a.jsx)(h.Text, {
                    className: et.messageNegative,
                    variant: "text-sm/normal",
                    children: e
                })).with({
                    type: G.NameValidationState.AVAILABLE,
                    message: o.P.select()
                }, e => (0, a.jsx)(h.Text, {
                    className: et.messagePositive,
                    variant: "text-sm/normal",
                    children: e
                })).otherwise(() => (0, a.jsx)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal",
                    children: ee.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
                })) : null != s && s.length > 0 && r.length > 0 ? (0, a.jsx)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal",
                    children: ee.default.Messages.UU_REGISTER_SUGGESTION.format({
                        suggestion: s,
                        nameOnClick: u
                    })
                }) : (0, a.jsx)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal",
                    children: ee.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
                }), (0, a.jsx)(P.default, {
                    show: c && (null == d ? void 0 : d.type) === G.NameValidationState.ERROR || i,
                    top: -12,
                    bottom: 20,
                    children: t
                })
            }
            er.defaultProps = {
                giftCodeResolved: !1,
                transitionTo: e => n.g.location.assign(e)
            }
        },
        532760: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("862205");
            let s = (0, a.createExperiment)({
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
            var r = s
        },
        26772: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("990746"),
                s = n("913144"),
                r = n("437822"),
                l = n("697796"),
                i = n("524824"),
                o = n("72177"),
                u = n("599110"),
                d = n("316272"),
                c = n("49111");

            function h(e, t) {
                u.default.track(c.AnalyticEvents.BROWSER_HANDOFF_SUCCEEDED, {
                    authenticated: e,
                    handoff_source: t
                })
            }
            class E extends d.default {
                _initialize() {
                    s.default.subscribe("BROWSER_HANDOFF_END", this.handleEnd), s.default.subscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff)
                }
                _terminate() {
                    s.default.unsubscribe("BROWSER_HANDOFF_END", this.handleEnd), s.default.unsubscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff)
                }
                handleHandoff(e) {
                    let {
                        handoffKey: t,
                        handoffToken: n,
                        fingerprint: s,
                        handoffSource: o
                    } = e;
                    null != n ? a.default.post({
                        url: c.Endpoints.HANDOFF_EXCHANGE,
                        body: {
                            key: t,
                            handoff_token: n
                        }
                    }).then(e => {
                        let {
                            body: t
                        } = e;
                        (0, l.handoffSetUser)(t.user), r.default.loginToken(t.token, !1), h(!0, o)
                    }, e => {
                        if (null != s && h(!1, o), r.default.setFingerprint(s), (0, l.handoffEnd)(), o === i.LoginHandoffSource.ROLE_SUBSCRIPTION) {
                            var t;
                            u.default.track(c.AnalyticEvents.MOBILE_WEB_HANDOFF_FAILURE, {
                                reason: null !== (t = e.message) && void 0 !== t ? t : e.text,
                                handoff_source: o
                            })
                        }
                    }) : null != s ? (r.default.setFingerprint(s), h(!1, o), (0, l.handoffEnd)()) : (r.default.setFingerprint(s), (0, l.handoffUnavailable)())
                }
                constructor(...e) {
                    super(...e), this.handleEnd = e => {
                        let {
                            handoffToken: t,
                            fingerprint: n
                        } = e, a = o.default.key;
                        null != a && o.default.isHandoffAvailable() ? this.handleHandoff({
                            handoffKey: a,
                            handoffToken: t,
                            fingerprint: n,
                            handoffSource: void 0
                        }) : (r.default.setFingerprint(null), (0, l.handoffUnavailable)())
                    }
                }
            }
            var f = new E
        },
        2021: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("920040"),
                s = n("773670"),
                r = n("716984"),
                l = n("580279");
            class i extends s.Component {
                render() {
                    let {
                        children: e,
                        location: t,
                        history: n,
                        staticContext: i,
                        match: o,
                        ...u
                    } = this.props, d = null, c = null;
                    return s.Children.forEach(e, e => {
                        if (null == d && s.isValidElement(e)) {
                            let {
                                component: a,
                                render: l,
                                ...o
                            } = e.props, u = o.path || o.from;
                            null != (d = null != u ? (0, r.matchPath)(t.pathname, {
                                ...o,
                                path: u
                            }) : null) && (o = {
                                ...o,
                                key: u,
                                location: t,
                                match: d,
                                history: n,
                                staticContext: i
                            }, null != a ? c = s.createElement(a, o) : null != l && (c = l(o)))
                        }
                    }), (0, a.jsx)(l.default, {
                        ...u,
                        children: c
                    })
                }
            }
            var o = (0, r.withRouter)(i)
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
            var a = n("990746"),
                s = n("913144"),
                r = n("395724"),
                l = n("599110"),
                i = n("586391"),
                o = n("49111");

            function u(e, t) {
                return (0, r.default)(e, t), l.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
                    source: t,
                    action: i.AgeGateAnalyticAction.AGE_GATE_SUBMITTED
                }), a.default.patch({
                    url: o.Endpoints.ME,
                    oldFormErrors: !0,
                    body: {
                        date_of_birth: e.format("YYYY-MM-DD")
                    }
                }).then(e => {
                    let n = e.body;
                    s.default.dispatch({
                        type: "CURRENT_USER_UPDATE",
                        user: n
                    }), l.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
                        source: t,
                        action: i.AgeGateAnalyticAction.AGE_GATE_SUCCESS
                    })
                })
            }

            function d(e) {
                s.default.dispatch({
                    type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION"
                }), l.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
                    source: e,
                    action: i.AgeGateAnalyticAction.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION
                })
            }

            function c(e) {
                s.default.dispatch({
                    type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER"
                }), l.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
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
            var a = n("303222"),
                s = n("498225"),
                r = n("913144"),
                l = n("773336"),
                i = n("586391");
            let o = null,
                u = "underage";
            class d extends s.default.Store {
                isUnderageAnonymous() {
                    if (l.isPlatformEmbedded) {
                        if (null != o && o + i.AGE_GATE_REGISTER_TIMEOUT_MS > Date.now()) return !0
                    } else {
                        let e = a.parse(document.cookie)[u];
                        return null != e
                    }
                    return !1
                }
            }
            d.displayName = "AgeGateStore";
            var c = new d(r.default, {
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
                    return h
                }
            });
            var a = n("920040");
            n("773670");
            var s = n("77078"),
                r = n("393414"),
                l = n("124969"),
                i = n("701909"),
                o = n("49111"),
                u = n("782340"),
                d = n("526978");
            let c = () => (0, r.transitionTo)(o.Routes.LOGIN);
            var h = e => {
                let {
                    authBoxClassName: t,
                    underageMessage: r
                } = e;
                return (0, a.jsxs)(l.default, {
                    className: t,
                    children: [(0, a.jsx)("img", {
                        alt: "",
                        src: n("803452"),
                        className: d.img
                    }), (0, a.jsx)(l.Title, {
                        className: d.title,
                        children: u.default.Messages.AGE_GATE_UNDERAGE_HEADER
                    }), (0, a.jsx)(l.SubTitle, {
                        className: d.subtitle,
                        children: u.default.Messages.AGE_GATE_UNDERAGE_BODY.format({
                            underageMessage: null != r ? r : u.default.Messages.AGE_GATE_UNDERAGE_BODY_DEFAULT_REG_MESSAGE,
                            helpURL: i.default.getArticleURL(o.HelpdeskArticles.AGE_GATE)
                        })
                    }), (0, a.jsx)(s.Button, {
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
            var a = n("920040"),
                s = n("773670"),
                r = n("575482"),
                l = n.n(r),
                i = n("377849"),
                o = n.n(i),
                u = n("77078"),
                d = n("954419"),
                c = n("782340"),
                h = n("733317");
            let E = o().localeData().months(),
                f = Array.from(Array(31).keys()).map(e => ({
                    value: e + 1,
                    label: "".concat(e + 1)
                })),
                m = Array.from(Array(12).keys()).map(e => ({
                    value: e + 1,
                    label: E[e]
                })),
                _ = /[a-zA-Z0-9]/;

            function p(e) {
                let {
                    options: t,
                    selectOption: n,
                    children: r
                } = e, [l, i] = s.useState("");
                s.useEffect(() => {
                    if ("" !== l) {
                        let e = setTimeout(() => i(""), 1e3);
                        return () => clearTimeout(e)
                    }
                }, [l, i]);
                let o = s.useCallback(e => {
                    if (_.test(e.key)) {
                        let a = "".concat(l).concat(e.key.toLowerCase()),
                            s = t.find(e => e.label.toLowerCase().startsWith(a));
                        null != s && n(s.value), i(a)
                    }
                }, [n, i, l, t]);
                return (0, a.jsx)("div", {
                    onKeyDown: o,
                    children: r
                })
            }

            function g() {
                let e = o().localeData().longDateFormat("L"),
                    t = e.indexOf("D"),
                    n = e.indexOf("M"),
                    a = e.indexOf("Y");
                return (-1 === t || -1 === n || -1 === a) && (t = 0, n = 1, a = 2), [{
                    index: t,
                    type: "day"
                }, {
                    index: n,
                    type: "month"
                }, {
                    index: a,
                    type: "year"
                }].sort((e, t) => e.index < t.index ? -1 : 1)
            }
            let R = s.forwardRef(function(e, t) {
                let {
                    value: n,
                    wrapperClassName: r,
                    onChange: i,
                    onPopulated: E,
                    error: _,
                    autoFocus: R,
                    required: A
                } = e, {
                    day: T,
                    setDay: N,
                    month: I,
                    setMonth: S,
                    year: v,
                    setYear: C
                } = function(e) {
                    let t = null,
                        n = null,
                        a = null;
                    null != e && (t = e.date(), n = e.month() + 1, a = e.year());
                    let [r, l] = s.useState(t), [i, o] = s.useState(n), [u, d] = s.useState(a);
                    return {
                        day: r,
                        setDay: l,
                        month: i,
                        setMonth: o,
                        year: u,
                        setYear: d
                    }
                }(n), O = s.useMemo(() => null != T && null != I && null != v ? o("".concat(T, "/").concat(I, "/").concat(v), "DD/MM/YYYY") : null, [T, I, v]);
                s.useEffect(() => {
                    i((null == O ? void 0 : O.isValid()) ? O : null)
                }, [O, i]);
                let x = _;
                null != O && !O.isValid() && (x = c.default.Messages.AGE_GATE_INVALID_BIRTHDAY);
                let M = function() {
                        let e = new Date().getFullYear(),
                            t = s.useRef(Array.from(Array(150).keys()).map(t => ({
                                value: e - t - 3,
                                label: "".concat(e - t - 3)
                            })));
                        return s.useEffect(() => {
                            t.current = Array.from(Array(150).keys()).map(t => ({
                                value: e - t - 3,
                                label: "".concat(e - t - 3)
                            }))
                        }, [e]), t.current
                    }(),
                    [b, L] = s.useState(R ? 0 : -1),
                    y = s.useRef(null),
                    G = s.useRef(null),
                    D = s.useRef(null),
                    U = s.useMemo(g, []),
                    P = s.useCallback(() => {
                        var e, t, n, a;
                        switch (null === (e = U[b]) || void 0 === e ? void 0 : e.type) {
                            case "day":
                                null === (t = y.current) || void 0 === t || t.focus();
                                break;
                            case "month":
                                null === (n = G.current) || void 0 === n || n.focus();
                                break;
                            case "year":
                                null === (a = D.current) || void 0 === a || a.focus()
                        }
                    }, [b, y, G, D, U]);
                s.useEffect(() => {
                    setTimeout(P, 500)
                }, []), s.useEffect(() => {
                    if (b >= U.length) {
                        null == E || E();
                        return
                    }
                    P()
                }, [b, P]);
                let F = [];
                for (let e = 0; e < 3; e++) {
                    let {
                        type: t
                    } = U[e];
                    switch (t) {
                        case "day":
                            F.push({
                                key: "day",
                                input: (0, a.jsx)(p, {
                                    options: f,
                                    selectOption: N,
                                    children: (0, a.jsx)(d.default, {
                                        ref: y,
                                        className: h.inputDay,
                                        "aria-label": c.default.Messages.AGE_GATE_DOB_DAY,
                                        menuPlacement: d.default.MenuPlacements.TOP,
                                        placeholder: (0, a.jsx)("span", {
                                            "aria-hidden": !0,
                                            children: c.default.Messages.AGE_GATE_DOB_DAY
                                        }),
                                        options: f,
                                        value: T,
                                        onChange: t => {
                                            let {
                                                value: n
                                            } = t;
                                            N(n), L(e + 1)
                                        },
                                        maxMenuHeight: 215
                                    })
                                })
                            });
                            break;
                        case "month":
                            F.push({
                                key: "month",
                                input: (0, a.jsx)(p, {
                                    options: m,
                                    selectOption: S,
                                    children: (0, a.jsx)(d.default, {
                                        ref: G,
                                        className: h.inputMonth,
                                        "aria-label": c.default.Messages.AGE_GATE_DOB_MONTH,
                                        menuPlacement: d.default.MenuPlacements.TOP,
                                        placeholder: (0, a.jsx)("span", {
                                            "aria-hidden": !0,
                                            children: c.default.Messages.AGE_GATE_DOB_MONTH
                                        }),
                                        options: m,
                                        value: I,
                                        onChange: t => {
                                            let {
                                                value: n
                                            } = t;
                                            S(n), L(e + 1)
                                        },
                                        maxMenuHeight: 215
                                    })
                                })
                            });
                            break;
                        case "year":
                            F.push({
                                key: "year",
                                input: (0, a.jsx)(p, {
                                    options: M,
                                    selectOption: C,
                                    children: (0, a.jsx)(d.default, {
                                        ref: D,
                                        className: h.inputYear,
                                        "aria-label": c.default.Messages.AGE_GATE_DOB_YEAR,
                                        menuPlacement: d.default.MenuPlacements.TOP,
                                        placeholder: (0, a.jsx)("span", {
                                            "aria-hidden": !0,
                                            children: c.default.Messages.AGE_GATE_DOB_YEAR
                                        }),
                                        options: M,
                                        value: v,
                                        onChange: t => {
                                            let {
                                                value: n
                                            } = t;
                                            C(n), L(e + 1)
                                        },
                                        maxMenuHeight: 215
                                    })
                                })
                            })
                    }
                }
                return (0, a.jsxs)("fieldset", {
                    className: l(h.container, r),
                    children: [(0, a.jsx)(u.FormTitle, {
                        tag: "legend",
                        required: A,
                        children: c.default.Messages.AGE_GATE_DATE_OF_BIRTH
                    }), (0, a.jsx)("div", {
                        className: h.inputs,
                        children: F.map((e, t) => {
                            let {
                                key: n,
                                input: s
                            } = e;
                            return (0, a.jsx)("div", {
                                tabIndex: t + 1,
                                className: h[n],
                                children: s
                            }, n)
                        })
                    }), (0, a.jsx)(u.Text, {
                        className: h.errors,
                        variant: "text-sm/normal",
                        children: x
                    })]
                })
            });
            var A = R
        },
        771848: function(e, t, n) {
            "use strict";
            var a, s, r, l;
            n.r(t), n.d(t, {
                RegistrationSteps: function() {
                    return s
                }
            }), (r = a || (a = {})).VIEWED = "viewed", r.SUBMITTED = "submitted", r.RESEND_CODE = "resend_code", r.INPUT_ERROR = "input_error", r.RESPONSE_ERROR = "response_error", r.SUCCESS = "success", (l = s || (s = {})).IDENTITY = "identity", l.DISPLAY_NAME = "display_name", l.ACCOUNT_INFORMATION = "account_information", l.FULL = "full", l.AGE_GATE = "age_gate", l.INVITE = "invite", l.SMS_VERIFY = "sms_verify"
        },
        765825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var a = (0, n("862205").createExperiment)({
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
            var a = n("377849"),
                s = n.n(a),
                r = n("599110"),
                l = n("49111");

            function i(e, t) {
                r.default.track(l.AnalyticEvents.AGE_GATE_SUBMITTED, {
                    dob: 18 > s().diff(e, "years") ? e.format("YYYY-MM-DD") : null,
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
                    return m
                },
                registerFull: function() {
                    return _
                }
            });
            var a = n("377849"),
                s = n.n(a),
                r = n("64379"),
                l = n("913144"),
                i = n("599417"),
                o = n("731109"),
                u = n("271938"),
                d = n("599110"),
                c = n("840707"),
                h = n("395724"),
                E = n("49111"),
                f = n("586391");

            function m(e) {
                let {
                    invite: t = null,
                    giftCodeSKUId: n = null,
                    ...a
                } = e;
                return _({
                    ...a,
                    invite: t,
                    giftCodeSKUId: n
                })
            }

            function _(e) {
                let {
                    email: t,
                    phoneToken: n,
                    username: a,
                    globalName: m,
                    consent: _,
                    password: p,
                    guildTemplateCode: g,
                    birthday: R,
                    invite: A = null,
                    giftCodeSKUId: T = null,
                    multiStep: N = !1,
                    promoEmailConsent: I = null,
                    usedUsernameSuggestion: S = null
                } = e;
                return l.default.dispatch({
                    type: "REGISTER",
                    birthday: N ? R : null
                }), null != R && ((0, h.default)(R, E.AnalyticsSections.REGISTER), d.default.track(E.AnalyticEvents.AGE_GATE_ACTION, {
                    source: f.AgeGateSource.REGISTER,
                    action: f.AgeGateAnalyticAction.AGE_GATE_SUBMITTED
                }), ! function(e) {
                    let t;
                    let n = s().diff(e, "years");
                    !(n < 13) && (t = n >= 13 && n <= 17 ? "13-17" : n >= 18 && n <= 22 ? "18-22" : "23+", d.default.track(E.AnalyticEvents.USER_AGE_SUBMITTED, {
                        age_bucket: t
                    }))
                }(R)), c.default.post({
                    url: E.Endpoints.REGISTER,
                    body: {
                        fingerprint: u.default.getFingerprint(),
                        email: t,
                        username: a,
                        global_name: m,
                        password: p,
                        invite: A,
                        consent: _,
                        phone_token: n,
                        date_of_birth: null == R ? void 0 : R.format("YYYY-MM-DD"),
                        gift_code_sku_id: T,
                        guild_template_code: g,
                        promotional_email_opt_in: null == I ? void 0 : I.checked
                    },
                    trackedActionData: {
                        event: r.NetworkActionNames.USER_REGISTER,
                        properties: {
                            invite_code: A,
                            used_username_suggestion: S,
                            promotional_email_opt_in: null == I ? void 0 : I.checked,
                            promotional_email_pre_checked: null == I ? void 0 : I.preChecked,
                            was_unique_username: !0
                        }
                    }
                }).then(e => {
                    l.default.dispatch({
                        type: "REGISTER_SUCCESS",
                        token: e.body.token
                    }), d.default.track(E.AnalyticEvents.AGE_GATE_ACTION, {
                        source: f.AgeGateSource.REGISTER,
                        action: f.AgeGateAnalyticAction.AGE_GATE_SUCCESS
                    })
                }, e => {
                    let t = new i.default(e);
                    throw l.default.dispatch({
                        type: "REGISTER_FAILURE",
                        error: t
                    }), null != t.getFieldErrors("date_of_birth") && o.preventUnderageRegistration(f.AgeGateSource.REGISTER), d.default.track(E.AnalyticEvents.REGISTER_SUBMIT_ERRORED, {
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
            var a = n("920040");
            n("773670");
            var s = n("575482"),
                r = n.n(s),
                l = n("77078"),
                i = n("145131"),
                o = n("124969"),
                u = n("500296"),
                d = n("84811");

            function c(e) {
                let {
                    value: t,
                    onChange: n,
                    subText: s,
                    muted: c,
                    marginTopStyle: h
                } = e;
                return (0, a.jsx)(i.default, {
                    className: null != h ? h : d.marginTop20,
                    align: i.default.Align.CENTER,
                    children: (0, a.jsx)(l.Checkbox, {
                        value: t,
                        type: l.Checkbox.Types.INVERTED,
                        onChange: (e, t) => n(t),
                        className: u.checkbox,
                        children: (0, a.jsx)(o.SubText, {
                            className: r({
                                [u.subText]: !c
                            }),
                            children: s
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
            var a = n("920040");
            n("773670");
            var s = n("77078"),
                r = n("419830"),
                l = n("400271"),
                i = n("716328");

            function o(e) {
                let {
                    channel: t
                } = e, n = (0, r.getSimpleChannelIconComponent)(t.type);
                return (0, a.jsxs)("div", {
                    className: i.channelInfoContainer,
                    children: [null != n ? (0, a.jsx)(n, {
                        width: 20,
                        height: 20
                    }) : null, (0, a.jsx)(s.Text, {
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
                return (0, a.jsxs)("div", {
                    className: i.container,
                    children: [(0, a.jsx)(l.GuildEventStatus, {
                        className: i.statusContainer,
                        guildId: n.guild_id,
                        guildEventId: n.id,
                        eventPreview: n
                    }), (0, a.jsx)(l.GuildEventDetails, {
                        name: n.name,
                        description: n.description,
                        guildId: n.guild_id
                    }), null != t && n.channel_id === t.id ? (0, a.jsx)(o, {
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
            var a = n("920040");
            n("773670");
            var s = n("307439"),
                r = n("486252"),
                l = n("782340"),
                i = n("84811");

            function o() {
                let {
                    required: e,
                    checked: t
                } = (0, s.usePromoEmailConsentStore)();
                return e ? (0, a.jsx)(r.default, {
                    value: t,
                    subText: l.default.Messages.PROMOTIONAL_EMAIL_OPT_IN_CONSENT,
                    onChange: s.setPromoEmailConsentChecked,
                    marginTopStyle: i.marginTop8,
                    muted: !0
                }) : null
            }
        },
        946859: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                formatUsername: function() {
                    return s
                }
            });
            var a = n("50885");
            async function s(e) {
                try {
                    return await a.default.getSetting("USERNAME_PREFIX", "") + e
                } catch (e) {}
                return e
            }
        },
        878720: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChangePhoneReason: function() {
                    return s
                },
                default: function() {
                    return m
                }
            });
            var a, s, r = n("64379"),
                l = n("990746"),
                i = n("913144"),
                o = n("532760"),
                u = n("271938"),
                d = n("730622"),
                c = n("840707"),
                h = n("482931"),
                E = n("49111"),
                f = n("782340");
            (a = s || (s = {})).USER_ACTION_REQUIRED = "user_action_required", a.USER_SETTINGS_UPDATE = "user_settings_update", a.GUILD_PHONE_REQUIRED = "guild_phone_required", a.MFA_PHONE_UPDATE = "mfa_phone_update", a.CONTACT_SYNC = "contact_sync";
            var m = {
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
                }).enabled ? (0, d.default)(n => l.default.delete({
                    url: E.Endpoints.PHONE,
                    body: {
                        password: e,
                        change_phone_reason: t,
                        ...n
                    },
                    oldFormErrors: !0
                }), {
                    modalProps: {
                        title: f.default.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_NUMBER_BUTTON,
                        actionText: f.default.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_NUMBER_BUTTON
                    },
                    checkEnabled: !1
                }) : l.default.delete({
                    url: E.Endpoints.PHONE,
                    body: {
                        password: e,
                        change_phone_reason: t
                    },
                    oldFormErrors: !0
                }),
                resendCode(e) {
                    let t = {},
                        n = u.default.getFingerprint();
                    return null != n && "" !== n && (t["X-Fingerprint"] = n), l.default.post({
                        url: E.Endpoints.RESEND_PHONE,
                        headers: t,
                        body: {
                            phone: e
                        }
                    })
                },
                beginAddPhone: (e, t) => l.default.post({
                    url: E.Endpoints.PHONE,
                    body: {
                        phone: e,
                        change_phone_reason: t
                    }
                }),
                addPhone: (e, t, n) => l.default.post({
                    url: E.Endpoints.PHONE,
                    body: {
                        phone_token: e,
                        password: t,
                        change_phone_reason: n
                    },
                    oldFormErrors: !0
                }),
                addPhoneWithoutPassword: e => l.default.post({
                    url: E.Endpoints.PHONE_VERIFY_NO_PASSWORD,
                    body: {
                        code: e
                    }
                }),
                beginReverifyPhone: (e, t) => l.default.post({
                    url: E.Endpoints.PHONE_REVERIFY,
                    body: {
                        phone: e,
                        change_phone_reason: t
                    }
                }),
                reverifyPhone: (e, t, n) => l.default.post({
                    url: E.Endpoints.PHONE_REVERIFY,
                    body: {
                        phone_token: e,
                        password: t,
                        change_phone_reason: n
                    },
                    oldFormErrors: !0
                }),
                validatePhoneForSupport: e => l.default.post({
                    url: E.Endpoints.VERIFY_PHONE_FOR_TICKET,
                    body: {
                        token: e
                    },
                    oldFormErrors: !0
                }),
                async verifyPhone(e, t) {
                    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        s = {},
                        l = u.default.getFingerprint();
                    null != l && "" !== l && (s["X-Fingerprint"] = l), a && (s.authorization = "");
                    let o = await c.default.post({
                        url: E.Endpoints.VERIFY_PHONE,
                        headers: s,
                        body: {
                            phone: e,
                            code: t
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: r.NetworkActionNames.USER_VERIFY_PHONE
                        }
                    });
                    return n && i.default.dispatch({
                        type: "MODAL_POP",
                        key: h.PHONE_VERIFICATION_MODAL_KEY
                    }), o.body
                }
            }
        },
        482931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PHONE_VERIFICATION_MODAL_KEY: function() {
                    return a
                },
                PHONE_VERIFICATION_CODE_NUM_DIGITS: function() {
                    return s
                }
            });
            let a = "PHONE_VERIFICATION_MODAL_KEY",
                s = 6
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
                    return h
                },
                getMobileDownloadLink: function() {
                    return E
                }
            });
            var a = n("892445"),
                s = n.n(a),
                r = n("568235"),
                l = n("271938"),
                i = n("49111");
            let o = "linux";

            function u(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    a = null != n ? "&format=".concat(n) : "";
                return "".concat(i.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(a)
            }

            function d() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = s.os) || void 0 === e ? void 0 : e.family;
                return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? o : -1 !== t.indexOf("OS X") ? "osx" : "win"
            }

            function c(e) {
                return ({
                    win: "Windows",
                    osx: "Mac",
                    [o]: "Linux"
                })[d(e)]
            }

            function h() {
                let e = d(),
                    t = e === o ? "tar.gz" : null;
                return u(e, !1, t)
            }

            function E(e, t, n) {
                let a = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, r.default)(null != a ? a : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: l.default.getFingerprint(),
                            attemptId: (0, r.generateAttemptId)()
                        });
                    case "Android":
                        return (0, r.default)(null != a ? a : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: l.default.getFingerprint(),
                            attemptId: (0, r.generateAttemptId)()
                        });
                    default:
                        return null != a ? a : "https://www.discord.com"
                }
            }
        }
    }
]);
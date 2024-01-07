            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return j
                }
            }), n("222007"), n("70102");
            var s, a, l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                u = n.n(r),
                o = n("446674"),
                d = n("913144"),
                c = n("437822"),
                f = n("569272"),
                E = n("568131"),
                I = n("327037"),
                _ = n("208620"),
                p = n("970366"),
                h = n("271938"),
                N = n("476108"),
                m = n("55411"),
                T = n("686470"),
                g = n("552712"),
                A = n("124969"),
                S = n("659632"),
                C = n("701909"),
                v = n("158998"),
                x = n("404432"),
                R = n("291850"),
                L = n("860959"),
                O = n("49111"),
                M = n("782340"),
                D = n("926622");
            o.default.initialize(), (a = s || (s = {})).REGISTER = "register", a.LOGIN = "login";
            class P extends i.PureComponent {
                componentDidMount() {
                    let {
                        authenticated: e,
                        isResolved: t
                    } = this.props;
                    e && this.handleAuthenticated(), !t && this.resolveGiftCode(), (0, p.trackAppUIViewed)("gift_code")
                }
                componentDidUpdate(e) {
                    let {
                        authenticated: t,
                        isResolved: n
                    } = this.props;
                    !n && d.default.wait(() => {
                        this.resolveGiftCode()
                    }), t && !e.authenticated && this.handleAuthenticated(), !t && e.authenticated && this.setState({
                        currentUser: null
                    })
                }
                handleAuthenticated() {
                    let {
                        currentUser: e
                    } = this.state;
                    E.fetchLibrary(), null == e && this.refreshUser()
                }
                get requiresVerification() {
                    let {
                        currentUser: e
                    } = this.state;
                    return null != e && !e.verified
                }
                getCode() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
                    return e.match.params.giftCode
                }
                getMode() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
                    return e.login ? "login" : "register"
                }
                getErrorMessage(e) {
                    let {
                        libraryApplication: t,
                        sku: n
                    } = this.props, {
                        error: s
                    } = this.state, a = null != s ? s.code : null;
                    return a === O.AbortCodes.INVALID_GIFT_SELF_REDEMPTION ? M.default.Messages.GIFT_CONFIRMATION_BODY_SELF_GIFT_NO_PAYMENT : a === O.AbortCodes.INVALID_GIFT_REDEMPTION_OWNED && (null == n ? void 0 : n.productLine) === O.SKUProductLines.COLLECTIBLES ? M.default.Messages.GIFT_ERROR_OWNED : null != t || a === O.AbortCodes.INVALID_GIFT_REDEMPTION_OWNED ? M.default.Messages.GIFT_CODE_AUTH_HELP_TEXT_OWNED.format({
                        libraryLink: O.Routes.APPLICATION_LIBRARY
                    }) : e.isClaimed || a === O.AbortCodes.INVALID_GIFT_REDEMPTION_EXHAUSTED ? M.default.Messages.GIFT_CODE_AUTH_HELP_TEXT_CLAIMED : a === O.AbortCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED ? M.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT : void 0
                }
                renderSpinner(e) {
                    return (0, l.jsxs)(A.default, {
                        children: [(0, l.jsx)(A.Title, {
                            children: e
                        }), (0, l.jsx)(A.AuthSpinner, {})]
                    })
                }
                renderExpiredInvite() {
                    let {
                        defaultRoute: e,
                        transitionTo: t
                    } = this.props;
                    return (0, l.jsxs)(A.default, {
                        children: [(0, l.jsx)(A.Image, {
                            src: n("653240"),
                            className: D.marginBottom8
                        }), (0, l.jsx)(A.Title, {
                            className: u(D.marginTop8, D.marginBottom8),
                            children: M.default.Messages.GIFT_CODE_AUTH_INVALID_TITLE
                        }), (0, l.jsx)(A.SubTitle, {
                            children: M.default.Messages.GIFT_CODE_AUTH_INVALID_BODY
                        }), (0, l.jsx)(A.Button, {
                            className: u(D.marginTop40, D.marginBottom8),
                            onClick: () => t(e),
                            children: M.default.Messages.CONTINUE_TO_WEBAPP
                        }), (0, l.jsx)(A.Button, {
                            onClick: () => window.open(C.default.getArticleURL(O.HelpdeskArticles.GIFTING), "_blank"),
                            look: A.Button.Looks.LINK,
                            color: A.Button.Colors.LINK,
                            children: M.default.Messages.GIFT_CODE_AUTH_INVALID_TIP
                        })]
                    })
                }
                renderAppOpened() {
                    return (0, l.jsxs)(A.default, {
                        children: [(0, l.jsx)(A.Title, {
                            className: D.marginBottom8,
                            children: M.default.Messages.APP_OPENED_TITLE
                        }), (0, l.jsx)(A.SubTitle, {
                            children: M.default.Messages.APP_OPENED_BODY
                        }), (0, l.jsx)(A.Button, {
                            className: D.marginTop40,
                            onClick: () => this.setState({
                                continueOnWeb: !0
                            }),
                            children: M.default.Messages.GIFT_CODE_AUTH_CONTINUE_IN_BROWSER
                        })]
                    })
                }
                renderVerification(e) {
                    let {
                        sentVerification: t
                    } = this.state;
                    return (0, l.jsxs)(A.default, {
                        children: [(0, l.jsx)(A.Image, {
                            src: n("951536"),
                            className: D.marginBottom8
                        }), (0, l.jsx)(A.Title, {
                            children: M.default.Messages.GIFT_CODE_AUTH_VERIFICATION_TITLE.format({
                                username: e.username
                            })
                        }), (0, l.jsx)(A.SubTitle, {
                            className: D.marginTop20,
                            children: M.default.Messages.GIFT_CODE_AUTH_HELP_TEXT_VERIFICATION_REQUIRED
                        }), (0, l.jsx)(A.Button, {
                            disabled: t,
                            className: D.marginTop40,
                            onClick: this.handleResendVerification,
                            children: t ? M.default.Messages.GIFT_CODE_AUTH_VERIFICATION_SENT : M.default.Messages.RESEND_VERIFICATION_EMAIL
                        }), (0, l.jsx)(A.Button, {
                            look: A.Button.Looks.LINK,
                            color: A.Button.Colors.LINK,
                            onClick: this.refreshUser,
                            className: D.marginTop8,
                            children: M.default.Messages.GIFT_CODE_AUTH_CHECK_VERIFICATION_AGAIN
                        })]
                    })
                }
                renderAuthenticated(e, t) {
                    let n = this.getErrorMessage(e);
                    return (0, l.jsxs)(A.default, {
                        children: [(0, l.jsx)(x.default, {
                            giftCode: e
                        }), (0, l.jsx)(A.Button, {
                            disabled: null != n,
                            className: D.marginTop40,
                            onClick: this.handleAccept,
                            children: M.default.Messages.GIFT_CODE_AUTH_ACCEPT
                        }), null != n ? (0, l.jsx)(A.SubTitle, {
                            className: D.marginTop20,
                            children: n
                        }) : (0, l.jsx)(A.SubText, {
                            className: D.marginTop20,
                            children: M.default.Messages.GIFT_CODE_AUTH_LOGGED_IN_AS.format({
                                userTag: v.default.getUserTag(t),
                                onLogoutClick: this.handleLogout
                            })
                        })]
                    })
                }
                render() {
                    let {
                        nativeAppState: e,
                        sku: t,
                        authenticated: n,
                        giftCode: s,
                        isResolved: a,
                        isAccepting: i,
                        transitionTo: r,
                        location: u
                    } = this.props, {
                        fetchingUser: o,
                        continueOnWeb: d
                    } = this.state;
                    if (e === O.NativeAppStates.OPEN && !d) return this.renderAppOpened();
                    if (e === O.NativeAppStates.OPENING) return this.renderSpinner(M.default.Messages.APP_OPENING);
                    if (i) return this.renderSpinner(M.default.Messages.GIFT_CODE_AUTH_ACCEPTING);
                    if (null == s) return a ? this.renderExpiredInvite() : this.renderSpinner(M.default.Messages.GIFT_CODE_AUTH_RESOLVING);
                    if (a) {
                        if (n) {
                            let e = this.state.currentUser;
                            return o || null == e ? this.renderSpinner(M.default.Messages.GIFT_CODE_AUTH_FETCHING_USER) : this.requiresVerification && null != e ? this.renderVerification(e) : this.renderAuthenticated(s, e)
                        }
                        return "login" === this.getMode() ? (0, l.jsx)(R.default, {
                            giftCodeSKU: t,
                            giftCode: s,
                            transitionTo: r,
                            location: u
                        }) : (0, l.jsx)(L.default, {
                            giftCodeSKU: t,
                            giftCode: s,
                            transitionTo: r,
                            location: u
                        })
                    }
                    return null
                }
                constructor(...e) {
                    super(...e), this.state = {
                        error: null,
                        continueOnWeb: !1,
                        currentUser: null,
                        sentVerification: !1,
                        fetchingUser: !1
                    }, this.refreshUser = () => {
                        this.setState({
                            fetchingUser: !0
                        }), I.fetchCurrentUser({
                            withAnalyticsToken: !0
                        }).then(e => this.setState({
                            currentUser: e,
                            fetchingUser: !1
                        })).catch(() => this.setState({
                            fetchingUser: !1
                        }))
                    }, this.handleLogout = () => {
                        let e = this.props.match.params.giftCode;
                        c.default.logout(O.Routes.GIFT_CODE_LOGIN(e))
                    }, this.handleResendVerification = () => {
                        c.default.verifyResend(), this.setState({
                            sentVerification: !0
                        })
                    }, this.handleAccept = async () => {
                        let {
                            transitionTo: e,
                            giftCode: t
                        } = this.props;
                        if (null == t) throw Error("Trying to accept gift before resolve");
                        let n = this.getCode();
                        try {
                            this.setState({
                                error: null
                            }), await f.default.redeemGiftCode({
                                code: n
                            }), e(O.Routes.APP)
                        } catch (e) {
                            this.setState({
                                error: e
                            })
                        }
                    }, this.resolveGiftCode = () => {
                        let {
                            transitionTo: e
                        } = this.props, t = this.getCode();
                        f.default.resolveGiftCode(t, !0, !0).then(n => {
                            null != n && null != n.giftCode.promotion && e(O.Routes.BILLING_PROMOTION_REDEMPTION(t))
                        })
                    }
                }
            }
            var j = o.default.connectStores([m.default, T.default, h.default, g.default, N.default, _.default], e => {
                let t = e.match.params.giftCode,
                    n = m.default.get(t),
                    s = null != n ? g.default.get(n.skuId) : null;
                return {
                    giftCode: n,
                    sku: s,
                    libraryApplication: null != s && (null == n ? void 0 : n.entitlementBranches) != null ? S.firstLibraryApplicationForGiftCode(n.entitlementBranches, s, T.default) : null,
                    authenticated: h.default.isAuthenticated(),
                    defaultRoute: N.default.defaultRoute,
                    isResolved: m.default.getIsResolved(t),
                    isAccepting: m.default.getIsAccepting(t),
                    libraryApplicationsFetched: T.default.fetched,
                    nativeAppState: _.default.getState(t)
                }
            })(P)
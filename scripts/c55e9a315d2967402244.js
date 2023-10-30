(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["64431"], {
        717837: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return (e = String(e || ""), l.test(e)) ? "rtl" : i.test(e) ? "ltr" : "neutral"
            };
            var s = "֑-߿יִ-﷽ﹰ-ﻼ",
                a = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                l = RegExp("^[^" + a + "]*[" + s + "]"),
                i = RegExp("^[^" + s + "]*[" + a + "]")
        },
        975391: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d10009c626a2ff1d4b90.svg"
        },
        37920: function(e, t, n) {
            "use strict";
            e.exports = n.p + "8754ac926b9fb38f56a8.svg"
        },
        2862: function(e, t, n) {
            "use strict";
            e.exports = n.p + "8e55ff0ed3f6e4fa5200.svg"
        },
        501851: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3f977e0e1abeba5f6f4e.svg"
        },
        346619: function(e, t, n) {
            "use strict";
            e.exports = n.p + "148ae41296600c88bc9e.svg"
        },
        245288: function(e, t, n) {
            "use strict";
            e.exports = n.p + "41d28dc5d2c29dc4b122.svg"
        },
        314837: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c54752c825291a698843.svg"
        },
        951536: function(e, t, n) {
            "use strict";
            e.exports = n.p + "be307e03c092df2ae51f.svg"
        },
        768025: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ec5916ad3bfd010d6c7b.svg"
        },
        176872: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4e77fe782f516b5685cc.svg"
        },
        69448: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f6da6e7ed1d57e445d0e.svg"
        },
        721247: function(e, t, n) {
            "use strict";
            e.exports = n.p + "13e4de50fe494530c2c1.png"
        },
        781073: function(e, t, n) {
            "use strict";
            e.exports = n.p + "09093cfec46da2d3386d.svg"
        },
        229483: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e9802d8cbd4efea22c7f.svg"
        },
        142833: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var s = n("759843"),
                a = n("627929"),
                l = n("913144"),
                i = n("840707"),
                r = n("49111"),
                u = {
                    signup: (e, t) => i.default.post({
                        url: r.Endpoints.HUB_WAITLIST_SIGNUP,
                        body: {
                            email: e,
                            school: t
                        },
                        trackedActionData: {
                            event: s.NetworkActionNames.HUB_WAITLIST_SIGNUP,
                            properties: e => {
                                var t;
                                let n = !1,
                                    s = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.email_domain;
                                if (null != s) {
                                    let e = s.split(".");
                                    n = -1 !== e.indexOf("edu")
                                }
                                return (0, a.exact)({
                                    is_edu_email: n
                                })
                            }
                        }
                    }),
                    async sendVerificationEmail(e, t, n) {
                        let l = await i.default.post({
                            url: r.Endpoints.HUB_EMAIL_VERIFY_SEND,
                            body: {
                                email: e,
                                guild_id: n,
                                allow_multiple_guilds: t,
                                use_verification_code: !0
                            },
                            trackedActionData: {
                                event: s.NetworkActionNames.HUB_EMAIL_VERIFY_SEND,
                                properties: e => {
                                    var t;
                                    let n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.has_matching_guild;
                                    return (0, a.exact)({
                                        has_matching_guild: n
                                    })
                                }
                            }
                        });
                        return l.body
                    },
                    async verify(e) {
                        if (null != e) try {
                            var t;
                            let n = await i.default.post({
                                    url: r.Endpoints.HUB_EMAIL_VERIFY,
                                    body: {
                                        token: e
                                    },
                                    trackedActionData: {
                                        event: s.NetworkActionNames.HUB_EMAIL_VERIFY
                                    }
                                }),
                                a = null === (t = n.body.guild) || void 0 === t ? void 0 : t.id;
                            l.default.dispatch({
                                type: "HUB_VERIFY_EMAIL_SUCCESS",
                                guildId: a
                            })
                        } catch (e) {
                            l.default.dispatch({
                                type: "HUB_VERIFY_EMAIL_FAILURE",
                                errors: e.body
                            })
                        }
                    },
                    async verifyCode(e, t, n) {
                        if (null != e) try {
                            var a;
                            let u = await i.default.post({
                                    url: r.Endpoints.HUB_EMAIL_VERIFY_CODE,
                                    body: {
                                        code: e,
                                        guild_id: t,
                                        email: n
                                    },
                                    trackedActionData: {
                                        event: s.NetworkActionNames.HUB_EMAIL_VERIFY
                                    }
                                }),
                                o = null === (a = u.body.guild) || void 0 === a ? void 0 : a.id;
                            return l.default.dispatch({
                                type: "HUB_VERIFY_EMAIL_SUCCESS",
                                guildId: o
                            }), u.body
                        } catch (e) {
                            throw l.default.dispatch({
                                type: "HUB_VERIFY_EMAIL_FAILURE",
                                errors: e.body
                            }), e
                        }
                    }
                }
        },
        568131: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchLibrary: function() {
                    return u
                },
                createTestModeLibraryApplications: function() {
                    return o
                },
                setActiveLaunchOptionId: function() {
                    return d
                }
            });
            var s = n("872717"),
                a = n("913144"),
                l = n("370999"),
                i = n("271560"),
                r = n("49111");
            async function u() {
                try {
                    let e = await (0, i.httpGetWithCountryCodeQuery)({
                        url: r.Endpoints.LIBRARY,
                        oldFormErrors: !0
                    }, !1);
                    a.default.dispatch({
                        type: "LIBRARY_FETCH_SUCCESS",
                        libraryApplications: e.body
                    })
                } catch (e) {
                    a.default.dispatch({
                        type: "LIBRARY_FETCH_FAIL",
                        error: e
                    })
                }
            }
            async function o(e) {
                let t = e.primarySkuId;
                if (null == t) return;
                let n = await s.default.get({
                        url: r.Endpoints.APPLICATION_BRANCH_LIST(e.id),
                        oldFormErrors: !0
                    }).then(e => e.body),
                    i = n.map(n => l.default.createForTestMode({
                        id: e.id,
                        skuId: t,
                        branch: n
                    }));
                a.default.dispatch({
                    type: "LIBRARY_APPLICATIONS_TEST_MODE_ENABLED",
                    libraryApplications: i
                })
            }

            function d(e, t, n) {
                a.default.dispatch({
                    type: "LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE",
                    applicationId: e,
                    branchId: t,
                    launchOptionId: n
                })
            }
        },
        549869: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return eh
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("730290"),
                i = n("759843"),
                r = n("394846"),
                u = n("446674"),
                o = n("913144"),
                d = n("437822"),
                c = n("569272"),
                f = n("970728"),
                E = n("26772"),
                I = n("73749"),
                _ = n("106885"),
                p = n("178116"),
                h = n("759315"),
                N = n("569808"),
                T = n("913645"),
                m = n("777858"),
                g = n("9294"),
                A = n("701662"),
                S = n("271938"),
                C = n("760190"),
                v = n("55411"),
                x = n("337543"),
                O = n("599110"),
                R = n("550368"),
                L = n("831588"),
                M = n("315102"),
                D = n("834030"),
                P = n("315733"),
                j = n("250790"),
                U = n("746040"),
                G = n("504568"),
                b = n("345308"),
                B = n("713177"),
                y = n("773852"),
                F = n("679030"),
                V = n("926593"),
                k = n("683068"),
                w = n("43772"),
                H = n("291850"),
                Y = n("275744"),
                W = n("104110"),
                K = n("860959"),
                z = n("152434"),
                Z = n("404981"),
                X = n("726206"),
                J = n("49111"),
                q = n("492397");
            n("527441"), u.default.initialize();
            let Q = (0, j.default)(H.default),
                $ = (0, j.default)(Y.default),
                ee = (0, j.default)(w.default),
                et = (0, j.default)(V.default),
                en = (0, j.default)(F.default),
                es = (0, j.default)(A.default),
                ea = (0, j.default)(K.default),
                el = (0, j.default)(G.default),
                ei = (0, j.default)(b.default),
                er = (0, j.default)(X.default),
                eu = (0, j.default)(h.default),
                eo = (0, j.default)(z.default),
                ed = (0, j.default)(y.default),
                ec = (0, j.default)(p.default),
                ef = (0, j.default)(m.default),
                eE = (0, j.default)(B.default),
                eI = (0, j.default)(W.default),
                e_ = (0, j.default)(Z.default);
            class ep extends a.PureComponent {
                static getDerivedStateFromProps(e, t) {
                    var n;
                    let {
                        invite: s,
                        location: a
                    } = e, {
                        backgroundId: i
                    } = t, r = (0, l.parse)(a.search), u = null !== (n = r.redirect_to) && void 0 !== n ? n : null;
                    (null == u || "" === u || !(0, P.isSafeRedirect)(u) || u.startsWith(J.Routes.ME)) && (u = null);
                    let o = null;
                    if (null == s) o = (0, L.getArtForPath)(u);
                    else if ((null == s ? void 0 : s.state) === J.InviteStates.RESOLVED) {
                        let {
                            guild: e,
                            target_application: t
                        } = s;
                        null != t ? null != i && (o = (0, R.getAssetImage)(t.id, i, 1024)) : null != e && "string" == typeof e.splash && (o = M.default.getGuildSplashURL({
                            id: e.id,
                            splash: e.splash
                        }))
                    }
                    return {
                        redirectTo: u,
                        splash: o
                    }
                }
                componentDidMount() {
                    let {
                        inviteKey: e,
                        hasLoadedExperiments: t,
                        isAuthenticated: n
                    } = this.props;
                    null != e && (!t && n && d.default.getExperiments(!0), O.default.track(J.AnalyticEvents.INVITE_OPENED, {
                        invite_code: (0, g.parseInviteCodeFromInviteKey)(e),
                        load_time: D.default.getTimeSinceNavigationStart()
                    }, {
                        flush: !0
                    })), (t || q.CONFERENCE_MODE_ENABLED) && this.resolveInvite(), this.resolveGiftCode(), this.resolveGuildTemplate(), E.default.initialize()
                }
                componentDidUpdate(e) {
                    var t, n;
                    !e.hasLoadedExperiments && this.props.hasLoadedExperiments && !q.CONFERENCE_MODE_ENABLED && this.resolveInvite(), (null === (t = e.invite) || void 0 === t ? void 0 : t.state) !== (null === (n = this.props.invite) || void 0 === n ? void 0 : n.state) && this.maybeFetchApplicationSplash()
                }
                componentWillUnmount() {
                    E.default.terminate()
                }
                maybeFetchApplicationSplash() {
                    let {
                        invite: e
                    } = this.props;
                    if ((null == e ? void 0 : e.state) === J.InviteStates.RESOLVED) {
                        let {
                            target_application: t
                        } = e;
                        null != t && (0, R.fetchAssetIds)(t.id, ["embedded_splash"]).then(e => {
                            let [t] = e;
                            return this.setState({
                                backgroundId: t
                            })
                        })
                    }
                }
                resolveInvite() {
                    let {
                        inviteKey: e
                    } = this.props;
                    if (null == e) return;
                    let t = async () => {
                        let {
                            invite: t
                        } = await f.default.resolveInvite(e, J.PageAnalyticsLocations.INVITE);
                        null != t && (0, _.updateAuthInvite)(t)
                    };
                    t(), f.default.openNativeAppModal(e)
                }
                resolveGuildTemplate() {
                    let {
                        guildTemplateCode: e
                    } = this.props;
                    null != e && (O.default.track(J.AnalyticEvents.GUILD_TEMPLATE_OPENED, {
                        guild_template_code: e,
                        load_time: D.default.getTimeSinceNavigationStart()
                    }, {
                        flush: !0
                    }), T.default.resolveGuildTemplate(e), T.default.openNativeAppModal(e))
                }
                resolveGiftCode() {
                    let {
                        giftCode: e
                    } = this.props;
                    null != e && c.default.resolveGiftCode(e, !0, !0).then(t => {
                        null != t && null == t.giftCode.promotion && o.default.wait(() => c.default.openNativeGiftCodeModal(e))
                    })
                }
                render() {
                    let {
                        splash: e,
                        redirectTo: t
                    } = this.state, {
                        inviteKey: n
                    } = this.props;
                    return (0, s.jsxs)(U.default, {
                        splash: e,
                        children: [(0, s.jsx)(I.default, {
                            path: J.Routes.LOGIN_HANDOFF,
                            render: e => (0, s.jsx)($, {
                                ...e,
                                redirectTo: t
                            })
                        }), (0, s.jsx)(I.default, {
                            impressionName: i.ImpressionNames.USER_LOGIN,
                            path: J.Routes.LOGIN,
                            render: e => (0, s.jsx)(Q, {
                                ...e,
                                redirectTo: t
                            })
                        }), (0, s.jsx)(I.default, {
                            impressionName: i.ImpressionNames.USER_REGISTRATION,
                            path: J.Routes.REGISTER,
                            render: e => q.CONFERENCE_MODE_ENABLED ? (0, s.jsx)(ee, {
                                ...e,
                                redirectTo: t,
                                inviteKey: n
                            }) : (0, s.jsx)(ea, {
                                ...e,
                                redirectTo: t
                            })
                        }), (0, s.jsx)(I.default, {
                            path: J.Routes.GIFT_CODE_LOGIN(":giftCode"),
                            render: e => (0, s.jsx)(en, {
                                login: !0,
                                ...e
                            })
                        }), (0, s.jsx)(I.default, {
                            path: J.Routes.GIFT_CODE(":giftCode"),
                            render: e => (0, s.jsx)(en, {
                                ...e
                            })
                        }), (0, s.jsx)(I.default, {
                            path: [J.Routes.INVITE_LOGIN(":inviteCode"), J.Routes.INVITE(":inviteCode")],
                            render: e => {
                                let {
                                    match: {
                                        params: {
                                            inviteCode: t
                                        },
                                        path: n
                                    },
                                    location: a,
                                    transitionTo: l
                                } = e, i = (0, g.generateInviteKeyFromUrlParams)(t, a.search);
                                return r.isMobile || r.isTablet ? (0, s.jsx)(es, {
                                    inviteKey: i,
                                    transitionTo: l
                                }, i) : (0, s.jsx)(ee, {
                                    inviteKey: i,
                                    location: a,
                                    transitionTo: l,
                                    login: n === J.Routes.INVITE_LOGIN(":inviteCode")
                                })
                            }
                        }), (0, s.jsx)(I.default, {
                            path: [J.Routes.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"), J.Routes.GUILD_TEMPLATE(":guildTemplateCode")],
                            render: e => {
                                let {
                                    match: {
                                        params: {
                                            guildTemplateCode: t
                                        },
                                        path: n
                                    },
                                    location: a,
                                    transitionTo: l
                                } = e;
                                return r.isMobile || r.isTablet ? (0, s.jsx)(k.default, {
                                    code: t
                                }, t) : (0, s.jsx)(et, {
                                    code: t,
                                    location: a,
                                    transitionTo: l,
                                    login: n === J.Routes.GUILD_TEMPLATE_LOGIN(":guildTemplateCode")
                                })
                            }
                        }), (0, s.jsx)(I.default, {
                            path: J.Routes.VERIFY,
                            render: e => (0, s.jsx)(er, {
                                ...e
                            })
                        }), (0, s.jsx)(I.default, {
                            path: J.Routes.VERIFY_HUB_EMAIL,
                            render: e => (0, s.jsx)(ef, {
                                ...e
                            })
                        }), (0, s.jsx)(I.default, {
                            path: J.Routes.VERIFY_REQUEST,
                            render: e => (0, s.jsx)(eu, {
                                ...e
                            })
                        }), (0, s.jsx)(I.default, {
                            path: J.Routes.DISABLE_EMAIL_NOTIFICATIONS,
                            render: e => (0, s.jsx)(ed, {
                                ...e
                            })
                        }), (0, s.jsx)(I.default, {
                            path: J.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                            render: e => (0, s.jsx)(ec, {
                                ...e
                            })
                        }), (0, s.jsx)(I.default, {
                            path: J.Routes.AUTHORIZE_IP,
                            render: e => (0, s.jsx)(el, {
                                ...e
                            })
                        }), (0, s.jsx)(I.default, {
                            path: J.Routes.REJECT_IP,
                            render: e => (0, s.jsx)(eo, {
                                source: J.Routes.REJECT_IP,
                                ...e
                            })
                        }), (0, s.jsx)(I.default, {
                            path: J.Routes.REJECT_MFA,
                            render: e => (0, s.jsx)(eo, {
                                source: J.Routes.REJECT_MFA,
                                ...e
                            })
                        }), (0, s.jsx)(I.default, {
                            path: J.Routes.AUTHORIZE_PAYMENT,
                            render: e => (0, s.jsx)(ei, {
                                ...e
                            })
                        }), (0, s.jsx)(I.default, {
                            path: J.Routes.RESET,
                            render: e => (0, s.jsx)(eo, {
                                source: J.Routes.RESET,
                                ...e
                            })
                        }), (0, s.jsx)(I.default, {
                            path: J.Routes.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                            render: e => (0, s.jsx)(eI, {
                                ...e
                            })
                        }), (0, s.jsx)(I.default, {
                            path: J.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?"),
                            render: e => (0, s.jsx)(eE, {
                                ...e
                            })
                        }), (0, s.jsx)(I.default, {
                            path: J.Routes.REPORT,
                            render: e => (0, s.jsx)(e_, {
                                ...e
                            })
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        splash: null,
                        redirectTo: null,
                        backgroundId: null
                    }
                }
            }
            var eh = u.default.connectStores([S.default, x.default, v.default, C.default, N.default], e => {
                var t, n, s;
                let {
                    match: a,
                    location: l
                } = e, i = null == a ? void 0 : null === (t = a.params) || void 0 === t ? void 0 : t.inviteCode, r = q.CONFERENCE_MODE_ENABLED ? q.DEFAULT_INVITE_CODE : void 0, u = null != i ? (0, g.generateInviteKeyFromUrlParams)(i, l.search) : r, o = null == a ? void 0 : null === (n = a.params) || void 0 === n ? void 0 : n.giftCode, d = null == a ? void 0 : null === (s = a.params) || void 0 === s ? void 0 : s.guildTemplateCode;
                return {
                    inviteKey: u,
                    isAuthenticated: S.default.isAuthenticated(),
                    giftCode: o,
                    guildTemplateCode: d,
                    gift: null != o ? v.default.get(o) : null,
                    invite: null != u ? x.default.getInvite(u) : null,
                    guildTemplate: null != d ? N.default.getGuildTemplate(d) : null,
                    hasLoadedExperiments: C.default.hasLoadedExperiments
                }
            })(ep)
        },
        504568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("597755"),
                i = n.n(l),
                r = n("446674"),
                u = n("437822"),
                o = n("457108"),
                d = n("970366"),
                c = n("271938"),
                f = n("124969"),
                E = n("49111"),
                I = n("782340"),
                _ = n("926622");
            r.default.initialize();
            class p extends a.PureComponent {
                componentDidMount() {
                    let e = (0, o.default)(this.props.location);
                    null != e && u.default.authorizeIPAddress(e), (0, d.trackAppUIViewed)("authorize_ip")
                }
                renderLoginButton() {
                    if ("Android" === i.os.family || "iOS" === i.os.family) return null;
                    let {
                        transitionTo: e
                    } = this.props;
                    return (0, s.jsx)(f.Button, {
                        onClick: () => e(E.Routes.LOGIN),
                        children: I.default.Messages._LOGIN
                    })
                }
                renderFailed() {
                    return (0, s.jsxs)(f.default, {
                        children: [(0, s.jsx)("img", {
                            alt: "",
                            src: n("501851"),
                            className: _.marginBottom20
                        }), (0, s.jsx)(f.Title, {
                            className: _.marginBottom8,
                            children: I.default.Messages.AUTHORIZATION_EXPIRED
                        }), (0, s.jsx)(f.SubTitle, {
                            className: _.marginBottom40,
                            children: I.default.Messages._AUTH_EXPIRED_SUGGESTION
                        }), this.renderLoginButton()]
                    })
                }
                renderSucceeded() {
                    return (0, s.jsxs)(f.default, {
                        children: [(0, s.jsx)("img", {
                            alt: "",
                            src: n("346619"),
                            className: _.marginBottom20
                        }), (0, s.jsx)(f.Title, {
                            className: _.marginBottom8,
                            children: I.default.Messages.IP_AUTHORIZATION_SUCCEEDED
                        }), (0, s.jsx)(f.SubTitle, {
                            className: _.marginBottom40,
                            children: I.default.Messages._AUTH_IP_AUTH_SUCCEEDED_SUGGESTION
                        }), this.renderLoginButton()]
                    })
                }
                renderDefault() {
                    return (0, s.jsxs)(f.default, {
                        children: [(0, s.jsx)(f.AuthSpinner, {}), (0, s.jsx)(f.Title, {
                            children: I.default.Messages.AUTHORIZING
                        })]
                    })
                }
                render() {
                    let {
                        verifyFailed: e,
                        verifySucceeded: t
                    } = this.props;
                    return e ? this.renderFailed() : t ? this.renderSucceeded() : this.renderDefault()
                }
            }
            p.defaultProps = {
                transitionTo: e => n.g.location.assign(e)
            };
            var h = r.default.connectStores([c.default], () => ({
                verifyFailed: c.default.didVerifyFail(),
                verifySucceeded: c.default.didVerifySucceed()
            }))(p)
        },
        345308: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("446674"),
                i = n("437822"),
                r = n("457108"),
                u = n("970366"),
                o = n("271938"),
                d = n("124969"),
                c = n("782340"),
                f = n("926622"),
                E = e => {
                    let {
                        location: t
                    } = e, {
                        verifyFailed: E,
                        verifySucceeded: I
                    } = (0, l.useStateFromStoresObject)([o.default], () => ({
                        verifyFailed: o.default.didVerifyFail(),
                        verifySucceeded: o.default.didVerifySucceed()
                    }));
                    return (a.useEffect(() => {
                        let e = (0, r.default)(t);
                        null != e && i.default.authorizePayment(e), (0, u.trackAppUIViewed)("authorize_payment")
                    }, [t]), E) ? (0, s.jsxs)(d.default, {
                        children: [(0, s.jsx)("img", {
                            alt: "",
                            src: n("768025"),
                            className: f.marginBottom20
                        }), (0, s.jsx)(d.Title, {
                            className: f.marginBottom8,
                            children: c.default.Messages.PAYMENT_AUTHORIZATION_EXPIRED
                        }), (0, s.jsx)(d.SubTitle, {
                            className: f.marginBottom40,
                            children: c.default.Messages.PAYMENT_AUTH_EXPIRED_SUGGESTION
                        })]
                    }) : I ? (0, s.jsxs)(d.default, {
                        children: [(0, s.jsx)("img", {
                            alt: "",
                            src: n("176872"),
                            className: f.marginBottom20
                        }), (0, s.jsx)(d.Title, {
                            className: f.marginBottom8,
                            children: c.default.Messages.PAYMENT_AUTHORIZATION_SUCCEEDED
                        }), (0, s.jsx)(d.SubTitle, {
                            className: f.marginBottom40,
                            children: c.default.Messages.PAYMENT_AUTH_SUCCEEDED_SUGGESTION
                        })]
                    }) : (0, s.jsxs)(d.default, {
                        children: [(0, s.jsx)(d.AuthSpinner, {}), (0, s.jsx)(d.Title, {
                            children: c.default.Messages.PAYMENT_AUTHORIZING
                        })]
                    })
                }
        },
        713177: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("778043"),
                l = n("82946"),
                i = n("49111"),
                r = function(e) {
                    let {
                        match: t,
                        location: n
                    } = e, r = async (e, t) => {
                        await (0, a.deepLinkRouteIfLandedAndNotAuthed)(i.RPCDeepLinks.CHANNEL, {
                            guildId: e.params.guildId,
                            channelId: e.params.channelId,
                            messageId: e.params.messageId,
                            search: t.search
                        })
                    };
                    return (0, s.jsx)(l.default, {
                        match: t,
                        location: n,
                        attemptDeepLink: r
                    })
                }
        },
        82946: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var s, a, l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                u = n.n(r),
                o = n("43982"),
                d = n("209535"),
                c = n("393414"),
                f = n("124969"),
                E = n("782340"),
                I = n("926622");
            (s = a || (a = {}))[s.INITIAL = 0] = "INITIAL", s[s.RPC_CONNECTED = 1] = "RPC_CONNECTED", s[s.APP_OPENING = 2] = "APP_OPENING", s[s.APP_OPENED = 3] = "APP_OPENED";
            var _ = function(e) {
                let {
                    match: t,
                    location: n,
                    attemptDeepLink: s
                } = e, [r, _] = i.useState(a.INITIAL);
                i.useEffect(() => {
                    o.default.once("connected", () => {
                        _(a.RPC_CONNECTED)
                    }), o.default.once("disconnected", () => {
                        (0, c.transitionTo)((0, d.getRedirectPath)())
                    }), o.default.connect()
                }, []), i.useEffect(() => {
                    if (r !== a.INITIAL) return;
                    let e = setTimeout(() => (0, c.transitionTo)((0, d.getRedirectPath)()), 3e3);
                    return () => clearTimeout(e)
                }, [r]);
                let p = i.useCallback(async (e, t) => {
                    try {
                        _(a.APP_OPENING), await s(e, t), _(a.APP_OPENED)
                    } catch (e) {
                        console.error("Error opening deeplink", e)
                    }
                }, [s]);
                if ((0, c.hasNavigated)()) return null;
                switch (r) {
                    case a.RPC_CONNECTED:
                        return (0, l.jsxs)(f.default, {
                            children: [(0, l.jsx)(f.Title, {
                                className: I.marginBottom8,
                                children: E.default.Messages.DEEPLINK_BROWSER_TITLE
                            }), (0, l.jsx)(f.SubTitle, {
                                children: E.default.Messages.DEEPLINK_BROWSER_PROMPT
                            }), (0, l.jsx)(f.Button, {
                                className: I.marginTop40,
                                onClick: () => p(t, n),
                                children: E.default.Messages.OPEN_IN_APP
                            }), (0, l.jsx)(f.Button, {
                                className: u(I.marginTop8, I.marginCenterHorz),
                                color: f.Button.Colors.LINK,
                                look: f.Button.Looks.LINK,
                                onClick: () => (0, c.transitionTo)((0, d.getRedirectPath)()),
                                children: E.default.Messages.CONTINUE_IN_BROWSER
                            })]
                        });
                    case a.INITIAL:
                    case a.APP_OPENING:
                        return (0, l.jsxs)(f.default, {
                            children: [(0, l.jsx)(f.Title, {
                                children: E.default.Messages.APP_OPENING
                            }), (0, l.jsx)(f.AuthSpinner, {})]
                        });
                    case a.APP_OPENED:
                        return (0, l.jsxs)(f.default, {
                            children: [(0, l.jsx)(f.Title, {
                                className: I.marginBottom8,
                                children: E.default.Messages.APP_OPENED_TITLE
                            }), (0, l.jsx)(f.SubTitle, {
                                children: E.default.Messages.DEEPLINK_BROWSER_APP_OPENED
                            })]
                        })
                }
            }
        },
        773852: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("730290"),
                i = n("446674"),
                r = n("872717"),
                u = n("77078"),
                o = n("457108"),
                d = n("970366"),
                c = n("766274"),
                f = n("476108"),
                E = n("124969"),
                I = n("49111"),
                _ = n("853994"),
                p = n("782340"),
                h = n("926622");
            i.default.initialize();
            class N extends a.PureComponent {
                componentDidMount() {
                    let e = (0, o.default)(this.props.location),
                        t = (0, l.parse)(this.props.location.search);
                    r.default.post({
                        url: I.Endpoints.DISABLE_EMAIL_NOTIFICATIONS,
                        body: {
                            token: e,
                            pixel_uuid: t.hash,
                            category: t.category,
                            email_type: t.email_type
                        },
                        oldFormErrors: !0
                    }).then(e => {
                        let {
                            body: {
                                user: n
                            }
                        } = e, s = new c.default(n);
                        this.setState({
                            success: !0,
                            busy: !1,
                            user: s,
                            category: t.category
                        })
                    }, () => this.setState({
                        success: !1,
                        busy: !1
                    })), (0, d.trackAppUIViewed)("disable_email_notifications")
                }
                renderBusy() {
                    return (0, s.jsx)(E.default, {
                        children: (0, s.jsx)(E.AuthSpinner, {})
                    })
                }
                renderCategorySuccess(e, t) {
                    let {
                        defaultRoute: n,
                        transitionTo: a
                    } = this.props, l = p.default.Messages.EMAIL_CATEGORY_UNSUBSCRIBE_EMAIL_BODY.format({
                        category: t
                    });
                    return (0, s.jsxs)(E.default, {
                        children: [(0, s.jsx)(E.Title, {
                            className: h.marginBottom8,
                            children: p.default.Messages.EMAIL_CATEGORY_UNSUBSCRIBE_HEADER
                        }), (0, s.jsx)(E.SubTitle, {
                            children: l
                        }), (0, s.jsx)(E.Button, {
                            className: h.marginTop20,
                            onClick: () => a(n),
                            children: p.default.Messages.CONTINUE_TO_WEBAPP
                        }), (0, s.jsx)(E.Button, {
                            className: h.marginTop8,
                            color: E.Button.Colors.LINK,
                            look: E.Button.Looks.LINK,
                            onClick: () => a(I.Routes.SETTINGS("notifications", _.EMAILS_SUBSECTION)),
                            children: p.default.Messages.EMAIL_CATEGORY_MANAGE_SETTING_LABEL
                        })]
                    })
                }
                renderSuccess() {
                    let {
                        defaultRoute: e,
                        transitionTo: t
                    } = this.props, {
                        user: n,
                        category: a
                    } = this.state;
                    if (null != a) {
                        let e = _.EmailCategoriesList.find(e => e.category === a);
                        if (null != e) return this.renderCategorySuccess(a, e.label())
                    }
                    return (0, s.jsxs)(E.default, {
                        children: [(0, s.jsx)(E.Avatar, {
                            src: null == n ? void 0 : n.getAvatarURL(void 0, 100),
                            size: u.AvatarSizes.DEPRECATED_SIZE_100,
                            className: h.marginBottom20
                        }), (0, s.jsx)(E.Title, {
                            className: h.marginBottom8,
                            children: p.default.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_SUCCESS_HEADER
                        }), (0, s.jsx)(E.SubTitle, {
                            children: p.default.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_SUCCESS_BODY
                        }), (0, s.jsx)(E.Button, {
                            className: h.marginTop40,
                            onClick: () => t(e),
                            children: p.default.Messages.CONTINUE_TO_WEBAPP
                        })]
                    })
                }
                renderError() {
                    let {
                        defaultRoute: e,
                        transitionTo: t
                    } = this.props;
                    return (0, s.jsxs)(E.default, {
                        children: [(0, s.jsx)(E.Image, {
                            src: n("2862"),
                            className: h.marginBottom20
                        }), (0, s.jsx)(E.Title, {
                            className: h.marginBottom8,
                            children: p.default.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_HEADER
                        }), (0, s.jsx)(E.SubTitle, {
                            children: p.default.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_BODY
                        }), (0, s.jsx)(E.Button, {
                            className: h.marginTop40,
                            onClick: () => t(e),
                            children: p.default.Messages.CONTINUE_TO_WEBAPP
                        })]
                    })
                }
                render() {
                    let {
                        busy: e,
                        success: t
                    } = this.state;
                    return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError()
                }
                constructor(...e) {
                    super(...e), this.state = {
                        busy: !0,
                        success: !1,
                        user: null,
                        category: null
                    }
                }
            }
            N.defaultProps = {
                transitionTo: e => n.g.location.assign(e)
            };
            var T = i.default.connectStores([f.default], () => ({
                defaultRoute: f.default.defaultRoute
            }))(N)
        },
        679030: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return j
                }
            });
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
                T = n("55411"),
                m = n("686470"),
                g = n("552712"),
                A = n("124969"),
                S = n("659632"),
                C = n("701909"),
                v = n("158998"),
                x = n("404432"),
                O = n("291850"),
                R = n("860959"),
                L = n("49111"),
                M = n("782340"),
                D = n("926622");
            o.default.initialize(), (s = a || (a = {})).REGISTER = "register", s.LOGIN = "login";
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
                    return e.login ? a.LOGIN : a.REGISTER
                }
                getErrorMessage(e) {
                    let {
                        libraryApplication: t
                    } = this.props, {
                        error: n
                    } = this.state, s = null != n ? n.code : null;
                    return s === L.AbortCodes.INVALID_GIFT_SELF_REDEMPTION ? M.default.Messages.GIFT_CONFIRMATION_BODY_SELF_GIFT_NO_PAYMENT : null != t || s === L.AbortCodes.INVALID_GIFT_REDEMPTION_OWNED ? M.default.Messages.GIFT_CODE_AUTH_HELP_TEXT_OWNED.format({
                        libraryLink: L.Routes.APPLICATION_LIBRARY
                    }) : e.isClaimed || s === L.AbortCodes.INVALID_GIFT_REDEMPTION_EXHAUSTED ? M.default.Messages.GIFT_CODE_AUTH_HELP_TEXT_CLAIMED : s === L.AbortCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED ? M.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT : void 0
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
                            onClick: () => window.open(C.default.getArticleURL(L.HelpdeskArticles.GIFTING), "_blank"),
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
                        isResolved: i,
                        isAccepting: r,
                        transitionTo: u,
                        location: o
                    } = this.props, {
                        fetchingUser: d,
                        continueOnWeb: c
                    } = this.state;
                    if (e === L.NativeAppStates.OPEN && !c) return this.renderAppOpened();
                    if (e === L.NativeAppStates.OPENING) return this.renderSpinner(M.default.Messages.APP_OPENING);
                    if (r) return this.renderSpinner(M.default.Messages.GIFT_CODE_AUTH_ACCEPTING);
                    if (null == s) return i ? this.renderExpiredInvite() : this.renderSpinner(M.default.Messages.GIFT_CODE_AUTH_RESOLVING);
                    if (i) {
                        if (n) {
                            let e = this.state.currentUser;
                            return d || null == e ? this.renderSpinner(M.default.Messages.GIFT_CODE_AUTH_FETCHING_USER) : this.requiresVerification && null != e ? this.renderVerification(e) : this.renderAuthenticated(s, e)
                        }
                        return this.getMode() === a.LOGIN ? (0, l.jsx)(O.default, {
                            giftCodeSKU: t,
                            giftCode: s,
                            transitionTo: u,
                            location: o
                        }) : (0, l.jsx)(R.default, {
                            giftCodeSKU: t,
                            giftCode: s,
                            transitionTo: u,
                            location: o
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
                        c.default.logout(L.Routes.GIFT_CODE_LOGIN(e))
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
                            }), await f.default.redeemGiftCode(n), e(L.Routes.APP)
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
                            null != n && null != n.giftCode.promotion && e(L.Routes.BILLING_PROMOTION_REDEMPTION(t))
                        })
                    }
                }
            }
            var j = o.default.connectStores([T.default, m.default, h.default, g.default, N.default, _.default], e => {
                let t = e.match.params.giftCode,
                    n = T.default.get(t),
                    s = null != n ? g.default.get(n.skuId) : null;
                return {
                    giftCode: n,
                    sku: s,
                    libraryApplication: null != s && null != n ? S.firstLibraryApplicationForGiftCode(n, s, m.default) : null,
                    authenticated: h.default.isAuthenticated(),
                    defaultRoute: N.default.defaultRoute,
                    isResolved: T.default.getIsResolved(t),
                    isAccepting: T.default.getIsAccepting(t),
                    libraryApplicationsFetched: m.default.fetched,
                    nativeAppState: _.default.getState(t)
                }
            })(P)
        },
        926593: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return G
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("627445"),
                u = n.n(r),
                o = n("446674"),
                d = n("208620"),
                c = n("569808"),
                f = n("800932"),
                E = n("913645"),
                I = n("434824"),
                _ = n("473759"),
                p = n("165926"),
                h = n("970366"),
                N = n("42963"),
                T = n("271938"),
                m = n("476108"),
                g = n("124969"),
                A = n("65300"),
                S = n("291850"),
                C = n("598489"),
                v = n("860959"),
                x = n("49111"),
                O = n("579033"),
                R = n("56235"),
                L = n("149806"),
                M = n("53452"),
                D = n("782340"),
                P = n("40587"),
                j = n("926622");
            o.default.initialize();
            class U extends a.PureComponent {
                componentDidMount() {
                    (0, h.trackAppUIViewed)("guildTemplate"), !M.IS_APP_COMPATIBLE_BROWSER && A.default.launch("discord://" + x.Routes.GUILD_TEMPLATE(this.props.code), () => void 0)
                }
                componentDidUpdate(e) {
                    this.props.code !== e.code && E.default.resolveGuildTemplate(this.props.code)
                }
                renderButton(e, t) {
                    return M.IS_APP_COMPATIBLE_BROWSER ? (0, s.jsx)(g.Button, {
                        className: j.marginTop40,
                        onClick: t,
                        children: e
                    }) : (0, s.jsx)(g.IncompatibleBrowser, {
                        className: j.marginTop40
                    })
                }
                renderSpinner(e) {
                    return (0, s.jsxs)(g.default, {
                        children: [(0, s.jsx)(g.Title, {
                            children: e
                        }), (0, s.jsx)(g.AuthSpinner, {})]
                    })
                }
                renderInvalidGuildTemplate() {
                    return (0, s.jsxs)(g.default, {
                        children: [(0, s.jsx)(g.Image, {
                            src: n("653240"),
                            className: j.marginBottom8
                        }), (0, s.jsx)(g.Title, {
                            className: i(j.marginTop8, j.marginBottom8),
                            children: D.default.Messages.GUILD_TEMPLATE_INVALID_TITLE
                        }), (0, s.jsx)(g.SubTitle, {
                            children: D.default.Messages.GUILD_TEMPLATE_INVALID_SUBTITLE
                        }), this.renderButton(D.default.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)]
                    })
                }
                renderAppOpened() {
                    return (0, s.jsxs)(g.default, {
                        children: [(0, s.jsx)(g.Title, {
                            className: j.marginBottom8,
                            children: D.default.Messages.APP_OPENED_TITLE
                        }), (0, s.jsx)(g.SubTitle, {
                            children: D.default.Messages.APP_OPENED_BODY
                        }), this.renderButton(D.default.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)]
                    })
                }
                renderAuthenticatedOrDownload() {
                    let {
                        guildTemplate: e
                    } = this.props;
                    return (u(null != e, "guild template must not be null"), e.state === O.GuildTemplateStates.RESOLVING) ? (0, s.jsx)(g.default, {
                        className: P.authBox,
                        children: (0, s.jsx)(_.default, {
                            guildTemplate: e
                        })
                    }) : (0, s.jsx)(b, {
                        guildTemplate: e
                    })
                }
                renderContinue() {
                    return (0, s.jsxs)(g.default, {
                        children: [(0, s.jsx)(g.Title, {
                            children: D.default.Messages.APP_NOT_OPENED
                        }), this.renderButton(D.default.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)]
                    })
                }
                render() {
                    let {
                        guildTemplate: e,
                        nativeAppState: t,
                        authenticated: n,
                        transitionTo: a,
                        location: l
                    } = this.props;
                    if (null == e) return this.renderSpinner(D.default.Messages.LOADING);
                    if (t === x.NativeAppStates.OPEN) return this.renderAppOpened();
                    if (t === x.NativeAppStates.OPENING) return this.renderSpinner(D.default.Messages.APP_OPENING);
                    switch (e.state) {
                        case O.GuildTemplateStates.RESOLVING:
                            return this.renderSpinner(D.default.Messages.APP_OPENING);
                        case O.GuildTemplateStates.RESOLVED:
                            if (n || !M.IS_APP_COMPATIBLE_BROWSER) return this.renderAuthenticatedOrDownload();
                            if (this.props.login) return (0, s.jsx)(S.default, {
                                guildTemplate: e,
                                transitionTo: a,
                                location: l
                            });
                            else return (0, s.jsx)(v.default, {
                                guildTemplate: e,
                                transitionTo: a,
                                location: l,
                                onRegister: () => {
                                    (0, p.setNewUser)(R.NewUserTypes.ORGANIC_REGISTERED_GUILD_TEMPLATE), N.default.flowStart(L.FlowType.ORGANIC_GUILD_TEMPLATES, L.RegistrationSteps.NUF_STARTED)
                                }
                            });
                        case O.GuildTemplateStates.EXPIRED:
                            return this.renderInvalidGuildTemplate();
                        default:
                            return null
                    }
                }
                constructor(...e) {
                    super(...e), this.handleContinue = () => {
                        let {
                            defaultRoute: e,
                            transitionTo: t
                        } = this.props;
                        t(e)
                    }
                }
            }

            function G(e) {
                let t = {
                    guildTemplate: (0, o.useStateFromStores)([c.default], () => c.default.getGuildTemplate(e.code)),
                    nativeAppState: (0, o.useStateFromStores)([d.default], () => d.default.getState(e.code)),
                    authenticated: (0, o.useStateFromStores)([T.default], () => T.default.isAuthenticated()),
                    defaultRoute: (0, o.useStateFromStores)([m.default], () => m.default.defaultRoute)
                };
                return (0, s.jsx)(U, {
                    ...e,
                    ...t
                })
            }

            function b(e) {
                let {
                    guildTemplate: t
                } = e, {
                    form: n,
                    handleSubmit: a
                } = (0, f.default)(t, !1);
                N.default.flowStep(L.FlowType.ORGANIC_GUILD_TEMPLATES, L.CreateGuildSteps.GUILD_CREATE);
                let l = (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(g.Title, {
                        className: P.header,
                        children: D.default.Messages.GUILD_TEMPLATE_SETUP_DISCORD
                    }), n, (0, s.jsx)(g.Button, {
                        className: P.createButton,
                        onClick: a,
                        children: D.default.Messages.GUILD_TEMPLATE_CREATE_DISCORD
                    })]
                });
                return (0, s.jsx)(C.default, {
                    className: P.authBox,
                    children: () => [(0, s.jsx)(I.default, {
                        guildTemplate: t
                    }, "template"), (0, s.jsx)("div", {
                        className: P.formContainer,
                        children: l
                    }, "contents")]
                })
            }
        },
        683068: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("446674"),
                i = n("77078"),
                r = n("569808"),
                u = n("913645"),
                o = n("473759"),
                d = n("970366"),
                c = n("271938"),
                f = n("124969"),
                E = n("599110"),
                I = n("724853"),
                _ = n("49111"),
                p = n("579033"),
                h = n("782340"),
                N = n("926622");

            function T(e, t, n) {
                e.preventDefault(), E.default.track(_.AnalyticEvents.GUILD_TEMPLATE_APP_OPENED, {
                    guild_template_code: t,
                    guild_template_name: n.name,
                    guild_template_description: n.description,
                    guild_template_guild_id: n.sourceGuildId
                });
                let s = c.default.getFingerprint(),
                    a = null != s ? s : c.default.getId();
                u.default.openMobileApp(n.state === p.GuildTemplateStates.RESOLVED ? t : void 0, a)
            }

            function m(e) {
                let {
                    code: t
                } = e, n = (0, l.useStateFromStores)([r.default], () => r.default.getGuildTemplate(t));
                return (a.useEffect(() => {
                    (0, d.trackAppUIViewed)("guild_template_mobile")
                }, []), null == n || n.state === p.GuildTemplateStates.RESOLVING) ? (0, s.jsx)(f.default, {
                    children: (0, s.jsx)(i.Spinner, {})
                }) : n.state === p.GuildTemplateStates.RESOLVED ? (0, s.jsxs)(f.default, {
                    children: [(0, s.jsx)(o.default, {
                        guildTemplate: n,
                        tall: !0
                    }), (0, s.jsx)(f.Button, {
                        onClick: e => T(e, t, n),
                        className: N.marginTop20,
                        children: h.default.Messages.GUILD_TEMPLATE_OPEN
                    })]
                }) : (0, s.jsx)(I.default, {
                    text: h.default.Messages.GUILD_TEMPLATE_MOBILE_INVALID_ERROR,
                    buttonCta: h.default.Messages.GUILD_TEMPLATE_MOBILE_INVALID_CTA,
                    onClick: e => T(e, t, n)
                })
            }
            l.default.initialize()
        },
        724853: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                InvalidMobileCodedLinkInner: function() {
                    return _
                },
                default: function() {
                    return p
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("414456"),
                l = n.n(a),
                i = n("669491"),
                r = n("77078"),
                u = n("145131"),
                o = n("124969"),
                d = n("49111"),
                c = n("782340"),
                f = n("723673"),
                E = n("173791"),
                I = n("926622");

            function _(e) {
                let {
                    text: t,
                    buttonCta: a,
                    onClick: d
                } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(o.Image, {
                        src: n("781073")
                    }), (0, s.jsx)(o.Title, {
                        className: l(I.marginTop20, I.marginBottom8, E.flexCenter),
                        children: c.default.Messages.DISCORD_DESC_SHORT
                    }), (0, s.jsx)(o.SubTitle, {
                        className: I.marginBottom40,
                        children: c.default.Messages.DISCORD_DESC_LONG
                    }), (0, s.jsxs)(r.Card, {
                        className: f.card,
                        type: r.Card.Types.CUSTOM,
                        children: [(0, s.jsx)("img", {
                            alt: "",
                            className: f.cardAccentLeft,
                            src: n("975391")
                        }), (0, s.jsx)("img", {
                            alt: "",
                            className: f.cardAccentRight,
                            src: n("37920")
                        }), (0, s.jsxs)(u.default, {
                            className: f.cardContents,
                            direction: u.default.Direction.VERTICAL,
                            align: u.default.Align.STRETCH,
                            grow: 0,
                            children: [(0, s.jsx)(r.Text, {
                                tag: "strong",
                                className: f.buttonTitle,
                                variant: "text-md/normal",
                                style: {
                                    color: i.default.unsafe_rawColors.PRIMARY_300.css
                                },
                                children: t
                            }), (0, s.jsx)(o.Button, {
                                className: f.button,
                                onClick: d,
                                children: a
                            })]
                        })]
                    })]
                })
            }

            function p(e) {
                let {
                    text: t,
                    buttonCta: n,
                    theme: a = d.ThemeTypes.DARK,
                    onClick: l
                } = e;
                return (0, s.jsx)(o.default, {
                    theme: a,
                    children: (0, s.jsx)(_, {
                        text: t,
                        buttonCta: n,
                        onClick: l
                    })
                })
            }
        },
        43772: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return W
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("498574"),
                u = n("391679"),
                o = n("446674"),
                d = n("444095"),
                c = n("970728"),
                f = n("448993"),
                E = n("678916"),
                I = n("106885"),
                _ = n("378020"),
                p = n("534438"),
                h = n("208620"),
                N = n("129040"),
                T = n("9294"),
                m = n("165926"),
                g = n("393414"),
                A = n("970366"),
                S = n("271938"),
                C = n("476108"),
                v = n("337543"),
                x = n("124969"),
                O = n("599110"),
                R = n("568734"),
                L = n("701909"),
                M = n("883029"),
                D = n("65300"),
                P = n("719451"),
                j = n("291850"),
                U = n("860959"),
                G = n("49111"),
                b = n("492397"),
                B = n("56235"),
                y = n("53452"),
                F = n("782340"),
                V = n("926622");
            o.default.initialize();
            let k = "Accept Invite Page",
                w = {
                    REGISTER: "register",
                    LOGIN: "login"
                };
            async function H(e) {
                let {
                    invite: t
                } = await c.default.resolveInvite(e, k);
                null != t && (0, I.updateAuthInvite)(t)
            }
            class Y extends a.PureComponent {
                componentDidMount() {
                    let {
                        isUnderage: e,
                        login: t,
                        inviteKey: n
                    } = this.props;
                    if (O.default.track(G.AnalyticEvents.INVITE_VIEWED, {
                            invite_code: n
                        }, {
                            flush: !0
                        }), (0, A.trackAppUIViewed)("invite"), !y.IS_APP_COMPATIBLE_BROWSER) {
                        let e = this.getInviteKey();
                        D.default.launch("discord://" + G.Routes.INVITE(e), () => void 0)
                    }
                    if (!t && e) {
                        let e = this.getInviteKey(),
                            {
                                baseCode: t
                            } = (0, T.parseExtraDataFromInviteKey)(e);
                        (0, g.replaceWith)(G.Routes.INVITE_LOGIN(t))
                    }
                }
                componentDidUpdate(e) {
                    let {
                        invite: t,
                        nativeAppState: n,
                        authenticated: s,
                        transitionTo: a
                    } = this.props, l = this.getInviteKey();
                    if (l !== this.getInviteKey(e)) H(l);
                    else if (t.state === G.InviteStates.APP_NOT_OPENED) this.handleContinue();
                    else if (this.getMode() === w.LOGIN && s !== e.authenticated && s) {
                        let e = S.default.getFingerprint();
                        if (null != e) {
                            let t = (0, u.extractId)(e);
                            this.track(G.AnalyticEvents.INVITE_LOGIN_SUCCESSFUL, !0, {
                                prev_user_id: t
                            })
                        }
                        c.default.acceptInvite({
                            inviteKey: l,
                            context: this.getAcceptInviteContext(k),
                            skipOnboarding: !0,
                            callback: this.handleContinue
                        })
                    }
                    if (n !== e.nativeAppState && n === G.NativeAppStates.OPEN && this.track(G.AnalyticEvents.INVITE_APP_INVOKED, !1), this.getMode() === w.REGISTER && s && !e.authenticated) {
                        let {
                            channel: e
                        } = t;
                        null != e && ((0, m.setNewUser)(B.NewUserTypes.INVITE_UNCLAIMED), null != t.guild ? a(G.Routes.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code)) : c.default.transitionToInvite(t, a))
                    }
                }
                getInviteKey() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
                    return e.inviteKey
                }
                getMode() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
                    return b.CONFERENCE_MODE_ENABLED ? w.REGISTER : e.login ? w.LOGIN : w.REGISTER
                }
                track(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        {
                            invite: s
                        } = this.props,
                        a = this.getInviteKey(),
                        l = (0, T.parseInviteCodeFromInviteKey)(a),
                        i = t ? {
                            guild_id: null != s.guild ? s.guild.id : null,
                            channel_id: null != s.channel ? s.channel.id : null,
                            inviter_id: null != s.inviter ? s.inviter.id : null,
                            invite_code: l
                        } : {
                            invite_code: l
                        };
                    O.default.track(e, {
                        ...i,
                        ...n
                    })
                }
                renderSpinner(e) {
                    return (0, s.jsxs)(x.default, {
                        children: [(0, s.jsx)(x.Title, {
                            children: e
                        }), (0, s.jsx)(x.AuthSpinner, {})]
                    })
                }
                renderInvalidInvite() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return (0, s.jsxs)(x.default, {
                        children: [(0, s.jsx)(x.Image, {
                            src: n("653240"),
                            className: V.marginBottom8
                        }), (0, s.jsx)(x.Title, {
                            className: i(V.marginTop8, V.marginBottom8),
                            children: F.default.Messages.AUTH_INVALID_INVITE_TITLE
                        }), (0, s.jsx)(x.SubTitle, {
                            children: e ? F.default.Messages.AUTH_BANNED_INVITE_BODY : F.default.Messages.AUTH_INVALID_INVITE_BODY
                        }), this.renderButton(F.default.Messages.CONTINUE_TO_WEBAPP), (0, s.jsx)(x.Button, {
                            onClick: () => window.open(L.default.getArticleURL(G.HelpdeskArticles.INVALID_INVITES), "_blank"),
                            look: x.Button.Looks.LINK,
                            color: x.Button.Colors.LINK,
                            className: V.marginTop8,
                            children: F.default.Messages.AUTH_INVALID_INVITE_TIP
                        })]
                    })
                }
                renderErrorInvite() {
                    var e, t;
                    return (0, s.jsxs)(x.default, {
                        children: [(0, s.jsx)(P.default, {
                            invite: this.props.invite,
                            error: null === (e = this.state.error) || void 0 === e ? void 0 : e.message
                        }), (null === (t = this.state.error) || void 0 === t ? void 0 : t.code) === G.AbortCodes.INVALID_CANNOT_FRIEND_SELF ? this.renderButton(F.default.Messages.CONTINUE_TO_WEBAPP) : this.renderButton(F.default.Messages.INSTANT_INVITE_ACCEPT, this.handleAccept)]
                    })
                }
                renderExpiredInvite() {
                    return this.renderInvalidInvite(!1)
                }
                renderBannedInvite() {
                    return this.renderInvalidInvite(!0)
                }
                renderAppOpened(e) {
                    let t = null != e ? e : this.handleContinue;
                    return (0, s.jsxs)(x.default, {
                        children: [(0, s.jsx)(x.Title, {
                            className: V.marginBottom8,
                            children: F.default.Messages.APP_OPENED_TITLE
                        }), (0, s.jsx)(x.SubTitle, {
                            children: F.default.Messages.APP_OPENED_BODY
                        }), this.renderButton(F.default.Messages.CONTINUE_TO_WEBAPP, () => t())]
                    })
                }
                renderAuthenticatedHeader() {
                    let {
                        invite: e
                    } = this.props;
                    return null != e.stage_instance && null != e.guild ? (0, s.jsx)(p.default, {
                        stageInstance: e.stage_instance,
                        guild: e.guild
                    }) : null != e.guild_scheduled_event ? (0, s.jsx)(_.GuildScheduledEventInviteHeader, {
                        channel: e.channel,
                        guildScheduledEvent: e.guild_scheduled_event
                    }) : (0, s.jsx)(P.default, {
                        invite: e
                    })
                }
                renderAuthenicatedFooter() {
                    let {
                        invite: e
                    } = this.props;
                    return (null != e.stage_instance || null != e.guild_scheduled_event) && null != e.guild ? (0, s.jsx)(x.default, {
                        className: V.marginTop20,
                        children: (0, s.jsx)(p.StageInviteFooter, {
                            guild: e.guild,
                            onlineCount: e.approximate_presence_count
                        })
                    }) : null
                }
                renderAuthenticatedOrDownload() {
                    let {
                        invite: e
                    } = this.props, t = null != e.stage_instance ? F.default.Messages.INSTANT_INVITE_ACCEPT_STAGE : F.default.Messages.INSTANT_INVITE_ACCEPT;
                    return (0, s.jsxs)("div", {
                        children: [(0, s.jsxs)(x.default, {
                            children: [this.renderAuthenticatedHeader(), this.renderButton(t, this.handleAccept)]
                        }), this.renderAuthenicatedFooter()]
                    })
                }
                renderContinue() {
                    return (0, s.jsxs)(x.default, {
                        children: [(0, s.jsx)(x.Title, {
                            children: F.default.Messages.APP_NOT_OPENED
                        }), this.renderButton(F.default.Messages.CONTINUE_TO_WEBAPP)]
                    })
                }
                render() {
                    let {
                        invite: e,
                        nativeAppState: t,
                        authenticated: n,
                        transitionTo: a,
                        location: l
                    } = this.props;
                    if (t === G.NativeAppStates.OPEN) return this.renderAppOpened();
                    switch (e.state) {
                        case G.InviteStates.APP_OPENED:
                            return this.renderAppOpened();
                        case G.InviteStates.APP_NOT_OPENED:
                            return this.renderContinue();
                        case G.InviteStates.RESOLVING:
                            return b.CONFERENCE_MODE_ENABLED ? this.renderSpinner(F.default.Messages.DEFAULT_INPUT_PLACEHOLDER) : this.renderSpinner(F.default.Messages.APP_OPENING);
                        case G.InviteStates.APP_OPENING:
                            return this.renderSpinner(F.default.Messages.APP_OPENING);
                        case G.InviteStates.RESOLVED:
                            var i;
                            if (n && (0, R.hasFlag)(null !== (i = e.flags) && void 0 !== i ? i : 0, r.GuildInviteFlags.IS_GUEST_INVITE)) return c.default.openApp(e.code), d.default.set(N.GUEST_INVITE_KEY, e.code), this.renderAppOpened(() => a(G.Routes.APP));
                            if (n || !y.IS_APP_COMPATIBLE_BROWSER) return this.renderAuthenticatedOrDownload();
                            else if (this.getMode() === w.LOGIN) return (0, s.jsx)(j.default, {
                                invite: e,
                                transitionTo: a,
                                location: l
                            });
                            else return (0, s.jsx)(U.default, {
                                invite: e,
                                onLoginStart: () => this.track(G.AnalyticEvents.INVITE_LOGIN, !0),
                                location: l,
                                transitionTo: a
                            });
                        case G.InviteStates.ACCEPTING:
                            return this.renderSpinner(F.default.Messages.INSTANT_INVITE_ACCEPTING);
                        case G.InviteStates.EXPIRED:
                            return this.renderExpiredInvite();
                        case G.InviteStates.BANNED:
                            return this.renderBannedInvite();
                        case G.InviteStates.ERROR:
                            return this.renderErrorInvite();
                        case G.InviteStates.ACCEPTED:
                        default:
                            return null
                    }
                }
                constructor(...e) {
                    var t;
                    super(...e), t = this, this.state = {
                        error: null
                    }, this.getAcceptInviteContext = e => c.default.getInviteContext(e, this.props.invite), this.handleContinue = e => {
                        var t;
                        let {
                            invite: n,
                            transitionTo: s
                        } = this.props;
                        (null != n.channel || (null == e ? void 0 : e.channel) != null) && ((null === (t = n.guild) || void 0 === t ? void 0 : t.id) != null ? s(G.Routes.APP_WITH_INVITE_AND_GUILD_ONBOARDING(n.code)) : c.default.transitionToInvite(null != e ? e : n, s))
                    }, this.handleAccept = () => {
                        this.setState({
                            error: null
                        });
                        let e = this.getInviteKey();
                        c.default.acceptInvite({
                            inviteKey: e,
                            context: this.getAcceptInviteContext(k),
                            skipOnboarding: !0,
                            callback: t => {
                                (0, I.updateAuthInvite)(t), null != t.channel && c.default.openApp(e, t.channel.id)
                            }
                        }).catch(e => {
                            if (e instanceof f.V6OrEarlierAPIError || e instanceof f.APIError) {
                                let t = (0, M.getInviteError)(e.code);
                                this.setState({
                                    error: {
                                        code: e.code,
                                        message: t
                                    }
                                })
                            } else this.setState({
                                error: {
                                    code: e.code,
                                    message: F.default.Messages.INVITE_MODAL_ERROR_DEFAULT
                                }
                            })
                        })
                    }, this.handleDefaultTransition = () => {
                        let {
                            defaultRoute: e,
                            transitionTo: t
                        } = this.props;
                        t(e)
                    }, this.renderButton = function(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.handleDefaultTransition,
                            {
                                invite: a
                            } = t.props,
                            l = null != a.stage_instance || null != a.guild_scheduled_event;
                        return y.IS_APP_COMPATIBLE_BROWSER ? (0, s.jsx)(x.Button, {
                            className: l ? V.marginTop20 : V.marginTop40,
                            onClick: n,
                            color: l ? x.Button.Colors.GREEN : x.Button.Colors.BRAND,
                            children: e
                        }) : (0, s.jsx)(x.IncompatibleBrowser, {
                            className: V.marginTop40
                        })
                    }
                }
            }
            var W = o.default.connectStores([v.default, C.default, S.default, h.default, E.default], e => {
                var t;
                let {
                    inviteKey: n
                } = e;
                return {
                    invite: null !== (t = v.default.getInvite(n)) && void 0 !== t ? t : {},
                    nativeAppState: h.default.getState(n),
                    authenticated: S.default.isAuthenticated(),
                    defaultRoute: C.default.defaultRoute,
                    isUnderage: E.default.isUnderageAnonymous()
                }
            })(Y)
        },
        104110: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("778043"),
                l = n("82946"),
                i = n("49111"),
                r = function(e) {
                    let {
                        match: t,
                        location: n
                    } = e, r = async (e, t) => {
                        await (0, a.deepLinkRouteIfLandedAndNotAuthed)(i.RPCDeepLinks.PICK_GUILD_SETTINGS, {
                            section: e.params.section,
                            subsection: e.params.subsection,
                            search: t.search
                        })
                    };
                    return (0, s.jsx)(l.default, {
                        match: t,
                        location: n,
                        attemptDeepLink: r
                    })
                }
        },
        152434: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("730290"),
                u = n("394846"),
                o = n("446674"),
                d = n("913144"),
                c = n("437822"),
                f = n("457108"),
                E = n("724038"),
                I = n("648498"),
                _ = n("24287"),
                p = n("970366"),
                h = n("271938"),
                N = n("124969"),
                T = n("659500"),
                m = n("49111"),
                g = n("782340"),
                A = n("926622");
            o.default.initialize();
            class S extends a.PureComponent {
                componentDidMount() {
                    (0, p.trackAppUIViewed)("reset_password")
                }
                renderPasswordReset() {
                    let {
                        password: e,
                        error: t,
                        hasCancel: a
                    } = this.state, l = this.isSubmitting(), i = null != t ? t : this.renderError("password");
                    return (0, s.jsxs)(N.default, {
                        onSubmit: this.handleSubmit,
                        tag: "form",
                        children: [(0, s.jsx)("img", {
                            alt: "",
                            src: null == i ? n("245288") : n("314837"),
                            className: A.marginBottom20
                        }), (0, s.jsx)(N.Title, {
                            children: g.default.Messages.RESET_PASSWORD_TITLE
                        }), (0, s.jsxs)(N.Block, {
                            className: A.marginTop20,
                            children: [(0, s.jsx)(N.Input, {
                                label: g.default.Messages.FORM_LABEL_NEW_PASSWORD,
                                className: A.marginBottom20,
                                name: "password",
                                value: e,
                                onChange: e => this.setState({
                                    password: e
                                }),
                                error: i,
                                type: "password"
                            }), (0, s.jsx)(N.Button, {
                                type: "submit",
                                submitting: l,
                                children: g.default.Messages.CHANGE_PASSWORD
                            }), a ? (0, s.jsx)(N.Button, {
                                className: A.marginTop8,
                                onClick: this.handleGoToLogin,
                                submitting: l,
                                color: N.Button.Colors.PRIMARY,
                                children: g.default.Messages.CANCEL
                            }) : null]
                        })]
                    })
                }
                renderMFA() {
                    if (this.props.hasLoginExperiment) return this.renderMFAv2();
                    let {
                        error: e
                    } = this.state, t = null != e ? e : this.renderError("code");
                    return (0, s.jsxs)(N.default, {
                        onSubmit: this.handleTokenSubmit,
                        tag: "form",
                        children: [(0, s.jsx)("img", {
                            alt: "",
                            src: null == t ? n("245288") : n("314837"),
                            className: i(A.marginBottom20, u.isMobile ? A.marginTop20 : "")
                        }), (0, s.jsx)(N.Title, {
                            className: A.marginBottom8,
                            children: g.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                        }), (0, s.jsx)(N.SubTitle, {
                            children: g.default.Messages.TWO_FA_ENTER_TOKEN_BODY
                        }), (0, s.jsxs)(N.Block, {
                            className: A.marginTop20,
                            children: [(0, s.jsx)(N.Input, {
                                className: A.marginBottom8,
                                error: t,
                                onChange: e => this.setState({
                                    code: e
                                }),
                                autoComplete: "off",
                                placeholder: g.default.Messages.TWO_FA_AUTH_CODE,
                                spellCheck: "false",
                                maxLength: 10,
                                autoFocus: !0,
                                value: this.state.code
                            }), (0, s.jsx)(N.Button, {
                                type: "submit",
                                submitting: this.isSubmitting(),
                                children: g.default.Messages._LOGIN
                            })]
                        })]
                    })
                }
                renderMFAv2() {
                    let e = {
                        ticket: this.props.mfaTicket,
                        methods: this.props.mfaMethods
                    };
                    return (0, s.jsx)(N.default, {
                        style: {
                            padding: 0
                        },
                        children: (0, s.jsx)(_.MFASlides, {
                            mfaFinish: e => {
                                let {
                                    mfaType: t,
                                    data: n
                                } = e;
                                return this.handleTokenSubmitMFAv2(t, n)
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
                    return (0, s.jsxs)(N.default, {
                        children: [(0, s.jsx)("img", {
                            alt: "",
                            src: n("245288"),
                            className: i(A.marginBottom20, u.isMobile ? A.marginTop20 : "")
                        }), (0, s.jsx)(N.Title, {
                            className: A.marginBottom40,
                            children: g.default.Messages.RESET_PASSWORD_SUCCESS_TITLE
                        }), (0, s.jsx)(N.Button, {
                            onClick: this.handleOpenApp,
                            children: g.default.Messages.VERIFICATION_OPEN_DISCORD
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
                            onLoginSuccess: n,
                            source: s,
                            resetToken: a
                        } = this.props, {
                            password: l,
                            error: i
                        } = this.state;
                        if (null != e && e.preventDefault(), 0 === l.length) {
                            this.setState({
                                error: g.default.Messages.PASSWORD_REQUIRED
                            }), T.ComponentDispatch.dispatch(m.ComponentActions.WAVE_EMPHASIZE);
                            return
                        }
                        null != i && this.setState({
                            error: null
                        });
                        let r = a;
                        if (null != t && (r = (0, f.default)(t)), null != r) {
                            this.setState({
                                working: !0
                            });
                            try {
                                let {
                                    result: e,
                                    sms: t,
                                    webauthn: a,
                                    ticket: i,
                                    token: u,
                                    totp: o,
                                    backup: f
                                } = await c.default.resetPassword(r, l, s);
                                e === c.PasswordResetResult.MFA ? d.default.dispatch({
                                    type: "LOGIN_MFA_STEP",
                                    ticket: i,
                                    sms: t,
                                    webauthn: a,
                                    totp: o,
                                    backup: f
                                }) : null != n ? n(u) : (d.default.dispatch({
                                    type: "LOGIN_SUCCESS",
                                    token: u
                                }), this.handlePasswordChangeSuccess())
                            } catch (e) {}
                            this.setState({
                                working: !1
                            })
                        }
                    }, this.handleTokenSubmit = async e => {
                        let {
                            location: t,
                            mfaTicket: n,
                            onLoginSuccess: s,
                            resetToken: a,
                            source: l
                        } = this.props, {
                            code: i,
                            password: r,
                            error: u
                        } = this.state;
                        if (null != e && e.preventDefault(), 0 === r.length) {
                            this.setState({
                                error: g.default.Messages.PASSWORD_REQUIRED
                            }), T.ComponentDispatch.dispatch(m.ComponentActions.WAVE_EMPHASIZE);
                            return
                        }
                        null != u && this.setState({
                            error: null
                        });
                        let o = a;
                        if (null != t && (o = (0, f.default)(t)), null != o) {
                            this.setState({
                                working: !0
                            });
                            try {
                                let e = await c.default.resetPasswordMFA(i, n, r, o, l);
                                null != s ? s(e) : (d.default.dispatch({
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
                            location: n,
                            mfaTicket: s,
                            onLoginSuccess: a,
                            resetToken: l,
                            source: i
                        } = this.props, {
                            password: r
                        } = this.state;
                        if (0 === r.length) return d.default.dispatch({
                            type: "LOGIN_RESET"
                        }), Promise.reject();
                        let u = l;
                        return (null != n && (u = (0, f.default)(n)), null == u) ? (d.default.dispatch({
                            type: "LOGIN_RESET"
                        }), Promise.reject()) : c.default.resetPasswordMFAv2({
                            method: e,
                            code: t,
                            ticket: s,
                            password: r,
                            token: u,
                            source: i
                        }).then(e => {
                            null != a ? a(e) : (d.default.dispatch({
                                type: "LOGIN_SUCCESS",
                                token: e
                            }), this.handlePasswordChangeSuccess())
                        })
                    }, this.handlePasswordChangeSuccess = () => {
                        let {
                            replaceWith: e
                        } = this.props;
                        if (u.isTablet || u.isMobile) {
                            this.setState({
                                success: !0
                            });
                            return
                        }
                        e(m.Routes.APP)
                    }, this.handleGoToLogin = () => {
                        let {
                            transitionTo: e
                        } = this.props;
                        c.default.loginReset(), e(m.Routes.LOGIN)
                    }, this.isSubmitting = () => {
                        let {
                            loginStatus: e
                        } = this.props, {
                            working: t
                        } = this.state;
                        return t || e === m.LoginStates.LOGGING_IN_MFA
                    }, this.handleOpenApp = () => {
                        (0, E.default)("password_reset")
                    }, this.hasError = e => null != this.props.errors[e] || null != this.state.error, this.renderError = e => {
                        let {
                            errors: t
                        } = this.props;
                        if (this.hasError(e)) {
                            let n = t[e];
                            return Array.isArray(n) ? n[0] : n
                        }
                        return null
                    };
                    let n = (null === (t = this.props.location) || void 0 === t ? void 0 : t.search) != null && "" !== this.props.location.search ? (0, r.parse)(this.props.location.search) : null;
                    this.state = {
                        method: "",
                        password: "",
                        code: "",
                        error: null,
                        hasCancel: null != n && null != n.from_login,
                        working: !1,
                        success: !1
                    }
                }
            }
            S.defaultProps = {
                transitionTo: e => n.g.location.assign(e),
                replaceWith: e => n.g.location.replace(e)
            };
            var C = function(e) {
                let t = (0, o.useStateFromStoresObject)([h.default], () => ({
                        loginStatus: h.default.getLoginStatus(),
                        mfaTicket: h.default.getMFATicket(),
                        errors: h.default.getErrors(),
                        mfaMethods: h.default.getMFAMethods()
                    })),
                    n = I.default.useExperiment({
                        location: "webConnectedReset"
                    }).enabled;
                return (0, s.jsx)(S, {
                    ...e,
                    ...t,
                    hasLoginExperiment: n
                })
            }
        },
        404981: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("377114"),
                i = n("98352"),
                r = n("124969"),
                u = n("701909"),
                o = n("49111"),
                d = n("782340"),
                c = n("939564"),
                f = n("926622");
            let E = e => {
                let {
                    onClick: t,
                    title: n
                } = e;
                return (0, s.jsx)("div", {
                    className: c.buttonColumn,
                    children: (0, s.jsx)(a.Button, {
                        className: f.reportButton,
                        fullWidth: !0,
                        color: a.Button.Colors.BRAND_NEW,
                        hover: a.Button.Colors.BRAND_NEW,
                        onClick: () => t(),
                        children: n
                    })
                })
            };
            var I = () => {
                let e = (0, i.useIsUnauthenticatedReportFormEnabled)("URF - Landing Page");
                return e && (0, s.jsxs)(r.default, {
                    children: [(0, s.jsx)(r.Title, {
                        className: f.marginBottom8,
                        children: d.default.Messages.URF_LANDING_PAGE_TITLE
                    }), (0, s.jsx)(r.SubTitle, {
                        className: f.marginBottom8,
                        children: d.default.Messages.URF_LANDING_PAGE_SUBTITLE.format({
                            supportURL: u.default.getArticleURL(o.HelpdeskArticles.COPYRIGHT_AND_IP_POLICY)
                        })
                    }), (0, s.jsxs)("div", {
                        className: c.container,
                        children: [(0, s.jsx)(E, {
                            onClick: () => (0, l.showUnauthenticatedReportModalForMessage)(),
                            title: d.default.Messages.URF_LANDING_PAGE_REPORT_MESSAGE_BUTTON
                        }), (0, s.jsx)(E, {
                            onClick: () => (0, l.showUnauthenticatedReportModalForUser)(),
                            title: d.default.Messages.URF_LANDING_PAGE_REPORT_USER_PROFILE_BUTTON
                        })]
                    })]
                })
            }
        },
        726206: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("446674"),
                u = n("437822"),
                o = n("457108"),
                d = n("724038"),
                c = n("970366"),
                f = n("271938"),
                E = n("124969"),
                I = n("599110"),
                _ = n("49111"),
                p = n("782340"),
                h = n("956874"),
                N = n("926622");
            r.default.initialize();
            class T extends a.PureComponent {
                componentDidMount() {
                    this.handleVerify(), (0, c.trackAppUIViewed)("verify_email")
                }
                renderVerifyFailed() {
                    return (0, s.jsxs)(E.default, {
                        children: [(0, s.jsx)(E.Image, {
                            src: n("768025"),
                            className: i(h.image, N.marginBottom20)
                        }), (0, s.jsx)(E.Title, {
                            className: N.marginBottom8,
                            children: p.default.Messages.VERFICATION_EXPIRED
                        }), (0, s.jsx)(E.SubTitle, {
                            className: N.marginBottom40,
                            children: p.default.Messages._AUTH_VERFICATION_EXPIRED_SUGGESTION
                        }), (0, s.jsx)(E.Button, {
                            onClick: this.handleLogin,
                            children: p.default.Messages._LOGIN
                        })]
                    })
                }
                renderVerifySucceeded() {
                    return (0, s.jsxs)(E.default, {
                        children: [(0, s.jsx)(E.Image, {
                            src: n("176872"),
                            className: i(h.image, N.marginBottom20)
                        }), (0, s.jsx)(E.Title, {
                            className: N.marginBottom40,
                            children: p.default.Messages.VERIFICATION_VERIFIED
                        }), (0, s.jsx)(E.Button, {
                            onClick: this.handleOpenApp,
                            children: p.default.Messages.VERIFICATION_OPEN_DISCORD
                        })]
                    })
                }
                renderVerifying() {
                    return (0, s.jsxs)(E.default, {
                        children: [(0, s.jsx)(E.Image, {
                            src: n("951536"),
                            className: i(h.image, N.marginBottom20)
                        }), (0, s.jsx)(E.Title, {
                            className: N.marginBottom8,
                            children: p.default.Messages.VERIFICATION_VERIFYING
                        }), (0, s.jsx)(E.SubTitle, {
                            className: N.marginBottom40,
                            children: p.default.Messages.ACTION_MAY_TAKE_A_MOMENT
                        }), (0, s.jsx)(E.Button, {
                            submitting: !0,
                            color: E.Button.Colors.PRIMARY
                        })]
                    })
                }
                render() {
                    let {
                        verifyFailed: e,
                        verifySucceeded: t
                    } = this.props;
                    return e ? this.renderVerifyFailed() : t ? this.renderVerifySucceeded() : this.renderVerifying()
                }
                constructor(...e) {
                    super(...e), this.handleVerify = () => {
                        let e = (0, o.default)(this.props.location);
                        null != e && u.default.verify(e)
                    }, this.handleLogin = () => {
                        let {
                            transitionTo: e
                        } = this.props;
                        e(_.Routes.LOGIN)
                    }, this.handleOpenApp = () => {
                        let {
                            verifyingUserId: e
                        } = this.props;
                        I.default.track(_.AnalyticEvents.VERIFY_ACCOUNT_APP_OPENED, {
                            verifying_user_id: e
                        }), (0, d.default)("verify_email")
                    }
                }
            }
            T.defaultProps = {
                transitionTo: e => n.g.location.assign(e)
            };
            var m = r.default.connectStores([f.default], () => ({
                verifyFailed: f.default.didVerifyFail(),
                verifyErrors: f.default.getVerifyErrors(),
                verifySucceeded: f.default.didVerifySucceed(),
                fingerprint: f.default.getFingerprint(),
                verifyingUserId: f.default.getVerifyingUserId()
            }))(T)
        },
        68130: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("694187"),
                i = n("782340"),
                r = n("559146");

            function u(e) {
                let {
                    icon: t,
                    onChange: n
                } = e;
                return (0, s.jsx)(a.FocusRing, {
                    within: !0,
                    children: (0, s.jsxs)("div", {
                        className: r.iconContainer,
                        children: [null != t ? (0, s.jsx)("img", {
                            alt: "Your icon",
                            className: r.filledIcon,
                            src: t
                        }) : (0, s.jsxs)("svg", {
                            width: "80",
                            height: "80",
                            viewBox: "0 0 80 80",
                            fill: "none",
                            children: [(0, s.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M54.8694 2.85498C53.8065 2.4291 52.721 2.04752 51.6153 1.71253L51.3254 2.66957L51.0354 3.62661C51.9783 3.91227 52.9057 4.23362 53.8161 4.58911C54.1311 3.98753 54.4832 3.40847 54.8694 2.85498ZM75.4109 26.1839C76.0125 25.8689 76.5915 25.5168 77.145 25.1306C77.5709 26.1935 77.9525 27.279 78.2875 28.3847L77.3304 28.6746L76.3734 28.9646C76.0877 28.0217 75.7664 27.0943 75.4109 26.1839ZM78.8148 43.8253L79.8102 43.9222C79.9357 42.6318 80 41.3234 80 40C80 38.6766 79.9357 37.3682 79.8102 36.0778L78.8148 36.1747L77.8195 36.2715C77.9389 37.4977 78 38.7414 78 40C78 41.2586 77.9389 42.5023 77.8195 43.7285L78.8148 43.8253ZM43.8253 1.18515L43.9222 0.189853C42.6318 0.0642679 41.3234 0 40 0C38.6766 0 37.3682 0.064268 36.0778 0.189853L36.1747 1.18515L36.2715 2.18045C37.4977 2.06112 38.7414 2 40 2C41.2586 2 42.5023 2.06112 43.7285 2.18045L43.8253 1.18515ZM28.6746 2.66957L28.3847 1.71253C25.8549 2.47897 23.4312 3.48925 21.1408 4.71604L21.6129 5.59756L22.0851 6.47907C24.2606 5.3138 26.5624 4.35439 28.9646 3.62661L28.6746 2.66957ZM15.2587 9.85105L14.6239 9.0784C12.5996 10.7416 10.7416 12.5996 9.0784 14.6239L9.85105 15.2587L10.6237 15.8935C12.2042 13.9699 13.9699 12.2042 15.8935 10.6237L15.2587 9.85105ZM5.59756 21.6129L4.71604 21.1408C3.48925 23.4312 2.47897 25.8549 1.71253 28.3847L2.66957 28.6746L3.62661 28.9646C4.35439 26.5624 5.3138 24.2607 6.47907 22.0851L5.59756 21.6129ZM0 40C0 38.6766 0.0642679 37.3682 0.189853 36.0778L1.18515 36.1747L2.18045 36.2715C2.06112 37.4977 2 38.7414 2 40C2 41.2586 2.06112 42.5023 2.18045 43.7285L1.18515 43.8253L0.189853 43.9222C0.064268 42.6318 0 41.3234 0 40ZM2.66957 51.3254L1.71253 51.6153C2.47897 54.1451 3.48926 56.5688 4.71604 58.8592L5.59756 58.3871L6.47907 57.9149C5.3138 55.7394 4.35439 53.4376 3.62661 51.0354L2.66957 51.3254ZM9.85105 64.7413L9.0784 65.3761C10.7416 67.4004 12.5996 69.2584 14.6239 70.9216L15.2587 70.1489L15.8935 69.3763C13.9699 67.7958 12.2042 66.0301 10.6237 64.1065L9.85105 64.7413ZM21.6129 74.4024L21.1408 75.284C23.4312 76.5107 25.8549 77.521 28.3847 78.2875L28.6746 77.3304L28.9646 76.3734C26.5624 75.6456 24.2607 74.6862 22.0851 73.5209L21.6129 74.4024ZM36.1747 78.8148L36.0778 79.8102C37.3682 79.9357 38.6766 80 40 80C41.3234 80 42.6318 79.9357 43.9222 79.8102L43.8253 78.8148L43.7285 77.8195C42.5023 77.9389 41.2586 78 40 78C38.7414 78 37.4977 77.9389 36.2715 77.8195L36.1747 78.8148ZM51.3254 77.3304L51.6153 78.2875C54.1451 77.521 56.5688 76.5107 58.8592 75.284L58.3871 74.4024L57.9149 73.5209C55.7394 74.6862 53.4376 75.6456 51.0354 76.3734L51.3254 77.3304ZM64.7413 70.1489L65.3761 70.9216C67.4004 69.2584 69.2584 67.4004 70.9216 65.3761L70.1489 64.7413L69.3763 64.1065C67.7958 66.0301 66.0301 67.7958 64.1065 69.3763L64.7413 70.1489ZM74.4024 58.3871L75.284 58.8592C76.5107 56.5688 77.521 54.1451 78.2875 51.6153L77.3304 51.3254L76.3734 51.0354C75.6456 53.4375 74.6862 55.7393 73.5209 57.9149L74.4024 58.3871Z",
                                fill: "currentColor"
                            }), (0, s.jsx)("circle", {
                                cx: "68",
                                cy: "12",
                                r: "12",
                                fill: "#5865f2"
                            }), (0, s.jsx)("path", {
                                d: "M73.3332 11.4075H68.5924V6.66675H67.4072V11.4075H62.6665V12.5927H67.4072V17.3334H68.5924V12.5927H73.3332V11.4075Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M40 29C37.794 29 36 30.794 36 33C36 35.207 37.794 37 40 37C42.206 37 44 35.207 44 33C44 30.795 42.206 29 40 29Z",
                                fill: "currentColor"
                            }), (0, s.jsx)("path", {
                                d: "M48 26.001H46.07C45.402 26.001 44.777 25.667 44.406 25.111L43.594 23.891C43.223 23.335 42.598 23 41.93 23H38.07C37.402 23 36.777 23.335 36.406 23.89L35.594 25.11C35.223 25.667 34.598 26 33.93 26H32C30.895 26 30 26.896 30 28V39C30 40.104 30.895 41 32 41H48C49.104 41 50 40.104 50 39V28C50 26.897 49.104 26.001 48 26.001ZM40 39C36.691 39 34 36.309 34 33C34 29.692 36.691 27 40 27C43.309 27 46 29.692 46 33C46 36.31 43.309 39 40 39Z",
                                fill: "currentColor"
                            }), (0, s.jsx)("path", {
                                d: "M24.6097 52.712V47.72H22.5457V52.736C22.5457 53.792 22.0777 54.404 21.1417 54.404C20.2177 54.404 19.7377 53.78 19.7377 52.712V47.72H17.6737V52.724C17.6737 55.04 19.0897 56.132 21.1177 56.132C23.1217 56.132 24.6097 55.016 24.6097 52.712ZM26.0314 56H28.0834V53.252H28.6114C30.6154 53.252 31.9474 52.292 31.9474 50.42C31.9474 48.62 30.7114 47.72 28.6954 47.72H26.0314V56ZM29.9554 50.456C29.9554 51.308 29.4514 51.704 28.5394 51.704H28.0594V49.268H28.5754C29.4874 49.268 29.9554 49.664 29.9554 50.456ZM37.8292 56L37.5532 54.224H35.0092V47.72H32.9572V56H37.8292ZM45.9558 51.848C45.9558 49.292 44.4078 47.564 42.0078 47.564C39.6078 47.564 38.0478 49.304 38.0478 51.872C38.0478 54.428 39.6078 56.156 41.9838 56.156C44.3958 56.156 45.9558 54.404 45.9558 51.848ZM43.8918 51.86C43.8918 53.504 43.1958 54.548 41.9958 54.548C40.8078 54.548 40.0998 53.504 40.0998 51.86C40.0998 50.216 40.8078 49.172 41.9958 49.172C43.1958 49.172 43.8918 50.216 43.8918 51.86ZM52.2916 56.084L54.3676 55.748L51.4876 47.684H49.2316L46.2556 56H48.2716L48.8236 54.284H51.6916L52.2916 56.084ZM50.2516 49.796L51.1756 52.676H49.3156L50.2516 49.796ZM62.5174 51.848C62.5174 49.388 61.0174 47.72 58.1374 47.72H55.2814V56H58.1854C60.9814 56 62.5174 54.308 62.5174 51.848ZM60.4534 51.86C60.4534 53.636 59.5414 54.404 58.0774 54.404H57.3334V49.316H58.0774C59.4814 49.316 60.4534 50.12 60.4534 51.86Z",
                                fill: "currentColor"
                            })]
                        }), (0, s.jsx)(l.default, {
                            onChange: n,
                            multiple: !1,
                            tabIndex: 0,
                            "aria-label": i.default.Messages.GUILD_CREATE_UPLOAD_ICON_BUTTON_TEXT
                        })]
                    })
                })
            }
        },
        358917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HeadphonesIcon: function() {
                    return i
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("669491"),
                l = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M12 3a9 9 0 0 0-8.945 10h1.862a5 5 0 0 1 4.097 2.133L10.39 17.1a3.104 3.104 0 0 1-.17 3.782c-.821.973-2.279 1.448-3.551.742A10.997 10.997 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 4.143-2.29 7.75-5.67 9.624-1.272.707-2.73.23-3.55-.742a3.104 3.104 0 0 1-.17-3.782l1.377-1.967A5 5 0 0 1 19.082 13h1.862A9 9 0 0 0 12 3Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        106885: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateAuthInvite: function() {
                    return a
                }
            });
            var s = n("913144");

            function a(e) {
                s.default.dispatch({
                    type: "AUTH_INVITE_UPDATE",
                    invite: e
                })
            }
        },
        209535: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRedirectPath: function() {
                    return u
                },
                default: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("803182"),
                l = n("447669"),
                i = n("49111"),
                r = n("492397");

            function u() {
                let e = location.pathname + location.search,
                    t = r.CONFERENCE_MODE_ENABLED ? i.Routes.REGISTER : (0, l.getLoginPath)(e, !1);
                return t
            }
            var o = function() {
                return (0, s.jsx)(a.Redirect, {
                    to: u()
                })
            }
        },
        457108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var s = n("730290");

            function a(e) {
                let t = null != e.hash && "" !== e.hash ? (0, s.parse)(e.hash) : null;
                if ((null == t ? void 0 : t.token) != null) return t.token;
                let n = null != e.search && "" !== e.search ? (0, s.parse)(e.search) : null;
                return (null == n ? void 0 : n.token) != null ? n.token : null
            }
        },
        178116: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("730290"),
                i = n("446674"),
                r = n("872717"),
                u = n("970366"),
                o = n("813006"),
                d = n("476108"),
                c = n("124969"),
                f = n("457108"),
                E = n("49111"),
                I = n("782340"),
                _ = n("926622");
            i.default.initialize();
            class p extends a.PureComponent {
                componentDidMount() {
                    let e = (0, f.default)(this.props.location),
                        t = (0, l.parse)(this.props.location.search);
                    r.default.post({
                        url: E.Endpoints.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                        body: {
                            token: e,
                            pixel_uuid: t.hash,
                            guild_id: t.guild_id
                        },
                        oldFormErrors: !0
                    }).then(e => {
                        let {
                            body: {
                                guild: t
                            }
                        } = e, n = new o.default(t);
                        this.setState({
                            success: !0,
                            busy: !1,
                            guild: n
                        })
                    }, () => this.setState({
                        success: !1,
                        busy: !1
                    })), (0, u.trackAppUIViewed)("disable_server_highlight_notifications")
                }
                renderBusy() {
                    return (0, s.jsx)(c.default, {
                        children: (0, s.jsx)(c.AuthSpinner, {})
                    })
                }
                renderSuccess() {
                    let {
                        defaultRoute: e,
                        transitionTo: t
                    } = this.props, {
                        guild: n
                    } = this.state;
                    return (0, s.jsxs)(c.default, {
                        children: [(0, s.jsx)(c.Title, {
                            className: _.marginBottom8,
                            children: I.default.Messages.SERVER_HIGHLIGHT_UNSUBSCRIBE_HEADER
                        }), (0, s.jsx)(c.SubTitle, {
                            children: I.default.Messages.SERVER_HIGHLIGHT_UNSUBSCRIBE_BODY.format({
                                guildName: n.name
                            })
                        }), (0, s.jsx)(c.Button, {
                            className: _.marginTop40,
                            onClick: () => t(e),
                            children: I.default.Messages.CONTINUE_TO_WEBAPP
                        }), (0, s.jsx)(c.Button, {
                            className: _.marginTop8,
                            color: c.Button.Colors.LINK,
                            look: c.Button.Looks.LINK,
                            onClick: () => {
                                t(E.Routes.USER_GUILD_NOTIFICATION_SETTINGS(n.id))
                            },
                            children: I.default.Messages.SERVER_HIGHLIGHT_MANAGE_SETTINGS
                        })]
                    })
                }
                renderError() {
                    let {
                        defaultRoute: e,
                        transitionTo: t
                    } = this.props;
                    return (0, s.jsxs)(c.default, {
                        children: [(0, s.jsx)(c.Image, {
                            src: n("2862"),
                            className: _.marginBottom20
                        }), (0, s.jsx)(c.Title, {
                            className: _.marginBottom8,
                            children: I.default.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_HEADER
                        }), (0, s.jsx)(c.SubTitle, {
                            children: I.default.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_BODY
                        }), (0, s.jsx)(c.Button, {
                            className: _.marginTop40,
                            onClick: () => t(e),
                            children: I.default.Messages.CONTINUE_TO_WEBAPP
                        })]
                    })
                }
                render() {
                    let {
                        busy: e,
                        success: t
                    } = this.state;
                    return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError()
                }
                constructor(...e) {
                    super(...e), this.state = {
                        busy: !0,
                        success: !1,
                        guild: null
                    }
                }
            }
            p.defaultProps = {
                transitionTo: e => n.g.location.assign(e)
            };
            var h = i.default.connectStores([d.default], () => ({
                defaultRoute: d.default.defaultRoute
            }))(p)
        },
        759315: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("446674"),
                u = n("878720"),
                o = n("345327"),
                d = n("25033"),
                c = n("589252"),
                f = n("124969"),
                E = n("578706"),
                I = n("482931"),
                _ = n("782340"),
                p = n("173791"),
                h = n("926622"),
                N = () => {
                    let [e, t] = a.useState(""), [l, N] = a.useState(""), [T, m] = a.useState(!1), [g, A] = a.useState(!1), [S, C] = a.useState(null), [v, x] = a.useState(null), O = (0, r.useStateFromStores)([d.default], () => d.default.getCountryCode()), R = O.code.split(" ")[0], L = async () => {
                        try {
                            await u.default.resendCode(e)
                        } catch (e) {
                            x(e.body.message)
                        }
                    }, M = async () => {
                        m(!0);
                        try {
                            let {
                                token: t
                            } = await u.default.verifyPhone(R + e, l);
                            C(null), x(null), A(!0), u.default.validatePhoneForSupport(t)
                        } catch (e) {
                            e.body.message ? (C(null), x(e.body.message)) : (C(e.body.phone), x(e.body.code))
                        } finally {
                            m(!1)
                        }
                    }, D = (0, s.jsxs)(f.default, {
                        children: [(0, s.jsx)(f.Image, {
                            src: n("229483")
                        }), (0, s.jsxs)(f.Title, {
                            className: i(h.marginTop20, p.flex, p.justifyCenter, p.alignCenter),
                            children: [_.default.Messages.MEMBER_VERIFICATION_PHONE_VERIFIED, (0, s.jsx)(E.default, {
                                className: h.marginLeft8
                            })]
                        })]
                    });
                    return g ? D : (0, s.jsxs)(f.default, {
                        children: [(0, s.jsx)(f.Title, {
                            children: _.default.Messages.ENTER_CODE
                        }), (0, s.jsx)(f.SubTitle, {
                            className: h.marginTop8,
                            children: _.default.Messages.VERIFY_PHONE_FOR_SUPPORT
                        }), (0, s.jsxs)(f.Block, {
                            className: h.marginTop20,
                            children: [(0, s.jsx)(c.default, {
                                label: _.default.Messages.FORM_LABEL_PHONE_NUMBER,
                                alpha2: O.alpha2,
                                countryCode: R,
                                value: e,
                                autoComplete: "off",
                                spellCheck: "false",
                                onChange: t,
                                forceMode: o.PhoneOrEmailSelectorForceMode.PHONE,
                                error: S
                            }), (0, s.jsx)(f.Input, {
                                className: h.marginTop20,
                                label: _.default.Messages.CONFIRMATION_CODE,
                                value: l,
                                onChange: N,
                                maxLength: I.PHONE_VERIFICATION_CODE_NUM_DIGITS,
                                error: v
                            }), (0, s.jsx)(f.Button, {
                                size: f.Button.Sizes.SMALL,
                                look: f.Button.Looks.LINK,
                                onClick: L,
                                children: _.default.Messages.RESEND_CODE
                            }), (0, s.jsx)(f.Button, {
                                className: h.marginTop20,
                                onClick: M,
                                submitting: T,
                                children: _.default.Messages.DONE
                            })]
                        })]
                    })
                }
        },
        843962: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getChannelIconURL: function() {
                    return r
                }
            });
            var s = n("697218"),
                a = n("315102"),
                l = n("449008"),
                i = n("49111");

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case i.ChannelTypes.DM:
                        let [r] = e.recipients.map(s.default.getUser).filter(l.isNotNullish);
                        if (null == r) return null;
                        return r.getAvatarURL(void 0, t, n);
                    case i.ChannelTypes.GROUP_DM:
                        return a.default.getChannelIconURL({
                            id: e.id,
                            icon: e.icon,
                            applicationId: e.getApplicationId(),
                            size: t
                        })
                }
            }
        },
        208620: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var s = n("446674"),
                a = n("913144"),
                l = n("49111");
            let i = {};
            class r extends s.default.Store {
                getState(e) {
                    return i[e]
                }
            }
            r.displayName = "CodedLinkNativeAppStateStore";
            var u = new r(a.default, {
                NATIVE_APP_MODAL_OPENING: function(e) {
                    let {
                        code: t
                    } = e;
                    i[t] = l.NativeAppStates.OPENING
                },
                NATIVE_APP_MODAL_OPENED: function(e) {
                    let {
                        code: t
                    } = e;
                    i[t] = l.NativeAppStates.OPEN
                },
                NATIVE_APP_MODAL_OPEN_FAILED: function(e) {
                    let {
                        code: t
                    } = e;
                    i[t] = l.NativeAppStates.OPEN_FAIL
                }
            })
        },
        586403: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("77078"),
                i = n("1339"),
                r = n("914169"),
                u = n("931874"),
                o = n("745049"),
                d = n("171632");

            function c(e) {
                let {
                    guildScheduledEvent: t,
                    channel: n,
                    onClose: c
                } = e, f = t.entity_type === o.GuildScheduledEventEntityTypes.EXTERNAL, E = a.useCallback(e => (0, r.createEventLocationClickHandler)(t, c)(e), [t, c]), I = (0, u.getLocationDataForEvent)(t, n);
                if (null == I) return null;
                let {
                    IconComponent: _,
                    locationName: p
                } = I, h = (0, s.jsxs)(s.Fragment, {
                    children: [null != _ && (0, s.jsx)(_, {
                        width: 20,
                        height: 20,
                        className: d.channelIcon
                    }), (0, s.jsx)(l.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        className: d.locationText,
                        children: (0, i.guildEventDetailsParser)(p, !0)
                    })]
                });
                return (0, s.jsx)("div", {
                    className: d.row,
                    children: null != E ? (0, s.jsx)(l.Clickable, {
                        className: f ? d.externalLocation : d.channelLocation,
                        onClick: E,
                        children: h
                    }) : h
                })
            }
        },
        767517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("872717"),
                a = n("913144"),
                l = n("619443"),
                i = n("239380"),
                r = n("305961"),
                u = n("49111"),
                o = {
                    acceptGuildTemplate: (e, t, n) => (a.default.dispatch({
                        type: "GUILD_TEMPLATE_ACCEPT",
                        code: e
                    }), new Promise((o, d) => {
                        s.default.post({
                            url: u.Endpoints.UNRESOLVED_GUILD_TEMPLATE(e),
                            body: {
                                name: t,
                                icon: n
                            },
                            oldFormErrors: !0
                        }).then(t => {
                            let n = t.body;
                            a.default.dispatch({
                                type: "GUILD_TEMPLATE_ACCEPT_SUCCESS",
                                code: e,
                                guild: n
                            }), l.default.isConnected() ? r.default.addConditionalChangeListener(() => {
                                if (null != r.default.getGuild(n.id)) return (0, i.transitionToGuild)(n.id), o(n), !1
                            }) : ((0, i.transitionToGuild)(n.id), o(n))
                        }, t => {
                            a.default.dispatch({
                                type: "GUILD_TEMPLATE_ACCEPT_FAILURE",
                                code: e
                            }), d(t.body)
                        })
                    }))
                }
        },
        932180: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("884691"),
                a = n("599110"),
                l = n("579033"),
                i = n("49111");

            function r(e) {
                let t = s.useRef([]);
                s.useEffect(() => {
                    if (null != e && e.state !== l.GuildTemplateStates.RESOLVING) !t.current.includes(e.code) && (t.current.push(e.code), a.default.track(i.AnalyticEvents.CREATE_GUILD_VIEWED, {
                        guild_template_code: e.code,
                        guild_template_name: e.name,
                        guild_template_description: e.description,
                        guild_template_guild_id: e.sourceGuildId
                    }))
                })
            }
        },
        800932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("917351"),
                u = n.n(r),
                o = n("509043"),
                d = n("669491"),
                c = n("77078"),
                f = n("437822"),
                E = n("327037"),
                I = n("68130"),
                _ = n("697218"),
                p = n("461380"),
                h = n("593195"),
                N = n("368121"),
                T = n("767517"),
                m = n("5487"),
                g = n("932180"),
                A = n("473759"),
                S = n("49111"),
                C = n("782340"),
                v = n("953066");

            function x(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    [n, l] = a.useState(""),
                    [i, r] = a.useState(null),
                    [u, o] = a.useState(null),
                    d = (0, m.default)(e.code);
                a.useEffect(() => {
                    (async function e() {
                        let e = _.default.getCurrentUser();
                        if (null == e) try {
                            e = await (0, E.fetchCurrentUser)()
                        } catch (e) {
                            f.default.verifySSOToken(null)
                        }
                        null != e && l(d.defaultName.format({
                            username: e.username
                        }))
                    })()
                }, [d.defaultName]);
                (0, g.default)(e);
                let p = (0, s.jsxs)(s.Fragment, {
                        children: [t ? (0, s.jsx)(A.default, {
                            guildTemplate: e
                        }) : null, (0, s.jsx)("div", {
                            className: v.icon,
                            children: (0, s.jsx)(I.default, {
                                icon: i,
                                onChange: r
                            })
                        }), (0, s.jsx)(c.FormItem, {
                            title: d.nameLabel,
                            children: (0, s.jsx)(c.TextInput, {
                                type: "text",
                                value: n,
                                maxLength: 100,
                                onChange: l,
                                error: null == u ? void 0 : u.name
                            })
                        }), (0, s.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: v.guidelines,
                            children: d.terms.format({
                                guidelinesURL: S.MarketingURLs.GUIDELINES
                            })
                        })]
                    }),
                    h = e.serializedSourceGuild.roles.filter(e => "@everyone" !== e.name),
                    N = (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("div", {
                            className: v.divider
                        }), (0, s.jsxs)(c.FormItem, {
                            className: v.previewSection,
                            title: C.default.Messages.GUILD_TEMPLATE_MODAL_CHANNELS_HEADER,
                            children: [(0, s.jsx)(O, {
                                channels: e.serializedSourceGuild.channels
                            }), (0, s.jsxs)(c.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: v.protip,
                                children: [(0, s.jsxs)("span", {
                                    className: v.protipText,
                                    children: [C.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
                                }), " ", C.default.Messages.GUILD_TEMPLATE_MODAL_CHANNELS_TIP]
                            })]
                        }), h.length > 0 ? (0, s.jsx)(s.Fragment, {
                            children: (0, s.jsx)(c.FormItem, {
                                className: v.previewSection,
                                title: C.default.Messages.GUILD_TEMPLATE_MODAL_ROLES_HEADER2,
                                children: (0, s.jsx)(R, {
                                    roles: h
                                })
                            })
                        }) : null]
                    });
                return {
                    form: p,
                    preview: N,
                    handleSubmit: () => T.default.acceptGuildTemplate(e.code, n, i).catch(e => o(e))
                }
            }

            function O(e) {
                let {
                    channels: t
                } = e, n = u(t).sortBy(e => null == e.parent_id ? 1e4 * Number(e.id) : 1e4 * Number(e.parent_id) + e.id).map(e => {
                    let t = function(e) {
                        let {
                            type: t
                        } = e;
                        return t === S.ChannelTypes.GUILD_VOICE ? N.default : t === S.ChannelTypes.GUILD_CATEGORY ? p.default : h.default
                    }(e);
                    return (0, s.jsxs)("div", {
                        className: i(v.channel, {
                            [v.category]: e.type === S.ChannelTypes.GUILD_CATEGORY
                        }),
                        children: [(0, s.jsx)(t, {
                            className: v.channelIcon
                        }), (0, s.jsx)(c.Text, {
                            className: v.channelText,
                            variant: "text-sm/normal",
                            children: e.name
                        })]
                    }, e.id)
                }).value();
                return (0, s.jsx)("div", {
                    className: v.channelsWrapper,
                    children: n
                })
            }
            n("721247");

            function R(e) {
                let {
                    roles: t
                } = e, n = t.slice().reverse().map(e => (0, s.jsx)(L, {
                    role: e
                }, e.id));
                return (0, s.jsx)("ul", {
                    className: v.rolesWrapper,
                    children: n
                })
            }

            function L(e) {
                var t;
                let {
                    role: n
                } = e, a = null == n.color ? d.default.unsafe_rawColors.PRIMARY_300.css : (0, o.int2hex)(n.color);
                return (0, s.jsxs)("li", {
                    className: v.role,
                    style: {
                        borderColor: null !== (t = (0, o.hex2rgb)(a, .6)) && void 0 !== t ? t : void 0
                    },
                    children: [(0, s.jsx)(c.RoleCircle, {
                        className: v.roleCircle,
                        color: a
                    }), (0, s.jsx)("div", {
                        className: v.roleName,
                        children: n.name
                    })]
                })
            }
        },
        913645: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var s = n("742270"),
                a = n("815157"),
                l = n("391679"),
                i = n("523086"),
                r = n("599110"),
                u = n("65300"),
                o = n("883069"),
                d = n("49111");
            let c = "template";
            var f = {
                ...o.default,
                openNativeAppModal(e) {
                    i.default.openNativeAppModal(e, d.RPCCommands.GUILD_TEMPLATE_BROWSER)
                },
                openMobileApp(e, t) {
                    if (null != platform.ua && platform.ua.toLowerCase().indexOf("googlebot") > -1) return;
                    let n = null != e ? (0, s.getGuildTemplateDynamicLinkTemplate)(e) : (0, s.getDefaultDynamicLinkTemplate)(),
                        i = (0, a.generateAttemptId)(),
                        o = (0, a.default)(n, {
                            utmSource: c,
                            fingerprint: t,
                            attemptId: i
                        });
                    r.default.track(d.AnalyticEvents.DEEP_LINK_CLICKED, {
                        fingerprint: (0, l.maybeExtractId)(t),
                        attempt_id: i,
                        source: c,
                        guild_template_code: e
                    }), u.default.launch(o, () => {})
                }
            }
        },
        893552: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("446674"),
                a = n("913144");
            let l = !1,
                i = null,
                r = null;
            class u extends s.default.Store {
                getState() {
                    return {
                        verifySuccess: l,
                        verifyErrors: i,
                        redirectGuildId: r
                    }
                }
            }
            u.displayName = "HubEmailVerificationStore";
            var o = new u(a.default, {
                HUB_VERIFY_EMAIL_SUCCESS: function(e) {
                    let {
                        guildId: t
                    } = e;
                    l = !0, i = null, r = t
                },
                HUB_VERIFY_EMAIL_FAILURE: function(e) {
                    let {
                        errors: t
                    } = e;
                    l = !1, i = t
                }
            })
        },
        810621: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var s = n("627445"),
                a = n.n(s),
                l = n("597755"),
                i = n.n(l),
                r = n("742270"),
                u = n("815157"),
                o = n("391679"),
                d = n("393414"),
                c = n("271938"),
                f = n("476108"),
                E = n("599110"),
                I = n("65300"),
                _ = n("49111");

            function p(e) {
                let t = function(e) {
                        var t;
                        let n = null === (t = i.os) || void 0 === t ? void 0 : t.family;
                        if ("Android" === n || "iOS" === n) {
                            let t = c.default.getFingerprint(),
                                n = (0, u.generateAttemptId)();
                            return a(null != e, "generateAppPath: guildId cannot be null"), (0, u.default)((0, r.getInviteDynamicLinkTemplate)(e), {
                                utmSource: "verify_hub_email",
                                fingerprint: t,
                                attemptId: n
                            })
                        }
                        return "discord://"
                    }(e),
                    n = (0, u.parseDynamicLink)(t);
                null != n && E.default.track(_.AnalyticEvents.DEEP_LINK_CLICKED, {
                    fingerprint: (0, o.maybeExtractId)(n.fingerprint),
                    attempt_id: n.attemptId,
                    source: n.utmSource
                }), I.default.launch(t, e => {
                    !e && (0, d.replaceWith)(f.default.fallbackRoute)
                })
            }
        },
        777858: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("446674"),
                i = n("142833"),
                r = n("457108"),
                u = n("393414"),
                o = n("970366"),
                d = n("124969"),
                c = n("893552"),
                f = n("810621"),
                E = n("49111"),
                I = n("782340"),
                _ = n("255987");

            function p(e) {
                let {
                    location: t
                } = e, [p, h] = a.useState(!1), {
                    verifySuccess: N,
                    verifyErrors: T,
                    redirectGuildId: m
                } = (0, l.useStateFromStores)([c.default], () => c.default.getState());
                a.useEffect(() => {
                    let e = (0, r.default)(t);
                    i.default.verify(e), (0, o.trackAppUIViewed)("verify_hub_email")
                }, [t]);
                let g = () => {
                    (0, f.default)(m), h(!0)
                };
                return p ? (0, s.jsxs)(d.default, {
                    children: [(0, s.jsx)(d.Title, {
                        className: _.title,
                        children: I.default.Messages.APP_OPENED_TITLE
                    }), (0, s.jsx)(d.SubTitle, {
                        className: _.subtitle,
                        children: I.default.Messages.APP_OPENED_BODY
                    }), (0, s.jsx)(d.Button, {
                        className: _.spacedButton,
                        onClick: () => (0, u.transitionTo)(E.Routes.CHANNEL(m)),
                        children: I.default.Messages.CONTINUE_TO_WEBAPP
                    })]
                }) : N ? (0, s.jsxs)(d.default, {
                    children: [(0, s.jsx)(d.Image, {
                        className: _.image,
                        src: n("176872")
                    }), (0, s.jsx)(d.Title, {
                        className: _.title,
                        children: I.default.Messages.VERIFICATION_VERIFIED
                    }), (0, s.jsx)(d.Button, {
                        onClick: g,
                        children: I.default.Messages.VERIFICATION_OPEN_DISCORD
                    })]
                }) : null != T ? (0, s.jsxs)(d.default, {
                    children: [(0, s.jsx)(d.Image, {
                        className: _.image,
                        src: n("768025")
                    }), (0, s.jsx)(d.Title, {
                        className: _.title,
                        children: I.default.Messages.VERFICATION_EXPIRED
                    }), (0, s.jsx)(d.SubTitle, {
                        className: _.subtitle,
                        children: I.default.Messages._AUTH_VERFICATION_EXPIRED_SUGGESTION
                    }), (0, s.jsx)(d.Button, {
                        onClick: g,
                        children: I.default.Messages.VERIFICATION_OPEN_DISCORD
                    })]
                }) : (0, s.jsxs)(d.default, {
                    children: [(0, s.jsx)(d.Image, {
                        className: _.image,
                        src: n("951536")
                    }), (0, s.jsx)(d.Title, {
                        className: _.title,
                        children: I.default.Messages.VERIFICATION_VERIFYING
                    }), (0, s.jsx)(d.SubTitle, {
                        className: _.subtitle,
                        children: I.default.Messages.ACTION_MAY_TAKE_A_MOMENT
                    }), (0, s.jsx)(d.Button, {
                        submitting: !0,
                        color: d.Button.Colors.PRIMARY
                    })]
                })
            }
            l.default.initialize()
        },
        98352: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsUnauthenticatedReportFormEnabled: function() {
                    return l
                }
            });
            var s = n("862205");
            let a = (0, s.createExperiment)({
                kind: "user",
                id: "2023-09_iar_dsa_webform",
                label: "Safety Experience Unauthenticated Report Form",
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

            function l(e) {
                return a.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        93871: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ExpirationNoticeMobileWebExperiment: function() {
                    return a
                }
            });
            var s = n("862205");
            let a = (0, s.createExperiment)({
                kind: "user",
                id: "2021-03_expiration_notice_mobile_web",
                label: "Show expiration notice on mobile web invite",
                defaultConfig: {
                    showExpirationNotice: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show expiration notice",
                    config: {
                        showExpirationNotice: !0
                    }
                }]
            });
            (0, s.createExperiment)({
                kind: "user",
                id: "2021-03_expiration_notice_ios",
                label: "Show expiration notice on ios invite",
                defaultConfig: {
                    showExpirationNotice: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show expiration notice",
                    config: {
                        showExpirationNotice: !0
                    }
                }]
            }), (0, s.createExperiment)({
                kind: "user",
                id: "2021-03_expiration_notice_ios_embed",
                label: "Show expiration notice on ios invite embed",
                defaultConfig: {
                    showExpirationNotice: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show expiration notice",
                    config: {
                        showExpirationNotice: !0
                    }
                }]
            })
        },
        800118: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LARGE_SERVER_MEMBER_THRESHOLD: function() {
                    return T
                },
                isGroupInvite: function() {
                    return A
                },
                isDirectInvite: function() {
                    return S
                },
                isEnhancedCommunityInvite: function() {
                    return x
                },
                InviteDestinationIcon: function() {
                    return R
                },
                InviteMemberCounts: function() {
                    return L
                },
                InviteJoinContext: function() {
                    return M
                },
                InviteHeader: function() {
                    return D
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("77078"),
                u = n("953109"),
                o = n("580357"),
                d = n("124969"),
                c = n("258078"),
                f = n("315102"),
                E = n("158998"),
                I = n("91366"),
                _ = n("49111"),
                p = n("238055"),
                h = n("782340"),
                N = n("563541");
            let T = 100,
                m = e => {
                    var t, n;
                    let s = {
                        onlineCount: null !== (t = e.approximate_presence_count) && void 0 !== t ? t : 0,
                        memberCount: null !== (n = e.approximate_member_count) && void 0 !== n ? n : 0
                    };
                    return 0 === s.memberCount && 0 === s.memberCount ? null : s
                },
                g = e => e.target_type === I.InviteTargetTypes.STREAM && null != e.target_user,
                A = e => {
                    var t;
                    return (null === (t = e.channel) || void 0 === t ? void 0 : t.type) === _.ChannelTypes.GROUP_DM
                },
                S = e => null == e.channel && null == e.guild && null != e.inviter,
                C = e => {
                    var t;
                    let n = m(e);
                    return (null !== (t = null == n ? void 0 : n.memberCount) && void 0 !== t ? t : 0) > T
                },
                v = e => e.state === _.InviteStates.ACCEPTED,
                x = e => {
                    let {
                        guild_scheduled_event: t
                    } = e;
                    return null != t || !1
                },
                O = e => !x(e) && (!!S(e) || null != e.inviter && !v(e) && !C(e)),
                R = e => {
                    let {
                        guild: t,
                        user: n,
                        application: a
                    } = e;
                    if (null != a) return (0, s.jsx)(u.default, {
                        className: N.appIcon,
                        game: a,
                        size: N.appIconSize
                    });
                    if (null != n) return (0, s.jsx)(d.Avatar, {
                        src: n.getAvatarURL(void 0, 100),
                        size: r.AvatarSizes.DEPRECATED_SIZE_100,
                        className: N.avatar
                    });
                    if (null != t) return (0, s.jsx)(d.GuildIcon, {
                        guild: t,
                        size: d.GuildIcon.Sizes.LARGER,
                        className: N.guildIcon,
                        animate: !0
                    });
                    else return null
                };

            function L(e) {
                var t;
                let {
                    invite: n,
                    textClassName: a,
                    className: l
                } = e, r = m(n);
                return null == r || O(n) || (null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id) === p.INVITE_ROUTING_HUB_GUILD_ID ? null : (0, s.jsx)(d.ActivityCount, {
                    className: i(N.activityCount, l),
                    online: r.onlineCount,
                    total: r.memberCount,
                    textClassName: a,
                    flat: !0
                })
            }

            function M(e) {
                let {
                    invite: t,
                    showBigUserIcon: n
                } = e, l = a.useMemo(() => n ? null : g(t) && null != t.target_user ? f.default.getUserAvatarURL(t.target_user) : O(t) && null != t.inviter ? f.default.getUserAvatarURL(t.inviter) : null, [t, n]), i = h.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN;
                if (A(t)) {
                    var u, o;
                    i = (null === (u = t.channel) || void 0 === u ? void 0 : u.name) != null && (null === (o = t.inviter) || void 0 === o ? void 0 : o.username) != null ? h.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM_BY_USER.format({
                        username: t.inviter.username
                    }) : h.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM
                } else g(t) && null != t.target_user ? i = h.default.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
                    username: t.target_user.username
                }) : v(t) ? i = h.default.Messages.INSTANT_INVITE_YOU_ARE_ALREADY_A_MEMBER_OF : O(t) && null != t.inviter && (i = h.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_BY_USER.format({
                    username: E.default.getFormattedName(t.inviter)
                }));
                return (0, s.jsxs)("div", {
                    className: N.inviteJoinContainer,
                    children: [null != l && (0, s.jsx)("div", {
                        className: N.inviterIconWrapper,
                        children: (0, s.jsx)(d.Avatar, {
                            src: l,
                            size: r.AvatarSizes.SIZE_24
                        })
                    }), (0, s.jsx)(d.SubTitle, {
                        className: N.inviteJoinSubTitle,
                        children: i
                    })]
                })
            }

            function D(e) {
                let t, n, a, {
                    user: l,
                    guild: i,
                    channel: u,
                    application: f,
                    showBigUserIcon: I
                } = e;
                if (null != i) I && null == f && (t = (0, s.jsx)(d.GuildIcon, {
                    guild: i,
                    size: d.GuildIcon.Sizes.SMALL
                })), n = i.name, null != f && (n = f.name, a = (0, s.jsxs)("div", {
                    className: N.inviteJoinContainer,
                    children: [(0, s.jsx)(d.SubTitle, {
                        className: N.appIn,
                        children: h.default.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
                    }), (0, s.jsxs)("div", {
                        className: N.guildContainer,
                        children: [(0, s.jsx)(d.GuildIcon, {
                            guild: i,
                            size: d.GuildIcon.Sizes.SMALL
                        }), (0, s.jsx)(c.default, {
                            className: N.appGuildName,
                            color: c.default.Colors.CUSTOM,
                            tag: "span",
                            size: c.default.Sizes.SIZE_24,
                            children: i.name
                        })]
                    })]
                }));
                else if (null != u) {
                    if (null == l) throw Error("no inviter in group DM invite");
                    let e = E.default.getFormattedName(l);
                    null != u.name && "" !== u.name ? (n = u.name, null != u.icon && (t = (0, s.jsx)(d.ChannelIcon, {
                        channel: u,
                        size: r.AvatarSizes.SIZE_32
                    }))) : n = e
                } else if (null != l) {
                    let e = E.default.getFormattedName(l);
                    n = h.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
                        username: e
                    }), a = (0, s.jsx)(d.SubTitle, {
                        className: N.directInviteSubTitle,
                        children: h.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
                            username: e
                        })
                    })
                }
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)(d.Title, {
                        className: N.title,
                        children: [null != i ? (0, s.jsx)(o.default, {
                            guild: i,
                            className: N.guildBadge,
                            tooltipPosition: "left"
                        }) : null, t, n]
                    }), a]
                })
            }
        },
        243961: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("653047"),
                i = n("233069"),
                r = n("813006"),
                u = n("766274"),
                o = n("800118"),
                d = n("570683"),
                c = n("49111"),
                f = n("782340"),
                E = n("520682");
            let I = e => {
                let {
                    state: t
                } = e;
                switch (t) {
                    case c.InviteStates.ACCEPTING:
                    case c.InviteStates.APP_OPENING:
                        return !0;
                    default:
                        return !1
                }
            };

            function _(e) {
                let {
                    invite: t,
                    onAcceptInvite: n,
                    disableUser: _ = !1
                } = e;
                if (null == t) return null;
                let p = null != t.guild ? new r.default(t.guild) : null,
                    h = null != t.channel ? (0, i.createChannelRecordFromInvite)(t.channel) : null,
                    N = null != t.target_application ? new l.default(t.target_application) : null,
                    T = _ || null == t.inviter ? null : new u.default(t.inviter),
                    m = null != t.approximate_member_count && t.approximate_member_count > o.LARGE_SERVER_MEMBER_THRESHOLD || null != p && p.hasFeature(c.GuildFeatures.COMMUNITY),
                    g = !m && null != T && (0, o.isGroupInvite)(t),
                    A = I(t),
                    S = {
                        invite: t,
                        user: T,
                        guild: p,
                        channel: h,
                        application: N
                    };
                return (0, o.isEnhancedCommunityInvite)(t) ? (0, s.jsx)(d.default, {
                    invite: t,
                    channel: h,
                    isSubmitting: A,
                    onAcceptInvite: n
                }) : (0, s.jsxs)("div", {
                    className: E.container,
                    children: [(0, s.jsx)(o.InviteDestinationIcon, {
                        application: N,
                        guild: p,
                        user: g || (0, o.isDirectInvite)(t) ? T : null
                    }), (0, o.isDirectInvite)(t) ? null : (0, s.jsx)(o.InviteJoinContext, {
                        ...S,
                        showBigUserIcon: g
                    }), (0, s.jsx)(o.InviteHeader, {
                        ...S,
                        showBigUserIcon: g
                    }), (0, s.jsx)(o.InviteMemberCounts, {
                        ...S
                    }), (0, s.jsx)(a.Button, {
                        onClick: n,
                        submitting: A,
                        className: E.acceptButton,
                        children: f.default.Messages.INSTANT_INVITE_ACCEPT
                    })]
                })
            }
        },
        701662: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return G
                }
            });
            var s, a, l = n("37983"),
                i = n("884691"),
                r = n("301165"),
                u = n("446674"),
                o = n("77078"),
                d = n("970728"),
                c = n("724853"),
                f = n("731898"),
                E = n("984997"),
                I = n("970366"),
                _ = n("271938"),
                p = n("337543"),
                h = n("124969"),
                N = n("599110"),
                T = n("315102"),
                m = n("449008"),
                g = n("9294"),
                A = n("800118"),
                S = n("243961"),
                C = n("570683"),
                v = n("49111"),
                x = n("782340"),
                O = n("43730");

            function R() {
                return (0, l.jsx)("div", {
                    className: O.centerFlex,
                    children: (0, l.jsx)(o.Spinner, {})
                })
            }(s = a || (a = {}))[s.LOADING = 0] = "LOADING", s[s.DETAILS = 1] = "DETAILS", s[s.ERROR = 2] = "ERROR";
            let L = e => {
                let t = (null == e ? void 0 : e.state) == null && (null == e ? void 0 : e.channel) == null;
                if (null == e || null == e.state || t) return a.LOADING;
                let n = e.state;
                switch (n) {
                    case v.InviteStates.RESOLVED:
                    case v.InviteStates.ACCEPTED:
                    case v.InviteStates.APP_NOT_OPENED:
                    case v.InviteStates.APP_OPENED:
                    case v.InviteStates.ACCEPTING:
                    case v.InviteStates.APP_OPENING:
                        return a.DETAILS;
                    case v.InviteStates.EXPIRED:
                    case v.InviteStates.BANNED:
                    case v.InviteStates.ERROR:
                        return a.ERROR;
                    case v.InviteStates.RESOLVING:
                        return a.LOADING;
                    default:
                        (0, m.assertNever)(n)
                }
            };

            function M(e) {
                let {
                    invite: t,
                    onAcceptInvite: n
                } = e;
                if ((null == t ? void 0 : t.state) === v.InviteStates.BANNED) return (0, l.jsx)(c.InvalidMobileCodedLinkInner, {
                    text: x.default.Messages.AUTH_BANNED_INVITE_BODY,
                    buttonCta: x.default.Messages.INVITE_INVALID_CTA,
                    onClick: n
                });
                return (0, l.jsx)(c.InvalidMobileCodedLinkInner, {
                    text: x.default.Messages.INVITE_INVALID_ERROR,
                    buttonCta: x.default.Messages.INVITE_INVALID_CTA,
                    onClick: n
                })
            }

            function D(e) {
                let {
                    children: t,
                    cardChildren: n,
                    startAnimHeightPx: s,
                    innerStyle: a,
                    ...u
                } = e, {
                    invite: o
                } = u, [d, c] = i.useState(L(o)), {
                    ref: E,
                    height: I
                } = (0, f.default)(), _ = (0, r.useSpring)({
                    height: null != I && 0 !== I ? "".concat(I, "px") : "".concat(s, "px"),
                    config: r.config.stiff
                });
                return i.useEffect(() => {
                    let e = L(o);
                    e !== d && c(e)
                }, [o, d]), (0, l.jsxs)(r.animated.div, {
                    className: O.inviteCard,
                    style: _,
                    children: [(0, l.jsx)(r.animated.div, {
                        className: O.inviteChildContainer,
                        style: _,
                        children: (0, l.jsx)("section", {
                            ref: E,
                            className: null == a ? void 0 : a(d),
                            children: t(d)
                        })
                    }), n]
                })
            }

            function P(e) {
                let {
                    invite: t
                } = e;
                if (null == t || !(0, A.isEnhancedCommunityInvite)(t)) return null;
                let n = e => {
                    if (null == t) return null;
                    if (e === a.DETAILS) return (0, l.jsx)(C.GuildInfoCard, {
                        invite: t
                    });
                    return null
                };
                return (0, l.jsx)(D, {
                    startAnimHeightPx: 0,
                    innerStyle: () => O.guildInfoInner,
                    cardChildren: (0, l.jsx)(E.default, {
                        invite: t,
                        className: O.expirationNotice
                    }),
                    ...e,
                    children: e => n(e)
                })
            }

            function j(e) {
                let {
                    invite: t
                } = e, n = null != t && (0, A.isEnhancedCommunityInvite)(t), s = n => {
                    if (null == t) return (0, l.jsx)(R, {});
                    switch (n) {
                        case a.DETAILS:
                            return (0, l.jsx)(S.default, {
                                ...e,
                                invite: t
                            });
                        case a.ERROR:
                            return (0, l.jsx)(M, {
                                ...e,
                                invite: t
                            });
                        default:
                            return (0, l.jsx)(R, {})
                    }
                }, i = {
                    [a.DETAILS]: O.inviteCardInner,
                    [a.ERROR]: O.inviteCardInnerError,
                    [a.LOADING]: O.inviteCardInnerLoading
                };
                return (0, l.jsx)(D, {
                    startAnimHeightPx: 200,
                    innerStyle: e => i[e],
                    cardChildren: n ? null : (0, l.jsx)(E.default, {
                        invite: t,
                        className: O.expirationNotice
                    }),
                    ...e,
                    children: e => s(e)
                })
            }

            function U(e) {
                let {
                    invite: t,
                    onAcceptInvite: n
                } = e, {
                    guild: s
                } = null != t ? t : {}, a = {};
                if ((null == s ? void 0 : s.splash) != null) {
                    let e = T.default.getGuildSplashURL({
                        id: s.id,
                        splash: s.splash
                    });
                    null != e && (a.backgroundImage = "url(".concat(e, ")"), a.backgroundSize = "cover")
                }
                return (0, l.jsxs)(h.default, {
                    theme: v.ThemeTypes.DARK,
                    className: O.splashBackground,
                    style: a,
                    contentClassName: O.centerAuthBoxContent,
                    children: [(0, l.jsx)(j, {
                        ...e,
                        onAcceptInvite: n
                    }), (0, l.jsx)(P, {
                        ...e
                    })]
                })
            }

            function G(e) {
                let {
                    inviteKey: t,
                    transitionTo: n
                } = e, s = (0, u.useStateFromStores)([p.default], () => p.default.getInvite(t));
                return i.useEffect(() => {
                    (0, I.trackAppUIViewed)("invite_mobile")
                }, []), i.useEffect(() => {
                    if (null != s && s.state === v.InviteStates.RESOLVED) N.default.track(v.AnalyticEvents.INVITE_VIEWED, {
                        invite_code: t,
                        friends_count: null == s ? void 0 : s.friends_count
                    }, {
                        flush: !0
                    })
                }, [s, t]), (0, l.jsx)(U, {
                    invite: s,
                    onAcceptInvite: e => {
                        ! function(e, t, n) {
                            var s, a, l;
                            null == e || e.preventDefault(), N.default.track(v.AnalyticEvents.INVITE_APP_OPENED, {
                                invite_code: (0, g.parseInviteCodeFromInviteKey)(t),
                                guild_id: null == n ? void 0 : null === (s = n.guild) || void 0 === s ? void 0 : s.id,
                                channel_id: null == n ? void 0 : null === (a = n.channel) || void 0 === a ? void 0 : a.id,
                                inviter_id: null == n ? void 0 : null === (l = n.inviter) || void 0 === l ? void 0 : l.id
                            });
                            let i = null != n && n.state !== v.InviteStates.EXPIRED && n.state !== v.InviteStates.BANNED ? t : void 0,
                                r = _.default.getFingerprint(),
                                u = null != r ? r : _.default.getId(),
                                o = null != n && (null == n ? void 0 : n.type) != null ? Number(null == n ? void 0 : n.type) : void 0;
                            d.default.openApp(i, void 0, u, void 0, o)
                        }(e, t, s)
                    },
                    transitionTo: n
                })
            }
        },
        570683: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildInfoCard: function() {
                    return I
                },
                default: function() {
                    return _
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("400271"),
                i = n("586403"),
                r = n("813006"),
                u = n("580357"),
                o = n("109024"),
                d = n("800118"),
                c = n("782340"),
                f = n("180350");

            function E(e) {
                var t;
                let {
                    guildScheduledEvent: n,
                    channel: r,
                    onAcceptInvite: u,
                    isSubmitting: o
                } = e;
                return (0, s.jsxs)("div", {
                    className: f.guildEventCard,
                    children: [(0, s.jsx)(l.default, {
                        name: n.name,
                        description: null !== (t = n.description) && void 0 !== t ? t : void 0,
                        headerVariant: "heading-md/medium",
                        descriptionClassName: f.channelDescription,
                        guildId: n.guild_id,
                        guildEventId: n.id,
                        eventPreview: n
                    }), null != r && (0, s.jsx)("div", {
                        className: f.channelInfo,
                        children: (0, s.jsx)(i.default, {
                            guildScheduledEvent: n,
                            channel: r
                        })
                    }), (0, s.jsx)(a.Button, {
                        className: f.acceptButton,
                        color: a.Button.Colors.GREEN,
                        onClick: u,
                        submitting: o,
                        children: c.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
                    })]
                })
            }

            function I(e) {
                var t;
                let {
                    invite: n
                } = e, l = null != n.guild ? new r.default(n.guild) : null;
                if (null == l) return null;
                let i = null !== (t = l.description) && void 0 !== t ? t : "";
                return (0, s.jsxs)("div", {
                    className: f.guildInfoCard,
                    children: [(0, s.jsx)(a.Heading, {
                        className: f.presentedBy,
                        variant: "text-sm/medium",
                        children: c.default.Messages.STAGE_INVITE_GUILD_HEADER
                    }), (0, s.jsxs)("div", {
                        className: f.guildContainer,
                        children: [(0, s.jsx)(o.default, {
                            guild: l,
                            active: !0,
                            size: o.default.Sizes.MEDIUM
                        }), (0, s.jsxs)("div", {
                            className: f.guildDetailsContanier,
                            children: [(0, s.jsxs)(a.Text, {
                                className: f.guildName,
                                color: "header-primary",
                                variant: "text-sm/medium",
                                tag: "span",
                                children: [l.name, (0, s.jsx)(u.default, {
                                    guild: l,
                                    className: f.guildBadge,
                                    tooltipPosition: "left"
                                })]
                            }), (0, s.jsx)(d.InviteMemberCounts, {
                                invite: n,
                                textClassName: f.guildInfoMemberCountText,
                                className: f.guildInfoMemberCount
                            })]
                        })]
                    }), i.length > 0 && (0, s.jsx)("details", {
                        className: f.guildDescriptionContainer,
                        children: (0, s.jsx)(a.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: i
                        })
                    })]
                })
            }

            function _(e) {
                let {
                    invite: t,
                    channel: n,
                    isSubmitting: a,
                    onAcceptInvite: l
                } = e, {
                    guild_scheduled_event: i
                } = t;
                return null != i ? (0, s.jsx)(E, {
                    guildScheduledEvent: i,
                    channel: n,
                    isSubmitting: a,
                    onAcceptInvite: l
                }) : null
            }
        },
        44403: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("446674"),
                a = n("305961"),
                l = n("49111");
            let i = e => {
                switch (null == e ? void 0 : e.state) {
                    case l.InviteStates.EXPIRED:
                    case l.InviteStates.BANNED:
                    case l.InviteStates.ERROR:
                    case l.InviteStates.RESOLVING:
                        return !1;
                    default:
                        return !0
                }
            };
            var r = e => {
                let t = null == e ? void 0 : e.expires_at,
                    n = !i(e),
                    l = (0, s.useStateFromStores)([a.default], () => {
                        var t;
                        return null != a.default.getGuild(null == e ? void 0 : null === (t = e.guild) || void 0 === t ? void 0 : t.id)
                    });
                return l || n || null == t ? null : t
            }
        },
        984997: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("414456"),
                l = n.n(a),
                i = n("866227"),
                r = n.n(i),
                u = n("669491"),
                o = n("77078"),
                d = n("93871"),
                c = n("93393"),
                f = n("44403"),
                E = n("782340"),
                I = n("679269");
            let _ = e => {
                let {
                    expiredAt: t,
                    className: n
                } = e;
                d.ExpirationNoticeMobileWebExperiment.trackExposure({
                    location: "29f711_1"
                });
                let a = d.ExpirationNoticeMobileWebExperiment.useExperiment({
                    location: "29f711_2"
                }, {
                    autoTrackExposure: !1
                });
                if (!a.showExpirationNotice) return null;
                let i = r(t).fromNow(!0);
                return (0, s.jsx)("div", {
                    className: l(I.container, n),
                    children: (0, s.jsxs)("div", {
                        className: I.expirationContainer,
                        children: [(0, s.jsx)(c.default, {
                            color: u.default.unsafe_rawColors.WHITE_500.css,
                            width: 14,
                            height: 14,
                            className: I.clock
                        }), (0, s.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "header-primary",
                            children: E.default.Messages.INVITE_EXPIRATION_NOTICE.format({
                                duration: i
                            })
                        })]
                    })
                })
            };
            var p = e => {
                let {
                    invite: t,
                    className: n
                } = e, a = (0, f.default)(t);
                return null == a ? null : (0, s.jsx)(_, {
                    expiredAt: a,
                    className: n
                })
            }
        },
        527441: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("446674"),
                a = n("913144");
            let l = null;
            class i extends s.default.PersistedStore {
                initialize(e) {
                    var t;
                    l = null !== (t = null == e ? void 0 : e.type) && void 0 !== t ? t : null
                }
                getType() {
                    return l
                }
                getState() {
                    return {
                        type: l
                    }
                }
            }
            i.displayName = "NewUserStore", i.persistKey = "nuf";
            var r = new i(a.default, {
                NUF_NEW_USER: function(e) {
                    let {
                        newUserType: t
                    } = e;
                    l = t
                },
                NUF_COMPLETE: function() {
                    l = null
                }
            })
        },
        149806: function(e, t, n) {
            "use strict";
            var s, a, l, i, r, u, o, d, c, f;
            n.r(t), n.d(t, {
                FlowType: function() {
                    return s
                },
                AgeGateSteps: function() {
                    return a
                },
                ClaimAccountSteps: function() {
                    return l
                },
                CreateGuildSteps: function() {
                    return i
                },
                RegistrationSteps: function() {
                    return r
                }
            }), (u = s || (s = {})).UNKNOWN = "unknown", u.ANY = "any", u.INVITE = "invite", u.ORGANIC = "organic_registration", u.ORGANIC_MARKETING = "organic_marketing", u.ORGANIC_GUILD_TEMPLATES = "organic_guild_template", u.CREATE_GUILD = "create_guild", (o = a || (a = {})).AGE_GATE = "age_gate", o.AGE_GATE_UNDERAGE = "age_gate_underage", (d = l || (l = {})).CLAIM_ACCOUNT = "claim_account", d.CLAIM_ACCOUNT_SUCCESS = "claim_account_success", (c = i || (i = {})).GUILD_TEMPLATES = "guild_templates", c.GUILD_CREATE = "guild_create", c.CREATION_INTENT = "creation_intent", c.CHANNEL_PROMPT = "channel_prompt", c.JOIN_GUILD = "join_guild", c.SUCCESS = "create_success", (f = r || (r = {})).NUF_STARTED = "nuf_started", f.AGE_GATE = "age_gate", f.NUF_COMPLETE = "nuf_complete", f.HUB_CONNECTION = "hub_connection"
        },
        42963: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var s = n("308503"),
                a = n("95410"),
                l = n("605250"),
                i = n("599110"),
                r = n("149806"),
                u = n("49111");
            let o = "UserFlowAnalyticsStore_current",
                d = "UserFlowAnalyticsStore";

            function c(e) {
                if (e === r.FlowType.UNKNOWN) return null;
                let t = a.default.get("".concat(d, "-").concat(e));
                if (null == t) return null;
                let {
                    version: n,
                    ...s
                } = t;
                return 1 !== n ? null : s
            }
            new l.default("UserFlowAnalytics");
            let f = (0, s.default)((e, t) => ({
                flows: {},
                currentFlow: null,
                activeFlow: () => {
                    var e;
                    let n = null !== (e = t().currentFlow) && void 0 !== e ? e : a.default.get(o);
                    if (null == n) return null;
                    let {
                        [n]: s
                    } = t().flows, l = null != s ? s : c(n);
                    return (null == l ? void 0 : l.currentStep) != null ? n : null
                }
            }));

            function E(e, t) {
                let {
                    [e]: n, ...s
                } = f.getState().flows, a = null != n ? n : c(e);
                if ((null == a ? void 0 : a.currentStep) == null || a.currentStep !== t) f.setState({
                    flows: {
                        ...s,
                        [e]: {
                            type: e,
                            lastStep: null,
                            lastTimestamp: null,
                            currentStep: t,
                            currentTimestamp: new Date,
                            skipped: !1
                        }
                    },
                    currentFlow: e
                })
            }

            function I(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    s = e;
                if (e === r.FlowType.ANY) {
                    var a;
                    s = null !== (a = f.getState().activeFlow()) && void 0 !== a ? a : r.FlowType.UNKNOWN
                }
                let {
                    [s]: l, ...i
                } = f.getState().flows, u = null != l ? l : c(s);
                if (null != u && null != u.currentStep) u.currentStep !== t && f.setState({
                    flows: {
                        ...i,
                        [s]: {
                            ...u,
                            lastStep: u.currentStep,
                            lastTimestamp: u.currentTimestamp,
                            currentStep: t,
                            currentTimestamp: new Date,
                            ended: n
                        }
                    },
                    currentFlow: s
                })
            }
            f.subscribe(e => {
                var t;
                if (null != e && (! function(e) {
                        if (e.type === r.FlowType.UNKNOWN) return;
                        let t = "".concat(d, "-").concat(e.type);
                        e.ended ? (a.default.remove(t), a.default.remove(o)) : (a.default.set("".concat(d, "-").concat(e.type), {
                            ...e,
                            version: 1
                        }), a.default.set(o, e.type))
                    }(e), i.default.track(u.AnalyticEvents.NUO_TRANSITION, {
                        flow_type: e.type,
                        from_step: e.lastStep,
                        to_step: e.currentStep,
                        seconds_on_from_step: "function" != typeof(null === (t = e.lastTimestamp) || void 0 === t ? void 0 : t.getTime) ? 0 : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1e3
                    }, {
                        flush: !0
                    }), e.ended)) {
                    let t = {
                        ...f.getState().flows
                    };
                    delete t[e.type], f.setState({
                        flows: t,
                        currentFlow: null
                    })
                }
            }, e => null != e.currentFlow ? e.flows[e.currentFlow] : void 0);

            function _() {
                return null != f.getState().activeFlow()
            }
            var p = {
                flowStart: E,
                flowStepOrStart: function(e, t) {
                    _() ? I(e, t) : E(e, t)
                },
                flowStep: I,
                hasActiveFlow: _
            }
        },
        853994: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EMAILS_SUBSECTION: function() {
                    return i
                },
                EmailCategories: function() {
                    return a
                },
                MarketingEmailCategories: function() {
                    return r
                },
                EmailCategoriesList: function() {
                    return u
                }
            });
            var s, a, l = n("782340");
            let i = "emails";
            (s = a || (a = {})).COMMUNICATION = "communication", s.SOCIAL = "social", s.TIPS = "tips", s.RECOMMENDATIONS_AND_EVENTS = "recommendations_and_events", s.UPDATES_AND_ANNOUNCEMENTS = "updates_and_announcements", s.FAMILY_CENTER_DIGEST = "family_center_digest";
            let r = [a.TIPS, a.RECOMMENDATIONS_AND_EVENTS, a.UPDATES_AND_ANNOUNCEMENTS],
                u = [{
                    category: a.COMMUNICATION,
                    label: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION,
                    subLabel: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION_SUBLABEL
                }, {
                    category: a.SOCIAL,
                    label: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL,
                    subLabel: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL_SUBLABEL
                }, {
                    category: a.UPDATES_AND_ANNOUNCEMENTS,
                    label: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS,
                    subLabel: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS_SUBLABEL
                }, {
                    category: a.TIPS,
                    label: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS,
                    subLabel: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS_SUBLABEL
                }, {
                    category: a.RECOMMENDATIONS_AND_EVENTS,
                    label: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS,
                    subLabel: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS_SUBLABEL
                }]
        },
        555158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HelpMessageTypes: function() {
                    return a
                },
                default: function() {
                    return I
                }
            });
            var s, a, l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                u = n("77078"),
                o = n("36694"),
                d = n("381546"),
                c = n("68238"),
                f = n("423487"),
                E = n("557296");
            (s = a || (a = {}))[s.WARNING = 0] = "WARNING", s[s.INFO = 1] = "INFO", s[s.ERROR = 2] = "ERROR", s[s.POSITIVE = 3] = "POSITIVE";
            var I = function(e) {
                let {
                    children: t,
                    messageType: n,
                    className: s,
                    textColor: i = "text-normal",
                    textVariant: I = "text-sm/medium"
                } = e, _ = function(e) {
                    switch (e) {
                        case a.WARNING:
                            return f.default;
                        case a.INFO:
                            return c.default;
                        case a.ERROR:
                            return d.default;
                        case a.POSITIVE:
                            return o.default
                    }
                }(n), p = function(e) {
                    switch (e) {
                        case a.WARNING:
                            return E.warning;
                        case a.INFO:
                            return E.info;
                        case a.ERROR:
                            return E.error;
                        case a.POSITIVE:
                            return E.positive
                    }
                }(n);
                return (0, l.jsxs)("div", {
                    className: r(E.container, p, s),
                    children: [(0, l.jsx)("div", {
                        className: E.iconDiv,
                        children: (0, l.jsx)(_, {
                            className: E.icon
                        })
                    }), (0, l.jsx)(u.Text, {
                        className: E.text,
                        color: i,
                        variant: I,
                        children: t
                    })]
                })
            }
        },
        954419: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEFAULT_SELECT_STYLES: function() {
                    return I
                },
                default: function() {
                    return _
                }
            });
            var s, a, l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                u = n.n(r),
                o = n("773392"),
                d = n("77078"),
                c = n("49111"),
                f = n("782340"),
                E = n("599619");
            (s = a || (a = {})).TOP = "top", s.BOTTOM = "bottom";
            let I = {
                container: (e, t) => {
                    let {
                        isDisabled: n
                    } = t;
                    return {
                        ...e,
                        cursor: n ? "not-allowed" : void 0,
                        pointerEvents: void 0,
                        fontSize: 16,
                        fontWeight: 500,
                        width: "100%"
                    }
                },
                control: (e, t) => {
                    let {
                        isDisabled: n,
                        menuIsOpen: s
                    } = t;
                    return {
                        ...e,
                        backgroundColor: "var(--input-background)",
                        borderColor: "var(--input-background)",
                        opacity: n ? .6 : 1,
                        boxShadow: void 0,
                        borderRadius: s ? "4px 4px 0 0" : "4px",
                        minHeight: 40,
                        transition: "border 0.15s ease",
                        cursor: n ? "not-allowed" : void 0,
                        pointerEvents: n ? "none" : void 0,
                        "&:hover": {
                            borderColor: "var(--input-background)"
                        }
                    }
                },
                singleValue: (e, t) => {
                    let {
                        isDisabled: n
                    } = t;
                    return {
                        ...e,
                        color: "var(--interactive-normal)",
                        opacity: n ? .5 : 1
                    }
                },
                input: e => ({
                    ...e,
                    color: "var(--interactive-normal)"
                }),
                menu: e => ({
                    ...e,
                    backgroundColor: "var(--background-secondary)",
                    border: "1px solid var(--background-tertiary)",
                    borderRadius: "0 0 4px 4px",
                    color: "var(--interactive-normal)",
                    marginTop: -1,
                    marginBottom: -1
                }),
                clearIndicator: (e, t) => {
                    let {
                        isDisabled: n
                    } = t;
                    return {
                        ...e,
                        color: "var(--interactive-normal)",
                        cursor: n ? void 0 : "pointer",
                        opacity: .3,
                        padding: "8px 0",
                        transform: "scale(0.8)",
                        ":hover": {
                            color: "var(--text-danger)",
                            opacity: 1
                        }
                    }
                },
                indicatorsContainer: e => ({
                    ...e,
                    alignItems: "flex-start"
                }),
                dropdownIndicator: (e, t) => {
                    let {
                        isDisabled: n
                    } = t;
                    return {
                        ...e,
                        color: "var(--interactive-normal)",
                        cursor: n ? void 0 : "pointer",
                        opacity: n ? .3 : 1,
                        padding: "8px 8px 8px 0",
                        ":hover": {
                            color: "var(--interactive-hover)",
                            opacity: n ? .3 : 1
                        }
                    }
                },
                menuList: e => ({
                    ...e,
                    padding: 0,
                    "&::-webkit-scrollbar": {
                        width: 8,
                        padding: "0px 2px"
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "var(--scrollbar-thin-thumb)",
                        border: "2px solid transparent",
                        backgroundClip: "padding-box",
                        borderRadius: 4
                    },
                    "&::-webkit-scrollbar-track-piece": {
                        backgroundColor: "transparent",
                        borderColor: "transparent"
                    }
                }),
                option: (e, t) => {
                    let {
                        isSelected: n,
                        isFocused: s
                    } = t;
                    return {
                        ...e,
                        ...n ? {
                            backgroundColor: "var(--background-modifier-selected)",
                            color: "var(--interactive-active)"
                        } : s ? {
                            backgroundColor: "var(--background-modifier-hover)",
                            color: "var(--interactive-hover)"
                        } : {
                            backgroundColor: "transparent",
                            color: "var(--interactive-normal)"
                        },
                        cursor: "pointer",
                        display: "flex",
                        padding: 12,
                        alignItems: "center",
                        minHeight: 40,
                        "&:active": {
                            backgroundColor: "var(--background-modifier-selected)",
                            color: "var(--interactive-active)"
                        }
                    }
                },
                placeholder: e => ({
                    ...e,
                    color: "var(--text-muted)"
                })
            };
            class _ extends i.Component {
                focus() {
                    var e;
                    null === (e = this._selectRef.current) || void 0 === e || e.focus()
                }
                render() {
                    let e;
                    let {
                        className: t,
                        selectClassName: n,
                        error: s,
                        valueRenderer: a,
                        optionRenderer: i,
                        multiValueRenderer: r,
                        options: c,
                        value: _,
                        autofocus: p,
                        disabled: h,
                        clearable: N,
                        searchable: T,
                        styleOverrides: m,
                        isMulti: g,
                        placeholder: A,
                        filterOption: S,
                        closeMenuOnSelect: C = !0,
                        ...v
                    } = this.props, x = {
                        ...v
                    };
                    null != p && (x.autoFocus = p), null != h && (x.isDisabled = h), null != N && (x.isClearable = N), null != T && (x.isSearchable = T);
                    let O = {
                        IndicatorSeparator: () => null
                    };
                    null != i && (O.Option = e => (0, l.jsx)(o.components.Option, {
                        ...e,
                        children: i(e.data)
                    })), null != a && (O.SingleValue = e => (0, l.jsx)(o.components.SingleValue, {
                        ...e,
                        children: a(e.data)
                    })), null != r && (O.MultiValue = e => r(e.data));
                    if (g && Array.isArray(_)) {
                        let t = {};
                        c.forEach(e => {
                            t[String(e.value)] = e
                        }), e = _.map(e => t[String(e)])
                    } else e = null != _ ? c.find(e => e.value === _) : null;
                    return (0, l.jsx)(d.FocusRing, {
                        focused: this.state.isFocused && !this.state.isOpen,
                        ringTarget: this._containerRef,
                        children: (0, l.jsxs)("div", {
                            className: u(E.select, t, {
                                [E.error]: null != s
                            }),
                            ref: this._containerRef,
                            children: [(0, l.jsx)(o.default, {
                                ...x,
                                className: n,
                                ref: this._selectRef,
                                isMulti: g,
                                components: O,
                                options: c,
                                styles: null != m ? m : I,
                                onFocus: this.handleFocus,
                                onBlur: this.handleBlur,
                                onMenuOpen: this.handleMenuOpen,
                                onMenuClose: this.handleMenuClose,
                                closeMenuOnSelect: C,
                                value: e,
                                onKeyDown: this.handleKeyDown,
                                placeholder: null != A ? A : f.default.Messages.SELECT,
                                noOptionsMessage: () => f.default.Messages.NO_RESULTS_FOUND,
                                filterOption: S
                            }), null != s ? (0, l.jsx)("div", {
                                className: E.errorMessage,
                                children: s
                            }) : null]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._selectRef = i.createRef(), this._containerRef = i.createRef(), this.state = {
                        isFocused: !1,
                        isOpen: !1
                    }, this.handleFocus = e => {
                        var t, n;
                        this.setState({
                            isFocused: !0
                        }), null === (t = (n = this.props).onFocus) || void 0 === t || t.call(n, e)
                    }, this.handleBlur = e => {
                        var t, n;
                        this.setState({
                            isFocused: !1
                        }), null === (t = (n = this.props).onBlur) || void 0 === t || t.call(n, e)
                    }, this.handleKeyDown = e => {
                        e.which === c.KeyboardKeys.ESCAPE && this.state.isOpen && e.stopPropagation()
                    }, this.handleMenuOpen = () => {
                        this.setState({
                            isOpen: !0
                        })
                    }, this.handleMenuClose = () => {
                        this.setState({
                            isOpen: !1
                        })
                    }
                }
            }
            _.MenuPlacements = a
        },
        93393: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("469563"),
                l = n("503420"),
                i = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: n = 20,
                        color: a = "currentColor",
                        foreground: l,
                        ...r
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 20 20",
                        children: (0, s.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, s.jsx)("path", {
                                className: l,
                                fill: a,
                                d: "M9.99999 1.66675C5.39699 1.66675 1.66666 5.39708 1.66666 10.0001C1.66666 14.6031 5.39699 18.3334 9.99999 18.3334C14.603 18.3334 18.3333 14.6031 18.3333 10.0001C18.3333 5.39708 14.603 1.66675 9.99999 1.66675ZM9.99999 4.66675C10.3685 4.66675 10.6667 4.96493 10.6667 5.33342V9.61475L13.8021 11.4272C14.1211 11.6108 14.2252 12.0145 14.0416 12.3335C13.8581 12.6525 13.4544 12.7567 13.1354 12.5731L9.73937 10.6148C9.71333 10.6043 9.68989 10.5874 9.66646 10.5731C9.46724 10.4572 9.33312 10.2463 9.33312 10.0002V5.3335C9.33312 4.965 9.6315 4.66675 9.99999 4.66675Z"
                            })
                        })
                    })
                }, l.ClockIcon)
        },
        272339: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("469563"),
                l = n("358917"),
                i = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: l,
                        ...r
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            children: (0, s.jsx)("path", {
                                d: "M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z",
                                className: l,
                                fill: a
                            })
                        })
                    })
                }, l.HeadphonesIcon)
        },
        834030: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var s = n("597755"),
                a = n.n(s),
                l = n("279295"),
                i = {
                    dump(e) {
                        let t;
                        null != performance.memory && (t = {
                            jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
                            totalJSHeapSize: performance.memory.totalJSHeapSize,
                            usedJSHeapSize: performance.memory.usedJSHeapSize
                        });
                        let n = {
                            browser: {
                                name: a.name,
                                version: a.version
                            },
                            os: {
                                name: a.os.family,
                                version: a.os.version
                            },
                            memory: t
                        };
                        e(n)
                    },
                    getTimeSinceNavigationStart: () => Date.now() - l.navigationStart
                }
        },
        883029: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getDescriptiveInviteError: function() {
                    return u
                },
                getInviteError: function() {
                    return o
                }
            });
            var s = n("697218"),
                a = n("701909"),
                l = n("719923"),
                i = n("49111"),
                r = n("782340");

            function u(e) {
                switch (e) {
                    case i.AbortCodes.TOO_MANY_USER_GUILDS:
                        let t = s.default.getCurrentUser(),
                            n = l.default.canUseIncreasedGuildCap(t) || (null == t ? void 0 : t.isStaff()),
                            a = n ? i.MAX_USER_GUILDS_PREMIUM : i.MAX_USER_GUILDS;
                        return {
                            title: r.default.Messages.TOO_MANY_USER_GUILDS_TITLE_2.format({
                                quantity: a
                            }), description: r.default.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION
                        };
                    case i.AbortCodes.GUILD_AT_CAPACITY:
                        return {
                            title: r.default.Messages.SERVER_IS_CURRENTLY_FULL, description: r.default.Messages.PLEASE_TRY_AGAIN_LATER
                        };
                    case i.AbortCodes.GUILD_JOIN_INVITE_LIMITED_ACCESS:
                        return {
                            title: r.default.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_HEADING, description: r.default.Messages.PLEASE_TRY_AGAIN_LATER
                        };
                    default:
                        return null
                }
            }

            function o(e) {
                switch (e) {
                    case i.AbortCodes.TOO_MANY_USER_GUILDS:
                        return r.default.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION;
                    case i.AbortCodes.GUILD_AT_CAPACITY:
                        return r.default.Messages.MAX_GUILD_MEMBERS_REACHED_ERROR;
                    case i.AbortCodes.INVALID_COUNTRY_CODE:
                        return r.default.Messages.INVALID_COUNTRY_CODE;
                    case i.AbortCodes.INVALID_CANNOT_FRIEND_SELF:
                        return r.default.Messages.INVALID_CANNOT_FRIEND_SELF;
                    case i.AbortCodes.INVITES_DISABLED:
                        return r.default.Messages.INVITES_DISABLED_MODAL_DESCRIPTION.format({
                            articleLink: a.default.getArticleURL(i.HelpdeskArticles.INVITE_DISABLED)
                        });
                    default:
                        return r.default.Messages.INVITE_MODAL_ERROR_DEFAULT
                }
            }
        },
        380186: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getSubscriptionSKUs: function() {
                    return o
                },
                subscriptionCanSwitchImmediately: function() {
                    return d
                },
                subscriptionCanDowngrade: function() {
                    return c
                },
                getOrFetchSubscriptionPlan: function() {
                    return f
                }
            });
            var s = n("627445"),
                a = n.n(s),
                l = n("775433"),
                i = n("10514"),
                r = n("49111"),
                u = n("646718");

            function o(e) {
                return e.items.map(e => {
                    let t = i.default.get(e.planId);
                    return a(null != t, "Unable to fetch plan"), t
                }).map(e => e.skuId)
            }

            function d(e, t, n) {
                let s = e.getCurrentSubscriptionPlanIdForGroup(n);
                return e.type === r.SubscriptionTypes.PREMIUM && null == s || (a(null != s, "Current subscription has no plan in group"), a(!(s === u.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && t === u.SubscriptionPlans.PREMIUM_MONTH_TIER_2), "Unexpected plan switch"), n.indexOf(s) < n.indexOf(t))
            }

            function c(e, t, n) {
                return !d(e, t, n)
            }

            function f(e, t) {
                let n = i.default.get(e);
                if (null == n) {
                    let n = u.SubscriptionPlanInfo[e];
                    a(null != n, "Missing hardcoded subscriptionPlan: ".concat(e));
                    let s = n.skuId;
                    !i.default.isFetchingForSKU(s) && (0, l.fetchSubscriptionPlansForSKU)(s, t)
                }
                return n
            }
        },
        778043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                deepLinkRouteIfLanded: function() {
                    return u
                },
                deepLinkRouteIfLandedAndNotAuthed: function() {
                    return o
                }
            });
            var s = n("43982"),
                a = n("393414"),
                l = n("271938"),
                i = n("773336"),
                r = n("49111");
            let u = i.isPlatformEmbedded ? r.NOOP : (e, t) => {
                    if (!(0, a.hasNavigated)()) return s.default.request(r.RPCCommands.DEEP_LINK, {
                        type: e,
                        params: t
                    })
                },
                o = i.isPlatformEmbedded ? r.NOOP : (e, t) => {
                    if (!l.default.isAuthenticated()) return u(e, {
                        ...t || {},
                        fingerprint: l.default.getFingerprint()
                    })
                }
        },
        498574: function(e, t, n) {
            "use strict";
            var s, a;
            n.r(t), n.d(t, {
                GuildInviteFlags: function() {
                    return s
                }
            }), (a = s || (s = {}))[a.IS_GUEST_INVITE = 1] = "IS_GUEST_INVITE", a[a.IS_VIEWED = 2] = "IS_VIEWED", a[a.IS_ENHANCED = 4] = "IS_ENHANCED"
        }
    }
]);
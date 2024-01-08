            "use strict";
            n.r(t), n.d(t, {
                OAuth2AuthorizePage: function() {
                    return Q
                },
                OAuth2AuthorizeModal: function() {
                    return X
                },
                OAuth2Authorize: function() {
                    return Z
                },
                useOAuth2AuthorizeForm: function() {
                    return J
                },
                openOAuth2ModalWithCreateGuildModal: function() {
                    return ee
                },
                openOAuth2Modal: function() {
                    return et
                },
                getOAuth2AuthorizeProps: function() {
                    return en
                }
            }), n("222007"), n("70102");
            var i, a, l, s, r = n("37983"),
                u = n("884691"),
                o = n("90915"),
                d = n("746379"),
                c = n.n(d),
                _ = n("316693"),
                E = n("446674"),
                f = n("271841"),
                h = n("551042"),
                p = n("670914"),
                T = n("242670"),
                C = n("84460"),
                m = n("191225"),
                S = n("716241"),
                I = n("148217"),
                g = n("970254"),
                A = n("616265"),
                N = n("894887"),
                O = n("393414"),
                R = n("766274"),
                y = n("271938"),
                v = n("449008"),
                M = n("991170"),
                D = n("253981"),
                L = n("872825"),
                U = n("8222"),
                P = n("164386"),
                b = n("978970"),
                G = n("29479"),
                k = n("357974"),
                F = n("580363"),
                w = n("613070"),
                V = n("530487"),
                H = n("638992"),
                x = n("223934"),
                B = n("267570"),
                Y = n("941281"),
                K = n("49111"),
                j = n("954016"),
                W = n("782340"),
                z = n("392507");
            let q = "oauth2-authorize-header-id";

            function Q() {
                let e = (0, o.useLocation)(),
                    t = u.useMemo(() => (0, L.parseOAuth2AuthorizeProps)(e.search), [e.search]);
                return (0, I.default)(), (0, r.jsx)(B.OAuth2Page, {
                    children: (0, r.jsx)(Z, {
                        ...t,
                        showLogout: !0
                    })
                })
            }

            function X(e) {
                let {
                    transitionState: t,
                    ...n
                } = e;
                return (0, r.jsx)(B.OAuth2Modal, {
                    transitionState: t,
                    "aria-labelledby": q,
                    children: (0, r.jsx)(Z, {
                        ...n,
                        scrollable: !0
                    })
                })
            }

            function Z(e) {
                let {
                    scrollable: t,
                    ...n
                } = e, {
                    header: i,
                    body: a,
                    footer: l,
                    nextStep: s,
                    appDetails: u
                } = J(n), o = (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: z.content,
                        children: [i, a, null == s ? u : null]
                    }), l]
                });
                return t ? (0, r.jsx)("div", {
                    className: z.authorize,
                    children: (0, r.jsx)(p.ScrollerThin, {
                        orientation: "auto",
                        children: o
                    })
                }) : (0, r.jsx)("div", {
                    className: z.authorize,
                    children: (0, r.jsx)("div", {
                        children: o
                    })
                })
            }

            function J(e) {
                var t, n, i, a, l, s, d, h;
                let p, I, A, {
                        clientId: N,
                        scopes: B,
                        responseType: Q,
                        redirectUri: X,
                        codeChallenge: Z,
                        codeChallengeMethod: J,
                        state: $,
                        guildId: ee,
                        channelId: et,
                        permissions: en,
                        prompt: ei,
                        disableGuildSelect: ea,
                        showLogout: el = !1,
                        authorization: es,
                        callback: er,
                        callbackWithoutPost: eu,
                        onClose: eo,
                        cancelCompletesFlow: ed = !0,
                        isTrustedName: ec = !1,
                        isEmbeddedFlow: e_ = !1,
                        userInstall: eE = !1
                    } = e,
                    ef = u.useMemo(() => (0, L.filterScopes)(B), [B]),
                    eh = (0, o.useLocation)(),
                    ep = g.default.useExperiment({
                        location: "auth web"
                    }),
                    eT = ep.userAppsTreatment === g.UserAppsTreatment.ALLOWED;
                !eT && (eE = !1);
                let [eC, em] = u.useState(0), [eS, eI] = u.useState(null), [eg, eA] = u.useState(M.default.NONE), [eN, eO] = u.useState(1), [eR, ey] = u.useState(null), [ev] = u.useState(G.OrderedAccountScopes.filter(e => ef.includes(e))), [eM, eD] = u.useState(null != ee ? ee : null), [eL, eU] = u.useState(null != et ? et : null), [eP, eb] = u.useState(!1), eG = u.useMemo(() => {
                    var e;
                    return null == eS ? void 0 : null === (e = eS.guilds) || void 0 === e ? void 0 : e.find(e => e.id === eM)
                }, [null == eS ? void 0 : eS.guilds, eM]), ek = (0, E.useStateFromStoresObject)([C.default, m.default], () => {
                    var e, t;
                    let n;
                    let i = null === (e = m.default.getSelfEmbeddedActivities().values().next()) || void 0 === e ? void 0 : e.value,
                        a = C.default.getIsEnabled();
                    return (0, v.isNotNullish)(i) && (n = m.default.getShelfActivities(i.guildId).find(e => e.application_id === i.application_id), a && void 0 === n && (n = null === (t = C.default.getDeveloperShelfItems().find(e => e.id === i.application_id)) || void 0 === t ? void 0 : t.embeddedActivityConfig), (0, v.isNotNullish)(n)) ? {
                        ...j.DEFAULT_EMBEDDED_ACTIVITY_CONFIG,
                        ...n
                    } : {}
                }), eF = Object.keys(ek).length > 0 ? ek : null, ew = u.useCallback(async e => {
                    if (null != eu) {
                        eu(e);
                        return
                    }
                    if (!e && !ed) {
                        null != er && (er({
                            application: null == eS ? void 0 : eS.application,
                            guild: eG
                        }), null == eo || eo());
                        return
                    }
                    try {
                        eb(!0);
                        let t = await (0, U.authorize)({
                            authorize: e,
                            clientId: N,
                            scopes: ef,
                            responseType: Q,
                            redirectUri: X,
                            codeChallenge: Z,
                            codeChallengeMethod: J,
                            state: $,
                            permissions: _.default.remove(null != en ? en : M.default.NONE, eg),
                            guildId: null == eM || eE ? void 0 : eM,
                            channelId: null != eL ? eL : void 0,
                            userInstall: eE
                        });
                        if (null != er) er({
                            application: null == eS ? void 0 : eS.application,
                            location: t.location,
                            guild: eG
                        }), null == eo || eo();
                        else if (null != t.location) {
                            let {
                                host: e,
                                path: n
                            } = c.parse(t.location);
                            D.default.isDiscordHostname(e) && n === K.Routes.OAUTH2_AUTHORIZED ? (0, O.transitionTo)(K.Routes.OAUTH2_AUTHORIZED, {
                                state: {
                                    application: null == eS ? void 0 : eS.application,
                                    guild: eG
                                }
                            }) : window.location = t.location
                        } else eb(!1)
                    } catch (t) {
                        let e = t.body;
                        (null == e ? void 0 : e.message) != null && "" !== e.message ? ey(Error(e.message)) : ey(e), eO(1), em(2), eb(!1)
                    }
                }, [er, eu, N, Z, J, eg, eo, en, X, Q, ef, eM, eL, $, ed, null == eS ? void 0 : eS.application, eG, eE]), eV = u.useRef(!1), eH = u.useCallback(async () => {
                    if (0 === eC) {
                        if (em(1), !y.default.isAuthenticated()) {
                            (0, U.logoutWithRedirect)(eh);
                            return
                        }
                        if (!eV.current) {
                            eV.current = !0;
                            try {
                                let e = null != es ? es : await (0, U.fetchAuthorization)({
                                    clientId: N,
                                    scopes: ef,
                                    responseType: Q,
                                    redirectUri: X,
                                    codeChallenge: Z,
                                    codeChallengeMethod: J,
                                    state: $,
                                    userInstall: eT && eE
                                });
                                eI((0, P.convertOAuth2Authorization)(e)), ei === k.OAuth2Prompts.NONE && e.authorized ? ew(!0) : em(2), (0, S.trackWithMetadata)(K.AnalyticEvents.OAUTH2_AUTHORIZE_VIEWED, {
                                    application_id: e.application.id
                                })
                            } catch (n) {
                                let {
                                    status: e,
                                    body: t
                                } = n;
                                if (401 === e) {
                                    (0, U.logoutWithRedirect)(eh);
                                    return
                                }
                                ey(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0]))), em(2)
                            } finally {
                                eV.current = !1
                            }
                        }
                    }
                }, [es, N, Z, J, eC, eh, ei, X, Q, ef, ew, $, eE, eT]), ex = u.useCallback((e, t) => {
                    eA(n => e ? _.default.remove(n, t) : _.default.add(n, t))
                }, []);
                u.useEffect(() => {
                    let e = ef.filter(e => !G.ValidScopes.includes(e));
                    0 === ef.length ? (ey(Error("No scopes were provided.")), em(2)) : e.length > 0 ? (ey(Error("Invalid scope: ".concat(e[0]))), em(2)) : (0, b.containsDisallowedPermission)(null != en ? en : M.default.NONE) ? (ey(Error("Invalid permission(s) provided.")), em(2)) : eH()
                }, [eH, ef, en]);
                let eB = null != eL ? null == eS ? void 0 : null === (t = eS.channels) || void 0 === t ? void 0 : t.find(e => e.id === eL) : null,
                    eY = null != eM ? null == eS ? void 0 : null === (n = eS.guilds) || void 0 === n ? void 0 : n.find(e => e.id === eM) : null;
                if (u.useEffect(() => {
                        null != eS && (null != eB ? eD(null) : null == eY && (eD(null), eU(null)))
                    }, [eS, eY, eB]), eR instanceof Error) return {
                    body: (0, r.jsx)(Y.OAuth2Error, {
                        message: eR.message
                    })
                };
                if (2 !== eC || null == eS) return {
                    body: (0, r.jsx)(T.Spinner, {})
                };
                let eK = new R.default(eS.user),
                    ej = null === (i = eS.bot) || void 0 === i ? void 0 : i.approximate_guild_count,
                    eW = !1;
                switch (eN) {
                    case 1:
                        let ez = null == eR || eR instanceof Error ? {} : eR,
                            eq = null === (a = eS.guilds) || void 0 === a ? void 0 : a.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                            eQ = ef.includes(K.OAuth2Scopes.BOT) || ef.includes(K.OAuth2Scopes.WEBHOOK_INCOMING) || ef.includes(K.OAuth2Scopes.APPLICATIONS_COMMANDS);
                        p = (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(w.default, {
                                application: eS.application,
                                accountScopes: ev,
                                errors: ez,
                                isTrustedName: ec
                            }), null == eB && eQ && !eE ? (0, r.jsx)(H.GuildSelector, {
                                error: (null !== (s = null !== (l = ez[K.OAuth2Scopes.BOT]) && void 0 !== l ? l : ez[K.OAuth2Scopes.APPLICATIONS_COMMANDS]) && void 0 !== s ? s : [])[0],
                                selectedGuildId: eM,
                                onGuildChange: e => {
                                    eD(e)
                                },
                                guilds: null != eq ? eq : [],
                                disabled: "" !== eM && !0 === ea
                            }) : null, ef.includes(K.OAuth2Scopes.WEBHOOK_INCOMING) ? (0, r.jsx)(H.WebhookGuildChannelSelector, {
                                error: (null !== (d = ez[K.OAuth2Scopes.WEBHOOK_INCOMING]) && void 0 !== d ? d : [])[0],
                                selectedChannelId: eL,
                                selectedGuildId: eM,
                                onChannelChange: e => eU(e)
                            }) : null]
                        }), ef.includes(K.OAuth2Scopes.BOT) && !_.default.equals(en, M.default.NONE) && (A = 2);
                        let eX = null != eY && ef.includes(K.OAuth2Scopes.WEBHOOK_INCOMING) && null == eL;
                        eW = !eE && (eQ && null == eY && null == eB || eX);
                        break;
                    case 2:
                        p = (0, r.jsx)(V.default, {
                            application: eS.application,
                            permissions: null != en ? en : M.default.NONE,
                            deniedPermissions: eg,
                            onPermissionsChange: ex,
                            guild: eY
                        }), I = 1
                }
                let eZ = (0, r.jsx)(F.default, {
                        embeddedActivityConfig: eF,
                        application: eS.application,
                        scopes: ef,
                        redirectUri: null !== (h = eS.redirect_uri) && void 0 !== h ? h : null,
                        approximateGuildCount: void 0 !== ej ? ej : null,
                        isEmbeddedFlow: e_
                    }),
                    eJ = (0, r.jsxs)("div", {
                        className: z.footer,
                        children: [null != I ? (0, r.jsx)(f.Button, {
                            look: f.Button.Looks.LINK,
                            color: f.Button.Colors.PRIMARY,
                            onClick: () => eO(I),
                            children: W.default.Messages.BACK
                        }) : (0, r.jsx)(f.Button, {
                            look: f.Button.Looks.LINK,
                            color: f.Button.Colors.PRIMARY,
                            onClick: () => ew(!1),
                            children: W.default.Messages.CANCEL
                        }), null != A ? (0, r.jsx)(f.Button, {
                            onClick: () => eO(A),
                            disabled: eW,
                            children: W.default.Messages.CONTINUE
                        }) : (0, r.jsx)(f.Button, {
                            onClick: () => ew(!0),
                            disabled: eW,
                            submitting: eP,
                            children: W.default.Messages.AUTHORIZE
                        })]
                    }),
                    e$ = (0, r.jsx)(x.default, {
                        id: q,
                        user: eK,
                        application: eS.application,
                        bot: eS.bot,
                        accountScopes: ev,
                        showLogout: el || !1,
                        location: eh,
                        isTrustedName: ec
                    });
                return {
                    header: e$,
                    body: p,
                    footer: eJ,
                    nextStep: A,
                    appDetails: eZ,
                    sendAuthorize: ew
                }
            }

            function $(e, t) {
                if (null == t.location || null != e && e(t)) return;
                let {
                    host: n,
                    path: i,
                    query: a
                } = c.parse(t.location, !0), l = D.default.isDiscordHostname(n) || window.location.host === n;
                if (l && i === K.Routes.OAUTH2_AUTHORIZED)(0, h.openModal)(e => (0, r.jsx)(B.OAuth2Modal, {
                    ...e,
                    "aria-labelledby": q,
                    children: (0, r.jsx)(Y.OAuth2AuthorizedSuccess, {
                        guild: t.guild,
                        application: t.application,
                        onClose: e.onClose
                    })
                }));
                else if (l && (null == i ? void 0 : i.startsWith(K.Routes.OAUTH2_ERROR)))(0, h.openModal)(e => {
                    let t = a.error_description || a.error || W.default.Messages.OAUTH2_UNKNOWN_ERROR;
                    return Array.isArray(t) && (t = t[0]), (0, r.jsxs)(B.OAuth2Modal, {
                        ...e,
                        "aria-labelledby": q,
                        children: [(0, r.jsx)(Y.OAuth2Error, {
                            message: t,
                            onClose: e.onClose
                        }), ";"]
                    })
                });
                else {
                    var s;
                    null === (s = window.open(t.location, "_blank")) || void 0 === s || s.focus()
                }
            }

            function ee(e, t) {
                if ((0, N.isMidjourneyOnboardingFlow)("create-guild-and-oauth2-modal")) {
                    A.default.openCreateGuildModal({
                        onSuccess: n => et({
                            ...e,
                            guildId: n
                        }, t)
                    });
                    return
                }
                et(e, t)
            }

            function et(e, t) {
                (0, h.openModal)(t => (0, r.jsx)(X, {
                    ...t,
                    ...e,
                    cancelCompletesFlow: !1,
                    callback: $.bind(null, e.callback)
                }), {
                    onCloseCallback: t
                })
            }

            function en(e) {
                let {
                    hostname: t = "",
                    host: n,
                    path: i,
                    query: a
                } = c.parse(e);
                return null != i && null != a && (D.default.isDiscordHostname(t) || n === window.location.host) && (i.startsWith("/api".concat(K.Endpoints.OAUTH2_AUTHORIZE)) || i.startsWith(K.Routes.OAUTH2_AUTHORIZE)) ? (0, L.parseOAuth2AuthorizeProps)(a) : null
            }(l = i || (i = {}))[l.NOT_LOADED = 0] = "NOT_LOADED", l[l.LOADING = 1] = "LOADING", l[l.LOADED = 2] = "LOADED", (s = a || (a = {}))[s.INSTALL_TYPE = 0] = "INSTALL_TYPE", s[s.AUTHORIZE_SCOPES = 1] = "AUTHORIZE_SCOPES", s[s.AUTHORIZE_BOT_PERMISSIONS = 2] = "AUTHORIZE_BOT_PERMISSIONS"
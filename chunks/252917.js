            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return ej
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                i = n("414456"),
                l = n.n(i),
                r = n("803182"),
                o = n("90915"),
                u = n("759843"),
                d = n("868233"),
                c = n("394846"),
                E = n("446674"),
                f = n("77078"),
                _ = n("241845"),
                h = n("939443"),
                C = n("597590"),
                T = n("987697"),
                I = n("464682"),
                S = n("73749"),
                N = n("191145"),
                A = n("533466"),
                p = n("837844"),
                m = n("171984"),
                g = n("551254"),
                R = n("893399"),
                O = n("353681"),
                L = n("256430"),
                v = n("390236"),
                M = n("546102"),
                P = n("380710"),
                D = n("889145"),
                y = n("993057"),
                x = n("118971"),
                b = n("696336"),
                U = n("273457"),
                G = n("598156"),
                j = n("397039"),
                k = n("628805"),
                w = n("755729"),
                F = n("934743"),
                B = n("566396"),
                H = n("618489"),
                V = n("209688"),
                Y = n("747223"),
                W = n("393027"),
                K = n("1501"),
                z = n("161778"),
                q = n("42203"),
                Q = n("26989"),
                Z = n("305961"),
                X = n("18494"),
                J = n("600133"),
                $ = n("449008"),
                ee = n("439932"),
                et = n("315977"),
                en = n("911120"),
                ea = n("455555"),
                es = n("229644"),
                ei = n("901582"),
                el = n("758997"),
                er = n("474557"),
                eo = n("49111"),
                eu = n("724210"),
                ed = n("653138"),
                ec = n("782340"),
                eE = n("783686");
            let ef = () => (0, a.jsx)("div", {
                    className: eE.loader,
                    children: (0, a.jsx)(f.Spinner, {})
                }),
                e_ = (0, d.makeLazy)({
                    createPromise: () => n.el("144588").then(n.bind(n, "144588")),
                    webpackId: "144588",
                    name: "GuildShopPage",
                    renderLoader: ef
                }),
                eh = (0, d.makeLazy)({
                    createPromise: () => n.el("597235").then(n.bind(n, "597235")),
                    webpackId: "597235",
                    name: "GuildMemberApplicationReview",
                    renderLoader: ef
                }),
                eC = (0, d.makeLazy)({
                    createPromise: () => n.el("144295").then(n.bind(n, "144295")),
                    webpackId: "144295",
                    name: "GuildHomePage",
                    renderLoader: ef
                }),
                eT = (0, d.makeLazy)({
                    createPromise: () => n.el("112265").then(n.bind(n, "112265")),
                    webpackId: "112265",
                    name: "MemberSafetyPage",
                    renderLoader: ef
                }),
                eI = (0, d.makeLazy)({
                    createPromise: () => n.el("534702").then(n.bind(n, "534702")),
                    webpackId: "534702",
                    name: "ChannelsAndRolesPage",
                    renderLoader: ef
                }),
                eS = (0, d.makeLazy)({
                    createPromise: () => n.el("413896").then(n.bind(n, "413896")),
                    webpackId: "413896",
                    name: "GuildOnboardingPage",
                    renderLoader: ef
                }),
                eN = e => {
                    let {
                        match: t
                    } = e, n = (0, E.useStateFromStores)([q.default, X.default], () => {
                        let e = X.default.getChannelId();
                        return q.default.getChannel(e)
                    }), {
                        guildId: s,
                        channelId: i,
                        messageId: l
                    } = t.params, r = (0, E.useStateFromStores)([Z.default], () => Z.default.getGuild(s)), o = (0, E.useStateFromStores)([Q.default], () => null == s ? null : Q.default.getSelfMember(s)), u = (0, g.isEligibleForSubscriptionsInGuildShop)(s, "channel_renderer");
                    if (null != s && null != i && (0, eu.isStaticChannelRoute)(i)) switch (i) {
                        case eu.StaticChannelRoute.ROLE_SUBSCRIPTIONS:
                            return u ? (0, a.jsx)(e_, {
                                guildId: s,
                                initialTab: R.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS
                            }) : (0, a.jsx)(y.default, {
                                guildId: s
                            });
                        case eu.StaticChannelRoute.GUILD_SHOP:
                            return (0, a.jsx)(e_, {
                                guildId: s,
                                productId: l
                            });
                        case eu.StaticChannelRoute.MEMBER_APPLICATIONS:
                            return (0, a.jsx)(eh, {
                                guildId: s
                            });
                        case eu.StaticChannelRoute.GUILD_HOME:
                            return (0, a.jsx)(eC, {
                                guildId: s
                            });
                        case eu.StaticChannelRoute.CHANNEL_BROWSER:
                            return (0, a.jsx)(eI, {
                                guildId: s,
                                selectedSection: ed.GuildOnboardingTab.BROWSE
                            });
                        case eu.StaticChannelRoute.GUILD_ONBOARDING:
                            return (0, a.jsx)(eS, {
                                guildId: s
                            });
                        case eu.StaticChannelRoute.CUSTOMIZE_COMMUNITY:
                            return (0, a.jsx)(eI, {
                                guildId: s,
                                selectedSection: ed.GuildOnboardingTab.CUSTOMIZE
                            });
                        case eu.StaticChannelRoute.MEMBER_SAFETY:
                            return (0, a.jsx)(eT, {
                                guildId: s
                            });
                        default:
                            (0, $.assertNever)(i)
                    }
                    if ((0, P.isBlockedByOnboarding)(r, o)) return (0, a.jsx)(D.default, {
                        guildId: s,
                        channelId: i
                    });
                    if ((null == n ? void 0 : n.type) === eo.ChannelTypes.GUILD_STORE) {
                        let e = t.params.messageId;
                        return (0, a.jsx)(et.default, {
                            channel: n,
                            inputSkuId: e
                        }, n.id)
                    }
                    return (0, a.jsx)(A.default, {})
                },
                eA = s.memo(function() {
                    let {
                        guildId: e,
                        channelId: t
                    } = (0, W.default)(), n = (0, E.useStateFromStores)([X.default], () => null != t ? t : X.default.getChannelId(e));
                    return function() {
                        return window.location.pathname.startsWith(eo.Routes.GUILD_DISCOVERY)
                    }() ? (0, a.jsx)(L.default, {}) : null != e ? (0, a.jsx)(x.default, {
                        selectedChannelId: n,
                        guildId: e
                    }, e) : (0, a.jsx)(es.default, {})
                });

            function ep(e) {
                let t = (0, W.default)(e => {
                    let {
                        guildId: t
                    } = e;
                    return t
                });
                return (0, a.jsx)(F.default, {
                    ...e,
                    guildId: t
                })
            }
            let em = e => (0, a.jsx)(eN, {
                    ...e
                }),
                eg = e => {
                    let t = null != e && e.length > 0 && e.startsWith("?"),
                        n = t ? e.split("?")[1] : null;
                    return (0, a.jsx)(O.default, {
                        searchRoute: n
                    })
                },
                eR = e => {
                    let {
                        match: t
                    } = e;
                    return null != t.params.guildId ? (0, a.jsx)(M.default, {
                        guildId: t.params.guildId,
                        inviteCode: t.params.inviteCode
                    }) : null
                },
                eO = e => {
                    let {
                        match: t
                    } = e;
                    return null != t.params.guildId ? (0, a.jsx)(U.default, {
                        guildId: t.params.guildId,
                        inviteCode: t.params.inviteCode
                    }) : null
                },
                eL = () => (0, a.jsx)(el.default, {}),
                ev = () => (0, a.jsx)(er.default, {}),
                eM = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return function(t) {
                        return (0, a.jsx)(m.default, {
                            isFullScreen: e,
                            ...t
                        })
                    }
                },
                eP = e => (0, a.jsx)(I.default, {
                    ...e
                }),
                eD = () => (0, a.jsx)(T.default, {}),
                ey = () => (0, a.jsx)(Y.default, {}),
                ex = () => (0, a.jsx)(G.default, {}),
                eb = () => (0, a.jsx)(V.default, {}),
                eU = e => {
                    let {
                        match: t
                    } = e, n = t.params.feature;
                    switch (n) {
                        case "addFriends":
                            return (0, a.jsx)(Y.default, {
                                initialSection: eo.FriendsSections.ADD_FRIEND
                            });
                        case "pendingFriends":
                            return (0, a.jsx)(Y.default, {
                                initialSection: eo.FriendsSections.PENDING
                            });
                        case "sessionManagement":
                            return (0, a.jsx)(o.Redirect, {
                                to: eo.Routes.SETTINGS("sessions")
                            });
                        case "connections":
                            return (0, a.jsx)(o.Redirect, {
                                to: {
                                    pathname: eo.Routes.SETTINGS("connections"),
                                    search: e.location.search
                                }
                            });
                        case "family-center":
                            return (0, a.jsx)(o.Redirect, {
                                to: eo.Routes.FAMILY_CENTER
                            });
                        case "account-standing":
                            return (0, a.jsx)(o.Redirect, {
                                to: eo.Routes.SETTINGS("privacy-and-safety", "account-standing")
                            });
                        default:
                            return (0, a.jsx)(o.Redirect, {
                                to: eo.Routes.ME
                            })
                    }
                };

            function eG(e) {
                let {
                    hasNotice: t,
                    sidebarTheme: n,
                    hideSidebar: s
                } = e;
                (0, h.useNullExperiment)(!0);
                let i = "app view user trigger debugging";
                _.UserTriggerAAExperiment.useExperiment({
                    location: i
                }, {
                    autoTrackExposure: !1
                }), _.UserTriggerAAExperiment.trackExposure({
                    location: i
                });
                let r = (0, E.useStateFromStores)([N.default], () => N.default.isFullscreenInContext());
                return s ? null : (0, a.jsxs)("div", {
                    className: l(eE.sidebar, (0, ee.getThemeClass)(n), {
                        [eE.hasNotice]: t,
                        [eE.fullWidth]: c.isMobile,
                        [eE.hidden]: r
                    }),
                    children: [(0, a.jsx)(eA, {}), (0, a.jsxs)("section", {
                        className: eE.panels,
                        "aria-label": ec.default.Messages.ACCOUNT_A11Y_LABEL,
                        children: [(0, a.jsx)(B.default, {}), (0, a.jsx)(ei.default, {
                            section: eo.AnalyticsSections.ACTIVITY_PANEL,
                            children: (0, a.jsx)(ep, {
                                className: eE.activityPanel
                            })
                        }), (0, a.jsx)(ei.default, {
                            section: eo.AnalyticsSections.RTC_CONNECTION_PANEL,
                            children: (0, a.jsx)(H.default, {})
                        }), (0, a.jsx)(ei.default, {
                            section: eo.AnalyticsSections.ACCOUNT_PANEL,
                            children: (0, a.jsx)(w.default, {})
                        })]
                    }), (0, a.jsx)(en.default, {})]
                })
            }

            function ej() {
                var e;
                let t = (0, E.useStateFromStores)([J.default], () => J.default.hasNotice()),
                    n = (0, E.useStateFromStores)([z.default], () => z.default.darkSidebar ? eo.ThemeTypes.DARK : void 0),
                    i = function() {
                        let [e, t] = s.useState(() => window.location.pathname.startsWith(eo.Routes.GUILD_MEMBER_VERIFICATION("")));
                        return s.useEffect(() => K.default.addRouteChangeListener(e => {
                            t(e.pathname.startsWith(eo.Routes.GUILD_MEMBER_VERIFICATION("")))
                        }), []), e
                    }(),
                    l = function() {
                        let [e, t] = s.useState(() => window.location.pathname.startsWith(eo.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB("")));
                        return s.useEffect(() => K.default.addRouteChangeListener(e => {
                            t(e.pathname.startsWith(eo.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB("")))
                        }), []), e
                    }(),
                    d = function() {
                        var e;
                        let t = (0, o.useLocation)();
                        return (null === (e = (0, r.matchPath)(t.pathname, eo.Routes.GUILD_BOOSTING_MARKETING(":guildId"))) || void 0 === e ? void 0 : e.isExact) === !0
                    }(),
                    f = function() {
                        var e;
                        let t = (0, o.useLocation)();
                        return (null === (e = (0, r.matchPath)(t.pathname, eo.Routes.COLLECTIBLES_SHOP_FULLSCREEN)) || void 0 === e ? void 0 : e.isExact) === !0
                    }(),
                    _ = (0, E.useStateFromStores)([k.default], () => k.default.getIsOpen()),
                    h = (0, o.useRouteMatch)([eo.Routes.CHANNEL(eo.ME, ":channelId"), eo.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")]),
                    T = (null == h ? void 0 : null === (e = h.params) || void 0 === e ? void 0 : e.channelId) === eu.StaticChannelRoute.GUILD_ONBOARDING,
                    I = s.useCallback(() => j.default.openSidebar(), []);
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("div", {
                        className: eE.container,
                        children: [_ && !f && (0, a.jsx)(b.default, {
                            className: eE.guilds,
                            themeOverride: n
                        }), (0, a.jsx)(v.default.Provider, {
                            value: (null == h ? void 0 : h.params.guildId) === eo.ME ? void 0 : null == h ? void 0 : h.params.guildId,
                            children: (0, a.jsxs)("div", {
                                className: eE.base,
                                children: [c.isMobile ? null : (0, a.jsx)(ea.default, {}), (0, a.jsxs)("div", {
                                    className: eE.content,
                                    children: [(0, a.jsx)(p.default, {}), (0, a.jsx)(eG, {
                                        hasNotice: t,
                                        sidebarTheme: n,
                                        hideSidebar: i || l || d || f || T || !_
                                    }), (0, a.jsx)(C.default.Provider, {
                                        value: I,
                                        children: (0, a.jsxs)(o.Switch, {
                                            children: [(0, a.jsx)(S.default, {
                                                path: eo.Routes.ACTIVITY,
                                                disableTrack: !0,
                                                children: (0, a.jsx)(o.Redirect, {
                                                    to: eo.Routes.ME
                                                })
                                            }), (0, a.jsx)(S.default, {
                                                path: eo.Routes.ACTIVITIES_HAPPENING_NOW,
                                                render: eD,
                                                impressionName: u.ImpressionNames.ACTIVITIES
                                            }), (0, a.jsx)(S.default, {
                                                path: eo.Routes.ACTIVITY_DETAILS(":applicationId"),
                                                render: eP,
                                                impressionName: u.ImpressionNames.ACTIVITY_DETAILS,
                                                impressionProperties: e => {
                                                    let {
                                                        computedMatch: t
                                                    } = e;
                                                    return {
                                                        application_id: t.params.applicationId
                                                    }
                                                }
                                            }), (0, a.jsx)(S.default, {
                                                path: eo.Routes.ACTIVITIES,
                                                render: eD,
                                                impressionName: u.ImpressionNames.ACTIVITIES
                                            }), (0, a.jsx)(S.default, {
                                                path: eo.Routes.APPLICATION_LIBRARY,
                                                render: eL,
                                                impressionName: u.ImpressionNames.APPLICATION_LIBRARY,
                                                disableTrack: !0
                                            }), (0, a.jsx)(S.default, {
                                                path: eo.Routes.APPLICATION_STORE,
                                                render: ev,
                                                impressionName: u.ImpressionNames.APPLICATION_STORE,
                                                disableTrack: !0
                                            }), (0, a.jsx)(S.default, {
                                                path: eo.Routes.COLLECTIBLES_SHOP_FULLSCREEN,
                                                render: eM(!0),
                                                disableTrack: !0
                                            }), (0, a.jsx)(S.default, {
                                                path: eo.Routes.COLLECTIBLES_SHOP,
                                                render: eM(!1),
                                                disableTrack: !0
                                            }), (0, a.jsx)(S.default, {
                                                path: eo.Routes.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                                                render: eM(!1),
                                                disableTrack: !0
                                            }), (0, a.jsx)(S.default, {
                                                path: eo.Routes.MESSAGE_REQUESTS,
                                                render: ex,
                                                disableTrack: !0
                                            }), (0, a.jsx)(S.default, {
                                                path: eo.Routes.FAMILY_CENTER,
                                                render: eb,
                                                disableTrack: !0
                                            }), (0, a.jsx)(S.default, {
                                                path: eo.Routes.ME,
                                                exact: !0,
                                                render: ey,
                                                impressionName: u.ImpressionNames.FRIENDS,
                                                disableTrack: !0
                                            }), (0, a.jsx)(S.default, {
                                                path: [eo.Routes.CHANNEL_THREAD_VIEW(":guildId", ":channelId", ":threadId", ":messageId?"), eo.Routes.CHANNEL(eo.ME, ":channelId"), eo.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")],
                                                render: em,
                                                impressionName: u.ImpressionNames.GUILD_CHANNEL,
                                                disableTrack: !0
                                            }), (0, a.jsx)(S.default, {
                                                path: eo.Routes.GUILD_DISCOVERY,
                                                render: e => {
                                                    let {
                                                        location: t
                                                    } = e;
                                                    return eg(t.search)
                                                },
                                                impressionName: u.ImpressionNames.GUILD_DISCOVERY,
                                                disableTrack: !0
                                            }), (0, a.jsx)(S.default, {
                                                path: eo.Routes.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?"),
                                                render: eR,
                                                impressionName: u.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                disableTrack: !0
                                            }), (0, a.jsx)(S.default, {
                                                path: eo.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(":guildId", ":inviteCode?"),
                                                render: eO,
                                                impressionName: u.ImpressionNames.HUB_EMAIL_SIGNUP,
                                                impressionProperties: e => {
                                                    let {
                                                        computedMatch: t
                                                    } = e;
                                                    return {
                                                        has_invite: void 0 !== t.params.inviteCode
                                                    }
                                                }
                                            }), (0, a.jsx)(S.default, {
                                                path: eo.Routes.FEATURE(":feature"),
                                                exact: !0,
                                                render: eU,
                                                disableTrack: !0
                                            })]
                                        })
                                    })]
                                })]
                            })
                        })]
                    })
                })
            }
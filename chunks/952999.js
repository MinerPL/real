            "use strict";
            n.r(t), n.d(t, {
                WelcomeMessageCTA: function() {
                    return O
                },
                default: function() {
                    return j
                }
            }), n("222007"), n("424973");
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("775560"),
                o = n("458960"),
                u = n("446674"),
                d = n("151426"),
                c = n("77078"),
                f = n("634634"),
                h = n("716241"),
                C = n("299285"),
                p = n("983444"),
                m = n("592407"),
                E = n("970700"),
                g = n("271938"),
                S = n("305961"),
                A = n("697218"),
                _ = n("461380"),
                T = n("36694"),
                M = n("659500"),
                I = n("701909"),
                N = n("773336"),
                v = n("299039"),
                L = n("172554"),
                x = n("49111"),
                R = n("188631"),
                y = n("782340"),
                D = n("508328");

            function O(e) {
                let {
                    className: t,
                    iconUrl: n,
                    icon: l,
                    header: r,
                    completed: o,
                    onClick: u
                } = e, [d, h] = s.useState(!1), C = (0, f.default)(o);
                return s.useEffect(() => {
                    null != C && o !== C && (h(!0), setTimeout(() => h(!1), 1e3))
                }, [o, C]), (0, a.jsxs)(c.Clickable, {
                    className: i(t, D.card, {
                        [D.completed]: o
                    }),
                    onClick: u,
                    children: [null != l ? l : (0, a.jsx)("div", {
                        className: D.icon,
                        style: {
                            backgroundImage: "url('".concat(n, "')")
                        }
                    }), (0, a.jsx)(c.Text, {
                        color: "header-primary",
                        className: i(D.cardTextContainer, D.cardHeader),
                        variant: "text-sm/normal",
                        children: r
                    }), o ? (0, a.jsx)(T.default, {
                        className: i(D.checkmark, {
                            [D.animate]: d
                        })
                    }) : (0, a.jsx)(_.default, {
                        className: D.arrow,
                        direction: _.default.Directions.RIGHT
                    })]
                })
            }

            function j(e) {
                let {
                    channel: t
                } = e, l = (0, u.useStateFromStores)([S.default], () => null != t ? S.default.getGuild(t.getGuildId()) : null, [t]), f = null != l && v.default.extractTimestamp(l.id) < Date.now() - x.WELCOME_OLD_GUILD_AGE_THRESHOLD, _ = (0, u.useStateFromStores)([g.default], () => (null == l ? void 0 : l.ownerId) === g.default.getId(), [l]), {
                    canInvite: T,
                    canManageGuild: j,
                    canMessage: P
                } = (0, p.usePermissions)(t, l), b = (0, u.useStateFromStores)([A.default], () => {
                    var e, t;
                    return (null === (e = A.default.getCurrentUser()) || void 0 === e ? void 0 : e.desktop) === !0 || (null === (t = A.default.getCurrentUser()) || void 0 === t ? void 0 : t.mobile) === !0
                }), {
                    guildPopulated: F,
                    guildMessaged: U,
                    guildPersonalized: H
                } = (0, p.useCompletedStates)(l), {
                    handleInvite: k,
                    handleMessage: G,
                    handlePersonalize: w,
                    handleDownload: B,
                    handleAddApplication: V
                } = function(e) {
                    let t = s.useCallback(() => {
                            h.default.trackWithMetadata(x.AnalyticEvents.SERVER_SETUP_CTA_CLICKED, {
                                setup_type: R.AnalyticsSetupTypes.CHANNEL_WELCOME,
                                action: R.AnalyticsActions.INVITE
                            }), null != e && (0, c.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await n.el("310688").then(n.bind(n, "310688"));
                                return n => (0, a.jsx)(t, {
                                    ...n,
                                    guild: e,
                                    source: x.InstantInviteSources.CHANNEL_WELCOME,
                                    analyticsLocation: {
                                        section: x.AnalyticsSections.CHANNEL_WELCOME_CTA
                                    }
                                })
                            })
                        }, [e]),
                        l = s.useCallback(() => {
                            h.default.trackWithMetadata(x.AnalyticEvents.SERVER_SETUP_CTA_CLICKED, {
                                setup_type: R.AnalyticsSetupTypes.CHANNEL_WELCOME,
                                action: R.AnalyticsActions.SEND_MESSAGE
                            }), M.ComponentDispatch.dispatch(x.ComponentActions.TEXTAREA_FOCUS, {
                                highlight: !0,
                                channelId: ""
                            })
                        }, []),
                        i = s.useCallback(() => {
                            h.default.trackWithMetadata(x.AnalyticEvents.SERVER_SETUP_CTA_CLICKED, {
                                setup_type: R.AnalyticsSetupTypes.CHANNEL_WELCOME,
                                action: R.AnalyticsActions.PERSONALIZE_SERVER
                            }), null != e && m.default.open(e.id, x.GuildSettingsSections.OVERVIEW, {
                                section: x.AnalyticsSections.CHANNEL_WELCOME_CTA
                            })
                        }, [e]),
                        r = s.useCallback(() => {
                            h.default.trackWithMetadata(x.AnalyticEvents.SERVER_SETUP_CTA_CLICKED, {
                                setup_type: R.AnalyticsSetupTypes.CHANNEL_WELCOME,
                                action: R.AnalyticsActions.DOWNLOAD
                            }), (0, c.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("649486").then(n.bind(n, "649486"));
                                return t => (0, a.jsx)(e, {
                                    source: x.AnalyticsSections.CHANNEL_WELCOME_CTA,
                                    ...t
                                })
                            })
                        }, []),
                        o = s.useCallback(() => {
                            null != e && (h.default.trackWithMetadata(x.AnalyticEvents.SERVER_SETUP_CTA_CLICKED, {
                                setup_type: R.AnalyticsSetupTypes.CHANNEL_WELCOME,
                                action: R.AnalyticsActions.ADD_APP
                            }), (0, c.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await n.el("881892").then(n.bind(n, "881892"));
                                return n => {
                                    var s;
                                    return (0, a.jsx)(t, {
                                        guildId: null !== (s = e.id) && void 0 !== s ? s : "",
                                        ...n,
                                        analyticsType: d.DismissibleContent.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL
                                    })
                                }
                            }))
                        }, [e]);
                    return {
                        handleInvite: t,
                        handleMessage: l,
                        handlePersonalize: i,
                        handleDownload: r,
                        handleAddApplication: o
                    }
                }(l), W = !(b || F || U || H), {
                    titleAnimatedStyle: Z,
                    opacities: z
                } = function(e) {
                    let t = (0, r.useLazyValue)(() => new o.default.Value(0)),
                        n = (0, r.useLazyValue)(() => new o.default.Value(0)),
                        a = [];
                    a.push((0, r.useLazyValue)(() => new o.default.Value(0))), a.push((0, r.useLazyValue)(() => new o.default.Value(0))), a.push((0, r.useLazyValue)(() => new o.default.Value(0))), a.push((0, r.useLazyValue)(() => new o.default.Value(0))), s.useEffect(() => {
                        o.default.stagger(300, [o.default.parallel([o.default.timing(n, {
                            toValue: 1,
                            duration: 450
                        }), o.default.timing(t, {
                            toValue: 1,
                            duration: 450
                        })]), o.default.stagger(100, [o.default.timing(a[0], {
                            toValue: 1,
                            duration: 300
                        }), o.default.timing(a[1], {
                            toValue: 1,
                            duration: 300
                        }), o.default.timing(a[2], {
                            toValue: 1,
                            duration: 300
                        }), o.default.timing(a[3], {
                            toValue: 1,
                            duration: 300
                        })])]).start()
                    }, [n, t, a]);
                    let l = e ? {
                        transform: [{
                            translateY: t.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["-20px", "0px"]
                            })
                        }],
                        opacity: n
                    } : {};
                    return {
                        titleAnimatedStyle: l,
                        opacities: a
                    }
                }(W), K = (0, u.useStateFromStores)([C.default], () => C.default.getGuildApplicationIds(null == l ? void 0 : l.id)), Y = K.length > 0;
                if (s.useEffect(() => {
                        var e;
                        (0, E.fetchGuildIntegrationsApplications)(null !== (e = null == l ? void 0 : l.id) && void 0 !== e ? e : "")
                    }, [l]), null == l) return null;
                let q = [];
                !f && (T && q.push((0, a.jsx)(o.default.div, {
                    className: D.cardWrapper,
                    style: W ? {
                        opacity: z[q.length]
                    } : {},
                    children: (0, a.jsx)(O, {
                        iconUrl: n("243826"),
                        header: y.default.Messages.WELCOME_CTA_INVITE_TITLE,
                        completed: F,
                        onClick: k
                    })
                }, "invite")), j && q.push((0, a.jsx)(o.default.div, {
                    className: D.cardWrapper,
                    style: W ? {
                        opacity: z[q.length]
                    } : {},
                    children: (0, a.jsx)(O, {
                        iconUrl: n("215036"),
                        header: y.default.Messages.WELCOME_CTA_PERSONALIZE_TITLE,
                        completed: H,
                        onClick: w
                    })
                }, "customize")), P && q.push((0, a.jsx)(o.default.div, {
                    className: D.cardWrapper,
                    style: W ? {
                        opacity: z[q.length]
                    } : {},
                    children: (0, a.jsx)(O, {
                        iconUrl: n("505873"),
                        header: y.default.Messages.WELCOME_CTA_MESSAGE_TITLE,
                        completed: U,
                        onClick: G
                    })
                }, "message")), (0, N.isWeb)() && q.push((0, a.jsx)(o.default.div, {
                    className: D.cardWrapper,
                    style: W ? {
                        opacity: z[q.length]
                    } : {},
                    children: (0, a.jsx)(O, {
                        iconUrl: n("238032"),
                        header: y.default.Messages.WELCOME_CTA_DOWNLOAD_TITLE,
                        completed: b,
                        onClick: B
                    })
                }, "download")), q.push((0, a.jsx)(o.default.div, {
                    className: D.cardWrapper,
                    style: W ? {
                        opacity: z[q.length]
                    } : {},
                    children: (0, a.jsx)(O, {
                        iconUrl: n("356451"),
                        header: y.default.Messages.WELCOME_CTA_APPS_RECOMMENDATION_TITLE,
                        completed: Y,
                        onClick: V
                    })
                }, "addapp")));
                let X = _ ? y.default.Messages.WELCOME_CTA_SUBTITLE_OWNER : y.default.Messages.WELCOME_CTA_SUBTITLE_MEMBER;
                f && (X = y.default.Messages.WELCOME_CTA_SUBTITLE_EXISTING_SERVER);
                let Q = "".concat(I.default.getArticleURL(x.HelpdeskArticles.GUILD_GETTING_STARTED), "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm");
                return (0, a.jsx)(L.default, {
                    channelId: t.id,
                    children: (0, a.jsx)("div", {
                        className: D.container,
                        children: (0, a.jsxs)("div", {
                            className: D.inner,
                            children: [(0, a.jsxs)(o.default.div, {
                                style: Z,
                                children: [(0, a.jsx)(c.Heading, {
                                    className: D.titleName,
                                    variant: "heading-xxl/semibold",
                                    children: y.default.Messages.WELCOME_CTA_TITLE.format({
                                        guildName: l.name
                                    })
                                }), (0, a.jsxs)(c.Text, {
                                    color: "header-secondary",
                                    className: i({
                                        [D.subtitle]: !0,
                                        [D.noChildren]: 0 === q.length
                                    }),
                                    variant: "text-sm/normal",
                                    children: [X, " ", q.length > 0 ? y.default.Messages.WELCOME_CTA_SUBTITLE_ACTION_WITH_GUIDE.format({
                                        guideURL: Q
                                    }) : null]
                                })]
                            }), q]
                        })
                    })
                })
            }
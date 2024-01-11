            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("394846"),
                i = n("446674"),
                r = n("77078"),
                o = n("272030"),
                u = n("352674"),
                d = n("252063"),
                c = n("506885"),
                f = n("981601"),
                h = n("824563"),
                p = n("27618"),
                m = n("191542"),
                E = n("697218"),
                C = n("79798"),
                g = n("151185"),
                S = n("11056"),
                _ = n("826684"),
                I = n("599110"),
                T = n("315102"),
                v = n("659500"),
                x = n("519812"),
                N = n("158998"),
                A = n("50885"),
                M = n("888503"),
                R = n("49111"),
                j = n("782340"),
                L = n("282730"),
                O = n("881235");
            let y = A.default.getEnableHardwareAcceleration();

            function P(e) {
                let {
                    user: t,
                    channel: l
                } = e, {
                    status: d,
                    activities: C
                } = (0, i.useStateFromStoresObject)([p.default, E.default, h.default], () => p.default.isFriend(t.id) || t === E.default.getCurrentUser() ? {
                    status: h.default.getStatus(t.id),
                    activities: h.default.getActivities(t.id)
                } : {}), g = (0, i.useStateFromStores)([m.default], () => null != m.default.getTypingUsers(l.id)[t.id]), S = (0, i.useStateFromStores)([E.default], () => E.default.getCurrentUser()), _ = (0, i.useStateFromStores)([h.default], () => h.default.isMobileOnline(t.id)), I = (0, i.useStateFromStores)([p.default], () => p.default.getNickname(t.id)), T = e => {
                    (0, o.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("166452").then(n.bind(n, "166452"));
                        return n => (0, a.jsx)(e, {
                            ...n,
                            user: t,
                            channel: l
                        })
                    })
                };
                return (0, a.jsx)(r.Popout, {
                    preload: () => (0, c.default)(t.id, t.getAvatarURL(void 0, 80)),
                    renderPopout: e => (0, a.jsx)(f.default, {
                        ...e,
                        userId: t.id,
                        channelId: l.id
                    }),
                    position: s.isMobile ? "window_center" : "left",
                    spacing: 16,
                    onShiftClick: () => {
                        let e = "@".concat(N.default.getUserTag(t, {
                                decoration: "never"
                            })),
                            n = "<@".concat(t.id, ">");
                        v.ComponentDispatch.dispatchToLastSubscribed(R.ComponentActions.INSERT_TEXT, {
                            plainText: e,
                            rawText: n
                        }), u.default.startTyping(l.id)
                    },
                    children: e => (0, a.jsx)(M.default, {
                        user: t,
                        currentUser: S,
                        isOwner: t.id === l.ownerId,
                        ownerTooltipText: j.default.Messages.GROUP_OWNER,
                        shouldAnimateStatus: y,
                        isTyping: g,
                        status: d,
                        activities: C,
                        channel: l,
                        onContextMenu: T,
                        isMobile: _,
                        nick: I,
                        ...e
                    }, t.id)
                })
            }

            function b(e) {
                var t;
                let {
                    integration: i,
                    channel: u
                } = e, d = l.useCallback(e => {
                    (0, o.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("348866").then(n.bind(n, "348866"));
                        return t => (0, a.jsx)(e, {
                            ...t,
                            channel: u,
                            integration: i
                        })
                    })
                }, [i, u]), h = i.application.bot, p = T.default.getApplicationIconURL({
                    id: i.application.id,
                    icon: i.application.icon,
                    bot: null === (t = i.application) || void 0 === t ? void 0 : t.bot,
                    botIconFirst: !0
                });
                return null != h ? (0, a.jsx)(r.Popout, {
                    preload: () => (0, c.default)(h.id, p),
                    renderPopout: e => (0, a.jsx)(f.default, {
                        ...e,
                        userId: h.id,
                        channelId: u.id
                    }),
                    position: s.isMobile ? "window_center" : "left",
                    spacing: 16,
                    children: e => (0, a.jsx)(S.default, {
                        onContextMenu: d,
                        className: L.member,
                        name: (0, a.jsx)("span", {
                            className: L.username,
                            children: i.application.name
                        }),
                        avatar: (0, a.jsx)(r.Avatar, {
                            size: r.AvatarSizes.SIZE_32,
                            src: p,
                            "aria-label": i.application.name,
                            statusTooltip: !0
                        }),
                        decorators: (0, a.jsx)(C.default, {
                            className: L.botTag,
                            verified: null == h ? void 0 : h.isVerifiedBot()
                        }),
                        id: i.application.id,
                        focusProps: {
                            offset: {
                                top: 4,
                                bottom: 4,
                                left: 4,
                                right: 4
                            }
                        },
                        ...e
                    })
                }) : null
            }

            function D(e) {
                let {
                    channel: t
                } = e, s = E.default.getCurrentUser(), o = null == s ? void 0 : s.isStaff(), u = (0, i.useStateFromStoresArray)([E.default], () => (0, x.getRecipients)(t.recipients, E.default), [t.recipients]), {
                    installedIntegrations: f,
                    applicationsShelf: h,
                    fetched: p,
                    appsInGDMEnabled: m,
                    availableApplications: T
                } = (0, d.usePrivateChannelIntegrationState)({
                    channelId: t.id
                });
                l.useEffect(() => {
                    if (o)
                        for (let e of u)(0, c.default)(e.id, e.getAvatarURL(void 0, 80), {
                            dispatchWait: !0
                        })
                }, [o, u]), l.useEffect(() => {
                    I.default.track(R.AnalyticEvents.MEMBER_LIST_VIEWED, {
                        channel_id: t.id,
                        channel_type: t.type,
                        guild_id: t.guild_id
                    })
                }, [t.guild_id, t.id, t.type]);
                let v = o && u.every(e => e.isStaff());
                return (0, a.jsx)("div", {
                    className: O.membersWrap,
                    children: (0, a.jsxs)(r.Scroller, {
                        className: O.members,
                        fade: !0,
                        children: [(0, a.jsxs)(_.default, {
                            className: O.membersGroup,
                            children: ["".concat(j.default.Messages.MEMBERS, "—").concat(u.length, " "), v ? (0, a.jsx)(C.default, {
                                className: O.decorator,
                                type: C.default.Types.STAFF_ONLY_DM
                            }) : null]
                        }), u.map(e => (0, a.jsx)(P, {
                            user: e,
                            channel: t
                        }, e.id)), m && (f.length > 0 || p && h.length > 0) && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(_.default, {
                                className: O.membersGroup,
                                children: "".concat(j.default.Messages.APPS, "—").concat(f.length)
                            }), f.map(e => (0, a.jsx)(b, {
                                integration: e,
                                channel: t
                            }, e.application.id)), T.length > 0 && (0, a.jsx)(S.default, {
                                className: L.member,
                                onClick: () => {
                                    (0, r.openModalLazy)(async () => {
                                        let {
                                            default: e
                                        } = await n.el("724110").then(n.bind(n, "724110"));
                                        return n => (0, a.jsx)(e, {
                                            ...n,
                                            channelId: t.id
                                        })
                                    })
                                },
                                avatar: (0, a.jsx)("div", {
                                    className: O.appIconWrapper,
                                    children: (0, a.jsx)(g.default, {
                                        width: 18,
                                        height: 18
                                    })
                                }),
                                name: j.default.Messages.PRIVATE_CHANNEL_ADD_APPS
                            })]
                        })]
                    })
                })
            }
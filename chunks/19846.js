            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("394846"),
                i = n("446674"),
                r = n("77078"),
                o = n("736964"),
                u = n("486503"),
                d = n("7643"),
                c = n("785770"),
                f = n("28424"),
                h = n("208021"),
                C = n("713135"),
                p = n("401642"),
                m = n("982108"),
                E = n("27618"),
                g = n("697218"),
                S = n("587974"),
                A = n("315102"),
                _ = n("841397"),
                T = n("49111"),
                M = n("680894"),
                I = n("590456"),
                N = n("782340"),
                v = n("977393");
            let L = e => {
                    let {
                        userId: t
                    } = e, n = (0, i.useStateFromStores)([C.default], () => C.default.getMutualGuilds(t), [t]), l = s.useMemo(() => null != n ? n.slice(0, 3).map((e, t) => {
                        let {
                            guild: s
                        } = e, l = null != s ? A.default.getGuildIconURL({
                            id: s.id,
                            icon: s.icon,
                            size: 24
                        }) : null;
                        if (null == l) return null;
                        let i = t === (n.length > 3 ? 3 : n.length) - 1,
                            r = (0, a.jsx)("img", {
                                src: l,
                                alt: "",
                                className: v.avatar
                            }, t);
                        return i ? r : (0, a.jsx)(S.default, {
                            className: v.avatarMask,
                            mask: S.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            width: 24,
                            height: 24,
                            children: r
                        }, t)
                    }).filter(e => null != e) : [], [n]);
                    return null == n || 0 === n.length ? (0, a.jsx)(r.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: N.default.Messages.NO_MUTUAL_GUILDS
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: v.avatarContainer,
                            children: l
                        }), (0, a.jsx)(r.Clickable, {
                            onClick: () => {
                                (0, p.openUserProfileModal)({
                                    userId: t,
                                    section: I.UserProfileSections.MUTUAL_GUILDS,
                                    analyticsLocation: {
                                        section: T.AnalyticsSections.DIRECT_MESSAGE
                                    }
                                })
                            },
                            children: (0, a.jsx)(r.Text, {
                                className: v.mutualGuilds,
                                variant: "text-sm/normal",
                                children: N.default.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
                                    count: n.length
                                })
                            })
                        })]
                    })
                },
                x = e => {
                    var t;
                    let {
                        relationshipType: n,
                        userId: s,
                        showingBanner: l
                    } = e, i = null === (t = g.default.getUser(s)) || void 0 === t ? void 0 : t.bot, u = () => {
                        o.default.addRelationship({
                            userId: s,
                            context: {
                                location: T.AnalyticsPages.DM_CHANNEL
                            }
                        })
                    }, d = (0, a.jsx)(r.Button, {
                        className: v.action,
                        size: r.Button.Sizes.TINY,
                        color: r.Button.Colors.PRIMARY,
                        onClick: () => {
                            o.default.addRelationship({
                                userId: s,
                                context: {
                                    location: T.AnalyticsPages.DM_CHANNEL
                                },
                                type: T.RelationshipTypes.BLOCKED
                            })
                        },
                        children: N.default.Messages.BLOCK
                    });
                    switch (n) {
                        case T.RelationshipTypes.NONE:
                            return (0, a.jsxs)(a.Fragment, {
                                children: [!i && !l && (0, a.jsx)(r.Button, {
                                    className: v.action,
                                    size: r.Button.Sizes.TINY,
                                    onClick: u,
                                    children: N.default.Messages.ADD_FRIEND
                                }), d]
                            });
                        case T.RelationshipTypes.FRIEND:
                            return (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(r.Button, {
                                    className: v.action,
                                    size: r.Button.Sizes.TINY,
                                    onClick: () => {
                                        o.default.removeFriend(s, {
                                            location: T.AnalyticsPages.DM_CHANNEL
                                        })
                                    },
                                    color: r.Button.Colors.PRIMARY,
                                    children: N.default.Messages.REMOVE_FRIEND
                                }), d]
                            });
                        case T.RelationshipTypes.BLOCKED:
                            return (0, a.jsx)(r.Button, {
                                className: v.action,
                                size: r.Button.Sizes.TINY,
                                onClick: () => {
                                    o.default.unblockUser(s, {
                                        location: T.AnalyticsPages.DM_CHANNEL
                                    })
                                },
                                color: r.Button.Colors.PRIMARY,
                                children: N.default.Messages.UNBLOCK
                            });
                        case T.RelationshipTypes.PENDING_INCOMING:
                            return (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(r.Text, {
                                    className: v.action,
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: N.default.Messages.FRIEND_REQUEST_RECEIVED
                                }), (0, a.jsx)(r.Button, {
                                    className: v.action,
                                    size: r.Button.Sizes.TINY,
                                    onClick: u,
                                    children: N.default.Messages.FRIEND_REQUEST_ACCEPT
                                }), (0, a.jsx)(r.Button, {
                                    className: v.action,
                                    size: r.Button.Sizes.TINY,
                                    color: r.Button.Colors.PRIMARY,
                                    onClick: () => {
                                        o.default.cancelFriendRequest(s, {
                                            location: T.AnalyticsPages.DM_CHANNEL
                                        })
                                    },
                                    children: N.default.Messages.FRIEND_REQUEST_IGNORE
                                }), d]
                            });
                        case T.RelationshipTypes.PENDING_OUTGOING:
                            return (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(r.Button, {
                                    className: v.action,
                                    size: r.Button.Sizes.TINY,
                                    disabled: !0,
                                    children: N.default.Messages.ADD_FRIEND_BUTTON_AFTER
                                }), d]
                            });
                        default:
                            return null
                    }
                },
                R = e => {
                    let {
                        channelId: t,
                        otherUserId: n
                    } = e, l = s.useCallback(() => {
                        (0, r.showToast)((0, r.createToast)(N.default.Messages.MESSAGE_REQUESTS_SPAM_REQUEST_ERROR_ALERT_TITLE, r.ToastType.FAILURE))
                    }, []), i = s.useCallback(() => {
                        h.default.closeChannelSidebar(m.MESSAGE_REQUESTS_BASE_CHANNEL_ID)
                    }, []), o = s.useCallback(() => {
                        h.default.closeChannelSidebar(m.MESSAGE_REQUESTS_BASE_CHANNEL_ID)
                    }, []), {
                        acceptMessageRequest: u,
                        rejectMessageRequest: c,
                        isAcceptLoading: f,
                        isRejectLoading: C,
                        isOptimisticAccepted: p,
                        isOptimisticRejected: E
                    } = (0, d.useMessageRequestActions)({
                        user: g.default.getUser(n),
                        onError: l,
                        onAcceptSuccess: o,
                        onRejectSuccess: i
                    }), S = f || C || p || E;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(r.Button, {
                            className: v.action,
                            size: r.Button.Sizes.TINY,
                            onClick: () => u(t),
                            disabled: S,
                            submitting: f,
                            children: N.default.Messages.MESSAGE_REQUEST_ACCEPT
                        }), (0, a.jsx)(r.Button, {
                            className: v.action,
                            size: r.Button.Sizes.TINY,
                            onClick: () => c(t),
                            color: r.Button.Colors.PRIMARY,
                            disabled: S,
                            submitting: C,
                            children: N.default.Messages.MESSAGE_REQUEST_IGNORE
                        })]
                    })
                };
            var y = e => {
                let {
                    userId: t,
                    channel: n,
                    showingBanner: s
                } = e, {
                    channelId: r
                } = (0, c.useMessageRequestSidebarState)(), o = (0, i.useStateFromStores)([u.default], () => null != r && u.default.isSpam(r), [r]), d = (0, i.useStateFromStores)([E.default], () => E.default.getRelationshipType(t), [t]), h = n.id === r;
                return t === M.CLYDE_AI_USER_ID ? null : o || h ? (0, a.jsxs)("div", {
                    className: v.mobileContainer,
                    children: [(0, a.jsx)("div", {
                        className: v.mobileMutualGuilds,
                        children: (0, a.jsx)(L, {
                            userId: t
                        })
                    }), (0, a.jsxs)("div", {
                        className: v.mobileButtons,
                        children: [(0, a.jsx)(R, {
                            channelId: n.id,
                            otherUserId: t
                        }), (0, a.jsx)(f.default, {
                            channel: n
                        })]
                    })]
                }) : !0 === l.isMobile || h ? (0, a.jsxs)("div", {
                    className: v.mobileContainer,
                    children: [(0, a.jsx)("div", {
                        className: v.mobileMutualGuilds,
                        children: (0, a.jsx)(L, {
                            userId: t
                        })
                    }), (0, a.jsxs)("div", {
                        className: v.mobileButtons,
                        children: [(0, a.jsx)(x, {
                            relationshipType: d,
                            userId: t,
                            showingBanner: s
                        }), !s && (0, a.jsx)(_.default, {
                            otherUserId: t,
                            channel: n,
                            navigateAwayOnReportSuccess: !1
                        })]
                    })]
                }) : (0, a.jsxs)("div", {
                    className: v.container,
                    children: [(0, a.jsx)(L, {
                        userId: t
                    }), (0, a.jsx)("div", {
                        className: v.divider
                    }), (0, a.jsx)(x, {
                        relationshipType: d,
                        userId: t,
                        showingBanner: s
                    }), !s && (0, a.jsx)(_.default, {
                        otherUserId: t,
                        channel: n
                    })]
                })
            }
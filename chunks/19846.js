            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var s = n("37983"),
                a = n("884691"),
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
                _ = n("315102"),
                A = n("841397"),
                T = n("49111"),
                M = n("680894"),
                I = n("590456"),
                N = n("782340"),
                v = n("977393");
            let L = e => {
                    let {
                        userId: t
                    } = e, n = (0, i.useStateFromStores)([C.default], () => C.default.getMutualGuilds(t), [t]), l = a.useMemo(() => null != n ? n.slice(0, 3).map((e, t) => {
                        let {
                            guild: a
                        } = e, l = null != a ? _.default.getGuildIconURL({
                            id: a.id,
                            icon: a.icon,
                            size: 24
                        }) : null;
                        if (null == l) return null;
                        let i = t === (n.length > 3 ? 3 : n.length) - 1,
                            r = (0, s.jsx)("img", {
                                src: l,
                                alt: "",
                                className: v.avatar
                            }, t);
                        return i ? r : (0, s.jsx)(S.default, {
                            className: v.avatarMask,
                            mask: S.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            width: 24,
                            height: 24,
                            children: r
                        }, t)
                    }).filter(e => null != e) : [], [n]);
                    return null == n || 0 === n.length ? (0, s.jsx)(r.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: N.default.Messages.NO_MUTUAL_GUILDS
                    }) : (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("div", {
                            className: v.avatarContainer,
                            children: l
                        }), (0, s.jsx)(r.Clickable, {
                            onClick: () => {
                                (0, p.openUserProfileModal)({
                                    userId: t,
                                    section: I.UserProfileSections.MUTUAL_GUILDS,
                                    analyticsLocation: {
                                        section: T.AnalyticsSections.DIRECT_MESSAGE
                                    }
                                })
                            },
                            children: (0, s.jsx)(r.Text, {
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
                        userId: a,
                        showingBanner: l
                    } = e, i = null === (t = g.default.getUser(a)) || void 0 === t ? void 0 : t.bot, u = () => {
                        o.default.addRelationship({
                            userId: a,
                            context: {
                                location: T.AnalyticsPages.DM_CHANNEL
                            }
                        })
                    }, d = (0, s.jsx)(r.Button, {
                        className: v.action,
                        size: r.Button.Sizes.TINY,
                        color: r.Button.Colors.PRIMARY,
                        onClick: () => {
                            o.default.addRelationship({
                                userId: a,
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
                            return (0, s.jsxs)(s.Fragment, {
                                children: [!i && !l && (0, s.jsx)(r.Button, {
                                    className: v.action,
                                    size: r.Button.Sizes.TINY,
                                    onClick: u,
                                    children: N.default.Messages.ADD_FRIEND
                                }), d]
                            });
                        case T.RelationshipTypes.FRIEND:
                            return (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(r.Button, {
                                    className: v.action,
                                    size: r.Button.Sizes.TINY,
                                    onClick: () => {
                                        o.default.removeFriend(a, {
                                            location: T.AnalyticsPages.DM_CHANNEL
                                        })
                                    },
                                    color: r.Button.Colors.PRIMARY,
                                    children: N.default.Messages.REMOVE_FRIEND
                                }), d]
                            });
                        case T.RelationshipTypes.BLOCKED:
                            return (0, s.jsx)(r.Button, {
                                className: v.action,
                                size: r.Button.Sizes.TINY,
                                onClick: () => {
                                    o.default.unblockUser(a, {
                                        location: T.AnalyticsPages.DM_CHANNEL
                                    })
                                },
                                color: r.Button.Colors.PRIMARY,
                                children: N.default.Messages.UNBLOCK
                            });
                        case T.RelationshipTypes.PENDING_INCOMING:
                            return (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(r.Text, {
                                    className: v.action,
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: N.default.Messages.FRIEND_REQUEST_RECEIVED
                                }), (0, s.jsx)(r.Button, {
                                    className: v.action,
                                    size: r.Button.Sizes.TINY,
                                    onClick: u,
                                    children: N.default.Messages.FRIEND_REQUEST_ACCEPT
                                }), (0, s.jsx)(r.Button, {
                                    className: v.action,
                                    size: r.Button.Sizes.TINY,
                                    color: r.Button.Colors.PRIMARY,
                                    onClick: () => {
                                        o.default.cancelFriendRequest(a, {
                                            location: T.AnalyticsPages.DM_CHANNEL
                                        })
                                    },
                                    children: N.default.Messages.FRIEND_REQUEST_IGNORE
                                }), d]
                            });
                        case T.RelationshipTypes.PENDING_OUTGOING:
                            return (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(r.Button, {
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
                    } = e, l = a.useCallback(() => {
                        (0, r.showToast)((0, r.createToast)(N.default.Messages.MESSAGE_REQUESTS_SPAM_REQUEST_ERROR_ALERT_TITLE, r.ToastType.FAILURE))
                    }, []), i = a.useCallback(() => {
                        h.default.closeChannelSidebar(m.MESSAGE_REQUESTS_BASE_CHANNEL_ID)
                    }, []), o = a.useCallback(() => {
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
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(r.Button, {
                            className: v.action,
                            size: r.Button.Sizes.TINY,
                            onClick: () => u(t),
                            disabled: S,
                            submitting: f,
                            children: N.default.Messages.MESSAGE_REQUEST_ACCEPT
                        }), (0, s.jsx)(r.Button, {
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
                    showingBanner: a
                } = e, {
                    channelId: r
                } = (0, c.useMessageRequestSidebarState)(), o = (0, i.useStateFromStores)([u.default], () => null != r && u.default.isSpam(r), [r]), d = (0, i.useStateFromStores)([E.default], () => E.default.getRelationshipType(t), [t]), h = n.id === r;
                return t === M.CLYDE_AI_USER_ID ? null : o || h ? (0, s.jsxs)("div", {
                    className: v.mobileContainer,
                    children: [(0, s.jsx)("div", {
                        className: v.mobileMutualGuilds,
                        children: (0, s.jsx)(L, {
                            userId: t
                        })
                    }), (0, s.jsxs)("div", {
                        className: v.mobileButtons,
                        children: [(0, s.jsx)(R, {
                            channelId: n.id,
                            otherUserId: t
                        }), (0, s.jsx)(f.default, {
                            channel: n
                        })]
                    })]
                }) : !0 === l.isMobile || h ? (0, s.jsxs)("div", {
                    className: v.mobileContainer,
                    children: [(0, s.jsx)("div", {
                        className: v.mobileMutualGuilds,
                        children: (0, s.jsx)(L, {
                            userId: t
                        })
                    }), (0, s.jsxs)("div", {
                        className: v.mobileButtons,
                        children: [(0, s.jsx)(x, {
                            relationshipType: d,
                            userId: t,
                            showingBanner: a
                        }), !a && (0, s.jsx)(A.default, {
                            otherUserId: t,
                            channel: n,
                            navigateAwayOnReportSuccess: !1
                        })]
                    })]
                }) : (0, s.jsxs)("div", {
                    className: v.container,
                    children: [(0, s.jsx)(L, {
                        userId: t
                    }), (0, s.jsx)("div", {
                        className: v.divider
                    }), (0, s.jsx)(x, {
                        relationshipType: d,
                        userId: t,
                        showingBanner: a
                    }), !a && (0, s.jsx)(A.default, {
                        otherUserId: t,
                        channel: n
                    })]
                })
            }
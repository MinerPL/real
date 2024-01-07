            "use strict";
            n.r(t), n.d(t, {
                CloseButton: function() {
                    return k
                },
                LinkButton: function() {
                    return K
                },
                default: function() {
                    return Z
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("627445"),
                o = n.n(r),
                u = n("90915"),
                d = n("974667"),
                c = n("394846"),
                f = n("446674"),
                h = n("77078"),
                C = n("450911"),
                p = n("272030"),
                m = n("502651"),
                E = n("139375"),
                g = n("843962"),
                I = n("679653"),
                S = n("379881"),
                _ = n("262973"),
                N = n("106435"),
                T = n("373469"),
                A = n("824563"),
                L = n("660478"),
                v = n("191542"),
                x = n("282109"),
                R = n("697218"),
                M = n("79798"),
                O = n("98292"),
                y = n("376069"),
                D = n("379793"),
                b = n("945330"),
                j = n("671434"),
                G = n("50885"),
                U = n("943722"),
                P = n("254167"),
                w = n("49111"),
                F = n("782340"),
                B = n("244087");
            let V = G.default.getEnableHardwareAcceleration() ? h.AnimatedAvatar : h.Avatar,
                H = {
                    offset: {
                        top: 2,
                        bottom: 2,
                        right: 4
                    }
                },
                k = e => (0, l.jsx)(h.Clickable, {
                    className: B.closeButton,
                    ...e,
                    focusProps: {
                        offset: {
                            top: -2,
                            bottom: -2,
                            left: -2,
                            right: 6
                        }
                    },
                    children: (0, l.jsx)(b.default, {
                        className: B.closeIcon
                    })
                }),
                Y = () => (0, l.jsx)(j.default, {
                    className: B.favoriteIcon
                });
            class K extends a.Component {
                render() {
                    let {
                        route: e,
                        selected: t,
                        icon: n,
                        iconClassName: a,
                        interactiveClassName: s,
                        text: r,
                        children: o,
                        locationState: d,
                        onClick: f,
                        className: C,
                        role: p,
                        "aria-posinset": m,
                        "aria-setsize": E,
                        ...g
                    } = this.props;
                    return (0, l.jsx)(D.default, {
                        className: i(B.channel, {
                            [B.fullWidth]: c.isMobile
                        }, C),
                        onClick: f,
                        role: p,
                        focusProps: {
                            within: !0,
                            ...H
                        },
                        "aria-posinset": m,
                        "aria-setsize": E,
                        children: (0, l.jsx)(h.Interactive, {
                            as: "div",
                            selected: t,
                            className: i(s, B.interactive, B.linkButton, {
                                [B.interactiveSelected]: t
                            }),
                            children: (0, l.jsxs)(u.Link, {
                                to: {
                                    pathname: e,
                                    state: d
                                },
                                className: B.link,
                                ...g,
                                children: [(0, l.jsx)(y.default, {
                                    selected: t,
                                    muted: !1,
                                    avatar: (0, l.jsx)(n, {
                                        className: i(B.linkButtonIcon, a)
                                    }),
                                    name: r,
                                    innerClassName: B.avatarWithText
                                }), o]
                            })
                        })
                    })
                }
            }

            function W(e) {
                let {
                    channel: t,
                    selected: s = !1,
                    user: r,
                    activities: c,
                    applicationStream: T,
                    isTyping: A,
                    status: v,
                    isMobile: R,
                    "aria-posinset": b,
                    "aria-setsize": j
                } = e, [G, K] = a.useState(!1), W = a.useRef(null), Z = a.useRef(null), {
                    avatarSrc: z,
                    avatarDecorationSrc: X,
                    eventHandlers: Q
                } = (0, N.default)({
                    user: r,
                    size: h.AvatarSizes.SIZE_32,
                    animateOnHover: !(s || G)
                }), q = (0, f.useStateFromStores)([x.default], () => x.default.isChannelMuted(t.getGuildId(), t.id)), J = (0, f.useStateFromStores)([L.default], () => L.default.getMentionCount(t.id) > 0), $ = (0, I.default)(t), ee = (0, f.useStateFromStores)([S.default], () => S.default.isFavorite(t.id)), et = () => {
                    K(!0)
                }, en = () => {
                    K(!1)
                }, el = function(e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    null != e && (e.preventDefault(), e.stopPropagation()), C.default.closePrivateChannel(t.id, s, n)
                }, ea = () => {
                    C.default.preload(w.ME, t.id)
                }, es = e => {
                    e.stopPropagation()
                }, ei = e => {
                    if (e.target === e.currentTarget) {
                        var t;
                        null === (t = W.current) || void 0 === t || t.click()
                    }
                }, er = e => {
                    t.isMultiUserDM() ? (0, p.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("493015").then(n.bind(n, "493015"));
                        return n => (0, l.jsx)(e, {
                            ...n,
                            channel: t,
                            selected: s
                        })
                    }, {
                        noBlurEvent: !0
                    }) : (0, p.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("130074").then(n.bind(n, "130074"));
                        return n => (0, l.jsx)(e, {
                            ...n,
                            user: r,
                            channel: t,
                            channelSelected: s
                        })
                    })
                }, eo = e => {
                    e.preventDefault(), e.stopPropagation();
                    let n = F.default.Messages.LEAVE_GROUP_DM_TITLE.format({
                            name
                        }),
                        a = F.default.Messages.LEAVE_GROUP_DM_BODY.format({
                            name
                        });
                    t.isManaged() && (n = F.default.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
                        name
                    }), a = F.default.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
                        name
                    })), (0, h.openModal)(e => (0, l.jsx)(P.default, {
                        header: n,
                        body: a,
                        onSubmit: el,
                        ...e
                    }))
                }, eu = () => {
                    let e = {
                        className: B.activity,
                        textClassName: B.activityText,
                        emojiClassName: B.activityEmoji
                    };
                    return t.isSystemDM() ? (0, l.jsx)("div", {
                        className: B.subtext,
                        children: F.default.Messages.SYSTEM_DM_ACTIVITY_TEXT
                    }) : t.isMultiUserDM() ? (0, l.jsx)("div", {
                        className: B.subtext,
                        children: F.default.Messages.MEMBERS_HEADER.format({
                            members: t.recipients.length + 1
                        })
                    }) : null != c ? (0, l.jsx)(U.default, {
                        ...e,
                        activities: c,
                        applicationStream: T,
                        animate: G,
                        hideTooltip: !0,
                        user: r
                    }) : null
                }, ed = () => {
                    if (t.isMultiUserDM()) return (0, l.jsx)(V, {
                        ...Q,
                        src: (0, g.getChannelIconURL)(t),
                        "aria-hidden": !0,
                        className: B.avatar,
                        size: h.AvatarSizes.SIZE_32
                    });
                    o(null != r, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
                    let e = null;
                    return !r.isSystemUser() && (e = (0, m.default)(c) ? w.StatusTypes.STREAMING : v), (0, l.jsx)(V, {
                        ...Q,
                        size: h.AvatarSizes.SIZE_32,
                        src: z,
                        avatarDecoration: X,
                        status: e,
                        isMobile: R,
                        isTyping: A,
                        className: B.avatar,
                        "aria-label": r.username,
                        statusTooltip: !0
                    })
                }, ec = t.isMultiUserDM(), ef = t.isSystemDM(), eh = (0, _.systemDMRedesignEnabled)();
                return (0, l.jsx)(d.ListNavigatorItem, {
                    id: t.id,
                    children: e => {
                        let {
                            role: n,
                            ...a
                        } = e;
                        return (0, l.jsx)(D.default, {
                            className: B.channel,
                            role: n,
                            focusProps: {
                                ...H,
                                focusTarget: W,
                                ringTarget: Z
                            },
                            ref: Z,
                            onMouseEnter: et,
                            onMouseLeave: en,
                            onMouseDown: ea,
                            onContextMenu: er,
                            "aria-setsize": j,
                            "aria-posinset": b,
                            children: (0, l.jsxs)(h.Interactive, {
                                className: i(B.interactive, {
                                    [B.interactiveSystemDM]: eh && ef,
                                    [B.interactiveSelected]: s
                                }),
                                as: "div",
                                onClick: ei,
                                muted: q,
                                selected: s,
                                children: [(0, l.jsx)(u.Link, {
                                    innerRef: W,
                                    to: w.Routes.CHANNEL(w.ME, t.id),
                                    className: B.link,
                                    "aria-label": (0, E.default)({
                                        channel: t,
                                        unread: J
                                    }),
                                    ...a,
                                    children: (0, l.jsx)(y.default, {
                                        avatar: ed(),
                                        selected: s,
                                        highlighted: J,
                                        muted: null != q && q,
                                        subText: eu(),
                                        name: (0, l.jsx)(O.default, {
                                            children: $
                                        }),
                                        decorators: t.isSystemDM() ? (0, l.jsx)(M.default, {
                                            className: B.decorator,
                                            type: M.default.Types.SYSTEM_DM,
                                            verified: !0
                                        }) : null
                                    })
                                }), ee ? (0, l.jsx)(Y, {}) : null, !ef && (0, l.jsx)(k, {
                                    "aria-label": ec ? F.default.Messages.LEAVE_GROUP_DM : F.default.Messages.CLOSE_DM,
                                    onClick: ec ? eo : el,
                                    onMouseDown: es
                                })]
                            })
                        })
                    }
                })
            }
            var Z = e => {
                let {
                    channel: t,
                    selected: n,
                    ...a
                } = e, s = (0, f.useStateFromStores)([R.default], () => R.default.getUser(t.getRecipientId())), i = null == s ? void 0 : s.id, r = (0, f.useStateFromStoresObject)([A.default, T.default], () => ({
                    status: null != i ? A.default.getStatus(i) : null,
                    activities: null != i ? A.default.getActivities(i) : null,
                    applicationStream: null != i ? T.default.getAnyStreamForUser(i) : null,
                    isMobile: null != i && A.default.isMobileOnline(i)
                }), [i]), o = (0, f.useStateFromStores)([v.default], () => null != s ? v.default.isTyping(t.id, t.getRecipientId()) : void 0);
                return t.isMultiUserDM() ? (0, l.jsx)(W, {
                    channel: t,
                    selected: n,
                    ...a
                }) : (0, l.jsx)(W, {
                    channel: t,
                    selected: n,
                    user: s,
                    isTyping: o,
                    ...a,
                    ...r
                })
            }
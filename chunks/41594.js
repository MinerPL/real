            "use strict";
            E.r(e), E.d(e, {
                ChannelItemIcon: function() {
                    return M
                },
                default: function() {
                    return R
                }
            }), E("222007");
            var C = E("37983"),
                n = E("884691"),
                l = E("414456"),
                t = E.n(l),
                F = E("974667"),
                i = E("446674"),
                u = E("77078"),
                a = E("430568"),
                o = E("789394"),
                r = E("843962"),
                D = E("679653"),
                d = E("419830"),
                s = E("565298"),
                A = E("965381"),
                c = E("305961"),
                _ = E("824563"),
                N = E("191542"),
                f = E("697218"),
                m = E("37785"),
                T = E("98292"),
                h = E("587974"),
                v = E("50885"),
                S = E("49111"),
                I = E("133335"),
                p = E("404135");
            let L = (B, e, E) => {
                    n.useLayoutEffect(() => {
                        let C = null;
                        return B > 0 && (clearTimeout(C), C = setTimeout(() => {
                            E(), clearTimeout(C)
                        }, 4 * e)), () => clearTimeout(C)
                    }, [B, e, E])
                },
                g = {
                    SELECTED: p.modeSelected,
                    CONNECTED: p.modeConnected,
                    UNREAD_IMPORTANT: p.modeUnreadImportant,
                    UNREAD_LESS_IMPORTANT: p.modeUnreadLessImportant,
                    MUTED: p.modeMuted,
                    LOCKED: p.modeLocked
                };

            function O(B) {
                B.preventDefault(), B.stopPropagation()
            }
            let U = v.default.getEnableHardwareAcceleration() ? u.AnimatedAvatar : u.Avatar;

            function y(B) {
                let {
                    channel: e
                } = B;
                return (0, C.jsx)(U, {
                    src: (0, r.getChannelIconURL)(e),
                    "aria-hidden": !0,
                    size: u.AvatarSizes.SIZE_20
                })
            }

            function j(B) {
                let {
                    channel: e
                } = B, E = (0, i.useStateFromStores)([f.default], () => f.default.getUser(null == e ? void 0 : e.recipients[0])), n = (0, i.useStateFromStores)([N.default], () => !(null == E || null == e || e.isMultiUserDM()) && null != N.default.getTypingUsers(null == e ? void 0 : e.id)[null == E ? void 0 : E.id]), {
                    status: l,
                    isMobile: t
                } = (0, i.useStateFromStoresObject)([_.default], () => null == E || null == e || e.isMultiUserDM() ? {
                    status: null,
                    isMobile: !1
                } : {
                    status: _.default.getStatus(E.id),
                    isMobile: _.default.isMobileOnline(E.id)
                });
                return (0, C.jsx)(U, {
                    size: u.AvatarSizes.SIZE_20,
                    src: null == E ? void 0 : E.getAvatarURL(void 0, 40),
                    status: l,
                    isMobile: t,
                    isTyping: n,
                    "aria-label": null == E ? void 0 : E.username,
                    statusTooltip: !0
                })
            }
            let M = B => {
                let {
                    className: e,
                    channel: E,
                    guild: n,
                    locked: l,
                    hasActiveThreads: F,
                    withGuildIcon: a
                } = B, o = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(E.guild_id), [E.guild_id]), r = a ? null == o ? void 0 : o.getIconURL(48) : null, D = null != r, s = function(B, e, E) {
                    switch (B.type) {
                        case S.ChannelTypes.DM:
                            return function() {
                                return (0, C.jsx)(j, {
                                    channel: B
                                })
                            };
                        case S.ChannelTypes.GROUP_DM:
                            return function() {
                                return (0, C.jsx)(y, {
                                    channel: B
                                })
                            };
                        default:
                            return (0, d.getChannelIconComponent)(B, e, E)
                    }
                }(E, n, {
                    locked: l,
                    hasActiveThreads: F
                });
                if (null == s) return null;
                let A = (0, d.getChannelIconTooltipText)(E, n, l, F),
                    _ = D && null != o ? "".concat(o.name, " - ").concat(A, " icon") : "".concat(A, " icon");
                return (0, C.jsx)(u.Tooltip, {
                    text: A,
                    delay: 500,
                    children: B => (0, C.jsxs)("div", {
                        ...B,
                        role: "img",
                        "aria-label": _,
                        className: t(p.iconContainer, {
                            [p.iconContainerWithGuildIcon]: D
                        }),
                        children: [D && (0, C.jsx)(h.default, {
                            mask: h.MaskIDs.GUILD_ICON_WITH_CHANNEL_TYPE,
                            children: (0, C.jsx)("img", {
                                alt: "",
                                src: r,
                                className: p.channelGuildIcon
                            })
                        }), (0, C.jsx)(s, {
                            className: t(p.icon, {
                                [p.iconWithGuildIcon]: D
                            }, e)
                        })]
                    })
                })
            };

            function R(B) {
                var e;
                let {
                    channel: E,
                    name: l,
                    muted: i,
                    selected: r,
                    connected: d,
                    unread: c,
                    locked: _,
                    hasActiveThreads: N,
                    onClick: f,
                    onMouseDown: h,
                    onMouseUp: v,
                    onContextMenu: U,
                    connectDragPreview: y,
                    className: j,
                    iconClassName: R,
                    subtitle: G,
                    subtitleColor: x,
                    enableHangStatus: H,
                    channel: {
                        type: b
                    },
                    onMouseEnter: P,
                    onMouseLeave: w,
                    "aria-label": k,
                    children: V,
                    guild: J,
                    channelTypeOverride: K,
                    forceInteractable: W,
                    mentionCount: z,
                    unreadMode: Y,
                    isFavoriteSuggestion: Q,
                    withGuildIcon: X
                } = B, {
                    enabled: Z,
                    left: q
                } = o.ChannelEmojisExperiment.useExperiment({
                    location: "337985_1"
                }, {
                    autoTrackExposure: !1
                }), $ = Y === I.UnreadMode.IMPORTANT || null != z && z > 0, {
                    role: BB,
                    ...Be
                } = (0, F.useListItem)(E.id), BE = n.useRef(null), BC = n.useRef(null), Bn = (0, s.default)(E), Bl = S.Routes.CHANNEL(Bn, E.id), Bt = (0, D.default)(E), BF = E.isGuildVocal(), {
                    reducedMotion: Bi
                } = n.useContext(u.AccessibilityPreferencesContext), Bu = Bi.enabled, [Ba, Bo] = n.useState([]);
                L(Ba.length, 500, () => {
                    Bo([])
                });
                let Br = B => {
                        if (Bu) return;
                        let e = B.currentTarget.getBoundingClientRect(),
                            E = e.width > e.height ? e.width : e.height,
                            C = B.pageX - e.x - E / 2,
                            n = B.pageY - e.y - E / 2;
                        Bo([...Ba, {
                            x: C,
                            y: n,
                            size: E
                        }])
                    },
                    {
                        emoji: BD,
                        color: Bd
                    } = (0, A.useChannelEmojiAndColor)(E),
                    Bs = Z ? (0, C.jsx)(a.default, {
                        emojiName: BD.name,
                        emojiId: BD.id,
                        src: BD.url,
                        className: p.twemoji
                    }) : null,
                    BA = (0, C.jsx)("div", {
                        className: t({
                            [p.favoritesSuggestion]: Q
                        }),
                        children: (0, C.jsxs)(m.default, {
                            role: BF && !d ? "button" : "link",
                            href: BF ? void 0 : Bl,
                            target: "_blank",
                            ref: BE,
                            className: t(p.link, {
                                [p.linkWithChannelEmoji]: null != Bs
                            }),
                            onMouseDown: B => {
                                Z && 0 === B.button && Br(B)
                            },
                            onClick: () => null == f ? void 0 : f(E),
                            ...Be,
                            "aria-label": k,
                            focusProps: {
                                enabled: !1
                            },
                            children: [Z && (0, C.jsx)("div", {
                                className: p.emojiColorFill,
                                style: {
                                    backgroundColor: Bd,
                                    opacity: r ? 1 : 0
                                }
                            }), (0, C.jsxs)("div", {
                                className: p.linkTop,
                                children: [null != Bs && q && (0, C.jsx)("div", {
                                    className: t(p.channelEmoji, p.channelEmojiLeftOfIcon),
                                    style: {
                                        backgroundColor: Bd
                                    },
                                    children: Bs
                                }), (0, C.jsx)(M, {
                                    className: R,
                                    channel: E,
                                    guild: J,
                                    hasActiveThreads: N,
                                    locked: _,
                                    withGuildIcon: X
                                }), null != Bs && !q && (0, C.jsx)("div", {
                                    className: t(p.channelEmoji, p.channelEmojiRightOfIcon),
                                    style: {
                                        backgroundColor: Bd
                                    },
                                    children: Bs
                                }), (0, C.jsx)(T.default, {
                                    className: t(p.name),
                                    "aria-hidden": !0,
                                    children: null == l ? Bt : l
                                }), n.Children.count(V) > 0 ? (0, C.jsx)("div", {
                                    onClick: O,
                                    className: p.children,
                                    children: V
                                }) : null]
                            }), H || null == G ? null : (0, C.jsx)("div", {
                                className: p.linkBottom,
                                children: (0, C.jsx)(u.Text, {
                                    color: null != x ? x : "text-muted",
                                    variant: "text-xs/medium",
                                    className: p.subtitle,
                                    children: G
                                })
                            }), Z && Ba.length > 0 && Ba.map((B, e) => (0, C.jsx)("span", {
                                className: p.ripple,
                                style: {
                                    top: B.y,
                                    left: B.x,
                                    width: B.size,
                                    height: B.size,
                                    backgroundColor: Bd,
                                    animationDuration: "".concat(500, "ms"),
                                    opacity: .36
                                }
                            }, "ripple-".concat(e)))]
                        })
                    });
                return (0, C.jsx)(u.FocusRing, {
                    focusTarget: BE,
                    ringTarget: BC,
                    offset: {
                        top: 2,
                        bottom: 2,
                        right: 4
                    },
                    children: (0, C.jsxs)("div", {
                        className: t(j, null != f || null != v || null != h || W ? p.wrapper : p.notInteractive, (() => {
                            if (r && !Z) return g.SELECTED;
                            if (d) return g.CONNECTED;
                            if (_) return g.LOCKED;
                            if (i) return g.MUTED;
                            if (c) return $ ? g.UNREAD_IMPORTANT : g.UNREAD_LESS_IMPORTANT;
                            return null
                        })(), function(B) {
                            switch (B) {
                                case S.ChannelTypes.GUILD_STAGE_VOICE:
                                case S.ChannelTypes.GUILD_VOICE:
                                    return p.typeVoice;
                                case S.ChannelTypes.ANNOUNCEMENT_THREAD:
                                case S.ChannelTypes.PUBLIC_THREAD:
                                case S.ChannelTypes.PRIVATE_THREAD:
                                    return p.typeThread;
                                case S.ChannelTypes.GUILD_ANNOUNCEMENT:
                                case S.ChannelTypes.GUILD_TEXT:
                                case S.ChannelTypes.GUILD_STORE:
                                case S.ChannelTypes.GUILD_FORUM:
                                case S.ChannelTypes.GUILD_MEDIA:
                                default:
                                    return p.typeDefault
                            }
                        }(null != K ? K : b)),
                        onMouseUp: B => null == v ? void 0 : v(B, E),
                        onMouseDown: B => null == h ? void 0 : h(B, E),
                        onContextMenu: B => null == U ? void 0 : U(B, E),
                        onMouseEnter: P,
                        onMouseLeave: w,
                        children: [i || !c || r && !BF ? null : (0, C.jsx)("div", {
                            className: t(p.unread, $ ? p.unreadImportant : void 0)
                        }), null !== (e = null == y ? void 0 : y(BA)) && void 0 !== e ? e : BA]
                    })
                })
            }
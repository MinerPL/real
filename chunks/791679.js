            "use strict";
            n.r(t), n.d(t, {
                AddEntryCard: function() {
                    return R
                },
                default: function() {
                    return L
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("446674"),
                u = n("77078"),
                o = n("272030"),
                d = n("851387"),
                c = n("407063"),
                f = n("239380"),
                h = n("813006"),
                p = n("305961"),
                m = n("580357"),
                E = n("476263"),
                C = n("433487"),
                S = n("987772"),
                g = n("587974"),
                _ = n("149279"),
                I = n("315102"),
                T = n("187163"),
                v = n("175703"),
                x = n("49111"),
                N = n("782340"),
                A = n("477362"),
                M = n("712967");
            let R = e => {
                let {
                    onClick: t
                } = e;
                return (0, a.jsxs)(u.Clickable, {
                    onClick: t,
                    className: A.addEntryCard,
                    children: [(0, a.jsx)("img", {
                        alt: "",
                        src: M
                    }), (0, a.jsx)(u.Text, {
                        variant: "text-sm/semibold",
                        color: "header-primary",
                        className: A.addServerText,
                        children: N.default.Messages.HUB_ADD_SERVER_CTA
                    })]
                })
            };

            function j(e) {
                let {
                    entry: t
                } = e, [s, r] = l.useState(!1), {
                    canEdit: o
                } = (0, T.default)(t);
                return (0, a.jsx)("div", {
                    className: i(A.actionButtonsContainer, {
                        [A.forceButtonsShow]: s
                    }),
                    children: (0, a.jsxs)(_.default, {
                        children: [o ? (0, a.jsx)(u.Tooltip, {
                            text: N.default.Messages.HUB_ENTRY_UPDATE,
                            hideOnClick: !0,
                            children: e => {
                                let {
                                    onClick: l,
                                    ...s
                                } = e;
                                return (0, a.jsx)(_.Button, {
                                    ...s,
                                    onClick: () => {
                                        null == l || l(), (0, u.openModalLazy)(async () => {
                                            let {
                                                default: e
                                            } = await n.el("895792").then(n.bind(n, "895792"));
                                            return n => (0, a.jsx)(e, {
                                                ...n,
                                                entry: t
                                            })
                                        })
                                    },
                                    "aria-label": N.default.Messages.HUB_ENTRY_UPDATE,
                                    children: (0, a.jsx)(S.default, {
                                        className: A.overflowIcon
                                    })
                                })
                            }
                        }) : null, (0, a.jsx)(v.default, {
                            onRequestOpen: () => r(!0),
                            onRequestClose: () => r(!1),
                            entry: t,
                            hideEditButton: !0,
                            children: e => {
                                let {
                                    onClick: t,
                                    ...n
                                } = e;
                                return (0, a.jsx)(u.Tooltip, {
                                    text: N.default.Messages.MORE,
                                    hideOnClick: !0,
                                    children: e => {
                                        let {
                                            onClick: l,
                                            ...s
                                        } = e;
                                        return (0, a.jsx)(_.Button, {
                                            ...n,
                                            ...s,
                                            onClick: e => {
                                                null == l || l(), t(e)
                                            },
                                            "aria-label": N.default.Messages.MORE,
                                            children: (0, a.jsx)(C.default, {
                                                className: A.overflowIcon
                                            })
                                        })
                                    }
                                })
                            }
                        })]
                    })
                })
            }
            var L = e => {
                var t;
                let {
                    entry: s
                } = e, [i, C] = l.useState(!1), S = (0, r.useStateFromStores)([p.default], () => p.default.getGuild(s.guildId)), _ = null != S, T = async () => {
                    C(!0);
                    try {
                        _ ? (0, f.transitionToGuild)(s.guildId) : await d.default.joinGuild(s.guildId, {
                            source: x.JoinGuildSources.DIRECTORY_ENTRY
                        })
                    } finally {
                        C(!1)
                    }
                }, v = I.default.getGuildSplashURL({
                    id: s.guildId,
                    splash: s.splash,
                    size: 300 * (0, c.getDevicePixelRatio)()
                }), M = null !== (t = I.default.getGuildIconURL({
                    id: s.guildId,
                    icon: s.icon,
                    size: 40
                })) && void 0 !== t ? t : void 0, R = N.default.Messages.JOIN;
                return _ && (R = N.default.Messages.HUB_DIRECTORY_CARD_JOINED_GUILD_BUTTON), (0, a.jsxs)("div", {
                    className: A.card,
                    onContextMenu: e => {
                        (0, o.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("184727").then(n.bind(n, "184727"));
                            return t => (0, a.jsx)(e, {
                                ...t,
                                entry: s
                            })
                        })
                    },
                    children: [(0, a.jsxs)("div", {
                        className: A.cardHeader,
                        children: [(0, a.jsx)("div", {
                            className: A.splash,
                            children: null != v && (0, a.jsx)("img", {
                                src: v,
                                alt: "",
                                className: A.splashImage
                            })
                        }), (0, a.jsx)("div", {
                            className: A.guildIcon,
                            children: (0, a.jsx)(g.default, {
                                mask: g.default.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, a.jsx)("div", {
                                    className: A.iconMask,
                                    children: (0, a.jsx)(E.default, {
                                        className: A.icon,
                                        iconSrc: M,
                                        guild: new h.default(s),
                                        size: E.default.Sizes.MEDIUM,
                                        active: !0
                                    })
                                })
                            })
                        })]
                    }), (0, a.jsxs)("div", {
                        className: A.guildInfo,
                        children: [(0, a.jsxs)("div", {
                            className: A.title,
                            children: [(0, a.jsx)(m.default, {
                                className: A.guildBadge,
                                guild: s,
                                tooltipColor: u.Tooltip.Colors.PRIMARY
                            }), (0, a.jsx)(u.Text, {
                                className: A.guildName,
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: s.name
                            })]
                        }), (0, a.jsx)(u.Text, {
                            className: A.description,
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: s.description
                        }), (0, a.jsxs)("div", {
                            className: A.memberInfo,
                            children: [null != s.approximatePresenceCount && (0, a.jsxs)("div", {
                                className: A.memberCount,
                                children: [(0, a.jsx)("div", {
                                    className: A.dotOnline
                                }), (0, a.jsx)(u.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-secondary",
                                    children: N.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                        membersOnline: s.approximatePresenceCount
                                    })
                                })]
                            }), null != s.approximateMemberCount && (0, a.jsxs)("div", {
                                className: A.memberCount,
                                children: [(0, a.jsx)("div", {
                                    className: A.dotOffline
                                }), (0, a.jsx)(u.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-secondary",
                                    children: N.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                        count: s.approximateMemberCount
                                    })
                                })]
                            })]
                        }), (0, a.jsx)(u.Button, {
                            submitting: i,
                            className: A.joinButton,
                            color: _ ? u.Button.Colors.PRIMARY : u.Button.Colors.GREEN,
                            onClick: T,
                            children: R
                        })]
                    }), (0, a.jsx)(j, {
                        entry: s
                    })]
                })
            }
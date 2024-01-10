            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("446674"),
                s = n("819855"),
                a = n("77078"),
                o = n("87657"),
                u = n("841098"),
                d = n("376556"),
                c = n("572943"),
                f = n("627490"),
                E = n("745633"),
                _ = n("83900"),
                p = n("71216"),
                h = n("741919"),
                S = n("387111"),
                T = n("178406"),
                m = n("835257"),
                C = n("782340"),
                M = n("236807");
            let g = i.memo(function() {
                    return (0, l.jsx)(a.Tooltip, {
                        text: C.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN_TOOLTIP,
                        children: e => (0, l.jsx)(a.Text, {
                            ...e,
                            variant: "text-sm/medium",
                            color: "text-muted",
                            className: M.unknownInvite,
                            children: C.default.Messages.MEMBERS_SAFETY_UNKNOWN_INVITE_CODE
                        })
                    })
                }),
                v = e => {
                    switch (e) {
                        case m.IntegrationType.TWITCH:
                            return C.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_TWITCH;
                        case m.IntegrationType.YOUTUBE:
                            return C.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_YOUTUBE;
                        default:
                            return C.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION
                    }
                },
                I = e => {
                    let t = d.default.get((0, c.useLegacyPlatformType)(e)),
                        n = (0, u.default)();
                    return null != t && [m.IntegrationType.TWITCH, m.IntegrationType.YOUTUBE].includes(e) ? "url('".concat((0, s.isThemeDark)(n) ? t.icon.darkSVG : t.icon.lightSVG, "')") : null
                },
                A = {
                    [m.JoinSourceType.UNSPECIFIED]: {
                        type: m.JoinSourceType.UNSPECIFIED,
                        getJoinTypeLabel: () => C.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN,
                        icon: null,
                        hasTooltip: !1
                    },
                    [m.JoinSourceType.BOT]: {
                        type: m.JoinSourceType.BOT,
                        getJoinTypeLabel: () => C.default.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT,
                        icon: (0, l.jsx)(p.default, {
                            className: M.robot,
                            height: 12,
                            width: 12
                        }),
                        hasTooltip: !0
                    },
                    [m.JoinSourceType.INTEGRATION]: {
                        type: m.JoinSourceType.INTEGRATION,
                        getJoinTypeLabel: () => C.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION,
                        icon: (0, l.jsx)(h.default, {
                            height: 12,
                            width: 12
                        }),
                        hasTooltip: !1
                    },
                    [m.JoinSourceType.DISCOVERY]: {
                        type: m.JoinSourceType.DISCOVERY,
                        getJoinTypeLabel: () => C.default.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY,
                        icon: (0, l.jsx)(f.default, {
                            height: 12,
                            width: 12
                        }),
                        hasTooltip: !1
                    },
                    [m.JoinSourceType.HUB]: {
                        type: m.JoinSourceType.HUB,
                        getJoinTypeLabel: () => C.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB,
                        icon: (0, l.jsx)(E.default, {
                            height: 12,
                            width: 12
                        }),
                        hasTooltip: !1
                    },
                    [m.JoinSourceType.INVITE]: {
                        type: m.JoinSourceType.INVITE,
                        getJoinTypeLabel: e => e,
                        icon: null,
                        hasTooltip: !0
                    },
                    [m.JoinSourceType.VANITY_URL]: {
                        type: m.JoinSourceType.VANITY_URL,
                        getJoinTypeLabel: e => e,
                        icon: (0, l.jsx)(_.default, {
                            height: 12,
                            width: 12
                        }),
                        hasTooltip: !1
                    }
                };

            function L(e) {
                var t;
                let {
                    children: n,
                    hasTooltip: i,
                    inviterMember: r,
                    joinSourceType: s
                } = e;
                return i && (null == r ? void 0 : r.user) != null ? (0, l.jsx)(a.Tooltip, {
                    "aria-label": C.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED_TOOLTIP,
                    tooltipContentClassName: M.roleTooltip,
                    allowOverflow: !0,
                    text: (0, l.jsxs)("div", {
                        className: M.inviterTooltipContainer,
                        children: [(0, l.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            children: s !== m.JoinSourceType.BOT ? C.default.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : C.default.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP
                        }), (0, l.jsx)(o.default, {
                            user: r.user,
                            size: a.AvatarSizes.SIZE_16
                        }), (0, l.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            children: (0, l.jsx)(a.NameWithRole, {
                                name: S.default.getName(r.guildId, null, r.user),
                                color: null !== (t = r.colorString) && void 0 !== t ? t : void 0
                            })
                        })]
                    }),
                    children: e => (0, l.jsx)(l.Fragment, {
                        children: n(e)
                    })
                }) : (0, l.jsx)(l.Fragment, {
                    children: n({})
                })
            }

            function N(e) {
                let {
                    type: t
                } = e, n = I(t);
                return null == n ? null : (0, l.jsx)("div", {
                    className: M.integrationIcon,
                    style: {
                        width: 12,
                        height: 12,
                        backgroundImage: n
                    }
                })
            }

            function R(e) {
                let {
                    sourceInviteCode: t,
                    joinSourceType: n,
                    integrationType: i,
                    ...r
                } = e, s = null != n ? A[n] : null, o = n === m.JoinSourceType.INTEGRATION && null != i;
                switch (!0) {
                    case null == s:
                    case null == n:
                    case n === m.JoinSourceType.UNSPECIFIED:
                        return (0, l.jsx)(g, {
                            ...r
                        });
                    case null != i && o:
                        return (0, l.jsxs)("div", {
                            className: M.inviteContainer,
                            ...r,
                            children: [(0, l.jsx)(N, {
                                type: i
                            }), (0, l.jsx)(a.Text, {
                                variant: "text-sm/medium",
                                children: v(i)
                            })]
                        });
                    case null != s:
                        return (0, l.jsxs)("div", {
                            className: M.inviteContainer,
                            ...r,
                            children: [null == s ? void 0 : s.icon, (0, l.jsx)(a.Text, {
                                variant: "text-sm/medium",
                                children: null == s ? void 0 : s.getJoinTypeLabel(null != t ? t : void 0)
                            })]
                        });
                    default:
                        return (0, l.jsx)(g, {
                            ...r
                        })
                }
            }
            var x = i.memo(function(e) {
                var t, n;
                let {
                    userId: i,
                    guildId: s
                } = e, a = (0, r.useStateFromStores)([T.default], () => T.default.getEnhancedMember(s, i), [s, i]), o = null !== (t = null == a ? void 0 : a.inviterId) && void 0 !== t ? t : "", u = (0, r.useStateFromStores)([T.default], () => T.default.getEnhancedMember(i, o), [o, i]);
                if (null == a) return (0, l.jsx)(g, {});
                let {
                    sourceInviteCode: d,
                    joinSourceType: c,
                    integrationType: f
                } = a, E = null != c ? A[c] : null, _ = null !== (n = null == E ? void 0 : E.hasTooltip) && void 0 !== n && n;
                return (0, l.jsx)(L, {
                    hasTooltip: _,
                    inviterMember: u,
                    joinSourceType: c,
                    children: e => (0, l.jsx)(R, {
                        sourceInviteCode: d,
                        joinSourceType: c,
                        integrationType: f,
                        ...e
                    })
                })
            })
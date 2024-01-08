            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return S
                }
            });
            var a = l("37983"),
                n = l("884691"),
                s = l("819855"),
                i = l("77078"),
                o = l("87657"),
                d = l("841098"),
                r = l("376556"),
                u = l("572943"),
                C = l("627490"),
                c = l("745633"),
                f = l("83900"),
                m = l("71216"),
                E = l("741919"),
                M = l("387111"),
                T = l("835257"),
                h = l("782340"),
                x = l("236807");
            let _ = n.memo(function() {
                    return (0, a.jsx)(i.Tooltip, {
                        text: h.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN_TOOLTIP,
                        children: e => (0, a.jsx)(i.Text, {
                            ...e,
                            variant: "text-sm/medium",
                            color: "text-muted",
                            className: x.unknownInvite,
                            children: h.default.Messages.MEMBERS_SAFETY_UNKNOWN_INVITE_CODE
                        })
                    })
                }),
                H = e => {
                    switch (e) {
                        case T.IntegrationType.TWITCH:
                            return h.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_TWITCH;
                        case T.IntegrationType.YOUTUBE:
                            return h.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_YOUTUBE;
                        default:
                            return h.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION
                    }
                },
                A = e => {
                    let t = r.default.get((0, u.useLegacyPlatformType)(e)),
                        l = (0, d.default)();
                    return null != t && [T.IntegrationType.TWITCH, T.IntegrationType.YOUTUBE].includes(e) ? "url('".concat((0, s.isThemeDark)(l) ? t.icon.darkSVG : t.icon.lightSVG, "')") : null
                },
                N = {
                    [T.JoinSourceType.UNSPECIFIED]: {
                        type: T.JoinSourceType.UNSPECIFIED,
                        getJoinTypeLabel: () => h.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN,
                        icon: null,
                        hasTooltip: !1
                    },
                    [T.JoinSourceType.BOT]: {
                        type: T.JoinSourceType.BOT,
                        getJoinTypeLabel: () => h.default.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT,
                        icon: (0, a.jsx)(m.default, {
                            className: x.robot,
                            height: 12,
                            width: 12
                        }),
                        hasTooltip: !0
                    },
                    [T.JoinSourceType.INTEGRATION]: {
                        type: T.JoinSourceType.INTEGRATION,
                        getJoinTypeLabel: () => h.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION,
                        icon: (0, a.jsx)(E.default, {
                            height: 12,
                            width: 12
                        }),
                        hasTooltip: !1
                    },
                    [T.JoinSourceType.DISCOVERY]: {
                        type: T.JoinSourceType.DISCOVERY,
                        getJoinTypeLabel: () => h.default.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY,
                        icon: (0, a.jsx)(C.default, {
                            height: 12,
                            width: 12
                        }),
                        hasTooltip: !1
                    },
                    [T.JoinSourceType.HUB]: {
                        type: T.JoinSourceType.HUB,
                        getJoinTypeLabel: () => h.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB,
                        icon: (0, a.jsx)(c.default, {
                            height: 12,
                            width: 12
                        }),
                        hasTooltip: !1
                    },
                    [T.JoinSourceType.INVITE]: {
                        type: T.JoinSourceType.INVITE,
                        getJoinTypeLabel: e => e,
                        icon: null,
                        hasTooltip: !0
                    },
                    [T.JoinSourceType.VANITY_URL]: {
                        type: T.JoinSourceType.VANITY_URL,
                        getJoinTypeLabel: e => e,
                        icon: (0, a.jsx)(f.default, {
                            height: 12,
                            width: 12
                        }),
                        hasTooltip: !1
                    }
                };

            function p(e) {
                var t;
                let {
                    children: l,
                    hasTooltip: n,
                    inviterUser: s,
                    inviterMember: d,
                    joinSourceType: r
                } = e;
                return n ? (0, a.jsx)(i.Tooltip, {
                    "aria-label": h.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED_TOOLTIP,
                    tooltipContentClassName: x.roleTooltip,
                    allowOverflow: !0,
                    text: (0, a.jsxs)("div", {
                        className: x.inviterTooltipContainer,
                        children: [(0, a.jsx)(i.Text, {
                            variant: "text-sm/medium",
                            children: r !== T.JoinSourceType.BOT ? h.default.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : h.default.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP
                        }), (0, a.jsx)(o.default, {
                            user: s,
                            size: i.AvatarSizes.SIZE_16
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-sm/medium",
                            children: (0, a.jsx)(i.NameWithRole, {
                                name: M.default.getName(d.guildId, null, s),
                                color: null !== (t = d.colorString) && void 0 !== t ? t : void 0
                            })
                        })]
                    }),
                    children: e => (0, a.jsx)(a.Fragment, {
                        children: l(e)
                    })
                }) : (0, a.jsx)(a.Fragment, {
                    children: l({})
                })
            }

            function g(e) {
                let {
                    type: t
                } = e, l = A(t);
                return null == l ? null : (0, a.jsx)("div", {
                    className: x.integrationIcon,
                    style: {
                        width: 12,
                        height: 12,
                        backgroundImage: l
                    }
                })
            }
            var S = n.memo(function(e) {
                let {
                    inviteCode: t,
                    inviterUser: l,
                    inviterMember: n,
                    joinSourceType: s,
                    integrationType: o
                } = e, d = null != s ? N[s] : null;
                if (null == d) return (0, a.jsx)(_, {});
                switch (!0) {
                    case null == s || s === T.JoinSourceType.UNSPECIFIED:
                        return (0, a.jsx)(_, {});
                    case !d.hasTooltip || d.hasTooltip && (null == n || null == l):
                        if (s === T.JoinSourceType.INTEGRATION && null != o) return (0, a.jsxs)("div", {
                            className: x.inviteContainer,
                            children: [(0, a.jsx)(g, {
                                type: o
                            }), (0, a.jsx)(i.Text, {
                                variant: "text-sm/medium",
                                children: H(o)
                            })]
                        });
                        return (0, a.jsxs)("div", {
                            className: x.inviteContainer,
                            children: [d.icon, (0, a.jsx)(i.Text, {
                                variant: "text-sm/medium",
                                children: d.getJoinTypeLabel(null != t ? t : void 0)
                            })]
                        });
                    case d.hasTooltip:
                        return (0, a.jsx)(p, {
                            hasTooltip: d.hasTooltip,
                            inviterUser: l,
                            inviterMember: n,
                            joinSourceType: s,
                            children: e => (0, a.jsxs)("div", {
                                ...e,
                                className: x.inviteContainer,
                                children: [null == d ? void 0 : d.icon, (0, a.jsx)(i.Text, {
                                    variant: "text-sm/medium",
                                    children: null == d ? void 0 : d.getJoinTypeLabel(null != t ? t : void 0)
                                })]
                            })
                        });
                    default:
                        return (0, a.jsx)(_, {})
                }
            })